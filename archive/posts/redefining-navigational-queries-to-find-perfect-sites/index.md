---
title: "Redefining Navigational Queries to Find Perfect Sites"
source_url: "https://www.seobythesea.com/2008/03/redefining-navigational-queries-to-find-perfect-sites/"
slug: "redefining-navigational-queries-to-find-perfect-sites"
date_published: "2008-03-13T01:34:30+00:00"
date_modified: "2019-11-18T09:50:35+00:00"
author: "Bill Slawski"
---

*A number of search engine researchers look at queries that searchers type into a search box, and break them down into three kinds of queries based upon the intent of those searchers – navigational, informational, and transactional. Navigational queries have been seen as searches where someone searching intended to find a specific known site.*

Imagine instead considering a navigational query to be one where a perfect site exists that is an ideal one for a search engine to show to a searcher in response to that query, regardless of whether they knew about the site or not. A search engine might put that perfect site at the top of search results, and not worry too much about other results shown.

When is a query a navigational query, and when might a site be considered a perfect site for that query?

A recent patent application from Yahoo transforms the meaning of what a navigation query is, and finds a way to automate the process of determining whether a query is navigational, and whether a perfect page does exist for that query.

A couple of papers that discuss the different types of queries, including navigational ones, are:

[A taxonomy of web search](https://www.cis.upenn.edu/~nenkova/Courses/cis430/p3-broder.pdf) (pdf)
Determining the User Intent of Web Search Engine Queries (pdf)

Traditionally, a navigational query has been seen as one where people do know which site they want to visit, but don’t know the exact URL of the site, or may not want to type in the full URL of the site into a browser address bar. Research has shown that around 18% of search queries are navigational.

If a search engine can determine that a query is navigational, it can just show a result including the page that the searcher is looking for, without being too concerned about which other sites are listed after that top result.

A number of machine learning and query classification approaches might allow a search engine to determine if a query is navigational in real time.

[Techniques for navigational query identification](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080059508.PGNR.&OS=dn/20080059508&RS=DN/20080059508)
Invented by Yumao Lu, Fuchun Peng, Xin Li, and Nawaaz Ahmed
US Patent Application 20080059508
Published March 6, 2008
Filed: August 30, 2006

Abstract


> To accurately classify a query as navigational, thousands of available features are explored, extracted from major commercial search engine results, user Web search click data, query log, and the whole Web’s relational content.
>
> To obtain the most useful features for navigational query identification, a three level system is used which integrates feature generation, feature integration, and feature selection in a pipeline.
>
> Because feature selection plays a key role in classification methodologies, the best feature selection method is coupled with the best classification approach to achieve the best performance for identifying navigational queries.
>
> According to one embodiment, linear Support Vector Machine (SVM) is used to rank features and the top ranked features are fed into a Stochastic Gradient Boosting Tree (SGBT) classification method for identifying whether or not a particular query is a navigational query.

**Navigational Queries**

You could break down web search queries into two categories: navigational and informational. An informational query may result in a list of a number of sites that would be of interest to a searcher in response to the query that they used.

A well known definition of a navigational query is one where a searcher already has a Web site in mind and the purpose behind the query is to reach that particular site. I’ll type espn into a toolbar search box to save myself from typing an additional “.com” when going to the espn web site.

It’s not always easy to determine if a query is navigational in nature.

Redefining what a navigational query is might make that determination easier. Instead, consider a query to be navigational if it has one and only one “perfect” site that shows up in a search result set in response to the query.

A site might be considered “perfect” if the site contains complete information about the query and lacks nothing essential.

So, a navigational query is one where there is a “corresponding result page that conveys perfectness, uniqueness, and authority.”

This approach doesn’t require a searcher to actually have a specific site in mind.

**Some Examples of Navigational Queries from the Patent Application**

Someone searches for the query “Fulton, N.Y.” They might not know about the site “www.fultoncountyny.org,” but it contains a unique authority and perfect content for that query. That query might be labeled a navigational query.

A query of “national earth science teachers association” has only one perfect corresponding URL, “http://www.nestanet.org/”, and could be labeled as a navigational query.

In contrast, a search for the query “Canadian gold maple leaf” provides a number of very good URLs showing in search results, including “http://www.goldfingercoin.com/catalog-gold/canadian-maple-leaf.htm”, “http://coins.about.com/library/weekly/aa091802a.htm”, and “http://www.onlygold.com/Coins/ CanadianMapleLeafsFullScreen.asp”. It would be labeled as a non-navigational, or informational, query.

**Result Set Based Navigation Query Identification System**

To automatically identify navigational queries,

A query is received by the search engine, and a set of URLs for pages is returned.

The query and URLs are sent to a multi-level feature extraction system which looks for a number of features such as:

a) The number of times that query terms appear alone and/or together and where in the page and/or URL;
b) The number of times that query terms appear alone and/or together in inbound and/or outbound anchor text;
c) Click-through rates;
d) Session information (e.g., average time on page);
e) The location of links in the page; and,
f) Many other features.

Resources used to generate these features include:

*A click engine* – recording and analyzing user click behavior. The click engine might create hundreds of features automatically based on user click-through distributions. For example one click feature might be a click ratio, which is the ratio of the number of clicks on a particular URL for a specific query compared to the total number of clicks for the query.

*A Web map* – stores hundreds of features such as page content, anchor text, and the hyperlink structure of Web pages, including the inbound URLs, outbound URLs, etc. These web map features determine how a URL may be related to other pages within a site through terms in the query itself. An example of an anchor text feature might be the actual visible text in links pointed to a page. If links to a page use the same anchor text, it’s an indication that the page is about whatever is contained in the anchor text.

*Query logs* – provide features that are based on a set of words and various language model based features from all the queries issued by users over a period of time.

Features from these sources may be selected for a machine learning program to train a classification model that can determine whether or not the query is a navigational query.

**Conclusion**

The patent application goes into detail on some of the different types of machine learning and classifications processes that could be used when consider how many features exist when comparing a query with one of the URLs that show up as one of the top (perhaps of the top 100) results for a query.

So, this process is one that reranks search results based upon whether there is one site that seems to be a perfect match for a specific query.

Do the other search engines do something like this too?

While reading through the patent application, I thought about how Google shows site links for some search results. I described a little of which pages Google might decide to show in site links in the post, [Google’s Listings of Internal Site Links for Top Search Results](https://www.seobythesea.com/2006/12/googles-listings-of-internal-site-links-for-top-search-results/), though one of the questions I had there was why Google decided to show site links for some sites, and not for others.

Considering that those site links are supposed to help searchers to more easily find pages on site that could be considered [final destination](https://www.seobythesea.com/2008/02/microsoft-tracking-search-and-browsing-behavior-to-find-authoritative-pages/) pages on a site. That idea appears to indicate that Google may be considering that top result to be a page in response to a navigational query, where destination pages on the site are easier to navigate to within the site links.

It doesn’t appear to be a “perfect site” approach, but there does seem to be some process involved that determines that the query involved is one that should trigger site links – in other words, a navigational query.
