---
title: "Location Prominence and Differences in Local OneBox and Google Maps"
source_url: "https://www.seobythesea.com/2007/02/location-prominence-and-differences-in-local-onebox-and-google-maps/"
slug: "location-prominence-and-differences-in-local-onebox-and-google-maps"
date_published: "2007-02-08T13:56:35+00:00"
date_modified: "2020-06-21T18:48:38+00:00"
author: "Bill Slawski"
---

Mike Blumenthal poses an excellent question in his post [Google changes Local OneBox Ranking algo! Or do they?](http://blumenthals.com/blog/2007/02/07/google-changes-local-onebox-ranking-algo/).

He asks why local results that show up in [Google’s enhanced OneBox results](http://blumenthals.com/blog/2007/01/31/google-upgrades-the-local-onebox-results/) for certain queries are different than searches for the same terms in [Google’s Local search](https://www.google.com/maps). It’s something that I’ve wondered too, and Mike has done some research that shows different results from OneBox to Local Search.

**The Location Prominence Patent Application**

We were discussing this a little, and I suggested that the difference was because there was a difference in the maps shown and the sizes and boundaries of those maps.

I based this conjecture upon a [Google patent application](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20060271531.PGNR.&OS=dn/20060271531&RS=DN/20060271531) which talks about the concept of “location prominence” which I described in a post titled [Google Local Search Patent Application on Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/).

Under the location prominence patent application, if a searcher uses something like a zip code, then the results returned may be focused around some geographic center-based somehow around that specific zip code. Less precise geographic information in a query triggers a different result.

**Precise Queries and Geographic Location Information**

If searchers use less precise geographic location information, such as a city name, or city and state name (a city can have more than one zip code), then the search results returned may be based upon something else, such as the map shown that the person is searching upon or a center point around multiple zip codes. Here’s a long snippet that explains how this may be important:


> [0038] When the search query includes information regarding a geographical area, then the broad area may be identified from the search query. For example, if a search query includes the phrase “Mountain View,” then the broad area may be identified as “Mountain View.” A set of “zcodes” may be identified that correspond to the broad area. A “zcode” may refer to a postal code, such as a U.S. Postal Service zip code in the United States or something similar to a zip code outside the United States.
>
> [0039] The set of zcodes corresponding to the broad area may include those zip codes that have been allocated to the geographical area associated with the broad area. For the Mountain View example above, assume that the set of zcodes includes the zip codes 94039, 94040, 94041, 94042, and 94043. To compress space, the zcode sets may be stored as a series of ranges. In the case of Mountain View, the zcode set may be stored as 94039:5, which corresponds to the zip code range of 94039 to 94043. If a zip code is unallocated to any other broad area, then it may be added to the range of a surrounding or adjacent zcode set. For example, if the zip code 94044 is unallocated, then it may be added to the Mountain View zcode set.
>
> [0040] When the search query does not include information regarding a geographical area, then the broad area may be identified in another way. For example, when the user is accessing a map, the entire visible map area within the map window may be considered a broad area. In one implementation, the user may access a web site associated with a map provider, such as Google maps. The user might zoom in or zoom out on the map, move the map left or right, and/or provide an identifier relating to a geographical area of interest, as necessary so that the broad area is within the map window. The interface provided by the map provider may also permit the user to enter the search query identified previously.

According to that, a search for a business in “Mountain View” might be centered around a geographic location that includes all five zip codes.

Also, if a query doesn’t provide helpful enough geographic information, the results that are returned may be limited to the boundaries of the map shown, and instead of using a CenterPoint based upon zip code may use a CenterPoint based upon the map.

**Testing Location Prominence**

Based upon that information, I come up with a hypothesis that if I used specific zip codes as my geographic information in a search, that my results from local OneBox results and Local search results should be the same or at least very close, even though the map sizes were different.

I decided to use 10 zip codes picked at random, and look at results for two different types of businesses – restaurants and doctors. My results are in the table below. If my hypothesis is right, the businesses that show up in OneBox and Local results should be most likely the same for both, and in the same order.

In the table below, if the results between the two search types were different I list the Local Search result first, followed by the OneBox result, with a slash between the two. If there is only one business listed in that rank order (1,2,3), then the result was the same for both types of searches


<table border="1" cellpadding="4" cellspacing="1" cols="4" style="text-align: center"><colgroup><col width="80"/><col width="40"/><col width="80"/><col width="200"/></colgroup><tbody><tr><td valign="bottom" width="78"><strong>Business</strong></td><td width="40"><strong>Zip</strong></td><td width="78"><strong>City</strong></td><td width="196"><strong>Maps/Onebox</strong></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">80202</td><td valign="bottom">Denver</td><td style="text-align: left">1. Westin Tabor Center<p>2. Palace Arms Restaurant</p><p>3. Hotel Teatro</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">45240</td><td valign="bottom">Cincinnati</td><td style="text-align: left">1. Papa John’s Pizza: Forest Park<p>2. Wendy’s</p><p>3. Skyline Chili</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">45482</td><td valign="bottom">Dayton</td><td style="text-align: left">1. Take-A-Break<p>2. Lucky Dragon</p><p>3. Dayton Racquet Club/Chantille’s Restaurant</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">01011</td><td valign="bottom">Springfield</td><td style="text-align: left">1. Main Street Station<p>2. Classic Pizza</p><p>3. Mc Donald’s</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">35203</td><td valign="bottom">Madison</td><td style="text-align: left">1. Lisa’s Lunchbox Inc<p>2. Long John Silver’s</p><p>3. Hacienda Mexican Restaurant</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">78201</td><td valign="bottom">San Antonio</td><td style="text-align: left">1. Jacala Mexican Restaurant<p>2. Dave &amp; Buster’s</p><p>3. India Cuisine Simi’s</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">90402</td><td valign="bottom">Santa Monica</td><td style="text-align: left">1. Fathers Office<p>2. Giorgio Baldi Ristorante</p><p>3. Chez Mimi Restaurant</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">97201</td><td valign="bottom">Portland</td><td style="text-align: left">1. Hilton Portland &amp; Executive<p>2. RiverPlace Hotel</p><p>3. Heathman Hotel Restaurant</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">32801</td><td valign="bottom">Orlando</td><td style="text-align: left">1. The Westin Grand Bohemian<p>2. Manuel’s on the 28th</p><p>3. Orlando Marriott Downtown</p></td></tr><tr><td valign="bottom">Restaurant</td><td valign="bottom">30302</td><td valign="bottom">Atlanta</td><td style="text-align: left">1. Sophie’s Bar and Restaurant, Inc<p>2. Ginger Bay Cafe</p><p>3. New York NY Salad &amp; Deli/The Restaurant</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">80202</td><td valign="bottom">Denver</td><td style="text-align: left">1. David Drucker, M.D., P.C<p>2. University of Denver: Counseling and Behavioral Health</p><p>3. Laser Vision Center Downtown</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">45240</td><td valign="bottom">Cincinnati</td><td style="text-align: left">1. Riverside Medical Center<p>2. Diller Philip MD</p><p>3. Orson Austin MD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">45482</td><td valign="bottom">Dayton</td><td style="text-align: left">1. Bhat Maryanne MD<p>2. Schriber Robert a MD</p><p>3. Morgan Heather MD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">01011</td><td valign="bottom">Springfield</td><td style="text-align: left">1. Satin Sol DMD /Cutler WM Phys<p>2. Stuart Marylou DDS/Greenspan Melissa Phys</p><p>3. Greenspan Melissa Phys/Satin Sol DMD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">35203</td><td valign="bottom">Madison</td><td style="text-align: left">1. James M Lewis Ophthalmology<p>2. Smith Robert w MD</p><p>3. Harrell Lindy MD PhD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">78201</td><td valign="bottom">San Antonio</td><td style="text-align: left">1. Clinica Del Norte Pediatrics<p>2. Arriola Homero C MD</p><p>3. Zuschlag Ella MD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">90402</td><td valign="bottom">Santa Monica</td><td style="text-align: left">1. Elander Eye Medical Group<p>2. Lerner Robert G MD</p><p>3. Nancy Rosser Inc</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">97201</td><td valign="bottom">Portland</td><td style="text-align: left">No Onebox</td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">32801</td><td valign="bottom">Orlando</td><td style="text-align: left">1. Orlando Plastic Surgery<p>2. Napolitano Heidi J MD</p><p>3. Nadjafi Morteza MD</p></td></tr><tr><td valign="bottom">Doctor</td><td valign="bottom">30302</td><td valign="bottom">Atlanta</td><td style="text-align: left">1. Felner Joel M MD<p>2. Diabetes &amp; Endocrinology Assoc P C/ Ambroze Wayne L MD FACS Fascrs Jr</p><p>3. Ambroze Wayne L MD FACS Fascrs Jr/Diabetes &amp; Endocrinology Assoc P C</p></td></tr></tbody></table>

**Analysis of Results and Location Prominence**

The patent application provides many different possible ranking considerations that may be used to decide which results to show in a specific area. It also gives us an insight into what area it might focus upon to display results from, based upon the information that is provided in a query.

Someone searching by specific zip code, in a city that may have multiple zip codes, maybe purposefully constraining his or her search to a specific area, and the results that show up may use a location-based upon a center point around that zip code.

Someone searching based upon city name may not be as concerned about limiting results to one zip code, and instead, the results shown are going to be partially influenced by the boundaries of a map that displays those results.

A search limited to a specific zip code seems to have very similar results regardless of whether the search results are in the OneBox or Google Local, with a couple of exceptions. Larger sample size and more detailed analysis are likely called for to understand why the differences exist.

**Conclusion**

It makes sense that the OneBox results are only from the portion of the map that they present to searchers.

If that searcher then goes to the local results where they see a larger map covering a greater area, the results may change order because there are more results to display over a greater area – if the search query used provided less precise geographic information such as a city name.

If the query used more precise information, such as single zip code, then the results should either be the same, or very similar.
