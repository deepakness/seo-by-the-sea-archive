---
title: "Human Evaluators Might Help Decide on Rankings for Search Results"
source_url: "https://www.seobythesea.com/2011/11/how-human-evaluators-might-help-decide-upon-rankings-for-search-results-at-google/"
slug: "how-human-evaluators-might-help-decide-upon-rankings-for-search-results-at-google"
date_published: "2011-11-21T11:02:24+00:00"
date_modified: "2020-07-01T12:38:42+00:00"
author: "Bill Slawski"
---

## Do Human Evaluators Influence Search Rankings?

A Google patent granted last week describes how the search engine might enable people to experiment with changing the weight and value of different ranking signals for web pages to gauge how those changes might influence the quality of search results for specific queries. The patent lists Misha Zatsman, Paul G. Haahr, Matthew D. Cutts, and Yonghui Wu amongst its inventors, and doesn’t provide much in the way of context as to how this evaluation system might be used. As it’s written, it seems like something the search engine could potentially make available to the public at large, but I’m not sure if they would do that.

In the blog post [Google Raters – Who Are They?](http://www.potpiegirl.com/google-raters-who-are-they/), Potpiegirl writes about the manual reviewers used by Google to evaluate the relevance and quality of search results by parsing through a forum where people have been discussing their experiences as reviewers for Google search results and collecting information about how the review program works. It contains some interesting information about the processes used by people who have been working as human evaluators for Google’s results, including a discussion of two different types of reviews that they participate in. One of those involves being given a particular keyword and a URL, and deciding how relevant that page is for that keyword. The other involves being given two different sets of search results for the same query and deciding which set of results provides the best results for the query term.

In the Youmoz blog post [Introducing SERP Turkey: A Free Tool to Split-Test and Gather CTR Analytics of SERP Entries](https://moz.com/blog/split-test-gather-ctr-analytics-serps), Tom Anthony describes a process someone can use to measure changes to click-through rates when taking a set of search results from Google and making changes to it. It’s an interesting idea and may be worth experimenting with.

The patent examiner involved in prosecuting the human evaluators patent included a link to a Google Custom Search Engine page which describes how users of [Google Custom Search Engines](https://programmablesearchengine.google.com/about/) can tweak the results returned by those in [Changing the Ranking of Your Search Results](https://developers.google.com/custom-search/docs/ranking). The process involved doesn’t allow the custom search builders to give different weights to different types of signals, such as more weight to words found within page titles, and less to words found in links to pages, but it does enable the application of different weights to labels used for some pages.

The patent, [Framework for evaluating web search scoring functions](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08060497&OS=PN/08060497&RS=PN/08060497) (US Patent 8,060,497), was filed on July 23, 2009 and was granted on November 15, 2011. In its abstract, we are told that it covers:


> Methods, systems, and apparatus, including computer program products, for testing web search scoring functions.
>
> A query is received. A first and a second scoring function are selected by receiving search results responsive to the query; applying candidate scoring functions to the search results to determine scores for the search results for each candidate scoring function; identifying pairs of the candidate scoring functions, and calculating a diversity score for each of the pairs. A pair of candidate scoring functions are chosen from the one or more pairs of candidate scoring functions based on the diversity scores, and the alpha function is selected as the first scoring function and the beta function is selected as the second scoring function.
>
> The plurality of search results are presented in an order according to scores from the first scoring function and are presented in an order according to scores from the second scoring function.

It’s hard to tell exactly who the processes in this human evaluator’s patent might be written for. Is it for human evaluators who are hired by Google to experiment with ranking signals to find the ones they like best? Is it for the creators of Google Custom Search Engines? Is it for site owners and searchers to explore and experiment with?

We are told about the advantages of this human evaluators framework, which includes:

1. Existing search engine infrastructure can be leveraged to allow users to experiment with various scoring functions without large implementation overhead.
2. The performance of different scoring functions can be compared.
3. An ordering can be generated for scoring functions based on pair-wise comparisons of the scoring functions, even if all of the scoring functions have not been compared to the each of the other scoring functions.
4. Evaluations from questionable human evaluators can be discounted.
5. A market for scoring function evaluations, in which evaluators are rewarded with incentives, can be generated.
6. A contest, in which teams of users submit scoring functions and evaluate each other’s scoring functions, can be run.

Would Google open up the evaluation of search results to the public at large, with the possibility of incentives as a draw?

The human evaluators patent does tell us about many different signals that might be considered and compared in a side-by-side comparison of search results for specific queries.

Those might include doing things like giving different weights to words found within a page title, or within anchor text pointing to a page, or whether terms from queries are found in the title, or a URL of a page in the search result, or the body of a result, or even how many times a term can appear within the body of a page before subsequent appearances of that term are discounted.

The patent goes into detail on different types of signals that might be involved in ranking pages in search results, such as:

- The terms of the query
- A geographic location from where a query was submitted
- The language of the user submitting the query
- Interests of the user submitting the query
- Type of client device used to submit a query (mobile device, laptop, desktop)
- Locations where the query term appears within a document (title, body, text of anchors pointing to a page)
- The term frequency (how frequently the term appears in the document compared to how frequently it appears on the Web in documents in the same language)
- A document frequency (the number of documents that contain the query term divided by the total number of documents on the Web)
- A measure of the quality of the individual search result
- The geographic location where the search result is hosted
- When the search system first added the search result to its index
- The language of the search result
- The size of the search result
- The length of the title of the search result
- The length of anchor text in links pointing to the search result
- The number of documents in the domain of the search result that have a link pointing to that document using certain anchor text
- The number of documents on other domains that have a link pointing to that document using certain anchor text

An API, or application programming interface, might be set up to easily allow different weights to be applied to different signals in a system like this. This system might be set up to be used by Google employees who are tweaking different ranking signals to be compared by human evaluators that Google has hired.

**Conclusion**

I can’t say that I’ve seen anything from Google before on how they might present different sets of search results to their evaluators for comparisons like described in the blog post from Potpiegirl that I’ve linked to above, and it’s possible that this human evaluators patent may give us a few hints at how the results being compared might be generated and tracked.

One thing that the human evaluators patent does point towards is the possibility that Google may use these evaluations to create unique mixes of scoring signal weights for different query terms or different classifications of queries.

The patent describes a few different ways of classifying queries based upon either characteristics associatied with those queries or their subject matter:

***Long queries*** – Having more than a certain threshold number of characters.
***Short queries*** – Having less than a certain threshold number of characters.
***Popular queries*** – These show up in recent query logs more than a threshold number of times.
***Unpopular queries*** – These appear in recent query logs less than a certain number of times.
***Commercial queries*** – These contain terms that indicate commercial activity such as “deal,” “price,” “buy,” “store,” etc.
***Noncommercial queries*** – These don’t contain terms that indicate some kind of commercial intent.

Queries might also be classified based upon topics such as travel, food, current events, etc.

The human evaluators patent also describes how it might statistically identify when the results of comparisons received from evaluators might be suspicious in some way, such as failures to objectively evaluate scoring functions. For instance, if an evaluator often or only selects results shown on one side when comparing two different sets of results, there’s likely something funny going on.

If you’re interested in how human evaluators might be involved in helping to improve the quality of search results at Google, this patent appears to contain some hints at how that may be done.
