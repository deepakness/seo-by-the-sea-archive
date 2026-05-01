---
title: "Yahoo Tackles Geographic Challenges of Web Search Results"
source_url: "https://www.seobythesea.com/2007/05/yahoo-tackles-geographic-challenges-of-web-search-results/"
slug: "yahoo-tackles-geographic-challenges-of-web-search-results"
date_published: "2007-05-20T12:57:42+00:00"
date_modified: "2018-06-02T18:06:32+00:00"
author: "Bill Slawski"
---

Many sites fail to do a good job of telling people where the businesses associated with their sites are located. For a number of businesses online, that’s not really a fatal flaw. But others may not be getting much out of their web sites if one of the purposes behind their pages is to get people to visit them in person.

A Yahoo patent application explores ways of trying to programmatically tag Web pages with locations, so that searchers can find businesses located near specific locations. This isn’t for a local search directory, but rather for Web search results.

So, how might a search engine “geo-locate” pages automatically regardless of whether or not the page authors provided helpful indications of location?

The Yahoo patent filing is [Identification and automatic propagation of geo-location associations to un-located documents](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070112777.PGNR.&OS=dn/20070112777&RS=DN/20070112777) (20070112777), and the inventors listed are Daniel Eugene Field and Daniel Eric Rose. It was published on May 17, 2007, and originally filed on November 8, 2005.

The abstract reads:


> Systems and methods are provided for identifying pages that can be authoritatively, to some confidence level or another, associated with a geographic location, and systems and methods for grouping documents such that authoritative location associations can be propagated from pages with higher location confidence to pages with lower location confidence.
>
> Pages might be identified with authoritative indicators, groups of pages identified including at least one addressed page and at least one unaddressed page, wherein an addressed page is a page having a higher confidence level than an unaddressed page, and at least one processing step performed that is location specific.
>
> The confidence level assigned to a page as part of the process represents the confidence that the page is associated with an identifiable geographic location, with documents having a high confidence level being determined to be strongly associated with a particular geographic location while documents having a low confidence level being determined to be weakly associated with a particular geographic location or not associated at all with a geographic location.

**Problem that this patent application tries to solve**

In the summary part of the document, they tell is that there are often so many results returned for some searches, that there may be a value in filtering some results to return more relevant results. One type of filtering that they think migh be useful in some contexts is to filter results based upon a searcher’s actual location, or a location that the person searching specifies.

They provide a survey of some of the ways that they could try to use to locate the physical location of a site, and the reasons why there might be problems with those:

*Location by Metadata* – meta data could be used to indicate locations – most site owners don’t include this kind of information in their meta data.

*Location taken from Directories* – often manually compiled, and usually doesn’t provide any connection between the product or service and its web pages (if any exist). Information in yellow pages databases is often incomplete and out-of-date and expensive.

*Keyword Matching of Locations on Web Pages* – most web pages don’t contain any text or other indications about the location (addresses) of items described on that page. Manually labelling individual pages with locations could entail a lot of work. While it might be possible to associate a location with a business, it becomes harder to associate products offered by that business with the location, too.

*Association of a Site with Addresses on the Site* – Addresses mentioned in the text of a page may not actually represent the physical location of the items described on that page and many pages might have no explicit mention of an address.

*Association of Location of Site with Domain Registration Information* – while you could analyze whois or DNS information and attempt to relate IP address or hostname to a location, there’s an issue with inaccuracies in the registration data. It is also common for an Internet service Provider (“ISP”) to host web sites in locations that are nowhere near the physical locations of the sites they host.

*Imputing an Address from a Parent Document to a Child Document* – a search for two or more terms could return a page without all of the search terms if its “parent” document contains the missing terms. This is useful when sites have a clear hierarchical organization, but not when it isn’t clear which pages of a site go with other pages, or how authoritative the contents of one page is, or when other inevitable ambiguities are present. So a homepage with an address on it might not be a good indicator of the addresses of products or services offered deeper inside the site.

**Google’s Approach**

I wrote about a Google patent application that does something very similar in [Assigning Geographic Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/).

If you’re interested in how a search engine might figure out the geographic relevancy of a web page, I’d recommend reading that post and the Cre8asite Forums thread that I started on the patent application involved – Assigning Geographic Locations to Web Pages. You may even want to read those before trying to delve into this patent application. I think that the approach that Google took to this problem is a little clearer, and easier to understand. Both are similar, though.

