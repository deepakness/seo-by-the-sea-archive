---
title: "Why Sometimes Best Search Results aren't Always Top Search Results"
source_url: "https://www.seobythesea.com/2007/07/why-sometimes-best-search-results-arent-always-top-search-results/"
slug: "why-sometimes-best-search-results-arent-always-top-search-results"
date_published: "2007-07-27T00:58:50+00:00"
date_modified: "2012-02-18T22:17:34+00:00"
author: "Bill Slawski"
---

When we talk about the results that show up in search engines, we often do so in terms related to relevance and importance of those results.

Sometimes the results we see, and that we don’t see, are influenced by other factors, such as steps taken by the search engines to reduce the amount of work that they have to perform in order to return results to searchers.

**Using Two Tiers of Search Results**

If a search potentially returns thousands of results, and people only look at the first few pages of those results, it would make sense for a search engine to serve results in batches, and perhaps only initially use a modified (and much smaller) version of their database to answer search queries.

A first index tier may have a number of potential results pruned, so that documents that are more likely to be returned at top answers to searches are kept. The first batch of results returned to searchers may be taken from this pruned index.

While this approach allows a search engine to quickly return results for a search, it may provide a result sets page that miss some results that should have been included if those weren’t in this top tier of the index – with those documents appearing behind pages that are returned first.

A new paper from Alexandros Ntoulas of Microsoft and Junghoo Cho of UCLA, [Pruning Policies for Two-Tiered Inverted Index with Correctness Guarantee](http://oak.cs.ucla.edu/~cho/papers/ntoulas-sigir07.pdf), looks at avoiding “any degradation of result quality due to the pruning-based performance optimization, while still realizing most of its benefit.”

**Adding a Correctness Guarantee**

The paper provides suggestions for search engines on how they could use a “correctness guarantee” to make sure that top results are included in the pruned index:


> How can we avoid the potential degradation of search quality under the two-tier architecture? Our basic idea is straightforward: We use the top-k result from the p-index only if we know for sure that the result is the same as the top-k result from the full index.

The problem with that approach is that calculating both the top results of the pruned index and the full index is more work than just calculating the top results of the full index. Of course, that correctness guarantee doesn’t need to be run everytime someone searches for a particular query, and that’s where there’s potential savings in computational resources.

The paper delves into how often a correctness guarantee should be run for different queries, and policies for pruning certain keywords and documents.

It’s a nice discussion of how a search engine’s inverted index may be managed and optimized. It also covers the assumptions that the authors make concerning how modern commercial search engines rank documents.
