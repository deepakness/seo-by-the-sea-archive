---
title: "Phrase Based Indexing and Spam Detection"
source_url: "https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/"
slug: "phrase-based-information-retrieval-and-spam-detection"
date_published: "2006-12-29T05:07:38+00:00"
date_modified: "2021-07-15T13:00:23+00:00"
author: "Bill Slawski"
---

[![Skipjack Chestertown](media/323657899_1750235807_m.jpg)](https://www.flickr.com/photos/bragadocchio/323657899/)


## How Phrase Based Indexing Works

Imagine an information retrieval system that uses phrases to index, search, rank, and describe documents on the web. This system would look at how phrases were used to decide if they were “valid” or “good” phrases. It would consider if their use on all web pages was statistically significant by how frequently they got used. It would also look at how those phrases might relate to each other. Certain phrases tend to get mentioned with the same documents as other phrases.

For example, a document that talks about the “President of the United States” may also be likely to include the phrase “white house.” The appearance of some phrases can predict the appearance of other phrases. And a spam document might contain an excessive number of related phrases.

Some “spam” pages have little meaningful content but may instead be large collections of popular words and phrases. These are sometimes referred to as “keyword-stuffed pages.” Similar pages containing specific words and phrases that advertisers might be called “honeypots.” They are created for search engines to display along with paid advertisements. Unfortunately, to searchers looking for meaningful content, those pages can waste time and cause frustration.


## Some Phrase Based Indexing patents

Google’s Anna Patterson is the listed inventor on many patent applications that describe a phrase-based indexing system. It should probabky be getting more attention than it has in the past. I’ve written about a couple of these patent filings. A new one came out this week. The newest filing, and a couple of the others, are explicitly assigned to Google. Moreover, the fact that there are several related phrase-based indexing makes it look like it is something Google has committed to using.

- * [Multiple index based information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060106792%22.PGNR.&OS=DN/20060106792&RS=DN/20060106792) (20060106792) *Assigned to Google*
- * [Phrase-based searching in an information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060031195%22.PGNR.&OS=DN/20060031195&RS=DN/20060031195) (20060031195) *Assigned to Google*
- * [Phrase-based indexing in an information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060020607%22.PGNR.&OS=DN/20060020607&RS=DN/20060020607) (20060020607)
- * [Phrase-based generation of document descriptions](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060020571%22.PGNR.&OS=DN/20060020571&RS=DN/20060020571) (20060020571)
- * [Phrase identification in an information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20060018551.PGNR.&OS=dn/20060018551&RS=DN/20060018551) (20060018551)

I focused upon a couple of these in [Google Aiming at 100 Billion Pages?](https://www.seobythesea.com/2006/05/google-aiming-at-100-billion-pages/) in May, and in February’s [Move over PageRank: Google’s looking at phrases?](https://www.seobythesea.com/2006/02/move-over-pagerank-googles-looking-at-phrases/). Those posts summarize some of the aspects of this phrase-based indexing system. It has many useful features which allow for indexing of a vast number of web pages, a historical index of older versions of web pages, a supplemental index for less popular pages, and elimination of “Google Bombing,” duplicate content detection, and as noted in the new patent filing, a way to identify webspam in the form of keyword-stuffed pages and honeypots.

[Detecting spam documents in a phrase based information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060294155%22.PGNR.&OS=DN/20060294155&RS=DN/20060294155)
Invented by Anna Lynn Patterson
US Patent Application 20060294155
Published December 28, 2006
Filed: June 28, 2006

Abstract


> An information retrieval system uses phrases to index, retrieve, organize, and describe documents. Phrases that predict the presence of other phrases in documents. Documents get indexed according to their included phrases. Identification of a spam document is from the number of related phrases included in a document.


## Phrase Based Indexing Search System Overview

Phrase-Based Indexing happens by identifying phrases in documents on the web and indexing those according to their phrases.

A searcher submits a query to the search system, which attempts to provide relevant pages in response while looking for phrases in the query, and then ranking the results using phrases to influence the ranking order.

When results get shown to searchers, they are first modified to remove near-duplicate documents and create snippets (topical descriptions of the pages).

This system includes a primary index and a secondary index that stores indexing information about documents and a phrase data store that stores phrases and related statistical information.

The previous patent application on a Multiple Index System tells us that some pages may get stored in the secondary or supplemental index, which doesn’t capture as much information as for results in the primary index.


## Parts of the Phrase Based Indexing System

The indexing system performs three primary functions:

1. Phrases and related phrases are Identified
2. Documents about phrases are indexed
3. A phrase-based taxonomy is Generated and Maintained


## Phrase Identification

Phrase identification acts to identify “good” and “bad” phrases in the document collection.

Good phrases stand out because they:

1. Appear in more than certain percentage of the documents on the web, and/or;
2. Are distinguished in appearance, and use html tags or “other morphological, format, or grammatical markers.”
3. Predict other good phrases rather than being mere sequences of words appearing in the lexicon

An example of the predictive ability of good phrases:

The phrase “President of the United States” predicts other phrases such as “George Bush” and “Bill Clinton.”

Other phrases may not be predictive, such as “fell down the stairs” or “top of the morning,” “out of the blue.” Idioms and colloquialisms like these are widely used and often appear with many other different and unrelated phrases. Looking at how frequently phrases co-occur on individual pages within the whole collection of indexed pages can tell us whether the appearance of one phrase might predict the appearance of another.


## Functional Stages of the Phrase Based Indexing Identification Process

These can also get broken into three steps:

1. Collect possible and good phrases, along with frequency and co-occurrence statistics of the phrases,
2. Classify possible phrases to either good or bad phrases based on frequency statistics, and;
3. Prune good phrase list based on a predictive measure derived from co-occurrence statistics.

The patent application goes into a good deal of detail on those steps. A summary:

1. The documents are in manageable partitions.

2. Phrases are at different word lengths, paying attention to stop words, ends of lines, paragraph returns, markup tags, and other possible ways to recognize changes in content or format. This step is such as traversal.


## Example of Traversal


> The phrase window starts at the word “stock” and extends 5 words to the right.
>
> The first word in the window is candidate phrase I, and each of the sequences i+1, i+2, i+3, i+4, and i+5 is likewise a candidate phrase.
>
> In this example, the candidate phrases are: “stock,” “stock dogs,” “stock dogs for,” “stock dogs for the,” “stock dogs for the Basque,” and “stock dogs for the Basque shepherds.”
>
> In each phrase window, each candidate phrase gets looked at in turn to determine if it is already present in the good phrase list or the possible phrase list. If it isn’t in either, then the candidate has already is “bad” and skipped.
>
> Suppose the candidate phrase is in the good phrase list as entry g.sub.j, then the index entry for phrase g.sub.j can include the document (e.g., its URL or other document identifiers) to indicate this candidate phrase g.sub. J appears in the current document.
>
> An entry in the index for a phrase g.sub. J (or a term)goes into the posting list of the phrase g.sub.j.
>
> The posting list includes a list of documents d (by their document identifiers, e.g., a document number or a URL) in which the phrase occurs.
>
> In one embodiment, the document number is from a one-way hash of the URL, using, for example, MD5.

3. The identified phrases go into a possible phrase list, and statistics get collected about those phrases.

a) P(p): Number of documents on which the possible phrase appears;

b) S(p): Number of all instances of the possible phrase; and

