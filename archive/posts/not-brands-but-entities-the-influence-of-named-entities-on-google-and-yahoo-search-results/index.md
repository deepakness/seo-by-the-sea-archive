---
title: "Not Brands but Entities: The Influence of Named Entities on Google and Yahoo Search Results"
source_url: "https://www.seobythesea.com/2010/08/not-brands-but-entities-the-influence-of-named-entities-on-google-and-yahoo-search-results/"
slug: "not-brands-but-entities-the-influence-of-named-entities-on-google-and-yahoo-search-results"
date_published: "2010-08-19T11:21:31+00:00"
date_modified: "2021-07-02T11:55:28+00:00"
author: "Bill Slawski"
---

Does Google favor big brands when showing search results? That question has been bandied about on the Web for a while, but the answer may be more complicated than just a matter of brands.

The question arose this morning on Malcolm Coles’ blog, in his post-Google treating brand names in search terms as site: searches? after Malcolm very astutely discovered certain sets of search results showing more than 2 results from the same domain.

Rather than just looking for brands, it’s more likely that Google is trying to understand when a query includes named entities – specific people, places, or things. If it can identify those entities, that identification can influence the search results that you see.

I’ve written about the topic before, when Google was granted a patent named [Query rewriting with entity detection](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,536,382.PN.&OS=pn/7,536,382&RS=PN/7,536,382) back in May of 2009, which I covered in [Boosting Brands, Businesses, and Other Entities: How a Search Engine Might Assume a Query Implies a Site Search](https://www.seobythesea.com/2009/05/boosting-brands-businesses-and-other-entities-how-a-search-engine-might-assume-a-query-implies-a-site-search/).

It’s possible that Google has been doing something like this for a while but may have turned this process up a notch very recently.

The process in that patent may mean that if Google recognizes when a search query involves a particular entity, and if the entity can be associated with a specific website, it might show multiple results for that site. For example, Google recognizes that “SEO by the Sea” is an entity. When I perform a search such as “SEO by the Sea entities” (without the quotation marks), Google will show several search results from SEO by the Sea:

In the past, it was quite likely that Google would have only shown a couple of results from SEO by the Sea, possibly with a link under the second to “see more results from this site.” If I have Google set to show 10 results, the first 6 are from SEO by the Sea. If I have Google set to show 100 results per search result page, the first 8 are presently from SEO by the Sea.

More than 8 pages on the seobythesea domain are about entities, but Google is presently limiting how many it is showing. I’m not sure how those 6 or 8 were selected, but it’s something to investigate.

**Named Entities, Google, and Metaweb**

Google’s recent acquistion of Metaweb is noteworthy for a number of reasons. One of them is that Metaweb has developed an approach to cataloging different names for the same entity. For example, when Google sees names on the Web such as Terminator or Governator or Conan the Barbarian or Kindergarten Cop, it can easily associate those mentions with Arnold Schwarzenegger.

A Google patent filing published earlier this month, [Identifying Query Aspects](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100198837.PGNR.&OS=dn/20100198837&RS=DN/20100198837), which I wrote about in [Google and Metaweb: Named Entities and Mashup Search Results?](https://www.seobythesea.com/2010/08/google-and-metaweb-named-entities-and-mashup-search-results/), identified Metaweb’s Freebase directory as one place where Google might learn more about named entities, and different aspects of those entities, so that it could present a new type of search result broken into categories.

For example, search results on a search for “Hawaii”, might include segmented sections involving different aspects of the entity “Hawaii,” such as “beaches,” “hotels,” and “weather.”

**Named Entities and Yahoo**

Will the ideas showing up in Yahoo patent filings be incorporated into what Bing offers sometime in the future? If so, Yahoo’s ideas on entities may fuel some exciting approaches that we might see from Bing.

My post from yesterday described how Yahoo might [interpret queries by looking for entities](https://www.seobythesea.com/2010/08/how-a-search-engine-might-interpret-ambiguous-queries-through-entity-tags/) or concepts within those queries, and applying labels to them to understand the intent behind a search.

Someone searching for [new york pizza sunnyvale] could be interpreted in many different ways. Yahoo might rewrite the query a couple of different ways, pulling entities from it and labeling each of those.
For instance:

[new york pizza]/food [sunnyvale]/location
[new york pizza]/business [sunnyvale]/location
[new york]/location [pizza]/food [sunnyvale]/location

The term “new york pizza” might be identified as an entity as a particular type of pizza, or it might be seen as the name of a particular business, with the entity “Sunnyvale” being seen as a specific place. Or the query might be rewritten with the entities “New York” and “Sunnyvale” seen as locations, and the entity “pizza” as a kind of food.

The process involved in the patent would try to identify, using a confidence score, which breakdown of the query is the one most likely intended by a searcher. If more than one interpretation appears reasonable, the search results might contain results from more than one interpretation.

In Yahoo’s description of the implications of this process, they mentioned that their entity-based query interpretations could also influence more than the choice of web pages that show up in search results, and could influence things such as the advertisements that might appear as well.

While performing some queries at Yahoo, I also noticed that map results were possibly being shown based upon query interpretations, even though that wasn’t mentioned in the patent filing.

Today, another patent application was published by Yahoo, which describes how to query rewriting based upon entities that might influence map results as well as other geographic features such as weather results, or if the word “entertainment” is searched for, a list of local events. The patent is:

[Entity-Based Search Results and Clusters on Maps](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100211566.PGNR.&OS=dn/20100211566&RS=DN/20100211566)
Invented by Joy Ghanekar, Jerry Cheng, Edward Stanley Ott, IV, and Marc Eliot Davis
Assigned to Yahoo!
US Patent Application 20100211566
Published August 19, 2010
Filed: June 23, 2009

Abstract


> Techniques are described for providing geographically-related search results in map interfaces that are derived with an understanding of the intent behind the user’s query, and the abstract entities to which the query maps.

This patent filing refers to an even larger initiative from Yahoo involving entities, involving something they refer to as the W4 COMN. I’ll post about that next…

Added, 8/21/2010 – The Official Google Blog posted on this update at Google in a post titled [Showing More Results from a Domain](https://webmasters.googleblog.com/2010/08/showing-more-results-from-domain.html), noting that the change in their algorithm is intended to show searchers more results from a single domain when there is evidence that there’s “strong user interest in a particular domain.” They also note that the last few results (on a search results page set to show 10 results) are from other domains to preserve diversity in the results.

I’ve written a few posts about named entities. These are some that I wanted to share:

- [Do You Have a Named Entity Strategy for Marketing Your Web Site?](https://www.seobythesea.com/2013/12/named-entity-strategy/)
- [How I Came to Love Entities and Start Doing Entity Optimization](https://www.seobythesea.com/2014/10/came-love-entities/)
- [How Google Uses Named Entity Disambiguation for Entities with the Same Names](https://www.seobythesea.com/2015/09/disambiguate-entities-in-queries-and-pages/)
- [How Named Entities Connected to Trending Topics can be used to Address Real Time Search Results](https://www.seobythesea.com/2015/03/how-named-entities-connected-to-trending-topics-can-be-used-to-address-real-time-search-results/)
- [Not Brands but Entities: The Influence of Named Entities on Google and Yahoo Search Results](https://www.seobythesea.com/2010/08/not-brands-but-entities-the-influence-of-named-entities-on-google-and-yahoo-search-results/)
- [How Knowledge Base Entities can be Used in Searches](https://www.seobythesea.com/2014/07/knowledge-base-entities-used-in-searches/)
- [Finding Entity Names in Google’s Knowledge Graph](https://www.seobythesea.com/2014/06/entity-names-in-google/)
- [Google Gets Smarter with Named Entities: Acquires MetaWeb](https://www.seobythesea.com/2010/07/google-gets-smarter-with-named-entities-acquires-metaweb/)
- [Entity Associations with Websites and Related Entities](https://www.seobythesea.com/2014/01/entity-associations-websites-related-entities/)
- [How Google Might Identify Entity Synonyms Using Anchor Text](https://www.seobythesea.com/2014/06/synonyms-for-entities/)
- [Extracting Facts for Entities from Sources such as Wikipedia Titles and Infoboxes](https://www.seobythesea.com/2014/08/extracting-facts-for-entities-from-sources/)
- [Extracting Semantic Classes and Corresponding Instances from Web Pages and Query Logs](https://www.seobythesea.com/2014/09/extracting-semantic-classes-instances-from-web-pages-query-logs/)
- [How Google May Identify Main Entities](https://www.seobythesea.com/2015/04/how-google-may-identify-central-entities-from-resources/)
- [How Google’s Knowledge Graph Updates Itself by Answering Questions](https://www.seobythesea.com/2018/10/how-googles-knowledge-graph-updates-itself-by-answering-questions/)

Last Updated June 26, 2019
