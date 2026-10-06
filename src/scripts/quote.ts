import {needs} from '../data/site';
import {createHandoff} from './handoff';
const app=document.querySelector<HTMLElement>('#quote-app');
const form=document.querySelector<HTMLFormElement>('#quote-form');
if(app&&form)initialize(app,form);
function initialize(app:HTMLElement,form:HTMLFormElement){
 app.hidden=false;
 const steps=Array.from(form.querySelectorAll<HTMLElement>('[data-step]'));
 const progress=Array.from(document.querySelectorAll<HTMLElement>('.wizard-progress li'));
 const errorSummary=document.querySelector<HTMLElement>('#form-errors')!;
 const footer=document.querySelector<HTMLElement>('#wizard-footer')!;
 const back=document.querySelector<HTMLButtonElement>('#back-button')!;
 const counter=document.querySelector<HTMLElement>('#step-counter')!;
 const review=document.querySelector<HTMLElement>('#review-content')!;
 const summaryText=document.querySelector<HTMLTextAreaElement>('#summary-text')!;
 const status=document.querySelector<HTMLElement>('#copy-status')!;
 const whatsappButton=document.querySelector<HTMLButtonElement>('#whatsapp-button')!;
 const handoffNote=document.querySelector<HTMLElement>('#handoff-note')!;
 const whatsapp=app.dataset.whatsapp||'';
 let step=0;
 let message='';
 const control=(id:string)=>form.querySelector<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>(`#${id}`)!;
 const value=(id:string)=>control(id).value.trim();
 const checked=(id:string)=>(control(id) as HTMLInputElement).checked;
 const radio=(name:string)=>form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value||'';
 function today(){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
 function sync(){
  control('quantity').disabled=checked('quantityUnknown');
  control('weight').disabled=checked('weightUnknown');
  document.querySelector<HTMLElement>('#destinations-field')!.hidden=radio('destinations')!=='varios';
  document.querySelector<HTMLElement>('#schedule-fields')!.hidden=radio('urgency')!=='agendada';
  document.querySelector<HTMLElement>('#recurrence-fields')!.hidden=radio('operation')!=='recorrente';
  control('date').setAttribute('min',today());
 }
 const initial=new URLSearchParams(location.search).get('necessidade');
 if(needs.some(n=>n.id===initial)){control('need').value=initial!;if(initial==='recorrente')form.querySelector<HTMLInputElement>('input[name="operation"][value="recorrente"]')!.checked=true;if(initial==='distribuicao')form.querySelector<HTMLInputElement>('input[name="destinations"][value="varios"]')!.checked=true;}
 else control('need').value='orientacao';
 sync();form.addEventListener('change',sync);
 function clearErrors(){
  errorSummary.hidden=true;errorSummary.textContent='';
  form.querySelectorAll('[aria-invalid]').forEach(e=>e.removeAttribute('aria-invalid'));
  form.querySelectorAll('.field-error').forEach(e=>e.textContent='');
 }
 function validate(target:number){
  clearErrors();const errors:Array<[string,string]>=[];
  function add(id:string,text:string){errors.push([id,text]);}
  function required(id:string,text:string){if(!value(id))add(id,text);}
  function positive(id:string,integer=false){const input=control(id) as HTMLInputElement;const v=value(id);if(input.validity.badInput||v&&( !Number.isFinite(Number(v))||Number(v)<=0||Number(v)>Number(input.max)||(integer&&!Number.isInteger(Number(v)))))add(id,integer?'Informe uma quantidade inteira entre 1 e 1.000.000.':'Informe um valor positivo dentro do limite do campo.');}
  if(target===0){
   required('description','Descreva o item que precisa transportar.');
   if(!checked('quantityUnknown')){required('quantity','Informe a quantidade ou marque que ainda não está definida.');positive('quantity',true);}
   if(!checked('weightUnknown'))positive('weight');
   ['length','width','height'].forEach(id=>positive(id));
  }
  if(target===1){
   required('origin','Informe a cidade de origem.');required('destination','Informe a cidade de destino.');
   if(radio('urgency')==='agendada'){
    if(!value('date'))add('date','Selecione a data solicitada.');
    else if(!/^\d{4}-\d{2}-\d{2}$/.test(value('date'))||value('date')<today())add('date','Escolha hoje ou uma data futura no horário de São Paulo.');
   }
  }
  if(target===2){
   required('name','Informe seu nome.');
   const raw=value('phone'),digits=raw.replace(/\D/g,'');
   const valid=raw.startsWith('+')?/^\+[\d\s().-]+$/.test(raw)&&/^[1-9]\d{7,14}$/.test(digits):/^[\d\s().-]+$/.test(raw)&&/^[1-9]\d{9,10}$/.test(digits);
   if(!valid)add('phone','Informe um telefone válido com DDD ou +código do país.');
   if(value('email')&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')))add('email','Confira o endereço de e-mail.');
  }
  steps[target].querySelectorAll<HTMLInputElement|HTMLTextAreaElement>('input[maxlength],textarea[maxlength]').forEach(input=>{if(input.value.length>input.maxLength)add(input.id,`Use até ${input.maxLength} caracteres. Seu texto não será cortado.`);});
  if(errors.length){
   for(const [id,text] of errors){const input=control(id);input.setAttribute('aria-invalid','true');const error=document.getElementById(`${id}-error`);if(error)error.textContent=text;const detail=input.closest('details');if(detail)detail.open=true;}
   errorSummary.textContent='Confira os campos destacados para continuar.';errorSummary.hidden=false;control(errors[0][0]).focus();return false;
  }
  return true;
 }
 function show(target:number){
  step=target;clearErrors();sync();
  steps.forEach((s,i)=>s.hidden=i!==step);
  progress.forEach((p,i)=>{p.classList.toggle('done',i<step);if(i===step)p.setAttribute('aria-current','step');else p.removeAttribute('aria-current');});
  back.hidden=step===0;footer.hidden=step===3;counter.textContent=`Etapa ${step+1} de 4`;
  if(step===3)renderReview();
  steps[step].querySelector<HTMLElement>('h2')?.focus();
 }
 form.addEventListener('submit',event=>{event.preventDefault();if(step<3&&validate(step))show(step+1);});
 back.addEventListener('click',()=>{if(step>0)show(step-1);});
 const unknown='A confirmar';
 function sections(){
  const cargo:Array<[string,string]>=[['Necessidade',needs.find(n=>n.id===value('need'))?.title||'Preciso de orientação'],['Item',value('description')],['Quantidade',checked('quantityUnknown')?unknown:value('quantity')],['Peso total',checked('weightUnknown')||!value('weight')?unknown:`${value('weight')} kg`],['Medidas por volume',['length','width','height'].map((id,i)=>`${['Comprimento','Largura','Altura'][i]}: ${value(id)?value(id)+' cm':unknown}`).join('; ')],['Cuidados',value('care')||'Não informados'],['Operação',radio('operation')]];
  const route:Array<[string,string]>=[['Origem',value('origin')],['Coleta',value('originAddress')||unknown],['Destino',value('destination')],['Entrega',value('destinationAddress')||unknown],['Destinos',radio('destinations')==='varios'?'Vários destinos':'Um destino']];
  if(radio('destinations')==='varios')route.push(['Outros destinos',value('destinationsContext')||unknown]);
  route.push(['Urgência',radio('urgency')+' — sujeita à confirmação']);
  if(radio('urgency')==='agendada'){const [y,m,d]=value('date').split('-');route.push(['Data solicitada',`${d}/${m}/${y}`],['Janela desejada',value('window')||unknown]);}
  const contact:Array<[string,string]>=[['Nome',value('name')],['Telefone',value('phone')],['Empresa',value('company')||'Não informada'],['E-mail',value('email')||'Não informado']];
  if(radio('operation')==='recorrente')contact.push(['Frequência',value('frequency')||unknown],['Volume da rotina',value('routineVolume')||unknown]);
  contact.push(['Observações',value('notes')||'Não informadas']);
  return [{title:'Carga',step:0,rows:cargo},{title:'Trajeto e prazo',step:1,rows:route},{title:'Contato e contexto',step:2,rows:contact}];
 }
 function renderReview(){
  review.replaceChildren();const groups=sections();
  const pending:string[]=[];
  for(const group of groups){
   const card=document.createElement('article');card.className='review-card';
   const header=document.createElement('div');header.className='review-header';
   const heading=document.createElement('h3');heading.textContent=group.title;
   const edit=document.createElement('button');edit.type='button';edit.textContent='Editar';edit.setAttribute('aria-label',`Editar ${group.title.toLowerCase()}`);edit.addEventListener('click',()=>show(group.step));header.append(heading,edit);card.append(header);
   const dl=document.createElement('dl');
   for(const [label,text] of group.rows){const dt=document.createElement('dt');dt.textContent=label;const dd=document.createElement('dd');dd.textContent=text;dl.append(dt,dd);if(text.includes(unknown))pending.push(label);}
   card.append(dl);review.append(card);
  }
  message=['Solicitação de orçamento — TKS Entregas','',...groups.flatMap(group=>[group.title,...group.rows.map(([label,text])=>`${label}: ${text}`),'']),`Dados ainda pendentes: ${pending.length?pending.join(', '):'nenhum campo sinalizado'}.`,'Consulta sujeita à confirmação comercial. Não é um pedido confirmado.'].join('\n');
  summaryText.value=message;status.textContent='';
  const handoff=createHandoff(whatsapp,message);
  whatsappButton.disabled=!handoff;
  if(handoff){
   whatsappButton.textContent=!handoff.includesText?'Abrir conversa e colar o resumo':'Continuar orçamento no WhatsApp';
   handoffNote.textContent=`Ao continuar, você abrirá uma conversa com +${whatsapp}. ${!handoff.includesText?'O resumo é longo: copie o texto completo e cole na conversa.':'Os dados revisados serão preparados na conversa.'} Você precisa enviar a mensagem no WhatsApp. Nenhum dado foi enviado pela TKS.`;
  }
 }
 document.querySelector<HTMLButtonElement>('#copy-button')!.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(message);status.textContent='Resumo copiado. Nenhum dado foi enviado.';}
  catch{const detail=summaryText.closest('details');if(detail)detail.open=true;summaryText.focus();summaryText.select();status.textContent='A cópia automática não está disponível. Selecione e copie o texto completo abaixo.';}
 });
 whatsappButton.addEventListener('click',()=>{
  if(!whatsapp||step!==3)return;
  const handoff=createHandoff(whatsapp,message);
  if(!handoff)return;
  const popup=window.open(handoff.url,'_blank','noopener,noreferrer');
  // Browsers may return null with noopener even when a tab opens. Keep recovery instructions in every case.
  void popup;
  status.textContent='Mensagem preparada. Envie no WhatsApp para continuar. Se a conversa não abriu, copie o resumo e consulte o contato confirmado.';
 });
 document.querySelector<HTMLButtonElement>('#reset-button')!.addEventListener('click',()=>{form.reset();summaryText.value='';message='';review.replaceChildren();status.textContent='';control('need').value='orientacao';show(0);});
}
