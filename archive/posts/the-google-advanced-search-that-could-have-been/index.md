---
title: "The Google Advanced Search that Could Have Been"
source_url: "https://www.seobythesea.com/2007/11/the-google-advanced-search-that-could-have-been/"
slug: "the-google-advanced-search-that-could-have-been"
date_published: "2007-11-13T17:37:27+00:00"
date_modified: "2020-07-01T14:08:17+00:00"
author: "Bill Slawski"
---

## A Google Advanced Search that Never Happened

If you could limit the results of a search at Google to a specific point of view, would you? Depends upon what I mean by point of view, doesn’t it? I’ll get to that below.

A Google patent granted this week shows a screenshot of an advanced search that could have been:

There are a number of interesting features in this advanced search that would enable searchers to filter or expand search results in response to their queries.

These would require a searcher to make some choices as to what URLs are looked at (as on-topic” or “off-topic”), or categories, or keywords, enabling them to add some or reject others.

These choices are referred to in the patent as a “point of view search,” and they might also work by looking at a searcher’s past searching and browsing history, or browser favorites, or other information that isn’t expressly defined by a searcher. (See the checkbox in the image for “include stored data?”)

The patent was originally filed in March 2003, and it’s difficult to tell if aspects of it will be implemented, or if parts of it already have been in some manner, such as part of Google’s personalized search.

[Systems and methods for performing point-of-view searching](https://patents.google.com/patent/US7296016B1/en)
Invented by Martin Farach-Colton, Monika H. Henzinger, and Bay-Wei Chang
Assigned to Google
US Patent 7,296,016
Granted November 13, 2007
Filed: March 12, 2003

Abstract


> A system provides search results relating to a point-of-view (POV). The system obtains a search query and POV data. The system generates a list of documents based on the search query and filters the list of documents based on the POV data. Alternatively, the system may perform a search based on the search query and the POV data to generate the list of documents. In either case, the system then presents the list of documents as the result of the search.

A point-of-view (POV) might be defined by the key words that a searcher choses, URLs for pages that they select or reject, or other information such as:

1. A user’s browsing history (including information such as sites or documents visited and amount of time spent),
2. Categories specified by a user or otherwise derived from user interactions such as search history, browsing history, etc.,
3. Word vectors derived from sites or documents visited and various well-known information retrieval (IR) techniques,
4. etc.

The patent tells us that POV searching may also be thought of as personalized searching, and POV data may correspond to personalization data such as the types of information described above or many other types of data.

POV data could also come from the user, from the browser software, or from other sources.

In one version, POV data may include URLs that act as examples of on-topic or off-topic documents. Here are places were URLs could come from:

1. *Specifying positive and negative URLs* — A user of this system might specify URLs that are related to jaguars, but include negative URLs related to Jaguar brand cars so that those results aren’t shown.
2. *Present Page URLs* — Using a toolbar search, the URL of the page presently being displayed by the browser might be seen as an example of an on-topic URL.
3. *Users “bookmarks” or “favorites”* saved in a browser could also be used as examples of on-topic URLs. These could be automatically collected by the search engine or presented to the searcher to select one or more URLs to use in a search.
4. *Previously selected URLs* — pages that a searcher has previously clicked upon in search results within a top certain number of results for a previous query, or pages that the searcher has visited recently in some time period, or URLs that can be somehow determined to be related to these URLs.

The term “recently” might be defined a few different ways, like within a certain period of time-based upon a user’s browsing habits and browsing history, or it could refer to a certain number of the last documents viewed by the searcher.

It’s possible that these “recent” documents might be filtered to determine if they are on-topic, or even clustered to see what clusters of URLs are relevant to a query so that those can be used.

**How the set of on-topic URLs might be expanded**

The search engine might attempt to expand the set of on-topic URLs to provide more results to a searcher by:

1. Obtaining a few key words, either from the examples of on-topic URLs or from the user.
2. Performing a search to obtain a collection of additional on-topic URLs.
3. Identifying URLs that are co-cited with the set of on-topic URLs, and adding the co-cited URLs to the set of on-topic URLs.

**Expanding POV data with words that identify on-topic or off-topic documents**

The search engine may obtain additional words from an example set of URLs, from the user (either explicitly or implicitly), or from personalization data. A user then could specify positive and/or negative key words that identify URLs that are on-topic or off-topic.

**Expanding POV data with categories.**

These categories may be similar to those seen in hierarchical directories, such as the open directory, which could be maintained by the search engine. For each of the categories in that hierarchical directory, the search engine may record a list of URLs and other information that corresponds to that category. These categories could be presented to a searcher so that they could select the ones that are relevant.

**Expanding POV data with user information**

Point of view data could be expanded with the use of URLs taken from previous searches, and keywords taken from documents, or anchor text pointing to those documents, that a user clicked upon in search results, or that appeared in the top number of results for a search by the user.

These URLs and words could be stored in a database so that when a user performs a POV search, the keywords can be used to automatically augment the query.

For example, if someone had previously performed a search for “tigers” and “elephants,” the term “mammals” might be one of the keywords extracted based on their searches. When they later search for “jaguar,” then “mammals” might be automatically added to their search query.

**Conclusion**

Will we see additions to Google’s advanced search such as the “on Topic” and “Off-Topic” URL fields as shown in the screenshot? I’m not sure that we will.

The checkbox in the image labeled “include stored data” really doesn’t make it clear that they will be using personalized information for a searcher. I think that having someone sign in to personalized search is a better alternative.

Using categories in a search might be difficult, especially since many pages can fall under more than one category.

The patent goes into more detail on how pages might be ranked in these searches and has an interesting discussion of PageRank and how on-topic pages could be ranked higher than off-topic pages.
