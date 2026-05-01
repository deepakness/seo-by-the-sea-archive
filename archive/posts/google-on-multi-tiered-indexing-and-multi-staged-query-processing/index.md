---
title: "Google on Multi-Tiered Indexing and a Document Processing System"
source_url: "https://www.seobythesea.com/2007/09/google-on-multi-tiered-indexing-and-multi-staged-query-processing/"
slug: "google-on-multi-tiered-indexing-and-multi-staged-query-processing"
date_published: "2007-09-21T10:46:25+00:00"
date_modified: "2020-06-20T14:30:37+00:00"
author: "Bill Slawski"
---

Added June 20, 2020 – the Patent Application I wrote about in this post was granted on March 29, 2011, in [Document compression system and method for use with tokenspace repository](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,917,480.PN.&OS=PN/7,917,480&RS=PN/7,917,480)

I discussed one of the more interesting patent applications from Google last year in [Google looks at multi-stage query processing](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/). What made it so intriguing was that it described different stages and aspects of ranking results by the search engine.

A related patent application was published this week, [Document compression system and method for use with token space repository](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070220023.PGNR.&OS=dn/20070220023&RS=DN/20070220023), and the document processing system in it goes back to that multi-staged query processing and makes claims for some of the more technical aspects of how information is contained within the indexes used during that process.

The abstract for the patent filing provides a high-level look at some of the document processing system used:


> The disclosed embodiments enable multi-stage query scoring, including “snippet” generation, through incremental document reconstruction facilitated by a multi-tiered mapping scheme.
>
> The mapping scheme includes a first mapping between unique tokens contained in a set of documents and unique global token identifiers (e.g., 32-bit integers) contained in a global-lexicon (i.e., dictionary). The mapping scheme also includes a second mapping between the global token identifiers and a set of fixed-length local token identifiers (e.g., 8-bit integers) contained in one or more mini-lexicons (i.e., sub-dictionaries).
>
> Each mini-lexicon is associated with a range of token positions in the tokenized documents. The first and second mappings are used to encode/decode documents into local token identifiers having fixed widths which can be compactly stored in the token space repository.
>
> The use of fixed-length local token identifiers allows for fast and efficient decoding of tokenized documents.

The descriptions in the document processing system patent application and the old one are substantially similar, so I’m not going to go into a lot of detail regarding what this new patent application covers. I did only cover the multiple stages of query processing in my post on the older patent application.

What I didn’t cover was the sorting and indexing process detailed in the documents. If you’re interested in how information about documents might be indexed by a search engine, I’d recommend going over that part of the patent filings carefully. I’m not going to detail that process, but instead, point out something else about it that I thought was interesting.

**Applied Semantics and Multi-Tiered Mapping**

As I was going through the document, it struck me how this multi-tier mapping system from the patent applications might work well with the structure of an index described in a white paper from a company that Google acquired in 2003 – [Applied Semantics](http://googlepress.blogspot.com/2004/04/google-acquires-applied-semantics.html). Here’s a snippet from Ontology Usage and Applications, which provides some details on the “Conceptual Information Retrieval and Communication Architecture” (C.I.R.C.A.) technology developed by the Applied Semantics team:


> The *Tokenizer* is responsible for splitting raw data into individual tokens, and for recognizing and marking sentences. This includes handling specific formatting information represented in the input documents (for instance, as might appear in HTML tags), as well as identifying specific types of tokens, such as numbers, punctuation, and words.
>
> It maintains specific information about the original document, such as a token’s byte offset, while stripping some data out (e.g. unnecessary tags), breaking apart some white-space delimited tokens (e.g. pulling a period at the end of a sentence out into a separate token from the word it is adjacent to), or adding some structure to the document (e.g. sentence annotations).

That’s just one of many stages in the mapping of information found on pages via the Applied Semantics method. There are a few other steps, and if you haven’t read that document carefully before, it might provide some interesting insights into how the Applied Semantics team attempted to try to understand the semantics behind pages.

I also found this stage in the Applied Semantics system interesting in light of how much recent research has been floating around regarding identifying facts related to “Named Entities” – specific people and places and unique objects:


> The next stage of processing, *Named Entity Recognition and Regular Pattern Identification*, is responsible for identifying a series of tokens that should potentially be treated as a unit, and that can be recognized as corresponding to a specific semantic type.
>
> This module recognizes email addresses, URLs, phone numbers, and dates as well as embodying heuristics for identifying “named entities” such as personal names, locations, and company names.
>
> Each recognized unit is marked as a term and associated with a certain probability that the series should be treated as a unit. In the case of terms that already exist in the Ontology, this probability comes from the system’s previous observations of that term.

**Document Processing System Conclusion**

If Google were to build an index that used techniques described in the Applied Semantics white paper, it might look something like the one detailed in these patent applications.
