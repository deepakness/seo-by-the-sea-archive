---
title: "20 Ways Search Engines May Rerank Search Results"
source_url: "https://www.seobythesea.com/2006/10/20-ways-search-engines-may-rerank-search-results/"
slug: "20-ways-search-engines-may-rerank-search-results"
date_published: "2006-10-14T21:37:59+00:00"
date_modified: "2022-02-25T13:46:26+00:00"
author: "Bill Slawski"
---

*This is the first part about How Search Engines may rerank search results, in what is now a three-part series, with the second part available at [20 More Ways that Search Engines May Rerank Search Results](https://www.seobythesea.com/2007/09/20-more-ways-that-search-engines-may-rerank-search-results/), and a third part at [Another 10 Ways Search Engines May Rerank Search Results](https://www.seobythesea.com/2010/06/another-10-ways-search-engines-may-rerank-search-results/). It may be time for a fourth part soon. (Added 2013-08-31)*

Search engines try to match words used in queries with words found on pages or in links pointing to those pages when providing search results.

Often, the order that pages are returned to a searcher is based upon indexing of text on those pages, text in links pointing to those pages, and some measure of importance based upon link popularity.

Before pages are served to a viewer, however, a search engine may rerank search results for one reason or another. Here are some possibilities:

**1. Rerank search results by filtering of duplicate, or near duplicate, content**

Search engines don’t want the same page or content to fill search results, and substantially similar pages may be filtered out of search results. While not technically not a reranking of search results, as Dr. Garcia notes in Search Engine Patents On Duplicated Content and Re-Ranking Methods, this type of filtering has the result of changing the order in which results are returned to a searcher.

**2. Rerank Search Results by removing multiple relevant pages from the same site**

It isn’t uncommon for more than one page from a site to be relevant to a search query. Search engines try to limit the number of pages displayed in search results from the same site. If there is more than one page from a site that ranks for a search, a search engine may show a second result from that site after the first result, indenting the second page, and inserting a link to “more results from this site.” Additional results may not be shown.

**3. Rerank search results based upon personal interests**

A search engine may try to rerank results for a search to a specific searcher based upon past searches and other tracked activity on the web from that person. This kind of reranking may rely upon a person logging on to a personalized search. Here are a few different looks at how that might be accomplished:

- [Personalizing Search via Automated Analysis of Interests and Activities](http://susandumais.com/sigir2005-personalizedsearch.pdf) (pdf)
- [Variable personalization of search results in a search engine](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050216434%22.PGNR.&OS=DN/20050216434&RS=DN/20050216434)
- [Personalization of web search](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20050071328&OS=20050071328&RS=20050071328)

**4. Rerank search results based upon local inter-connectivity**

The search engine may grab results, and then reorder the top N (e.g., 100, 1000, etc.) search results based upon how they link between themselves.

- [Ranking search results by reranking the results based on local inter-connectivity](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=6526440.PN.&OS=PN/6526440&RS=PN/6526440)

Here’s a variation of that method:

- [Method for ranking hyperlinked pages using content and connectivity analysis](http://web.archive.org/web/20130514065024/http://patft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=6738678.PN.&OS=PN/6738678&RS=PN/6738678)

**5. Rerank search results by Sorting for country-specific results**

A searcher may wish to see results biased towards sites coming from a specific country. Someone could explicitly choose a preference for a specific country, or the system may try to dynamically understand such a preference based upon IP address. The following patent application explores methods for reranking based upon country preferences.

- [System and method for providing preferred country biasing of search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040254932%22.PGNR.&OS=DN/20040254932&RS=DN/20040254932)

**6. Rerank search results by sorting for language-specific results**

Preferences regarding language may be set by the user in a browser, or through the search engine, or may be identified by the search engine while looking at the search query, the user interface, and characteristics of the search results. Here’s one look at how results might be modified if a preference can be identified:

- [System and method for providing preferred language ordering of search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040194099%22.PGNR.&OS=DN/20040194099&RS=DN/20040194099)

**7. Rerank search results by looking at population or audience segmentation information**

This method may look at things such as location, other individual demographic information, and information about groups that a searcher is associated with to help rank pages. Technically, this may not be considered a reranking since it doesn’t modify an original set of results, but there are baseline rankings that are altered by differences in populations.

- [Methods and systems for improving a search ranking using population information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050060310%22.PGNR.&OS=DN/20050060310&RS=DN/20050060310)

**8. Rerank search results based upon historical data**

Involving the age of documents, and of links to documents, and other historical data, pages can be reranked based upon a large number of time-related factors. This patent application from Google contains a laundry list of those:

- [Information retrieval based on historical data](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050071741%22.PGNR.&OS=DN/20050071741&RS=DN/20050071741)

**9. Rerank search results based upon topic familiarity**

Looking at pages for things like reading levels, use of stop words, and other textual features. A patent filing from Yahoo! that describes one way to do this, allows searchers to use an interface to choose introductory results and advanced ones, and a few degrees between:

- [System and method for biasing search results based on topic familiarity](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060212423%22.PGNR.&OS=DN/20060212423&RS=DN/20060212423)

**10. Rerank search results by changing orders based upon commercial intent**

Similar to the method described above under the use of a slider, [Yahoo! Mindset](http://web.archive.org/web/20130514223348/http://research.yahoo.com/node/2358) (no longer available) lets users determine the reordering of results based upon whether they want to see results that are more commercial in nature or informational.

**11. Reranking and removing results based upon mobile device friendliness**

Microsoft provides a way to serve pages that display well in mobile devices and discard pages that aren’t from search results:

- [Mobile friendly internet searches](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060212451%22.PGNR.&OS=DN/20060212451&RS=DN/20060212451)

**12. Rerank search results based upon accessibility**

Google recently came out with a specialized search that reorders pages based upon accessibility in their [Accessible Web Search for the Visually Impaired](https://www.google.com/accessibility/).

**13. Rerank search results based upon editorial content**

A granted Google patent describes reranking of search results based upon whether or not certain pages have been determined to be favored or unfavored.

- [System and method for supporting editorial opinion in the ranking of search results](https://patents.google.com/patent/US7096214B1/en)

**14. Reranking based upon additional terms (boosting) and comparing text similarity**

This Google/Berkeley document describes reranking of results for a news search by considering and adding additional query terms, and by looking at document similarities.

- [Query-Free News Search](http://www2003.org/cdrom/papers/refereed/p707/p707-henzinger.html)

**15. Reordering based upon implicit feedback from user activities and click-throughs**

There have been a lot of papers and patent filings that describe the reordering of search results by looking at user behavior and query selections. Here’s one that describes looking at different queries over user sessions:

- Query Chains: Learning to Rank from Implicit Feedback (pdf)

**16. Reranking based upon community endorsement**

A number of documents refer to the use of collecting information from a large number of searchers or users of social networks. Here’s a small sampling:

- [Computer method and apparatus for collaborative web searches](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060136377%22.PGNR.&OS=DN/20060136377&RS=DN/20060136377)
- [Search systems and methods with integration of aggregate user annotations](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050256867%22.PGNR.&OS=DN/20050256867&RS=DN/20050256867)
- [Search system and methods with integration of user annotations from a trust network](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=14&p=1&f=G&l=50&d=PG01&S1=reranking.BIS.&OS=spec/reranking&RS=SPEC/reranking)
- [Methods and systems for endorsing local search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060004713%22.PGNR.&OS=DN/20060004713&RS=DN/20060004713)

**17. Reranking based upon information redundancy**

Word probability distributions from a set number of results try to identify different topics that may be covered by a query, and this method could be used to try to show a diverse set of results based upon those categories.

[Utilizing information redundancy to improve text searches](http://web.archive.org/web/20130514065049/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,051,014.PN.&OS=PN/7,051,014&RS=PN/7,051,014)

**18. Reranking based upon storylines**

This document from IBM takes search results, and reorganizes them into storylines which it expands upon in some ways, and filters in others, before presenting those storylines to a searcher

- [System for identifying storylines that emerge from highly ranked web search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050246321%22.PGNR.&OS=DN/20050246321&RS=DN/20050246321)

**19. Reranking by looking at blogs, news, and web pages as infectious disease**

An analogy is used to disease-propagation models in this IBM patent application to describe how segmentation into topics paying attention to time-based changes and additions to those topics in the blogosphere and on bulletin boards might tell a search engine which topics and terms are popular, and where information about those might be located. While the process is described in the context of providing news-based alerts, the concept could be expanded to help with the reordering of search results based upon measures of popularity and burstiness (for instance, in the next section.)

- [System, method, and service for segmenting a topic into chatter and subtopics](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050246321%22.PGNR.&OS=DN/20050246321&RS=DN/20050246321)

**20. Reranking based upon conceptually related information including time-based and use-based factors**

In several ways, this next patent application describes a process similar to the last two methods listed. It involves grouping together concepts and looking at how those change over time and how different people participate in those changes. One of the co-inventors listed is Apostolos Gerasoulis, from Ask.

- [Methods and systems for providing a response to a query](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060230040%22.PGNR.&OS=DN/20060230040&RS=DN/20060230040)

**Conclusion**

The rankings that you see for web pages in response to a query may not be the same rankings that other people see.

This isn’t a comprehensive listing of documents or processes that describe ways search engines may rerank pages, but it covers a lot of different possibilities. Some of these reranking processes are being used now, others may be in place, some may be used in the future, and a few not used at all. But chances are good that even more processes for changing the orders of search results will come about in the future.

For each of these methods of reranking, there may be ways to make sure that the pages of a site will continue to rank well even if search results for different users are reordered. How would you go about addressing them?
