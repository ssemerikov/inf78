# Цифрові пристрої Educational Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Jekyll-based educational site on "Цифрові пристрої" for 7th and 8th grade, with two visual styles and six interactive quiz types.

**Architecture:** Jekyll static site with per-class layouts and CSS. Vanilla JS handles all interactivity via a modular quiz engine that scans `data-type` attributes. Content extracted from Ukrainian textbooks (Морзе/Барна and Ривкінд) stored as Markdown.

**Tech Stack:** Jekyll, Markdown, vanilla CSS, vanilla JavaScript, GitHub Pages

---

## Task 1: Jekyll Configuration and Base Layout

**Files:**
- Create: `_config.yml`
- Create: `index.md`
- Create: `_layouts/default.html`
- Create: `_includes/nav.html`
- Create: `_includes/footer.html`

- [ ] **Step 1: Create `_config.yml`**

```yaml
title: "Цифрові пристрої"
description: "Навчальні матеріали з інформатики для 7 та 8 класу"
lang: uk
baseurl: ""
url: ""
markdown: kramdown
kramdown:
  input: GFM
defaults:
  - scope:
      path: "class7"
      type: pages
    values:
      layout: class7
  - scope:
      path: "class8"
      type: pages
    values:
      layout: class8
```

- [ ] **Step 2: Create `index.md` — main landing page with class selection**

```markdown
---
layout: default
title: Цифрові пристрої
---

# Цифрові пристрої

Навчальні матеріали з інформатики

[7 клас](class7/) | [8 клас](class8/)
```

