---
title: "Facebook Patent Application Describes Receiving Data from Logged-Out Users to Target Ads"
source_url: "https://www.seobythesea.com/2011/09/facebook-patent-application-target-ads/"
slug: "facebook-patent-application-target-ads"
date_published: "2011-09-27T10:01:36+00:00"
date_modified: "2017-04-13T11:28:52+00:00"
author: "Bill Slawski"
---

*Is Facebook targeting conventional and social ads to the social network’s users and their connections, based upon visits to pages outside of Facebook that show Facebook widgets or use Facebook tracking pixels, while the Facebook users are logged out of Facebook?*

On Sunday, Australian tech developer Nik Cubrilovic wrote a post titled, [Logging Out of Facebook is Not Enough](http://web.archive.org/web/20170225011840/https://www.nikcub.com/posts/logging-out-of-facebook-is-not-enough/), which describes how cookies from Facebook are sent to Facebook everytime someone visits a page that contains a Facebook widget of some type, even after that person logs out of Facebook.

A Facebook engineer wrote the first comment to the post, explaining that the cookies in question are there for safety and security purposes, to provide customizations to users, and to help Facebook maintain and optimize their services. He notes that Facebook has no interest in tracking people, and, “We don’t have an ad network and we don’t sell people’s information.”

The Wall Street Journal picked up on the story yesterday, and did some exploring of their own, including contacting Facebook, who responded with a interesting statement.


> In a statement, a Facebook spokesman said “no information we receive when you see a social plugin is used to target ads.”
>
> [Facebook Defends Getting Data From Logged-Out Users.](https://blogs.wsj.com/digits/2011/09/26/facebook-defends-getting-data-from-logged-out-users/)

I noticed a patent application from Facebook published last week that I considered writing about, but put on the backburner. After reading the post from Nik Cubrilovic, I decided to take a second look. It apears to describe how Facebook could gather data from logged out users to use to target ads.

As the first claim in the patent states:


> 1. A method for tracking information about the activities of users of a social networking system while on another domain, the method comprising:
>
> - Maintaining a profile for each of one or more users of the social networking system, each profile identifying a connection to one or more other users of the social networking system and including information about the user;
> - Receiving one or more communications from a third-party website having a different domain than the social network system, each message communicating an action taken by a user of the social networking system on the third-party website;
> - Logging the actions taken on the third-party website in the social networking system, each logged action including information about the action; and
> - Correlating the logged actions with one or more advertisements presented to the one or more users.

Note that when the patent talks about “logged” actions, they aren’t talking about the actions of a logged in Facebook user, but rather the logging by Facebook of actions taken by that Facebook user on websites other than Facebook. The following section from the patent’s description makes that pretty clear:


> [0099] **In one embodiment, the third party website 140 and/or the social network system 100 determine whether the user is a user of the social network system 100. For example, the third party website 140 may access a cookie on the user’s computer, where the cookie is associated with the social network system 100.***
>
> Since the social network system 100 and the third party website 140 are on different domains, the user’s browser program may include security features that normally prevent a website from one domain from accessing content on other domains. To avoid this, the third party website 140 may use nested iframes, where the third party website 140 serves a web page that includes a nested iframe in the social network website’s domain, thereby allowing the nested iframe to access the user information and send the information back to the third party website 140. Repeated nesting of iframes further allows the social networking site 100 to communicate information back to the third party website 140.
>
> **By using this technique, the third party website 140 and the social network system 100 can communicate about the user without sharing any of the user’s personal information and without requiring the user to log into the social network system 100.***

*My Emphasis

So, the process described in the patent tells us that a Facebook user who is logged out of Facebook can be tracked on third party sites with Facebook widgets on them because of a cookie from the social network. Actions taken on those sites outside of Facebook can cover a fairly wide range of “conversions,” including making a purchase, registering with a site, downloading from a site, posting about a product, becomig a fan of a product, emailing a link to a friend using the product’s website, installing an application from the site, giving a gift related to the product or service

The purpose behind such tracking and collecting information is clearly to determine advertisements to show to people tracked, and to connections of people tracked. Some of these advertisements would be more conventional ads, and others may be social ads to a person’s connections, such as a message, “Your friend Tom is taking a Cruise to the Carribean. Wouldn’t you like to go somewhere warm, too?” or “John Smith bought <something> at <Partner Site>”.

For the social ads, the patent notes that they would either show this message to the user first for confirmation that they agreed to have it sent, or would opt-in or opt-out to messages like that in advance.

If more conventional ads are shown that don’t have that social element that make them seem like a recommendation or endorsement by the person who took the initial action being shared, it doesn’t seem that a confirmation would be part of the equation.

The patent provides much more in the way of details on the advertising network involved, and how information may be collected and shared. The patent application is:

[Communicating Information in a Social Network System about Activities from Another Domain](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110231240.PGNR.&OS=dn/20110231240&RS=DN/20110231240)
Invented by Kent Matthew Schoen, Gregory Luc Dingle, Timothy Kendall;
US Patent Application 20110231240
Published September 22, 2011
Filed: February 8, 2011

While the patent doesn’t say on its face that it belongs to Facebook, it is listed in the USPTO assignment database as being assigned to Facebook. It’s possible that Facebook isn’t using the process described in the patent, but it seems like the thing they’ve denied on Nik Cubrilovic’s blog, and to the Wall Street Journal is something they filed a patent for.

Interesting timing.

Thoughtful discussions related to this topic on the [Wall Street Journal](https://news.ycombinator.com/item?id=3040997) article and on [Dave Winer’s](https://news.ycombinator.com/item?id=3033385) article [Facebook is Scaring Me](http://scripting.com/stories/2011/09/24/facebookIsScaringMe.html) over at Hacker News.
