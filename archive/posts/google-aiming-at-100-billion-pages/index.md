---
title: "Google Aiming at 100 Billion Pages?"
source_url: "https://www.seobythesea.com/2006/05/google-aiming-at-100-billion-pages/"
slug: "google-aiming-at-100-billion-pages"
date_published: "2006-05-19T18:39:16+00:00"
date_modified: "2020-07-06T09:41:58+00:00"
author: "Bill Slawski"
---

What would it take for Google to include in its index 100 billion pages?

Could they develop a way for people to search for, and look at older versions of web pages, and also simultaneously improve the quality of their search results? Would indexing words within conceptually related phrases make the search process better?

A recent patent application from Google estimates the web to contain around 200 billion pages and guesses that the largest index from the major search engines hold around 6-8 billion pages. The document is [Multiple index-based information retrieval system](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20060106792&OS=20060106792&RS=20060106792), US Patent Application 20060106792, which was published May 18, 2006, and originally filed on January 25, 2005.

In addition to providing us with a rough estimate of the size of the web, and the number of pages indexed by search engines, it also tries to answer the questions I asked at the top of this post.

The inventor listed in the patent filing is Anna Patterson, who has already built a search engine that holds more than 55 billion pages ([The Internet Archive](http://archive.org/web/web.php)). Part of the process described in the document was the subject of a blog post here back in February – [Move over PageRank: Google’s looking at phrases?](https://www.seobythesea.com/2006/02/move-over-pagerank-googles-looking-at-phrases/)

This method would enable Google to hold so many documents through the use of multiple indexes. One with relevance information and likely a secondary, or supplemental index, with much less information.

The information retrieval system described in the patent application would:

1. Comprehensively identify phrases in documents on the web,
2. Index those documents according to phrases,
3. Search and rank documents in accordance with their phrases, and;
4. Provide additional clustering and descriptive information about the documents.

But it wouldn’t include information about all of the documents. Instead, it would store higher-ranked documents in a primary index, ranked in order of the relevance scores, and store lesser ranked documents in a secondary index, by numerical order of document identifiers assigned to each document.

The relevance score that would be used is a page rank based type score, and many relevance attributes for each document in the primary index would also be stored.

The kinds of relevance attributes would include at least one of the following:

1. Total number of occurrences of the phrase in document,
2. A rank ordered list of anchor documents that also contain the phrase and that point to the document,
3. The position of each phrase occurrence in the document,
4. A set of one or more flags indicating a format of the occurrence, or;
5. A portion of the document containing the occurrence.

The secondary index described, would contain only document identification information. This secondary index reminded me a little of what many people refer to as the [Google Sandbox](https://www.seroundtable.com/archives/001963.html)these days, where new sites have trouble ranking for many keyword phrases.
