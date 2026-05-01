---
title: "Google Stopwords and Stop-Phrases"
source_url: "https://www.seobythesea.com/2008/08/google-stopword-patent/"
slug: "google-stopword-patent"
date_published: "2008-08-06T00:31:52+00:00"
date_modified: "2020-06-21T19:11:19+00:00"
author: "Bill Slawski"
---

## What are Stopwords?

When someone searches at one of the major search engines, they often type in keyword phrases, composed as if they were written for human readers. Those phrases may contain words or phrases that show up very frequently in pages on the web and may have little to do with the information being sought by the searcher.

Search engines that focus upon retrieving search results based upon keywords found in queries have often ignored those frequently appearing and irrelevant words contained within search query terms.

Those words have been referred to in the past by Google as “stopwords,” and could be words like: a, and, is, on, of, or, the, was, with. Similar groups of words that appear very commonly on web pages, and are also unconnected to an actual search could be referred to as “stop-phrases.”

The word “a” in the query “a London hotel” is a stopword.

The phrase “show me” in the query “show me London hotels” is a stop-phrase.

Both “a” and “show me” don’t provide much meaning in a searcher’s intent to find information about hotels in London.


## Meaningful Stopwords and Stop-Phrases

Sometimes words and phrases that might be considered stopwords or stop-phrases may be meaningful or important. For example, the word “the” in the phrase “the matrix” could be considered a stopword, but someone searching for the term may be looking for information about the movie “The Matrix” instead of trying to find information about mathematical information contained in a table of rows and columns (a matrix).

A search for “Show me the money” might be looking for a movie where the phrase was an important line, repeated a few times in the movie. Or a search for “show me the way” might be a request to find songs using that phrase as a title from Peter Frampton or the band Styx.

A Google stopwords patent granted this week explores how a search engine might look at queries that contain stopwords or stop-phrases, and determine whether or not the stopword or stop-phrase is meaningful enough to include in search results shown to a searcher.


## Are Stopwords Important Anymore?

In January, I wrote a post titled [New Google Approach to Indexing and Stopwords](https://www.seobythesea.com/2008/01/new-google-approach-to-indexing-and-stopwords/), which explored a new approach to indexing the content of Web pages and compressing and uncompressing parts of a search engine index that appears to allow for better indexing and retrieval of phrases in a search index.

In the past, Google would sometimes tell searchers in the space above a set of search results that their search queries contained “stop words,” and that the stopwords were ignored in the search that was just performed by the search engines. In some queries that did contain stopwords that were “meaningful,” Google may not have shown that notification. How did Google know whether the stopwords were meaningful or not?

Also in January, it appears that Google stopped showing notifications about queries containing stop words. Does the search engine still look for stop words and stop phrases, and attempt to determine whether they are meaningful or not?


## Using Lists of Known Stopwords and Stop-Phrases and Exceptional Phrases

One way that a search engine could handle stopwords and stop-phrases is to use a list of known stopwords and stop-phrases, and strip those out from a search query before performing a search and presenting search results to a searcher.

That approach might ignore meaningful stopwords and stop-phrases. To avoid that problem, a search engine might then build a list of “exceptional” phrases when determining whether stopwords are included in a query. That list might include phrases like “the matrix” or “show me the money.” Identifying those exceptional phrases, and keeping a list of those phrases up to date might be difficult.


## Alternative Approaches to Using Known Lists and Expections

Another approach might be to identify when a query contains stopwords and stop-phrases and then to perform searches on queries that contain stopwords with and without the stopwords, so that the results, or lists of categories associated with the search results, could be compared to see if they are substantially similar.

If the sets of data are substantially similar, the removal of the potential stopword or stopwords may not be material to the search. If the results or the categories aren’t substantially similar, the stopword may be considered the material to the search, and shouldn’t be removed from the query.

The patent is:

[Locating meaningful stopwords or stop-phrases in keyword-based retrieval systems](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,409,383.PN.&OS=pn/7,409,383&RS=PN/7,409,383)
Invented by Simon Tong; Uri Lerner, Amit Singhal, Paul Haahr; and Steven Baker
Assigned to Google Inc.
US Patent 7,409,383
Granted August 5, 2008
Filed: March 31, 2004

Abstract


> A stopword detection component detects stopwords (also stop-phrases) in search queries input to keyword-based information retrieval systems. Potential stopwords are initially identified by comparing the terms in the search query to a list of known stopwords. Context data is then retrieved based on the search query and the identified stopwords.
>
> In one implementation, the context data includes documents retrieved from a document index. In another implementation, the context data includes categories relevant to the search query. Sets of retrieved-context data are compared to one another to determine if they are substantially similar.
>
> If the sets of context data are substantially similar, this fact may be used to infer that the removal of the potential stopword(s) is not material to the search. If the sets of context data are not substantially similar, the potential stopword can be considered the material to the search and should not be removed from the query.

**Comparing the Similarity of Results or Categories from Multiple Sets of Queries**

The patent explores this stopword process in more depth, including such things as how a list of stopwords might be identified manually, or in an automated fashion by looking at term frequencies on the web, with the most frequently appearing words or phrases likely to be stopwords or stop-phrases. It also brushes over how categories can be assigned to query terms. Term frequencies and categories can play a role in determining how similar the results are when looking at search query results with and without the stop words.

Whether the two sets of results or context data are “substantially similar” can be determined by looking at such things as:

1) Word frequencies of terms that show up in search results pages from queries with the stopwords and the same queries without the stopwords. If the frequencies are relatively equal, the sets of results could be considered substantially similar.

2) The percentage of documents that appears in the two different sets of result could also be used.

3) Sets of categories from the different search results could be compared, by calculating the portion of the categories that are in both sets.

4) Category relevance scores between both sets of queries could be compared.


## Placeholders

When a search is done on the version of a query that doesn’t include stopwords, the stopwords might be replaced by placeholders, indicating the presence of a world without regard to the actual word being replaced.

Take the search query “show me the way lyrics.” The search engine might identify “show me” and “the” as stopwords. To compare search results for the term both with and without the stopwords, the search engine might use “way lyrics” or it might use placeholders, such as “* * * way lyrics,” where “*” represents the placeholder words.

Multiple queries might be used and compared, with place holders for some of the identified stopwords, as well as including some stopwords or stop-phrases and not others.

Example

Original query: “show me the way lyrics”

Alternative queries:

way lyrics
show me * way lyrics
* * the way lyrics
* * * way lyrics


## Conclusion

It’s interesting to see how Google may have attempted to understand whether stopwords were meaningful or not when they appeared in search queries, by comparing results sets with and without the stop words (and by using placeholders in some of the comparisons).

Searches on Google with queries that contain stopwords do seem to provide results that focus upon returning pages that have phrases that contain the stopwords within the query – much of the time. Sometimes, results that show other words where the stopwords originally appeared instead. For example, a search on “a room for a view” (without the quotation marks) shows results for the phrase “a room with a view.”

Is Google still following the comparison process above, with placeholders for stopwords, or is it doing something else, such as providing a result by expanding a query based upon user data such as looking at query revisions during individual’s search sessions? Or something else completely?
