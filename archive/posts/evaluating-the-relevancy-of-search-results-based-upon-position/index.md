---
title: "Evaluating the Relevancy of Search Results Based upon Position"
source_url: "https://www.seobythesea.com/2009/09/evaluating-the-relevancy-of-search-results-based-upon-position/"
slug: "evaluating-the-relevancy-of-search-results-based-upon-position"
date_published: "2009-09-24T21:57:28+00:00"
date_modified: "2019-11-18T09:50:35+00:00"
author: "Bill Slawski"
---

The purpose behind SEO isn’t to outrank every other site on the Web for certain queries. The purpose behind SEO isn’t to draw large amounts of traffic to a web site.

Rather, the purpose behind SEO is to make it easier for people to find a site that they are interested in, that offers what they are looking for, and that meets some informational or transactional need that they might have.

Ranking number one in search results isn’t always the best place to be. Sometimes it’s better to rank number two, or even a little lower, especially if someone visits one or more of the sites above yours, and sees that those sites don’t deliver what you offer.

Case in point, a site that I’d been working on for years had been trading places between the number one and number two position in Google’s results with another site for a very relevant query term. When the site was at the number two position, it tended to get many more conversions from visitors than when it is at the number one position.

Both sites are very relevant for that specific query term. Both sites fulfilled visitors informational needs. But the other site didn’t actually provide services based upon that information, while the site I was working with did. Being number two seemed like a good place to be.

How do search engineers feel about relevancy and ranking in search results?

It’s possible that some may be re-evaluating some of their assumptions on the topic.

The position of search results is something that researchers evaluating the quality of those results spend a fair amount of time upon. One model that looks at the relevance of search results compared to their ordering in those results, is known as [discounted cumulative gain](https://en.wikipedia.org/wiki/Discounted_cumulative_gain) (DCG). A set of search results is good if more highly relevant search results appear higher in those results.

A whitepaper published by researches from Yahoo! and Google, [Expected Reciprocal Rank for Graded Relevance](http://olivier.chapelle.cc/pub/err.pdf) (pdf), discusses how to evaluate the results that a search engine delivers to searchers in response to queries, and provides an alternative metric to evaluate search results to replace the concept of discounted cumulative gain.

We’re told early in the paper that:


> One serious issue with DCG is the assumption that the usefulness of a document at rank i is independent of the usefulness of the documents at rank less than i.
>
> Recent research on modeling user click behavior has demonstrated that the position-based browsing assumption that underlies DCG is invalid.
>
> Instead, these studies have shown that the likelihood a user examines the document at rank i is dependent on how satisfied the user was with previously observed documents in the ranked list.

Very interesting paper, worth spending time with if you’re concerned about how search engines determine the quality of their search results (and/or if you’re concerned about how well your site might rank in those results for specific queries). There’s some math to struggle through (or skip), but it’s worth exploring the ideas and tidbits of information in the paper regardless of your mathematical literacy.

For example, the paper asks readers to decide which is the better set of search results: two sets of results where:

- the first has a “perfect” result as the first page listed and then 19 bad results, or;
- a second list of results where all of the results are very good.

*As an aside, the researchers tell us that the only “perfect” results are pages that are the “destination page of a navigational query.” See [Redefining Navigational Queries to Find Perfect Sites](https://www.seobythesea.com/2008/03/redefining-navigational-queries-to-find-perfect-sites/) for a discussion of how search engines might attempt to find perfect resulst for navigational queries.*

The answer, according to the researchers?

The list of results with the perfect result at the top is probably better, because its likely that no one looking at those results will go past the first result.

With the second set of results, with all pages being very good (or relevant) results, a searcher would have to spend a lot more time looking through most or all of the listings to get the same amount of information.

**Conclusion**

In my initial example above, about the two sites that often traded places for the first and second listings in search results for a specific query, both were very relevant for the query term they ranked well for, but one was a government site that described but didn’t offer services associated with the query. Many searchers were interested in the information that both sites provided, but also wanted to pursue those services.

When the government site was listed first, and likely visited by searchers, the information it provided made it more likely that people would visit the other page next in the search results and act upon that information. When the non-government site was listed first, it was more likely that people visiting it were still in an information gathering mode than a transactional one, and were likely to visit the government site to learn more before engaging the services of a commercial site.

It’s interesting that the researchers involved in this whitepaper tell us that some pages are “perfect” pages because they are the ideal destination for navigational queries, but then ignore that the intent behind a search might also be informational or transactional in nature (see: [A taxonomy of web search](https://www.cis.upenn.edu/~nenkova/Courses/cis430/p3-broder.pdf) for a discussion of the differences between navigational, transactional, and informational queries).

Searchers may have different intentions when they perform searches, including learning more about a topic, comparing what different sites have to offer, and performing a task whether it’s downloading something or buying something. Those intentions may change, for instance from information gathering to performing a transaction, even within the same set of search results resulting from a single search.

A searcher may travel further down a list of search results when such a change takes place. When they do, it isn’t necessarily bad to be number two, or even further down in the results. Sometimes ranking number one for a query isn’t always the place you want to be.
