---
title: "Yahoo on Segmenting Web Sites into Topical Hierarchies"
source_url: "https://www.seobythesea.com/2008/02/yahoo-on-segmenting-web-sites-into-topical-hierarchies/"
slug: "yahoo-on-segmenting-web-sites-into-topical-hierarchies"
date_published: "2008-02-25T22:24:15+00:00"
date_modified: "2014-07-13T14:41:56+00:00"
author: "Bill Slawski"
---

On one level, a search engine indexes a web site by crawling that site one URL at a time, collecting information about what it finds at that address, and indexing the information found so that it can be served to visitors later.

But, the process can be more complicated than that.

For instance, a search engine may try to understand more about specific sites by collecting information on a site wide basis.

**Site Wide Information about Web sites**

Information that a search engine might look at about a web site on a site wide level might include:

- Detecting multiple possibly-duplicated pages from the same site;
- Determining entry points of a website;
- Identifying spam and porn sites;
- Detecting site-level mirrors,
- Extracting site-wide templates, and
- Visualizing content at the site level.

A search engine might also attempt to classify web sites based upon features found on the site, such as:

- Topics of each page,
- Internal hyperlinks on sites,
- Commonly linked-to entry points in sites, with their anchor-text,
- General external link structures,
- Directory structures of sites,
- Link and content templates present on sites,
- Description, title, and tags on key pages on sites, and so forth.

However, most of these approaches try to come up with an overall topic for a site, or for broad sections of a site, rather than for individual pages, and how those pages might be related to each other within a hierarchy.

**Topic labels for web pages**

A new patent application from Yahoo tells us about these site wide reasons and approaches to looking at a site to prepare us for a finer grained look at a site, in a way that explores how a search engine might attempt to understand different topics on the individual pages and segments of a site.

It might do this by looking at topic labels for specific pages (from places like links to individual pages from the Yahoo Directory, Wikipedia, the Open Directory, or other directories), and seeing how those labels might relate to each other within a topical hierarchy.

We are fortunate that the inventors of the patent filing also wrote a paper that covers a lot of the same ground, which explains the processes involved without a lot of the legal language found in the patent filing – Hierarchical Topic Segmentation of Websites.

[System and method for hierarchical segmentation of websites by topic](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080046429.PGNR.&OS=dn/20080046429&RS=DN/20080046429)
Invented by Kunal Punera, Shanmugasundaram Ravikumar, and Andrew Tomkins
Assigned to Yahoo
US Patent Application 20080046429
Published February 21, 2008
Filed August 16, 2006

Abstract


> An improved system and method is provided for hierarchical segmentation of websites by topic.
>
> To do so, an organization of topics may be determined within directories of a website, the hierarchical arrangement of the web pages in the website may be segmented by topic, and the segments representing regions of coherent topics in the website directory may be output.
>
> In an embodiment, a website directory may be converted into a binary tree and dynamic programming may be applied to iteratively determine whether to add a node of the tree to a segment representing a topic.
>
> A node selection cost may be evaluated to determine whether to add a node of the tree as a segment representing a topic.
>
> And a cohesiveness cost may be evaluated to determine how well a web page of the tree may be represented by its closest ancestral node that may be a segmentation point of a segment representing a topic.

**Conclusion**

The paper goes into a lot of the reasons why a search engine might want to segment the parts of a web site, and how it can use things like URL structures to help it do so.

What I found most interesting about the document was the change in focus of a search engine from crawling and understanding individual pages to understanding how pages within a site relate to each other.

How do the topics and parts of your web site relate to each other, and how might a search engine understand those relationships from different features and aspects of the site, and from links pointed to the pages of the site from other places?
