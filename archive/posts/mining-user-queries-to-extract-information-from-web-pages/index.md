---
title: "Mining User Queries to Extract Information From Web Pages"
source_url: "https://www.seobythesea.com/2007/02/mining-user-queries-to-extract-information-from-web-pages/"
slug: "mining-user-queries-to-extract-information-from-web-pages"
date_published: "2007-02-14T23:32:07+00:00"
date_modified: "2020-07-08T14:38:31+00:00"
author: "Bill Slawski"
---

A new Google paper about mining user queries describes an interesting shift on how Google might find information on the web, using artificial intelligence methods on query log files.

We often talk about how Google indexes web pages by looking at relevance factors (which are “relevant” to the query used), and quality factors (which look at the importance of pages, through something like page rank).

But there are a number of Google databases which focus upon extracting information from web pages, and a few Google patent applications which describe such efforts by the search engine.

Examples include relating answers to questions in [Google Q&A](https://www.seobythesea.com/2007/01/google-qa-patent-applications/), joining business and location information to be used in [local search](https://www.seobythesea.com/2006/09/googles-local-search-patent/), finding [reviews](https://www.seobythesea.com/2006/06/innovating-product-reviews-at-google/) to extract and aggregate, and pulling information from the [Deep web](https://www.seobythesea.com/2006/10/google-diving-into-indexing-the-deep-web/).

**Extracting Information from Mining User Queries**

A Google paper presented at the [International Joint Conference on Artificial Intelligence](https://www.ijcai.org/) last month, [What You Seek is What You Get: Extraction of Class Attributes from Query Logs](https://www.cs.rochester.edu/~vandurme/papers/pascaIJCAI07.pdf) (pdf), takes a different approach.

Instead of attempting to extract the information directly from web pages as Google crawls the web, it looks at the search engine’s log files, and users’ interactions with pages to extract information. The abstract of the paper tells us:


> Within the larger area of automatic acquisition of knowledge from the Web, we introduce a method for extracting relevant attributes, or quantifiable properties, for various classes of objects.
>
> The method extracts attributes such as **capital city** and **President** for the class **Country**, or **cost**, **manufacturer** and **side effects** for the class **Drug**, without relying on any expensive language resources or complex processing tools.
>
> In a departure from previous approaches to large-scale information extraction, we explore the role of Web query logs, rather than Web documents, as an alternative source of class attributes.
>
> The quality of the extracted attributes recommends query logs as a valuable, albeit little explored, a resource for information extraction.

The authors of the paper state that they believe that their exploration of finding such data from log files is the first effort of its type while extracting information from a collection of documents.

**Experimenting with Query Log Extraction**

In addition to describing details on how this might be done, they also disclose information about an attempt to try the method on a random sample of 50 million (fully anonymized) Google queries, taken from the first few months of 2006.

These are the classes, and attributes related to those, that they tried to extract from query logs:

**Country**: capital, population, president, map, capital city, currency, climate, flag, culture, leader

**Drug**: side effects, cost, structure, benefits, mechanism of action, overdose, long term use, price, synthesis, pharmacology

**Company**: CEO, future, president, competitors, mission statement, owner, website, organizational structure, logo, market share

**City**: population, map, mayor, climate, location, geography, best, culture, capital, latitude

**Painter**: paintings, works, portrait, death, style, artwork, bibliography, bio, autobiography, childhood

**Conclusion**

In the conclusion to the paper, the authors note that they may attempt to “incorporate additional evidence from more traditional sources, such as natural language text and semi-structured text (e.g., tables), which may help further improve the quality of the output.”

If you would like to learn a little more about some recent research on information extraction at Google, these papers are worth a look:

- – [Names and Similarities on the Web: Fact Extraction in the Fast Lane](https://www.aclweb.org/anthology/P06-1102.pdf) (pdf)
- – [Organizing and Searching the World Wide Web of Facts – Step One: the One-Million Fact Extraction Challenge](http://www.cs.cmu.edu/~acarlson/semisupervised/million-fact-aaai06.pdf) (pdf)
