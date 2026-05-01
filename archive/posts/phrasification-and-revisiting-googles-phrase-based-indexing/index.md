---
title: "A Phrase Posting List and Phrase Based Indexing"
source_url: "https://www.seobythesea.com/2010/04/phrasification-and-revisiting-googles-phrase-based-indexing/"
slug: "phrasification-and-revisiting-googles-phrase-based-indexing"
date_published: "2010-04-07T11:28:07+00:00"
date_modified: "2021-07-14T23:45:34+00:00"
author: "Bill Slawski"
---

## A Phrase Posting List is an Inverted Index of Complete and Meaningful Phrases on the Web

Say you want to find out who the chief of police is in New York City. You might type the following words into a search box at Google:

- New York police chief

When Google attempts to find an answer for you, it may break your query into individual words to find all the documents that might be the best match for your search:

- New AND York AND police AND chief

Google may then take all the returned documents, see which ones contain all the terms you used, and then rank those based upon some of the ranking algorithms the search engine uses to show you the best matches for your query.

But, what if Google tried to find phrases from your query instead. Phrases that appear on web pages match your search. What if Google used something they refer to as phrasification? Google might take your query and break it into different combinations of phrases, such as the following:

- police AND chief AND “New York”
- “New York AND “police chief”
- chief AND New AND “York Police”
- “York police chief” AND New
- “police chief” AND New AND York
- “New York Police Chief”


## How Phrasifications MIght Get Scored

Each of these phrasifications may get scored by using a scoring model that includes:

- Expected probability of the phrase occurring in a document,
- Phrases in the phrasification,
- Confidence of each phrase,
- Change parameters to controll the precision and recall of searches on the phrases.

The highest scoring ramifications may represent the phrases in a query. They could lead to a combination that best matches what you may intend to find with your search.

For instance, it’s much more likely that you were searching for the **chief of police in New York City** than you were the **new chief of the York Police.**

That analysis might also tell it that a phrase such as “Chief of Police” might also be helpful to find pages that may match the meaning behind your search.

If Google’s index contained information about phrases that appear on web pages in addition to individual terms, the ratification approach might work to improve the results that you see at Google.


## Google’s Phrase-Based Indexing and A Phrase Posting List

Over the past few years, many related Google patent applications came out. They describe how the search engine might use a phrase-based indexing system.

We don’t know for certain if Google has adopted the approach in those patent filings. It appears that Google has now started publishing the second generation of patent filings using that phrase-based indexing system. There are more technical details on how such an index would work. It is frequently showing co-occurring phrases in a phrase posting list.


## Previous Posts on Phrase-Based Indexing

My previous posts on that phrase-based approach include the following:

