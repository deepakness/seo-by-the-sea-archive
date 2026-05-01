---
title: "Google's Scoring for Content-Relevant Advertisements"
source_url: "https://www.seobythesea.com/2007/01/googles-scoring-for-content-relevant-advertisements/"
slug: "googles-scoring-for-content-relevant-advertisements"
date_published: "2007-01-18T05:34:35+00:00"
date_modified: "2012-06-09T22:28:11+00:00"
author: "Bill Slawski"
---

A new patent application from Google describes how relevancy factors may be calculated into the scoring of advertisements shown on web pages, and other properties.

Keep in mind that this is a patent application, and describes one possible variation of a scoring system that Google may or may not implement. It appears to be related to a number of other recent patent applications from Google, like the ones I mention in a post from earlier this month on [The Suitability of Websites for Participation in an Advertising Network](https://www.seobythesea.com/2007/01/the-suitability-of-websites-for-participation-in-an-advertising-network/).

The process described in the filing involves accepting ads that are relevant to a document, and then scoring each of the accepted ads by using a price parameter associated with the ads, an indication of relevancy of the ads to the document, and a performance parameter.

Under the method described, the price parameter could be:

- an offer per impression,
- an offer per selection,
- an offer per conversion,
- a maximum offer per impression,
- a maximum offer per selection, and;
- a maximum offer per conversion.

Relevancy of an ad to a page can be determined by:

- Determining concepts (probabilistic hierarchical inferential learned clusters) of the document,
- Determining a set of one or more ads with the determined concepts, and;
- Obtaining targeting information (keywords) from at least some ads belonging to the set of one or more ads.

The performance parameter associated with the ads can be based upon:

- selection rate
- conversion rate.

The new patent application is:

[Selecting and/or scoring content-relevant advertisements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070016473%22.PGNR.&OS=DN/20070016473&RS=DN/20070016473)
Invented by Darrell Anderson, Alexander Paul Carobus, Giao Nguyen, and Narayanan Shivakumar
US Patent Application 20070016473
Published January 18, 2007
Filed July 18, 2005

Abstract


> Ads eligible to be served with a document (for example, because they are relevant to the document) may each be scored using a price parameter associated with the ad and an indication of relevancy of the ad to the document.
>
> The indication of relevancy of the ad to the document may be based on an ordinal ranking of a relevancy criteria of the document used to select the ad, and/or a value of a relevancy criteria of the document used to select the ad.
>
> The eligible ads may be determined by obtaining relevancy criteria for the document and selecting ads using at least some of the obtained relevancy criteria. The ads may be selected, and perhaps filtered, in a distributed manner.

I mentioned “probabilistic hierarchical inferential learned clusters” above as a way of determining concepts for a document. According to this patent application, and a number of others from Google, they have filed for a patent which describes how those topical clusters may be learned.

While that learning process hasn’t been published, there is another patent application which describes the kinds of clusters that may be created in more detail: [Categorizing objects, such as documents and/or clusters, with respect to a taxonomy and data structures derived from such categorization](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060242147%22.PGNR.&OS=DN/20060242147&RS=DN/20060242147).

Another thing that I found interesting in this document is how broadly the concept of an ad property has come to be defined:


> [0036] A “property” is something on which ads can be presented. A property may include online content (e.g., a Website, an MP3 audio program, online games, etc.), offline content (e.g., a newspaper, a magazine, a theatrical production, a concert, a sports event, etc.), and/or offline objects (e.g., a billboard, a stadium score board, and outfield wall, the side of truck trailer, etc.).
>
> Properties with content (e.g., magazines, newspapers, Websites, email messages, etc.) may be referred to as “media properties.” Although properties may themselves be offline, pertinent information about a property (e.g., attribute(s), topic(s), concept(s), category(ies), keyword(s), relevancy information, type(s) of ads supported, etc.) may be available online.
>
> For example, an outdoor jazz music festival may have entered the topics “music” and “jazz”, the location of the concerts, the time of the concerts, artists scheduled to appear at the festival, and types of available ad spots (e.g., spots in a printed program, spots on a stage, spots on seat backs, audio announcements of sponsors, etc.).
