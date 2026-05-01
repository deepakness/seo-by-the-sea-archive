---
title: "Query Suggestion Strategies that Search Engines May Use"
source_url: "https://www.seobythesea.com/2009/08/query-suggestion-strategies-that-search-engines-may-use/"
slug: "query-suggestion-strategies-that-search-engines-may-use"
date_published: "2009-08-12T13:39:36+00:00"
date_modified: "2021-07-06T13:34:12+00:00"
author: "Bill Slawski"
---

With billions of pages on the Web, trying to find the right words to use when you want to search for something can often be hard, especially when looking for information on a topic that you don’t know too much about.

As a designer or site owner, coming up with the words on your pages that searchers expect to see and may use to search for what you have to offer can also be difficult.

Search engines often act as middlemen between searchers and site owners, helping bring people to pages that may help them satisfy some informational need or accomplish some task. Again, that can be not easy, trying to get some idea of what people are looking for with two or three words and showing a list of web pages that might be helpful to those searchers.

Search engines will often offer search suggestions based on the words that a searcher types into a search box to make it easier for them. Knowing more about how search engines find those suggestions may be helpful to searchers and site owners.

You might see these query suggestions above or below the search results that you are shown when you search, or appearing in a dropdown under the search box as you type. They often are displayed with terms like the following showing up in front of them:

- Related searches (Google)
- Searches related to (Google)
- Did you mean (Google)
- Did you mean to search for (Google)
- Also try (Yahoo)
- Explore related concepts (Yahoo)
- We have included [query they thought you meant] Results. – Show only [query you typed in] (Yahoo)
- Related searches (Bing)
- Results are included for [query they thought you meant]. Show just the results for [query you typed in] (Bing)
- Related Searches (Ask.com)
- Did you mean (Ask.com)

**Using Query Suggestion Strategies in Searches or Content Development**

If you write or develop content for web pages, these related searches may provide some ideas on additional words that you might want to use on your pages or concepts that you might want to explore with additional pages.

Getting an idea of how the search engines might come up with those related queries may provide searchers and site owners with approaches that may help develop more productive searches or explore more terms and concepts. A recent patent application from Yahoo provides a look at several strategies they use to come up with query refinements and suggestions.

The patent filing focuses on how these strategies might be used together to provide multiple query suggestions or find the best ones to show searchers. In explaining how they might blend multiple suggestions strategies, we’re presented with an overview of strategies used to come up with those suggestions. I’m going to provide an example of the patent filing on how those strategies may be blended, and then look at the strategies themselves:

Someone may search for the phrase “how to make chicken soup.”

Many use the search engine called a Submarine query rewrite provider to come up with the phrase “chicken soup.”

Another suggestion might be added or replace that suggests using a Units query rewrite provider to develop “chicken soup recipes.”

The different strategies that Yahoo uses are created by using “query rewrite providers” or programs that rewrite queries to offer suggestions. The suggestions are meant to offer a way for searchers to come closer to the “true intent” behind their original query. A searcher can look at the search results for their original query or click on a link from one suggestion to see a new set of search results based upon that suggestion.

**Rewritten Query Suggestion Approaches**

Here are some of the approaches that may be used to create query suggestions based upon a searcher’s original query:

***Units*** – There have been a few patent filings and papers from Yahoo that describe what they call “units.” Units are words or phrases that have some [semantic meaning as concepts](https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-concepts-in-users-queries/). For example, the phrase “New York City” refers to a specific place as a concept. Yahoo may generate suggestions based upon looking at how frequently words in the query may show up in other “units” in their query logs. In the chicken soup example above, the concept “chicken soup recipes” includes “chicken soup,” and if it frequently appears in searches, it may be a query suggestion.

***Gossip*** – Relies upon information extracted from query logs. Query logs are analyzed for terms that searchers might use in searches following an original query. Searchers may refine their searches to try to narrow or change the scope of that original query. If several people searched for “chicken soup recipes” followed it with a search for “chicken and dumplings,” that might be offered as a query suggestion.

***Submarine*** – This approach predicts if a term can be deleted from a query without altering the query’s meaning. For example, “how to make chicken soup” could be changed to “chicken soup,” while a search for the band “The Who” wouldn’t be changed.

***Spell Checking*** – Checks queries for misspellings, for example “chickn” would be changed to “chicken”.

***Stemming*** – Changes queries by bringing words down to their stem, base, or root form, such as changing “chicken soup recipes” to “chicken soup recipe.”

***MODS substitutions*** – We’re told that this approach is “tuned to provide related advertisements.” This might involve a slight modification or substitution to the original term or terms.

***Prisma*** – Derives candidate query suggestions by looking at documents that are related to the original query and seeing what other queries are appropriate for those documents, and may result in suggestions that do not resemble the original query.

***Deletion Prediction*** – If a search phrase contains more than one term, and searchers who use that phrase in searches often delete one of the terms during a search session to try to get better results, information about such deletions might be tracked, and could be used later as a potential search suggestion. For more on deletion predictions, see my post [User Behaviour: Deletion Predictions](https://www.seobythesea.com/2006/06/user-behaviour-deletion-predictions/).

We are told that some of these approaches may work better with some queries than others:


> Because individual characteristics or features such as length, dominant parts of speech, presence of geographical terms, digits, or stop words, etc., differ between search queries, different rewrite techniques are effective for particular query types.
>
> For example, it is helpful to apply deletions to long queries such as “cheap car insurance” but not to one-word queries such as “Nintendo,” where either substitute terms or expansions are preferred. Therefore, no single QRP can successfully generate suggestions for all query types.

The patent filing is:

[Learning Query Rewrite Policies](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090198644.PGNR.&OS=dn/20090198644&RS=DN/20090198644)
Invented by Karolina Buchner and Ralph Rabbat
US Patent Application 20090198644
Assigned to Yahoo
Published August 6, 2009
Filed: February 5, 2008

Abstract


> A blended query rewrite provider takes as an input a search query and produces a list of query rewrite suggestions.
>
> The blended query rewrite provider generates suggestions by applying many individual query rewrite providers to a query. The sequence in which query rewrite providers are applied to a query is encoded in a query rewrite policy. Policies differ between query types. A policy application engine component selects which policy to apply to a given query based on the cluster to which a query belongs.
>
> The policy application engine uses a machine-learning algorithm to assign a query to a cluster based on query features. The policy generation engine generates policies and trains the clustering algorithm used by the policy application engine offline based on training data sets and query logs.

**Conclusion**

There can be many different ways to put together a query to find information through a search engine. The query suggestions or refinements that search engines offer can make searches easier for searchers.

They can also provide ideas for people who are creating the content for web pages on related words and topics that they might want to consider for the pages of their sites. Knowing about some of the search suggestion strategies that a search engine like Yahoo might try to use can give some insight into why certain suggestions may have been offered to searchers.
