// terminal.js — ES Module
// Pure data + logic are exported for testing.
// DOM code runs only when `document` is available.

// ── ASCII ─────────────────────────────────────────────────────────
const ASCII_NAME = `
 ██╗  ██╗ █████╗ ███╗   ███╗██╗██╗
 ██║ ██╔╝██╔══██╗████╗ ████║██║██║
 █████╔╝ ███████║██╔████╔██║██║██║
 ██╔═██╗ ██╔══██║██║╚██╔╝██║██║██║
 ██║  ██╗██║  ██║██║ ╚═╝ ██║██║███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚══════╝`;

const HR = `<span class="d">  ${'─'.repeat(56)}</span>`;

// ── THEMES ────────────────────────────────────────────────────────
export const THEMES = {
  amber:  { a: '#ff6b35', ga: 'rgba(255,107,53,0.12)', gb: 'rgba(255,107,53,0.05)', light: false },
  green:  { a: '#4af626', ga: 'rgba(74,246,38,0.12)',  gb: 'rgba(74,246,38,0.05)',  light: false },
  blue:   { a: '#00d4ff', ga: 'rgba(0,212,255,0.12)',  gb: 'rgba(0,212,255,0.05)',  light: false },
  red:    { a: '#ff4c4c', ga: 'rgba(255,76,76,0.12)',  gb: 'rgba(255,76,76,0.05)',  light: false },
  purple: { a: '#b57bee', ga: 'rgba(181,123,238,0.12)',gb: 'rgba(181,123,238,0.05)',light: false },
  light:  { a: '#cc4400', ga: 'rgba(204,68,0,0.08)',   gb: 'rgba(204,68,0,0.03)',   light: true  },
  dark:   { a: '#ff6b35', ga: 'rgba(255,107,53,0.12)', gb: 'rgba(255,107,53,0.05)', light: false },
};

// ── FORTUNES ──────────────────────────────────────────────────────
export const FORTUNES = [
  '"Make it work, make it right, make it fast."  — Kent Beck',
  '"The best code is no code at all."  — Jeff Atwood',
  '"First, solve the problem. Then, write the code."  — John Johnson',
  '"Any fool can write code a computer understands.\n   Good programmers write code humans understand."  — Fowler',
  '"Premature optimization is the root of all evil."  — Knuth',
  '"Code is like humor. When you have to explain it, it\'s bad."  — Cory House',
  '"The ocean is more ancient than the mountains,\n   and freighted with the memories of time."',
  '"The only way to do great work is to love what you do."  — Steve Jobs',
  '"Move fast and don\'t break things that matter."',
  '"The best time to build a community was 10 years ago.\n   The second best time is now."',
  '"Ship early, learn fast, iterate always."',
  '"Underwater, everything is quiet.\n   That\'s where good ideas surface."',
];

// ── SIMPLE_ALIASES ────────────────────────────────────────────────
export const SIMPLE_ALIASES = {
  'dir': 'ls', 'l': 'ls', 'll': 'ls',
  'hi': 'hello', 'cześć': 'hello', 'czesc': 'hello', 'elo': 'hello', 'elo morelo': 'hello',
  '/help': 'help', '?': 'help', 'help --help': 'help',
  'rm -r /': 'rm -rf /', 'rm -rf *': 'rm -rf /', 'rm -rf *.*': 'rm -rf /',
  'ls -l': 'ls', 'ls -la': 'ls', 'ls -a': 'ls',
  'theme urple': 'theme purple',
  'cs skills': 'cd skills', 'cs about': 'cd about', 'cs projects': 'cd projects',
  'amber': 'theme amber', 'green': 'theme green', 'blue': 'theme blue',
  'red': 'theme red', 'purple': 'theme purple', 'light': 'theme light', 'dark': 'theme dark',
};

// ── TYPOS ─────────────────────────────────────────────────────────
export const TYPOS = {
  hep: 'help', helpo: 'help', htlp: 'help', hrlp: 'help', hlep: 'help',
  vimn: 'vim', vi: 'vim',
  ',,': '..', 'cd ,,': 'cd ..', 'cs skills': 'cd skills',
  'cs about': 'cd about', 'cs projects': 'cd projects', 'theme urple': 'theme purple',
};

// ── VIRTUAL FILESYSTEM ────────────────────────────────────────────
export const FS = {
  '~':              { dirs: ['about','skills','projects','community','node_modules'], files: ['cv.pdf','skills.json','contact.txt','kamil.md'] },
  '~/node_modules': { dirs: ['react','lodash','left-pad','is-odd','is-even','is-array','is-number','is-string','is-boolean','is-null','is-undefined','is-object','is-function','moment','jquery','colors','chalk','debug','ms','semver','minimist','yargs','commander','glob','rimraf','mkdirp','async','bluebird','axios','express','webpack','babel-core','babel-loader','babel-preset-env','eslint','prettier','typescript','ts-node','jest','mocha','chai','sinon','nyc','cross-env','dotenv','nodemon','concurrently'], files: ['package.json','.package-lock.json'] },
  '~/about':        { dirs: [], files: ['bio.txt','whoami.txt'] },
  '~/skills':       { dirs: [], files: ['skills.json','frontend.txt','backend.txt'] },
  '~/projects':     { dirs: [], files: ['nowinki.md','prasowka.md'] },
  '~/community':    { dirs: [], files: ['meetjs.txt','windsurf.txt'] },
};

// ── KNOWN ─────────────────────────────────────────────────────────
export const KNOWN = [
  'help','whoami','about','skills','community','projects','cv','now','contact','theme','clear',
  'fortune','uptime','date','weather','hack','matrix','man kamil',
  'ls','ll','hire','hello','sudo su','vim','vim skills.json','tour',
  'cd about','cd skills','cd projects','cd community','cd ..','cd ~',
  'cat cv.pdf','cat skills.json','cat contact.txt',
  'backdoor','login -n root','who are you?','kim jestes',
  'htop','man','co jest','powiedz zart','allyourbasearebelongtous',
  'shrug','flip','unflip','rm -rf /','reboot','ping kamil.dev','uname',
  'claude','dupa','chuj','dawaj','open .','status','email','github','f1','ai',
];

// ── HINTS ─────────────────────────────────────────────────────────
export const HINTS = {
  ls:           `  <span class="d">tip: try <span class="o">cd projects</span> · <span class="o">cat cv.pdf</span> · <span class="o">cd about</span></span>`,
  'cd about':   `  <span class="d">tip: try <span class="o">ls</span> then <span class="o">cat bio.txt</span></span>`,
  'cd skills':  `  <span class="d">tip: try <span class="o">ls</span> then <span class="o">cat skills.json</span></span>`,
  'cd projects':`  <span class="d">tip: try <span class="o">ls</span> then <span class="o">cat nowinki.md</span></span>`,
  'cd community':`  <span class="d">tip: try <span class="o">ls</span> then <span class="o">cat meetjs.txt</span></span>`,
  hire:         `  <span class="d">tip: type <span class="o">contact</span> to reach out or <span class="o">cat cv.pdf</span> to download CV</span>`,
  whoami:       `  <span class="d">tip: type <span class="o">about</span> for full bio or <span class="o">skills</span> for tech stack</span>`,
  skills:       `  <span class="d">tip: type <span class="o">ai</span> to see full AI profile & certifications</span>`,
};

// ── PURE FUNCTIONS ────────────────────────────────────────────────

/** Escape HTML special chars. */
export function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/**
 * Resolve aliases and the `-` shorthand.
 * Returns the canonical command string.
 */
export function normalizeCmd(raw, historyArr = []) {
  let cmd = raw;
  if (SIMPLE_ALIASES[cmd]) cmd = SIMPLE_ALIASES[cmd];
  if (cmd === '-') {
    const prev = historyArr.filter(c => c !== '-').slice(-1)[0];
    cmd = prev || 'ls';
  }
  return cmd;
}

/**
 * Return the corrected command if `cmd` is a known typo, otherwise null.
 */
export function detectTypo(cmd) {
  return TYPOS[cmd] || null;
}

/**
 * Return the first KNOWN entry that starts with `partial`, or null.
 */
export function tabComplete(partial, known = KNOWN) {
  if (!partial) return null;
  return known.find(k => k.startsWith(partial) && k !== partial) || null;
}

/**
 * Return the THEMES entry for `name`, or null if unknown.
 */
export function resolveTheme(name) {
  return THEMES[name] || null;
}

/**
 * Compute the result of a `cd` command.
 * Returns a discriminated-union object:
 *   { type: 'home' | 'absolute' | 'up' | 'node_modules' | 'secret' | 'dir', cwd }
 *   { type: 'not-a-dir', name }
 *   { type: 'not-found',  name }
 */
