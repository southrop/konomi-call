---
layout: page
title: pages.songs.title
description: pages.songs.description
icon: fa-list-music
---
{% assign songs = site.songs | sort: 'order' %}
{% for song in songs %}* [{% t song.title %}]({{ site.baseurl }}{{ song.url }})
{% endfor %}
