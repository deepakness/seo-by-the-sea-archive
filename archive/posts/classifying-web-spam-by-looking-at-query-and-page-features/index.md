---
title: "Webspam Classification by Looking at Query and Page Features"
source_url: "https://www.seobythesea.com/2008/11/classifying-web-spam-by-looking-at-query-and-page-features/"
slug: "classifying-web-spam-by-looking-at-query-and-page-features"
date_published: "2008-11-09T21:10:53+00:00"
date_modified: "2019-08-10T12:00:09+00:00"
author: "Bill Slawski"
---

Why do search engines care about spam pages that show up in search results? What does a search engine consider webspam? How can a search engine identify webspam?

Should someone who publishes information on the Web be concerned that a search engine might label their pages as spam?

Might the best way to avoid having a search engine avoid mislabel your web pages as search engine spam be to focus upon building quality content on the pages of your site?

It probably is, but it doesn’t hurt to look at what the search engines say on these topics, which is a good reason to keep up with patent filings and papers that are published by the search engines. A Recent patent about Webspam Classification is worth looking at.


## Good SEO and Bad SEO Techniques

Ideally, Search Engine Optimization (SEO) involves building a strong technical and informational foundation for a Web site so that all visitors, including search engines, can easily navigate through web pages and find content that fulfills informational and other needs of visitors who want to find what the site has to offer.

This means that effective SEO work on the pages of such a site would aim at improving the quality and content of those pages, focusing upon words and information that searchers would expect to see upon the pages, and that searchers would use in queries to find the pages of the site when searching at a search engine.

It also means using a strong linking and information architecture for the site, descriptive page titles and meta descriptions, meaningful headings, relevant images, intelligent and helpful link text in links to pages, and useful content that might be relevant to those queries and helpful to those searchers.

Unfortunately, there are site owners who will use other methods that try to take advantage of aspects of search algorithms that may lead to having pages returned in search results that aren’t very relevant for queries used by searchers. Pages that use these kinds of methods Can fall into a webspam classification.


## A Classification System for Search Engine Spam

A recent patent application and a recent whitepaper from Microsoft explore a classification system for search engine spam – methods of optimizing web pages that aren’t relevant for the queries that they target – based upon comparing features of search queries and features of web pages that may rank well for those queries.

[Web Spam Classification Using Query Dependent Data](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080270376.PGNR.&OS=dn/20080270376&RS=DN/20080270376)
Invented by Krysta Svore and Chris Burges
Assigned to Microsoft Corporation
US Patent Application 20080270376
Published October 30, 2008
Filed April 30, 2007

Abstract


> A web spam page classifier is described that identifies web spam pages based on features of a search query and web page pair. The features can be extracted from training instances and a training algorithm can be employed to develop the classifier. Pages identified as webspam pages can be demoted and/or removed from relevancy ranked list.

The 2007 Microsoft Whitepaper, presented at the 3rd International Workshop on Adversarial Information Retrieval on the Web, in Banff, Alberta, CA, shares a couple of authors with the patent, and also explores how to classify Webspam based upon features found in queries and web pages: Improving Web Spam Classification using Rank-time Features (pdf)

The paper provides more technical details on web spam classification than the patent filing and is worth a look if you want to delve into the topic fairly deeply. Here, I’m going to go over some of the features that a search engine might look at when trying to classify pages as spam. Keep in mind that it is possible for a spam classification program at a search engine to mislabel a page as spam, as you read through these features.


## Ranking Features in Queries and Pages

When a search engine ranks pages, it may look at a number of features that may appear on those pages and within queries that people use to search for those pages at a search engine.

It may look for the appearance of query terms in page titles, on headings that appear upon those pages, in the anchor text of links pointing to the pages, in metatags, and may use any other information related to a particular web page and the domain that it appears upon.

The patent filing tells us that a search engine could look at hundreds of different features to rank pages.

Rankings can be driven by algorithms that identify features of a search query, web pages that may match that query, and the how terms that appear in the query and those pages may be related.

Example features may include:

- The most frequent term in the web page,
- A number of times a particular term appears in the web page,
- A domain name associated with the web page (i.e., www.example.com),
- A number of links pointing to the page,
- Whether a query term appears in a title of the web page,
- Other features

A search engine would look at features like those to determine how relevant a page is to a query.


## Webspam Pages

While the features listed above might be helpful in ranking pages so that those pages can be shown in an order based upon which pages are most relevant to a search, some pages that show up in search results might be web spam pages.

The authors of the patent filing tell us that there are a couple of very good reasons to keep webspam pages from showing up in search results.

The first is that if searchers keep on getting web spam pages as part of the results they receive from a search, they may switch to a different search engine.

The second is that legitimate sites may start utilizing spamming techniques to improve ratings over spam pages..


