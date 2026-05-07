---
title: Глосарій — 7 клас
---

# Глосарій термінів

{% for item in site.data.glossary %}
{% if item.class contains 7 %}
**{{ item.term }}** — {{ item.definition }}
{% endif %}
{% endfor %}