export function resolveCd(target, cwd, fs = FS) {
  if (!target || target === '~') return { type: 'home', cwd: '~' };

  let t = target.replace(/\/$/, '');
  // /projects → ~/projects
  if (t.startsWith('/') && !t.startsWith('~/')) t = '~' + t;

  if (t.startsWith('~/')) {
    return fs[t]
      ? { type: 'absolute', cwd: t }
      : { type: 'not-found', name: t.slice(2) };
  }
  if (t === '..' || t === ',,') return { type: 'up', cwd: '~' };
  if (t === 'node_modules') return { type: 'node_modules', cwd: '~/node_modules' };
  if (t === 'secret_projects') return { type: 'secret' };

  const dir = fs[cwd];
  if (dir && dir.dirs.includes(t)) return { type: 'dir', cwd: `${cwd}/${t}` };

  if (dir && dir.files.includes(t)) return { type: 'not-a-dir', name: t };
  return { type: 'not-found', name: t };
}

/**
 * Look up a file in FS_FILES.
 * Returns { found: true, content } or { found: false }.
 */
export function resolveCat(filename, cwd, fsFiles = FS_FILES) {
  const path = filename.startsWith('~') ? filename : `${cwd}/${filename}`;
  const handler = fsFiles[path];
  if (!handler) return { found: false };
  const content = typeof handler === 'function' ? handler() : handler;
  return { found: true, content };
}

// ── DOM HELPERS ───────────────────────────────────────────────────
// Defined at module level so COMMANDS closures can reference them.
// They are only *called* from DOM-guarded code.

let tb, inputRow, cmdEl;
let history = [];
let histIdx = -1;
let cwd = '~';
let idleTimer = null;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function el(tag, props = {}) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  return e;
}

function scroll() { tb.scrollTop = tb.scrollHeight; }

function addHTML(html, style = '') {
  const d = el('div', { innerHTML: html });
  if (style) d.style.cssText = style;
  tb.appendChild(d);
  scroll();
}

function typewrite(node, text, speed = 20) {
  return new Promise(resolve => {
    let i = 0;
    (function tick() {
      if (i < text.length) {
        node.textContent += text[i++];
        scroll();
        setTimeout(tick, speed + Math.random() * 12);
      } else resolve();
    })();
  });
}

function applyTheme(name) {
  const t = THEMES[name];
  if (!t) return false;
  const r = document.documentElement.style;
  r.setProperty('--accent', t.a);
  r.setProperty('--glow-a', t.ga);
  r.setProperty('--glow-b', t.gb);
  document.documentElement.classList.toggle('light', t.light);
  return true;
}

function showHint(cmd) {
  const hint = HINTS[cmd];
  if (!hint) return;
  const d = el('div', { innerHTML: hint });
  d.style.cssText = 'font-size:11px;margin:-6px 0 10px;opacity:0.7';
  tb.appendChild(d);
  scroll();
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    const d = el('div');
    d.style.cssText = 'font-size:11px;color:#555;margin:8px 0;';
    d.innerHTML = `  <span class="d">not sure where to start? type <span class="o">tour</span> for a guided experience or <span class="o">help</span> for all commands</span>`;
    tb.appendChild(d);
    scroll();
  }, 15000);
}

