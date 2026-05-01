---
title: "Yahoo Patent Application Challenges Other Search Engines"
source_url: "https://www.seobythesea.com/2007/05/yahoo-patent-application-challenges-other-search-engines/"
slug: "yahoo-patent-application-challenges-other-search-engines"
date_published: "2007-05-07T23:39:10+00:00"
date_modified: "2017-04-22T10:38:33+00:00"
author: "Bill Slawski"
---

Recently, the idea of a merger between Yahoo and Microsoft’s search was being taken pretty seriously, with a featured story on the rumor in the Wall Street Journal, and commentary on the topic appearing in a lot of blogs and other sources.

The Journal later noted that talks between Yahoo and Microsoft weren’t going on, but it left me wondering what we would see in a search engine that combined aspects of Yahoo’s search, and that from Microsoft’s live.com. Could that happen even without a merger?

Would Yahoo let searchers compare their results against other search engines head-to-head?

**Yahoo Search Results Merged with Live.com**

Imagine going to Yahoo and performing a search, and then being offered the opportunity to perform the same search again, but with results from another search engine mixed in, such as those from Google or Live.com.

Those “difference” results would indicate which search results were in Yahoo, but not the other search engine used. Or might show which were higher ranked in Yahoo, and lower ranked in the other search engine. It also might allow searchers to provide feedback regarding the results.

Three patent applications from Yahoo explore this possibility.

- [Difference control for generating and displaying a difference result set from the result sets of a plurality of search engines](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070100822.PGNR.&OS=dn/20070100822&RS=DN/20070100822)
- [Presentation of differences between multiple searches](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070100821.PGNR.&OS=dn/20070100821&RS=DN/20070100821)
- [Indication of exclusive items in a result set](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070100797.PGNR.&OS=dn/20070100797&RS=DN/20070100797)

The main idea behind such a comparion would be to allow the search engine to track the selections of results in the combined difference result set, and use those to improve searching and ranking of items in Yahoo. Feedback might also be elicited from a searcher regarding the selection of an item in the difference result set.

Here’s a rundown of how this might work:

1) A search is performed, and search results are returned in response to a query.

2) Those results are ranked by a method such as the one described in U.S. Pat. No. 5,765,149, entitled [Modified Collection Frequency Ranking Method](https://patents.google.com/patent/US5765149A/en).

3) The search engine includes a difference component which can be used to determine a “difference” search result set based on the difference between Yahoo results and results from another search engine.

4) The other search engine would be using a different search algorithm.

5) A difference result set lets the user determine differences between the outputs of the different search algorithms so that they can objectively judge which is superior. The patent application tells us that:


> Those two different results could come from the Yahoo! Search engine and the MSN Search, and the difference component may create a difference result set based upon the differences between the two.

6) The difference component may be set up to query one or more search engines on a periodic basis, and store those queries and associated results in a result set data store. Or, it could maintain the secondary result sets and difference result sets on client devices. This way the results are cached, so that searches aren’t slowed down by accessing two different search engines.

7) Those secondary results could be set up to be rerun and updated over time (every day, for instance). Again, to cache results.

8) The difference component may receive detailed information from the search engine regarding queries that users have been submitting to the search engine over a given period of time, e.g., the past day, the past week, etc. Based upon this information, the difference component may instruct the search engine to execute one or more queries.

9) Those result sets may be stored for those queries on a per search engine basis.

10) These kinds of searches might be done for the top one hundred most popular queries for the past week, through the difference component.

11) Alternatively, the difference component may run client side, through something like the Yahoo toolbar.

12) URL matching detection, a fingerprinting technique, or analysis of sites with substantial similar URL structures and/or content might be used to keep pages that are essentially duplicates from being shown within the difference result set when the primary and secondary results are mergered.

13) The difference component may be generated by the user’s selection of a control, such as a button. The searcher can use the primary result and the difference result. The user’s queries and other interactions are maintained in a profile data store as one or more user profiles, or as a cookie.

14) A profile for a given user maintains information regarding that user, queries that the user submits to the search engine, a user’s interaction with primary and secondary result sets, etc. It may also maintain a user’s preferred search engines from which to retrieve secondary result sets for use in generation of a difference result set.

15) The user’s profile may maintain an indication of a default search engine, or the information in the user’s profile may be analyzed to determine a predicted preferred search engine.

16) The search engine may only show the difference button to some users, and not others.

17) The decision as to which users to show that difference button is made based upon a number of factors:

- It could be shown to all users
- The search engine might analyze a user’s characteristics or a user profile in the profile data store to determine if the difference button should be shown.
- The search provider may also analyze server, ISP and other logs to determine whether search engine should show the difference button to the users, e.g., determining those users who have recently switched to or from an alternate search provider.
- The search engine might display the difference button only in response to certain queries that the search engine receives, e.g., queries to which the search engine has received good feedback from users regarding the primary result set that the search engine generates in response to the query.
- Geographical factors may also be used.
- The determination may also be made on the basis of an actual, stored or predicted primary, secondary or difference result sets, including the items contained therein and the query terms in response to which a search engine or other component generates the result set.
- The difference results may only be shown to registered users.

18) The difference component may utilize a result set “data store” to maintain cached copies of secondary result sets from one or more search engines that are located remotely from the search provider.

19) The system may record a user’s interaction with items in the difference result set which may be used in weighting certain URLs when generating the primary result set. For example, where users consistently select the URL that is the number one search result from the difference result set that is not the number one result in the primary result set, the search engine may weight the URL such that it is assigned a higher rank in the primary result set.

20) In an alternative, the search engine might check to see if there is a user profile, and if there is for the searcher, it may retrieve that profile which may be used to identify one or more preferred search engines to use for generating a secondary result set. If there is no profile or a preferred search engines isn’t identified, a default preferred search engine may be selected, which could be based on attributes in a user profile.

21) The system may identify a preferred search engine check to see if a cached result set exists from that preferred search engine for the received query. When there is one, the secondary result set is retrieved. Where there isn’t, a secondary search engine is queried with the query terms received from the user, and a secondary result set is generated. A difference result set would then be created.

22) Difference results might be shown in:

- a dialog box,
- a separate browser window,
- within a dedicated portion of the interface in which the system presents the primary result set,
- etc.

23) Selections from the primary or difference results are tracked, and may allow the system to use these data in influencing the searching for and ranking of documents.

24) Difference results may be based upon multiple sequential queries. For example, a person might first search for “golf” and then for “golf shoes.” A difference button might not be shown with the first set of results, but might be shown with a second set where a query is modified.

25) While duplicates may be filtered out, the system might indicate that items in the primary site are also listed in a difference result set. It may also show when results are above a certain threshold ranking in the primary result, but below that threshold in the secondary result, or not contained in the secondary result at all.
