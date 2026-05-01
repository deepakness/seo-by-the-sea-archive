---
title: "Google Patent Granted on Polite Web Crawling"
source_url: "https://www.seobythesea.com/2010/08/google-patent-granted-on-polite-web-crawling/"
slug: "google-patent-granted-on-polite-web-crawling"
date_published: "2010-08-10T16:03:32+00:00"
date_modified: "2021-07-02T12:34:43+00:00"
author: "Bill Slawski"
---

Robots may invade your website at any time. If you’re lucky, that is – at least if you want people to visit you from places like Google or Yahoo or Bing. And, if the visiting robots are polite.

In the early days of the Web, automated programs, known as robots, or bots, were created to find information on the Web and to create indexes of that information. They would do this regardless of whether you wanted them to visit your pages or not, and you had no way to tell them not to go through your website.

If you search through Usenet message boards from the early days of the Web, you might come across a document such as the [World Wide Web Frequently Asked Questions (FAQ), Part 1/2](https://groups.google.com/forum/?fromgroups=#!msg/comp.infosystems.www.misc/bCu9J9f7HxQ/Fx2zqocuJTkJ) (December 1994), which describes robots in those days:


> 4.10: Hey, I know, I’ll write a WWW-exploring robot! Why not?
>
> Programs that automatically traverse the web can be quite useful but have the potential to make a serious mess of things. Robots have been written which do a “breadth-first” search of the web, slowly exploring many sites instead of aggressively “rooting out” the pages of one site at a time. Some of these robots now produce excellent indexes of information available on the web.
>
> But others have written simple depth-first searches which at the worst, can bring servers to their knees in minutes by recursively downloading information from CGI script-based pages that contain an infinite number of possible links. (Often robots can’t realize this!) Imagine what happens when a robot decides to “index” the CONTENTS of several hundred mpeg movies. Shudder.

A Google patent granted today describes how it might schedule the crawling of websites to not bring servers to their knees. A polite web crawling approach.

It tells us that Google might use crawlers that are focused upon finding different kinds of content, such as a robot that looks specifically for images, another for news, one for shopping or sports, and yet another that is more general and will try to discover new URLs for pages and new content on already discovered pages. These different types of robots might all decide to visit the same website, or the same host server which might be home to more than one site. If too many robots try to visit the same server, they might use up all of the site’s resources being visited, and keep other people from seeing the pages on that host server.

This kind of fragmentation of web crawling with different robots organized by type of information sought was intended to put less stress and less of a load on web pages being crawled. But segmenting crawling by type created new problems in managing which crawlers visited different servers and when.

The patent was originally filed back in 2003, and chances are very good that Google’s crawling of websites has evolved in the years since this document was created. But the basic concepts about using multiple crawlers, scheduling the crawling of pages, prioritizing different kinds of pages to be crawled based upon metrics like PageRank might still be very similar almost 7 years later. A polite Web crawling protocol developed before Google filed this patent, and it takes politeness further.

**Search Engine Push Towards Page Speed**

When someone visits your pages, if they have to wait while the page’s content appears, it’s possible that they may move on to another site. If they find a link to your page in Google’s (or Yahoo’s or Bing’s) search results, and click upon it, and nothing happens for a couple of seconds because your page is slow, they might click on another search result and visit another site.

I’ve written in the past on the topic of [Does Page Load Time influence SEO?](https://www.seobythesea.com/2009/07/does-page-load-time-influence-seo/), partially about a patent from Yahoo that describes how they might use page speed as a ranking signal. Much of the discussion in the comments for that post describes other ways that the loading time of a page might negatively impact web sites, regardless of whether or not page speed is used as a ranking signal.

Google and Yahoo have been leading the way recently in trying to make the Web faster.

Google has released many tools and published articles that can help webmasters improve the speed with which their pages load.

One of Google’s tools is a FireFox add-on named [Page Speed](https://developers.google.com/speed/), which a webmaster can use to see how quick a site loads in a browser, and receive advice on changes that can be made to increase that page load time. Yahoo has also created a Firefox add-on called [YSlow](https://developer.yahoo.com/yslow/) which runs a test on your site, looking at how quickly or slowly your pages load, and provides advice for improving page speed as well.

Google incorporated a [Site Performance](https://support.google.com/webmasters/?hl=en&rd=1#topic=3309469) section in Google Webmaster Tools that can provide other information about the speed of your pages.

The Google Code pages also include several articles and tutorials on how to help “make the web faster.”

We don’t know if Yahoo implemented their patent mentioned in my *page load* post mentioned above, but Google announced in April of this year that they will be [Using site speed in web search ranking](https://webmasters.googleblog.com/2010/04/using-site-speed-in-web-search-ranking.html) for at least some sites.

**Why the emphasis on quicker pages?**

One answer cited by the search engines is that quicker pages provide better user experiences. Another is that they help make the Web faster overall.

Another “reason” webmasters have to help speed up the Web is that the crawling of Web pages can be negatively impacted by sites that respond slowly.

The polite web crawling patent tells us that:


> On the other hand, the load capacity of a web host is often limited by the web host’s hardware setup. When the simultaneous requests for load capacity from various web crawlers are above the maximum load capacity a web host can provide, it is almost certain that some of the competing web crawlers will receive slow service from the web host, and some requests may even fail.
>
> Such a phenomenon is sometimes referred to as “load capacity starvation” for a web crawler. Load capacity starvation prevents web crawlers from retrieving documents from a web host and passing them to an indexer in a timely fashion, which adversely affects both the web host and the freshness of search results generated by the search engine.

The concept of scheduling visits by crawlers in a manner that doesn’t starve the load capacity of a server is known as a politeness protocol.

If you have a website with a very large number of pages, or a smaller site that shares a web server with a number of other pages, the ability of your server to handle visits to your pages from crawlers may be limited by your server’s hardware and responsiveness. For large and small sites, this can mean that your pages may not all get indexed, or may not be indexed frequently enough to capture regular changes on your pages because a search engine may be polite when visiting and try not to overload the resources of your server.

The Polite Web Crawling patent is:

[Limiting requests by web crawlers to a web host](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,774,782.PN.&OS=pn/7,774,782&RS=PN/7,774,782)
Invented by Catalin T. Popescu and Anurag Acharya
Assigned to Google
US Patent 7,774,782
Granted August 10, 2010
Filed: December 18, 2003

Abstract


> A host load server balances a web host’s load capacity among multiple competing web crawlers of a search engine. The host load server establishes a lease for each pair of requesting web crawler and requested web host. The lease expires at a scheduled time. If the web crawler completes its mission of retrieving documents from the web host prior to the expiration of the lease, the host load server releases the load capacity allocated to the web crawler and makes it available for other competing web crawlers.
>
> If the web crawler submits a request for renewing its lease with the web host at the scheduled time, the host load server allocates another share of load capacity to the web crawler. If the web crawler does not submit any request at the scheduled time, the host load server terminates the lease and releases the load capacity for other web crawlers.

**Polite Web Crawling Conclusion**

If you’re interested in digging into the fine details of how different kinds of crawlers (image crawlers, news crawlers, general web crawlers) might be scheduled to visit servers politely, the patent is worth exploring in depth.

If you’re more interested in what a crawler might do once it starts visiting a website, this patent refers to another Google patent which describes some of the activities of a crawler on web pages, [Anchor tag indexing in a web crawler system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,308,643.PN.&OS=pn/7,308,643&RS=PN/7,308,643), which I wrote about in [Google Patent on Anchor Text and Different Crawling Rates](https://www.seobythesea.com/2007/12/google-patent-on-anchor-text-and-different-crawling-rates/) back in 2007.