c) M(p): Number of interesting instances of the possible phrase. This may be where the possible phrase stands out from neighboring content in a document by grammatical or format markers (boldface, underline, anchor text in a hyperlink, quotation marks, or others). These distinguishing appearances involve various HTML markup language tags and grammatical markers. This information is around for phrases when they are on the good phrase list.


## Updating the Good Phrase List from the Possible List

After traversal in a partition happens, the next step is to update the good phrase list from the possible phrase list.

The frequency of the phrase’s appearance and the number of documents it appears within may state that it is a semantically meaningful phrase.

The good phrase list will include individual words as phrases, as well as multi-word phrases.

A list of bad phrases isn’t stored – only possible and good phrases.

If a phrase appears for the very first time, it isn’t very certain to be a good phrase at that time. But, it may be just coming into usage and might be increasingly common – and if so, it will meet thresholds for a good phrase.


## Updating the Co-occurrence Matrix Behind Phrase Based Indexing

A co-occurrence matrix is maintained and updated for the good phrases. This helps to keep track of when different phrases appear together in the same documents.


> The matrix G has a dimension of m.times.m, where m is the number of good phrases.
>
> Each entry G(j, k) in the matrix represents a pair of good phrases (g.sub.j, g.sub.k).
>
> The co-occurrence matrix logically (though not necessarily physically) maintains three separate counts for each pair (g.sub.j, g.sub.k) of good phrases concerning a secondary window centered at the current word I and extends +/-h words.
>
> In one embodiment, such as illustrated in FIG. 3, the secondary window 304 is 30 words. The co-occurrence matrix thus maintains:
>
> 1) R(j,k): Raw Co-occurrence count. The number of times that phrase g.sub. J appears in a secondary window 304 with the phrase g.sub.k;
>
> 2) D(j,k): Disjunctive Interesting count. The number of times that either phrase g.sub.j or phrase g.sub.k appears as distinguished text in a secondary window; and
>
> 3) C(j,k): Conjunctive Interesting count: the number of times that both g.sub.j and phrase g.sub.k appears as distinguished text in a secondary window. The use of the conjunctive interesting count is particularly beneficial to avoid the circumstance where a phrase (e.g., a copyright notice) frequently appears in sidebars, footers, or headers, and thus is not predictive of other text.


