---
title: "A Google Approach to Improving Location Information Accuracy"
source_url: "https://www.seobythesea.com/2007/01/a-google-approach-to-improving-location-information-accuracy/"
slug: "a-google-approach-to-improving-location-information-accuracy"
date_published: "2007-01-20T02:20:08+00:00"
date_modified: "2020-06-21T19:03:11+00:00"
author: "Bill Slawski"
---

[![The Front Door to Google in Mountain View](media/363148985_5ca521e52f_m.jpg)](https://www.flickr.com/photos/bragadocchio/363148985/)

It’s unlikely Google will unerringly determine that when you search for “Mountain View” and “Pizza” that you may be looking for pizza in Mountain View, California, rather than a pizzeria on Mountain View Road in El Paso. A new patent application from Google may provide some insight into how Google is attempting to make geographic-based search more accurate.

Figuring out user intent can be hard, and searchers are often hesitant to provide detailed location information to get an answer to a search involving locations. Yet they’ll usually expect an exact and unambiguous response.

As Mike Blumenthal has written about on [Understanding Google Maps & Yahoo Local](http://blumenthals.com/blog/), there are some issues with the location information that Google provides for organizations, in his post [Local Data Accuracy- a veritable beehive](http://blumenthals.com/blog/2007/01/18/local-data-accuracy-a-veritable-beehive/).

It’s impossible to tell whether or not the processes described in this patent filing are presently being used, or if they may be a future approach that will be tried out, but it’s interesting to get a peek at possible approaches to solving this issue.


## Geographical Locations

Providing information about locations is a growing part of what a search engine does, from helping someone find a location through a mapping program, to letting them plan for traveling to a certain destination and possibly what they will find along the way.

Local search, enabling a person to pinpoint possible destinations within a specific area, is also a key aspect of what a search engine can bring to us, as is the inclusion of relevant advertisements for that area.

When people perform those types of searches, they want to find relatively precise and unambiguous locations. But, as the patent application notes, it’s probably a good thing if a system like this doesn’t demand such unambiguous input from users. They probably won’t be happy with a system that demands they “provide a precise location or address, without any typos and with perfect detail.”

Asking searchers to supply their latitude and longitude for a location, or Global Positioning Service (GPS) coordinates won’t work. And, chances are that most folks in Mountain View, California, are unaware of Mountain View Road in El Paso.


## Primary Values and A Single Database

We’ve seen many patent applications from Google over the past year about geographic information and local search. This latest one provides some insights and approaches from what appears to be a database administrator’s perspective.

You can sense that from the beginning of the document’s detailed description, which uses a lot of words to essentially tell us that a good database structure tries to store information in only one place, for use in many different applications.

The location information accuracy patent application also provides a common vocabulary for information being collected, and details about the breadth of information to show how it might be used in different ways.

It also calls for some type of unique information for each location, as a kind of primary key that doesn’t change even though there might be more than one way to indicate a specific place. The location identifier referred to in the title of this patent application is something like latitude/longitude coordinates or GPS coordinates, which it will try to use in response to a different identifier, such as an address, for the same location or locations.

So, how do you associate content, such as web pages, with locations, to provide that content in response to location-based queries? Can you associate an accurate computer-usable location identifier with (and from) user-provided human-usable location identifiers? What process would you follow to extract addresses from queries, and from web pages to associate human terms with those computer-usable location identifiers?

One issue that arises in this process, mentioned in the document, is that in areas such as Japan, the standards people follow for identifying locations vary widely in syntax and style, which can make conversions between human-usable locations to computer-usable locations difficult.

[Identifying locations](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070015119%22.PGNR.&OS=DN/20070015119&RS=DN/20070015119)
Invented by Christopher M. Atenasio
US Patent Application 20070015119
Published January 18, 2007
Filed: July 13, 2006

Abstract


> A computer-implemented method includes
>
> receiving in a query a location identifier from a user of a remote device,
>
> parsing the input location identifier to generate one or more location-related tokens,
>
> querying a repository of location information with the one or more location-related tokens to identify locations for one or more documents having a substantial match to the tokens,
>
> scoring the one or more documents using a mass of location for each document that represents the geographical size of a location associated with the document, and
>
> presenting information relating to the one or more documents for display using the mass of location.


## Location Information Accuracy

The method described in the patent filing involves:


## Creating a Location Repository

The focus of this document involves creating a location repository, where it would try to match up location information favorable to computers, such as latitude/longitude or GPS coordinates, with information more likely to be used by human searchers. This system would allow for retrieving location identifiers for a variety of applications, so it can be used for many purposes with minimal effort.

Centralizing geographic information helps the system avoid duplication and inconsistencies involving location information, and also makes it easier to develop additional location-based applications.

Three examples of how the information could be used:

1) In responding to requests to find a location on a map,
2) Finding Information associated with a specific area, and;
3) Finding documents associated with a specific location

