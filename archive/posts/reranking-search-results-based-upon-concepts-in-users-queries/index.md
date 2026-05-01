---
title: "Reranking Search Results Based Upon Concepts in Users' Queries"
source_url: "https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-concepts-in-users-queries/"
slug: "reranking-search-results-based-upon-concepts-in-users-queries"
date_published: "2006-09-18T05:46:31+00:00"
date_modified: "2020-06-19T15:56:15+00:00"
author: "Bill Slawski"
---

Can user queries be used effectively as feedback, to rerank search engine results? Possibly, if they can be understood as concepts first.


> Search queries can be decomposed into constituent parts referred to as units. A query processing engine decomposes a search query into units using statistical methods. A unit is one or more word sequences that typically corresponds to a natural concept such as “New York City” or “bird of prey.”

According to [Unity: relevance feedback using user query logs](https://dl.acm.org/doi/10.1145/1148170.1148319), Yahoo has been using Concept Units generated from searcher’s queries as one of the inputs in their *Also Try* feature to display refined results since spring of 2003.

The paper describes the live testing of search results reranking based upon “concept units” on a small percentage of Yahoo users for a week. This idea of concept units has appeared in other patent filings from Yahoo, and the kind of reranking based upon concept units was the focus of a patent application that was published last week. The quote above is from that document.

[Reranking and increasing the relevance of the results of Internet searches](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060206476%22.PGNR.&OS=DN/20060206476&RS=DN/20060206476)
Invented by Shyam Kapur and Jignashu Parikh
Assigned to Yahoo
US Patent Application 20060206476
Published September 14, 2006
Filed: March 10, 2005

Abstract


> Techniques are provided for reranking and increasing the relevance of the results Internet searches. A search query is initially parsed into individual units. Each unit corresponds to one or more words that represent a natural concept. A concept network is analyzed to locate concepts that are related to the units in the search query. Particular concepts are selected from the concept network. Independent Internet searches are performed for each of the selected concepts. The search results from these searches are then compared to units in the original search query and ranked according to their relevance to the original search query.

The basic idea behind the patent application is that it aims at making search results search results more relevant to a user’s intent. It would do this by reranking search query results by determining the relevancy of the search results to units, unit associations, and unit extensions in those search queries.

**A Summary Before Reranking**

1. Search query parsed into individual units using statistical methods.
2. Each unit is one or more words representing a natural concept such as “New York City” or “bird of prey.”
3. The search engine retrieves content from the web matching a search query and sends those results to a page assembler.
4. The page assembler sorts the results by their relevance to the query and presents them in an order most easily displayed to a searcher, in a search result display screen.

Some queries may contain more than one unit, which could be merged if they are “extension units.” Here are the different types mentioned in the patent filing:

1) Associated units – two or more units in a query, not sufficiently related to form a new unit.
2) Extension units – two or more units in a query sufficiently related to form a new unit.

**Related Patent Filings from Yahoo!**

The idea of using concept units and concept networks based upon searchers’ queries appears in a good number of patent filings from Yahoo. The earliest was granted in May of this year, and the latest two were published on September 14th. While this post covers one of those newest filings, the patent application focuses more on paid search results and a link to it appears at the bottom of this list.

A good percentage of discussion about search engine optimization on the web considers content and links, without delving too deeply into how a search engine may look at matching queries to pages. If you want to dig deeper into how Yahoo might use concept units, It would help to look at these.

- [Systems and methods for generating concept units from search queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040199498%22.PGNR.&OS=DN/20040199498&RS=DN/20040199498) – 7,051,023 – Patent Application Published October 7, 2004 – Patent Granted May 23, 2006
- [Universal search interface systems and methods](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060206474%22.PGNR.&OS=DN/20060206474&RS=DN/20060206474) – 20040249801 – Published December 9, 2004
- [Systems and methods for search processing using superunits](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050080795%22.PGNR.&OS=DN/20050080795&RS=DN/20050080795) – 20050080795 – Published April 14, 2005
- [Systems and methods for search query processing using trend analysis](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050102259%22.PGNR.&OS=DN/20050102259&RS=DN/20050102259) – 20050102259 – Published May 12, 2005
- [Search processing with automatic categorization of queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060122979%22.PGNR.&OS=DN/20060122979&RS=DN/20060122979) – 20060122979 – Published June 8, 2006
- [Automatic generation of taxonomies for categorizing queries and search query processing using taxonomies](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060122994%22.PGNR.&OS=DN/20060122994&RS=DN/20060122994) – 20060122994 – Published June 8, 2006
- [Systems and methods for managing and using multiple concept networks for assisted search processing](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060167896%22.PGNR.&OS=DN/20060167896&RS=DN/20060167896) – 20060167896 – Published July 27, 2006
- [System for modifying queries before presentation to a sponsored search generator or other matching system where modifications improve coverage without a corresponding reduction in relevance](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060206474%22.PGNR.&OS=DN/20060206474&RS=DN/20060206474) – 20060206474 – Published September 14, 2006

**Concept Networks**

A concept network involves relationships between related concepts, and each unit in a search query can be found in a concept network. Concept networks are used to identify concepts that are related to the search query units.

After a search query unit has been located in a concept network, related concepts in that concept network are selected. A concept network links to related concepts using a number of techniques. Here are ways that concepts in a concept unit might be related to each other:

