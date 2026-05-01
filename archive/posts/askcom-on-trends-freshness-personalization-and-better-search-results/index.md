---
title: "Ask.com on Trends, Freshness, Personalization, and Better Search Results"
source_url: "https://www.seobythesea.com/2007/06/askcom-on-trends-freshness-personalization-and-better-search-results/"
slug: "askcom-on-trends-freshness-personalization-and-better-search-results"
date_published: "2007-06-26T22:44:29+00:00"
date_modified: "2020-06-23T10:20:20+00:00"
author: "Bill Slawski"
---

The Web isn’t a static place, where pages remain the same, as search engines try to index and lead searchers to information.

A new patent application from Ask.com explores this stream of data, and trends within it, and how those can be used to improve search rankings and advertisements, as well as supplying searchers with relevant and up to date content.

I would suspect that similar inquiries into trends and burstiness of information happen at other search engines, too.

[System and method for monitoring evolution over time of temporal content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070143300.PGNR.&OS=dn/20070143300&RS=DN/20070143300)
Invented by Antonino Gulli, Filippo Tanganelli, and Antonio Savona
Assigned to Ask Jeeves, Inc.
US Patent Application 20070143300
Published June 21, 2007
Filed: December 20, 2005

Abstract


> A method and a system to receive temporal content from many sources over a transmission line, store the temporal content in at least one storage device, extract entity content from the temporal content, analyze entity occurrences to determine temporal content trends, receive a search query from a user, and render personalized temporal content to the user based on the temporal content trends.

**Measuring the Frequency of Content Usage**

There are a lot of documents on the web with dates and times associated with them, from news articles to blogs to emails, from RSS/Atom feeds to transcribe audio and video, from around the world.

These documents could be crawled regularly, with the time and date information attached to them, and that content could be indexed and stored, with entity content extracted from it, such as


> ….names, class (e.g., person, place, location, thing, organization, celebrity, sport-star, books, songs, topic (e.g., politics, world news, local news, entertainment, sports, generic (i.e., no category), etc.), date, URL to original story/article and name of the source of the story/article, part of speech, goods sold, etc.

That entity content could be matched up with certain classifications of:


> predetermined entities (e.g., NASDAQ top 100, Celebrities, etc.), dynamically changing entities (e.g., names, places, organizations, etc.), and name lists, such as domain name lists, etc.

Recurring terms, recurring sentences, sub-sequences of non-adjacent words can also be extracted as entity content.

These terms could be weighted according to their frequency in this stream of content.

A weighting process, such as term frequency over inverse document frequency (TF-IDF) could be used as part of a calculation of their frequency of usage over time. the recurring terms, sentences, etc. could also be extracted from the Web using natural languages processing techniques, such as named entities, or part of speech, etc., and stored.

**Gainers and Losers**

The occurrences of these different kinds of entities could be analyzed over time to determine trends or the evolution of an entity over time. Gainers and losers may be identified by looking at a number of their occurrences in consecutive time frames.

Gainers – content, such as news facts, that have a rapid increase in occurrences in a given consecutive time frame.

Losers – content, such as news facts, that are losing importance in occurrences in consecutive time frames.

**Co-occurrences of Information**

Some people or places or things or combinations of those can co-occur over a while. Measuring that co-occurrence might provide some interesting information. The patent application has a little math in it. Here’s some that describe the discovery of trends:


> If two pieces of information co-occurred in the same news article, their similarity increases. In one embodiment, fresh trends are discovered as follows. The set S.sub..OMEGA.={e.sub.1, e.sub.2, e.sub.3, . . . , e.sub.n} of entity content are extracted for a fixed window of time=[t, t+.delta.). The number of times that the extracted content appears in .OMEGA. is represented by Occ.sub..OMEGA.(e.sub.i). And, Occ.sub..OMEGA.-1(e.sub.i) is the number of times that the entity content e.sub.i appears in .OMEGA.-1=[t-.delta., t). The fresh trends are discovered by selecting the top fixed K entity content or the top weighted entities for a given minimum threshold, which increase (i.e., gainer) or decrease (i.e., loser) the number of appearances in two adjacent time windows .OMEGA. and .OMEGA.-1. It should be noted that other temporal methodologies for detecting fresh trends can also be used.

**Personalization of News**

If a user enters a query in a using a search engine which searches the extracted entities, he or she might receive personalized newspaper web page where news sharing the same fresh topic are clustered together and the user can monitor the evolution of the clusters over time. Fresh news articles would enter into the cluster and old news articles would expire and be removed.

**Trends in Search Results**

New trends and the new topics discovered could be used to improve the clustering of search results provided by a search engine with fresh information.
For example,

A correlation might arise for “George Bush” and “Hurricane Katrina” because of many pages and stories from around the same time in which both co-occur.

While this relationship is a gainer, it might be used to populate a fresh index of the search engine. As it becomes a loser, it might drop down and then out of the search engine:


> Correlated top gainer events can be used to improve the ranking of search engines and predicting search trends. This is used for adding freshness to the Web index. Those Web pages that contain fresh topics–identified over the stream of news–are boosted in ranking for the period of observation. After a certain amount of time (e.g., a week, a month, etc.), if the topic is no longer fresh the boosting effect is subject to a decay rule.

**Other Benefits of Understanding Trends**

*Query Refinements* – The correlated top gainer events could be suggested to users to expand their search query, to help them focused their search.

*Speech Search* – New trends and topics discovered could be used to maintain an updated dictionary of a speech to text system, where new terms are inserted and removed as soon as they appear or expire from the stream of content.

*Advertising* – Discovered trends might be used to help set prices in an advertising selling scheme set up as an auction.


> The starting price for advertising, such as advertising on a Web page associated with top gainers, is set once the new trend is discovered by temporal trend analyzer 345. Clustering/correlation of entities is performed by clustering unit 380 and is used to set a price for the group of clustered or correlated entities. Classification of prices is used according to predicted categories.

*Focused Crawling* – The identification of a trend may get the search engine to conduct focused crawls, to better focus upon trends. For instance, when blog sites start to discuss unanticipated events such as emergencies, unforeseen events, earthquakes, tsunamis, terrorist activity, etc., the trend for that new topic is an indication that more users may be interested in and have a desire to receive more information on the unanticipated event.

Anticipated events such as elections, opening day for movies, stores, scheduled sports events, can also be used for focused crawling.
