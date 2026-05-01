---
title: "Google Patent Granted on Semantic Units (Meaningful Compounds)"
source_url: "https://www.seobythesea.com/2007/07/google-patent-granted-on-semantic-units-meaningful-compounds/"
slug: "google-patent-granted-on-semantic-units-meaningful-compounds"
date_published: "2007-07-25T07:51:06+00:00"
date_modified: "2020-06-19T17:04:47+00:00"
author: "Bill Slawski"
---

## Semantic Units Found in Search Queries

When searchers type a query into a search engine, it isn’t uncommon for them to use more than one word. It also isn’t unusual for those words to be a semantically meaningful phrase rather than just a list of keywords.


> Multiple search terms entered by a user are often more useful if considered by the search engine as a single compound unit. Assume that a user enters the search terms “Baldur’s gate download.”
>
> The user intends for this query to return web pages that are relevant to the user’s intention of downloading the computer game called “Baldur’s gate.” Although “Baldur’s Gate” includes two words, the two words together form a single semantically meaningful unit. The same is true with a phrase such as “New York,” which is two words that go together as a semantic unit.
>
> If the search engine can recognize “Baldur’s gate” as a single semantic unit, called a compound herein, the search engine is more likely to return the web pages desired by the user.

A Google patent, originally filed in the year 2000, was granted this week on a method that enables a search engine to understand when more than one word is used together in a single semantically meaningful manner.

This isn’t the only patent filing from Google that looks at the meanings of compounds of words, with a series of patent applications on [phrase based indexing](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/), and an Infoseek patent that’s been assigned to Google on [Real-time document collection search engine with phrase indexing](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6070158.PN.&OS=pn/6070158&RS=PN/6070158).

Is this something that Google has implemented? It’s a possibility.

[Identification of semantic units from within a search query](https://patents.google.com/patent/US7249121B1/en)
Invented by Krishna Bharat, Sanjay Ghemawat, and Urs Hoelzle
Assigned to Google
US Patent 7,249,121
Published July 24, 2007
Filed: December 5, 2000

Abstract


> A search engine for searching a corpus improves the relevancy of the results by classifying multiple terms in a search query as a single semantic unit. A semantic unit locator of the search engine generates a subset of documents that are generally relevant to the query based on the individual terms within the query. Combinations of search terms that define potential semantic units from the query are then evaluated against the subset of documents to determine which combinations of search terms should be classified as a semantic unit. The resultant semantic units are used to refine the results of the search.

Paying attention to these types of meaningful compounds might be used in reranking search results so that pages that contain a compound are considered more relevant than documents that contain the individual words but not the compound.

The use of a compound might also help find query refinements – semantically meaningful alternatives. For the “Baldur’s Gate” example quoted above, a semantically meaningful alternative may be “Baldur’s gate reviews” (i.e., written reviews of the game).


## Conventional approaches to meaningful compounds in queries

Compounds in queries could be identified based upon a matching of a list of previously identified compounds and upon statistics that describe the relative frequency of occurrence of the compounds.

The first approach involves extracting compounds from the web and looking for word sequences that occur with a statistically significant frequency. The problem with this method is that it would likely generate a much larger list of compounds than people would ever use to search within queries, and only a small fraction of identified compounds would ever be used.

The second approach involves extracting compounds from query logs. That may pose some problems in how people search. An example used in the patent:


> A disadvantage associated with finding compounds in query logs using statistical techniques is that word sequences occurring in query logs may not correspond to compounds in the documents. This is because queries, especially on the web, tend to be abbreviated forms of natural language sequences. For example, the words “mp3” and “download” may occur together often in query logs but “mp3 download” may not occur as a compound in a document.

Another issue, and where the word “semantic” comes into play in this document, is that the meaning of the query is important:


> A disadvantage of both corpus and query log-based techniques, and indeed of any technique relying purely on previously detected compounds and statistics to segment a query, is that they tend to ignore the meaning of the query. Such techniques may identify a compound that is not consistent with the meaning of the query, which can negatively impact applications that rely on the compound as being a semantic unit within the query.
>
> For example, the queries “country western mp3” and “leaving the old country-western migration” both have the words “country” and “western” next to each other. Only for the first query, however, is “country-western” a representative compound. Segmenting such queries correctly requires some understanding of the meaning of the query. In the second query, the compound “western migration” is more appropriate, although it occurs less frequently in general.


## Finding semantic units

How are meaningful compounds identified based on the overall context of a user query?

1) Individual search terms in the query are matched to an index of the Web, and substrings of the query are generated. For each of those generated substrings, a value is calculated that relates to the portion of the identified documents that contain the substring. Semantic units are selected from the generated substrings based on those calculated values.

2) The list of relevant documents for those searches is refined based on the selected semantic units.

3) Semantic units might be chosen from a predetermined number of the most relevant documents in the list returned by the ranking component.

4) “Relevance” in this context could be defined based on factors that could include the proximity between query words (pages in which the query words are close to each other are considered more relevant) and the order of the words in the returned document (e.g., documents in which the query words are in the same order as in the query phrase are considered more relevant).

In other words, a search is performed by first identifying documents related to the individual terms in the query. Meaningful Compounds are then selected using a methodology based on the rate of occurrence of the compound within the identified documents. Results are reranked based upon the use of those compounds.
