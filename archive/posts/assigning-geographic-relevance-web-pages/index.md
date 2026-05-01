---
title: "10 Most Important SEO Patents: Part 8 - Assigning Geographic Relevance to Web Pages"
source_url: "https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/"
slug: "assigning-geographic-relevance-web-pages"
date_published: "2012-02-01T10:55:30+00:00"
date_modified: "2020-06-19T17:54:46+00:00"
author: "Bill Slawski"
---

## How Geographic Relevance Might be Spread Across a Site

How much might one page on a website influence the rankings of other pages? When I joined an agency in 2005, our focus was on rankings for individual pages – optimizing their content for specific terms and phrases, and making sure that they had links from other pages, both onsite and off. I found myself unable to color just within those lines. It was impossible to ignore the impact of global issues on a website when trying to optimize individual pages for terms. Every page on a site can impact how each page might be crawled and indexed and displayed by search engines.

For example, if the home page of a site was accessible at multiple URLs, there was the very real risk that PageRank for that page could be split multiple ways, such as among:

- http://www.example.com/
- http://example.com/
- http://www.example.com/index.htm
- http://example.com/index.htm
- http://www.example.com/Index.htm
- http://example.com/Index.htm

If the pages of a website are accessible both with and without a “www,” then it’s possible that all pages of the site could be indexed by a search engine with each version getting some share of PageRank. For years, you could visit the homepage of the New York Times, and see a PageRank of 9 in a Google Toolbar for the version at “http://www.nytimes.com,” and a PageRank of 7 for the version at “http://nytimes.com.”

Those are some examples of harm that might be caused by ignoring global issues on a site, but there are also some benefits to paying attention to other pages on a site and how it might impact an individual page. Choosing meaningful anchor text to link to one page from another page is a good example. Another came out in a patent application originally published in 2005 that could have an impact on how well a page might rank for geographically related terms, even if those terms didn’t appear upon a page, as long as those terms might appear on another page on the same site.

**Assigning Geographic Relevance Identifiers to Web Pages**

When brothers Lars and Jens Rasmussen had their Australian based company, Where 2 Technologies, acquired by Google in October of 2004, they became involved in the team that created Google Maps. They also worked on a process involving how Google might handle geographic location on web pages. They put together the following patent application describing a process to assign geographical information to web pages.

[Assigning geographic location identifiers to web pages](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050182770%22.PGNR.&OS=DN/20050182770&RS=DN/20050182770)
Inventors: Lars Eilstrup Rasmussen, and Jens Eilstrup Rasmussen
US Patent Application 20050182770
Published August 18, 2005
Filed November 26, 2004

Abstract


> A system and method for assigning geographic location identifiers to web documents may include identifying a set of web documents. A geographic location identifier included within a first web document in the set of web documents may be identified. The identified geographic location identifier may be assigned to a second web document in the set of web documents based on a relevancy of the first web document to the second web document.

The patent filing describes how a search engine might look for location information on web pages, assign locations to pages which do include geographic information, and then assign locations to pages “relevant” to those pages.

The problem that this patent application was intended to address was that keyword-based search engines (as Google was at the time, and often still is) would fail to geographically define web pages when trying to use:

- Manual assignments by a search engine of locations to pages
- Manual assignment by a site owner of locations to pages
- Use of geographic meta tags
- Search engine assignment of location when looking at postal addresses appearing on the same pages as the keywords.

**Assignment of Geographic Relevance Location Identifiers**

Under the process in the patent filing, geographic relevance location identifiers on pages can be assigned to other pages which might or might not include geographic relevance identifiers, after relevancy factors are considered, allowing pages without location information to be included in a geography based search. The relevancy factors might include:

- Relative distance between documents
- Terminology used, and
- Whether or not the page is on the same site

The patent application points out a number of geographic location identifiers, such as:

1. A partial or complete postal address
2. Telephone number
3. Area code
4. Airport codes
5. Landmark identifiers
6. Other values tied to physical locations, such as longitude and latitude
7. Or based upon hyperlinks between pages without geo information that seem related to these pages which do have location information

We’re also told that other documents, such as directories might be useful in associating location identifiers. A search engine might also use a pattern matching approach that examines text on pages to find standard formats for addresses and other information that tends to describe locations.

One assumption that this process follows is that if a page has some kind of location information on it, it is associated with that location.

Following that assumption, if other pages are within a certain number of clicks from that page, they might also be assumed to be associated with the location if they are “relevant” to that first page.

**Geographic Relevance Pages**

A geographically relevant document might be defined as relevant where

1. The pages are on the same web site, and
2. The anchor text on the page with location information leading to the other page contains one or more terms from a small rule-based set of terms.

The relevant terms might include terms such as:

- Locations
- directions
- Find
- Finder
- Locate
- Locater
- Store(s)
- Branch(es)
- About
- Company
- Contact
- Information
- etc.

