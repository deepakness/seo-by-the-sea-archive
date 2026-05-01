---
title: "Google Personalization Methods"
source_url: "https://www.seobythesea.com/2006/10/google-personalization-methods/"
slug: "google-personalization-methods"
date_published: "2006-10-09T01:30:18+00:00"
date_modified: "2020-06-21T13:06:07+00:00"
author: "Bill Slawski"
---

This last week, Google published six new patent applications that look at personalization, and provide a system for collecting information from a searcher that may make it easier for the search engine to deliver search results to them that more closely match what they may be looking for than from a non-personalized search. Here are links to those documents:

- [Systems and methods for analyzing a user’s web history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224583%22.PGNR.&OS=DN/20060224583&RS=DN/20060224583)
- [Systems and methods for modifying search results based on a user’s history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224587%22.PGNR.&OS=DN/20060224587&RS=DN/20060224587)
- [Systems and methods for providing a graphical display of search activity](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224938%22.PGNR.&OS=DN/20060224938&RS=DN/20060224938)
- [Systems and methods for managing multiple user accounts](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224624%22.PGNR.&OS=DN/20060224624&RS=DN/20060224624)
- [Systems and methods for combining sets of favorites](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224608%22.PGNR.&OS=DN/20060224608&RS=DN/20060224608)
- [Systems and methods for providing subscription-based personalization](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224615%22.PGNR.&OS=DN/20060224615&RS=DN/20060224615)

The patent applications go into great detail on how a personalization system might work, and if you spend some time with Google’s personalized search, you’ll see some of the processes discussed in these patents. There are other aspects of those processes described in the patent filings that are difficult to tell if they have been implemented, or not.

At the highest level, a searcher’s computing experience may be improved by:

- Letting them look at their past searching and browsing activities, and;
- Enabling them to use information about those to enhance search results.

Rather than provide details about each part of the system, I’m going to focus upon a couple of the most interesting – the kinds of information collected and used in the system, and how some of that information might be used to rerank search results.


## Types of data collected for personalization and how it might be used

This system collects and stores information in a user information database and may include the following types of data:

- Search queries submitted,
- Clicks on search result pages,
- Clicks on ads from search results pages,
- Selections of other informational items on search results pages,
- Browsing history,
- Clicks on ads on browsed pages,
- Looking at product reviews and other browsing activities, or;
- Other activities while using things like:- instant messaging,
  - chat rooms,
  - email
  - creating and editing documents.
- Any generalized file activity, referred to in this document as “prior activities”.

Some additional information might be found from this collected information by creating what is known as “derived” information. For example, if a date someone visited a page was recorded, and you calculated the number of days from that visit to the present, the amount of time is “derived” information.

This historical and derived information may be viewed in several ways and used to modify the user’s searching and browsing experience.

One of the issues I see raised here is that past activities are being used to predict future intentions, such as a user’s preferences regarding web sites and documents on a network.

The system can take those preferences, and use them to create an ordered set of sites and documents. Here’s a quick overview of how this predictive activity works:

- preferred locations (sites and documents) may be shared and/or integrated with one or more other users,
- prior activities from specific periods may be displayed graphically,
- prior activities are used to modify a set of search results returned from the web,


## Subscribing, Snoozing, and Filtering

Two of the parts described in detail involve how users can subscribe to different data types, and can also turn the tracking of those on and off by setting them to snooze. There’s also discussion of the use of filtering in the collection of information, based upon things such as classes of topics, so that information about adult content may not be collected.

The system also can make it possible for a person to view their history in detail, and modify or remove parts of that history.


## Profile building

A lot of information is collected in this process, including clicks on search results pages, which pages are viewed, how long someone stays on different pages, how long ago these activities happened, and more. Different algorithms might be used to identify other types of data, including pages, that are similar to ones that users have interacted with.

But information collected during search isn’t the only type of data collected. A profile built on this information may also take into account:

- Instant messaging,
- Word processing,
- Participation in chat rooms,
- Software application execution, and;
- Internet telephone calls.


## Adjusting Search Results

While the document addresses issues involving privacy, associating user actions with keywords, understanding how content can be associated with certain web pages and documents, the most interesting aspect of this kind of personalization for many people might be how it can influence the reranking of search results.

