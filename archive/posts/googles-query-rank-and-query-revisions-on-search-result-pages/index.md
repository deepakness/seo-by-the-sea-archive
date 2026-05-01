---
title: "Google's Query Rank, and Query Revisions on Search Result Pages"
source_url: "https://www.seobythesea.com/2006/10/googles-query-rank-and-query-revisions-on-search-result-pages/"
slug: "googles-query-rank-and-query-revisions-on-search-result-pages"
date_published: "2006-10-05T12:49:20+00:00"
date_modified: "2020-06-21T13:09:42+00:00"
author: "Bill Slawski"
---

## How are Query Revisions Created?

You may have noticed that sometimes when you perform a search in Google, there is a set of query revisions offered in the middle of the first ten results for your search. Not much has been said about those by Google, but a patent application published this morning provides some insight into how those refined queries may be displayed, and how they may be found.

This Query Revisions patent application may have some implications for keyword research, which I discuss briefly in the conclusion to this post.

[Query revision using known highly-ranked queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224554%22.PGNR.&OS=DN/20060224554&RS=DN/20060224554)
Invented by David R. Bailey, Alexis J. Battle, David Ariel Cohn, Barbara Engelhardt, and P. Pandurang Nayak
US Patent Application 20060224554
Published October 5, 2006
Filed: November 22, 2005

Abstract


> An information retrieval system includes a query revision architecture providing one or more query revisers, each of which implements a query revision strategy. A query rank reviser suggests known highly-ranked queries as revisions to a first query by initially assigning a rank to all queries, and identifying a set of known highly-ranked queries (KHRQ). Queries with a strong probability of being revised to a KHRQ are identified as nearby queries (NQ). Alternative queries that are KHRQs are provided as candidate revisions for a given query. For alternative queries that are NQs, the corresponding known highly-ranked queries are provided as candidate revisions.


## Issues around Query Revisions Raised in the Patent Application

The patent filing discusses how Google might refine queries, but it first looks at why the search engine would attempt to automate the process:

1. Search engines often use statistical measures of term and document frequency, along with links between documents and between terms to calculate the relevance of a document to a query.

2. Assumption – a searcher’s query accurately represents what they are looking for.

