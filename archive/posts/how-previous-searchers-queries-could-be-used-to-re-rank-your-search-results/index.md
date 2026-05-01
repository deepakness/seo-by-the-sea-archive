---
title: "How Previous Searchers' Queries Could Be Used to Re-Rank Your Search Results"
source_url: "https://www.seobythesea.com/2007/09/how-previous-searchers-queries-could-be-used-to-re-rank-your-search-results/"
slug: "how-previous-searchers-queries-could-be-used-to-re-rank-your-search-results"
date_published: "2007-09-17T10:13:46+00:00"
date_modified: "2020-06-19T17:03:49+00:00"
author: "Bill Slawski"
---

It is possible for previous searchers queries at a search engine to influence what you see in search results. Imagine a search engine doing this:

1. You search for “dog” in the search engine.
2. The search engine grabs a list of pages that it finds relevant to those results.
3. It looks through query logs to find the most frequently occurring queries that include the word “dog” such as “dog breeds, dog name, dogpile, dog breeders, dog pictures, dog training, dog health, dog beds, dog food, dog kennels, dog photos, dog adoption, dogs for sale,” and the number of times people searched for those.
4. The search engine also looks at those query logs to find the most frequently occurring search queries that came immediately before or after a search for those other queries containing the word “dog,” such as “cat, pet, pitbull, jack russell terrier, puppy, animals, border collie, chihuahua, game.”
5. A “language model” is created for your query, based upon these other searches from user log files, and it is used to rerank the original search results.

A newly published patent application from Microsoft describes in more detail how users’ queries can be incorporated into such a query expansion and reranking process.

[Re-ranking search results based on query log](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20070214131.PGNR.&OS=dn/20070214131&RS=DN/20070214131)

Invented by Silviu-Petru Cucerzan and Ziming Zhuang

Assigned to Microsoft
US Patent Application 20070214131
Published September 13, 2007
Filed: March 13, 2006

Abstract


> A system(s) and/or method(s) that facilitate improving the relevance of search results through the utilization of a query log. The relevance of the search results for a target query can be judged based on one or more queries in the log that are related to the target query temporally and/or lexically. The diversity of the top-ranked search results can be increased and/or decreased based on an iterative re-ranking process of the search result set.

What is interesting about this is that it not only takes information that it finds on the Web to return relevant pages to searchers, but that it also treats previous searchers queries as a valuable source of information to take into consideration when providing search results to people.

In this process, both the number of other queries and the frequency and recency that they are performed with can influence the reranking of results, as well as the actual language used in the original query itself.

The search engine would be making many “inferences” in using previously searched for queries that include the term or terms being searched for. I liked this paragraph from the patent filing, which describes what the word “inference” means in the context of this document:


> As used herein, the term “inference” refers generally to the process of reasoning about or inferring states of the system, environment, and/or user from a set of observations as captured through events and/or data.
>
> Inference can be employed to identify a specific context or action or can generate a probability distribution over states, for example.
>
> The inference can be probabilistic–that is, the computation of a probability distribution over states of interest based on a consideration of data and events.
>
> Inference can also refer to techniques employed for composing higher-level events from a set of events and/or data. Such inference results in the construction of new events or actions from a set of observed events and/or stored event data, whether or not the events are correlated in close temporal proximity, and whether the events and data come from one or several event and data sources.
>
> Various classification schemes and/or systems (e.g., support vector machines, neural networks, expert systems, Bayesian belief networks, fuzzy logic, data fusion engines . . . ) can be employed in connection with performing automatic and/or inferred action in connection with the subject embodiments.

In other words, search engines are returning results by trying to make reasonable observations about the ways that other people are using the words searched for, and letting those observations influence the search results being returned to a searcher.

A couple of definitions from the patent application:

*Query extensions* – the terms that expand a shorter query into a larger query.

*Adjacent queries* – queries that precede or follow a query in a user search session.

The idea behind this system looking at both of these types of data from query logs is that they may help provide information regarding a user’s search intent.

Here’s another example of how this might work:


> For example; a user submits the query “hard disk case” although a better or more accurate description (e.g., generally accepted and more frequently used on the web) is “hard drive enclosure”.
>
> The results for such a query would suffer because a search engine would rank the documents based on their fit with the query terms, including term frequency and proximity even though some of the retrieved pages may contain the more accurate terms (such as “drive” and “enclosure”).
>
> A system the utilizes mutual information based on query log statistics can identify “hard disk” as a relevant prefix for the query and then generate the popular extensions “drive”, “data recovery”, “repair”, “utilities”, “failure”, “problems”, “eraser”, “enclosure”, etc.
>
> From user search sessions, the system can also retrieve co-occurring queries, such as “portable hard disk”, “USB external hard drive”, and “USB enclosures.”
>  The words in these extensions and queries can be used to re-rank the search results retrieved for the initial query, under the assumption that such additional information can help to better represent the typical user’s real search intent, in concordance with previous findings.

In building a “language model” from query logs and pages found in the search result, to rerank pages, several properties of documents included in those results might be looked at, such as URLs, page titles, page content, and snippets on the search results pages for the different query extensions and adjacent queries.

A ranking component that reranks the original search results would use that language model to create a match score for each of the documents in those search results, to work with the original rankings of those results.

The patent filing goes into a lot of detail on how this reranking system may work and also provides a glimpse of how it might work with a user’s search history to provide more personalized results.
