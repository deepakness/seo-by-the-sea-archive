---
title: "Google's Web History Patent Applications"
source_url: "https://www.seobythesea.com/2007/04/googles-web-history-patent-applications/"
slug: "googles-web-history-patent-applications"
date_published: "2007-04-19T23:36:35+00:00"
date_modified: "2020-07-07T06:43:10+00:00"
author: "Bill Slawski"
---

Danny Sullivan has a detailed post at Search Engine Land about Google’s move today to provide their users with search history about activities that they have performed on the Web, and not just while searching Google, in [Google Search History Expands, Becomes Web History](https://searchengineland.com/google-search-history-expands-becomes-web-history-11016).

Google came out with 6 patent applications in October, which I wrote about in [Google Personalization Methods](https://www.seobythesea.com/2006/10/google-personalization-methods/).

In that post, I described how the information collected from a person’s travels around the Web might be used to influence search result rankings. Here are links to those patent applications, if you want to take a closer look at them:

- [Systems and methods for analyzing a user’s web history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224583%22.PGNR.&OS=DN/20060224583&RS=DN/20060224583)
- [Systems and methods for modifying search results based on a user’s history](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224587%22.PGNR.&OS=DN/20060224587&RS=DN/20060224587)
- [Systems and methods for providing a graphical display of search activity](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224938%22.PGNR.&OS=DN/20060224938&RS=DN/20060224938)
- [Systems and methods for managing multiple user accounts](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224624%22.PGNR.&OS=DN/20060224624&RS=DN/20060224624)
- [Systems and methods for combining sets of favorites](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224608%22.PGNR.&OS=DN/20060224608&RS=DN/20060224608)
- [Systems and methods for providing subscription-based personalization](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224615%22.PGNR.&OS=DN/20060224615&RS=DN/20060224615)

I also discussed some other aspects of the patent applications, such as:

- Types of data collected and how it might be used
- Subscribing, Snoozing, and Filtering
- Profile building

I didn’t cover all aspects of the patent applications, but there are some interesting details in the documents that are probably worth a closer look. The most interesting of those might be the User Information Database.

**User Information Database**

One part of this Web history and personalized search process involves how Google might collect information into a “User Information Database,” to enable a user to look at their past events and activities on the Web.

Some information which can be associated with a user can be classified as:

- Event-based data,
- Derived data, and;
- Additional data.

**Event-Based Data**

Event-based data includes one or more events which each have a data type associated with them, such as:

- One or more queries,
- One or more result clicks in a set of search results,
- One or more ad clicks,
- One or more browsing data such as which locations (URLs) that a user visits or an image that the user views, and;
- One or more product events (e.g., searches for product reviews).

Each event-based data includes one or more elements relevant to that event. For example, event-based data could include either or both of an eventID and a timestamp.

*EventID* – a unique identifier associated with the particular event which may be assigned by the search system (e.g., a 64-bit binary number).

*Timestamp* – a value (e.g., a 64-bit binary number) representing the date and/or time at which the particular event record in event-based data was created or at which the particular event occurred.

Query terms may be associated with query events, such as:

- result clicks,
- ad clicks, and;
- product events.

The query portion may:

- Indicate the query string which the event is associated with (e.g., the query produced the results that the user clicked-through).
- Include a pointer or identifier to the query event associated with the result click or ad click (e.g., an eventID).
- Identify a “related query”.

For example, a query related to an event may be considered related to the initial query containing a misspelling. It may be better to associate the event with the corrected query rather than the misspelled query.

It’s also possible for the search system to create “related queries” automatically based on a query that the user entered.

A contentID may be used to identify the contentID associated with events like result clicks, ad clicks, or browsing data.

So, a contentID may represent an identifier that associates:

- An ad click with a particular advertisement, and possibly the landing page associated with that advertisement.
- A result click with the URL which has been clicked on by the user.
- A browsing event, to identify the location of the browse event, such as a data location

**History scores for event-based data**

The event-based data can have a history score, which can be calculated in many ways:

- A history score may be a time-based ranking value which could be modified periodically while looking at the length of time that has passed since the event was recorded.

- The value of the history score decreases as the time from the recordation increases.

- Event data may have a time-based ranking value below a threshold may be deleted.

**Derived Data**

Derived data is data that is created by examining and using some of the other data types collected for a user. It could also be created by looking at information taken from a community of users.

Derived data could come from scores associated with particular web sites or other content. Here are some scores for derived data that may be useful in a personalization system:

1. Number of times that a user has clicked on the content over some time (which may include click-throughs as a result of search queries and/or browsing activities).
2. A time that the user is estimated to have been looking at the content (a stay-time).
3. A time since the user last viewed the content.
4. User activities:- Negatively affected if the user is presented the content in a series of search results, but fails to select the content from the results page.
  - Positively affected when the user visits locations or pages or clicks on results that are similar to the content. Similarity can be determined by a number of well known techniques, such as:- text classifier,
   - ODP categorization,
   - link structure,
   - URL,
   - edit distance,
   - etc.
5. The score can incorporate the number of past queries of the user for which the content was presented (e.g., a higher number of times certain content is presented to the user correlates with a higher score).
6. The score can incorporate the number of past queries of the user for which related content was presented (e.g., a higher number of times related content is presented to the user as a result of the user’s queries correlates with a higher score).

**Additional Data**

Additional data includes more information about the user which is not necessarily represented in the event-based data or the derived data.

For example, a user may annotate one or more URLs, web pages, or search queries with keywords to provide certain information about those. This might be to indicate that a particular URL was helpful, or that it covered information that was of a certain interest.

It’s possible to run a user’s search against those annotations, alone or in combination with other information.

**User information database**

The user information database, as well as other databases, can be used to provide many different features.

It may allow users to perform searches on or to browse through their prior history.

When someone searches, their query search terms can be run against their user’s history in whole or in part, including previously submitted queries, or the documents related to those queries, or both.

It could also include other events such as ad click-throughs, and some general browsing information not necessarily or directly related to a particular query.

A searcher may be permitted to select various portions, or combinations, of the history against which to run a search.

The relevant user information is then searched for matching and/or relevant events following the search query and data type(s) of interest.

In addition to a normal search engine search, a search could also produce a list of previous queries and a list of advertisements that the user had previously visited.

Identified queries would be presented differently than identified ads.

Locations previously visited as a result of a search query could also be returned and grouped with the queries which produced the results.

These results could be ranked in many different ways, such as by using PageRank, or relevancy compared to previous query matches, or both.

**Conclusion**

I’ve been exploring the Web history a little, but presently have it paused. If you’ve tried it out, what do you think?

There’s a section of the patent applications that deal with preferred user locations and sharing those with communities. It sounds like that’s the new feature on the Google Toolbar that many have compared to [Stumbleupon](https://s3.amazonaws.com/www.stumbleupon.com/index.html). I’m going to discuss that some more in a future post.
