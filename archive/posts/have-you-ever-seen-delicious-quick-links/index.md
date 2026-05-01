---
title: "Have You Ever Seen Delicious Quick Links?"
source_url: "https://www.seobythesea.com/2010/01/have-you-ever-seen-delicious-quick-links/"
slug: "have-you-ever-seen-delicious-quick-links"
date_published: "2010-01-05T10:40:02+00:00"
date_modified: "2020-11-03T16:05:09+00:00"
author: "Bill Slawski"
---

When you view a set of search results, sometimes you’ll see some additional links for more pages on a site included within a single search result for a page. This often happens when a search engine considers the query that you used to be a “navigational” query, where the intent behind your search is to find a specific page on a site.

For instance, if you want to visit the WordPress homepage, instead of typing “wordpress.org” or “wordpress.com” into the address bar of your browser, you might type “wordpress” into the search box on a toolbar. Chances are, you are intenting to go to the wordpress home page instead of finding sites that mention “wordpress.”

The search engines don’t always follow the same patterns in delivering you to pages, but there are a number of similarities. For example, searching at Google for “wordpress” will show you the home page for “wordpress.org” at the top of the search results and also provides you with a list of links to pages on the site, including the page where you can download the software, and the support forums. Searching for “wordpress” at Yahoo delivers the home page for hosted wordpress blogs at “wordpress.com” at the top of the results, and offers additional links for different categories of blogs found at the site.

Why does Google show you the software site, and Yahoo show you the wordpress hosted site? Good question. There are many questions about how the different search engines handle navigational queries, and how they determine which site links or quick links to show under them.

Often those quicklinks seem to use words that are shortened versions of the anchor text that point to the interior pages of a site, but the choice of words used in those links has been some thing of a mystery. A recent patent filing from Yahoo explains how they might select the text for quick links that they will show to searchers, within search results.

They also provide an explanation for why they show quick links instead of displaying a number of search results from the same page:


> If presented with URLs or snippets of popular pages in the apple.com domain the user would likely click directly on the link to the popular page they originally targeted. However, search result page (SRP) area is scarce and thus valuable, and showing lots of URLs, snippets and other text is often impractical.
>
> A common solution is to provide “quicklinks” to popular pages in a host. These are text links, typically with short labels, that point to pages internal to the host. This tactic reduces the usage of SRP area while fulfilling the goal of limiting the steps a user has to take to reach their target. A number of commercial search engines, including Google and Yahoo, have implemented such “quicklinks”.

The patent filing is:

[Assigning Human-Understandable Labels to Web Pages](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090319533.PGNR.&OS=dn/20090319533&RS=DN/20090319533)
Invented by Ashwin Tengli
US Patent Application 20090319533
Published December 24, 2009
Filed: June 23, 2008

Abstract


> Methods and systems that label a web page collect a set of inbound labels for the web page, estimate a language model for the web page, compute the likelihood of generating each inbound label given the language model and assign a score to each inbound label based on this likelihood, and assign a label to the web page based on the score assigned to each of the set of inbound labels.
>
> Inbound labels are preferably collected from the set of web documents linking to the web page. Labels assigned are useful in providing labeled links to web pages from top hosts in search result pages.

It’s interesting that the patent filing refers to the text used in quick links at “labels” rather than anchor text. The process described is presented in a fairly simple manner, but involves a somewhat complex process. Here’s the quick summary of how “labels” may be generated for pages listed as quick links at Yahoo:

- A language model is estimated for the web page,
- A set of inbound labels for the web page is collected,
- Potential labels to used are computed based upon the language model and are assigned a score, and;
- The page is given a label to use as the quick link pointing to the page.

The “language model” created for a page involves taking a close look at the words that actually appear on the page, or that are pointing to the page. These can include:

- Title and header data of the web page,
- Content of the web page, and;
- The candidate labels of the web page.

The labels, or text used in quick links might be collected from a few different places:

***Anchor Text*** – Anchor text from links pointing to the web page. It’s possible that text around, and associated with a link pointing to a page might be considered, though that isn’t explicitly stated in the patent filing.

***Delicious Tags*** – Delicious tags pointing to the web page could be considered candidate labels. It’s interesting that Yahoo mentions the use of tags from their bookmarking site Delicious here. I have seen many pages tagged on Delicious that are more descriptive of the relationship between a page bookmarked, and the person bookmarking it, such as “toread” or “homework,” but it’s possible that those types of tags might not be considered at labels since they likely won’t fit in with the language model created for the page being pointed towards.

***Queries Clicked*** – It’s also possible that user search queries resulting in clicks-through to the web page could be used as candidate labels. This kind of search behavior history is an independent data source from the information collected by the search engine about content that appears upon a page, or in links pointing to the page, but it could be considered very related.

Why use “labels” from a number of different sources? We’re told that there are a number of advantages that this approach brings:


> Methods and systems consistent with the present invention solve the problems of assigning human understandable labels to web pages in a fast and scalable way. This permits assignment of labels to any web page and enables insertion of short labeled links in SRPs for any web host.
>
> In addition, embodiments that employ inbound labels from the web leverage human generated web content while embodiments that employ search history leverage human generated search content. Search activity and web content production activity provide label texts with relatively different production timescales.

**Conclusion**

I’ve written about quick links at Google, Yahoo, and Microsoft (Bing) before in a number of posts, including the following:

- [Should Webmasters Pick Their Own Quicklinks in Search Results?](https://www.seobythesea.com/2009/08/should-webmasters-pick-their-own-quicklinks-in-search-results/)
- [Yahoo Site Links: Quicklinks for Navigational Queries](https://www.seobythesea.com/2009/04/yahoo-site-links-quicklinks-for-navigational-queries/)
- [Microsoft Study Takes Navigational Sitelinks a Step Further](https://www.seobythesea.com/2007/06/microsoft-study-takes-navigational-sitelinks-a-step-further/)
- [Google’s Listings of Internal Site Links for Top Search Results](https://www.seobythesea.com/2006/12/googles-listings-of-internal-site-links-for-top-search-results/)

The search engines have told us that quick links or site links can be helpful to searchers who are performing navigational queries, and likely want to go as quickly as possible to a particular page within a site. For example, I often will type in ESPN” in my search toolbar to go to that site, and select either a “baseball” or “football” quicklink rather than use the navigation on the ESPN web site itself.

What we haven’t seen from any previous patents or white papers or blog posts from the search engines themselves is an explanation of how they select the text used for those quick links. This patent filing gives us an idea of what the search engines are trying to achieve when they select the text for those links – a very short and very descriptive label that tells us what the page behind the label might be about.

It also tells us that a search engine might look at a few different sources for labels, from anchor text pointing to the page, to tags from social bookmarking sites like Delicious, to query terms that searchers use to find those pages. Considering those labels in light of a language model created for that page makes it more likely that the quick links accurately describe the contents of the page.

Is Yahoo using tags from Delicious as possible labels for quick links? Using anchor text pointing to pages, from places like the navigation of a site, seems to be the most obvious source of quick link labels, but the possibility of search engines looking at tags from places like Delicious and query text used to find pages are interesting possibilities to consider.