- [What are the Top Phrases for Your Website?](https://www.seobythesea.com/2009/03/what-are-the-top-phrases-for-your-website/)
- [Google Phrase Based Indexing Patent Granted](https://www.seobythesea.com/2008/09/google-phrase-based-indexing-patent-granted/)
- [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)
- [Google Aiming at 100 Billion Pages?](https://www.seobythesea.com/2006/05/google-aiming-at-100-billion-pages/)
- [Move over pagerank: Google’s looking at phrases?](https://www.seobythesea.com/2006/02/move-over-pagerank-googles-looking-at-phrases/)

This week, The USPTO granted Google a patent that describes how such a system might collect and store information about phrases it finds on Web pages, in a phrase posting list.

To get a sense of how this phrase-based indexing system works, it can help to look back at what Google has written about how an [inverted index](https://www.seobythesea.com/2021/07/inverted-index-of-the-web/) works. Also, look at how the search engine might explore different combinations of words it finds on pages to see how it may index concepts, or phrases instead of just individual words.


## Individual Terms in an Inverted Index System and Phrase Posting List

How does a search engine save and store information about pages it finds on the Web?

Back in 2005, Google’s Matt Cutts published [How does Google collect and rank results?](http://web.archive.org/web/20110928082425/http://www.google.com:80/librariancenter/articles/0512_01.html), which provides an overview on how Google might collect and index words found on web pages in a type of index known as an inverted index.

That kind of index relates web pages to individual words found on each page by associating each unique word with a posting list that identifies documents containing that word. A posting list is a list of all documents that contain a specific word. Thus, when someone searches, the query they enter into a search box is first broken into individual terms, and the posting lists for those terms get looked at.

The documents from those posting lists are then ranked according to statistical measures, such as:

- Frequency of occurrence of the query terms,
- Host domain,
- Link analysis, and;
- The like.

Documents that contain all the words in a query might come before documents that contain less than all the words. The lists of documents are then displayed to the searcher, usually within their ranked order.

This approach is a direct “Boolean” matching of query terms, and it has some limitations. For instance, a search for “Australian Shepherds” wouldn’t return any documents about other herding dogs, such as Border Collies. Still, it might return and show documents about Australia that have nothing to do with dogs and other pages about shepherds.

This kind of approach focuses on individual terms rather than concepts.


## Concepts and Indexing Systems

The ideas captured in language often take on new meanings when expressed in phrases. For example, if we were to try to search for and understand the words “President” and “United” and “States” separately, we would get a host of different meanings and possible pages associated with them. For instance, a page about the President of a Union in the United States might be as relevant as a page about the United States President.

If, instead, we look at those words as phrases such as “President of the United States,” we get a better sense of the kinds of web pages that might be most relevant for that specific phrase as a query.


## Will The Search Engine Focus More on Phrase-Indexing, Using that Phrase Posting List?

Conventional search engine systems looking at individual terms in an inverted index may sometimes expand their index to a limited number of well-known phrases. If the search engines focused on more phrases, it could be taxing on that search engine. As the patent’s inventors tell us:


> Indexing phrases is typically avoided because of the perceived computational and memory requirements to identify all possible phrases of, say, three, four, or five or more words.
>
> For example, assuming that any five words could constitute a phrase and a large corpus would have at least 200,000 unique terms, there would be approximately 3.2.times.10.sup.26 possible phrases, clearly more than any existing system could store or otherwise programmatically manipulate.
>
> The further problem is that phrases continually enter and leave the lexicon in terms of their usage, much more frequently than invented new individual words.
>
> New phrases are always taken from technology, arts, world events, and law. Other phrases will decline in usage over time.

Search engines may also pay attention to how often different words may show up in the same documents to understand concepts. For instance, a search for the word “president” may return documents that may contain many of the same words, such as “white” and “house.”

Understanding this may result in a way to rerank search results so that pages with more related words like this rank higher in search results. But, this way of relating individual words that tend to show up in the same documents isn’t as powerful as looking for phrases that tend to co-occur on the same pages.


## Will We See a Phrase-Based Index at Google?

A phrase-based indexing system would be huge and would need to use many servers that share information across those servers. Such a search engine would use a Phrase Posting List.

The new Google patent introduces concepts like ratification. It explores ways to efficiently and effectively capture information about which pages different phrases appear upon and to use phrase-based indexing to return more meaningful search results to searchers.

The patent is:

[Index server architecture using tiered and sharded phrase posting lists](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,693,813.PN.&OS=pn/7,693,813&RS=PN/7,693,813)
Invented by Pei Cao, Nadav Eiron, Soham Mazumdar, Anna Patterson, Russell Power, and Yonatan Zunger
Assigned to Google
US Patent 7,693,813
Granted April 6, 2010
Filed March 30, 2007

Abstract


> An information retrieval system uses phrases to index, retrieve, organize, and describe documents.
>
> Phrases can get taken from the document collection. Documents are then indexed according to their included phrases, using a phrase posting list. The phrase posting lists are in a cluster of index servers. The phrase posting lists can go into groups and shard into partitions.
>
> Phrases in a query work based on possible ramifications. A query schedule based on the phrases works with the phrases and reduces query processing and communication costs. The execution of the query schedule can further reduce or get rid of query processing operations at various index servers.

We are also told about some related unpublished patent applications at the US Patent Office:

- Query Scheduling Using Hierarchical Tiers of Index Servers, filed Mar. 30, 2007;
- Index Updating Using Segment Swapping, filed Mar. 30, 2007;
- Phrase Extraction Using Subphrase Scoring, filed Mar. 30, 2007; and
- Bifurcated Document Relevance Scoring, filed Mar. 30, 2007


## Phrase Posting List Conclusion

The Phrase Posting Lists patent itself is fairly long and detailed. It describes how phrases get taken from web pages and indexed. It also looks at how those indices work across multiple servers, how the purification process works in more depth, and how this phrase-based information system can look at co-occurrence to identify related phrases.

If you’re interested in how Google indexes content found on web pages and are willing to dig into technical details, you may want to spend some time with the phrase-based indexing system patent filings.

I have had a few people link to some of my earlier posts on phrase-based indexing and state that they are indications that Google is using Latent Semantic Indexing because the indexing system pays attention to different phrases that tend to co-occur on web pages. While that part of the indexing system is interesting and worth studying, it isn’t latent semantic indexing.
