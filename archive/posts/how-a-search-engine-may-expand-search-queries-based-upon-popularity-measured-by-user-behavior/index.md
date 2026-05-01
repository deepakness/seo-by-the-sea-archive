---
title: "How a Search Engine May Expand Search Queries Based upon Popularity Measured by User Behavior"
source_url: "https://www.seobythesea.com/2008/07/how-a-search-engine-may-expand-search-queries-based-upon-popularity-measured-by-user-behavior/"
slug: "how-a-search-engine-may-expand-search-queries-based-upon-popularity-measured-by-user-behavior"
date_published: "2008-07-01T09:18:12+00:00"
date_modified: "2020-06-13T10:33:41+00:00"
author: "Bill Slawski"
---

Have you ever searched at a search engine and received results that weren’t very good matches?

You may have searched again after changing the query terms that you used, or you may have given up on the search.

For example, you perform a search, such as “pizza in Elkton, Maryland,” and you don’t receive any actual matches on “pizza” in the locality of “Elkton.” There may be “pizza” results in nearby areas.

Should a search engine display those results from the nearby area, even though they weren’t quite what you were looking for?

How would a search engine go about expanding your original query, to return results to you that might be relevant, but that doesn’t match the words that you used when searching?

**Expanding a Searcher’s Query Based upon Popularity Rankings**

Search engines collect a lot of information about what they find on the Web and a lot of information about how people search for that information.

If a search engine decided to rate the query terms that people used when searching or refining their original searches, to come up with popularity rankings for the original and refined search terms, could those rankings help the search engine provide helpful alternative results based upon popular queries that may be related to the original query terms?

Such a popularity system would learn from the behavior of users of the search engine, and base popularity rankings for queries upon user behavior such as query refinements and clicks through to certain pages showing in search results.

Those popularity rankings may include queries that involve geographic content. So, if people searching for pizza in Elkton, Maryland doesn’t find results that they like in that search, they may choose to look for pizza in another specific city next, such as Newark, Delaware, over other cities.

Their choice of choosing a specific city when refining their search query may result in high popularity for a search for pizza in that new city, and lesser popularity for a search for pizza in other nearby cities.

One option that a search engine could have when there aren’t many results in a search for something like pizza in a specific geographic location would be to just broaden the search results by distance, showing results for pizza in geographic regions surrounding the first city.

But, the search engine might notice that searchers tend to refine their original search, for pizza in Elkton, Maryland, to look for pizza in Newark, Delaware.

Since that is a popular query refinement, after people see the original results of a search for pizza in Elkton, it might make sense for the search engine to expand the original search results for “pizza in Elkton, Maryland,” to blend in results of the search for “pizza in Newark, Delaware,” in the future.

A Yahoo patent application explores how popularity rankings might provide expanded results like this when the results from an original query leave people unsatisfied with what they see in those search results.

[System and method for query expansion](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080154856.PGNR.&OS=dn/20080154856&RS=DN/20080154856)
Invented by Soren Riise, Devesh Patel, Bruce Campbell, David Richardson-Bunbury, Eugene Stipp, and Rosie Jones
US Patent Application 20080154856
Published June 26, 2008
Filed: December 20, 2006

Abstract


> A system is disclosed for expanding a user query based on user learned popularity rankings. User queries often have no exact match, resulting in a user having to refine or abandon the search. The disclosed system obtains popularity rankings based on the content of a user query.
>
> The system expands the user query based on the popularity rankings. Thereafter, query results based on the expanded user query may be provided to the user. The system also regularly learns from user behavior and adapts the popularity rankings according to the learned information.

**The Popularity of Query Terms**

A search engine might use several different ways to determine how popular a query term might be.

***Reference counts*** — a running total might be kept of the number of times a probable query term is mentioned on the Web in:

- News articles,
- Blogs,
- Web pages,
- Business listings, or;
- Other sources of data that might indicate that people are interested in those terms.

***Number of searches*** – How often do people actually search using that query phrase?

***Number of times used as a query refinement*** – How often do people perform a search with another phrase, and then change their query to that one?

***Satisfaction with click throughs*** – When people use that query term, how often do they appear to click through a result and spend some time there, and seem satisfied enough with the result

**How a Query Expansion System Might Expand a Search Query**

Someone submits a query to a search engine. The query may include more than one part, such as “pizza” and “Elkton.”

A popularity ranking associated with the query is looked up.

