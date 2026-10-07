import { test, expect } from '@playwright/test';

// Home journeys are checked through their public controls, at the brief's widths.
test('need selection changes the editorial photo and preserves quote preselection', async ({ page }) => {
  for (const [id, label] of [['documentos', 'Documentos e pequenos volumes'], ['mercadorias', 'Mercadorias e peças'], ['carga', 'Cargas maiores'], ['recorrente', 'Operação para empresas']]) {
    await page.goto('/');
    await page.getByRole('button', { name: label, exact: true }).click();
    await expect(page.locator(`[data-need-photo="${id}"]`)).toBeVisible();
    await expect(page.locator('[data-need-photo]:visible')).toHaveCount(1);
    await page.getByRole('link', { name: `Solicitar orçamento: ${label}`, exact: true }).click();
    await expect(page.locator('#need')).toHaveValue(id);
    if (id === 'recorrente') await expect(page.locator('input[name="operation"][value="recorrente"]')).toBeChecked();
  }
});

test('fleet changes category, capacity, image scale and quote context with keyboard', async ({ page }) => {
  await page.goto('/');
  const tabs = page.locator('[data-scale-tab]');
  const widths: number[] = [];
  for (let i = 0; i < 4; i++) {
    await tabs.nth(i).click();
    await expect(page.getByRole('tab', { selected: true })).toHaveCount(1);
    const panel = page.locator('[data-scale-panel]:visible');
    await expect(panel).toContainText(['20', '400', '1.200', '3.000'][i]);
    widths.push((await panel.locator('.h6-scale-window').boundingBox())!.width);
  }
  expect(widths[0]).toBeLessThan(widths[3]);
  await tabs.nth(3).press('Home');
  await expect(tabs.nth(0)).toBeFocused();
  await tabs.nth(0).press('End');
  await expect(tabs.nth(3)).toBeFocused();
  await page.locator('[data-scale-quote]').click();
  await expect(page.locator('#need')).toHaveValue('carga');
});

test('required widths retain legibility, touch targets, fixed navigation and safe contact placement', async ({ page }) => {
  for (const width of [1440, 1024, 768, 430, 390, 360]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}: overflow`).toBe(true);
    for (const selector of ['[data-need-select]', '[data-scale-tab]', '.h6-need-quote', '[data-home-contact]']) {
      for (const item of await page.locator(selector).all()) {
        const box = await item.boundingBox();
        expect(box!.width).toBeGreaterThanOrEqual(44);
        expect(box!.height).toBeGreaterThanOrEqual(44);
      }
    }
    await page.locator('[data-scale-tab]').last().click();
    await expect(page.locator('[data-home-header]')).toHaveClass(/is-scrolled/);
    const header = await page.locator('[data-home-header]').boundingBox();
    expect(header!.y).toBe(0);
    if (width < 1180) {
      const menu = page.getByRole('button', { name: 'Abrir menu', exact: true });
      await menu.click();
      await expect(page.locator('main')).toHaveAttribute('inert', '');
      await page.keyboard.press('Escape');
      await expect(menu).toBeFocused();
      await expect(page.locator('main')).not.toHaveAttribute('inert', '');
    }
    await page.screenshot({ path: `test-results/home-v6-${width}.png`, fullPage: true });
  }
});

test('reduced motion leaves all editorial content visible and removes photo animations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('[data-scale-tab]').last().click();
  expect(await page.locator('[data-scale-panel]:visible .h6-scale-window').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await expect(page.getByRole('heading', { name: /Sua operação/ })).toBeVisible();
});

test.describe('progressive enhancement', () => {
  test.use({ javaScriptEnabled: false });
  test('all four quote paths and fleet fallback work without JavaScript', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.h6-needs a[href*="necessidade="]')).toHaveCount(5);
    await expect(page.locator('.h6-noscript-fleet a')).toHaveCount(4);
    await expect(page.locator('h1')).toBeVisible();
    await page.locator('.h6-noscript-fleet a').last().click();
    await expect(page.getByRole('heading', { name: 'Converse com a TKS' })).toBeVisible();
  });
});
