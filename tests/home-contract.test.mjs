import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createHandoff } from '../src/scripts/handoff.ts';
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const baseline = JSON.parse(readFileSync(new URL('./fixtures/home-v5-pages.json', import.meta.url), 'utf8'));

test('all 18 internal HTML pages preserve the V5 output byte for byte', () => {
  assert.equal(Object.keys(baseline).length, 18);
  for (const [path, hash] of Object.entries(baseline)) {
    const current = readFileSync(new URL(`../dist/${path}`, import.meta.url));
    assert.equal(createHash('sha256').update(current).digest('hex'), hash, path);
  }
});
test('all Home links resolve to existing routes and four needs reach the quote flow', () => {
  const links = [...html.matchAll(/<a\b[^>]*href="([^\"]+)"/g)].map(match => match[1]);
  for (const href of links.filter(link => link.startsWith('/'))) {
    const path = href.split(/[?#]/)[0];
    assert.ok(existsSync(new URL(`../dist/${path.slice(1) || ''}index.html`, import.meta.url)) || existsSync(new URL(`../dist/${path.slice(1)}/index.html`, import.meta.url)), href);
  }
  for (const need of ['documentos', 'mercadorias', 'carga', 'recorrente']) assert.ok(links.includes(`/orcamento?necessidade=${need}`), need);
});
test('one main heading carries the required sentence and all IDs are unique', () => {
  const headings = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/g)];
  assert.equal(headings.length, 1);
  const text = headings[0][1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  assert.equal(text.toUpperCase(), 'DO DOCUMENTO À CARGA. A TKS ENTREGA.');
  const ids = [...html.matchAll(/\bid="([^\"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
});
test('preview is not indexable and the unconfirmed WhatsApp has a usable contact fallback', () => {
  assert.match(html, /name="robots" content="noindex,nofollow"/);
  assert.match(html, /data-home-contact[^>]*href="\/contato"/);
  assert.doesNotMatch(html, /href="https:\/\/wa\.me\//);
});
test('no-JavaScript fleet links preserve all four quote contexts', () => {
  const fallback = [...html.matchAll(/<noscript>(.*?)<\/noscript>/g)].map(match => match[1]).find(value => value.includes('h6-noscript-fleet'));
  assert.ok(fallback);
  assert.equal([...fallback.matchAll(/<a\b/g)].length, 4);
  for (const value of ['20', '400', '1.200', '3.000']) assert.ok(fallback.includes(value));
});
test('canonical handoff retains Unicode and never silently cuts a long message', () => {
  const message = 'Olá! Campinas → São Paulo\nCaixa & peça #1';
  const link = createHandoff('5511999999999', message);
  assert.equal(new URL(link.url).searchParams.get('text'), message);
  const long = createHandoff('5511999999999', 'á'.repeat(2000));
  assert.equal(long.url, 'https://wa.me/5511999999999');
  assert.equal(long.includesText, false);
  assert.equal(createHandoff('', message), null);
});
