---
title: "How a Search Engine Might Rerank Search Results Based upon Time-Based Data in Query Logs"
source_url: "https://www.seobythesea.com/2010/05/how-a-search-engine-might-rerank-search-results-based-upon-time-based-data-in-query-logs/"
slug: "how-a-search-engine-might-rerank-search-results-based-upon-time-based-data-in-query-logs"
date_published: "2010-05-31T16:25:43+00:00"
date_modified: "2020-06-19T16:48:52+00:00"
author: "Bill Slawski"
---

If you search at Yahoo for the phrase “world cup” (without the quotation marks), chances are good that the search engine will show you mostly pages about the 2010 World Cup, even though the tournament is held every 4 years and there may be many pages relevant for the phrase that don’t focus specifically upon a particular year.

How likely is it that when someone searches for “world cup,” they are looking for information about the upcoming tournament, taking place in South Africa between June 11th, and July 11th, 2010? On the other hand, how likely might it be that they want to find information about the world cup held in 2006? Or just general pages about the sporting event?

If I told you that the search engine was likely reordering those search results based upon time-based data, would it surprise you? Would you expect a Yahoo or Google or Bing to focus upon rerank search results in a manner like this, when they have some temporal aspect to them, such as a search for the Olympics, or the World Series, or the World Cup?

It’s possible a search engine looking through its query logs, and seeing if a particular query is included in more specific searches that include some kind of temporal data such as a year, or month, or day or time of day, and rewrite a searcher’s query to include that time-based information. A recent Yahoo patent application explains one fairly simple approach towards showing such information. The patent application is:

[Identifying and Expanding implicitly Temporally Qualified Queries](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100131538.PGNR.&OS=dn/20100131538&RS=DN/20100131538)
Invented by Rosie Jones, Donald Metzler, and Fuchun Peng
Assigned to Yahoo
US Patent Application 20100131538
Published May 27, 2010
Filed: November 24, 2008

Abstract


> Methods and apparatus are described for identifying implicitly temporally qualified queries, i.e., queries for which a period is implied but not explicitly stated, and for expanding such queries to include one or more temporal references.

I’ve written in the past about how Yahoo might look at some particular queries where a searcher doesn’t include geographical terms, but where the best search results might involve the search engine inferring a geographical location for search results in [How Search Engines Might Divine the Intent behind Regional Queries vs. Global Queries](https://www.seobythesea.com/2009/12/how-search-engines-might-devine-the-intent-behind-regional-queries-vs-global-queries/). I’ve also written about a previous Yahoo patent that describes how temporal data like this might be used similarly, in [How Search Engines May Try to Match Searchers’ Intents from Analysis of Search Engine Query Logs](https://www.seobythesea.com/2009/02/how-search-engines-may-try-to-match-searchers-intents-from-analysis-of-search-engine-query-logs/)

This patent application provides more explicit details on how the search engine might analyze or update information about searcher’s intents taken from query logs to give more weight in search results to some search results that include time-based information.

For instance, a counting based approach could be used looking at all queries:

1) A query search engine query log may be analyzed to count the number of queries that explicitly include a specific year, for instance by using that year as a prefix or suffix in their search (“2004 Olympics, Olympics 2008, etc.).

2) The number of times the term is used in a query is also counted

3) A ratio of specific year/query combinations is calculated for all of the times the broader query was used. such as (olympics+2004)/olympics, or (olympics+2008)/oylympics.

4) If the ratio is over a certain threshold, then all queries that contain the query term will be considered to be ‘implicitly year qualified.”

This kind of analysis of query logs would likely be conducted offline rather than every time someone searches for a term like “world cup” or “Olympics,” and cached log file information may be updated upon an ongoing basis as the search behavior data changes.

In a search for “world cup” on Yahoo, the search engine provides several “try also” search suggestions at the top of the search result that includes “world cup 2010″ and world cup 2006.” The patent filing mentions that the search engine could provide that type of query suggestion or even a timeline that searchers could use to select the year most relevant to their search.

We’re told that the search engine could also note at the top of the search results that the results have been modified to include the most relevant year, and offer a way that a searcher could reject that modification.

An alternative approach to calculating a ratio of queries that might include a specific year would be for the search engine to look at individual query sessions from searchers, and see how many times a searcher reformulates his or her query to include a year.

So, if someone was interested in learning who won American Idol in a specific year, and their first search was “American Idol”, and their followup search included a specific year such as “American idol 2006”, that query data information from specific queries could be used instead of a count of queries like mentioned above.

While I only see one search result for “American Idol” that includes a year in the Yahoo search results for that query term, the “predictive” search results that appear under the Yahoo search box offer me the following suggestions, amongst others: “American Idol 2010”, “American Idol 2009″, and American Idol 2008.” It looks like time-based information might be offered in those predictive searches even when this kind of temporal data isn’t necessarily used to rerank search results.

The patent application tells us that it might look at temporal data other than years,such as:

- Times of day,
- Individual dates,
- Days of the week,
- Specific weeks,
- Specific months,
- Specific decades,
- Specific centuries,
- Specific millennia,
- etc.

**Conclusion**

Search engines are attempting to look at more than the keywords that a searcher uses when they type a term into a search box. In their efforts to get at the intent behind a search, they may look through their query log files to see what other people have searched for about the query terms used.

That query log information could evidence a location-based intent in some instances, or time-based intent, or some other kind of intent completely.

What other kinds of signals in query logs besides location and time might the search engines decide to use to rerank the search results you see?

This kind of reranking of search results shouldn’t come as a [surprise](https://googleblog.blogspot.com/2009/12/personalized-search-for-everyone.html) to people paying close attention to what search engines are doing these days.

The results of a search for “World Cup” seem like a pretty good example of search results for the tournament being reranked to focus upon 2010. I’m not sure that I’ve seen results reranked based upon periods other than years, but I’ll be looking. If you come up with any examples of those and are willing to share, let us know in the comments below. Thanks.
