---
title: "How Google Might Fight Web Spam Based upon Classifications and Click Data"
source_url: "https://www.seobythesea.com/2010/08/how-google-might-fight-web-spam-based-upon-classifications-and-click-data/"
slug: "how-google-might-fight-web-spam-based-upon-classifications-and-click-data"
date_published: "2010-08-03T10:32:44+00:00"
date_modified: "2015-11-28T10:48:39+00:00"
author: "Bill Slawski"
---

When you enter a set of keywords into Google, the search engine attempts to find all the pages that it can which contain those keywords, and return a set of results ordered based upon a combination of relevance and importance scores. But it’s possible that many of the pages that could possibly be returned in response to such a search may not be very good matches for a topic related to the query terms used, or may be spam pages.

According to a Google patent filed in 2006 and granted today, around 90 percent of web pages that could be returned for topics such as computer games, movies, and music are spam pages, which exist only to “misdirect traffic from search engines.” The patent tells us that those pages are usually unrelated to those “topics of interest” and try to get a visitor to purchase things such as pornography, software, or financial services.

The patent presents an automated process that might be used by the search engine to classify documents based in part upon user-behavior data, to help weed out web spam.

There are multiple steps behind this process, but it begins with identifying a number of “seed” queries related to a specific topic. The queries are searched upon at the search engine, and the pages appearing as results of those queries are analyzed for common features.

For instance, the words that appear within a certain top number of those documents might be analyzed to see how often certain [n-grams](https://en.wikipedia.org/wiki/N-gram), or combinations of words appear within them. An “n-gram” might be consecutive combinations of words of different lengths, such as bi-grams, or two word combinations, or tri-grams consisting of three word combinations, or larger combinations. These combinations of words, taken from a phrase on a page such as “The quick brown fox jumps over the lazy dog,” might appear like the following, as an example of tri-grams:

- The quick brown
- quick brown fox
- brown fox jumps
- fox jumps over
- jumps over the
- over the lazy
- the lazy dog

Another feature of words upon pages might look at something like how frequently specific words might appear on a page compared to how frequently those words appear on other pages on the web that contain the same word or words.

Those and similar types of features might be used to classify web pages based upon the words that appear within them, and to annotate those documents so that classification information is associated with them.

The topic information for the queries used is compared to the classification information for the pages that appear within the search results, to attempt to determine whether a page is.

- Related to the specific topic
- A spam document
- Not related to the specific topic or is off-topic

While some pages may contain the keywords used in a query, that doesn’t necessarily mean that those pages are on the same topic as the query itself. Because of that, the patent tells us that user input might also be considered, such as looking at:

***Click-through rates*** – how often certain pages are selected in search results in response to a query compared to how often those pages are shown in response to that query.

***Click durations*** – The amount of time that someone remains on a given page when visiting that page after finding it in search results.

Other unnamed ***associated navigational operations***, may also be used to determine whether or not pages should be associated with the classifications given to documents based upon user-behavior.

This combination of classification based upon topics, and click information can be used to determine whether pages are on topic, or may be off topic, and/or spam. On topic documents might be boosted in search results, while off topic or spam pages might be lowered in rankings or removed from those search results.

The patent is:

[Method and apparatus for classifying documents based on user inputs](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,769,751.PN.&OS=pn/7,769,751&RS=PN/7,769,751)
Invented by Jun Wu, Zhengzhu Feng, Quji Guo, and Zhe Qian
Assigned to Google
United States Patent 7,769,751
Granted August 3, 2010
Filed January 17, 2006

Abstract


> One embodiment of the present invention provides a system that automatically classifies documents (such as web pages) based on user inputs. During operation, the system obtains a “classified” set of documents which are classified as relating to a specific topic. The system also obtains queries related to the specific topic. These queries produce “query results” which enable the user to access documents related to the query.
>
> The queries also include “click information” which specifies how one or more users have accessed the query results. The system uses this click information to identify documents in the classified set of documents which are not related to the specific topic or are off-topic. If such documents are identified, the system shifts the identified documents so that they are regarded as off-topic and/or spam, and removes the identified documents from the classified set of documents.

**Conclusion**

This patent was originally filed in 2006, and while it describes one way that Google might attempt to identify whether or not pages which appear in search results or either spam, or are unrelated to the topic behind a set of query terms, it likely isn’t the only approach that Google may have found to try to filter out web spam.

Another approach to identify spam pages that the search engine could possibly use is described as part of Google’s Phrased-Based Indexing process, which I wrote about back in 2006, in [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/). The process detailed in the patent behind that post doesn’t include a look at user-behavior data such as the click throughs and click duration mentioned in this patent, but it’s possible that it could.

Unfortunately, there’s still plenty of web spam to be found in search results, but it’s possible that approaches like the one described in this patent have been effective in filtering out some of the spam that we’ve seen in the past by combining the use of classification of pages and queries with user-behavior data. Google’s Matt Cutts, the head of their web spam team recently asked the visitors of his blog to identify [web spam projects](https://www.mattcutts.com/blog/webspam-projects-in-2010/) that they would like to see Google tackle over the next year.

Given the large number of responses to Matt Cutts, and the wide variety of problems identified as web spam within those responses, it’s pretty clear that the problem of web spam is far from being solved, and that the definition of web spam may be expanding to include content on web pages that may be relevant to a topic but of fairly low quality.
