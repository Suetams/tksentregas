import {test,expect} from '@playwright/test';
import {createHandoff} from '../src/scripts/handoff';
test('handoff preserves Unicode, line breaks and URL delimiters without sending',()=>{
 const text='São João & carga?\nObservações: peças frágeis #3';const handoff=createHandoff('5511999999999',text)!;
 expect(handoff.includesText).toBe(true);const url=new URL(handoff.url);expect(url.hostname).toBe('wa.me');expect(url.searchParams.get('text')).toBe(text);expect(url.searchParams.size).toBe(1);
});
test('long summaries use a conversation-only fallback and invalid targets remain unavailable',()=>{
 const text='Observações extensas com acentuação. '.repeat(100);expect(createHandoff('5511999999999',text)).toEqual({url:'https://wa.me/5511999999999',includesText:false});
 for(const number of ['', '+5511999999999','0000000000','123','example.com'])expect(createHandoff(number,text)).toBeNull();
});
