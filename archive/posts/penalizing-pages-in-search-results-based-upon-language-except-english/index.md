---
title: "Language Matching Ranking in Search Results"
source_url: "https://www.seobythesea.com/2006/12/penalizing-pages-in-search-results-based-upon-language-except-english/"
slug: "penalizing-pages-in-search-results-based-upon-language-except-english"
date_published: "2006-12-30T19:29:04+00:00"
date_modified: "2020-06-23T09:18:20+00:00"
author: "Bill Slawski"
---

Knowing something about the language used in a query might help a search engine decide which pages to show a searcher. A search engine wants to lead its users to pages they can read. A recent Microsoft patent application explores how language types can be used in ranking pages in search results.

Language types can be seen as a measure of relevance because they can help find pages relevant for a search. They are considered a “query-dependent” measure of relevance because while the language type for a page can be identified before anyone performs a search that might include the page, the language used in the query influences which results are shown.

Query-independent measures, or attributes, are different. I wrote previously about a couple of other Microsoft patent applications which this one notes are related, in a post titled [Ranking Search Results by File Type and by Click Distance](https://www.seobythesea.com/2006/09/ranking-search-results-by-file-type-and-by-click-distance/).

Those two measures are considered “query independent,” because whatever words used in the query that might return those pages is irrelevant to the ranking method.

If an HTML document is preferred to a pdf file, it doesn’t matter what the search term was. If a page is one click away from a home page, as opposed to five clicks away, the search phrase used to find it could be anything and that wouldn’t affect the ranking factor bestowed upon the page based upon click distance.

Query dependent and query independent attributes can be combined to determine search result orders. Something like PageRank is query independent. Add to it an analysis of the anchor text used to point to pages, a query dependent attribute, and you can see how the two might work together.

Another example of a query-dependent ranking function would be to count the number of times a search term appears in a document.

In addition to being about ranking pages by language types, this patent application is one of a number that looks at different ranking factors, both query dependent, and query independent.


## The Language Matching Ranking Patent Application

[Ranking search results using language types](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060294100%22.PGNR.&OS=DN/20060294100&RS=DN/20060294100)
Invented by Dmitriy Meyerzon and Hugo Zaragoza
Assigned to Microsoft
US Patent Application 20060294100
Published December 28, 2006
Filed: April 26, 2006

Abstract


> Search results of a search query on a network are ranked according to an additional ranking function for the prior probability of relevance of a document based on document property. The ranking function can be adjusted based on a comparison of the language that a document is written in and the language that is associated with a search query. Both query-independent values and query-dependent values can be used to rank the document.


## A Summary of the language ranking matching process

This is a way of ranking search results according to language. It aims to penalize documents that don’t match the language of the query, in a way that is independent of other ranking features.

1. A document’s language is identified by a statistical analysis of the page’s character distribution, and by comparing it to trained language character distribution.

2. The reason why language is detected rather than taken from metadata (such as language tags in HTML) is that “language detection is a relatively straightforward procedure with high precision”, and because “metadata is often ambiguous or wrong, or missing.”

3. Language detection is normally performed during indexing (rather than crawling or serving search results).

4. A query’s language is taken either from browser request headers or from client application (language preferences set in a browser, for example).

5. The language from the query is compared with the detected language from the document.

6. Matches of language happen when the document and query share a primary language (note that a German-Swiss query will typically be considered to match a German-German document), or if the document’s primary language is English.

7. So, pages written in languages a user can’t read are penalized, except for English documents (because of the assumption that most people that use the Internet can read English or understand different flavors of English).

8. The total ranking function is modified by this language type feature, which adjusts the ranking of documents based upon language matches between files and queries, which should improve the overall precision of the search engine.

9. User Feedback from previous queries can be used as relevance judgments to derive a weight of relevancy associated with each language type comparison.

10. That weight could be treated as a ranking function parameter, and the behavior of the performance measure on different values of the weight may be observed.

11. Once a language type comparison is performed on a page, the file type is incorporated into the score for the page.

12. The page’s score, incorporating the language type comparison, determines the page’s rank among the other pages within the search results.

13. Other document properties may affect the relevance of a document independent of the query (such as file type and size of the file).

14. Instead of individual language types, classes of language can be used, so that a document isn’t penalized when the document has a language that is in the class as the query language. So, if the language on a page is determined to be Dutch, the language type stored in the index for the page can be Dutch or possibly German, because it can be assumed that German readers can read Dutch.


## Language Matching Ranking Conclusion

I’m beginning to wonder if we will see a separate patent application in the future from Microsoft on every ranking factor that they decide to use to rank web pages. I don’t think that’s a bad idea, but it does potentially provide a lot of insight into how they are ranking web pages.

I don’t know how safe that assumption is that most folks who use the internet understand one of the different flavors of English.

Interesting that the process relies upon its analysis of the language type of a page rather than relying upon a language attribute or meta tag.
