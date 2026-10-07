import { expect, test } from '@playwright/test';

test('four transport paths prefill the existing quote flow', async ({ page }) => {
  const paths = [
    { title: 'Documentos e pequenos volumes', need: 'documentos' },
    { title: 'Mercadorias e peças', need: 'mercadorias' },
    { title: 'Cargas maiores', need: 'carga' },
    { title: 'Operação para empresas', need: 'recorrente' },
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
    await expect(panel.getByRole('heading', { name: category.name, exact: true })).toBeVisible();
    await expect(panel.locator('[data-hf-capacity]')).toHaveText(category.capacity);
    await expect(panel.getByRole('img', { name: `Representação da categoria ${category.name}` })).toBeVisible();
    await expect(panel.getByRole('link', { name: 'Solicitar orçamento' })).toHaveAttribute('href', `/orcamento?necessidade=${category.need}`);
  }

  const truck = fleet.getByRole('tab', { name: 'Caminhão 3/4', exact: true });
  const moto = fleet.getByRole('tab', { name: 'Moto', exact: true });
  await expect(fleet.getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal');
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
    /Imagem conceitual/i,
    /Canal comercial aguardando confirmação/i,
    /Um caminho simples/i,
    /Você conta\. A gente entende\./i,
  ]) {
    expect(text).not.toMatch(obsolete);
  }
  const closing = page.getByRole('region', { name: 'Tem algo para transportar?' });
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
  expect(await fleet.getByRole('tabpanel').locator('[data-hf-image]').evaluate(element => getComputedStyle(element).animationName)).toBe('none');
});