- [ ] **Step 3: Create `_layouts/default.html`**

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% if page.title %}{{ page.title }} — {% endif %}{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/styles/base.css' | relative_url }}">
  {% if layout.css %}<link rel="stylesheet" href="{{ layout.css | relative_url }}">{% endif %}
</head>
<body>
  {% include nav.html %}
  <main class="container">
    {{ content }}
  </main>
  {% include footer.html %}
  <script src="{{ '/scripts/interactive.js' | relative_url }}" defer></script>
</body>
</html>
```

- [ ] **Step 4: Create `_includes/nav.html`**

```html
<nav class="nav">
  <a href="{{ '/' | relative_url }}" class="nav__logo">Цифрові пристрої</a>
  <div class="nav__links">
    <a href="{{ '/class7/' | relative_url }}" class="nav__link nav__link--7">7 клас</a>
    <a href="{{ '/class8/' | relative_url }}" class="nav__link nav__link--8">8 клас</a>
  </div>
</nav>
```

- [ ] **Step 5: Create `_includes/footer.html`**

```html
<footer class="footer">
  <p>Навчальні матеріали з інформатики. Створено з використанням генеративного ШІ.</p>
</footer>
```

- [ ] **Step 6: Create directory structure for class7 and class8**

Create empty placeholder directories and index files:

```bash
mkdir -p class7/theory class7/practice class7/tests
mkdir -p class8/theory class8/practice class8/tests
mkdir -p resources/images styles scripts _data _layouts _includes
```

- [ ] **Step 7: Commit**

```bash
git add _config.yml index.md _layouts/ _includes/ class7/ class8/ resources/ styles/ scripts/ _data/
git commit -m "feat: Jekyll config, base layout, and site skeleton"
```

---

## Task 2: Class-Specific Layouts

**Files:**
- Create: `_layouts/class7.html`
- Create: `_layouts/class8.html`
- Create: `class7/index.md`
- Create: `class8/index.md`

- [ ] **Step 1: Create `_layouts/class7.html`**

```html
---
layout: default
css: /styles/class7.css
---

<div class="class7-wrapper">
  <aside class="class7-sidebar">
    <a href="{{ '/class7/' | relative_url }}">Головна</a>
    <a href="{{ '/class7/theory/main-content/' | relative_url }}">Теорія</a>
    <a href="{{ '/class7/theory/examples/' | relative_url }}">Приклади</a>
    <a href="{{ '/class7/practice/tasks/' | relative_url }}">Завдання</a>
    <a href="{{ '/class7/practice/projects/' | relative_url }}">Проекти</a>
    <a href="{{ '/class7/tests/self-check/' | relative_url }}">Самоперевірка</a>
  </aside>
  <div class="class7-content">
    {{ content }}
  </div>
</div>
```

- [ ] **Step 2: Create `_layouts/class8.html`**

```html
---
layout: default
css: /styles/class8.css
---

<div class="class8-wrapper">
  <nav class="class8-nav">
    <a href="{{ '/class8/' | relative_url }}">Головна</a>
    <a href="{{ '/class8/theory/main-content/' | relative_url }}">Теорія</a>
    <a href="{{ '/class8/theory/examples/' | relative_url }}">Приклади</a>
    <a href="{{ '/class8/practice/tasks/' | relative_url }}">Завдання</a>
    <a href="{{ '/class8/practice/projects/' | relative_url }}">Проекти</a>
    <a href="{{ '/class8/tests/self-check/' | relative_url }}">Самоперевірка</a>
  </nav>
  <div class="class8-content">
    {{ content }}
  </div>
</div>
```

- [ ] **Step 3: Create `class7/index.md`**

```markdown
---
title: 7 клас — Цифрові пристрої
---

# 🖥️ Цифрові пристрої — 7 клас

Оберіть розділ:

- [📖 Теорія](theory/main-content/)
- [💡 Приклади](theory/examples/)
- [✏️ Завдання](practice/tasks/)
- [🚀 Проекти](practice/projects/)
- [✅ Самоперевірка](tests/self-check/)
```

- [ ] **Step 4: Create `class8/index.md`**

```markdown
---
title: 8 клас — Цифрові пристрої
---

# Цифрові пристрої — 8 клас

- [Теорія](theory/main-content/)
- [Приклади](theory/examples/)
- [Завдання](practice/tasks/)
- [Проекти](practice/projects/)
- [Самоперевірка](tests/self-check/)
```

- [ ] **Step 5: Commit**

```bash
git add _layouts/class7.html _layouts/class8.html class7/index.md class8/index.md
git commit -m "feat: class7 and class8 layouts with navigation"
```

---

## Task 3: Base CSS

**Files:**
- Create: `styles/base.css`

- [ ] **Step 1: Create `styles/base.css`**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --container-max: 1100px;
}

body {
  font-family: var(--font-main);
  line-height: 1.6;
  color: #222;
  background: #fff;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1rem;
}

/* Navigation */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}

.nav__logo {
  font-weight: 700;
  text-decoration: none;
  color: #222;
}

.nav__links {
  display: flex;
  gap: 1rem;
}

.nav__link {
  text-decoration: none;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav__link:hover {
  color: #222;
  background: #f5f5f5;
}

/* Footer */
.footer {
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #888;
  border-top: 1px solid #eee;
  margin-top: 3rem;
}

/* Typography */
h1, h2, h3, h4 {
  line-height: 1.3;
  margin: 1.5em 0 0.5em;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }

p { margin: 0.75em 0; }

a { color: #0066cc; }
a:hover { text-decoration: underline; }

/* Markdown elements */
ul, ol { margin: 0.75em 0; padding-left: 1.5em; }

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
  background: #f4f4f4;
  padding: 0.15em 0.4em;
  border-radius: 3px;
}

pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1em 0;
}

pre code {
  background: none;
  padding: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}

th, td {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background: #f8f8f8;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  h1 { font-size: 1.5rem; }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles/base.css
git commit -m "feat: base CSS with responsive layout and typography"
```

---

## Task 4: Class 7 CSS — Bright & Playful

**Files:**
- Create: `styles/class7.css`

- [ ] **Step 1: Create `styles/class7.css`**

```css
/* 7 клас — Яскравий та ігровий */
.class7-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
}

/* Sidebar */
.class7-sidebar {
  background: linear-gradient(135deg, #6b21a8, #2563eb);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 1rem;
  align-self: start;
}

.class7-sidebar a {
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  transition: background 0.2s, transform 0.1s;
}

.class7-sidebar a:hover {
  background: rgba(255,255,255,0.2);
  transform: scale(1.03);
}

/* Content */
.class7-content {
  min-width: 0;
}

.class7-content h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #6b21a8, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.class7-content h2 {
  font-size: 1.5rem;
  color: #6b21a8;
  border-bottom: 3px solid #fbbf24;
  padding-bottom: 0.25rem;
}

.class7-content h3 {
  color: #2563eb;
}

/* Cards */
.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}

.card--highlight {
  border-left: 5px solid #fbbf24;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s;
}

.btn:active {
  transform: scale(0.96);
}

.btn--primary {
  background: #fbbf24;
  color: #222;
}

.btn--primary:hover {
  background: #f59e0b;
}

.btn--secondary {
  background: #e9d5ff;
  color: #6b21a8;
}

/* Landing page grid */
.class7-content ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.class7-content ul li a {
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 1.25rem;
  text-decoration: none;
  color: #222;
  font-size: 1.1rem;
  transition: transform 0.2s;
}

.class7-content ul li a:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 768px) {
  .class7-wrapper {
    grid-template-columns: 1fr;
  }
  .class7-sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 12px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles/class7.css
git commit -m "feat: class7 CSS — bright playful style with gradient sidebar"
```

---

## Task 5: Class 8 CSS — Minimalist "Diia" Style

**Files:**
- Create: `styles/class8.css`

- [ ] **Step 1: Create `styles/class8.css`**

```css
/* 8 клас — Мінімалістичний у стилі «Дія» */
:root {
  --c8-primary: #1a1a2e;
  --c8-accent: #00a7e1;
  --c8-bg: #f5f5f5;
  --c8-card: #fff;
  --c8-border: #e0e0e0;
  --c8-text: #333;
  --c8-muted: #666;
}

.class8-wrapper {
  min-height: 100vh;
  background: var(--c8-bg);
}

/* Top navigation */
.class8-nav {
  display: flex;
  align-items: center;
  gap: 0;
  background: #fff;
  border-bottom: 1px solid var(--c8-border);
  padding: 0;
}

.class8-nav a {
  color: var(--c8-text);
  text-decoration: none;
  padding: 0.875rem 1.25rem;
  font-size: 0.9375rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s;
}

.class8-nav a:hover {
  border-bottom-color: var(--c8-accent);
  color: var(--c8-primary);
}

/* Content */
.class8-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.class8-content h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--c8-primary);
  margin-bottom: 1rem;
}

.class8-content h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--c8-primary);
  border-bottom: 1px solid var(--c8-border);
  padding-bottom: 0.5rem;
  margin: 2rem 0 1rem;
}

.class8-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c8-text);
}

/* Cards */
.card {
  background: var(--c8-card);
  border: 1px solid var(--c8-border);
  border-radius: 4px;
  padding: 1.25rem;
  margin: 1rem 0;
}

.card--highlight {
  border-left: 3px solid var(--c8-accent);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
}

.btn--primary {
  background: var(--c8-accent);
  color: #fff;
}

.btn--primary:hover {
  background: #008fc7;
}

.btn--secondary {
  background: transparent;
  color: var(--c8-accent);
  border: 1px solid var(--c8-accent);
}

/* Landing page */
.class8-content ul {
  list-style: none;
  padding: 0;
}

.class8-content ul li a {
  display: block;
  background: var(--c8-card);
  border: 1px solid var(--c8-border);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: var(--c8-text);
  font-size: 1rem;
  transition: border-color 0.15s;
}

.class8-content ul li a:hover {
  border-color: var(--c8-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .class8-nav {
    flex-wrap: wrap;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles/class8.css
git commit -m "feat: class8 CSS — minimalist Diia-style design"
```

---

## Task 6: Interactive JS — Quiz Engine + QuizChoice

**Files:**
- Create: `scripts/interactive.js`

- [ ] **Step 1: Create `scripts/interactive.js` with quiz engine and QuizChoice module**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(initQuiz);
});

