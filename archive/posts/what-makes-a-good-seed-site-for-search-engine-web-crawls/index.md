---
title: "Seed Sites for Search Engine Web Crawls"
source_url: "https://www.seobythesea.com/2010/05/what-makes-a-good-seed-site-for-search-engine-web-crawls/"
slug: "what-makes-a-good-seed-site-for-search-engine-web-crawls"
date_published: "2010-05-06T15:49:42+00:00"
date_modified: "2021-07-03T07:54:57+00:00"
author: "Bill Slawski"
---

## Social Sites as Seed Sites

*Would search engines be better if they started web crawls from seed sites such as Twitter or Facebook? Wikipedia or Mahalo? DMOZ or the Yahoo Directory?*

Seed sites are the pages that search engines start upon. If those are diverse enough, they make it more likely that search results will provide a diverse and more complete set of search results.

The Web refreshes at an incredible rate. New pages appear. Old pages get removed. And words pour out from blogs, news sites, and other genres of pages. Ecommerce sites showcase new products and take away old ones. New sites begin, and old domains expire. Because of this quick rate of change, finding good new sites may be a wise thing to do

Search engines attempt to keep their Web indexes as fresh as possible. They crawl to find the new, update changes, and explore disappearances. Not doing so can mean outdated search engines and deleted pages, overwritten content, and stale indexes that miss out on new sites.


## Web Crawls Often Start at Seed Sites

When a search engine starts crawling the Web, it often begins by following URLs from chosen seed sites to explore other pages and other domains. But how does a search engine choose those seed sites that it starts at?

In the past, seed sites might have been from categorized domains such as the Open Directory Project or the Yahoo directory, which link to a wide range of sites of different topics and regions. Those seed sites are editorially controlled in selecting the pages contained within them.

But a search engine doesn’t necessarily have to use those particular sites as seed sites, to begin with, and may choose others.


## The Impact of Choosing Seed Sites

A choice of seed sites can dramatically impact the quality of a search engine. It can affect how it covers different topics and geographical areas in its index. Conversely, poorly chosen seed sites could mean low-quality search results, and even more, webspam showing up in response to searches.

A Yahoo patent application describes how the search engine might choose amongst sites to use as seed sites to discover URLs for other Web pages. The Patent screenshot at the top of this post shows how seed sites could be from different geographic places to ensure that the search engine’s coverage of the web was well-distributed.

The patent is:

[Host-Based Seed Selection Algorithm for Web Crawlers](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100114858.PGNR.&OS=dn/20100114858&RS=DN/20100114858)
Invented by Pavel Dmitriev
Assigned to Yahoo
US Patent Application 20100114858
Published May 6, 2010
Filed October 27, 2008

Abstract


> A host-based seed site selection process considers factors such as quality, importance, and potential yield of hosts in a decision to use a document of a host as a seed.
>
> A subset of a plurality of hosts is found, including some but not all of the plurality of the hosts, according to an indication of the importance of the hosts, according to an expected yield of new documents for the hosts, and according to preferences for the markets, the hosts belong to.
>
> At least one seed site for each host of the determined subset of hosts. Each generated at least one seed includes an indication of a document in the linked database of documents. The generated seeds are provided to be accessible by a database crawler.


## Why New Sites are Discovered to Start Crawls From

Revisiting the same seed sites regularly may not result in discovering a large number of new URLs. However, the Yahoo pending patent provides a glimpse at how they may compare and choose amongst potential seed sites.

It tells us that the seed sites selection process can become better if the choice of particular selected seed sites results in:

1. A relatively large number of previously undiscovered documents discovered and processed
2. The crawling of relatively more of more important hosts and documents, and fewer of less important hosts and documents
3. A desirable distribution among markets or categories of sites

Candidate seed sites may be based upon measures of:

- Quality
- Importance
- Potential yield of hosts


## Quality or Lack of Quality of a Seed Site

This could be based upon things such as the site:

- Having few outlinks,
- Being a spam page or having outlinks pointing to spam pages,
- Containing pornograpic content.

The patent filing tells us that high-quality sites are potential seed sites since, as the starting point of a crawl, it’s likely that starting with a low-quality domain would likely result in many more low-quality pages being crawled.

***Importance*** of a seed site might be based upon a “host trust” score or rating or other attribute associated with that host, which generally provides an indication of:

- Popularity
- Trustworthines
- Reliability
- Quality
- Other characteristics of a host

PageRank could be one type of host trust score, but other factors could also be used.


## The Potential for Finding New URLs is Important for a Seed Site

***Potential yield of documents***, or the potential for the discovery of new URLs for a host, could be calculated based upon statistics gathered from past crawls of that host.

We’re told that markets are often distinguished by geography. So a seed site selection process looking to yield many new URLs may look for different seed sites based on geography that can help the search engine helps find URLs from different countries and regions.

Different thresholds may be chosen for seed sites in different markets (or according to some other characterization). Some are less dominant and may have fewer hosts and fewer “important” hosts. This can keep relatively dominant markets from having so much influence that “few or no seeds are selected for hosts in less dominant markets.”


## Conclusion

I’m not sure that I’ve seen a detailed discussion before in a patent or white paper from one of the search engines on what they might look for in choosing a seed site for their crawling process.

Most discussions about web crawling by the search engines often provide examples of seed sites like the Yahoo directory or DMOZ as entrance points for crawling and discovering new pages on the Web.

Because of that, it’s interesting to see some of the criteria discussed that a search engine might use to identify a seed site other than those direct For example, would Would Wikipedia make a good seed site? Possibly. How about Twitter or Facebook? I’m not quite as sure.

We know that the search engines have placed more emphasis on quickly including content from sites like Twitter in their indexes to give us the feeling of delivering timely information. But are they also following links from those services, treating them as seed sites, discovering new pages and new content upon old pages? What does it mean if they are?

Last Updated June 9, 2019