test('official identity and accessible navigation survive all required viewport widths', async ({ page }) => {
  for (const width of [1440, 1280, 1024, 768, 430, 390, 360]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const fonts = await page.evaluate(() => {
      const loaded = [...document.fonts]
        .filter(font => font.family.replaceAll('"', '').replaceAll("'", '') === 'Rubik')
        .map(font => ({ weight: font.weight, status: font.status }));
      return {
        loaded,
        body: getComputedStyle(document.body).fontFamily,
        heading: getComputedStyle(document.querySelector('h1')!).fontFamily,
      };
    });
    expect(fonts.body, `body typography at ${width}px`).toContain('Rubik');
    expect(fonts.heading, `headline typography at ${width}px`).toContain('Rubik');
    expect(fonts.loaded, `official local font weights at ${width}px`).toEqual(expect.arrayContaining([
      { weight: '400', status: 'loaded' },
      { weight: '700', status: 'loaded' },
    ]));

    const header = page.getByRole('banner');
    const footer = page.getByRole('contentinfo');
    const signatures = [
      { location: header, compact: width <= 700, color: 'azul' },
      { location: footer, compact: width <= 700, color: 'branco' },
    ];
    for (const signature of signatures) {
      const brand = signature.location.getByRole('link', { name: 'TKS Entregas — início', exact: true });
      await brand.scrollIntoViewIfNeeded();
      const logo = brand.getByRole('img', { name: 'TKS Entregas', exact: true });
      await expect.poll(() => logo.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      const rendered = await logo.evaluate((element: HTMLImageElement) => {
        const box = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return { src: new URL(element.currentSrc).pathname, width: box.width, ratio: box.width / box.height, filter: style.filter, shadow: style.boxShadow };
      });
      const variant = signature.compact ? 'compacto' : 'horizontal';
      expect(rendered.src, `official ${variant} ${signature.color} at ${width}px`).toBe(`/brand/TKS_${variant}_${signature.color}.svg`);
      expect(rendered.width, `manual minimum logo width at ${width}px`).toBeGreaterThanOrEqual(signature.compact ? 64 : 320);
      expect(rendered.ratio, `unaltered official proportions at ${width}px`).toBeCloseTo((signature.compact ? 309.5 : 613) / 109.5, 1);
      expect(rendered.filter).toBe('none');
      expect(rendered.shadow).toBe('none');
      expect((await brand.textContent())!.trim(), 'the signature is an original asset, never replacement text').toBe('');
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    const quote = header.getByRole('link', { name: 'Solicitar orçamento', exact: true });
    await expect(quote).toBeInViewport();
    const menu = header.getByRole('button', { name: 'Abrir menu', exact: true });
    if (width < 1200) {
      await expect(menu).toBeVisible();
      const target = await menu.boundingBox();
      expect(target!.width, `menu width at ${width}px`).toBeGreaterThanOrEqual(44);
      expect(target!.height, `menu height at ${width}px`).toBeGreaterThanOrEqual(44);
      await menu.focus();
      await menu.press('Enter');
      const navigation = page.getByRole('navigation', { name: 'Navegação mobile', exact: true });
      await expect(navigation.getByRole('link', { name: 'Soluções', exact: true })).toBeFocused();
      await expect(page.locator('main')).toHaveAttribute('inert', '');
      await expect(page.locator('.site-footer')).toHaveAttribute('inert', '');
      const menuQuote = navigation.getByRole('link', { name: 'Solicitar orçamento', exact: true });
      await menuQuote.focus();
      await page.keyboard.press('Tab');
      await expect(header.getByRole('link', { name: 'TKS Entregas — início', exact: true })).toBeFocused();
      const focusStyle = await page.locator(':focus').evaluate(element => {
        const style = getComputedStyle(element);
        return { style: style.outlineStyle, width: parseFloat(style.outlineWidth) };
      });
      expect(focusStyle.style).not.toBe('none');
      expect(focusStyle.width).toBeGreaterThanOrEqual(2);
      await page.keyboard.press('Shift+Tab');
      await expect(menuQuote).toBeFocused();
      await page.keyboard.press('Escape');
      await expect(navigation).toBeHidden();
      await expect(menu).toBeFocused();
      await expect(page.locator('main')).not.toHaveAttribute('inert', '');
      await expect(page.locator('.site-footer')).not.toHaveAttribute('inert', '');
    } else {
      await expect(menu).toBeHidden();
      await expect(header.getByRole('navigation', { name: 'Navegação principal' })).toBeVisible();
    }

    const targets = [
      quote,
      ...await page.locator('[data-need-path]').all(),
      page.locator('.home-hero').getByRole('link', { name: 'Solicitar orçamento', exact: true }),
      page.locator('.home-closing').getByRole('link', { name: 'Solicitar orçamento', exact: true }),
    ];
    for (const target of targets) {
      await target.scrollIntoViewIfNeeded();
      const box = await target.boundingBox();
      expect(box, `visible target at ${width}px`).not.toBeNull();
      expect(box!.width, `target width at ${width}px`).toBeGreaterThanOrEqual(44);
      expect(box!.height, `target height at ${width}px`).toBeGreaterThanOrEqual(44);
    }

    const fleet = page.getByRole('region', { name: 'Uma solução para cada entrega.' });
    if (width <= 430) {
      const tablist = fleet.getByRole('tablist');
      await tablist.scrollIntoViewIfNeeded();
      await expect(tablist.getByRole('tab')).toHaveCount(4);
      for (const tab of await tablist.getByRole('tab').all()) {
        await expect(tab, `all categories are immediately discoverable at ${width}px`).toBeInViewport({ ratio: 1 });
        const box = await tab.boundingBox();
        expect(box!.width, `fleet touch width at ${width}px`).toBeGreaterThanOrEqual(44);
        expect(box!.height, `fleet touch height at ${width}px`).toBeGreaterThanOrEqual(44);
      }
      expect(await tablist.evaluate(element => element.scrollWidth <= element.clientWidth), `no swipe is needed to discover categories at ${width}px`).toBe(true);
    }
    const moto = fleet.getByRole('tab', { name: 'Moto', exact: true });
    await moto.focus();
    await moto.press('End');
    await expect(fleet.getByRole('tab', { name: 'Caminhão 3/4', exact: true })).toBeFocused();
    await expect(fleet.getByRole('tabpanel').getByRole('heading', { name: 'Caminhão 3/4', exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}px`).toBe(true);
    await fleet.getByRole('tabpanel').getByRole('link', { name: 'Solicitar orçamento' }).click();
    await expect(page.locator('#need')).toHaveValue('carga');
  }
});

test.describe('home without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('need choices, fleet fallback and final quote action stay usable', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.home-needs').getByRole('link')).toHaveCount(4);
    const fleet = page.getByRole('region', { name: 'Uma solução para cada entrega.' });
    await expect(fleet.getByRole('link', { name: 'nossa frota', exact: true })).toBeVisible();
    await expect(fleet.getByRole('tabpanel').getByRole('heading', { name: 'Moto', exact: true })).toBeVisible();
    await expect(fleet.getByRole('tabpanel').locator('[data-hf-capacity]')).toHaveText('Até 20 kg');
    const opacities = await page.locator('[data-reveal]').evaluateAll(elements => elements.map(element => getComputedStyle(element).opacity));
    expect(opacities.every(opacity => opacity === '1')).toBe(true);
    const closing = page.getByRole('region', { name: 'Tem algo para transportar?' });
    await closing.getByRole('link', { name: 'Solicitar orçamento' }).click();
    await expect(page.getByRole('heading', { name: 'Converse com a TKS' })).toBeVisible();
  });
});
