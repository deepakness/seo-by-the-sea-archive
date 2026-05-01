---
title: "Search Engines, Personalization, and Trustworthy Recommender Systems"
source_url: "https://www.seobythesea.com/2007/02/search-engines-personalization-and-trustworthy-recommender-systems/"
slug: "search-engines-personalization-and-trustworthy-recommender-systems"
date_published: "2007-02-05T16:19:41+00:00"
date_modified: "2020-07-07T06:49:43+00:00"
author: "Bill Slawski"
---

Is a search engine a recommendation system, or is it a way of finding all documents that might contain the use of keywords that we search for?

When we talk about “relevance” while conducting a Web search, we might not be talking so much about relevance to the query that we used to search with, as much as we are the relevance to the intent behind those words. That may not be how most users of Google or Yahoo would articulate what a search engine does.

But the combination of ranking algorithms that a search engine uses to determine the importance and relevance of pages do determine which pages containing our queries are shown to us first. How will efforts to personalize search results affect those rankings, and how trustworthy are they as recommendations?

As search engines move more and more [towards personalization](https://searchengineland.com/google-ramps-up-personalized-search-10430), it might make sense to understand some about some of the strengths and weaknesses of recommendations systems. The following recent article, by many DePaul University researchers, delves into that topic.

[Towards Trustworthy Recommender Systems: An Analysis of Attack Models and Algorithm Robustness](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.329.4891&rep=rep1&type=pdf)

The authors of the paper, from the Center for Web Intelligence at Depaul, are [Bamshad Mobasher](http://facweb.cs.depaul.edu/mobasher/), [Robin Burke](http://web.archive.org/web/20161226154434/http://josquin.cti.depaul.edu:80/~rburke/), Runa Bhaumik, and Chad Williams.

A couple of paragraphs from it discuss Google as a recommendation system, but it mostly talks about some of the potential strengths and weaknesses of recommendations systems, and how they might be subject to things such as biased profiles and other vulnerabilities. What I like about it is that it starts building a framework for ways to discuss issues that might arise around personalization through the use of collaborative filtering.

It’s kind of interesting to hold that paper up to the “related work” section of a Google paper which describes a way of providing personalized web alerts to people, [Retroactive Answering of Search Queries](http://web.archive.org/web/20160520042026/http://www2006.org/programme/files/pdf/3055.pdf), which describes how Google might look at those users past search histories to try to understand their standing interests and send them alerts that might be related to those histories. Here’s a snippet from that section:


> Finally, many papers have explored the personalization of web search based on user history (e.g., [9, 11, 18, 19]). Our approach differs from existing ones in two basic ways. First, our technique of identifying quality URLs does not rely on traditional collaborative filtering or data mining techniques. We note, however, that these techniques can be used to complement our approach – for example, we can be more likely to recommend a URL if it is viewed often by other users with similar interests. Second, the QSR system will only recommend a URL if it addresses a specific, unfulfilled need from the user’s past. In contrast, existing systems tend to simply recommend items that are like ones the user has already seen – an approach that works well in domains such as e-commerce, but that is not the aim of our system.

This paper on sending users web alerts related to their standing interests (as opposed to alerts based upon specific keywords), that is calculated from those user’s search histories is worth a good look if you haven’t had a chance to read it before.

It puts into plain English a lot of the ideas that are explored in one of Google’s more detailed patent applications on personalized search: [Systems and methods for analyzing a user’s web history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224583%22.PGNR.&OS=DN/20060224583&RS=DN/20060224583). (Added – My post on [Google Personalization Methods](https://www.seobythesea.com/2006/10/google-personalization-methods/) goes into some more detail on how the processes described in that patent application, and many related patent filings may act to rerank search results.)
