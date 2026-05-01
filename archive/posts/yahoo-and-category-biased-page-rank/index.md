---
title: "Yahoo and Category-Biased Pagerank"
source_url: "https://www.seobythesea.com/2006/09/yahoo-and-category-biased-page-rank/"
slug: "yahoo-and-category-biased-page-rank"
date_published: "2006-09-01T23:55:37+00:00"
date_modified: "2020-11-03T16:35:08+00:00"
author: "Bill Slawski"
---

What are the implications of a search engine deciding that your web site fits within a certain classification?

That’s one of the questions that may have been raised with my last post, which looked at a patent application from Microsoft ([Microsoft Looks at Category Based Link Weights](https://www.seobythesea.com/2006/09/microsoft-looks-at-category-based-link-weights/)) and described the assignment of category weights to links between pages. That type of classification of pages appears to be an idea floating around more places than just at Microsoft.

[Web Content Categorization Using Link Information](http://web.archive.org/web/20140211085753/http://ilpubs.stanford.edu:8090/782/1/2006-17.pdf) is a paper written by Zoltan Gyongyi and Hector Garcia-Molina from the Department of Computer Science at Stanford University, and Jan Pedersen of Yahoo. It focuses upon a document classification system that uses a method based upon links between pages to classify those pages. As a part of the abstract for the page notes:


> This paper introduces a link-based approach to classification, which can be used in isolation or conjunction with text-based classification. Various large-scale experimental results indicate that link-based classification is on par with text-based classification, and the combination of the two offers the best of both worlds.

**Benefits of Document Classification**

So, how might classification impact upon sites, and site owners? The paper provides some examples of how being able to classify documents could be useful:

- A shopping service like Froogle could be more effective if it were easier to identify sites that provide eCommerce services.
- Being able to classify Blogs and RSS feeds into topics could make an aggregation of information from those easier.
- Personalizing search results could see benefits from an “implicit” classification of pages.
- Categorizing pages such as photo galleries or Flash pages can be difficult with a text-based classification

The [Microsoft patent filing](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060195439%22.PGNR.&OS=DN/20060195439&RS=DN/20060195439) adds some more possibilities:

- Sites classified as spam, phishing, pornography, and hate could be removed from the index if desired.
- Queries that fit certain categories could be matched up with categorized pages that seem more relevant for those queries.

One of the things that are important to note here is that the method described in the Stanford/Yahoo paper isn’t looking at this kind of topic or classification approach to affect the topical sensitivity of search results, but rather to classify web pages.

**Conclusion**

The manual classification of web pages is difficult because of the size, complexity, and quick-changing nature of the web. Text-based classification can be useful, but it could be improved with the use of classification based upon linking between pages. This paper discusses ways of using a link biased PageRank in conjunction with machine learning methods to classify web pages.

What signals will it look at to make those determinations? That’s an answer that the paper doesn’t dive too deeply into, but it’s a question that we may be asking a lot more frequently in the future.
