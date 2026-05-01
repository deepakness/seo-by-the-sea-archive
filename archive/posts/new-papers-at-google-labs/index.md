---
title: "New Papers at Google Labs"
source_url: "https://www.seobythesea.com/2006/07/new-papers-at-google-labs/"
slug: "new-papers-at-google-labs"
date_published: "2006-07-04T23:14:55+00:00"
date_modified: "2021-05-06T14:12:07+00:00"
author: "Bill Slawski"
---

From the nice-to-finally-see-an-update department, comes news that Google has updated the list of [papers from Googlers](https://research.google/pubs/) over at Google Labs.

The good folks over at ResourceShelf noted the appearance of new papers over there earlier today. Sadly, many of the papers listed aren’t available, but instead, link to Google searches for the names of the documents.


## A New Personalized Recommendation System

One paper that is available, and looks to be worth a look is [Retroactive Answering of Search Queries](http://web.archive.org/web/20160520042026/http://www2006.org/programme/files/pdf/3055.pdf), (pdf) from Beverly Yang and Glen Jeh, which was presented at the WWW 2006, in Edinburgh, Scotland.

In it, they describe *query-specific web recommendations* (QSRs), as a new personalization service to alerts a user of the service when new results to selected previous queries appear. Ok, it sounds a lot like Google Alerts. What differentiates it from that service?

1. This doesn’t require registration of a query to look out for like Google Alerts – it tries to “automatically identify queries that represent standing interests.”

2. It doesn’t return every new appearance of a match for the query, but instead tries to focus on “new results that the user would be interested in.”


## Identifying Standing Interests

The paper defines a “standing interest” in a query as one a user “would be interested in seeing new interesting results” from. In describing how this personalization system might work, we get a close look at how the search engine could interpret user behavior to gauge interest in a specific topic. Here are some things to note:

1. User sessions are looked at, covering a number of queries made, instead of individual queries. This means that pages clicked through (or not clicked through) in response to results returned for specific queries, spelling corrections, refinements of queries including additions and deletions and changes of terms, amount of time looking at a result page, and more, are looking at over a number of searches.

This interaction with the search engine might help the search engine determine how interested in the topic the search may be, whether or not it appears that they have found a satisfactory answer for a query, and whether or not there is a duration or period of time in which the topic of the query or queries are of interest.

2. Signals that the search engine might use to determine whether something is worth labeling as a standing interest:

*Number of terms in a query* – more means that it’s likely previous queries weren’t fulfilled, and that there is a specific need that may be of a short interest duration.

*Number of clicks and refinements* – more actions means more interest and less likelihood of prior fulfillment.

*History match* – looking at past searches to see if they are on similar topics.

*Navigational queries* – if the search is navigational in nature, looking for a specific page, it probably isn’t something that indicates a standing interest.

*Repeated non-navigational queries* – As opposed to the previous signal, repeated queries that are non-navigational in nature probably indicate a standing interest.


## Determining Interesting Results

After a standing interest has been identified, the next step is to deliver “interesting” results. We’re told in the paper that an “interesting result,” or a high-quality recommendation, is one that is interesting to the user. The authors note that this doesn’t mean or imply that the page itself is good, has a high PageRank, or some other measure of quality that might be used to rank the page. But, those may play a part.

Here are some signals they look for to determine if a page might be of interest to a user:

*New Page* – New, as in new to the user who has never seen the page before, or even a link to it.

*Good page* – a good result for the original query, in terms of pagerank and TFxIDF relevance.

*Recently “promoted”* – something has caused this page to become a good result for the query, where it may not have been before, such as a modification of content, or an increase in popularity and rankings.


## Conclusion

The paper describes a number of other factors, compares these *query-specific web recommendations* more fully to Google Alerts, describes studies involving quality control, and looks at some related research. It does a nice job of showing a practical application for some of the personalization research that we’ve been seeing in papers on the topic.

I wonder if I had been using a system like this, if it would have recommended the updated Google papers page to me, based upon my previous queries.
