---
title: "PostRank and the Importance of Social Engagement Data to SEO"
source_url: "https://www.seobythesea.com/2012/04/postrank-importance-social-engagement-metrics/"
slug: "postrank-importance-social-engagement-metrics"
date_published: "2012-04-29T15:56:20+00:00"
date_modified: "2020-11-03T16:53:23+00:00"
author: "Bill Slawski"
---

There are many sites that curate content and links on the Web, including many blogs and a number of social sites that do it through submissions by their members, who can also vote upon those submissions. The inventors of PostRank came up with an algorithmic approach to rank articles and blog posts and other content on the Web, and present it to people based upon those rankings. I’ve found a patent application at the USPTO that provides some insights and details on how their approach worked.

Google [acquired PostRank](https://web.archive.org/web/20110626084315/http://blog.postrank.com:80/2011/06/postrank-has-been-acquired-by-google) last June, as was announced on the PostRank blog on June 3, 2011. Given Google’s increasing move towards looking at more social signals for the potential ranking of content shared by others, it’s worth wondering how this social engagement data technology might be used by Google, and what the PostRank team might be bringing to the effort. PostRank Co-founder Ilya Grigorik, who now appears to be a web performance analyst with Google, noted in the post announcing the acquisition:


> We know that making sense of social engagement data is important for online businesses, which is why we have worked hard to monitor where and when content generates meaningful interactions across the web. Indeed, conversations online are an important signal for advertisers, publishers, developers, and consumers but today’s tools only skim the surface of what we think is possible.

Google [added social metrics reports](https://analytics.googleblog.com/2012/03/capturing-value-of-social-media-using.html) to Google Analytics this past March, and that might be the area that PostRank team members were working upon after joining the search engine. ReadWriteWeb discussed that possibility while telling us about what it was exactly that PostRank did:


> Here’s what PostRank does: you plug in any RSS feed to the system and it scores each post in that feed by the relative number of comments, inbound links, mentions on Twitter, saves on Delicious and other social media metrics. Then you can subscribe to a filtered feed of just the 10% most-discussed items in any feed. It’s magic, it’s gold and it’s all too often unappreciated.

Given the amount of information (and misinformation) that appears on the Web every day, there’s a great amount of value in an approach like that, applying filters when you don’t have time to do that filtering on your own.

It would be a little disappointing if the only thing to come out of the PostRank acquisition would be some analytics reports in Google Analytics. Is it possible that members of the team might be engaged in other areas of Google as well?

Are they engaged in working out [how social sharing](https://www.seobythesea.com/2012/02/google-pls-roots-are-showing-in-grouptivity-patent-filings/) might be used to influence search results with the technology acquired from Grouptivity?

Might they be working on a way to track the impact of rumored [Google Comments](https://www.seobythesea.com/2012/04/googles-comment-patents-web-rankings-influenced-by-commentors-reputations/) for third-party sites?

It’s possible that they might be engaged in making Google search [more social](https://www.seobythesea.com/2011/11/the-integration-of-social-media-into-search-results-and-rankings-internet-summit-2011/) in a number of ways.

Social filtering for news and for information that specific searchers find interesting could be a significant part of the more social web envisioned in Google’s [Search Plus Your World](https://googleblog.blogspot.com/2012/01/search-plus-your-world.html) social and personalized search results, as well as the user rank and credential scoring that appears to have been originally developed for Google’s Confucius Q&A sites.

Social search results have the most benefit when they respond to **recency sensitive queries**, like information about a natural disaster or some newsworthy event, or provide an **opinion or review** from someone we know on products or services or events, or give access to **expertise** that someone might have in a particular area.

The PostRank patent tells us that it fulfills a number of needs:

- Efficiently allowing users to effectively navigate through significant amounts of web content
- Enabling intelligent filtering and customization of web content reflecting a users’ unique tastes and interests
- Providing a system that is relatively unobtrusive, passive, and undemanding of the user

The patent application is:

[Method, System and Computer Program for Managing Delivery of Online Content](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220090164408%22.PGNR.&OS=DN/20090164408&RS=DN/20090164408)
Invented by Ilya Grigorik and Kevin Thomason
US Patent Application 20090164408
Published June 25, 2009
Filed: December 21, 2007

Abstract


> A method for delivering online content is provided including the steps of
>
> (a) providing access to online content including a plurality of data objects;
>
> (b) obtaining information regarding the relevance of and/or likelihood of interest in the data objects by searching for online social engagement with the data objects by one or more users, so as to define social engagement data; and
>
> (c) ranking and/or filtering the data objects for relevance of and/or likelihood of interest based on the social engagement data. A system and computer program for online content delivery is also provided.

Social engagement metrics are the responses to online content, and how the public refers to that content. It assumes that if the content is likely to be of interest to a lot of users that it will more likely be of interest to a particular user. If it’s ignored by many, it might also be ignored by an individual who might be more engaged with other content.

A social score might be generated from both active feedback and passive feedback. Active feedback can include recommendations from people about content and things like a thumbs up or thumbs down or numeric rating. Passive feedback includes things like how much time might be spent viewing something, if it’s bookmarked, and so on.

As noted in the snippet from ReadWriteWeb above, PostRank is intended to work with a system that might allow filtering of content from RSS feeds, which is filtered by social engagement metrics. While Google could possibly incorporate a system like this into Google Reader, a PostRank extension for [Google Reader was retired](https://web.archive.org/web/20120115043226/http://blog.postrank.com/2012/01/the-top-posts-widget-and-google-reader-extension-to-be-retired-on-april-1st/?) in January.

The patent filing provides a very detailed look at how PostRank worked, including an example algorithm that shows how data from trackbacks, Technorati, Bloglines, comments, and bookmarks at delicious and Digg could be used together. It’s detailed enough so that if you wanted an example road map to help you build upon and improve something like PostRank, it might be worth spending some serious time with.

**Extensions of PostRank**

Where things get interesting in the patent application is the discussion of how PostRank can be used and can be extended.

For Example, it would help analyze and understand social activity on **Large E-Commerce Retailer** sites, such as Amazon.com. While there are often many thousands of items on such a site, explicit social data such as “product reviews, buyer statistics, product recommendations, vendor ratings, and overall sales rankings” can help visitors decide upon a book to buy, as well as lists generated by users of the site of recommended products to buy. Implicit information might also be useful in making that kind of decision, such as wishlists from users, and content external to Amazon itself, such as recommendations of products sold on Amazon upon blogs.

The social engagement metrics from PostRank could be applied to those blogs, and to wishlists to get a sense of the desirability of different items. Sentiment detection methods could be used on reviews and commentary on those items and reviews as well.

Those different types of data could be included in a calculation of the overall desirability of items at an ecommerce site. Imagine the addition of a dropdown box on an Amazon search that includes “desirability” as a ranking signal when displaying results.

One of the benefits described to people using **mobile** devices is that a “sync to mobile” feature of an RSS feed might automatically be set to only send the “best” feeds to a mobile device. A user would be able to set other levels as well, such as “good,” or “great.” This could help reduce bandwidth and carrier charges on phones.

In addition to **filtering** content based upon social metrics scores, an extended system could allow for filtering by keywords and by categories, so that you could see things that might interest you the most and in categories that you find important.

This system could also cluster content, and **detect topics** within content from feeds for you, so that you wouldn’t necessarily have to set the categories you were interested in before looking at that content.

Recommendations and personalization could also be included to recommend or directly display content based upon a specific user’s current preferences and habits, and what they’ve been reading lately.

The patent application also discusses how analytics could be incorporated into such a system to understand social engagement for different sites and content, and even for **advertisements** that might be included in feeds.

One that definitely stood out for me was a short section on the **detection of influencers/authority**. Just who are the top influencers and authorities in different topics, and what is the authority of specific articles?


## Social Engagement Data Takeaways

The patent filing is pretty long, but it’s worth going through if you want to get an idea of why Google might have been attracted enough to the technology and the team behind it to acquire the company and hire its employees. PostRank as originally envisioned as a way to filter blog posts and articles in a feed reader no longer exist, but ideas behind PostRank involving measuring and using social engagement metrics can be used in many other ways.

The description of how those social metrics could be used as a way to filter items in an ecommerce store based upon desirability is a pretty interesting example.

We don’t know for certain how Google is doing things like determining which results to show in a search on Google Plus itself, or why Google might show some additional pages in Search Plus Your World, but there’s likely some element of social engagement metrics involved, and those likely go beyond just counting numbers of Circles or pluses or comments.

If you perform SEO and you’re not working to understand the different ways that social engagement metrics might influence the visibility of content, you may just be missing out.

*Added May 1, 2012* – PostRank had been continuing to provide a social engagement analytics service on the pages of its site, though the service is scheduled to close today. Himanshu Sharma wrote about the three main items it tracked an measured in a post published this morning titled 6 things you can learn from PostRank about Social Engagement Metrics. Himanshu details what those engagement measures covers, and provides some interesting takeaways on the service. Definitely worth a read.

*Added May 4, 2012* – The Google Analytics Blog made an announcement yesterday titled [Expanding Google Analytics Social Reports: Tracking Links To Your Site Content](https://analytics.googleblog.com/2012/05/expanding-google-analytics-social.html). The writer of the post was Ilya Grigorik, so it looks like the PostRank team has been actively working upon bringing more of their expertise on social engagement analytics to Google. It’s not unusual for someone who has worked on a particular addition or update at Google to be the one who writes the announcement about it on one of Google’s blogs, and there’s a decent chance that happened here.

Ilya Grigorik tells us that we’ll see information about trackbacks in Google Analytics now, as well as other social signals. A snippet from the post:


> Have you ever wondered which other pages on the web link to your own? Wouldn’t it be nice to know which sites are talking about your content, and in which context? Well, a problem no more: now you can see all the backlink URL’s, post titles, and more right within the new Social reports.
