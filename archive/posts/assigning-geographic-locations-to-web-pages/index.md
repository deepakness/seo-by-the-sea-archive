---
title: "Assigning Geographical Locations to Web Pages"
source_url: "https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/"
slug: "assigning-geographic-locations-to-web-pages"
date_published: "2006-12-10T19:46:19+00:00"
date_modified: "2019-06-26T07:40:08+00:00"
author: "Bill Slawski"
---

When you search in Google with geographical queries (i.e., pizza New York), chances are that the search engine would try to use keyword matching to locate relevant pages for a search result.

Search results like that tend to include a lot of directory results which include those words, and fewer results from enterprises that should match those results but don’t use those words. How could those results be improved to capture missing pages?


## Assigning Geographical Locations to Web pages

1. A search engine could manually assign locations to pages.
2. A site owner could manually assign locations to pages.
3. Geographic meta tags could be used.
4. A search engine could look for postal addresses on the same pages as the other keywords in the query.

A number of the Google patent applications that I’ve written about local search mention assigning geographical locations with web pages, and tying those locations with businesses and other enterprises. A Google organic Web search also benefits from being able to understand the locations associated with a web page.

How much difficulty may a search engine have in assigning geographical locations to the pages of a website? What strategies, assumptions, and rules might be used?

The four approaches I mentioned above each have their problems. Manual assignment by a search engine or site owner requires a lot of work by a lot of people, and may not be free of mistakes. The same with meta tags. Trying to find an address on a site can be filled with problems, too:

1. Not every site includes an address on every page.
2. Some sites show addresses in images rather than text.
3. Addresses can often be incomplete.
4. Address information can sometimes be wrong, or formatted poorly.

This post is about another older Google patent application involving how geographic location identifiers may be found and used by Google. I first took a look at this one in a post at Cre8asiteForums last year.

I wanted to revisit it in light of some of the other patent applications from Google involving geography, and with the benefit of some passage of time. Instead of focusing upon solely upon Local Search, this patent application involves some ideas for assigning geographical locations on web pages.

[Assigning geographic location indentifiers to web pages](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20050182770.PGNR.&OS=dn/20050182770&RS=DN/20050182770)
Invented by Lars Eilstrup Rasmussen and Jens Eilstrup Rasmussen
United States Patent Application 20050182770
August 18, 2005
Abstract


> A system and method for assigning geographic location identifiers to web documents may include identifying a set of web documents. A geographic location identifier included within a first web document in the set of web documents may be identified. The identified geographic location identifier may be assigned to a second web document in the set of web documents based on a relevancy of the first web document to the second web document.

In short, the patent identifies web pages, and looks for location information on those pages. It assigns geographic locations to pages that clearly have geographic information on them, and then assigns locations that are “relevant” to the first set of pages which have that geographic information.

**Assigning geographical locations**

“Geographic location identifiers” on web pages may be assigned to other pages which might or might not include geographic identifiers, after relevancy criteria is looked at, allowing pages without location information to be included in a geography-based search.

The relevancy factors may include:

1. Relative distance between documents,
2. Terminology used, and;
3. If the page is on the same site.

A geographic location identifier could be; a partial or complete postal address, a telephone number, an area code, airport codes, landmark identifiers, and other values that could be tied to physical locations, such as longitude and latitude.

Or, importantly, a geographic location identifier may also be based upon links between pages without geographic information which seem to be related to pages which do have location information upon them.

Directories could also be used in assigning geographical locations with pages, and pattern matching on a site may be used to associate documents, by examining text that matches standard formats for addresses and other information that tends to describe a location.

**Standardization of Geographic Information**

For a search engine to take advantage of geographic information, it will attempt to standardize that information into a common, predefined format. So, for example:

- Addresses without zip codes may have an appropriate zip code added.
- Misspellings and other indentified errors could be corrected.

Standardization would include putting address information into categories, such as:

- street number,
- street name,
- street type,
- city,
- state,
- county,
- country,
- zip code,
- etc.

**How Location Assignment Works**

