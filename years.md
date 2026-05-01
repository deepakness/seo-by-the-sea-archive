---
title: Browse by Year
description: A chronological index of the preserved SEO by the Sea posts.
permalink: /years/
---

{% assign posts = site.pages | where_exp: "item", "item.archived_post == true" | sort: "date_published" | reverse %}
{% assign current_year = "" %}

Use this page when you want to follow the archive through time.

{% for post in posts %}
  {% if post.date_published %}
    {% assign year = post.date_published | slice: 0, 4 %}
  {% else %}
    {% assign year = "Undated" %}
  {% endif %}

  {% if year != current_year %}
    {% unless forloop.first %}</ol>{% endunless %}
    <h2 id="{{ year | slugify }}">{{ year }}</h2>
    <ol class="archive-list">
    {% assign current_year = year %}
  {% endif %}

  <li>
    <a class="item-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="item-meta">
      {% if post.date_published %}{{ post.date_published | date: "%B %-d, %Y" }}{% endif %}
      {% if post.source_url %} / <a href="{{ post.source_url }}">Original source</a>{% endif %}
    </span>
  </li>
{% endfor %}
</ol>
