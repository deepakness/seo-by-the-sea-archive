---
title: "Ask.com Using Queries to Detect and Filter Adult Content?"
source_url: "https://www.seobythesea.com/2006/08/askcom-using-queries-to-detect-and-filter-adult-content/"
slug: "askcom-using-queries-to-detect-and-filter-adult-content"
date_published: "2006-08-17T23:12:34+00:00"
date_modified: "2020-05-21T09:32:35+00:00"
author: "Bill Slawski"
---

*Ok, so adult content may not be your cup of tea, and you may not really care. Bear with me here. It’s not really so much filtering adult content that I’m interested in either, but instead how a search engine algorithm can use queries and user behavior to decide whether or not to filter something.*

The following describes a patent application that may or may not be in use by Ask.com. I think that it’s important to also note that while the method here describes how the search engine could categorize and filter adult images, its use could be broadened to other content and categories. It provides a nice look at how query sessions and user activity can be used to help a search engine decide what pages and images are about, based upon seeing how people interact with the search engine.

You would think that an algorithm that attempts to filter adult images from the view of children and people who don’t want to see such images would have a visual component to it – that it would try to understand the pictures in question. The following patent application, invented by two Ask.com employees has no such visual aspect but relies instead upon user behavior to gauge whether or not an image contains adult material.

There’s a decent possibility that adult content information may be returned in response to a query even if the search terms used had no obvious terms that there was an intention of requesting such information. This patent is aimed at gaining more control over what images might be returned during a search, and whether or not they are appropriate for the audience viewing those results.

*At this point, you may be asking yourself if you really care about an Adult Content Detection Algorithm. Keep in mind that this could just as easily be a Falun Gong Content Detection Algorithm or a Paris Hilton Content Detection Algorithm. Actually, wouldn’t it be nice if you tell the search engine things that you didn’t want to see images of? Unfortunately the patent doesn’t do that. This may even have some implications for non-image searches*

The inventors note that it’s difficult to determine whether an image is pornographic or not without doing image analysis and that such an analysis may be very time-consuming. This algorithm tries to detect pornographic images by tracking query associations without analyzing pictures.

[Methods and apparatuses to determine adult images by query association](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060184577%22.PGNR.&OS=DN/20060184577&RS=DN/20060184577)
Inventors: Kaushal Kurapati and Rahul Lahiri
US Patent Application 20060184577
Published August 17, 2006
Filed: May 18, 2005

Abstract


> Various methods and apparatuses are described for an adult content detection implementation. In one embodiment, a method detects adult content images by tracked query association to a user’s query for an image search. The set of images returned in response to the user’s query on a search engine are based on whether one or more images in the set are classified as an adult content image.

**How it works**

Someone searches for images, and the search engine attempts to present pictures while detecting adult content images, which it identifies by looking at tracked query associations matching the searcher’s query. The adult content detection algorithm may cause some images not to appear in results based upon those associations.

A database stores potential adult content information regarding one or more images potentially in a set of images returned in response to the user’s query and may keep statistical track of relevant information from all past and current user sessions. It also stores and statistically tracks query associations based upon past user behavior as well as tracked characteristics of the source of the image and other information about the adult content nature of these images.

**Query Associations**

The patent identifies those tracked query associations as follows:

- a query-to-pick correlation,
- a pick-to-pick correlation,
- a query-to-query correlation,
- a pick-to-query correlation,
- Other similar statistically tracked user behavior correlations.

A “pick” is a selection of an image from those presented by the search engine in search results. It’s also important that the behavior being looked at is over user sessions instead of just individual queries.

A **query to pick (Q2P)** correlation may look to see if there are any terms in the query to indicate that the query is not of “clean” nature, and also what images from those returned to a potential pornographic user’s query were picked during that user session.

A **pick-to-pick (P2P)** correlation may associate all picks (picture selections) made during a user session with all other picks issued during that session. The assumption is that a user thought all of the images looked at were relevant to the user’s query and a correlation is established between all of the selected images picked during that session.

*This is some awkward language to identify relationships between different types of user behavior. I was tempted to try and translate something like “query to pick correlation” into something easier to understand and remember, but decided that their technical use of language might be more precise and easier to remember than something like “search term to picture selection relationship.” “Query to Pick” is snappier, too.*

**Removing Adult Images from Searches Containing Non-Pornographic Search Terms**

*Checking the query to see if it is “clean”*

The process begins when a search enters search terms into an image search engine.

The adult content detection algorithm checks to see if the query is one involving adult images by looking at the search terms. By default, it assumes that a query is one for non-pornographic images. It may have a list of terms that when present classify a query as pornographic.

If it doesn’t appear that the query is searching for adult content images, then by default the query under consideration is classified by the system to be a clean query seeking non-pornographic images.

In that case, the algorithm will then fetch image results for the clean query.

Example:

If the search terms in the user’s query are a person’s name, the search engine displays a list of pictures relevant to that person’s name.

*Reviewing the images being returned*

The adult content detection algorithm looks to see if any potential images in the search results have been marked/tagged as being adult content in nature. It does this by comparing the images returned in response to the user’s query to information regarding the adult content nature of these images stored in the database.

That information may be determined by looking at the statistically tracked query association information as well as other non-image analysis tracked information.

