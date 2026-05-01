---
title: "Ask.com Patent on Reranking by User Affinity"
source_url: "https://www.seobythesea.com/2006/12/askcom-reranking-by-user-affinity/"
slug: "askcom-reranking-by-user-affinity"
date_published: "2006-12-19T13:35:59+00:00"
date_modified: "2018-02-10T15:35:32+00:00"
author: "Bill Slawski"
---

I wrote a post yesterday at Search Engine Land, titled [Why Do People Google Google? Understanding User Data to Measure Searcher Intent](https://searchengineland.com/why-do-people-google-google-understanding-user-data-to-measure-searcher-intent-10091), which described a presentation by Dan Russell of Google, on how the Google team uses a lot of testing, and analysis of log files to try to shape and improve the services that they provide to users of Google.

A new patent from Ask.com also looks carefully at how people use their search engine, and provides a method of reranking search results based upon some of the user data that they receive.

[Methods and systems for providing a response to a query](https://patents.google.com/patent/US7152061B2/en)
Invented by Andy Curtis, Alan Levin, and Apostolos Gerasoulis
Assigned to IAC Search & Media, Inc.
US Patent 7,152,061
Granted December 19, 2006
Filed: September 16, 2004

Abstract


> Methods and systems for providing a response to a user’s query based on other users’ picks. For one embodiment of the invention, user responses are correlated to determine an affinity among users. User affinity is then used to modify the presentation of the search results. For one embodiment the location of other user’s is used to modify the presentation of the search results.

**Summary of the process**

The method detailed in the patent application can be broken down into four parts:

- Search results are presented to a number of searchers in response to a query,
- Those results and the choices of the searchers are monitored,
- A determination is made as to whether there is an affinity of some type between one searcher, and others who performed a search using the same query terms, and;
- The order of results may be modified based upon a discovery of such an affinity between that searcher and other users.

Modifying search results based upon an affinity between the first user and other users involves:

- Assigning a weight to each query and pick;
- Calculating an affinity score based upon the weighted queries and picks; and,
- Reordering and presenting the search results based upon the affinity score.

So, the behavior of a searcher is monitored, and if they are conducting a lot of the same searchers, and choosing the same results as previous searchers, they may see some modifications of results of future searches within a session based upon choices of those earlier searchers.

Information such as a location based upon the searcher’s IP address could also be considered an affinity factor for purposes of this patent. For example, if someone in Wyoming searched for “State income tax forms,” they might be shown some pages for Wyoming state income tax forms, because most searchers from Wyoming searching for state tax forms chose those pages. Someone from Ohio searching for “OSU” might be shown “Ohio State University” results, while someone from Oklahoma perfoming the same search could see “Oklahoma State University” pages.

A large number of examples are provided involving specific queries (windows, parties, Buffalo) as well as spell corrections.

The patent also details how this process could be used in a personalized search were results aren’t returned based upon some implicit or explicit profile of a person, but rather upon their affinities to other searchers.

**Conclusion**

I’ve provided a very simplified view of the processes in this patent. The document goes into considerably more detail, and is a good illustration of how data collected by a search engine about how people use the search engine may be used to provide future results to other searchers.
