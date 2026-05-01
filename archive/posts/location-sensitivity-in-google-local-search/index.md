---
title: "Location Sensitivity in Google Local Search"
source_url: "https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/"
slug: "location-sensitivity-in-google-local-search"
date_published: "2006-12-10T02:17:03+00:00"
date_modified: "2020-06-21T20:10:27+00:00"
author: "Bill Slawski"
---

## Location Sensitivity Plays a Role in Local Search Rankings

Some geographically based searches in Google Local might be treated differently than others.

For example, if you were to search for “pizza” centered around your location, you might be interested in pizza places five miles away. In a search for “automobiles,” you may be happier with results within 50 miles.

Can a combination of topic type and distance deliver better geographic-based search results?

I’ve written about many Google patents related to local search, as they were published, but hadn’t gone back to some of the earlier Google patent applications about geographically related results. I’ve wondered if different topic types might be treated differently. It made sense to look at a few of the older patent applications from Google to see if some questions about newer ones could be answered.

The following looked promising:

[Methods and systems for improving a search ranking using location awareness](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050065916%22.PGNR.&OS=DN/20050065916&RS=DN/20050065916)
Invented by Xianping Ge, Abhishek Parmar, Amit Singhal, Adam Smith, Daniel Egnor, and Elizabeth Hamon
US Patent Application 20050065916
Published March 24, 2005
Filed: December 31, 2003

Abstract


> Systems and methods improve search rankings for a search query by using location data associated with queries and documents related to the search query. In one aspect, a search query is received, a location score is determined, a topical score is determined, and ordering of documents related to the search query is determined based, at least in part, on the location score and the topical score.


### Geography in Search

Some documents are more important from a geographic perspective than others. These may include such things as online newspaper pages relevant to certain regions and documents associated with local businesses or organizations. Because of this, it can be helpful if a search engine can determine whether a page has some geographical significance so that it can return documents in proximity to a searcher.

One way of meeting this need is to provide business directory type listings like those offered by Yahoo! Inc., and Citysearch.com. A searcher would enter a location, and a search query, and receive a set of business listings in response. Each business listing would include information about the business, and possibly the ability to find a distance between the business listings and the location of the searcher.

Another approach would be to emulate something used by Northern Light at one point, in which a person enters a location, and a query, and a distance radius, and get results within that specified distance.


### Problems with those Distance Techniques

(1) The most relevant search results don’t always appear, taking into account both location and non-location factors.

(2) The best results, even when presented, are not ranked highest in the search results because they don’t appear within the radius, or because closer results are ranked higher.

(3) Users need to explicitly define a radius of interest, and;

(b) Searchers may need to manually enlarge that radius or go through lots of results to find more relevant results.


### Summary of Location Sensitivity Patent Application

There are three main parts to this document. The first describes how web pages/business listings might be ordered in results based upon a balancing of distance scores and topical scores. The second part is about location sensitivity and determining the scope of results. The third part looks at advertising, and the ability to target advertisements based upon the topic and geographic location of a query and the documents returned in response to that query.

I’m going to focus mainly on the location sensitivity part of the patent application, and skip over the advertising aspects.

How documents might be ordered:

(1) A search query is received,
(2) A location associated with the query is determined,
(3) Topical scores for a set of pages is determined, based at least in part, on the query.
(4) Documents from that set may be selected
(5) A distance score would be calculated for each document based upon document locations associated with each and the location associated with the query, and;
(6) The documents would then be ordered based upon a combination of the topical scores and the distance scores.

If the topic is one identified to be location-sensitive, then the amount of location sensitivity might be determined. and used to identify the best way to display results, and how important distance maybe to the searcher.

Relevance to the query is still an important consideration, but:


> The location component may determine or otherwise measure a quality signal, such as a distance signal that reflects or otherwise corresponds to the geographic relevance of one or more web pages or documents in the located set of the documents.


### How Location Sensitivity

One way to determine that geographically-based search results are relevant to the topic and to determine a relevant geographic range for that topic could be to examine user behavior (e.g., user selection behavior, such as mouseover or click-through) of search results presented to a searcher.


> For example, location component may determine that users are generally more location-sensitive for the topic “pizza” than for the topic “automobiles/cars,” so that users may generally be interested in documents on the topic of “automobiles/cars” that are far(ther) away from their location, whereas users may generally only be interested in documents on the topic of “pizza” that is near(er) to their location.
>
> Location sensitivity can be determined relatively, or in one implementation can also be mapped to a distance (e.g., users are generally interested in documents with a distance of up to 50 miles for “automobiles/cars,” but only 5 miles for “pizza”).


### Techniques to determine location sensitivity and relevance:

The location component may analyze user selection behavior such as user click through, stay time, mouseover, conversion data, etc., concerning certain search results based in part on geographic relevance, as compared to other search results both with and without estimated geographic relevance.

A topical score could be determined by things such as “various information retrieval and other techniques used by conventional search engines to determine the relevance of a document.” These are sources and signals other than location information. A less relevant result according to the topical score factors would correspond to a lower or equal topical score.

A distance score is also determined. One or more locations associated with each of the identified documents are determined, with a distance score calculated for each document based, at least in part, on the distance between the location(s) associated with the document and the location associated with the search query.

This score could be based upon:

(1) a straight-line distance between a document location and the search query location, or
(2) the driving distance or estimated driving time from the search query location to the document location along established roadways.

A combined relevance score could be determined by merging the topical scores and distance scores.


### Factors in Location Sensitivity

(a) Topic Types – A topic such as “plumbers” may have a high location sensitivity and be strongly associated with local documents or web pages, and a topic like “travel destinations” may be less location sensitive.

(b) Certain query types – such as commercial queries, may have different location sensitivities than others.

(c) User-based information – Some users may specify a more local focus for their desired search results than other users, or be determined to have a more local focus based upon things like browsing history, search history, or transactional or other kinds of available data.

(d) Differences in geographic locale – A location such as Manhattan, N.Y., might be more location sensitive compared to a geographic area such as Camas County, Idaho (which, according to the patent application, is the most sparsely populated county in Idaho).

(e) The specificity of a location term inferred or provided – The system might infer different values for distances based upon the types of words or signals used to specify a location (zip code versus city name versus a street address). If there is a way for a person to specify a maximum distance (“I’m willing to travel 30 miles to . . .”), that could also play a role in determining location sensitivity.


### Conclusion

This kind of location sensitivity may explain why some searches in Google Local cover a wider range than others. I tried a search for “Pizza” in my town, and the top results were all nearby. I then tried a search for “Automobiles” with the same location, and the first results covered a considerably wider range and didn’t seem to be ordered as much by location.

Interestingly, there are a lot of car dealerships nearby. I searched for “car dealers” in my town, and the top results were all in a very small range, with distance appearing to play some role in the order of results but not the sole signal. So, two topics/queries that might seem similar, like “automobiles” and “car dealerships” may have very different location sensitivities.

I decided that it might be a good idea to identify and link to some interesting posts about local search, and came up with the following list:

- [Assigning Geographical Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Was Google Maps a Proof of Concept for Google’s Knowledge Base Efforts?](https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/)
- [Location Prominence at Google in Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)
- [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)
- [Authority Pages for Businesses in Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)
- [10 Most Important SEO Patents: Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

Last Updated June 26, 2019
