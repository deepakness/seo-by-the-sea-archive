---
title: "Crowdsourcing Behind New Apple Local Search Patent"
source_url: "https://www.seobythesea.com/2011/09/crowdsourcing-new-apple-local-search-patent/"
slug: "crowdsourcing-new-apple-local-search-patent"
date_published: "2011-09-08T11:49:04+00:00"
date_modified: "2020-06-20T21:30:52+00:00"
author: "Bill Slawski"
---

## How Does Apple Local Search Work?

A new patent application from Apple describes how they might incorporate user information data into ranking locations in Apple Local Search. This probably has some implications for businesses that rely upon services like Google Maps and Google Place pages to bring visitors to their shops and offices, and I thought it was worth exploring the Apple patent in more detail. It appears that in some instances, certain types of applications might be better suited for sharing information than search, and a rich smartphone environment might be one of those when it comes to local maps.

A couple of years back, Google researchers published a study titled [Computers and iPhones and Mobile Phones, oh my! A logs-based comparison of search users on different devices](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/35252.pdf) (pdf) where they explored how people used different devices to connect to the Web, and looked at the kinds of queries that they performed.

One conclusion in the paper was that search behavior on desktop computers and iPhones was more similar than on other types of mobile phones. In an area where the researchers expected some differences between what people searched for on an iPhone compared to a desktop computer was local search type queries, with the expectation that there would be a good deal more location-based searches on the mobile devices. But, in what they called one of the most surprising conclusions of the study, they found that there were only “1.7% more local queries issued from an iPhone than from a computer.”

A possible explanation that the Google researchers came up with was that people using iPhones were using a Maps application rather than Web search to find local information, and they looked at user search patterns from their iPhone version of their Mobile Maps Application (now [Google Maps for Mobile](https://www.google.com/maps/about/)) to confirm that more people were performing those types of searches through an application than through a Google Maps search, probably because of the richer user experience that they could get through the application. This may be one reason Google has been enriching its local mobile applications.

So let’s say that Google has been beefing up the user experience for finding local information with its maps applications by offering things like navigation, 3D maps, Place Pages, My Location, Street View, Compass Mode, Google Latitude, Real-Time Traffic Reporting, and other features. While all of these features provide additional layers of usefulness, a search is still one of the most important aspects of local maps results, and Google incorporates many different algorithms in providing Maps results.

So what does the Apple local search patent offer in terms of ranking places on Maps, and how might it stand up to Google’s map results?

The patent filing is:

[Relevancy Ranking for Map-Related Search](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110218992%22.PGNR.&OS=DN/20110218992&RS=DN/20110218992)
Invented by Jaron Waldman, Chad Richard
US Patent Application 20110218992
Published September 8, 2011
Filed: March 5, 2010

Abstract


> The following relates to ranking search results consisting of locations or recommending locations to visit based on recorded data representing visits by a plurality of users to the locations represented as search results or recommended locations to visit. The data representing users’ visits can be recorded by receiving data anonymously reported by handheld communication devices carried by the plurality of users.
>
> A handheld communication device, which is carried by a user, can report to the system the user’s present location optionally associated with a time stamp. The handheld communication device can report either a single location coordinate or a collection of coordinates gathered over time.

**Why Crowdsourcing as a Ranking Feature?**

The title tells us that this patent focuses upon “relevancy” ranking for locations, but I’m not seeing much in the patent that tells me how they might determine how relevant a location might be for a query. Instead, the patent looks to information about visits to locations.

In the beginning section of the patent description, we’re told about how other mapping services provide rankings for searchers and the limitations of those methods. These include ordering search results by:

- Proximity – or the closeness to a location searched from or identified by the searcher
- An average user ranking
- According to positions in the search results sold as advertisements
- A variety of mechanisms

Search results ordered by proximity don’t account for the quality of the results relative to the query, and results ordered by user rankings may be based upon opinions of relatively few people who provide reviews. Advertising based results also miss ranking results by the quality of those results.

We know that some of the mechanisms that Google uses to rank search results can include associating specific businesses and their locations with an [Authoritative website](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/) for that business, and in many cases, how [prominently](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/) that business is associated with that location based upon links, mentions, and other references to a business at a specific location.

Apple doesn’t have the crawling and indexing infrastructure that Google does to find mentions and links and references to locations on the Web, but they do have a very large number of people who are using iPhones, and they can track the locations of those users. I’ve written a little in the past about the possibility of Google and Apple competing with location-aware services in the post [Apple vs. Google vs. Yahoo on Location Awareness and Parking](https://www.seobythesea.com/2010/01/apple-vs-google-vs-yahoo-on-location-awareness-and-parking/).

The Apple local search patent tells us that:


> By ranking search results consisting of locations or recommending places to visit based upon actual visits to the locations, the collective wisdom and experience of the population can be used to deliver higher quality search results.
>
> The data representing users’ visits can be recorded by receiving data anonymously reported by handheld communication devices carried by the plurality of users. A handheld communication device, which is carried by a user, can report to a system for collecting such data for use with ranking or recommending locations to visit, the user’s present location optionally associated with a time stamp.
>
> The handheld communication device can report either a single location coordinate or a collection of coordinates gathered over time. Importantly, no user information is sent from the handheld communication device and the system cannot associate the received data with the user.

**Apple Local search Restaurant Ranking Example**

We are also told that this system will assume that if someone visits a particular location, such as a restaurant, for a sufficient period that it will be assumed that they ate at the restaurant. If they visit a restaurant more than once, it can be assumed that they liked the restaurant. If two different users visit the same restaurants, then they likely have the same tastes in restaurants. So, someone asking for a recommendation for a new restaurant to visit might have one recommended to them based upon others who seem to have similar tastes. The more people in this location data system who can be said to have similar tastes, the better the recommendation.

Restaurants that have been visited by many people who tried one restaurant and then also tried another restaurant might also be said to be similar, and regardless of the tastes of individual users, that similarity might also be used to make recommendations.

I can see how these assumptions might work for restaurants, and the patent spends a considerable amount of effort into describing how location-based data from many people carrying around hand-held devices might be used within that context. But, those assumptions might not hold for other types of businesses, such as auto mechanics or insurance companies.

Within the context of a search for a restaurant, we are told that a location popularity index might also collect information involving numbers of users that visited a particular location such as:

- Total number of visitors per day
- Visitors during breakfast hours
- Visitors during lunch hours
- Visitors during dinner hours
- Average period of time of visit
- Distances that various users traveled from their last recorded location to their present location
- Number of visitors that were at their office as the last identified location
- Number of visitors commuting before visiting their next location

Of course, different types of location data may be considered for different types of businesses that someone might visit to provide a ranking score. For instance, if a lot of people visit a particular place and spend less time there than it might take to normally conduct a transaction, such as an auto dealership, and then visit another auto dealership where they spend much more time, then the first auto dealership might not rank as highly as the second.

**Conclusions**

It has appeared since the Google Study that I mentioned at the start of this post that Google is attempting to make its mobile approach to search more application like to provide a more useful and engaging interface for smartphone users, which makes sense especially in light of their development of Android, and their purchase of Motorola Mobility.

There does potentially seem to be a fair amount of value to using crowdsourcing information to help rank locations in a mapping service, as long as user privacy can be protected. I’d love to see the kind of ranking approach that Google provides for locations merged with a crowdsourcing approach described in the Apple patent.

I am wondering though if a system like this would tend to work better in an urban setting where there’s the potential for considerably more data than in more rural areas.
