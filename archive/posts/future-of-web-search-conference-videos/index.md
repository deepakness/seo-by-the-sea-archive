---
title: "Future of Web Search Conference Videos"
source_url: "https://www.seobythesea.com/2007/04/future-of-web-search-conference-videos/"
slug: "future-of-web-search-conference-videos"
date_published: "2007-04-16T23:55:00+00:00"
date_modified: "2019-12-20T09:32:33+00:00"
author: "Bill Slawski"
---

Last May, the Yahoo Future of Web Search Conference was held in Barcelona. Hat tip to Keri Morgret, it appears that [videos of the presentations](http://videolectures.net/fws06_barcelona/) are online.

On Sunday, I posted over at Search Engine Land about the papers that have been published for [AIRWeb 2007](https://searchengineland.com/airweb-2007-papers-released-10969). The papers from the Third International Workshop on Adversarial Information Retrieval on the Web contain some interesting topics that are worth looking at if you are concerned about Web spam.

One of the Organizing Committee members of AIRWeb2007, Carlos Castillo of Yahoo Research, was one of the presenters at the Yahoo Future of Web Search Conference. His presentation is pretty interesting – [Using Rank Propagation and Probabilistic Counting for Link-based Spam Detection](http://videolectures.net/fws06_castillo_urppc/).

It covers subjects such as:

- Link farms
- The use of statistics to identify spam ([Spam, Damn Spam, and Statistics](https://www.microsoft.com/en-us/research/publication/spam-damn-spam-and-statistics-using-statistical-analysis-to-locate-spam-web-pages/))
- Numbers of in-links to spam pages
- Number of out-links to spam pages
- About 35% of links pointing to a page are reciprocated (this is normal).
- Similarity of neighbors that you link to and that link to you (for instance, it’s common for blogs link to blogs).
- Spam pages tend to be demoted rather than removed in rankings from a search index
- PageRank alone is not a good detector of spam pages
- Trustrank – if you have a high page rank, but are far away (in terms of links) from trusted Web pages, you are suspicious
- Trustrank is biased against new pages
- Truncated PageRank – lessening the importance of nodes (other pages) that are very close (in terms distance based upon number of links) to a page
- Counting supporters at different distances

There is a paper that goes with the presentation – [Using Rank Propagation and Probabilistic Counting for Link-Based Spam Detection](https://chato.cl/papers/becchetti_06_automatic_link_spam_detection_rank_propagation.pdf)

Carlos Castillo notes that this method only covers looking at links, and that it doesn’t consider the content of pages. He also points out that there are methods of looking at content that could be used in conjunction with this method that could increase the amount of spam pages, and reduce the amount of false positives – pages that might be identified by this system as spam even though they aren’t.
