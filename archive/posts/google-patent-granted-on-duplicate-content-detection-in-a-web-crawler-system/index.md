---
title: "Google Patent Granted on Duplicate Content Detection in a Web Crawler System"
source_url: "https://www.seobythesea.com/2009/12/google-patent-granted-on-duplicate-content-detection-in-a-web-crawler-system/"
slug: "google-patent-granted-on-duplicate-content-detection-in-a-web-crawler-system"
date_published: "2009-12-07T12:59:45+00:00"
date_modified: "2021-07-05T13:19:10+00:00"
author: "Bill Slawski"
---

## Duplicate Content Identification Is a Core Function of Search

Some patents from the search engines provide detailed looks at how those search engines might perform some of the core functions behind how they work. By “core functions,” I mean some of the basics such as crawling pages, indexing pages, Identifying duplicate content, and displaying results to searchers.

For example, last December, I wrote a post titled [Google Patent on Anchor Text and Different Crawling Rates](https://www.seobythesea.com/2007/12/google-patent-on-anchor-text-and-different-crawling-rates/). It was about a Google patent filed in 2003, which gave us a look at how the search engine crawled web pages and collected the web addresses, or URLs, of pages that it came across.

The patent covered in this post was [Anchor tag indexing in a web crawler system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,308,643.PN.&OS=pn/7,308,643&RS=PN/7,308,643) It revealed how Google might determine how frequently it might visit or revisit certain pages, including crawling some pages daily, and others even on a real-time or near real-time basis – every few minutes in some cases. While there’s been a lot of discussion in the past few months online about real-time indexing of web pages, it’s interesting to note that the patent was originally filed in 2003.

That older patent also covered topics such as how a search engine crawler might handle temporary (302) redirects differently than permanent (301) redirects, by noting and sometimes following the temporary redirects immediately (to decide as to what page to show in search results), and collecting the URLs associated with permanent redirects and putting them into a queue where they might be addressed later – up to a week or more later.

It discussed how text surrounding links and anchor text found during the crawling of a page might be used as annotations for those links and detailed some of the search engines attributes when determining whether to associate that text with nearby links.

The patent also covered another significant topic – identifying duplicate content that it might come across when crawling web pages and identifying the best address, or canonical URL for the content. This is very important for a search engine – if duplicate content is found on multiple pages, a search engine may decide that it doesn’t want to spend time and resources indexing and displaying more than one source that covers the same content.

A related Google patent was granted this week to detail how the search engine might also handle duplicate content. It shares a couple of inventors with the patent on anchor text, and was filed on the same day. We’re told an early part of the description for this newly granted patent the reason for why Google might look for duplicate content during the crawling of web pages:


> Meanwhile, it is becoming more and more common that there are many duplicate copies of a document sharing identical content, even though they may be physically stored at different web servers.
>
> On the one hand, these duplicate copies of documents are welcome because they reduce the possibility that shutting a one web server will render the documents on the web server unavailable. Still, on the other hand, they can significantly increase the workload and lower the efficiency of a search engine on both its front end and back end, if not dealt with appropriately.
>
> For example, on the back end of a search engine, if duplicate content is treated as different documents not related to one another in terms of their content, this would cause the search engine to waste resources, such as disk space, memory, and/or network bandwidth, to process and manage the duplicate content.
>
> On the front end, retaining duplicate documents would cause the search engine to have to search through large indices and to use more processing power to process queries. Also, a user’s experience may suffer if duplicate content crowds out diverse content that should be included in the search results.
>
> For these reasons, it would be desirable to develop a system and method of detecting duplicate content crawled by a search engine before the search engine makes any further effort to process these documents.
>
> It would also be desirable to manage these duplicate content efficiently so that the search engine can efficiently furnish the most appropriate and reliable content when responding to a query whose result set includes any of these duplicate documents.

The duplicate content patent is:

[Duplicate document detection in a web crawler system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,627,613.PN.&OS=pn/7,627,613&RS=PN/7,627,613)
Invented by Daniel Dulitz, Alexandre A. Verstak, Sanjay Ghemawat, Jeffrey A. Dean
Assigned to Google
US Patent 7,627,613
Granted December 1, 2009
Filed: July 3, 2003

Abstract


> Duplicate documents are detected in a web crawler system. Upon receiving a newly crawled document, a set of documents, if any, sharing the same content as the newly crawled document is identified. Information identifying the newly crawled document and the selected set of documents is merged into information identifying a new set of documents.
>
> Duplicate documents are included and excluded from the new set of documents based on a query-independent metric for each such document. A single representative document for the new set of documents is identified following a set of predefined conditions.

The description of the patent shares many details disclosed in the earlier granted patent on how Google might handle crawling and anchor text, describing, for instance, how some URLs for web pages are crawled periodically in a round-robin format over days or weeks or longer, some URLs are crawled daily. Other URLs are crawled multiple times during the day.

The duplicate document content patent doesn’t focus too much upon anchor text. Instead, it provides more details on how a content filter from the search engine might work with a duplicate content server, or Dupserver as it’s called in the patent. The first step that the search engine may take after receiving a newly crawled page is to consult the Dupserver to see if it is a duplicate content of another document, and if it is, to determine which version might be the canonical version.

This patent likely doesn’t cover all types of duplicate content that Google might find – many pages containing duplicate content may differ in many ways, including very different templates filled with boilerplate content such as headers and footers and sidebars that change from one URL to another. Or pages that may contain some duplicate content and some unique content, or duplicate content from more than one source. The patent does define the kind of duplicate content that it does cover, and also tells us about how it might handle redirects and duplicate content associated with those:


> Duplicate documents are documents that have substantially identical content, and in some embodiments, wholly identical content, but different document addresses.
>
> Accordingly, there are at least three scenarios in which a web crawler encounters duplicate content:
>
> Two pages, comprising any combination of a regular web page(s) and temporary redirect page(s), are duplicate content if they share the same page content but have different URLs;
>
> Two temporary redirect pages are duplicate content if they share the same target URL but have different source URLs; and
>
> A regular web page and a temporary redirect page are duplicate content if the URL of the regular web page is the target URL of the temporary redirect page or the content of the regular web page is the same as that of the temporary redirect page.
>
> A permanent redirect page is not directly involved in duplicate content detection because the crawlers are configured not to download the target page’s content. However, a regular web page or a temporary redirect page may contain a URL in its content, which happens to be the source URL of a permanent redirect page. Therefore, besides detecting duplicate content, the Dupserver is also tasked with the job of replacing source URLs embedded in the content of a regular web page or a temporary redirect page with the corresponding target URLs of permanent redirects known to (i.e., stored in) the Dupserver.

The patent details some of the different duplicate content detection methods that it might use, such as taking fingerprints of the content found on pages to match content from one page to another, and how that information might be stored within content fingerprint tables, and the selection of canonical URLs for content.

A rapid reading of the patent might lead someone to think that the URL with the highest PageRank might be the version chosen as the canonical URL for that duplicate content. Still, the patent tells us that sometimes “a canonical page of an equivalence class is not necessarily the document that has the highest score (e.g., the highest page rank or another query-independent metric).”

We are given one example of this – Google might log all of the pages that it finds with duplicate content. When it comes across a new duplicate, it might look at the PageRank (or some other query independent ranking), and see if that new URL has a PageRank that is higher by some significant margin before it might name the new URL as the canonical URL. Other factors may be taken into consideration as well, though the patent doesn’t explicitly name them.

**Duplicate Content Conclusion**

Even though this patent on duplicate content, and the related patent on anchor text were filed more than 6 years ago, they are worth spending some time with because of the way that they lay out in detail the ways that Google might crawl web pages, and collect and process information from those pages. If you are interested in how search engines work, these two documents provide some interesting insights into issues during the crawling of web pages, such as:

- How Google may handle temporary and permanent redirects
- How Google determines different crawling rates for pages
- How Google may decide which URL with duplicate content might be considered the Canonical URL
- How to text around links might be chosen to act as annotations for those links
- How anchor text pointed to duplicate documents might be associated with the canonical version of the document

I’ve written a number of posts on duplicate content before:

- [Google to Help Content Creators Find Unauthorized Duplicated Text, Images, Audio, and Video?](https://www.seobythesea.com/2008/11/google-to-help-content-creators-find-unauthorized-duplicated-text-images-audio-and-video/)
- [Same-Site Duplicate Pages at Different URLs](https://www.seobythesea.com/2008/04/same-site-duplicate-pages-at-different-urls/)
- [New Google Process for Detecting Near Duplicate Content](https://www.seobythesea.com/2008/02/new-google-process-for-detecting-near-duplicate-content/)
- [Google Omits Needless Words (On Your Pages?)](https://www.seobythesea.com/2008/02/google-omits-needless-words-on-your-pages/)
- [Microsoft Explains Duplicate Content Results Filtering](https://www.seobythesea.com/2006/11/microsoft-explains-duplicate-content-results-filtering/)
- [Solving Different URLs with Similar Text (DUST)](https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/)
- [Duplicate Content Issues and Search Engines](https://www.seobythesea.com/2006/06/duplicate-content-issues-and-search-engines/)