The basic idea is to find pages on a site that do seem to indicate that they are strongly associated with a specific address, and then find pages that seem to be clearly associated with those pages, and consider those to be associated with the address too – but not as strongly. Google calls that a “geographic relevance. Yahoo talks here about authoritative indicators (of geographic relevance) and confidence levels.

**Yahoo’s Approach to Geographic Relevance**

1) Identify pages with authoritative indicators,

2) Identify groups of pages including at least one addressed page and at least one unaddressed page, wherein an addressed page is a page having a higher confidence level than an unaddressed page, and;

3) Associate pages with addresses, with pages that don’t have addresses.

The confidence level assigned to a page as part of the process represents the confidence that the page is associated with an identifiable geographic location, with documents having a:

1) High confidence level being determined to be strongly associated with a particular geographic location

2) Low confidence level being determined to be weakly associated with a particular geographic location or not associated at all with a geographic location.

The geographic location could be specified by:

- a fully qualified street address,
- a partially specified street address,
- a set of one or more map coordinates,
- a longitude/latitude,
- etc.

To identify groups, the search engine might try to determine which pages belong to which websites – a website is a collection of pages presumed to be under common control by an entity for a particular purpose.

This system would geo-tag pages by reviewing pages from what a web crawler finds, or by looking through the search engine’s existing page index.

Those geotags could be used to filter search results. For example, if someone specifies a street address and searches for “restaurants,” the search system might filter out search results with geotags indicating a far distance from the user’s location. Location information could also be taken from a Global Positioning System (GPS) module showing the user’s present location. The searcher could also specify another address, such as a work address.

**a tagging system to tag pages with associated location tags**

1) The tagger finds a page

2) It retrieves the page, the page’s contents or at least some of the page’s content or representation of the page’s content.

3) The tagger tries to identify geographic identifiers, such as a street address in text, a location metatag in the document, etc.

4) Once an address is idnetified, it may try to determine an authoritativeness of the location and assign a confidence level to the page. As an example, a page with a title “Contact Information” which displays text with only one address might have a high confidence. A page with a title “Member Address Directory” with hundreds of addresses written in text might be given a low confidence level, or even a zero confidence level. Pages with no known location indicators could also be assigned zero confidence levels.

5) The tagger then determines whether the confidence level is high enough to warrant tagging.

6) If not, the page might be tagged by propagation (more about that below).

7) If the level is high enough, the location and confidence level of the page might be stored in a page index record.

8) This process might go through a few iterations to find associated pages that might have been missed earlier because they may not have been crawled yet.

**Propagating tags when appropriate**

The geo-tagger might identify a group of which the page in question is a member and then retrieve geotags of other members of that group. An example of a group are all the pages having a particular base URL (wherein a “base URL” is such that the pages with the same base URL have at least part of their domain and/or directory path in common), or are determined to be part of a common website. A “group” can be made up of a single page.

Once the group is identified and geotags of other pages are determined, the tagger decides upon whether other pages in the group should be tagged.

An example of when other pages might be tagged – A page that links to a “Contact” page on the site, and the contact page only has one address on it, and has been determined to have a high confidence level. The page doing the linking might be given 100% of the confidence assigned to the “contact” page. A page that doesn’t have a link like that, but shares the same root directory might be given some confidence, but not as much.

**Example of Geo-tagging**

A restaurant Web site doesn’t have address information on every page. It does have links with the anchor text “contact information” on a number of pages of the site. The “contact information” page has one address on it, in text that a search engine can read. So, it has a high “confidence” level of being associated with that specific address.

A lunch menu page on the site doesn’t link to the “contact information” page, but it shares the same root page with the “contact information page. So, it doesn’t have the same high confidence level.

The home page of the restaurant Web site doesn’t have an address on it, but it links to the “contact information” page using “contact information” as the anchor text for the link. It is given the same location confidence level as the “contact information” page.

If the lunch menu had a link to the “contact information” page, and a high confidence level, then items on that page might rank highly for a search including the items on the page, and the geographic information, even though the address doesn’t appear on the page. So, if “hamburgers” are listed, and someone does a search for ‘hamburgers Newark Delaware” then that page might show up in search results even though the address isn’t on the page.

**Conclusion**

The patent application provides some information on how it might identify address information, other things it might look for when determining confidence levels and propagating those confidence levels.

If you have a business with a Web site that has specific geographic locations associated with it, and you would like to understand how a search engine might try to associate the location or locations with the pages of the Web site, you may want to pay attention to the Google patent application, and this one from Yahoo.
