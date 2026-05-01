---
title: "Multi-Stage Query Processing at Google"
source_url: "https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/"
slug: "google-looks-at-multi-stage-query-processing"
date_published: "2006-02-19T23:23:57+00:00"
date_modified: "2021-05-01T17:26:18+00:00"
author: "Bill Slawski"
---

## Multi-Stage Query Processing at Google

Deciding how a term or phrase is used in the context of a page can help decide how relevant that page is for a query from a searcher.

A patent application from Google this week looks at ways to consider the context of those words. It also describes a multi-stage query processing approach to determine relevancy and find results in a search.

The document is complex, but possible actions that can be taken during the different stages are:

**Multi-Stage Query Processing Stage 1:**

a) Deletion of stop words.
b) Term Stemming
c) Expanding queries to use synonyms and related terms that often co-occur with them.
d) Relevancy scores between a query and each document using one or more scoring algorithms, such as:


> ….the presence or absence of query term(s), term frequency, Boolean logic fulfillment, query term weights, the popularity of the documents (e.g., a query independent score of the document’s importance or popularity or interconnectedness), the proximity of the query terms to each other, context, attributes, etc.

**Multi-Stage Query Processing Stage 2:**

Adjacency and Proximity of terms are used to rank documents.

**Multi-Stage Query Processing Stage 3:**

Term attributes, such as whether terms are in titles, headings, metadata, and have certain font characteristics, are reviewed.

**Multi-Stage Query Processing Stage 4:**


## Generation of snippets to return with results

Other relevance feedback algorithms might be used, such as:


> ….pseudo-relevance feedback algorithms based on a full document approach (pseudo relevance feedback based on a whole web page), Document Object Model (DOM) segmentation, Vision-based Page Segmentation (VIPS), conceptual relevance feedback using concept lattices, etc.

[Multi-stage query processing system and method for use with tokenspace repository](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060036593%22.PGNR.&OS=DN/20060036593&RS=DN/20060036593)

**The patent application**

Inventors: Jeffrey Adgate Dean, Paul G. Haahr, Olcan Sercinoglu, and Amitabh K. Singhal
US Patent Application 20060036593
Filed: August 13, 2004
Published February 16, 2006

Abstract:


> A multi-stage query processing system and method enables multi-stage query scoring, including “snippet” generation, through incremental document reconstruction facilitated by a multi-tiered mapping scheme. At one or more stages of a multi-stage query processing system, a set of relevancy scores is used to select a subset of documents for presentation as an ordered list to a user. The set of relevancy scores can be derived in part from one or more sets of relevancy scores determined in prior stages of the multi-stage query processing system. In some embodiments, the multi-stage query processing system is capable of executing one or more passes on a user query and using information from each pass to expand the user query for use in a subsequent pass to improve the relevancy of documents in the ordered list.

Last Updated July 4, 2019.
