---
title: "Search Engines and Polysemous Words"
source_url: "https://www.seobythesea.com/2009/06/search-engines-and-words-with-more-than-one-meaning/"
slug: "search-engines-and-words-with-more-than-one-meaning"
date_published: "2009-06-24T10:40:00+00:00"
date_modified: "2021-07-06T13:54:02+00:00"
author: "Bill Slawski"
---

Some words you might search for at a search engine may have more than one meaning and are known as polysemous words. For example, the word fencing can mean a sport involving swords, an artificial barrier enclosing an area, or activity to profit from illegally gained goods. In addition, words or phrases that can have two or more are sometimes called polysemous words.

Polysemous words can pose challenges for:

- Search engines – trying to identify the intent behind searches.
- Searchers – seeing results unrelated to what they were trying to find.
- Site owners – finding their pages in search results surrounded by sites offering something very different from what they offer
- Advertisers – who may bid on certain words or phrases as sponsored results for searchers who may have absolutely no interest in those ads

If someone enters the word [fencing] into a search engine, the search results they see will likely be filled with pages related to all of the different meanings of the word such as electric fences, local search maps for fencing companies, Olympic moments relived at the United States Fencing Association web site, the Wikipedia entry on Fence (criminal), and others.

The chances are that the person searching was only interested in finding information about the sport, the barrier, or criminal activity.

How would you solve this problem if you were creating the algorithms behind how a search engine worked?

**The Problem with Query Refinement Suggestions**

One solution might be for a search engine to show query suggestions along with search results, adding more words to the original query based upon previous queries from other searchers.

A search engine could look at its query logs to see how often searchers made changes to their queries and associate those follow-up queries with the original ones. For example, many searchers, faced with a mix of results like those for fencing, might change their original query to include an additional word or words to their search that might make it more likely that more of the search results will be relevant intended to find.

So, someone searching for information about the sport of fencing might add a word like “epee” to the search. Epee is a kind of sword that a fencer would use when they compete against someone else. If enough people refine their searches that way, then a search engine might start showing [fencing epee] as a link within search results for a search for [fencing].

So, what’s the problem? It could take months for a search engine to collect enough data to decide which additional query refinements to show. And it’s possible that a search engine might only show query refinements for one type of meaning for a word. For example, the suggested query refinements presently at Google on a search for [fencing] are all related to the barrier meaning except for the first one listed:

- history of fencing
- wire fencing
- aluminum fencing
- wood fence
- yard fence
- privacy fence
- chain link fence
- building a fence

**Using Related Words to Understand Meaning**

Another approach might be to look at documents on the Web where polysemous words appear and look at the other words near them to find words or phrases related to the different meanings of those polysemous words.

For example, one meaning of the word “Saturn” is the name of a planet, and it may be possible for a search engine to figure out that is how the word is being used if it appears near words such as “Earth,” and “Mars,” and “Jupiter” and “Solar System.”

Another meaning for the word “Saturn” is the make of a car, and a search engine might glean that meaning if it sees words such as “Ford,” or “Lincoln,” or “Mercury,” or “automobile,” or “engine.”

Distinguishing between the different contexts with more than one meaning is a significant undertaking because a search for Saturn, the car, is a different search than one for Saturn, the planet.

A patent application from Yahoo describes a process that could be used to determine if a word or phrase has more than one meaning based upon the words that tend to co-occur in documents with that word.

[Method and Apparatus for Discovering and Classifying Polysemous Word Instances in Web Documents](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090157648.PGNR.&OS=dn/20090157648&RS=DN/20090157648)
Invented by Richard Michael King
US Patent Application 20090157648
Assigned to Yahoo
Published June 18, 2009
Filed December 14, 2007

Abstract


> A method and apparatus for discovering polysemous words and classifying polysemous words found in web documents. All document corpora in any natural language have multiple usage contexts or words with multiple meanings.
>
> Semantic analysis is not feasible for classifying all word occurrences in all documents on the web, containing trillions of words in total. Besides, semantic analysis typically cannot distinguish multiple usages of a given meaning of a given word.
>
> In one embodiment of this invention, polysemous words in natural languages can be discovered by analyzing the co-occurrence of other words with the polysemous word in web documents. In one embodiment, the multiple meanings and usages of a polysemous word can be determined by analyzing the co-occurrences of other words with the polysemous word. In one embodiment, counting over-correlations is achieved probabilistically to minimize the use of network bandwidth.

The patent filing provides details on how they might count the frequency of words that appear in different documents on the Web, how often those words appear with other words, and how infrequently they may appear.

There are some interesting twists to this process. One of them involves breaking down the words found within documents into smaller blocks. An example given in the patent application is of blocks of 200 words. There are a few reasons for breaking down a document into smaller, overlapping blocks.

Some pages may be very long, and relating words found on those long pages may create relationships between words that aren’t necessarily related.

Another is that a page from a blog may contain many different entries that aren’t related, and if a whole page of different blog entries was analyzed, that might provide results that aren’t very useful.

**Conclusion**

I’ve kept my look at the process behind the patent to a fairly simple overview, and the patent application goes into much more depth on how it might distinguish between different meanings of words based upon how frequently those words appear near related words on pages upon pages upon pages the Web.

Searchers, web publishers, and advertisers should keep in mind that there are many polysemous words, words with more than one meaning when they perform searches or create content for web pages or choose keywords to advertise with.

It can be helpful to think about words that might be related to those multi-meaning or polysemous words when searching or writing content for pages or using a keyword-based advertising system. Yahoo shows us with this patent filing that they may start taking advantage of such relationships between words.

Last updated June 6, 2019
