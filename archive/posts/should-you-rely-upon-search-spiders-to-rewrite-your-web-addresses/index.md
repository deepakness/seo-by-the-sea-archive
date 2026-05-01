---
title: "Should You Rely upon Search Spiders to Rewrite Your Web Addresses?"
source_url: "https://www.seobythesea.com/2010/11/should-you-rely-upon-search-spiders-to-rewrite-your-web-addresses/"
slug: "should-you-rely-upon-search-spiders-to-rewrite-your-web-addresses"
date_published: "2010-11-04T20:21:25+00:00"
date_modified: "2019-06-24T12:10:43+00:00"
author: "Bill Slawski"
---

## How Do Search Spiders Crawl Your Site?

Every web page has at least one unique address that people can reach it by. Sometimes a web page has more than one address, and that can be a problem.

For example, if I look for a digital piano on the target.com web site, I might find one at the following address:

- “http://www.target.com/Suzuki-Home-Digital-Piano-Rosewood/dp/B001HDAQ76/ref=br_1_1?ie=UTF8&id=Suzuki%20Home%20Digital%20Piano%20Rosewood&node=257467011&searchSize=30&searchView=list&searchPage=1&sr=1-1&qid=1288907760&rh=&searchBinNameList=subjectbin%2Cprice%2Ctarget_com_primary_color-bin%2Ctarget_com_size-bin%2Ctarget_com_brand-bin&searchRank=salesrank&frombrowse=1”

If I remove each of the following parameters (parts of the address) or combinations of parameters, from the Target URL for the piano, and place what is left of the URL into my browser’s address bar, I still get the same page each time, but with shorter URLs:

- &frombrowse=1
- &searchRank=salesrank
- &searchRank=salesrank&frombrowse=1
- &rh=&searchBinNameList=subjectbin%2Cprice%2Ctarget_com_primary_color-bin%2Ctarget_com_size-bin%2Ctarget_com_brand-bin
- &rh=&searchBinNameList=subjectbin%2Cprice%2Ctarget_com_primary_color-bin%2Ctarget_com_size-bin%2Ctarget_com_brand-bin&frombrowse=1
- &rh=&searchBinNameList=subjectbin%2Cprice%2Ctarget_com_primary_color-bin%2Ctarget_com_size-bin%2Ctarget_com_brand-bin&searchRank=salesrank
- &rh=&searchBinNameList=subjectbin%2Cprice%2Ctarget_com_primary_color-bin%2Ctarget_com_size-bin%2Ctarget_com_brand-bin&searchRank=salesrank&frombrowse=1

I can keep on removing more parts of that URL until I finally get down to the following address, which still shows me the very same page:

- “http://www.target.com/Suzuki-Home-Digital-Piano-Rosewood/dp/B001HDAQ76/”

If I search for the Target page for the piano at Google and Yahoo and Bing, on a search for “Suzuki Home Digital Piano” (without the quotation marks), the URL that those search engines show me for the piano at Target is:

- “http://www.target.com/Suzuki-Home-Digital-Piano-Rosewood/dp/B001HDAQ76/”

Both Google and Yahoo were granted patents this week on how they might address the problem of multiple addresses for the same page on a dynamic site when search spiders from those sites crawl or index pages on the web. Google’s patent dates back to 2003, and Yahoo’s was filed in 2006. Coincidentally, both were granted on the same day.

It’s possible that search spiders from all three search engines are using similar approaches to solve this problem, but it doesn’t always work as cleanly as in the Target example.

If I decide that I want to buy a welder, I might go to the Sears web site, and choose something like the Craftsman MIG Welder with Cart.

If I browse through the site, I might find that welder at the following URL:

- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?prdNo=1&blockNo=1&blockType=G1”

If I search on Google for the welder at Sears, I see the following address:

- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?prdNo=1”

I can remove the last parameter, “?prdNo=1”, and I still get the same page.

Yahoo and Bing both deliver me to the shorter version of the URL:

- “http://www.sears.com/shc/s/p_10153_12605_00920569000P”

**Potential Search Problems on Sites with Extra Parameters**

Extra parameters like the ones above often serve one of two purposes.

- Url Parameters may be used to control how content is displayed on a page, such as how it might be sorted, or how many results to show, or whether to include some additional navigation (such as links to other related pages).

- URL Parameters may also be used to track visitors and their movements through a site.

A search engine might inadvertently index the same page under more than one URL, with additional parameters showing.

For instance, if I search for “site:www.sears.com “Craftsman MIG Welder with Cart”” (without the outside quotation marks), I see around 2,600 pages listed as results, which include that phrase, such as the main product page, a main category page, and search results pages. Many of them are duplicates of each other, such as the following:

