---
title: "What Do You Do With a Database of AOL User Queries?"
source_url: "https://www.seobythesea.com/2006/08/what-would-you-do-with-a-database-of-aol-user-queries/"
slug: "what-would-you-do-with-a-database-of-aol-user-queries"
date_published: "2006-08-25T17:50:17+00:00"
date_modified: "2020-06-19T17:20:43+00:00"
author: "Bill Slawski"
---

Sometimes you see an idea appear to repeat itself in the world of search engines when it comes to intellectual property.

Imagine that you could take a body of queries, and classify them so that you could get a sense of what the searcher’s intent was. Also consider the notion that you could then split up a large database into several smaller specialized databases so that when someone searched, only some of those databases needed to be looked at to deliver results based upon the classification of the query, with results from more than one database merged.

Would this method result in more efficient and relevant search results, with less costly processing?

The routing of results based upon classifications could call into play other databases or search processes by a look at the query submitted to the search engines and patterns noticed in query phrases.

A new patent application from AOL looks at these ideas, and others involving classifications of queries.

It explores how queries may be classified, and how that classification can efficiently help return results, as well as exploring topical classifications of queries. Even advertisements could be based upon classifications rather than keywords used.

[Web query classification](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060190439%22.PGNR.&OS=DN/20060190439&RS=DN/20060190439)
Invented by Abdur R. Chowdhury, Steven Michael Beitzel, David Dolan Lewis, Aleksander Kolcz
US Patent Application 20060190439
Assigned to AOL
Published August 24, 2006
Filed on January 27, 2006

Abstract


> A query phrase may be automatically classified to one or more topics of interest (e.g., categories) to assist in routing the query phrase to one or more appropriate backend databases. A selectional preference query classification technique may be used to classify the query phrase based on a comparison between the query phrase and patterns of query phrases. Additionally, or a combination of query classification techniques may be used to classify the query phrase. The topical classification of a query phrase also may be used to assist a search system in delivering auxiliary information to a user who entered the query phrase. Advertisements, for instance, maybe tailored based on classification rather than query keywords.

**Similar to New Google Patent?**

In many ways, this reminds me of the patent that was just granted to Google which I wrote about on Tuesday: [Google looks at Query Themes and Reranking Based upon Editorial Opinion](https://www.seobythesea.com/2006/08/google-looks-at-query-themes-and-reranking-based-upon-editorial-opinion/). It goes into further details on some of the benefits of classifying queries but discusses methods for classification that seem very similar to what is presented in the Google patent filing.

It also talks about some manual determination of what sites are good ones in response to certain queries, and a machine learning approach based upon those manual determinations, which seems similar to the “favored” and “non-favored” sites mentioned in the Google document. As this AOL document notes, a query phrase may be classified into a particular category, manually by a human editor, or by programmatically comparing it to a list of query phrases previously classified manually.

An automated classification may also happen through a system that has learned from a training set of classified query phrases.

There’s no discussion here in the AOL document of reranking results based upon those editorial decisions. But it appears that this approach would influence the actual rankings, which would mean no need for a “reranking.”

There are differences between the two documents, and if you want to dig deeper into this patent application, you might find it interesting to hold the Google and AOL filings up side-by-side and compare the similarities and differences.

**Summary of Query Classification Processes**

1. A search query is submitted,
2. The query phrase is broken into constituent parts,
3. Patterns associated with one or more categories are accessed from stored classification information which includes patterns of query phrases,
4. A determination is made as to whether a part of the submitted query phrase corresponds to at least a subportion of an accessed pattern,
5. If there is such a correspondence, the category associated with the pattern also is associated with the query phrase or its constituent part, and;
6. At least one search resource for satisfying the query phrase based on the associated category is identified.

Some features possibly involved in the implementation of this process:

1. Routing of the query phrase to at least one identified search resource may be enabled,
2. Associating the category may include associating the category with the query phrase,
3. Associating the category may include associating the category with the constituent part, and;
4. More than one category may be associated with the query phrase or the constituent part.

Based on the query phrase submitted, a search result may be received from at least one identified search resource (amongst possibly multiple databases – think of such things here as databases covering different topics, local search, a shopping search, an advertising database, etc.) and presentation of at least one search result to the user may be enabled.

The category or categories associated with the search query may be compared with attributes associated with the multiple search resources, so that routing a query phrase to at least one search resource may involve modifying the query phrase and routing a modified version of the query phrase to a subset of multiple search resources based on results of that comparison.

Modifying the query phrase could mean:

- adding words to the query phrase,
- eliminating words from the query phrase, and/or;
- re-ordering words in the query phrase.

The patent also discusses a “selectional preference query classification technique” when training a system to classify queries.f It involves:

1. Receiving a training query phrase including constituent parts,
2. Parsing it into at least one part,
3. Receiving more query phrases which share a constituent part with the training query phrase,
4. Recognizing patterns of training query phrases having at least one common constituent part,
5. Determining a category associated with the at least one common constituent part,
6. Associating the pattern of training query phrases with the category associated with the at least one common constituent part, and;
7. Using the pattern to categorize query phrases.

If you look back at what I wrote about the [Google Patent](https://www.seobythesea.com/2006/08/google-looks-at-query-themes-and-reranking-based-upon-editorial-opinion/), it describes a process of coming up with specific rules for determining classifications of queries. One example used was:


> For the query theme “sites that provide free software downloads the rule may be the requirement that the query contains the word “free” and “download”

This sounds somewhat similar to the AOL process described above.

**More on Query Classification Techniques**

Query phrases could be classified manually or through a supervised machine learning query classification process.

Results of query classification techniques may be compared, and the query phrase may be classified with a classification arbiter if that comparison indicates inconsistent results produced by the query classification techniques.

Categories for query phrases could be identified using more than two query classification techniques:

(1) The query phrase may be classified using more than one method, and then by having a classification arbiter decide based on a classification determined by a majority of classification techniques used.

(2) Same as above except that both a classification would be based upon both a majority of techniques and an overall classification metric of the query classification technique.

(3) The manual query classification technique may be used as the seed for the selectional preference and supervised machine learning query classification techniques.

**Conclusions**

It’s somewhat odd to see the patent from Google and this patent application from AOL come out in the same week, and possess so many similarities.

There’s been a lot of discussion in different places on the web, about a [controversial release of a database of AOL user queries](https://techcrunch.com/2006/08/06/aol-proudly-releases-massive-amounts-of-user-search-data/). Sadly, that data wasn’t released to personally identify or harm anyone, or intrude in their privacy, but instead was intended to enable people to perform research involving processes like the ones described in this patent application. It’s a shame that the data could be used to identify people, and regretful that people lost their jobs over that release, that AOL’s efforts have been blemished, and that people have had their private searches exposed.
