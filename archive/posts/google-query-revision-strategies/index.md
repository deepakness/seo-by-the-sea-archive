---
title: "Google Query Revision Strategies"
source_url: "https://www.seobythesea.com/2006/10/google-query-revision-strategies/"
slug: "google-query-revision-strategies"
date_published: "2006-10-13T15:00:14+00:00"
date_modified: "2012-06-10T13:15:16+00:00"
author: "Bill Slawski"
---

Understanding how and why a search at Google might offer alternative queries may be helpful when you are conducting keyword research.

Knowing a little about some of the strategies behind query refinement may enhance your research. Some refinement may take place in middle of the page query refinements, but it is possible that some may be merged into search results directly.

A patent application from last week defined a process that Google may use for offering mid-page refinements. I wrote about it in Google’s [Query Rank, and Query Revisions on Search Result Pages](https://www.seobythesea.com/2006/10/googles-query-rank-and-query-revisions-on-search-result-pages/).

That patent referred to three other patent applications that hadn’t been published yet, and stated that it takes precedence over those. Those patent applications were published this week, and while the newer patent application built upon, and possibly replaced those, there are aspects of them that are interesting, and may be helpful in understanding some of the strategies that Google uses to come up with alternative queries for some searches.

The three new patent filings are:

- [Integration of multiple query revision models](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060230022%22.PGNR.&OS=DN/20060230022&RS=DN/20060230022)
- [Empirical validation of suggested alternative queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060230005%22.PGNR.&OS=DN/20060230005&RS=DN/20060230005)
- [Estimating confidence for query revision models](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060230035%22.PGNR.&OS=DN/20060230035&RS=DN/20060230035)

Some strategies about query revision from the patent applications:

**1) Removing quotes in the original query, if present.**

Using quotes around a search term should result an exact match, with documents that contain the entire query string. By removing the quotes, the number of possible results is expanded, and allows the search engine to retrieve documents that may be relevant to terms in the search, regardless of whether or not they are in the exact order entered by the searcher.

**2) Adding quotes around the whole query.**

The opposite of the previous strategy, in some cases, the query might receive more relevant results if it is treated as an entire phrase.

**3) Adding quotes around query n-grams**

A number of successive terms (n-grams) within the query may be actual phrases, though the whole query may contain more than one phrase. Here are some ways that an n-gram within the query might be identified:

Ways to identify n-grams:

- Looking at a hand-built dictionary of common phrases.

- Reviewing a list of phrases built from frequency data, where they occur in a statistically significant frequency.

- Identification of common first names and last names, obtained possibly from places like census data, or other sources.

Finding and suggesting a query revision might mean looking carefully at results returned from looking at results from searches of some of these n-grams.

**4) Including stop words in some queries.**

Ranking algorithms commonly ignore terms that show up frequently in their index, such as “the,” “a,” “an,” “to,” etc. Sometimes, these may be important, such as in a query for “to be or not to be”. A query revisor might use the “+” operator to force the inclusion of stop words when they are present in a query.

**5) Stripping punctuation and other symbols.**

Some query refinements might involve removing punctuation and other symbols. Those may possibly change the meaning of a query. A searcher may use punctuation and symbols unintentionally (hitting a couple of keys at once, for instance), so providing a revision that doesn’t include those characters may be very helpful. For intentional use of punctuation, there may be search results that are relevant which don’t contain the punctuation (for example, bachelor’s degree vs. bachelors degree)

**6) Other methods**

The refinement reviser may also use other methods that narrow or refine a query to more specifically describe what a searcher is looking for. The patent application referred to above about query ranks and query revisions describes the process and details on how that might be done.

**7) Query Session Data from Previous Searchers**

This involves taking the query used and looking at session data from previous searchers who have searched for the same query and have refined their searches in some manner. It could involve clicking through certain results in response to queries, or deletions or additions of words in followup searches, corrections in spelling, and other tracking, during a session, of the way people attempt to find information about a specific subject which may involve that initial query.

**Conclusion**

Those strategies may provide some ideas of things to do when conducting keyword research for different phrases. For instance, are query refinements offered when you type the phrase in Google? Are query refinements being folded into the actual results?

These things might be worth looking at:

- What kind of results appear when the phrase doesn’t have quotation marks around it?
- What kind of results appear when the phrase does have quotation marks around it?
- If there are other possible phrases within your search phrase, what types of results appear for those?
- If there are stop words in your phrase, what results do you get if you place “+” directly in front of those stop phrases?
- If your phrase has punctuation in it, what appears in a search without the punctuation?
- What other popular phrases might be related to your phrase in some statistically meaningful way?

Exploring how your candidate keyword phrases are treated in the return of search results may inspire some other or additional research.
