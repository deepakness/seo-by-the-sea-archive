---
title: "IBM and Shadow Pages"
source_url: "https://www.seobythesea.com/2006/03/ibm-and-shadow-pages/"
slug: "ibm-and-shadow-pages"
date_published: "2006-03-31T13:49:55+00:00"
date_modified: "2021-09-17T14:10:37+00:00"
author: "Bill Slawski"
---

International Business Machines appears to be embracing search engine optimization in a big way. That’s a positive sign from a company seen as a leader in many areas of information technology. A new patent application and a couple of new articles from IBM point towards a growing commitment towards helping people build websites that are easier for people to find through search engines.


## New articles on SEO

The first two articles in the series were written by L. Jennette Banks, an organic search optimization expert for IBM. The last two are by Mike Moran, IBM’s Manager of Site Architecture, and Bill Hunt, the President, and CEO, Global Strategies International, LLC. You may have seen those two names together before if you’ve conducted some research on books about SEO. They are co-authors of a book on the subject – “Search Engine Marketing, Inc.: Driving Search Traffic to Your Company’s Web Site” – and they’ve received many positive reviews for their joint publication.

Their articles are thoughtful and well written:

[Search engine optimization basics, Part 3: Get your Web pages into search indexes](http://web.archive.org/web/20130605121607/http://www.ibm.com:80/developerworks/web/library/wa-seo3/index.html)

This article focuses on the spidering of sites and some possible impediments to having a search engine crawl your site so that it can be indexed. In addition, they provide some strategies to make it more likely that the major search engines will index your site.

[Search Engine Optimization basics, Part 4: Improve search marketing for large sites](http://web.archive.org/web/20130605121625/http://www.ibm.com:80/developerworks/web/library/wa-seo4/index.html)

The final part of this series looks at some of the unique problems that large websites may face, from an operational stance (getting all the participants who work on a site to work together), through international issues (Global audiences, different languages, etc.), to a technical view (dynamic pages and updating content).


## Shadow pages patent application

It’s probably important to remember that this is just a patent application and not an indication that IBM will develop the technology described in the document. Nevertheless, if you are interested in the indexing of dynamic websites, it may be worth your time to delve into this topic further. It involves many issues that keep a large, dynamic site from getting indexed properly in the major search engines.

My jaw dropped when I saw the title of this new patent application from IBM. It has one of the more intriguing names that I’ve seen on a filing with the US Patent and Trademark Office in a while. “Shadow pages” is an interesting choice of words. It is very similar to a phrase Google uses to describe something the search engine warns about in their pages on [Information for Webmasters](https://support.google.com/webmasters/answer/35291?hl=en):


> What are the most common abuses a website owner is likely to encounter?
>
> One common scam is creating “shadow” domains that funnel users to a site using deceptive redirects. These shadow domains often will be owned by the SEO who claims to be working on a client’s behalf. However, if the relationship sours, the SEO may point the domain to a different site or even to a competitor’s domain. If that happens, the client has paid to develop a competing site owned entirely by the SEO.

Most search engine optimizers don’t use this type of tactic, but it does exist. Unfortunately, I don’t think that this was a well-thought-out name by the inventors of the process described in this document.

The idea behind the two technologies isn’t quite the same. The patent application from IBM aims to help provide search engine-friendly web addresses (URLs) for pages on a dynamic website and address some other issues that might hinder a site from getting indexed.

[URL mapping with shadow page support](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060070022%22.PGNR.&OS=DN/20060070022&RS=DN/20060070022)
Inventors: Walfrey Ng, Madeline Fok, Barbara Chow Yee Wong, Darl Andrew Crick, and Yong Yuan
Assigned to International Business Machines Corporation
US Patent Application 20060070022
Published on March 30, 2006
Filed: September 29, 2004

Abstract


> A technique for managing a web page having at least one URL supporting search engine preferred Universal Resource Locator (URL) links through URL mapping, and shadow page support is provided. Because a search engine crawler typically does not want to crawl through dynamic URLs, a search engine-friendly page would typically contain static URLs. Support is provided to obtain the web page containing at least one URL link and determine at least one URL link to be of a dynamic format, the converting the dynamic format of at least one URL link into a static format. Next, a shadow page of the web page is created, containing the static format link, and placed in the shadow page repository. A web application server may provide a URL mapping function to convert such a static URL to a desired dynamic format based on a provided mapping file. Web administrators or developers may then define an entry in such a mapping file for each URL key that needs to be mapped.

The document discusses some of the problems that a site owner might have when trying to optimize a dynamic site, including the use of “stop characters” (“?,” “&” “%” etc.)” in URLs, and methods that have been developed to rename the addresses of those web pages without stop characters.

In addition to describing difficulties in URL rewriting processes that can change the names of pages to look static, it also discusses creating static copies of dynamic pages and problems surrounding those. IBM refers to these static copies of pages as “shadow pages.”

I have some issues with some of the statements made in the patent application. For instance, this one:


> In most cases, web pages are designed with human visitors in mind and are not designed for web crawlers. Therefore pages designed to read by people may discourage off-web crawlers due to excessive graphics and huge page size.

I think it is possible to design pages that work well for both human visitors and search engines. Unfortunately, many developers who create content management systems do so without anticipating some of the basics of search engine optimization, such as using of search engine-friendly URLs to create unique page titles and meta tags for each site page.

Since graphics are not part of the code of a page that a spider crawls but are instead embedded within a page by image links (example – img src=”http://www.example.com/images/picture.jpg”), the size of graphics is immaterial to crawlers. However, I’m also not sure that pages with enormous sizes are in the best interest of human visitors either-or of a well-optimized site. Ideally, one would optimize a page around a specific topic. If the page became too large, you would break it down into subtopics on different pages that could be optimized to read the pages and search engines.

Regardless, search engines have shown that they will crawl larger pages now than they have in the past.

The new static pages constructed solely for search engines might strip out graphics and replace javascript-constructed links with text links. The document also hints at making multiple static pages for individual dynamic pages that may be “too large” for search engine crawlers.


## Shadow Pages Conclusion

This patent application seems to put the cart after the horse by trying to solve spidering issues after the fact for sites built in a manner that isn’t friendly to search engines and human visitors. But, the biggest selling point seems to be removing stop characters from URLs, and Google, Yahoo!, MSN, and Ask have all shown that they can index many dynamic sites with stop characters in the URLs.

While the patent application addresses that problem, there are many issues involving dynamic sites that are problems to those search engines that aren’t described in this approach by IBM.

It doesn’t address potential duplicate content issues in a dynamic site that can be solved by planning. It assumes that ugly URLs with stop characters are fine for human visitors but not for search engines. Search engine-friendly URLs are human-friendly, too.

It uses an example of a web address that is six directory levels deep (“http://hostname/webapp/wcs/stores/servlet/product.sub.–10001.sub.–1000- 1.sub.–10032.sub.—1”) as something that a search engine would like, even though search engineers have been stating publicly for a few years not to make directory levels more than 3 or four deep if at all possible.

MSN told us on one of their help pages in the past:


> Keep your URLs simple and static. Complicated or frequently changed URLs are difficult to use as link destinations. For example, the URL www.example.com/mypage is easier for MSNBot to crawl and for people to type than a long URL with multiple extensions.

In a question and answer session reported upon by Lee Odden, from last December’s Search Engine Strategies in Chicago, Tim Mayer (Director of Product Management Yahoo! Search Platform & Technology) also addressed this issue:


> Question: It’s been mentioned to keep query string values small, but how small?
>
> Tim (Yahoo): When a search engine looks at your site, URL length is an issue when it has many variables because it’s likely to be duplicated. Making URLs look static will make the search engine more confident it’s a good URL. Also, limit the number of directory levels to 3 or 4.

He said approximately the same thing in a “Meet the Crawlers” session at SES in New York in March of 2005.

The reason why this limit on directory levels is that there’s an assumption that the deeper a page is, in terms of directory levels, the less important it is. For a more technical explanation, see: [Efficient Crawling Through URL Ordering](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.55.6710&rep=rep1&type=pdf).

There may be a market for software that can help translate the URLs and pages of a site to a more search engine-friendly configuration. But, if you are starting out building a dynamic site, it’s recommended that you build single pages (as opposed to both dynamic pages and shadow pages) that are friendly to both search engines and human visitors, to begin with, rather than after the fact.

The SEO articles from IBM explain some of the ways to do that.
