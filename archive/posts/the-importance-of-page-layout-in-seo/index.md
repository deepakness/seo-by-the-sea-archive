---
title: "The Importance of Page Layout in SEO"
source_url: "https://www.seobythesea.com/2008/03/the-importance-of-page-layout-in-seo/"
slug: "the-importance-of-page-layout-in-seo"
date_published: "2008-03-02T13:42:35+00:00"
date_modified: "2019-06-11T18:31:13+00:00"
author: "Bill Slawski"
---

*If a search engine could understand the layout of a web page and identify the most important part of a web page, it could pay more attention to that section of the page when indexing content from the page.*

It could give links found within that section of the page more weight than links found in other sections of the page, and it could consider information within that area more weight when determining what the page is about.

We’ve seen the idea of breaking pages up into parts from a couple of the major commercial search engines:

- Microsoft [VIPS](https://www.microsoft.com/en-us/research/publication/vips-a-vision-based-page-segmentation-algorithm/) and [block level link analysis](https://www.microsoft.com/en-us/research/publication/block-level-link-analysis/) (pdf)
- Google – [Document Segmentation based on Visual Gaps](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/)

A patent application from Yahoo explores how to approximate the layout of a web page, without actually displaying the page as a web page the way that a browser program does.

Not actually rendering a page like a browser might makes the process faster, which is important when a search engine has to look at lots and lots of web pages.

The patent filing also explores ways to identify what the most important section of a page might be from the approximated version of a layout. The patent filing is:

[Techniques for approximating the visual layout of a web page and determining the portion of the page containing the significant content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080033996.PGNR.&OS=dn/20080033996&RS=DN/20080033996)
Invented by Anandsudhakar Kesari
US Patent Application 20080033996
Published February 7, 2008
Filed August 3, 2006

Here’s the abstract from the patent application:


> To approximate a visual layout of a web page without rendering the page, an object tree representing elements within the page is recursively traversed to determine bounds for the width of the elements, resulting in lower bounds induced for non-leaf nodes by elements within these nodes and upper bounds induced by ancestors and siblings of nodes.
>
> For each element, the minimum required width (lower bound), the desired width were there no constraints, and the maximum available width (upper bound) based on constraints of parents are computed, and an approximate width is derived therefrom.
>
> A positioning process positions each element within its corresponding parent container by advancing a cursor according to the elements’ approximate width and appropriate constraints.
>
> The element that contains the most meaningful content is determined based on the amount of weighted content of elements and their position within the page.

**Information Extraction Systems and Data Structures**

The ways that information might be presented on web sites can often be described as structured, semi-structured, or unstructured.

Structured means that the pages are generated using a common layout or template, and contain the same information fields from one page to another.

Semi-structured sites may use templates that have a number of variations to them. For example, one page may include information and fields that other pages don’t have, or some pages might show a wider range of information and values. .

Some sites that may use a structured format might include job sites, or travel sites, or ecommerce product pages.

The majority of pages on one of those sites may display all the same information fields from one page to another, and if there isn’t information to fill a field, the field is shown anyway, but might show that there is no information for that field. An online bookstore might be set up that way, too.

A semi-structured format just might not display fields that are empty, or may show some new fields if there is unique information to show.

***Information Extraction (IE) systems*** are used to gather and manipulate the unstructured and semi-structured information on the web and populate backend databases with structured records.

One of the challenges faced by an information extraction system is to quickly and accurately extract information from HTML pages.

So, how does an information extraction system find the good stuff on a page full of HTML code, and bypass the useless content?

It might look for some cues from the HTML, such as

(a) Style of the content, like color, emphasis, size, etc.;

(b) Geometric layout of page elements of the page, like the absolute and relative placement of elements; and,

(c) A visually significant region on the page which appears to contain the main content.

Looking at HTML to get cues about layout and which section might contain the main content of a page can be difficult, without using something like a browser to display a page the way that people actually see it.

But the cost of looking at a page in that way can be computationally expensive, and if a good approximation can be done that doesn’t involve that kind of expense, then it may be ideal for information extraction purposes.

**Identifying the Most Significant Element of a Page**

A search engine doesn’t really want to pay too much attention to sections of a page that it might consider noisy, such as navigation bars, or banner or targeted ads when extracting information from a page.

It probably doesn’t want to focus upon a footer part of a page, with information like a copyright notice, or the header of a page which may contain a site logo repeated from one page to another on the site.

The most significant element of the web page would be estimated by this visual layout process, by trying to find the element that contains most of the meaningful content on the page.

That most significant element of the page would be based on the amount of weighted content of elements and the position of the elements within the page as approximated by the visual layout process.

**Conclusion**

The patent application goes into a lot of detail on a method to estimate the layout of a page, and to understand the positions of elements within a page, as well as identifying the most significant element of pages.

If you build web pages, and you want an idea of how a search engine might be looking at and weighing the content of your pages, you may want to spend some time with this patent filing.

Considering that Google and Microsoft also have developed methods to segment the contents of web pages, It’s not a bad idea to get a sense of how they all might be breaking pages down into parts.
