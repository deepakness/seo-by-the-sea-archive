---
title: "Yahoo Research Looks at Templates and Search Engine Indexing"
source_url: "https://www.seobythesea.com/2007/03/yahoo-research-looks-at-templates-and-search-engine-indexing/"
slug: "yahoo-research-looks-at-templates-and-search-engine-indexing"
date_published: "2007-03-19T14:48:06+00:00"
date_modified: "2022-01-07T11:58:31+00:00"
author: "Bill Slawski"
---

There has been a tremendous amount of growth, over the past few years, of web sites that use content management systems, such as blogs, eCommerce shopping sites, wikis, and others. How might that affect how search engines index the pages of those sites?

A new Yahoo Research paper, [Page-level Template Detection via Isotonic Smoothing](http://wwwconference.org/www2007/papers/paper588.pdf) (pdf), discusses some of the problems that exist with so many sites using templates, and a method to use to try to understand if a page is using a template. Here’s a snippet from the paper:


> The increased use of content management systems to generate webpages has significantly enriched the browsing experience of end-users; the multitude of site navigation links, sidebars, copyright notices, and timestamps provide easy to access and often useful information to the users.
>
> From an objective standpoint, however, these “template” structures pollute the content by digressing from the main topic of discourse of the webpage.
>
> Furthermore, they can cripple the performance of many modules of search engines, including the index, ranking function, summarization, duplicate detection, etc.
>
> With templated content currently constituting more than half of all HTML on the web and growing steadily, search engines must develop scalable tools and techniques to reliably detect templates on a webpage.

**Issues Around Templates**

The paper focuses upon looking at the HTML underneath the pages, to learn how to identify features that might indicate a page is using a template.

The reason to do this might be to focus more upon indexing a “content” area upon a page than other sections that may repeat from page to page upon a site.

Another problem that can be solved when indexing pages is that sites with the same content, but different template features such as navigation and header and footer sections might not be identified as a duplicate content.

Two pages that have the same templated areas, but different main content might also be viewed as duplicates even though they possibly shouldn’t be.

Templates can make classification of the content of pages more difficult than it should be, because the classification of pages may take into account the content found in templated areas of pages. This is especially true when looking at more than one site that contains content that main be within the same category, but the information from the templates is very different – say for instance a review of a camera on CNet and a review of the same camera on PC connection.

**Template Features**

Some of the snippets of HTML or features such as navigation sidebars or copyright notices, that they identified while collecting data over a number of web sites (3, 700 websites from the Yahoo! search engine index that each had at least 100 webpages) for a training set shared some common characteristics when they looked at things like:

- Closeness to the margins of the webpage,
- Number of links per word,
- Fraction of text within anchors,
- The size of the anchors,
- Traction of links that are intra-site, and;
- The ratio of visible characters to HTML content
