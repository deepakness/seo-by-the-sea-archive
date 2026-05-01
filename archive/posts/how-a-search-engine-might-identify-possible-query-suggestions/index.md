---
title: "How Query Suggestions May be Identified by Google"
source_url: "https://www.seobythesea.com/2010/05/how-a-search-engine-might-identify-possible-query-suggestions/"
slug: "how-a-search-engine-might-identify-possible-query-suggestions"
date_published: "2010-05-26T15:58:17+00:00"
date_modified: "2020-07-27T13:18:23+00:00"
author: "Bill Slawski"
---

Query Suggestions are from search engines providing alternative queries to fulfill the informational or situational needs of a searcher.


> Like the information architects who organize the content on websites, search engine designers should aspire to provide users with scent at every step of their information-seeking process. Techniques like query suggestions, faceted search and results clustering all offer users the opportunity to make progress on their next step, rather than always having to restart the information-seeking process from scratch. Indeed, faceted search is a popular technique for offering users such guidance.
>
> While users are ultimately responsible for expressing their information needs, it is the search engine’s job to act as a reference librarian and help the users in this process.
>
> Reconsidering Relevance and Embracing Interaction
>  by Daniel Tunkelang

When you search at Google, you may notice some alternative search query suggestions within your results.

Those query suggestions offer related terms that might be helpful when the terms you used might not quite provide the information that you’re looking for. There are many different ways that a search engine might locate and identify potential query suggestions. One is by looking at the search engine’s query log files for potential query suggestions. The other involves looking at the frequency of terms that show up in documents found in search results, or search result snippets for a particular query.

Search query suggestions are the focus of a Google patent originally published in 2005 and granted to Google this week. Google may have moved on to other methods of identifying query suggestions, but the processes described within the patent appear to have been influential in later work involving the expansion of queries in search results, classification of web pages, and related processes. A couple of white papers from the inventors of the patent describe the process behind this query suggestions approach in a great amount of detail:

