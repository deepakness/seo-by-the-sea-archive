---
title: "Is Google Measuring Our Reading Speed of Web Documents?"
source_url: "https://www.seobythesea.com/2012/10/google-measuring-reading-speed/"
slug: "google-measuring-reading-speed"
date_published: "2012-10-16T11:28:47+00:00"
date_modified: "2020-07-26T17:37:06+00:00"
author: "Bill Slawski"
---

Imagine that a search engine might insert place markers into a web page, perhaps with the use of something like the new [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/)? These markers could enable a search engine to calculate how long it might take someone to read that page. A newly granted patent from Google describes why they might insert such markers (without really telling how it might insert those), to determine the reading speed of a page.

The process described by the patent might try to understand how different features associated with a page might cause it to take less time or more time for a visitor to read a page. It would then use that understanding to predict how such features might influence the reading of other pages that don’t have markers inserted into them. These types of features could include language, layout, topic, and the length of text of those documents. These are all things that could affect traffic across the web or at specific websites.

As an example, the patent tells us that pages in different languages could require different amounts of space to say the same thing, and therefore would require different amounts to time for someone to read those pages.

The patent is:

[Detection and utilization of document reading speed](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08271865&OS=PN/08271865&RS=PN/08271865)
Invented by Victor Bennett
Assigned to Google
US Patent 8,271,865
Granted September 18, 2012
Filed: September 19, 2005

Abstract


> A system stores an electronic document that has markers inserted within the electronic document. The system visually renders the electronic document to a user and uses the inserted markers to determine a speed at which a reader reads the electronic document.

A determination of the speeds at which readers travel through the text in a document enables a search engine to predict user interactions with a specific website, and use that information to predict web traffic generally.

The patent defines documents pretty broadly to include e-mails, websites, business listings, files including files with embedded links to other files, news group postings, blogs, web advertisements, digital maps, and others.

The amount of time it might take someone to read a page could be calculated by the amount of time it takes to scroll down a page and go from one marker to another, or when a mouse cursor hovers over a portion of a page.

Aggregated reading speeds from multiple viewers might be used to create reading statistics for pages, and predictions of reading speeds for other pages. I can’t help but be reminded of [Google’s layout algorithm](https://www.searchenginewatch.com/2012/10/10/google-updates-above-the-fold-page-layout-algorithm/), and how it seems to know so much about the layouts of pages. I don’t know if reading speed predictions are part of that algorithm, but, interestingly, it focuses upon one way of indicating how fast someone might travel from one marker on a page to others.

The patent tells us that for the language detection feature, the text in a document might be compared to a dictionary of words in different languages to identify the language of a document. Google has stated in the past that they [ignore meta language elements](https://support.google.com/webmasters/answer/182192?hl=en&topic=2370587&ctx=topic) in the HTML code on a page:


> We don’t use any code-level language information such as lang attributes.

**Why does Google want to know how quickly people are reading different pages?**

Here are a few reasons cited in the patent. Determined reading speeds for pages might be used to:

1. Determine an expected time after loading of a document by a browser that a user will reach a specific portion of the document.

2. Differentiate users who speak the language they are reading from those that don’t.

3. Detect automated surfing systems from actual users that are reading a document, which can be helpful to detect and avoid “bots” and automated surfing on “pay-per-click” pages.

**Take Aways**

There have been a number of patents and papers from the search engines that indicate that Google might be using user behavior signals as part of a ranking signal, but none of those have told us what kinds of baselines or information they might use in verifying or checking up on how valid those signals might be, or if there are things about them that might skew those signals in odd ways.

Being able to measure and predict things such as how long it might take someone to read a page, or whether or not people are even scrolling down most of a page can provide a better sense of how realistic the thresholds that might be set to measure those user behavior signals might be. And being able to tell if an automated system is visiting pages is good to know when fighting things like click fraud.

Is this something that Google is doing now, or might do in the future?

Good question.
