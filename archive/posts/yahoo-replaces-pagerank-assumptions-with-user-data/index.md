---
title: "Yahoo Replaces PageRank Assumptions with User Data"
source_url: "https://www.seobythesea.com/2008/01/yahoo-replaces-pagerank-assumptions-with-user-data/"
slug: "yahoo-replaces-pagerank-assumptions-with-user-data"
date_published: "2008-01-16T02:20:49+00:00"
date_modified: "2020-07-06T14:32:45+00:00"
author: "Bill Slawski"
---

PageRank is an algorithm that measures the importance or quality of a Web document.

It can be used in a number of ways by a search engine, such as being combined with relevance factors to [rank search results](https://www.seobythesea.com/2008/01/yahoo-replaces-pagerank-assumptions-with-user-data/), or to determine which web pages to [crawl](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf) (pdf) and how [frequently](https://www.seobythesea.com/2007/12/google-patent-on-anchor-text-and-different-crawling-rates/) to crawl them, or which [part of a database](https://www.seobythesea.com/2007/08/on-supplemental-results-partitioned-indexing-and-extended-indexes/) a document should be placed within.

Search algorithms are based upon assumptions about how people use the Web, how they might search, what they might pay attention to, and what they might find important. That’s true with PageRank in both theory, and how it may be used in actual practice.

**Challenging PageRank Assumptions**

It’s good to see folks in the search community challenging some assumptions behind PageRank. A patent application from Yahoo, published last week raises many issues, from people who know PageRank very well.

Here are some problems the inventors of the patent filing point to involving some basic assumptions about PageRank:

***Not All Links are Equal*** — people don’t randomly choose links on pages that they visit – some pages are more important than others, and some are rarely followed at all like “disclaimer” links.


> The assumption that all the outgoing links in a Web page are followed by a random surfer uniformly randomly is unrealistic. In reality, links can be classified into different groups, some of which are followed rarely if at all (e.g., disclaimer links).
>
> Such “internal links” are known to be less reliable and more self-promotional than “external links” yet are often weighted equally. Attempts to assign weights to links based on IR similarity measures have been made but are not widely used.
>
> See, for example, [The Intelligent Surfer. Probabilistic Combination of Link and Content Information in PageRank](https://homes.cs.washington.edu/~pedrod/papers/nips01b.pdf) (pdf), M. Richardson and P. Domingos, Advances in Neural Information Processing Systems 14, MIT Press, 2002.

***Bored Surfers Don’t Go to Random Pages*** — one of the assumptions of the PageRank formula is that sometimes, instead of following a link on a page, the “random surfer” will grow bored and just go anywhere else at random. The patent application notes that it is unrealistic to assume that most people using the web choose major portals and tiny home pages with an equal probability. When someone leaves a page to go somewhere else (a uniform teleportation jump to any random page under PageRank) it’s unlikely to be any random page at all where they will go.

***Bored Surfers Don’t Only Go to Trusted Pages*** — when that “random surfer” leaves instead of following links, it’s also unlikely that they will only go to a trusted set of pages or sites, under something like TrustRank (See, for example, [Combating Web Spam with TrustRank](http://www.vldb.org/conf/2004/RS15P3.PDF) – pdf). This assumption has nothing to do with how people use the Web, but is instead retrofitted into PageRank to combat link spam instead of being “reflective of real-world user behavior.”

***Pages Change and Lose Value at Different Rates*** — the PageRank process also ignores that pages are purchased and repurposed, or decay and become less valuable over time and do so at very different rates.

***Sometimes PageRank Calculations Cheat*** — some uses of PageRank formulations in practice are “typically implemented with regard to aggregations of pages by site, host, or domain, also referred to as ‘blocked’ PageRank.” See [Exploiting the Block Structure of the Web for Computing PageRank](https://nlp.stanford.edu/pubs/blockrank.pdf) (pdf)., This means that links between pages are being somehow aggregated to a block level. The patent application tells us that, “Unfortunately, most heuristics for performing this aggregation do not work well.”

**User Sensitive PageRank Patent Application**

I mentioned that the people behind the patent application know PageRank well. One of the most comprehensive and detailed documents I’ve seen on PageRank is A Survey on PageRank Computing, which was written by one of the named inventors on the following document. It’s also cited in the patent filing.

[User-sensitive pagerank](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080010281.PGNR.&OS=dn/20080010281&RS=DN/20080010281)
Invented by Pavel Berkhin, Usama M. Fayyad, Prabhakar Raghavan, Andrew Tomkins
Assigned to yahoo
US Patent Application 20080010281
Published January 10, 2008
Filed: June 22, 2006

Abstract


> Techniques are described for generating an authority value of a first one of a plurality of documents. A first component of the authority value is generated concerning outbound links associated with the first document. The outbound links enable access to a first subset of the plurality of documents.
>
> A second component of the authority value is generated concerning a second subset of the plurality of documents. Each of the second subsets of documents represents a potential starting point for a user session.
>
> A third component of the authority value is generated representing a likelihood that a user session initiated by any of a population of users will end with the first document.
>
> The first, second, and third components of the authority value are combined to generate the authority value. At least one of the first, second, and third components of the authority value is computed regarding user data relating to at least some of the outbound links and the second subset of documents.

The patent application adds elements of user behavior to the calculation of PageRank.

***Link Weight*** — the weight or value of links can be influenced by actual “user data representing a frequency with which the corresponding outbound link was selected by a population of users.”

***Likelihood of Randomly Leaving to a New Page*** — the chance that someone might leave (or teleport) to another page instead of following a link on a page is also influenced by user data.

***Satisfaction with Found Pages*** — the probability that someone might stop, and not visit new pages by following links on the page they are on also is calculated by looking at user data.

These three components can be used to create an “authority value” for a document on the Web.

The importance of anchor text, and other text associated with a link, is also addressed in User Sensitive PageRank:


> According to yet another embodiment, an authority value of a first one of a plurality of documents is generated.
>
> Text associated with each of a plurality of inbound links enabling access to the first document is identified.
>
> A weight is assigned to the text associated with each of the inbound links.
>
> Each of the weights is derived about user data representing a frequency with which the corresponding inbound link was selected by a population of users.
>
> The authority value is generated regarding the weights.

**The Role of User Data**

User data incorporated into this algorithm should “reflect the behavior and/or demographics of an underlying user population.” It’s actual real user data reflecting the way that people browse pages. User Sensitive PageRank can reflect “the navigational behavior of the user population concerning documents, pages, sites, and domains visited, and links selected.”

**Other Implications of a User Sensitive PageRank**

The patent application describes many different mathematical formulations to calculate this User Sensitive PageRank. I’m not going to delve deeply into those. It also addresses some other interesting implications:

***User Segment Personalized PageRank*** — user data from different demographic profiles (based upon age, gender, income, user location, user behavior, etc.) could be specified, so that search results could be different for people from those different demographics. This could be used with other approaches to personalized PageRank, like a [Topic Sensitive PageRank](http://infolab.stanford.edu/~taherh/papers/topic-sensitive-pagerank-tkde.pdf).

***People Visit Blocks*** — user behavior based upon visiting and browsing blocks (sites, hosts, or domains) may help understand how people go from one block to another block, and augment a block-level PageRank approach based solely upon links between those blocks.

***How the Passage of Time Can Affect PageRank*** — PageRank should be updated regularly because the links between pages on the Web change over time. Pages that might be considered core pages can also change in significance, or go out of fashion even though the links to and from those pages haven’t changed. Incorporating user data into PageRank means that recent events can be emphasized, and older events discounted.

***Choosing Pages to Crawl*** — PageRank can be used in determining whether to crawl and follow links associated with a page. The addition of user data in PageRank may make choosing easier.

***Beyond PageRank to Analysis of Text Associated with Links*** — anchor text can be “one of the most useful features used in ranking retrieved Web search results.” The importance of anchor text (and related text) can be associated with user behavior scores much like the importance of link weights can vary in User Sensitive PageRank.

**Conclusion**

PageRank, in most of the different formulations that have been described in patent filings and papers, focuses upon links published upon the Web and makes many assumptions about how people visit, browse, and use documents attached to those links.

User Sensitive PageRank attempts to replace some of those assumptions with actual user data about how people do travel to and use Web documents.

Highly recommended: David Harry digs pretty deeply into this patent application too, in Yahoo, Page Rank, and Teleportation Oh My! and offers a view of this document from a different perspective. David pulls out many fascinating aspects of the document that I didn’t, like “The Web Garbage Collection Utility,” and explores the user data aspects of the patent filing.
