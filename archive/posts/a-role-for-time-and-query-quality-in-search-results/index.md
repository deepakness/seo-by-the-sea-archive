---
title: "A Role for Time and Query Quality in Search Results"
source_url: "https://www.seobythesea.com/2006/11/a-role-for-time-and-query-quality-in-search-results/"
slug: "a-role-for-time-and-query-quality-in-search-results"
date_published: "2006-11-02T17:27:44+00:00"
date_modified: "2018-07-11T19:11:02+00:00"
author: "Bill Slawski"
---

Some search queries are better than others at returning results that searchers expect to see.

How would you measure how good a query is? If you were a search engineer, how might that knowledge help you in returning search results to a searcher that are relevant to what he or she might be seeking? If you were creating a web site about specific topics, how might this influence your choice of words to use when writing copy, page titles, anchor text, and other elements of the pages of your site?

What role might the age of documents returned in response to a query play in these determinations, and the decisions that might follow from them?

**Measuring the Quality of Queries**

How would you decide that one query is better than another? A study from 2002, as described in [Predicting Query Performance](http://www.abdelali.net/ref/Cronen_QueryPerformance.pdf) (pdf) explains that the problem lies in the fact that a searcher has no idea what to expect from a collection of data being searched, and what type of results might be returned. An example that they use is of a person searching a database of news articles from 1998 using the query “world cup” and expecting to find information about the sport of soccer (or football, depending upon where you are located), not realizing that the majority of results from that year will be about chess.

They explore a number of ways to determine the quality of a query. A generalization of what they discuss is that a query where the highly ranked documents are about a single topic, or a small number of topics would be a high quality query. A query where the highly ranked documents returned in a search were about a wide variety of topics would be a lower quality query.

**Adding Time to the Determination of Quality**

Could the times that documents were last updated, or created, or where time is referred to within those documents provide some helpful information that might make it easier to determine the quality of a query, and find higher quality queries? Could a “temporal profile” for specific queries be created that could help show certain results might have been more relevant at one time than another be useful in deciding upon that quality?

A paper that builds upon the first one I cited above adds a temporal element to help determine the quality of searches – [Using Temporal Profiles of Queries for Precision Prediction](http://fernando.diaz.nyc/sigir2004.pdf) (pdf) and considers questions like those.

Which is the better result in a search for “world series”?

A page about the St. Louis Cardinals (winner of this year’s world series)

A page about the Chicago White Sox (winner of last year’s world series)

Depends upon what you were looking for, doesn’t it?

Should searchers be given the option of refining their searches based upon some type of timeline, especially if it would help return higher quality results? Of course, there’s often something that muddies the waters. What about the “World Series of Poker” as just as relevant a result? Regardless of that, if letting a searcher choose a timeframe to receive results from makes a meaningful difference in the quality of results, it might make it easier for a searcher to find what they were looking for if using some type of temporal distinction between results improves the quality of those results.

**Yahoo Temporal Relevance**

A patent application from Yahoo Researchers explores a number of these concepts. The researchers are also the same folks who wrote the paper about *Using Temporal Profiles*

[Temporal search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060248073%22.PGNR.&OS=DN/20060248073&RS=DN/20060248073)
Invented by Rosie Jones and Fernando Diaz
US Patent Application 20060248073
Published November 2, 2006
Filed: April 28, 2005

Abstract


> In certain implementations, a system and/or method is provided for providing search results in response to a search query. In this implementation a temporal profile of the search query is built from temporal data associated with documents retrieved in response to the search query. From features of the temporal profile it may determined whether the search query would benefit from relevance feedback from a user. If there is a determination that the search query will benefit from the relevance feedback, relevance feedback is sought from the user. Search results are provided based on the relevance feedback.

The patent filing describes a way to determine if higher quality queries might result if time makes a difference, and provides the opportunity for a searcher to use those type of query refinements. That might include the presentation of a timeline for the user of the system, with a display of some of the events relevant to the query, and summaries of those events.

Queries can be classified into three different types when it comes to time:

- *Atemporal Queries* – There’s not a lot of change over time in results as to different topics being more or less relevant for a specific query.

- *Temporally Unambiguous Queries* – These queries may refer to a specific event, and include temporal information within them, such as “world series 2005”.

- *Temporally Ambiguous Queries* – These queries may involve a number of events which happened at different times, such as my “world series” example.

Queries may be classified into these different types, and that may be helpful in determining whether or not to display a timeline.


> In some implementations, it may not be necessary to utilize all the above discussed features for classification. Furthermore, of the above classifications, temporally ambiguous queries indicate a strong candidate for temporal relevance feedback. For example, in some implementations, such as when seeking relevance feedback, it may only be necessary to identify temporally ambiguous queries as distinguished from the other classifications. Conversely, identifying a query as non atemporal and not temporally unambiguous may indicate that the query is a candidate for temporal relevance feedback. In other implementations, it may be useful to fully classify the query so that additional temporal analysis may be performed. Furthermore, full classification may be desirable to determine if the classification of the query is identifiable at all. Information about whether the trained predictive model is capable of classifying a query can be used to decide if further analysis is required to determine if relevance feedback would be beneficial.

The patent filing goes into a number of other details about this process, such as choosing which results to display, how to present a timeline, other factors to consider in determining which results belong to which time periods, and so on. It’s an interesting look at how the age of documents, or information within the documents about the time they refer to may be used to help searchers receive results for a search engine that are relevant to what those searchers are looking for.

**Conclusion**

I can see how presenting a timeline might be helpful to some searchers, and some searches.

If you are working to try to get the pages of your web site site to rank for certain phrases, do you look at the top results to see how wide and diverse, or how narrowly focused those results might be?

Do you include information on your pages about specific events, and the dates of those events? How do you attempt to distinquish them from other events?

Do you pay attention to changing uses of language when it comes to the way people talk about what you might have to offer them?

I’ve had people ask me if it was worth keeping older articles and documents on their web sites, especially when information in those documents might become outdated. My response has been that as long as the pages clearly indicate what time periods they are relevant to, and that if the site owners include updated information, it’s easy for people to know that, and find that new information, it can be helpful to them to keep those pages.

For example, if an organization holds a yearly conference, instead of deleting the pages of their site about older conferences, it doesn’t hurt them to write the information about those conferences in a way so that people interested in attending future conferences can get a good taste for what past conferences were like.

I think that these papers and the patent application shows that those older pages can have value.
