---
title: "Mining Search Queries for Information"
source_url: "https://www.seobythesea.com/2006/06/mining-searchers-queries-for-information/"
slug: "mining-searchers-queries-for-information"
date_published: "2006-06-21T17:28:02+00:00"
date_modified: "2020-01-21T15:18:01+00:00"
author: "Bill Slawski"
---

Search engines, and the people who constantly improve and update them are getting smarter and smarter when it comes to finding ways to make the results of those search engines more relevant.

One area they are paying more attention to is in search engine log files, watching how searchers interact with the search engines. I wanted to do some more research on how researchers might be looking at search queries, and collected some citations to a number of pages involving that type of research.

This is by no means the canonical list of search engine/user behavior papers, but it’s a start…

**More on Deletion Predictions**

On Sunday, I wrote about a patent application from Yahoo that looked at one aspect of how searchers interacted with the search engine in [User Behaviour: Deletion Predictions](https://www.seobythesea.com/2006/06/user-behaviour-deletion-predictions/)

Jean-Marie Le Ray, of [Adscriptor](http://www.adscriptor.com/), left a couple of comments about that document in the thread on the [Google Autolink Patent](https://www.seobythesea.com/2006/06/google-autolink-patent/), in which he uncovered a poster from the SIGIR in 2003, looking at [Query word deletion prediction](http://www.cs.cmu.edu/~rosie/papers/jonesSIGIR2003Query.pdf). Thank you, Jean-Marie.

The authors of that paper were also the inventors named on the Yahoo patent application, [Rosemary Jones](http://www.rosiejonesphd.com/)) and Daniel C. Fain, and they do a nice job of explaining some of their research in language that is much clearer and easier to follow than in the patent filing. Here’s their abstract from that document:


> Web search query logs contain traces of users’ search modifications. One strategy users employ is deleting terms, presumably to obtain greater coverage. It is useful to model and automate term deletion when arbitrary searches are conjunctively matched against a small hand-constructed collection, such as a hand-built hierarchy, or collection of high-quality pages matched with key phrases. Queries with no matches can have words deleted till a match is obtained. We provide algorithms which perform substantially better than the baseline in predicting which word should be deleted from a reformulated query, for increasing query coverage in the context of web search on small high-quality collections.

**Studying Search Queries**

I’ve ordered these by year, but as I noted above, I haven’t tried to create the definitive list of papers on studying queries. It does seem to add something to have them listed chronologically, though.

*1998*

[Analysis of a Very Large AltaVista Query Log (1998)](https://www.hpl.hp.com/techreports/Compaq-DEC/SRC-TN-1998-014.pdf)
By Craig Silverstein, Monika Henzinger, Hannes Marais, and Michael Moricz

One of the very first large scale studies of user queries on a web-based search engine by anyone. Some of the types of things that they wanted to look at were things such as the average number of words per query, a number of search queries are included in the average user session, and so on. The document provides a nice look at what a search engine query log might be like, and how they record information about user sessions. The discussion about correlations they found between some terms in interesting, too. Here’s a snippet from the abstract of the document:


> Specifically, we show that web users type in short queries, mostly look at the first 10 results only, and seldom modify the query. This suggests that traditional information retrieval techniques might not work well for answering web search requests.
>
> The correlation analysis showed that the most highly correlated items are constituents of phrases. This result indicates it may be useful for search engines to consider search terms as parts of phrases even if the user did not explicitly specify them as such.

*2000*

[Use of query reformulation and relevance feedback by excite users](http://web.archive.org/web/20060509065328/http://jimjansen.tripod.com/academic/pubs/internetresearch2000.pdf)
By Amanda Spink, Bernard J. Jansen, and H. Cenk Ozmultu

When you click on the “similar pages” link at Google, you are telling the search engine something about the relevance of the results that they sent to you. Part of this study involving the Excite search engine looks at the use of a similar link there, the “more like this” link. Here’s a summary of some of their findings:


> A total of 985 user search sessions from a data set of 18,113 user search sessions containing 51,473 queries were examined. Includes a qualitative and quantitative analysis of 191 user sessions including more than one query, to examine patterns of user query reformulation; and second, all 804 user sessions including relevance feedback were examined. Results show limited use of query reformulation and relevance feedback by Excite users ± only one in five users reformulated queries.

*2003*

[Query Association Surrogates for Web Search](https://dl.acm.org/doi/10.5555/1059603.1059611)
By Falk Scholer, Hugh E. Williams, and Andrew Turpin

The HTML version of a powerpoint slide presenting the findings of a 2003 document by the same name, which discusses how queries associated with documents found in search engines can be used to describe those documents. Query associations and query based summaries can be effective as a way of describing the content of a document.

*2004*

[Spelling correction as an iterative process that exploits the collective knowledge of web users](http://web.archive.org/web/20170324063304/http://www-scf.usc.edu/~csci572/papers/Cucerzan.pdf)

Statistics extracted from search engine logs used to transform search queries into more likely queries. They note in the paper:


> To our knowledge, this paper is the first to show a successful attempt of using the collective knowledge stored in search query logs for the spelling correction task. We presented a technique to mine this extremely informative but very noisy resource that actually exploits the errors made by people as a way to do effective query spelling correction.

*2005*

[The Loquacious User: A Document-Independent Source of Terms for Query Expansion](http://web.archive.org/web/20150906115249/http://ils.unc.edu/~dianek/kelly-sigir05.pdf)
By Diane Kelly, Vijay Deepak Dollu, and Xin Fu

Explores interactive query expansion, on the premise that most search interfaces presently are set up to discourage longer queries, yet don’t provide adequate feedback mechanisms to help searchers refine their search queries.


> Rather than force users to interact with system suggested terms or documents, we were interested in investigating users as sources of terms for query expansion, independent of any information from the system. We were further interested in examining the relationship between query length and performance in a situation where queries were strictly user generated.

[Query Chains: Learning to Rank from Implicit Feedback (2005)](http://www.cs.cornell.edu/people/tj/publications/radlinski_joachims_05a.pdf)
By Filip Radlinski and Thorsten Joachims

The authors state that they believe most research into user behavior involving search engines has suffered because it looks at each query individually, instead of looking at them together. Viewing this kind of “query chain” can help search engines return better results. Unlike the Yahoo Deletion Prediction’s paper and patent, this document focuses upon organic results in search engines and things such as how some search queries may be tied together, or how spelling can be informed by subsequent searches with corrected spellings. Here’s a snippet from the abstract:


> This paper presents a novel approach for using clickthrough data to learn ranked retrieval functions for web search results. We observe that users searching the web often perform a sequence, or chain, of queries with a similar information need. Using query chains, we generate new types of preference judgments from search engine logs, thus taking advantage of user intelligence in reformulating queries.

*2006*

[Generating Query Substitutions](http://www.rosiejonesphd.com/papers/jones-www2006-generating-query-subs.pdf)
By Rosie Jones, Benjamin Rey and Omid Madani of Yahoo! Research and Wiley Greiner

Rosie Jones, from our Deletion Predictions patent application, is one of the authors here, and the focus of this research is on the use of reformed queries for use with paid search, to find good matches with advertisements. I actually find myself a little surprised by this one, because it means that the search engine could return ads from search queries that don’t really match the original query selected by the searcher, but instead will show ads for “substitute queries” that might be “close enough.”

Here’s part of the abstract:


> We introduce the notion of query substitution, that is, generating a new query to replace a user’s original search query. Our technique uses modifications based on typical substitutions web searchers make to their queries. In this way the new query is strongly related to the original query, containing terms closely related to all of the original terms. This contrasts with query expansion through pseudo-relevance feedback, which is costly and can lead to query drift. This also contrasts with query relaxation through boolean or TFIDF retrieval, which reduces the specificity of the query. We define a scale for evaluating query substitution and show that our method performs well at generating new queries related to the original queries.

[History Repeats Itself: Repeat Queries in Yahoo’s Logs](http://www.rosiejonesphd.com/)
By Rosie Jones and Michael Potts of Yahoo Research, Jaime Teevan (MIT), and Eytan Adar (University of Washington)

Take the anonymous users of 114 web browsers, and watch them for 365 days, to see how well they were able to use a search engine to re-find something that they may have found before.

Instead of a single session, this study encompasses a year, and it looks at a problem that one large survey says 17% of web users cited as one of the largest problems on the web – finding something that you had been able to locate before. Here’s a snippet from the study:


> The query a person issued was a good indicator of whether the searcher was going to click on a previously viewed result or not. Approximately 71% (3692/5216) of the queries that resulted in repeat clicks involved the same query string (e.g., a person searched for “oklahoma city fairgrounds”, clicked on a result, and then later searched with the same query and clicked on the same result). Not all identical queries led to a repeat click, but 87% (3692/4256) did. It was significantly less common for searches with the same query string to result in clicks on different results (1632 or 38%).

Interestingly, changes in search results would often make it much harder for people to “re-find” something they had located before.

[Query Phrase Suggestion from Topically Tagged Session Logs](http://ir.cs.georgetown.edu/publications/downloads/fqas2006_session_completion.pdf)
By Abdur Chowdhury of America Online, and Eric C. Jensen, Steven M. Beitzel, and Ophir Frieder

Instead of looking at deletions in queries, this paper looks at terms that were added to queries by users to help other users find what they are looking for. The initial issue they faced was this one:


> Analysis of search session logs shows that users often pose short, vague queries and then struggle with revising them.

And their solution was to look at query logs to find a solution:


> We find that suggesting query phrases other users have found it necessary to add for a given query (mined from session logs) dramatically improves the quality of suggestions over simply using co-occurrence. However, this exacerbates the sparseness problem faced when mining short queries that lack features. To mitigate this, we tag query phrases with higher level topical categories to mine more general rules, finding that this enables us to make suggestions for approximately 10% more queries while maintaining an acceptable false positive rate.

As they describe it, the ideal approach is in creating topical tags to use based upon previous query additions and allowing searchers to use those to refine their search queries.
