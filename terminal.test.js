import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  THEMES, FORTUNES, SIMPLE_ALIASES, TYPOS, FS, FS_FILES, KNOWN, HINTS, COMMANDS,
  esc, normalizeCmd, detectTypo, tabComplete, resolveTheme, resolveCd, resolveCat,
} from './terminal.js';

// ── esc ───────────────────────────────────────────────────────────
describe('esc()', () => {
  test('escapes &', () => assert.equal(esc('a&b'), 'a&amp;b'));
  test('escapes <', () => assert.equal(esc('<div>'), '&lt;div&gt;'));
  test('escapes >', () => assert.equal(esc('x>y'), 'x&gt;y'));
  test('leaves plain text unchanged', () => assert.equal(esc('hello'), 'hello'));
});

// ── normalizeCmd ──────────────────────────────────────────────────
describe('normalizeCmd()', () => {
  test('resolves dir → ls', () => assert.equal(normalizeCmd('dir', []), 'ls'));
  test('resolves cześć → hello', () => assert.equal(normalizeCmd('cześć', []), 'hello'));
  test('resolves ll → ls', () => assert.equal(normalizeCmd('ll', []), 'ls'));
  test('resolves ? → help', () => assert.equal(normalizeCmd('?', []), 'help'));
  test('resolves light → theme light', () => assert.equal(normalizeCmd('light', []), 'theme light'));
  test('resolves dark → theme dark', () => assert.equal(normalizeCmd('dark', []), 'theme dark'));
  test('resolves amber → theme amber', () => assert.equal(normalizeCmd('amber', []), 'theme amber'));
  test('passes through unknown command unchanged', () => assert.equal(normalizeCmd('about', []), 'about'));

  test('- with history returns last non-dash command', () => {
    assert.equal(normalizeCmd('-', ['ls', 'about']), 'about');
  });
  test('- skips other dashes in history', () => {
    assert.equal(normalizeCmd('-', ['ls', '-', 'skills']), 'skills');
  });
  test('- with empty history falls back to ls', () => {
    assert.equal(normalizeCmd('-', []), 'ls');
  });
});

// ── detectTypo ────────────────────────────────────────────────────
describe('detectTypo()', () => {
  test('hep → help', () => assert.equal(detectTypo('hep'), 'help'));
  test('helpo → help', () => assert.equal(detectTypo('helpo'), 'help'));
  test('htlp → help', () => assert.equal(detectTypo('htlp'), 'help'));
  test('vimn → vim', () => assert.equal(detectTypo('vimn'), 'vim'));
  test('vi → vim', () => assert.equal(detectTypo('vi'), 'vim'));
  test('returns null for non-typo', () => assert.equal(detectTypo('help'), null));
  test('returns null for unknown command', () => assert.equal(detectTypo('foobar'), null));
});

// ── tabComplete ───────────────────────────────────────────────────
describe('tabComplete()', () => {
  test('wh → whoami', () => assert.equal(tabComplete('wh'), 'whoami'));
  test('ski → skills', () => assert.equal(tabComplete('ski'), 'skills'));
  test('cd a → cd about', () => assert.equal(tabComplete('cd a'), 'cd about'));
  test('cat cv → cat cv.pdf', () => assert.equal(tabComplete('cat cv'), 'cat cv.pdf'));
  test('returns null for empty string', () => assert.equal(tabComplete(''), null));
  test('returns null for exact match', () => assert.equal(tabComplete('help'), null));
  test('returns null when no match', () => assert.equal(tabComplete('zzz'), null));
});

// ── resolveTheme ──────────────────────────────────────────────────
describe('resolveTheme()', () => {
  test('amber returns theme with correct accent', () => {
    const t = resolveTheme('amber');
    assert.equal(t.a, '#ff6b35');
    assert.equal(t.light, false);
  });
  test('light returns light:true', () => {
    assert.equal(resolveTheme('light').light, true);
  });
  test('dark returns light:false', () => {
    assert.equal(resolveTheme('dark').light, false);
  });
  test('all 7 themes resolve', () => {
    for (const name of ['amber','green','blue','red','purple','light','dark']) {
      assert.ok(resolveTheme(name), `${name} should resolve`);
    }
  });
  test('unknown theme returns null', () => assert.equal(resolveTheme('neon'), null));
  test('empty string returns null', () => assert.equal(resolveTheme(''), null));
});

