---
title: "Driving Directions vs. Reviews as Ranking Signals for Google Maps"
source_url: "https://www.seobythesea.com/2013/09/driving-directions-reviews-ranking-signals-google-maps/"
slug: "driving-directions-reviews-ranking-signals-google-maps"
date_published: "2013-09-18T18:53:32+00:00"
date_modified: "2021-07-30T11:34:58+00:00"
author: "Bill Slawski"
---

## Two Different Restaurants

In my college days, I cooked at some local restaurants (free meals made it an attractive option for a starving college student). One of the restaurants was in the center of town, at one end of Main Street, and it was a popular place for residents who returned repeatedly. It had a great reputation, and word-of-mouth propelled advertising for the place. Another dining venue I worked at was outside of the center of town, nearby an interstate highway. It didn’t have a great reputation and very few regular customers, except for people who would stop during mealtime from the busy interstate. The “food” sign from the highway attracted most of the traffic to its dining room.

Funny thing is that most of the regulars that frequented the first restaurant rarely had to look up its location because it was so well known. Most of the second restaurant people had never been there before and relied upon the highway sign. There’s another restaurant in that location now, and I do not doubt that many people find it via maps or navigation on their mobile devices or in-car navigation. I mention this because I have some issues with a recently granted Google patent.

The patent, which got granted to Google this week, describes how the search engine may look at “popularity” signals, such as how often people look up driving directions for businesses with locations that they can visit in person. It also tells us that in some cases, such as where driving directions lookups are sparse, Google might look at some alternative signals, such as reviews of those businesses, to use a popularity signal to rank pages.

The 4 inventors listed on the patent are also the 4 authors of a Google white paper that I cited in a blog post a couple of years ago, in [GPS to Correct Google Maps and Driving Directions as a Local Search Ranking Factor?](https://www.seobythesea.com/2011/10/gps-to-correct-google-maps-and-driving-directions-as-a-local-search-ranking-factor/). The paper is [Hyper-Local, Directions-Based Ranking of Places](http://www.vldb.org/pvldb/vol4/p290-venetis.pdf) (pdf).


## Correlation between Driving Directions Requests and Number of Reviews

While I cited the white paper for its description of the use of driving directions from Google as a potential ranking signal, what I didn’t include in that post was a section in the paper that considered the use of those driving directions as compared to the number of reviews for businesses. That conclusion was pretty interesting.

It seems that there’s a pretty close correlation between the number of reviews that businesses receive and the number of times that people look up driving directions to those places. I left out the details of the investigation that Google conducted (the link is above if you want more details), but here are conclusions from the comparison:


> In this experiment, we test the feasibility of using driving directions logs to proxy for the popularity/importance of a place. We compare the correlation of the driving directions-based signal with the number of reviews for a place, which is a commonly accepted measure of popularity. The number of reviews was extracted via Google’s business directory, and it is the total number of reviews found in various data sources on the Web…
>
> …There is a clear correlation between the rankings of the results and the number of reviews that a place has, which shows that the driving directions logs indicate the popularity of a place.


## Why A Correlation Between The Rankings of The Results And The Number of Reviews Is Important

The paper also explains why this conclusion is important:

- Driving Directions logs are cheap to collect
- Driving Directions can get requested for specific places much more frequently than user reviews can get left for places
- Driving Directions logs provide “near real-time” indications of changing sentiment for places that is often hard to capture with other types of signals, such as reviews and even PageRank
- Driving Directions logs are usually available for broader types of locations than reviews are

Besides the patent and the paper sharing the same authors, the subject matter significantly affects one, and the other overlaps significantly.

The patent is:

[Directions-based ranking of places returned by local search queries](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08538973&OS=PN/08538973&RS=PN/08538973)
Invented by Hector Gonzalez, Petros Venetis, Christian S. Jensen, and Alon Y. Halevy
Assigned to Google
US Patent 8,538,973
Granted September 17, 2013
Filed: June 4, 2010

Abstract


> A system and a method for ranking search results of local search queries. A local search query and a current location of a user can get received. Next, two or more places that meet the local search query get identified. For each respective place, a corresponding distance from the user’s current location to the respective place is also identified.
>
> The two or more places are then ranked following scores that can get based, at least in part, on the popularity of the two or more places and the corresponding distances from the current location of the user to produce a set of ranked places. The ranked set of places is then provided to the user.

The patent provides some other reasons why Driving Direction requests are useful as popularity ranking signals for local results and can provide more desirable results to searchers:

- Driving direction requests can get used only to help rank pages that are within a certain distance – people may not drive more than a certain distance for a meal, though they may drive further for an antique shop or to visit a landmark
- If the directions request is for pedestrian travel, the distances may be even shorter
- Rankings based upon things such as the numbers of links to web pages may not accurately indicate the actual popularity of a business that people can visit in person


## Driving Directions Requests Search Features

The patent does tell us that there is a difference between stationary directions requests and mobile requests. The distances collected for mobile requests tend to pinpoint the actual locations of searchers much better than for people making requests from desktops since mobile locations can get traced back to Wifi locations or cellphone tower locations (via triangulation).

When information gets collected about directions, the time and day of the request and the distance indicated can be saved. This can show that one restaurant might be more popular for breakfast, and a nightclub that serves food might be more popular around or after dinner. It can help the search engine know how far people might be willing to travel for different types of businesses, too.

When looking at features such as time, other popularity signals might get looked at as well, such as:

- User ratings of the place
- User reviews of the place
- A query independent page rank of a web page associated with the place

If people are more willing to travel further to one place over another, that’s also a signal that can get considered in local search rankings for places.


## Driving Directions Conclusion

In the example I started this post with, I write about two different restaurants. The first was very easy to find and very popular based upon word-of-mouth advertising. It was much more likely to earn glowing reviews. It was also straightforward to find.

The second had a much less robust reputation but benefited from being near a busy highway delivering new diners to the place who had never heard of it before and might never return. The second restaurant was less than half a mile from that interstate and was one that people requested driving directions to make it more likely that they would arrive at their destination.

People visiting the second restaurant were unlikely to leave a review. The food wasn’t exceptional, but it was adequate to fill the bellies of travelers in search of a quick meal. It was popular based on its proximity to the heavily traveled interstate.

A couple of days ago, I listened as a friend gave driving directions to a hardware store about 20 miles away to someone interested in finding the best hardware store that they could. There are other hardware stores with a couple of miles that is nowhere as stocked with high-quality choices.

A place that gets great reviews may be a better choice than one that is popular based upon the distance people might travel to get to it. However, chances are that for most of my personal needs, I’ll never visit that much more distant hardware store.

We don’t know for certain if Google is using popularity signals from places such as their driving direction logs. We do know that they like to collect and show reviews for places since many people like to look for reviews.

Google may be using driving directions information alone, or in conjunction with review information to rank local search results. Chances are that given a chance to spend time searching for businesses, people might look at both types of information. If someone is searching via a mobile device, they might not have the time to look at the review information.
