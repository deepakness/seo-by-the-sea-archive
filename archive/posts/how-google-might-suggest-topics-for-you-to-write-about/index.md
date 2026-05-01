---
title: "How Google Might Identify Topics With Inadequate Search Content"
source_url: "https://www.seobythesea.com/2010/06/how-google-might-suggest-topics-for-you-to-write-about/"
slug: "how-google-might-suggest-topics-for-you-to-write-about"
date_published: "2010-06-04T13:07:47+00:00"
date_modified: "2020-01-19T22:35:42+00:00"
author: "Bill Slawski"
---

If a search engine suggested topics for you to write about because those topics weren’t represented well in their search results, and was considered inadequate search content, would you write about it? Would a search engine take that step?

A Google patent application published this week explores that topic as well as describing some approaches that they might use to gauge the quality of their search results.

The patent is a continuation of a patent granted to Google in February of this year, [Identifying inadequate search content](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,668,823.PN.&OS=pn/7,668,823&RS=PN/7,668,823), and is interesting for a number of reasons such as Google’s Chief Economist (Hal Varian) and the head of Google’s Webspam Team (Matt Cutts) being amongst the listed inventors.

The newer version was filed shortly before the original patent was granted, and the claims sections from each present the invention in somewhat different manners but the descriptions for both patent filings are very similar.

Both explore how the search engine might use statistics associated with queries, and a review of how relevant and important the search results are for those queries to determine the quality and quantity of search results that appear for them. I did notice an addition dealing with results for queries in more than one language added to the new version. The patent application is:

[Identifying Inadequate Search Content](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100138421.PGNR.&OS=dn/20100138421&RS=DN/20100138421)
Invented by Jeffrey David Oldham, Hal R. Varian, Matthew D.Cutts, Matt Rosencrantz
Assigned to Google
US Patent Application 20100138421
Published June 3, 2010
Filed February 3, 2010

Abstract


> Systems and methods for identifying inadequate search content are provided. Inadequate search content, for example, can be identified based on statistics associated with the search queries related to the content.

**Query Statistics and Document Statistics**

It’s likely that Google collects an incredible amount of information about searches people perform at the search engine. One good example comes from a Google patent granted June 1, [Accelerated large scale optimization](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,730,074.PN.&OS=pn/7,730,074&RS=PN/7,730,074), which gives us a list of the kinds of data they might collect. That information could be stored as “triples of data” where each of those triples involves information about users, queries, and documents. That patent tells us that Google might collect more that five million distinct features associated with users, queries and documents, such as:

- The country in which user u is located,
- The time of day that user u provided query q,
- the language of the country in which user u is located,
- Each of the previous three queries that user u provided,
- The language of query q,
- The exact string of query q,
- The word(s) in query q,
- The number of words in query q,
- Each of the words in document d,
- Each of the words in the Uniform Resource Locator (URL) of document d,
- The top level domain in the URL of document d,
- Each of the prefixes of the URL of document d,
- Each of the words in the title of document d,
- Each of the words in the links pointing to document d,
- Each of the words in the title of the documents shown above and below document d for query q,
- The number of times a word in query q matches a word in document d,
- The number of times user u has previously accessed document d, and
- Other information.

That information might be collected as a triple of data, otherwise referred to as an “instance.” A triple of data would take information about a user, a query, and a document. For example, one of these instances might tell us:

1. The country where the searcher is located
2. The language the query was written in
3. The words in the title of the document

The *Inadequate Search Content* patent doesn’t provide much detail about the statistical process that it might use, but it’s possible that it might use something similar to the process described in the *Large Scale Optimization* patent. It limits its description to telling us that it might review user-behavior information such as:

- Whether the user clicks on a result,
- How long the user examines the results of a click,
- Whether the user tags or recommends this site,
- Search queries,
- Search results,
- Time and date information associated with search queries,
- Refinements of search queries occurring during a search session, etc.
- etc.,

