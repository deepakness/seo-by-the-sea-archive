---
title: "Link Analysis, Web Spam, and the Cautious Surfer"
source_url: "https://www.seobythesea.com/2007/05/link-analysis-web-spam-and-the-cautious-surfer/"
slug: "link-analysis-web-spam-and-the-cautious-surfer"
date_published: "2007-05-11T13:59:37+00:00"
date_modified: "2020-07-11T20:14:32+00:00"
author: "Bill Slawski"
---

**The Somewhat Random Surfer**

Inventor Lawrence Page, in the patent [Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en), introduces the idea of a Random Surfer, following links from page to page, in describing a method of ranking Web pages.


> Looked at another way, the importance of a page is directly related to the steady-state probability that a random web surfer ends up at the page after following a large number of links. Because there is a larger probability that a surfer will end up at an important page than at an unimportant page, this method of ranking pages assigns higher ranks to the more important pages.

There’s some fun stuff in that patent, filed in 1998, that doesn’t get a lot of attention.

For instance, the following factors are noted as possibilities that could weigh in on the value of a link from a source page, to increase the probability that someone would end up at an important page if they were surfing the Web and following the link:

- Whether the links are from different domains
- If the links are located at different servers
- Which institutions and authors maintain the links
- Where those institutions and authors are located geographically
- Whether the links are highly visible near the top of a document
- If the links are found in web locations such as the root page of a domain
- If the links are in large fonts, or are emphasized in other ways
- If the pages that the links are upon have been modified recently

That doesn’t sound completely random, does it? But the idea behind this ranking method was to:


> …be useful for estimating the amount of attention any document receives on the web since it models human behavior when surfing the web.

It also aims to avoid the possibility of “artificially inflated relevance” in pages that might be under the control of just one web site designer, thus the inclusion of different domains and different servers in that list.

**The Cautious Surfer**

A poster being presented at the WWW2007,[A Cautious Surfer for PageRank](http://www2007.org/posters/poster1038.pdf), adds a twist, noting that the concepts behind PageRank and the Random Surfer model were based upon the assumption that the content and links of a page can be trusted, and that they are trusted equally.

The authors of the paper introduce the idea of a Cautious Surfer:


> Unlike the random surfer described in the PageRank model, this cautious surfer carefully attempts to not let untrustworthy pages influence its behavior.

The paper uses the [TrustRank](http://www.vldb.org/conf/2004/RS15P3.PDF) (pdf) rankings of pages that a surfer is on to determine how likely a surfer will trust in following a link from that page, or if that browser will instead randomly jump to another page. The higher the TrustRank ranking of a page, the more likely that a surfer will follow a link from the page to another. There’s also a bias introduced to that random jump so that it is more likely that the surfer will go to a more trustworthy page.

The authors note that they could use other estimates of trust other than TrustRank ranks in this process. They also point out that the idea behind this approach isn’t to use TrustRank as a determination of the authority of a page, but rather continue to use PageRank as influenced by estimations of trust, to avoid webspam.

So why not just rely upon TrustRank? It can have the effect of demoting spam. Here’s the answer that we are given:


> However, the goal of a search engine is to find good quality results; “spam-free” is a necessary but not sufficient condition for high quality. If we use a trust-based algorithm alone to simply replace PageRank for ranking purposes, some good quality pages will be unfairly demoted and replaced, for example, by pages within the trusted seed sets, even though they may be much less authoritative.
>
> Considered from another angle, such trust-based algorithms propagate trust through paths originating from the seed set; as a result, some good quality pages may get low value if they are not well connected to those seeds.
