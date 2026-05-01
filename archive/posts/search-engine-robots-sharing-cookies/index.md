---
title: "Search Engine Robots Sharing Cookies?"
source_url: "https://www.seobythesea.com/2009/06/search-engine-robots-sharing-cookies/"
slug: "search-engine-robots-sharing-cookies"
date_published: "2009-06-09T21:05:06+00:00"
date_modified: "2021-07-06T14:01:13+00:00"
author: "Bill Slawski"
---

There’s a little park straddling Delaware and Maryland, which has a monument marking the boundary between the states. Etched across the top of the stone marker is a line that indicates the separation between the states and shows the point where an arc starts, which separates Delaware from Pennsylvania. If you look at a map of the border, you’ll see that the top of the state of Delaware is an arc shape that measures 12 miles from a cupola on top of a courthouse in Historic New Castle, Delaware. The arc between Delaware and Pennsylvania was defined in a deed to William Penn from the Duke of York in 1682. Maryland’s territory was also involved in the setting of borders.

You can hop atop the marker and sit on the state line if you’d like. Woods surround the monument, and you have to travel down a path in the park to reach it.

We take the surveying of such lines, between states, between countries, surrounding towns and cities and counties for granted, as well as the exploration and discovery of the places where we live. The programs that search engines use to discover new pages on the Web and revisit old pages are a little like those explorers and surveyors – finding material online to add to their indexes so that we can explore those indexes and search for information and pages hosted on servers scattered around the globe.

Those programs are often referred to as crawlers or spiders or robots or bots, and many restraints limit how well they might explore and define the pages that we find online.

Crawlers from the major search engines tend to be fairly simple and don’t view pages as we do with browsers. They often don’t run the java scripts that we do when we visit pages or resolve images and view any text that we might see on those images.

**Simple and Complex Crawling Programs**

In April, IBM was granted a patent (originally filed on June 30, 2000) that described a Web crawling program that would see pages on the Web in a very similar manner to what we see when we browse the Web. The patent, [System and method for enhanced browser-based web crawling](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,519,902.PN.&OS=pn/7,519,902&RS=PN/7,519,902), looks at the “inline-frames, frames, images, applets, audio, video, or equivalent” on web pages and renders those to get an understanding of the final HTML markup that shows up at a URL when someone might visit a page. It even describes using Optical Character Recognition (OCR) software to read text that may appear in images.

If a search engine were to follow the detailed exploration process described in IBM’s patent, it would probably be a pretty computationally expensive process to use. It would likely take a fair amount of time and effort to index many pages. The crawlers that the major commercial search engines use seem much simpler and don’t explore the pages on the Web in that much depth. Google’s [Webmaster Guidelines](https://support.google.com/webmasters/answer/35769?hl=en) describe the simplicity of the crawling programs that they use with this statement:


> Use a text browser such as Lynx to examine your site because most search engine spiders see your site much as Lynx would. If fancy features such as JavaScript, cookies, session IDs, frames, DHTML, or Flash keep you from seeing all of your site in a text browser, then search engine spiders may have trouble crawling your site.

Lynx is a very early web browsing program and a straightforward one, which lets you look at the text on pages.

**Watching Out for Cookies**

One of the efforts that someone performing search engine optimization may and should take on a site is to see how search-engine-friendly the pages of that site might be. Part of that inquiry is making sure that search engine crawling programs can visit all of the pages of a site that the site owner wants indexing and that search engines can index meaningful information from crawled pages. One stumbling block to indexing a site is when a search engine crawling program must take a “cookie” to see pages.

A cookie is a small string of text that might be sent by a site to be stored on a visitor’s computer. A cookie usually consists of name-value pairs storing information about a visitor’s travels on the site, consisting of information such as the contents of shopping carts, user preferences for the site, and information that can help track the pages that a visitor goes to to on a site. A cookie can help a site personalize the experience that a visitor has on its pages. Crawlers don’t usually take cookies, and crawlers may not be able to visit pages where the taking of a cookie is required.

**Cookie Enabled Search Crawlers**

A newly published patent filing from Google describes how it might enable crawling programs to accept cookies when visiting the pages of a site. One of the challenges behind a crawler accepting cookies is that a search engine may have more than one crawler or spider, or robot visiting the pages of a site while crawling those pages, and it would be ideal if they “shared” a cookie. That’s the focus of the patent filing:

[Search engine with multiple crawlers sharing cookies](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,546,370.PN.&OS=pn/7,546,370&RS=PN/7,546,370)
Invented by Anurag Acharya, Michal Louz-On, Alexander C. Roetter
Assigned to Google)
US Patent 7,546,370
Granted June 9, 2009
Filed: August 18, 2004

The patent identifies the problems that search crawlers have with sites that require cookies as follows:


> Conventional network crawlers have no facility for obtaining such cookies, nor for handling various cookie error conditions. As a result, conventional web crawlers cannot crawl a full set of pages or documents in websites that require cookies, thereby reducing the amount of information available through the use of such search engines.
>
> In addition, conventional network crawlers have no facilities for coordinating the efforts of a parallel set of network crawlers concerning crawling a full set of pages or documents in websites that require cookies. Therefore, there is a need for an improved search engine that uses multiple crawlers to access websites that require cookies.

The patent filing goes into a great amount of detail on cookies and how search crawling programs might share them. There’s no indication that Google has started to crawl pages that can only be visited by accepting cookies, but it might in the future.

Until then, if you own or work on a website, and you require visitors to take cookies to see certain pages and want those pages indexed, make sure that search engines aren’t required to accept cookies to see those pages.

At some point, we may even start seeing crawling programs like the one described in the IBM patent that looks at the text in images, information that shows up in frames and iframes, and other parts of pages that are triggered by javascript and other applets.

When they do, search engine indexes may be more like the maps we have today than the surveys of geographical borders of surveyors from years gone past.
