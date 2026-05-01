---
title: "How Google May Identify Navigational Queries and Resources"
source_url: "https://www.seobythesea.com/2012/12/navigational-queries-resources/"
slug: "navigational-queries-resources"
date_published: "2012-12-09T19:49:46+00:00"
date_modified: "2020-06-21T19:50:42+00:00"
author: "Bill Slawski"
---

## What are Navigational Queries?

I sometimes see people say that paid search is a great way to do keyword research for SEO, but I disagree with that statement. Paid search primarily focuses upon transactional keywords – usually, the terms chosen are the kind that matches an intent to buy something, download something, or take some other kind of action. I’ve asked many people who do search engine advertising and focus on Adwords if they ever target informational queries, and most of the time the answer has been no.

Often searchers will do some research on a product or service before they decide who to buy from. They will perform research to find what kinds of features are available for different products, try to find reviews or opinions from others, They may try to compare different manufacturers as well. These types of queries are more informational, and the same searcher will conduct these types of queries that evidence an informational intent before they begin to consider a query with transactional intent.

![An image of a mariner's compass from the Library of Congress.](media/google-navigational.jpg)

There’s another type of query that plays a strong role in search and SEO. People often search for pages that they expect to find on the Web, likely from a site that they know exists or assume should exist. For instance, if I search for [IBM services], I’m likely searching for a page on the IBM website that I expect will be something I can find easily. If I look for [WordPress support], chances are in most cases that I want a page on one of the WordPress sites that can answer my questions about the software or the service. If I type [ESPN] into a Google toolbar, I’m expecting that the ESPN website will be the first result that shows up. These are navigational queries where I know there is a page about what I am looking for, and my search is to find that page.

![The top result on a search for \[ESPN\] is the ESPN home page and site links.](media/google-espn.jpg)

How does Google determine what queries might be navigational and that a resource might be a great response to it? A Google patent granted last week describes an algorithmic approach to making those determinations. It begins by looking at queries in search sessions.


### Search Sessions

When someone searches, they may enter multiple searches into a search engine looking for answers to their informational or situational needs. A search engine might consider the sequence of queries as a search session, with all of those searches related to one another. Is this something that a search engine can take advantage of?

And how exactly might Google decide what a search session is exactly?

A patent granted to Google last week explores how to use query sessions to identify Navigational Queries and Navigational Resources.

*Navigational queries* are ones that seem to be looking for specific pages in response to those queries, and a *navigational resource* is a specific page being looked for.


## how does a search engine determine that a sequence of queries might be part of a query session?

The patent points to at least three different ways it might make that decision, though also explicitly states that other methods might be used, too:

***Revision Time Window*** – A search session might be defined by queries submitted within a revision window period between the input of a query and a subsequent query. Someone submits a query, and a current search session is initiated. If the searcher doesn’t submit another query within a certain amount of time, such as five minutes, the session might be closed.

***User Defined Session Period*** – A search session might be defined by a searcher taking specific actions, such as logging into and then out of the search engine.

***Common Terms between Queries*** – A search session could be defined by common terms between a new search query and a previous query from the same device. These common terms would contain either some of the same words or a word within the same topic cluster.

Queries are stored in query logs, showing an initial query and revised queries, and the order that a search submitted them during a search session. In addition to looking at what queries might be submitted in a query session, Google also keeps an eye on what happens after each query is submitted, including clicks on results as users select pages in response to their queries.


### Query Logs and Click Logs to Map Queries to Resources

For every query in a query session, there’s an associated set of search results filled with a corresponding set of resources. The results that are clicked upon by searchers are collected in a click log, along with an indication of whether the click was a long click or a short click.

A long click is a click-through that either result in further clicks on the page in question, or a visit that lasts longer than a certain amount of time, such as 30 seconds.

A short click is a click-through to a page where there aren’t any subsequent clicks on that page during that session or is shorter than a certain amount of time, such as 30 seconds.

There may be other ways of deciding upon what a long click or short click might be. For example, in my recent post on [reachability scores](https://www.seobythesea.com/2012/11/google-reachability-scores/), long clicks and short clicks were also used as indications of whether or not people found value in pages linked to. Visits to pages with videos that were shorter than 30 seconds were still considered long clicks if the videos were less than 30 seconds long, and a person watched the whole video.


### Quality Scores for Navigational Queries and Navigational Resources

The patent tells us that other information might also be used to decide whether or not a page is a navigational result as well, including a quality score for the page, characteristics of the URL for the page, and the click-throughs.

A quality score used to determine whether a query is a navigational query can include an information retrieval score for the results that appear for the query as well as characteristics of the URLs that show up for it as well. For example, the shorter the length of the URL and lower the directory depth of the URL (the closer to the root directory) the higher the quality score of the query.

Queries could be mapped to pages during search sessions based upon information in the query logs and click logs based upon user actions, such as the selections of pages, and whether or not clicks to them were long clicks or short clicks.

If this kind of user behavior is aggregated, and people perform similar query revisions for specific queries and tend to end up at the same pages, or resources, both the queries and the resources pointed to might be seen as navigational queries and navigational resources. If any of the results for the query also tend to link to a specific page identified as potential navigational resources, then it’s more likely to be seen as one by Google.

If Google decides that a query is a navigational query, and a result for it is a navigational result, the patent tells us that the page identified as a navigational result might be re-ordered in search results so that it is “always shown on first-page search results provided for the user session.”

So, a navigational result for a query doesn’t necessarily have to be the first result for that query but may be shown on the first page of search results from Google.

The navigational queries patent is:

[Navigational resources for queries](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08326826&OS=PN/08326826&RS=PN/08326826)
Invented by Trystan Upstill, Henele I. Adams, Eric Lehman, Neesha Subramaniam, Wensi Xi, Sundeep Tirumalareddy
Assigned to Google
US Patent 8,326,826
Granted December 4, 2012
Filed: January 15, 2009

Abstract


> Methods, systems, and apparatus, including computer program products, for identifying navigational resources for queries. In an aspect, a candidate query in a query sequence is selected, and a revised query after the candidate query in the query sequence is selected.
>
> If a quality score for the revised query is greater than a quality score threshold and a navigation score for the revised query is greater than a navigation score threshold, then a navigational resource for the revised query is identified and associated with the candidate query. The association specifies the navigational resource as being relevant to the candidate query in a search operation.

The navigational queries patent provides some additional details on how navigational queries and navigational resources might be identified. Some posts I’ve written in the past on navigational queries include:

- [Google’s Quality Score Patent: The Birth of Panda?](https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/)
- [Microsoft on Navigational Queries and Best Match](https://www.seobythesea.com/2009/12/microsoft-on-navigational-queries-and-best-match/)
- [Redefining Navigational Queries to Find Perfect Sites](https://www.seobythesea.com/2008/03/redefining-navigational-queries-to-find-perfect-sites/)


### Take Aways

When searchers perform searches, the intent behind their search may determine what kinds of searches they perform. When they first start exploring a topic of type of product, their queries may be informational, as they attempt to learn more about a product or service. When they may be at the stage where they are likely to buy or perform some other kind of transaction, their queries might be transactional.

When a searcher is looking for information that they believe may exist already on the web, and have an idea of what page it might be on, or a good reason to believe that there should be such a page, their query could be considered to be navigational.

Someone can influence whether or not a page does appear as a navigational result, and the patent points at some of the signals that a search engine might look at in making that determination.

Are your pages showing up as navigational results being returned for navigational queries?

I’ve written a few posts about patents involving quality scores for organic SEO:

- 6/14/2011 – [Google’s Quality Score Patent: The Birth of Panda?](https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/)
- 12/9/2012 = [How Google May Identify Navigational Queries and Resources](https://www.seobythesea.com/2012/12/navigational-queries-resources/)
- 5/15/2013 – [How Google May Rank Web Pages Based on Quality Ratings](https://www.seobythesea.com/2013/05/google-rank-sites-quality-ratings/)
- 5/12/2015 – [How Google May Calculate a Site Quality Score (from Navneet Panda)](https://www.seobythesea.com/2015/05/google-site-quality-scores/)
- 6/22/2015 – [How Google May Classify Sites as Low Quality Sites](https://www.seobythesea.com/2015/06/how-google-may-classify-sites-as-low-quality-sites/)
- 7/30/2018 – [Quality Scores for Queries: Structured Data, Synthetic Queries and Augmentation Queries](https://www.seobythesea.com/2018/07/quality-scores-for-queries/)
- 9/21/2017 – [Using Ngram Phrase Models to Generate Site Quality Scores](https://www.seobythesea.com/2017/09/site-quality-scores/)
- 6/10/2019 – [How Google May Rank Some Results based on Categorical Quality](https://www.seobythesea.com/2019/06/categorical-quality/)

Last Updated June 26, 2019,