Standardization first, involving data correction, supplementation, and other standardization methods), then a location identifier is assigned to pages on which the geographic information actually appears.

A geographic identifier may be associated with unassigned documents or which already have a geographic identifier or a different one (pages can be assigned to more than one location).

That assignment may be made by assigning geographical locations on pages linked to the document, either directly or indirectly (through a predetermined number of links).

Once an association has been made, geographic identifiers could be used in finding other associated pages or in ranking search results.

Or search results which include the pages may show the assigned location to searchers.

These associations and even disassociations of locations can happen as a collection of web pages is reviewed.

A primary assumption that is made is that if a page has location information on it, it should be associated with that location.

The process may begin by identifying, for each page, other pages that include a geographic location identifier and are “relevant” to that page from a geographic identification standpoint.

**Defining Geographically Relevant Documents**

“Relevant” documents” may be defined as relevant where:

1. The pages are on the same web site, and;
2. The anchor text appearing on the page with location information leading to the other page contains one or more terms from a small rule-based set of terms.

Those “relevant” terms in that rule-based set of terms may include, for example:

- location(s),
- direction(s),
- find,
- finder,
- locate,
- locater,
- store(s),
- branch(es),
- about,
- company,
- contact,
- information,
- and others that are similar.

A document could also be considered relevant if the anchor text in a link pointing to it includes a complete or partial postal address.

For images or other non-text anchors, a linked page may be relevant if the URL in the link includes either a complete or partial postal address or one of the above “relevant” terms.

A page could be considered relevant by examining the contents of the page directly.

A link failing the above tests may be considered “relevant” if the HTML title of the target document includes any of the “relevant” terms, or a complete or partial postal address.

These types of titles would probably be included in the first pass through of all the collected documents. Other rules may be used to determine if the target document makes a hyperlink “relevant”.

**Looking at Linking Distances**

Once a geographically relevant page has been identified, the search engine would look other pages within a certain number of links from that page. One range mentioned as a possibility is 2 – 5 links.

If the distance is further, the next relevant document is reviewed. If that one is within the right number of links, it may be associated with the initial document with location information.

That process would continue until all relevant documents are reviewed.

**Forward Links and In-Bound Links**

The linking distance process in the section above describes the process of pages linked from the page with location information on it. The same process happens with pages that link to the page (its backlinks) with the geographical identifying information.

**Different Weights of Geographic Relevance?**

One of the possible enhancements of this process splits up geographical relevance. Relevant links and link distances are calculated for documents which don’t contain the geographical location information.

Each of those pages collects a portion of relevance based upon those distances, and that measure could be added together for all neighboring documents that may contain geographical information.

A page that is linked from or to by a number of pages that use relevant anchor text or URLs may be determined to be more relevant for geographical information than other pages on the same site.

Keep in mind too, that more than one location can be associated with a document.

**Conclusion**

I’m not sure how much of the processes described in this patent application have been incorporated into the way Google may be assigning geographical locations associated with web pages in a Web search or in a Local search. It does seem to be a pretty reasonable approach.

If the physical location associated with a web page is important to the owners of that site, and the potential visitors of the site, I would recommend that address information is included on most or all pages of the site. But many site owners don’t include this kind of information, and the failure to do so makes it harder for searchers to find those sites.

The methods described in this patent application can make it more likely that meaningful results will be returned to searchers who perform searches with queries that have geographic-based terms within them.

I decided that it might be a good idea to identify and link to some interesting posts about local search, and came up with the following list:

- [Assigning Geographical Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Was Google Maps a Proof of Concept for Google’s Knowledge Base Efforts?](https://www.seobythesea.com/2014/09/google-maps-proof-of-concept/)
- [Location Prominence at Google in Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)
- [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)
- [Authority Pages for Businesses in Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)
- [10 Most Important SEO Patents: Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
- [How Google May Identify Implicitly Local Queries](https://www.seobythesea.com/2012/06/how-google-may-identify-implicitly-local-queries/)

Last Updated June 26, 2019