## Pruning the Good list Using the Co-occurrence Matrix

The third stage of the indexing operation is to prune the good phrase list using a predictive measure derived from the co-occurrence matrix.

Without pruning, the good phrase list is likely to include many phrases that, while legitimately appearing in the lexicon, themselves do not sufficiently predict the presence of other phrases or themselves are subsequences of longer phrases.

To identify good phrases, a predictive measure gets used, which expresses the increased likelihood of one phrase appearing in a document given the presence of another phrase.


## Pruning the Good Phrase List to Remove Incomplete Phrases

The final step of this stage is to prune the good phrase list to remove incomplete phrases. An incomplete phrase is a phrase that only predicts its phrase extensions and which starts at the leftmost side of the phrase (i.e., the beginning of the phrase).

Example:

The phrase “President of” predicts “President of the United States,” “President of Mexico,” “President of AT&T,” etc.

These latter phrases are phrase extensions of the phrase “President of” since they begin with “President of” and are super-sequences.

It’s useful because it can predict one of those other phrases. But, if it doesn’t predict at least one other phrase that isn’t an extension of it, it may be an incomplete phrase.

“President of the United” is an incomplete phrase because the only other phrase that it predicts is “President of the United States,” which is an extension of the phrase.

This incomplete phrase list might help searchers. When a search query comes, it can get compared against the incomplete phase list.

For example, if the search query is “President of the United,” the search system can automatically suggest to the user “President of the United States” as the search query.

Each good phrase gets used with enough frequency and independence to represent meaningful concepts or ideas expressed in the corpus.


## Identification of Related Phrases and Clusters of Related Phrases in Phrase-Based Indexing

Looking at the co-occurrence of phrases and collecting information about them can help organize this information:


> This approach provides a useful organization for clusters. First, rather than a strictly–and often arbitrarily–the defined hierarchy of topics and concepts, this approach recognizes that topics, as indicated by related phrases, form a complex graph of relationships, where some phrases get related to many other phrases. Some phrases have a more limited scope, and where the relationships can be mutual (each phrase predicts the other phrase) or one-directional (one phrase predicts the other, but not vice versa). The result is that clusters are seen as “local” to each good phrase, and some clusters will then overlap by having one or more common related phrases.

Ordering related phrases by information gain. How likely phrases will predict other terms. These can help to create a taxonomy for naming the phrase clusters.


> The above process provides a very robust way of identifying significant phrases that appear in the document collection, and beneficially, the way these related phrases get used together in natural “clusters” in actual practice. As a result, this data-driven clustering of related phrases avoids the biases inherent in any manually directed “editorial” selection of related terms and concepts, as is common in many systems.

The process used here has three parts:

1. Related phrases having a high information gain value.
2. Clusters of related phrases.
3. Store cluster bit vector and cluster number.


## Indexing Documents with Phrases and Related Phrases

Once there is a good phrase list with related phrases and clusters, the next step is to index the documents concerning the good phrases and clusters and store the updated information in the primary and secondary indexes.

Documents are pre-ranked according to information retrieval practices concerning the phrases.


