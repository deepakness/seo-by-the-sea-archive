---
title: "Searcher Intent from Analysis of Search Engine Query Logs"
source_url: "https://www.seobythesea.com/2009/02/how-search-engines-may-try-to-match-searchers-intents-from-analysis-of-search-engine-query-logs/"
slug: "how-search-engines-may-try-to-match-searchers-intents-from-analysis-of-search-engine-query-logs"
date_published: "2009-02-13T11:52:12+00:00"
date_modified: "2021-07-06T15:23:24+00:00"
author: "Bill Slawski"
---

## Understanding Searcher Intent

When you type a search query term into a search box at Google or Yahoo or Live.com, the search engines might go through their indexes and try to find the most relevant and important pages in their databases for the word or phrase that you want to find out more about.

But those search engines might try to improve the results that they show to you by understanding a searcher’s intent behind a search rather than just looking for pages that match keywords that you typed as a search query.

**Search Engines and Searcher Intent**

What do the search engines themselves reveal about the importance of considering the intent behind a search?

Google tells us on one of their [search help](https://support.google.com/websearch/answer/2466433?hl=en&rd=1) pages that:


> Search is rarely absolute. Search engines use a variety of techniques to imitate how people think and to approximate their behavior. As a result, most rules have exceptions. For example, the query [ for better or worse ] will not be interpreted by Google as an OR query but as a phrase matching a (trendy) comic strip. Google will show calculator results for the query [ 34 * 87 ] rather than use the ‘Fill in the blanks’ operator. Both cases follow the obvious intent of the query.

Yahoo also mentions that they try to consider the intent behind a search on a help page of theirs titled How are web documents ranked:


> Search engines don’t have the ability to ask questions, so they rely on the search terms you enter to interpret and determine the intent of your search.

Microsoft’s Satya Nadella, senior vice president of their search, portal, and advertising platform group, also described how searcher intent plays a role in the results live.com shows to searchers in a [presentation](https://www.cnet.com/news/microsoft-sees-tailored-search-as-way-to-pierce-googles-armor/) from August of 2008:


> I believe this notion of understanding user intent–being able to analyze (search queries) and come up with search patterns and use them to shape the search experience–is one of the most important areas for us.

One set of intentions behind searches were identified in a paper from 2002, [A taxonomy of web search](https://www.cis.upenn.edu/~nenkova/Courses/cis430/p3-broder.pdf), which broke searches into three types; informational, transactional, and navigational.

A searcher conducts informational searches to fill some informational needs that they might have. Transactional searches are made to help a searcher conduct a task on the web. Navigational searches are intended to help a searcher find a specific page.

Identifying searcher intent behind a query can be a difficult task, as Google Researcher Dan Russell has noted in many presentations, including one at The San Francisco Bay Area Chapter of ACM SIGCHI in 2006, where [he described](https://baychi.org/calendar/20061212/#2) some of the approaches that Google takes to learn about intentions behind searches. One of those approaches involves looking at the log files of the search engines and seeing how people refine the searches that they perform during search sessions.

A couple of newly published patent applications from Yahoo describes how that search engine might look at log files to identify whether some queries evidence a searcher intent that might not be easily seen from just looking at the search query itself.

**Explicit and Implicit Searcher Intent**

The intent behind some searches may be easier for a search engine to interpret than others and might be considered to have an explicit intent behind them.

For example, if you’re searching for a new pair of shoes or a camcorder, you might include some words in your search that tell a search engine about that intention, such as “cheap sneakers” or “buy a camcorder.” A search engine might see using the words “cheap” or “buy” as an explicit indication that you want to make a purchase online.

If your search includes the word “reviews,” it may signal to the search engine that you want informational pages about specific kinds of products or services. A search for a place type and a geographic location might indicate to a search engine that you are conducting a local search, and you may be shown local search results when you type something like “San Jose Library” into a search box.

Other searches may not have such a clear searcher intent. The patent applications from Yahoo provide an example of a search for the term [olympics]. The best results to show a searcher might involve showing results from the Olympics from a specific year, even though the search didn’t include a year.

The search engine might look through its log of search queries from previous searchers, and see that many of the search queries that people used to find out information about the Olympics included a year within the query, such as:

- The 2004 Summer Olympics in Athens,
- The 2006 Winter Olympics in Turin,
- The 2008 Summer Olympics in China,
- The 2010 Winter Olympics in Vancouver, or;
- The 2012 Summer Olympics in London.

Many searches are “time-sensitive,” and mining search engine query logs to see a pattern like this might help a search engine understand searcher intent and influence which search results are shown to searchers. A search engine might boost rankings for pages that might show the most popular intents or that they might rerank search results to show a broad range of intents behind a query that has an implicit searcher intent behind it.

For example, if most of the people searching for the word “Olympics” tend to click on pages for the 2010 Olympics or refine their search query to include the year 2010, the search engine might start boosting search results relevant to the 2010 Olympics.

An alternative approach might be to look at those search engine query logs and see the percentages of people who click on results for Olympics associated with specific years or refine their search results for a specific year and show a diverse mix of search results for each of the years.

So, if 50 percent of searchers looking for “Olympics” seem to be looking for the 2010 Olympics, 30 percent appear to want to find out about the 2012 Olympics. The remainder of searches for the term “Olympics” doesn’t seem to have a specific date attached to them. The top ten (or top 100, or some other number) of search results might be half-filled with results about the 2010 Olympics, contain results about the 2012 Olympics for almost another third, and have more general pages about the Olympics, without necessarily having years attached to them.

The patent filings are:

[Extracting Query Intent from Query Logs](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090043749.PGNR.&OS=dn/20090043749&RS=DN/20090043749)
Invented by Priyank S. Garg, Kostas Tsioutsiouliklis, Bruce T. Smith, and Timothy M. Converse
US Patent Application 20090043749
Published February 12, 2009
Filed August 6, 2007

Abstract


> Techniques are provided for storing queries received by a search engine are in a query log.
>
> For a particular query term in the query, it is determined how many queries in the query log contain that particular query term and an intent-indicating term. It determined how many queries in the query log contain that particular query term without an intent-indicating term.
>
> Based on the ratio between the number of queries in the query log that contain the particular query term and the intent-indicating term and the number of queries in the query log that contain the particular query term without the intent-indicating term, it is determined whether the particular query term is intent-qualified.
>
> In response to determining that the particular query term is intent-qualified, data is stored in a computer-readable medium that identifies the query term as an intent-qualified query term.
>
> Implicit-intent queries that contain the intent-qualified query term are processed based, at least in part, on the intent associated with the intent-qualified query term.

[Estimating the Date Relevance of a Query from Query Logs](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090043748.PGNR.&OS=dn/20090043748&RS=DN/20090043748)
Invented by Farzin Maghoul and Kostas Tsioutsiouliklis
US Patent Application 20090043748
Published February 12, 2009
Filed: August 6, 2007

Abstract


> Techniques are provided, maintaining data indicating a plurality of query terms whether the plurality of query terms are date-qualified query terms.
>
> A query is received, and in response to receiving the query, the query is inspected to determine that the query contains a particular date-qualified query term.
>
> Then it is determined that the particular date-qualified query term has been associated with a plurality of dates. It is determined which of the plurality of dates with which to associate the date-qualified query term for the query, based at least partly on the frequency with which each particular date of the plurality of dates has been associated with the particular date-qualified query term.

**Conclusion**

The patent filings focus upon providing examples of identifying time-sensitive and date-sensitive searcher intent. Still, the methods that they describe can be used to find other implicit intents behind queries.

We don’t know if or how much of the methods behind these two patent applications have been incorporated in Yahoo’s search results. Still, we do see that the searcher intent behind some query terms can influence the types of results that we receive at the major search engines, such as navigational queries showing a top result with sitelinks or a local type query showing one box or ten box map results.

If you perform a search at Google or Yahoo, or Live.com, the chances are that they will be considering your searcher intent and may show you results that are influenced by what the search engine believes the intent behind your query might have been.

One place that a search engine might look at is in their query log files to see if they can glean an implicit searcher intent behind your search terms by seeing which results from previous searchers might have chosen as search results or looking at how searchers might have rewritten, or refined their search queries.

If you search for “Olympics” without including a year, the search results you see might focus upon the 2010 and 2012 Olympics since it appears to be a time-sensitive query.

If you’re a site owner or working with one, and you are performing keyword research on specific search phrases for the pages of a site, it’s also important to keep in mind that the search engines might be considering more than how many times a search phrase shows up on a page in title elements, or headings, or text, or in anchor text pointing to those pages or the PageRank (or link popularity or page quality of pages) when it returns results to searchers.

The search engines might be attempting to understand the intentions behind the search phrase to show searchers the pages that they believe will match that searcher’s intent.
