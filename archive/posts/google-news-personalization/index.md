---
title: "Google News Personalization"
source_url: "https://www.seobythesea.com/2007/04/google-news-personalization/"
slug: "google-news-personalization"
date_published: "2007-04-04T20:12:45+00:00"
date_modified: "2020-07-07T06:43:59+00:00"
author: "Bill Slawski"
---

Ever wonder how Google’s News Personalization works? The Google News Help section on [Personalized News](http://web.archive.org/web/20080316082814/http://www.google.com/support/News/bin/topic.py?topic=8861) provides a lot of details, but a new paper from Google on the topic delves even deeper:

[Google News Personalization: Scalable Online Collaborative Filtering](https://www2007.org/papers/paper570.pdf) (pdf)


> In this paper we describe our approach to collaborative filtering for generating personalized recommendations for users of Google News.

There isn’t just one method of news personalization involved in the process, and they give us some of the details:


> We generate recommendations using three approaches: collaborative filtering using MinHash clustering, Probabilistic Latent Semantic Indexing (PLSI), and covisitation counts. We combine recommendations from different algorithms using a linear model.

How well might this approach to personalization work with something other than news? Looks like they are trying an approach that can be used in other ways:


> Our approach is content-agnostic and consequently domain-independent, making it easily adaptable for other applications and languages with minimal effort. This paper will describe our algorithms and system setup in detail, and report results of running the recommendations engine on Google News.

**Collaborative Filtering**

A content-based filtering system for search aims to match keywords from queries to those keywords appearing on pages. Personalized news goes beyond matching keywords, or looking at similar items:


> Collaborative filtering is a technology that aims to learn user preferences and make recommendations based on user and community data. It is a complementary technology to content-based filtering (e.g. keyword-based searching). Probably the most well-known use of collaborative filtering has been by Amazon.com where a user’s past shopping history is used to make recommendations for new products.

A couple of unique challenges faced the team working on Google News personalization. One of them was making sure that this system could be scalable. The other was that because news items are ever-changing, this churning of pages requires that the recommendations models used need to be constantly rebuilt.

While Amazon’s recommendation system may be on a similar scale, the items that are recommended by their system don’t change at the same pace.

This news personalization method was tested over 5-6 months with millions of users. The methods that were used to provide personalized news results might also be used to personalize search results for images, music, and videos in the future.
