---
title: "A Look at Google Midpage Query Refinements"
source_url: "https://www.seobythesea.com/2006/04/a-look-at-google-query-refinements/"
slug: "a-look-at-google-query-refinements"
date_published: "2006-04-20T14:07:29+00:00"
date_modified: "2021-05-01T20:14:15+00:00"
author: "Bill Slawski"
---

## Google Introduces Midpage Query Refinements

In early April, Google guy posted at the Search Engine Watch Forums, and his post was split off into a thread titled Google Confirms Mid-Page “See Results For” Section No Longer A Test; Suggest A Name!.

In his post, he tells us that:


> In fact, this is no longer a test. We do this when we see a query (e.g. [katrina] or something similar) that we think might benefit from refinement (e.g., maybe you wanted to search for [hurricane katrina]).

If you haven’t seen the additional query results in question, they are links for some alternative suggested search terms, appearing in the middle of the top ten results that Google returns.

Those alternative suggestions had been referred to as user interface (UI) experiments and many other different ways of presenting Google results.

I went digging through some of the patent applications that Google has filed and came up with one published last year that seems to describe how these alternative query terms (or query refinements) are decided upon.

Before looking at how Google may be doing this, let’s look at why:

**Ambiguity in search queries**

Search engines try to provide the most promising results in response to queries, but they can limit what they can return based upon the queries used.

Some search queries can be too ambiguous or too general, or specific to provide good results.

Examples:

- Homonyms – words that have the same sound and possibly the same spelling but different meanings, such as the word “bear,” which can mean to carry or can refer to an animal or an absence of clothing.
- Improper contexts – The word “jaguar” can be an animal, a Macintosh operating system, or a type of automobile.
- Very General terms – provide overly broad search results
- Very narrow terms – provide unduly restrictive and non-responsive search results.

This query refinement patent application is an attempt to provide suggestions to address these problems and meet the searcher’s intent.

**The solution, filed as a patent application**

[System and method for providing search query refinements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20050055341&OS=20050055341&RS=20050055341)
Inventors: Paul Haahr and Steven Baker
US Patent Application 20050055341
Published March 10, 2005
Filed: September 22, 2003

Abstract


> A system and method for providing search query refinements are presented. A stored query and a stored document are associated as logical pairing. A weight is assigned to the logical pairing. The search query is issued, and a set of search documents is produced. At least one search document is matched to at least one stored document. The stored query and the assigned weight associated with the matching at least one stored document are retrieved. At least one cluster is formed based on the stored query and the assigned weight associated with the matching of at least one stored document. The stored query associated with the matching at least one stored document is scored for at least one cluster relative to at least one other cluster. At least one such scored search query is suggested as a set of query refinements.

**An example of how these query refinements work**

A searcher may try to find information at Google by entering the word “jaguar” into the search box and hitting enter.

The documents returned might be able to fit into a number of semantically relevant groups:

- Cars from the Jaguar Corporation,
- Jaguar Corporation Websites in the US and UK,
- A Jaguar automobile owners association,
- The Macintosh operating system version code-named jaguar,
- Jaguar animals, and
- Other miscellaneous topics too small to be groupable into cohesive document clusters.

Google starts processing the request by finding results and choosing the top 100 documents for clustering (different numbers are possible – remember, this is just an example.)

At that clustering phase, term vectors are computed for each of the top 100 documents ranked by relevance score.

Those documents are each matched to a stored document listed in an association database. Alternative query terms are found by looking at associations with queries computed beforehand for those matched stored documents.

Term vectors are also created for these alternative query terms, and clusters are created from both sets of term vectors to create groupings like the ones described above.

A cluster centroid is calculated for each cluster. All search queries associated with a search document in the cluster are scored according to the distance from the cluster centroid and the percent of stored documents occurring in the cluster. Each stored document is associated.

So, assume that a cluster is calculated for the search query “Jaguar” for the semantic grouping with documents about Jaguar brand automobiles.

The cluster centroid may contain dominant terms including words, such as:

- jaguar,
- automobile,
- auto,
- car,
- USA,
- UK, and
- others.

The best matching query name as a suggested query refinement might be “jaguar car,” which has good coverage over the entire cluster and contains the two terms with the highest weight in the cluster centroid.

