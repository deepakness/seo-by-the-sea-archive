---
title: "The Anchor Text Sparsity Problem"
source_url: "https://www.seobythesea.com/2009/10/the-anchor-text-sparsity-problem/"
slug: "the-anchor-text-sparsity-problem"
date_published: "2009-10-02T13:59:32+00:00"
date_modified: "2021-07-05T22:18:58+00:00"
author: "Bill Slawski"
---

If a search engine were to collect a list of links pointing to a page, and all of the text used in links to those pages (anchor text), it might be possible to learn a lot about the page being pointed towards by looking at the words used in those links. But what if there aren’t many links pointing to that page?

That’s the problem explored in a recent paper, Building Enriched Document Representations using Aggregated Anchor (pdf), by Donald Metzler, Jasmine Novak, Hang Cui, and Srihari Reddy, at Yahoo! Labs.

The authors of the paper refer to that problem as the *anchor text sparsity problem*, and they have come up with an interesting way to try to address the problem.

Here’s a simple example from the paper:

Let’s look at a hypothetical web page at the URL “http://dancing.com/lindyhop.html.”

Imagine that there are a couple of pages on the same domain (dancing.com) that point to that URL.

And, there are a couple of pages from outside of the site that also links to the “lindyhop.html” page.

If we look at the anchor text from the pages outside of the site, otherwise referred to as external links, linking to “lindyhop.html” we might see terms used in those links such as “Lindy Hop” and swing dancing.” We’ve learned a little about the page being pointed towards by looking at that anchor text.

Can we learn even more by looking at the anchor text used in the links pointing to the other two pages within the “dancing.com” site that link to our “lindyhop.html” page? It’s possible. If external links pointing to those two pages include anchor text such as “Savoy Ballroom” and “dances in New York,” then we have.

**Aggregating Anchor Text Relevance Along the Web Graph**

If you create a visual representation of the Web as a collection of destinations (web pages, videos, images, executable files, etc.), and connections between those files (links), you could come up with a pretty complex looking graph, which you might refer to as the “Web Graph.”

Many of the techniques behind ranking web pages, with PageRank being one example, involve using a graph like that. PageRank looks at the links themselves, and not the anchor text associated with those links. When search engines do look at anchor text in links pointing to the page, they may limit themselves to only looking at anchor text in links one step away along with that Web graph, pointing directly to pages.

But, what if you were to aggregate that anchor text, so that you looked at anchor text in connections, or links, two or three steps back along that Web Graph? Might aggregating that anchor text helps a search engine better understand what a page is about by looking at anchor text more than one link away?

Here’s what the authors of the Yahoo! paper tell us


> Our work has four primary contributions. First, to the best of our knowledge, we are the first to formulate and address the anchor text sparsity problem directly.
>
> Second, we propose many methods for aggregating anchor text across the web graph.
>
> Third, we propose various ways to use the aggregated anchor text to build enriched document representations.
>
> Finally, we show that our enriched document representations, when used in conjunction with a state-of-the-art ranking function, result in significant retrieval effectiveness improvements on a very large web test collection.

**Conclusion**

In my last post, [Search Engines Applying Different Anchor Text Relevance from the Same Site and Related Site Links](https://www.seobythesea.com/2009/09/search-engines-applying-different-anchor-text-relevance-from-the-same-site-and-related-site-links/), I looked at a paper from Microsoft that explored how a search engine might give different weights to anchor text in different links based upon things such as whether or the links were from the same site, or a related site, or from an unrelated site.

That paper didn’t explore what a search engine might do when a page just didn’t have many links pointing to it at all. Aggregating anchor text from links further back along with the link graph, to address the Anchor Text Sparsity Problem, might sometimes help in that instance.

Several questions are addressed in this paper that makes it worth exploring further than my overview, including how much weight anchor text might be given when multiple links are using that anchor text from the same site, or the same anchor text used from different sites, or how to avoid “spam, unrelated, or simply junk anchor text” to build an understanding of what a page might be about. This method also appears to be more helpful for finding pages that fit queries that are longer and more informational queries than shorter queries that tend to be navigational.

If you’re interested in learning about how a search engine might attempt to understand what your pages are about by looking at the anchor text in links pointing to your pages, and by looking at the anchor text in links pointing to other pages within your site that link to your pages, you may want to spend some time with this paper.
