---
layout: home
title: titles.title
description: titles.description
icon: fa-home
home: true
---

<header>
<h1>{% t titles.title %}</h1>
{% if site.lang == "ja" %}<h2>{% t titles.subtitle %}</h2>{% endif %}

{% tf pages/index.md %}
</header>

{% include tiles.html %}