function initQuiz(el) {
  const type = el.dataset.type;
  switch (type) {
    case 'choice': QuizChoice(el); break;
    case 'fill-blank': QuizFillBlank(el); break;
    case 'drag-drop': QuizDragDrop(el); break;
    case 'match': QuizMatch(el); break;
    case 'open': QuizOpen(el); break;
    case 'add-own': QuizAddOwn(el); break;
  }
}

function QuizChoice(el) {
  const answer = parseInt(el.dataset.answer, 10);
  const options = el.querySelectorAll('.quiz__options label');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');
  const isMulti = el.dataset.multi === 'true';

  checkBtn.addEventListener('click', () => {
    let selected;
    if (isMulti) {
      selected = Array.from(el.querySelectorAll('.quiz__options input:checked'))
        .map(cb => parseInt(cb.value, 10));
      const correct = String(el.dataset.answer).split(',').map(Number);
      const isCorrect = selected.length === correct.length &&
        correct.every(a => selected.includes(a));
      showFeedback(feedback, isCorrect);
    } else {
      const checked = el.querySelector('.quiz__options input:checked');
      if (!checked) {
        feedback.textContent = 'Оберіть варіант відповіді';
        feedback.className = 'quiz__feedback quiz__feedback--warn';
        return;
      }
      selected = parseInt(checked.value, 10);
      showFeedback(feedback, selected === answer);
    }
    options.forEach((opt, i) => {
      const isCorrectOpt = isMulti
        ? String(el.dataset.answer).split(',').includes(String(i + 1))
        : (i + 1) === answer;
      opt.classList.add(isCorrectOpt ? 'quiz__opt--correct' : 'quiz__opt--wrong');
    });
    checkBtn.disabled = true;
  });
}

function showFeedback(el, isCorrect) {
  el.textContent = isCorrect ? '✓ Правильно!' : '✗ Спробуйте ще раз';
  el.className = `quiz__feedback quiz__feedback--${isCorrect ? 'success' : 'error'}`;
}
```

- [ ] **Step 2: Add quiz styles to `styles/base.css`**

Append to `styles/base.css`:

```css
/* Quiz base styles */
.quiz {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.25rem;
  margin: 1.25rem 0;
}

