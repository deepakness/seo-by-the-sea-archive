---
title: "Google Ads Based upon Toolbar Collected User Behavior Data"
source_url: "https://www.seobythesea.com/2008/04/google-ads-based-upon-toolbar-collected-user-behavior-data/"
slug: "google-ads-based-upon-toolbar-collected-user-behavior-data"
date_published: "2008-04-27T12:01:10+00:00"
date_modified: "2020-07-23T13:24:39+00:00"
author: "Bill Slawski"
---

Google’s Content Network provides a way for advertisers to present ads on content pages of sites whose owners have signed up for the service. Hundreds of thousands of site owners show ads on their sites from Google.

The advertisements displayed are based upon the content shown on the pages of the participating sites, using a method that attempts to understand the content upon those pages, and present ads relevant to that content.

But what ads might the search engine show when there is more than one topic on a content page?

How might Google decide to show certain ads based upon user information collected through a viewer’s Google Toolbar? (And what kinds of privacy implications might that have?)

A new patent application from Google explores how the search giant might incorporate user behavior monitoring and the segmentation of pages by topics, to present ads on ad content pages that contain more than one topic, to viewers who might be interested only in some of the content on those pages

[Rendering Advertisements with Documents Having One or More Topics Using User Topic Interest Information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080097833.PGNR.&OS=dn/20080097833&RS=DN/20080097833)
Invented by Krishna Bharat
US Patent Application 20080097833
Published April 24, 2008
Filed: December 21, 2007

Abstract


> Ambiguities concerning a user topic interest may be resolved so that useful topic-relevant ads can be presented.
>
> Such ambiguities may be resolved by monitoring user behavior, determining a user topic interest (e.g., from a plurality of different candidate topics) based on the monitored behavior, and serving ads relevant to the determined user topic interest.

**Deciding Which Ads to Present**

When someone visits a web page that shows Google ads, a request is made to Google’s ad server for some ads to show to that visitor.

The request may include:

- The number of ads to show,
- Information about the document that the ad will appear upon such as a category or topic related to the content on the page (e.g., arts, business, computers, arts-movies, arts-music, etc.),
- The age of that content, and the type of content (e.g., text, graphics, video, audio, mixed media, etc.),
- Geographic information that might have been included in a query leading to the page, and;
- Other information.

Ads may be shown on that content page, and information may be sent back to that ad server about how the ads where displayed, and how the viewer interacted with the ads and the content on those pages.

This might include the positions of the ads, whether or not someone clicked-through, if they hovered over the ads and page content, how long the ads displayed, which links might have been clicked upon, whether or not there was a conversion made, and more.

Similar information might be related to ads shown in search results when ads are displayed after a query is entered into the search engine and a viewer is presented with ads alongside those search results.

The kind of information collected might include what queries where used, what links and snippets to pages were presented in the results and PageRank and information retrieval scores for those pages, the text of those documents that were listed, and other data.

Again, information about how someone interacted with the search results and the ads displayed with those results might be collected.

Google also shows advertisements with Gmail messages, and information about the topics of emails, and how someone interacts with the emails and the ads shown may also be saved for future use.

The patent application tells us that it might look at the following kinds of user behavior in relation to content and ads displayed:

1. Cursor positioning,
2. Cursor dwell time,
3. Document item (e.g., link, control button, etc.) selection,
4. User eye direction relative to the document,
5. User facial expressions,
6. User expressions, and/or,
7. Express user input (e.g., increasing the volume of an audio segment),
8. Etc.

If someone clicks on a link and returns very quickly, that may be a sign that they aren’t interested in what they saw. The order or sequence that they look at things might also provide some information about a viewer’s interests.

**User Behavior Monitoring and User Interest Determination**.

Initially, a document might have some ads associated with it based upon what Google decides that page might be about, without attempting to determine what a viewer’s interests might be upon the page. The ads to be shown might change after monitoring a visitor’s behaviors and adjusting ad interest scores.

Since this patent application can be used to associate different topics with different sections of pages, Google needs to be able to break pages down into different regions, and then analyze those regions to understand what they are about.

***Breaking a page into segments*** — Different regions of a document may be defined by links, section tags, etc. I wrote about how Google might segment pages into different sections based upon topics in [Google and Document Segmentation Indexing for Local Search](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/).

***Determining topics for segments*** — Topics for different sections of a page might be determined using a statistical text analysis like those described in [Statistical Models for Text Segmentation](https://www.cs.cmu.edu/~aberger/pdf/ml.pdf) – pdf, or [Text Segmentation by Topic](http://ciir-publications.cs.umass.edu/getpdf.php?id=48).

Many Google patent filings also explore associating topics with the content of pages based upon analyzing the text upon those pages.

***Creating a document region map*** — A document region map might be created for pages that display ads, which show which topics might be associated with different regions of the pages. As someone interacts with those different parts of pages, the search engine might get a sense of their interests.
.
Ad interest scores for a viewer might be collected by a user’s Google toolbar, or by a cookie saved on the viewer’s computer. The patent application also tells us that:


> In another variant all user behavior tracking and ad insertion can be done by software residing on the client device (e.g., the Google Toolbar).

Ad scores might be used instead of ad interest scores. The difference is that ad scores would not only reflect a user topic interest but may also include other information, such as

1. Ad price information,
2. Ad performance information,
3. Targeting criteria match information, and
4. Advertiser quality information.

An example of how this might work, from the patent application:


> Referring to FIG. 16, when the optimized Web page 1520′ is loaded into the client device, an initial ad or arrangement of ads 1610 is presented based on ad interest scores.
>
> Then, client device user activity is monitored and interest in regions that suggest a certain topic, and therefore a certain set of one or more ads, is recorded.
>
> In the example illustrated in FIG. 16, the user selects (e.g., clicks on) search result eight 1525h and is taken to that page 1620 by a browser for example. Since the eighth search result 1525h is associated with a Web page that has a topic concerning the NFL football team, 1540c, the interest scores of one or more ads of a third set are incremented.
>
> If the user then returns to the search results Web page 1520”, one or more ads 1630 from the third set 1630 have replaced the initial set of one or more ads 1610 (assuming that their incremented scores are greater than those of the ads originally presented).

**Conclusion and Privacy**

This patent application pulls together a lot of ideas that have been described in previous Google patent applications to provide a way of targeting which ads are shown to people searching Google and browsing sites that display Google advertisements.

It shows how the content on pages can be segmented into different topics, and user behavior information can be collected by the Google Toolbar to show which topics of those pages a viewer might be interested in the most.

It describes how the content of pages can be analyzed and associated with different advertisements from Google, as well as how ads shown with search results can be changed based upon user interests.

The ability to break pages down into parts and to understand the topics and categories of those parts may have implications for web search as well as advertising.

As with any of Google’s patent about collecting user behavior data, what kinds of privacy implications are involved?

How comfortable do you feel about Google monitoring your every mouse movement, your every click, your buying habits, and “user interests?”

How might this information be shared with advertisers?
