---
title: "How a Search Engine Might Choose Text for Quicklinks or Site links"
source_url: "https://www.seobythesea.com/2010/03/how-a-search-engine-might-choose-text-for-quicklinks-or-site-links/"
slug: "how-a-search-engine-might-choose-text-for-quicklinks-or-site-links"
date_published: "2010-03-01T01:31:25+00:00"
date_modified: "2020-11-03T16:04:06+00:00"
author: "Bill Slawski"
---

Sometimes when you search at one of the major search engines, you’ll see an extra set of links showing up under one of the listings in those search results. Referred to as either quicklinks or site links, most often those will show up for the listing at the top of the search results like in the following image:

![A search result for WordPress, showing additional links under the listing for the main page which point to other pages on the site.](media/google-sitelinks--wordpress.jpg)

Sometimes, those extra links will also appear for pages listed a little futher down in search results as well. A lot of questions have been raised about how those search engines decide which pages to show as quicklinks or site links, and the reasons why. I’ve written a number of posts about whitepapers and patent filings from the search engines that have provided some clues to answer those questions, and there’s a list of links to those posts at the bottom of this post.

But, another mystery surrounds those quicklinks or site links, which is how search engines might decide upon the text used in those links. I haven’t seen an answer from any of the search engines previously. At least, until now.

Yahoo published a patent application that provides some hints on their approach to deciding which link text to use in their quicklinks.

The patent application is:

[Generating Succinct Titles for Web URLs](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100049709.PGNR.&OS=dn/20100049709&RS=DN/20100049709)
Invented by Shanmugasundaram Ravikumar, Deepayan Chakrabarti, and Kunal Punera
Assigned to Yahoo!, Inc.
US Patent Application 20100049709
Published February 25, 2010
Filed: August 19, 2008

Abstract


> Methods, computer programs, and systems for generating a link title for a URL (Uniform Resource Locator) within a context webpage to be shown as a web result are provided. The method evaluates generation parameters for a plurality of sources for picking words from the link title. Further, the method generates candidates for the link title, and a likelihood is computed for each candidate.
>
> When computing the likelihood, the generation parameters, the context webpage and the words are considered. In addition, the method selects a candidate with the highest likelihood from all the computed likelihoods, and presents the URL with the selected candidate as the title.

I usually like to take a patent filing like this, and try to break it down into plain English, cutting out a lot of the legal language and the math presented to give a summary of the ideas behind an approach. Fortunately, Yahoo also published a whitepaper and a powerpoint presentation on the topic, which provide a look at the ideas in the patent filing in plainer language.

The whitepaper was published for KDD 2008 – Knowledge Discovery and Data Mining Conference, held in Las Vegas, Nevada, in August of 2008, around the same time that the patent was filed, and shares the same name – [Generating Succinct Titles for Web URLs](https://faculty.mccombs.utexas.edu/deepayan.chakrabarti/mywww/papers/kdd08-quicklinks.pdf) (pdf).

The powerpoint presentation (of the same name) presents the ideas in the patent filing in even plainer English. See: Generating Succinct Titles for Web URLs (ppt). Note, if you don’t have powerpoint, and you want to see the presentation, consider downloading the free [Open Office](http://www.openoffice.org/) open source productivity suite, which can show powerpoint presentations.

While people creating web sites often spend a fair amount of time deciding upon titles for pages they create that describe the content of those pages, as well as anchor text for links pointing to those pages, there are sometimes problems with those choices of text that make them less than idea for use as the text for quicklinks.

One of those is that a search engine often wants to use a limited number of words in their quicklinks, and page titles for pages pointed to by quicklinks tend to be longer than what the search engines want to use in their links.

Another problem is that, according to the patent filing’s authors, around 17 percent of the pages they run across on the web are missing page titles.

Yahoo might look at a number of different choices to select text from to use in quicklinks. Some of the choices can include:

- Anchor text pointing to the page from links on the same site
- Anchor text pointing to the page from links from other sites
- Search queries for which the page was returned in the top 10 results
- Search queries for which the page was returned as a result
- Search queries for which the page was the first result
- Search queries for which the page was clicked upon from search results
- Words extracted as key phrases from the page
- Tags for for the page from delicious.com

The patent application describes some of the potential problems that might be found in some of these choices. For example, they tell us that search queries used to find some pages might contain misspellings. They also tell us that those misspellings don’t appear as often in search queries that are clicked upon.

You may have noticed that they don’t include the titles of pages as possible link text in quicklinks. Their reasons for not using page titles:

1. An analysis of one million random URLs they performed showed that at least 17 percent of HTML documents lack titles.
2. Page titles are often erroneous, incomplete, long, or simply not the best title.

They provide an example of a bad title on the SIGIR conference web site at “www.sigir2008.org/schedule.html” which used the title “SIGIR’08-Singapore,” because a much better choice for a quicklink would be “Conference Schedule,” which isn’t very clear from that page title.

We’re also told that long quick links provide a bad user experience on a search results page, because of limited real estate on search results pages.

It’s worth spending some time on the presentation, paper, and patent application if you’re interested in learning more about how Yahoo might decide between the different choices they have when choosing the text for a quicklink.

If you publish a web site, and you won’t to understand more about quicklinks or site links, as well as when and why search engines might show them, some of my previous posts on those kinds of links might answer some questions you may have:

- [Have You Ever Seen Delicious Quick Links?](https://www.seobythesea.com/2010/01/have-you-ever-seen-delicious-quick-links/)
- [Microsoft on Navigational Queries and Best Match](https://www.seobythesea.com/2009/12/microsoft-on-navigational-queries-and-best-match/)
- [Should Webmasters Pick Their Own Quicklinks in Search Results?](https://www.seobythesea.com/2009/08/should-webmasters-pick-their-own-quicklinks-in-search-results/)
- [Yahoo Site Links: Quicklinks for Navigational Queries](https://www.seobythesea.com/2009/04/yahoo-site-links-quicklinks-for-navigational-queries/)
- [Microsoft Study Takes Navigational Sitelinks a Step Further](https://www.seobythesea.com/2007/06/microsoft-study-takes-navigational-sitelinks-a-step-further/)
- [Google’s Listings of Internal Site Links for Top Search Results](https://www.seobythesea.com/2006/12/googles-listings-of-internal-site-links-for-top-search-results/)
