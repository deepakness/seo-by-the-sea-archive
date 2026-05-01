---
title: "Duplicate Webpages at Different URLs on a Site"
source_url: "https://www.seobythesea.com/2008/04/same-site-duplicate-pages-at-different-urls/"
slug: "same-site-duplicate-pages-at-different-urls"
date_published: "2008-04-18T09:21:59+00:00"
date_modified: "2021-07-30T15:00:08+00:00"
author: "Bill Slawski"
---

## The Problem with Duplicate Webpages on Websites

A technical issue that can cause problems with a search engine crawling a site to index its pages is when the content of pages on that site appears more than once on the site at different URLs (Unique resource locators or web page addresses). Unfortunately, this duplicate webpages problem happens more frequently than it should.

A new patent application from Yahoo explores how they might handle dynamic URLs to avoid this problem. What is nice about the patent application is that it identifies a number of the problems that might arise because of duplicate web pages at different web addresses on the same site and some approaches that they might use to solve the problem.

While search engines like Yahoo can resolve some of the issues around duplicate webpages content, it is often in the best interest of site owners to not rely upon search engines but rather fix this problem independently.


## Avoiding the Crawling of Duplicate Webpages

Crawling programs browse the worldwide Web and identify and index as much information as possible. These programs locate new pages and updates old pages so that that information can get indexed and available to searchers through the search engine.

Web crawlers often start crawling the web at one or more web pages, following links to those web pages to other pages, and so on.

These programs may follow a strategy to retrieve as much information as possible to try to only “crawl” pages that provide unique content – pages that haven’t already gotten indexed or updated if they are already in the index.

One assumption that a web crawler could make while following this strategy is that a unique URL (Unique resource locator) corresponds to a unique webpage. Unfortunately, as I noted above, this isn’t always true.


## Search Engines Don’t Want To Index the Same Pages More Than Once

A search engine doesn’t want to index the same page on a site more than once, but it happens, and often other pages of a site don’t get indexed while others get indexed many times under different URLs. I recall seeing at least one page on a site indexed many thousands of times in Google.

That problem can happen when a site uses a content management system or eCommerce platform that uses dynamic URLs.


> A dynamic URL typically results from searching a database-driven website or the URL of a website that runs a script. In contrast to static URLs, the web page contents do not change unless the changes get coded into the HTML. Dynamic URLs are typically generated from specific queries to a website’s database.
>
> The web page has some fixed content, and some part of the web page is a template to display the query results, where the content comes from the database associated with the website. This results in the page changing based on the data retrieved from the database per the dynamic parameter.
>
> Dynamic URLs often contain the following characters: ?, &, %, +, =, $, cgi. An example of a dynamic URL may be something like the following:
>
> http://www.amazon.com/store?prod=camera
>  &brand=sony
>  &sessionid=7ek138-dje72931d91ds.


## Multiple Parameters in URLs and Duplicate Webpages

The URL of a page can contain many pieces of information in different fields, whichhave gotten referred to as parameters, and which define different characteristics and classifications of a product or service, or can determine the order in which information might get displayed to a viewer. Here’s an example of a URL for a web page on the JCPenny web site for a Modular Storage Center:

http://www5.jcpenney.com/jcp/ProductsHOM.aspx
?DeptID=40525
&CatID=40681
&CatTyp=DEP
&ItemTyp=G
&GrpTyp=STY
&ItemID=11a46ae
&ProdSeq=5
&Cat=buffet%2bhutches
&Dep=Furniture&PCat=dining%2bkitchen
&PCatID=40530
&RefPage=ProductList
&Sale=
&ProdCount=26
&RecPtr=
&ShowMenu=
&TTYP=
&ShopBy=0
&RefPageName=CategoryAll%252Easpx
&RefCatID=40530
&RefDeptID=40525
&Page=1&CmCatId=EXTERNAL|40530|40681

A search engine may have problems indexing that page at that URL because it contains many parameters, but it may try. For example, Google has that same product listed seven times under different URLs, with different amounts and combinations of parameters in the URLs of each listing.


## Source or Session Parameters Can Cause Duplicate Webpages

When more than one parameter has a dynamic URL, it’s possible that if one or more parameters get removed from the URL, the page’s content doesn’t change in any way. The example in the quote above includes a sessionid that, if removed, doesn’t change the page’s content (sites often use a session ID to track the progress of a unique visitor through the pages of a site).

Another common parameter used by some dynamic sites is a source tracking parameter that lets a site owner know where a visitor has come from before arriving at the site.


## Session IDs and Source IDs in URLs

