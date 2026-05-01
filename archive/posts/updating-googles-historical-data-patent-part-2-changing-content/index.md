---
title: "Updating Google's Historical Data Patent, Part 2 - Changing Content"
source_url: "https://www.seobythesea.com/2008/09/updating-googles-historical-data-patent-part-2-changing-content/"
slug: "updating-googles-historical-data-patent-part-2-changing-content"
date_published: "2008-09-17T02:11:57+00:00"
date_modified: "2018-07-12T18:26:57+00:00"
author: "Bill Slawski"
---

*Come gather ’round people Wherever you roam And admit that the waters Around you have grown And accept it that soon You’ll be drenched to the bone. If your time to you Is worth savin’ Then you better start swimmin’ Or you’ll sink like a stone For the times they are a-changin’.*

– [Bob Dylan](https://www.bobdylan.com/songs/times-they-are-changin/)

Can the rate of change upon web pages influence how Google might rank pages of a site?

In part one of this series, I looked at how Google’s patent on [Information retrieval based on historical data](http://web.archive.org/web/20160201004337/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,346,839.PN.&OS=pn/7,346,839&RS=PN/7,346,839) focused upon [Freshness](https://www.seobythesea.com/2008/08/googles-historical-data-patent-part-1-freshness/).

This second part of the series explores how Google might look at content changes on Web pages, and how the frequency of those changes might influence how those pages may rank at the search engine. Keep in mind that we don’t know for certain whether Google is even using the processes described in this patent. But it is a possibility.

**Change Happens on the Web**

Change actually happens fairly frequently on web sites. Some examples of sites with rapidly changing pages include:

1. Ecommerce sites that add and remove products
2. Informational portals such as newspapers, newsletter, blogs
3. Pages that rely upon user generated content that gets edited, modified, updated, and added to on a consistent basis

Of course, there are other scenerios. For instance, imagine that you have a web site. Its pages rank well in Google, and have for years. You’re afraid of changing anything. But, you think that if you make some changes, you might get more conversions on your page.

If you update the page, what kind of impact would the fact that you changed your page have on your rankings?

Or, you have a blog that you update almost everyday. You go on vacation for two weeks, and then have a family emergency that keeps you from your web site for another two weeks. You’ve gone a month without a new blog post. Has the failure to update your site influenced how your pages rank in Google?

**Content Updates/Changes**

Google’s historical data patent recognizes that pages change, and that some of them change more rapidly than others.

It also recognizes that some aspects of change on pages or parts of pages, or a web site as a whole may be considered less important than others.

For example, if someone is showing ads on their site, or using java script to display an RSS feed, and those change on a regular basis, those changes may be considered much less important than a page title change, or a change in the anchor text of a link leading from the page.

The patent gives us a mathematical formula to talk about content change:

U=f(UF, UA)

An “Update score” (U) is calculated using frequency of change, and amount of change.

An “update frequency score” (UF) may be used to calculate how often a document (or page) changes over time. It could be determined by the average time between updates or the amount of updates over a period of time.

An “Update amount score” (UA) represents how much a document (or page) has changed over time. The update amount score looks at a number of possible changes, and gives different weights to different kinds of changes.

The kinds of updates considered in the Update amount (UA) score :

- The number of “new” or unique pages associated with a document or site over a period of time.
- The ratio of the number of new or unique pages associated with a document or site over a period of time versus the total number of pages associated with that document or site.
- The amount that the page or site is updated over one or more periods of time (e.g., a percentage of a document’s visible content may change over a period such as the last month.
- The amount that the document (or page) has changed in one or more periods of time, such as the last x days.

Some content may have different weights than other when changed. For instance, the following may be considered fairly unimportant and could be given little weight or ignored completely:

- Javascript
- Comments
- Advertisements
- Navigational elements
- Boilerplate material, or
- Date/time tags

Other content, such as a page titles and anchor text associated with links pointing out to other pages may be considered much more important if they are updated or changed, with a consideration of how often, how recent, and how extensive those changes are.

It’s possible that for some queries, pages with content that hasn’t recently changed might be considered more favorable than pages with content that has recently changed.

A search engine may determine a date when the content of each of the pages in a result set for a query last changed, determine the average date of change for those pages, and modify the scores of the pages (either positively or negatively) based on a difference between a page’s date-of-change and the average date-of-change for all of the pages in those results .

**Other Implications of Changes to content on Web pages**

Since the historical data patent was first published, a number of papers have been written that look at changes to the content of web pages. I’ve collected a list of some of them which provide some interesting ideas about change on the Web.

[A three-year study on the freshness of Web search engine databases](http://eprints.rclis.org/11024/)

Which search engine has the freshest content? This study aims to “analyse the update strategies of the major Web search engines Google, Yahoo, and MSN/Live.com.” It provides a look at how well those search engines capture changes to the content of some specific pages over six weeks spread out over the years 2005, 2006, and 2007.

[Recrawl Scheduling Based on Information Longevity](http://infolab.stanford.edu/~olston/publications/www08.pdf) (pdf)

Some content is “ephemeral” and may not be worth crawling by a search engine, because by the time it is indexed, it may not be representative of the content of the page it comes from, such as a “quote of the day.” Some content might be considered to be “persistent” and it may persist across multiple page updates because that content remains around for a “sustained period of time.” Blog posts may be considered persistent since they remain around, even though they may be pushed down a blog’s front page, or into an archive.

Can a search engine crawling program distinquish between ephemeral and persistent content, to focus its resources more upon persistent content?

[Characterization of the evolution of a news Web site](http://mafalda.unipv.it/NEW/publications/PDF/JSS.pdf) (pdf)

Are there patterns that can be identified by studying the frequency and amount and types of changes to a news based web site? This paper identified a number of patterns involving change to the MSNBC over a period of 19 continuous weeks. Can a model made from that study help describe the behavior of other news sites? The authors of this paper concluded that it could.

[Microscale Evolution of Web Pages](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/34427.pdf) (pdf)

A Google poster from the 17th International World Wide Web Conference held in Beijing this year explores the rate of rapidly changing web pages to create a model to be used to determine how frequently to revisit those web pages.

[The Discoverability of the Web](http://infolab.stanford.edu/~olston/publications/discovery.pdf) (pdf)

A Yahoo paper which explores the use of “historical statistics to estimate which pages are most likely to yield links to new content.”

[Detecting Age of Page Content](http://www.dl.kuis.kyoto-u.ac.jp/~adam/widm07.pdf) (pdf)

Parts of web pages may change at rates differently than other parts of web pages. Can page histories using data extracted from external sources help to identify the rate of change of different parts of pages. The authors of this paper describe how this can be done, and how those different objects on pages can be annotated with dates that they were changed.

[What Can History Tell Us? Towards Different Models of Interaction with Document Histories](http://www.dl.kuis.kyoto-u.ac.jp/~adam/ht08.pdf) (pdf)

What kinds of benefits might we see if we were able to track and see how a web site has changed over time? If a “past web browser” was available to visitors, so that they could view changes to a web page over time, would they? Viewing changes to web pages over time may be as helpful to people as it could be to search engines.

**Conclusion**

Change happens on the Web, and the rates of change, amount of changes, and types of content being changed on pages may influence the rankings of web pages, and the frequency of crawling of web pages by search engines. Some kinds of changes carry much less weight than others.

This part of the historical data patent focused upon changes to the content of pages, but there are other factors under the patent such as click through rates, changes in links, and in anchor text that may also play a role in rankings of web pages. Those will be explored in future parts of this series.
