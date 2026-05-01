---
title: "Microsoft's UserRank - Query Independent Ranking Based Upon User Logs"
source_url: "https://www.seobythesea.com/2007/05/microsofts-userrank-query-independent-ranking-based-upon-user-logs/"
slug: "microsofts-userrank-query-independent-ranking-based-upon-user-logs"
date_published: "2007-05-20T18:50:49+00:00"
date_modified: "2012-06-10T15:26:55+00:00"
author: "Bill Slawski"
---

A couple of days ago, I posted about an Ask.com patent application that [considered user behavior](https://www.seobythesea.com/2007/05/calculating-search-rankings-with-user-web-traffic-data/) in ranking Web pages. Expect to see more of this from the search engines. Perhaps a lot more.

For example, in a recent patent application, the folks at Microsoft tell is about some of the issues involved with ranking algorithms that are based upon link structures:


> Techniques which utilize the link structure of a graph (e.g., PageRank) usually make the incorrect assumption that all hyperlinks should be treated equally. In reality this is not true; a page links to many places because they include ads and navigational links which may not be important. In fact there are many links on a page that are never followed, and sometimes there are few links which get a majority of the click-throughs. Plus, many pages are just pages to pass through to get to another more important page.

In response to this problem, they have come up with a query independent method of ranking pages that can look at a mix of factors, including “the number of incoming links, the site traffic, how long the site has been around or the PageRank of the page.” This would be coupled with a relevance factor based upon the actual query searched for by the user.

The patent application is:

[UserRank: ranking linked nodes leveraging user logs](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070112768.PGNR.&OS=dn/20070112768&RS=DN/20070112768)
Invented by Rangan Majumder
Assigned to Microsoft
US Patent Application 20070112768
Published May 17, 2007
Filed: November 15, 2005

Abstract


> The claimed subject matter provides a system and/or a method that facilitates utilizing transition probability in static rankings associated with at least one document. An interface can receive data related to a query, wherein the query can be associated with a search from a user. A rank component can provide query results that are prioritized utilizing a transition probability based on user activity included within a user log.

The rank component uses a transition probability of documents based upon the user behavior to account of the utility of links within such documents.

In particular, the user behavior and/or activity can be:

- An amount of time on a document (e.g., a user is on document A for X minutes),
- A log on to a document (e.g., a log on signifies a document of interest to a user),
- A log off to a document (e.g., a log off signifies the document contained information located therewith and no further document is of value),
- A document exited (e.g., indicating the information is located on such document and no further document is of value),
- A document request uniform resource identifier (URI),
- A document referrer,
- Etc.

In short, something like pagerank is based upon a probability that if you start at a certain point on the Web, and follow links on pages, how likely might it be that you would eventually end up at a specific page. The process in this patent application takes into account user activity on pages to try to make a more informed guess as to that probability.
