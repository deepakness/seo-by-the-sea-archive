---
title: "Was Google Maps a Proof of Concept for Google's Knowledge Base Efforts?"
source_url: "https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/"
slug: "google-maps-proof-of-concept"
date_published: "2014-09-02T20:12:14+00:00"
date_modified: "2020-11-03T16:49:23+00:00"
author: "Bill Slawski"
---

Not everything we read in a paper or a patent from a search engine is something that happens in real life, but sometimes it is.

I like coming across a patent now and then that is dated but does a good job of describing something that happened as set out in that patent or paper.

The patent I’m writing about tonight was originally filed in 2006 and granted in 2010, and it provides a description of processes that I’ve seen first hand, and have used first hand to help people increase the number of visits they get to their offices or phone calls they get from future clients.

![A Surveyor measuring land.](media/surveyor.jpg)


## Google Maps a Proof of Concept of Knowledge Extraction

If you’ve used Google Maps, you’ve used one of Google’s most well known implementations of information extraction and knowledge sharing. Other applications from Google that use such methods include [Google Now](https://www.webimax.com/blog/mobile-applications/googles-predictive-personal-assistant-better-than-siri), Google [Knowledge Panels](https://www.seobythesea.com/2013/05/google-knowledge-graph-results/) in search results and Google Books.

I had an email conversation with [Mike Blumenthal](http://blumenthals.com/blog/) about recent errors Mike had been seeing in Google Maps, and he asked me if those might have to do with Google possibly changing how they extract information from the Web. He told me that he had read something I wrote about the [Google Knowledge Vault](https://gofishdigital.com/good-bye-knowledge-graph-hello-google-knowledge-vault/), and how it was aimed at providing results that were more complete and more filled with more confident about the accuracy of results.

I told him that I would look into it.

Google had sent Search Engine Land an email telling them that the Google Vault was one of many projects at Google and may not be a replacement for the Google Knowledge Graph. Regardless of that, the series of patents I’m writing about now and the papers that accompanied news of the Google Vault all discuss fact extraction, and higher confidence levels for facts, which is something worth discussing.

If you’ve spent time in the past doing local SEO, you probably have seen that it fits into the world of the Knowledge Web very well.

This Google Maps patent that addresses how information is extracted from the Web to build Google Maps is cited as being related to the patent I wrote about a couple of posts ago, *Learning objects and facts from documents*.

The patent is:

[Generating structured information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,788,293.PN.&OS=PN/7,788,293&RS=PN/7,788,293)
Invented by Egon Pasztor and Daniel Egnor
Assigned to Google
US Patent 7,788,293
Granted August 31, 2010
Filed: March 1, 2006


> A structure generation engine collects data from multiple sources on the network, unstructured or structured. It parses the data to create structured facts, which it presents as entries in a local directory, as results to a search query, and/or in response to another request for information.


## Structured, Semi-structured, and Unstructured Data

***Structured data*** are data that have been organized to allow identification and separation of the key (i.e., context) of the data from the content.

Structured data can be understood by a computer or other machine. For example, consider a telephone number organized in the structure “TN:xxx-xxx-xxxx” where an “x” denotes a number. A computer-implemented process that encounters data organized in this format, such as “TN:212-864-6137”, can determine that the key for the data is a telephone number, and the value of the number is 212-864-6137.

***Unstructured data*** are data that are not organized in a particular format and where ascertaining the context and content might be difficult.

***Semi-structured data*** are data that are partially organized.


## Structure Generation Engine

The structure generation engine includes an interface for receiving data from one or more commercial data providers, as well as web pages from sources such as an enterprise web site and a directory web site.

The engine analyzes the received data to identify facts formed of key-value pairs and normalizes them to produce structured data.

Keep in mind that the “facts” collected are fairly simple, and include contact information, hours of operation, and handicap accessibility information, and parking information.


## Data Related to Enterprises

The structure generation engine receives data related to enterprises local to a particular geographic region such as a city. An enterprise can be a “business, school, government office, a non-profit organization, and/or other similar entity.” These ended up including parks, forests, golf courses, and more.

For some places, such as restaurants, the data might relate to aspects of the restaurant, such as business hours, reservation policies, and accepted payment methods.

Instead of going into a knowledge base, this data goes into a local directory for a geographic region. Google has been answering Q&A type queries with data collected going into some fact repository, but this patent doesn’t focus upon those.

Examples of commercial data providers that generate data that might be used to provide information about these enterprises can include telecommunications providers such as telephone companies, media providers such as newspaper companies, and commercial directory providers, such as the D&B Corp.

The types of data about these places tend to be limited and often have some degree of structure to them. For example, a restaurant in the directory web site might contain the text “Reservations:” followed by a “yes” or “no” to indicate whether the restaurant takes reservations. Some web site might contain less well-structured content and facts, such as one site might specify a restaurant’s business hours as “open Mon to Fri 9-5, Sat until 6” while another specifies the hours as “open 6-2, closed Sundays and Holidays.

Some data might be purchased from commercial data providers.

Some of the data might be from verified site owners, who claim a listing in exchange for the ability to maintain and update it and view analytics related to it.

Some data might also be collected from web crawlers that recognize the business name and the associated location information.

The patent provides more details on processes such as normalization of facts

This data extraction and normalization process are very similar to those described to be included in a knowledge base for Google.

The patent also discusses confidence levels, and the importance of facts (as “weights of the fact”), and tells us that if those aren’t high enough, that they just might not be shown at all.

Mike Blumenthal had asked me if a data extraction process might be in use that showed inaccurate data, but this patent seems to be telling me that it’s more likely that incorrect or immaterial data might be more likely not to be shown at all.

I decided that it might be a good idea to identify and link to some interesting posts about local search, and came up with the following list:

- [Assigning Geographical Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Was Google Maps a Proof of Concept for Google’s Knowledge Base Efforts?](https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/)
- [Location Prominence at Google in Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)
- [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)
- [Authority Pages for Businesses in Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)
- [10 Most Important SEO Patents: Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

Last Updated June 26, 2019.