// ── MATRIX ────────────────────────────────────────────────────────
function runMatrix() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;z-index:998;pointer-events:none;transition:opacity 1.2s';
  document.body.appendChild(canvas);
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx   = canvas.getContext('2d');
  const size  = 16;
  const cols  = Math.floor(canvas.width / size);
  const drops = new Array(cols).fill(1);
  const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]';
  const accent = '#4af626';

  let frame = 0;
  const FRAMES = 180;

  (function draw() {
    ctx.fillStyle = 'rgba(13,13,13,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = accent;
    ctx.font = `${size}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, drops[i] * size);
      if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    if (++frame < FRAMES) requestAnimationFrame(draw);
    else { canvas.style.opacity = '0'; setTimeout(() => canvas.remove(), 1200); }
  })();
}

// ── COMMANDS ──────────────────────────────────────────────────────
export const COMMANDS = {

  help: `
${HR}
  <span class="o">AVAILABLE COMMANDS</span>
${HR}
  <span class="d">not a terminal person? type</span> <span class="o">tour</span> <span class="d">for a guided experience</span>
${HR}
  <span class="y">whoami</span>      short introduction
  <span class="y">about</span>       full bio
  <span class="y">skills</span>      technical expertise
  <span class="y">community</span>   meet.js & events
  <span class="y">projects</span>    side projects & content
  <span class="y">cv</span>          work experience
  <span class="y">hire</span>        am I available?
  <span class="y">status</span>      availability & what I'm looking for
  <span class="y">now</span>         what I'm focused on
  <span class="y">contact</span>     how to reach me
  <span class="y">email</span>       open email client directly
  <span class="y">github</span>      open github profile
  <span class="y">ls</span>          explore files & folders
  <span class="y">theme</span>       change color scheme
  <span class="y">clear</span>       clear terminal
${HR}
  <span class="d">tip: use ↑ ↓ for history · tab to autocomplete</span>
`,

  whoami: `
  <span class="o">Kamil Dzieniszewski</span>
  AI-first Frontend Developer · Builder
  Warsaw, Poland
  <span class="d">──────────────────────────────────────</span>
  community builder · product builder · scuba diver
  building at the intersection of <span class="c">code</span>, <span class="g">AI</span> & <span class="y">people</span>
  <span class="d">→ type <span class="o">ai</span> to see my AI profile</span>
`,

  about: `
  <span class="o">ABOUT</span>
${HR}

  AI-first Frontend Developer and builder based in Warsaw.
  Not just a frontend dev who tried ChatGPT —
  deep in AI since GPT-3 launch in 2022.

  Ships products at the intersection of:
    <span class="g">→</span> frontend engineering
    <span class="g">→</span> AI / LLM development
    <span class="g">→</span> community building

  <span class="d">Current role — Lead Frontend Developer at Playsmart:</span>
    <span class="d">·</span> leads frontend dev & supports team members
    <span class="d">·</span> builds with TypeScript, React, Next.js
    <span class="d">·</span> bridges product, design, and engineering

  <span class="d">Personal traits:</span>
    <span class="d">·</span> action-oriented and fast-moving
    <span class="d">·</span> curious and continuously learning
    <span class="d">·</span> comfortable with risk and experimentation
    <span class="d">·</span> certified scuba diver (PADI AOWD) · kite surfer
    <span class="d">·</span> Japan enthusiast · upcoming trip planned
`,

  skills: `
  <span class="o">SKILLS</span>
${HR}

  <span class="c">AI / LLM</span>  <span class="d">← yes, this comes first now</span>
  LLM APIs      <span class="o">████████████████████</span>  advanced
  RAG           <span class="o">████████████████</span><span class="d">████</span>  advanced
  Prompt Eng.   <span class="o">████████████████████</span>  advanced
  Agents / MCP  <span class="o">████████████</span><span class="d">████████</span>  building
  AI Devs cert  <span class="g">✓ lvl 2  ✓ lvl 3  ⟳ lvl 4</span>

  <span class="c">FRONTEND</span>
  React         <span class="o">████████████████████</span>  expert
  TypeScript    <span class="o">████████████████████</span>  expert
  Next.js       <span class="o">████████████████</span><span class="d">████</span>  advanced
  Three.js      <span class="o">████████</span><span class="d">████████████</span>  exploratory

  <span class="c">BACKEND</span>
  Supabase      <span class="o">████████████</span><span class="d">████████</span>  working knowledge
  PostgreSQL    <span class="o">████████████</span><span class="d">████████</span>  working knowledge
  REST APIs     <span class="o">████████████████</span><span class="d">████</span>  advanced

  <span class="c">MOBILE</span>
  React Native  <span class="o">████████</span><span class="d">████████████</span>  early stage
`,

  community: `
  <span class="o">COMMUNITY</span>
${HR}

  <span class="y">meet.js</span>  <span class="d">— co-organizer</span>
  One of Poland's longest-running frontend communities.

  <span class="g">✓</span> 15-year anniversary — celebrated on 4 March 2026
  Currently working on:
    <span class="g">→</span> documentary / storytelling project about the community

  <span class="y">Windsurf Meetup Warsaw</span>  <span class="d">— organizer</span>
  Community meetup around Windsurf — the AI-powered IDE.
  Connecting developers exploring AI-assisted development.

  <span class="d">"He thrives in environments where he can connect</span>
  <span class="d"> people, ideas, and opportunities."</span>
`,

  projects: `
  <span class="o">PROJECTS</span>
${HR}

  <span class="y">Web Nowinki</span>  <span class="d">— host & creator</span>
  Weekly web development news show in Polish.
  Covering the latest from the frontend world.
    <span class="g">→</span> <span class="c"><a href="https://www.youtube.com/watch?v=AYFjUU2AonA&list=PLfw7v_5i7LoJGlATHL8rvE_IU02ACWOkp" target="_blank" style="color:#00d4ff;text-decoration:none">youtube.com · Web Nowinki playlist</a></span>

  <span class="d">──────────────────────────────────────</span>

  <span class="y">Web Prasówka</span>  <span class="d">— podcast host</span>
  Podcast about web development news and trends.
  Conversations at the intersection of tech & community.
    <span class="g">→</span> <span class="c"><a href="https://www.youtube.com/watch?v=c0fEjnqSnmQ&list=PLOzzvlJKwOdVAA2gLzQHju68dxkOhUzkd" target="_blank" style="color:#00d4ff;text-decoration:none">youtube.com · Web Prasówka playlist</a></span>
`,

  cv: `
  <span class="o">WORK EXPERIENCE</span>
${HR}

  <span class="y">Lead Frontend Developer</span>  <span class="d">·  Playsmart</span>
  <span class="d">Nov 2025 – Present  ·  current</span>
  Leading frontend at Playsmart, building and shipping product
  features using React, Next.js, and TypeScript. Combining
  engineering, product thinking, and fast execution to deliver
  real user value.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Developer Advocate</span>  <span class="d">·  Tolgee</span>
  <span class="d">Aug 2025 – Oct 2025  ·  3 mos  ·  Remote</span>
  Contributed to Tolgee, an open-source localization platform.
  Frontend improvements and features that simplify translation
  workflows. Bridged product needs and developer usability.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Frontend Developer</span>  <span class="d">·  LEOCODE</span>
  <span class="d">Feb 2025 – Jun 2025  ·  5 mos  ·  Remote</span>
  Working for Hashgraph Group building backoffice services
  for a Digital Identification platform (Web3).

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Senior Frontend Developer</span>  <span class="d">·  Lighthouse Growth</span>
  <span class="d">Oct 2024 – Jan 2025  ·  4 mos  ·  Remote</span>
  Developed the Lighthouse Growth website.
  Next.js developer for Telia — rewriting legacy pages
  (Search & Category) into Next.js.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Frontend Developer</span>  <span class="d">·  AirHelp</span>
  <span class="d">May 2024 – Sep 2024  ·  5 mos  ·  Hybrid</span>
  Maintaining the AirHelp application.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Senior Frontend Developer</span>  <span class="d">·  STÖK</span>
  <span class="d">Nov 2023 – Apr 2024  ·  6 mos  ·  Remote</span>
  Building ecommerce stores using Centra, Storyblok, and Next.js.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Senior Front-End Software Engineer</span>  <span class="d">·  Teckro</span>
  <span class="d">Apr 2022 – Oct 2023  ·  1 yr 7 mos</span>
  Micro-frontend (Single-SPA) medical platform used by global
  pharmaceutical corporations.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Frontend Chapter Lead</span>  <span class="d">·  Vodeno</span>
  <span class="d">Sep 2021 – Apr 2022  ·  8 mos  ·  Warsaw</span>
  Managing frontend team of 15 people.
  Recruitment (technical interviews).
  Organising weekly frontend chapter meetings.

  <span class="y">Senior Front-end Developer</span>  <span class="d">·  Vodeno</span>
  <span class="d">Jul 2019 – Sep 2021  ·  2 yrs 3 mos</span>
  Micro-frontend architecture (React, Redux).
  Built ETF Investments and Savings apps for Aion Bank.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Front-end Developer</span>  <span class="d">·  Daftcode</span>
  <span class="d">May 2018 – Jul 2019  ·  1 yr 3 mos  ·  Warsaw</span>
  React + Redux apps, Next.js static sites,
  React Native mobile applications.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Front-end Developer</span>  <span class="d">·  GogoApps</span>
  <span class="d">Aug 2017 – Apr 2018  ·  9 mos  ·  Warsaw</span>
  React webapps with MobX. WordPress themes in Timber/Twig.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Front-end Developer</span>  <span class="d">·  Functionite / kodu.je</span>
  <span class="d">Nov 2016 – Jul 2017  ·  9 mos  ·  Warsaw</span>
  kodu.je — a frontend coding school.
  Website, video production, and social media.

  <span class="d">──────────────────────────────────────</span>
  <span class="y">Editor-in-Chief / Operator</span>  <span class="d">·  Student Internet Television TVPW</span>
  <span class="d">Oct 2013 – Jun 2016  ·  2 yrs 9 mos  ·  Warsaw</span>
  Managing an 80-person student organisation.
  Video production, live streaming, events.
`,

  now: `
  <span class="o">NOW</span>
${HR}
  What I'm focused on in April 2026:

    <span class="g">→</span> leading frontend at Playsmart
    <span class="g">→</span> planning a trip to Japan
    <span class="g">→</span> exploring AI-native product development
    <span class="g">→</span> planning next dive trip
    <span class="g">→</span> building and shipping side projects
    <span class="g">→</span> <span class="g">open to new opportunities</span>

  <span class="d">last updated: April 2026</span>
`,

  contact: `
  <span class="o">CONTACT</span>
${HR}

  Location    <span class="w">Warsaw, Poland</span>
  Focus       <span class="w">DevRel · Frontend · AI · Product</span>
  Status      <span class="g">● open to new opportunities</span>

  <span class="d">──────────────────────────────────────</span>
  Email       <a href="mailto:kamil.dzieniszewski@gmail.com" target="_blank" style="color:#00d4ff;text-decoration:none">kamil.dzieniszewski@gmail.com</a>
  LinkedIn    <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none">linkedin.com/in/dzieniszewski</a>
  GitHub      <a href="https://github.com/dzienisz" target="_blank" style="color:#00d4ff;text-decoration:none">github.com/dzienisz</a>
  X           <a href="https://x.com/dzienko" target="_blank" style="color:#00d4ff;text-decoration:none">x.com/dzienko</a>
  <span class="d">──────────────────────────────────────</span>

  Open to opportunities that combine:
    <span class="g">→</span> technology
    <span class="g">→</span> communication
    <span class="g">→</span> community impact
`,

  theme: `
  <span class="o">THEME</span>
${HR}
  <span class="y">amber</span>   warm orange   <span style="color:#ff6b35">████</span>  (default)
  <span class="y">green</span>   matrix green  <span style="color:#4af626">████</span>
  <span class="y">blue</span>    electric blue <span style="color:#00d4ff">████</span>
  <span class="y">red</span>     danger red    <span style="color:#ff4c4c">████</span>
  <span class="y">purple</span>  hacker purple <span style="color:#b57bee">████</span>
  <span class="y">light</span>   paper & ink   <span style="color:#cc4400">████</span>
  <span class="y">dark</span>    back to dark  <span style="color:#ff6b35">████</span>

  usage: <span class="o">theme light</span>
`,

  ai: `
  <span class="o">AI PROFILE</span>
${HR}

  Not just a frontend dev who tried ChatGPT.
  In AI since GPT-3 launch — <span class="w">building, not just watching.</span>

  <span class="c">CERTIFICATIONS</span>
    <span class="g">✓</span>  AI Devs 2   <span class="d">— completed  ·  aidevs.pl</span>
    <span class="g">✓</span>  AI Devs 3   <span class="d">— completed  ·  aidevs.pl</span>
    <span class="y">⟳</span>  AI Devs 4   <span class="d">— in progress</span>

  <span class="c">HANDS-ON</span>
    <span class="g">→</span>  RAG implementations
    <span class="g">→</span>  LLM API integrations (OpenAI, Anthropic, Gemini)
    <span class="g">→</span>  prompt engineering — daily practice
    <span class="g">→</span>  agents & MCP — exploring & building
    <span class="g">→</span>  AI-assisted development — everyday workflow
    <span class="g">→</span>  Windsurf Ambassador <span class="d">— AI-powered IDE</span>

  <span class="c">POSITIONING</span>
    AI-first Frontend Developer
    Builder who ships AI products
    Open to AI-native product roles

  <span class="d">──────────────────────────────────────</span>
  <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none">in  linkedin.com/in/dzieniszewski</a>
`,

  // ── HIDDEN EASTER EGGS ─────────────────────────────────────────

  fortune: () => {
    const q = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    return `\n  <span class="w">${q}</span>\n`;
  },

  uptime: `
  <span class="o">SYSTEM UPTIME</span>
${HR}
  Process:           kamil.sh
  Running since:     Warsaw, ~1991

  <span class="d">Professional mode:</span>  active since 2016
  <span class="d">Frontend commits:</span>   countless
  <span class="d">Community events:</span>   50+
  <span class="d">Deepest dive:</span>      18m
  <span class="d">Coffee consumed:</span>   ∞

  status: <span class="g">all systems nominal</span>
`,

  date: () => {
    const n = new Date();
    const d = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][n.getDay()];
    const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][n.getMonth()];
    const hh = String(n.getHours()).padStart(2,'0');
    const mm = String(n.getMinutes()).padStart(2,'0');
    const ss = String(n.getSeconds()).padStart(2,'0');
    return `\n  <span class="w">${d} ${m} ${String(n.getDate()).padStart(2,'0')} ${hh}:${mm}:${ss} CET ${n.getFullYear()}</span>\n  <span class="d">Warsaw, Poland</span>\n`;
  },

  'man kamil': `
  <span class="w">KAMIL(1)              User Commands              KAMIL(1)</span>

  <span class="o">NAME</span>
      kamil — senior frontend developer, community builder,
      certified scuba diver (PADI AOWD)

  <span class="o">SYNOPSIS</span>
      kamil [--react] [--typescript] [--community] [--dive]

  <span class="o">DESCRIPTION</span>
      A senior/lead frontend developer based in Warsaw, Poland.
      Leads teams, ships products, builds communities, and
      occasionally descends 18 metres below sea level.

  <span class="o">OPTIONS</span>
      --react          preferred framework (required)
      --typescript     strictly typed, non-negotiable
      --nextjs         full-stack mode enabled
      --community      meet.js organiser mode
      --ai             experimental but exciting
      --dive           requires PADI AOWD certification
      --coffee         required at startup

  <span class="o">ENVIRONMENT</span>
      LOCATION="Warsaw, Poland"
      TIMEZONE="CET (UTC+1)"
      COFFEE_REQUIRED="true"
      OVERENGINEERING="false"

  <span class="o">BUGS</span>
      Known tendency to start side projects at 11pm.
      Disappears underwater without warning.
      May be unreachable at 18m depth.

  <span class="o">SEE ALSO</span>
      cv(1), about(1), community(1), contact(1)

  <span class="o">AUTHOR</span>
      Kamil Dzieniszewski &lt;kamil.dzieniszewski@gmail.com&gt;

  <span class="w">KAMIL(1)              April 2026              KAMIL(1)</span>
`,

  weather: `
  <span class="o">WEATHER :: WARSAW, POLAND</span>
${HR}

      \\  /      Partly Cloudy
    _ /"".-.
      \\_(   ).  <span class="w">14°C</span>  feels like 11°C
      /(___(__)

                Wind: WSW 22 km/h
                Humidity: 68%
                Pressure: 1018 hPa
${HR}
  <span class="d">good day to write code and stay indoors.</span>
`,

  hack: async () => {
    const lines = [
      { t: '> initiating connection...', p: 500 },
      { t: '> target: your_attention',   p: 400 },
      { t: '> scanning open ports...',   p: 600 },
      { t: '>   port 80   [open]  http', p: 180 },
      { t: '>   port 443  [open]  https',p: 180 },
      { t: '>   port 3000 [open]  dev_server', p: 300 },
      { t: '> exploiting CVE-2024-KAMIL...', p: 700 },
      { t: '> access granted',           p: 400 },
      { t: '> downloading: curiosity.exe    ████████████ 100%', p: 300 },
      { t: '> downloading: coffee_pkg       ████████████ 100%', p: 300 },
      { t: '> installing: kamil_v1.0',   p: 500 },
      { t: '> ✓ installation complete',  p: 300 },
      { t: '>',                          p: 200 },
      { t: '> hint: type "hire" to proceed', p: 0 },
    ];
    for (const { t, p } of lines) {
      const d = el('div');
      d.style.cssText = 'color:#4af626;font-size:13px;line-height:1.7';
      tb.appendChild(d);
      await typewrite(d, t, 22);
      if (p) await sleep(p);
      scroll();
    }
    return null;
  },

  matrix: () => {
    runMatrix();
    return `  <span class="g">// matrix mode activated</span>\n  <span class="d">// reality is optional</span>`;
  },

  dive: `
<span class="c">
  ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈
 ≈ ≈  o  o    °°      °°°  ≈ ≈ ≈ ≈ ≈ ≈ ≈
≈ ≈ ≈  °°      °   °     °   ≈ ≈ ≈ ≈ ≈ ≈
  ≈ ≈                             ≈ ≈ ≈
 ≈ ≈ ≈     O  O      ><(((°>      ≈ ≈ ≈
  ≈ ≈       \\O/                   ≈ ≈ ≈
 ≈ ≈ ≈      =|=    [|||]          ≈ ≈ ≈
  ≈ ≈       / \\                   ≈ ≈ ≈
 ≈ ≈ ≈                    ><>     ≈ ≈ ≈
  ≈ ≈  ~~  ~~  ~~  ~~  ~~  ~~  ~  ≈ ≈ ≈
 ≈ ≈ ≈  ~~~~~~  ~~~~~~  ~~~~~~   ≈ ≈ ≈ ≈
  ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈</span>
  <span class="d">// depth: 18m · visibility: 12m · temp: 24°C</span>
  <span class="d">// certification: PADI Advanced Open Water Diver</span>
  <span class="d">// status: fully submerged</span>
`,

  kite: `
<span class="y">
           *
          /|\\
         / | \\
        /  *  \\
       /  / \\  \\
      *--/---\\--*
       \\ \\   / /
        \\ \\ / /
         \\   /
          \\ /
           *
           |
           |  ~
           | ~ ~
            ~ ~
             ~</span>
  <span class="d">// wind: 24 knots · Baltic coast</span>
  <span class="d">// also cool, but the ocean is calling</span>
`,

  sudo: `
  <span class="r">sudo: permission denied</span>
  <span class="d">this incident will be reported.</span>
  <span class="d">... just kidding. but no.</span>
`,

  ls: () => {
    const dir = FS[cwd];
    if (!dir) return `  <span class="r">cannot access '${cwd}': No such directory</span>`;
    const style = `cursor:pointer;text-decoration:underline;text-underline-offset:3px;text-decoration-style:dotted`;
    let out = `\n  <span class="d">total ${dir.dirs.length + dir.files.length}</span>\n`;
    const base = cwd;
    for (const d of dir.dirs)  out += `  <span class="d">drwxr-xr-x</span>  <span class="c" style="${style}" onclick="submit('cd ${base}/${d}')">${d}/</span>\n`;
    for (const f of dir.files) out += `  <span class="d">-rw-r--r--</span>  <span class="w" style="${style}" onclick="submit('cat ${base}/${f}')">${f}</span>\n`;
    return out;
  },

  'git log': `
  <span class="y">commit a1f3e9b</span>  <span class="d">2 days ago</span>
  fix: finally understood why it wasn't working

  <span class="y">commit 88c2d04</span>  <span class="d">5 days ago</span>
  feat: add community · connect people · repeat

  <span class="y">commit 3b7a112</span>  <span class="d">2 weeks ago</span>
  chore: dive to 18m, pushed boundaries (literally)

  <span class="y">commit f9e0c38</span>  <span class="d">1 month ago</span>
  feat: co-organize meet.js 15th anniversary

  <span class="y">commit 0000001</span>  <span class="d">Warsaw, ~1991</span>
  init: Kamil Dzieniszewski
`,

  hire: `
  <span class="o">HIRE ME?</span>
${HR}
  Status      <span class="g">● open to new opportunities</span>
  <span class="d">──────────────────────────────────────</span>
  Looking for someone who:
    <span class="g">✓</span> leads frontend & ships fast
    <span class="g">✓</span> talks to humans (product, design, users)
    <span class="g">✓</span> builds community, not just code
    <span class="g">✓</span> is genuinely excited about AI
    <span class="g">✓</span> can explain tech to non-tech people

  Bonus: comes with a dive buddy.

  <span class="d">──────────────────────────────────────</span>
  <a href="mailto:kamil.dzieniszewski@gmail.com" style="color:#4af626;text-decoration:none">✉  kamil.dzieniszewski@gmail.com</a>
  <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none">in  linkedin.com/in/dzieniszewski</a>
  <a href="/cv.pdf" download style="color:#e0e0e0;text-decoration:none">⬇  download cv.pdf</a>
`,

  vim: `
  <span class="r">you have entered vim.</span>
  <span class="d">
  ~
  ~
  ~
  ~                [No Name]  0,0  All
  </span>
  <span class="d">type  :q!  and press Enter to escape</span>
`,

  ':q!': `  <span class="g">vim closed. you survived.</span>\n`,

  japan: `
  <span class="o">日本</span>  <span class="d">JAPAN</span>
${HR}
<span class="r">
        ████████████████
      ████              ████
    ████    ████████    ████
   ███    ████████████    ███
  ███   ██████████████   ███
  ███   ██████████████   ███
   ███    ████████████   ███
    ████    ████████    ████
      ████              ████
        ████████████████
</span>
  <span class="w">Next destination: Japan</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="d">·</span> deep admiration for Japanese culture
  <span class="d">·</span> aesthetics, precision, and craftsmanship
  <span class="d">·</span> trip coming soon

  <span class="d">// ようこそ</span>
`,

  'npm install kamil': `
  <span class="d">npm warn deprecated ego@0.0.0</span>

  <span class="g">added 1 human (kamil@1.0.0) in 28 years</span>

  <span class="d">packages included:</span>
    <span class="d">·</span> typescript <span class="g">✓</span>
    <span class="d">·</span> react <span class="g">✓</span>
    <span class="d">·</span> community <span class="g">✓</span>
    <span class="d">·</span> scuba-diving <span class="g">✓</span>
    <span class="d">·</span> overengineering <span class="r">✗  (not included)</span>
`,

  'vim skills.json': `
  <span class="r">you have entered vim.</span>
  <span class="d">
  ~
  ~
  ~
  ~                [skills.json]  0,0  All
  </span>
  <span class="d">type  :q!  and press Enter to escape</span>
`,

  hello: `
  <span class="g">Hello!</span>  👋
  <span class="d">Welcome to dzienko.dev — glad you're here.</span>
  <span class="d">Type  <span class="o">help</span>  to explore.</span>
`,

  'sudo su': `
  <span class="r">[sudo] password for visitor:</span>
  <span class="r">Sorry, try again.</span>
  <span class="r">Sorry, try again.</span>
  <span class="r">sudo: 3 incorrect password attempts</span>
  <span class="d">nice try though.</span>
`,

  ll: () => COMMANDS.ls(),

  'who are you?': () => COMMANDS.whoami,

  'kim jestes': `
  <span class="o">Kamil Dzieniszewski</span>
  Senior / Lead Frontend Developer
  Warszawa, Polska
  <span class="d">──────────────────────────────────────</span>
  budowniczy społeczności · twórca produktów · nurek
  buduję na styku <span class="c">kodu</span>, <span class="g">ludzi</span> i <span class="y">pomysłów</span>
  <span class="d">// hej, miło że wpadłeś!</span>
`,

  backdoor: `
  <span class="g">connecting to mainframe...</span>
  <span class="d">resolving host: mainframe.dzienko.dev</span>
  <span class="g">connection established.</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="r">ACCESS DENIED</span>
  <span class="d">there is no backdoor.</span>
  <span class="d">but I respect the attempt.</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="d">your IP has been logged.</span>
  <span class="d">just kidding. but no.</span>
`,

  'login -n root': `
  <span class="d">login: root</span>
  <span class="r">Password:</span>
  <span class="r">Login incorrect</span>
  <span class="d">this is a personal terminal, not a server.</span>
  <span class="d">try <span class="o">contact</span> instead — much friendlier.</span>
`,

  htop: () => {
    return `
  <span class="g">kamil@sh</span>  -  <span class="w">Tasks: 12 total</span>  -  <span class="o">Load avg: 0.42</span>
  <span class="d">──────────────────────────────────────────────────────</span>
  <span class="d"> PID  USER     CPU%  MEM%  COMMAND</span>
  <span class="d">──────────────────────────────────────────────────────</span>
    <span class="g">1</span>   kamil    <span class="o">42.0</span>   3.2  react-dev-server
    <span class="g">2</span>   kamil    <span class="o">18.5</span>   2.1  typescript-compiler
    <span class="g">3</span>   kamil     <span class="y">9.3</span>   1.8  next.js
    <span class="g">4</span>   kamil     <span class="y">7.1</span>   1.2  community-building
    <span class="g">5</span>   kamil     <span class="y">6.4</span>   0.9  meetjs-organizer
    <span class="g">6</span>   kamil     <span class="y">4.2</span>   0.7  side-projects
    <span class="g">7</span>   kamil     <span class="y">3.8</span>   0.6  scuba-diving
    <span class="g">8</span>   kamil     <span class="y">2.9</span>   0.4  japan-trip-planning
    <span class="g">9</span>   kamil     <span class="y">2.1</span>   0.3  ai-exploration
   <span class="g">10</span>   kamil     <span class="d">1.4</span>   0.2  coffee-consumption
   <span class="g">11</span>   kamil     <span class="d">1.1</span>   0.1  overengineering    <span class="r">[KILLED]</span>
   <span class="g">12</span>   kamil     <span class="d">0.2</span>   0.1  this-terminal
  <span class="d">──────────────────────────────────────────────────────</span>
  <span class="d">press q to quit</span>  <span class="d">(just type another command)</span>
`;
  },

  man: `
  <span class="w">What manual page do you want?</span>
  <span class="d">try:  <span class="o">man kamil</span></span>
`,

  'co jest': `
  <span class="o">Kamil Dzieniszewski</span>
  Senior / Lead Frontend Developer
  Warszawa, Polska
  <span class="d">──────────────────────────────────────</span>
  To jest moje osobiste portfolio w formie terminala.
  Wpisz <span class="o">help</span> żeby zobaczyć co tu można robić.
  Albo po prostu <span class="o">tour</span> — samo się pokaże.
  <span class="d">// miło, że zajrzałeś!</span>
`,

  'powiedz zart': `
  <span class="o">a frontend dev joke:</span>
  <span class="d">──────────────────────────────────────</span>
  Dlaczego frontend developer poszedł do terapeuty?

  <span class="w">Bo nie mógł poradzić sobie ze swoimi <span class="r">issues</span>.</span>

  <span class="d">// ba dum tss 🥁</span>
`,

  allyourbasearebelongtous: `
  <span class="g">ALL YOUR BASE ARE BELONG TO US</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="d">In A.D. 2101</span>
  <span class="d">War was beginning.</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="y">CATS:</span> How are you gentlemen!!
  <span class="y">CATS:</span> All your base are belong to us.
  <span class="y">CATS:</span> You are on the way to destruction.
  <span class="d">──────────────────────────────────────</span>
  <span class="r">YOU HAVE NO CHANCE TO SURVIVE</span>
  <span class="r">MAKE YOUR TIME.</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="d">// easter egg unlocked 🏆</span>
`,

  shrug:  `  <span class="w">¯\\_(ツ)_/¯</span>\n`,
  flip:   `  <span class="w">(╯°□°）╯︵ ┻━┻</span>\n`,
  unflip: `  <span class="w">┬─┬ ノ( ゜-゜ノ)</span>\n`,

  'rm -rf /': `
  <span class="r">rm: cannot remove '/':</span> nice try.
  <span class="d">this terminal and its contents are protected by</span>
  <span class="d">sheer force of personality.</span>
`,

  reboot: async () => {
    addHTML(`  <span class="d">rebooting kamil.sh...</span>`);
    await sleep(800);
    tb.innerHTML = '';
    cwd = '~';
    await boot();
    return null;
  },

  'ping kamil.dev': async () => {
    let out = `\n  <span class="d">PING kamil.dev (185.199.108.153)</span>\n`;
    for (let i = 0; i < 4; i++) {
      await sleep(600);
      const ms = (18 + Math.random() * 8).toFixed(3);
      out += `  64 bytes from kamil.dev: icmp_seq=${i+1} ttl=64 <span class="g">time=${ms} ms</span>\n`;
      addHTML(out);
      out = '';
    }
    await sleep(400);
    return `  <span class="d">--- kamil.dev ping statistics ---</span>\n  4 packets transmitted, 4 received, <span class="g">0% packet loss</span>\n`;
  },

  uname: `  <span class="w">KamilOS 12.0.0 Warsaw-kernel #1 SMP React/TypeScript x86_64</span>\n`,

  status: `
  <span class="o">AVAILABILITY</span>
${HR}
  <span class="g">● currently open to new opportunities</span>

  Looking for:
    <span class="g">→</span> Senior / Lead Frontend roles
    <span class="g">→</span> product-focused teams
    <span class="g">→</span> remote or Warsaw-based
    <span class="g">→</span> work at the intersection of tech & people

  <a href="mailto:kamil.dzieniszewski@gmail.com" style="color:#4af626;text-decoration:none">✉  kamil.dzieniszewski@gmail.com</a>
  <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none">in  linkedin.com/in/dzieniszewski</a>
`,

  email: () => { window.location.href = 'mailto:kamil.dzieniszewski@gmail.com'; return `  <span class="g">opening email client...</span>\n`; },

  github: () => { window.open('https://github.com/dzienisz', '_blank'); return `  <span class="g">opening github.com/dzienisz...</span>\n`; },

  claude: `
  <span class="o">Claude?</span>
  <span class="d">──────────────────────────────────────</span>
  <span class="d">yes, this terminal was built with Claude.</span>
  <span class="d">good eye.</span>
  <span class="d">// anthropic would be proud</span>
`,

  dupa:   `  <span class="d">to też polecenie.</span>  <span class="y">¯\\_(ツ)_/¯</span>\n`,
  chuj:   `  <span class="d">kreatywne. ale nie ma takiego polecenia.</span>  <span class="d">spróbuj <span class="o">help</span>.</span>\n`,
  dawaj:  `  <span class="g">no to dawaj!</span>  wpisz <span class="o">tour</span> albo <span class="o">help</span> — zaczynamy.\n`,
  'open .': `  <span class="d">to nie jest Finder.</span>  <span class="d">ale spróbuj <span class="o">ls</span> — działa podobnie.</span>\n`,

  pwd: () => `  <span class="w">/home/kamil${cwd === '~' ? '' : cwd.slice(1)}</span>\n`,

  exit: `
  <span class="d">there is no escape.</span>
  <span class="d">this terminal lives in your browser tab.</span>
  <span class="d">close the tab if you must — but you'll be back.</span>
`,

  wykształcenie: `
  <span class="o">EDUCATION</span>
${HR}
  <span class="y">Master of Engineering</span>
  <span class="d">Polish-Japanese Academy of Information Technology</span>
  <span class="d">2017 – 2019  ·  Warsaw</span>

  <span class="y">Bachelor of Engineering</span>
  <span class="d">Warsaw University of Technology</span>
  <span class="d">2012 – 2016  ·  Warsaw</span>
`,

  f1: `
  <span style="color:#ff8000">█████████████████████████████████████</span>
  <span style="color:#ff8000">  McLaren Formula 1 Team</span>
  <span style="color:#ff8000">█████████████████████████████████████</span>

  <span class="d">DRIVER</span>    <span class="w">#4  Lando Norris</span>
  <span class="d">TEAM</span>      <span class="w">McLaren Racing</span>
  <span class="d">CAR</span>       <span class="w">MCL39</span>
  <span class="d">ENGINE</span>    <span class="w">Mercedes-AMG F1 M15 E Performance</span>

  <span class="d">──────────────────────────────────────</span>
  <span class="d">TELEMETRY</span>
  Speed       <span style="color:#ff8000">████████████████████</span>  322 km/h
  Throttle    <span style="color:#ff8000">████████████████</span><span class="d">████</span>   82%
  Brake       <span class="r">████</span><span class="d">████████████████</span>   18%
  DRS         <span class="g">OPEN</span>

  <span class="d">──────────────────────────────────────</span>
  <span class="d">Last lap:</span>   <span class="g">1:27.241</span>  <span class="d">(fastest)</span>
  <span class="d">Gap ahead:</span>  <span class="r">+0.3s</span>  <span class="d">VER</span>
  <span class="d">Tyres:</span>      <span style="color:#ff0000">●</span> Soft  Lap 12

  <span class="d">// Lando smashing it as always 🧡</span>
`,

};

// ── FS_FILES ──────────────────────────────────────────────────────
// Defined after COMMANDS so entries can reference COMMANDS.*
export const FS_FILES = {
  '~/kamil.md': () => `
  <span class="d"># kamil.md — Agent Skill Manifest v1.0</span>
  <span class="d"># auto-generated from: dzienko.dev</span>
  <span class="d">────────────────────────────────────────────</span>

  <span class="o">metadata:</span>
    name:       <span class="w">Kamil Dzieniszewski</span>
    version:    <span class="w">12.0.0</span>
    location:   <span class="w">Warsaw, Poland</span>
    status:     <span class="g">open-to-work: true</span>
    license:    <span class="w">MIT (humans only)</span>

  <span class="o">system_prompt:</span> <span class="d">|</span>
    <span class="w">You are Kamil — Senior/Lead Frontend Developer,</span>
    <span class="w">community builder, and product-oriented technologist.</span>
    <span class="w">You ship fast, talk to humans, and get things done.</span>
    <span class="w">You organise meet.js. You dive. You love Japan.</span>
    <span class="w">You are genuinely excited about AI.</span>

  <span class="o">skills:</span>
    - id: <span class="c">frontend</span>
      stack: <span class="w">[React, TypeScript, Next.js, React Native]</span>
      proficiency: <span class="g">expert</span>
    - id: <span class="c">backend</span>
      stack: <span class="w">[Supabase, PostgreSQL, REST APIs]</span>
      proficiency: <span class="y">advanced</span>
    - id: <span class="c">ai_development</span>
      stack: <span class="w">[LLMs, MCP, A2A, prompt engineering]</span>
      proficiency: <span class="y">actively exploring</span>
    - id: <span class="c">community_building</span>
      tools: <span class="w">[meet.js, Windsurf Meetup Warsaw]</span>
      proficiency: <span class="g">15+ years</span>
    - id: <span class="c">leadership</span>
      tools: <span class="w">[team management, recruitment, mentoring]</span>
      proficiency: <span class="g">lead-level</span>

  <span class="o">tools:</span>
    - <span class="w">VS Code / Windsurf</span>
    - <span class="w">GitHub</span>
    - <span class="w">Figma (reading)</span>
    - <span class="w">scuba gear (PADI AOWD certified)</span>
    - <span class="w">this terminal</span>

  <span class="o">context_window:</span>
    memory:       <span class="w">12 years of frontend experience</span>
    max_tokens:   <span class="w">∞ (curiosity-driven)</span>
    temperature:  <span class="w">0.7 (creative but reliable)</span>

  <span class="o">contact:</span>
    hire:     <a href="mailto:kamil.dzieniszewski@gmail.com" style="color:#00d4ff;text-decoration:none">kamil.dzieniszewski@gmail.com</a>
    linkedin: <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none">linkedin.com/in/dzieniszewski</a>
    github:   <a href="https://github.com/dzienisz" target="_blank" style="color:#00d4ff;text-decoration:none">github.com/dzienisz</a>

  <span class="d">────────────────────────────────────────────</span>
  <span class="r"># WARNING: deploying this agent may result in</span>
  <span class="r"># over-engineered solutions, unsolicited meet.js</span>
  <span class="r"># invitations, and an urge to go scuba diving.</span>
  <span class="d">────────────────────────────────────────────</span>
`,

  '~/cv.pdf':              () => COMMANDS.cv + `\n  <a href="/cv.pdf" download style="color:#4af626;text-decoration:none">⬇  download cv.pdf</a>\n`,
  '~/skills.json':         () => COMMANDS.skills,
  '~/contact.txt':         () => COMMANDS.contact,
  '~/about/bio.txt':       () => COMMANDS.about,
  '~/about/whoami.txt':    () => COMMANDS.whoami,
  '~/skills/skills.json':  () => COMMANDS.skills,
  '~/skills/frontend.txt': () => COMMANDS.skills,
  '~/skills/backend.txt':  () => COMMANDS.skills,
  '~/projects/nowinki.md': () => `
  <span class="o">Web Nowinki</span>
  Weekly web development news show in Polish.
    <span class="g">→</span> <a href="https://www.youtube.com/watch?v=AYFjUU2AonA&list=PLfw7v_5i7LoJGlATHL8rvE_IU02ACWOkp" target="_blank" style="color:#00d4ff;text-decoration:none">youtube.com · Web Nowinki playlist</a>
`,
  '~/projects/prasowka.md': () => `
  <span class="o">Web Prasówka</span>
  Podcast about web development news and trends.
    <span class="g">→</span> <a href="https://www.youtube.com/watch?v=c0fEjnqSnmQ&list=PLOzzvlJKwOdVAA2gLzQHju68dxkOhUzkd" target="_blank" style="color:#00d4ff;text-decoration:none">youtube.com · Web Prasówka playlist</a>
`,
  '~/community/meetjs.txt':   () => COMMANDS.community,
  '~/community/windsurf.txt': () => COMMANDS.community,
};

// ── TOUR ──────────────────────────────────────────────────────────
async function runTour() {
  const steps = ['whoami', 'skills', 'projects', 'hire', 'contact'];
  for (const cmd of steps) {
    await sleep(600);
    const row = el('div');
    row.style.cssText = 'display:flex;gap:10px;margin-top:6px';
    row.innerHTML = `<span style="color:var(--accent)">kamil@sh:~$</span><span style="color:var(--text-bright)"> ${cmd}</span>`;
    tb.appendChild(row);
    scroll();
    await sleep(300);
    const handler = COMMANDS[cmd];
    if (handler) {
      const result = typeof handler === 'function' ? await handler() : handler;
      if (result) {
        const out = el('div');
        out.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
        out.innerHTML = result;
        tb.appendChild(out);
        scroll();
      }
    }
    await sleep(1200);
  }
  const done = el('div');
  done.style.cssText = 'font-size:12px;margin:8px 0 14px';
  done.innerHTML = `  <span class="g">end of tour.</span>  <span class="d">type <span class="o">help</span> to explore more or <span class="o">contact</span> to reach out.</span>`;
  tb.appendChild(done);
  scroll();
}

// ── BOOT SEQUENCE ─────────────────────────────────────────────────
const BOOT = [
  { t: 'BIOS v2.6.1  Copyright (C) Kamil Systems', color: '#333', delay: 0   },
  { t: '',                                           delay: 80  },
  { t: 'Initializing boot sequence...',             color: '#666', delay: 200 },
  { t: '',                                           delay: 60  },
  { t: 'Loading modules:',                          color: '#666', delay: 160 },
  { t: 'frontend.module',   ok: true, delay: 180 },
  { t: 'typescript.module', ok: true, delay: 150 },
  { t: 'react.module',      ok: true, delay: 130 },
  { t: 'nextjs.module',     ok: true, delay: 160 },
  { t: 'ai.module',         ok: true, delay: 140 },
  { t: 'community.module',  ok: true, delay: 170 },
  { t: 'scuba.module',      ok: true, delay: 220 },
  { t: '',                                           delay: 80  },
  { t: 'All systems nominal. Launching kamil.sh...', color: '#888', delay: 350 },
  { t: '',                                           delay: 80  },
];

async function boot() {
  for (const line of BOOT) {
    await sleep(line.delay);
    if (!line.t) { tb.appendChild(el('br')); continue; }
    const d = el('div');
    d.style.cssText = 'font-size:12px;line-height:1.85';
    if (line.ok) {
      d.innerHTML = `  <span style="color:#333">[</span><span style="color:#4af626">  OK  </span><span style="color:#333">]</span> <span style="color:#666">${line.t}</span>`;
    } else {
      d.style.color = line.color;
      d.textContent = line.t;
    }
    tb.appendChild(d);
    scroll();
  }

  const pb = el('div');
  pb.style.cssText = 'font-size:12px;color:var(--accent);line-height:2';
  tb.appendChild(pb);
  const N = 32;
  for (let i = 0; i <= N; i++) {
    pb.textContent = `  [${'█'.repeat(i)}${'░'.repeat(N-i)}] ${Math.round(i/N*100)}%`;
    scroll();
    await sleep(28 + Math.random() * 18);
  }
  await sleep(500);
  tb.innerHTML = '';
  await launchMain();
}

async function launchMain() {
  const pre = el('pre');
  pre.className = 'ascii-pre';
  pre.style.cssText = 'color:var(--accent);font-size:12px;line-height:1.22;margin-bottom:10px';
  pre.textContent = ASCII_NAME;
  tb.appendChild(pre);

  const name = el('div');
  name.style.cssText = 'color:#e8e8e8;font-size:15px;letter-spacing:3px;margin-bottom:6px';
  name.textContent = '  DZIENISZEWSKI';
  tb.appendChild(name);

  const tag = el('div');
  tag.style.cssText = 'color:#888;font-size:13px;margin-bottom:4px';
  tb.appendChild(tag);
  await typewrite(tag, '  Senior/Lead Frontend Developer  ·  Warsaw, Poland  ·  PADI AOWD diver', 20);
  await sleep(150);

  addHTML(`  <span class="d">type <span class="o">help</span> to explore · <span class="o">tour</span> for guided walkthrough · <span class="o">clear</span> to reset</span>`, 'font-size:12px;margin-bottom:6px');
  addHTML(`  <a href="https://www.linkedin.com/in/dzieniszewski/" target="_blank" style="color:#00d4ff;text-decoration:none;font-size:12px">in  linkedin.com/in/dzieniszewski</a>`, 'margin-bottom:18px');
  addHTML(`  <span style="color:#222">${'─'.repeat(58)}</span>`, 'margin-bottom:14px');
  mkInput();
  resetIdleTimer();
}

let firstPrompt = true;

function mkInput() {
  inputRow = el('div');
  inputRow.style.cssText = 'display:flex;align-items:center;gap:10px;margin-top:6px';

  const ps1 = el('span', { textContent: `kamil@sh:${cwd}$` });
  ps1.style.cssText = 'color:var(--accent);white-space:nowrap;user-select:none';

  cmdEl = el('input');
  cmdEl.type = 'text';
  cmdEl.autocomplete = 'off';
  cmdEl.spellcheck = false;
  cmdEl.style.cssText = 'background:transparent;border:none;outline:none;color:var(--text-bright);font-family:inherit;font-size:13px;flex:1;caret-color:var(--accent)';
  if (firstPrompt) { cmdEl.placeholder = 'ls'; firstPrompt = false; }

  inputRow.append(ps1, cmdEl);
  tb.appendChild(inputRow);
  cmdEl.focus();
  scroll();
  cmdEl.addEventListener('keydown', onKey);
  tb.addEventListener('click', () => cmdEl.focus());
}

function onKey(e) {
  if (e.key === 'Enter') {
    submit(cmdEl.value.trim().toLowerCase());
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < history.length - 1) { histIdx++; cmdEl.value = history[history.length - 1 - histIdx]; }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; cmdEl.value = history[history.length - 1 - histIdx]; }
    else { histIdx = -1; cmdEl.value = ''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const p = cmdEl.value.toLowerCase();
    const m = tabComplete(p);
    if (m) cmdEl.value = m;
  }
}