> The scoring algorithm for pre-ranking the documents may be the same underlying relevance scoring algorithm used in the search system to generate a relevance score. In one embodiment, the IR score works using the page rank algorithm described in U.S. Pat. No. 6,285,999.
>
> Alternatively or additionally, statistics for several IR-relevant attributes of the document, such as the number of links, outlinks, document length, may also be stored and used alone or in combination to rank the documents.
>
> For example, the documents may rank in declining order according to the number of inlinks.
>
> To further facilitate the fastest possible retrieval of information from the primary index, the entries in each posting list are physically stored on the appropriate primary server in the rank ordering by the IR-type score.


## A Lower Entry Ranks by the Less Information Retained For It

The lower the entry ranks by the less information retained for it. Those lower-ranked documents may be in a secondary server:


> The foregoing storage arrangement enables storing significantly more entries in a given amount of hard disk storage than conventional techniques.
>
> 1) Elimination of the terminal position information for every phrase in every document provides approximately a 50% reduction in the amount of storage needed for a given set of documents, thereby effectively doubling the number of documents that can get stored.
>
> 2) Partitioning the posting lists between the primary and secondary indices and storing relevant information only in the primary index provides further substantial savings. Many phrases have over 100,000, even 1,000,000, documents in their posting lists. Storing the relevant information for only a limited number of entries in the primary index eliminates the storage needed for the documents that are not likely to result from a search. This aspect provides approximately a ten-fold increase in the number of documents that can be stored.
>
> 3) Further savings (approximately 25%-50% reduction in required storage capacity) happen by selectively storing less relevant information in the primary index for the less relevant and lower-ranked documents in each posting list.

The patent discusses keeping older versions of archival purposes. Also, allowing people to search by date range. It can cover future indexing and how changes in pages get found and may impact how phrases get indexed.


## Identifying Phrases in Queries in Phrase Based Indexing

An important aspect of this whole process is identifying whether or not a query contains a phrase. If it does, then phrase indexing can help locate relevant documents for searchers. Identifying phrases in a query is a little similar to identifying phrases indexed on a page. But there are some differences.

For instance, capitalization may play a role in understanding what someone is looking for when they type a query into a search box.

Comparing queries to indexed phrases is a little complex. The patent application notes four types of approaches taken to do matching when they see the following in a query:

– A single query phrase (the results are already pre-ranked)
– Two common query phrases (an intersection of results need to rank based upon the relevant data collected for each)
– Two rare query phrases (similar to when there are two common query phrases, but the likelihood of having to go to the secondary index is unlikely.)
– A common phrase and a rare phrase (primary index documents joined together, and then secondary documents added for the more common phrase, and all of those documents get ranked.)


## Different Kinds of Rankings in Phrase-Based Indexing

The patent describes in detail rankings based upon:

– Contained phrases
– Anchor Phrases
– Date Range Relevance


## Identifying Spam Documents

This is the main addition that this patent application brings to phrase-based indexing.

How does this Phrase-Based Indexing system know if keyword stuffing or honeypot activity is going on?


> From the foregoing, the number of the related phrases present in a given document will be learned. A normal, non-spam document will generally have a relatively limited number of related phrases, typically on the order of between 8 and 20, depending on the document collection. By contrast, a spam document will have an excessive number of related phrases, for example, on the order of between 100 and 1000 related phrases. Thus, the present invention takes advantage of this discovery by identifying spam documents that have a statistically significant deviation in the number of related phrases relative to an expected number of related phrases for documents in the document collection.

Some more details and some additional information about identifying phrases associated with spam can be used to find spam pages. Still, the volume of related phrases seems to be a large (and possibly very effective) part of this process.


## Phrase Based Indexing Conclusion

A long and detailed patent application. I apologize for the length of this post. I wanted to capture a fair amount of it, especially since my last two posts on phrase-based indexing didn’t go into a lot of depth on the subject.

Is Google using Phrase Based Indexing? It’s possible.

To see something similar from Yahoo, tested live, and supposedly implemented for “related results” since 2003, take a look at [Reranking Search Results Based Upon Concepts in User’s Queries](https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-concepts-in-users-queries/).

Posts I have written about co-occurrence:

- [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- [Ranking Webpages Based upon Relationships Between Words (Google’s Co-Occurrence Patent)](https://www.seobythesea.com/2012/11/ranking-webpages-relationships-co-occurrence-patent/)
- [Yahoo Phrase Based Indexing in a Nutshell](https://www.seobythesea.com/2008/02/yahoo-phrase-based-indexing-in-a-nutshell/)
- [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)
