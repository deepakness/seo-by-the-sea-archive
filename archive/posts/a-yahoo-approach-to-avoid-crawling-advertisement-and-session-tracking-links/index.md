---
title: "Transient Links to Avoid Crawling Advertisement and Session Tracking Links"
source_url: "https://www.seobythesea.com/2007/09/a-yahoo-approach-to-avoid-crawling-advertisement-and-session-tracking-links/"
slug: "a-yahoo-approach-to-avoid-crawling-advertisement-and-session-tracking-links"
date_published: "2007-09-28T10:07:35+00:00"
date_modified: "2020-11-03T16:21:38+00:00"
author: "Bill Slawski"
---

A newly published Yahoo patent application describes a couple of ways to filter out some of the URLs that it might crawl, to keep those pages from being indexed and presented to searchers.

Those URLs are referred to in the patent filing as transient links because they change from visit to visit, often because they are advertisements that have URLs with tracking codes included within them, or contain session IDs to track visitors.


> An approach is provided for identifying transient links on a Web page. The approach ensures that transient links are not crawled and archived, thereby saving resources for crawling valid links leading to useful information.
>
> Outgoing links on a web page are identified, and after a while, a new copy of the web page is obtained and the outgoing links identified. The respective sets of links are compared and links which do not appear in both sets of links are identified as transient.

[Consecutive crawling to identify transient links](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070226206.PGNR.&OS=dn/20070226206&RS=DN/20070226206)
Invented by Dmitri Pavlovski, Vladimir Ofitserov, and Alexander Arsky
US Patent Application 20070226206
Published September 27, 2007
Filed: March 23, 2006

There are three major stages of how a search engine works. The first involves a search engine sending out programs that are commonly referred to as crawlers or spiders or robots. Those crawlers identify pages to be indexed on the Web and the addresses of those pages in the form of URLs.

The other stages involve indexing information found on pages in a crawl and the presentation of results found in that index in response to a query made by a searcher. If the crawling stage can become more efficient, then the other stages may have less work to do, and will also be more efficient.


## Making Web Crawling More Efficient

The ways that crawling programs from the major search engines work is something search engines often don’t share much about.

We have some hints, like a [a Stanford page](http://web.archive.org/web/20160926234418/http://dbpubs.stanford.edu:8091/diglib/pub/projectdir/google.html) listing resources used during the early stages of work upon Google, which included a document titled [Efficient Crawling Through URL Ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf). That paper discusses how a search crawling program might prioritize which URLs a spider might visit next when it finds addresses to documents while crawling a page.

The inventors of this Yahoo process describe some factors of a crawling process in the patent filing:


> Web crawlers use a wide variety of crawl algorithms to determine the order in which Web pages are crawled. For example, a first-in-first-out by link approach may be used. With this approach, links are crawled based upon the order in which they are located on a Web page.
>
> As another example, a “best first” approach may be used where the order in which links are to be crawled is selected based upon link relevancy, i.e., the links considered to be the more relevant are crawled before links that are considered to be less relevant.

They also tell us that it is pretty common for advertisers to include information within URLs that help to identify users and track where those visitors are coming from. This kind of information may appear in the use of session IDs, tracking URLs, and other techniques that cause a URL to change from one visitor to another.

Because of the changes, if those URLs were indexed, the search engine’s index might contain a lot of pages at different URLs that were duplicates of each other or that shouldn’t have been crawled in the first place. We are told that:


> Because the purpose of a Web crawler is to discover pages that contain useful information for web users, it would be inefficient and wasteful of resources to crawl and index every transient link whose only significance is being used as a unique tracking or session identifier.

The process in this patent filing is aimed at avoiding those types of transient links.


## Identifying Transient Links

On a web page, you may find text, a link to other pages, and advertisements. Those links to other pages have URLs that point to pages with useful information to be crawled and archived. The advertisement might be an image with an embedded tracking URL. When a web crawling program follows the advertisement’s tracking URL, it is brought to another Web page, quite possibly located on a different Web server.

A crawler requests the web page from the server hosting it and is provided the HTML from the page. It parses through the HTML, and extracts a list of all the URLs from the page, and stores them. It then issues a “refresh” command for a new copy of the page, after a minute or so (the patent filing tells us that “while one minute has been found to give the best results, any length of time may be used.”

The refreshed copy of the page may differ from the first copy. The Web server may insert into the new copy a new advertisement with a new embedded tracking URL, replacing the old advertisement. The crawler makes another list of all URLs from the page and stores that list.

The list of originally extracted URLs is compared with the newly extracted URLs. The URLs which were in the first crawl of the Web page that has disappeared in the second crawl of the Web page are considered transient, and not useful for crawling or inclusion into a searchable index.


> In one embodiment, all links that appear in both of the consecutive crawls of the same page are marked as suitable for crawling and inclusion in an index, and are indeed crawled.


## Segmenting Pages to Make Future Comparisons Faster

Instead of comparing all links on future crawls of a page, it might be easier to only view parts of pages where transient links were found on previous crawls. The patent describes how it might break down the page into parts:


> One approach for the identification of portions of HTML can be performed using Document Object Model Tree (DOM) decomposition. A DOM tree is a representation of a portion of HTML using a tree of HTML tags where group tags like <table> have sub-tree tags <tr> and in turn </tr><tr> tags have leaf tags <td>.
>
> In general, a DOM tree contains tags and their text and attributes. To identify transient links using fewer crawls of the page, the crawler can initially fetch a page several times, decompose the HTML comprising the page into a DOM tree, identify transient links and identify transient DOM sub-tree elements that contain only transient links.
>
> When crawling the same page in the future, if the crawler discovers that page has a DOM tree identical to previously crawled instances, then the crawler may consider the new links originating from the same transient DOM sub-tree as transient without additional fetches of the same page.

This kind of segmentation of web pages isn’t unique to Yahoo.

Both Google and Microsoft have published patent filings and papers that describe how they might segment parts of web pages for different purposes. I wrote about some ways that Google might do something like that in [Google and Document Segmentation Indexing for Local Search](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/).

Microsoft has written about a few different approaches to segmentation of pages, and their most well-known document on the subject is probably [VIPS: a Vision-based Page Segmentation Algorithm](https://www.microsoft.com/en-us/research/publication/vips-a-vision-based-page-segmentation-algorithm/) (pdf).

Since many pages on a website share the same template, this kind of segmentation may help the crawler ignore transient links from the same area on other pages of the same site.

h2>Identifying Sites that Are Frequent Targets of Transient Links

The URLs of the transient links may also be identified and collected so that they can ignore them in the future:


> According to an embodiment, to reduce the number of consecutive fetches, a crawler can attempt to identify websites that are frequently used as targets of transient links.
>
> An approach that can be used involves identification of transient links by using the techniques described above, and further aggregating all links by target websites and identifying websites for which most of the links are transient.
>
> The crawler may later use a list of such websites to identify all future links to them as transient links without performing additional fetches of the same page.

I’m not sure if this would have any impact upon non-advertisement links to pages on sites that also use advertisements.