A cluster may also be calculated for the grouping of documents about the Macintosh code-named Jaguar operating system.

The cluster centroid for that one might have dominant terms including words, such as:

- jaguar,
- X,
- Mac,
- OS, and
- others.

The best-suggested query refinement for that one might be “mac os x jaguar,” which contains all of the top search query terms and appears in many of the documents in the cluster.

Other clusters and query names might be created to develop additionally suggested query refinements, including “jaguar racing” for documents about Jaguar automobile racing clubs and “jaguar cat” for documents about the jaguar animal.

Those query refinements are sorted by the relevance scores assigned to the search documents matching the stored documents appearing in each cluster and the cluster’s size in many stored documents.

So, a cluster will be ranked higher than another cluster if the cluster is either larger or has stored documents having higher relevance scores.

In this example, the final ranking of the query refinements includes

- jaguar car,
- mac os x jaguar,
- jaguar racing, and
- jaguar cat.

The alternative queries could also include negated forms of terms appearing in the set of refinements, but not appearing in the original search query, such as:

- “jaguar -car -mac-os-x -racing -cat.”

Also, a set number of predetermined search queries selected from past user queries could be used to precompute possible sets of refinements.

These predetermined queries would be issued, and the search results would be maintained in a database for lookup in response to future user search requests based on the predetermined queries.

The refined queries would be presented to the searcher along with the results of the original search.

**More details on the process**

The query refinements patent application delves fairly deeply into how this process works by providing an insight into each step along the way.

It first looks at a pre-computation stage, which happens before any query is even entered into the search engine. A “precomputation engine” is described, which has at least four parts:

- An Associator, which creates relevance-weighed relationships between stored queries and stored documents. The number of times a query is searched for may also play a part in the weight
- A Selector, which decides which stored documents and their stored queries should be retrieved based upon a search.
- A Regenerator, which looks at query logs and may select stored documents based upon previous searches.
- An Inverter, which looks at cached data and may select documents and associated queries based upon that cached data.

A query refinement system also has four parts:

- A Matcher matches one or more of the stored documents to the actual search documents generated by the search engine in response to a search query. Relevance scores are also created as part of the search query issuance. The matcher identifies the stored queries and assigned weights using the associations corresponding to the matched stored documents.
- A Clusterer, forms one or more clusters based on term vectors formed from the terms occurring in the matched stored queries and corresponding weights. The term vectors are normalized vectors projected into multi-dimensional space, with each dimension corresponding to a term (an individual word or a word combination). Those clusters are ranked based on the relevance scores assigned to the search documents corresponding to the matched stored documents and the number of stored documents occurring in each cluster. The highest-ranking clusters are considered potential refinement clusters.
- A Scorer computes center-weighted term vectors (centroids), which each represent the weighted center of the term vector of each cluster. The centroids are computed from each of the potential refinement clusters. Scores assigned to each unique search query in each of the potential refinement clusters can be based on the number of stored documents with which the search query is associated and the distance from the centroid.
- A Presenter identifies the substantially highest scoring search queries as one or more query refinements to the user. Details of the formulation of the search query refinements, such as the term vectors, clusters, potential refinement clusters, centroids, and scores, are kept within the query refinement engine only to be aware of the actual suggested query refinements.

The query refinements patent application goes into more details regarding the precomputation process, the finding of candidate alternative queries through the use of search results and log file data and cached data, and how those candidates lead to actual alternative queries presented to a user.

**Conclusion**

The most interesting thing about this approach is how user data, through log files and cached information, is incorporated into results.

There are probably some hints in the document for creating content on websites on how to best show up in some of these alternative results. Taking a careful look at words you think people will search for and what appears in Google’s results for those search phrases may tell you something about how this search refinement approach will treat your pages.

As a disclaimer, the processes described in this query refinements patent application show one way to achieve query refinements. Of course, there’s no guarantee that this is actually the approach used, but it’s worth looking at if you are interested in how Google might be coming up with these alternative results.

The patent I wrote about in this post was updated in a continuation patent by Google in 2017. I wrote about it in the post [Google Search Query Refinements Patent Updated.](https://www.seobythesea.com/2017/01/google-search-query-refinements-patent-updated/)
