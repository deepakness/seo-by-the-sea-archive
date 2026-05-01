---
title: "Geo Targeted Advertising for Google Maps and Google Earth"
source_url: "https://www.seobythesea.com/2007/05/geo-targeted-advertising-for-google-maps-and-google-earth/"
slug: "geo-targeted-advertising-for-google-maps-and-google-earth"
date_published: "2007-05-06T13:56:48+00:00"
date_modified: "2018-09-05T07:54:49+00:00"
author: "Bill Slawski"
---

One of the challenges that face the people who make the online maps that we use to find directions, familarize ourselves with an area, find points of interest, and locate businesses is in how to monetize those maps.

Google has come up with a method that allows them to identify and locate boundaries around geographic regions, to enable a spatial index to be built to service geographically related advertisements based upon latitude and longitude coordinates from advertisers.

This system also identifies regions at different levels, such as city, metropolitan region, state, and country, so that ads targeted at those different regions, as seen in the map displayed to a searcher, can be shown to them.

This method is described in three new patent applications from Google published at the World Intellectual Property Organization (WIPO). The patent applications themselves are interesting, in that they describe a method by which areas on a map can be broken down into small rectangular cells that can be identified as containing latitude and longitude coordinates, and also be related to specific geographic regions such as city, metropolis, region (i.e., state) or country.

Those cells are expanded upon to fill different boundaries which identify whether they are within the borders of such regions.

Advertisements targeting specific latitude and longitude areas may be presented to people searching for locations within those regions. While the patent applications are interesting, a document filed with them contains some very interesting information about mapping and advertising that bears a closer look.

First, some links to, and information about the patent filings, and then a close look at that document.

[System and method for Identifying Bounds of a Geographic Area](https://patents.google.com/patent/WO2007050344A3/en)
Published May 3, 2007
Applicant Google Inc.
Invented by Joshy Joseph, Sridhar Ramaswamy, Mark Rose, and Daniel Vaughan

Abstract


> A system and method for determining bounds of a geographical area, such as a city, metropolis, region (e.g., state) or country. From a set of coordinates within the area (e.g., latitude/longitude coordinates), a grid of relatively small cells of geographic data is overlaid upon those coordinates and associated with the area. Each initial cell is iteratively replaced with a larger cell that encompasses the initial cell until the replacement cell intersects a cell associated with some other geographical area or some other boundary condition is met (e.g., a threshold number of replacements).

[System and Method for Identifying Geographical Areas that Significantly Overlap a Map View](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007050343)
Published May 3, 2007
Assigned to Google
Invented by Joshy Joseph. Sridhar Ramaswamy, Mark Rose, and Daniel Vaughan

Abstract


> A system and method for identifying, from a set of geographical areas, a set of target areas that overlap a map view or view port of a map. Target areas are defined as circles having centers and radii, as sets of geographic cells overlaying the areas, or as other polygons of geographic data. Within a view port served or to be served to a user, multiple points are defined and substantially equally spaced within the view port, such that any target area that may significantly overlap the view port (e.g., at least a threshold percentage of the view port) is likely to overlap a minimum number of the points (e.g., one). Some or all target areas are then tested for intersection with some or all of the points, and calculations may be made to determine how much the intersecting areas actually overlap the view port.

[System and Method for Selecting Targeted Information for Serving with a Map View](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007050335)
Published May 3, 2007
Assigned Google
Invented by Joshy Joseph, Sridhar Ramaswamy, Mark Rose, and Daniel Vaughan

Abstract


> A system and method for selecting targeted information (e.g., advertisements) for serving with map views. The information is associated with target geographical areas (e.g., cities, metropolises, regions, countries) identified by the information providers. A given message or other set of information may be served with map views that significantly intersect the message’s target area. A target area significantly intersects a map view if it overlaps the map view by at least a threshold percentage of the map view (e.g., 25%). Messages’ target areas may first be compared with a map view to identify those that significantly intersect. Then, the messages whose target areas significantly intersect the map view may be filtered or screened based on any search terms or key words received with a request for the map view.

The document filed with the patent applications is titled [Serving Ads for Maps/Local Search](http://www.google.com.ar/patents/US7576754) (pdf). It begins by telling us about the objectives behind the project that lead to the filing of these patent documents:


> The objective of this project is to serve ads based on the user’s location of interest expressed as a rectagular region. This is important for enabling Maps/Local Search to display ads relevant to the users’ view point.

A few related projects are mentioned in the document:

1. Ads for Local 2.0 Geotargeting Enhancements

2. Local Ads Quality

3. Location Extraction Server

4. GeoAds

Here’s an example in the document on why these processes are valuable:


> For instance, if the user is viewing a map of the continental US then showing ads targeted at specific cities (e.g. Palo Alto) in the US is undesirable even though those cities of course overlap at the view port. On the other hand, if the user is looking at a map of Palo Alto, then we need to consider ads that are targeted at Palo Alto (city), SF Bay area (metro), California, USA and any custom circle of polygon targets that significantly overlap the viewport

The viewport mentioned is the window of map that someone viewing sees when they are looking at Google Maps or Google Earth.

If you’re interested in geo-targeting and advertising on Google Maps and Google Earth, you may want to spend some time with this document.
