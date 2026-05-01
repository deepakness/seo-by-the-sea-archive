---
title: "Duplicate Content Issues and Search Engines"
source_url: "https://www.seobythesea.com/2006/06/duplicate-content-issues-and-search-engines/"
slug: "duplicate-content-issues-and-search-engines"
date_published: "2006-06-11T12:22:34+00:00"
date_modified: "2020-07-30T20:58:17+00:00"
author: "Bill Slawski"
---

## Duplicate Content Filtered Out of Search Results

There are many reasons why pages don’t show up in search engine results.

One place where this is true is when the content at more than one URL, is almost the same at each location it is seen at by a search engine.

Some duplicate content may cause pages to be filtered when served by search engines. There is no guarantee which version of a page will show in results and which won’t. Duplicate content may also lead to some sites and pages not be indexed at all or may result in a search engine crawling program stopping the indexing of the pages of a site because it finds too many copies of the same pages under different URLs.

There are a few different reasons why search engines dislike duplicate content. One is that they don’t want to show the same pages in their search results. Another is that they don’t want to spend resources indexing pages that are almost the same.

I’ve listed some areas where duplicate content exists on the web or seems to exist to crawling and indexing programs. I’ve also included a list of some patents and some papers that discuss duplicate content issues on the web.


## Where search engines see duplicate content

*1. Product descriptions from manufacturers, publishers, and producers copied by a number of different distributors in large ecommerce sites*

When more than one site sells the same products, they often use text from the manufacturer or producer of the product as product descriptions on their pages. Add to that the fact that the name of the product and the name of the creator, manufacturer, writer, or recording artist may also be on the page, there may be a considerable amount of content showing up on pages that aren’t related to each other but offer the same products.

*2. Alternative print pages*

Many sites offer the same content on different pages formatted for printers. If the site owner doesn’t use robots.txt disallow statement or a meta “noindex” tag on these pages to keep search engines from indexing them, they may appear in search engine indexes.

*3. Pages that reproduce syndicated RSS feeds through a server side script*

When RSS feeds are shown on pages besides pages of the site where they first appeared, and that text shows using a server-side include that presents the information as HTML on the pages, then it could appear as duplicate content on those other pages. When feeds use client-side includes, such as javascript, it is much less likely that a search engine will pick up that content and index it.

*4. Canonicalization issues, where a search engine may see the same page as different pages with different URLs*

Because search engines index URLs rather than pages, it’s possible for them to index the same pages presented in different ways. A “canonical URL” is one determined to be the “best” URL for a page, but search engines don’t always recognize that the same page is being presented in many ways. For example, the following URLs may all point to the same page:

http://www.example.com
https://www.example.com
http://www.example.com/index.htm
https://www.example.com/index.htm
http://example.com
https://example.com
http://example.com/index.htm
https://example.com/index.htm

*5. Pages that serve session IDs to search engines, so that they try to crawl and index the same page under different URLs*

Some sites serve information in their URLs to track visitors as they go through the pages of a site. If this type of tracking information is provided to search engine crawling programs, then those programs may index the same page under different URLs, repeatedly. See, for instance, http://www.sears.com

