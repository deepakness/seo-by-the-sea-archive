---
title: "How a Search Engine Might Analyze the Linking Structure of a Web Site"
source_url: "https://www.seobythesea.com/2009/08/how-a-search-engine-might-analyze-the-linking-structure-of-a-web-site/"
slug: "how-a-search-engine-might-analyze-the-linking-structure-of-a-web-site"
date_published: "2009-08-31T12:44:56+00:00"
date_modified: "2020-11-03T16:09:32+00:00"
author: "Bill Slawski"
---

How well do search engines understand the linking structure of a web site? Do they have ways to organize and classify individual links and blocks of links that they see on the pages of a site?

Do they treat links and collections of links that they find on more than one page of a site differently than links and collections of links only on one page? If they find more than one group of links on a page that contain many of the same links, though at the top and bottom of the page, how might they treat those links?

I came across a patent filing from Microsoft from last summer that explored the concept of linking structure. It hadn’t drawn much attention, so I decided to take a closer look at it here.

**Segmentation and Link Blocks**

In the 2002 paper, [SmartView: Enhanced Document Viewer for Mobile Devices](https://www.microsoft.com/en-us/research/publication/smartview-enhanced-document-viewer-for-mobile-devices/) (pdf), a couple of Microsoft researchers discussed how web pages might be analyzed and partitioned into smaller logical sections to be viewed on small devices, such as handheld phones. These smaller sections could be selected by a viewer and seen independently from the rest of a web page. One of the authors of that paper is listed as an inventor of the Microsoft patent, and the paper is cited within the linking structure patent as an example of how web pages might be segmented in a way that benefits the viewers of a page.

Another web page segmentation process mentioned in the patent filing is a Microsoft process known as [VIPS: a Vision-based Page Segmentation Algorithm](https://www.microsoft.com/en-us/research/publication/vips-a-vision-based-page-segmentation-algorithm/). The paper describing this process was published in 2003 and explores a way of looking at the HTML of a page, along with a visual inspection of white space, horizontal rules, and other visual aspects of a web page that might indicate that a page is broken down into different logical sections.

Another paper from Microsoft that wasn’t mentioned in the patent filing, but which seems relevant, is one that explores how links from different blocks on a page might be treated differently based upon where they are located on that page. The paper is [Block-Level Link Analysis](https://www.microsoft.com/en-us/research/publication/block-level-link-analysis/), and it introduces amongst other things the idea of a Block Level PageRank:


> Block Level PageRank (BLPR) is similar to the original PageRank algorithm in spirit. The key difference between them is that traditional PageRank algorithm models web structure in the page level while BLPR models web structure in the block level.

What that paper and other papers from Microsoft don’t explore in much depth is how different blocks of links might be related to each other. They don’t try to explore in any depth how links on a site might be related to one another, and how the pages of a site might be organized based upon links between the pages of a site. Looking at link blocks on a site, classifying them, and organizing them may yield some useful benefits.

Once a page is broken down into different segments, such as headers and footers, sidebars, main navigation bars, main content areas, advertisement blocks, etc., the relationship between links in those segments across the site might be explored.

**Classifying Links**

To classify links and link blocks, a search engine would start by analyzing the layout of individual pages to identify candidate link blocks and see where they occur on pages, and how they might relate to each other. This linking structure analysis is used to create what the patent refers to as a Link Structure Graph or LSG.

There are three main purposes for creating an LSG:

***Locality*** – To identify the global linking structure of a site, and the local linking structure around individual pages.

***Completeness*** – To understand the complete link structure of the site, including navigational structures and logical structures that are being used to organize the content on a site.

A navigational structure is consistent and easy to follow arrangement of links enabling visitors to travel to different parts of a site. A high-level global navigation structure usually appears on all (or most) pages of a site, and secondary (and even lower level) navigation structures may also allow visitors to navigate through different sections of pages on a site.

In addition to navigational links, a site may include links to pages in structural elements, such as a list of links to “best sellers” on an e-commerce site, or to “most popular posts,” on a blog.

***Scalability*** – This algorithm can run efficiently for large and small web sites. It also looks at link blocks that may appear on more than one page, and relate them to each other instead of treating them as new when it finds them on other pages.

Some link blocks may appear more than once on the same page in different segments, with minor variations, and they may be merged together. For instance, the same or a substantially similar link menu might be shown at the top and bottom of a page in the main navigation area and a footer navigation area.

After substantially similar link blocks may have been merged together, the remaining link blocks which are considered “unique” are classified. Classification is based upon the function of a link block, and might be described as being one of the following three types:

***S-nodes*** – These are organizational and navigational link blocks; typically repeated across pages with the same layout and showing the organization of the site. They are often lists of links that don’t usually contain other content elements such as text. These blocks are structural link blocks or s-nodes.

***C-nodes*** – These are content link blocks, grouped together by some kind of content association, such as relating to the same topic or sub-topic. These blocks usually point to information resources and aren’t likely to be repeated across more than one page.

***I-nodes*** – These are isolated links, which are links on a page that aren’t part of a link group, and which may be only loosely related to each other, by virtue of something like their appearing together within the same paragraph of text. Every link that appears on a page that isn’t classified as s-nodes or c-nodes might be seen as a single collection of links and given an i-node classification. Each link on a page might be considered an individual i-node, or they might be grouped together by page as an i-node.

If you were to look at a number of pages on different web sites, you might not find it too hard to do this kind of classification for the links on those pages.

**Why Classify Links?**

There are a number of reasons for the classification of links on a site. The paper on Block-Level Link Analysis mentioned above tells us that links in different blocks might be given different weights for ranking purposes. Understanding the linking structure of a site can also help when different parts of a site might also be displayed on a handheld device with a smaller screen. But there are also other potential benefits that are described in the patent filing:

1) Links to other pages that might be related to a page shown may be more easily uncovered. This patent doesn’t mention the use of quick links, but it does tell us that it might present information about pages that are related and make it easier to navigate to those pages on a site. These might be used with a personalization approach to uncover pages that might interest a specific visitor, or be based upon an approach that increases a visitor’s ability to navigate to pages that might not be directly linked to pages offered by search results.

2) Internal linking information collected by the search engine might be offered to the site owners to allow them to optimize their use of links and to see statistics about visits between pages of a site.

3) The linking information might be useful in the automatic tagging of web pages on a site.

