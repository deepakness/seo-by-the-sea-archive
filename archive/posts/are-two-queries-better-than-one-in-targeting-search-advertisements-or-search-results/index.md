---
title: "Are Two Queries Better Than One in Targeting Search Advertisements?"
source_url: "https://www.seobythesea.com/2009/01/are-two-queries-better-than-one-in-targeting-search-advertisements-or-search-results/"
slug: "are-two-queries-better-than-one-in-targeting-search-advertisements-or-search-results"
date_published: "2009-01-08T09:41:02+00:00"
date_modified: "2020-07-23T13:20:25+00:00"
author: "Bill Slawski"
---

When you perform a search on Google, you’ll often see “sponsored links” at the top and to the right of your search results. Advertisers can bid to have their advertisements appear with search results through Google’s [Adwords](https://ads.google.com/home/#?modal_active=none) program.

When an advertiser creates an ad for the Adwords program, they attempt to choose the keywords that their ads may appear beside in search results. The premise behind this approach is that allowing advertisers to target keywords in searches that are relevant to what those advertisers offer means that the ads searchers see will be relevant for what searchers are looking for.

Usually, those ads will show up in response to a current query that a searcher has typed into the search engine, but if you’ve been performing a number of searches, Google has sometimes looked at your earlier queries in addition to your current one to determine which advertisments to show you.

For example, you search for the word [golf] and received a set of search results, along with some sponsored links. If you then search for the word [shoes], you may have seen ads (in the past) on the search results page for “golfing shoes.”

Google recently published a patent application that describes how they might use a previous query to influence which advertisements show up during a current search.

I believe the first time that I saw this happen was a couple of summers ago, but I’m not seeing ads that appear to have been influenced by more than one query the past couple of days. Or at least I didn’t until I was writing this post, and came across a more subtle variation, described below.

[Using Previous User Search Query To Target Advertisements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090006207.PGNR.&OS=dn/20090006207&RS=DN/20090006207)
Invented by Mayur Datar and Roberto J. Bayardo
Assigned to Google
US Patent Application 20090006207
Published January 1, 2009
Filed June 25, 2008

Abstract


> A system and method to target advertisements to a user search query using a previously entered user search query as well as the current search query. The previously entered search query can accompanying the current search query in a query referrer, or can be determined separately from the current search query.
>
> The relevance of the previous search query is determined concerning the current search query, and if found relevant a combination of the two query terms is used to find a set of advertising keywords from which candidate advertisements to be targeted and served to the user with search results are found. The process can be extended to additional search queries.

The patent application goes into a fair amount of detail on how they might decide whether a current query and a previous query are related, and whether or not they should serve ads related to both queries.

It also describes how they might expand a current search query to match up with potential advertising keywords when there isn’t an earlier query from a searcher. In that instance, they might look at “related words,” or perform something known as “query broadening.”

**Related words**

Ads could be shown from words that are related to a query, and are found through mining information from term clustering tools, synonym dictionaries, and machine learning systems.

For example, the words “cars” and “autos” might be considered to be related to the word “car.” If a searcher types in a search for the term “ford car,” advertising keywords for the equivalent queries “ford cars” and “ford autos” might be used to decide which ads to show searchers.

The patent application tells us that they might use the process described in an earlier Google patent filing to find these related terms: [Increasing the number of relevant advertisements using a relaxed match](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20050071325.PGNR.&OS=dn/20050071325&RS=DN/20050071325).

**Query broadening**

In addition to finding related words, and substituting those words into a query phrase to find keywords to target advertising, related queries might also be used.

For example, the query term “Disneyworld Florida” might be considered to be a related query to “theme parks,” and if someone searches for “theme parks,” or a slight variation of that term, the advertising system might use the related query “Disneyworld Florida” as an advertising keyword for targeting ads.

This kind of query broadening is described in another Google patent application: [Identifying Inadequate Search Content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080249786.PGNR.&OS=dn/20080249786&RS=DN/20080249786).

These “related words” and “query broadening” methods gather information about the relationships between query terms and between whole queries from places like the search query log files of the search engines, and other data sources. But, looking at a current query, and the previous query used by a searcher during an immediate search session might add some additional context regarding what someone is searching for.

**Techniques for targeting ads and/or finding ad keywords for targeting ads based on a previous query**

The patent application describes additional techniques that it might use separately, or together, to find keywords that it might use to target ads shown for a search when looking at a current query and a previous query.

***Overlapping words***

When there are words that are common to previous query and current query, it might be helpful to keep those common overlapping words in at least some of the query broadening and related word sets.

For example, someone searches for “hotels in Manhattan” and then searches for “cheap hotels.” The term “hotels” is an overlapping term common to both of those queries, and it might make sense to include the word “hotels” when broadening a query to determine which ads to show a searcher.

The advertising system might keep the word “hotels” as one of the advertising keywords used to determine which ads to show since it appears to be important to what the searcher is looking for.

***Query term summation***

Words might be added from a previous query to come up with ads for a current query.

I followed up my searches for “hotels in Manhattan” and then “cheap hotels” with a search for “cheap manhattan.” and received one sponsored link – for:

Manhattan Hotels from $80
Get Cheap Manhattan Hotel Rates.
Amazing Discounts. Book Now!

It appears that Google added “hotels” to the keywords used to decide which advertisement to show me alongside my search for “cheap manhattan.”

**Conclusion**

While I was reading this patent filing, I couldn’t help but wonder if the “overlapping words” and “query term summation” processes might also be applied to the results that we see for normal web searches in addition to being a method used to come up with advertisements shown to searchers.

The query broadening patent filing, *Identifying Inadequate Search Content* examines how search results might sometimes be expanded during a Web search when there aren’t many results for a query.

Might Google also sometimes look at overlapping words in queries used during the same search session to show results that are more relevant for words that appear in more than one query from the same searcher? Or add words from previous searches in a search session, as it does in query terms summations, to determine which search results you see?

It looks like something that they could do.

Added 2009-1-9 – Great post from Jeremy Chatfield at the Merjis Internet Marketing Blog from last March which approaches this topic from a paid search perspective, and is highly recommended – [Is AdWords Search History Permutation Fraudulent?](http://web.archive.org/web/20110917081245/http://blog.merjis.com:80/2008/03/17/is-adwords-search-history-permutation-fraudulent/)
