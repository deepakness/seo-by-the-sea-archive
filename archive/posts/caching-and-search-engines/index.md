---
title: "Search Engine Caching"
source_url: "https://www.seobythesea.com/2007/06/caching-and-search-engines/"
slug: "caching-and-search-engines"
date_published: "2007-06-19T07:24:12+00:00"
date_modified: "2020-06-21T20:14:58+00:00"
author: "Bill Slawski"
---

Not every algorithm or process that a search engine comes up with is aimed at providing more relevant search results, or advertisements to go with those results. Some just focus upon getting results back to searchers quickly.

A nice paper from Yahoo research looks a some of the technical aspects behind how a search engine works, and some of the implications of those approaches: [The Impact of Caching on Search Engines](http://pomino.isti.cnr.it/~silvestr/wp-content/uploads/2011/02/sigir2007baezayates.pdf)


> In this paper we study the trade-offs in designing efficient caching systems for Web search engines. We explore the impact of different approaches, such as static vs. dynamic caching, and caching query results vs. caching posting lists. Using a query log spanning a whole year we explore the limitations of caching and we demonstrate that caching posting lists can achieve higher hit rates than caching query answers. We propose a new algorithm for static caching of posting lists, which outperforms previous methods. We also study the problem of finding the optimal way to split the static cache between answers and posting lists. Finally, we measure how the changes in the query log affect the effectiveness of static caching, given our observation that the distribution of the queries changes slowly over time. Our results and observations apply to different levels of the data-access hierarchy, for instance, for a memory/disk layer or a broker/remote server layer.
