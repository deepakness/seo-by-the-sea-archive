---
title: "Google Local Search, Categories, and the What and Where of Local Map Listings"
source_url: "https://www.seobythesea.com/2009/04/google-local-search-categories-and-the-what-and-where-of-local-map-listings/"
slug: "google-local-search-categories-and-the-what-and-where-of-local-map-listings"
date_published: "2009-04-21T13:48:28+00:00"
date_modified: "2021-07-06T14:22:08+00:00"
author: "Bill Slawski"
---

A few of the workings behind the scenes at Google Local Search have been recently exposed through a patent granted to Google today and a pending patent application for the search giant published in January.

They might make you think a little differently about how Google Local Search works, and one presents an interesting question about the difference between local search results at Google Maps and Google’s Web search.

**Categories and Local Map Listings**

The granted patent was originally filed in December of 2004, and it describes the categories that some local searches are placed within by the search engine.

In my last post, [How Google Might Top Search Results with Additional Information](https://www.seobythesea.com/2009/04/how-google-might-top-search-results-with-additional-information/), I described a patent from Google that told us how the search engine might attempt to categorize the pages that show up in search results (presumably a top number of the results, such as the top 10, or top 100, or top 1,000), and show us an extract from a page taken from one of the results that matched the category that seemed to be the predominant one for those search results.

Presumably, showing that extract as a summary for the search results would help a searcher know if the search results for their query might be a close fit for the intent behind their search.

The categories used in that process might have been chosen by looking at the pages listed in the search results and their URLs, their page titles, snippets for the pages, and labels that may have been attached to the sites. If you’ve submitted a business listing to Google Business Local, you know that when you submit your business, you can add categories for it as well as other information.

The newly granted patent doesn’t detail very deeply how the local search categories they show are determined. Still, the method used to find categories for local search results may share some similarities, such as looking at URLs, page titles, and snippets for pages that show up related to businesses listed.

When you perform a search at Google local, in addition to a map and a list of businesses or organizations from a specific geographic location, you may also see categories listed at the top of your search result. For instance, if I enter “tires Philadelphia” (without the quotation marks), I see the categories “tires” and “auto repair” about the pages listed from that search.

We are told where some information about categories for local map listings may come from:


> Category suggestion engine 420 may suggest one or more categories that relate to the search. In operation, category suggestion engine 420 may identify categories associated with the top N (e.g., 1000) documents in the list of search results.
>
> The categories may be obtained from many different category providers, such as yellow pages and web directories, or derived using an automatic text classification system. A category associated with a document may be pre-stored with the document in a database associated with server 220. In this case, category suggestion engine 420 may identify the category by looking it up in the database. A document may have one or more associated categories.

[Category suggestions relating to a search](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,523,099.PN.&OS=pn/7,523,099&RS=PN/7,523,099)
Invented by Daniel Egnor and Elizabeth Hamon Reid
Assigned to Google
The United States Patent 7,523,099
Granted April 21, 2009
Filed December 30, 2004

Abstract


> A system determines categories for business listings identified in a list of search results and assigns scores to the categories. The system presents one or more high-scoring categories as one or more category suggestions relating to the search results list.

If you listed a business in Google Business Local, how much time did you spend thinking about the categories that you assigned to your business? What other categories show the above search results when you see your site listed in Google Local Search results?

**The What and Where of Local Business Search**

The patent application published by Google in January takes on a slightly different problem.

When you type a query into a text box for a local search, you’re typing in the “what” and the “where” of your search.

So, a search for “jack in the box Stanford ca” is a search for “jack in the box” as the what, and “Stanford ca” as the where. Or is it? The search engine might see the “in” within the business name “Jack in the box” and interpret that as a separator between a what and a where, and decide to look for “jack” as the what, and “the box Stanford ca” as the where. The patent application tells us that problems like this can be addressed by looking at both potential breakdowns and seeing which seems to be the more obvious one based upon the number and quality of search results that each might return.

This patent filing isn’t mentioned because the search engine might have switched from having separate search boxes for a “what” and a “where” for a local search to a single search box for both.

Google will sometimes show information in their Web search results from other sources, such as their news results, images, videos, or local search results.

One guess is that in having the same type of searching format, a single text box, for entering queries for local search and Google’s organic search, Google might be provided with a better idea of when they might show local search results in their organic search listings when the search engine frequently sees a similar query in local search.

The patent application is:

[Interpreting Local Search Queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090019028.PGNR.&OS=dn/20090019028&RS=DN/20090019028)
Invented by James Norris, Gregory John Donaker, and Nina Weiyu Kang
Assigned to Google
US Patent Application 20090019028
Published January 15, 2009
Filed July 9, 2007

Abstract


> A search query may be interpreted as many possible interpretations, and each interpretation may be explored before the search results are sent to a user. In one embodiment, a device may split the search query into partitions. Each of the partitions may be submitted, as a search query, to search repositories. Confidence scores based on the results returned from the repositories may be used to determine a measure of confidence of the repository in the search query interpretation.

More interesting, the patent application tells us that sometimes people use local search but don’t include the “where” in their query. Instead, they type in only the “what” or the “where” isn’t defined very well. In that case, the search engine might look at other information to provide context for the search, such as looking at:

- A Google Local Search map currently being viewed,
- Geographic location information obtained from the user’s IP address,
- Geographic location information or other information obtained from a profile previously registered by the user with a local search engine,
- Information based on the search history of the user,
- Information based on the viewing history of the user,
- Information based on the language of the search query, and/or;
- Information based on the hostname through which the user accessed the local search engine

Oddly, if I search for “pizza” in Google’s Web search, I’m shown a map near my location with a box (ten listings) of local businesses that sell pizza. Suppose I type “pizza” into the search box at [Google Maps](https://www.google.com/maps/@33.134666,-117.3136939,13z), I’m shown a map with the United States centered in the middle, and results shown in the US, in Canada, in Mexico, in Central America, and even at the tip of South America. Google Web results seem to be inferring the “where” of my search, but Google Maps doesn’t.

Why would Google guess the “where” for a Web search and not a search at Google Maps?
