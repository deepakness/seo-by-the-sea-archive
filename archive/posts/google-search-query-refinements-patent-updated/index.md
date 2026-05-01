---
title: "Google Search Query Refinements Patent Updated"
source_url: "https://www.seobythesea.com/2017/01/google-search-query-refinements-patent-updated/"
slug: "google-search-query-refinements-patent-updated"
date_published: "2017-01-25T18:52:49+00:00"
date_modified: "2021-04-29T09:24:33+00:00"
author: "Bill Slawski"
---

## Query Refinements have changed since the earlier days of Google

In 2006, I wrote a post [A Look at Google Midpage Query Refinements](https://www.seobythesea.com/2006/04/a-look-at-google-query-refinements/) (Go ahead and read it; this post will make more sense if you visit the past and bring it in). The patent I wrote then was granted again as a continuation patent, with new claims, reflecting a change in the process involving how Google is using it. The new version of the patent is now at:

[System and method for providing search query refinements](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,552,388.PN.&OS=PN/9,552,388&RS=PN/9,552,388)
Inventors: Paul Haahr and Steven D. Baker
Assignee: Google Inc.
The United States Patent 9,552,388
Granted: January 24, 2017
Filed: January 31, 2014

Abstract


> A system and method for providing search query refinements are presented. A stored query and a stored document are associated as logical pairing. A weight is assigned to the logical pairing. The search query is issued, and a set of search documents is produced. At least one search document is matched to at least one stored document. The stored query and the assigned weight associated with the matching at least one stored document are retrieved. At least one cluster is formed based on the stored query and the assigned weight associated with the matching of at least one stored document. The stored query associated with the matching at least one stored document is scored for at least one cluster relative to at least one other cluster. At least one such scored search query is suggested as a set of query refinements.


## You May Recognize The inventors of this Query Refinements Process

You may recognize Paul Haahr, from his presentation last year at SMX West on How Google Works, in which he gave some fascinating insights into how the search engine operates. His co-inventor, Stephen Baker wrote a Google Blog post about Google synonyms titled [Helping computers understand language](https://googleblog.blogspot.com/2010/01/helping-computers-understand-language.html)

The ideal way of making sense of how Google may have changed around the way that they are making search query refinements is to compare the claims sections of the [older version of the patent](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20050055341&OS=20050055341&RS=20050055341) (filed on September 22, 2003, and granted on March 10, 2005) and the newer version (granted this past Tuesday).


## What is new are Rank Scores

I noticed that the new version talks about rank scores for terms that clusters are built around and how those rank scores might be used:


> 5. The method of claim 2, comprising: obtaining, for each cluster, a rank score based on (i) the relevance scores of the search results that reference resources that match the resources of the cluster, and (ii) a quantity of the resources of the cluster; and selecting, as refinement clusters, a top n cluster with the highest rank score, wherein n is a positive integer, wherein each representative search query is selected from one of the refinement clusters, and wherein selecting a subset of the search queries further comprises selecting one or more search queries from the representative search queries of the m clusters with the highest rank score, wherein m is a positive integer.


## Rank Scores Reminded me of Google’s Context Vectors

Counting up the number of resources of different clusters that might be determined to be relevant to a refinement reminds me of Google’s patent on [Context Vectors](https://www.seobythesea.com/2016/10/google-patents-context-vectors-improve-search/), which counts the number of times a certain meaning of a word is found in a knowledge base as a way of giving weight to different meanings of words. This new patent’s rank score similarly gives weights to how often different refinements show up in search results.

So a refinement for “Jaguar” that is a car is counted and considered against a “Jaguar” that is an animal. Both are offered as query refinements by Google and are ranked differently based upon rank scores.

Last Updated June 8, 2019.
