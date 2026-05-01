---
title: "Stanford WebBase: Google's Academic Cousin"
source_url: "https://www.seobythesea.com/2006/11/stanford-webbase-googles-academic-cousin/"
slug: "stanford-webbase-googles-academic-cousin"
date_published: "2006-11-27T01:33:43+00:00"
date_modified: "2016-09-30T12:42:07+00:00"
author: "Bill Slawski"
---

In the late 1990’s, two versions of the original Google repository and search engine were created; a commercial one which became the Google we know today, and an academic version which was named Stanford WebBase.

In May, 2006, a number of researchers connected with Stanford University submitted a paper to the *ACM Transactions on Internet Technology* which describes how the WebBase system works, and many of the experimental and performance results that led to design decisions behind this system. The paper is [Stanford WebBase Components and Applications](http://oak.cs.ucla.edu/~cho/papers/webbase-toit.pdf) (pdf).

While earlier projects used information gathered by WebBase, this is the first paper that actually looks at the WebBase system itself.

The main idea behind WebBase is to saves researchers the time and effort behind collecting Web data on their own, so that they can spend that time and effort on their research instead.

It is more than likely that the development of Google and Stanford WebBase followed different paths, but some of the issues faced in the development and growth of WebBase are pretty interesting.

These include things like:

– How a crawler handles alias domain names (the “www” version and “non-www” versions of domains),

– Deciding upon different default crawling times for larger commercial sites and smaller sites on virtual hosts,

– Why IP addresses for seed URL hostnames are all resolved before the crawlers go out to fetch information from those pages (and the risk that the IP addresses for pages may change while those pages are being crawled),

– How the indexing program builds three basic indexes: an offset (physical location) index, a text index, and a link/graph index, and how information from those may be combined and analyzed to calculate pagerank and a similar page index.

The WebBase system has been used on a wide variety of research projects looking at the Web and at search algorithms, including a number that may have influenced the development of the major commercial search engines.
