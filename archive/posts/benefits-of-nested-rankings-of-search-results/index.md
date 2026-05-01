---
title: "Benefits of Nested Rankings of Search Results"
source_url: "https://www.seobythesea.com/2006/09/benefits-of-nested-rankings-of-search-results/"
slug: "benefits-of-nested-rankings-of-search-results"
date_published: "2006-09-02T22:27:24+00:00"
date_modified: "2020-06-19T17:18:40+00:00"
author: "Bill Slawski"
---

Take a search query, and grab 100.000 relevant pages in response to it. Take those 100,000 results, and rerank and sort them looking at some other factors. Then pull the top 1000 of those, and shuffle their order based upon other features from them. Take the top 500 and rerank them using other criteria. Then show the top ten to a searcher.

Could a search system like this deliver more relevant results in a manner that requires less energy and time?

What kind of factors would it be looking at in those different stages?

A new patent application from Microsoft describes a multi-staged ranking and reranking process in [Ranking results using multiple nested ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060195440%22.PGNR.&OS=DN/20060195440&RS=DN/20060195440) (US Patent Application 20060195440, published August 31, 2006, and filed on December 5, 2005)

The listed inventors are [Christopher J. Burges](https://www.microsoft.com/en-us/research/people/cburges/), [Irina Matveeva](http://people.cs.uchicago.edu/~matveeva/), Leon C.W. Wong, Andrew S. Laucius, and Timo Burkard. You’ll see all five of those names on a paper titled [High Accuracy Retrieval with Multiple Nested Ranker](https://www.microsoft.com/en-us/research/publication/high-accuracy-retrieval-with-multiple-nested-rankers/) (pdf), which was presented at the SIGIR 2006, in Seattle in August 6–11.

The patent filing and the paper provide some ideas on the things that this ranking system might look at but focus more upon the process of nesting rankings than on ranking factors. If you’d like to read a little more about some of the things that Microsoft may be looking at in terms of ranking factors, I wrote a little about some Microsoft research along those lines in [Feature based rankings at MSN](https://www.seobythesea.com/2006/04/feature-based-rankings-at-msn/).

In that post, I mention that the papers mentioned didn’t describe how some of those ranking factors might be used to return results. We get a possible glimpse of that here from these two documents.

Here’s the abstract from the patent filing:


> A unique system and method that facilitates improving the ranking of items are provided. The system and method involve re-ranking decreasing subsets of high ranked items in separate stages.
>
> In particular, a basic ranking component can rank a set of items. A subset of the top or high ranking items can be taken and used as a new training set to train a component for improving the ranking among these high ranked documents. This process can be repeated on an arbitrary number of successive high ranked subsets.
>
> Thus, high ranked items can be reordered in separate stages by focusing on the higher-ranked items to facilitate placing the most relevant items at the top of a search results list.

The paper appears to cover a lot of the same ground, though it presents the material from a different perspective. The abstract from the paper:


> High precision at the top ranks has become a new focus of research in information retrieval.
>
> This paper presents the multiple nested ranker approach that improves the accuracy at the top ranks by iteratively re-ranking the top-scoring documents.
>
> At each iteration, this approach uses the RankNet learning algorithm to re-rank a subset of the results. This splits the problem into smaller and easier tasks and generates a new distribution of the results to be learned by the algorithm.
>
> We evaluate this approach using different settings on a data set labeled with several degrees of relevance. We use the normalized discounted cumulative gain (NDCG) to measure the performance because it depends not only on the position but also on the relevance score of the document in the ranked list.
>
> Our experiments show that making the learning algorithm concentrate on the top-scoring results improves precision at the top ten documents in terms of the NDCG score.

The paper provides some information on Microsoft’s Ranknet approach, and you can learn more about it in [Learning to Rank using Gradient Descent](https://www.microsoft.com/en-us/research/publication/learning-to-rank-using-gradient-descent/) (pdf). The *Mulitple Nested Ranker* paper is a little easier to read through than the patent but goes into a lot of details on a method of proving that results are more relevant by use of a “normalized discounted cumulative gain measure” (NDCG). The patent doesn’t cover that territory, but you might find yourself struggling with some of the legal languages if you don’t skim through the paper first.
