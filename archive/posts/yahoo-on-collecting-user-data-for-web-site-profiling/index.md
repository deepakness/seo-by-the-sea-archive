---
title: "Yahoo on Collecting User Data for Web Site Profiling"
source_url: "https://www.seobythesea.com/2008/02/yahoo-on-collecting-user-data-for-web-site-profiling/"
slug: "yahoo-on-collecting-user-data-for-web-site-profiling"
date_published: "2008-02-03T13:48:34+00:00"
date_modified: "2020-07-23T13:26:39+00:00"
author: "Bill Slawski"
---

Recently I wrote about a Yahoo adaptation of PageRank, called [User Sensitive PageRank](https://www.seobythesea.com/2008/01/yahoo-replaces-pagerank-assumptions-with-user-data/), which required that a lot of data be collected about visitors to web sites, including their clicking and browsing habits.

A couple of Yahoo patent applications from last week refer to User Sensitive PageRank while describing the collection of user data and Web data, and building profiles for specific web sites based upon that data.

One of them focuses upon how profiles are created for sites, to determine what the sites are about and what kind of traffic levels they receive based upon profiles constructed for other sites where more information is known about those other sites.

The other Yahoo patent filing describes some details on how this information could be used in choosing what kinds of materials to advertise on such sites, where profiles are being used to determine context when little is know about the actual content on some pages of those site.

What’s most interesting to me is the tie-in to the User Sensitive PageRank patent, and some of the details provided about the collection of user data from toolbars, ISPs, and other programs.

The patent applications are:

[System and method for web destination profiling](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080028067.PGNR.&OS=dn/20080028067&RS=DN/20080028067)

[System and method for population-targeted advertising](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080028066.PGNR.&OS=dn/20080028066&RS=DN/20080028066)

Invented by Pavel Berkhin, Shanmugasundaram Ravikumar, Andrew Tomkins, and John Anthony Tomlin
Assigned to Yahoo
US Patent Application 20080028067
Published January 31, 2008
Filed: July 27, 2006

**Creating Profiles and Estimates of Traffic**

Traffic estimates, clickstream analysis and web traffic destination profiles can be created from looking at data in a variety of ways, including from:

a) Other web destination profiles,

b) Link analysis of the connectivity of the website with other websites,

c) Traffic analysis of the traffic between pages of the website and other pages, either on of off the website,

d) Analysis of content of the pages or metadata such as tags to determine pages with similar content or tags elsewhere that may be used for smoothing.

A traffic analysis engine may include:

a) A model generator for generating a model of traffic flow among web destinations and

b) a traffic flow analysis engine for propagating population characteristics to web destination profiles by predicting traffic flow through web destinations.

**Collection of Clickstream and other Data**

Some of the ways and places that information is collected about users and web sites:

a) While people are signed in at Web portals (like Yahoo)

b) From ISP collected information, with attention paid to sign-ins at “trusted systems” where there is profile information (such as social networks).

c) ISP collected information where there isn’t profile information, but a machine learning-based system can gather information about a user’s interests.

d) From toolbar collected data about users (user-based samples of information)

e) From Web site collected data about visitors (location-based samples of information)

g) Gathered from graph data — the ways users may reach a web destination including browsing, searching, or bookmarks.

e) Taken from site structure data — from a global analysis of one or more websites and the structure of Uniform Resource Locators (URLs).


> Such an analysis may reveal that two web sites may have the same owner listed in their DNS records, or that the web sites may employ the same template and therefore may likely be managed by the same entity.
>
> Similarly, a single site may have two sub-sites that are owned by distinct individuals. This might be uncovered by particular known URL constructions such as http://www.site.com/homes/jim, or by analysis of the inter-linking behavior on a site.
>
> The structure of URLs may also provide a hierarchical view of the proximity of URLs. For example, http://www.site1.com/a/b and http://www.site2.com/a/c have in common the prefix http://www.site1.com/a, and may, therefore, be viewed as quite similar.

**Conclusion**

These patent documents provide a peek at how some data collected about how people use the Web, and about the Web itself, may impact both search and advertising on the Web.

We were given a slightly different look not long ago from Google, in their creation of profiles for web sites that could be used, amongst other ways, to combat click fraud – in a post I wrote titled: [Google at the Crime Scene: Profiling Websites, Estimating Traffic, and Combating Click Fraud](https://www.seobythesea.com/2007/04/google-at-the-crime-scene-profiling-websites-estimating-traffic-and-combating-click-fraud/)

The methods of collecting information in these patent applications, and the possible creation of web destination profiles as described, would make the use of a User Sensitive PageRank more possible. That’s something to consider.
