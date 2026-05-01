---
title: "User Behavior Data Google May Use to Influence Search Rankings"
source_url: "https://www.seobythesea.com/2011/04/just-what-user-behavior-data-does-google-use-to-influence-search-rankings/"
slug: "just-what-user-behavior-data-does-google-use-to-influence-search-rankings"
date_published: "2011-04-14T12:56:39+00:00"
date_modified: "2020-01-19T20:51:19+00:00"
author: "Bill Slawski"
---

## Does User Behavior Data Influence Search Rankings?

In a blog post at the Official Google Webmaster Central Blog on Monday, [High-quality sites algorithm goes global, incorporates user feedback](https://webmasters.googleblog.com/2011/04/high-quality-sites-algorithm-goes.html), Google Fellow Amit Singhal announced some changes to the way that Google ranks web pages, including the spreading of the [Panda update](https://www.seobythesea.com/2011/03/searching-google-for-big-panda-and-finding-decision-trees/) to all English language Google users, and the incorporation of data into search results about sites that have been [blocked by users](https://googleblog.blogspot.com/2011/03/hide-sites-to-find-more-of-what-you.html) in those results.

The announcement also noted that “we’ve also incorporated new user feedback signals to help people find better search results,” but it didn’t provide details on which actual user-behavior data that might be.

I’ve seen a number of references in the past to information about user behavior data in Google patents, and some descriptions about how that information might be used by Google when they rank pages in search results. I thought I would look through some of them and see what they had to say about how Google might incorporate user behavior data into search. I have no doubt that this list is very incomplete, but I thought it was worth sharing.

In [Methods and apparatus for determining equivalent descriptions for an information need](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,941,293.PN.&OS=pn/6,941,293&RS=PN/6,941,293), filed in 2002, we learn about an early approach that Google may have followed to try to learn about synonyms for queries. A good part of the process involved looking through query log files from the search engine, and collecting information about people performing those searches:


> In a preferred implementation, the query log contains, for each query, information about the user who submitted the query (i.e., a UserID), when the query was submitted (i.e., date and time), and the query itself.
>
> In addition to the foregoing, the query log may also include a list of information that was provided to the user in response, a record of any action taken by the user on the search results (e.g., whether the user clicked on any of the results), as well as other data concerning the query and user behavior data.

Google’s 2003 filing, [Information retrieval based on historical data](http://web.archive.org/web/20160201004337/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,346,839.PN.&OS=pn/7,346,839&RS=PN/7,346,839) reads like a brain dump of ways to learn about web pages by looking at history-based data.


> If a document is returned for a certain query and over time, or within a given time window, users spend either more or less time on average on the document given the same or similar query, then this may be used as an indication that the document is fresh or stale, respectively.
>
> For example, assume that the query “Riverview swimming schedule” returns a document with the title “Riverview Swimming Schedule.” Assume further that users used to spend 30 seconds accessing it, but now every user that selects the document only spends a few seconds accessing it. Search engine 125 may use this information to determine that the document is stale (i.e., contains an outdated swimming schedule) and score the document accordingly.

Google’s local search may benefit from user behavior data as well, as described in the 2003 Google patent, [Methods and systems for improving a search ranking using location awareness](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,606,798.PN.&OS=pn/7,606,798&RS=PN/7,606,798)


> Still referring to FIG. 1, the location component 138 may determine a relationship between a topic and its location sensitivity. For example, location component 138 may analyze the query to determine a keyword or a query topic.
>
> Furthermore, it may determine the amount or extent to which geographically-based search results are relevant to the topic and a relevant geographic range for the topic, for example, by examining user behavior data (e.g., user selection behavior, such as mouseover or click-through) of search results 132 presented to the user.

Google’s 2004 patent, [Accelerating user interfaces by predicting user actions](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,558,822.PN.&OS=pn/7,558,822&RS=PN/7,558,822), aimed at predicting which pages people might select when browsing pages, to help those pages load faster, in part by seeing which pages people tended to hover over with their mouse pointers.

While this doesn’t directly influence search results, I’m including it because another patent below describes how mouse pointer tracking could be used to reorder search results.


> In a third embodiment, the predefined criteria for initiating a document request is that the mouse pointer is positioned over and either hovers over a hyperlink for at least a threshold period of time (e.g., a period of at least 100 milliseconds), or a mouse-down on the hyperlink occurs, whichever is first.
>
> This embodiment takes advantage of common user behavior data, which is to do a mouse hover over a hyperlink before clicking on it. In yet other embodiments, other predefined criteria may be used. For instance, the predefined criteria may require a mouse hover, but the hover may be over any region within a predefined proximity of a hyperlink. Further, the predefined criteria may include multiple criteria.

In Google’s 2004 Reasonable Surfer patent, [Ranking documents based on user behavior and/or feature data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,716,225.PN.&OS=pn/7,716,225&RS=PN/7,716,225), a considerable amount of data about the ways that users behave on pages may influence how much weight each link on a page may carry.


> Repository 430 may also store user behavior data associated with documents. The user behavior data may include, for example, information concerning users who accessed the documents, such as navigational actions (e.g., what links the users selected, addresses entered by the users, forms completed by the users, etc.), the language of the users, interests of the users, query terms entered by the users, etc.

Google may also pay attention to user behavior data involving images shown in search results as well, as described in the 2004 patent, [System and methods for detecting images distracting to a user](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,877,382.PN.&OS=pn/7,877,382&RS=PN/7,877,382)


> In an embodiment, the behavior analyzer 334 of the search engine 218 monitors the behavior of users in relation to the group of images that are sent to the user in response to a query.
>
> The user behavior data can include determining which images users select for further viewing, determining how many selections users make for a particular image for a particular query, determining how many different queries a particular image is displayed for, and determining how many selections a particular image receives over a large number of different queries that are unrelated to each other.

Google’s 2005 mouse pointer tracking patent, [System and method for modulating search relevancy using pointer activity monitoring](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,756,887.PN.&OS=pn/7,756,887&RS=PN/7,756,887), explains how Google could look at where people place their mouse pointers on search results pages, including hovering over search results to potential re-order those results, and onebox results to determine if those are relevant and helpful to searchers.


> In particular, a client assistant residing in a client computer monitors movements of a user-controlled pointer in a web browser, e.g., when the pointer moves into a predefined region and when it moves out of the predefined region. A server then determines a relevancy value between an informational item associated with the predefined region and a search query according to the pointer hover period.
>
> When preparing a new search result responsive to a search query, the server re-orders identified informational items in accordance with their respective relevancy values such that more relevant items appear before less relevant ones. The server also uses the relevancy values to determine and/or adjust the content of a one-box result associated with a search query.

The 2005 patent from Google, [Determination of a Desired Repository](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,584,177.PN.&OS=pn/7,584,177&RS=PN/7,584,177), looks at “triples” of data about users (u), queries (q), and different data repositories (r) to determine what kinds of results to show searchers (aka, Universal Search).

That information can determine whether Google shows searchers web pages, images, news results, local results, and other kinds of results. User information taken from query logs could include such things as IP addresses, cookie information, languages used, prior queries and the time of day or day of week that those queries were provided to the search engine.


> System 200 may include one or more devices 210 and a store of log data 220. Store 220 may include one or more logical or physical memory devices that may store a large data set (e.g., millions of instances and hundreds of thousands of features) that may be used, as described in more detail below, to create and train a model.
>
> The data may include log data concerning prior searches, such as user information, query information, and repository information, that may be used to create a model that may be used to identify one or more repositories that may be desired by a user. In one implementation, the model may predict whether a user desires information from a particular repository when the user provides a certain query.

In the 2007 Google patent, [Systems and methods for demoting personalized search results based on personal information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,827,170.PN.&OS=pn/7,827,170&RS=PN/7,827,170), we see some other user-behaviors that might result in the reordering of search results during Google’s personalized search.


> In some embodiments, information use for profiling a user may include the number of “clicks” or visits by the user to a particular website, webpage, or set of websites during a particular window in time.
>
> Other characteristics of user behavior data that can be used for user profiling include one or more of the following: the length of time that a user interacts with the website, the proportion of the website viewed by the user, actions (in addition to clicks) taken by a user while visiting the website (e.g., printing, bookmarking, cutting and pasting, annotating), and a user’s activity subsequent to the interaction with the website.

In the pending 2007 Google patent application, [Presentation of Local Results](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080172374.PGNR.&OS=dn/20080172374&RS=DN/20080172374), results shown to the users of mobile devices might be skewed to the presentation of local search results before web results, but other types of search results might be shown to searchers based upon user-behavior data and the particular query involved.


> Various techniques are described for ordering the result sets. For example, result sets may be ordered by a determined correlation between a particular query (including all of a query or part of a query) and a particular group, including by aggregated observations of user behavior data in response to receiving query results.
>
> For example, it may be observed that most users who query on “Marilyn Monroe” click an “images” control even if the initial results are provided as web results. Such user behavior data may indicate that users associate the query closely with images and thus prefer to have images displayed first. The correlations between search terms (or, for example, portions of search terms) and search results (or portions or other attributes of search results) may be computed by a machine learning system, as described in more detail below.

When you’re provided with query revision suggestions, including spelling corrections, clicks on those suggestions may influence how Google provides information about those revisions, as described in 2010’s pending patent application, [Query Revision Using Known Highly-Ranked Queries](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110060736.PGNR.&OS=dn/20110060736&RS=DN/20110060736)


> In another embodiment, user satisfaction is defined by the quality of the query. In one embodiment, a quality score for a query is estimated from user click behavior data estimating the length of clicks on search results.

**Conclusion**

There are other patent filings that I could have included in this post on how Google may incorporate user-behavior data into what they do, such as:

- Advertising based patents that focus upon personalizing ads and targeting specific users
- Recommendation based patents that could help in recommending products
- Other local search based patents that determine whether searchers see local results for certain queries and specifics about the results that they are shown
- Google’s sitelinks patent

Chances are that the amount of information that Google has collected about how people browse the web and how they search for information dwarfs most of the other information collected by the search engine, including the index it has of the Web itself.

Much of this information is collected quietly in the background rather than through explicit actions like users creating profiles that show off their interests or the clicking on things like a [+1 button](https://www.seobythesea.com/2011/03/will-google-1-web-page-buttons-also-be-share-buttons/).

There are likely checks and balances in place for this user behavior data, and I wrote about one on [query breadth](https://www.seobythesea.com/2011/04/time-to-add-query-breadth-to-your-seo-glossary/) in my last post, that attempts to mitigate some popularity based user behavior data when there are potentially a large number of pages that may be very relevant for certain queries.

It’s possible that user behavior data may carry different weights based upon a possible reputation score associated with the Google Accounts of specific users. Some signals might not be counted if they seem to follow certain patterns that may indicate that they are from automated programs or part of a conspiracy formed solely to manipulate search results.

Other user behavior data might not influence rankings if it doesn’t meet a certain threshold of activity.

The patent filings that I’ve included above point out possible user behavior data that Google may be used to influence search results, and it’s likely that a good number of other undocumented signals have been tested as well.

In an API article from earlier today, Google hones search edge to stay sharp, we’re told that Google’s search evaluation team “tested ‘many more than’ 6,000 changes to its search engine in 2010, with 500 of them passing the grade to become permanent.”

If you own a website, hopefully at this point you’re asking yourself, “What am I doing for the users of my pages?”
