import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('WCAG A and AA automated checks on home, fleet and every quote step',async({page})=>{
 for(const path of ['/','/frota','/orcamento']){
  await page.goto(path);
  const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();expect(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,why:n.failureSummary}))})),path).toEqual([]);
 }
 await page.locator('#description').fill('Caixas');await page.locator('#quantityUnknown').check();await page.getByRole('button',{name:'Continuar',exact:true}).click();
 for(let step=1;step<=3;step++){
  const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();expect(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,why:n.failureSummary}))})),`Quote step ${step+1}`).toEqual([]);
  if(step===1){await page.locator('#origin').fill('Campinas');await page.locator('#destination').fill('São Paulo');await page.getByRole('button',{name:'Continuar',exact:true}).click();}
  if(step===2){await page.locator('#name').fill('Teste');await page.locator('#phone').fill('(19) 99999-9999');await page.getByRole('button',{name:'Continuar',exact:true}).click();}
 }
});
