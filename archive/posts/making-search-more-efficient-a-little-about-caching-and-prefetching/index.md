---
title: "Making Search More Efficient: A little about caching and prefetching"
source_url: "https://www.seobythesea.com/2006/01/making-search-more-efficient-a-little-about-caching-and-prefetching/"
slug: "making-search-more-efficient-a-little-about-caching-and-prefetching"
date_published: "2006-01-04T17:47:43+00:00"
date_modified: "2021-05-01T18:24:38+00:00"
author: "Bill Slawski"
---

I hate doing the very same task over and over and over again. I’d bet search engines do, too.

**Increasing the efficiency of search**

The chances are that your choice of a search engine, whether it’s Google, or Yahoo!, or MSN, or another, uses some methods to try to make what they do a little more efficient and a little less costly to run.

Of course, popular searches are ones that lots of folks search for. If a search engine would process every search request as if it were a new one and try to grab results from its index, or indexes, including searches repeated often, it could be reinventing the wheel frequently. But what if there was a way to speed that up?

What if that method created significant savings in terms of time and processing power? What if it didn’t do a full search for the most popular terms over and over?

**Caching results pages from popular searches**

One method might involve using a cache file, like the cache file that your browser uses to store temporary internet pages. The idea behind the browser cache is that if you return to a page, your computer doesn’t have to ask for the page all over again. It can instead just grab the local copy of the page that is in the cache file.

So, imagine a search engine doing the same thing. It has a separate computer or set of computers that contain cache files. When a request for a certain word or phrase gets entered by someone using the search engine, a look around in those cache files may be the first stop instead of the search engine doing a lookup in its index.

If a set of results for the phrase or word searched for is there, the search engine could serve it to you. If it isn’t, the search engine might then perform a full search. That could save some processing power and some time.

Now keep in mind that the most popular searches can account for a large percentage of the requests that a search engine gets. If you look somewhere like the Google Zeitgeist pages, you can see some of the terms that the search engine might be keeping in a cache.

**Deciding how many results to cache**

This is a tricky area. The efficiency gained by caching some results pages for popular searches could be lost by not caching enough results or caching too many. So how do you figure out how many results to cache? Well, you could look at how people use search engines. For example, if people typically only look at the first page of results – ten links and titles and snippets – then you might only want to keep track of those ten results for a certain query.

A paper that looks like it was written in 2004 describes how to make a search engine run more efficiently. One of the [authors’ pages](http://malvasia.isti.cnr.it/~raffaele/papers.html) notes that it will be published in 2006 in the *ACM Transactions on Information Systems*, Vol. 24, n. 1, January 2006.

It’s impossible to tell, without seeing that issue, whether the version that appears will be the same one that appears here:

[Boosting the Performance of Web Search Engines: Caching and Prefetching Query Results by Exploiting Historical Usage Data](https://dl.acm.org/doi/10.1145/1125857.1125859)

By Tizano Gagni, Raffaele Perego, Fabrizio Silvestri, and Salvatore Orlando

It could be that this is the version that will be published, or they could be submitting an updated version. Interesting paper, regardless.

If you like thinking about how a search engine does what it does, this is an article worth spending a little time with.

It discusses some of the hardware and software that might make such a system work and how it would be organized. It also looks at other papers that have studied how usage data might make a search engine run better.

Two levels of caching are described – a read-only static set of information, and a dynamic set of information, along with replacement policies that determine when a result might make it into the dynamic cache. It also discusses prefetching and a way of anticipating what people might be looking for and how many results to cache or to prefetch, based on the made query.

How often should that static cache be refreshed? They note that topic as something for further study. However, they also state that the freshness of results can suffer when you use statistics from the past to predict the future.