- concepts that are synonyms,
- concepts that have a more specific meaning,
- concepts that have a more general meaning,
- specific real-life examples of the concept, and;
- well-known terms or names that sound similar to the concept or use some of the same words.

Example

A unit in a search query is “skyscraper.”

The system locates the concept “skyscraper” in the concept network and identifies related concepts:

- More general terms – such as “building” and “edifice.”
- Similar terms – such as “high rise.”
- Specific examples – such as “Empire State Building.”

**Building Concept Networks from Frequency of Past Queries**

Search queries previously submitted can be looked at to determine how frequently the related concepts appeared together in those queries. A concept network can be built by linking concepts that have appeared together.

**Session Based Concept Networks**

Concept network can be based on concepts that appearing together in queries submitted by all users. A concept network can be a session-based concept network, linking concepts that appeared together in search queries submitted by one particular user, or a group of users.

Examples of session-based concept networks.

The main concept “jaguar” can be linked to the following car related concepts because a particular user’s past queries linked them together:

- Luxury automobile,
- XYZ Car Company, and;
- Car racing.

A different user may have submitted prior queries showing an interest in jaguar animals. That user creates a different concept network linking “jaguar” to animal-related concepts like

- cat,
- zoo, or;
- safari.

**Burstiness and Concept Networks**

A concept network may link concepts appearing together most frequently in previous queries submitted during a specified period by one or more users.

Example of a time-limited concept network:

In this example, a concept “Jane Doe” is linked to the related concepts:

- Jane Doe Live Performances,
- Jane Doe Music CDs, and;
- instrumental music.

These related concepts are the concepts that appeared most frequently with “Jane Doe” in previous search queries over a specified time interval, which could be the past 24 hours, the past week, or the past month.

Imagine in that example, the concept network is from concepts related to a singer named Jane Doe based on the most popular search queries in the past 24 hours.

Now, during a later 24 hour period, the most popular search queries including “Jane Doe” may relate to a politician with the same name.

If that happens, the concept network for “Jane Doe” could be changed to include links to the related concepts “Jane Doe US Senator” and “Doe Initiative.”

This burst of new queries relating to what seems to be a different intent behind searching for “Jane Doe” results in the concept network being updated to include concepts that appeared most frequently in recent queries with the unit “Jane Doe.”

**Selecting Concepts for reranking**

This selection process can be based on many different criteria.

Examples:

- The top five most frequently occurring related concepts from the concept network can be selected, or;
- The top 50% or the top 25% of the most frequently occurring related concepts can be selected, or;
- Many other selection techniques could be used.

**Using Direct and Indirect Connections in Concept Networks**

The most closely related concepts from the concept network are selected. Those could be all concepts that are directly linked to the main concept in the concept network.

Other concepts can be linked to the main concept indirectly through one of the directly linked concepts, such as an indirect connection between the concepts “Jane Doe” and “violins” through “instrumental music.”

**Searches Based upon Selected Concepts**

Once concepts are selected from the concept network for units in a query, independent web searches are performed for one or more of the related concepts.

If there are four units in a search query, and one related concept is selected for each unit, then four independent Internet searches are performed.

If a large number of related concepts are selected, then web searches are only performed for a subset of the concepts. So, if 20 concepts are selected, searches might be performed for only the top 5 concepts that are related to all of the units in a search query.

The search engine performs the independent web searches for the concepts selected, and it can be performed using any well-known Internet searching techniques (such as using Google or Yahoo! search technology).

Separate sets of search results are retrieved for each of the individual Internet searches performed by a search engine, and those are sorted according to their relevance to each related concept.

**Reranking Based upon Additional Concepts**

Reranking the search results retrieved from the web searches then happens by taking those results and the results from a search performed on the entire original search query.

Each of the search results is compared to the units, unit associations, and unit extensions in the original search query, and each result is assigned a rank or score based on its relevance to the original search query.

*Assigning a Score*

The search results are analyzed to determine how often the units, the associations of units, and the unit extensions from the search query appear in the search results, and assigned a score based on the frequency (or relative frequency) that instances of those appear in the search results.

The more appearances, the higher the score. That score is used to rerank the results.

*Navigational Queries*

Search results received from certain types of queries may be given higher scores.

For example, results retrieved from navigational queries can be ranked more highly than search results retrieved from other types of queries. Those higher scores for navigational queries are based on an assumption that navigational queries generally retrieve more relevant search results.

*Sorting Based Upon Scores*

Once rerank scores are assigned to each of the search results based on their relevance to the original search query, the search results are sorted from the highest rerank scores to lowest rerank scores.

The highest rerank scores should point to content most relevant to the original search query, and the results with the lowest rerank scores should be content least relevant to the original query.

This process increases the relevance of search results by locating content matching concepts related to units in the search query. The search results are then combined with search results from a standard web search based on the entire search query and sorted according to their relevance to the search query.

*Assumptions Behind Reranking*

The concept network is used to increase the number of search results retrieved during a search.

This should result in at least some of the search results being likely to be highly relevant to the search query and the user’s intent. This expansion should enable the search engine to identify a larger number of relevant search results.

In effect, this also provides a feedback loop into a search, by seeing what searchers have been looking for in units found in their queries, which are identified in search query logs. Using a time interval, as mentioned above, may return pretty timely results.

**Conclusion**

Results from searches on related concepts can be used to add to results and rerank results from the original search query. They could also be presented as related searches or inserted into the original results at predetermined intervals.
