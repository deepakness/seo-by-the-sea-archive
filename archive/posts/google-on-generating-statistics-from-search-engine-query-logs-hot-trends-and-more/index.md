---
title: "Google on Generating Statistics from Search Engine Query Logs (Google Trends and More)"
source_url: "https://www.seobythesea.com/2007/11/google-on-generating-statistics-from-search-engine-query-logs-hot-trends-and-more/"
slug: "google-on-generating-statistics-from-search-engine-query-logs-hot-trends-and-more"
date_published: "2007-11-24T16:46:15+00:00"
date_modified: "2020-01-20T11:04:19+00:00"
author: "Bill Slawski"
---

How might statistics created from user query logs be useful to search engines and to searchers?

A Google patent application published at the World Intellectual Property Organization, [Systems and Methods for Generating Statistics from Search Engine Query Logs](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007134130) (opens in new window), explores how such statistics might be created.

The filing lists Olcan Sercinoglu, Artem Boytsov, and Jeffrey, A. Dean as inventors, and was filed with WIPO on May 9, 2007. It was published on November 22, 2007, and appears to show the process behind [Google Trends](https://trends.google.com/trends/). But it provides much more information than that.

A real life example which expands upon how such statistics might be useful is a study that was conducted with the help of two of the inventors listed in the patent filing, [Language Preferences on Websites and in Google Searches for Human Health and Food Information](https://www.jmir.org/2007/2/e18/).

Here’s a description from that paper of their method used to create recommendations from health related web sites, which incorporated query information from Google:


> To estimate the percentage of Web publishers that translate their health and food websites, we measured the frequency at which domain names retrieved by Google overlap for language translations of the same health-related search term.
>
> To quantify language choice of searchers from different countries, Google provided estimates of the rate at which its search engine was queried in six languages relative to English for the terms “avian flu,” “tuberculosis,” “schizophrenia,” and “maize” (corn) from January 2004 to April 2006.
>
> The estimate was based on a 20% sample of all Google queries from 227 nations.

Query information may be used in different ways for different purposes, and people such as social scientists or marketers or politicians might have different motivations and need to look at different data. The patent application describes what a search engine might collect, and how it could be used:

A search engine receiving millions of queries each day from users around the world would generate a query record in its query log, which could include attributes such as:

1. Query terms submitted,
2. A timestamp indicating when the query is received by the search engine,
3. An IP address identifying a unique device (e.g., a PC or a cell phone) from which the query terms are submitted,
4. An identifier associated with a user who submits the query terms (e.g., a user identifier in a web browser cookie,
5. Whether the user identifier is associated with a toolbar or other application or service to which the user has subscribed.

An example given of another use for these stats might be a publisher gauging “the popularity of a newly released book in a specific city from the frequencies of relevant queries submitted by users from that city within a given time period.”

**Zeitgeist and Hot Trends**

We’ve seen some of this statistical query analysis from Google described in the Official Google Blog in a post from Artem Boystov titled [How we came up with year-end Zeitgeist data](https://googleblog.blogspot.com/2006/12/how-we-came-up-with-year-end-zeitgeist.html)

As he tells us there, the Zeitgeist information doesn’t tell us the most searched for terms, but rather ones that have increased from one year to the next in queries performed at Google.

This sharing of information about searches at Google has been expanded upon with Google’s [Hot Trends](https://googleblog.blogspot.com/2007/05/whats-hot-today.html), and [Trends](https://trends.google.com/trends/). Interesting tools to look at if you want to see what kinds of terms and news are timely, according to Google searches.

**Query Analysis in Other Google Patent Filings**

How else might Google be using query related information? There are a number of Google patent filings that describe ways that the search engine might be using that information to influence the rankings of search results. Here are three of them that are worth a look:

- [Document Scoring Based on Query Analysis](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070088692.PGNR.&OS=dn/20070088692&RS=DN/20070088692)
- [Methods and apparatus for employing usage statistics in document retrieval](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20020123988.PGNR.&OS=dn/20020123988&RS=DN/20020123988)
- [Methods and apparatus for determining equivalent descriptions for an information need](https://patents.google.com/patent/US6941293B1/en)

**Some aspects of the methods described in the patent filing**

*Privacy protection* — This process attempts to include safeguards to prevent disclosing information that may be traced to individuals or small groups of users.

*Query record information* — Different parts of what may be contained in a query record are described, such as the query terms, timestamps associated with searches, IP addresses mapped to the devices searches came from, cookie information or other user-identifying information, and possibly a way to understand the language associated with a query.

*Sampling Schemes* — It’s probably not necessary to look at all of the query records associated with a query, and this patent application describes a number of different possible ways of sampling that query data that would involve only looking at a percentage of the data – perhaps 10 percent to 20 percent. Every fifth query could be viewed, or queries could be broken into geographical regions using IP address information, and then a percentage of those could be taken, so that there’s a diversification of results from different places.

*Query Sessions* — The number of query records from the same IP address over a given period of time might be limited to avoid the sample from “being corrupted by bogus query data associated with malicious operations such as query spam.” But, looking at query records from the same IP address might impart important information. For example:


> Very often, a user may submit multiple related queries to the search engine within a short timeframe in order to find information of interest. For example, the user may first submit a query “French restaurant, Palo Alto, CA”, looking for information about French restaurants in Palo Alto, California. Subsequently, the same user may submit a new query “Italian restaurant, Palo Alto, CA”, looking for information about Italian restaurants in Palo Alto, California.
>
> These two queries are logically related since they both concern a search for restaurants in Palo Alto, California. This relationship may be demonstrated by the fact that the two queries are submitted closely in time or the two queries share some query terms (e.g., “restaurant” and “Palo Alto”).

*Understanding Query Sessions* — Query sessions might be viewed in short bursts from individual users, like ten minutes, with all queries assumed to be related, or longer sessions such as two hours, when the terms being used appear to be related. Multi-tasking, when searches definitely appear to be unrelated, such as a search for an “apple iPod” where the other searches were for restaurants in Palo Alto, could be split off into separate query sessions, even though they would continue to be associated with the same user and/or cookie information.

*Query Extraction Heuristics* — guideline rules that might be followed by this process, such as one that determines that consecutive queries would belong to the same session if they share some query terms or if they are submitted within a predefined time period (e.g., ten minutes) even though there is no common query term among them.

*Using Timestamps to Organize Queries* — timestamps when query sessions start (or end) and geographic values (from IP addresses) could be another way to organize query records and could be useful for aggregating information about the use of those queries. The Trends or Zeitgeist applications mentioned above would benefit from such an organization, though the information could be useful in other ways, too.

*Partitions for Query Session Records* — these records are too large for a single computer server to process them efficiently. A good percentage of the patent filing goes into detail on different strategies for partitioning these query log records and searching through that information. If you’re interested in how some of those different approaches may work, the document includes a number of examples which can walk you through some of the processes described.

**Interfaces for Statistics Related to Specific Query Terms**

The patent also tells us about how they might show some of the statistics about users related to particular query terms. The screenshot included doesn’t look too different from this Google Trends search for “iPod”.

*Popularity in Queries over time* — We might be shown a graph which displays the popularity of a term over a specific time period. Each of the data points shown on a curve of that information might correspond to a ratio between the number of users that have submitted at least one query related to that term during a particular week and the number of users that have submitted any query during that week. Peaks and troughs in the graph would suggest that the term’s popularity varies with time.

*News coverage over time* — Another curve might represent the volume of news coverage of the term during the same time period, with each data point on the curve telling us of the number of occurrences of the term in that week’s news coverage.

*Cities, Countries, and Languages* — Tabs might be shown which provide statistical information about the usage of specific queries based upon cities, countries, and languages. Under the Cities, tab may be the top 10 cities that have the largest number of users that have submitted at least one query related to the term. These numbers may not be the actual number of users searching from those cities, but rather a normalized value. Using this kind of normalized value, we learn about where increases in searches for specific terms from specific cities or countries or in different languages are taking place.

*Sorting by time or place* — Dropdown lists might also be included which reflect statistics based upon query session records for certain months, or particular countries.

**Conclusion**

As important as a search engine’s index of the Web may be, it may be possible to say that their index of query session information could be just as important, in that it can provide many insights into what people are looking for, and how they attempt to find that information.

Information about those searches, such as when and where they take place, and how they are used in the context of query sessions can be useful to the search engine, and to others – such as in the example of the research surrounding health-related web sites that I linked to above.

Being able to analyze user query information can be useful in the personalization of search results, in relating different query terms together, in determining which topics and search terms are timely and which are seasonal, in understanding how people might search for different topics differently, and in many other ways.
