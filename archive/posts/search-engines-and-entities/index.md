---
title: "Search Engines and Entities"
source_url: "https://www.seobythesea.com/2012/06/search-engines-and-entities/"
slug: "search-engines-and-entities"
date_published: "2012-06-13T10:52:03+00:00"
date_modified: "2020-11-03T16:52:09+00:00"
author: "Bill Slawski"
---

Search engines are hard at work transforming the Web from a place of words to a place of people, places, and things. An Ars Technica article from earlier this month, [How Google and Microsoft taught search to “understand” the Web](https://arstechnica.com/information-technology/2012/06/inside-the-architecture-of-googles-knowledge-graph-and-microsofts-satori/), discusses this evolution of the web, though I think they see this trend incorrectly as one that only goes back a few years.

The first post I wrote about search engines extracting entities from webpages was in January of 2006, in [Providing related links to documents](https://www.seobythesea.com/2006/01/providing-related-links-to-documents/). I’ve written a number more that describe how the identification and extraction of an entity from a page might be useful in one manner or another to a search engine. This is true with local search, as well as with practices that can drastically impact the composition of the search results that we see everyday. Over at the SEOmoz blog a couple of days ago, Dr. Pete Myers wrote [The Bigfoot Update (AKA Dr. Pete Goes Crazy)](https://moz.com/blog/the-bigfoot-update-aka-dr-pete-goes-crazy).

If Google were to take the approach that I described in January in [10 Most Important SEO Patents: Part 6 – Named Entity Detection in Queries](https://www.seobythesea.com/2012/01/named-entity-detection-in-queries/), and turn it up a notch or two, you would see the kinds of results that Dr. Pete described in his post about the “Bigfoot” update.

Instead of just associating an entity with one website, and assuming that a searcher might want to perform a “site search” on that site, it looks like Google recognized that sometimes an entity might be associated with more than one site. The result is that you may sometimes see a set of search results where you may have 3-4 results from one site, followed by 3-4 results from another site, and sometimes even another 3-4 results from a third site, all in the same set of search results for a single query.

In the example below, we see one expanded set of search results from one site that help provide pages on a search for [space needle hours]. Google recognized that “space needle” is an entity, and that there’s a web site associated with it that does a good job of answering questions about its hours of operation. But what if there were more than one that provided answers to that query that were just as good? Dr. Pete started running across search results that contained multiple “entity associations.”

![A search result for the query \[space needle hours\] showing 4 results.](media/named-entities-places.jpg)


## Growing Entity Usage

Last week I saw a few different patent applications published which build the identification and use of entities even more. While Yahoo’s results are powered by Bing, their presentation of those results are unique in some cases. In my post on *Named Entity Detection* above, I pointed to how Yahoo might display “related movies” or “related songs” or “related people” in a sidebar when you search for certain people, like in the example below on a search for Justin Timberlake:

![On a Yahoo search for \[Justin Timberlake\], the left column of the search result shows related people such as NSync, Andrew Garfield, Mike Myers, and Joey Fatone, and related movies such as Alpha Dog, and The Love Guru.](media/named-entities-related.jpg)

**Dynamic Identification of Related Entities**

A Yahoo patent published last week tells us about how Yahoo might sometimes associate different entities based upon things such as whether they tend to appear together frequently in a short period of time in pages or articles published in the Web, or in query sessions from searchers.

We’re given a few examples in the patent filing, including some involving people participating in the O.J. Simpson murder trial. Back when the trial was taking place, a search for [o.j. simpson] may have been satisfied with pages or articles about him. They could also included query refinement suggestions that might have focused upon other people involved in the case, from the lawyers, to the judge, to the witnesses, to the victims. Or pages involving those other entities might also have been included within those search results.

The Yahoo pending patent is:

[Method and System for Discovering Dynamic Relations Among Entities](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120143875%22.PGNR.&OS=DN/20120143875&RS=DN/20120143875)
Invented by Anish Das Sarma, Alpa Jain and Cong Yu
US Patent Application 20120143875
Published June 7, 2012
Filed: December 1, 2010

**Entity Following**

A Microsoft patent application from last week describes a way that a search engine can decide to “follow” an entity in real time, and receive alerts when there’s new information regarding an entity.

While this might not sound too different from “alerts” that people have been able to set up in the past to follow specific topics or see pages that might have certain keywords within them, it is different. Instead of “subscribing” to some RSS feeds from specific sources, like a “Google News”, this kind of “Entity Following” actually sets a dedicated crawler in places that actively looks for content on the Web involving a specific entity. The patent filing is:

[Entity Following](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120143845%22.PGNR.&OS=DN/20120143845&RS=DN/20120143845)
Invented by Zhaowei Jiang, Xavier Legros, Ronald H. Jones, JR., and Ryan Panchadsaram
Assigned to Microsoft
US Patent Application 20120143845
Published June 7, 2012
Filed: December 1, 2010

Abstract


> The present invention outlines a genuine entity following system that also addresses data source limitation. When reviewing entity-related objects in web content, a web user designates one or more entities to follow in real time.
>
> More particularly, the present invention is directed through strategic deployment of a dynamic crawler upon selection of a “follow” pointer over an object in a web browser such that a web user can automatically designate entities to be followed and receive alerts at predetermined temporal intervals when new information regarding such designated entities becomes available.
>
> A web entity engine of the present invention is designed to discover trending entities at any given time while generating output activity (i.e., signal) streams for this entity.

**Entity Extraction Complexity**

One of the patent filings published last week from Microsoft gives us a look at some of the inner workings of the search engine when it comes to identifying and indexing entities. For example, imagine that the search engine recognizes that “Star Trek” is an entity that it wants to collect information about. It might find out that there’s a Star Trek television series, a Star Trek video game, a Star Trek movie, a Star Trek comic book, and so on. While they might be related, they are separate entities.

There are a few different ways that a search engine might be able to distinguish between these different entities and organize them in a manner that might be useful. For example, a knowledge base like wikipedia might be turned to, which might have a [Star Trek Disambiguation page](https://en.wikipedia.org/wiki/Star_Trek_(disambiguation)) which tells us that there are separate entries for two different television series, three films or film series, some different video games, a novel, and other “related” topics.

Other things might be looked at as well. For instance, the first Star Trek television series (as opposed to the animated series) had a number of actors and directors and other people related to it. A search engine might be able to find documents on the web that discussed things like who played which character in that first television series, and associate the content (and facts) on that page with the version of the entity “Star Trek” related to the first TV show.

If you’re interested in the approaches that Bing might take in locating and extracting entity information, and making sure that it’s associated with the right entity, the patent filing describes other approaches that might be used as well:

[Measuring Entity Extraction Complexity](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120143869%22.PGNR.&OS=DN/20120143869&RS=DN/20120143869)
Invented by Amir J. Padovitz and Bala Meenakshi Nagarajan
Assigned to Microsoft
US Patent Application 20120143869
Published June 7, 2012
Filed: February 10, 2012

Abstract


> A named entity input is received and a target sense for which the named entity input is to be extracted from a set of documents is identified. An extraction complexity feature is generated based on the named entity input, the target sense, and the set of documents. The extraction complexity feature indicates how difficult or complex it is deemed to be to identify the named entity input for the target sense in the set of documents.

**Question Answering with Entities**

An approach to entities that a search engine might use to to crawl the Web and collect facts and information about specific people, places, or things. Google has been answering questions like “when was Babe Ruth born” (February 6, 1895), or “How tall is mt. Fuji” (12,388 feet or 3,776 m), for a few years.

A Microsoft patent filing explores when they might recognize that someone is asking a question like “when was XXXX born,” or “What are the titles of Shakespeare’s plays,” where the search engine could provide an answer (or list of answers) rather than just returning a set of search results that may or may not contain those answers. The patent filing is:

[Query Pattern Generation for Answers coverage Expansion](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120143895%22.PGNR.&OS=DN/20120143895&RS=DN/20120143895)
Invented by Franco Salvetti, Ying Tu, and David D. Ahn
Assigned to Microsoft
US Patent Application 20120143895
Published June 7, 2012
Filed: December 2, 2010

Abstract


> Answers are provided to users in response to queries as a supplement to any responsive documents. Query formats for entity and attribute combinations are identified. The query formats can be substituted with entity and attribute combinations that have a corresponding attribute value to form a list of answered queries. The attribute value corresponding to an answered query can be provided when a query is received that matches an answered query.

**Local Search and Recommendations for Entities**

We’re all probably used to a search engine showing us the locations of pizza places around us when we search for pizza in a search box. But what if when we performed that search, the search engine took other kinds of information into consideration that we might not expect. For instance, one pizza place might be much more popular at night than during lunch time. A traffic estimation based upon our location and the location of nearby pizzerias might indicate that one pizza joint usually reached quickly might have an accident between it and us this afternoon, making it not a good choice to show first.

We’re told in this patent:


> The location-related entity ranking technique described herein is a technique to rank location-related entities, such as, for example, local businesses, restaurants, entertainment venues, events, and so forth. To do this, one embodiment of the technique leverages the mobile search logs (logs of searches conducted on mobile computing devices) to rank location-related entities in real-time or near real-time.
>
> Whenever a user submits a query, the technique examines the location-related entities in the search results that other nearby users have selected after submitting the same or similar queries. In one embodiment, the technique only includes a portion of the mobile search logs that correspond to a given time window. Additionally, in one embodiment of the location-related entity ranking technique, there are two options for searching for location-related entities in response to a search query: real-time search and near real-time search.

The patent filing is:

[Real-Time Personalized Recommendation of Location-Related Entities](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120143859%22.PGNR.&OS=DN/20120143859&RS=DN/20120143859)
Invented by Dimitrios Lymperopoulos, Jie Liu, Melissa Wood Dunn, Ashwini K. Varma, Fang Wang, Jen-Hsien Kenny Chien
Assigned to Microsoft
US Patent Application 20120143859
Published June 7, 2012
Filed: December 1, 2010


## Takeaways

Bing announced last week that they would start showing Britannica Online Encyclopedia Answers in search results where appropriate. These “knowledge base” results, like Google’s knowledge base” results from Wikipedia or Freebase or other data sources may provide some answers to questions that people have, and may also cause people who are exploring a topic to dig further and do more searches.

But those type of entity-based results aren’t the only impact of entity identification and association by a search engine.

The patent filings I’ve listed above were all ones that were published last week, and they show a variety of approaches involving named entities, from how a search engine might determine that certain entities are related based upon some dynamic event, to how entities may be extracted and distinguished from one another. Another of the patent filings allows for near real time tracking of a specific person or place or thing.

The last one I listed describes businesses within local search results as entities, and how they might be ranked in those real time results based upon real world considerations (and personalization).

About a month ago, I wrote the post [All Your Knowledge Bases Belong to Google](https://www.seobythesea.com/2012/05/all-your-knowledge-bases-belong-to-google/) to describe some of the things that Google is doing with knowledge bases and entities.

Google’s not alone in that effort. The patent filings I wrote about in this post are from Yahoo and Bing, showing their commitment as well towards a Web of things.
