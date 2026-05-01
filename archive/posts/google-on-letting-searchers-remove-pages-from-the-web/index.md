---
title: "Google on Letting Searchers Remove Documents from the Web"
source_url: "https://www.seobythesea.com/2007/02/google-on-letting-searchers-remove-pages-from-the-web/"
slug: "google-on-letting-searchers-remove-pages-from-the-web"
date_published: "2007-02-22T21:02:21+00:00"
date_modified: "2022-03-04T13:04:25+00:00"
author: "Bill Slawski"
---

*Added 3/4/2022 – This removed documents was a live feature at Google that Google halted. You could remove documents from your searches, but pages would continue to rank the same for other searchers if you did.*

re, we may all be able to join Google Engineer [Matt Cutts](https://www.mattcutts.com/blog/) in fighting spam on Google. Or at least to remove documents from our searchers and browsers.

A new patent application from Google gives people the power to remove documents or even sites from web searches and browsing. Matt Cutts is one of the co-authors. (You may have seen this before as a Google experiment.)

Why remove documents?


> Sometimes, the search results include a web page that the user deems undesirable. This web page may be considered undesirable by the user because the web page is spam, the web page relates to content unrelated to the user’s interests, the web page contains content that the user dislikes or finds offensive, or for some other reason.

The patent application is:

[Removing documents](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070043721.PGNR.&OS=dn/20070043721&RS=DN/20070043721)

Invented by Sanjay Ghemawat, John Piscitello, Simon Tong, and Matt Cutts
US Patent Application 20070043721
Published February 22, 2007
Filed: August 22, 2005

Abstract


> A system may present information regarding a document and provide an option for removing the document. The system may also receive a selection of the option and remove the document when the option is selected. The system may aggregate information regarding documents that have been removed by a group of users and assign scores to a set of documents based on the aggregated information.

The description of how this might remove documents is broken down into the following sections.

- Overview
- How a Removal Feature is Implemented
- Removal Options
- Creating A Remove List
- Alternative Documents for Removed Pages
- Removed Pages and Search Results
- Buffy Example
- Improving Search Results
- Local Remove Lists


## Remove Documents Overview

What it involves – A remove documents feature which a user can use to show they dislike a document.

Individual use – Remove the document from the user’s browser, including search results, so the user doesn’t have to view that document again.

Collective use – Removal information collected from users to improve the quality of search results for the group or another group of users.

How it’s used – The remove feature may be implemented as part of a browser.


## How a Remove Documents Feature is set up

The remove documents feature software may use:

- a plug-in,
- An applet,
- A dynamic link library (DLL),
- A bookmark, or;
- A similar executable object or process.

The remove documents feature software be presented within a web browser window as:

- A toolbar button, (from an add-on toolbar or a browser toolbar),
- A menu item of a web browser,
- A link (for instance, on a search results page),
- A frame, or;
- Other ways

It could be part of the browser or an interface between the browser and the web.

Activation of the remove documents feature software happens:

- Automatically upon initiation of the web browser, or;
- When instructed by a user.

**Remove Documents Options**

Options on What to remove may permit a user to remove:

1. The document,
2. The site associated with the document,
3. Any related documents, such as documents of the same type, hosted by the same server, associated with the same domain, or classified the same as the document, and;
4. A copy or a set of documents for a particular set of queries, subjects or categories of searches, types of document corpora (e.g., general web versus product search documents), etc., but not for others.

Options on how long may permit a user to remove it for:

1. A single search,
2. A single search session only (a sequence of queries or interactions by the same user),
3. All searches/sessions, or
4. A specific period of time.


## Creating A Remove Documents List

A remove list could be set up on your computer, a server from Google, or spread out over both.

A page may be selected for removal when visiting the page or from a list of search results presented from Google or through a Google toolbar.

Upon making a removal selection, the person using this feature could choose the options listed above about what they want to remove and for how long.

Those options would be stored on a remove list associated with a specific searcher.

It appears from the document that there would be one remove list, with multiple options upon it, instead of more than one for different types of options, such as remove for a single session or remove for all searches. But, it may also be possible to have separate ones for different options.

Separate remove lists may be set up for each user, based upon a user identifier, such as:

- An IP address associated with computer used by the user, or;
- Login information associated with the user.


## Alternative Documents for Removed Pages

If you have been using the remove documents feature, and you go to visit a web page:

1. A determination is made as to whether a document is on your remove list.

2. When you visit a page, and it isn’t on the remove list, you may see the page.

3. If the document is on the remove list, you could be redirected to an alternative copy instead of the previously removed page.

4. The alternate document presented to a user might include a message letting you know that you had removed the paper.

5. It may also present an option to access the document even though it is on your remove list.

6. If you choose to view the page, it may be shown to you without taking it off the remove list.

7. The alternate document may provide the option of taking the paper off the remove list.

8. Selecting that document may take it off the list and present the unremoved page.


## Remove Documents and Search Results

1. You type a query into a search box through the toolbar or at the search engine.

2. Your search results are scored, sorted, and listed in the response.

3. A determination is made as to whether any of the results are on your remove list.

4. If none of the documents are on your remove list, then they will be presented to you.

5. If one or more of the pages are on your remove list, then the results might be modified so that those removed pages are filtered out.

6. There may be somehow an indication that specific documents were filtered from your results.

7. If the removed list (or part of it) is stored locally on your computer, it may intercept the released documents and cause them not to be shown.

8. If the toolbar filters some results, it may indicate which ones are in a “distinguished manner.”

This last part of this section is important enough to quote directly instead of summarizing:


> Besides, a search engine (e.g., the Google search engine) may optionally collect and track removal data from users and use such removal data to score documents for searches by all or a subset (e.g., geographical) users. For example, suppose many users remove an individual search result for a given set of search queries. In that case, the search engine may use that information to adjust the score for that document (for those sets of search queries and others). In other words, removal data may be used as a scoring signal by a search engine or other search application.

I’m not sure how many “signals” Google uses at this point to rank documents during a search, but removing list data may join those.


## Buffy Example

There’s an example involving how this removal process works in the patent application (under the section labeled “example), using the page: www.upn.com/shows/buffy.

It’s pretty straightforward, so I’ll mention it here rather than summarize it. Not sure why the authors chose that page, and maybe they’re fans of Buffy the Vampire Slayer (or maybe not, if they are removing the page from searches).


## Improving Search Results

1. Google may collect remove documents list information associated with a group of users. If those lists are stored on a user’s computer, they may be transmitted to a server. If the removed lists are collected on Google’s server, that transmission doesn’t have to happen.

2. In one version, remove list information associated with a group of users that might be aggregated.

3. As an example, remove list information associated with only “legitimate” users might be aggregated to reduce the effects of spamming.

4. Legitimacy of a user might be determined based upon:

- Amount of time the user spent accessing the search engine,
- Interactions of the user with the search engine,
- Valid login information,
- Whether the user has posted a bond or some sort of deposit (?),
- Reputation or ratings of the user, or they are known about in some other manner,
- A relationship (such as advertiser) with the search engine, and/or;
- Other information that may distinguish a legitimate user from an illegitimate user.

5. Remove list information associated with “some” identified set of users that may be aggregated. Examples might include:

- Users within a particular geographic region (such as in the United States),
- Users with a defined relationship such as friends within an online community like Orkut, address book contacts, users associated with a specific web site, users identified by a particular user), etc.

