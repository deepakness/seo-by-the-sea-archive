---
title: "How Google Might Make Better Synonym Substitutions Using Knowledge Base Categories"
source_url: "https://www.seobythesea.com/2015/12/how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories/"
slug: "how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories"
date_published: "2015-12-21T19:10:38+00:00"
date_modified: "2021-07-30T11:58:00+00:00"
author: "Bill Slawski"
---

![Shea Stadium](media/Shea-Stadium.jpg)

_[Leigh Miller – Yankee Stadium](https://www.flickr.com/photos/one22andan8th/4607722009/in/photolist-82aMdV-6CMPZB-4xSFuH-82aL4r-eE7QQr-4xWW8s-23Smcf-6CMFaH-6CMCUc-6CS6Yw-541VFr-5dA224-5e6Gvm-er954-sHS1P4-tDvamm-axnKC2-6CMM9F-axnVie-T5ZRK-6CS4KN-6uxir8-cpdQqo-5nfhka-T5UKW-T64g1-T5UiF-T5Pm6-T5Pso-T65B3-T65gf-T63P9-T62EV-T5PQd-T62MV-cpdPwo-tDPdov-cpdNVU-T66hh-T5SV4-5nfgJX-yrP2PQ-toffQp-6uxcgB-T5U8N-T5Tz5-T61R8-tCmXaU-ttkUBC-sNV3KU), [francis_leigh](https://www.flickr.com/photos/one22andan8th/), [Some rights reserved](https://creativecommons.org/licenses/by/2.0/)_


## How Google May Use Synonym Substitutions to Rewrite Queries

A couple of months ago, I wrote about a Google patent that involved rewriting queries, titled [Investigating Google RankBrain and Query Term Substitutions](https://gofishdigital.com/investigating-google-rankbrain-and-query-term-substitutions/). There’s likely a lot more to how Google’s RankBrain approach works, but I came across a patent that seems related to the patent I wrote about in that post and thought it was worth sharing and starting a discussion about. The patent I wrote about in that post was [Using concepts as contexts for query term substitutions](https://patents.google.com/patent/US9104750). The title for this new patent was very like that one (Synonym identification based on categorical contexts), and the more recent patent was from December 1st of this year.

The new synonym substitutions patent starts by describing a scenario that is a good example of how it works. The inventors tell us:


> For example, learning that “restaurants” is a good synonym for “food” in the query [food in San Francisco] is relatively straightforward because the volume of query traffic, including the query term “San Francisco,” is huge. For much smaller cities, such as Grey Bull, Wyo., the query stream may have never seen any supporting evidence for this synonym substitution.

Both cities are entities that fit into the same category. That of “Cities” means that they could potentially be good synonyms for each other. That’s what the inventors of this patent tell us specifically, using the San Francisco and Grey Bull example:


> For example, if “San Francisco” and “Grey Bull” are both cities, and “restaurants” is a good synonym for “food” in queries about San Francisco, the synonym relationship may apply to queries related to “Grey Bull” as well. Thus, the category “city” may be a useful category when identifying synonyms for query expansion in the circumstances such as this.

So, we are told that the process involved in this synonym substitutions patent is to identify categories from a knowledge base involving several entities. Other entities within that same category could be synonyms for each other in similar contexts. Thus, the process from the patent involves identifying those entities from a query stream and identifying the category as one that they call a “coherent” category.


## A Coherent Category is One in Which a Certain Threshold of Terms Tends to Co-Occur in a Query Stream Involving Those Entities

The patent tells us that a coherent category is one in which a certain threshold of terms tends to co-occur in a query stream involving those entities. The patent tells us, for instance, that a category that might include entities that are cities, villages, and towns. They might see a lot of co-occurring terms involving hotels and roads. If the number of co-occurring terms appearing in that query stream meets a certain threshold, it would be a coherent category. The entities from the same categories could then be synonyms for each other.

The synonym substitutions patent in question is:

[Synonym identification based on categorical contexts](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,201,945.PN.&OS=PN/9,201,945&RS=PN/9,201,945)
Invented by: Zachary A. Garrett, Takahiro Nakajima, Tasuku Oonishi
Assignee: Google
US Patent 9,201,945
Granted December 1, 2015
Filed: March 8, 2013

Abstract


> Methods, systems, and apparatus, including computer programs encoded on a computer storage medium, for training recognition canonical representations corresponding to named-entity phrases in a second natural language based on translating a set of allowable expressions with canonical representations from a first natural language, which may expand a context-free grammar for the allowable expressions for the first natural language.


## Synonym Substitutions Take Aways

When I wrote about the query term substitution patent I refer to at the start of this post, I included several examples of re-written queries based upon some substitutions of query terms. Those may have seemed reasonable to a search engine looking at words that tended to show up, or co-occur, in a query stream involving those search terms.

For instance, someone searching for [New York Yankees stadium] was likely searching for results that involved “baseball.” That is because queries that included “New York Yankees” and “stadium” also often included the term “baseball.”

That patent didn’t use the term “co-occur,” nor did it explain how a knowledge base might substitute entities that might be in the same categories like this one does. The idea that a shared context like entity categories can trigger synonym substitutions in a query is interesting.


## Synonyms in Search Show Up Frequently

It’s worth spending time with both patents and reading through each of them many times, and thinking about how they are being used.

I’ve written a few posts about synonyms in search. Here are some of those:

- 2/19/2006 – [Multi-Stage Query Processing at Google](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/)
- 5/25/2007 – [Refining Queries Using a Local Category Synonym](https://www.seobythesea.com/2007/05/refining-queries-using-category-synonyms-for-local-and-other-searches/)
- 12/29/2008 – [How a Search Engine Might Use Synonyms to Rewrite Search Queries](https://www.seobythesea.com/2008/12/how-a-search-engine-might-find-synonyms-to-use-to-expand-search-queries/)
- 1/23/2009 – [Google to Expand Language Search and Shrink Our World?](https://www.seobythesea.com/2009/01/search-engines-to-expand-language-search-and-shrink-our-world/)
- 6/29/2009 – [Semantic Relations from Query Logs](https://www.seobythesea.com/2009/06/query-logs-and-the-slang-of-the-web/)
- 12/22/2009 – [Google Search Synonyms Are Found in Queries](https://www.seobythesea.com/2009/12/how-google-may-expand-searches-using-synonyms-for-words-in-queries/)
- 1/19/2010 – [Google Synonyms Update](https://www.seobythesea.com/2010/01/google-synonyms-update/)
- 1/27/2010 – [Paid Search Results and Query Expansion using Synonyms and Related Concepts](https://www.seobythesea.com/2010/01/paid-search-results-and-query-exansion-using-synonyms-and-related-concepts/)
- 2/16/2011 – [More Ways Search Engine Synonyms Might be Used to Rewrite Queries](https://www.seobythesea.com/2011/02/more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with/)
- 8/12/2013 – [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- 9/27/2013 – [The Google Hummingbird Patent?](https://www.seobythesea.com/2013/09/google-hummingbird-patent/)
- 12/8/2013 – [How Google May Rewrite Queries](https://www.seobythesea.com/2013/12/rewrite-search-terms/)
- 9/9/2013 – [How Google May Reform Queries Based on Co-Occurrence in Query Sessions](https://www.seobythesea.com/2013/09/google-reform-queries-based-co-occurrence-query-sessions/)
- 10/15/2013 – [Google’s Hummingbird Algorithm Ten Years Ago](https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/)
- 12/21/2015 = [How Google Might Make Better Synonym Substitutions Using Knowledge Base Categories](https://www.seobythesea.com/2015/12/how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories/)

Last Updated July 13, 2019
