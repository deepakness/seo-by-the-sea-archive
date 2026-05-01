---
title: "Crawling Pages to Address Needy Queries and Search Impact"
source_url: "https://www.seobythesea.com/2009/07/crawling-pages-to-address-needy-queries-and-search-impact/"
slug: "crawling-pages-to-address-needy-queries-and-search-impact"
date_published: "2009-07-01T14:13:25+00:00"
date_modified: "2021-07-06T13:52:29+00:00"
author: "Bill Slawski"
---

The Web is filled with uncrawled web pages, and some of them may be yours.

One of the important first steps in optimizing a website for search engines is to make sure that the site’s pages are search engine friendly so that a crawling program from search engines can follow the links on pages to your site and crawl pages on your site. Search engines have three major functions – crawling pages, indexing content, and displaying results to searchers – and the last two can’t happen until pages are crawled.

The purpose behind crawling pages focuses upon:

- Discovering URLs for new pages,
- Acquiring content found on those newly discovered pages URLs, and;
- Finding Fresh content on previously crawled pages to keep search indexes fresh

As crawling programs explore the content on web pages and come across URLs to new pages, they collect information about those URLs before actually visiting the pages they point towards. There may be a vast number of pages that a search engine has discovered a link to but hasn’t had a chance to crawl yet or may not be able to crawl for one reason or another – see [Ranking the Web Frontier](https://www.mccurley.org/papers/1p309.pdf) (pdf).

When a search engine discovers new URLs, it has to choose which pages to visit and index first. For example, if a search engine is faced with a choice between indexing a million pages of one site or the home page of a million sites, it might choose to visit the million different sites first.

A recently published patent application from Yahoo attempts to provide a new approach to deciding which pages for crawling programs to visit based upon pages that it guesses might have the greatest search impact, addressing “Needy Queries.” Needy queries are search terms that people use with some frequency level that could stand being improved.

The patent begins by telling us about some past (and possibly present) approaches to deciding which pages to crawl and index content for based upon how important crawling pages might be perceived to be, rather than by a need for the content that the pages may contain, citing the following documents:

- [Efficient Crawling Through URL Ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf)
- [Adaptive On-line Page Importance Computation](http://www2003.org/cdrom/papers/refereed/p007/p7-abiteboul.html)
- [Breadth-First Search Crawling Yields High-Quality Pages](http://www10.org/cdrom/papers/pdf/p208.pdf) (pdf)

Query-independent aspects of those pages may influence the fetching of content from URLs. If a URL has many links pointing to it or has accumulated a certain amount of PageRank but hasn’t been visited and indexed yet, it might be moved up in a queue to be crawled, regardless of the content it might contain.

There is another approach to crawling pages that focus upon content, know as focused crawling, in which crawling starts at pages that have been crawled and indexed before. Urls are followed from those pages on the assumption that those pages might link to other pages on the same topic. The patent points to another document that describes that kind of approach in more depth – [Focused Crawling: A New Approach to Topic-Specific Web Resource Discovery](https://www.cse.iitb.ac.in/~soumen/doc/www1999f/pdf/www1999f.pdf) (pdf).

It tells us that this kind of focused crawling focuses upon searching for relevant pages to a particular topic or a small set of topics. Such focused crawling is guided by topic classification rather than the relevancy of queries issued by user requests.

**Crawling Pages to find Needy Queries**

Are there needy queries where searches are taking place that your pages might be good matches that haven’t been crawled and indexed by search engines yet?

In Yahoo’s patent filing, the search engine doesn’t just consider information about the URLs that it might crawl to decide which pages to visit next but also looks at its query logs to find queries that many people are searching for where the quality of the search results that show up in response to those queries may not be doing a good job of meeting searchers’ information needs.

The search engine would look at the information that it might have about URLs that it knows about but hasn’t visited yet to determine which pages to visit to try to improve the search results for those queries. That information could include words within the URL, the anchor text used for those links, how many links are pointing at that URL, and what the domain name is for the page the URL points at.

If that information seems like a good match for needy queries, those URLs may move up in the queue to be crawled sooner rather than later.

The patent filing is:

[System and method for crawl ordering by search impact](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090164425.PGNR.&OS=dn/20090164425&RS=DN/20090164425)
Invented by Christopher Olston and Sandeep Pandey
Assigned to Yahoo.
US Patent Application 20090164425
Published June 25, 2009
Filed December 20, 2007

Abstract


> An improved system and method for crawl ordering of a web crawler by impact upon search engine search results is provided. Content-independent features of uncrawled web pages may be obtained, and the impact of uncrawled web pages may be estimated for queries of a workload using the content-independent features.
>
> The impact of uncrawled web pages may be estimated for queries by computing an expected impact score for uncrawled web pages that match needy queries. Query sketches may be created for a subset of the queries by computing an expected impact score for crawled web pages and uncrawled web pages matching the queries.
>
> Web pages may then be selected to fetch using a combined query-based estimate and a query-independent estimate of the impact of fetching the web pages on search query results.

This query-centric approach to determining an order for crawling pages could lead towards:

Newer pages that might not have many links pointing to them showing up in search results quicker, and;

Long-tail queries that people are searching for with some frequency showing higher quality search results.
