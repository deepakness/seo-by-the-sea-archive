---
title: "20 More Ways that Search Engines May Rerank Search Results"
source_url: "https://www.seobythesea.com/2007/09/20-more-ways-that-search-engines-may-rerank-search-results/"
slug: "20-more-ways-that-search-engines-may-rerank-search-results"
date_published: "2007-09-19T18:14:33+00:00"
date_modified: "2022-02-25T14:07:51+00:00"
author: "Bill Slawski"
---

Last October, I made a list of [20 Ways Search Engines May Rerank Search Results](https://www.seobythesea.com/2006/10/20-ways-search-engines-may-rerank-search-results/), which was well-received (thank you!), and it was suggested that I come up with an updated list. There’s also a follow-up post to this one now at [Another 10 Ways Search Engines May Rerank Search Results](https://www.seobythesea.com/2010/06/another-10-ways-search-engines-may-rerank-search-results/).

When someone searches, the conventional approach a search engine takes is to find pages with the keywords. It may then rank and serve them to combine an information retrieval relevance score for the pages with some importance metric, such as a PageRank Score. There are times when Google may then rerank search results based on other signals getting involved.

This list contains links to several patent applications and a few papers involving ways to rerank search results. Most of these got published after creating my previous reranking search results post.

The approaches in some may overlap a little with some on the previous list in terms of topics covered, but these are new documents discussing how search results might get reranked.

Some of the methods described here may not presently get used, but it might not hurt to think about them.

1. **Desktop Search Influenced by the Contents of an Active Window**

Granted on Tuesday, this Google patent describes how a search of the Web may get altered based upon an active document, such as a text document or email or IM message, in an open window on a person’s computer at the time that they are searching while using a desktop search application. That is a compelling reason to rerank search results because it is very timely information.

- [Systems and methods for associating a keyword with a user interface area](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,272,601.PN.&OS=pn/7,272,601&RS=PN/7,272,601)

2. **Expanded and Adjacent Queries from User Logs**

Another recent patent filing from Microsoft looks at user query sessions to log files. It looks at the terms used in a query and accepts aggregated queries of others who have used the same search terms and other words in their questions to create rewritten queries.

It also looks at related queries during sessions (adjacent queries) from other searchers who have searched for the same question. Results from these rewritten and adjacent queries may be used to rerank search results that show up in response to the original query.

- [Re-ranking search results based on query log](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20070214131.PGNR.&OS=dn/20070214131&RS=DN/20070214131)

3. **Social Network Endorsements**

Suppose you are a social network member, and the network allows you to rate and endorse web pages and let your friends do the same. In that case, the endorsements made by you and from your friends may cause the results that you see from a search to get reranked, according to the following Google patent application:

- [Methods and systems for endorsing search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070203887.PGNR.&OS=dn/20070203887&RS=DN/20070203887)

4. **Personalized Anchor Text Relevance**

Links from pages that contain some anchor text that seems related to information found in an explicit or implicit profile of your interests may weigh more heavily in the rankings of pages under the following recently granted Google patent.

Explicit information is information related to something that you have expressly stated that you have some interest in. Implicit information involves information that may get inferred that you are interested in based upon such things as pages that you have bookmarked or visited in the past. In that instance, Google may rerank search results that you, and only you, see.

- [Personalizing anchor text scores in a search engine](https://patents.google.com/patent/US7260573B1/en)

5. **Recognizing Semantically Meaningful Compounds**

A search for more than one term may result in a search engine searching for sets of pages that use all of those terms. Treating some of the words within a query as semantically meaningful compounds and may rerank search results based upon pages containing such a compound may mean that more relevant documents are returned to a searcher.

- [Identification of semantic units from within a search query](https://patents.google.com/patent/US7249121B1/en)

6. **Use of Trends and Bursty Topics**

From an Ask.com patent filing, fresh, highly topical, and popular content related to a query may make its way into search results and push down other relevant impacts.

- [System and method for monitoring evolution over time of temporal content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070143300.PGNR.&OS=dn/20070143300&RS=DN/20070143300)


> Correlated top gainer events can be used to improve the ranking of search engines and predict search trends. This is used for adding freshness to the Web index. Those Web pages that contain fresh topics” “identified over the stream of news” “are boosted in ranking for the period of observation. After a certain amount of time (e.g., a week, a month, etc.), if the topic is no longer fresh, the boosting effect is subject to a decay rule.

7. **User Distributed Search Results**

A Google patent application describes a method of letting people insert search results into their blogs, emails, and instant messages. Reputation scores may get created for people who do this, and the higher their reputation score, the higher that result might rank for a relevant query searched for by someone else. So reputation can cause Google to rerank search results.

- [User Distributed Search Results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070130126.PGNR.&OS=dn/20070130126&RS=DN/20070130126)

8. **Advanced Search Users**

A Microsoft paper looks at how advanced users of search engines search and browser results to understand how results might improve for all searchers.

- [Investigating the Querying and Browsing Behavior of Advanced Search Engine Users](http://ryenwhite.com/papers/WhiteSIGIR2007b.pdf) (pdf)

9. **Dual Trustrank**

You used community endorsements and ratings of endorsers and link-based TrustRank in a dual TrustRank process from Yahoo to rerank pages. The idea is that there are members of your social network whom you trust, and if they endorse a page, then it is likely to become more trustworthy.

Couple that with a link analysis approach to finding webspam, and this “dual” method of identifying trust can become used to show a searcher more trustworthy pages.

- [Search engine with augmented relevance ranking by community participation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070112761.PGNR.&OS=dn/20070112761&RS=DN/20070112761)

10. **Web Traffic**

By looking at real-time, or near real-time web traffic and activity, including search results selections at other search engines, results can get reranked under the methods described in this Ask.com patent application.

- [Sampling Internet user traffic to improve search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070112730.PGNR.&OS=dn/20070112730&RS=DN/20070112730)

11. **Different Queries, Similar Results and Selections**

A Yahoo patent application looks at query histories for different queries that provide similar results and similar selections amongst the searchers who enter those queries. This may allow a search engine to broaden result sets to include results from those different queries.

- [Using matrix representations of search engine operations to make inferences about documents in a search engine corpus](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070094250.PGNR.&OS=dn/20070094250&RS=DN/20070094250)

12. **Understanding Timely Topics through Alerts**

The frequency and timeliness of alert sign-ups
