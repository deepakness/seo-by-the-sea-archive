---
title: "Using Page Quality to Overcome Bias in Ranking Newer Sites"
source_url: "https://www.seobythesea.com/2006/12/using-page-quality-to-overcome-bias-in-ranking-newer-sites/"
slug: "using-page-quality-to-overcome-bias-in-ranking-newer-sites"
date_published: "2006-12-28T08:54:32+00:00"
date_modified: "2020-07-01T15:39:23+00:00"
author: "Bill Slawski"
---

## Page Quality Scores and Newer Sites

Pagerank is a measure of the popularity of a page, yet it has a flaw according to some researchers. The problem is that newer pages haven’t had the chance to be viewed like older pages that have more links to them.

How would a problem like this be overcome? One way might be to determine how likely it would be that someone who viewed the newer page would link to it, and use a “future” measure of PageRank to return results to searchers.


## Page Quality White Paper

In a paper by Junghoo Cho, Sourashis Roy, and Robert E. Adams, [Page Quality: In Search of an Unbiased Web Ranking](http://oak.cs.ucla.edu/~cho/papers/cho-quality-long.pdf) (pdf), the researchers try to address this problem. Here’s how they describe it:


> In many recent studies researchers have found that because search engines repeatedly return currently popular pages at the top of search results, popular pages tend to get even more popular, while unpopular pages get ignored by an average user. This “rich-get-richer” phenomenon is particularly problematic for new and high-quality pages because they may never get a chance to get users’ attention, decreasing the overall quality of search results in the long run.


## Page Quality Patent Applications

The solution to this problem, according to them, would be to define a new ranking function, called *page quality*, which could overcome this popularity bias. A patent application was published this morning, with Junghoo Cho named as the inventor, which explores a definition for *page quality*, and describes how such a system might work.

[Unbiased page ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060294124%22.PGNR.&OS=DN/20060294124&RS=DN/20060294124)
Invented by Junghoo Cho
US Patent Application 20060294124
Published December 28, 2006
Filed January 12, 2005

Abstract


> The pages in a network of linked pages are ranked based on the quality of the pages.
>
> Page quality is obtained by determining the change over time of the link structure of the page, which is obtained by determining the link structure of the page at different periods by taking multiple snapshots of the link structure of the network.
>
> The link structures are approximated by their PageRanks, page quality being determined by the formula: Q .function. ( p ) .apprxeq. D .DELTA. .times. .times. PR .times. ( p ) PR .function. ( p ) + PR .function. ( p ) where Q(p) is the quality of the page, PR(p) is the current PageRank of the page, .DELTA.PR(p) is the change over time in the PageRank of the page, and D is a constant that determines the relative weight of the terms .DELTA.PR(p)/PR(p) and PR(p).

There is a lot of overlap between the patent application, and the paper, and rather than summarize the process defined in the patent, I’m going to recommend that if you are interested in finding out more about how this works, you take a look at the paper before tackling the patent application.

Some interesting stuff in these documents, such as noting that there are three different stages for a web site after it is created: the infant stage, the expansion stage, and the maturity stage.

The infant stage is defined by a time in which the page is barely noticed by Web users and has almost no popularity at all. The second expansion stage is where the popularity of a page suddenly increases. The maturity stage is where the popularity of the page appears to stabilize at some certain value.

Measuring and comparing PageRank changes along the path to maturity might provide a “future” PageRank, which would show how popular a page might be if people knew about it, and had the choice of whether or not to link to the page. Ranking pages based upon that future PageRank instead of the present one may act to overcome the biased search engines have towards popular pages at the expense of new ones.

The conclusion in the patent application, defining differences between ranking web pages by search engines over the past decade or so was interesting, too:


> At a very high level, we may consider the quality estimator as a third-generation ranking metric. The first-generation ranking metric (before PageRank) judged the relevance and quality of a page mainly based on the content of a page without much consideration of Web link structure. Then researchers [12, 16J proposed a second-generation ranking metric that exploited the link structure of the Web. The present invention further improves the ranking metrics by considering not just the current link structure, but also the evolution and change in the link structure. Since we are taking one more information into account when we judge page quality, it is reasonable to expect that the ranking metric performs better than existing ones.


## Page Quality Conclusion

Is this process presently being used? It’s difficult to tell, but I noticed that the [UCLA Office of Intellectual Property and Industry Sponsored Research](https://tdg.ucla.edu/) included a page about the algorithm being developed, which is no longer available.

Regardless, it’s interesting to see how an example of how a search engine might use measures of time, and frequencies of changes in rankings of pages to influence where those pages show up in search results.
