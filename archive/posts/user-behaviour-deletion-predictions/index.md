---
title: "User Behaviour: Deletion Predictions"
source_url: "https://www.seobythesea.com/2006/06/user-behaviour-deletion-predictions/"
slug: "user-behaviour-deletion-predictions"
date_published: "2006-06-18T18:24:20+00:00"
date_modified: "2022-02-06T19:05:33+00:00"
author: "Bill Slawski"
---

Many of the searches conducted on a search engine involve using more than one word in a query, and search engines pay attention to which words are used. They may be tracking and counting those words used in queries and which pages get selected as a result of that search.

But search engines can pay attention to more than just the words used, and they can also look at user behavior from one search to another.


## The Importance of Deleted Predictions

Imagine a Yahoo or a Google is watching and connecting how a searcher acts in many searches. Someone performs a search involving more than one word, looks at the results, deletes one of the search terms, and searches again. The searcher then selects a result from that second search. What does that tell the search engine about the original search query, the deleted term, and the result chosen?

Now consider that the search engines watch and collect this type of information for searchers.

Can that information help them make their results better? Can it help them make their contextual advertising show more relevant ads for some queries?

A new patent application from Yahoo tells us that:


> Determining the relative value of the many terms used in search engine queries of two or more words can make many search queries of two or more times valuable for use as advertising links and for improving search results.
>
> Knowing the frequency which a term appears in previous searches before the term itself or another term in the same query was deleted in actual subsequent searches by the same search-engine user can give a deletion probability for the term, which can be used to calculate the relative value of a search engine query of two or more terms.


## The Deletion Predictions Patent Application

[System and methods for ranking the relative value of terms in a multi-term search query using deletion prediction](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060129534%22.PGNR.&OS=DN/20060129534&RS=DN/20060129534)
Invented by Rosemary Jones and Daniel C. Fain
US Patent Application 20060129534
Published June 15, 2006
Filed: December 14, 2004

Abstract


> The likely relevance of each term of a search-engine query of two or more terms is determined by their deletion probability scores. Suppose supposed deletion probability scores are significantly different. In that case, a deletion probability score can return targeted ads related to the more relevant term or terms along with the search results. Deletion probability scores are determined by gathering historical records of search queries twice or more times. If the same user submitted a subsequent query, one or more of the terms had been deleted. The deletion probability score for a particular term of a search query is calculated as the ratio of the number of times that particular term was itself deleted prior to a subsequent search by the same user divided by the number of times there were subsequent search queries by the same user in which any term or terms including that given term was deleted by the same user prior to the subsequent search. Terms are not limited to individual alphabetic words.

h2>How is a Deletion Prediction Probability Determined?

An example, roughly paraphrased from the patent application:

1. Choose a search query, like “Honda,” from the records of two word search queries.
2. The other word in the two-word search query could be any other single word.
3. Look if there are word deletions of either “Honda” or one of the other words in the two word query where there is a subsequent search by the same user.
4. If so, calculate the deletion probability score for “Honda” by:- Counting how many times a word is deleted in a subsequent search by the same user from a two word search query which includes Honda. Imagine for this example that Honda was seen 6059 times in a sample of data in which a word was deleted from a two word search query prior to a subsequent search by the same user.
  - Looking at how many times the selected search term (Honda) was the term deleted. Now imagine that in those 6059 times, the word Honda was deleted 1874 times.
  - Calculating the number of times the selected search term (Honda) was deleted, divided by the total number of times any word in the two-word search queries that included Honda were deleted. For our example, this would be 1874/6059, or about 0.31. That number is the probability deletion score for Honda, for a two-term query. Smoothing or other statistical methods could also be used to calculate the deletion probability score.
5. After calculating the deletion probability score for Honda, add to the list of deletion probability scores for other terms.

The deletion probability score can then be used to compare the probability of the deletion of “Honda” to the deletion of any other term shared with Honda in a two-word query. This is the deletion probability score of Honda vs. the deletion probability score of “anything else” for two word-queries.

**Deletion Prediction Conclusion**

The patent application explores additional ground, such as when two word queries might be a meaningful phrase. (For example – “ice” and “cream” can be joined together as “ice cream” and mean something completely different than either part.)

But the basic premise is that there are times when someone searches with more than one term, and one of the terms could be more relevant to what a searcher is looking for than the other. Using a thing like this deletion probability score might be possible to which one is more relevant.

This might be helpful in improving search results. The patent application notes that the searches process may enhance search results. The focus of the examples described tends to be on how this process can help deliver more relevant advertisements to searchers.

As for ads shown to searchers, where there are no ads that match all of the words of the query, if there are ads that match the more relevant of the terms used in the query, those ads may be shown to a searcher instead of ads that match the less appropriate time or words.
