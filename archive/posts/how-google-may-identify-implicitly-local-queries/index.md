---
title: "How Google May Identify Implicitly Local Queries"
source_url: "https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/"
slug: "how-google-may-identify-implicitly-local-queries"
date_published: "2012-06-18T02:52:46+00:00"
date_modified: "2020-06-20T21:00:46+00:00"
author: "Bill Slawski"
---

hen you perform some searches, Google might include Maps results within the web search results for those queries, or it might include some local results that change when you change your location in Google. Those queries are ones that don’t include geographic information within them, yet Google somehow decides that there’s some geographic relevance to the terms being searched for.

Some query terms likely have no geographic relevance to them, such as a query like [linux], which pretty much has a meaning unrelated to any specific location. Other queries may evidence an intent to find a location near a searcher, such as [restaurant]. A patent granted to Google this past week describes an approach that Google may use to assign an implicit local relevance to a query term or phrase when that query doesn’t contain any explicit references to a location.

A friend asked a few months ago why Google might decide that a particular phrase might be seen to have a geographical relevance in his region, but not show localized or Google Maps search results in other locations. My answer was that Google likely had developed a statistical geographical model that would trigger localized results based upon a combination of a query used and the location of the person searching. I’ve written a few posts in the past about a [Yahoo! paper on geographic intentions](https://www.seobythesea.com/2009/05/how-a-search-engine-might-determine-whether-a-search-involves-a-geographical-intent/), as well as a [Yahoo! patent](https://www.seobythesea.com/2007/05/yahoo-tackles-geographic-challenges-of-web-search-results/) covering similar territory.

The patent is:

[Identification of implicitly local queries](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08200694&OS=PN/08200694&RS=PN/08200694)
Invented by Michelangelo Diligenti, Wenxin Li, Fabio Lopiano, and Trystan G. Upstill
Assigned to Google
US Patent 8,200,694
Granted June 12, 2012
Filed: November 8, 2010

Abstract


> Methods, systems, and apparatus, including computer program products, for identifying implicitly local queries. A query having one or more terms is received. The query is associated with a user locale. A degree of implicit local relevance for the query is determined. One or more search results for the query are received.
>
> Each received search result has a respective score and a respective result locale. The score of a respective search result is modified using the degree of implicit local relevance for the query, the user locale, and the respective result locale of the respective search result.


## Web Sites Associated with Locations

Websites might be associated with specific locations through many means. One might be that a location may be contained within the content of the site. The site might be specifically about a location, or contain an address and other contact information. Or a site might contain pages that are specifically about business listings that include location information for businesses listed.

A site might also contain metadata of some sort that identifies a location for the site.

Other indications that might be used to associate a web page or site with specific locations can include a country code top-level domain being used, such as “http://www.example.co.uk,” or an IP address that might indicate the site being located in a specific area. The user traffic to a site, such as the click records, might also be used to associate one or more locations with its pages.

Some sites might be determined to be associated with more than one location, all locations, or none in particular. Sites that are associated with all locales or none, in particular, might be said to be “globally relevant.”


## Queries Associated with Location

Queries can also be associated with user locations. They can be done so explicitly, like a search for [restaurant chicago], which explicitly specifies the locale of Chicago. Such a search might best be served by Websites that are somehow associated with the location “Chicago.”

A similar locale restriction might also be included for a query that doesn’t specify a locale, but where it might be appropriate, such as a search for [restaurant].

Here are some signals that a search engine might look at when trying to determine if there is an implicit location within a query:

***Location of Search Engine*** – A search via searchengine.co.uk might indicate an intent to restrict a search to the UK.

***Implicit Local Relevance for All Terms in Query*** – Whether one or more terms in a query have been determined in the past to be relevant to a specific locale.

***Language*** – Some queries might have significance in some languages, but not others. For example, the word “tax” has meaning in English speaking countries, but not in Spanish speaking countries, so it wouldn’t carry an “implicit preference for local results” in a country where people predominantly speak Spanish

***Country*** – The word “freedom” has a fairly generic meaning in most English speaking countries and doesn’t have an implied preference for local results. In Australian though, it’s the name of a prominent home furnishings business and would have local significance there.

***Aggregated User Behavior*** – If a statistically significant number of searchers who use a particular query tend to select search results associated with their location, then it’s likely to have an implicit preference for local results.

Again, if a statistically significant number of people tend to combine a term from a query with an explicit specification of a location, then it also could be seen as being an Implicitly Local query.

Also, if a statistically significant number of people who search for the term or phrase tend to add an explicit location to it in a followup query (during the same query session), then once again it could be seen as a term having an implicit preference for local results.

If people from a particular country code top-level domain tend to search for that term at a statistically significant rate, that could be another indication of a desire for a local result.

***Use of Term in Content*** – If the term frequently appears in content related to particular locales, it might also be determined to have some implicit preference for local results. For instance, “if a term frequently appears in content associated with the United Kingdom, the term may be determined to carry some implicit preference for local results, specifically results from local to the United Kingdom.”


## Takeaways

This patent appears to focus primarily upon organic web results rather than including Google Maps results within those web results, but it could be one way of identifying whether or not to include maps results within a set of Web search results. It does appear to be the kind of analysis that Google might follow when they insert more localized results into a set of search results so that people interested in seeing local results for a query might see them mixed in with more “globally relevant” results.

In March, I wrote about a Google patent application that described [How Google Data Centers may be Split between Regional and Global Data](https://www.seobythesea.com/2012/03/google-data-centers-split-regional-global-data/). In the patent filing I covered, we were told that Google might use a prediction algorithm that may decide which data center to send us to based upon whether the query pointed to a result that might be geographically relevant for a certain location. The algorithm may be related in several ways to the one described in this patent on implicit local queries.

Here we see that some queries may implicitly call for local results in one area, and not in others. I’ve seen that happen for some fairly small regions before, where it seemed likely that people searching for a particular query likely tended to choose a local result in response to that query a high degree of the time, and where similar searches in other regions weren’t being shown localized type results.

I decided that it might be a good idea to identify and link to some interesting posts about local search, and came up with the following list:

- [Assigning Geographical Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Was Google Maps a Proof of Concept for Google’s Knowledge Base Efforts?](https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/)
- [Location Prominence at Google in Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)
- [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)
- [Authority Pages for Businesses in Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)
- [10 Most Important SEO Patents: Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

Last Updated June 26, 2019.
