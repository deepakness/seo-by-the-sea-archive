---
title: "Google Webmaster Tools Patent on Crawl Rates"
source_url: "https://www.seobythesea.com/2009/10/google-webmaster-tools-patent-on-crawl-rates/"
slug: "google-webmaster-tools-patent-on-crawl-rates"
date_published: "2009-10-06T09:53:03+00:00"
date_modified: "2020-01-20T14:45:28+00:00"
author: "Bill Slawski"
---

Google’s [Webmaster Tools](https://www.google.com/webmasters/) offers web site owners tools and reports to learn more about how the search engine views your site, and to make it easier for the search engine to index the pages of a site.

A patent granted to Google today involves one of the tools included within the Webmaster Tools which can enable webmasters the ability to set different crawl rates on their website for Google’s crawling programs. The description from the patent doesn’t limit itself to that tool, and describes other processes involving the webmaster tools. These include:

- The verification process used by owners to claim ownership of their site to use Webmaster tools,
- The generation of XML sitemaps,
- How XML sitemaps may be crawled by the search engine,
- Setting a preferred version of a domain (such as with or without a “www”),
- Informing the search engine of a move of a site to a new domain,
- Setting a crawl rate for a site.

The patent is:

[System and method for enabling website owners to manage crawl rate in a website indexing system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,599,920.PN.&OS=pn/7,599,920&RS=PN/7,599,920)
Invented by Vanessa Fox, Amanda Ann Camp, Maximilian Ibel, Patrik Rene Celeste Reali, Jeremy J. Lilley, Katherine Jane Lai, Ted J. Bonkenburg, and Neal Douglas Cardwell
Assigned to Google
US Patent 7,599,920
Granted October 6, 2009
Filed October 12, 2006

Abstract


> Web crawlers crawl websites to access documents of the website for purposes of indexing the documents for search engines. The web crawlers crawl a specified website at a crawl rate that is based on multiple factors. One of the factors is a pre-set crawl rate limit. According to certain embodiments, an owner for a specified website is enabled to modify the crawl rate limit for the specified website when one or more pre-set criteria are met.

**XML Sitemaps**

The patent’s description section begins by providing a good amount of detail on how an XML sitemap generator might be used to create XML based files that a search engine can use to learn about pages that it might find on a website. An XML sitemap doesn’t just include a list of URLs, or addresses of web pages found on a site, but also could also provide metadata associated with those pages, such as the last time a page was modified or accessed.

While Google has provided a great deal of information about [XML Sitemaps](https://support.google.com/webmasters/answer/156184?hl=en) on the help pages of their site, the patent provides some additional features that we may or may not see in the future. Some of them are interesting.

For example, we’re told that a sitemap index might at some point contain specific information about a site, such as different crawl rates for the site at different times.


> <crawl_rate from =08:00UTC to=17:00UTC>medium</crawl_rate>
>
> <crawl_rate from=17:00UTC to=8:00UTC>fast</crawl_rate>

Other site specific information in an XML sitemap could include geographic location information associated with a site, or information about languages supported by a site:


> <location>latitude, longitude</location>
>
> <language>German</language>

The XML sitemap generator described in the patent might also look at the access logs for a site to find URLs that result in error messages so that those aren’t included in the sitemap. It could check to see how popular some pages are by how often they are visited and could schedule more popular pages to set them at more frequent crawl rates.

**Conclusion**

The patent also provides a fair amount of detail on tools that could be used to set up a [preferred version](https://web.archive.org/web/20190621132912/https://support.google.com/webmasters/answer/44231?hl=en) of a domain name, such as with or without a “www” in the name, or if redirect has been set up on a site from one domain to another to [change the address](https://support.google.com/webmasters/answer/9370220?hl=en&visit_id=637151571142959286-2199324597&rd=1) of a website. While the webmaster tools have been around for a while, that change of address feature was only announced in June of this year. So, some aspects of Google’s webmaster tools described in this patent appear to still be rolling out.

The process to verify that you are an “owner” of a site so that you can use the webmaster tools is described in great detail, as is information about setting crawling rates for a site.

If you use Google’s webmaster tools, you might recognize a number of the features described in the patent. If you haven’t used the webmaster tools, you might find the descriptions of those from the patent interesting.
