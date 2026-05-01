---
title: "Yahoo on Visualizing Community Use of Social Media Sites"
source_url: "https://www.seobythesea.com/2007/12/yahoo-on-visualizing-community-use-of-social-media-sites/"
slug: "yahoo-on-visualizing-community-use-of-social-media-sites"
date_published: "2007-12-10T03:39:48+00:00"
date_modified: "2020-04-14T08:59:54+00:00"
author: "Bill Slawski"
---

Run a social network, or participate in one?

You might find a couple of Yahoo patent applications interesting – they discuss some of the challenges in understanding how communities interact with social media sites over time, and how the interests of users of those sites evolve over time.

If you run a social media application you probably want to explore how the community focus of a site evolves over time. This means being able to browse through users, photos, tags, or the more complex structures of your site, such as groups, themes and clusters.

We’re told that past techniques used to visualize this kind of information have been functional but inadequate.

One example given is Ben Shneiderman’s Treemaps, described in [Treemaps for space-constrained visualization of hierarchies](http://www.cs.umd.edu/hcil/treemap-history/). That paper includes a number of examples, and was last updated in April, 2006. A newer article on Treemaps from Ben Shneiderman is worth a look, too – [Discovering Business Intelligence Using Treemap Visualizations](http://www.b-eye-network.com/view/2673).

The authors of the patent tell us that there’s a limitation to the Treemap approach:


> Unfortunately, this visualization focuses on a detailed breakdown of the data at each point in time without providing any framework for visualizing the evolution of the data over time.

The Yahoo patent filings attempt to visualize the evolution of tags, annotations, comments, groups, themes and other information built upon audio, image, and video content in an efficient manner that could apply at any timescale.

[System and method for visualizing the temporal evolution of object metadata](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070283290.PGNR.&OS=dn/20070283290&RS=DN/20070283290)
US Patent Application 20070283290
Published December 6, 2007

[System and method for selecting object metadata evolving over time](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070271270.PGNR.&OS=dn/20070271270&RS=DN/20070271270)
US Patent Application 20070271270
Published November 22, 2007

Inventors: Micah Joel Dubinko, Shanmugasundaram Ravikumar, Joseph Andrew Magnani, Jasmine Novak, Prabhakar Raghavan, and Andrew Tomkins
Assigned to Yahoo
Filed: May 19, 2006

Abstract


> An improved system and method for selecting and visualizing object metadata evolving over time is provided. An application may generate a visualization depicting the temporal evolution of metadata describing objects in an object store over a plurality of time intervals.
>
> The application may switch between a visualization of object metadata flowing like a river or cascading like a waterfall over time. A ranked list of metadata items may be determined for some pre-selected intervals during a pre-processing step.
>
> Then at runtime when a request may be received for providing a ranked list of metadata items for a query interval, a combination of time intervals from the pre-selected time intervals may be determined that cover the query time interval, and the ranked lists of metadata items for each time interval in the combination of time intervals that cover the query time interval may be aggregated and output for visualization.

The methods and ideas behind the patent filings are described in detail in a Yahoo paper from last year [Visualizing Tags over Time](http://web.archive.org/web/20160604074051/http://www2006.org/programme/files/pdf/25.pdf), which shares five authors with the patent filings.

**Other Community Visualization Efforts**

The patent applications dive into more of the math and mechanics behind the visualization process that they describe, but I do like the Treemap approach, and I think that it is helpful in giving a snapshot in time of the interests and activities of the users of a site.

There’s also a lot of value in being able to see how interests might change over time, or focus upon specific topics – like ones that center around different holidays, or grow out of topics like “things found in my refrigerator.” Yahoo isn’t alone in providing interesting views of how people interact with social media sites.

An article from July, [Digg Labs’ Fascinating, Confusing Tools](https://www.technologyreview.com/2007/07/23/224573/digg-labs-fascinating-confusing-tools/), describes the [data visualization tools at Digg](http://web.archive.org/web/20100727184527/http://labs.digg.com/), and returns us to Treemap inventor Ben Shneiderman, who points to IBM’s efforts at Data Visualization in their Many Eyes project.