As the [Google Webmaster guidelines](https://support.google.com/webmasters/answer/35769?hl=en) tell us:


> Allow search bots to crawl your sites without session IDs or arguments that track their path through the site. These techniques are useful for tracking individual user behavior, but the access pattern of bots is entirely different. Using these techniques may result in incomplete indexing of your site, as bots may not be able to eliminate URLs that look different but point to the same page.

*6. Pages that serve multiple data variables through URLs, so that they crawl and index the same page under different URLs*

Some sites show different data variables in their URLs. In this instance, an example shows this well:

http://www3.jcpenney.com/jcp/Products.aspx?
DeptID=469
&CatID=29841
&CatTyp=DEP
&ItemTyp=G
&GrpTyp=SIZ
&ItemID=0e273be
&ProdSeq=2
&Cat=tees+%26+tanks
&Dep=
&PCat=
&PCatID=28237
&RefPage=ProductList
&Sale=
&ProdCount=32
&RecPtr=
&ShowMenu=
&TTYP=
&ShopBy=0
&RefPageName=CategoryAll.aspx
&RefCatID=28237
&RefDeptID=469
&Page=1
&CmCatId=469|28237|29841

A search engine can try to index the page above with all of those data variables in different orders.

*7. Pages that share too many common elements, or where those are very similar from one page to another, including title, meta descriptions, headings, navigation, and text that is shared globally.*

This is a frequent problem for large eCommerce sites that insist on having their brand name, and information about that brand in every title on every page of their site, and use content management systems that don’t allow them to have distinct meta description tags for each page of their site.

*8. Copyright infringement*

When someone copies the content on your site, it may cause your pages to be filtered out of search results (I haven’t seen this happen and wonder if it might not.) A site like [copyscape](http://www.copyscape.com/) may help you find some of these pages. Searching for unique strings of text on your pages, in quotation marks, may help uncover others.

*9. Use of the same or very similar pages on different subdomains or different country top level domains (TLDs)*

Using different subdomains and different top-level domains for the pages of your organization may be a nice way to create different brands, or focus on different kinds of content, services, or products. But duplicate content from one to another may create the risk that some of your pages don’t get indexed by search engines, or are filtered out of search results. Again, from the [Google Webmaster Guidelines](https://support.google.com/webmasters/answer/35769?hl=en):


> Don’t create multiple pages, subdomains, or domains with substantially duplicate content.

*10. Article syndication*

Many people create articles, and offer them to others as long as a link and attribution to the source is made. The risk here is that the search engines may filter out the original article and show one of the syndicated copies.

*11. Mirrored sites*

Mirrors of sites used to be very popular, for when a site became so busy that people could use an alternative source to get to the same information or content. Larger sites that might have used mirrored sites in the past often use multiple servers and load balancing these days, but mirrors do still exist (and the Wikipedia has a nice article about [mirrors](https://en.wikipedia.org/wiki/Mirror_(disambiguation)#Computing) explaining why). Search engines may be able to recognize duplicated URL structures of mirrored sites and may ignore some mirrored sites that they find.


## Patents Involving Duplicate Content

- [Utilizing information redundancy to improve text searches](https://patents.google.com/patent/US7051014B2/en)
- [Detecting duplicate and near-duplicate files](https://patents.google.com/patent/US6658423B1/en)
- [Detecting query-specific duplicate documents](https://patents.google.com/patent/US6615209B1/en)
- [Method for clustering closely resembling data objects](https://patents.google.com/patent/US6119124A/en)
- [Method for indexing duplicate database records using a full-record fingerprint](https://patents.google.com/patent/US5745900A/en)
- [Method and apparatus for detecting and summarizing document similarity within large document sets](https://patents.google.com/patent/US6240409B1/en)
- [Method and apparatus for finding mirrored hosts by analyzing urls](https://patents.google.com/patent/US6286006B1/en)
- [Method and apparatus for finding mirrored hosts by analyzing connectivity and IP addresses](https://patents.google.com/patent/US6487555B1/en)
- [Method for identifying near duplicate pages in a hyperlinked database](https://patents.google.com/patent/US6138113A/en)
- [Method for indexing duplicate records of information of a database](https://patents.google.com/patent/US6230158B1/en)


## Papers About Duplicate Content

- [Indexing Shared Content in Information Retrieval Systems](http://fontoura.org/papers/edbt2006.pdf) (pdf), A. Broder, N. Eiron, M. F. Fontoura, M. Herscovici, R. Lempel, J. McPherson, R. Qi, E. Shekita, 10th International Conference on Extending Database Technology (EDBT’2006), Munich, Germany, 2006.
- [Detecting Phrase-Level Duplication on the World Wide Web](https://www.microsoft.com/en-us/research/publication/detecting-phrase-level-duplication-on-the-world-wide-web/) (pdf), D. Fetterly, M. Manasse, M. Najork, SIGIR 2005: 170-177.
- [Mirror, Mirror on the Web: A Study of Host Pairs with Replicated Content](http://www.ambuehler.ethz.ch/CDstore/www8/data/2147/pdf/pd1.pdf), Bharat, K., Broder, A.Z., In Proceedings of the 8th International World Wide Web Conference (WWW). (1999) 501-512.
- [Finding near-replicas of documents on the web](https://www.semanticscholar.org/paper/Finding-Near-Replicas-of-Documents-and-Servers-on-Shivakumar-Garcia-Molina/184c25ea0ef54f8e25aa063a1181d68614ef46ec), N. Shivakumar,H. Garcia-Molina: Finding near-replicas of documents on the web. Proceedings of Workshop on Web Databases (WebDB’98).


## Duplicate Content Conclusions

If you are having difficulties with the pages of your site showing up in search engines, or if they show up as supplemental results or they seem to be disappearing from the index of a search engine, this is one of the areas to explore fully to see if duplicate content issues are harming the pages of your site.
