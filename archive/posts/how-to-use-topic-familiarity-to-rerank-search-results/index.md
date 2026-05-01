---
title: "How to Use Topic Familiarity to Rerank Search Results"
source_url: "https://www.seobythesea.com/2006/09/how-to-use-topic-familiarity-to-rerank-search-results/"
slug: "how-to-use-topic-familiarity-to-rerank-search-results"
date_published: "2006-09-26T19:21:35+00:00"
date_modified: "2020-07-06T10:54:38+00:00"
author: "Bill Slawski"
---

Unfamiliar with a topic, and want to find a simple page on a subject – one that didn’t require background reading or knowledge to understand the page?

More familiar with that subject, and you want to find an advanced page on the web?

Could a search engine help you find pages and rerank them based upon how familiar you may indicate that you are with the topic related to your query? It’s possible.

A search engine might pay attention to the following when indexing pages:

- Reading levels for the page,
- Word lengths of sentences and other features of text on the page,
- How simple or complex the stopwords* used upon a page may be.

*Stopwords are the most frequently appearing words in a search engine’s index, and they often aren’t indexed because they appear so frequently. Some stopwords are more complex than others. Stopwords in U.S. English that indicate a page is simple and informal might include: “so, enough, just, in, needs, help, each, away.” Stopwords in U.S. English that might show a page to be more complicated and formal may include: “if, cause, while, way, though, which, us.”

**Yahoo and Topic Familiarity**

You may have seen the [Yahoo! Mindset](http://web.archive.org/web/20130514223348/http://research.yahoo.com/node/2358) page (no longer available), which reranks search result pages based upon whether those pages are more commercial or more informational. After you enter a search and see a results page in Yahoo! Mindset, you also see a slider bar at the top of the results that have the word “shopping” on one side and “researching” on the other, with a ball on the line in the middle that you can slide towards either end. If you slide that ball, either way, the search results under its change. Sliding towards “shopping” brings back more commercial sites. Sliding towards “researching” returns more informational sites.

Imagine that instead of “shopping” and “research,” one side said “introductory” and the other side said “advanced.” That’s similar to the idea behind a new patent application that appears to be based upon research conducted at Yahoo!

A paper from 2005, [Biasing Web Search Results for Topic Familiarity](http://ciir-publications.cs.umass.edu/getpdf.php?id=538), explores this topic. It was written by Giridhar Kumaran of the University of Massachusetts, and Rosie Jones and Omid Madani of Yahoo. The paper was presented at the Conference on Information and Knowledge Management for the Proceedings of the 14th ACM International Conference on Information and Knowledge Management, in Bremen, Germany last year.

A patent application published last week seems to cover the same ground, and share the same authors:

[System and method for biasing search results based on topic familiarity](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060212423%22.PGNR.&OS=DN/20060212423&RS=DN/20060212423)
Invented by Rosie Jones, Giridhar Kumaran, and Omid Madani
US Patent Application 20060212423
Published September 21, 2006
Filed: March 16, 2006

Abstract


> A familiarity level classifier comprises a stopwords engine for conducting a stopwords analysis of stopwords, e.g., introductory-level stopwords and advanced level stopwords, in a document, e.g., a website; and a familiarity level classifier module for generating a document familiarity level based on the stopwords analysis. The classifier may be in an indexing module, a search engine, a user computer, or elsewhere in a computer network. The classifier may also include a reading level engine for conducting a reading level analysis of the document, and wherein the familiarity level classifier module is configured to generate the familiarity level also based on the reading level analysis. The classifier may also include a document features engine for conducting a feature analysis of the document, and wherein the familiarity level classifier module is configured to generate the document familiarity level also based on the feature analysis.

**Classification of a Familiarity Level**

When indexing pages, the familiarity level classifier looks at three types of things:

1. The distribution of stopwords in the text,
2. Document reading level, and;
3. Document features such as average line-length.

The topic searched for, queries used, and information about the searcher isn’t considered at all.

Some Reading level measures that might be used:

- The [Gunning Fog measure](http://juicystudio.com/services/readability.php?url=#gunning),
- The [Flesch measure](http://juicystudio.com/services/readability.php?url=#fleschease),
- The [Kincaid measure](http://juicystudio.com/services/readability.php?url=#fleschkin),
- Number of characters,
- Number of words,
- Percentage of complex words,
- Number of sentences,
- Number of text lines,
- Number of blank lines,
- Number of paragraphs,
- Number of syllables per word,
- The number words per sentence, and/or;
- Others

Pages are classified as introductory or advanced based upon factors like those above. A slider like in Yahoo! Mindset, or something similar, can be used by a searcher to determine how they want pages to be reranked – introductory or advanced.

**Conclusion**

This is an interesting idea, but would Yahoo use something like it in their search engine, or would it be a novelty or toy-like Yahoo! Mindset, hidden away somewhere on a research page that not many people visit?

If you build informational web pages, would this patent application convince you of the wisdom of building both introductory pages and pages for advanced searchers who are more familiar with the topic that you are writing about?
