---
title: "Which Newark is Dominant? Classification of Ambiguous Geographical References"
source_url: "https://www.seobythesea.com/2006/07/which-newark-is-the-dominant-newark-classification-of-ambiguous-geographical-references-in-local-search/"
slug: "which-newark-is-the-dominant-newark-classification-of-ambiguous-geographical-references-in-local-search"
date_published: "2006-07-24T12:37:38+00:00"
date_modified: "2020-06-21T20:37:42+00:00"
author: "Bill Slawski"
---

## Ambiguous Geographical References Are A Problem in Local Search

A local search engine works by attempting to return relevant web pages associated with a specific geographical region or location. When the search engines index web pages, it can be helpful to attempt to automatically associate those pages or sections of them with specific places or regions.

Ideally, for example, a web page about a restaurant in New York City should be associated with New York City. This connection can be easier to create if there is a postal address or other geographical information on the page associated with that location and restaurant. But sometimes, a page will only contain a partial address or information that makes it difficult to draw that connection between page and place. The location becomes an ambiguous geographical reference at that point.

Another issue that comes up in local search is which geographical region should the search engine show results from when there may be more than one location or region with the same name, or a similar name. For instance, If I want to order a pizza from one of the local pizzerias, I might search for Pizza Newark, but I probably won’t be happy with the Google local results which show Newark, New Jersey, pizza places, instead of Newark, Delaware.

Yes, I can add a zipcode or state name, and that will solve the problem. But I want to know why the local search chooses New Jersey. Is Newark New Jersey, the most important Newark in the world, or is there some other reason?

Fortunately, we have a Google patent application (which we can poke and prod) that looks at Ambiguous Geographical References:

[Classification of ambiguous geographic references](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20060149742&OS=20060149742&RS=20060149742)
Invented by Daniel Egnor
US Patent Application 20060149742
Published July 6, 2006
Filed December 30, 2004

Abstract


> A location classifier generates location information based on textual strings ininput text. The location information defines the potential geographical relevance of the input text. In determining the location information, the location classifier may receive at least one geo-relevance profile associated with at least one string in the input text, obtain a combined geo-relevance profile for the document from the at least one geo-relevance profile, and determine geographical relevance of the input text based on the combined geo-relevance profile.

**Addressing Ambiguous geographical references-**

To determine the geographic relevance of a document, the search engine uses something called a “Location Classifier.”

A Location Classifier will attempt to automatically classify text from a page, when appropriate, to one or more specific geographic regions.

*Ambiguous Geographical References Example*

Imagine a web page describing a business on Castro Street in Mountain View, California.

It tells us that the business is on Castro Street in the bay area but doesn’t include a full postal address, or telephone number, and never explicitly states “Mountain View, California.”

The Location classifier will look for bi-grams like “bay area” and “Castro Street,” which it may decide are geographically significant.

“Bay area,” by itself, often is used to refer to the area surrounding the San Francisco Bay in California but is also commonly used to refer to other bay locations, such as Wisconsin’s Green Bay.

And, Castro Street may be a common street name.

The Location Classifier may take these two different geographical references together, in “Bay Area” and “Castro Street,” and recognize that their use is likely to indicate that the page is relevant to the Castro Street located in Mountain View, California.

The Location classifier may then generate a complete address or other location identifiers, such as Mountain View, California, 94043, as potentially corresponding to the business mentioned in the document.

Here’s the more technical language used in the patent application:


> A method of determining geographical relevance of a document comprising:
>
> (a) receiving at least one geo-relevance profile associated with at least one string in the document,
>
> (b) obtaining a combined geo-relevance profile for the document from at least one geo-relevance profile, and;
>
> (c) determining geographical relevance of the document based on the combined geo-relevance profile.

So, we have a search engine creating geographical profiles for documents based upon information they find in “strings” in those documents. Where there is more than one page that refers to a region that can be identified by references to meaningful geographical locations, those additional pages may provide other clues to help understand the geographical location of a page. These additional profiles can be used as “training text” to help understand the location of more pages.

**Training the Location Classifier**

The profiles that have unambiguous information, such as zip codes, and addresses can be used to identify others that are more ambiguous, like our “bay area,” and “Castro Street” page mentioned above. We know that “Bay area” and “Castro Street” are related because there are other pages that are tied to the region, and are located there because they have unambiguous geographical location information.

The search engine will try to find all of the pages with unambiguous addresses first, and then use those to help it associate locations with pages indicating more ambiguous location information. This is done by using pattern matching techniques to find addresses.


