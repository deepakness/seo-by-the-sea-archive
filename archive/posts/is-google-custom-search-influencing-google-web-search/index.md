---
title: "Are Google Custom Search Engines Influencing Google Web Search?"
source_url: "https://www.seobythesea.com/2010/10/is-google-custom-search-influencing-google-web-search/"
slug: "is-google-custom-search-influencing-google-web-search"
date_published: "2010-10-26T11:12:15+00:00"
date_modified: "2020-05-13T09:59:38+00:00"
author: "Bill Slawski"
---

This is the second part of a series on Google Custom Search Engines.

Why spend so much time looking at Google Custom Search Engines? Here are a few reasons which I’ve written about in previous posts:

- Google Subscribed Links, which can be created in Google Custom Search Engines, sometimes [appear in Google’s Web Search](https://www.seobythesea.com/2009/09/google-subscribed-links-patent-why-do-some-onebox-results-require-no-subscription/) even if you don’t subscribe to those links.
- Google’s patent describing their [Trust Rank approach](https://www.seobythesea.com/2009/10/google-trust-rank-patent-granted/) explores how the kind of labels used as annotations by trusted sources (such as some Custom Search Engine builders) might influence web search results.
- Another patent application from Google explains how [labels](https://www.seobythesea.com/2009/04/how-google-might-top-search-results-with-additional-information/), which can be created in Google Custom Search Engines, might affect the classification of Web pages by Google, and help to define query refinements that appear above Web search results, as does an additional granted Google Patent describing how Google might be [Filtering search results using annotations](https://www.seobythesea.com/2010/02/how-a-search-engine-might-weigh-pages-with-relevant-annotations-higher-in-search-results/).

In the first part of this series of posts on Google Custom Search Engines and, [SEO and Assumptions behind Web Searches](https://www.seobythesea.com/2010/10/assumptions-behind-web-searches/), I mentioned that often the assumptions uncovered in a patent, about the Web, about search, and about searchers, were one of the key takeaways one could receive from reading a patent.

Another very useful approach to understanding the context of a patent and the research behind it involves learning more about the inventor of a patent, and learning what else he or she may have been involved in.

The inventor behind the patent [Aggregating Context Data for Programmable Search Engines](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100250513.PGNR.&OS=dn/20100250513&RS=DN/20100250513) is [Ramanathan V. Guha](https://research.google/people/author17184/). While at Google, he started [Google Custom Search Engines](https://programmablesearchengine.google.com/about/), Google’s Search Based Keyword Tool, and Google [SMS Channels](http://www.guha.com/cv.html).

In May of last year the Google Webmaster Central blog published a post entitled [Introducing Rich Snippets](https://webmasters.googleblog.com/2009/05/introducing-rich-snippets.html), which described how web publishers could add special markup formats (microformats and RDFa) to their webpages that might be shown as snippets in search results.

These enhanced snippets would enable you to possibly have things in your snippets such as starred ratings, an indication of how many reviews a page might contain, and more, based upon meta data that you include in the HTML code used to present that information on a page. The authors of the post were Kavi Goel, Ramanathan V. Guha, and Othar Hansson.

It’s not surprising that Ramanathan V. Guha was included as one of the authors. He was involved in the development of an earlier version of one of those XML formats, [RDF](https://www.w3.org/Consortium/activities), while working with Netscape Corporation.

Some of the other places he worked at before joining Google in 2005 includes Apple and IBM, and he was a co-founder of Epinions. At Apple, he developed the Meta Content Framework (MCF) format.

At Netscape, in addition to RDF, he developed Netscape’s [smart browsing](http://web.archive.org/web/20160110154838/http://www.eddiesoft.com:80/technotes/whatsrelated.html) feature and the earliest version of RSS, to display feeds on Netscape homepages.

If you want to learn more about the things he worked upon in the past, he has a copy of his [resume](http://www.guha.com/cv.html) on his website, and he was interviewed by Marc Andreessen in 1999 on the Netscape blog, available through the internet archive at [Innovators of the Net: Ramanathan V. Guha and RDF](http://web.archive.org/web/20080205163659/http://wp.netscape.com/columns/techvision/innovators_rg.html).

He’s also listed as the inventor or co-inventor behind the patents I wrote about in my list at the start of this post.

Guha’s previous work with specialized XML formats such as RDF and RSS is essential to the way that an advanced Custom Search Engine might work.

Google Custom Search Engines not only allows you to customize a search engine by deciding which sites to include in search results, but it also provides a way to customize how search results are presented to searchers, allowing you to change around the way pages might be ranked, enabling you to emphasize some pages over others and include special information at the tops of search results, and to offer things like query refinements above page results listings.

Some of this can be done using a control panel when you set up a custom search, or you can create XML files that define how your custom search engine may work.

**XML and Google’s Custom Search Engines**

If you create Google Custom Search Engines, you have a few different choices on how to set it to work.

You could just add one or more whole websites or pages or parts of websites to be included as sources for the search engine. If you do that, the order that pages are shown in search results are based upon the ranking algorithm that Google uses in its web search.

While you can set up a fairly simple custom search engine (see the [Getting Started Guide](https://developers.google.com/custom-search/docs/start?hl=en)) if you want, you can also do things like add keywords to your search engine that might boost certain pages on search results if they contain a searcher’s query terms and the keywords that you select.

But Google’s custom search also provides other ways to change how your search results appear.

For example, it allows people to set up [context files](https://developers.google.com/custom-search/docs/context?hl=en) to describe the structure of custom search engines and define how they behave.

You can set up [Subscribed Links](http://web.archive.org/web/20110811192403/http://code.google.com:80/intl/en/apis/customsearch/docs/special_results.html), which enable you to set up snippets for specific queries that you define either through a control panel or your context file.

You can also create [promotions](http://web.archive.org/web/20110811192403/http://code.google.com:80/intl/en/apis/customsearch/docs/special_results.html) for specific queries, which might move up a specified page in search results that you want to draw attention to, useful for “making announcements and promoting products, services, events, and content that you want your users to discover.”

Another important aspect of Google Custom Search Engines is the ability to create query refinements for your search results that appear above those results.

You can create [refinement labels](https://developers.google.com/custom-search/docs/refinements?hl=en) for sites. If someone performs a fairly broad search, labels associated with sites in the search results may appear above the results that can help searchers drill down to pages about specific topics.

For example, someone searches for “diabetes.” Query refinements would show up above search results if sites listed on a search for “diabetes,” were labeled with terms such as “treatment,” “Symptoms,” “Diagnosis,” “Causes.” Those refinements would match the labels used.

For a more detailed look at how you can make changes to search results in a Custom Search Engine, the [Google Custom Search Developer’s Guide](https://developers.google.com/custom-search/docs/overview?hl=en) is essential reading.

In my next post on Google Custom Search Engines, I’ll look more deeply into how aggregated information from multiple Custom Search Engines might be used to influence what you see when you perform a search on Google’s main web search, as described in the most recently granted patent on Google Custom Search Engines.
