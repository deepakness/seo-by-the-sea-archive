---
title: "Which Sections of Your Web Pages Might Search Engines Ignore?"
source_url: "https://www.seobythesea.com/2008/07/which-sections-of-your-web-pages-might-search-engines-ignore/"
slug: "which-sections-of-your-web-pages-might-search-engines-ignore"
date_published: "2008-07-16T09:46:58+00:00"
date_modified: "2018-02-07T12:01:41+00:00"
author: "Bill Slawski"
---

As a webmaster, when you put a page up on the web, there may be parts of that page that you may not want to have indexed by a search engine.

Many web pages contain information that isn’t unique to each page, such as the navigation for a site, copyright notices, advertising, links to other sites such as blog rolls, and other sections that may not contain information about the main topic of the page itself.

**Yahoo’s Robots-Noindex Classes**

In May of 2007, Yahoo made a post on the Yahoo Search Blog about how webmasters could let the search engine know that content in certain sections of pages shouldn’t be returned in search results to searchers, titled Introducing Robots-Nocontent for Page Sections.

The Yahoo Search Help pages provide details on how to assign a class of “robots-noindex” to HTML elements, so that the content inside of those elements aren’t recalled by the search engine in response to a search, in “How do I mark web page content that is extraneous to the main unique content on the page?” (No longer available)

**Yahoo Patent Filing on No-Recall Sections**

A Yahoo patent application was published last week which looks more deeply into how the search engine would follow directions not to recall sections of pages pursuant to “robots-nonindex” tags.

It also describes how the search engine might decide on its own that some sections of web pages shouldn’t be returned to searches regardless of whether we use the “robots-noindex” or not, after they break a page down into sections, and analyze the content of those sections.

The Yahoo filing provides a way for it to rate different sections of a page against a main topic for a page, and designate some sections as no recall sections, that won’t be returned in a search for the content that they contain.

[Method for improving quality of search results by avoiding indexing sections of pages](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080168053.PGNR.&OS=dn/20080168053&RS=DN/20080168053)
Invented by Priyank S. Garg, Amit J. Basu, Timothy M. Converse
US Patent Application 20080168053
Published July 10, 2008
Filed January 10, 2007

Abstract


> A method and apparatus for improving search results is provided. The method works by delineating sections of a document that are not relevant to the main content. The document content is subjected to ranking analysis in entirety. In response to a query results are recalled omitting terms included in the no-recall sections.
>
> Terms in the no-recall sections are not used in titles and abstracts of the results. The results are ordered at least in part by the rankings attributed to the identified no-recall sections.

**An Overview of the No-Recall Sectioning Process**

Some of the method involved in the patent filing:

1) When a search crawling program visits a web page, it might pay attention to the structure of the page, breaking it down into sections.

2) The crawling program may identify sections to ignore, and to not index in the search engine and present (recall) to searchers.

3) Sections to be ignored may be referred to as “no-recall” sections, and sections of pages that are indexed may be referred to as “recall” sections.

4) The search engine crawling program may ignore sections of pages that have been marked by webmasters who have used a “robots-nocontent” class in an HTML tag around that section, such as a “div” or a “span” or other types of HTML elements that have opening and closing tags, such as paragraphs and other sections.

5) The search engine crawling program may also ignore sections of pages that may have been identified by analyzing section content rather than “robots-nocontent” classes.

6) Terms inside those no-recall sections do not contribute to the document term frequency counts in the search engine index, so words in those no-recall sections aren’t considered when determining which words a page may be relevant for in ranking a page for search queries.

The content in those no-recall sections are also not used for recalling the pages in response to search engine queries.

7) While the information in the no-recall sections are ignored in search results, it is included as input to the analysis of pages that can affect such things as a page’s ranking.

8 ) Links within no-recall sections may be followed by the search crawling program to discover new content.

9) A page may also be analyzed for the amount of advertisements or other features that it contains, even though those may have been placed in no-recall sections using a “robots-nocontent” section by a webmaster.

10) The reason why Yahoo might explore what is contained in these no-recall sections is to keep people from including search engine spam in those sections. For example, a page that contains a very large amount of advertisements or low quality links, even within no-recall sections, might be identified and “ranked accordingly.”

***Example of the Use of a No-Recall Tag***

A webmaster uses a <div class=”robots-noindex”> tag around a pages copyright notice, navigation pane section, links to related blogs, and an ad section.

Inside the ad section, the term “shoes” appears, and it doesn’t show up anywhere else on the page. The page will not be recalled by the search engine on a search query for the word “shoes”.

If the word “shoes” is included in other portions of that page, then the page will be recalled for the query.

While content within a section marked by a class=”robots-noindex” in a HTML element is not indexed by a search engine index, when the page is recalled by a search engine for a search query, the element is considered for spam and relevancy analysis, with attributes in all of the sections of the page, such as “links”, frequency of terms, coloring, font, etc.

**When Yahoo Determines No-Recall Sections Itself**

Webmasters can mark sections of pages so that content in those sections aren’t returned for searches for content contained within no-recall sections. The search engine may decide to designate some sections of pages as no-recall sections on its own.

Here are the steps involved in this process:

1) The search engine parses through the HTML code of a page to determine various logical sections.

2) The content within each section is analyzed , by creating an abstract document model using a number of possible approaches. Attributes are looked at in that analysis, such as ‘the number, frequency and order of appearance of terms, fonts, and colors.” In addition, outgoing links within different sections are also analyzed, reviewing such things as “where the links lead, the link text and link quantity and quality.”

3) The sections of a page are rated based upon how relevant they may be to the main topic of the page, using a number of possible methods.

4) Some other methods may be used to identify a no-recall section, such as frequency of change of the contents of a section, compared to the contents of the rest of the page. For instance, a section for ads may change on every visit to a page, while the rest of the sections don’t change at all. Some sections may be the same on every page of a site, such as the copyright and title sections.

5) Sections with ratings that indicate they are no-recall sections are designated by the search engine, as well as the sections marked with a “robots-noindex” tag by webmasters.

**Conclusion**

I’ve written previously about how Yahoo might break down a page into sections, and attempt to find the “most important section” of that page in [The Importance of Page Layout in SEO](https://www.seobythesea.com/2008/03/the-importance-of-page-layout-in-seo/). This newer patent application shows us how a search engine might take an analysis like that, and use it to ignore some of the sections of pages.

When you put your pages together, keep in mind that a search engine might only be indexing some parts of your pages, regardless of whether you use something like a “robots-noindex” tag around some of those sections or not.
