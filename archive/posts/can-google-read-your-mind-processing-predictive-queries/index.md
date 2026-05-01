---
title: "Can Google Read Your Mind? Processing Predictive Queries"
source_url: "https://www.seobythesea.com/2005/12/can-google-read-your-mind-processing-predictive-queries/"
slug: "can-google-read-your-mind-processing-predictive-queries"
date_published: "2005-12-22T22:45:50+00:00"
date_modified: "2021-05-01T16:32:40+00:00"
author: "Bill Slawski"
---

A patent application published this morning doesn’t involve ESP but attempts to anticipate what searchers are looking for. In addition, the document has the names of some prominent Google employees on it.

[Anticipated query generation and processing in a search engine](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050283468%22.PGNR.&OS=DN/20050283468&RS=DN/20050283468)
United States Patent Application 20050283468
Published: December 22, 2005
Filed: June 22, 2004

This document focuses on returning search results quicker and enabling personalization to make those results more relevant for the person searching.

In my recent [Google Acquisition](https://www.seobythesea.com/2005/12/google-acquisitions/) post, one of the companies I mentioned, *Kaltix*, specialized in personalization and speeding up search results. I also linked to a [patent application](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050038775%22.PGNR.&OS=DN/20050038775&RS=DN/20050038775) there, assigned to [Kaltix](http://googlepress.blogspot.com/2003/09/google-acquires-kaltix-corp.html), which covered those types of issues.

The inventors named on that patent application, Sepandar D. Kamvar, Taher H. Haveliwala, and Glen M. Jeh, are also the inventors listed on this application. So, it shouldn’t come as a surprise that it covers personalization and searching speed.

**The abstract:**


> A search system monitors the input of a search query by a user. Before the user finishes entering the search query, the search system identifies and sends a portion of the query as a partial query to the search engine. Based on the partial query, the search engine creates a set of predicted queries. This process may consider prior queries submitted by a community of users and may take into account a user profile. The predicted queries are being sent back to the user for possible selection. The search system may also cache search results corresponding to one or more of the predicted queries in anticipation of selecting one of the predicted queries. The search engine may also return at least a portion of the search results corresponding to one or more of the predicted queries.

**The problem this predictive queries patent application addresses?**

Searches don’t start until the searcher types in the full query. Can those begin before the query is fully entered?

The answer is yes. If the search engine captures keyboard strokes as they happen and starts sending partial queries to the search engine based upon a prediction of what the searcher is looking for, it may speed up the process.

**How does it work?**

It’s easier to show than to tell. The predictive queries patent application doesn’t mention it but take a look at Google Suggest, which seems to be a good example of anticipating queries.

What we don’t see with *Google Suggest* is some of the technology used to create that query list it displays in a dropdown under the query window. We also don’t see the ability to personalize those predictive searches. We don’t know if *Google Suggest* uses the processes described in this patent application.

The anticipated queries shown could be based upon previous queries from other users (as if their entries were in dictionaries) and may incorporate a user profile to choose which dictionary to use and which queries to fetch.

The predictions could be cached to speed up retrieval. For example, if a similar set of results is cached from a previous searcher, the search engine could grab results without sending the query to the full index of the search engine.

The predictive queries patent application notes that this search could be done through a browser, or toolbar, or other input devices.

The document does illustrate several mechanisms that would be used to make this search seem very quick to a user of the search engine, including a few alternative methods for making the predictions described.

**Triggering and producing queries**

The point at which predictive queries start could be triggered in many ways:

- After a certain number of characters are entered.
- After a certain amount of time has passed since the searcher starts typing.
- A space bar entry or something similar (like a hyphen).

The final result would be triggered by pressing a search button, or the keyboard entry button, or similar action.

Predictive queries could be presented in a dropdown, like in *Google Suggest*.

Predicted results may even be presented before a searcher finishes typing and before they possibly select one of the predicted queries. As the patent application notes, that would make the search engine seem very responsive.

Producing search results on these predicted queries from a cache, which is possible, increases the overall performance of the search engine by making it work less hard. If those results aren’t in the cache, then the search engine will retrieve them from the search engine’s inverse term index and document database.

One method that could also help create these predictive queries is the use of an “auto-complete” server, which might try to match dictionary entries to what a searcher is typing. Then, when those are presented in a dropdown, again like in *Google Suggest*, they might be presented in alphabetical order, or maybe in an order “based on a metric or score representative of how likely each entry is to match the user’s search query.”

**Using Dictionaries for predictive queries**

There may be more than one dictionary against which to match partial queries. That can allow for personalization of the entries in those dictionaries matching the queries.

Example:

The dictionary used could match one or more of the user’s interests in their profile, such as “sports, music, news, finance, food, popular culture, etc.”

These dictionaries could be created from queries made in previous searches by the user or by a “community” of users. The benefit of that is these predictive searches could be made up of either or both commonly submitted searches and recent searches that the search engine could still cache. That potentially speeds up the return of results.

**Entries in a dictionary**

Each entry would have a term portion (the single or multiple word terms, which could be a query) and a popularity value based upon how popular that term might be at that time. We know that Google can track how popular search terms are for the global index when looking at the Google Zeitgeist. So keeping track of those values in a popularity score should be possible.

Example:

Typing in “Bri” might return the following as predictive queries:

- Britain
- British
- Britney
- Britney Murphy
- Britney Spears

Note that in this example, capitalization is taken into account. In an alternative version implementing this patent application, it might not be.

A couple of other examples are presented that describe other ways this prediction could work.

**What determines popularity?**

Popularity scores for results could be informed by breaking news stories, popularity fads, or even when the query was last selected. That last bit of popularity information could be stored in the cache and could include a “reuse count” showing how many times the query was made.

User profile information is stored and might contain information such as a preference in entertainers. For the example above, the entries “Britney Spears” and “Britney Murphy” might be then given more weight in (1) matching, (2) selecting, and (3) ordering than other terms.

**Which terms are cached?**

Some predictive queries are selected to have their search results cached, anticipating those chosen as the final query.

Many factors could be used to select which are cached:

- Popularity
- Recency
- A predefined metric, possibly considering a user profile.

When those queries are selected, they would be checked against results currently cached by the search engine. Single or multiple caches could be in place and may need to be checked.

While many of these predicted queries may first be looked for in a cache, if there aren’t enough terms within the cache to reach a certain threshold, The full query (the final one) would be executed by the search engine, looking to the inverse document index and document database.

Those results could be cached for later use.

**Combining multiple terms in a search**

When a single term is being entered and predictive queries are generated, the searcher may include a second search term. This may trigger a new set of predictive queries, with their own set of results which may be assigned scores.

When the second query term is entered, scores for predicted queries based upon those could be combined with the predicted queries from the first term to form a better fit for the searcher.

This could continue if even more terms are added, enabling a set of search results to be built incrementally while the searcher is typing in a query.

When a searcher indicates that a search is complete, by hitting enter, or pressing the search button, or so on, those combined results may be more quickly available than if a full search was performed from the document database directly, without this prior processing. The patent application describes some other methods of this combining of terms.

**Other issues**

Some of the different hardware and software configurations that may be used to achieve this process are described in the remainder of the patent application.

These include the makeup of a query processor, an auto-complete server, some details of the whole search engine, and how the search assistant mechanism used, such as a browser window or toolbar, would function.

There are other possible ways to incorporate this process into how a search engine works, and this patent application defines only some of the possible methods.