.quiz__question {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.quiz__options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.quiz__options label {
  display: block;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.quiz__opt--correct {
  background: #dcfce7 !important;
  border-color: #22c55e !important;
}

.quiz__opt--wrong {
  background: #fee2e2 !important;
  border-color: #ef4444 !important;
}

.quiz__check {
  margin-right: 0.5rem;
}

.quiz__feedback {
  margin-top: 0.5rem;
  font-weight: 500;
}

.quiz__feedback--success { color: #16a34a; }
.quiz__feedback--error { color: #dc2626; }
.quiz__feedback--warn { color: #d97706; }
```

- [ ] **Step 3: Commit**

```bash
git add scripts/interactive.js styles/base.css
git commit -m "feat: quiz engine and QuizChoice module with base quiz styles"
```

---

## Task 7: Interactive JS — QuizFillBlank

**Files:**
- Modify: `scripts/interactive.js`

- [ ] **Step 1: Add QuizFillBlank function to `scripts/interactive.js`**

Add after the `QuizChoice` function:

```javascript
function QuizFillBlank(el) {
  const inputs = el.querySelectorAll('.quiz__blank');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    inputs.forEach(input => {
      const correct = input.dataset.answer.toLowerCase().trim();
      const userVal = input.value.toLowerCase().trim();
      if (userVal === correct) {
        input.classList.remove('quiz__blank--wrong');
        input.classList.add('quiz__blank--correct');
      } else {
        input.classList.add('quiz__blank--wrong');
        input.classList.remove('quiz__blank--correct');
        allCorrect = false;
      }
    });
    showFeedback(feedback, allCorrect);
  });
}
```

- [ ] **Step 2: Add fill-blank styles to `styles/base.css`**

Append to `styles/base.css`:

```css
.quiz__blank {
  display: inline-block;
  border: 1px solid #ccc;
  border-bottom: 2px solid #555;
  padding: 0.2rem 0.5rem;
  font-size: inherit;
  font-family: inherit;
  width: 120px;
  background: transparent;
  border-radius: 2px;
}

.quiz__blank--correct {
  border-color: #22c55e;
  background: #dcfce7;
}

.quiz__blank--wrong {
  border-color: #ef4444;
  background: #fee2e2;
}
```

- [ ] **Step 3: Commit**

```bash
git add scripts/interactive.js styles/base.css
git commit -m "feat: QuizFillBlank module with blank input styles"
```

---

## Task 8: Interactive JS — QuizMatch

**Files:**
- Modify: `scripts/interactive.js`

- [ ] **Step 1: Add QuizMatch function to `scripts/interactive.js`**

```javascript
function QuizMatch(el) {
  const leftItems = el.querySelectorAll('.quiz__match-left .quiz__match-item');
  const rightItems = el.querySelectorAll('.quiz__match-right .quiz__match-item');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');
  const pairs = {};
  let selectedLeft = null;

  leftItems.forEach(item => {
    item.addEventListener('click', () => {
      leftItems.forEach(i => i.classList.remove('quiz__match-item--selected'));
      item.classList.add('quiz__match-item--selected');
      selectedLeft = item.dataset.id;
    });
  });

  rightItems.forEach(item => {
    item.addEventListener('click', () => {
      if (!selectedLeft) return;
      rightItems.forEach(i => i.classList.remove('quiz__match-item--selected'));
      item.classList.add('quiz__match-item--selected');
      pairs[selectedLeft] = item.dataset.id;
      leftItems.forEach(i => {
        if (i.dataset.id === selectedLeft) i.classList.add('quiz__match-item--paired');
      });
      item.classList.add('quiz__match-item--paired');
      selectedLeft = null;
      clearLines(el);
      drawLines(el, pairs, leftItems, rightItems);
    });
  });

  checkBtn.addEventListener('click', () => {
    const correctPairs = JSON.parse(el.dataset.pairs);
    let allCorrect = true;
    for (const [leftId, rightId] of Object.entries(correctPairs)) {
      if (pairs[leftId] !== rightId) {
        allCorrect = false;
        break;
      }
    }
    showFeedback(feedback, allCorrect);
  });
}

function clearLines(el) {
  el.querySelectorAll('.quiz__match-line').forEach(l => l.remove());
}

function drawLines(el, pairs, leftItems, rightItems) {
  const svg = el.querySelector('.quiz__match-svg');
  if (!svg) return;
  const svgRect = svg.getBoundingClientRect();
  for (const [leftId, rightId] of Object.entries(pairs)) {
    const left = el.querySelector(`.quiz__match-left .quiz__match-item[data-id="${leftId}"]`);
    const right = el.querySelector(`.quiz__match-right .quiz__match-item[data-id="${rightId}"]`);
    if (!left || !right) continue;
    const lRect = left.getBoundingClientRect();
    const rRect = right.getBoundingClientRect();
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lRect.right - svgRect.left);
    line.setAttribute('y1', lRect.top + lRect.height / 2 - svgRect.top);
    line.setAttribute('x2', rRect.left - svgRect.left);
    line.setAttribute('y2', rRect.top + rRect.height / 2 - svgRect.top);
    line.setAttribute('class', 'quiz__match-line');
    line.setAttribute('stroke', '#6b21a8');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  }
}
```

- [ ] **Step 2: Add match quiz styles to `styles/base.css`**

```css
.quiz__match-container {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: 1rem 0;
  position: relative;
}

.quiz__match-left, .quiz__match-right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quiz__match-item {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

.quiz__match-item--selected {
  border-color: #2563eb;
  background: #dbeafe;
}

.quiz__match-item--paired {
  background: #f3e8ff;
  border-color: #6b21a8;
}

.quiz__match-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
```

- [ ] **Step 3: Commit**

```bash
git add scripts/interactive.js styles/base.css
git commit -m "feat: QuizMatch module with visual pair connections"
```

---

## Task 9: Interactive JS — QuizDragDrop

**Files:**
- Modify: `scripts/interactive.js`

- [ ] **Step 1: Add QuizDragDrop function to `scripts/interactive.js`**

```javascript
function QuizDragDrop(el) {
  const draggables = el.querySelectorAll('.quiz__drag-item');
  const zones = el.querySelectorAll('.quiz__drop-zone');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');

  draggables.forEach(item => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.classList.add('quiz__drag-item--dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('quiz__drag-item--dragging');
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('quiz__drop-zone--over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('quiz__drop-zone--over');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('quiz__drop-zone--over');
      const dragId = e.dataTransfer.getData('text/plain');
      const dragItem = el.querySelector(`.quiz__drag-item[data-id="${dragId}"]`);
      if (dragItem) {
        if (zone.firstChild && zone.firstChild.classList.contains('quiz__drag-item')) {
          const parent = dragItem.parentElement;
          if (parent.classList.contains('quiz__drop-zone')) {
            parent.appendChild(zone.firstChild);
          } else {
            el.querySelector('.quiz__drag-bank').appendChild(zone.firstChild);
          }
        }
        zone.appendChild(dragItem);
      }
    });
  });

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    zones.forEach(zone => {
      const item = zone.querySelector('.quiz__drag-item');
      if (item && item.dataset.id === zone.dataset.accept) {
        zone.classList.add('quiz__drop-zone--correct');
        zone.classList.remove('quiz__drop-zone--wrong');
      } else {
        zone.classList.add('quiz__drop-zone--wrong');
        zone.classList.remove('quiz__drop-zone--correct');
        allCorrect = false;
      }
    });
    showFeedback(feedback, allCorrect);
  });
}
```

- [ ] **Step 2: Add drag-drop styles to `styles/base.css`**

```css
.quiz__drag-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.quiz__drag-item {
  padding: 0.4rem 0.75rem;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: grab;
  user-select: none;
}