## Web Spam Classification

There are so many web pages, and so many potential spam pages, that search engines can’t manually identify all spam pages. Instead, people from a search engine may label some web pages as spam manually, and then the search engine may try to use programs to look at information taken from pages, or the domains they appear upon, or the links that point to those pages to label other pages as webspam.

One example cited is of a web page stuffing keywords into its page to try to increase its relevancy ranking. It will likely to have more keywords than a legitimate site for a particular keyword. By training a webspam classifier to recognize situations like that, web spam pages can be identified.

Features used to compare queries and pages might be broadly classified as:

- Spam based features
- Rank-time query independent features, and;
- Rank-time query dependent features.

A web spam classifier program might begin to label a given web page as “spam” or “not spam” by looking at decisions made by human judges who determined whether certain pages were spam when looking at those pages in search results for specific queries.

It may then continue to learn to judge pages associated with results for specific queries, based upon looking at certain aspects or features related to the queries and related to the pages.

To create a set of training data for a spam classification program to identify spam pages, a search engine might grab representative queries from search engine query log files, and from toolbar data collected by the search engine, to learn how to tell the differences between “spam” pages and “not spam” pages from features of the queries and the pages.

The patent filing tells us about how a human reviewer might identify webspam pages;


> When using human labels, a human judge is given the list of queries and issues each query to a search engine. A returned list of 10 results with snippets is shown to the judge. For each URL appearing in the top 10 returned search results, the judge labels the URL as spam, not spam, or unknown. The judgment is made based on the quality of content, the use of obvious spam techniques, and whether or not the result should appear in the top 10.

How well can a computer program do the same thing?


## Webspam Classification Features

Values of webspam features can be determined by mining feature information for each URL in the testing and training sets. Examples of such features include:

1. The number of spammy in-links to the top-level domain of the site – The number in-links coming from labeled spam pages.
2. The quality of phrases in the document – a score that indicates the quality of terms on the page.
3. Density of keywords (spammy terms) – a score that indicates how many terms on the page are spam terms.


## Webspam Classification Query Independent Features

A query independent feature is a kind of ranking feature used in identifying spam that doesn’t bother to look at a specific query when deciding if a page is web spam, and the spam determination can be made by looking at other information. Because of that, this kind of feature is considered to be “query-independent.

These query-independent features can be grouped into page-level features, domain-level features, anchor features, popular features, and time features.

***Page-level features*** can be determined by looking just at a page or URL, and can include such things as:

- The count of the most frequent term,
- The count of the number of unique terms,
- The total number of terms,
- The number of words in the URL, and;
- The number of words in the title.

***Domain-level features*** can be computed as averages across all pages in a domain (such as all pages with the domain www.example.com). Examples of domain-level features include:

- The rank of the domain,
- The average number of words (on each page), and;
- The top-level domain.

***Popularity features*** are features that measure the popularity of pages through the collection of user data, such as collected toolbar data, where the user has agreed to provide access to data collected during a logged session.

- The number of hits within a domain,
- The number of users of a domain,
- The number of hits on a URL, and;
- The number of users of a URL.

***Time features*** include:

- The date the URL was crawled,
- The last date page changed, and;
- The time since the page was crawled.

***Other features*** can be used, such as:

- Frequent term counts (how often different words appear on pages),
- Anchor text features,
- etc.


## Webspam Classification Query Dependent Features

Unlike query independent features, query dependent features depend upon looking at the actual terms from a search query and where and how those terms appear upon a page, and there can be several hundred query dependent features.

Query dependent features (or ranking signals) can be found in queries, in the content of a document, and in the content of a URL.

Query dependent features can depend just on the query used to search for, or on a relationship between a query and the properties of a document.

Examples of query-dependent features include:

- The number of query terms in a web page title
- How frequently a query term appears on a page,
- How often a query term occurs in all pages of the search engine index,
- The number of documents on the Web that contain the query term, and;
- [N-grams](https://en.wikipedia.org/wiki/N-gram) shared between the query terms and a document.


## Webspam Classification Conclusion

There are so many pages on the web that may show up for particular search results, that this process of webspam classification as described in the patent filing as a largely automated process.

While a number of features or signals are described in the patent application that might be looked at to create and continuously update a program that can identify webspam pages, one thing to keep in mind is that the impact of a page being labeled as “spam,” is that the page may be pushed down in search results, or removed completely.

The authors tell us in the whitepaper that they are very much concerned that pages which aren’t spam may be labeled as spam, and try to take care not to have too many “false positives” where non-spam pages are identified as spam.

Without focusing on the specific features listed above (and many other that aren’t listed), the best way to try to avoid having any of your pages mislabeled as spam, as a web page publisher, is to focus upon building pages focusing upon quality and content.
