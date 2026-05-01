---
title: "Queryless Recommendations at Google, Stumbleupon, and eBay"
source_url: "https://www.seobythesea.com/2007/04/queryless-recommendations-at-google-stumbleupon-and-ebay/"
slug: "queryless-recommendations-at-google-stumbleupon-and-ebay"
date_published: "2007-04-25T23:45:45+00:00"
date_modified: "2022-01-07T15:59:08+00:00"
author: "Bill Slawski"
---

*Added September 24, 2018* Google has published the post [Discover new information and inspiration with Search, no query required](https://www.blog.google/products/search/introducing-google-discover/), telling us about queryless searches using Google Discover. This post shows that this is something that Google has been working upon for a long time and that more than 800 million people are now using Google Discover. And Google Search Console is now showing off a Google Discover Report: [Google Search Console adds Discover report](https://searchengineland.com/google-search-console-adds-discover-report-315192)


## A Look at Queryless Recommendations on the Web, Including the Early Days at Google

Last week, Google announced a Web page recommendation service that works with the Google toolbar and [Google Web History](https://accounts.google.com/Login?continue=https://www.google.com/history/&hl=en&service=hist&authuser=0) to allow people to do some [Searching without a query](https://googleblog.blogspot.com/2007/04/searching-without-query.html)

While searching around the US Patent Applications database, looking at user recommendations programs tied to toolbars, I happened across a patent application that describes some of the nuances of how Stumbleupon works.

If you use Stumbleupon, you already have a working knowledge of how StumbleUpon does what it does. If you want to dig a little deeper under the hood, the patent filing provides a more detailed view.

[Method and system for single-action personalized recommendation and display of internet content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20030195884.PGNR.&OS=dn/20030195884&RS=DN/20030195884)
Invented by Eric Boyd,Justin LaFrance, Geoff Smith, and Garrett Camp
US Patent Application 20030195884
Published October 16, 2003
Filed: April 11, 2003

Abstract


> A method and system for single-action personalized recommendation and display of content via the Internet. The recommendation is given by a server system and received by a client system. The content itself has been previously recommended to the server system by the users of the client system. Client system recommendations to the server system are also invoked with a single-action. Recommended content is referred to by a URL. Users can rate content to the server system using a single-action. The server system performs recommendation calculations using user-specific information such as user preferences, demographic data, content rating history, and content-specific information. The content rating history of other users may also influence these calculations. Client systems display recommended content directly to the user in response to only a single-action.

Chris Sherman discussed similarities between the Stumbleupon and Google queryless search, and their differences at Search Engine Land in [Google Offers “Queryless Search” & Personalized Recommendations](https://searchengineland.com/google-offers-queryless-search-personalized-recommendations-10999). As Chris notes, the major difference is that Stumbleupon depends upon users filling out profiles to allow the system to learn about users and offer recommendations, where Google learns about users by paying attention to what pages they visit on the Web.

I’ve mentioned the Google patent application behind the queryless recommendations process on previous posts, but here’s a little information about it in case you want to look at it more deeply:

[Systems and methods for modifying search results based on a user’s history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20060224587.PGNR.&OS=dn/20060224587&RS=DN/20060224587)

Abstract


> A user’s prior searching and browsing activities are recorded for subsequent use. A user may examine the user’s prior searching and browsing activities in a number of different ways, including indications of the user’s prior activities related to advertisements. A set of search results may be modified in accordance with the user’s historical activities. The user’s activities may be examined to identify a set of preferred locations. The user’s set of activities may be shared with one or more other users. The set of preferred locations presented to the user may be enhanced to include the preferred locations of one or more other users. A user’s browsing activities may be monitored from one or more different client devices or client application. A user’s browsing volume may be graphically displayed.

There have been some rumors of an eBay acquisition of Stumbleupon, and speculation about what eBay might do with the company if they bought them. A patent application from eBay describes their creation of watch lists, wish lists, personalized user pages, and rankings of sale items listings based upon monitoring visits to sites.

The patent application doesn’t state explicitly that it would provide personalized recommendations based upon similar user profiles, culled with information that eBay users provide, but that might not be a step too far to take based upon what it does provide.

Imagine a specialized Stumbleupon for eBay, which could deliver recommendations of listings to eBay Stumblers based upon their wishlist and watch list indications, their locations, and other user information.

[System to generate an aggregate interest indication with respect to an information item](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20060095431.PGNR.&OS=dn/20060095431&RS=DN/20060095431)
Invented by Adam Nash
US Patent Application 20060095431
Published May 4, 2006
Filed: December 30, 2004

A paragraph from the document that provides a little insight into what it involves:


> [0037] In one embodiment, the navigation applications 56 may include one or more search enhancement applications 80, which operate to provide information to users (e.g., via a “homepage” of the network-based marketplace 12) regarding activities that are being performed by a user community.
>
> For example in one embodiment, the search enhancement applications 80 may identify lists of top-ranked listings, published by the network-based marketplace 12. One such a list of top-ranked listings may be a list of listings that are the most “monitored” by a community of users, the monitoring function is supported by an interest module 82 of the applications 80.
>
> For example, the interest module 82 may enable a user to add a particular listing to a “watch list” or “monitored list” that is maintained by the network-based marketplace 12 on behalf of the user. The interest module 82 may also enable users to register interest concerning a listing in one of many other ways, including by adding a particular listing to a “gift registry” or “wish list” that is maintained for the user.
>
> The lists may also be restricted or based on other attributes (e.g., category, price, geographic location of seller, etc.).

Steve Bryant, at Google Watch, draws a connection between eBay and Stumbleupon in one of his posts last week: Why Does eBay Want StumbleUpon? To Promote Its Auctions.

Stumbleupon announced last week that they were launching a new service that allows users to limit the sites that they stumble through to a certain set number of specific sites in what they call Stumblethru.

Using Stumblethru in eBay, with your wishlist and watch list information as part of the recommendation information would seem to be a great opportunity for eBay. Is it something we’ll see?

Last Updated July 28, 2019.
