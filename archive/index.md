---
title: Archive
eyebrow: Full archive
description: The complete preserved SEO by the Sea collection, listed newest first.
permalink: /archive/
---

{% assign posts = site.pages | where_exp: "item", "item.archived_post == true" | sort: "date_published" | reverse %}

This is the full archive: **{{ posts | size }}** preserved posts from SEO by the Sea,
listed newest first. Each reader page keeps the original source URL and
available preservation metadata.

<p class="page-actions">
  <a class="button" href="{{ '/search/' | relative_url }}">Search archive</a>
  <a class="button secondary" href="{{ '/start-here/' | relative_url }}">Start Here</a>
</p>

## Full Archive

<ol class="archive-list">
{% for post in posts %}
  <li>
    <a class="item-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="item-meta">
      {% if post.date_published %}{{ post.date_published | date: "%B %-d, %Y" }}{% endif %}
      {% if post.source_url %} / <a href="{{ post.source_url }}">Original source</a>{% endif %}
    </span>
  </li>
{% endfor %}
</ol>

<div class="supporting-links">
  <strong>Supporting archive files</strong>
  <a href="{{ '/years/' | relative_url }}">Year index</a>
  <a href="{{ '/topics/' | relative_url }}">Topic index</a>
  <a href="POSTS.md">Post inventory</a>
  <a href="AUDIT.md">Audit notes</a>
  <a href="posts_manifest.json">JSON manifest</a>
  <a href="posts_manifest.csv">CSV manifest</a>
  <a href="https://github.com/deepakness/seo-by-the-sea-archive">GitHub repository</a>
</div>
