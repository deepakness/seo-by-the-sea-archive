---
title: "Using Search Query Disambiguation with Entity Tags to Understand Intent"
source_url: "https://www.seobythesea.com/2010/08/how-a-search-engine-might-interpret-ambiguous-queries-through-entity-tags/"
slug: "how-a-search-engine-might-interpret-ambiguous-queries-through-entity-tags"
date_published: "2010-08-18T10:23:27+00:00"
date_modified: "2021-07-02T12:10:12+00:00"
author: "Bill Slawski"
---

## Why Perform Search Query Disambiguation?

When someone searches at a search engine, they tend to use only a handful or fewer words to find information about a topic. That presents a search engine with the challenge of finding web pages and other results in response and attempting to understand the intent behind that search.

If someone enters “new york pizza Sunnyvale” (without the quotation marks) into a search box at Google or Yahoo or Bing, it’s not clear whether they are looking for: (1) pizza in New York, in a neighborhood or area, referred to as Sunnyvale, (2) New York-style pizza in a place called Sunnyvale, (3) a place called “New York Pizza,” in Sunnyvale, or (4) some other result.

One approach to understanding the intent behind a query like this is to break down the words in the query into entity types and apply labels to those entities. With the “new york pizza Sunnyvale” example, that could be done a few ways:

[new york pizza]/food [sunnyvale]/location
[new york pizza]/business [sunnyvale]/location
[new york]/location [pizza]/food [sunnyvale]/location

This kind of attempt to perform search query disambiguation, or find the meanings or senses behind words and phrases, used in a query might better match what a searcher may be looking for.

When I search for “New York pizza Sunnyvale” in Google, the top result is Giovanni’s New York Pizzeria in Sunnyvale, California. At Yahoo, my top result is a place called New York Pizza in Mountain View, California. A search at Bing gives me a top result showing a directory of pizza places in Sunnyvale that serve New York-style pizza. Most of the other top ten results on all three search engines are about pizza in California rather than results about pizza in New York.

If a search engine were to try to break a query down into entities and apply labels to them, it would then have to try to choose between the best of those disambiguation attempts to decide which might be closest to the intent of a searcher. It could potentially identify entities by creating a confidence score for each possible interpretation, based upon information found in online dictionaries or encyclopedias, web pages, and other kinds of documents found online.

The tags assigned to different entities found within queries could cover a wide range of labels, such as:

- Product names,
- Locations,
- Persons names,
- Organizations,
- Media,
- Events,
- etc.

This kind of query interpretation system could be created from training data that might be collected from human judges to train a model that would score interpretations of queries.

A Yahoo patent application published last week explores how such a system might be used for search query disambiguation:

[Search Query Disambiguation](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100205198.PGNR.&OS=dn/20100205198&RS=DN/20100205198)
Inventors: Gilad Mishne, Raymond Stata, and Fuchun Peng
US Patent Application 20100205198
Published August 12, 2010
Filed: February 6, 2009

Abstract


> Disclosed herein is a system and method of query disambiguation. At least one model is generated using training data, which model can be used to score or rank possible interpretations identified for a query, which can be used to select an interpretation from many possible interpretations.
>
> A selected interpretation can be used to process a web search request, e.g., to generate search results that relate to the selected query interpretation, rank or order the items in the search result based on relevance to the selected query interpretation, and/or identify a presentation to be used to display the search results based on the selected query interpretation.

**Search Query Disambiguation Conclusions**

The patent filing goes into a fair amount of detail about how a system like this might be used. The basic concept that entities might be identified from those query terms and labeled is at the heart of the approach.

More than one interpretation may be identified with a certain confidence level for some queries, and search results might contain pages covering those interpretations.

In addition to helping decide which web pages to return in search results, query interpretations might sometimes trigger specialized results, such as a local search map result or certain kinds of advertisements.

The patent filing also branches off to explore how numeric terms might be interpreted when found in queries and provides many examples. For instance, “Godfather 3” might be interpreted to be equivalent to “Godfather III,” but “firefox 3” might not be seen to be equivalent to “firefox III.”
