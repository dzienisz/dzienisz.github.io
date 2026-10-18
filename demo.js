// Live preview of the CSR vs SSR Detector in the homepage's featured card.
// The HTML snippets are trimmed, illustrative first responses, not live fetches.
(() => {
  const sites = document.getElementById('demo-sites');
  if (!sites) return;

  const url = document.getElementById('demo-url');
  const badge = document.getElementById('demo-badge');
  const source = document.getElementById('demo-source');
  const explain = document.getElementById('demo-explain');

  const t = (s) => `<span class="t">${s}</span>`;
  const x = (s) => `<span class="x">${s}</span>`;
  const e = (s) => `<span class="e">${s}</span>`;

  const examples = {
    'github.com': {
      mode: 'SSR',
      html: `${t('&lt;main&gt;')}\n  ${t('&lt;h1&gt;')}${x('Build and ship software on a single platform')}${t('&lt;/h1&gt;')}\n  ${t('&lt;p&gt;')}${x('Join the world\'s most widely adopted developer…')}${t('&lt;/p&gt;')}\n${t('&lt;/main&gt;')}`,
    },
    'excalidraw.com': {
      mode: 'CSR',
      html: `${t('&lt;body&gt;')}\n  ${t('&lt;div id="root"&gt;')}${e('  empty  ')}${t('&lt;/div&gt;')}\n  ${t('&lt;script src="/assets/index.js"&gt;&lt;/script&gt;')}\n${t('&lt;/body&gt;')}`,
    },
    'nextjs.org': {
      mode: 'SSR',
      html: `${t('&lt;main&gt;')}\n  ${t('&lt;h1&gt;')}${x('The React Framework for the Web')}${t('&lt;/h1&gt;')}\n  ${t('&lt;p&gt;')}${x('Used by some of the world\'s largest companies…')}${t('&lt;/p&gt;')}\n${t('&lt;/main&gt;')}`,
    },
  };

  const explanations = {
    SSR: 'Server-rendered: the HTML arrives with the content already in it.',
    CSR: 'Client-rendered: the HTML arrives empty and JavaScript builds the page.',
  };

  const buttons = sites.querySelectorAll('button[data-site]');

  function show(button) {
    const site = button.dataset.site;
    const { mode, html } = examples[site];

    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    url.textContent = site;
    badge.textContent = mode;
    badge.dataset.mode = mode;
    explain.textContent = explanations[mode];
    source.innerHTML = html;

    // Restart the swap and bump animations on every click
    source.classList.remove('swap');
    badge.classList.remove('bump');
    void source.offsetWidth;
    source.classList.add('swap');
    badge.classList.add('bump');
    clearTimeout(bumpTimer);
    bumpTimer = setTimeout(() => badge.classList.remove('bump'), 250);
  }

  let bumpTimer;
  buttons.forEach((button) => button.addEventListener('click', () => show(button)));
  sites.hidden = false;
})();
