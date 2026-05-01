---
title: "Does Page Load Time influence SEO?"
source_url: "https://www.seobythesea.com/2009/07/does-page-load-time-influence-seo/"
slug: "does-page-load-time-influence-seo"
date_published: "2009-07-30T11:16:26+00:00"
date_modified: "2021-07-06T13:38:11+00:00"
author: "Bill Slawski"
---

Does the amount of time it takes for a page to load in a browser influence search engine rankings for pages? Should it?

If it did, might sites that were all text show higher search results than sites that included pictures and different applications? Or, might a search engine find a way to account for different types of sites and the amount of time it might take them to render in a browser, based upon actual user data in addition to the amount of time it takes a site to render in a browser?

A recent patent application from Yahoo explores ways that a search engine might consider the amount of time it takes different types of pages to render and other issues involving how quickly pages respond to visits in the ranking, classifying, and crawling of those pages.

**Latency**

Latency is a big fancy word that means the amount of time between when something was started and when you can see its effects. It’s a word that shows up very frequently in the Yahoo patent filing. It’s a word worth learning a little more about, especially when it comes to websites, how people use them, and how a search engine might track that use.

A search engine may look at a wide range of information to decide whether or not it will visit and index pages on the Web, how it might rank those pages in search results, and how it may classify those pages.

A search engine will likely consider a wide range of informational signals. Those can include the content that appears on web pages, links, and the text within links that point to and from pages, information about how people use specific web pages, and other information about pages and the sites that they appear upon.

A search engine might also look at how quickly pages load and render in a browser, how much people might tolerate when pages load slowly, and how good experience websites might deliver to their visitors.

The patent filing is:

[Web Document User Experience Characterization Methods and Systems](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090187592.PGNR.&OS=dn/20090187592&RS=DN/20090187592)
Invented by Konstantinos Tsioutsiouliklis and Marcin M. Kadluczka
US Patent Application 20090187592
Published July 23, 2009
Filed January 23, 2008

Abstract


> Methods and systems are provided that may be used to characterize in some manner the performance that a user may experience when accessing a web document. An exemplary method may include accessing at least one performance characteristic associated with at least a portion of a computing environment adapted for sharing at least one web document and establishing user experience information associated with the web document based, at least in part, on the performance characteristic.

**Informational Signals and Search Engines**

When a search engine ranks pages in search results, it will explore signals that indicate how relevant those pages are to queries that might be used to find them, such as using words upon those pages that appear in those queries. A search engine may also look at signals that indicate the quality of the web pages that it might list within those search results.

A measure like PageRank is supposed to indicate quality rather than relevance because it looks at the number and “importance” of links pointing to a page to try to determine how important a page might be. There are other quality signals that a search engine may use. Some examples might include the amount of text upon a page, how readable that text is if the page contains broken links, and possibly hundreds of other factors.

A search engine wants to return pages in search results that are both relevant and high quality.

Another set of signals or factors that a search engine may use involves interacting with pages that they find on the web. These can include which pages people select in search results when they see them in search results for a specific query, how much time people might spend on a page they’ve selected before they return to the search engine, how far down a page they might scroll, whether they bookmark or save a page and others.

This patent filing focuses upon how well pages might meet “desired user experiences” by looking at the performance of web pages and actual user interactions with those pages. It tells us:


> With so many websites and web pages being available and with varying hardware and software configurations, it may be beneficial to identify which web documents may lead to the desired user experience and which may not lead to the desired user experience.
>
> By way of example but not limitation, in certain situations, it may be beneficial to determine (e.g., classify, rank, characterize) which web documents may not meet performance or other user experience expectations if selected by the user. Such performance may, for example, be affected by the server, network, client, file, and/or like processes and/or the software, firmware, and/or hardware resources associated therewith.
>
> Once web documents are identified in this manner, the resulting user experience information may, for example, be considered when generating the search results.

**User Experience Characteristics**

The patent filing considers much more than how quickly pages load into a browser, and it may influence more than just the rankings of pages.

