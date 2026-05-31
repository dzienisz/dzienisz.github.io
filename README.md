# dzienko.dev

Personal website of [Kamil Dzieniszewski](https://dzienko.dev) — Senior/Lead Frontend Developer and AI-native developer based in Warsaw.

## About

A clean static portfolio focused on frontend product engineering, AI-native development, public work, talks, and community activity.

The previous browser-based terminal portfolio is preserved in git on:

```bash
backup/current-terminal-vibe-2026-05-30
```

## Stack

- Vanilla JS (ES module)
- HTML + CSS custom properties
- [Umami](https://umami.is) for analytics
- Hosted on GitHub Pages with a custom domain

## Structure

```
index.html        # homepage markup + CSS
site.css          # shared styling for supporting pages
projects.html     # selected projects and community work
talks.html        # talks, panels, podcasts, live streams
ai.html           # AI profile and certifications
gallery.html      # photo gallery
terminal.js       # preserved terminal portfolio logic
terminal.test.js  # terminal logic tests
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

## Stats after week one

- 784 visitors, ~2000 commands typed
- Most popular: `help`, `ls`, `tour`, `rm -rf /` (54x), `hire` (44x)
- 9 people typed `dupa` — they know who they are

## Contact

[kamil.dzieniszewski@gmail.com](mailto:kamil.dzieniszewski@gmail.com)  
[linkedin.com/in/dzieniszewski](https://www.linkedin.com/in/dzieniszewski/)