3. Do searchers have trouble finding good queries? Unsatisfied with results, searchers will frequently try again with additional queries on the same topic. Of course, the issue may be that it is almost impossible to gauge intent based on a two or three-word phrase – see Danny Sullivan’s rant today at Search Engine Watch – [Hello Natural Language Search, My Old Over-Hyped Search Friend](https://www.searchenginewatch.com/2006/10/05/hello-natural-language-search-my-old-over-hyped-search-friend/), which interestingly points at Google’s Query Revisions towards the end of the post.

4. These additional tries may be broader or narrower searches and may also involve guessing names of entities, or changing the order or number of words. Searchers may try many different queries before being satisfied with results or giving up.

5. The patent also tells us that automated Query Revisions have been proposed and developed because some users are better than others at successfully revising queries. (Then again, if you are searching for something that you know very little about – a good use for a search engine – your level of expertise and ability are immaterial.)

6. A common approach to Query Revisions is to try to create more precise (i.e., narrower) queries from a more general query.

7. Query Revisions may be easiest for a search engine to do when searchers enter over-broad queries whose top results include documents related to what the searcher is looking for.

8. Query Revisions are not as easy or useful when:

- Searchers use too specific queries, or;
- When the top results aren’t related to what the searcher is seeking.

9. Another strategy that search engines could use would be to use synonym lists or thesauruses to expand a query. This doesn’t always work out well, and the quality of results depends upon the context of the query terms.


## A summary of the Query Revisions process described in the patent filing

A query revision architecture would be added to the search engine, enabling different strategies for revising queries to be tried – each strategy would involve its own unique “query revisor.”

Query revisors evaluate terms used in a search to find one or more potential revised queries.

The query revisors would exist upon a “revision server” which becomes part of the overall information retrieval system. This revision server decides upon which revised queries to present to searchers, and which search results to show.

Revisions and example results would allow searchers to “observe the quality of the search results for the revised queries,” and choose one to get a full set of search results if they wanted.

Suggested Query Revisions would come from session-based user data, attempting to address the intent of searchers by looking at and analyzing strings of queries that other searchers have used in the past.

This session-based user data would be collected from large numbers of individual searcher sessions, and may include such things as:

- click data,
- explicit user data, or;
- hover data.*

* The patent notes that a description of how to understand user feedback using hover data can be found in a presently unpublished patent application: U.S. application Ser. No. 10/749,440, filed on Dec. 31, 2003, entitled “Methods and Systems for Assisted Network Browsing.”

Ranking these query revisions is part of the process – a query rank reviser would suggest one or more known highly-ranked queries as a revision to a first query.

Process of suggesting ranked Query Revisions:


> 1. A query rank is assigned to all queries.
>
> 2. The query rank reviser creates a table of queries and respective query ranks, identifying the highest-ranked queries as known highly-ranked queries (KHRQ).
>
> 3. Queries with a strong probability of being revised to a KHRQ are identified as nearby queries (NQ), a pointer from each NQ to the corresponding KHRQ(s) is stored, and the KHRQs and NQs queries are indexed.
>
> 4. For a given query, the query rank reviser determines a revision probability concerning the indexed queries.
>
> 5. A revision score (RS) is calculated for each indexed query using the revision probability and query rank for the indexed query.
>
> 6. Then the indexed queries with the highest revision scores are retrieved as alternative queries.
>
> 7. Alternative queries that are KHRQs are provided as candidate revisions and for alternative queries that are NQs, the corresponding known highly-ranked query are provided as candidate revisions, using the pointers stored in the index.


## An Overview of the Query Revisions System

The parts of this system include:

1. A front-end server,
2. A search engine and associated content server,
3. A revision server, and;
4. One or more query revisers.

The query revisers may include a query rank reviser.

The system architecture is designed to:

- Allow any number of different query revisers to be used,
- Remove poor performing query revisers, and;
- Add new query revisers as desired.

This makes the system flexible so that it could be customized and adapted for things like:

- Specific subject matter domains, such as medicine, law, etc.,
- Enterprises, with revisers specific to particular business fields or corporate domains for internal information retrieval systems, or;
- Different languages and dialects.


## Confidence Measures

Each revised query would ideally be associated with a confidence measure that represents the probability that a revision produces more relevant results than the original query.

A potential revised query can be represented by a tuple (Ri, Ci), where:

- R is a potential revised query, and;
- C is the confidence measure associated with the revised query.

These confidence measures could be manually estimated beforehand for each revision strategy of each reviser. They can be created from an analysis of the results of the tested sample and revised queries. Or, a confidence measure for potential revised queries may be dynamically generated at run time.

Confidence measures could be created in the revision server and might take into account both query-dependent and query-independent data.


## Selecting query revisions

The search engine processes potential revised queries like normal queries and returns the results to the revision server. The revision server evaluates those results and compares the results for the revised query with those for the original query.

The process of selecting one or more revised queries as being the best revisions or at least most well suited for the original query involves:

1. Sorting revised queries by their associated confidence measures, from highest to lowest confidence.

2. Going through the sorted list, and sending those revisions (or a limited number of them, based upon a threshold involving the confidence measure) to the search engine to obtain sets of search results.


## Evaluation of potential revised queries

After getting results for potential revised queries, the revision server decides which ones to keep, and which to discard.

Here are some conditions looked at in that decision:


> i) The revised query produces at least a minimum number of search results. For example, setting this parameter to 1 will discard all (and only) revisions with no search results. The general range of an acceptable minimum number of results is 1 to 100.
>
> ii) The revised query produces a minimum number of “new” results in a revision’s top results. A result is “new” when it does not also occur in the top results of the original query or a previously selected revised query. For example, setting this parameter to 2 would require each selected revision to have at least two top results that do not occur in the top results of any previously selected revised query or the top results of the original query. This constraint ensures that there is a diversity of results in the selected revisions, maximizing the chance that at least one of the revisions will prove to be useful. For example, as can be seen in FIG. 3, the top three results 304 for each revised query are distinct from the other result sets. This gives the user a broad survey of search results that are highly relevant to the revised queries.
>
> iii) A maximum number of revised queries have not yet been selected. In other words, when a maximum number of revised queries have already been selected, then all remaining revised queries are discarded. In one embodiment, the maximum number of revised queries is set at 4. In another embodiment, the maximum number of revised queries is set between 2 and 10.


## Presentation of Query Revisions

Ideally, the revised query results are shown on a separate page, and links to them appear with the suggested revisions.

