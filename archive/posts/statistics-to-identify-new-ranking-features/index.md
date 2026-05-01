---
title: "How a Search Engine Might Use Statistics to Identify New Ranking Features"
source_url: "https://www.seobythesea.com/2011/09/statistics-to-identify-new-ranking-features/"
slug: "statistics-to-identify-new-ranking-features"
date_published: "2011-09-13T14:11:14+00:00"
date_modified: "2021-06-20T09:30:38+00:00"
author: "Bill Slawski"
---

I may have been a little unusual as an English major in my college days. I remember one professor asking me what I found interesting about a particular author we were studying. My answer was about patterns involving the language that he used, and how he frequently used certain words that were no longer much in fashion these days. He asked for an example, and I pointed out the use of the word “singular.” I could tell that he found my point a little odd, and I wish that the Google Books N-Gram Viewer was around back in those days to [back up my statement](https://books.google.com/ngrams/graph?content=singular&year_start=1800&year_end=2000&corpus=0&smoothing=3&direct_url=t1%3B%2Csingular%3B%2Cc0) . As a side note, I wish I could have taken a class or two with HITS algorithm inventor Jon Kleinberg, who probably would have [appreciated](http://web.archive.org/web/20120427053038/http://www.news.cornell.edu:80/chronicle/03/2.20.03/AAAS.Kleinberg.html) my response.

I point that out because I recall some unusual phrasings by search engineers at a large search conference I attended a few years back where most of the search marketers were using the term “ranking factors.” All of the search engineers who gave presentations and participated in the question and answer sessions instead used the term “signals.” I wasn’t the only one who noticed the phrasing, and someone called one of the search engine representatives on his use of the term, upon which a Google representative responded, and was seconded by the Yahoo and Microsoft reps, that they preferred to use the term “signal” instead of “factor.”

Much like in my college days, I find myself a little obsessed with the language used in the search patents I read. If Google pointed their N-Gram viewer at the USTPO’s database of patents, that would be a great thing. There are a few terms that I keep on seeing spring up in some Google patents that I’ve been finding pretty interesting lately.

One of those is “features,” which seems to be sometimes used interchangeably with “[signals](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html)” in some discussions from Google when it comes to discussions about data they collect. Another term I’ve seen increasingly on some Google patents and papers is the term “[large data sets](https://www.seobythesea.com/2011/07/google-and-large-scale-data-models-like-panda/),” which may refer to the amount of Gmail that Google processes, or click-stream information on advertising clicks, user-behavior when it comes to mining browsing histories or searches query logs, or even different items that might be found on Web pages when it comes to creating a quality score for those pages.

A Google patent granted today describes how Google might manage information related to large data sets. Still, even more importantly, it discusses how statistics might be used to identify search ranking features for the search engine to track.

The patent is:

[Scaling machine learning using approximate counting](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08019704&OS=PN/08019704&RS=PN/08019704)
Invented by Simon Tong and Noam Shazeer
Assigned to Google
US Patent 8,019,704
Granted September 13, 2011
Filed: May 12, 2010

Abstract


> A system may track statistics for many features using an approximate counting technique by: subjecting each feature to multiple, different hash functions to generate multiple, different hash values, where each of the hash values may identify a particular location in a memory, and storing statistics for each feature at the particular locations identified by the hash values. The system may generate rules for a model based on the tracked statistics.

In the description’s overview of the patent, we’re told that the kind of data repository covered by this patent might involve over a million data elements, and could include information such as:

- E-mail data (e-mails that users sent and/or received,)
- Advertisement data (advertisements presented to the users and/or selected by the users)
- Any type or form of labeled data.

The data contained in one of these repositories might be used to create rules for a model. For instance, the data might include data about spam and regular (non-spam) e-mails, that could be used to create rules for a model that may predict whether future emails may be spam. User data involving advertisements might be used to predict whether or not someone might click upon a particular advertisement.

An example of one type of statistical information involved in this process might involve feature counting. The number of instances of a certain type of feature showing up might be counted. If a certain feature tends to show up more than a certain threshold, it might then be promoted so that it could be used to form rules for a model. That feature might be added to other features used in a model, or might replace a previously used feature.

Using that feature as a rule in part of a ruleset consisting of several search ranking features might be used to label emails or advertisements or possibly even webpages to a predicted label.

**Conclusion**

Is this how Google’s Panda works?

It’s hard to tell for certain, though it does seem like the approach behind Panda is to identify positive and negative search ranking features (signals) that might predict how positive a user experience might be upon a particular page or site.
