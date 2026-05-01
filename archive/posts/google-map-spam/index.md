---
title: "Google Tackles Geographic (Map) Spam for Businesses"
source_url: "https://www.seobythesea.com/2012/12/google-map-spam/"
slug: "google-map-spam"
date_published: "2012-12-14T00:02:15+00:00"
date_modified: "2020-06-20T20:27:16+00:00"
author: "Bill Slawski"
---

## How Might Google Police for Map Spam?

When Google ranks businesses at locations in Google Maps, they turn to many sources to find mentions of the name of the business coupled with some location data. They can look at the information that a site owner might have provided when verifying their business with Google and Bing and Yahoo. They may look at sources that include business location information such as telecom directories like superpages.com or yellowpages.com. or business location databases such as Localeze. They likely also look at the website for the business itself, as well as other websites that might include the name of the business and some location data for the business, too. Sometimes they come across Map Spam when looking at those sources.

What happens when the information from those sources doesn’t match. Even worse, what happens when one of these sources includes information that might be on the spammy side? A patent granted to Google this week describes a way that Google might use to police for map spam in such places. The patent warns against titles for business entities that include terms such as “cheap hotels,” “discounts,” Dr. ABC–555 777 8888.” It also might identify map spam in categories for businesses that might include things such as “City X,” “sale,” “City A B C D,” “Hotel X in City Y,” and “Luxury Hotel in City Y.”


> In the context of a business entity, information that skews the identity of or does not accurately represent the business entity or both is considered spam.
>
> For example, if the business entity is a manufacturer of widgets, and information describing the manufacturer contains the text item “best manufacturer of widgets,” then the word “best” may convey more than merely the business category of the entity, and consequently may skew the entity’s identity.
>
> ## Just What is Map Spam, Exactly?
>
> Whereas “a manufacturer of widgets” would objectively describe the business entity, the addition of the word “best” subjectively describes the business entity and possibly inaccurately represents the business entity. Such information is described as spam.

Repeating the same word multiple times might also be a sign of map spam. Including words and letters in number fields, like those for phone numbers could be also be construed as map spam.

The patent tells us that Google could take several steps if it identifies this kind of map spam. It could ignore it in some cases, or it could use it to negatively impact the rankings of businesses. If a business has a location that is important to their business – their customers can visit their office or location in person to conduct business, or they operate in specific regions, a listing in Google Maps can be helpful. Considering that for some Web search queries, Google Maps might be integrated into those results, and being ranked well in Google Maps could be beneficial.

The patent is:

[Determining spam in information collected by a source](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=8,332,415.PN.&OS=PN/8,332,415&RS=PN/8,332,415)
Invented by Anurag Adarsh and Piyush Janawadkar
Assigned to Google
US Patent 8,332,415
Granted December 11, 2012
Filed: March 16, 2011

Abstract


> Methods, computer-readable media, and systems for determining spam in information collected by a source are described. A frequency of occurrence of a phrase included in text items received from a source is determined. The text items are associated with business entities and do not include any spam.
>
> Another frequency of occurrence of a phrase included in text items received from another source is determined. The text items received from the other source may or may not include spam. From the frequencies, likelihoods that a phrase is spam are determined. From the likelihoods, another likelihood that a different text item includes spam is determined.

There are a few steps involved in this analysis of whether information associated with a business entity might be map spam.

**Trusted Sources v. Untrusted Sources**

One of those steps involves whether or not a site that includes information about the business is a trusted source or an untrusted source. Information from trusted sources wouldn’t be considered spam, but information from untrusted sources might be map spam.

A source might be considered trusted based upon things such as the reputation of the source, or previous dealings with the source, or both. If a site isn’t considered to be a trusted source, then it’s designated as an untrusted source.

In some cases, the determination of a source being untrusted might be decided manually.

**Mining Phrases**

Another step has the search engine mining sites for phrases, to see how frequently those phrases appear on the pages that mention a business entity.

The business entity may have several attributes, such as title, business category, telephone number, address, URLs pointing to a website, and so on.

Values for these attributes may be collected from the different sources, including some attributes that are consistent from one source to another, such as title (name of the business), business category, and an address.

The information might be retrieved by the search engine crawling the pages it appears upon, or even electronically via an XML feed.

When information from these different attribute fields is collected at untrusted sites, the search engine might determine with a level of confidence as to whether the phrase is important, or maybe map spam.

**Untrusted Sources and Frequency of Occurrence**

Phrases from an untrusted source are considered by the search engine based upon how often the phrases occur in both a trusted source and an untrusted source. If a phrase doesn’t appear in the trusted source but appears a few times in an untrusted source, the likelihood that it is spam increases. If there are multiple phrases like that from the untrusted source, that also increases the amount of confidence the search engine has that a phrase is map spam.

So what impact might this have?

If a resource ranks for a query in part because of information from an untrusted source (such as “best plumber in Dallas” in a category field), the search engine might adjust the rank of the resource downward based upon the measure of spam it may have calculated was from the use of that phrase in the untrusted source.

The patent provides additional details on how phrases might be identified, possibly by the [use of n-grams](https://ai.googleblog.com/2006/08/all-our-n-gram-are-belong-to-you.html), and when sources that are originally determined to be untrustworthy can become trustworthy (by having the same phrases tend to occur frequently in both the trusted and untrusted sources).

**Information from Users**

The patent also points to the possibility that Google could also provide forms that users could use to provide information about business entities as well. Clusters of users might be created based upon similarities in things like “demographics, category of edits, language, and the like.”

Some of those clusters might be considered trusted sources or untrusted sources, and phrases in the information they provide might be reviewed like for untrusted web page resources.

**Take Aways**

If someone submits their website to several review sites, telecom directories, and regional business directories, and they include phrases such as “best widget makers,” “cheapest widget builders,” and “superior widgets” in the category fields for those sites, and those phrases don’t occur or don’t occur with any frequency, on their web site which Google may have determined to be a trusted site, Google might consider those phrases from those untrusted sites to be map spam.

If that site is determined to rank for one of those phrases because of the influence of the untrusted sites, its rank might be adjusted downward.

What this seems to suggest, if you’re a site owner, is that you should check and take control of different business listing and database sites that might include your business, and make sure that they don’t contain spammy phrases regarding your pages.

Last Updated May 18, 2019
