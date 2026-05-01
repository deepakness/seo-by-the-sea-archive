---
title: "Google Files Patent for Understanding Multiple URLs for the Same Page"
source_url: "https://www.seobythesea.com/2013/05/google-files-patent-for-understanding-multiple-urls-for-the-same-page/"
slug: "google-files-patent-for-understanding-multiple-urls-for-the-same-page"
date_published: "2013-05-28T23:00:05+00:00"
date_modified: "2018-03-02T23:16:39+00:00"
author: "Bill Slawski"
---

The great thing about HTML is that it’s so flexible and offers so many ways to do things. The worst thing about HTML is that it’s so flexible and offers so many ways to do things. I’ve looked at a lot of websites and I still see people doing things new ways.

An issue that’s often common to many websites is when a page on a site can be found at more than one URL. This might be done by a site owner for a number of reasons, and in a number of ways. It might be an issue related to a content management system that’s being used as well.

A patent application published by Google explores how the search engine might recognize when it finds a URL through a web crawl and another URL through a feed, such as a product feed, with both URLs referring to the same page, but those URLs are structured differently.

This seems like potentially a lot of work to me, and the patent filing has me shaking my head that Google might use resources to figure out duplicated content on a site, even if it potentially might enable the search engine to understand URLs and associated products and other information that it might identify better.

For example, let’s say that one version of the URL is what Googlebot discovers when it crawls a page. The other version is part of a feed generated from a database that lists products on an ecommerce site, and includes some information that might not be on the page itself, such as a price for the product featured on the page.


## Crawling in the DUST: Different URLs with Similar Text

Sometimes those URLs might have tracking parameters attached to them such as session IDs that identify a visitor to a site as unique. Sometimes code is placed on a URL that tells someone where a link appears upon a page, such as in a heading at the top of a page, or in a sidebar, or in a footer.

Back in 2006, I wrote a post about a paper that described how search engines might try to understand URLs that might differ but lead to the same page. The post, [Solving Different URLs with the Same Text (DUST)](https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/).

In 2007, the team that produced the original poster expanded upon it in the paper Do Not Crawl in the DUST: Different URLs with Similar Text (pdf).

How well can a search engine match up different URLs on a site that point to the same page? Ideally, I’d want to make it so that there’s only one URL for each page, but this patent finds some value in situations such as whether URLs on a site though a web crawl can be matched up with different URLs for the same pages on the site that are uploaded as part of something like a product feed. When a product feed is uploaded, it may include additional information, such as prices for products. If Google can match up the crawled URLs with the uploaded URLS, it might be capable of displaying the crawl version of the URLs with the prices that accompany the product feed URLs.

Given that Google is now charging to present product results, I’m not sure that this patent filing will ever be implemented by Google. Can the ideas behind it be used with other feeds, like videos feeds or XML News feeds?

The patent filing is:

[Mapping Uniform Resource Locators of Different Indexes](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220130103666%22.PGNR.&OS=DN/20130103666&RS=DN/20130103666)
Invented by Oskar Sandberg and Olivier Bousquet
Assigned to Google
United States Patent Application 20130103666
Published April 25, 2013
Filed: October 21, 2011

Abstract


> A server may identify a first address stored in a first search index;
>
> - determine one or more first identifiers associated with the first address;
> - identify a second address stored in a second search index;
> - determine one or more second identifiers associated with the second address;
> - map the first address to the second address based on a first identifier, of the one or more first identifiers, and a second identifier, of the one or more second identifiers; and
> - transmit the mapping, of the first address to the second address, to a first server associated with the first search index or to a second server associated with the second search index.

In addition to looking for a key string of numbers that might be unique for URLs matching specific patterns from a crawl that also appear in URLs that are uploaded via a feed, the search engine might look at other information associated with those URLs, such as page titles and meta descriptions and so on that might also match.

The patent filing does indicate that it might be used for things other than just product feeds, such as ” items (e.g., products), published news stories, images, user groups, geographic areas, or any other type of data.” Given that Google product search has become a paid offering at Google, it seems less likely that Google will mine those product feed URLs for additional information to display.

For example, Google News sitemap URLs could be accompanied by a <geo_locations> tag in the feed that accompanies it, which Google could use to associate other version of the URL for the same page with that location.

Honestly, I’m much more likely to believe that Google will first develop self driving cars, multi-functional Google Glass, Smart Watches, and more things that seem to be in the realm of science fiction before they are able to figure out multiple URLs for the same page on a wide variety of sites.

There’s just too much variety of ways to do things with HTML.
