---
title: "Next Step After XML Sitemaps: User-Assisted Web Crawlers?"
source_url: "https://www.seobythesea.com/2009/01/next-step-after-xml-sitemaps-user-assisted-web-crawlers/"
slug: "next-step-after-xml-sitemaps-user-assisted-web-crawlers"
date_published: "2009-01-21T16:41:55+00:00"
date_modified: "2021-07-06T15:27:13+00:00"
author: "Bill Slawski"
---

## Is There a Future for User-Assisted Web Crawlers?

Imagine a search engine letting people teach a web crawling program how to navigate through the pages of a site filled with javascript links and other pages usually only accessible through making selections or inputting text into forms.

Why would a search engine let users assist a search engine crawling program in exploring the content of pages normally hidden to most crawling programs?

**Users Teaching Web Crawlers?**

Here are three examples of people who might help teach a web crawler how to crawl a site:

***Webmasters*** – Search engines can have difficulties crawling pages because of javascript links, links included as options in drop-down forms, and other pages that are only accessible through forms.

While search engines have been providing tools to try to make it easier for webmasters to have the pages of their sites indexed more easily, such as those found at [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en&pli=1), Yahoo Site Explorer, and [Webmaster Center – Bing](https://www.bing.com/toolbox/webmaster), none of the tools offered at any of those address that problem.

Short of a webmaster providing alternative ways to reach pages behind the javascript or forms, it can be difficult to search engine indexes. What if there was a way for a web admin to train a search engine crawling program to access pages behind forms and javascript included in the webmaster tools that search engines provide? Is such a user-assisted web crawler feasible?

A web admin might help teach a web crawling program about the most effective way to crawl their website, browsing the pages of the site in a certain order, filling out forms on the site, and interacting with the site’s pages in a manner intended by the webmaster.

Those interactions could be captured to create rules for crawling the site by learning from those activities. The rules could then be used in the future by a web crawler to crawl the site.

***Manual Reviewers*** – Someone manually reviewing the content and structure of web pages to see if a search engine can more effectively improve how the search engine indexes those pages could set up rules for a crawling program to follow links logically or fill out search forms to best find relevant pages on sites. These are others who could be involved with user-assisted web crawlers.

***Content Subscribers*** – Programs like RSS feeds, and mashup tools can bring content from a site to someone interested in seeing it, without that person having to visit multiple web pages.

If people interested in that content could train a program to crawl through forms found at places like job search sites or travel pages or other websites that keep content behind forms, it could help them have web content from a site automatically fetched and delivered to them. This is a third group that could help with user-assisted web crawlers.

**Problems with Focused Crawling**

There are two common types of web crawling.

***Free crawling*** – when a crawling program finds a page, it stores the page and the page’s address or URL and follows any links it can find on that page to locate other web pages.

***Focused crawling*** – a crawling program tries to crawl only pages which contain a specific type of content, or “relevant” web pages.

There are many different approaches for focused crawling, but a crawler may end up crawling irrelevant pages or miss relevant pages for several reasons:

***Diversity of Design and Structure*** – There is much diversity and variation amongst the design and structure of web pages. If the crawler follows a single set of logic or rules when it looks for pages, it might not be too accurate in determining the relevancy of pages when looking at a broad spectrum of pages.

***Irrelevant Pages in a Chain of Links*** An assumption many focused crawlers follow is that pages that contain a specific type of content are often linked to each other. That can be misguided – if a crawler doesn’t follow a link to a page that seems not to contain the specific type of content looked for, and some pages are relevant to further along a chain of links which includes that page, then relevant pages may be missed.

***Pages Accessible Only Through Forms*** – Sometimes it is necessary to fill out a form, such as a search form for job listings, to access relevant web content, such as job listings and descriptions. Forms differ so much from one site to another, and even within the same site, relevant content can be easily missed if a crawler doesn’t understand how to fill out many different types of forms.

***Lack of Access to Restricted Content*** – A site owner might not want pages indexed that are relevant to the focus of a crawl.

**Things that a Web Crawler Can Learn from Watching Someone Browse a Site:**

These are some of the things that a web crawler can learn from a user:

- Which web pages are most likely to be relevant
- Which web pages are least likely to be relevant
- How to best fill out forms, to access dynamic content
- How and why to click on particular parts of a page being browsed such as URLs or buttons or tabs
- How to select values from drop-down menus

A patent application from Yahoo explores more deeply how user-assisted web crawlers might work:

[Automatically Fetching Web Content with User Assistance](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090019354.PGNR.&OS=dn/20090019354&RS=DN/20090019354)
Invented by Amit Jaiswal, Arup Malakar, and Binu Raj
Assigned to Yahoo
US Patent Application 20090019354
Published January 15, 2009
Filed September 11, 2007

Abstract


> A method for performing activities on a website is disclosed. A user’s browsing activities on a website are captured. The user’s browsing activities include affixing labels to web pages and filling out forms. The captured activities are analyzed for patterns.
>
> Rules for performing activities on a website are generated based on the patterns. Further activities are performed on the website according to the rules, and content from the website is fetched. The fetched content is used in various web service applications, including crawlers.

A web crawling program’s rules might learn from watching someone using a particular site could be expanded by the program to perform other activities on those pages that the User may not have performed.

User-Assisted Web Crawlers Example:

A website with many links is divided into three categories, job listings, non-job-related sections, and links to the site’s homepage.

Someone may have visited some of the job listing pages, but not all of them.

The crawling program may learn rules from those visits to the job listing pages to determine how to visit all of the job listing pages.

**Conclusion**

The *Automatically Fetching* patent application provides more details on how user/site interaction might be used to help a search engine crawling program address the three kinds of activities I mentioned at the start of this post:

- a webmaster training a crawler how to find pages that should be indexed on their site,
- a human reviewer teaching a crawler how to find pages, and;
- a content subscriber showing a crawling program the kind of information that they would like to subscribe to and be sent updates about.

There are a couple of older related patent applications from Yahoo that could be used with the methods described in this one that is worth a look if you want to find out more about how Yahoo might be trying to index content on the web that addresses some of the problems that focused crawling programs often face:

- [Intelligent Form Filler](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080235567.PGNR.&OS=dn/20080235567&RS=DN/20080235567)
- [Automatic online form filling using semantic inference](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080120257.PGNR.&OS=dn/20080120257&RS=DN/20080120257)

I’ve seen many people mention in different places on the Web that search engines might be learning about new pages to index using toolbars and other tools to find new pages that they haven’t indexed.

The patent application from Yahoo looking at user activities to find new content to index on the web takes that assumption of the use of a toolbar to find pages a step further by showing how a search engine could teach crawling programs to index more pages and create site-specific rules about indexing pages by paying attention to how people browse the web, interact with pages, and fill out forms.

Allowing web admins and people who want to subscribe to content to teach crawling programs about pages explicitly could take some of the burdens of work away from the search engines and move it to people who might use the services that those search engines may provide.

This is definitely a step beyond today’s [XML Sitemaps](https://www.sitemaps.org/index.html).
