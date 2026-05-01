---
title: "How Google Might Rank Pages Based upon User Behavior Information"
source_url: "https://www.seobythesea.com/2011/07/how-google-might-rank-pages-based-upon-usage-information/"
slug: "how-google-might-rank-pages-based-upon-usage-information"
date_published: "2011-07-21T06:03:17+00:00"
date_modified: "2021-06-20T09:55:40+00:00"
author: "Bill Slawski"
---

## What Effect Might User Behavior Information Have on Page Ranking

Historically, search engines have ranked web pages in search results based upon a combination of information retrieval (IR) score based upon a matching of terms in a query to terms in a document, as well as a linked based score that calculates the quality and quantity of links pointing to a page, based upon a method like PageRank.

A new patent filing from Google explains some shortcomings of these approaches. It explains how a score based upon user behavior information might be used either in combination with those approaches or in place of them. For example, the patent tells us that term-based methods can be biased towards pages where the content or display of those pages has been manipulated to focus upon those terms. We’re also told that link-based approaches are limited in that relatively new pages have usually had fewer links pointing to them than older pages, so they often have a lower link-based score.

Instead, pages that are returned as being responsive to a particular query might be assigned a score based upon user behavior information and ranked based upon those scores or combined with IR and link-based scores.

The patent application includes examples of two types of usage data: frequent visits to a page or site and many unique visitors to a page or site. Still, it tells us that other user behavior information might be included as well.

