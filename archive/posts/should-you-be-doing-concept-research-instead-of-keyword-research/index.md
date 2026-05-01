---
title: "Should You be Doing Concept Research Instead of Keyword Research?"
source_url: "https://www.seobythesea.com/2012/05/should-you-be-doing-concept-research-instead-of-keyword-research/"
slug: "should-you-be-doing-concept-research-instead-of-keyword-research"
date_published: "2012-05-28T08:56:54+00:00"
date_modified: "2019-06-21T14:57:42+00:00"
author: "Bill Slawski"
---

As a recent post on Google’s Inside Search blog noted, the Web doesn’t just contain strings of text, but also includes a great amount of [information about things](https://search.googleblog.com/2012/05/introducing-knowledge-graph-things-not.html). The post was an introduction by Google to search results that would contain a lot more information about things that people might search for, with textual summaries and links to related topics in Google’s sidebar when appropriate. If you create Web pages, perform keyword research, and even search the Web, this presents some new challenges and some new opportunities, including a need for concept research.

A news story at Fast Company in 2010 carried the interesting title, [Bing to Lap Google in Making Search an App?](https://www.fastcompany.com/1710266/bing-lap-google-making-search-app) The article tells us about Microsoft finding ways to understand when it might be appropriate to show more than just links to web pages or images or news stories when certain searches might be performed. The “instant answers” displayed in the Bing search results aren’t the informational type results that Google is beginning to display alongside its search results but are rather more akin to the [OneBox type of results](https://searchengineland.com/googles-onebox-patent-application-10325) that Google has been displaying for a few years.


## Bing, Entities, and Knowledge Bases in Concept Research

Earlier this month, Microsoft published a patent application that describes some of the processes behind this identification of queries where such results might appear. The patent filing, [Presenting Actions and Providers Associated with Entities](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120117058%22.PGNR.&OS=DN/20120117058&RS=DN/20120117058) tells us about how Microsoft might identify entities within search queries, and respond by showing answers that might make it easier for searchers to perform tasks like buying tickets for events and much more.

Some examples from the pending patent include answers on a wide range of topics, including, “weather, news, area codes, conversions, dictionary terms, encyclopedia entries, finance, flights, health, holidays, dates, hotels, local listings, math, movies, music, shopping, sports, package tracking, and the like.”

There are two main steps Bing might take towards being able to present those kinds of answers. One of them involves recognizing that a query includes an “entity”. This can be done in part by looking at a range of knowledge bases such as The Wikipedia, Freebase, the IMDB, and other sites on the Web that contain encyclopedic information about specific people, places, and things.

Those knowledge bases may also be used to understand attributes or aspects related to an entity. For example, a search for [Ronald Reagan] might involve a recognition that the subject of that search was a real person and use sources such as Wikipedia and the IMDB to understand aspects about Ronald Reagan, such as date and place of birth, information about his radio and movie careers, movies acted in, his military service, his political career including being governor of California, and President of the United States. knowledge bases are a good starting point to target when performing concept research

The second step involves understanding the intent behind a search.


> To recognize query intent, a query input by a user is referenced (e.g., received, retrieved, etc.). A past query log(s), such as a query log associated with the user that input the query, a query log of a group of users, or query logs of all users can be used to recognize query intent. Other data, such as user data, may additionally or alternatively be used to determine query intent.
>
> For example, interests of the user may be utilized to determine query intent. A query may be evaluated for the intent of the query using machine learning algorithms such as clustering. As can be appreciated, in some embodiments, query intent may be or include the query input by a user, without additional analysis.

A search for “when was Ronald Reagan born?” shows an intent for an instant answer that takes advantage of the information found within a knowledge base.

The instant answers shown can be more complex as well. Imagine someone searching for the query [cincinnati reds]. Again, we have an entity that could be found in a number of knowledge bases, and a number of aspects could be found within that knowledge base related to the term.

A look through the search engine’s query logs might also show query sessions from searchers that could indicate the intent behind the search. Someone searching for [cincinnati reds] might follow up with a second search in the same query session for [cincinnati reds tickets] or [cincinnati reds score] or [cincinnati reds schedule].

In addition to Bing searching for all documents that might contain the string of words “Cincinnati Reds” and returning just those, it also understands from knowledge bases that the term is about a specific entity – the major league baseball team from Cincinnati, and it understands from its query logs that people searching for that entity are often interested in tickets or schedules or scores.

Finding answers to commonly asked questions is another important effort to take when conducting concept research.

The context of the search might also make a difference as well:

- A search for the team during the baseball season might show a result related to one of those topics.
- A search before or after the season might show the team’s record from the previous season, or other information.
- A search performed by someone during the morning might show a score from the night before.
- A search from nearby where a game is to be played might show ticket and schedule information.

In [All Your Knowledge Bases Belong to Google](https://www.seobythesea.com/2012/05/all-your-knowledge-bases-belong-to-google/), I wrote about how Google was also looking at entities from knowledge bases, and its own query log files to determine whether or not they should show additional information in search results to searchers about the entities within those queries.

As the Inside Search Blog link I started this post off with tells us, that information is intended especially to help searchers who might not know much about a topic and are interested in performing discovery type searches where they can learn more. The post also tells us that it looks to its log files in an attempt to anticipate some of the followup queries that people often perform when their searches contain that entity.

Google’s recent announcement regarding the use of knowledge bases appears to be more informational than Bing’s, which focuses more on providing situational or transactional information about entities. Then again, Google has been providing OneBox type results for a few years that help book flights, or provide information about the weather, or show maps of local businesses, or similar results that attempt to match the intent of searchers.


## Concept Research and Web Page Associations

A patent application from Bing that came out this past week goes beyond the use of knowledge bases to understand just entities. It also looks at a range of concepts that might found in queries.

Imagine that the search engine takes one or more knowledge bases and maps concepts to the pages of those knowledge bases. It might do so manually, or it might automate the process. For instance, It could take the titles from Wikipedia articles and use those as concepts, and associate those pages with those concepts.

**The end goal would be to create an ontology of concepts that could be used to identify concepts used in searches to determine which pages to show searchers, and in some cases to provide instant answers of the types mentioned above.**

For example, someone performs a search for “Kennedy birthday.” If a search engine just searches for strings of words within its index of the Web, it might only return a list of web pages that contain that phrase. Instead, imagine that it attempts to understand which “Kennedy” may be referred to within the query, and decides that John F. Kennedy, Bobby Kennedy, and Ted Kennedy might be the most likely choices, with John F. Kennedy having the highest confidence or probability of being the right answer based upon query log refinements for similar searches.

Or on a search for [Java], there’s some ambiguity as to whether a searcher is interested in the programming language, the island, or the coffee. Those three different concepts related to the term might be identified as part of an ontology created from knowledge bases like Wikipedia, Freebase, and others. The search results returned might include information about each of the different concepts related to the term, showing a diversity of results that could satisfy different searchers.

The patent filing is:

[Concept Disambiguation via Search Engine Search Results](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120130972%22.PGNR.&OS=DN/20120130972&RS=DN/20120130972)
Invented by David Ahn, Michael Paul Bieniosek, Andrei Peter Makhanov, Franco Salvetti, and Giovanni Lorenzo Thione
Assigned to Microsoft
US Patent Application 20120130972
Published May 24, 2012
Filed: November 23, 2010

Abstract


> Concept disambiguation is provided for search queries by analyzing search results in conjunction with an ontology of concepts. An ontology of concepts is identified, and at least one document is associated with each concept. The document associated with a concept is representative of the concept and used to generate a concept signature. When a search query is received, it is processed to obtain search results.
>
> The search results are used to generate a search results signature, which is compared to the concept signatures to identify one or more concepts that are relevant to the search query.

While this patent filing tells us that sources such as knowledge base pages might be used as pages associated with specific entities, it seems to leave the door open to having other pages being identified as the primary pages about specific concepts as well. A knowledge base page might be helpful in creating an ontology of concepts, and in identifying different aspects or attributes associated with those concepts.

This is an important question to keep in mind when doing concept research:

**Which raises the question, what does someone have to do to have their page be identified as embodying a specific concept, and having their page associated with that concept by Bing?**

It’s possible that the home page for a particular State might be seen to be a better page to be associated with a “concept” related to that State or the homepage of a business being associated with the “concept” of that business.

The processing part of a search for [Titantic Director] might identify the query to be about the movie Titanic and more specifically about the person who directed the movie. A page within the search results for that query might be identified as being about that particular aspect of that concept by an analysis of the textual content of the page, and a “feature vector of terms and/or phrases found in the textual content.”

In other words, for a page to rank well for a query such as [Titantic director], that page should be one that is about the concept related to that query as indicated by the terms and phrases on the page itself.

It’s not just a matter of how many times the term “Titanic director” appears in the page title, in headings on the page, in the textual content of the page, and in links pointing to the page.

Instead, it’s a question of how much the page embodies the concept by addressing different attributes and aspects of the concept in meaningful ways, and possibly addressing related queries about the concept.


## Concept Research Takeaways

Search is evolving to understand the meanings and concepts contained on pages on the Web, and search engines are increasingly looking to sources of information such as knowledge bases and their own search query logs to understand entities and concepts that might appear within queries.

While Google may be looking at knowledge bases such as Wikipedia and Freebase to learn about the entities that it sees, it’s also possible that it also incorporates the kind of ontology described by the CIRCLA technology (pdf) that came to it in its merger with Applied Semantics. It’s also likely that Bing is developing its own ontology from similar knowledge base sources.

One of the more interesting papers that I’ve seen from Microsoft recently was [Improving Entity Resolution with Global Constraints](https://arxiv.org/abs/1108.6016) (pdf), which told us about how it might look to more commercial type knowledge bases such as the movie database from Netflix or the music database from iTunes to understand which entities might be referred to in a query. Those commercial databases have an economic incentive to only have a single entry for the entities they contain, since they would want to have all information about a single entity together, including reviews and other user-generated content about each.

**It’s important to keep in mind, when you’re writing about a topic, or doing keyword research, that the words that you’re choosing to use aren’t just strings of words, but rather embody certain concepts that may contain many different aspects. Doing concept research on those can pay off richly.**

If you want to create a page or site about the [cincinnati reds], it doesn’t hurt to understand that both Google and Bing may have an ontology about the team that includes many different aspects related to that term. It could include history, schedule, standings, stadium information, ticket sales, players, statistics, and so on.

Your research related to the use of a term as a keyword possibly should go beyond just a look at a search volume related to the term and an analysis of how competitive it might be compared to other pages about the team, to an exploration of the different concepts and aspects and attributes related to the term in sources like knowledge bases and pages that tend to rank well for the term, as well as an exploration of related queries that people might search for when they search for that term.

Addressing those related concepts and aspects, in doing concept research might make it more likely that your page will be seen as one that should be associated with a particular entity or query.

On a side note, David Ahn, who is listed first as an inventor on this second patent, came to Microsoft when the company acquired the semantic search engine Powerset. According to his LinkedIn profile, it appears that he left Microsoft to join Google around a month ago. While that doesn’t mean that he is taking the technology behind Microsoft’s concept patent application with him, he is taking his knowledge of assigning concepts to web pages.

*Added June 1, 2012* – The Bing Community Blog announced some new features today, including a central column they are calling a “snapshot,” which includes entity and knowledge base type information, in the post: Social Meets Search with the Latest Version of Bing, Available to Everyone in US Today. The snapshot results sound very much like the things described in the Microsoft pending patent I wrote about above, *Presenting Actions and Providers Associated with Entities*, which may be more transactional in many ways than Google’s knowledge base results. From the Bing post:


> Available for the first time today, we designed a new center column, called snapshot, which makes it easy to get things done in one place. It includes information, such as maps and reviews, and quick ways to take action, so booking a restaurant reservation or checking hotel rates are now quicker and easier. The snapshot feature offers restaurant reservations, hotel reviews, movie trailers and show times, maps, and more right within the search experience; giving you everything you need to take action in one place and eliminating the need to visit multiple sites to complete tasks.

Have you ready to add concept research to the keyword research that you do when optimizing a website for search and searchers?

Last Updated June 8, 2019.
