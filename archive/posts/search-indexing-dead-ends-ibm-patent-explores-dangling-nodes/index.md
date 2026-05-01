---
title: "Search Indexing Dead Ends: IBM Patent Explores Dangling Nodes"
source_url: "https://www.seobythesea.com/2007/08/search-indexing-dead-ends-ibm-patent-explores-dangling-nodes/"
slug: "search-indexing-dead-ends-ibm-patent-explores-dangling-nodes"
date_published: "2007-08-01T02:20:10+00:00"
date_modified: "2020-11-03T16:22:35+00:00"
author: "Bill Slawski"
---

*Added:* Google Acquired this Dangling Nodes patent (System and method for ranking nodes in a network) from IBM in July 2011 – See: [Google’s New Patents from IBM](https://www.seobythesea.com/2011/07/googles-new-patents-from-ibm/)


## IBM Patents Dangling Nodes: A Way to Process Nodes in a Link Graph, without Links From Them

Someone is randomly clicking on links through your site, and looking at and reading those pages. They come to a page that has no links to it. Where do they go next? What kind of impact do those pages have on rankings for your site’s pages?


## Nodes and Dangling Nodes in Ranking Web Pages

Many ranking systems use graphs to represent and analyze information structures. On the Web, pages can be seen as “nodes” and the links between pages as “edges.” Ranking those nodes, or pages, in those graphs by their quality or importance can be a valuable approach.

PageRank is one of the systems that use the idea of nodes and edges to score pages on the web, and the technique of PageRank can also be applied to the scoring of nodes in other types of networks.

A patent from IBM attempts to provide some improvements to the PageRank algorithm, and other similar information graphs when looking at a specific type of node, known as a “dangling node.”

Sometimes nodes either have no links out to other pages, or their outlinks are not accessible to a ranking processor. When that happens, those nodes are known as “dangling nodes”.

The newly granted patent explores dangling nodes in-depth and provides a list of pages that may be treated by search engines as dangling nodes. A node may be dangling for a variety of reasons:

1. The search engine may know about the page, but it may have not yet been crawled.
2. The page may genuinely have no outlinks.
3. The page may be linked to, but disallowed from crawling by a robots.txt file.
4. A link may exist to the page, but the page may have been deleted by its author.
5. Postscript or PDF files, which rarely have embedded outlinks.
6. If the page requires authentication.
7. Pages that return error messages (HTTP header error messages in the 400 and 500 classes) at the time of a crawl, indicating that a page isn’t available.


## Problems with Dangling Nodes

The patent filing looks at what it calls problems with how dangling nodes are treated.

*Identical Treatment* – Conventional approaches to graph ranking techniques usually treat all types of dangling nodes identically, and remove dangling nodes from a graph before calculating rankings and then add the dangling nodes back into the graph ranking analysis. See:

- [The PageRank citation ranking: Bringing order to the web](http://web.archive.org/web/20170106094458/http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf)“
- [Exploiting the block structure of the web for computing pagerank](https://nlp.stanford.edu/pubs/blockrank.pdf) (pdf).

*Removal of Dangling Nodes* – Another conventional graph ranking technique removes the dangling nodes entirely. See:

- [What can you do with a web in your pocket?](http://web.archive.org/web/20100302201250/http://citeseerx.ist.psu.edu:80/viewdoc/summary?doi=10.1.1.36.2806)
- [Efficient computation of pagerank](http://web.archive.org/web/20120417033845/http://ilpubs.stanford.edu:8090/386/1/1999-31.pdf)

The inventors listed in this patent tell us that “removing the dangling nodes entirely skews the results on the non-dangling nodes somewhat since the outdegrees from the non-dangling nodes are adjusted to reflect the lack of links to dangling nodes.”

*Web Crawling* – These conventional approaches to ranking with dangling nodes do not account for the various types of dangling nodes. Understanding these different types of dangling nodes may be helpful when decisions need to be made involving web crawlers and decisions about which links to dangling web pages should be followed, and how to assign ranks to those dangling web pages. See:

- [Adaptive On-Line Page Importance Computation](http://www2003.org/cdrom/papers/refereed/p007/p7-abiteboul.html)
- [Efficient crawling through url ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf)

*Node Rot* – Pages sometimes get deleted. When a page is deleted, links that point to it will become “broken”. The existence of broken links on a page may be taken to be an “indication of low standards on part of its author.” The URL to the deleted page may be considered a dangling node, and the page linking to it may be seen as less valuable. See:

- Link rot limits the usefulness of web-based educational materials in biochemistry and molecular biology
- [The decay and failures of web references](https://www.spinellis.gr/pubs/jrnl/2003-CACM-URLcite/html/urlcite.html)


## IBM’s Patent on Ranking Dangling Nodes

The patent tells us that a system is needed to rank dangling nodes in a graph and adjust rankings for something that they call “penalty pages,” which are pages with links to pages that return error messages when a crawler comes to visit and send information back to a search engine indexer.

[System and method for ranking nodes in a network](https://patents.google.com/patent/US7251654B2/en)
Invented by Nadav Eiron, Kevin Snow McCurley, and John Anthony Tomlin
Assigned to IBM
US Patent 7,251,654
Granted July 31, 2007
Filed: May 15, 2004

Abstract


> A dangling web page processing system ranks dangling web pages on the web.
>
> The system ranks dangling web pages of high quality that cannot be crawled by a crawler.
>
> Also, the system adjusts ranks to penalize dangling web pages that return errors when links on the dangling web pages are crawled.
>
> By providing a rank for dangling web pages, the present system allows the concentration of crawling resources on those dangling web pages that have the highest rank in the uncrawled region.
>
> The system operates locally to the dangling web pages, providing an efficient determination of ranks for the dangling web pages. The system explicitly discriminates against web pages based on whether they point to penalty pages, i.e., pages that return an error when a link is followed.
>
> By incorporating more fine-grained information such as this into ranking, the system can improve the quality of individual search results and better manage resources for crawling.

**Dangling Nodes Conclusion**

There’s a lot of discussion in this patent about how the different types of dangling nodes (or pages) I’ve listed above can be ranked differently, and how the rankings of pages which link to those can be affected by the existence of those dangling nodes.

Under the system described, links to deleted pages, and links to pages that produce server errors can harm the pages of your site that provide those links.

If you’ve ever wondered how pages that a search engine hasn’t crawled can be ranked highly in search results, or how a pdf file might have a certain PageRank, it’s worth working through the detailed description of this patent.

While the major commercial search engines may not use the methods described in this patent, it provides some insights into assumptions made by search engineers involving the rankings of those pages that can’t be crawled by search engines for one reason or another, or for pages that have no links pointing out from them.

We had a nice discussion about PDF files in June, where I brought up some issues involving dangling Nodes and PDF files – Monetizing Pdf’s. If you have some thoughts on the topic, please feel free to add to the conversation.

**Some additional papers**

There are a lot of papers referred to in this document. Since the patent was filed in 2004, it doesn’t include references in its description to newer papers that explore issues related to dangling nodes.

There were a number of additional documents referred to in the patent in a section labeled “Other References.” These weren’t necessariliy cited by the authors of the document, and some of them were provided by the patent examiner. I was able to find links to all but two of them. They may provide some additional insight into this patent, so I include the list here:

- [Updating PageRank with Iterative Aggregation](https://www.iw3c2.org/WWW2004/docs/2p392.pdf)
- [Extrapolation Methods for Accelerating PageRank Computations](http://web.archive.org/web/20150623165433/http://ilpubs.stanford.edu:8090/865/1/2003-16.pdf) (pdf)
- [The Google Pagerank Algorithm and How It Works](http://www.alvit.de/vf/en/web-development-the-google-pagerank-algorithm-and-how-it-works.html)
- Holy smokes Batman, that is a Huge # of links
- [Using Spatial Sorting and Ranking in Model-Based Object Recognition](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.42.1499)
- Depth vs. Breadth
- Rethinking Drupal’s meta tags beyond version 3

Updated: August 24, 2019.
