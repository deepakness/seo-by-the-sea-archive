---
title: "Technorati Patent Filing on Blog Spam"
source_url: "https://www.seobythesea.com/2007/04/technorati-patent-filing-on-blog-spam/"
slug: "technorati-patent-filing-on-blog-spam"
date_published: "2007-04-05T21:56:49+00:00"
date_modified: "2018-07-11T19:32:14+00:00"
author: "Bill Slawski"
---

There’s a new patent application from Technorati on blog spam. Before jumping into that, I want to look at some recent blog posts about Technorati and Google’s blog search.

Robert Scoble wrote one, Mirror mirror on the wall, which blog search is best of them all? – asking his readers which blog search is the best.

Lisa Barone covered [Dave Sifry’s State Of The Live Web](https://www.bruceclay.com/blog/dave-sifrys-state-of-the-live-web/) and provided some thoughtful analysis of statistics from the report.

Maki, over at Search Engine Journal, explored the differences between Google Blog Search and Technorati in more depth, asking [Which is Better](https://www.searchenginejournal.com/technorati-vs-google-blog-search-which-is-better/4658/)? She discusses some of the differences between each that show the value of both.

Has the quality of results in Technorati increased recently, as Robert Scoble was told on his recent trip to the South Park area in San Francisco? Honestly, when I’m performing searches on blogs, I will often perform the same searches on Technorati, Google Blog Search, and Bloglines. The results often differ, but I find value in all three.

**Technorati Patent Filing on Blog Spam**

Can affiliate activity and web spam signals be looked at together to identify spam in blogs? A Technorati patent application published this morning looks at the kinds of things that indicate spam, and describe how affiliate IDs can be used with those indicators to identify spam pages and stop indexing them.

Web page spam and spamming techniques can arise in a variety of forms, all of which are manipulative and deceptive, done solely for the purpose of affecting the page’s rank or classification on a search engine:

1. High frequency of publication of web pages.
2. A misleading number of inbound links (link farming), or citations published on other web pages.
3. Keyword stuffing.
4. Automatic publication of third party content.

This kind of information is looked at together with the presence of affiliate identification information.


> To identify spam, embodiments of the present invention examine the structure of a network document for indications of affiliation with commercial bounty paying click networks. Statistics on the publish cycle timeframe and the dispersion across publications of affiliate identification tokens can be used to flag web pages as spam.

**Identifying and classifying network documents as spam**

Here’s a simplified overview of the process described in the patent application:

1) A document is crawled or indexed in response to a ping.

2) Instances of duplicated content from other publishers is identified. When content has been copied from other publishers, it suggests that the document it is on may be spam. A count may be maintained of copied portions of text or other content, and/or the number of other publishers from which content has been copied.

3) The repetitiveness of content in a document is reviewed. The more times some words have been copied and repeated in a document, the more likely the document is spam.

4) Links in a document are looked at to see if they have been previously identified as being associated with web spam.

5) When certain keywords appear more than a certain number of times, this suggests that the document is spam.

6) A weight is assigned to each of the above, and other factors may be looked at in addition.

7) If the candidate pages are identifed as being spam, a flag can be applied to an affiliate ID associated with that document.

8) Other pages associated with that affiliate ID may not be processed and indexed.

More about the patent application:

[Method and apparatus for identifying and classifying network documents as spam](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070078939.PGNR.&OS=dn/20070078939&RS=DN/20070078939)
Invented by Ian Kallen
Assigned to Technorati, Inc.
US Patent Application 20070078939
Published April 5, 2007
Filed: September 25, 2006

Abstract


> Disclosed are methods and apparatus, including computer program products, implementing and using techniques for methods and apparatus, including computer program products, implementing and using techniques for identifying and classifying a network document as a spam candidate. In one aspect of the present invention, a network document is retrieved. Affiliate identification information is identified in the network document. One or more publications are associated with the identified affiliate identification information. Publication data for the network document is determined according to the identified affiliate identification information and the identified one or more publications. When it is determined that the publication data satisfies a condition indicative of spam, the network document is classified as a spam candidate.
