---
title: "The Entropy of Search Logs and Personalization with Backoff"
source_url: "https://www.seobythesea.com/2008/08/the-entropy-of-search-logs-and-personalization-with-backoff/"
slug: "the-entropy-of-search-logs-and-personalization-with-backoff"
date_published: "2008-08-04T09:14:17+00:00"
date_modified: "2020-07-06T14:29:02+00:00"
author: "Bill Slawski"
---

Does it matter that Google knows about [a trillion Web Addresses](https://googleblog.blogspot.com/2008/07/we-knew-web-was-big.html)?

Is it important that a new search engine Cuil has [120 Billion](http://web.archive.org/web/20100909235956/http://www.cuil.com:80/info/webmaster_info/) pages indexed, according to them, “three times more than any other search engine”?

The more pages that are known about by a search engine, the more difficult it might be to provide the “best” pages in response to a search, or personalized results according to a searcher’s interests.

**But what if a couple of search engineers told you that a study of a major commercial search engine’s log files showed that while there are “a lot of pages out there, there are not that many pages that people go to.”**

Their paper discusses the number of useful pages on the web, or pages that people search through as opposed to all of the pages that are indexed, and explores the concept of information entropy related to search indexes.

Entropy involves the uncertainty involved in the amount of information content that might be missed by someone seeking information. Knowing that most searches could be answered by millions of pages rather than billions in a search index means that the entropy involved in search indexes is smaller than we might imagine and that it is easier to predict which pages might be useful to a searcher.

The additional information gained through personalization might decrease that entropy even more, by making it easier for a search engine to predict which pages might be useful to a searcher.

They discuss how personalization might even help searchers when there isn’t enough information collected about an individual user’s interests, by “backing off” to look at larger groups that the individual might be a member of, based upon such things as people who share some of the same marketing demographics, or from information based upon a collaborative filtering approach based upon shared searches and pages clicked upon as well as other user behavior.

If there isn’t enough data about market demographics or click-through information for aggregated or individual searches, some other data more easily obtained, such as location information obtained through IP addresses that might provide helpful and meaningful results.

The Microsoft paper presented this year at the First ACM International Conference on Web Search and Data Mining (WSDM 2008) provided some interesting and thoughtful questions about the size of the Web that people use and a way of providing personalized search results when there is limited information available to a search engine about a searcher’s interests regarding a specific topic.

The paper is [Entropy of Search Logs: How Hard is Search? With Personalization? With Backoff?](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.130.879&rep=rep1&type=pdf) (pdf). Greg Linden wrote up an overview of the paper in his post [Does the entropy of search logs indicate that search should be easy?](http://glinden.blogspot.com/2008/02/does-entropy-of-search-logs-indicate.html), and a [video presentation](http://videolectures.net/wsdm08_mei_esl/) on the topic is available online.

A couple of papers cited in the references section to this document that are interesting reading:

[Adaptive Web Search Based on User Profile Constructed without Any Effort from Users](https://www.iw3c2.org/WWW2004/docs/1p675.pdf) (pdf)

[Personalizing Search via Automated Analysis of Interests and Activities](https://www.microsoft.com/en-us/research/publication/personalizing-search-via-automated-analysis-of-interests-and-activities/) (pdf)