.quiz__drag-item--dragging {
  opacity: 0.5;
}

.quiz__drop-zones {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quiz__drop-zone {
  min-height: 2.5rem;
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quiz__drop-zone--over {
  border-color: #2563eb;
  background: #dbeafe;
}

.quiz__drop-zone--correct {
  border-color: #22c55e;
  border-style: solid;
  background: #dcfce7;
}

.quiz__drop-zone--wrong {
  border-color: #ef4444;
  border-style: solid;
  background: #fee2e2;
}
```

- [ ] **Step 3: Commit**

```bash
git add scripts/interactive.js styles/base.css
git commit -m "feat: QuizDragDrop module with HTML5 drag and drop"
```

---

## Task 10: Interactive JS — QuizOpen and QuizAddOwn

**Files:**
- Modify: `scripts/interactive.js`

- [ ] **Step 1: Add QuizOpen function**

```javascript
function QuizOpen(el) {
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');
  const reference = el.querySelector('.quiz__reference');
  const textarea = el.querySelector('.quiz__textarea');

  checkBtn.addEventListener('click', () => {
    if (textarea.value.trim().length < 3) {
      feedback.textContent = 'Напишіть вашу відповідь';
      feedback.className = 'quiz__feedback quiz__feedback--warn';
      return;
    }
    reference.style.display = 'block';
    feedback.textContent = 'Порівняйте вашу відповідь з еталонною';
    feedback.className = 'quiz__feedback quiz__feedback--info';
    checkBtn.disabled = true;
  });
}
```

- [ ] **Step 2: Add QuizAddOwn function**

```javascript
function QuizAddOwn(el) {
  const input = el.querySelector('.quiz__add-input');
  const addBtn = el.querySelector('.quiz__add-btn');
  const list = el.querySelector('.quiz__add-list');
  const reference = el.querySelector('.quiz__reference');

  addBtn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) return;
    const item = document.createElement('li');
    item.textContent = val;
    list.appendChild(item);
    input.value = '';
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addBtn.click();
    }
  });
}
```

- [ ] **Step 3: Add open/add-own styles to `styles/base.css`**

```css
.quiz__textarea {
  width: 100%;
  min-height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  margin-bottom: 0.5rem;
  resize: vertical;
}

.quiz__reference {
  display: none;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 4px;
  padding: 0.75rem;
  margin-top: 0.75rem;
  font-size: 0.9375rem;
}

