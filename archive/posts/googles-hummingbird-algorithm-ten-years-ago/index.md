---
title: "Semantic Query Information at Google"
source_url: "https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/"
slug: "googles-hummingbird-algorithm-ten-years-ago"
date_published: "2013-10-15T13:06:36+00:00"
date_modified: "2021-04-29T16:51:45+00:00"
author: "Bill Slawski"
---

*Added 2013-11-10* – Google was granted a continuation version of this same patent ([Search queries improved based on query semantic information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08577907&OS=PN/08577907&RS=PN/08577907)) on November 5th, 2013, where the claims section has been completely re-written in some interesting ways. It describes using a substitute term for one of the original terms in the query and using an inverse document frequency count to see how often that substitute term appears in the result set for the modified version of the query and the original version of the query. The timing of this update of the patent is interesting. The link below points to the old version of the patent, so you can compare the claims sections if you want.

In September, Google announced that they had started using an algorithm that rewrites queries submitted by searchers, which they had given the code name “Hummingbird.” At the time, I wrote a blog post about a patent from Google that seemed like it might be very related to the update because the focus was upon re-writing long and complex queries while paying more attention to all the words within those queries. So I called the post [The Google Hummingbird Patent](https://www.seobythesea.com/2013/09/google-hummingbird-patent/) because the patent seemed to be such a good match.

![Hummingbird Image from the Department of Forestry](media/hummingbird_penstemon_lg.jpg)

Image from Dr. Bill May from the US Forest Service on a page about wildflowers

Google has been granted several patents about query re-writing, sometimes also referred to as query expansion or query broadening, which try to make it more likely that the search engines will return results closer to what a searcher is looking for, even if they might not necessarily use the best choice of keywords to find the information that will fill their needs. I had also recently written about some other patents describing how Google might re-write queries. It seemed like they were putting together a framework that involved looking at search interactions to understand probabilities for ranking pages better.

Danny Sullivan, at Search Engine Land, published an [FAQ on the Hummingbird change](https://searchengineland.com/google-hummingbird-172816), and included this question and answer:


> **The new engine is using old parts?**
>
> Yes. And no. Some of the parts are perfectly good, so there was no reason to toss them out. Other parts are constantly being replaced. In general, “Hummingbird” Google says, “is a new engine built on both existing and new parts, organized in a way to especially serve the search demands of today, rather than one created for the needs of ten years ago, with the technologies back then.”

Knowing that Google had been working upon patents involving re-writing queries for many years, I took this statement as a challenge. Could I find a patent that looks like it describes how Hummingbird might work filed around a decade ago? So I searched around, and there was one on semantic query information co-invented by Google’s Head of Search Quality, who was involved in making the recent Hummingbird announcement, Amit Singhal. While the technology described in the patent was very similar, it is simpler. It doesn’t seem to focus on the need for mobile searches for responding to conversational spoken searches. Instead, it tells us:


> A search query entered by a user is typically only one query of many that expresses the information that the user desires. For example, someone looking to buy replacement parts for their car may pose the search query “car parts.” Alternatively, however, the search queries “car part,” “auto parts,” or “automobile spare parts” may be as effective or more effective in returning related documents. In general, a user query will have multiple possible alternative queries that could help return documents that the user considers relevant. An awareness of this kind of semantic query information can help return good search results.
>
> Conventionally, additional search queries relating to an initial user query may be automatically formed by the search engine based on different forms of a search term (e.g., “part” or “parts”) or based on synonyms of a search term (e.g., “auto” instead of “car”). This allows the search engine to find documents that do not contain exact matches to the user’s search query but are nonetheless relevant.

Interestingly, this older patent may have been filed back in 2003, but it wasn’t granted until 2011. The patent is:

[Search queries improved based on query semantic information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08055669&OS=PN/08055669&RS=PN/08055669)
Invented by Amit Singhal, Mehran Sahami, John Lamping, Marcin Kaszkiel, and Monika H. Henzinger
Assigned to Google
US Patent 8,055,669
Granted November 8, 2011
Filed: March 3, 2003

Abstract


> A search query for a search engine may be improved by incorporating alternate terms into the search query that are semantically similar to terms of the search query, taking into account information derived from the search query. Thus, an initial set of alternate terms that may be semantically similar to the original terms in the search query is generated.
>
> The initial set of alternate terms may be compared to information derived from the original search query. One example of such information is a set of documents retrieved in response to a search performed using the initial search query. One or more of the alternate terms may be added to the original search query based on their relationship to the information derived from the original search query.

This patent tells us that there are a few different ways of rewriting queries. Two methods that might be used would involve taking some words within the query and either using “stemming” to transform some of the words within the original query or looking up those words in a thesaurus. Stemming might involve looking at words with the same root (such as congress and congressional) and re-writing the query using those variations of the same word. Using a thesaurus might involve replacing a word such as “car” with a synonym such as “automobile.”

This older patent describes some potential problems with either of those approaches:


> One serious problem with the stem-based and synonym-based techniques for finding additional search queries is that two words may have similar semantics in some contexts but not in other contexts. For example, “automobile” has similar semantics to “car” in the query “Ford car” but not in the query “railroad car.” As a result, these techniques often produce search queries that generate irrelevant results. For another example, if the query “jaguars” was stemmed from the word “jaguar,” the query semantics may have been changed from that of animal to that of a popular car.

The more recent patent I’ve called the Hummingbird Patent doesn’t address stemming or a thesaurus or other ways of identifying synonyms that Google has been exploring. Both patents, though, look at identifying co-occurring words within the search results, each term used as a query or within query log files, for candidate synonym terms to be used to re-write a query. The patent filed in 2003 also discusses attempting to understand the “query context” of the original query to capture a meaningful re-written query.

The newer patent does a better job of describing a process that might be used to rewrite queries, taking the context of the whole original query under consideration. This new patent may have been created after considering how this query pre-processing might be done. We’re told in [Synonym identification based on co-occurring terms](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08538984&OS=PN/08538984&RS=PN/08538984) that query context is an essential part of this process:


> In general, one innovative aspect of the subject matter described in this specification can be embodied in methods that include the actions of evaluating a candidate synonym for a particular query term included in a search query using non-adjacent contexts. Specifically, a candidate synonym can be evaluated to determine if the candidate synonym is a synonym, or substitute term, for the particular query term, based on additional terms included in the search query that are not adjacent to the particular query term. For example, when the search query includes numerous terms, the context for a particular query term included at the beginning of the search query may be defined by a query term located at the end of the search query. The use of context for the particular query term can improve the overall confidence that a candidate synonym is a synonym for the particular query term.

So that shift in technology between now and 10 years ago seems to be in better using a semantic analysis based upon [finding co-occurring terms](https://www.seobythesea.com/2013/09/google-reform-queries-based-co-occurrence-query-sessions/) to build a way to understand the context of a query better.


## Semantic Query Information Conclusion

There have been many blog posts published on Hummingbird in the past couple of weeks that attempt to explain it better.

Some of these describe Hummingbird as something that makes better use of Google’s Knowledge Base and understanding of entities in queries and pages about those named entities. Considering that the announcement of Hummingbird also told us that it impacted 90% of all searches, that’s too big of an impact only to affect queries with specific people, places, or things in them. The example query we were given didn’t include a named entity either.

Some people ask me if semantic approaches such as the markup from schema.org played a role in how Hummingbird works and told them that I didn’t think so. While Schema.org markup can help a search engine understand what a page its indexing is about and might lead to rich snippets, it doesn’t focus upon re-writing queries and understanding their context better.

Should you change how you perform keyword research or write about the content after Hummingbird? Probably not if you’re focusing more on the concepts you’re targeting when researching keywords. As I wrote in [Should You be Doing Concept Research Instead of Keyword Research?](https://www.seobythesea.com/2012/05/should-you-be-doing-concept-research-instead-of-keyword-research/):


> It’s important to keep in mind that when you’re writing about a topic or doing keyword research, the words you’re choosing to use aren’t just strings of words rather embody certain concepts that may contain many different aspects.

Should you change how you’re doing link building after Hummingbird? PageRank is still part of how ranking at Google works, and attracting links to your pages is probably something you should keep trying to do. But, a big part of ranking under Hummingbird probably has something to do with understanding better how data collected about [interactions between different search entities](https://www.seobythesea.com/2013/08/relationships-search-entities/) might influence rankings of search results. For example, if people tend to click upon specific pages in response to certain queries and spend a fair amount of time on those results, the pages they click upon and dwell upon might be boosted in search results under the Hummingbird algorithm.

I’ve written a few posts about synonyms in search. Here are some of those:

- 2/19/2006 – [Multi-Stage Query Processing at Google](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/)
- 5/25/2007 – [Refining Queries Using a Local Category Synonym](https://www.seobythesea.com/2007/05/refining-queries-using-category-synonyms-for-local-and-other-searches/)
- 12/29/2008 – [How a Search Engine Might Use Synonyms to Rewrite Search Queries](https://www.seobythesea.com/2008/12/how-a-search-engine-might-find-synonyms-to-use-to-expand-search-queries/)
- 1/23/2009 – [Google to Expand Language Search and Shrink Our World?](https://www.seobythesea.com/2009/01/search-engines-to-expand-language-search-and-shrink-our-world/)
- 6/29/2009 – [Semantic Relations from Query Logs](https://www.seobythesea.com/2009/06/query-logs-and-the-slang-of-the-web/)
- 12/22/2009 – [Google Search Synonyms Are Found in Queries](https://www.seobythesea.com/2009/12/how-google-may-expand-searches-using-synonyms-for-words-in-queries/)
- 1/19/2010 – [Google Synonyms Update](https://www.seobythesea.com/2010/01/google-synonyms-update/)
- 1/27/2010 – [Paid Search Results and Query Expansion using Synonyms and Related Concepts](https://www.seobythesea.com/2010/01/paid-search-results-and-query-exansion-using-synonyms-and-related-concepts/)
- 2/16/2011 – [More Ways Search Engine Synonyms Might be Used to Rewrite Queries](https://www.seobythesea.com/2011/02/more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with/)
- 8/12/2013 – [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- 9/27/2013 – [The Google Hummingbird Patent?](https://www.seobythesea.com/2013/09/google-hummingbird-patent/)
- 12/8/2013 – [How Google May Rewrite Queries](https://www.seobythesea.com/2013/12/rewrite-search-terms/)
- 9/9/2013 – [How Google May Reform Queries Based on Co-Occurrence in Query Sessions](https://www.seobythesea.com/2013/09/google-reform-queries-based-co-occurrence-query-sessions/)
- 10/15/2013 – [Google’s Hummingbird Algorithm Ten Years Ago](https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/)
- 12/21/2015 = [How Google Might Make Better Synonym Substitutions Using Knowledge Base Categories](https://www.seobythesea.com/2015/12/how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories/)

Last Updated September 18, 2019.
