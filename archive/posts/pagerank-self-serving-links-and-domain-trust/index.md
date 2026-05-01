---
title: "PageRank, Self-Serving Links, and Domain Trust"
source_url: "https://www.seobythesea.com/2007/03/pagerank-self-serving-links-and-domain-trust/"
slug: "pagerank-self-serving-links-and-domain-trust"
date_published: "2007-03-26T09:18:50+00:00"
date_modified: "2007-03-26T09:20:34+00:00"
author: "Bill Slawski"
---

A patent application from Microsoft from 2005, and a new one published last week explore the concept of PageRank, and what they call a vulnerability of using PageRank, and come up with a couple of solutions.

Here’s the problem, as they state it:


> One way to increase the PageRank score of a web page v is by having many other pages link to it. This is inherent in the basic idea of web pages being able to endorse other web pages, which is at the heart of PageRank. If all of the pages that link to web page v have low PageRank scores, each individual page will contribute only very little.
>
> However, since every page is guaranteed to have a minimum PageRank score of dl|V|, links from many such low quality pages can still contribute a sizable total.

It may not be completely obvious why that’s a problem. They go on to explain:


> In practice, this vulnerability of PageRank is being exploited by web sites that contain a very large set of pages whose only purpose is to “endorse” a main home page.
>
> This “home” page does not have to be on the same server, but can be a home page (or any page) of some other server. Typically, these endorsing pages contain a link to the page that is to be endorsed, and another link to another endorsing page. All the endorsing pages are created on the fly.
>
> A web crawler, once it has stumbled across any of the endorsing pages, continues to download more endorsing pages (because of the fact that endorsing pages link to other endorsing pages), thereby accumulating a large number of endorsing pages.
>
> This large number of endorsing pages, all of them endorsing a single page, artificially inflates the PageRank score of the page that is being endorsed.

The patent filings provide a couple of potential solutions. The first is to split a minimum PageRank value amongst all of the indexed pages of a domain or an IP address rather than add more PageRank as new pages are created. The second is to assign a domain-based trust rank, based upon the web server it is hosted upon.

If implemented, a system like this might mean that the number of domains hosted on the server your site is located upon might make a difference to your rankings, and the value of the links from your pages.

Here are the patent applications:

[Systems and methods for ranking documents based upon structurally interrelated information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20050060297.PGNR.&OS=dn/20050060297&RS=DN/20050060297) (20050060297)
Published March 17, 2005; filed September 16, 2003

Abstract


> Systems and methods for ranking Web pages based on hyperlink information in a manner that is resistant to nepotistic links are provided. In one embodiment, a Web search service is provided for returning quality query results. The vulnerability of existing ranking algorithms, such as PageRank, to Web pages that are artificially generated for the sole purpose of inflating the score of target page(s) is addressed. Intuitively, it is recognized that it is less likely to reach a particular page on a Web server having many pages via a random jump than it is to reach a particular page on a Web server having few pages, which implies that the influence of such a page upon another page by linking to, or endorsing, the other page is diminished. Thus, in various non-limiting embodiments, each Web server, not each Web page, is assigned a guaranteed minimum score. This minimum score assigned to a server can then be divided among all the pages on that Web server.

[Domain-based spam-resistant ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070067282.PGNR.&OS=dn/20070067282&RS=DN/20070067282) (20070067282)
Published March 22, 2007; Filed September 20, 2005

Abstract


> A domain-based spam-resistant ranking architecture that computes trust in a domain based on web-servers on which a domain is hosted and a set of other domains that link to the domain. The ranks of pages are computed based on how much trust there is in each domain and which pages link to it. Web documents are ranked in a spam-resistant manner by assigning uniform significance to each IP address of a network location and then assigning trust values to domains hosted on those IP addresses. Then, based on a domain graph, the invention constructs a domain-rank which is an estimate of how authoritative the domain is. The domain ranks are then used to assign a minimum rank to each document.
