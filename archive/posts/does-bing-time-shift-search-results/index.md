---
title: "Does Bing Time Shift Search Results?"
source_url: "https://www.seobythesea.com/2010/10/does-bing-time-shift-search-results/"
slug: "does-bing-time-shift-search-results"
date_published: "2010-10-08T13:48:00+00:00"
date_modified: "2010-10-29T12:40:45+00:00"
author: "Bill Slawski"
---

The meaning behind search queries can shift over time, with some results being more relevant at different times of the year, and others becoming meaningful seemingly out of nowhere.

Search for “Independence Day,” around July 4th and chances are you want to learn about the holiday in the United States. Do the same search around August 15th, and you may be more likely to want to learn about the holiday in India. The same search back on July 3, 1996 might have been about the Will Smith movie of the same name.

An earthquake in one part of the world might quickly trigger many searches for more information around the globe.

Search engines tend to be oblivious to those types of changes, or at least they used to be. We’re seeing more “news” items making their way into Web search results pages for topics that are timely and reported upon in the media.

A Microsoft patent application describes how their search engine might pay more attention when query terms or phrases change in meaning over time, and how they might adapt search results to cover those shifts.

This might mean showing links to news articles in search results, it may also mean offering timely and topical query suggestions to use, and it could mean the search engine might rerank search results in response to changes in meanings for terms. These changes on search result pages would happen in an automated manner.

The Microsoft patent application is:

[Search Queries with Shifting Intent](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100257164.PGNR.&OS=dn/20100257164&RS=DN/20100257164)
Inventors: Alan Dale Halverson, Krishnaram Kenthapadi, Nina Mishra, Aleksandrs Slivkins, and Umar Ali Syed
Assigned to Microsoft Corporation
US Patent Application 20100257164
Published October 7, 2010
Filed: April 7, 2009

Abstract


> Techniques and systems are disclosed for returning temporally-aware results from an Internet-based search query. To determine if a query is temporally-based one or more query features are collected and input into a trained classifier, yielding a temporal classification for the query.
>
> Further, if a query is classified as temporal, the query results are shifted by determining an alternate set of results for the query, and returning one or more alternate results to one or more users. Based on user interactions with the one or more alternate results, the classifier can be updated, for example, by changing the query to a non-temporal query if the user interactions identify it as such.

While the patent provides a fair amount of detail, I’m going to provide a very high level overview of how temporal queries might be identified, and how those might change to be classified as non-temporal.

Alternative search results might be created for queries that have been classified as temporal. So, for example, the term “independence day” might be identified as temporal, and search results in early August might include web pages about Indepence Day in India. Search results in late June and early July may focus more about Independence Day in the United States.

**Classfying and Declassifying Queries as Temporal**

To decide that a query has become temporal, the search engine might look for the following kinds of things:

- Searchers start to rewrite their queries more frequently after looking at the search results. For instance, people searching for “independence day,” start reformulating their queries to something like “independence day India.”
- Increases in the frequency of searches for certain queries can indicate a temporal nature, especially if they seem to happen around certain dates.
- Increases in mentions of certain terms that appear as queries can indicate a temporal nature. These can include an increased frequency of mentions in news articles, in blogs and microblogging services, and even in increased updates to Articles within online encyclopedias, such at the article on India’s Independence Day in Wikipedia.
- Other indications of burstiness, a sudden increased frequency focused upon a particular query term at certain times and/or in certain geographical locations, can indicate that a query has a temporal nature. These can include user interactions such as a sudden increase in searches, in click-through rates, in abandonment of search results, and in the reformation of queries.

The way people respond to alternative search results based upon the classification of a query as temporal may result in the classification being amended. Here are some things the search engine might look for to change a classification from temporal to non-temporal:

- Searchers don’t choose the alternative results presented because of the temporal classification.
- Searchers click upon results for pages that haven’t been added based upon the temporal classification.
- Searchers switch over to a different search engine after seeing alternative temporal-based results.
- Searchers click upon query refinement suggestions that haven’t been altered based upon a temporal designation.
- Searchers don’t click upon query refinement suggestions that have been changed because of the temporal classification.

The “query features” mentioned above are only some examples of what the search engine might look for to determine if a query is temporal, or if it should be reclassified as being non-temporal.

The machine learning system that would make that decision would likely look at more than just one of those features to make those determinations.

As part of this process, the search engine might sometimes show alternative results to a number of searchers to see how they interact with the results. Their responses could determine whether or not the search engine continues to show alternative search results based upon a temporal classification.

**Conclusion**

It’s not unusual to see news items for some queries in all of the major search results these days. But, the idea of changing suggested query refinements, and shifting web pages in search results in response to timely and topical events is something that may not be as noticeable as those news results.

Bing is showing news articles about the toxic Red sludge flowing in some Hungarian waterways this morning, and offering “Red Hungary,” and “Hungary Sludge” as related search suggestions. The third “organic” result on the search results page for that query is a BBC article, “Criminal negligence inquiry into Hungary sludge…” but it’s not being presented as a news item, but rather as a web page.

It looks like Bing is identifying “Hungary” as a temporal query today, and is changing the search results we see to focus upon the environmental disaster taking place in that Country.

Chances are, they may be using the kinds of information that I’ve listed above to have classified that query as temporal. The “query features” that I’ve listed from the patent are examples of features Microsoft might be using, though it’s possible that they might not be using all of those signals, and may be using some other ones as well.
