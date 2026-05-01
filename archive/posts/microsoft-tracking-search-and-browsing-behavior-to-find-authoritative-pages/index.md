---
title: "Microsoft Tracking Search and Browsing Behavior to Find Authoritative Pages"
source_url: "https://www.seobythesea.com/2008/02/microsoft-tracking-search-and-browsing-behavior-to-find-authoritative-pages/"
slug: "microsoft-tracking-search-and-browsing-behavior-to-find-authoritative-pages"
date_published: "2008-02-28T13:16:15+00:00"
date_modified: "2017-03-30T13:33:22+00:00"
author: "Bill Slawski"
---

*Between December 2005 and April 2006, researchers from Microsoft collected information about the searching and browsing activies of hundreds of thousands of Windows Live Toolbar users, with permission, to learn about the sometimes unranked and unindexed final destination pages that searchers ended up at in response to queries entered at Google, Yahoo, and Microsoft’s Live.com.*

So much of what search engines try to do when presenting relevant results to searchers is based upon assumptions found in algorithms like PageRank.

Can tracking actual user search and browsing behaviors better help a search engine understand which pages may best answer queries posed by searchers at search engines?

**Microsoft on Final Destination Pages**

Last year, a trio of Microsoft researchers were awarded the Best Paper Award at SIGIR’07 for a paper titled [Studying the Use of Popular Destinations to Enhance Web Search Interaction](https://www.microsoft.com/en-us/research/publication/studying-the-use-of-popular-destinations-to-enhance-web-search-interaction/) (pdf) that looked at the searching and browsing behavior of a large number of people.

The focus of the research was to find pages that seem to be final destinations, or stopping points where people may have found the answers to their search in response to the queries they submitted to the search engine. I wrote a little about the original paper before the Conference in [Microsoft Study Takes Navigational Sitelinks a Step Further](https://www.seobythesea.com/2007/06/microsoft-study-takes-navigational-sitelinks-a-step-further/).

What they told us then about those final destinations was that:


> The destinations may not be among the topranked results, may not contain the queried terms, or may not even be indexed by the search engine. Instead, they are pages at which other users end up frequently after submitting same or similar queries and then browsing away from initially clicked search results.

**Final Destinations as Authoritative Pages?**

They’ve built upon the original research in a new paper, [Leveraging Popular Destinations to Enhance Web Search Interaction](http://ryenwhite.com/papers/WhiteTWEB2008.pdf). Here’s what they tell us in the abstract:


> This article presents a novel Web search interaction feature that for a given query provides links to Web sites frequently visited by other users with similar information needs.
>
> These popular destinations complement traditional search results, allowing direct navigation to authoritative resources for the query topic.
>
> Destinations are identified using the history of search and browsing behavior of many users over an extended time period, and their collective behavior provides a basis for computing source authority.

The researchers looked for what they called *search trails* to follow a path from pages that searchers located in search results to pages where the searcher’s inquiry around that search seemed to stop for one reason or another. Their research provided some interesting statistics about search trails:


> The statistics suggest that users generally browse far from the search results page (i.e., around five steps), and visit a range of domains during the course of their search. On average, users visit two unique (non search-engine) domains per query trail, and just over four unique domains per session trail.
>
> This suggests that users often do not find all the information they seek on the first domain they visit. For query trails, users also visit more pages, and spend significantly longer, on the last domain in the trail compared to all previous domains combined. These distinctions of the last domains in the trails may indicate user interest, page utility, or page relevance.

They also provided some interesting statistics about search queries too:


> For frequent queries, most popular destinations identified from Web activity logs could be simply stored for future lookup at search time.
>
> However, we have found that over the six-month period covered by our dataset, 56.9% of queries are unique, while 97% queries occur 10 or fewer times, accounting for 19.8% and 66.3% of all searches respectively (these numbers are comparable to those reported in previous studies of search engine query logs [Silverstein et al. 1999, Spink et al. 2002]).

In addition to studying the query logs from the many Windows Live Toolbar users, the researchers brought a number of people into their labs to conduct studies with them. We are given a number of details about that study in the paper.

**Conclusion**

The “final destinations” in this study aren’t query refinement suggestions, but rather are pages that may be relevant ones for the searches conducted as seen by actual searching and browsing behavior of searchers.

The appendix in the paper shows some of the tasks that were given to people tested in the Microsoft Labs. What final destination pages do you end up on looking for answers to questions like these, which are some of the ones listed:

Known-item task descriptions:

1. Identify three positive achievements of the Hubble telescope since its launch in 1991.
2. Find three hotels in Paris, France, that include a spa and health club.
3. Identify three interesting things to do during a weekend in Kyoto, Japan.

Exploratory task descriptions:

1. You have been talking to a friend about increases in size and diversity of the United States student population. You decide to find out how the student population has actually changed over the past five years.
2. A colleague has recently been diagnosed with a dust allergy. You are curious about causes of dust allergies and medications that ease the symptoms, so you decide to learn more about them.
3. You have to plan a five day vacation along the west coast of Italy. You want to find out what are the must-see sightseeing spots along the Italian west coast, and learn about Italian wine and the best vineyards in Tuscany to visit on your trip.
