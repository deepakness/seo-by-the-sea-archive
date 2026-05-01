---
title: "Googles Page Segmentation Patent Granted"
source_url: "https://www.seobythesea.com/2011/03/googles-page-segmentation-patent-granted/"
slug: "googles-page-segmentation-patent-granted"
date_published: "2011-03-22T02:05:56+00:00"
date_modified: "2020-06-20T10:10:01+00:00"
author: "Bill Slawski"
---

## How Page Segmentation May Be Understood by Google

The HTML5 standard being developed for the Web introduces a new set of HTML elements. These include elements such as section, header, footer, article, aside, header, and nav. Mark Pilgrim’s online book, Dive into HTML5 gives us a look at the newest version of HTML5, and shows us how these [New Semantic Elements](https://diveintohtml5.info/semantics.html#new-elements) might change around the way that we create web pages in ways that might make it easier for automatic programs like search engines to understand what different sections of pages might mean.

Interestingly, the search engines have been working hard trying to do this themselves for many years, and a new patent granted to Google today describes how it might work to understand different parts of web pages, and use that understanding to help it rank web pages in search results, caption images, construct snippets for search result pages, and weigh links differently when they appear in different semantic parts of Web pages.

Microsoft has published several patents and whitepapers on how they might perform some of the activities while breaking pages down into smaller blocks. My most recent blog post describing the Microsoft efforts was about a patent filing that gave us some insights into how they determined the [Functions of different Blocks in web pages](https://www.seobythesea.com/2011/02/how-a-search-engine-might-identify-the-functions-of-blocks-in-web-pages-to-improve-search-results/). That post has some links in it to other posts here involving papers and patent filings from Yahoo, Microsoft, and Google.

But we’ve never seen a full-blown description from Google before on how they might segment pages into different parts with different purposes.

The Google patent granted today does give us much more information on how the search engine interprets parts of pages and uses that information in multiple ways:

[Determining semantically distinct regions of a document](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,913,163.PN.&OS=pn/7,913,163&RS=PN/7,913,163)
Invented by Yonatan Zunger
Assigned to Google Inc.
US Patent 7,913,163
Granted March 22, 2011
Filed September 22, 2004

Abstract


> A structured document is translated into an initial hierarchical data structure in accordance with syntactic elements defined in the structured document. The initial hierarchical data structure includes a plurality of nodes, and each node corresponds to one of the syntactic elements. The method then annotates a node with a set of attributes including geometric parameters of semantic elements in the structured document that are associated with the node in accordance with a pseudo-rendering of the structured document.
>
> Finally, the method merges the nodes in the initial hierarchical data structure into a tree of merged nodes in accordance with their respective attributes and a set of predefined rules such that each merged node is associated with a semantically distinct region of the pseudo-rendered document.
>
> The predefined rules include rules for merging nodes associated with semantic elements that have nearby positions and/or compatible attributes in the pseudo-rendered document.


## Page Segmentation in an Earlier Google Patent

Back in 2006, a [Google patent application](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/) was published which described how Google might take a page filled with reviews of restaurants, and break the page apart so that it could associate each review with the restaurant that it reviewed. Near the bottom of that patent was inserted a paragraph telling us that Google could use that segmentation process for much more than reviews:


> [0047] Although the segmentation process described with reference to FIGS. 4-7 was described as segmenting a document based on geographic signals that correspond to business listings, the general hierarchical segmentation technique could more generally be applied to any type of signal in a document.
>
> For example, instead of using geographic signals that correspond to business listings, images in a document may be used (image signals). The segmentation process may then be applied to help determine what text is relevant to what image.
>
> Alternatively, the segmentation process described with reference to acts 403 and 404 may be performed on a document without partitioning the document based on a signal. The identified hierarchical segments may then be used to guide classifiers that identify portions of documents which are more or less relevant to the document (e.g., navigational boilerplate is usually less relevant than the central content of a page).


## Page Segmentation In the Reasonable Surfer Patent

Google’s [Reasonable Surfer](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/) patent described how Google might pass along different amounts of PageRank to different links based on several features associated with those links. Some of those features involved the location of those links on the pages where they were found. But that patent, like the review segmentation patent, really didn’t go into much detail on how Google might break a page into different parts.

This new patent does.

It looks at the HTML of a page and also looks at how the page might be displayed in a simulated browser to understand the different parts of a page, what their purpose might be, and where they are located on a page.

Examples of some of the page segmentation processes driven by understanding these different parts of a page might include:

***Link analysis*** – links found in “different semantically distinct regions may be assigned different weights.” So, a link to another page that’s found in the footer of a page might be given less weight (or PageRank) than a link found in a more important section of the page.

***Text analysis*** Text found in some parts of a page might be given more weight than in others. So, a page that has a certain keyword phrase in its footer might not rank as highly for a query matching that term than if the keyword phrase was in a more important segment of the page, like the main content area. One page where a query term appears in an important segment of a page might also rank higher than another page where the query term appears in a much less important part of the page.

***Image captioning*** Text found near an image is usually more relevant to the image than text further away from it. This segmentation process can help identify what text is nearer an image and could be used to help caption the image and help it rank in image search.

***Snippet construction*** When a search engine returns a page in search results for a particular query, it generates a snippet of text to describe what it has found on that page. Sometimes when the query terms appear in the meta description for a page, the search engine shows the meta description. But a search engine will also use text it finds on the page itself, and it might create a snippet based upon text in a section that’s most relevant for the query term.

**Page Segmentation Conclusion**

The patent provides a considerable amount of detail on how it might interpret different parts of pages. Chances are that the new HTML5 will make it even easier for a search engine like Google to do this in the future.

We’ve had a considerable amount of detail from both Microsoft and Yahoo on how they might break pages down into parts, but not very much on page segmentation from Google. Now we do.

Last Updated June 9, 2019
