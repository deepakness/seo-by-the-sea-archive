---
title: Search
eyebrow: Search
description: Search titles, dates, slugs, source URLs, and short content excerpts from the archive.
permalink: /search/
---

Search the preserved posts by topic, company, patent, algorithm, date, source
URL, or phrase.

<form class="search-form" action="{{ '/search/' | relative_url }}" method="get">
  <label class="visually-hidden" for="archive-search">Search archive</label>
  <input id="archive-search" data-search-input name="q" type="search" autocomplete="off" placeholder="Try PageRank, entities, local search, patents">
  <button class="button" type="submit">Search</button>
</form>

<p class="search-status" data-search-status>Loading search index...</p>
<ol class="result-list" data-search-results></ol>
