---
title: "Google and Large Scale Data Models Like Panda"
source_url: "https://www.seobythesea.com/2011/07/google-and-large-scale-data-models-like-panda/"
slug: "google-and-large-scale-data-models-like-panda"
date_published: "2011-07-25T13:48:18+00:00"
date_modified: "2019-06-19T17:56:03+00:00"
author: "Bill Slawski"
---

Search engine optimization grows and changes much as the Web itself does. With the recent addition of Google Plus to the services that Google offers, and this year’s introduction of the Big Panda updates, one of the growing areas of SEO involves seeing how Google and other search engines might incorporate more [user information](https://www.seobythesea.com/2011/07/how-google-might-rank-pages-based-upon-usage-information/) into how they rank webpages. The introduction of Google Plus has highlighted the importance of looking at how the search engine collects information regarding how people search, how they browser the Web, what they publish online, and how they interact with others in social networks, and what the search engine might do with that information.

With the Panda updates, we’ve seen Google introducing a way of modeling information in large scale data sets, like the Web, to try to identify and predict features of webpages that can be used to rank pages not only on the basis of relevance and popularity (based upon the links pointing to those pages), but also also upon a [range of other features](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html) such as credibility, trust, originality, range of coverage of a topic, usability, and more.

I’ve been looking back at some of the patents that Google published, and ran into a couple that really weren’t discussed much when they were originally published, and probably should be talked about a little more.

One of them oddly is very similar to a patent from Microsoft that I wrote about back in 2007, in a post titled [Personalization Through Tracking Triplets of Users, Queries, and Web Pages](https://www.seobythesea.com/2007/03/personalization-through-tracking-triplets-of-users-queries-and-web-pages/). The Google patent involves ranking documents on the Web by predicting which page might be selected by searchers faced with a set of search results. That prediction is based upon the collection of data in the form of tens of millions of “instances,” or information collected about queries, users, and documents. This patent was originally filed back in 2003, and was granted in 2007.

Around the same time that patent was granted, the same group of inventors from Google published another patent that focused less specifically on user data and more on building useful prediction models using machine learning that could help identify spam in emails, or predict which ads people might click upon in paid search, or how webpages should be ranked in organic search.

**Instances of Data**

In the first Google patent, the model being built looked at a combination of data from users, the queries that they used, and the documents that they may or may not have selected. Each of these combinations is referred to as an “instance. An instance is a “triple” of data: (u, q, d), where u is user information, q is query data from the user, and d is document information relating to pages returned from the query data.

Some examples include:

- Country Where user u is located,
- Time of day user u provided query q,
- Language of country where user u is located,
- Each of previous three queries that user u provided,
- Language of query q,
- Exact string of query q,
- Word(s) in query q,
- Number of words in query q,
- Each of the words in document d,
- Each of the words in the Uniform Resource Locator (URL) of document d,
- The top level domain in the URL of document d,
- Each of the prefixes of the URL of document d,
- Each of the words in the title of document d,
- Each of the words in the links pointing to document d,
- Each of the words in the title of the documents shown above and below document d for query q,
- The number of times a word in query q matches a word in document d,
- The number of times user u has previously accessed document d, and;
- Other information.

This is just a small handful of the types of information that could be stored by the search engine, and the patent notes that it’s possible that the data repository may collect more than 5 million distinct features.

The patent is:

[Ranking documents based on large data sets](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,231,399.PN.&OS=pn/7,231,399&RS=PN/7,231,399)
Invented by Jeremy Bem, Georges R. Harik, Joshua L. Levenberg, Noam Shazeer, and Simon Tong
Assigned to Google
US Patent 7,231,399
Granted June 12, 2007
Filed: November 14, 2003

Abstract


> A system ranks documents based, at least in part, on a ranking model. The ranking model may be generated to predict the likelihood that a document will be selected. The system may receive a search query and identify documents relating to the search query. The system may then rank the documents based, at least in part, on the ranking model and form search results for the search query from the ranked documents.

In addition to collecting large amounts of information about each instance, the model works to find connections between that data to build a model about how people search the web, the queries that they use, and the pages that they chose or decide not to click upon.

So, the query data collected might include search terms previously provided by users to find specific pages, the user data might include Internet Protocol addresses, cookie information, query languages, and/or geographical information associated with the users, and the document information may include data about specific pages that were presented to users in search results, and which positions those documents were at when they were selected or passed by.

One of the focuses of this prediction approach relies considerably upon whether or not a page was selected in search results. That seems like a potential problem.

When someone chooses a page to look at from search results, all they see is a page title, a snippet, and an URL. They aren’t making a judgment based upon the documents themselves. Personally, when I perform a search, I’ll often open a number of results in a new tab if they look somewhat relevant to my informational need. I like to have more than one source of information, and my expectation is that having a few pages to look at is going to provide a better answer to any questions I might have than just looking at one. Those selections don’t necessarily mean that I found one document more relevant or higher quality than any of the others.

**Models Based upon Document Features**

While the idea of looking at instances and triples of data involving users, queries and documents is interesting and potentially a useful way of ranking documents, the model building aspect of that patent might be useful if focused in other areas as well. The second patent from Google sounds like a document classification model approach that could potentially power an update like Google’s Panda.

It doesn’t focus specifically upon ranking Web pages, but it tells us that this kind of model building could be useful in a number of ways:


> Different models may be generated for use in different contexts.
>
> For example, in an exemplary e-mail context, a model may be generated to classify e-mail as either spam or normal (non-spam) e-mail.
>
> In an exemplary advertisement context, a model may be generated to estimate the probability that a user will click on a particular advertisement.
>
> **In an exemplary document ranking context, a model may be generated in connection with a search to estimate the probability that a user will find a particular search result relevant.*** Other models may be generated in other contexts where a large number of data items exist as training data to train the model.

(*My emphasis)

The patent is:

[Large scale machine learning systems and methods](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07769763&OS=PN/07769763&RS=PN/07769763)
Invented by Jeremy Bem, Georges R. Harik, Joshua L. Levenberg, Noam Shazeer, and Simon Tong
Assigned to Google
US Patent 7,769,763
Granted August 3, 2010
Filed: April 17, 2007

Abstract


> A system for generating a model is provided. The system generates, or selects, candidate conditions and generates, or otherwise obtains, statistics regarding the candidate conditions. The system also forms rules based, at least in part, on the statistics and the candidate conditions and selectively adds the rules to the model.

The classification models described in this patent are built from training data which includes multiple attributes or features. The patent mostly provides examples involve email and spam detection, but as the inventors note could be used to predict which ads people click upon or how relevant a particular search result might be to a searcher.

For example, in an email context, one of the things that the classification system might look for are mentions of the word “free”. Or it might look for strings of exclamation points!!!!!!!!! Or it might look for combinations of features, such as mentions of the word “free” coming from the Hotmail domain. A large number of features might be considered in a set of training data as candidates that might indicate whether an email is or isn’t spam.

This patent also tells us that one of the difficulties with using training sets in a classification model like this is that present-day classification systems can only handle small quantities of training data.

The breakthrough of using MapReduce to handle large training sets as described in [PLANET: Massively Parallel Learning of Tree Ensembles with MapReduce](http://www.bayardo.org/ps/vldb2009.pdf) (pdf), by Biswanath Panda, Joshua S. Herbach, Sugato Basu, and Roberto J. Bayardo, could be one of the technological solutions that have helped Google overcome that limitation. The PLANET paper describes an experiment involving predicting click-throughs on advertisements based upon a prediction model based upon features associated with those ads and the landing pages they point to. The experiment is detailed more fully in [Predicting Bounce Rates in Sponsored Search Advertisements](http://www.bayardo.org/ps/kdd2009.pdf).

The *Bounce Rate* paper describes looking at triples of data that Google collected involving (q, c, p) query terms (q), creatives or advertisements (c) and landing pages (p). The paper also describes some of the specific features that they might rate sites upon, such as terms used in advertisements and landing pages, related terms used in those documents, categories that pages might fit into, and more.

The patent also describes three different approaches to models that might be created, and how new features that could be added might be identified and tested.

**Conclusion**

If you’re interested in Google’s Panda updates, it’s worth spending some time looking through the PLANET and the *Bounce Rate* papers, and these Large Scale Data Model patent filings to get a sense of how Google may have developed the models that they are using to classify pages based upon features found within or associated with pages in the seed sets they’ve used to rank pages.

It’s possible that Google may have built classification models that work somewhat differently than those described in these documents, but the end result is the same. The method to build those models is probably less important than the pages that they chose as training sets, and the features that they identified as important – those that might be used to define quality, credibility, originality, topic coverage, and other qualities that were hinted at in the Google Webmaster Central blog post that I linked to above from Amit Singhal.

The Large Data Sets Patent was updated via a continuation patent granted in 2018. I wrote about it in [Search Rankings Model Patent Based on Large Data Sets Updated](https://gofishdigital.com/large-data-sets/)