.quiz__feedback--info { color: #0369a1; }

.quiz__add-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.quiz__add-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.4rem 0.5rem;
  font-family: inherit;
}

.quiz__add-list {
  list-style: none;
  padding: 0;
}

.quiz__add-list li {
  padding: 0.3rem 0.5rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin: 0.25rem 0;
}
```

- [ ] **Step 4: Commit**

```bash
git add scripts/interactive.js styles/base.css
git commit -m "feat: QuizOpen and QuizAddOwn modules with text input styles"
```

---

## Task 11: Quiz Include Template

**Files:**
- Create: `_includes/quiz.html`

- [ ] **Step 1: Create `_includes/quiz.html` as a reusable template reference**

This include serves as documentation and example for quiz markup in content files:

```html
<!-- Quiz include template — use HTML blocks directly in .md files -->

<!-- Example: QuizChoice -->
<!--
<div class="quiz" data-type="choice" data-answer="2">
  <p class="quiz__question">Питання?</p>
  <div class="quiz__options">
    <label><input type="radio" name="q1" value="1"> Варіант 1</label>
    <label><input type="radio" name="q1" value="2"> Варіант 2</label>
    <label><input type="radio" name="q1" value="3"> Варіант 3</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>
-->

<!-- Example: QuizFillBlank -->
<!--
<div class="quiz" data-type="fill-blank">
  <p class="quiz__question">Центральний процесор — це <input class="quiz__blank" data-answer="процесор"> комп'ютера.</p>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>
-->

<!-- Example: QuizMatch -->
<!--
<div class="quiz" data-type="match" data-pairs='{"cpu":"обробка","ram":"оперативна пам’ять","ssd":"зберігання"}'>
  <p class="quiz__question">Знайдіть пари</p>
  <div class="quiz__match-container">
    <svg class="quiz__match-svg"></svg>
    <div class="quiz__match-left">
      <div class="quiz__match-item" data-id="cpu">Процесор</div>
      <div class="quiz__match-item" data-id="ram">ОЗП</div>
      <div class="quiz__match-item" data-id="ssd">SSD</div>
    </div>
    <div class="quiz__match-right">
      <div class="quiz__match-item" data-id="обробка">Обробка даних</div>
      <div class="quiz__match-item" data-id="оперативна пам’ять">Оперативна пам’ять</div>
      <div class="quiz__match-item" data-id="зберігання">Зберігання даних</div>
    </div>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>
-->

<!-- Example: QuizDragDrop -->
<!--
<div class="quiz" data-type="drag-drop">
  <p class="quiz__question">Розмістіть пристрої у відповідні категорії</p>
  <div class="quiz__drag-bank">
    <div class="quiz__drag-item" data-id="keyboard">Клавіатура</div>
    <div class="quiz__drag-item" data-id="monitor">Монітор</div>
    <div class="quiz__drag-item" data-id="cpu">Процесор</div>
  </div>
  <div class="quiz__drop-zones">
    <div class="quiz__drop-zone" data-accept="keyboard">Введення: </div>
    <div class="quiz__drop-zone" data-accept="monitor">Виведення: </div>
    <div class="quiz__drop-zone" data-accept="cpu">Обробка: </div>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>
-->

<!-- Example: QuizOpen -->
<!--
<div class="quiz" data-type="open">
  <p class="quiz__question">Поясніть, що таке тактова частота процесора.</p>
  <textarea class="quiz__textarea" placeholder="Ваша відповідь..."></textarea>
  <button class="quiz__check btn btn--primary">Показати еталон</button>
  <div class="quiz__reference">Тактова частота — кількість операцій за секунду, вимірюється в гігагерцах (ГГц).</div>
  <div class="quiz__feedback"></div>
</div>
-->

<!-- Example: QuizAddOwn -->
<!--
<div class="quiz" data-type="add-own">
  <p class="quiz__question">Назвіть пристрої введення, які ви знаєте.</p>
  <div class="quiz__add-row">
    <input class="quiz__add-input" placeholder="Введіть пристрій...">
    <button class="quiz__add-btn btn btn--secondary">Додати</button>
  </div>
  <ul class="quiz__add-list"></ul>
  <div class="quiz__reference">Еталон: клавіатура, миша, мікрофон, сканер, веб-камера, touchscreen</div>
