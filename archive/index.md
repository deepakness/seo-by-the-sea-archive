---
title: Archive
description: Browse the preserved SEO by the Sea collection and its supporting metadata.
permalink: /archive/
---

{% assign posts = site.pages | where_exp: "item", "item.archived_post == true" | sort: "date_published" | reverse %}

This archive contains **{{ posts | size }}** preserved posts from SEO by the Sea.
Each post keeps its original source URL in the front matter and links back to
the source from the reader page.

## Browse

- [Start with curated reading paths]({{ '/start-here/' | relative_url }})
- [Browse by year]({{ '/years/' | relative_url }})
- [Browse by topic]({{ '/topics/' | relative_url }})
- [Search all posts]({{ '/search/' | relative_url }})

## Preservation Files

- [Full post inventory](POSTS.md)
- [Archive audit](AUDIT.md)
- [JSON manifest](posts_manifest.json)
- [CSV manifest](posts_manifest.csv)

## Recent Posts in the Archive

<ol class="archive-list">
{% for post in posts limit: 40 %}
  <li>
    <a class="item-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="item-meta">
      {% if post.date_published %}{{ post.date_published | date: "%B %-d, %Y" }}{% endif %}
      {% if post.source_url %} / <a href="{{ post.source_url }}">Original source</a>{% endif %}
    </span>
  </li>
{% endfor %}
</ol>

[Browse the complete year-by-year archive]({{ '/years/' | relative_url }}).
