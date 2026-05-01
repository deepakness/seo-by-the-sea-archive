---
title: "Search Suggestions from Previously Submitted Searcher Queries"
source_url: "https://www.seobythesea.com/2020/05/search-suggestions-from-previously-submitted-searcher-queries/"
slug: "search-suggestions-from-previously-submitted-searcher-queries"
date_published: "2020-05-11T13:15:22+00:00"
date_modified: "2021-07-14T14:14:20+00:00"
author: "Bill Slawski"
---

## Finding a Search Suggestion Patent about Previously Submitted Searcher Queries

I came across an interesting Search Engine Land post last week. I wanted to see if I could find a related patent from Google:

[Google is suggesting searches based on users’ recent activity](https://searchengineland.com/google-is-suggesting-searches-based-on-users-recent-activity-334309)

I tried search suggestions shown to the author of the Search Engine Land article. But Google would not return those. Google may be experimenting with a limited number of searchers instead of showing those results to all searchers. I did find a patent about similar search suggestions.

When Google shows search suggestions for something that you may have looked for in the past, that predicted query suggestion is likely related to a patent I’ve written about before. That patent was [Autocompletion using previously submitted query data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,740,780.PN.&OS=PN/9,740,780&RS=PN/9,740,780).

I wrote about an updated continuation patent but did not provide many details about how it works: [How Google Predicts Autocomplete Query Suggestions is Updated](https://gofishdigital.com/autocomplete-query-suggestions/).

Some interesting parts on identifying search suggestions and ranking them inspired me to write this post.


## Search Suggestions Based on Previously Submitted Query Data

This patent is about: “using previously submitted query data to anticipate a user’s search request.”

Google has a long memory. It remembers a lot about what someone might search for.

The description includes many assumptions search engineers make about searchers. Those are often a good reason to read through patents. Here are some from this patent that is worth thinking about:


> Internet search engines aim to identify documents or other items relevant to a user’s needs and present the documents or items in a manner that is most useful to the user. Such activity often involves a fair amount of mind-reading–inferring from various clues what the user wants. Certain clues may be user-specific. For example, the knowledge that a user is requesting a mobile device and knowledge of the device’s location can result in much better search results for such a user.
>
> Clues about a user’s search needs may also be more general. For example, search results can have elevated importance or inferred relevance if several other searches result in a link. If the linking results are themselves highly relevant, then the linked-to results may have particularly high relevance. Such an approach to determining relevance may use the assumption that if authors of web pages felt that another website was relevant enough to link to, web searchers would also find the site particularly relevant. In short, the web authors “vote up” the relevance of the sites.
>
> Other various inputs may work instead of, or in addition to, such techniques for determining and ranking search results. For example, user reactions to particular search results or search result lists may happen, so that results on which users often click will receive a higher ranking. The general assumption under such an approach is that searching users are often the best judges of relevance. If they select a particular search result, it is likely to be relevant or more relevant than the presented alternatives.


## A Summary of the Search Suggestions Process Based on Previous Submitted Queries

The Description for this patent begins with a summary of the process in the patent. It can include how search at Google works and what powers the search suggestion process.

Search suggestions work with user queries searched for before.

In the summary section of the patent, we learn about how the patent may address some assumptions:

When anticipating user search requests, responding involves certain methods for processing query information. Those include:

- Receiving query information at a server system, with a part of a query from a searcher
- Obtaining a set of predicted queries relevant to the part of the searcher’s query based on query and data indicative of the searcher relative to before submitted queries
- Providing the set of predicted queries to the searcher

The patent also points out more features involved in the process, such as obtaining the predicted queries, including ordering the set of predicted queries based upon ranking criteria.

Those ranking criteria work with the data indicative of the searcher’s behavior relative to previously submitted queries.

Data about the searcher’s behavior about those previously submitted queries may include:

- Click data
- Location-specific data
- Language-specific data
- Other similar types of data


## Advantages of Following The Patent on Search Suggestions

The patent points out the following as advantages of following the process described in the patent:

A search assistant receives query information from a search requestor before a searcher completely inputting the query.

Information associated with previous searchers, could include click data associated with search results. Finally, a set of predicted queries can provide the searcher to present the query information and the previous search information.

The patent is at:

[Autocompletion using previously submitted query data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,740,780.PN.&OS=PN/9,740,780&RS=PN/9,740,780)
Inventors: Michael Herscovici, Dan Guez, and Hyung-Jin Kim
Assignee: Google Inc.
US Patent: 9,740,780
Granted: August 22, 2017
Filed: December 1, 2014

Abstract


> A computer-implemented method for processing query information includes receiving query information at a server system. The query information includes a portion of a query from a search requestor. The method also includes obtaining a set of predicted queries relevant to the portion of the search requestor query based upon the portion of the query from the search requestor and data indicative of search requestor behavior relative to previously submitted queries. The method also includes providing the set of predicted queries to the search requestor.

The “Detailed Description” section of this search suggestions patent provides some insightful analysis about search at Google.


## Relevance and Backlinks and a Rank Modifying Engine Lead to Ranking For Many Results at Google

This patent points out some of how search works at Google. It tells us that:

1. The purpose of the patent is to “improve the relevance of results obtained from submitting search queries.”
2. It describes ranking documents for a query as something that can be “performed using traditional techniques for determining an information retrieval (IR) score for indexed documents because of a given query.” And the relevance of a particular document about a query term may look at the general level of back-links to a document containing matches for a search term to infer a document’s relevance. As the patent tells us:
  > In particular, if a document links to (e.g., is the target of a hyperlink) by many other relevant documents (e.g., documents that also contain matches for the search terms), it can infer that the target document is particularly relevant. This inference is because the authors of the pointing documents presumably point, for the most part, to other documents that are relevant to their audience.
3. We have more details about some more relevant results than ones with backlinks. We know that:
  > If the pointing documents are in turn the targets of links from other relevant documents, they can be more relevant, and the first document can be particularly relevant because it is the target of relevant (or even highly relevant) documents. Such a technique may be the determinant of a document’s relevance or one o multiple determinants. The technique works in some systems that treat a link from one web page to another to indicate quality for the latter page. The page with the most such quality indicators is higher than others. Appropriate techniques can identify and eliminate attempts to cast false votes to drive up the relevance of a page artificially.
4. There is another step that could potentially make some results even more relevant that involve a rank modifier engine:
  > To further improve such traditional document ranking techniques, the ranking engine can receive an additional signal from a rank modifier engine to assist in determining an appropriate ranking for the documents. The rank modifier engine provides one or more prior models or one or more relevance measures for the documents based on one or more prior models. The ranking engine can use to improve the search results’ ranking provided to the user. In general, a prior model represents a background probability of document result selection given the values of many selected features, as described further below. The rank modifier engine can perform one or more of the operations described below to generate one or more prior models or one or more relevance measures based on one or more prior models.
