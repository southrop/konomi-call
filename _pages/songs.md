---
layout: page
title: pages.songs.title
icon: fa-list-music
order: 0
---

{% assign songs = site.songs | sort %}
{% for song in songs %}* [{% t song.title %}]({{ site.baseurl }}{{ song.url }})
{% endfor %}