So, every time people arrive at a site that uses session IDs and source IDs in URLs, they may get assigned unique numbers for those parameters, even though they may visit the same page. Also, a search engine crawling program may also get a session ID for a page and a source ID.

If you look through search results in the major search engines, you may see pages in the index with session IDs and source IDs in their URLs. A website shouldn’t be serving session IDs or source IDs to search engines. But, the search engines may end up indexing pages from a site more than once because many do.

It’s also possible that a URL may change for the same content because of how information on the page has gotten sorted or displayed. Or because of the path through a site that someone took to get to a particular product.


## Duplicate Webpages Because of Some Unique Content on Those Pages

The page’s content may get sorted differently sometimes or include a little extra content. Such as a set of breadcrumb navigation that shows departments and categories. The overall content of the page at different URLs may be substantially the same. As a result, there’s a possibility that hundreds of duplicate web pages may exist that provide the same particular content.

And a web crawler may unintentionally send all of the duplicate web pages to get crawled.


## Why is Indexing Duplicate Webpages a Problem?


### Wasting Time Comparing Pages

A search engine might try to “intelligently analyze a particular webpage and compare the particular webpage against other webpages to determine whether the content of the particular webpage is truly unique.” But it’s not unusual for errors to happen during such an analysis. And it can take up a lot of computational resources to access web pages and compare them.

By spending time performing comparisons of pages on a site, a search engine might not spend time accessing other pages that are valid and non-duplicates.

Given a site with thousands, or perhaps even millions of pages, a search engine crawling program will only spend a certain amount of time on that site before moving on to other sites. If it tries to index and compare pages of a site too quickly, it may negatively affect its performance in serving pages to visitors. There are also a lot of web pages that need to get indexed on the web.

So a site that has the same content that can get accessed under many different versions of URLs may have the same page indexed several times. Other pages of the site may not become indexed at all.


### Strict Rules for Indexing Pages May Cause Problems

A crawling program may also develop rules to follow to avoid duplicate web pages for particular websites. This could include only looking at a small number of pages with “similar looking” URLs. Or it might not access URLs that are longer than a certain number of characters. Unfortunately, those rules may result in a significant amount of content getting missed.


## The Yahoo Duplicate Webpages Patent Application

[Handling dynamic URLs in crawl for better coverage of unique content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080091685.PGNR.&OS=dn/20080091685&RS=DN/20080091685)
Invented by Priyank S. Garg and Arnabnil Bhattacharjee
US Patent Application 20080091685
Published April 17, 2008
Filed: October 13, 2006

Abstract


> Techniques for identifying duplicate Webpages get provided. In one technique, one or more parameters of a first unique URL can get identified. Each of the one or more parameters does not substantially affect the content of the corresponding web page. Then, the first URL and subsequent URLs may get rewritten to drop each parameter.
>
> Each of the subsequent URLs becomes compared to the first URL. If a later URL is the same as the first URL, then the corresponding webpage of the prior URL is not accessed or crawled. In another technique, the parameters of many URLs get sorted, for example, alphabetically. If any URLs are the same, then the webpages of the duplicate URLs are not accessed or crawled.

The patent application provides some details on many strategies that the search engine might take to index the URLs of a site without capturing too many duplicate web pages. The methods described include doing things like removing parameters in URLs that appear unnecessary. Or removing session and source IDs and sorting the remaining parameters in the URLs in numerical and alphabetical order.

Example:

This URL:

http://www.amazon.com/store?prod=camera
&brand=sony&sessionid=2k4gd0-3k9sx1zc8d

might get rewritten to this form:

http://www.amazon.com/store?prod=camera&brand=sony

The other URLs found by the crawler are also rewritten compared to the shorter form of the URL. If they match, then those pages aren’t crawled and indexed.

The search engine may display the shorter version of the URL in its index unless the server where the page got hosted and needs to see the longer version to serve the page in question.


## The Duplicate Webpages Conclusion

The process described in the patent filing may capture many URLs that contain duplicate content, but it stands a good chance of missing many others.

I’ve written previously about approaches from Google and Microsoft to attempt to solve this problem of the same content at different URLs of a site:

- [Solving Different URLs with Similar Text (DUST)](https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/)
- [Microsoft Creating Rules for Canonical URLs](https://www.seobythesea.com/2006/09/microsoft-creating-rules-for-canonical-urls/)

While it can take some careful work and planning, it’s recommended that website owners avoid having the same content on different pages as much as possible, rather than relying on the search engines to figure out which URLs are duplicate webpages or not.

Last Updated May 26, 2019
