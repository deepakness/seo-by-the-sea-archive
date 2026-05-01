---
title: "Search Engine APIs vs Search Engine Results"
source_url: "https://www.seobythesea.com/2007/05/search-engine-apis-vs-search-engine-results/"
slug: "search-engine-apis-vs-search-engine-results"
date_published: "2007-05-15T19:51:09+00:00"
date_modified: "2022-01-07T15:18:28+00:00"
author: "Bill Slawski"
---

A hat tip to [Frank McKown](http://frankmccown.blogspot.com/) and [Michael L. Nelson](https://www.cs.odu.edu/~mln/) who provide an answer to a question that I’ve heard a few times about the application programming interfaces (APIs) that search engines provide to researchers.

The question is, “How close are the results that are provided to researchers through those provided programming interfaces to the results that are shown to searchers?” An answer is provided in Search Engines and Their Public Interfaces: Which APIs are the Most Synchronized?

Here’s the abstract from their paper:


> Researchers of commercial search engines often collect data using the application programming interface (API) or by “scraping” results from the web user interface (WUI), but anecdotal evidence suggests the interfaces produce different results.
>
> We provide the first in-depth quantitative analysis of the results produced by the Google, MSN and Yahoo API and WUI interfaces. After submitting a variety of queries to the interfaces for 5 months, we found significant discrepancies in several categories.
>
> Our findings suggest that the API indexes are not older, but they are probably smaller for Google and Yahoo. Researchers may use our findings to better understand the differences between the interfaces and choose the best API for their particular types of queries.

The study involved performing four different types of queries performed through the different APIs, and through scraping search results from the web user interface for each of the search engines. These searches were performed each day over the course of 5 months from May through October 2006.

These are the searches conducted:

1. The top 100 results and total number of results using 50 popular search terms from http://50.lycos.com/, and 50 computer science terms from http://en.wikipedia.org/wiki/List_of_cs_topics.
2. The number of backlinks to 100 randomly selected URLs.
3. How many pages were indexed for 100 randomly selected websites.
4. Seeing if 100 randomly selected URLs were indexed and/or cached.

While they found that the results from the APIs, and from the scraped web results were approximately the same age (neither appeared to be older or newer), there were a number of differences that are interesting.

Great research. I’m really happy to see this.

Here’s where to presently find the APIs for Google, Yahoo, and Microsoft:

- [Google APIs](https://developers.google.com/products/#products-products-accounts)
- - [Bing APIs](http://www.bing.com/partners/developers)