// ── resolveCd ─────────────────────────────────────────────────────
describe('resolveCd()', () => {
  test('no target → home', () => {
    assert.deepEqual(resolveCd('', '~'), { type: 'home', cwd: '~' });
  });
  test('~ → home', () => {
    assert.deepEqual(resolveCd('~', '~/skills'), { type: 'home', cwd: '~' });
  });
  test('.. from subdirectory → up', () => {
    assert.deepEqual(resolveCd('..', '~/skills'), { type: 'up', cwd: '~' });
  });
  test(',, from subdirectory → up', () => {
    assert.deepEqual(resolveCd(',,', '~/about'), { type: 'up', cwd: '~' });
  });
  test('relative dir cd from root', () => {
    const r = resolveCd('skills', '~');
    assert.equal(r.type, 'dir');
    assert.equal(r.cwd, '~/skills');
  });
  test('absolute path ~/projects', () => {
    const r = resolveCd('~/projects', '~');
    assert.equal(r.type, 'absolute');
    assert.equal(r.cwd, '~/projects');
  });
  test('/projects normalises to ~/projects', () => {
    const r = resolveCd('/projects', '~');
    assert.equal(r.type, 'absolute');
    assert.equal(r.cwd, '~/projects');
  });
  test('node_modules → node_modules type', () => {
    const r = resolveCd('node_modules', '~');
    assert.equal(r.type, 'node_modules');
    assert.equal(r.cwd, '~/node_modules');
  });
  test('secret_projects → secret type', () => {
    assert.equal(resolveCd('secret_projects', '~').type, 'secret');
  });
  test('file target → not-a-dir', () => {
    const r = resolveCd('cv.pdf', '~');
    assert.equal(r.type, 'not-a-dir');
    assert.equal(r.name, 'cv.pdf');
  });
  test('nonexistent target → not-found', () => {
    const r = resolveCd('nope', '~');
    assert.equal(r.type, 'not-found');
    assert.equal(r.name, 'nope');
  });
  test('nonexistent absolute → not-found', () => {
    const r = resolveCd('~/nope', '~');
    assert.equal(r.type, 'not-found');
    assert.equal(r.name, 'nope');
  });
});

// ── resolveCat ────────────────────────────────────────────────────
describe('resolveCat()', () => {
  test('cv.pdf from ~ is found', () => {
    const r = resolveCat('cv.pdf', '~');
    assert.equal(r.found, true);
    assert.ok(typeof r.content === 'string');
  });
  test('~/cv.pdf absolute path is found', () => {
    assert.equal(resolveCat('~/cv.pdf', '~').found, true);
  });
  test('skills.json from ~', () => {
    assert.equal(resolveCat('skills.json', '~').found, true);
  });
  test('bio.txt from ~/about', () => {
    assert.equal(resolveCat('bio.txt', '~/about').found, true);
  });
  test('nowinki.md from ~/projects', () => {
    assert.equal(resolveCat('nowinki.md', '~/projects').found, true);
  });
  test('nonexistent file returns not found', () => {
    assert.equal(resolveCat('ghost.txt', '~').found, false);
  });
  test('file from wrong directory returns not found', () => {
    assert.equal(resolveCat('bio.txt', '~').found, false);
  });
});

// ── Data integrity ────────────────────────────────────────────────
describe('THEMES', () => {
  test('has exactly 7 entries', () => assert.equal(Object.keys(THEMES).length, 7));
  test('every theme has a, ga, gb, light fields', () => {
    for (const [name, t] of Object.entries(THEMES)) {
      assert.ok('a' in t,  `${name} missing a`);
      assert.ok('ga' in t, `${name} missing ga`);
      assert.ok('gb' in t, `${name} missing gb`);
      assert.ok('light' in t, `${name} missing light`);
    }
  });
});

describe('FS', () => {
  test('~ has expected dirs', () => {
    assert.ok(FS['~'].dirs.includes('about'));
    assert.ok(FS['~'].dirs.includes('skills'));
    assert.ok(FS['~'].dirs.includes('projects'));
    assert.ok(FS['~'].dirs.includes('community'));
    assert.ok(FS['~'].dirs.includes('node_modules'));
  });
  test('~ has expected files', () => {
    assert.ok(FS['~'].files.includes('cv.pdf'));
    assert.ok(FS['~'].files.includes('kamil.md'));
  });
  test('all subdirectory keys exist in FS', () => {
    for (const dir of FS['~'].dirs) {
      assert.ok(FS[`~/${dir}`], `missing FS entry for ~/${dir}`);
    }
  });
});

describe('FORTUNES', () => {
  test('has at least 10 fortunes', () => assert.ok(FORTUNES.length >= 10));
  test('all entries are non-empty strings', () => {
    for (const f of FORTUNES) assert.ok(typeof f === 'string' && f.length > 0);
  });
});

describe('KNOWN', () => {
  test('includes core commands', () => {
    for (const cmd of ['help','whoami','about','skills','cv','hire','contact','ls','clear','tour']) {
      assert.ok(KNOWN.includes(cmd), `KNOWN missing: ${cmd}`);
    }
  });
  test('has no duplicates', () => {
    assert.equal(KNOWN.length, new Set(KNOWN).size);
  });
});

describe('COMMANDS', () => {
  test('all core commands exist', () => {
    for (const cmd of ['help','whoami','about','skills','community','projects','cv','now','contact','hire','fortune','uptime','f1']) {
      assert.ok(cmd in COMMANDS, `COMMANDS missing: ${cmd}`);
    }
  });
  test('string commands are non-empty', () => {
    for (const [key, val] of Object.entries(COMMANDS)) {
      if (typeof val === 'string') {
        assert.ok(val.length > 0, `COMMANDS.${key} is empty string`);
      }
    }
  });
  test('fortune() returns a string containing a quote', () => {
    const result = COMMANDS.fortune();
    assert.ok(typeof result === 'string');
    assert.ok(result.length > 0);
  });
  test('date() returns a string with a year', () => {
    const result = COMMANDS.date();
    assert.ok(typeof result === 'string');
    assert.ok(result.includes(new Date().getFullYear().toString()));
  });
});
