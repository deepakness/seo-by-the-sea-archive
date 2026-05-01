---
title: "How Geographical Intent on a Page may help Optimize Pages Better"
source_url: "https://www.seobythesea.com/2009/05/how-a-search-engine-might-determine-whether-a-search-involves-a-geographical-intent/"
slug: "how-a-search-engine-might-determine-whether-a-search-involves-a-geographical-intent"
date_published: "2009-05-18T12:20:05+00:00"
date_modified: "2021-07-06T14:12:58+00:00"
author: "Bill Slawski"
---

How much does optimizing a page for a geographical intent help with positive search results?

Many websites involve businesses or organizations that provide goods or services or information relevant to people at a specific location, like the location of a hotel or a dentist’s office in a certain city or building regulations for a specific town. Many searchers use search queries that may not include geographic information in a way that makes it easy for a search engine to help those searchers find those websites.

If a search engine can understand whether a search involves a specific geographical location from a searcher’s query, it can provide a richer set of results that include information about that location.

This is true regardless of whether or not the location was even part of the query. For example, if I search for “pizza,” there’s a decent chance that I’m looking for a pizza place nearby.

This is also true if I include something like a landmark in my search, rather than the name of a location, such as a search for “space needle restaurants,” looking for restaurants near Seattle’s [Space Needle](https://www.spaceneedle.com/).

This can be not easy because some queries might seem to be about locations on their face but aren’t. For instance, search for “New York Style cheesecake,” and chances are good that you want to see recipes and not pages about New York. Search for “Manhattan coffee,” and the chances are good that you want to see information about coffee shops in or near Manhattan.

A paper from Xing Yi of the University of Massachusetts, and Hema Raghavan and Chris Leggetter of Yahoo! Labs, [Discovering Users’ Specific Geo Intention in Web Search](http://web.archive.org/web/20131101132019/http://www2009.org/proceedings/pdf/p481.pdf) (pdf), explores how they might use a geographical intent analysis program that can understand whether or not there is an intention on the part of searchers to see geographically related information as part of their search results. This program involves using a “city language model” that calculates the probabilities that certain words and language in a query indicate an interest in information for a particular city.

The abstract from the paper tells us:


> Discovering users’ specific and implicit geographic intentions in web search can greatly help satisfy users’ information needs.
>
> We build a geo intent analysis system that uses minimal supervision to learn a model from large amounts of web-search logs for this discovery.
>
> We build a city language model, a probabilistic representation of the language surrounding the mention of a city in web queries.
>
> We use several features derived from these language models to:
>
> (1) identify users’ implicit geo intent and pinpoint the city corresponding to this intent,
>
> (2) determine whether the geo-intent is localized around the users’ current geographic location,
>
> (3) predict cities for queries that have a mention of an entity that is located in a specific place.
>
> Experimental results demonstrate the effectiveness of using features derived from the city language model. We find that
>
> (1) the system has over 90% precision and more than 74% accuracy for the task of detecting users’ implicit city level geo intent
>
> (2) the system achieves more than 96% accuracy in determining whether implicit geo queries are local geo queries, neighbor region geo queries, or none-of these
>
> (3) the city language model can effectively retrieve cities in location-specific queries with high precision (88%) and recall (74%); human evaluation shows that the language model predicts city labels for location-specific queries with high accuracy (84.5%).

Some interesting statistics mentioned in the paper:

- 13% of searches involve some level of geographical intent
- 50% of searches involving geographical intent don’t actually use a location in the query (like searches for “pizza” or “dentist”)
- 84% of queries that include locations do so on a city level

Some other interesting points from the paper:

– If a query with a geographically related intent is one where the location isn’t stated but is likely to be associated with the location of the searcher, it can make sense for a search engine to look at information like the IP address (or GPS information if the searcher is using a mobile phone) of the user to deliver locally relevant results.

– Some queries that show a geographical intent may have a geographic region of relevance that is larger or smaller than others – people might be willing to travel only 10 miles for “pizza” but will go 30 miles away for good “dentist.”

– A query with an explicit geographical intent consists of two parts – location and non-location. Studying non-location parts of those explicit queries can help a search engine understand queries where the location part isn’t included in a search.

If the language model used is quickly retrained regularly from query log and click-through information, it might help a search engine adapt to seasonal changes and provide timely information, allowing answers to provide location information to queries like “next red sox game.”

– The geographical intent analysis program described in this paper was trained with a month of Yahoo query logs from May 2008 and tested with a month of Yahoo query logs from June 2008. It provides detailed information about the processes involved in detecting whether or not a query has some geographical intent and where the location behind that intent might be.

– In the training set of data, approximately 96.2 million U.S. city-level geo queries were identified. In the testing set, 96.7 million U.S. city-level geo queries are identified. Overall, the researchers involved in this study found 1614 distinct cities from the data in both sets. Language models were created for each of those cities so that when non-location information relevant to a specific city is seen in a query, it may be examined to see if it is related to that city (such as “space needle” being related to Seattle, or “Macy’s Parade” being related to New York City.)

If you’re interested in how a search engine might decide whether or not a query has a location or geographical element to it, regardless of whether or not the query states a specific location, you may want to spend some time with this paper.

If you have a website that offers goods or services or information tied to a particular location, the processes described in this paper are some that may help searchers stand a better chance of finding your site online the next time that they search for “attorney’s office,” or “camping near Shenandoah park,” or “Macy’s Parade Hotel,” or use some other query that may involve a geographical intent without including an actual location.
