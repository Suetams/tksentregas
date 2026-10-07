import {test,expect, type Page} from '@playwright/test';
async function cargo(page:Page){await page.goto('/orcamento');await page.locator('#description').fill('Documentos e peças frágeis — ação São João');await page.locator('#quantityUnknown').check();await page.locator('#weightUnknown').check();await page.getByRole('button',{name:'Continuar',exact:true}).click();}
async function route(page:Page){await page.locator('#origin').fill('Campinas / SP');await page.locator('#destination').fill('São Paulo / SP');await page.getByRole('button',{name:'Continuar',exact:true}).click();}
async function contact(page:Page){await page.locator('#name').fill('Teste interno');await page.locator('#phone').fill('(19) 99999-9999');await page.getByRole('button',{name:'Continuar',exact:true}).click();}
test('home, links, local fonts and responsive width',async({page})=>{
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto('/');await expect(page.getByRole('heading',{level:1})).toContainText('A TKS entrega.');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 const hrefs=await page.locator('main a[href^="/"]').evaluateAll(links=>[...new Set(links.map(a=>a.getAttribute('href')!.split('?')[0]))]);
 for(const href of hrefs){const response=await page.request.get(href);expect(response.status(),href).toBe(200);}
 expect(errors).toEqual([]);await page.screenshot({path:`test-results/home-${test.info().project.name}.png`,fullPage:true});
});
test('unknown routes return HTTP 404 and staging is not indexable',async({page})=>{
 expect((await page.request.get('/caminho-que-nao-existe')).status()).toBe(404);
 await page.goto('/');await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content','noindex,nofollow');
 expect(await (await page.request.get('/robots.txt')).text()).toContain('Disallow: /');
});
test('fleet selection supports click and keyboard',async({page})=>{
 await page.goto('/frota');await page.getByRole('tab',{name:'Van e furgão'}).click();await expect(page.getByRole('tabpanel')).toContainText('Van e furgão');
 await page.getByRole('tab',{name:'Van e furgão'}).press('ArrowRight');await expect(page.getByRole('tab',{name:'Caminhão 3/4'})).toHaveAttribute('aria-selected','true');
});
test('menu returns focus on Escape',async({page},info)=>{
 await page.goto('/');const button=page.locator('[data-home-menu] summary');if(info.project.name!=='mobile'){await expect(button).toBeHidden();await expect(page.locator('.h6-desktop-nav')).toBeVisible();return;}await button.click();await expect(button).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(button).toBeFocused();await expect(button).toHaveAttribute('aria-expanded','false');
});
test('preselection ignores unknown categories and recurring mode is selected',async({page})=>{
 await page.goto('/orcamento?necessidade=recorrente');await expect(page.locator('#need')).toHaveValue('recorrente');await expect(page.locator('input[name="operation"][value="recorrente"]')).toBeChecked();
 await page.goto('/orcamento?necessidade=invalida');await expect(page.locator('#need')).toHaveValue('orientacao');
});
test('required fields, fractional quantity and negative weight cannot advance',async({page})=>{
 await page.goto('/orcamento');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#description')).toBeFocused();
 await page.locator('#description').fill('Caixas');await page.locator('#quantity').fill('1.5');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#quantity-error')).toContainText('inteira');
 await page.locator('#quantity').fill('2');await page.locator('#weight').fill('-3');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#weight-error')).toContainText('positivo');
});
test('past dates are rejected and changing urgency removes schedule from review',async({page})=>{
 await cargo(page);await page.locator('#origin').fill('Campinas');await page.locator('#destination').fill('São Paulo');await page.locator('input[name="urgency"][value="agendada"]').check();await page.locator('#date').fill('2020-01-01');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#date-error')).toContainText('futura');
 await page.locator('input[name="urgency"][value="flexível"]').check();await page.getByRole('button',{name:'Continuar',exact:true}).click();await contact(page);await expect(page.locator('#summary-text')).not.toHaveValue(/2020/);
});
test('round trip preserves data, review escapes markup, no data leaves the form',async({page})=>{
 const outgoing:string[]=[];page.on('request',r=>{if(r.method()!=='GET')outgoing.push(r.url());});
 await cargo(page);await page.getByRole('button',{name:'Voltar'}).click();await expect(page.locator('#description')).toHaveValue('Documentos e peças frágeis — ação São João');await page.getByRole('button',{name:'Continuar',exact:true}).click();await route(page);
 await page.locator('#phone').fill('123');await page.locator('#name').fill('Teste');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#phone-error')).toContainText('válido');
 await page.locator('#phone').fill('+351 912 345 678');await page.locator('#notes').fill('<script>alert("teste")</script> — prédio, 3º andar');await page.getByRole('button',{name:'Continuar',exact:true}).click();
 await expect(page.locator('#review-content')).toContainText('<script>alert("teste")</script>');await expect(page.locator('#review-content script')).toHaveCount(0);await expect(page.locator('#whatsapp-button')).toBeDisabled();expect(outgoing).toEqual([]);
 expect(await page.evaluate(()=>localStorage.length+sessionStorage.length)).toBe(0);
 await page.getByRole('button',{name:'Editar carga'}).click();await expect(page.locator('#description')).toHaveValue('Documentos e peças frágeis — ação São João');
});
test('recurrence and multiple destinations appear without truncating a long summary',async({page})=>{
 await page.goto('/orcamento?necessidade=recorrente');await page.locator('#description').fill('Caixas');await page.locator('#quantityUnknown').check();await page.getByRole('button',{name:'Continuar',exact:true}).click();
 await page.locator('#origin').fill('Campinas');await page.locator('#destination').fill('São Paulo');await page.locator('input[name="destinations"][value="varios"]').check();const long='Destino com observação e endereço completo. '.repeat(20);await page.locator('#destinationsContext').fill(long);await page.getByRole('button',{name:'Continuar',exact:true}).click();
 await page.locator('#frequency').fill('Duas vezes por semana');await page.locator('#routineVolume').fill('20 caixas');await page.locator('#notes').fill('Cuidados de acesso. '.repeat(40));await contact(page);
 await expect(page.locator('#review-content')).toContainText('Duas vezes por semana');await expect(page.locator('#summary-text')).toHaveValue(new RegExp(long.trim().replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
 await page.getByRole('button',{name:'Copiar resumo completo'}).click();await expect(page.locator('#copy-status')).toContainText(/copiado|cópia automática/);
 await page.getByRole('button',{name:'Reiniciar e apagar este rascunho'}).click();await expect(page.locator('#description')).toHaveValue('');await expect(page.locator('#name')).toHaveValue('');
});
test('content and fallback remain useful without JavaScript',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false,baseURL:'http://127.0.0.1:4321'});const page=await context.newPage();await page.goto('/orcamento');await expect(page.getByRole('heading',{name:'Converse com a TKS'})).toBeVisible();await expect(page.locator('#quote-app')).toBeHidden();await page.goto('/');await expect(page.getByRole('heading',{level:1})).toBeVisible();await context.close();
});
test('scheduled date, optional dimensions and email validation',async({page})=>{
 await page.goto('/orcamento');await page.locator('#description').fill('Equipamento');await page.locator('#quantity').fill('3');await page.locator('.optional-details').first().locator('summary').click();await page.locator('#length').fill('120');await page.locator('#width').fill('40');await page.locator('#height').fill('30');await page.getByRole('button',{name:'Continuar',exact:true}).click();
 await page.locator('#origin').fill('Campinas');await page.locator('#destination').fill('Valinhos');await page.locator('input[name="urgency"][value="agendada"]').check();await page.locator('#date').fill('2099-01-01');await page.locator('#window').fill('Entre 9h e 12h');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('[data-step="2"] h2')).toBeFocused();
 await page.locator('#name').fill('Teste');await page.locator('#phone').fill('19999999999');await page.locator('#email').fill('errado@');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#email-error')).toContainText('Confira');
 await page.locator('#email').fill('teste@example.com');await page.getByRole('button',{name:'Continuar',exact:true}).click();await expect(page.locator('#review-content')).toContainText('01/01/2099');await expect(page.locator('#review-content')).toContainText('Comprimento: 120 cm; Largura: 40 cm; Altura: 30 cm');
 await page.reload();await expect(page.locator('#description')).toHaveValue('');
});
test('all pages have one main heading, no overflow and unique element IDs',async({page})=>{
 for(const path of ['/','/servicos','/servicos/motoboy-campinas','/frota','/para-empresas','/sobre','/contato','/blog','/area-de-atuacao','/privacidade','/orcamento']){
  await page.goto(path);await expect(page.locator('h1')).toHaveCount(1);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path).toBe(true);
  const duplicates=await page.locator('[id]').evaluateAll(elements=>{const ids=elements.map(e=>e.id);return ids.filter((id,i)=>ids.indexOf(id)!==i);});expect(duplicates,path).toEqual([]);
 }
});