For example, a page about Cars might include category pages about specific brands of cars, then subcategories about specific models, and the specific product pages about car parts. Understanding the linking structure of a site can mean that the higher level link text of parent pages might be used to help tag the lower level pages. So if a category page is pointed to with the anchor text “Ford” and it has a sub-category linked to with the anchor text “mustang parts,” which points to a page about a specific product page for brake pads, the brake pad page might be automatically tagged with the terms “ford,” and “mustang parts.”

4) Like the automatic tagging above, internal links and anchor text between pages might also be used to create a concept hierarchy for a site, which can then be compared to other sites containing similar concepts.

Using my car part site example, from the previous section on automatic tagging of pages, a hierarchy of concepts might be created about a site offering car parts. That site might be compared to other sites that may use similar terminology and which could even have a similar concept hierarchy. Those sites might then be clustered together by a search engine.

5) Anchor text in links found on a site might be presented to viewers to help them navigate through the pages of a site in a sidebar, or in a kind of sitemap reflecting the linking structure of the site.

The patent application is:

[Web Site Structure Analysis](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080134015.PGNR.&OS=dn/20080134015&RS=DN/20080134015)
Invented by Natasa Milic-Frayling, Eduarda Mendes Rodrigues, and Shashank Pandit
Assigned to Microsoft
US Patent Application 20080134015
Published June 5, 2008
Filed: December 5, 2006

Abstract


> A graph representation of a web site is generated by identifying blocks of links on web pages. Each block of links is represented by a node in the graph representation and connections between the nodes provide information on the re-use of blocks between pages.

**Conclusion**

I’ve provided a high-level overview of a process described in the patent filing on how a search engine might use a segmentation process to identify link blocks on a site, possibly merge some of those blocks together, and then classify the link blocks that they’ve found. The patent goes into more details on what it might look for in creating those blocks, and merging them together, and then in classifying them.

The patent also provides some possible benefits of segmenting and classifying links into link blocks, but there are likely others that it doesn’t detail, such as if the search engine might give different link-based ranking values to links found in different kinds of link blocks.

The patent also describes how it might include data collected about the links on a site from monitoring the use of those links from visitors to pages, though it doesn’t go into much depth on the processes behind that approach.

The process in this patent filing is from Microsoft, and it’s possible that Microsoft uses a process like this when they index web pages. It’s also possible that the other major search engines may be doing some similar kind of analysis of different links on a site, and classifying them based upon where they appear in the layout of a site, and the function that they provide.

In my last post, on [Creating an SEO Inventory](https://www.seobythesea.com/2009/08/creating-an-seo-content-inventory/), there is a column for “Navigation Location” where you can list the kinds and locations of links to specific pages from other pages on the same web site, such as a logo link or the main navigation link. You may want to think about links to the pages listed from what kind of classification they may fit within, in a framework like the one described in this Microsoft patent filing.
