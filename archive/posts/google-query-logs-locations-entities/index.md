---
title: "How Google Might Use Query Logs to Find Entity Locations"
source_url: "https://www.seobythesea.com/2012/06/google-query-logs-locations-entities/"
slug: "google-query-logs-locations-entities"
date_published: "2012-06-23T10:53:44+00:00"
date_modified: "2020-06-20T20:44:31+00:00"
author: "Bill Slawski"
---

## How Google Might Identify Entity Locations

*A pending Google patent published this past week describes how the locations of entities included in queries might be identified from information found in the search engine’s query logs, based upon click histories and other information. Query log information may also be used to associate locations with websites and web pages.*

Are the Empire State Building or the Golden Gate Bridge places, or are they things? A search for just [Washington monument] or [Eiffel tower] doesn’t specify a physical address. Search for the [Statue of Liberty] and chances are that you want the one in the New York Harbor, but if your search was conducted in Paris, France, you might have wanted to see one of the ones in Paris (yes, there’s more than one). There are a number of [replicas of the statue](https://en.wikipedia.org/wiki/Replicas_of_the_Statue_of_Liberty) worldwide. How do you find entity locations?

![Concord Point Lighthouse, which sits at the mouth of the Susquehanna River in Havre de Grace.](media/lighthouse.jpg)

A search for [concord point lighthouse hotels] returns several pages that successfully point out that the lighthouse is in Havre de Grace Maryland, even though my query doesn’t mention the actual location. Is the search engine just finding the most relevant results for those keywords, or is it identifying the location of the lighthouse, and then trying to find web sites that are the best match both for the query term and the location?

A search for [hotels near central park] might be assuming that hotels near Manhattan’s Central Park in New York will be returned in search results, but again there are many central parks, and probably many people searching for hotels near one of them. Searches for [empire state building] or [golden gate bridge] that include some geographic information with them like a city or state name aren’t too difficult for a search engine to return results for.

Without that geographic information, a search engine could try doing things like looking for the IP address of the person doing the searching, to try to guess where they are searching from. That would reflect the assumption that the location of the searcher might help point to the right location. A person in New Jersey searching for the [statute of liberty] is probably trying to find the nearby landmark on Ellis Island. But what if the searcher is in Michigan, and traveling to Paris, and wants to see one of the Statues of Liberty there?

While search engines could also look at knowledge bases like Wikipedia or Freebase or even Google Maps to try to associate a landmark or point of interest with a specific location, But that still suffers from the problem of multiple entries of landmarks with the same name, or even incomplete Knowledge bases that may not list some landmarks.


## Identifying Entity Locations in Queries and Locations in Websites

Many searches to places like Disney World may involve queries involving lodging or trips to landmarks that could involve dining. A search engine receiving queries like [disney world hotels] or [camden yards restaurants] could identify the entities within the queries and identify and capitalize upon previous query information to find results and web sites that might be what searchers are looking for.

The processes in this entity locations patent look at hints from queries that do include locations, and queries that don’t include locations to infer when a query may be implying that a specific location might be implied from a search, and also to help associate specific websites with locations.

A location score for a web site doesn’t depend upon where the web site is hosted, or even where the people who run the website might be located. A site about the UK might be run from Delaware and hosted in Virginia. If the site tells people about places to go in London and things to see and do, then that hosting information and location information for people who run the site isn’t relevant. What does matter is when people perform searches for specific places in the UK if people click upon results from that Delaware run website to find information. The site might have a location-specific score assigned to it based upon a historical score of user clicks to its pages.

Some web sites cover a range of locations as well and may have sections or individual pages that cover specific locations. Those could also be associated with the locations as well, with the sections or the individual pages assigned location-specific scores. Again, a user click history might be used to assign locations for those sections or pages. Confidence values might be calculated for site sections or pages as to how much they might be about specific places for later use when the search engines respond to search queries.

So, if you want to travel overnight to watch a San Francisco 49ers game in San Francisco, and you search for [hotels candlestick park], a search engine can recognize the entity “candlestick park” in your query, look at query log file information to associate it with an implied location of the part of San Francisco that the stadium is located at, and return web sites or web pages that have location scores relevant for that location based upon query history information.

The entity locations patent filing is:

[Inferring Geographic Locations for Entities Appearing in Search Queries](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120158712%22.PGNR.&OS=DN/20120158712&RS=DN/20120158712)
Invented by Sushrut Karanjkar, Viswanath Subramanian, and Shashidhar Thakur
US Patent Application 20120158712
Published June 21, 2012
Filed: December 16, 2011

Abstract


> A server system associates one or more locations with a query by identifying the query, selecting a set of documents responsive to the query, and assigning weights to respective documents in the set of documents based, at least in part, on historical data of user clicks selecting search result links in search results produced for historical queries substantially the same as the identified query.
>
> Websites hosting the selected documents are identified, and, for each website, location-specific information for one or more locations is retrieved, including a location-specific score that corresponds to the likelihood that the respective location corresponds to a respective website. For each respective location for which location-specific information was retrieved, aggregating the location-specific scores, as weighted by the document weights, to compute an aggregated likelihood that the respective location is associated with the query. A specific location is assigned to the query when predefined criteria are satisfied.

The ideas in this patent filing aren’t too different from those I wrote about in my last post on [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/). What’s new is the idea that there are sometimes entities named in these queries, and information about the entities may also help find results for searchers.

Google has been using [entity detection in queries](https://www.seobythesea.com/2012/01/named-entity-detection-in-queries/) to do things like expanding the number of results returned from one (or more) specific site(s) if it believes that site is associated with that entity in some way.

Here, the location of an entity might be used to identify a location that a query might be targeting. [Knowledge base](https://www.seobythesea.com/2012/05/all-your-knowledge-bases-belong-to-google/) information could help determine entity location, but historical query log information and click histories is also very helpful as well.


## Takeaways

Chances are that many web site owners have been optimizing their sites to try to take advantage of the nearness of well-known landmarks for years by doing things like including directions on their sites from those landmarks, and even including information about those landmarks on their pages as well.

This patent filing describes how the search engine might take advantage of the behavior of its users in selecting search results to try to associate queries that include entities with locations, and associate web sites with locations as well, so that when a query looks for something like [candlestick park hotels], searchers are returned a set of search results that identifies pages showing off hotels near the San Francisco stadium.

While knowledge base results from sites like Wikipedia or Freebase might be somewhat helpful, query log information from searchers also can play a role in returning relevant results to searchers.