Those revised queries with some results may also be shown on the main results page for the original query when there’s a single very high quality revised query or a small number of very high-quality revisions. For example, spell corrected revised queries may be displayed with additional information such as title, URL, and a snippet of the top results to help the searcher decide whether or not the spell correction suggestion is a good one.

Confidence measures may be used to decide the best way to show revisions on the main result page for the original query.


## Query Rank

A query rank is assigned to all queries stored in the search engine’s log files. Here’s how it is calculated:

1. A query rank is defined using the occurrence frequency of a query (QF) and user satisfaction (US) with the query, e.g., the product of QF and US, i.e., (QR=QF.times.US).
3. User satisfaction may be measured as inverse revision frequency (IRF) – user satisfaction increases as revision frequency decreases.
4. Revision frequency can be defined as the number of times a query is revised divided by the total number of occurrences of the query.
5. So, query rank is defined as query occurrence frequency-inverse revision frequency (QF-IRF).

What this means is that highly ranked queries appear frequently, but are revised infrequently.


## An alternative approach for defining user satisfaction

User Satisfaction may also be defined by the quality of the query.

A quality score for a query could be estimated from user click behavior data estimating the length of clicks on search results.

That process is defined in another patent application that hasn’t been published yet, but relies upon the use of interaction profiles:

U.S. application Ser. No. 10/878,926, “Systems and Methods for Deriving and Using an Interaction Profile,” filed on Jun. 28, 2004

Quality scores are based on the estimated duration of the first selection of a search result – the amount of time between the first selection of a result, and a second selection.

(Note: I will often quickly open search results in multiple tabs, which would skew data like this.)


## Known highly-ranked queries (KHRQ) and nearby queries (NQ)

The patent goes into a lot of detail on determining query ranks and identifies the top queries as “known highly-ranked queries” (KHRQ). It also identifies nearby queries (NQ), which it considers to have a “strong probability of revision to a KHRQ – as measured by a similarity between the two. This similarity may be based upon:

- Semantic similarity – such as lexical similarity and/or overlap in word clusters for the queries,
- Syntactic similarity – involving such things as edit distance, term overlap, or other techniques commonly used in information retrieval.
- Behavioral similarity – such as number of times the nearby query has been revised (R) to the known highly-ranked query (R(NQ, KHRQ)) over the query occurrence frequency of the nearby query, or;
- Any combination thereof.

There is a lot more discussion in the patent application on ranking queries, and a detailed example is provided on how query revisions may take place.


## References to other patent filings

The patent filing refers to several other patent filings and specifically points out the following listed documents early on. All but one of these specifically listed documents are unpublished. A few others that have been published are also mentioned in the filing. It’s hard to tell how much we miss those documents in attempting to understand this process, without being able to read them.

These are related patent applications that this filing takes precedence over:

- U.S. application Ser. No. 11/094,814, filed on Mar. 29, 2005, entitled “Integration Of Multiple Query Revision Models,”
- U.S. application Ser. No. 11/096,198, filed on Mar. 30, 2005, entitled “Estimating Confidence For Query Revision Models,”
- U.S. application Ser. No. 11/095,920, filed on Mar. 30, 2005, entitled “Empirical Validation Of Suggested Alternative Queries,”

These are related patent filings, only one of which has been published so far:

- [Method and Apparatus for Characterizing Documents Based on Clusters of Related Words](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040068697%22.PGNR.&OS=DN/20040068697&RS=DN/20040068697) (20040068697)
- U.S. application Ser. No. 10/734,584, filed Dec. 15, 2003, entitled “Large Scale Machine Learning Systems and Methods;”
- U.S. application Ser. No. 10/749,440, filed on Dec. 31, 2003, entitled “Methods and Systems for Assisted Network Browsing;” and;
- U.S. application Ser. No. 10/878,926, “Systems and Methods for Deriving and Using an Interaction Profile,” filed on Jun. 28, 2004


## Conclusion

The processes in this patent application for generating Query Revisions are fairly detailed, and my overview covers a good portion of it, but not the whole thing.

If you are working on trying to optimize pages of a site for certain keyword phrases, this document shows the importance of checking to see if the search engine is offering Query Revisions for those terms and returning to check up regularly since the process of revising and refining queries may change and evolve.

Query Revisions suggested for some terms by the search engine may also point to what the search engine may think about certain queries, and may be worth exploring if you identify some terms to optimize a page of a site for, and the search engine serves Query Revisions for those terms.

Added November 10, 2009 – patent [granted](https://patents.google.com/patent/US7617205B2/en).