</div>
-->
```

- [ ] **Step 2: Commit**

```bash
git add _includes/quiz.html
git commit -m "feat: quiz include template with all 6 quiz type examples"
```

---

## Task 12: Extract Content — 7th Grade Curriculum

**Files:**
- Read: `materials/Модельна навчальна програма Інформатика 7-9 класи. Морзе, Барна. 2023.pdf`
- Read: `materials/Навчальна програма Інформатика 7 клас Морзе Барна 2024 - 2 год.docx` (most detailed variant)
- Read: `materials/Навчальна програма Інформатика 7 клас Ривкінд та інші 2024.docx`
- Read: `materials/МНП_Інформатика_7-9_кл_Ривкінд_та_ін_2023.docx`

- [ ] **Step 1: Read Морзе/Барна curriculum PDF**

Extract the "Цифрові пристрої" section — learning outcomes, required content, and hour allocation.

- [ ] **Step 2: Read Ривкінд 7th grade curriculum DOCX**

Extract the corresponding section from Ривкінд's program.

- [ ] **Step 3: Synthesize both curricula into content outline**

Combine overlapping and unique content from both programs. Write the outline as a structured list of subsections with key concepts per subsection. This outline drives the content creation in Task 14.

- [ ] **Step 4: Commit the outline**

Save outline to a temporary working file if needed, then proceed to content creation.

---

## Task 13: Extract Content — 8th Grade Curriculum

**Files:**
- Read: `materials/Навчальна програма Інформатика 8 клас Ривкінд та інші 2025.docx`
- Read: `materials/Ривкінд_Інформатика_8_(на вибір вчителів)(1).docx`

- [ ] **Step 1: Read Ривкінд 8th grade curriculum DOCX**

Extract the "Цифрові пристрої" section — learning outcomes, content requirements.

- [ ] **Step 2: Read Ривкінд 8th grade textbook DOCX**

Extract the relevant chapter(s) on digital devices — key concepts, definitions, diagrams, examples.

- [ ] **Step 3: Synthesize into 8th grade content outline**

Create structured outline with subsections and key concepts for 8th grade.

---

## Task 14: 7th Grade Theory Content

**Files:**
- Create: `class7/theory/main-content.md`
- Create: `class7/theory/examples.md`

- [ ] **Step 1: Write `class7/theory/main-content.md`**

Content based on the outline from Task 12. Structure:
- Types of digital devices (computer, smartphone, tablet, IoT)
- Computer components (CPU, RAM, storage, I/O devices)
- Software categories (system, application, programming)
- Safe usage rules

Each subsection includes definitions, explanations in accessible Ukrainian, and real-world examples.

- [ ] **Step 2: Write `class7/theory/examples.md`**

Practical examples for each theory section: device comparisons, component identification, software classification exercises.

- [ ] **Step 3: Commit**

```bash
git add class7/theory/
git commit -m "feat: 7th grade theory and examples content"
```

---

## Task 15: 8th Grade Theory Content

**Files:**
- Create: `class8/theory/main-content.md`
- Create: `class8/theory/examples.md`

- [ ] **Step 1: Write `class8/theory/main-content.md`**

Content based on the outline from Task 13. Structure:
- Computer architecture (von Neumann, CPU details)
- Peripheral devices and characteristics
- Operating systems and system software
- Network devices and protocols

Each subsection deeper than 7th grade, with technical details.

- [ ] **Step 2: Write `class8/theory/examples.md`**

Technical examples: spec comparisons, OS features, network topology diagrams.

- [ ] **Step 3: Commit**

```bash
git add class8/theory/
git commit -m "feat: 8th grade theory and examples content"
```

---

## Task 16: 7th Grade Practice and Tests

**Files:**
- Create: `class7/practice/tasks.md`
- Create: `class7/practice/projects.md`
- Create: `class7/tests/self-check.md`

- [ ] **Step 1: Write `class7/practice/tasks.md`**

Basic-level tasks: device recognition, term matching, classification exercises. Include QuizChoice and QuizFillBlank interactive elements embedded in HTML blocks.

- [ ] **Step 2: Write `class7/practice/projects.md`**

Simple projects: research a device, create a device classification poster.

- [ ] **Step 3: Write `class7/tests/self-check.md`**

Self-check quiz with multiple quiz types: QuizChoice (3-4 questions), QuizMatch (1), QuizDragDrop (1), QuizFillBlank (2-3), QuizOpen (1-2).

- [ ] **Step 4: Commit**

```bash
git add class7/practice/ class7/tests/
git commit -m "feat: 7th grade practice tasks, projects, and self-check quiz"
```

---

## Task 17: 8th Grade Practice and Tests

**Files:**
- Create: `class8/practice/tasks.md`
- Create: `class8/practice/projects.md`
- Create: `class8/tests/self-check.md`

- [ ] **Step 1: Write `class8/practice/tasks.md`**

Advanced tasks: analyzing device specifications, comparing OS features, network troubleshooting scenarios. Include QuizChoice, QuizFillBlank, QuizDragDrop, and QuizMatch.

- [ ] **Step 2: Write `class8/practice/projects.md`**

Mini-research projects: compare two devices by specs, investigate home network setup, audit OS security settings.

- [ ] **Step 3: Write `class8/tests/self-check.md`**

Self-check quiz with more challenging questions: QuizChoice (4-5), QuizMatch (1), QuizDragDrop (1), QuizFillBlank (3-4), QuizOpen (2), QuizAddOwn (1).

- [ ] **Step 4: Commit**

```bash
git add class8/practice/ class8/tests/
git commit -m "feat: 8th grade practice tasks, projects, and self-check quiz"
```

---

## Task 18: Glossary

**Files:**
- Create: `_data/glossary.yml`
- Create: `class7/theory/glossary.md` (renders glossary filtered for class 7)
- Create: `class8/theory/glossary.md` (renders glossary filtered for class 8)

- [ ] **Step 1: Create `_data/glossary.yml`**

```yaml
- term: Процесор
  definition: Центральний пристрій обробки даних у комп'ютері
  class: [7, 8]
