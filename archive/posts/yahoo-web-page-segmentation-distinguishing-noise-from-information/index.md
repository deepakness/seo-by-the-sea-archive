---
title: "Yahoo Web Page Segmentation: Distinguishing Noise from Information"
source_url: "https://www.seobythesea.com/2009/10/yahoo-web-page-segmentation-distinguishing-noise-from-information/"
slug: "yahoo-web-page-segmentation-distinguishing-noise-from-information"
date_published: "2009-10-12T01:45:15+00:00"
date_modified: "2020-06-20T10:34:40+00:00"
author: "Bill Slawski"
---

In a recent [interview with Priyank Garg](https://blogs.perficient.com/2008/07/07/eric-enge-interviews-yahoos-priyank-garg/), Director of product management for Yahoo! Search Technology, conducted by Eric Enge, we were told that Yahoo breaks pages down into template sections to distinguish between noisy, or boilerplate content and unique content:


> One of the things Yahoo! has done is look for template structures inside sites so that we can recognize the boilerplate pages and understand what they are doing. And as you can expect, a boilerplate page like contact us or an about us is not going to be getting a lot of anchor text from the Web and outside of your site. So there is natural targeting of links to your useful content.
>
> We are also performing detection of templates within your site and the feeling is that that information can help us better recognize valuable links to users. We do that algorithmically, but one of the things we did last year around this time is we launched the robots-NoContent tag, which is a tool that webmasters can use to identify parts of their site that are not unique content for that page or that may not be relevant for the indexing of the page.
>
> If you have ads on a page, or if you have navigation that’s common to the whole site, you could take more control over our efforts to recognize templates by marking those sections with the robots-NoContent tag. That will be a clear indicator to us that as the webmaster who knows this content, you are telling us this part of the page is not the unique main content of this page and don’t recall this page for those terms.

I’m not completely in agreement with the idea that an “about us” can’t be engaging and informative, and something that people won’t link to. Done right, with things like timelines and narratives, and insights into how an organization has developed, an “about us” page could potentially be one of the most interesting pages on a site.

But the general idea, that sites may contain content that isn’t compelling and informative is true. For instance, copyright notices on a page, or advertisements, or navigational links might be content that a person visiting a page may not want to focus upon the most when seeing that page.

The idea of breaking a page down into parts, or “segmenting” that page is something that we’ve seen before from [Microsoft](https://www.seobythesea.com/2008/06/how-search-engines-can-index-pages-in-parts/) and [Google](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/).

A paper that I wrote about from Yahoo in my post [Yahoo Research Looks at Templates and Search Engine Indexing](https://www.seobythesea.com/2007/03/yahoo-research-looks-at-templates-and-search-engine-indexing/) explored how Yahoo might look at the features found on a page to see if that page was using a template and to distinguish the “main content” on that page from template type features, such as “site navigation links, sidebars, copyright notices, and timestamps.”

Other features that might be considered “noise,” are eCommerce features such as “people who bought XXXXX also bought YYYYYY” sections of pages and similar content that doesn’t focus upon the main content of a page.

I also wrote about another Yahoo patent filing that discussed the automatic segmentation of web pages in my post [Breaking Pages Apart: What Automatic Segmentation of Webpages Might Mean to Design and SEO](https://www.seobythesea.com/2009/07/breaking-pages-apart-what-automatic-segmentation-of-webpages-might-mean-to-design-and-seo/).

Two patent applications from Yahoo, published earlier this month, take the idea of segmenting content on a web page further, to give us more information about ways that Yahoo might use web page segmentation.

The first one discusses many topics, including how multiple pages on a site might be compared, to see if some segments tend to show up on multiple pages, which could be an indication that those segments are boilerplate – content that may not be the main informational focus of each page.

[Site-Specific Information-Type Detection Methods and Systems](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090248707.PGNR.&OS=dn/20090248707&RS=DN/20090248707)
Invented by Rupesh R. Mehta and Amit Madaan
Assigned to Yahoo
US Patent Application 20090248707
Published October 1, 2009
Filed: March 25, 2008

Abstract


> Methods and systems are provided herein that may allow for pertinent information-type(s) of data to be located or otherwise identified within one or more documents, such as, for example, web page documents associated with one or more websites. For example, exemplary methods and systems are provided that may be used to determine if information may be more likely to be of an “informative” type of information or possibly more likely to be of a “noise” type of information.

The second patent application looks for connections between content nodes (somewhat like Microsoft’s “blocks”) to see if those sections of a page should be contained in the same segments.

[Method for Segmenting Webpages](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090248608.PGNR.&OS=dn/20090248608&RS=DN/20090248608)
Invented by Shanmugasundaram Ravikumar, Deepayan Chakrabarti and Kunal Punera
Assigned to Yahoo
US Patent Application 20090248608
Published October 1, 2009
Filed March 28, 2008

Abstract


> A method of segmenting a webpage into visually and semantically cohesive pieces uses an optimization problem on a weighted graph, where the weights reflect whether two nodes in the webpage’s DOM tree should be placed together or apart in the segmentation; the weights are informed by manually labeled data.

**Conclusion**

Likely, Google, Yahoo, and Microsoft are all giving different weights to the value of links in different segments of pages, so that a link from the main content area probably carries more weight than a link from a sidebar or a footer section of a page.

It’s also likely that the search engines are attempting to ignore boilerplate segments of pages when they try to determine if pages contain duplicate or near-duplicate content so that their decisions to filter some pages out of search results are based upon the main content of pages rather than duplicated content that may appear in places such as page footers or sidebars.

Is it possible that words on a page contained in the main content area of a page would be considered more important than words that appear in a sidebar or footer or list of recommended similar products by search engines?

We’ve seen enough information about web page segmentation in white papers and patents and interviews from the search engines over the past five or six years so that it should be considered one of the basics of SEO at this point, though the topic often doesn’t show up in popular lists of search engine ranking factors published by some sites. Perhaps it’s time that it should be.