- “http://www.sears.com/shc/s/p_10153_12605_00920569000P”
- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?sid=comm_sears_reviews”
- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?prdNo=16”
- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?sid=MMLxconnect+wires+replacement+overload+12555902GIDxsearsProductDetails”
- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?prdNo=1&blockNo=1&blockType=G1%C2%A0%C2%A0”
- “http://www.sears.com/shc/s/p_10153_12605_00920569000P?vName=Tools&cName=Welding+Equipment&sName=MIG+Welders&sbf=Brand&sbv=Craftsman”

Is Google splitting PageRank between these pages? It’s possible.

I wrote a detailed post about Yahoo’s approach back when it was first published as a pending patent application entitled [Same-Site Duplicate Pages at Different URLs](https://www.seobythesea.com/2008/04/same-site-duplicate-pages-at-different-urls/). Google’s patent uses somewhat different language, but the ultimate goal is the same – finding a canonical URL for pages that might include more than one parameter that isn’t essential for displaying the content of a page.

As a side note, I was excited to see the Yahoo patent reference another post of mine, [Solving Different URLs with Similar Text (DUST)](https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/), as an “Other Reference.” That post describes a paper, [Do Not Crawl in the DUST: Different URLs with Similar Text Extended Abstract](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35210.pdf), by Uri Schonfeld, Ziv Bar-Yossef, and Idit Keidar, who provide another approach to identifying “Different URLs with Similar Text.” Ziv Bar-Yossef joined Google not too long after the paper was published.

Google’s search spiders patent is:

[Automatic generation of rewrite rules for URLs](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PTXT&p=1&p=1&S1=7,827,254.PN.&OS=pn/7,827,254&RS=PN/7,827,254)
Invented by Craig Nevill-Manning, Chade-Meng Tan, Aynur Dayanik, and Peter Norvig
Assigned to Google)
US Patent 7,827,254
Granted November 2, 2010
Filed December 31, 2003

Abstract


> A rewrite component automatically generates rewrite rules that describe how uniform resource locators (URLs) can be rewritten to reduce or eliminate different URLs that redundantly refer to the same or substantially the same content. The rewrite rules can be applied to URLs received when crawling a network to increase the efficiency of the crawl and the corresponding document index generated from the crawl.

The Yahoo search spiders patent is:

[Handling dynamic URLs in crawl for better coverage of unique content](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PTXT&p=1&p=1&S1=7,827,166.PN.&OS=pn/7,827,166&RS=PN/7,827,166)
Invented by Priyank S. Garg and Arnabnil Bhattacharjee
Assigned to Yahoo!
US Patent 7,827,166
Granted November 2, 2010
Filed: October 13, 2006

Abstract


> Techniques for identifying duplicate webpages are provided. In one technique, one or more parameters of a first unique URL are identified where each of the one or more parameters do not substantially affect the content of the corresponding webpage.
>
> The first URL and subsequent URLs may be rewritten to drop each of the one or more parameters. Each of the subsequent URLs is compared to the first URL. If a subsequent URL is the same as the first URL, then the corresponding webpage of the subsequent URL is not accessed or crawled. In another technique, the parameters of multiple URLs are sorted, for example, alphabetically.
>
> If any URLs are the same, then the webpages of the duplicate URLs are not accessed or crawled.

The methods described in these patents seem to have some limitations, and the search engines have come up with other ways for webmasters to try to help themselves. Those include:

- [The Canonical Link Element](https://www.mattcutts.com/blog/canonical-link-tag/)
- [Parameter Handling from Google](https://support.google.com/webmasters/answer/6080548?hl=en&rd=1)
- Dynamic URLs from Yahoo
- [XML Sitemaps](https://www.sitemaps.org/index.html) at [Google](https://support.google.com/webmasters/answer/6080548?hl=en&rd=1), at Bing, and at Yahoo.

Google introduced an improved parameter handling approach in early October, in Webmaster Tools, and announced it on the Official Google Blog in the post [Webmaster Tools: Updates to Search queries, Parameter handling and Messages](https://webmasters.googleblog.com/2010/10/webmaster-tools-updates-to-search.html)

**Conclusion**

In an ideal world, it would be possible to only have one URL for each page on your website.

But, that’s something that isn’t always possible.

The search engines do strive to try to use only one URL per page, but that isn’t always possible for them as well.

There are other issues involving [duplicate content](https://www.seobythesea.com/2006/06/duplicate-content-issues-and-search-engines/) that are more easily solved. If you have canonicalization issues because of multiple parameters in your URLs, you may want to spend some time learning about the canonical link element, parameter handling, and XML sitemaps. Search spiders will try to crawl every page of your site if they can, and a little self-help in making sure that they don’t is recommended.
