---
title: Глосарій — 8 клас
---

# Глосарій термінів

{% for item in site.data.glossary %}
{% if item.class contains 8 %}
**{{ item.term }}** — {{ item.definition }}
{% endif %}
{% endfor %}