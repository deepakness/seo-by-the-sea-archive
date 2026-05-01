---
title: "Google Patent Application Clustering Users for Personalization"
source_url: "https://www.seobythesea.com/2007/03/google-patent-application-clustering-users-for-personalization/"
slug: "google-patent-application-clustering-users-for-personalization"
date_published: "2007-03-12T02:28:27+00:00"
date_modified: "2020-07-07T06:46:06+00:00"
author: "Bill Slawski"
---

It’s beginning to become more and more evident that search engines are transforming from information retrieval tools into recommendation devices.

Rather than returning results that are the most “relevant” for a query, their focus has become more of providing a result that might match the intent behind a query, and provide results that they believe may most likely match the interests of a searcher. This is one approach to the personalization for searchers and search engines.

My last post was on a [method of personalization](https://www.seobythesea.com/2007/03/personalization-through-tracking-triplets-of-users-queries-and-web-pages/) that Microsoft has described in a patent filing.

A recent patent application from Google describes a way of grouping together searchers that it believes have similar interests, to make recommendations to them based upon choices made by others who share interests. It sounds more than a little like the Microsoft patent application.

**Clustering Users to Make Recommendations**

When a search engine might want to personalize results for its users, one of the steps that it might try to take is to identify those users and compare them and their interests to other users of the search engine.

A method of doing that involves grouping information about those users into clusters. One well-known method in attempting to achieve user personalization involves collaborative filtering, where users are clustered together, and provided with recommendations of items that other people in the user’s cluster have expressed an interest in. But that’s not the only possible method of using collaborative filtering.

The conventional approach to understanding when a user has expressed an interest in something is to track how that person may have interacted with it, such as whether they clicked upon it, purchasing it, or adding it to a shopping cart.

Recommendations based upon clustering users can take a variety of forms, such as presenting those recommendations to the user as part of search results, showing as news stories the user may want to read, identifying items the user may want to purchase, and so on. These recommendations may be kept separate from search results that aren’t based upon clustering.

[Scalable user clustering based on set similarity](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070038659%22.PGNR.&OS=DN/20070038659&RS=DN/20070038659)
Invented by Mayur Datar and Ashutosh Garg
Assigned to Google
US Patent Application 20070038659
Granted February 15, 2007
Filed August 15, 2005

Abstract


> Methods and apparatus, including systems and computer program products, to provide clustering of users in which users are each represented as a set of elements representing items, e.g., items selected by users using a system.
>
> In one aspect, a program operates to obtain a respective interest set for each of multiple users, each interest set representing items in which the respective user expressed interest; for each of the users, to determine k hash values of the respective interest set, wherein the i-th hash value is a minimum value under a corresponding i-th hash function; and to assign each of the multiple users to each of the respective k clusters established for the respective user, the i-th cluster being represented by the i-th hash value.
>
> The assignment of each of the users to k clusters is done without regard to the assignment of any of the other users to k clusters.

The listed inventors are co-authors on a paper that is scheduled to be published sometime this month and presented at the 16th International World Wide Web Conference (WWW2007). The abstract for the paper seems to cover a lot of the same ground as this patent filing.

[Google News Personalization: Scalable Online Collaborative Filtering](https://www2007.org/papers/paper570.pdf)

Authors:

Abhinandan Das (Google Inc.)
Mayur Datar (Google Inc.)
Ashutosh Garg (Google Inc)
Shyam Rajaram (the University of Illinois at Urbana Champagne)

Abstract:


> Several approaches to collaborative filtering have been studied but seldom have the studies been reported for large (several millions of users and items) and dynamic (the underlying item set is continually changing) settings.
>
> In this paper, we describe our approach to collaborative filtering for generating personalized recommendations for users of Google News. We generate recommendations using three approaches:
>
> collaborative filtering using MinHash clustering,
>
> Probabilistic Latent Semantic Indexing (PLSI), and
>
> covisitation counts.
>
> We combine recommendations from different algorithms using a linear model. Our approach is content-agnostic and consequently domain-independent, making it easily adaptable for other applications and languages with minimal effort. This paper will describe our algorithms and system setup in detail, and report results of running the recommendations engine on Google News.
