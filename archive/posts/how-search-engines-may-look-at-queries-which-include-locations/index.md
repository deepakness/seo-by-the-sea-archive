---
title: "How Search Engines May Look at Queries Which Include Locations"
source_url: "https://www.seobythesea.com/2006/12/how-search-engines-may-look-at-queries-which-include-locations/"
slug: "how-search-engines-may-look-at-queries-which-include-locations"
date_published: "2006-12-03T23:28:02+00:00"
date_modified: "2020-06-21T20:21:53+00:00"
author: "Bill Slawski"
---

A good number of the posts at *SEO by the Sea* lately, about the use of [geography and location in searches](https://www.seobythesea.com/category/local-search/) have involved specialized local searches from the major search engines. Chances are good that more people use the main index and results from those search engines than the Local searches, to find out information involving places. (see Danny Sullivan’s article: [Searching with Invisible Tabs](https://www.searchenginewatch.com/2003/12/02/searching-with-invisible-tabs/))

There has been a significant amount of research about searches for information related to specific geographical areas though, and some that is worth looking at carefully is the papers coming out of Microsoft research. One of those is [Detecting Dominant Locations from Search Queries](http://www.ulco.nl/docs/Detecting_Dominant_Locations.pdf), which focuses upon the “location intent” of the search, and attempts to understand a “dominant location” of a query, based upon an agreement between “a majority of people who know the answer for that query.”

The processes described in that paper have been filed with the US Patent and Trademark Office, and were officially published this past week:

[Search query dominant location detection](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060271518%22.PGNR.&OS=DN/20060271518&RS=DN/20060271518)
Invented by Chuang Wang, Joshua Forman, Lee Wang, Xing Xie, Ying Li
Assigned to Microsoft
US Patent Application 20060271518
Published November 30, 2006
Filed: May 27, 2005

Abstract


> A system and method for location-specific searching. The invention correctly identifies explicit and implicit locations in a search query and provides an appropriate dominant location. Top search results are obtained and analyzed to determine which terms in the query often appear in combination, and the query is tokenized based on the analysis. An explicit location indicating a location intent is most likely treated as an individual token, and the explicit location is treated as the dominant location of the query. In the case of a false positive, wherein the explicit location in a query is not the location intent, the explicit location is likely to be present with other terms that provide context. A token will likely include these terms together. The explicit location will therefore not be used to generate location-specific results in the case of a false positive.

**Explicit and Implicit Locations in Queries**

The patent defines some terms that are helpful when reading the paper and patent from Microsoft:

***Location intent*** – an indication in a search that the searcher is looking for something related to a geographic area. For example, a search for “Seattle Restaurant” may indicate to a search engine that the searcher is looking for web pages for restaurants based in Seattle. This can get confusing for a search engine, though. For example, a search for “Kentucky Fried Chicken” isn’t necessarily a search for places in Kentucky that serve fried chicken. The wording of a query and the type of information sought may create the possibility of false negatives and false positives.

There are at least two different types of search queries that can show location intent – ones which express explicit locations, and others that indicate implicit locations.

***Explicit location*** – a geographical name is present in the query. So, the term “Seattle” in the query “Seattle Restaurant” is seen as an explicit location. But, we’ve also seen from the Kentucky Fried chicken example, that an explicit location in a query may not be the actual location intent of the query.

The patent application uses another example of a query that uses a geographical location that doesn’t express a location intent:


> “Indiana” is the explicit location of the query “Indiana Jones” but it is not the location intent.

***Implicit location*** – A query with an implicit location doesn’t contain a location name within the query but is associated with a location intent. So, a query of “restaurant around Space Needle” is an implicit query because it names a landmark rather than a geographic location. The implication is that the searcher is looking for restaurants in downtown Seattle.

If the search engine fails to recognize that there is a “location intent” in that implicit query and returns results that ignore it, the patent application tells us that it is an example of a false negative.

So a false positive in geographic-based searches is when a search engine sees a term in a context that isn’t geographically related and returns location-based results. A false negative is when a location is implied in a query, and the results don’t include location-based results.

**IP-Based Results vs. Dominant Location Results**

One method that could be used to provide searchers with location-specific results relies upon performing a reverse IP lookup of the user searching, and basing results upon their physical location. That’s not helpful when someone is looking for information about a distant location. The patent application instead looks to a “dominant location” for a query:


> A dominant location is, for example, a prominent location that is agreed upon by a majority of people who know the answer to the query.
>
> If a query has a dominant location, it may be used as the location intent for that query.
>
> However, detecting a dominant location is difficult because it is a subjective and collective measure: it is the location existing in the collective human knowledge.

**Conclusion**

I didn’t go into details on how a query is broken down into tokens, as described in the patent application, to try to locate information about the different terms in a query. The paper from Microsoft on this topic explains the process in an easier to understand manner than the patent application.

The process described in this patent looks to see if a location in a query is an explicit location, an implicit location and if there is a location intent if there is a dominant location associated with that location intent. This process is intended to avoid false positives and false negatives appearing in search results.

A closely related patent is cited in the patent application, and I’ve discussed it (and an associated paper) in a post from September: [Location Still Matters on the Web: Types of Location Information](https://www.seobythesea.com/2006/09/location-still-matters-on-the-web-types-of-location-information/). It looks at the actual geographic location of the owner of a web resource, the location that the content of a site may be about, and the geographic scope of the audience that the site aims to reach.

**Some Other Documents About Geography in Search Results**

The first three papers I’ve listed are Microsoft related documents. I also found a paper about efforts from Russian researchers looking at sites in the Yandex search engine.

Detecting Geographical Serving Area of Web Resources (pdf)

[Indexing implicit locations for geographical information retrieval](http://web.archive.org/web/20120131114137/http://www.geo.unizh.ch:80/~rsp/gir06/papers/individual/li_xie.pdf) (pdf)

[Web Resource Geographic Location Classification](http://wwwconference.org/2005a/cdrom/docs/p1138.pdf)

[Automatic Geotagging of Russian Web Sites](http://cache-ams04.cdn.yandex.net/download.yandex.ru/company/download/p72.pdf) (pdf)
