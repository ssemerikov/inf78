# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ukrainian-language educational materials on "Цифрові пристрої" (Digital Devices) for 7th/8th grade informatics classes. This is a university lab assignment (Лабораторна робота №2) to create educational content using generative AI, published as a GitHub Pages site with theory, practice tasks, interactive quizzes, and a glossary.

Content combines curricula from two textbook author teams: Морзе/Барна and Ривкінд.

## Source Materials

All curriculum documents and textbooks are in `materials/`:
- **Морзе/Барна**: 7th grade textbook (`7_kl_Informatyka_Морзе, Барна_Оріон.pdf`), model program PDF (`Модельна навчальна програма...Морзе, Барна. 2023.pdf`), curriculum docs for 1/1.5/2 hours/week variants (`.docx`)
- **Ривкінд**: 7th grade textbook (`Ривкінд_Інформатика_П_7.pdf`), 8th grade textbook (`Ривкінд_Інформатика_8_(на вибір вчителів).pdf`), 7th and 8th grade curricula (`.docx`), model program PDF

Reference these PDFs/DOCXes when creating content to align with official learning outcomes.

## Target Repository Structure

The site structure (not yet built):

```
├── index.md              # Title page: topic, target audience, author
├── theory/
│   ├── main-content.md   # Theory with explanations and illustrations
│   ├── examples.md
│   └── glossary.md       # Key terms glossary
├── practice/
│   ├── tasks.md          # Multi-level difficulty tasks
│   ├── labs.md
│   └── projects.md
├── tests/
│   ├── self-check.md     # Self-check quiz (various question types)
│   └── assessment.md
├── resources/
│   ├── images/
│   └── links.md          # Additional resources, literature, videos
├── styles/
│   └── custom.css
└── scripts/
    └── interactive.js    # Quiz interactivity
```

## Technical Requirements

- Markdown content, deployed via GitHub Pages (Jekyll)
- Responsive design for all devices
- Interactive self-check quizzes (JavaScript)
- Correct rendering of formulas and code blocks
- Working navigation between sections
- README.md must list which AI tools were used for content generation

## Lab Grading Criteria

| Criterion | Points | Focus |
|-----------|--------|-------|
| Planning & structure | 10 | Clear goals, logical structure, curriculum alignment |
| Content quality | 30 | Scientific accuracy, accessibility, material variety |
| Technical implementation | 25 | GitHub Pages functionality, code quality, design |
| Testing & refinement | 15 | Quality of testing, incorporating feedback |
| Presentation | 20 | Completeness of demo, presentation quality, reflection |

## Language

All user-facing content is in Ukrainian. Code comments and technical identifiers may be in English.

## Important Directories

- `materials/` — source PDFs and DOCXes for curriculum alignment
- `не читати, не використовувати/` — **never read or use files from this directory**

## Current Status

Repository contains only source materials and planning docs. No site content has been built yet. Next step: extract and synthesize curriculum content from source materials, then build the GitHub Pages site structure.