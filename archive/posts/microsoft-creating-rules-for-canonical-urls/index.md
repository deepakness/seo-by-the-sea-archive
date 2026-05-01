---
title: "Microsoft Creating Rules for a Canonical URL"
source_url: "https://www.seobythesea.com/2006/09/microsoft-creating-rules-for-canonical-urls/"
slug: "microsoft-creating-rules-for-canonical-urls"
date_published: "2006-09-29T12:36:49+00:00"
date_modified: "2020-07-07T09:07:17+00:00"
author: "Bill Slawski"
---

There may be more than one URL for a single page on a website, which can cause problems when a search engine attempts to crawl and index pages on that site.

If the search engine can figure out some rules on how these different versions of URLs for a page come about, and identify only one version of a URL (a canonical URL) to the index for the different versions, then it can save time and processing power by only crawling and indexing that one version.

A “canonical” version of a URL would be a standard single version, when there may be more than one way to represent the URL (or address) of a page.


> Web crawlers can download only a finite number of documents or web pages in a given amount of time. Therefore, it would be advantageous if a web crawler could identify URL equivalence patterns in multiple different URLs that reference substantially identical pages and download only one document, as opposed to downloading all the substantially identical documents addressed by the multiple different URLs.

The above quote comes from a new patent filing from Microsoft, which looks to make it easier and less computationally expensive to crawl the web and to avoid identical indexing pages, or almost identical.

[Systems and methods for inferring uniform resource locator (URL) normalization rules](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060218143%22.PGNR.&OS=DN/20060218143&RS=DN/20060218143)
Invented by Marc Alexander Najork
Assigned to Microsoft
US Patent Application 20060218143
Published September 28, 2006
Filed: March 25, 2005

Abstract


> Different URLs that reference the same web page or other web resources are detected and that information is used to only download one instance of a web page or web resource from a web site. All web pages or web resources downloaded from a web server are compared to identify which are substantially identical. Once identical web pages or web resources with different URLs are found, the different URLs are then analyzed to identify what portions of the URL are essential for identifying a particular web page or web resource, and what portions are irrelevant. Once this has been done for each set of substantially identical web pages or web resources (also referred to as an “equivalence class” herein), these per-equivalence-class rules are generalized to trans-equivalence-class rules. There are two rule-learning steps: step (1), where it is learned for each equivalence class what portions of the URLs in that class are relevant for selecting the page and what portions are not; and step (2), where the per-equivalence-class rules constructed during step (1) are generalized to rules that cover many equivalence classes. Once a rule is determined, it is applied to the class of web pages or web resources to identify errors. If there are no errors, the rule is activated and is then used by the web crawler for future crawling to avoid the download of duplicative web pages or web resources.

The document notes that it doesn’t cover all aspects of how substantially similar pages may be handled by a crawler but is an introduction to the topic, which would allow the search engine to index only one instance of a document or web resource from a site, or a canonical URL for that page.

Some tests that might be involved in determining whether two pages are substantially similar:

- Shingling,
- Check-summing,
- Lexical comparison,
- Others

Details about these methods weren’t described, and aren’t the focus of the document, though it’s important to note that these comparisons look at the documents themselves, and then when substantially identical pages are found, this process starts looking at the URLs of those similar pages to see what it can do with those. It looks to see:

1. Are the pages completely identical?
2. Whether the non-markup words (as opposed to the HTML markup) on two pages are identical, or;
3. Whether two pages are very similar (e.g., share a predetermined percentage of their content, such as 95% of their content).

When identical, or nearly identical, pages with different URLs are located, the different URLs are analyzed to identify what portions of the URL are essential for identifying a particular web resource, and what portions are irrelevant.

This is done to see if rules can be developed for a site that can be applied to other pages on the site or server. These are tested with the other pages on that site or server, and if there are no errors, then the rules are used in the future by the web crawler.

The URLs of the web pages that have been determined to be substantially identical are then analyzed for recurring patterns.

**Example from the Patent Application**

*The following URLs all refer to the same page:*

