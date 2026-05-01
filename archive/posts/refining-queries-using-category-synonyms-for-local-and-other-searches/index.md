---
title: "Using a Local Category Synonym to Refine Queries"
source_url: "https://www.seobythesea.com/2007/05/refining-queries-using-category-synonyms-for-local-and-other-searches/"
slug: "refining-queries-using-category-synonyms-for-local-and-other-searches"
date_published: "2007-05-25T11:17:54+00:00"
date_modified: "2020-06-21T14:18:50+00:00"
author: "Bill Slawski"
---

## What is a local category synonym?

Is that local hotspot down the street that you want to look up in *Google Maps* considered a bar, or is it a tavern? (Just what is the difference between a bar and a tavern?)

When looking in Google Maps for a restaurant specializing in steaks, what kinds of calculations might a search engine make regarding categories to help you find a good steakhouse when your query is [steak : city : state].

The way that a search engine classifies a business into a local category may affect how it is listed in a local search, or Google’s universal search interface, so a question like this is important.

A Cafe that isn’t listed amongst Coffee Houses may not be shown to searchers looking for coffee houses, even though it might be exactly what the searcher wanted to find. (A place to eat breakfast and drink coffee.)

A Local category Synonym is a category for a business that may be closely related to a category that business has been placed within by Google.

A new patent application from Google points to a method of recognizing, from user log files and user data, that categories which a business could be listed within may be synonyms so that inclusion in one should mean inclusion in another.

This query refinement approach may improve search results by understanding that someone searching for a bar is also likely to be searching for a tavern. This approach may have broader implications than just for *Google Maps*. There is potential value in a local category synonym for both Google Maps and Google organic search?

Queries can present troubles for a search engine when they are too broad or too specific, and when they include homonyms – words that sound the same and maybe spelled the same but have different meanings. Sometimes context is necessary to determine which meaning is intended, and the offering of query refinements may help provide that context.


### Business Name vs. Business Category

During a local search query, a search engine will attempt to determine if a query phrase used is the name of a business or the name of a category. More complex query terms (with more different types of results) might be treated as categories and less complex terms as business names.

If the query terms are considered to be business categories, they may be treated as candidate synonyms of existing categories in the search engine’s database.

One of the other things that this system would attempt to do is to see if the query is a hyponym – a word/category that is included within another – for instance, a category of animal might include the categories of dog and cat since they are hyponyms. If the category is one of these smaller subsets of the kinds of things that a category might include, the search engine wouldn’t consider it to be a synonym of the broader category.

Prior searches could be reviewed to see if query data and category data indicate that a certain query is a local category synonym, and will incorporate that query data into subsequent search results associated with that category data if they are.

One aspect of that decision to create such an association would be to determine if the prior search results were good. How might you tell if a search result is a good one?

(Good question!)

Answer: A good search result would be one in which a desirable user action has happened in response to a search and the presentation of results, which might be something as simple as a selection of a search result, or a review of the location of a business on a map in response to the search, and even the presentation and perhaps printing of driving directions.

This local category synonym patent is:

[Inferring search category synonyms from user logs](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070118512.PGNR.&OS=dn/20070118512&RS=DN/20070118512)
Inventors: Michael D. Riley and Zhiyan Liu
US Patent Application 20070118512
Published May 24, 2007
Filed: November 22, 2005

Abstract


> Systems and methods for inferring category synonyms from prior result data may include identifying prior query data including query information and category information relating to the prior result data; determining whether the query information is a synonym for the category information, and using the query information and the category information in subsequent search requests if it is determined that the query information is a synonym for the category information.

Example:

A search for “attorney Fairfax, Va.”, would likely be a request for information about an attorney in Fairfax, Va. or a Lawyer in Fairfax, Va. This an example of a local category synonym.

Search results for that query would be based on the submitted query as well as an identified local category synonym for the query terms. So, search results may show for a modified query: (attorney OR attorneys OR lawyer OR lawyers) AND “Fairfax, Va.”. This search might be conducted without asking the searcher if they meant to broaden that query to include the additional synonyms.


### More than Local Search

The patent application describes this process in terms of how it could affect Local Search, but it also notes that such an expansion of categories to cover a local category synonym might be used for other types of searches involving tagged or categorized documents or information, such as product information or pricing searches, textual web-based information, and media (e.g., songs, images, videos, etc.) information.


### Using “Triples” of information

The refinement of search queries may be based upon looking at prior search query/results combinations.

There are a few steps to this:

1) Relevant or “good” triples (query term/result business name/result business category) could be identified by looking at logs of historical searches and results. If the queries result in some other action taken on a result, such as driving directions being created, or the printing of a map, or the emailing of a link, the triple is probably a good one.

2) Once good triples have been identified, queries associated with the good triples may be classified as “name queries” or “categorical queries.”

The likelihood that a query includes a business name, as opposed to a local category synonym, may be determined based on the number of business names that pair with the query. When only a few queries are pairing to a few business names pair, those are considered categorical queries (e.g., low name perplexity), while those queries to which more different names pair with the query are considered to have high name perplexity.

3) Once it is determined that an identified query is both a good query and a categorical query, a decision is made to see if the result category and the identified query should be treated as a local category synonym.

Example

A category “Restaurants-Chinese” may be determined to be a category synonym for the query “Chinese restaurant”, based upon an initial “goodness” determination for the query-result_name-result_category listing a high name perplexity (that is, many business names may be paired with this query). If such a determination is made, the identified category may be assigned as a category synonym for the associated query terms, so that future searches associated with the query will additionally invoke searches relating to the category.

4) Problem with hyponyms – a hyponym is a word whose meaning denotes a subordinate or subclass. An analogy on the difference between a hyponym and a synonym. A square is a kind of rectangle that has four sides of the same length, but a rectangle isn’t always a square because the lengths of its sides can differ. A query of “Chinese restaurant”, maybe a hyponym for category “Restaurants”, since a Chinese restaurant is a sub-category of the category “Restaurants”. Since a Chinese restaurant is a type of restaurant but not equivalent to “restaurant,” like a square is a type of rectangle but isn’t equivalent to a rectangle in meaning, Chinese restaurant should not be used as a synonym for the category “Restaurant”.

Last Updated July 4, 2019., 2019
