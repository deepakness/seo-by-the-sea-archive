---
title: "How Google May Rank Some Results based on Categorical Quality"
source_url: "https://www.seobythesea.com/2019/06/categorical-quality/"
slug: "categorical-quality"
date_published: "2019-06-10T13:13:20+00:00"
date_modified: "2021-04-28T16:52:41+00:00"
author: "Bill Slawski"
---

## A New Patent on Categorical Quality

Some of the people who write patents for Google tend to stand out to me. One of those is Trystan Upstill.

I noticed that he had published another patent that looks really interesting and worth reading. So when I started following his patents, I read his doctoral thesis, [Document ranking using web evidence](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.95.4744&rep=rep1&type=pdf) which was really interesting, from the early days in his professional career.

Before he was listed as the inventor of several patents, I also found it interesting. I’ve written about several patents he has participated in creating because they often focus upon Site Quality, and I learn something from reading them and trying to understand them.

Here are posts from his patents which I have written about previously:

- [Authoritative Search Results in Google Searches?](https://www.seobythesea.com/2017/05/how-does-google-look-for-authoritative-search-results/)
- [How Google May Rank Websites Based Upon Their Databases Answering Queries](https://www.seobythesea.com/2017/03/how-google-may-rank-websites-databases-answering-queries/)
- [A Replacement for PageRank?](https://www.seobythesea.com/2014/12/replacement-pagerank/)
- [How Google May Identify Navigational Queries and Resources](https://www.seobythesea.com/2012/12/navigational-queries-resources/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

I noticed his name on a new patent granted at the end of May, and I’ve been working through it now, too.

The patent is titled “ReRanking Internet Resources based on Categorical Quality.”

It tells us about the importance of searches based on categories, which reminded me of web directories that have started to disappear.

Back when there were more directories online, such as the Yahoo Directory or the Open Directory Project, those were often good places to begin searches because they showed you what they had in different categories. For instance, if you were interested in San Diego, you could find a category about San Diego and browse through the sub-categories to see what was included in the broader category. There you could learn about Down Town, Old Town, North County, and other parts of San Diego.


## A Categorical Quality Patent from Search Quality

This patent tells us that “a search system ranks the resources based on their relevance to the query and importance.” That is how most search engines rank documents that are returned on a search for a query.

If you had a chance to read through the earlier patents, I listed for Trystan Upstill, you won’t be surprised that he talks about the intent behind searches, such as informational and navigational intents.

The patent tells us that sometimes searchers perform searchers to provide them with broad information, and sometimes they have an idea that a particular site exists. They are trying to find information from that site. The intent behind those types of searches, in the first case, is referred to as “informational,” and in the second case is known as “navigational.”

The patent tells us about what results are like for our informational searches and our navigational searches. There are usually many relevant results for informational searches, and it is often the case that no one particular result receives the vast majority of selections by searchers. These could be broad searches for things such as [football] or [space travel].

When someone searches for a navigational query, they are likely looking for a specific page or resource, which tend to be results that typically receive the most selections by searchers. For example, you may search for [espn] or [legoland].

The patent tells us that sometimes when you perform informational searches, there may be a lot of results that often are good ones, and it aims at a way of “re-ranking resources based on the quality of the resources.”

That is the problem that this patent aims at finding a way to solve.

It focuses upon understanding the categories behind a search. Instead of focusing upon relevance and authority as a primary way of ranking those results, it may rerank results based on categorical quality.

Early on in the patent, it identifies this problem and then points out the advantages behind the patented categorical quality process.


## Advantages of the Process involved in this patent


> 1. By re-ranking search results for a proper subset of resources that satisfy a quality condition, the search system provides a set of search results that lists resources that belong to a category according to a quality ranking that differs from a search ranking of a received query.
> 2. Because the search results are provided according to a ranking that is based, in part, on quality concerning the category, the search results are more likely to satisfy a user’s informational need when the users issue a query that is categorical for the category.
> 3. This also obviates the need for the user to issue several separate navigational queries or several informational queries. The most popular resources concerning the category tend to be boosted in the ranking during the re-ranking process.
> 4. Furthermore, the re-ranking can be triggered only for certain queries. There is a signal of a categorical interest and not triggered when the query signals a non-categorical interest, such as a navigational interest, or where the query is an answer-seeking query, etc. In these latter cases, there is a strong signal of the user’s informational need, and thus the re-ranking would likely be of little informational utility to the user.

This Categorical Quality patent is:

[Re-Ranking Resources Based on Categorical Quality](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220190155948%22.PGNR.&OS=DN/20190155948&RS=DN/20190155948)
Inventors: Trystan G. Upstill, Abhishek Das, Jeongwoo Ko, Neesha Subramaniam, and Vishnu P. Natchu
US Patent Application: 20190155948
Published on: May 23, 2019
Filed: March 31, 2015

Abstract


> Methods, systems, and apparatus, including computer programs encoded on a computer storage medium, re-ranking resources for categorical queries. In one aspect, a method includes receiving queries, and for each received query: receiving data indicating resources identified by a search operation as being responsive to the query and ranked according to first order, each resource having a corresponding search score by which the resources are ranked in responsiveness to the query and determining whether a proper subset meets a quality condition based on a quality measure that is indicative of the quality of the resources in the proper subset and independent of search scores of the resources for the received query.
>
> Each query for which the proper subset meets the quality condition determines a quality score for each resource in the proper subset and re-ranking the resources in the proper subset according to their respective quality scores.

When a searcher doesn’t know very much about a category, it isn’t unusual for them to start a search with a broader query. This is because they may not know the category well or sites or resources that may provide the best answers to questions they have or meet their informational or situational needs.

This patent aims to re-ranking results for broad category searches based upon their quality in the category in which they are being searched.

The patent tells us that “if they rerank search results based upon quality, the sites and resources they show will be the ones that best serve the categories searched for.”

So, what does it mean to rank results based upon categorical quality?


## How is Category Quality Measured?

1. Ranked according to responsiveness to received query
2. A subset of the resources can also be selected, and a determination is made as to whether the proper subset meets a quality condition based on a quality measure that is indicative of the quality of the resources in the proper subset.
3. A variety of quality conditions can be considered, including:1. traffic to each resource
  2. whether each resource is a navigational resource for a corresponding navigational query
  3. the authority of each resource relative to other resources
4. The quality condition for the subset, for example, may be met when a threshold number of the resources in the proper subset meet a popularity condition. For example, the threshold number may be 70% of the number of resources in the proper subset. The popularity condition may be based on one or more criteria.

The Categorical Quality Patent tells us that “A resource satisfying the quality condition is a signal that the resource is a high-quality resource for the category to which the received query belongs.”

And it also tells us that “Various criteria can be used to determine if a resource satisfies a quality condition.”

Once resources have been determined to meet quality criteria and have been given Categorical Quality Scores, they may be re-ranked based upon those scores.

These categorical quality scores appear to be based upon user behavior information about selections of pages in response to queries.

Click logs and query logs may be used to map queries submitted about web pages identified in search results and the actions taken by searchers in results to those pages.


## Informational and Navigational Resources

This patent starts by telling us about informational resources and navigational resources.

The click logs and query logs may be used to determine navigational scores to determine if a query could be determined to be a navigational query for a resource. If it is a navigational resource for a query, it may be given a score of 1. All other resources and websites may be given a score of 0.

They tell us that: “This type of scoring model has based on the premise that a query is only navigational for one resource or one website.”

An alternative is also presented, with a navigational score being a score with an upper bound and a lower bound, and that a query may have a “separate navigational score for each of multiple resources.”

Also, “an informational query may have a relatively flat score for many resources, indicating such resources are selected often for the query when identified by search results, and the score may gradually decrease to the lower bound for the remaining resources that are rarely selected for the query.”

Navigational queries may rank highly for one resource (or several resources belonging to one website) and shallow scores for all other resources. This makes sense – if someone searches for ESPN, they will be satisfied with pages from the ESPN website and not from other websites.


## Categorical Quality Resources

A resource that satisfied a quality condition shows the resource is popular for the category to which the received query belongs. It is in a subset of resources that are likely to “satisfy a user’s informational need concerning the category.”


## Re-Ranking Resources for Categorical Queries

This process of reranking resources is done for each query received. A query can have one or more terms.

Resources are identified as responsive to the query, and those are ranked according to a first-order (given a search score.) For example, the category quality ranking module receives data describing the output of a search of the index using the query. They are ranked in terms of how responsive they are to a query relative to the other resources identified. The categorical quality patent tells us that not all indexed resources are scored; only the top 1,000 scored resources may be included.

Only a fraction of those results may be checked to be re-ranked, such as a relatively small value, like the top 20 or 30 results.

A query can belong to more than one category type, and the number of results to be reranked will be the same for all of those category types.

The patent tells us that multiple categorization techniques may be used, such as “query clustering, vertical categorization based on selections of search results responsive to the query, and so on.”


## Quality Conditions for a Resource Set

The quality of resources may be based upon things such as:

- The authority of the resource relative to other resources
- The traffic for each resource
- The relevance of the resource to other queries that are different from the received query
- Other factors that can be used to determine a quality measure of the set of resources

These quality signals can be said to be indicative of the ability of those resources that are being reranked to “satisfy a user’s informational need for a category to which a received query belongs.”

An example of determining whether a set of resources meets a qualifying condition for a category (it shows four features that may be different from other determinations.) The four features in this example are:

1. The quality of the resource as measured by navigational queries (if any)
2. The topicality of the resource to the received query
3. The performance of search results that reference the resource
4. Whether the received query is itself navigational.

All of the resources in a subset of resources for a query will undergo this analysis.

In response to each of these features, each resource may be given a value, and those may be used to give a total score for those resources. If the subset of resources meets a threshold value, it will be determined to meet the qualifying condition for the category.

Additional features or fewer features may be used to determine the quality of a category.

The patent goes on to explain the value of different types of quality features.


## Topicality Scores

A score might be determined that measures how topical the resource is for the query. This could be done a few different ways, such as:

- The similarity of query terms to terms in the resources can be determined, and the more similar the terms of the query to the terms of the resource, the higher the topicality score.
- The performance of search results that reference the resource when provided in response to the query can be determined. The higher the performance (e.g., selection rate), the higher the topicality score.

Other processes could be used to score topicality, and the higher the score for the resource, the more likely it is to meet that quality condition.

Other topicality scoring processes can also be used. The higher the topicality score, the more likely the resource is to meet the quality condition.


## A score based on their performance of search results in referencing the resource

The category quality ranking feature may determine a score based on an aggregation of selections of search results for the resource for all queries. The better a resource does, the more likely it will meet that quality condition.


## Navigational Scores

The category quality re-ranking process may look to see whether resources fulfill any corresponding navigational queries. One or more navigational queries for a resource, or several queries with relatively high navigational scores, indicates that a resource is a popular resource. This determination may be based on queries that are different from the received query. A high navigational score of the received query may preclude or otherwise reduce the likelihood of re-ranking the proper subset of the resources.


## Categorical Quality Scores Overall

I’ve written about some of the features that may be used to determine categorical quality scores for resources that might be returned in response to a received query. The patent tells us that additional metric could be used as well, such as:

- aggregate visits to a resource
- social network shares for a resource
- traffic patterns


## Additional Implementations

There is a big “Additional Implementations” section that includes more details on how categorical quality might be scored or even potentially ignored, like in the following:


> For queries with a high locality intent, this reranking based on categories may be disabled because “the locality intent is a signal that user has a specific informational need that should not be discounted. An example of a query with a high locality intent is [Videos in Mountain View, Calif.].”

If you want to learn about all of the details behind this categorical quality approach where there are potentially a lot of good results for a query, and some of those may be re-ranked based upon quality scores, you can go through this section of the patent, and go through the patent overall.

This is a fairly complex patent, including click selections to determine quality scores that pages may be reranked on. Google Spokespeople have told us that searcher’s clicks don’t rank pages in Google’s search results.

If Google is following processes like those described in this patent, those clicks aren’t directly used to rank pages. Still, they look like a way that is being used to understand the quality of some resources that may be ranked in search results based upon categorical quality.

I’ve written a few posts about patents involving quality scores for organic SEO:

- 6/14/2011 – [Google’s Quality Score Patent: The Birth of Panda?](https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/)
- 12/9/2012 = [How Google May Identify Navigational Queries and Resources](https://www.seobythesea.com/2012/12/navigational-queries-resources/)
- 5/12/2015 – [How Google May Calculate a Site Quality Score (from Navneet Panda)](https://www.seobythesea.com/2015/05/google-site-quality-scores/)
- 5/15/2013 – [How Google May Rank Web Pages Based on Quality Ratings](https://www.seobythesea.com/2013/05/google-rank-sites-quality-ratings/)
- 6/22/2015 – [How Google May Classify Sites as Low Quality Sites](https://www.seobythesea.com/2015/06/how-google-may-classify-sites-as-low-quality-sites/)
- 7/30/2018 – [Quality Scores for Queries: Structured Data, Synthetic Queries and Augmentation Queries](https://www.seobythesea.com/2018/07/quality-scores-for-queries/)
- 9/21/2017 – [Using Ngram Phrase Models to Generate Site Quality Scores](https://www.seobythesea.com/2017/09/site-quality-scores/)
- 6/10/2019 – [How Google May Rank Some Results based on Categorical Quality](https://www.seobythesea.com/2019/06/categorical-quality/)

Last Updated June 26, 2019.