- [A Web-Based Kernel Function for Measuring the Similarity of Short Text Snippets](http://wwwconference.org/proceedings/www2006/devel-www2006.ecs.soton.ac.uk/programme/files/pdf/3069.pdf) (pdf)
- [Mining the Web to Determine Similarity Between Words, Objects, and Communities](http://robotics.stanford.edu/users/sahami/papers-dir/FLAIRS-06.pdf) (pdf)

A check at Google Scholar revealed 150 citations to the “Web-Based Kernel” paper.

In short, the papers describe how a search engine might find it more likely that when someone searches for “AI,” they likely mean “artificial intelligence,” rather than some other term that the abbreviation might be short for. It explains how a search for Steve Ballmer might include a query suggestion for “Microsoft CEO,” while a search for Bill Gates (a former Microsoft CEO) might include a query suggestion for “Microsoft Founder,” rather than “Microsoft CEO.”

It also explains how the terms “NASA” and “Space exploration” might be seen to be more related than “vacation travel” and “space travel,” even though the first two phrases don’t share a single term and the second both include the word “travel.”

The patent provides another example of when a searcher might need query suggestions:


> Language difficulties might cause a person to search for using the wrong keywords. A person who lacks familiarity with the language of the content being searched might use the wrong keywords. Even a person who is familiar with the language of the content might make mistakes.
>
> For example, a British citizen who seeks information about temporarily obtaining a car in the United States might search “car for hire” rather than “car for rent.” The latter query more accurately reflects conventional usage in United States English and is likely to produce better search results.

The query suggestions patent is:

[Generating query suggestions using contextual information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,725,485.PN.&OS=pn/7,725,485&RS=PN/7,725,485)
Invented by Mehran Sahami and Timothy D. Heilman
Assigned to Google Inc.
US Patent 7,725,485
Granted May 25, 2010
Filed August 1, 2005Abstract


> A search engine receives a query from an end-user. The search engine executes the query on a content database and identifies a set of matching content. The search engine utilizes the matching content to generate a query vector describing the end-user query.
>
> The search engine searches a repository of other vectors, called “centroids,” to produce a ranked set of centroids matching the query vector. These centroids are converted into search queries and form a set of candidate queries. The search engine filters the candidate queries to identify ones that are likely to be meaningful to the end-user. The selected candidate queries are returned to the end-user as query suggestions.

In simple terms, here’s a high-level overview of how the query suggestions process involved in the patent may work:

The search engine:

1. Receives a query from a searcher
2. Selects one of more pages in response to the query
3. Chooses the highest-weighted terms from each of those pages
4. Identifies the most common terms from those pages
5. Looks to see if this process has been done before for that particular query, and if so finds previous collections of those most common terms (search results change over time, and the terms collected may differ)
6. Calculates a degree of similarity between each previously stored collection of terms (if any) and the most recent
7. Sorts the previous collections of terms to see which matches most closely the newest
8. Converts terms from the most highly ranked of previous collections of terms into candidate query suggestions
9. Examines those candidate query suggestions in a ranked order
10. Adds candidate query suggestions to a set of suggestions if they contain a certain level of new terms that are not included in the original query, and
11. Provides the set of query suggestions to the searcher, in response to the original query

The process described could use the full documents identified within the search results for the original query, or a summary or short snippet (possibly up to 1,000 words) from those documents.

It’s also possible that terms identified by this method could be used in other ways, such as providing additional query suggestions that might be used to expand the original search, or by providing terms that might be used to classify web pages to help identify appropriate advertisements for those pages.

When the search engine looks for previous collections of terms (or centroids) that might have been identified in the past in relation to a particular query, it might take those from a few different sources, such as:


> - Queries culled from real-world queries received by the search engine during a given time period,
> - A set of training queries fed to the search engine by an administrator, and/or
> - Hand-coded data.

While I’ve given a rough overview of the processes described in the patent, it goes into considerably more detail. If you want to dive into it, I highly recommend that you read the two papers I linked to above first which are easier to read and understand, and include many other examples.


## Other Approaches to Query Suggestions

This Google patent was originally filed in 2006, as were the whitepapers that describe the processes within it. While the search result-based process it uses appears to have been influential given the number of times the first paper linked above was cited on other white papers, there have been a large number of other papers describing other ways to identify possible query suggestions.

Many of the more recent ones look at the query logs of the search engines to see things such as other queries used in the same query sessions from searchers, or pages clicked upon during query sessions, or other search-log based approaches to identifying query suggestions. Here are some of those, including a couple of videos and slide presentations, mostly from 2007 to the present.

***Google Query Suggestions***

- [Large-scale Computation of Distributional Similarities for Queries](https://www.aclweb.org/anthology/N09-2008/) (pdf)
- [Gazpacho and summer rash: lexical relationships from temporal patterns of web search queries](https://www.aclweb.org/anthology/D09-1109/) (pdf)

***Microsoft Query Suggestions***

- [Query Suggestion based on User Landing Pages](http://web.archive.org/web/20160429053629/http://research.microsoft.com/en-us/um/people/ryenw/papers/cucerzansigir2007.pdf) (pdf)
- [Cross-Lingual Query Suggestion Using Query Logs of Different Languages](http://www.iro.umontreal.ca/~nie/Publication/gao-sigir-07.pdf) (pdf)
- [Search-based Query Suggestion](http://web.archive.org/web/20170223050212/http://jmyang.info/papers/cikm_2008_querysuggestion.pdf) (pdf)
- [Query Suggestion Using Hitting Time](https://www.microsoft.com/en-us/research/publication/query-suggestion-using-hitting-time/) (pdf)
- [Context-aware query suggestion by mining click-through and session data](https://www.cs.sfu.ca/~jpei/publications/QuerySuggestion-KDD08.pdf) (pdf)
- [Towards Context-Aware Search by Learning A Very Large Variable Length Hidden Markov Model from Search Logs](http://staff.ustc.edu.cn/~cheneh/paper_pdf/2009/p191.pdf) (pdf)
- [Optimal Rare Query Suggestion With Implicit User Feedback](https://www.microsoft.com/en-us/research/publication/optimal-rare-query-suggestion-with-implicit-user-feedback/) (pdf)

***Yahoo query suggestions***

- Mining Broad Latent Query Aspects from Search Sessions (pdf)

***Yahoo Query Flow Graphs***

- [Query Suggestions Using Query-Flow Graphs](https://chato.cl/papers/boldi_2009_query_recommendations.pdf) (pdf) [Video](http://videolectures.net/wscd09_castillo_qsqf/)
- [Aging Effects on Query Flow Graphs for Query Suggestion](https://chato.cl/papers/nardini_2009_time_effect_query_flow_graph.pdf) (pdf)
- [An Optimization Framework for Query Recommendation](http://www.wsdm-conference.org/2010/proceedings/docs/p161.pdf) (pdf) Slides
- [From “Dango” to “Japanese Cakes”: Query Reformulation Models and Patterns](https://chato.cl/papers/boldi_2009_query_reformulation_patterns.pdf) (pdf)

***Academic Query Suggestions Papers***

- [Analyzing and Evaluating Query Reformulation Strategies in Web Search Logs](https://jeffhuang.com/Final_Reformulation_CIKM09.pdf) (pdf)
- Intentional Query Suggestion: Making User Goals More Explicit During Search (pdf)
- [Why do users neglect suggestions?: Effects of semantic relatedness and task on word recognition](https://www.ideals.illinois.edu/handle/2142/15044) (pdf)
- [Query suggestion by query search: a new approach to user support in web search](http://webdocs.cs.ualberta.ca/~holte/Publications/WebIntelligence2009.pdf) (pdf)
- Effects of popularity and quality on the usage of query suggestions during information search (ppt)
- [Analysis of Long Queries in a Large Scale Search Log](http://videolectures.net/wscd09_bendersky_alqlssl/) (video)


## Conclusion

At the start of this post, I included a quote from Daniel Tunkelang, who joined Google sometime after publishing the paper the quote was taken from. His suggestion that search engines are beginning to act more like reference librarians than simple indexes of the web is a point that should be given some careful thought.

When you write for the web, and you focus upon specific terms or phrases hoping that someone will search using those terms, you need to keep in mind that the search engines might suggest alternative queries to that searcher. Those query suggestions are likely mostly generated automatically by the search engines through a process like the one described in the Google patent, or in the papers that I listed at the end of this post.

Those query suggestions may also change over time – if the search engine is using a search results-based approach, query suggestions may be based upon a certain number of the top results for that query. If the search engine is using a search log approach, the suggestions may change based upon other terms used by a searcher during the same search session, and/or pages being clicked upon and viewed in search results or another user behavior-based activity.

It’s also possible that some of the processes used to create query suggestions could also be amended to find additional terms to expand queries with or to classify pages into different categories to present as search results are broken down by category (as Bing sometimes does).

If you are creating pages for a website, and you decide to focus upon specific terms for the pages you develop, you may want to look at the suggestions that the search engines provide in search results for those terms, and keep an eye upon them. They might provide some ideas for changes to those pages, or additional pages if the suggestions are relevant for what you offer on your web site.

Updated June 9, 2019