It tells us about an information integration system that can be used with search engines, job portals, shopping search sites, travel search sites, RSS applications, and other types of pages, and how it might look at those in at least three different ways:

***Access*** – How quickly it takes to access a page or other kind of document when sending a request to retrieve a page or document. Measuring access might mean looking at performance characteristics associated with a page, such as a server performance and file performance. It might consider how quickly a page might load for visitors at different connection speeds, such as broadband and dial-up. A search engine crawling program might simulate connections at different speeds to measure how quickly a page loads for visitors coming to a page through dialup or broadband connections.

***Rendering*** – How quickly a page starts showing up within a browser (and it might emulate several different types of browsers), how a page loads in a browser, and how long it might take for the full page, or at least the part of the page above the fold to load in a browser. It contemplates that on some sites, some large pages might be set up so that even though they contain a lot of content, the content at the top of the page renders quickly so that a visitor doesn’t have to wait very long to start reading and viewing the content on the page.

It may also consider such things as “differences in complexity, size, many files, user interface mechanisms, embedded sections (e.g., advertisements, audio content, video content, security features, etc.), and/or the like,” to understand how a page renders, and how good of a user experience that might be.

***User Experience*** – How do people actually use web sites, and how do they react to different access and rendering issues on different sites?

Different people might have different levels of patience in waiting for a site to load and render in a browser, and they might be willing to wait longer for some types of sites to load and render than others. For example, someone might be willing to wait longer for a page to show up associated with their bank account than for a “more generic” type of page.

Examples of other “user related performance characteristics” could include how visitors to pages react to things such as:

- Pages that fail to download or render within an acceptable period of time,
- Pages that automatically play video or audio content,
- Pages that include pop-up or pop-under advertisements,
- Pages that in some other way add further delays due to additional file downloading, additional processing, etc. These might include things such as Javascript, Flash, Embedded or externally links objects, and Plugins

**How Measuring Latency and User Experience Might be Used**

The inventors behind the patent application point to at least three uses that a search engine may have for measuring a website’s performance based upon access, rendering, and user experience. They are ranking, classification, and crawling.

***Ranking*** – The information collected about user experience characteristics could be used to possibly filter, promote, or demote web documents to improved desired user experiences.

***Classification*** – The user experience information might be used to classify pages in some way. The layout of a page might indicate that a site might contain certain types of content related to certain types of sites. The patent application tells us:


> For example, finance-related websites often display streaming data of the stock market, news websites also often stream content, and certain types of web pages might use frames or tables, which may be useful in classifying the web document.

***Crawling*** – When a search engine has a list of URLs to visit that it hasn’t seen before, or that it might revisit to check for new content, it might consider several different things in determining which to look at first. The user experience information might help make some decisions to look at certain content on pages that a search engine might not have considered before. Here’s what the patent filing says about that:


> For example, information relating to whether a user might abandon or wait for a web document to be displayed may be useful when establishing certain quality or relevance factors for the web document.
>
> For example, information relating to whether a user might wait for or specifically request embedded or external objects to be downloaded and displayed may be useful when establishing certain quality or relevance factors for the web document.
>
> In certain implementations, such information may, for example, be used to determine if a crawler or other like the process should also execute such embedded and/or external objects to establish performance parameters, etc.

**Conclusion**

A search engine may simulate or estimate the amount of time it takes to connect to a page, the way and amount of time a page renders in a browser, and how people react to those times to influence how a page is ranked, classified, and how much of the page is crawled and indexed – including embedded material on a page such as javascript or flash content.

We don’t know if any of the search engines are presently using the processes described in the patent filing presently. Still, the patent application gives us some ideas on how a search engine might use information about page load and rendering times and information on how people might react to those wait times.

How does waiting for a page to show up in your browser or render influence how you enjoy the page? Are you willing to wait longer for some types of pages than others?

Again, latency is the amount of time between when something was started and when you can see its effects.

If you own a website, how much attention do you pay to latency issues involving your site? Will you now that you know that search engines may be paying attention?