We also know that Google uses a considerable amount of information to rank pages in search results. Some of these involve creating a score based upon how relevant a page is for a query performed by a searcher, such as the words used in a title of a page, and some of them involve a score based upon the quality or importance of a page, which could include a PageRank score. The combination of relevance and quality scores can determine how highly a page might rank in response to a particular query.

Google also may rerank search results based upon a number of features such as the preferred country and languages of people performing a search, whether or not the results contain duplicate or near duplicate content, and others.

**Uncovering Inadequate Search Content**

Google might look at the statistics associated with a particular query, and the relevance and quality of pages that show up in response to that query, and then attempt to assign a topic to the query, based upon related queries, and collect statistics about that topic.

If the topic includes unserved and underserved queries, meaning that there either isn’t relevant content found for those queries or the demand for the content outweighs the quality or quantity of results, and the queries in question are somewhat popular based upon those statistics, then the search engine may inform content creators that the results for the query or the topic are inadequate.

The statistics associated with queries can contain information about language, geography, demographics, and time. So, a query that might be popular around particular holidays, days of the week, or times of the day, but inadequate to the demands of searchers may be identified.

**Sharing Information About Inadequate Search Content with Content Creators**

The patent provides a number of possible ways that this information might be shared with content providers, and identifies a number of different content providers it could be shared with.

Information about underserved topics could be suggested to publishers who provide content on the web for free, to publishers who provide information through a subscription-based model, to publishers who show advertising about certain topics on their web sites.

Searchers might be informed that the results for a topic are limited and could use someone to create content on a topic. The patent even suggests the possibility of creating a topic search engine, where potential publishers can search for queries and topics that are underserved by the search engine with inadequate search content.

The search engine might also provide an automated content generation system which aggregates information related to queries and topics that are inadequate, and suggests that it might limit the sites that appear to specific sites, possibly where the content is provided through a license to use it.

The information could also be shared with user contribution sites such as wikis, and be used to create stub articles that users of those sites could then expand upon.

The patent also mentions the possibility of selling information about underserved topics to web publishers.

One topic included in the newer patent application’s description that wasn’t in the original patent description involved identifying topics or queries or both which might be poor in one language while adequate in others, which could be useful to people willing to create new content involving a topic in other languages.

Offline publishers might use information involving inadequate topics to create print publications. As we’re told in the patent:


> For example, if searches for “biography of Millard Fillmore” and get only a few results, such publishers might contemplate commissioning a book about Millard Fillmore’s life.

**Long Tail and Ecommerce**

This information may also be useful to people engaged in ecommerce. For instance, if this system determines that a search for a product such as “purple alligator leather belt” is popular and underserved, someone offering products on their web site (or physical storefront) might decide to offer purple alligator leather belts.

**Inadequate Search Content and Query Broadening**

Another important aspect of the patent that isn’t given much discussion within the patent involves how the search engine might respond to topics that don’t provide many results, or enough relevant results to meet the demand for them.

Where some queries provide inadequate search content, the search engine might use that information to identify areas where they should broaden a query for a searcher so that they might find relevant and quality content.

One example might be to provide results in other languages (likely with a “translate this result” link).

**Conclusion**

There are times when we perform searches at a search engine and may be completely unsatisfied with the pages that we receive. In that instance, it’s possible to blame the search engine for the lack of results rather than web publishers for not having created pages that include our query terms or cover related topics.

It’s possible that there may be information on that query or topic that isn’t in a very search engine friendly format, which couldn’t be indexed by the search engine. It’s also possible that there just aren’t very many quality pages that might provide results on those topics.

We don’t know if Google will start sharing information with us in the future about inadequate search content for specific queries or topics, but if they do, it could provide opportunities for businesses and organizations to more easily identify opportunities to provide content for popular queries that are unserved or underserved.

Is it a step that Google should take?

*Added August 9, 2019* Google has introduced something they are referring to as the [Question Hub](https://questionhub.withgoogle.com/intl/en/), which is geared towards providing content creators with information about topic where there is inadequate search content, just like the patent I wrote about in this post might do. It appears to be available in India, and not in the United States yet. But, I signed up to be invited as a content creator, because knowing topics that there is inadequate search content for would be good to know about.
