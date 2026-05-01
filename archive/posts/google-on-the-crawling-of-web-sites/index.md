---
title: "Google on Crawling Websites"
source_url: "https://www.seobythesea.com/2007/12/google-on-the-crawling-of-web-sites/"
slug: "google-on-the-crawling-of-web-sites"
date_published: "2007-12-04T10:47:58+00:00"
date_modified: "2020-06-24T07:02:26+00:00"
author: "Bill Slawski"
---

When I talk with someone about how a search engine works, I find it convenient to break the process down into three parts, because there are three primary functions that a search engine performs.

These three parts are *Crawling*, *Indexing*, and *Serving Results*. I like using this three-part breakdown because I find that it makes it easier to explain how each of those parts works by themselves, and together with the other parts.

A patent granted to Google today, and originally filed in 2000, explores the first of those parts – crawling websites.

This is an interesting area because having some knowledge of it might help to explain why some pages on the Web get indexed, and why some other pages might not. There are a couple of links that I like to point people towards when I talk about Google and crawling websites.

The first of those is a page on the Stanford web site, which provides us with a list of a [Working Papers Concerning the Creation of Google](http://web.archive.org/web/20160926234418/http://dbpubs.stanford.edu:8091/diglib/pub/projectdir/google.html). If you would like to explore some of the technological approaches and processes behind Google, it doesn’t hurt to look at some of the papers listed on that page.

One of those listed papers focuses on different priorities for crawling websites and the pages behind different URLs on a page that a search crawling program finds. For instance, one choice might be to try to crawl and index as many pages that are in the root directories of websites instead of trying to crawl all of the pages of one large website. The paper is [Efficient Crawling Through URL Ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf). One of the authors of the paper is Lawrence Page, a co-founder of Google.

It’s a paper that I recommend highly for anyone wanting to learn about some of the potential hurdles that a search engine faces when crawling websites.

The Google patent covers some issues that the paper doesn’t include, such as how crawling of pages from a specific domain or IP address might be scheduled to not impose too large of an impact upon a server, by looking at a stall time specified between accesses of a page by a search engine. So the priority of what page might be crawled next may also be influenced by what kind of strain might be placed upon a server.

The patent filing also discusses the need for a distributed set of crawling programs, so that different pages on the Web can be crawled on time.

The patent discusses the role of PageRank in determining crawl prioritization, how PDF and Postscript files may be converted to text files before their content is sent to an indexing program, how known high output sites such as AOL might be crawled quicker than other websites since they can handle the impact of a greater number of crawler visits at one time.

[Distributed crawling of hyperlinked documents](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,305,610.PN.&OS=pn/7,305,610&RS=PN/7,305,610)

Inventors: Jeffrey A. Dean. Craig Silverstein, Benedict Gomes, and Sanjay Ghemawat
Assigned to Google
US Patent 7,305,610
Granted December 4, 2007
Filed: August 14, 2000

Abstract


> Techniques for crawling hyperlinked documents are provided. Hyperlinked documents to be crawled are grouped by host and the host to be crawled next is selected according to a stall time of the host. The stall time can indicate the earliest time that the host should be crawled and the stall times can be a predetermined amount of time, vary by host and be adjusted according to actual retrieval times from the host.

ps. It’s the first day of Pubcon, and I’m off to registration.
