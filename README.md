# dzienko.dev

Personal website of [Kamil Dzieniszewski](https://dzienko.dev) — Senior/Lead Frontend Developer and AI-native developer based in Warsaw.

## About

A clean static portfolio focused on frontend product engineering, AI-native development, public work, talks, and community activity.

The previous browser-based terminal portfolio lives on as an easter egg at `/terminal.html` (linked as `>_` in the homepage footer). The original version is also preserved on the `backup/current-terminal-vibe-2026-05-30` branch.

## Stack

- Vanilla JS (ES module)
- HTML + CSS custom properties
- [Umami](https://umami.is) for analytics
- Hosted on GitHub Pages with a custom domain

## Structure

```
index.html        # homepage markup + CSS
site.css          # shared styling for supporting pages
projects.html     # Chrome extensions, community and AI work
talks.html        # talks, panels, podcasts, live streams
ai.html           # AI profile and certifications
gallery.html      # photo gallery
terminal.html     # easter egg: the old terminal portfolio
terminal.js       # terminal logic
terminal.test.js  # terminal logic tests
donut.html        # easter egg: ASCII donut
og-image.svg      # social preview source
og-image.png      # social preview (rendered from the SVG; social sites don't support SVG)
favicon.svg
cv.pdf
```

## Running locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. ES modules require HTTP — opening `index.html` directly won't work.

## Tests

```bash
node --test terminal.test.js
```

## Terminal stats after week one (April 2026)

- 784 visitors, ~2000 commands typed
- Most popular: `help`, `ls`, `tour`, `rm -rf /` (54x), `hire` (44x)
- 9 people typed `dupa` — they know who they are

## Contact

[kamil.dzieniszewski@gmail.com](mailto:kamil.dzieniszewski@gmail.com)  
[linkedin.com/in/dzieniszewski](https://www.linkedin.com/in/dzieniszewski/)
