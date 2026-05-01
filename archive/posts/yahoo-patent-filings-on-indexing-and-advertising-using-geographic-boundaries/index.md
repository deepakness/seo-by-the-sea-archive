---
title: "Yahoo Patent Filings on Indexing and Advertising Using Geographic Boundaries"
source_url: "https://www.seobythesea.com/2007/06/yahoo-patent-filings-on-indexing-and-advertising-using-geographic-boundaries/"
slug: "yahoo-patent-filings-on-indexing-and-advertising-using-geographic-boundaries"
date_published: "2007-06-17T16:53:10+00:00"
date_modified: "2012-07-16T21:06:27+00:00"
author: "Bill Slawski"
---

Advertisers and searchers can benefit when a search engine collects geographic information from the Web and indexes it by associating that geographic information with a system of overlapping and adjacent geographic boundaries for the locations.

It can mean using considerably less geographically related keywords to bid upon, and on smarter geographically related search results.

In a post from May, [Geo Targeted Advertising for Google Maps and Google Earth](https://www.seobythesea.com/2007/05/geo-targeted-advertising-for-google-maps-and-google-earth/), I described how Google may use, or anticipate using, an approach like this. Looks like Yahoo is considering it, too.

A trio of patent applications from Yahoo were published last week which describe some of the strategies and algorithms that Yahoo may use to gather and organize this kind of data, and use it in search results and advertising.

**Geographic Boundaries**

One of the challenges of creating a database of locations related to web pages, and businesses is that the geographic boundaries that locations appear within can be referred to in a number of ways.

For instance, someone may search for information about a specific street address, or about the town that street is in, or in the county that the town appears within, or the state, or even the country.

Information from the Web page, or email, or other document may be captured in a database with a “geo-code” attached to it that indicates that it is associated with a specific geographic region – and it might be included in a bounded area such as a rectangle or trapazoid that covers that region.

When someone conducts a search for information about a location that is included in that bounded area, they may receive other relevant information within the bounded area. This can include advertisements as well.

**Geographic Information Sources and Formats**

When a search engine collects geographic information related to Web pages, it draws that information from a lot of different sources. It could buy some information from databases put together by telephone companies, or extract it from directories or even web pages.

The information comes in a number of formats, and some of those are more structured than others, so a variety of different algorithms may be used to find geographic information on Web pages, and associate that information with different regions that may overlap or be adjacent to each other.

Information may be taken from pages of sites that present information in a structured format. For instance, a directory that lists a business name, address, phone number, and other geographically relevant information presented in a format that stays the same from page to page. A Yellow pages type directory might make this kind of information available in such a structured format.

Information may also be take from Web pages that provide geographic information in a much less structured manner – often referred to as “semi-structured” or “unstructured” formats. For example, a page may describe a business as being “near” St. Louis. An algorithm that is used in this method may be looking for terms like “near” on a page close to geographic location names.

**Yahoo’s Geo-Coding Patent Filings**

The patent filings from Yahoo describe methods of locating that geographic information and associating it with particular regions and the bounds of those regions. One focuses upon presenting the geographic information based upon a queried location, one considers how the information might be collected, and the third describes how mobile phones might play a role in this process.

- [System and method for providing geo-relevant information based on a location](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070135991.PGNR.&OS=dn/20070135991&RS=DN/20070135991)
- [System and method for populating a geo-coding database](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070135992.PGNR.&OS=dn/20070135992&RS=DN/20070135992)
- [System and method for providing geo-relevant information based on a mobile device](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070135993.PGNR.&OS=dn/20070135993&RS=DN/20070135993)

**The Goals of the Patent Filings**

Roughly, this system has four goals:

1) Allowing search engines, and advertisers to provide searchers with geographically relevant information in response to a query that has some geographic relevance.

2) Allowing search engines to match searchers with geographically relevant advertising and media.

3) Allowing advertisers to to target searchers with geographically relevant advertisements and media.

4) Limiting computer processing when analyzing geographic relevance and relationships by understanding geographic regions and how they overlap and relate to each other.

**Associating Geographic Information with Regions**

Once geographic information has been located on the Web, an important step in the process is the association of that information with regions.

The regions can be structured based upon spatial geometry, wherein geometric shapes, such as polygons, are constructed to represent all of the geographic regions of a given area.

These polygons are developed by looking at:

- physical map boundaries,
- demographic boundaries,
- geological boundaries,
- governmental/administrative boundaries,
- User defined boundaries,
- latitude/longitude coordinates, or;
- combinations of those.

**Vertical and Horizontal Boundaries**

Vertical relationships may be referred to as parent/child relationships and horizontal relationships may be referred to as adjacencies or proximities. In other words, boundaries can overlap each other (vertical), and can be identified as being next to, or near, each other (horizontal).

Vertical structures may be broken up into these kinds of boundaries:

- national,
- super-region,
- state,
- designated market area,
- city,
- postal code, and;
- other combinations.

Horizontal structures

If you were to take the different types of vertical structures above, and look at how boundaries within each type may be adjacent to each other, that is how you identify horizontal structures.

So, Delaware may be bounded on one side by Pennsylvania, on another by New Jersey, and on a third by Maryland. These would be considered “first level adjacencies” and information about regions separated by one or more intervening regions may also be collected.

**Assigning Queries to Regions**

The patents go into a lot of detail on how to associate a query with these boundaries in the easiest and least computation intensive manner they they can.

A very quick and perhaps over-simplistic example of how these boundaries might be useful – someone searches for something and includes “Pasadena” and “California” in their search. Pasadena is associated with a number of boundaries, including one that is within a boundary for California. Because of the overlap, chances are that the boundary for Pasadena in California is the one intended by the searcher.

If someone searched for just Pasadena, then they may have intended a boundary in California, and another in Texas (because there is a Pasadena in Texas). In that case, the search engine may try to use other algorithms to understand which Pasadena was intended.

**How this Helps Advertisers**

The advertisment system would understand which geographic locations are within with bounded regions. A restaurant owner in Pacific Heights might have had to buy every geographic term relating to the location of the restaurant, and under this system may now just have to use a few keywords that are meaningful to the region or regions that they wish to advertise within.

Also, advertisers in the past could purchase regions to advertise within that were represented by circles, with an indentified center point and a radius for that center point, but overlapping circles and jagged and uneven geographic boundaries may create difficulties in targeting the people you really want to target with such an approach.

Someone attempting to target all of Los Angeles with a large circle/radius method may end up having that circle include people in Oakland.

This system might retain the circle approach, but be able to leave out designated regions.

Since the system will create boundaries that are based upon both formal addresses, and less formal addresses, geo-codes for such things as Bay Area, Silicon Valley, Big Apple, Windy City and Wall Street may also be searched by a user and geo-coded.

**Mobile Implications**

Geographic information in this system related to the location of a searcher may be presented to that searcher if the system can identify where that person is located through one means or another, such as a cellular phone that identifies the person’s location.

This information may be gather in ways other than just the use of a portable device, such as through the use of a credit card, or a radio frequency identification chip or publically provided Web services.

A geographic boundary may be small enough to be placed around a single building or sports arena:


> The geo-coding system may also construct a minimum bounding rectangle around a building, sports arena or the like. Thus a user would be able to search for attributes within a certain building. For example, a user could search for law firms or other businesses within the Sears Tower. Yankee Stadium could have its own minimum bounding rectangle so that users may search for local restaurants or businesses near the ballpark.

**Conclusion**

There are a number of differences between the Yahoo approach and the Google methodology, but the idea of associating geographic locations with boundaries is a good one, that has the potential to make geographic based searches better for both searchers and advertisers.