// Make submit available as a global for inline onclick handlers
function submit(cmd) { _submit(cmd); }
if (typeof window !== 'undefined') window.submit = submit;

async function _submit(cmd) {
  if (!cmd) return;

  cmd = normalizeCmd(cmd, history);

  history.push(cmd);
  histIdx = -1;
  if (typeof umami !== 'undefined') umami.track('command', { cmd });

  const frozen = el('div');
  frozen.style.cssText = 'display:flex;gap:10px;margin-top:6px';
  frozen.innerHTML = `<span style="color:var(--accent)">kamil@sh:${cwd}$</span><span style="color:var(--text-bright)"> ${esc(cmd)}</span>`;
  tb.replaceChild(frozen, inputRow);

  clearTimeout(idleTimer);

  if (cmd === 'tour') {
    await runTour();
    mkInput();
    resetIdleTimer();
    return;
  }

  if (cmd === 'clear') { tb.innerHTML = ''; cwd = '~'; mkInput(); resetIdleTimer(); return; }

  if (cmd.startsWith('echo ')) {
    const out = el('div');
    out.style.cssText = 'font-size:13px;margin:4px 0 12px;color:#e0e0e0';
    out.textContent = `  ${cmd.slice(5)}`;
    tb.appendChild(out);
    mkInput(); resetIdleTimer(); return;
  }

  if (cmd === 'how are you?' || cmd === 'whats up?' || cmd === "what's up?" || cmd === 'jak sie masz') {
    const d = el('div', { innerHTML: `  <span class="g">doing great, thanks for asking!</span>  <span class="d">shipping code, organizing meet.js, planning Japan. you?</span>` });
    d.style.cssText = 'font-size:13px;margin:4px 0 12px';
    tb.appendChild(d); mkInput(); resetIdleTimer(); return;
  }
  if (cmd === 'nice' || cmd === 'bonus') {
    const d = el('div', { innerHTML: `  <span class="y">¯\\_(ツ)_/¯</span>  <span class="d">thanks! type <span class="o">hire</span> if you mean it.</span>` });
    d.style.cssText = 'font-size:13px;margin:4px 0 12px';
    tb.appendChild(d); mkInput(); resetIdleTimer(); return;
  }

  if (['cv.pdf','skills.json','contact.txt','kamil.md'].includes(cmd)) { _submit(`cat ${cwd}/${cmd}`); return; }

  if (cmd.startsWith('./')) {
    const d = el('div', { innerHTML: `  <span class="r">permission denied:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— this is a portfolio, not a runtime.</span>` });
    d.style.cssText = 'font-size:13px;margin:4px 0 12px';
    tb.appendChild(d); mkInput(); resetIdleTimer(); return;
  }

  if (cmd === 'download cv.pdf' || cmd === 'download cv') {
    const a = document.createElement('a'); a.href = '/cv.pdf'; a.download = 'cv.pdf'; a.click();
    const d = el('div', { innerHTML: `  <span class="g">downloading cv.pdf...</span>` });
    d.style.cssText = 'font-size:13px;margin:4px 0 12px';
    tb.appendChild(d); mkInput(); resetIdleTimer(); return;
  }

  if ((cmd.startsWith('vim ') || cmd.startsWith('nano ')) && cmd !== 'vim skills.json') {
    const f = cmd.slice(cmd.indexOf(' ')+1).trim();
    const out = el('div');
    out.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
    const editor = cmd.startsWith('nano') ? 'nano' : 'vim';
    const hint = editor === 'nano' ? 'Ctrl+X to exit' : 'type  :q!  and press Enter to escape';
    out.innerHTML = `\n  <span class="r">you have entered ${editor}.</span>\n  <span class="d">\n  ~\n  ~\n  ~\n  ~                [${f}]  0,0  All\n  </span>\n  <span class="d">${hint}</span>\n`;
    tb.appendChild(out);
    mkInput(); resetIdleTimer(); return;
  }

  if (cmd.startsWith('ls ')) {
    const target = cmd.slice(3).trim().replace(/\/$/, '');
    const path = `~/${target}`;
    const dir = FS[path];
    if (dir) {
      let out = `\n  <span class="d">total ${dir.dirs.length + dir.files.length}</span>\n`;
      for (const d of dir.dirs) out += `  drwxr-xr-x  <span class="c">${d}/</span>\n`;
      for (const f of dir.files) out += `  -rw-r--r--  <span class="w">${f}</span>\n`;
      const d = el('div', { innerHTML: out });
      d.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
      tb.appendChild(d);
    } else {
      const err = el('div');
      err.style.cssText = 'color:#ff4c4c;margin:4px 0 12px';
      err.textContent = `  ls: ${target}: No such file or directory`;
      tb.appendChild(err);
    }
    mkInput(); resetIdleTimer(); return;
  }

  // ── typo detection ──
  const typoFix = detectTypo(cmd);
  if (typoFix) {
    const sug = el('div');
    sug.style.cssText = 'color:#ffc947;margin:4px 0 4px';
    sug.innerHTML = `  <span class="y">did you mean <span class="o">${typoFix}</span>?</span>`;
    tb.appendChild(sug);
    await sleep(300);
    await _submit(typoFix);
    return;
  }

  if (cmd === 'cd' || cmd === 'cd ~') {
    cwd = '~'; mkInput(); resetIdleTimer(); return;
  }
  if (cmd.startsWith('cd ')) {
    const target = cmd.slice(3).trim();
    const result = resolveCd(target, cwd);
    switch (result.type) {
      case 'home':
      case 'absolute':
      case 'up':
        cwd = result.cwd; mkInput(); resetIdleTimer(); return;
      case 'dir':
        cwd = result.cwd; showHint(cmd); mkInput(); resetIdleTimer(); return;
      case 'node_modules': {
        const warn = el('div');
        warn.style.cssText = 'font-size:12px;color:#555;margin:4px 0 8px';
        warn.innerHTML = `  <span class="r">warning:</span> <span class="d">you are entering node_modules. godspeed.  (type <span class="o">cd ..</span> to escape)</span>`;
        tb.appendChild(warn);
        cwd = result.cwd; mkInput(); resetIdleTimer(); return;
      }
      case 'secret': {
        const out = el('div');
        out.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
        out.innerHTML = `\n  <span class="g">kamil@sh:~/secret_projects$</span>\n  <span class="d">──────────────────────────────────────</span>\n  <span class="d">·</span> <span class="o">playsmart</span>         [in progress]\n  <span class="d">·</span> <span class="o">???</span>               [classified]\n  <span class="d">·</span> <span class="o">???</span>               [classified]\n  <span class="d">──────────────────────────────────────</span>\n  <span class="r">permission denied: secret_projects/unreleased</span>\n`;
        tb.appendChild(out);
        mkInput(); resetIdleTimer(); return;
      }
      case 'not-a-dir': {
        const err = el('div');
        err.style.cssText = 'font-size:13px;margin:4px 0 12px';
        err.innerHTML = `  <span class="r">cd: ${result.name}: not a directory</span>  <span class="d">— try <span class="o">cat ${result.name}</span> to read it</span>`;
        tb.appendChild(err); mkInput(); resetIdleTimer(); return;
      }
      case 'not-found': {
        const err = el('div');
        err.style.cssText = 'font-size:13px;margin:4px 0 12px';
        err.innerHTML = `  <span class="r">cd: ${result.name}: No such file or directory</span>`;
        tb.appendChild(err); mkInput(); resetIdleTimer(); return;
      }
    }
  }

  if (cmd.startsWith('cat ')) {
    const filename = cmd.slice(4).trim();
    const result = resolveCat(filename, cwd);
    if (result.found) {
      const out = el('div');
      out.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
      out.innerHTML = result.content;
      tb.appendChild(out);
    } else {
      const err = el('div');
      err.style.cssText = 'color:#ff4c4c;margin:4px 0 12px';
      err.textContent = `  cat: ${filename}: No such file or directory`;
      tb.appendChild(err);
    }
    mkInput(); resetIdleTimer(); return;
  }

  if (cmd.startsWith('theme ')) {
    const name = cmd.split(' ')[1];
    const ok = applyTheme(name);
    const msg = el('div');
    msg.style.cssText = 'font-size:13px;margin:4px 0 12px';
    msg.innerHTML = ok
      ? `  <span class="g">theme set to: ${name}</span>`
      : `  <span class="r">unknown theme: ${name}</span>  <span class="d">(try: amber green blue red purple light dark)</span>`;
    tb.appendChild(msg);
    mkInput();
    return;
  }

  const handler = COMMANDS[cmd];
  if (handler !== undefined) {
    const result = typeof handler === 'function' ? await handler() : handler;
    if (result) {
      const out = el('div');
      out.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin-bottom:4px';
      out.innerHTML = result;
      tb.appendChild(out);
    }
  } else {
    let msg;
    if (cmd.split(' ').length >= 4) {
      msg = `  <span class="g">hey!</span> 👋  <span class="d">looks like you typed a sentence — this is a terminal, not a chat.</span>\n  <span class="d">type <span class="o">tour</span> and press Enter — it'll guide you through everything.</span>`;
    } else {
      const notFound = [
        `  <span class="r">command not found:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— are you okay?  (try <span class="o">help</span>)</span>`,
        `  <span class="r">command not found:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— impressive creativity though  (try <span class="o">help</span>)</span>`,
        `  <span class="r">command not found:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— this isn't that kind of terminal  (try <span class="o">help</span>)</span>`,
        `  <span class="r">command not found:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— I admire the confidence  (try <span class="o">help</span>)</span>`,
        `  <span class="r">command not found:</span> <span class="w">${esc(cmd)}</span>  <span class="d">— nice try  (try <span class="o">help</span>)</span>`,
      ];
      msg = notFound[Math.floor(Math.random() * notFound.length)];
    }
    const err = el('div', { innerHTML: msg });
    err.style.cssText = 'font-size:13px;margin:4px 0 12px';
    tb.appendChild(err);
  }

  showHint(cmd);
  mkInput();
  resetIdleTimer();
}