6. Google may assign scores for search result documents based on the remove list information.

7. The scores could be partially based on factors independent of search queries and precomputed and partially on the particular search query involved.

8. The total score may be based on a function of one or more features of a document, such as an information retrieval (IR) score, a link-based score, and a remove list score.

9. The remove list score that would go into this total score may be determined based upon remove list information associated with a page. For example:

- How many users that removed each document and/or;
- How many users removed each document that another particular user first removed (where the particular user may be the user that provided the search query).

10. The remove list information associated with a group of users may be used to determine scores for the group or another group of users (including or separate from the group). Examples:

- When removed information is aggregated for the group of “legitimate” users, the remove list information may be used to determine scores for documents for all users.
- When removing list information associated with contacts within an address book and is aggregated, that removed list information may be used to determine scores for those users.

11. Google may combine the IR score link-based score and remove the list score for a total score used to rank a document.

12. This removal of “undesirable” documents from search results may improve a user’s search experience.


## Local Remove Documents Lists

In addition to working with web-based documents, this remove list process could also be used for papers on a computer searched for with a desktop search.


## Conclusion

This “remove this result” option has appeared in Google’s personalized results, and a couple of quick-eyed commentators covered it the first time around. Marc Hil Macalua wrote about it in a September 2005 post titled [Remove Result Option in Google Personalized Search](https://www.instagram.com/darthbisduk/?p=242). Loren Baker covered this in [Google Testing Remove Result and Spam Report Options](https://www.searchenginejournal.com/google-testing-remove-result-and-spam-report-options/2245/).

Loren also points out a post that Matt Cutts wrote on this User Interface Experiment – [UI Fun: Remove Result](https://www.mattcutts.com/blog/remove-result/). Will “remove results” return? Guess that depends upon how the experiment turned out.

Last Updated 3/1/2022.
