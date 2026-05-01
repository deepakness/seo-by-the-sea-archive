---
title: "Indexing Recent Content in Search Engines"
source_url: "https://www.seobythesea.com/2012/08/indexing-recent-content-in-search-engines/"
slug: "indexing-recent-content-in-search-engines"
date_published: "2012-08-16T01:26:31+00:00"
date_modified: "2020-07-26T18:09:17+00:00"
author: "Bill Slawski"
---

For many search queries, very recent search results (such as from the last 6-12 hours) are preferred over older and more stale results that might rank well based upon popularity signals, including significant past user traffic that might cause them to have been assigned a high ranking. That may work fine if you think of search engines as a repository of pages that might be relevant as references, like a library.

But with the Web becoming a place where people frequently tweet social networking updates, with news sources striving to be the first to publish about breaking topics, bloggers publishing on new topics, merchants offering new products and discounting old ones, and other content online appearing with an emphasis on freshness, search engines are becoming increasingly a near real-time monitor of the World around us.

![An old Linotype type setting machine that had possibly more moving parts when it was built than anything else.](media/linotype-type-setting-machine.jpg)

A sign on the Linotype typesetting machine above notes that it had more moving parts when it was constructed than anything else ever built by man. It didn’t produce fresh content that quickly either, but it was state of the art at the time.

Towards the end of last year, I wrote a post on the topic of [Google’s New Freshness Update: Social Media Has Changed the Expectations of Searchers](https://www.seobythesea.com/2011/11/googles-freshness-update-social-media-expectations-of-searchers/).

About a month before that, I wrote about how Yahoo might look to social media to discover new URLS on bursty and fresh topics in [Do Search Engines Use Social Media to Discover New Topics?](https://www.seobythesea.com/2011/10/do-search-engines-use-social-media-to-discover-new-topics/)

With both Google and Yahoo exploring new ways of discovering fresher content for search results, that leaves us wondering what Bing might be doing in that area.

One of the things that I like about Google’s search results is the ability to refine my search results to content from the past hour, past 24 hours, past week, past month, and past year, or a custom date range. Yahoo also offers the chance to filter searches by past day, past week, and past month. And even though Yahoo uses Bing’s crawling data, Bing doesn’t provide that kind of filtering by recent periods.

A Microsoft patent granted this week discusses a strategy they may use to try to include more fresh content in their search results.

The process involves using an “in-memory” index in addition to Bing’s inverted index to return results from the search engine. The in-memory index would be updated during a day and includes fresher content than Bing’s inverted index of the Web. Content added to the in-memory index might be folded into Bing’s inverted index daily, or some other set amount of time.

Searches would be responded to by the inverted index, and then the in-memory index would be checked for additional relevant results, which includes fresher content added during a day. After that, the results returned would be ranked and would include very recent results if there are any.

We don’t know if the process described in this patent is one that Microsoft implemented already, is one that they explored and decided upon a different approach, or maybe already obsolete. We do know that Google’s Caffeine update, which introduced the [Percolator](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Peng.pdf) system to Google’s index to move from a batch update of their index to an incremental, one took place a couple of years ago.

The process described in this patent appears to provide updated content to searchers while still retaining a batch process that folds that new content into the older database periodically.

So, what kind of content gets added to the in-memory index?

Significant user behavior centered around a document may trigger the addition of content to that in-memory index. That behavior might come from a pre-determined recent time frame, such as within the last 12 hours or the last seven 7 days. Significant means activity from enough different users during that time frame.

Another signal that might be looked at is whether the behavior is tied to a modification made to a page, such as a change to content that alters at least one term on a page, such as a new price at a retail-based site.

The search engine might learn about those modifications of content and signs of significant user behavior through update files from sites, like product submission feeds and XML sitemaps and potentially even something like Twitter’s data feed of new tweets, and by crawling the pages of a site and comparing them to earlier versions.

A search of Bing for some very recent topical subjects, like a search for [earthquake], doesn’t show the kind of recent results that I would expect, they haven’t incorporated this change into their results.

The Microsoft patent is:

[Using behavior data to quickly improve search ranking](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08244701&OS=PN/08244701&RS=PN/08244701)
Invented by Walter Sun, Jay Kumar Goyal, Pratibha Permandla, Yinzhe Yu, and Jingfeng Li
Assigned to Microsoft
US Patent 8,244,701
Granted August 14, 2012
Filed: June 27, 2011

Abstract


> Systems and methods for applying user behavior data to improve search query result ranking are provided. Upon receiving an update file indicating that recent, significant user behavior data is available for a document associated with an inverted index, the update file is published periodically and frequently to an index server. After filtering out the relevant update information from the update file, the index server extracts identifiers of the documents having the associated user behavior data. The update file and the identifier of the documents are utilized to update an in-memory index containing representations of metadata indicative of the user behavior.
>
> The in-memory index is continuously updated and utilized to serve search query results in response to user search queries. Search query results from the in-memory index are ranked using the user behavior data before serving. Thus, results associated with recent, significant user-behavior metadata receive prominent placement on the search results page.

**Take Aways**

One of the areas that Bing seems to fall behind Google and Yahoo is in showing search results filtered by the past day, week, and month. I’m not sure why Yahoo offers this feature and Bing doesn’t. A look at search results for a term like [earthquake] at Google and Bing shows some slightly more timely results from Google than from Bing, but the real-time results that Google used to show that included data from Twitter’s data stream are missed in this area.

The process described in this Microsoft patent shows a step towards the incremental indexing of search results that Google achieved with their Caffeine update, but it doesn’t seem like Bing has implemented this process yet in a way that would surface more recent content. It’s possible that such a change might bring lower-quality search results to Bing, and that might be keeping this process from being used.

The faster pages and content go from being published online to be included in a search index and search results, the less time there is to classify, categorize, and determine the quality of those results.

At a [Q&A session yesterday](https://www.stateofdigital.com/matt-cutts-ses-san-francisco/) at SES San Francisco, Google’s Matt Cutts answered some interesting questions about what Google is doing in search these days. One of the points he made was that “You shouldn’t put a lot of weight on +1s just yet”. It’s clear that Google is still experimenting with how much weight they should give to social signals relating to positions in search results. It’s possible that social signals might be helpful in ranking very recent content on the web, especially since most very recently published pages haven’t had a chance to accumulate links as a quality signal that might help a search engine to determine rankings for pages.

News content does tend to show up quickly and to be highly ranked in Web search results, but Google’s news results are limited to sites that have been accepted as news sources and are likely continually monitored in terms of quality of content, and judged on a different set of algorithms than other genres of web pages to determine rankings.

Chances are that Bing is struggling to find some of the same answers to how to rank very recent content. This patent shows an attempt to move in that direction.
