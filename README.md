# dzienko.dev

Personal terminal portfolio of [Kamil Dzieniszewski](https://dzienko.dev) — Senior/Lead Frontend Developer based in Warsaw.

## About

A browser-based terminal that serves as a portfolio. No frameworks, no bundler, no build step. One HTML file + one JS module.

Built by accident — started as an ASCII art experiment, ended up as a full terminal experience.

## Stack

- Vanilla JS (ES module)
- HTML + CSS custom properties
- [Umami](https://umami.is) for analytics
- Hosted on GitHub Pages with a custom domain

## Structure

```
index.html        # markup + CSS
terminal.js       # all JS logic (ES module)
terminal.test.js  # 67 tests (node:test)
favicon.svg       # >_ in amber
cv.pdf            # downloadable CV
```

## Commands

```
help        show all commands
whoami      short intro
about       full bio
skills      tech stack
cv          work experience
hire        availability
contact     how to reach me
tour        guided walkthrough
ls          explore virtual filesystem
theme       change color scheme (amber green blue red purple light dark)
```

Easter eggs exist. Try `rm -rf /`, Konami code, or click the titlebar dots.

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