> The geographic signal can be located by, for example, pattern matching techniques that look for sections of text that are in the general form of an address. For example, location classifier engine 100 may look for zip codes as five-digit integers located near a state name or state abbreviation and street names as a series of numerals followed by a string that includes a word such as “street,” “st.,” “drive,” etc. In this manner, location classifier 100 may locate the known geographic signals as sections of text that unambiguously reference geographic addresses.

The Ambiguous Geographical References patent application notes a few different ways of selecting training text associated with a document:


> (1) a fixed window (e.g., a 100 term window) around each geographic signal may be selected as the training text.
>
> (2) In other implementations, the whole document may be selected.
>
> (3) In still other implementations, documents with multiple geographic signals may be segmented based on visual breaks in the document and the training text taken from the segments.

I wrote about the last of those, [Visual Gap Segmentation](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/), a few weeks ago. It has potential uses beyond local search and is worth checking out to see how Google may be looking at the information it finds on web pages.

**Use of Zip Codes**

Zip Codes are often helpful to this process for a couple of reasons:

1. They are a clear indicator of a location

2. Zipcodes that are near to each other numerically “often correspond to locations that are close to one another geographically.”

**Accumulating Geo-relevance profiles of terms or phrases to determine a dominant location**

As the location classifier finds accumulated occurrences of a string indicating a location, it will collect those and create a histogram-based upon them.

This can help to determine which region is meant by a query using a particular phrase. Here are a couple of examples from the patent application.

*Capitol Hill*

Figure 7A, from the patent application, is a diagram that illustrates an exemplary histogram for the bi-gram “capitol hill.”

That histogram shows three dominant peaks:

(1) A large peak centered in the vicinity of zip code 20515, which corresponds to the “Capitol Hill” area in Washington, D.C.

(2) A relatively small peak centered in the vicinity of zip code 95814, which corresponds to the “Capitol Hill” area in Sacramento, California, and;

(3) A moderate peak centered in the vicinity of zip code 98104, which corresponds to the “Capitol Hill” area in Seattle, Washington.

Although there are numerous references to “capitol hill,” and many of those are not associated with areas in the vicinity of Washington, D.C., Sacramento, or Seattle, the histogram shows that overall, “capitol hill” tends to be used when referring to one of these three locations.

Since Washington, D.C., corresponds to the largest peak, it can be interpreted as the most likely geographic region intended by a person using the phrase “capitol hill.”

*Bay Area*

Figure 7B, from the patent application, is a diagram that illustrates another exemplary histogram, for the bi-gram “bay area.”

It includes two peaks:

(1) A smaller one centered around the Green Bay, Wisconsin, area, and;

(2) A larger peak defining the San Francisco, California, bay area.

*Other Information in the documents*

The Location classifier might attempt to create geo-relevance profiles for some or all of the terms or phrases occurring that it has taken from pages, or may generate a histogram for all the bi-grams (two-word phrases) it sees. It may also create histograms for longer phrases or single terms.

It could ignore some terms or phrases when accumulating those, such as boilerplate language. The Location Classifier may examine terms to the left or right of selected terms and phrases only when these terms are different than previous instances of the terms to the left or right of those. So, if a term or phrase does not occur in a legitimate new context, it may be ignored.

Some phrases may not be geographically relevant, such as the bi-gram “live bookmarks.” The histogram for that is going to be relatively flat. But note that some phrases that don’t seem to be place names or geographic information may have geo-relevance profiles created for them.

As a result of this training, the location classifier may store a number (potentially a large number) of terms/phrases and their corresponding geo-relevance profiles.

According to the patent application, Geo-relevance profiles stored may be normalized based on the global distribution of zip codes in the training data, so that regions that are frequently mentioned in the training data are not overemphasized in the geo-relevance profiles.


## How well does it work?

I performed a local search for “The University of Delaware” located in “Newark,” assuming that if there was a geo-profile for the University of Delaware that it would be related to the Delaware Newark. From what I’ve read of this patent application, that’s not a bad assumption. My results were mostly based around Newark, New Jersey. The first one was from “Orange, New Jersey” and among the URLs shown as associated with that location in Google Local was a listing of the address for that business on a document from the University of Delaware library web site.

That’s a pretty small sample size, and it bears testing on other locations, but I’m not happy with the result.

It does leave me to wonder if the process described in this patent application is in use, or it needs to be tweaked, or if more training needs to happen. The University of Delaware web pages does show a fair amount of geographical location information. Looking over their pages, I see a Newark, Delaware, address on almost every page.

A search for “University of Delaware” in Google local, without including “Newark” as a location finds pages from the school without any problem.

There are a couple more of the recent Google Local patent applications. Perhaps they can provide more information.
