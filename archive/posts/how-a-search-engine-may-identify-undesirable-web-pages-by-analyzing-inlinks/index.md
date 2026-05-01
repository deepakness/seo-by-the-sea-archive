---
title: "How a Search Engine May Identify Undesirable Web Pages By Analyzing Inlinks"
source_url: "https://www.seobythesea.com/2010/04/how-a-search-engine-may-identify-undesirable-web-pages-by-analyzing-inlinks/"
slug: "how-a-search-engine-may-identify-undesirable-web-pages-by-analyzing-inlinks"
date_published: "2010-04-15T14:13:34+00:00"
date_modified: "2022-03-04T13:27:53+00:00"
author: "Bill Slawski"
---

The term “undesirable web pages” is used in a patent application from Yahoo published today to refer to pages that rank highly in search results based upon links. Those pages are pointed solely to increase their rankings for specific queries, even though those pages may not be very relevant for the query terms in question.

“Undesirable” appears to indicate that these are pages that Yahoo doesn’t want ranking well in search results at their search engine.

So, what might Yahoo (and possibly other search engines) look at to determine whether a page is undesirable based upon the links it sees to that page?


## Analyzing Inlinks for Manipulation

When search engines show pages to searchers in response to a query, those pages are placed in an order intended to display a combination of relevance and importance or quality.

Search engines determine how important a page might be based upon the number and importance of pages linking to that page. Search engines may also pay attention to the text used in a link, often called “anchor text,” while determining how relevant a page might be for a specific keyword term or phrase.

But there’s a problem in relying too much upon links pointing to pages to determine how relevant and vital a page might be. The search engines have turned links into a commodity that may determine how highly a page might rank in search results by giving links such value.

Many links pointing to pages are created not to bring direct traffic to a page or to refer to a page in a specific context, but rather solely to improve the ranking of a page, and may result in “artificially promoted web pages” ranking highly in search results even though those pages may not be very relevant to a query by a searcher.

In response to this problem, search engines may weigh the value of some links differently. The patent application from Yahoo describes how that search engine might distinguish between links pointing to a page, also known as “inlinks” to that page, based upon a statistical analysis of information about those links.

The Undesirable Web Pages patent filing is:

[Detection of Undesirable Web Pages](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100094868.PGNR.&OS=dn/20100094868&RS=DN/20100094868)
Gilbert Leung, Lei Duan, Dmitri Pavlovski, Su Han Chan, and Kostas Tsioutsiouliklis
Assigned to Yahoo
US Patent Application 20100094868
Published April 15, 2010
Filed October 9, 2008

Abstract


> A system for detecting artificial promotion of a resource, including:
>
> a search engine operative to index a set of incoming links (“inlinks”) which reference the resource,
>
> a log module coupled with the search engine and configured to store log data associated with the set of inlinks,
>
> a partitioning module coupled with log module and operative to partition the set of inlinks into a plurality of groups of inlinks based on at least one partitioning scheme,
>
> a statistics module coupled with the partitioning module and operative to compute a statistic associated with the inlinks within each of the plurality of groups of inlinks, and
>
> a computation module coupled with the statistics module and operative to process the computed statistic associated with the inlinks of each of the number of groups of inlinks and compute a metric associated with a set of inlinks where the metric indicates a level of uniformity of a distribution of values of the respective computed statistics among the plurality of groups of inlinks, and where the search engine places a list of search results, generated in response to a search query, in a pattern based on the metric.

In analyzing links pointing to a page to identify the artificial manipulation of ties, the search engine may look at the information associated with those links to see any unnatural patterns related to those links.

The search engine might look at information such as:

- An internet protocol (IP) address segment of the source of each inlink
- the domain name of a source of each inlink
- The top-level domain name associated with each inlink such as “.com” or “.edu” or country code top level domains
- The written language used in each inlink (e.g., English, French, or German)
- A geographic region associated with the source of each inlink
- A network routing group associated with the source of each inlink
- The anchor text (i.e., the clickable text) contained within each inlink

The patent filing tells us that a quality or importance ranking score might be given to pages based upon link-based ranking approaches. One of them is PageRank, which provides more weight to newer links and less to older ones or some other algorithm.

A statistical analysis of information about links pointing to a page over time may result in a demotion of ranking of that page if abnormal patterns appear that seem to indicate that links to a page have been manipulated solely to increase the scale of that page.


## Undesirable Web Pages Conclusion

I’ve written about many other patents and whitepapers from the major search engines that can be found in my category on [Web Spam](https://www.seobythesea.com/category/web-spam/). Still, this Yahoo patent filing provides details about some specific information that Yahoo might analyze that many of those papers or patent filings haven’t mentioned.

The chances are that Google and Bing may perform similar analysis types when looking at links pointing to pages.

Updated 3/4/2022.
