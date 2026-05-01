---
title: "Google and Personalization in Rankings"
source_url: "https://www.seobythesea.com/2007/11/google-and-personalization-in-rankings/"
slug: "google-and-personalization-in-rankings"
date_published: "2007-11-14T19:59:54+00:00"
date_modified: "2020-07-06T15:30:03+00:00"
author: "Bill Slawski"
---

A couple of months back when I was traveling, I wrote a quick post about a new PageRank patent issued to Stanford University on PageRank and asked if anyone would be interested in trying to break it down to see if it had anything interesting in it. David Harry took a look in a post titled Tale of the two PageRank Patents.

David and I have been exchanging some emails since on some of the patents that we see, and an area that we are both fascinated with are some that delve into a kind of a behind the scenes personalization. He has written a couple of very thoughtful and interesting posts involving personalization at Google recently, which are worth checking out:

- I have seen the future and it is VERY personal
- Why Google Personalized Search is Important to You

**Personalized Search Goes Beyond Google’s Personal Search**

This isn’t the kind of [personal search](https://www.seobythesea.com/2006/10/google-personalization-methods/) that you log into at Google, because chances are that it will happen whether you are logged in or not.

This isn’t the kind of personalization that focuses solely upon your [Web History](https://www.seobythesea.com/2007/04/googles-web-history-patent-applications/), because it looks at more than just your browsing and searching activities.

This isn’t the kind of personalization that relies upon which pages you have bookmarked in a Google bookmark program, though that kind of activity could be one of many signals that could be used.

**Personalized Search Behind the Scenes**

This kind of personalization that I’m talking about, and that Dave is talking about in his latest post, is the kind that could account for a growing influence on what you see when you search, regardless of whether or not you are logged into Google.

I described something like it in a post about Microsoft using [Personalization Through Tracking Triplets of Users, Queries, and Web Pages](https://www.seobythesea.com/2007/03/personalization-through-tracking-triplets-of-users-queries-and-web-pages/)

I wrote about it concerning Google in [How Previous Searchers’ Queries Could Be Used to Re-Rank Your Search Results](https://www.seobythesea.com/2007/09/how-previous-searchers-queries-could-be-used-to-re-rank-your-search-results/), which discusses how a search engine might expand your queries based upon other things that you may have searched for in the same session based upon a language model centered around the queries themselves.

That kind of model created for queries could also be created for searchers, who could be clustered together with other searchers who seem to choose similar results for certain queries, in [Google Patent Application Clustering Users for Personalization](https://www.seobythesea.com/2007/03/google-patent-application-clustering-users-for-personalization/)

We are also seeing [web site traffic profiles](https://www.seobythesea.com/2007/04/google-at-the-crime-scene-profiling-websites-estimating-traffic-and-combating-click-fraud/), and profiles created to understand sites at the internal site search level as well as group profiles created for individuals searching at Google and browsing the Web — both of which I described in [Google’s Profiling Both Users and Sites?](https://www.seobythesea.com/2007/10/googles-profiling-both-users-and-sites/)

**Understanding User Intent Through Statistical Models**

We often talk about the ranking of Web pages with terms like PageRank or relevancy, meaning how relevant terms on a page might be to a query used by a searcher.

Many patent filings coming from Google refer to statistical models, like a probabilistic model that can learn about how words are related to each other, and how pages might be similar. Those models might tell us something about searchers.

A Google patent that I’ve written about here before, but haven’t described in very much detail provides some nice details on a model like that:

[Method and apparatus for learning a probabilistic generative model for text](https://patents.google.com/patent/US20070208772A1/en)
Invented by Georges Harik and Noam M. Shazeer
US Patent Application 20070208772
Published September 6, 2007
Filed: April 27, 2007

Abstract


> One embodiment of the present invention provides a system that learns a generative model for textual documents. During operation, the system receives a current model, which contains terminal nodes representing random variables for words and cluster nodes representing clusters of conceptually related words.
>
> Within the current model, nodes are coupled together by weighted links, so that if a cluster node in the probabilistic model fires, a weighted link from the cluster node to another node causes the other node to fire with a probability proportionate to the link weight.
>
> The system also receives a set of training documents, wherein each training document contains a set of words. Next, the system applies the set of training documents to the current model to produce a new model.

The patent tells us of some possible uses of such a model:

1) It can be used to guess the concepts behind a piece of text, and those concepts can be shown to a user to allow them to better understand the meaning behind the text.

2) It can be used to compare words and concepts between a document and a query. As an information retrieval scoring function, that can be helpful when running a search engine.

3) It can be used to identify clusters of different concepts or meanings for a specific query. A search for “java” could result in clusters related to a programming language, or coffee, or an island of that name. If a search engine understands that such clusters exist, it could show results that break down results shown to a searcher, in a percentage related to the number of different clusters there are, and how large or small each cluster may be. This could mean that there is a diversity of results for a search.

4) It can be used to comparing the words and concepts between a document and an advertisement. This might provide an estimate of how well an advertisement might perform, and it might help decide which ads to show on which pages.

5) It can also be used to comparing the words and concepts between a query and an advertisement, for ads that are served when certain terms are searched for at the search engine. So, a search for “java” might show many programming-related results, fewer coffee results, and perhaps some travel ads.

6) It’s also possible to compare the words and concepts between two documents, to see how similar or different they are, and know-how tightly they should be clustered, if at all.

A few others mentioned include a way to possibly filter some results, expand queries, and understand whether a particular word is a misspelling of another word.

How does this statistical model learn about such things?

The model is one part of this “behind the scenes” personalization that I write about above. The patent application describes how user query sessions and searching activities can be one way for such models to learn.

I’m going to return the ball to David for him to write some more on this kind of personalization, but I’ll have more on some of the other documents from Google that discuss how user data may be used by a search engine through models that look at probabilities.

David wrote at the end of his last post that he is going to be writing about things that you can do in response to this move towards personalized search. I’m looking forward to that post.
