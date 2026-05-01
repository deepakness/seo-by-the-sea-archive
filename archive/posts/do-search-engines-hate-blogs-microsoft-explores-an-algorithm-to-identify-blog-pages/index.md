---
title: "Do Search Engines Hate Blogs? Microsoft Explores an Algorithm to Identify Blog Pages"
source_url: "https://www.seobythesea.com/2007/12/do-search-engines-hate-blogs-microsoft-explores-an-algorithm-to-identify-blog-pages/"
slug: "do-search-engines-hate-blogs-microsoft-explores-an-algorithm-to-identify-blog-pages"
date_published: "2007-12-22T05:45:50+00:00"
date_modified: "2020-06-24T07:36:09+00:00"
author: "Bill Slawski"
---

A new Microsoft patent application has some interesting statements within it about blogs. First, it tells us of the value of blogs and blogging:


> Blogging has grown rapidly on the internet over the last few years. Weblogs, referred to as blogs, span a wide range, from personal journals read by a few people, to niche sites for small communities, to widely popular blogs frequented by millions of visitors, for example.
>
> Collectively, these blogs form a distinct subset of the internet known as blogspace, which is increasingly valuable as a source of information for everyday users.

Then it goes on to tell us that search engines work to limit results from blogs in searches, and the difficulties that search engines sometimes have in identifying blogs:


> **Search engines are increasingly implementing features that restrict the results for queries to be from blog pages.***
>
> The website www.blogcensus.net gives information on an effort to index blogs, though this was discontinued in late 2003. At that time, the site stated that it had indexed 2.8 million blogs.
>
> Currently, Technorati claims to be tracking 43.2 million blog sites. It is currently difficult for search engines to identify blog pages, regardless of the source of the content in a blog page.

* my emphasis

The patent filing is:

[Identifying a web page as belonging to a blog](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070294252.PGNR.&OS=dn/20070294252&RS=DN/20070294252)
Inventors: Dennis Craig Fetterly and Steve Shaw-Tang Chien
United States Patent Application 20070294252
Published December 20, 2007
Filed: June 19, 2006

Abstract


> A machine learning classifier is used to determine whether a web page belongs to a blog, based on many characteristics of web pages (e.g., presence of words such as “permalink”, or being hosted on a known blogging site). The classifier may be initially trained using human-judged examples. After classifying web pages as being blog pages, the blog pages may be further identified or categorized as top-level blogs based on their URLs, for example.

In simplest terms, this patent application involves the use of a program that learns as it classifies pages either as a blog or a non-blog.

Some of the things that it might look at while doing that can include:

(1) Where the page is hosted, such as MSN Spaces, Blogspot, Yahoo 360, LiveJournal, Typepad, Xanga, MySpace, Multiply, or Wunderblogs or some other known blog hosting domain,

(2) Words and phrases from the page, such as “permalink”, or “blogroll”, or “powered by”, or “trackback”, “comment”, “comments”, “blogad”, and “posted at” or similar terms, including non-English ones, that are commonly found on the pages of blogs.

(3) The targets of outgoing links in the web page, such as links to WordPress.org, or movabletype.com, or blogger.com;

(4) What shows up in the URL for the page that might indicate that it is a blog, such as “http://www.example.com/blog/”;

(5) if the web page contains an ATOM feed or an RSS feed.

Other characteristics of pages may also be looked at.

The patent filing also attempts to identify or categorize whether a page that it believes to be from a blog is the “top-level blog” or the main page for the blog, based upon the URL used. There’s no rationale given in the document for that determination.

**Conclusion**

I’m wondering if the two authors of this document have ever blogged before based upon the awkwardness of their language in writing about blogs. I searched a little for blogs from them but didn’t find any. A blog home page as the “top-level blog”? It might do them some good to follow Googler [Matt Cutts](https://www.mattcutts.com/blog/) lead, and actually blog for a while.

I hadn’t seen any statements from a search engine before, whether Google or Yahoo or Microsoft or Ask, that explicitly stated that they were working to “restrict the results for queries to be from blog pages.” Perhaps it wouldn’t look good for a search engine if all of the top results for many queries were all from blog pages, instead of pages that are less search engine friendly or less relevant or both.

If I were to take this site, and strip out common blog terms, remove the link to wordpress.com, rewrite my URLs so that they didn’t follow a typical WordPress pattern, and remove my feeds, would it be more or less relevant for the terms that it ranks for in search results? Should the relevancy of a page be determined by whether or not it is a blog post?

Do search engines hate blogs?

It’s really difficult to tell. I don’t think that any blogger should start removing indications that a site is a blog, though.

Most issues I’ve seen involving how a search engine might rank a blog usually appears to stem from other problems, for instance, duplicated content across multiple URLs on the blog on pages for archives, categories, post pages, feeds, and main pages; whether page titles and meta descriptions are unique enough; poor use of heading elements, and other impediments.
