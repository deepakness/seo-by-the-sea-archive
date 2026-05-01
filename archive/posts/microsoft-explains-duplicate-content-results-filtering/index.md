---
title: "Microsoft Explains Duplicate Content Results Filtering"
source_url: "https://www.seobythesea.com/2006/11/microsoft-explains-duplicate-content-results-filtering/"
slug: "microsoft-explains-duplicate-content-results-filtering"
date_published: "2006-11-03T16:35:05+00:00"
date_modified: "2014-12-19T18:36:02+00:00"
author: "Bill Slawski"
---

**On Wednesday…**

*Me:* “What should I include in my presentation on duplicate content at Webmaster World Pubcon in two weeks?

*A Friend:* “How does a search engine decide which duplicate to show in search results, and which ones not to show?”

*Me:* “Good one.”

*A Friend:*“Yep. How do they choose? PageRank? First one published?”

*Me:*“There are white papers and patent filings describing ways a search engine might discover duplicate content. They look at URLs and linking structures of mirrored sites, or examine consecutive word sequences in the snippets returned with results.”

*A Friend:* “Right. But that doesn’t answer the question.”

*Me:* “I’ve seen more than a couple of duplicate content filtering issues in the past. I’ve explored the topic in detail. But I’ve never seen something in writing on the subject from someone connected with a search engine.

*A Friend:*“And?”

*Me:* “It doesn’t seem to be any one signal. It’s not PageRank alone, or distance from root directory. It’s probably not the first one published, because many sites are dynamic, and the time stamp on the original may be later than on the copy, and the first copy spidered might be the one the search engines think is the oldest. It doesn’t appear to be perceived authority. It could have something to do with the number and quality of inbound and outbound links from a page. It could be a mix of all of those things and others.”

*A Friend*: “It’s still a good question.”

*Me* “Yes it is. I’ll work on it.”

**On Thursday morning…**

*Me, looking through new patent applications:* “Sweet!”

**Collapsing Equivalent Results**

Thanks, Microsoft.

A new patent application published Thursday discusses some of the signals that may be used to determine which results to show, and which to filter, at least possibly in Windows Live Search.

It may not include all of the signals being looked at – some of those might be trade secrets.

The practices at Google and Yahoo and Ask.com may be different.

But, all of the major search engines are striving to create good user experiences for people who search using their services. And all of them want to avoid duplicative results filling up the early spots on search results pages. The patent application does provide some insight into what search engines consider in choosing which pages to show, and which to hide.

I was surprised by a couple of the factors, and by the appearance of something I believe I’ve seen Matt Cutts refer to as “Pretty URLs.”

[System and method for optimizing search results through equivalent results collapsing](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060248066%22.PGNR.&OS=DN/20060248066&RS=DN/20060248066)
Invented by Brett D. Brewer
Assigned to Microsoft
US Patent Application 20060248066
Published November 2, 2006
Filed: April 28, 2005

Abstract


> A system and method are provided for optimizing a set of search results typically produced in response to a query. The method may include detecting whether two or more results access equivalent content and selecting a single user-preferred result from the two or more results that access equivalent content.
>
> The method may additionally include creating a set of search results for display to a user, the set of search results including the single user-preferred result and excluding any other result that accesses the equivalent content. The system may include a duplication detection mechanism for detecting any results that access equivalent content and a user-preferred result selection mechanism for selecting one of the results that accesses the equivalent content as a user-preferred result.

**The Duplicate Content Problem**

1. A search engine finds documents that match queries and assigns them scores to determine the order within which they should be displayed.

2. Pages that may be very relevant as results may also be duplicates, or near duplicates, of each other.

3. Example: www.ymca.net and www.ymca.net/index.jsp lead to the same content with the first URL redirecting to the second one. And, www.ymca.com and www.ymca.com/index.jsp could be mirrors of www.ymca.net.

4. A search engine might include all four results in the top ten results of a search for the query “ymca”.

5. This is a bad user experience, because it keeps the searcher from seeing other results that might also be relevant, on the first page of results.

**Choosing One Result**

The system described would include:

* A crawler that visits web pages, and indexes and stores results in an index/storage system.

* Ranking components that may rank located results in response to searchers’ queries.

* Results storage components which may have a cache for recently stored results and an index system for storage of additional results.

* A duplication detection mechanism which would detect results having duplicate content. A technique for detecting duplicates referenced in the patent application involves using “shingleprints” as described in another Microsoft U.S. patent application, [Method for duplicate detection and suppression](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050210043%22.PGNR.&OS=DN/20050210043&RS=DN/20050210043).

* A result selection module decides which result to display to searchers, regardless of whether shingleprints or other methods are used to determine which are duplicates.

**Result Selection Module**

Some parts which may be included in the result selection module:

- A query independent ranking component (something like PageRank, or a page quality score, or others, or combinations of all),
- A result analysis component,
- A navigation model selection mechanism,
- a click through rate determination component,
- A user-preferred result selection mechanism, and;
- Result storage.

Upon finding that results are duplicates, or very near duplicates, those results would be placed in Result Storage, but the search engine would not display them all.

The Result Selection Module would determine (through the result analysis component) which was the “user preferred selection” (via the user-preferred result selection mechanism) to show in response to the query.

A different URL might be chosen as the URL that the search engine actually uses to navigate to the page (chosen via the navigation model selection mechanism).

**Some Factors the Results Analysis Component Might Consider**

* Extension – .com might be a better choice than .net – it “appeals” to users because they understand it

* Shorter URLs – In the YMCA example above, the user-preferred version of the URL may be www.ymca.com both because “.com” is more common than “.net” and because the www.ymca.com URL is shorter than the two “index.jsp” results.

* The Navigational Model Selection might chose a different URL – while the searcher is shown www.ymca.com, the link might actually go to www.ymca.com/index.jsp, which is selected by the navigation model selection mechanism and is stored in the result storage area, in order to save the user a redirect. Eliminating redirects leads to the fastest result.

* The URL might contain keywords that appear in the query. In that case, the URL acts as a document summary. So, www.sfgiants.com might be a better choice than www.mlb.com/sf/id1223/xyx.com when the query is “sf giants”

* Searcher Location or language – A different duplicate might be chosen based upon where the person searching is from. So a London-based searcher might see www.example.co.uk where a New York searcher would get www.example.com

* Popularity – how well linked to the page is by other sites might be determined by the query independent ranking component.

* Click through rates might be tested, and the version of the URL with the highest may be determined by the click through rate determination component, acting upon the assumption that high click-through rates indicate that users find the result satisfactory.

* Fewest redirects – as determined by the navigation model.

The user-preferred result selection mechanism uses input from the query independent ranking component, the result analysis component, and the click through determination component to select a user-preferred result. (That sounds much better than the technical term I’ve seen Matt Cutts use regarding displayed URLs in results in the context of redirects – the “prettiest URL.”)

**Conclusion**

So, something like PageRank does matter when it comes to filtering equivalent results, as does searcher location, click-through rates, amount of redirects, words used in URLs, length of URL, choice of tld, and possibly other signals.

The other interesting thing here is that a search engine may display one URL for searchers, and use a different one for navigation – [Pretty URLs](https://www.mattcutts.com/blog/seo-advice-discussing-302-redirects/) for people, and more direct URLs to navigate to the page.