One or more adult content images may be eliminated from the set of images returned in response to the user’s query through that comparison.

The algorithm can also compare the image results for the clean query under consideration and tracked information stored in the database about any of the previously returned images from known pornographic queries.

If any images from those comparisons are in common, then the common images are considered naturally pornographic/adult content and they should not be shown in response to the user’s query. The commonality of images can be established by looking at image IDs, and/or image Universal Resource Locator (URL) addresses.

The result set is modified to remove images classified as adult content images, and pictures are returned to the searcher.

*Determining if queries are pornographic in nature*

The algorithm may determine if the query is pornographic in nature because it contains search terms that classify these queries as pornographic queries, looking through a list of terms to do so. It would fetch images in response to a query containing search terms classified as adult content which would be most probably all be adult content/pornographic in nature.

The adult content detection algorithm **tags** some or all of the image results returned in response to the adult content query as potentially adult content images. In other words, it may perform a *query-to-pick correlation* by tagging one or more of the set of images as adult content/pornographic in nature.

So, images picked by the user in response to the user’s query containing adult content search terms are most likely adult content in nature and may be potentially tagged as adult content.

Of course, the algorithm might wait, and keep track over time, to tag only the most frequently selected images as being adult. A threshold amount of selection occurrences may have to occur before the image is tagged as an adult.

The algorithm may also perform a *pick-to-pick correlation* to ferret out those images that are often picked in conjunction with known adult content images. A threshold amount of selections may apply to these, too.

**Tracking Query Association Information**

The adult content detection algorithm stores in the database statistically tracked query association information including:

- Tagging information,
- Query-to-pick correlations,
- Pick-to-pick correlations,
- Query-to-query correlations,
- Pick-to-query correlations,
- As well as other similar statistically tracked user behavior correlations.

The search engine could store additional information regarding the user and images in the database as well.

**Tracking User Queries and Behavior**

*Evolving Use of Users’ Queries*

The stored information mentioned above is used along with current and previous user queries to affect a current user’s query based upon a correlation of user activity and/or user information obtained during a search session with similar information from other users. This means that there is an evolving association between queries and the organization and presentation of documents.

*Statistically Significant Users’ Activities*

The search engine looks at users’ activities over entire search sessions, making it possible to relate a number of different types of user activity and user information. This has advantages over just filtering on the basis of keywords associated with pictures. Responses from multiple users are needed so that the results and associations made are statistically significant.

*Correlating and Aggregating Queries and Activities*

There’s a correlation of a current user’s query to current and or past user search engine (Use) activity and/or user information obtained during a search session with similar information collected from other users.

Use activity information and/or user information, during a search session, is recorded for several independent users, and may include:


> - The issuing of queries,
> - The clicking of links on the search page leading to internal or external data,
> - The clicking of links on subsequent internal pages leading to internal or external data,
> - A return to the search page or any internal page subsequent to clicking an internal or external link, and;
> - Other similar information.

A session where USE activity is measured may be continuous or occur within a specified time period that indicates the termination of a search session.

A statistically significant association is probably not attributable to random occurrence. These associations could be any pairing of queries, terms, concepts, articles or other web data, or combinations thereof, made explicitly or implicitly by a user during a search session.

The word “correlation” is used a lot in this patent, and it means that there is a statistically significant association made by two or more seemingly independent users.

*This “independent Users” language is from the patent application and seems to be a way of keeping people from spamming the system to try to manipulate results*

**Storing Use Activity and User Information**

The system would have a database that may store and maintain data files for all Use activity information and user information within a table. This table would contain a number of data elements recording the queries for a number of users at various times and the URL (pick) that was selected (clicked) subsequent to each respective query for each respective user.

It could also include other information, such as:

- The display rank of the result selected,
- The order the result was clicked by the user during the session,
- The user IP address,
- Geo-location of the IP address,
- Whether the image has previously been tagged as adult in nature,
- The number of sessions this image has been selected with other known images tagged as adult in nature, etc.

**Other Factors**

The patent is pretty detailed, and it goes on to describe the different factors that will correlate the content of a query with follow up queries or selections of images that may have been determined to be pornographic in the past with the selection of other images.

It does look at things during sessions like:

- Time between query and pick,
- Time between picks,
- Time between queries,
- Whether or not the query results generated picks,
- Number of intervening queries and/or picks,
- Order of queries with respect to picks,
- Rank of the pick in the result list at the time of association,
- Duration of the pick (interval until next known user action),
- Age or order of the association (relative to older or newer associations),
- Age of the first known instance of association,
- The pair-wise order of associated picks,
- The pair-wise order of the associated queries,
- The source of the images,
- Non-image attributes of images, and;
- Other factors

The algorithm may also determine the language of a Universal Resource Location and compare that language to the language of the query to determine if an adult content should be returned for the query. It could look at the text around an image to determine if the image should be classified as adult content in nature.

**Conclusion**

As I noted above, it is possible for an algorithm like this to be used to filter images involving other topics. I think it does a great job of showing the outlines of a method for using user queries and user activity information to show how results can be filtered in a search engine. It’s not too difficult to see how this might be adopted to instead give greater or lesser relevance scores for results, too.
