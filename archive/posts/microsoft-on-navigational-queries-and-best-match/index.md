---
title: "Microsoft on Navigational Search Queries and Best Match"
source_url: "https://www.seobythesea.com/2009/12/microsoft-on-navigational-queries-and-best-match/"
slug: "microsoft-on-navigational-queries-and-best-match"
date_published: "2009-12-19T19:26:43+00:00"
date_modified: "2019-07-09T16:58:36+00:00"
author: "Bill Slawski"
---

When you visit a search engine, and type a word or phrase such as “Hilton,” or “ESPN,” or “Nature Conservancy,” into a search box, chances are that you want to visit the home page for Hilton Hotels, or ESPN or the Nature Conservancy. If the pages for those sites show up at the top of search results, chances are that you will likely click on those and possibly not even look at the search results under them.

At least, that’s what the search engines are guessing.

We’ve seen a number of papers and patent filings from search engines referring to queries like those as “navigational” search queries because searchers are using search engines as a way to navigate to those pages, instead of researching them to find more information about them.

Many of those documents describe navigational search queries but don’t tell us much about how a search engine might determine whether a specific word or phrase is a navigational query.

A Yahoo patent filing that I wrote about in [Redefining Navigational Queries to Find Perfect Sites](https://www.seobythesea.com/2008/03/redefining-navigational-queries-to-find-perfect-sites/), did give us a fair amount of detail on what Yahoo might look for when deciding whether a query was navigational or not, focusing mostly on data collected in their search query logs. For example, if a certain page tended to be selected out of search results much more frequently than other pages in response to a query, then the query could be considered to be navigational.

A recent Microsoft patent application applies a similar approach to defining navigational queries. The inventors of the patent filing tell us that queries can be generally classified as falling into a couple of broad categories: discovery queries and navigational queries.

**Discovery queries** – used when someone is seeking information about a topic regardless of which web site that information might appear upon. For example, someone who wants to learn more about the City of Seattle might type the word Seattle into a search box, and view a number of sites that show up in search results. The ideal search algorithm that a search engine might use to provide results to a searcher using a discovery query would attempt to provide a number of relevant and material pages within search results in response to a discovery query. Chances are that if someone visits one of the pages in their search results while using a discovery query, that they may return to those search results and visit other pages as well.

**Navigational queries** – used by a searcher who is attempting to find a specific web site. For instance, there’s a good chance that someone searching for the word Microsoft is trying to visit the website for Microsoft. An ideal search algorithm responding to a navigational query would attempt to show searchers using navigational queries the site that they are trying to find as the first result. Chances are that a searcher visiting that first page won’t return to the search results and visit other pages.

The patent application is:

[Presenting Search Queries Related to Navigational Search Queries](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090299964.PGNR.&OS=dn/20090299964&RS=DN/20090299964)
Invented by Michael Maxwell Cameron, Hugh Evan Williams, Srinath Reddy Aaleti, Nitin Agrawal, and Tabreez Govani
Assigned to Microsoft
US Patent Application 20090299964
Published December 3, 2009
Filed: May 30, 2008

Abstract


> A method and medium are provided for determining whether search queries issued to a search engine are navigational search queries and displaying related search queries and corresponding URLs in association with a URL corresponding to a target of the navigational search query. One embodiment of the method includes receiving a query log and determining whether search queries are navigational search queries based on a comparison of URLs selected in response to the search queries.
>
> A set of related navigational queries and corresponding URLs is then compiled by analyzing the query log. The set can comprise search queries issued within a predetermined period of time from the receipt of a navigational search query. Search queries are filtered from the set if they are not navigational search queries. The set of related search queries and corresponding URLs is presented in association with the URL corresponding to the navigational search query.

While there’s some overlap in the methods described by Microsoft and Yahoo in terms of how they might identify a navigational query, Microsoft adds some additional information.

We’re told that Microsoft might collect information from query logs comparing the number of times that someone only selects one particular page from search results after entering a query, against how often searchers select more than one page in response to the same query. If searchers tend to select only one specific page in response to a particular query between 40-50 percent of the time, then the query may be considered a navigational query, and the page being selected may be the ideal search result for that query.

It’s interesting to see what Bing does in actual practice.

In Bing results, if it’s very likely that a query is navigational, the search engine might only show information from that page itself. For example, in a search for ESPN, we’re told by the search engine that there are around 26 million results for the word, but we shown results only from ESPN, with a link to “other results containing ESPN.” The word “Official Site” also shows up after the URL for the site in search results.

![Bing search result for a search for ESPN showing links to pages, images, and video on the ESPN site.](media/bing-espn.jpg)

While looking at Bing’s results for some other larger brands, I noticed that many of them were labeled “Official Site,” and they included additional information such as images, or links to stock information results. I looked up a number of other queries that might be considered navigational as the names of well known organizations or brands, but which weren’t traded on any stock markets, and while the home pages for those did show up first in search results, they weren’t separated from other search results like the ESPN results were, and there was no “official site” designation on them.

Why some sites and not others?

Bing announced a feature called “Best Match,” in June on a Bing community page, in a post titled Bringing the Ideal Result Front and Center with Best Match. In that post, they note that:


> Today, while search engines do a pretty good job at finding the best result for a simple query, they generally won’t tell you if the top result is the official one, nor will they help you navigate within that site. Nearly a third of queries fall into this “navigational” category – where you’re really only looking for one particular site.

We’re told that sites considered to be a “Best Match” may have the “official site” designation, contain additional sitelinks, a search box to search with the site, and certain best match sites may have even other features.

We aren’t told exactly what criteria is used to determine when a site might be a “Best Match,” but chances are good that user-data like that used to determine which queries are navigational, and which pages are very good matches for those queries are likely a key aspect of that determination.
