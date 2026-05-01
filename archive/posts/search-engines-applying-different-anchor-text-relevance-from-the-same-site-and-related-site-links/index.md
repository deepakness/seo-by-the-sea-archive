---
title: "Search Engines Applying Different Anchor Text Relevance from the Same Site and Related Site Links"
source_url: "https://www.seobythesea.com/2009/09/search-engines-applying-different-anchor-text-relevance-from-the-same-site-and-related-site-links/"
slug: "search-engines-applying-different-anchor-text-relevance-from-the-same-site-and-related-site-links"
date_published: "2009-09-29T12:42:08+00:00"
date_modified: "2021-07-05T22:23:10+00:00"
author: "Bill Slawski"
---

Anchor text in a link pointing to a page is often used by search engines to determine what a page being linked to is about, and to determine what words and phrases that page is relevant for.

But, there are many issues raised when search engines use anchor text in that way. Here are a few of them:

- If a page points two links to the same destination page using the same anchor text in both links (for example, in the navigation and the footer of the page), should the relevancy of that link text be weighted twice as much as if there were only a single link from the source page?

- If there is a link on every page of a site to a single page of that site (a site-wide link) using the same anchor text, should each of those links accumulate in weight to determine how relevant that page might be for the text used in those links?

- If there are multiple links on a page to another page or sitewide links to that other page, and the anchor text is different in each link, should the text in both links carry the same amount of weight in determining what is the page being linked to is about?

- If a site is substantially a mirror of another site, how much weight should anchor text from the first site to its mirror be given, and vice versa?

- If a site is considered to be “related” to another site by common ownership or some other kind of cooperative relationship, should the anchor text in links from a site to a related site be given the same amount of relevance weight as anchor text in links to an unrelated site?

- If a link appears to have been created to boost the rankings of a destination page in search results, how much weight should the anchor text of that link be given to the destination page?

There have been many papers, patent filings, articles, and blog posts that describe PageRank and how it might be used in ranking pages at a search engine. There has been much less written on a very related topic – how anchor text in links might influence how relevant a page might be considered for the words and phrases used in those links.

In the very early days of Google, the relevancy of anchor text was seen by its founders as a major part of how pages on the Web should be indexed. We are told the following about anchor text in the 1998 Sergey Brin, and Lawrence Page scribed [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html):


> 2.2 Anchor Text
>
> The text of links is treated specially in our search engine. Most search engines associate the text of a link with the page that the link is on. In addition, we associate it with the page the link points to. This has several advantages. First, anchors often provide more accurate descriptions of web pages than the pages themselves. Second, anchors may exist for documents that cannot be indexed by a text-based search engine, such as images, programs, and databases. This makes it possible to return web pages that have not actually been crawled. Note that pages that have not been crawled can cause problems since they are never checked for validity before being returned to the user. In this case, the search engine can even return a page that never actually existed but had hyperlinks pointing to it. However, it is possible to sort the results so that this particular problem rarely happens.
>
> This idea of propagating anchor text to the page it refers to was implemented in the World Wide Web Worm [McBryan 94]. It helps search non-text information and expands the search coverage with fewer downloaded documents. We use anchor propagation mostly because anchor text can help provide better quality results. Using anchor text efficiently is technically difficult because of the large amounts of data that must be processed. In our current crawl of 24 million pages, we had over 259 million anchors, which we indexed.

But that statement doesn’t even hint at some of the issues that I raise above. Almost eleven years later, we’re starting to see some of those issues being considered in published research from the search engines, though if I had to guess, I would say that a number of those issues have been hashed through and possibly addressed at places like Google.

A paper published earlier this year and presented at the SIGIR’09 conference in July, with authors from Microsoft Research Asia and the University of Montreal, explores the relationships between links when determining how much weight text from those links should be given in determining what a page the links point to are about.

The paper is [Using Anchor Texts with Their Hyperlink Structure for Web Search](https://www.microsoft.com/en-us/research/publication/using-anchor-texts-with-their-hyperlink-structure-for-web-search/), and the abstract from the paper provides a nice overview of its exploration:


> As a good complement to page content, anchor texts have been extensively used, and proven to be useful, in commercial search engines. However, anchor texts have been assumed to be independent, whether they come from the same Web site or not.
>
> Intuitively, an anchor text from unrelated websites should be considered stronger evidence than that from the same site.
>
> This paper proposes two new methods to take into account the possible relationships between anchor texts. We consider two relationships in this paper: links from the same site and links from related sites. The importance assigned to the anchor texts in these two situations is discounted. Experimental results show that these two new models outperform the baseline model, which assumes independence between hyperlinks.

The paper presents several different models involving how much weight they might give to anchor text from links located on the same page, on the same site, on “related” sites, and tells us about many experiments that they perform where these different weights for the relevance of anchor text play into the experiments.

The authors looked at a dataset of 3,000 randomly sampled queries, and about 140 returned documents for each query that human editors graded regarding their relevance (on a scale of 1 to 5 or bad to perfect). They then separated the queries into informational type queries, and navigational type queries to examine how well the results turn out when they apply different weighted relevance amounts from their different anchor text models.

Their research appears to indicate that if they count multiple links from the same domain as a single link, and give different weights to links from other sites based upon whether or not there is a relationship between those sites, that the relevance of anchor text pointing to pages increases, especially for navigational queries.

The paper doesn’t answer all of the questions that I asked at the start of this post, but it provides some hints at how a search engine might handle some of those situations either now or in the future. It’s definitely worth spending some time with if you’re concerned about how a search engine might treat anchor text in links from the same site or from related sites. It’s also worth keeping an eye open for further research on the topic from the Microsoft Research Asia team.

One question that I need to ask, and intend to explore very soon, is what a search engine might do when there just aren’t many links (with associated anchor text) pointing to a page? Can the relevance of hypertext still be used somehow to tell a search engine what a page is about in that situation?
