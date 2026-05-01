---
title: "Reranking Search Results Based Upon Personalization and Diversification"
source_url: "https://www.seobythesea.com/2007/12/reranking-search-results-based-upon-personalization-and-diversification/"
slug: "reranking-search-results-based-upon-personalization-and-diversification"
date_published: "2007-12-24T16:58:50+00:00"
date_modified: "2020-06-19T15:53:08+00:00"
author: "Bill Slawski"
---

In my last post, I wrote about how Microsoft might use [an automated method to identify blogs](https://www.seobythesea.com/2007/12/do-search-engines-hate-blogs-microsoft-explores-an-algorithm-to-identify-blog-pages/), and how that method might work.

I wondered why they might be interested in doing that, and received some great comments on the post. One reason I that appealed to me is that a search engine would want to understand better what results it is showing searchers so that it might be able to provide diverse and even personalized results to people using that search engine.

Of course, I’m concerned about what that might mean to what we see in search results, and how it might act to shape those results.

Another Microsoft patent application published last week and filed within a couple of days of the application on identifying blog posts looks at how it might present diverse results to searchers.

Two of the listed inventors also published a white paper on the topic, which goes into more of their thoughts on diversifying and personalizing search results. It makes for a good piece of companion reading to the patent filing and presents some overlapping ideas and approaches. See: Improving Personalized Web Search using Result Diversification (pdf).

The patent filing is:

[Diversifying Search Results for Improved Search and Personalization](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070294225.PGNR.&OS=dn/20070294225&RS=DN/20070294225)
Invented by Filip Radlinski, Susan T. Dumais, and Eric J. Horvitz
Assigned to Microsoft
US Patent Application 20070294225
Published December 20, 2007
Filed: June 19, 2006

Abstract


> The claimed subject matter provides systems and/or methods that facilitate diversifying search results to improve searching and/or personalized searching. An interface component can receive a query. Additionally, a result diversification component can modify the diversity of a set of search results obtained by a search engine in response to a query based at least in part upon one or more dimensions of diversity.
>
> The dimensions of diversity can include document topic, document type, document genre, the domain of document, document age, the location associated with the document, commercial characteristics of the document, user intent, and the like.

While search engines attempt to present web pages based upon such things as popularity, relevance, or authoritativeness, the results shown to searchers may fail to show results that match the intent of that searcher.

They could refine their query to locate the information they want to find, and that often happens. A search engine could take advantage of data collected about how people refine their searches and use that data to help other searchers, by making certain that results are diverse enough to possibly satisfy their needs.

Paying attention to the diverse needs of different searchers also brings the search engine away from serving the same results to different people with different user needs, circumstances, interests, and contexts.

The patent filing tells us that it might consider a number of factors when deciding how diverse a set of results to show. These can include:

- Document topics
- Different user intents
- The ages of documents
- Reading levels of a document
- Document formats (HTML, PDF, sound files, video files, picture files, presentation files, blog posts, news articles)
- Genres (such as an individual’s homepage, a product selling page, a department homepage)
- Domains that documents are located upon
- Locations associated with the documents
- Commercial characteristics (or intent) of the documents
- The language that a document is written in
- What sites the document might be linked to
- How popular the document might be, and
- Other characteristics of potential results.

So, search results might be constrained based upon a number of these different factors. For instance, if all of the top results for a search were blog posts, the results might be reranked to show some news articles or a video. If the query was for “traffic,” the results shown might involve the band and the movie of that name as well as car and airplane-related pages.

**User Intent**

One of the diversity factors is user intent, which might be determined by looking at query-query reformulation patterns – when lots of people search for one thing, look at the results, and then modify their query to make it more specific or more general.

The most frequent reformulations might be chosen to provide a diversity of results based upon what people are looking for when searching for specific terms.

If the search engine were to consider personalized information, such as a computing context, a history of previously encountered content and/or web pages, user interactions with content or applications, a profile of user interests, and/or demographic information, it might also be able to provide diverse results that also matched some information about what the searcher might be looking for.

User input might also be involved in altering the level of diversity for a set of results.

**Personalization and Diversification**

This system could be used on a desktop type search, that would look at data from a personal computer, an intranet, and the public Web.

It could also include a personalization component that can generate personalized results from a diverse set of search results. It might also include a profile store to hold information for personalization for a particular user.

Some potential parts of a personalization component:

1. A personalized re-ranking algorithm corresponding to a particular user.
2. The creation of utilization of a statistical model pertaining to an individual user, reflecting that person’s interests based upon such things as:
3. 1. computing context,
  2. a history of previously encountered content and/or web pages/sites,
  3. user interactions,
  4. a profile of user interests (e.g., explicitly and/or implicitly obtained),
  5. demographic information associated with the user, and;
  6. and other factors.

**User Intent and Similar Users**

In addition to looking at query-query reformulations from a large number of searchers, this system might look at information collected about the searcher, and compare it to query-query reformulations from other searchers who share similar profiles, interests, and contexts.

The ability to understand and classify different types or characteristics of a document, such as whether it is a blog or news article, or sales page enables a search engine to provide a diverse set of results to a searcher. A personalization feature added on top of that allows the search engine to provide diverse results that may come closer to what someone might be searching for.
