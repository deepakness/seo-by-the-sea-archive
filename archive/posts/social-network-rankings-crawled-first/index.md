---
title: "Can Author Rank or Other Social Network Rankings Get You Crawled First?"
source_url: "https://www.seobythesea.com/2012/11/social-network-rankings-crawled-first/"
slug: "social-network-rankings-crawled-first"
date_published: "2012-11-08T22:20:09+00:00"
date_modified: "2018-07-12T14:35:49+00:00"
author: "Bill Slawski"
---

Can social networking rankings influence which users profiles and interactions get crawled and then indexed first by a search engine crawling program? A Microsoft patent application asks and answers that question. Is it something that Bing is using, or will use?

**Importance Metrics for Prioritizing Crawls**

Back in the early days of Google, PageRank wasn’t just a way of ranking pages based upon the quality and quantity of links pointed to your pages. Google also used PageRank as one of the importance metrics used to decide which pages to prioritize when they had to choose which URLs to crawl first. The paper, [Efficient Crawling Through URL Ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf) (pdf), co-authored by Google Founder Lawrence Page pointed to a few other metrics that were used to decide which URLs to visit first on a crawl, including PageRank. Another of those looked at how close a page is to the root directory of a site. The idea behind that one is that it’s better to index a million different home pages than it is to index a million pages on one site.

With the growth of social networks and an incredible amount of user generated content that comes with them, there’s a lot less reliance upon links, and yet search engines want to crawl and index as much content from those types of sites as well. The lack of links to those means that something like PageRank is out of the question – and probably would be if we were talking about Google, too. Search engines don’t just want to crawl and then index user profiles, but also the things users of those networks post and the conversations that they have. Why not focus upon crawling content from people who are more active on those social networks?

Social networking content should be relevant and recent when shown in search results. But the ranking of that social content is an area that fairly new to social networks, and something that there’s really no established methods for. A search engine can grab a crawl list from a social network, with the URLs of pages and posts and pictures to crawl, but where should it start? Such a crawl list can even be easy to retrieve, especially in cases like when a social network like Twitter might turn over an XML feed to a search engine. But again, where to begin?

The patent filing tells us that Bing might make a decision, and might use something like social network rankings as an importance metric in deciding which URLs to prioritize in a crawl list. These rankings might be based upon things such as how active a person is in the social network, how active they are with respect to a search engine, how many connections do they have in the social network, and similar signals.

The patent application is:

[Prioritizing Crawl Lists Using Social Networking Rankings](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120284251%22.PGNR.&OS=DN/20120284251&RS=DN/20120284251)
Invented by Kevin Haas, Yi-An Lin, Shankar Kalyanaraman, and Sameer Indarapu
Assigned to Microsoft
US Patent Application 20120284251
Published November 8, 2012
Filed: May 6, 2011

Abstract


> Methods, systems, and computer-storage media having computer-usable instructions embodied thereon, for prioritizing crawl lists based on social networking rankings are provided. Various scores are associated with users based on a variety of factors including activity levels with respect to social networking services, activity levels with respect to search engines, and interactions with other users in a social networking environment.
>
> The scores are used to compute a ranking for the users and, based on the rankings, a crawl list is prioritized such that content associated with the social networking environment is crawled at an appropriate time.

The patent also provides a way to temporarily boost a social network ranking for someone who is fairly new to a social network by using scores of people they may be connected to as they start out to impute a score for that new user.

**Factors that might go into creaing a social network ranking**

Some of the signals that might be looked at to derive a social ranking:

***Activity on the social network*** – Can include messages sent or received, number of friends, identity of friends on the network, number of times the user logs in, number of posts sent or received, and so on. Someone with a higher level or activity will have a higher score than someone with a lower level of activity.

***Activity with respect to a search engine*** – Search queries performed, number of times user logs into the search engine, and so on. I’m not sure why a person’s use of a search engine should influence the priority of their social networking content being crawled. Sounds a little like Microsoft might be trying to reward people for using Bing.

***Rankings of Connections*** – The social networking rankings of people whom you may be connected to may also influence your social networking ranking.

These social networking rankings may be in a constant state of flux as social and search activity vary, and the people you’re connected to change.

Demographic information about a person, such as careers and locations and interests, might be taken from places like their social networking profile, and may also influence their social ranking.

**Take Aways**

I’ve written a number of posts about how someone might develop a reputation score or Author Rank score in Google, which could influence the rankings of their social content. I’ve also written a few posts on a similar topic from Microsoft, such as [Microsoft Weighs in on Ranking Authors in Social Networks](https://www.seobythesea.com/2012/05/microsoft-on-ranking-authors/). But those were about ranking social networking content.

This patent filing is about crawling and indexing social content, and the decision of which content to crawl first. Since social networks move very quickly, and provide the most value in appearing quickly in search results, having an intelligent approach to crawling that content can be really important. This is especially true with recency sensitive content posted on a social network, like content about breaking news and natural disasters.

Basing a crawl priority on a social networking ranking sounds like a good idea. It’s better to prioritize content from people who are active, and who post things that are meaningful and interesting.

I wouldn’t be surprised if Google also may base the way they prioritize the crawling of social content upon reputation scores of users or author rank or something similar that doesn’t have the benefit of using PageRank as an importance metric.