One part of the patent filings goes into detail on some possibilities. Here are some details of how a search might be modified by this personalization system:

- A search query is received by the search engine which runs the query against the document repository.

- After the results are received, they are adjusted based upon information from the user’s history.

- Results that are present in a user’s history could be added to the results presented to the user.

- The order of the search results can be adjusted in accordance with a history score and/or any user-modified result score.

- Scores like the search result score and the history score can be combined and search results can be reordered based on that combined score.

- A searcher may be shown an indication showing previously visited pages, including things like the date and time a page was previously visited and the number of times that the user has visited the site within a certain period.

- A certain number of the most highly ranked results that a searcher has previously visited could be displayed in an area above the search results, or another section of the page, or even in a separate window.

- Those previously visited pages may be ordered based upon different ranking criteria, such as a history score, PageRank, time of last access, number of accesses, or others.

- In addition to previously visited pages, a user’s previous query sessions and/or session groups may also be shown along with the search results and ordered as described above.

- Search results which a searcher has seen in the page, and which have been clicked upon can be boosted higher in the set of search results.

- A user’s browsing activities can be considered in addition to, or lieu of, past presentation and click-through of particular search results. For example, if a location was previously visited by a user, it could have its score boosted, based upon the number of times the user has visited the location. So, a site that is bookmarked and visited frequently may rank higher than one which has been searched for and selected in search results.

- Search results that were previously presented to searchers but not clicked through could be demoted in the results.

- As an alternative, instead of reordering search results, a history score could be used to determining whether a result is shown with some type of visual indicator such as a change of color or through the use of highlighting.

- The order of some pages showing in search results could be boosted higher if the searcher has visited or clicked on results from related sites or pages.

- The number of times that past queries have retrieved a certain set of results, and how long ago those happened, could also affect the placement of a document in search results.

- A searcher’s history could be used to identify additional search results. For example, results in a searcher’s history not appearing in a set of results but which were retrieved by similar queries could be added to the results. These might be displayed in a different area of the screen than the initially identified search results.

- Additional queries might be suggested, possibly even similar queries that were previously submitted by the user. The similarity of these additional queries might be calculated several ways, such as by edit distance, stemming operations, correction of obviously misspelled words, semantic mapping, the similarity of the retrieved document sets, and others.

- Queries could also be suggested from the user’s history which was submitted immediately following or preceding the query at issue, in the same query sessions or session group from that history.

- Queries could be run from different document source repositories. For example, if a searcher runs a web search, and they’ve done a similar search for a product review, they may be given the option of running the query in a product review repository.


## Personalization Conclusion

A Google patent application published in 2004 which looks at building a user profile and reranking pages based upon user information shares many authors with this set of patent applications – [Personalization of placed content ordering in search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050240580%22.PGNR.&OS=DN/20050240580&RS=DN/20050240580). It goes into more detail on the actual creation of a profile than this latest batch of patent filings.

I’ve seen a number of the processes described in these documents in action over at Google’s personalized search. It’s difficult to tell how much of what they describe has been incorporated into the system, but some features from them have.

There have been several patent filings from Google and other search engines that discuss different ways to rerank search results. Here are a handful, for example:

- Reranking based upon local inter-connectivity – the top N search results are reordered based upon how they link between themselves. ([Google](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=6,526,440.PN.&OS=PN/6,526,440&RS=PN/6,526,440))
- Reranking based upon historical data – involving the age of documents, and links to documents, and other historical data. ([Google](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=/netahtml/PTO/search-bool.html&r=1&f=G&l=50&co1=AND&d=PG01&s1=20050071741&OS=20050071741&RS=20050071741))
- Reranking based upon reading levels, use of stop words, and other textual features ([Yahoo](https://www.seobythesea.com/2006/09/how-to-use-topic-familiarity-to-rerank-search-results/))
- Reranking based upon concepts in users’ queries ([Yahoo](https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-concepts-in-users-queries/))
- Reranking based upon mobile device friendliness ([Microsoft](https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-mobile-friendliness-and-removing-unfriendly-sites/))

Reranking based upon personalization can mean that everyone conducting a personalized search will get their unique ordering of results for several queries. But even without personalization, the rankings that you see for pages for some queries and keywords may be very different than what others see.
