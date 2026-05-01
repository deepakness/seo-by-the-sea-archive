---
title: "100 Best SEO Documents of All Time, part 4"
source_url: "https://www.seobythesea.com/2012/06/100-best-seo-documents-of-all-time-part-4/"
slug: "100-best-seo-documents-of-all-time-part-4"
date_published: "2012-06-25T21:29:45+00:00"
date_modified: "2020-03-10T10:20:53+00:00"
author: "Bill Slawski"
---

Almost seven years ago, I started thinking about what documents I would recommend that people read if they wanted to learn as much about SEO as possible. SEO by the Sea was a little more than a couple of months old, and I started a series of posts that I called the “100 best SEO documents of all time.” I started the series knowing the first 30 papers, blog posts, and patents that I wanted to include in the series, and somehow never got past those first thirty.

The posts were the three posts immediately before the [gathering that originally gave SEO by the Sea its name](https://www.seobythesea.com/about-seo-by-the-sea/). I went from blogger to event organizer, and never quite returned back to the series that I started. In the past couple of days, the first post got some attention on Twitter, and I promised to update the series.

The next ten documents are ones that I’ve been thinking about quite a bit after reading them, and what they might mean for the future of search.


## At the Intersection of Search and Social

[The Anatomy of a Large-Scale Social Search Engine](http://www.ra.ethz.ch/cdstore/www2010/www/p431.pdf) (pdf) – April, 2010

This first paper was written by the Aardvark team in the days before the company was acquired by Google, and the title was part homage to the original Google paper, [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html). It described a search that was more inspired by how people find information in a village than in a library. The Aardvark project was discontinued by Google, but I wouldn’t be surprised if it returned as part of the intersection between search and social networking in Google’s Search Plus Your World.

[Ranking User Generated Web Content](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2011050495) – October, 2009

I wrote about this patent filing in the post, [How Google Might Rank User Generated Web Content in Google + and Other Social Networks](https://www.seobythesea.com/2011/07/how-google-might-rank-user-generated-web-content-in-google-and-other-social-networks/), and there’s a decent chance that the credential scoring described in the patent filing is similar in many ways to that which is used by Google to rank social search results. The patent gives us a look at some of the signals that a search engine might look at to give reputation or credential scores to people who write blog posts or microblog posts at places like Google Plus, and at Q&A type sites. It also provides a look at how the meaningfulness of responses and interactions might be measured, and how authority and expertise in different topics might be determined.


## Bigger Index Using Smaller Files and Incremental Updating

Some of the processes and technologies described in many of the patents and papers that come from the search engines aren’t quite ready for prime time. It’s not because they might not contain good ideas, but rather because the technology might not have caught up to them yet. And then we get advances in technology that make changes possible. One of those changes was an infrastructure update at Google with the name Caffeine. The paper and the patent that follow describe changes at Google that made the search engine much faster, as well as capable of holding a lot more information with the same amount of servers.

[Large-scale Incremental Processing Using Distributed Transactions and Notifications](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36726.pdf) – November, 2010


> The Percolator-based indexing system (known as Caffeine [25]), crawls the same number of documents, but we feed each document through Percolator as it is crawled. The immediate advantage, and main design goal, of Caffeine is a reduction in latency: the median document moves through Caffeine over 100x faster than the previous system.

[Document treadmilling system and method for updating documents in a document repository and recovering storage space from invalidated documents](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07617226&OS=PN/07617226&RS=PN/07617226) – February, 2006


## Predicting User Behavior with Web Page Features

While the past couple of documents looked at infrastructure updates at Google, the next two look at processes that involve handling very large amounts of data. The first of the papers describes how those types of data sets might be implemented using Google’s Map Reduce system. The second paper takes what was learned in the first paper, and applies it to features identified in landing pages and advertisements to predict the bounce rates of sponsored advertisements. The papers tell us that the methods developed could be used with other large data sets, like pages in web search, to predict user behavior based on features found in a sample set of pages.

[PLANET: Massively Parallel Learning of Tree Ensembles with MapReduce](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/36296.pdf) – August. 2009

[Predicting Bounce Rates in Sponsored Search Advertisements](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/35251.pdf) – June, 2009


## What’s a link worth?

The next patent was one that verified something that many of us suspected for a few years, verified by Google’s Matt Cutts and the director of product management for Yahoo! Search Technology, Priyank Garg. The July, 2008 [interview with Priyank Garg by Eric Enge](https://blogs.perficient.com/2008/07/07/eric-enge-interviews-yahoos-priyank-garg/) and the patent confirmed hunches about changes to the way that the major search engines were treating links. Instead of each link on a page carrying the same value as any other link, we learned about a number of features that the search engines might consider when determining how much weight they might pass along.

[Ranking documents based on user behavior and/or feature data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,716,225.PN.&OS=pn/7,716,225&RS=PN/7,716,225) – Filed June, 2004

My write up of the patent cuts through some of the legalese – see: [Google’s Reasonable Surfer: How the Value of a Link May Differ Based upon Link and Document Features and User Data](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/)


## Big Big Data

[The Unreasonable Effectiveness of Data](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/35179.pdf) – March/April, 2009

Great article, and an even better video on how having access to a very large amount of data can even make weak algorithms provide useful data. The video is around an hour long, but it’s highly recommended.

Organizing and Searching the World Wide Web of Facts Step Two: Harnessing the Wisdom of the Crowds – May, 2007

The new knowledge base results at Google and Bing don’t just pull information from sources like Wikipedia and Britannica, but they also look to query logs from the search engines to understand the kinds of things that searchers might be looking for when they perform searches. As the paper tells us, millions of searchers add to the data in search query logs daily, and those “facts” about the things being searched for can help the search engines learn what searchers may be interested in when they perform a query.

I’m going to try to finish this series over the next 6 weeks, with a new post every week. What we end up with may not be the 100 best SEO documents of all time, but hopefully we’ll get a lot of the really good ones in here.


## Posts in this series of the 100 Best SEO documents:

- August 14, 2005 – 100 best SEO documents of all time, part 3
- June 25, 2012 – [100 best SEO documents of all time, part 4](https://www.seobythesea.com/2012/06/100-best-seo-documents-of-all-time-part-4/)
