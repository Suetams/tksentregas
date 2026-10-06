import { expect, test } from '@playwright/test';

test('four transport paths prefill the existing quote flow', async ({ page }) => {
  const paths = [
    { title: 'Documentos e pequenos volumes', need: 'documentos' },
    { title: 'Mercadorias, caixas e peças', need: 'mercadorias' },
    { title: 'Cargas maiores', need: 'carga' },
    { title: 'Operação empresarial', need: 'recorrente' },
  ];

  for (const path of paths) {
    await page.goto('/');
    const choices = page.locator('.home-needs').getByRole('link');
    await expect(choices).toHaveCount(4);
    await choices.filter({ has: page.getByRole('heading', { name: path.title, exact: true }) }).click();
    await expect(page).toHaveURL(new RegExp(`/orcamento\\?necessidade=${path.need}$`));
    await expect(page.locator('#need')).toHaveValue(path.need);
    if (path.need === 'recorrente') {
      await expect(page.locator('input[name="operation"][value="recorrente"]')).toBeChecked();
    }
  }
});

test('home fleet changes its content and quote category with pointer or keyboard', async ({ page }) => {
  await page.goto('/');
  const fleet = page.getByRole('region', { name: 'Uma solução para cada entrega.' });
  const categories = [
    { name: 'Moto', capacity: 'Até 20 kg', need: 'documentos' },
    { name: 'Utilitário', capacity: 'Até 400 kg', need: 'mercadorias' },
    { name: 'Van / Furgão', capacity: 'Até 1.200 kg', need: 'mercadorias' },
    { name: 'Caminhão 3/4', capacity: 'Até 3.000 kg', need: 'carga' },
  ];

  for (const category of categories) {
    const tab = fleet.getByRole('tab', { name: category.name, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
    await expect(fleet.getByRole('tab', { selected: true })).toHaveCount(1);
    const panel = fleet.getByRole('tabpanel');
    await expect(panel).toHaveCount(1);
    await expect(panel.getByRole('heading', { name: category.capacity, exact: true })).toBeVisible();
    await expect(panel.getByRole('img', { name: `Representação da categoria ${category.name}` })).toBeVisible();
    await expect(panel.getByRole('link', { name: 'Solicitar orçamento' })).toHaveAttribute('href', `/orcamento?necessidade=${category.need}`);
  }

  const truck = fleet.getByRole('tab', { name: 'Caminhão 3/4', exact: true });
  const moto = fleet.getByRole('tab', { name: 'Moto', exact: true });
  await truck.press('ArrowRight');
  await expect(moto).toBeFocused();
  await expect(moto).toHaveAttribute('aria-selected', 'true');
  await moto.press('ArrowLeft');
  await expect(truck).toBeFocused();
  await truck.press('Home');
  await expect(moto).toBeFocused();
  await moto.press('End');
  await expect(truck).toBeFocused();
  await expect(fleet.getByRole('tab', { selected: true })).toHaveCount(1);
  await fleet.getByRole('tabpanel').getByRole('link', { name: 'Solicitar orçamento' }).click();
  await expect(page.locator('#need')).toHaveValue('carga');
});

test('sticky navigation keeps its height and quote action in the viewport', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const header = page.getByRole('banner');
  const before = await header.boundingBox();
  expect(before).not.toBeNull();
  const initialShadow = await header.evaluate(element => getComputedStyle(element).boxShadow);

  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
  await expect.poll(() => header.evaluate(element => getComputedStyle(element).boxShadow)).not.toBe(initialShadow);
  const after = await header.boundingBox();
  expect(after).not.toBeNull();
  expect(after!.y).toBeCloseTo(0, 0);
  expect(after!.height).toBeCloseTo(before!.height, 1);
  await expect(header.getByRole('link', { name: 'Solicitar orçamento', exact: true })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('home keeps development controls off the public flow and ends with one quote link', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main form')).toHaveCount(0);
  const text = await page.locator('body').innerText();
  for (const obsolete of [
    /VERSÃO DE DESENVOLVIMENTO/i,
    /Conteúdo e imagens em validação/i,
    /categorias em validação/i,
    /Imagem gerada por IA\s*·\s*ilustrativa/i,
    /Canal comercial aguardando confirmação/i,
    /Um caminho simples/i,
    /Você conta\. A gente entende\./i,
  ]) {
    expect(text).not.toMatch(obsolete);
  }
  const closing = page.getByRole('region', { name: 'Conte o que precisa transportar.' });
  await expect(closing.getByRole('link')).toHaveCount(1);
  await closing.getByRole('link', { name: 'Solicitar orçamento' }).click();
  await expect(page).toHaveURL(/\/orcamento$/);
  await expect(page.locator('#need')).toHaveValue('orientacao');
});

test('reduced motion keeps editorial content visible and removes selector animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const revealStates = await page.locator('[data-reveal]').evaluateAll(elements => elements.map(element => {
    const style = getComputedStyle(element);
    return { opacity: style.opacity, transform: style.transform, transition: style.transitionDuration };
  }));
  expect(revealStates.length).toBeGreaterThan(0);
  for (const state of revealStates) {
    expect(state).toEqual({ opacity: '1', transform: 'none', transition: '0s' });
  }
  const fleet = page.getByRole('region', { name: 'Uma solução para cada entrega.' });
  await fleet.getByRole('tab', { name: 'Van / Furgão', exact: true }).click();
  await expect(fleet.getByRole('tabpanel')).toContainText('Até 1.200 kg');
  expect(await fleet.getByRole('tabpanel').evaluate(element => getComputedStyle(element).animationName)).toBe('none');
});

test.describe('home without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('need choices, fleet fallback and final quote action stay usable', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.home-needs').getByRole('link')).toHaveCount(4);
    const fleet = page.getByRole('region', { name: 'Uma solução para cada entrega.' });
    await expect(fleet.getByRole('link', { name: 'nossa frota', exact: true })).toBeVisible();
    await expect(fleet.getByRole('tabpanel').getByRole('heading', { name: 'Até 20 kg' })).toBeVisible();
    const opacities = await page.locator('[data-reveal]').evaluateAll(elements => elements.map(element => getComputedStyle(element).opacity));
    expect(opacities.every(opacity => opacity === '1')).toBe(true);
    const closing = page.getByRole('region', { name: 'Conte o que precisa transportar.' });
    await closing.getByRole('link', { name: 'Solicitar orçamento' }).click();
    await expect(page.getByRole('heading', { name: 'Converse com a TKS' })).toBeVisible();
  });
});