Another approach would be to consider a page relevant to a location if the anchor text to it includes a complete or partial postal address.

For images or videos or other non-text anchors, linked pages might be considered Geographic relevant if the URL in the link includes either a complete or partial postal address or one of the above relevant terms.

Pages could also be considered relevant by examining the contents of the page directly.

A link that doesn’t include relevant terms like that might still be considered relevant if the HTML <title> of the linked to the document includes any of those relevant terms or a complete or partial postal address.

**Geographically Important Click Distance**

Once a candidate geographically relevant page is identified, pages the number of links away from the page with the location upon it are looked at. The patent suggests that this click distance might be a range of 2 – 5 links. If the distance is further, that page might not be considered geographically relevant.

In addition to looking at pages that are linked from the page with a location on it, this process will also look at pages that link to that page. So, if a page on the site that doesn’t have a location on it links to a page that does, with a geo-relevant term like “directions” as anchor text, then the linking page (without a location) can be geographically assigned the location found on the linked to the page.

There might be an assessment of geographical relevance that differs from one page to another based upon looking at all of the pages together. Relevant links and link distances may be calculated for pages that don’t contain the geographical location information. Each of those pages may collect a measure of relevance based upon those distances, and that measure can be added together for all of the neighboring pages that may contain geographical information. So, if a page is linked from or to by several pages that use relevant anchor text or URLs, it may be determined to be more relevant for that geographical information than other pages.

To compound things, more than one location might be associated with a single page.

**Geographic Relevance Takeaways**

Even though it was filed back in 2004, this patent application is pending at the USPTO, and it looks like it might not be granted.

But many of the concepts contained in the patent filing are reflected in another (now granted) patent that I wrote about when it was still pending, called [Propagating useful information among related web pages, such as web pages of a website](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07933890&OS=PN/07933890&RS=PN/07933890). While that patent covers this concept of assigning geographic relevancy, it also broadens things to assign relevancy for other terms and concepts from one page to another. I wrote about the patent in the post, [Google Determining Search Authority Pages and Propagating Authority to Related Pages](https://www.seobythesea.com/2007/10/google-determining-search-authority-pages-and-propagating-authority-to-related-pages/).

A snippet from that post that shows how the “relevancy” of one page might be assigned to another outside the context of geographic locations:


> Location information may not be the only information on this site that may be propagated from one page to another. Imagine that a page of the site includes menu items for the restaurant, including “pho” which is a beef noodle soup.
>
> Assume that “pho” is considered to be a highly descriptive term because it isn’t frequently used in a wide collection of Web pages.
>
> This term may be identified and propagated up to the home page of the site as well, and be treated as if the word appears on the home page, even though it doesn’t.
>
> Now assume that someone from or near Anytown, CA searches for “pho restaurants” the home page may show up as a relevant match, even though neither the term “pho” nor the location appears on the home page of the site.

How much might the content of one page influence the rankings of others?

It some cases, it could hold a great amount of influence.

Note: where the geographic location of your business is very important because you have a shop or office that you might want people to visit in person, or because you provide services to people in a particular region, I would recommend including your address on every page of your site that you want to be indexed by the search engines. While Google might be assigning Geographic Relevance in a manner like this, some smart self-help can make it much easier for search engines to get things right.

**All parts of the 10 Most Important SEO Patents series:**

[Part 1 – The Original PageRank Patent Application](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-1-the-original-pagerank-patent-application/)
[Part 2 – The Original Historical Data Patent Filing and its Children](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-original-historical-data-patent-filing-children/)
[Part 3 – Classifying Web Blocks with Linguistic Features](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-3-classifying-web-blocks-with-linguistic-features/)
[Part 4 – PageRank Meets the Reasonable Surfer](https://www.seobythesea.com/2011/12/most-important-seo-patents-reasonable-surfer/)
[Part 5 – Phrase Based Indexing](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-5-phrase-based-indexing/)
[Part 6 – Named Entity Detection in Queries](https://www.seobythesea.com/2012/01/named-entity-detection-in-queries/)
[Part 7 – Sets, Semantic Closeness, Segmentation, and Webtables](https://www.seobythesea.com/2012/01/sets-semantic-closeness-segmentation-and-webtables/)
[Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
[Part 9 – From Ten Blue Links to Blended and Universal Search](https://www.seobythesea.com/2012/02/ten-blue-links-to-blended-universal-search/)
[Part 10 – Just the Beginning](https://www.seobythesea.com/2012/03/just-the-beginning/)

I decided that it might be a good idea to identify and link to some interesting posts about local search, and came up with the following list:

- [Assigning Geographical Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Was Google Maps a Proof of Concept for Google’s Knowledge Base Efforts?](https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/)
- [Location Prominence at Google in Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)
- [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)
- [Authority Pages for Businesses in Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)
- [10 Most Important SEO Patents: Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

Last Updated June 26, 2019
