---
title: "Context Sensitive Stemming for Web Search"
source_url: "https://www.seobythesea.com/2007/06/context-sensitive-stemming-for-web-search/"
slug: "context-sensitive-stemming-for-web-search"
date_published: "2007-06-11T20:59:23+00:00"
date_modified: "2020-07-11T20:54:53+00:00"
author: "Bill Slawski"
---

It is questionable how much most commercial search engines use stemming as part of the process involved in returning search results, because it could have the effect of reducing the relevance of search results, and because it can be a computationally expensive process.

Researchers at Yahoo! take a second look at stemming, and how it can be adapted to Web search in [Context Sensitive Stemming for Web Search](https://www.yumpu.com/en/document/read/43400270/context-aware-stemming-algorithm-for-semantically-related-root-) .

The paper explores using statistical language modeling to perform a context-sensitive stemming analysis, and predict which variants of words in a query will be useful when expanding a search for the query term. This can result in a lot less bad expansions, involving less computation and improving the precision of results.

Context-sensitive stemming document matching is also performed for the expanded variants.

The focus of this approach is the use of stemming as part of a query, rather than during indexing of a page. Doing that allows for an analysis in the context of the full query term, to try to find relevant results for the searcher.

The paper uses pluralization handling to show off their stemming approach, and tell us that “…as far as we know, no previous research has systematically investigated the usage of pluralization in Web search.” The method that they describe isn’t limited to pluralization, however.

The processes of performing a context-sensitive stemming analysis of a query term, and of document matching are described in detail in the paper and is definitely worth reading through if you are interested in how a search engine might return relevant results to a searcher.

The idea of stemming based upon the words used in a query, rather than at the time of indexing, appears to be a good one.