Interestingly, the patent application was filed on February 24th of this year, the same date that the [first Google Panda update](https://googleblog.blogspot.com/2011/02/finding-more-high-quality-sites-in.html) went into effect. There may be a connection, but the [information that we’ve been provided about Panda](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html) seems to go beyond what is included in this patent filing:

[Methods and Apparatus for Employing Usage Statistics in Document Retrieval](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110179023.PGNR.&OS=dn/20110179023&RS=DN/20110179023)
Invented by Jeffrey A. Dean, Benedict A. Gomes, Krishna Bharat, Georges Harik, and Monika H. Henzinger
Assigned to Google
US Patent Application 20110179023
Published July 21, 2011
Filed: February 24, 2011

Abstract


> Methods and apparatus consistent with the invention provide the improved organization of documents responsive to a search query. In one embodiment, a search query is received, and a list of responsive documents is identified. The responsive documents are organized based in whole or in part on usage statistics.


## How User Behavior Information Scores Might be Calculated

The patent description is fairly simple and provides an example of how user-based data might be used to rank search results, providing some details of how usage information scores might be calculated. Here’s how it works:

1. Someone performs a query
2. The search engine returns a list of results responsive to the query-based likely upon IR and link-based scores
3. Once those pages are returned, they may be organized based upon usage statistics, in whole or in part
4. Those usage scores could be assigned to pages at the time the query is performed or beforehand and may be based upon a variety of useful information
5. Examples of usage information in the patent include (a) frequency of visit information and (b) unique visitor information
6. The rankings of those pages could be combined with link information such as PageRank and/or query information involving how well the query matches up with terms and phrases on the page
7. Other information, such as the length of the path of a document, could also be used in ranking pages

The patent filing includes a detailed example of how a total score for a page might be calculated based upon the usage score and an IR score:


> In one particular version, the documents might be organized by a total score that equals the usage score multiplied by the square root of a query-term-based Information Retrieval (IR) score. For example, the usage score might be calculated using a frequency of visit score multiplied by a unique user score multiplied by a path length score.
>
> The frequency of visit score equals log 2(1+log(VF)/log(MAXVF), where VF is the number of times that the document was visited (or accessed) in one month, and MAXVF is set to 2000. A small value is used when VF is unknown. If the unique user is less than 10, it equals 0.5*UU/10; otherwise, it equals 0.5*(1+UU/MAXUU). UU is the number of unique hosts/IPs that access the document in one month, and MAXUU is set to 400. A small value is used when UU is unknown. The path length score equals log(K-PL)/log(K). PL is the number of characters in the document’s path, and K is set to 20.


## Frequency of Visits

The frequency of visits to a page could be calculated a few different ways:

- The number of times that a page has been visited
- The number of times that a page has been visited over a certain period of time (such as 100 visits in the past week)
- The change in the number of times a page has been visited over a given period of time (e.g., 20% increase during this week compared to the last week), or
- Any number of different ways to measure how frequently a document has been visited

These counts might be filtered to remove visits from robots or automated agents, or people affiliated with a page since those might not be considered to represent an objective usage of the page. (That would likely rule out visitors that someone might send from a service like Mechanical Turk as well.)

In addition, some factors involving the nature of the visits might also be considered, such as assigning a weighting factor based upon the geographic source for a visit. So, for example, a visit from Germany might count twice as much as a visit from Antarctica. Other types of information about the visit might also provide different weights to the visitor frequency score, such as the browser used to visit the site or other information about a user. Unfortunately, the patent doesn’t provide many details about these other types of user information.


## Number of Users

Very similar to the frequency of visits above, but focusing upon the number of visitors rather than visits, calculated in several ways:

- The number of users that have visited a document in a given period of time (e.g., 30 users over the past week)
- The change in the number of users that have visited the document in a given period of time (e.g., 20% increase during this week compared to the last week)
- Any number of different ways to measure how many users have visited a document

Users might be identified based upon information such as:

- A user’s Internet Protocol (IP) address
- Their hostname
- Cookie information, or
- Other user or machine identification information

Again, the number of visitors may be filtered to remove automated agents or robots and people affiliated with a page.

And again, there may be additional weightings of the number of users based upon the nature of the user. For example, a user from Germany might count twice as much as a visitor from Antarctica for a certain page. Other information such as browsing history, bookmarked items, and others may also impact the score based on users’ numbers.


## Other User Behavior Information

While the patent filing points to frequency of visits or number of visitors as user statistics that could be used to rank documents, we’re told that “those skilled in the art” will recognize that there are other types of user behavior information and techniques that are “consistent” with the invention.

We’re also told that instead of maintaining this kind of user behavior information for individual pages, it might be done on a site-by-site basis. The site usage information is associated with some or all of the pages on that site.


## User Behavior Information Example

Three pages are returned on a search for [weather]:

- The first page was visited 40 times over the past month, with 15 of those 40 visits being by automated agents
- The second page, which is linked to from the first page, was visited 30 times over the past month, with 10 of those 30 visits coming from Germany
- The third page, which is linked to by the first two pages, was visited 4 times over the past month

Under a ***term-based search ranking*** approach, the pages might be organized based on how frequently the search query term (“weather”) shows up on each page. The second page includes three occurrences of the term “weather,” so it would show up first. The third page has “weather” in it twice so that it would be ranked second. The first page only has one occurrence of “weather,” so it would be listed last.

Under a ***link-based search ranking*** method, the pages might be listed based upon the number of other documents that link to those documents. Since the third page is linked to the other two pages, it would be first. The second page is only linked to by one other page so that it would be listed second. Our first page would be listed last because it has no links to it.

Under a ***usage information-based ranking*** approach, the pages might be ranked differently.

Looking just at a raw visit frequency, the pages might be organized into the following order: first page (40 visits), second page (30 visits), and third page (4 visits).

If those raw visit frequency numbers are refined to filter out automated agents and to assign double weight to visits from Germany, the order of the pages might change to the second page (effectively 40 visits, since the 10 from Germany count double), first page (effectively 25 visits after filtering out the 15 visits from automated agents), and the third page (effectively 4 visits).

The user behavior information might be combined with either or both the IR scores and the link scores.


## Conclusion

Interestingly, this patent application was filed on the same day that Google launched the first Panda update, and it’s possible that some aspects of how the Panda approach works might be based upon user behavior information.

It’s also interesting that if you look at the [list of questions](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html) in relations to Panda that Amit Singhal pointed out as” questions that one could use to assess the ‘quality of a page or an article,” they focus upon the “quality” of a user experience on a site. Panda does seem to focus on creating a ranking score based upon features found on a page or site rather than actual user behavior data, as this patent does.

We don’t know if Google is now incorporating user behavior data such as visitors’ frequency or numbers into how they rank pages. Still, it wouldn’t be surprising if they are (as part of Panda, or independently of it) or will be in the future.
