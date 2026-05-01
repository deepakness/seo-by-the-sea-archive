---
title: "Ranking Search Results Using Featured Based Rankings"
source_url: "https://www.seobythesea.com/2006/04/feature-based-rankings-at-msn/"
slug: "feature-based-rankings-at-msn"
date_published: "2006-04-08T14:25:05+00:00"
date_modified: "2020-06-17T12:37:45+00:00"
author: "Bill Slawski"
---

How does one optimize pages for MSN, given that they use a machine-based ranking system for ranking search results and returning results to visitors?

Some new research from Microsoft and some recently released patent applications might provide some ideas.

Before I dive into this, I want to point out [Search Engines and Algorithms: Optimizing for MSN’s RankNet Technology](https://web.archive.org/web/20170426011650/http://www.seochat.com:80/c/a/msn-optimization-help/search-engines-and-algorithms-optimizing-for-msns-ranknet-technology/) by Jennifer Sullivan Cassidy, which takes a look at Microsoft’s Ranknet Technology. It’s a good introduction to some of the research that Microsoft has been doing lately.

**Query independent ranking**

Ranknet is discussed more in a paper to be presented in May at the WWW2006, titled [Beyond PageRank: Machine Learning for Static Ranking](http://courses.cse.tamu.edu/caverlee/csce470/beyondpagerank.pdf). It provides a detailed look at how human ranked pages can be used to identify other high-quality pages, without relying upon the link structure of the web.

The document describes experiments conducted on an approach to ranking pages, rather than reporting how MSN might be using this ranking system. But, it can act to help us understand some of the approaches that MSN may be taking to ranking pages and sites.

The focus of the paper is on a query independent static ranking of pages, as opposed to a dynamic ranking. That doesn’t mean that a dynamic query-based ranking is no longer part of the equation on which pages get returned in response to a query, but rather than the quality of pages returned will play a larger part in returning results. The authors tell us that:


> In this paper, we show there are several simple URL or page-based features that significantly outperform PageRank (to statically rank Web pages) despite ignoring the structure of the Web.
>
> We combine these and other static features using machine learning to achieve a ranking system that is significantly better than PageRank (in pairwise agreement with human labels).

One benefit mentioned from this result is that it would be harder for people to manipulate search results because a static ranking search results are based upon a large number of factors on a page, rather than relying as much upon the number of links to a page, in a system that uses something like PageRank. And the learning nature of the system used for ranking search results can enable features that are being manipulated to carry less weight or be ignored completely.

The paper looks at:

1. Pagerank (which it calls slow, and computatively expensive)
2. Ranknet (A learning and ranking algorithm)
3. Specific features used to rank pages
4. Experiments
5. Results
6. Related and future work

The categories of specific features that they looked at for this paper:

- Popularity,
- Page-level
- Anchor text and inlinks, and;
- Domain-level

**Feature based rankings**

The paper refers to the method it uses for ranking search results as *fRank* or feature-based ranking. (As an aside, I’ll note here that on my first reading of the paper, I had to scroll back up to the top and look at the author’s names to see if any of them was named “Frank.” Maybe because “PageRank” takes its name from Larry Page’s surname.)

They list some of the features, from the categories listed above, but not all of them.

*Popularity* is interesting because they used MSN toolbar data to find out which pages were the most popular. Other sources they note for finding popularity include proxy logs (which tend to be on the small side for these purposes), and click-through rates, such as were used by older search engines like Direct Hit. The advantage of using toolbar visits is that it includes information about site visits beyond that gathered from the use of a search engine, such as clicking on favorites or following links from one page to another.

*Page (and URL) features* can include such things as the number of words on a page, frequency of the most common terms, and more.

*Anchor text features* look at the text pointing to pages, rather than on the pages themselves, and can involve aspects like the number of words in a link, the words used in those links (for more details, see the “anchor text” patent application, below).

*Domain based features* involve averages across all of the pages in a specific domain, such as the average number of words, average PageRank, and others.

**Human based judgments and changing features**

For purposes of this experiment, approximately 500,000 human-based rankings were used for the results of 2800 queries on MSN.

They used these rankings to train fRank and then set it out to rank some pages. Details of the training methods and results are spelled out in the document and provide some interesting insights. One part of the training involved looking at how rankings changed as they added more features. Here’s one conclusion that might provide some room for thought:


> For each URL in our train and test sets, we provided a feature to fRank which was how many times it had been visited by a toolbar user.
>
> However, this feature was quite noisy and sparse, particularly for URLs with query parameters (e.g., http://search.msn.com/results.aspx?q=machine+learning&form=QBHP). One solution was to provide an additional feature which was the number of times any URL at the given domain was visited by a toolbar user.
>
> Adding this feature dramatically improved the performance of fRank.

They note that a further refinement of that approach, involving the “hierarchical structure of URLs to construct many levels of backoff between the full URL and the domain,” increased accuracy even more (see the “click distance” patent application, below).

**Future work**

The fRank approach presently only uses a small number of features, and the authors of the paper believe that they can improve its accuracy with the addition of more, by possibly looking at many other factors. A few things are listed:


> We believe we could achieve even more significant results with more features. In particular, the existence, or lack thereof, of certain words could prove very significant (for instance, “under construction” probably signifies a low-quality page).
>
> Other features could include the number of images on a page, size of those images, number of layout elements (tables, divs, and spans), use of style sheets, conforming to W3C standards (like XHTML 1.0 Strict), background-color of a page, etc.

**Other resources**

At the end of *Beyond PageRank* are a number of citations to other papers. I’ve read through a few of them, and they seem like good followup material if you are interested in delving deeper into this topic. A couple of newer ones that are from Microsoft which I would recommend are these two:

- [Relevance Weighting for Query Independent Evidence](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/craswell_sigir05.pdf)
- [Learning to Rank using Gradient Descent](https://www.microsoft.com/en-us/research/publication/learning-to-rank-using-gradient-descent/)

Two newly published patent applications assigned to Microsoft also contain ideas that are incorporated into the *Beyond PageRank* paper:

[System and method for incorporating anchor text into ranking search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060074871%22.PGNR.&OS=DN/20060074871&RS=DN/20060074871)

Inventors: Dmitriy Meyerzon, Stephen Edward Robertson, Hugo Zaragoza, and Michael J. Taylor (Cambridge, GB)
Assigned to Microsoft Corporation
US Patent Application 20060074871
Published April 6, 2006
Filed September 30, 2004

Abstract


> Search results of a search query on a network are ranked according to a scoring function that incorporates anchor text as a term.
>
> The scoring function is adjusted so that a target document of anchor text reflects the use of terms in the anchor text in the target document’s ranking. Initially, the properties associated with the anchor text are collected during a crawl of the network. A separate index is generated that includes an inverted list of the documents and the terms in the anchor text.
>
> The index is then consulted in response to a query to calculate a document’s score. The score is then used to rank the documents and produce the query results.

[System and method for ranking search results using click distance](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060074903%22.PGNR.&OS=DN/20060074903&RS=DN/20060074903)

Inventors: Dmitriy Meyerzon, and Hugo Zaragoza
Assigned to Microsoft Corporation
United States Patent Application 20060074903
Published April 6, 2006
Filed September 30, 2004

Abstract


> Search results of a search query on a network are ranked according to an additional click distance property associated with each of the documents on the network.
>
> The click distance is the measurement of the number clicks or user navigations from a page or pages on the network designated as a highest authority or root pages on the network.
>
> The precision of the results is increased by the addition of the click distance term when the site or intranet where the search query takes place is hierarchically structured.

**Conclusion**

Microsoft releases a large number of patent applications, and research papers regularly, and has a large number of teams working on different, but sometimes very related topics. The research I’ve pointed at today is only a small slice of what they have going on behind the scenes.

It’s likely that the other major search engines, and others looking at search-related problems, are also striving to find more ways to rank documents that don’t rely as much upon link popularity, as measured by something like PageRank. Page quality and layout, site structure, and the words used in links are likely to be part of factors reviewed in these attempts to provide more relevant and meaningful results to searchers, as well as popularity measured through something like a toolbar.

I’ll be looking at some other recent Microsoft material very shortly which covers some other approaches to indexing and ranking pages.
