---
title: "Building Google's Knowledge Base and Identifying Locations in Web Pages"
source_url: "https://www.seobythesea.com/2013/01/knowledge-base-locations-in-web-pages/"
slug: "knowledge-base-locations-in-web-pages"
date_published: "2013-01-11T00:13:55+00:00"
date_modified: "2020-06-20T19:51:59+00:00"
author: "Bill Slawski"
---

When we talk about indexing and crawling content on the Web, it’s usually within the context of pages being ranked based on many signals found on Web pages that might be ranked in response to queries. Google has told us that the future of search involves Knowledge Bases, and the indexing of [Things, Not Strings](https://googleblog.blogspot.com/2012/05/introducing-knowledge-graph-things-not.html). Gianluca Fiorelli explored Google’s ideas of [Search in the Knowledge Graph Era](https://www.stateofdigital.com/search-in-the-knowledge-graph-era/) earlier this week.

A few years back, I wrote some posts about some Google Patents that explored how Google might be [extracting and visualizing facts](https://www.seobythesea.com/2007/08/designating-data-objects-for-analysis/), and using [Data Janitors](https://www.seobythesea.com/2007/06/google-janitors-clean-up-facts-on-the-web/) to process that information and clean it up and sort it. Google was granted another patent this week that’s very much related, looking at how Google might understand locations for places collected from Web pages. One of the inventors, Andrew Hogue, gave this Google Tech Talk presentation last year:

The presentation and the patent talk about how difficult it might be to extract locations from documents (and other types of information as well).

As the patent notes, place names can be difficult because they might be presented in many different formats, they might have typos or errors or omissions or ambiguous language. Does a word such as Turkey refer to a place or a meal? Is Newark mentioned on a page located in New Jersey or Delaware?


## Extracting Facts About Places

The patent attempts to understand when a web document is referencing a place, and where that place may be located, and apply tags to the page with the location.

The patent is:

[Determining geographic locations for place names in a fact repository](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=8,347,202.PN.&OS=PN/8,347,202&RS=PN/8,347,202)
Invented by David Vespe and Andrew Hogue
Assigned to Google
US Patent 8,347,202
Granted January 1, 2013
Filed: March 14, 2007

Abstract


> A system and method for tagging place names with geographic location coordinates, the place names associated with a collection of objects in a memory of a computer system. The system and method process a text string within an object stored in memory to identify a first potential place name. The system and method determine whether geographic location coordinates are known for the first potential place name. The system and method identify the first potential place name associated with an object in the memory as a place name.
>
> The system and method tag the first identified place name associated with an object in the memory with its geographic location coordinates when the geographic location coordinates for the first identified place name are known. The system and method disambiguate place names when multiple place names are found.

My post linked to above about Data Janitors describes how they might work. This patent shares an inventor with that one, and covers some of the same ground in describing what a janitor is, and what they do, including “data cleansing, object merging, and fact induction.”


## Facts are About Named Entities

When you perform a Q&A type query on Google for something like, “When is Britney Spears Birthday,” possible answers found on Web pages are 12/2/1981 and Dec. 2, 1981. They are the same date, but not written in the same format. Janitors are responsible for recognizing that these are the same dates in different formats. This is part of how a web of things operates – cleansing and cleaning and organizing facts, and the attributes and values associated with them.

Facts are information about named entities (specific people, places, and things) on the Web. These named entities can be specific people (many of who can be found in Google +). They can be about places, or points of interest, or businesses at specific locations, many of which can be found in Google Maps. Knowledge Bases that Google may use can include Wikipedia, Freebase, the IMDB, NetFlix, and other large databases about people, places, and things.

Even Google’s query and click logs can provide information about named entities, and attributes associated with them that people are interested in, especially when those logs are associated with [query sessions](https://www.seobythesea.com/2009/03/how-searchers-queries-might-influence-customized-google-search-results/).

![Bill Clinton playing a saxophone at a state sponsored event.](media/bill-clinton.jpg)

A fact might be a name fact, such as a name for an object such as “Bill Clinton.” A fact may also be a property fact, such as the string of text, “Bill Clinton was the 42nd President of the United States from 1993 to 2001.”


## A Geopoint Janitor

This patent introduces a geopoint janitor, which works to try to understand if a string of text is referring to a place name by following rules about places. It may also attempt to apply known geographic locations associated with potential place names. It might look at a list of “existing annotated place names and/or through a coordinate lookup service.” The geopoint janitor decides, for instance, if Turkey is a place or a bird. The geopoint janitor is also what tags a document with a place name and a location.

How does the geopoint janitor do this?

It follows rules, like looking for whether or not certain words are capitalized in sentences like, “I visited the Empire State Building in New York City.” It might ignore capitalization in the first word of a sentence when doing so. It might also ignore capitalized words like, “I”, which the patent calls a “noise” word.

![A workman helping to build the Empire State Building.](media/empire-state-building.gif)

It might also look for words that commonly precede or follow locations, such as, “in.” It might learn about these types of words based upon locations it’s already aware of, such as “New York City.”

The geopoint janitor may also learn when there are different variations of a potential place name. It might learn about such alternative names by looking at sentences such as, “I love visiting the Empire State; New York is a fabulous place to vacation.”

The patent provides some other examples of rules that might be followed to understand when a place name is referred to on a Web page.


## Take Aways

The future of search may be in having a search engine understand what a web page is about, instead of matching words on a page to words within a query. By following rules to understand what a page maybe actually about, including the places referenced within it, we’re moving steps closer to that kind of understanding.

Google’s knowledge base results give us information about named entities associated with queries. By looking at Google’s log files and click files, the search engine may also include information and links to related queries and search results.

As this patent shows, Google is looking at as many web pages as possible to find information about entities on those pages. The kind of rules that a geopoint janitor follows to understand places and pages on the Web, and to tag those pages is a start towards a web of things instead of strings.