The popularity ranking may be associated with the whole phrase, each part of the phrase, or a combination of all the parts.

Example

The popularity ranking may be associated with the phrase “pizza in Elkton,” or with the combination of “pizza” and “Elkton,” or with popularity rankings for each part individually – one popularity ranking with “pizza,” and another popularity ranking with “Elkton.”

The popularity rankings may include information about relationships with other search phrases, based upon user behavior, such as query refinement data. For example, people searching for “pizza in Elkton” may follow up that search with a query of “pizza in Newark.” If such a query refinement is popular, then Newark may be considered to be a relevant locality for Elkton.

If people are presented with results for both Elkton and Newark when the original query was for Elkton, and more people click on Newark results than Elkton results, the system may take note of this, and provide even more Newark results to searchers.

The popularity ranking may also include a reference count, based upon how often those query terms appear on the Web.

**Expansion of Non-Geographic Terms**

When someone looks for pizza anywhere, people performing that search might refine their queries to find Italian food instead.

So, someone looking for “pizza in Elkton” might be shown results for “Italian food in Elkton” too.

**Ranking Results when Queries Have Been Expanded**

Using popularity rankings based upon user data means that results from more than one query may be displayed in a set of search results. This kind of query expansion could happen in normal web results and could be used in local search results, too.

It might also use information from the local search databased when deciding what query terms to include in the expanded search, and how to rank the results. The patent application provides a couple of examples:

***Ranking results when localities are expanded:***


> For example, the query expansion system may have augmented a query for “pizza in Pasadena” to also include pizza listings in Altadena and Glendale. In this example, the query expansion system may rank the Altadena and Glendale listings according to the number of pizza listings associated with each locality, e.g., ranking Altadena listings above Glendale listings where Altadena has ten pizza listings and Glendale has five.

***Ranking results when the subject of the search is expanded:***


> In another example, the query expansion system may have augmented the “pizza in Pasadena” query to also include Italian food. In this instance, the query expansion system may rank the Altadena and Glendale listings according to the number of pizza or Italian food listings associated with each locality.
>
> The query expansion system may also rank the pizza listings separate from the Italian food listings and list the ranked Altadena and Glendale pizza listings first, followed by the ranked Altadena and Glendale Italian food listings.

***Including user feedback and ratings in rankings of expanded queries***


> The result ranking may also include aggregate user feedback data. The aggregate user feedback data may be feedback ratings from sources such as local.yahoo.com corresponding to one or more of the queried terms. For example, where the query expansion system augmented a query to include neighboring localities, the results of the augmented query may be listed in an order corresponding to user feedback associated with those neighboring localities.
>
> Referring again to the “pizza in Pasadena” query, the results associated with Altadena may be ranked higher if the collective user rating of restaurants, pizza restaurants, and/or Italian restaurants in Altadena is higher than that of Glendale.

***Including the popularity rankings when ranking results of expanded queries***


> The result ranking may also include the popularity rankings. For example, the results may be ranked according to the relative reference counts associated with any neighboring localities included in the augmented query. The results may be ranked according to user click behavior. The results may also be ranked according to query refinement data.

**The Influence of Geocoding on Expansion of Geographic Queries**

When this query expansion system involves geographic terms, there may be special attention paid to specific geographic components such as:

- Zip codes,
- Area codes,
- Street names,
- City names,
- County names,
- State names, or;
- Other address-type terms.

Other examples of geographic components include:

- The name of a stadium,
- A park,
- A neighborhood,
- An administrative district, and;
- Other arbitrary terms referencing a locality.

The query expansion system may also pay attention to popularity rankings for nearby geographic locations.

**Conclusion**

A search engine may insert additional results into results for search queries when the original results are ones that don’t seem to satisfy searchers, as indicated by a lack of click-throughs on those results, or quick reformations of query terms by searchers.

Popularity rankings based upon several times a query term shows up on the web, the number of click-throughs that pages are shown in response to searches for that query, and the number of times people reform a different query into that query may be a factor in determining whether a query term is a good choice to use for blending into the results for a less popular query term.

This patent application shows off how query expansion might work when queries involve geographic terms and discuss related geographic terms, and how local search results might influence the rankings of results when results from more than one locality are included in results.

We should probably keep in mind that query expansion can happen for other types of results, such as news results, and factors involving popularity and rankings when results from expanded queries are blended into a final set of results that may be different than the ones listed above for locality-based query terms.
