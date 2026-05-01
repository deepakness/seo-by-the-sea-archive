---
title: "How Yahoo May Use Toolbar Data to Refine Search Results"
source_url: "https://www.seobythesea.com/2007/12/how-yahoo-may-use-toolbar-data-to-refine-search-results/"
slug: "how-yahoo-may-use-toolbar-data-to-refine-search-results"
date_published: "2007-12-16T23:40:58+00:00"
date_modified: "2017-04-04T08:34:32+00:00"
author: "Bill Slawski"
---

Since I wrote about the Google toolbar with my last post, it didn’t seem like a bad idea to write about the [Yahoo Toolbar](http://web.archive.org/web/20170108085403/https://us.toolbar.yahoo.com/).

I hadn’t really planned on doing so, but a new Yahoo patent application showed up that talked about how a user’s browsing history, collected through the toolbar or a browser plugin, might be used to suggest destination URLs and queries to searchers. Even searchers who don’t use the toolbar.

A search engine usually relies primarily upon the queries someone enters to help that person find useful information. It’s possible that other information might be shown to searchers based upon information collected about trends from other people’s similar searches and pages browsed. That information could be collected through the toolbar.

The patent application is:

[Refining search engine data based on client requests](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070288473.PGNR.&OS=dn/20070288473&RS=DN/20070288473)
Invented by Rajat Mukherjee and Kalpana Ravinarayanan
US Patent Application 20070288473
Published December 13, 2007
Filed June 8, 2006

Abstract


> When a client application, such as a web browser, is used to navigate documents, search engine data, additional navigation data, and other metadata can be displayed to the user within the client application.
>
> Navigation data is logged and recorded as users transition from one document to another in in the client application. The recorded navigation data is analyzed and refined in order to identify navigation trends among users. The navigation trends are used to define associations between documents.
>
> The resulting document associations can be displayed to the user as the user navigates documents. Moreover, the displayed associations can be dynamically updated as a user transitions from one document to another.

**How the Toolbar collects Trend Information**

The patent filing focuses upon ways to dynamically generate search results from trends identified in users’ browsing history. It goes a little like the following:

You log on and start your browser, which has a toolbar or plugin that might log and track your browsing activity. Your travels from page to page are recorded by that tracking mechanism.

The collected information, plus some additional information, is collected as “raw navigation data,” which can include:

- URLS of pages accessed
- Metadata about those pages, such as author, publisher, title, date, etc.
- Information about you, such as demographic information, credentials, name, etc.
- Statistical information about your browsing habits, such as time spent on a page, how often you returns, etc.
- Other data associated with document browsing
- Possibly your hardware addresses, IP addresses, IPX addresses, etc.

It’s possible that instead of all of that being gathered, the only information sent by the toolbar or plugin might be the URLs of pages.

The raw navigation data is recorded by the toolbar or plugin, and forwarded to a refining mechanism, such as a search engine, to be analyzed. The analysis of the raw navigation data allows the search engine to identify browsing trends and patterns, that might provide users with useful suggestions and links to other documents and/or information when they access a specific page on the Web.

An Example

*Someone browses a page which has sports news on it, and then goes immediately to a page about a specific team. By itself, that might not be noteworthy, but imagine that a large number of people do the same. A refining mechanism might see this as a trend, and store it.*

Filtering and identifying trends in raw navigation data by this refining mechanism produces “refined navigation data”. That filtering also acts in removing improper, excess, and redundant data, screening for obscene or illicit information, and removing links to invalid pages or resources on the Web.

The refined navigation data also includes browsing trends and patterns identified by the refining mechanism from users’ browsing histories. Some of the other information included in could include:

- Metadata extracted from a document,
- Text extracted from the document, or;
- Information about the user, such as demographic information

In one version of this process, some of the refined navigation data might be sent back to the user browser and displayed to the user, when they access a specific page.

Another Example

*Suppose someone browses the sport news page from the previous example. When they go to that page, their browser might request refined navigation data associated with it. The team document mentioned above that lots of other people visited, after viewing this news page, might show up as a suggested link to visit.*

Other information might also be shown by the toolbar, to a person browsing a page, such as game results and scores for the example above. Or Stock quotes, links to partner websites, reviews of products, promotional offers, or other information.

Feed-based data that might somehow be relevant is also received from the refining mechanism and could also displayed to the user.

While the patent describes these techniques in the context of a Web-based environment, they can be used in others such as a news reader application, or desktop search application, or document editor.

**Destination Data**

While the patent filing uses the phrase “destination data,” it really doesn’t do much of a job of explaining the term. Some other patent filings from ohter search engines used a similar phrase to describe how they might provide shortcuts or sitelinks to “destination pages” which are pages that are aimed at answering the intent of a searcher, and delivering them to a page where the task that they seek to accomplish can be fulfilled.

So destination data is data that helps a searcher get to their final destination. The patent filing includes some detailed examples about the procedures for collecting, refining, and displaying destination data.

**Three Big Takeaways**

*User Control over Toolbar*

The patent filing tells us that there are a lot of opportunities for a searcher using a toolbar to set up filters regarding what kinds of information is shared with the search engine, and what kind isn’t. A potential interface could share lots of suggestions.

If this interface is adopted by Yahoo for the toolbar, it would make sense to keep an eye on what kinds of suggestions might be offered for pages that you may control, or may consider being competition for your site.

**Site owner Control over Suggestions**

If the toolbar suggestions described in this patent filing are adopted, there may be a chance for site owners to check on the types of associations are being made with their pages, and request that associations not be made in certain instances. We’re told:


> For example, suppose computer retailer A did not want any other information to distract George from buying a computer. Accordingly, computer retailer A associates a token with the promotional web page that tells the tracking mechanism not to send a request for destination data. Accordingly, no destination data is displayed when George accesses the promotional web page.

**Toolbar Suggestions without a Toolbar**

Perhaps the most important thing to be aware of is that information collected during browsing could possibly impact people who don’t use the toolbar.

Searchers and visitors to pages may be influenced by the traffic and actions of toolbar users, and site owners through the search engine interface itself:


> Note that subsequent visitors to computer retailer A’s web page, even if they do not have a web browser with an integrated toolbar like George, still can receive some of the benefits of destination data. In one embodiment, users have access to destination data through a standard search engine interface.
>
> For example, when a subsequent user, Richard, performs a search query in a search engine, the search results can include more than just standard search engine data results. The search results can be enhanced to include all the various forms of destination data as described herein. In this way, searching and navigating techniques are improved.

**Conclusion**

It wouldn’t be surprising if the Yahoo toolbar was collecting information, and sending it back to Yahoo. The toolbar also offers suggestions to searchers right now, but also can provide “Yahoo Answers” suggestions. The display interface suggested in this patent filing isn’t public, and may never be.

But, it does provide another hint at how a search engine can grab user browsing information. As Dave at huomah.com would note, another piece of User Performance Metrics that leads towards more search results being influenced by information gathered by the search engines from people’s activities on the Web.

Dave points out another part of this puzzle in his latest post on Google profiles – Google Profiles primed to get Openly Social