http://www.marketwatch.com/news/yhoo/story.asp?source=blq/yhoo&siteid=yhoo&dist=yhoo&guid=%7BD426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?source=blq/yhoo&siteid=yhoo&dist=yhoo &guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?siteid=yhoo&dist=yhoo&.uid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?source=blq/yhoo&dist=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?source=blq/yhoo&siteid=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?source=blq/yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?siteid=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?dist=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?source=blq/yhoo&siteid=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?source=blq/yhoo&dist=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?siteid=yhoo&dist=yhoo&puid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/yhoo/story.asp?guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?source=blq/yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?siteid=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?dist=yhoo&guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

http://www.marketwatch.com/news/story.asp?guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F16C8%7D

*Identifying a pattern*

The URLs have many components. Some of them need to identify the page, and others are optional and are related to co-branding.

If you were to put the optional components into square brackets, the URLs could be described as follows

http://www.marketwatch.com/news/[yhoo/]story.asp?[source=blq/yhoo&]- [siteid=yhoo&][dist=yhoo&]guid=%7B5D426EE8%2DBB62%2D457C%2DA82E%2D05EE3F6F- 16C8%7D.

Patterns like this tend to differ from site to site, so rules have to be made per each site, rather than all sites in general.

*Creating a normalization rule*

A URL normalization rule may be able to be determined based on the patterns so that substantially similar pages will only be identified by one canonical URL. Two URLs that have been transformed to the same normalized URL should refer to substantially identical web pages.

*Testing the normalization rule*

The next step would be to test the rule.

Testing may involve, for example, applying the rule to various URLs, and then determining if the ones predicted to have substantially identical content are, in fact, substantially identical.

If the test fails for any URL, the rule is rejected.


> If the test succeeds for more than a certain threshold number of URLs and does not fail for any URL, the rule is marked as accepted and subsequently used to normalize URLs processed by the web crawler. The rule may be applied to subsequent web page crawling, to reduce the number of substantially identical pages that are downloaded.

Shingling is one of many methods of determining whether or not the pages are substantially identical.

The patent filing points to this paper to help describe how shingling happens: [On the Evolution of Clusters of Near-Duplicate Web Pages](https://www.microsoft.com/en-us/research/publication/on-the-evolution-of-clusters-of-near-duplicate-web-pages/) (pdf) Marc Najork, who is the inventor listed on this patent, is one of the authors of that paper.


> An example shingling algorithm may reduce each document to a vector of 15 “megashingles”; two documents that are 95% similar have a 90% probability of having at least one megashingle in common, while documents that are merely 80% similar just have a 2.6% probability of having one or more megashingles in common. Shingling provides a convenient way of testing whether two documents are near identical.

Other possible methods:

1. Using the Unix tool “diff” ,
2. Computing a hash value (e.g., an MD5 checksum or a Rabin fingerprint) of each page downloaded from a web server,
3. Reducing each page to a set of “rare” words occurring in that page, and matching those across pages, and;
4. Other techniques.

The patent goes into a very detailed description of how substantially similar pages could be identified, and then how the URLs of those pages could be compared to come up with patterns, and then rules for one canonical URL.

**Conclusion**

I wrote about a similar effort described in a paper not long ago, in the post [Solving Different URLs with Similar Text (DUST)](https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/). That describes an algorithm that tries to identify substantially similar pages at different URLs on a site and was co-authored by Ziv Bar-Yossef, who is now at Google.

Ideally, a site owner or builder will try to reduce or eliminate the possibility that a page can show up under more than one URL on the same site as much as possible. In an ideal world, that is the best practice. On one fairly complex site I worked upon, due to a quirk of the content management system being used, a single page was indexed by Google over 15,000 times under different URLs. That’s not something you want happening with your site.

While efforts like this to identify a single canonical URL for a page, when it has more than one URL pointing to it is helpful, it puts the control over which URL is deemed canonical into the hands of the search engine, and an automated program. If, as a site owner or builder, you avoid the need for a search engine to determine which URL is canonical for a page, you get to control which version of URL is used for a page (if a search engine accepts your canonical URL as the right one for a page.)
