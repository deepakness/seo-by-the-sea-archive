---
title: "How a Search Engine might Weigh Anchor Text Relevance Differently"
source_url: "https://www.seobythesea.com/2011/10/how-a-search-engine-might-weigh-the-relevance-of-anchor-text-differently/"
slug: "how-a-search-engine-might-weigh-the-relevance-of-anchor-text-differently"
date_published: "2011-10-03T13:15:20+00:00"
date_modified: "2021-06-20T09:22:21+00:00"
author: "Bill Slawski"
---

One of the things that’s clear about how search engines work is that when they find a link pointing to a page using certain anchor text, that page might be seen to be a little more relevant for the text found in that link. Google pointed out that about anchor text relevance in one of the earliest white papers about how the search engine works:


> This idea of propagating anchor text to the page it refers to was implemented in the World Wide Web Worm [McBryan 94] especially because it helps search non-text information and expands the search coverage with fewer downloaded documents. We use anchor propagation mostly because anchor text can help provide better quality results. Using anchor text efficiently is technically difficult because of the large amounts of data that must be processed. In our current crawl of 24 million pages, we had over 259 million anchors, which we indexed.
>
> – [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html)

But one of the assumptions that many make is that each link, with its anchor text, is equally as important as any other link and that if a page has lots of links pointing to it with certain anchor text included in those links that it will rank more highly for the terms found in that text than it otherwise might in the absence of all those links.

A recently published patent application from Microsoft describes how they might weigh anchor text relevance of links differently based upon relationships between pages where those links are found, or where they might be pointed towards. Many Google patents also describe ways that they might weigh anchor text relevance differently.

The Microsoft patent filing points out some examples of when one or more links pointing to a page might not carry as much anchor text weight as you might assume it would.

The first example is when you have one or more mirror sites of a particular site. When links and their related anchor text point from those mirror sites to another site, it isn’t beneficial from a search engine ranking perspective to count those links and their anchor text more than once.

A second example is when two anchor text links come from two websites with cooperative relationships, where the sites are under the control of the same or related site owners and tend to have “a substantial number of the same or similar anchor text links.”

A third situation described in the patent application is when anchor text links appear to be purposely created to boost the search rankings of a destination page. Anchor text relevance may not be counted much in such instances.

The patent is:

[Using Anchor Text With Hyperlink Structures for Web Searches](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110238644.PGNR.&OS=dn/20110238644&RS=DN/20110238644)
Invented by Zhicheng Dou, Junyan Chen, Ruihua Song, and Ji-Rong Wen
Assigned to Microsoft Corporation
US Patent Application 20110238644
Published September 29, 2011
Filed March 29, 2010

Abstract


> This document describes tools for adjusting anchor text weight to provide more relevant search engine results. Specifically, these tools take advantage of a site-relationship model to consider relationships not only between an anchor text source site and a destination page and relationships between multiple anchor text source sites to improve web searches.
>
> Consideration of these relationships aids in determining a new an anchor text weight, which in turn results in more relevant search results.

When reading through this Microsoft patent application, I was reminded very much of a Google patent that I wrote about last year in my post, [Google’s Affiliated Page Link Patent](https://www.seobythesea.com/2010/08/googles-affiliated-page-link-patent/), in which Google described how they might attempt to gauge how related sites that linked to each other might appear to be while they determined how much weight to pass along from one page to another. That patent didn’t use the word “PageRank,” once, and it’s possible that the method described in it would apply to both a link quality measure like PageRank and anchor text relevance as well.

I was also reminded of Google’s [Reasonable Surfer](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/) patent. But while that patent looked at a wide range of features that might be associated with anchor text found on a page, it seemed to focus more upon how much link weight or PageRank might be passed along from anyone link found on a page.

Google’s Phrase-Based Indexing Patents also provide different weights associated with anchor text based upon several different factors, as noted in the following passage from the first of those patents, [Phrase-based indexing in an information retrieval system](https://patents.google.com/patent/US7536408):


> A given document d in the document collection may have some number of outlinks to other documents. Each outlink (a hyperlink) includes anchor text and the document identifier of the target document. For purposes of explanation, a current document d being processed will be referred to as URL0, and the target document of an outlink on document d will be referred to as URL1.
>
> For later use in ranking documents in search results, for every link in URL0, which points to some other URLi, the indexing system 110 creates an outlink score for the anchor phrase of that link concerning URL0, and an inlink score for that anchor phrase with respect to URLi. **That is, each link in the document collection has a pair of scores, an outlink score, and an inlink score.***

* My Emphasis

The patent goes on to explain how the phrase-based indexing approach might impact anchor weights differently, by whether or not it is a “good phrase,” whether or not it intentionally appears within the document being pointed towards, and whether or not it is a “related” phrase under the definition defined by that patent.

The Microsoft patent filing doesn’t cover the different types of instances described in those different Google patents. Still, it does try to understand the relationships between sites that point to the same page using the same anchor text and the relationship between pages that link to another page.

In the instance of multiple pages using the same anchor text, and linking to the same page, the two or more pages linking to that page might be examined to see if they tend to link to many the same pages or similar pages. If there’s a large amount of overlap, the weight of the anchor text from those pages might be reduced.

When looking at a single page pointing a link to a page on another site, the level of “dependence” the destination page has upon the linking page might be explored. For example, if the linking site includes links to many pages on the site being linked to, then the relationship between the sites can be seen as a dependent relationship, and the weight of the anchor text in those links might be reduced.

The patent filing does provide more details on how relationship models between sites might be recognized, including links that might have been added by an untrusted third party hidden within a site’s source code.

**Anchor Text Relevance Conclusion**

How much anchor text relevance weight from a link provided to a page’s ranking in search results?

It may depend upon several factors, including how related or affiliated the search engines might think the sites doing the linking are to the site being linked to are, how related or affiliated sites linking to the destination page might be, how related the text or phrase in the link might be to the page being linked to might be, and possibly some “reasonable surfer” type features associated with the link.

I’ve seen the question raised in many places about how much weight, either PageRank or hypertext relevance, might be passed along to a page when there are two or more links on the same page to another page. A search engine might collapse those links together and treat them as a single link, or it might derive different weights for them based upon reasonable surfer type features and then possibly discount their total value.

It’s also possible that the anchor text relevancy of those links could depend upon how related the text within the links might be to the page being pointed towards.

There may be other issues involved and how might relevant anchor text might pass along to another page. Still, the Microsoft and Google patent filings provide some interesting starting points in exploring that topic.

Last Updated June 9, 2019.