- term: Оперативна пам'ять
  definition: Пам'ять для тимчасового зберігання даних під час роботи комп'ютера
  class: [7, 8]
- term: Тактова частота
  definition: Кількість операцій, що виконує процесор за одну секунду
  class: [7, 8]
- term: Периферійний пристрій
  definition: Додатковий пристрій, підключений до комп'ютера
  class: [8]
```

(Full glossary populated with all terms from theory content)

- [ ] **Step 2: Create `class7/theory/glossary.md`**

```markdown
---
title: Глосарій — 7 клас
---

# Глосарій термінів

{% for item in site.data.glossary %}
{% if item.class contains 7 %}
**{{ item.term }}** — {{ item.definition }}
{% endif %}
{% endfor %}
```

- [ ] **Step 3: Create `class8/theory/glossary.md`**

```markdown
---
title: Глосарій — 8 клас
---

# Глосарій термінів

{% for item in site.data.glossary %}
{% if item.class contains 8 %}
**{{ item.term }}** — {{ item.definition }}
{% endif %}
{% endfor %}
```

- [ ] **Step 4: Commit**

```bash
git add _data/glossary.yml class7/theory/glossary.md class8/theory/glossary.md
git commit -m "feat: shared glossary with per-class filtered views"
```

---

## Task 19: Resources Page

**Files:**
- Create: `resources/links.md`

- [ ] **Step 1: Create `resources/links.md`**

```markdown
---
layout: default
title: Додаткові ресурси
---

# Додаткові ресурси

## Підручники
- Морзе Н., Барна О. Інформатика. 7 клас — Оріон
- Ривкінд І. та ін. Інформатика. 7 клас
- Ривкінд І. та ін. Інформатика. 8 клас

## Корисні сайти
- [Дія.Освіта](https://osvita.diia.gov.ua/) — освітня платформа
- [Навчальні матеріали МОН](https://mon.gov.ua/) — офіційні матеріали

## Відео
- (Додати посилання на відеоуроки після пошуку)
```

- [ ] **Step 2: Commit**

```bash
git add resources/links.md
git commit -m "feat: resources page with textbooks and useful links"
```

---

## Task 20: README with AI Tools Disclosure

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**

```markdown
# Цифрові пристрої — Навчальні матеріали з інформатики

Навчальні матеріали з теми «Цифрові пристрої» для 7 та 8 класу загальноосвітньої школи. Об'єднує програми авторських колективів Морзе/Барна та Ривкінд.

## Структура

- **7 клас** — яскравий, ігровий дизайн, базовий рівень
- **8 клас** — мінімалістичний стиль, поглиблений рівень

Кожен клас містить: теорію, приклади, практичні завдання, проекти, самоперевірку.

## Технології

- Jekyll + GitHub Pages
- Vanilla JavaScript (інтерактивні тести)
- CSS (два стилі оформлення)

## Інструменти ШІ, використані для створення контенту

- Claude (Anthropic) — генерація теоретичного матеріалу, практичних завдань, тестів, глосарію
- Claude Code — розробка структуру сайту, CSS, JavaScript

## Як запустити локально

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

## Ліцензія

Навчальні матеріали призначені для використання в освітніх цілях.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "feat: README with project overview and AI tools disclosure"
```

---

## Task 21: GitHub Pages Configuration and Final Verification

**Files:**
- Modify: `_config.yml` (if needed)

- [ ] **Step 1: Verify Jekyll build works locally**

```bash
bundle exec jekyll build
```

If Ruby/Jekyll not installed, verify file structure is correct for GitHub Pages auto-build.

- [ ] **Step 2: Push to GitHub and enable GitHub Pages**

Push to main branch. In GitHub repo Settings > Pages, set Source to "Deploy from a branch" and select `main` / `/ (root)`.

- [ ] **Step 3: Test all interactive quiz types**

Open site in browser, navigate to each self-check page, verify all 6 quiz types work correctly.

- [ ] **Step 4: Test responsive design**

Check site on mobile viewport (375px), tablet (768px), and desktop (1100px+).

- [ ] **Step 5: Fix any issues found during testing**

- [ ] **Step 6: Final commit and push**

```bash
git add -A
git commit -m "feat: final fixes after testing"
git push
```