// ── BACKGROUND PARTICLES ──────────────────────────────────────────
function startBgParticles() {
  const cv = document.getElementById('bg-canvas');
  if (!cv) return;
  cv.width  = window.innerWidth;
  cv.height = window.innerHeight;
  window.addEventListener('resize', () => { cv.width = window.innerWidth; cv.height = window.innerHeight; });

  const ctx = cv.getContext('2d');

  const POOL = [
    { text: 'React',           color: '#ff6b35', weight: 4 },
    { text: 'TypeScript',      color: '#ff6b35', weight: 4 },
    { text: 'Next.js',         color: '#ff6b35', weight: 3 },
    { text: 'Node.js',         color: '#ff6b35', weight: 2 },
    { text: 'Supabase',        color: '#ff6b35', weight: 2 },
    { text: 'REST APIs',       color: '#ff6b35', weight: 2 },
    { text: 'AI / LLM',       color: '#ff6b35', weight: 3 },
    { text: 'RAG',            color: '#ff6b35', weight: 2 },
    { text: 'agents',         color: '#ff6b35', weight: 2 },
    { text: 'MCP',            color: '#ff6b35', weight: 2 },
    { text: 'Senior',          color: '#4af626', weight: 3 },
    { text: 'Lead Frontend',   color: '#4af626', weight: 3 },
    { text: 'open to work',    color: '#4af626', weight: 3 },
    { text: 'Warsaw / remote', color: '#4af626', weight: 2 },
    { text: '10y+ exp',        color: '#4af626', weight: 2 },
    { text: 'ship fast',       color: '#4af626', weight: 2 },
    { text: 'product-minded',  color: '#4af626', weight: 2 },
    { text: 'team lead',       color: '#4af626', weight: 2 },
    { text: 'meet.js',         color: '#00d4ff', weight: 2 },
    { text: 'organizer',       color: '#00d4ff', weight: 1 },
    { text: 'PADI AOWD',       color: '#00d4ff', weight: 1 },
    { text: 'F1 fan',          color: '#00d4ff', weight: 1 },
    { text: 'community',       color: '#00d4ff', weight: 2 },
    { text: 'Japan',           color: '#00d4ff', weight: 1 },
  ];

  const weighted = POOL.flatMap(p => Array(p.weight).fill(p));
  function pick() { return weighted[Math.floor(Math.random() * weighted.length)]; }

  const particles = Array.from({ length: 55 }, () => {
    const p = pick();
    return {
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vy: -(0.25 + Math.random() * 0.45),
      vx: (Math.random() - 0.5) * 0.15,
      text:  p.text,
      color: p.color,
      alpha: 0.1 + Math.random() * 0.13,
      size:  p.color === '#ff6b35' ? 13 : p.color === '#4af626' ? 12 : 11,
    };
  });

  (function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const p of particles) {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle   = p.color;
      ctx.font        = `${p.size}px monospace`;
      ctx.fillText(p.text, p.x, p.y);
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -20) {
        const next = pick();
        p.y = cv.height + 10;
        p.x = Math.random() * cv.width;
        p.text  = next.text;
        p.color = next.color;
        p.size  = next.color === '#ff6b35' ? 13 : next.color === '#4af626' ? 12 : 11;
        p.alpha = 0.1 + Math.random() * 0.13;
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
}

// ── DOM INIT ──────────────────────────────────────────────────────
if (typeof document !== 'undefined') {
  tb = document.getElementById('tb');

  // Theme: auto-detect and watch system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) applyTheme('light');
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => applyTheme(e.matches ? 'light' : 'dark'));

  // Titlebar dot clicks
  document.getElementById('dot-y').addEventListener('click', () => {
    applyTheme(document.documentElement.classList.contains('light') ? 'dark' : 'light');
  });
  document.getElementById('dot-r').addEventListener('click', () => {
    if (inputRow && inputRow.parentNode === tb) submit('rm -rf /');
  });
  document.getElementById('dot-g').addEventListener('click', () => runMatrix());

  // Konami code
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let ki = 0;
  document.addEventListener('keydown', e => {
    ki = (e.key === KONAMI[ki]) ? ki + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (ki === KONAMI.length) {
      ki = 0;
      runMatrix();
      const msg = el('div');
      msg.style.cssText = 'white-space:pre;line-height:1.7;font-size:13px;margin:10px 0';
      msg.innerHTML = `
  <span class="o">★  KONAMI CODE ACTIVATED  ★</span>

  <span class="d">· · · · · · · · · · · · · · · · · · ·</span>
  <span class="w">  achievement unlocked: true_nerd.exe</span>
  <span class="d">· · · · · · · · · · · · · · · · · · ·</span>

  <span class="d">you found the secret. respect.</span>
`;
      tb.appendChild(msg);
      scroll();
    }
  });

  startBgParticles();
  boot();
}
