---
title: "Head URLs and Tail URLs and Bing's Supplemental Index?"
source_url: "https://www.seobythesea.com/2010/07/head-urls-and-tail-urls-and-bings-supplemental-index/"
slug: "head-urls-and-tail-urls-and-bings-supplemental-index"
date_published: "2010-07-19T06:53:56+00:00"
date_modified: "2022-01-07T15:06:58+00:00"
author: "Bill Slawski"
---

A search engine might use two sets of indexes – one for query terms that tend to show up in more searches and on more web pages, and another larger index that includes queries that aren’t searched for as much by searchers and don’t appear on many web pages.

By showing results for some terms only from a smaller index, information about pages which include those terms can be retrieved quicker by a search engine.

How would a search engine know which queries to search for in the smaller main index, and which to search for within that larger index?

I’ve written in the past about a patent on an [extended index from Google](https://www.seobythesea.com/2007/08/on-supplemental-results-partitioned-indexing-and-extended-indexes/), as well as a patent on a [supplemental index from Microsoft](https://www.seobythesea.com/2007/11/microsoft-on-index-partitioning/), and both patents focused mostly upon how those indexes might be set up.

A recent patent application from Microsoft describes how they might decide which queries might use the smaller main index, and which queries might be use both the smaller and the larger extended index.

The patent filing uses a metaphor based upon the idea of the long tail to distinguish between those types of queries, stating that some queries are better answered by “head URLs,” and some are more likely answered by “tail URLs.”

For example, when you search for a term such as “president of the United States,” you’re searching for a term that many others frequently search for, and which appears on a good number of pages on the Web. It’s a query that will most likely be answered by a number of head URLs.

If, instead, you search for something like “president of the united states debates from 1812 through 1942 as chronicled by the Library of Congress” chances are that there may not be many results for that search, if any. If there are pages that address that query, they are more likely to be on tail URLs.

The Microsoft patent presents a system for predicting which queries are more likely to be answered by head URLs, and which are more likely to be answered by tail URLs. This system is described as using a machine learning process to make those predictions, and can be found at:

[System For Finding Queries Aiming at Tail URLs](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100179929.PGNR.&OS=dn/20100179929&RS=DN/20100179929)
Invented by Xiaoxin Yin, Vijay Ravindran Nair, Ryan Frederick Stewart, Fang Liu, Junhua Wang, Tiffany Kumi Dohzen, Yi-Min Wang
Assigned to Microsoft
US Patent Application 20100179929
Published July 15, 2010
Filed January 9, 2009

Abstract


> Systems and methodologies for improved query classification and processing are provided herein. As described herein, a query prediction model can be constructed from a set of training data (e.g., diagnostic data obtained from an automatic diagnostic system and/or other suitable data) using a machine learning-based technique.
>
> Subsequently upon receiving a query, a set of features corresponding to the query, such as the length and/or frequency of the query, unigram probabilities of respective words and/or groups of words in the query, presence of pre-designated words or phrases in the query, or the like, can be generated.
>
> The generated features can then be analyzed in combination with the query prediction model to classify the query by predicting whether the query is aimed at a head Uniform Resource Locator (URL) or a tail URL. Based on this prediction, an appropriate index or combination of indexes can be assigned to answer the query.

This multi-index approach attempts to manage what we are told is a trade-off that exists between the much higher speed of a smaller index, and the much higher informational volume of a larger index. While this kind of multiple index isn’t exactly new, we’re told that conventional techniques for classifying queries to determine which should look at the larger index, and which should ignore it have been based upon a manual set of rules.

Those rules might include something like, if a query is more than a certain number of words, or a human name, those searches should include a look at the larger index.

If the search engine can come up with an automated approach to classifying queries, rather than relying upon a rigid set of rules like that, it might become more efficient in how it responds to queries.

For example, imagine that the search engine has a rule that any query longer than 10 words should use both the smaller and the larger database. Now, imagine that there’s a popular film with a title 11 words long. Chances are good that there are a lot of pages in the smaller main index that provide relevant information about that movie. But, under the rule about 10 words, the search engine would look at both the smaller and the larger index, when it probably be much more efficient to only use the smaller one.

**The Features of a Query**

The machine-learning based prediction system would look at a number of features in deciding whether a query was more likely to be answered by head URLs or by tail URLs. Some examples of these query features can include:

***Query Frequency*** – How often the query and/or words or phrases within the query appear in searches compared to all other queries searched for. The assumption is that more popular queries are more likely to related to more popularly accessed resources. Searches for queries that are more popularly searched for may skip the larger index.

***Query Length*** – The length of a query might be considered alongside other features to determine whether or not it is best answered by a head URL or a tail URL. A query with more words might be more likely to be answered by a tail URL, and if the query frequency isn’t very high, then it is even more likely to be a candidate for searching the larger index as well as the smaller one.

***Probabilities of words and/or phrases from the query appearing within the index*** – The probability that individual words and phrases within a query are examined to see how frequently they appear within the search engine’s index. If the query contains popular words or phrases, it is more likely to be answered by the smaller index. Rather than going through the search index to see how frequently those words or phrases appear, this prediction process might use a pre-generated lookup table to find those frequencies.

***How often consecutive words in the query appear together on a page*** While some words do often appear on a large number of web pages, they may not always appear together on the same pages. For example, if the query contains the phrase “coffee desk,” while the terms “coffee,” and “desk,” do show up frequently on web pages, how often do they show up on the same page? If not very often, then it might not be a bad idea for the search engine to use the larger index for that query.

***Presence or absence of predetermined tail-directed words in the query*** – Some queries may contain words that are just more likely to be aimed at tail queries, such as very rare words, for instance.

**Conclusion**

Pages from fairly new sites that haven’t achieved much popularity, or pages that just aren’t very popular, are more likely to be found in the larger index than the smaller one.

When you search for a term that the search engine might determine to be aimed at head terms, it may include results from the smaller index, and not gather information from the larger index. Pages that haven’t made it into the smaller index may not appear within search results for that query.

This patent filing aims at making a search engine more efficient by allowing it to skip having to search in an extended or supplemental index for queries that it has classified at being aimed at head URLs. We’ve been seeing news recently about search engine infrastructure upgrades like Google’s Caffeine, that can make indexing and searching more efficient.

While it’s possible that those kinds of infrastructure upgrades can make a process like this multi-index approach less important, it’s easy to imagine that a search engine will try to take advantage of every way to become more efficient that it can find, as long as those don’t harm the quality of search results in a meaningful manner.
