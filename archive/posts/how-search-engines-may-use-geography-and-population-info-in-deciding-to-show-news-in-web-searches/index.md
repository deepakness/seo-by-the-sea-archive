---
title: "How Search Engines May Use Geography and Population Info in Deciding to Show News in Web Searches"
source_url: "https://www.seobythesea.com/2010/06/how-search-engines-may-use-geography-and-population-info-in-deciding-to-show-news-in-web-searches/"
slug: "how-search-engines-may-use-geography-and-population-info-in-deciding-to-show-news-in-web-searches"
date_published: "2010-06-28T11:29:10+00:00"
date_modified: "2020-11-03T16:44:12+00:00"
author: "Bill Slawski"
---

How does a search engine choose whether to show news items in web search results and when not to?

If you live in Bealton, Virginia, chances are that you may not be too interested in news of a car crash in Brooklyn, New York, when searching for information about Brooklyn. If you’re from Brooklyn, and want to find vacation information about the parks in Wisconsin, you may not be very concerned about the latest winning numbers in the Wisconsin lottery. Yet, someone searching for information about one of the states bordering the Gulf of Mexico these days might be likely to want to see news about the Oil spill in the region.

A Yahoo patent filing published recently describes how they might use a prediction system based upon the search engine’s query logs to decide whether or not to show news results. The prediction system uses a mixture of geographic information related to queries and to searchers as well as information about how “newsworthy” a location might be to make that determination. The patent tells us that it might create similar prediction models to determine whether or not to show other types of results as well. The patent application is:

[System and Method of Geo-Based Prediction in Search Result Selection](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100161591.PGNR.&OS=dn/20100161591&RS=DN/20100161591)
Invented by Rosie Jones, Fernando Diaz, and Ahmed Hassan Awadallah
US Patent Application 20100161591
Published June 24, 2010
Filed December 22, 2008

Abstract


> A system and method is disclosed for determining a prediction measurement, or measure, using geo-spatial information which can be used to determine whether or not to include type of information in search results.
>
> The prediction measurement comprises a measure of the likelihood that an item of the type of information for which the prediction measure is determined will be selected, or clicked on, by a user, if the item of the type of information is included in the search result. Without limitation, one such information type is news.

In the patent filing’s description, we are shown a prediction system might analyze queries to predict whether someone might be interested in news items showing up in their search results. It would look at a query submitted by a searcher as well as historic data, such as previous queries, to decide what kinds of results to show.

That historic data is taken from query logs from a certain amount of time, such as weeks. It could contain a few million queries submitted over that time, and include information associated with each query string, such as:

- The search terms used
- The search results shown to the searcher
- Details about the types of pages included in those results
- Whether news results were shown, and if shown, which ones were clicked upon, if any
- IP address or other information indicating locations of searchers
- Query and click or selection information
- Population information for the regions the searchers were from
- Population density information for the regions identified in queries
- Geographic information extracted from the query, such as a place name
- Geographic distance from the searcher and location indicated in the query

The geographic location of a query might be identified using processes like those described in the Yahoo patent [Geographical Location Extraction](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7257570.PN.&OS=pn/7257570&RS=PN/7257570), which looks at things like place names in a query, and scores them on a probability that they might be places included in a geographic places names database.

The authors of the patent filing tell us that testing has shown that there’s a correlation between “query location confidence” and the probability of a click on a news result. For instance, we are told that queries which contain a place name can be up to twice as likely to receive a news click as queries which do not.

Searchers supposedly also tend to use country and state names more often when they are looking for news, and they use town names more often when they are looking for non-news results like services and businesses.

A place name may also be assigned a click probability, which is a measure of the location’s “newsworthiness.”

The newsworthiness click probability of a location can be influenced by the amount of newsworthy events that have happened at the location. The patent provides some examples. For instance, a query that includes “kosovo” or “pakistan” is more likely to lead to a click on a news result than query which includes place names such as “cedar point” or “utah”.

The population density of the location of a searcher, taken from a source such as the United States Census Bureau population data, may also be used to predict whether or not that searcher might click upon a news results. We’re told that searchers from areas with high population density are more interested in news and are 20% more likely to click on news results than searchers from lower population density areas.

The distance between a searcher’s geographic location and a location indicated in a query can be used in making a prediction as to whether or not a searcher may be more likely to click upon a news result. For instance, some kinds of news may appeal to an audience on a national or regional level, such as news of large natural disasters. It may be much less likely that a searcher from a good distance away would be interested in news that might be considered more local, such as a state lottery result or a car crash.

**Conclusion**

In many of the patents and papers from the search engines on Universal Search or Blended search, where news items might be inserted into web search results, we’ve been told that the decision to include those kinds of results is based upon [relevancy factors](https://searchengineland.com/an-insiders-view-of-google-universal-search-12059).

Here, we’re shown that a search engine might look at other information to make more informed decisions about whether or not to show news results, such as only showing news of local importance to people who are “local.”

It’s possible that similar prediction models might be used by Google and Bing as well, and for information other than whether or not to include news results. For instance, someone searching in Google for a local business might be shown a map for that business in their search results, while people further away might not be shown that map.

Another example. When I search for “New York” or “New Orleans” in Google, I’m shown news results. When I search for “Warrenton, Virginia,” my search results don’t contain any news items. Is that because Google predicts that I’m more likely to be interested in news from areas that have higher population densities? Or because not many “newsworthy” events have taken place in Warrenton? Both are possibilities.
