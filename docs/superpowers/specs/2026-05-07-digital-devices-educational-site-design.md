# Design: Цифрові пристрої — Educational Site for 7th & 8th Grade

**Date:** 2026-05-07
**Status:** Approved

## Overview

Ukrainian-language educational site on "Цифрові пристрої" (Digital Devices) for 7th and 8th grade informatics classes. Published via GitHub Pages using Jekyll. Content combines curricula from Морзе/Барна and Ривкінд textbook teams. The site features two distinct visual styles per grade level and six types of interactive quiz modules.

## Architecture

```
inf78/
├── _config.yml                 # Jekyll configuration
├── _layouts/
│   ├── default.html             # Base layout (nav, footer)
│   ├── class7.html              # 7th grade layout (bright, playful)
│   └── class8.html              # 8th grade layout (minimalist, "Diia" style)
├── _includes/
│   ├── nav.html                 # Navigation
│   ├── footer.html              # Footer
│   └── quiz.html                # Interactive quiz template
├── _data/
│   └── glossary.yml             # Shared glossary of terms
├── class7/
│   ├── index.md                 # 7th grade landing page
│   ├── theory/
│   │   ├── main-content.md      # 7th grade theory
│   │   └── examples.md          # Examples
│   ├── practice/
│   │   ├── tasks.md             # Tasks
│   │   └── projects.md          # Projects
│   └── tests/
│       └── self-check.md        # Self-check quiz
├── class8/
│   ├── index.md                 # 8th grade landing page
│   ├── theory/
│   │   ├── main-content.md      # 8th grade theory
│   │   └── examples.md
│   ├── practice/
│   │   ├── tasks.md
│   │   └── projects.md
│   └── tests/
│       └── self-check.md
├── resources/
│   ├── images/
│   └── links.md
├── styles/
│   ├── base.css                 # Shared styles
│   ├── class7.css               # Bright/playful style
│   └── class8.css               # Minimalist "Diia" style
├── scripts/
│   └── interactive.js           # All interactivity (modular)
└── index.md                     # Main page (class selection)
```

Each page specifies its layout via frontmatter (`layout: class7` or `layout: class8`), which determines which CSS and visual style is applied.

## Interactive Elements

`interactive.js` contains six quiz modules, each initialized from HTML blocks with `data-type` attributes:

| Module | Type | Implementation |
|--------|------|---------------|
| `QuizChoice` | Multiple choice | Radio (single) or checkboxes (multi), instant feedback with color highlighting |
| `QuizDragDrop` | Drag-and-drop | HTML5 Drag & Drop API — drag items to drop zones |
| `QuizFillBlank` | Fill in the blanks | Input fields within sentences, check on Enter or button click |
| `QuizOpen` | Open questions | Textarea, reference answer shown after button press |
| `QuizAddOwn` | Add your own answer | Text input + "Add" button, comparison with reference displayed |
| `QuizMatch` | Match pairs | Two columns — click left then right to create pairs, visual connections |

Quiz markup in Markdown uses HTML blocks with data attributes:

```html
<div class="quiz" data-type="choice" data-answer="2">
  <p class="quiz__question">Що таке центральний процесор?</p>
  <div class="quiz__options">
    <label><input type="radio" name="q1"> Пристрій введення</label>
    <label><input type="radio" name="q1"> Пристрій обробки даних</label>
    <label><input type="radio" name="q1"> Пристрій зберігання</label>
  </div>
  <button class="quiz__check">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>
```

JS scans for all `.quiz` elements on page load and initializes the matching module based on `data-type`.

**Implementation order:** QuizChoice & QuizFillBlank first (simplest), then QuizMatch & QuizDragDrop (visual), then QuizOpen & QuizAddOwn (text-based).

## Visual Design

### 7th Grade — Bright & Playful

- **Colors:** Purple→blue gradient accent, bright yellow buttons, white background, colorful cards
- **Typography:** Large font, rounded headings, emoji as section icons
- **Cards:** Border-radius 16px, box-shadow, hover scale effect
- **Buttons:** Large, rounded, press animation
- **Navigation:** Horizontal with icons, colored active tab

### 8th Grade — Minimalist "Diia" Style

- **Colors:** Dark navy (#1a1a2e) primary, cyan (#00a7e1) accent, gray (#f5f5f5) background, white cards
- **Typography:** Clean sans-serif (Inter or system), minimal decoration
- **Cards:** Flat, thin borders, no shadows, 4px radius
- **Buttons:** Flat, clear, accent color, no animations
- **Navigation:** Vertical sidebar or minimal horizontal bar

### Shared (`base.css`)

- Responsive grid (mobile-first)
- Cyrillic-capable sans-serif font stack
- Markdown styles for tables, code, lists
- Max-width 1100px centered container

## Content Strategy

### Sources

| Grade | Textbook | Curriculum |
|-------|----------|------------|
| 7th | Морзе/Барна «Інформатика 7» (Оріон) + Ривкінд «Інформатика 7» | Programs for 1/1.5/2 hrs/week |
| 8th | Ривкінд «Інформатика 8» (на вибір вчителів) | 8th grade program 2025 |

### Process

1. **Extract from PDF/DOCX** — read textbooks, extract key concepts, definitions, examples
2. **Synthesize programs** — map learning outcomes from both curricula, combine shared and distinct content
3. **Adapt** — rephrase for clarity, add modern examples (smartphones, cloud services)

### Theory Topics

**7th grade — "Цифрові пристрої":**
- Types of digital devices (computer, smartphone, tablet, smart devices)
- Computer components (processor, memory, input/output devices)
- Software of digital devices
- Safe usage rules

**8th grade — "Цифрові пристрої":**
- Computer architecture (in depth)
- Peripheral devices and their characteristics
- Operating systems and system software
- Network devices and protocols

### Practice Tasks

- **7th grade:** Basic — device recognition, term matching, simple quizzes
- **8th grade:** Advanced — analyzing specifications, comparing devices, mini-research

### Glossary

Shared `_data/glossary.yml` with terms tagged per class: `class: [7]`, `class: [8]`, or `class: [7, 8]`.

## Build & Deployment

- Jekyll builds the site from Markdown + layouts
- GitHub Pages serves from the `gh-pages` branch or `main` branch
- No external dependencies — pure Jekyll + vanilla JS + CSS
- `README.md` must list AI tools used for content generation

## Grading Alignment

| Criterion (points) | How addressed |
|---------------------|---------------|
| Planning & structure (10) | Two-class structure, curriculum-aligned topics |
| Content quality (30) | Extracted from textbooks, synthesized, adapted |
| Technical implementation (25) | Jekyll + custom JS, responsive, interactive quizzes |
| Testing & refinement (15) | Self-check quizzes built in, to be tested before submission |
| Presentation (20) | Site serves as demo, README documents AI tools used |