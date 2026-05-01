---
title: "Why a Search Engine Might Cluster Concepts to Improve Search Results"
source_url: "https://www.seobythesea.com/2011/01/why-a-search-engine-might-cluster-concepts-to-improve-search-results/"
slug: "why-a-search-engine-might-cluster-concepts-to-improve-search-results"
date_published: "2011-01-26T11:37:38+00:00"
date_modified: "2022-01-04T09:31:09+00:00"
author: "Bill Slawski"
---

## A Search Engine May Cluster Concepts to Better Understand What Pages are About

Conventional search engines focus upon the words that they find on a web page rather than the meanings of those words. So, when you search for something like [cooking classes Palo Alto], a search engine might look for all of the pages that it can find that include all of those words. If it doesn’t find many, it might do something called “backing off,” and also show some results that don’t include all of the words.


## Difficultt Ranking Subtle Changes in Search Results

But, the chances are that the search engine might not show results for a slightly different version of that search, such as [cooking class Palo Alto], where “classes” is replaced with “class.” While “class” and “classes” are related with the class being a subpart, or stem, of the word classes, sometimes variations of words have very different meanings when used in different contexts.


## Better Capturing Underlying Semantic Meaning Behind Words Within The Text

This week, Google was granted a patent this week that focuses on more effectively capturing the underlying semantic meaning behind words within the text more effectively. It builds upon a patent that Google was granted in 2008, which “characterizes a document concerning clusters of conceptually related words.” As a result, it may act to cluster concepts when understanding the text it finds on pages.

The patent granted this week is:

[Selectively deleting clusters of conceptually related words from a generative model for text](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,877,371.PN.&OS=pn/7,877,371&RS=PN/7,877,371)
Invented by Uri Lerner, Michael Jahr, and Vishal Kasera
Assigned to Google
US Patent 7,877,371
Granted January 25, 2011
Filed February 7, 2007

Abstract


> One embodiment of the present invention provides a system that selectively deletes clusters of conceptually related words from a probabilistic generative model for textual documents.
>
> During operation, the system receives a current model containing terminal nodes representing random variables for words and contains one or more cluster nodes representing clusters of conceptually related words. Nodes in the current model are coupled together by weighted links so that if an incoming link from a node that has fired causes a cluster node to fire with a probability proportionate to the weight of the incoming link, an outgoing link from the cluster node to another node causes the other node to fire with a probability proportionate to the weight of the outgoing link.
>
> Next, the system processes a given cluster node in the current model for possible deletion. This involves determining the number of outgoing links from the given cluster node to terminal nodes or cluster nodes in the current model. If the determined number of outgoing links is less than a minimum value, or if the frequency with which the given cluster node fires are less than a minimum frequency, the system deletes the given cluster node from the current model.

The Cluster Concepts patent granted in 2008 is:

[Method and apparatus for characterizing documents based on clusters of related words](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,383,258.PN.&OS=pn/7,383,258&RS=PN/7,383,258)
Invented by Georges Harik and Noam M. Shazeer
Assigned to Google
US Patent 7,383,258
Granted June 3, 2008
Filed September 30, 2003

Abstract


> One embodiment of the present invention provides a system that characterizes a document concerning clusters of conceptually related words. Upon receiving a document containing a set of words, the system selects “candidate clusters” of conceptually related words that are related to the set of words.
>
> These candidate clusters are selected using a model that explains how sets of words are generated from clusters of conceptually related words. Next, the system constructs a set of components to characterize the document, wherein the set of components includes components for candidate clusters. Each component in the set of components indicates a degree to which a corresponding candidate cluster is related to the set of words.

Both build upon ways of understanding the meanings behind small groups of text, like you might find in searcher’s query suggestions during a query session, and trying to decide how those blocks of text might be related to each other.


## The Value behind the Cluster Concepts Approach

The benefits of a Cluster Concepts approach like this can include:

- Help in guessing at concepts behind a piece of text. These concepts might be shown to a searcher during a search to help them better understand the meaning behind the text.
- Enabling the search engine to compare words and concepts found in a document and a query. This can help the search engine develop an information retrieval scoring function to help rank web pages in search results based upon those concepts.
- Expanding search results to include related words and concepts in a search by looking at clusters of potential results related to different concepts that might include a specific word. For instance, a search for the word [jaguar] could mean the car, the animal, or the NFL football team. Clusters created around each of these “concepts” associated with the term could lead the search engine to show a certain percentage of results covering the different concepts, and ensure diversity in those results.
- Comparing the relationship between words and concepts on a web page and in an advertisement. This can stand in as a proxy for how well an advertisement might perform when displayed on a certain web page. For example, an advertisement for a Jaguar car on a page about jaguar cats may not be very effective.
- Comparing the relationship between words and concepts in a query and an advertisement. This can provide an idea of how well an advertisement might do on a search result page for a specific query.
- Comparing the relationship between words and concepts from different web pages. This can tell the search engine how far apart conceptually two pages might be when they are clustered together as “similar” documents.
- Classification of pages, and filtering of some kinds of pages, based upon which clusters words (that might be used within queries) tend to appear within.
- Generalizing a search query to retrieve more results (similar to the kind of backing off that I mentioned above), by looking at the clusters that the query terms appear within and parent concepts for those clusters.
- Identifying whether a word is a misspelling of another word by looking at the concepts related to each of those two words. For example, “flicker” is conceptually related to lights and flames, and “Flickr” is conceptually related to photographs. There’s a good probability that “Flickr” is not a misspelling of “Flicker.”

I was reminded of this post involving clustering conceptually related terms by a Google patent granted in 2019, which clusters search results by the entities that appear in those. I wrote about the patent in the post, [Entity Clustering in Google Search Results](https://gofishdigital.com/entity-clustering/)

Updated December 31, 2019.