The repository would contain many location documents which each describe a unique location in the world (though multiple documents may have overlapping locations, and could even describe identical locations in appropriate circumstances).

The location documents may include a number of common attributes, including:

- An id,
- An address,
- A structured address,
- A mass, and;
- A location identifier.

*ID*

Maybe a unique identifier string, such as a common street address, or a region name.

*Address*

May contain the name by which the location is called, and may be similar to the id, but in a more readable form.

*Structured address*

A form of the address, broken into portions so that the system may have more control over how the various portions of the address are displayed or presented.

*Mass*

Mass is a description of importance, expressed as a number, for a location. So, the mass may be based upon an approximation of the number of point addresses contained in a location. The mass of a single address might be 1, a town might have a mass in the thousands based upon the total number of single addresses within the town, and the mass of a country might be in the hundreds of thousands or millions.

*Location identifier*

May include any appropriate identifier usable by the system for computing things such as a map. Specifically, the location identifier may include a lat-long point or combination, the coordinates of a bounding box for a region, or a polygon.

The patent goes into some detail on how it would attempt to find pages on the web that contain documents with location information like that described above, and incorporate them into a location document for specific documents, which would be placed in the location information repository. The next step is to use that repository to respond to queries from searchers.


## Querying Using an Information Repository

This part of the process involves:

1. Receiving a query which includes a location identifier,
2. Generating one or more location-related tokens from that location identifier,
3. Finding one or more documents from a repository of location information which have a substantial match to the tokens,
4. Scoring the documents using a “mass of location” for each that represents the geographical size of those locations associated with the documents, and;
5. Serving information about those documents for display in an order based upon that score.

In some versions of this process, a query-independent geographical indication might accompany the query, and could be used to score the documents. That indication might be taken from:

- A location where the query came from,
- The bounding box of a map displayed during the search, and;
- A region realted to the Internet domain the searcher is on.

The score for a document may include a ratio of the mass of the document to a distance between the query-independent geographic indication and the location of the result.

Querying a repository of location information may involve:

- Performing multiple searches of the repository using the location tokens, with the followup searches using less specific information until a sufficient number of matches are found,
- Querying for each permutation of location-related tokens with a token eliminated.
- And, possibly:- Querying for each permutation of location-related tokens with two tokens eliminated, if a match is not made with one token eliminated,
  - Weighting each permutation of tokens, and;
  - Using the weights to score results from querying each permutation (including by assigning a weight to each token based on its content and adjusting the weight according to the location of the token in the query).


## Location Information Accuracy Conclusion

Looking around the group for [Google Maps API](https://groups.google.com/forum/#!forum/Google-Maps-API) shows that the [choice of type of machine readable locations](https://groups.google.com/forum/#!topic/Google-Maps-API/sTH5VjxQlcg) used can make a big difference in the accuracy of a geographical information location system.

For a somewhat different look at location information from another Google patent application (published August 2005), you may want to take a look at a post I made last December – [Assigning Geographic Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/).
