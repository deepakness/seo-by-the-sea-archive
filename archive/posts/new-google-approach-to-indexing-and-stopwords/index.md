---
title: "New Google Approach to Indexing and Stopwords"
source_url: "https://www.seobythesea.com/2008/01/new-google-approach-to-indexing-and-stopwords/"
slug: "new-google-approach-to-indexing-and-stopwords"
date_published: "2008-01-17T11:57:25+00:00"
date_modified: "2020-06-24T07:28:15+00:00"
author: "Bill Slawski"
---

![screen shot of Google results on a search for a room with a view.](media/stop-words-gone.gif)

Not too long ago, if you entered in Google the phrase (without quotation marks) “a room with a view,” you might have received some warnings that your query contained “Stopwords.”

Stopwords are words that appear so frequently in documents and on web pages that search engines would often ignore them when indexing the words on pages. These could be words like: a, and, is, on, of, or, the, was, with.

**Good bye to stopwords?**

In that search for “a room with a view,” you might have received results like “a room for a view,” or “room to view,” or other phrases that replaced some stop words with others. That made it less likely to find exactly what you were looking for when you searched for a phrase with stop words in it.

I’m not seeing Google ignoring stop words any more. Last week, Dan Thies asked Stop Words Are Dead! Did I Miss Another Memo?

This newly granted Google Patent seems to hold some answers to the disappearance of stopwords, and to potentially a number of other indexing issues from Google:

[Document compression scheme that supports searching and partial decompression](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,319,994.PN.&OS=pn/7,319,994&RS=PN/7,319,994)
Invented by Olcan Sercinoglu
Assigned to Google
US Patent 7,319,994
Granted January 15, 2008
Filed May 23, 2003

The abstract isn’t easy reading, but it’s the summary that the inventor gave to the patent, so it’s worth looking at:


> One embodiment of the present invention provides a system that facilitates accessing a compressed representation of a set of documents, wherein the compressed representation supports searching and partial decompression.
>
> During operation, the system receives a search request containing terms to be searched for in the set of documents. In response to the search request, the system identifies occurrences of the terms in the set of documents by following pointers through the compressed representation.
>
> This compressed representation encodes occurrences of a term as a pointer to the next occurrence of the term to facilitate rapid enumeration of the occurrences of the term. Moreover, the compressed representation maintains sequential ordering between adjacent terms in the set of documents, which allows fast access to neighboring terms.

There are lots of implications behind this beyond Google stopwords disappearing. The patent does directly address indexing using stopwords:


> Typically, given a query, the performance bottleneck is the time it takes to decode the occurrences (which are typically delta encoded to save space, and thus have to be followed from the beginning) of the most frequently occurring term, especially if this term is a so-called stop-word such as “the”.

The system would look for the less popular terms that appear in the query, and then look to see if the stopwords in the query are nearby.

We are also told that searches for phrases under this system would become much quicker:


> Note that in particular, phrase matches would become much faster since we would only need to decode a limited number of terms that are immediately after or before the least-popular term. This operation would have the time complexity O(K*L*N) where K is the term identifier encoding frequency (discussed earlier), L is the length of the phrase, and N is the number of occurrences of the least-frequent term in the phrase.

**Related patent filings**

I’ve written before about some related patent documents that explore some other process that work with aspects of the compression method described in this patent.

[Google looks at multi-stage query processing](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/), which describes a way that searches could be processed in a number of stages, under the patent application: [Multi-stage query processing system and method for use with tokenspace repository](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060036593%22.PGNR.&OS=DN/20060036593&RS=DN/20060036593)

[Google on Multi-Tiered Indexing and Multi-Staged Query Processing](https://www.seobythesea.com/2007/09/google-on-multi-tiered-indexing-and-multi-staged-query-processing/) explores Google’s patent [System and method for encoding and decoding variable-length data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7068192.PN.&OS=pn/7068192&RS=PN/7068192)

**A reason for the loss of supplemental results, too?**

Back in December, a post at the Official Google Blog told about [The Ultimate Fate of Supplemental Results](https://webmasters.googleblog.com/2007/12/ultimate-fate-of-supplemental-results.html). In that, we were told from Google that “rather than searching some part of our index in more depth for obscure queries, we’re now searching the whole index for every query.”

Use of the indexing processes in these three patent filings might explain some changes to the results that we see in Google, if they are being used. Might they also account for the disappearance of supplemental results? What do you thinK?

Last Updated May 22, 2019
