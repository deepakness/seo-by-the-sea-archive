---
title: "Google at the Crime Scene: Profiling Websites, Estimating Traffic, and Combating Click Fraud"
source_url: "https://www.seobythesea.com/2007/04/google-at-the-crime-scene-profiling-websites-estimating-traffic-and-combating-click-fraud/"
slug: "google-at-the-crime-scene-profiling-websites-estimating-traffic-and-combating-click-fraud"
date_published: "2007-04-08T18:01:54+00:00"
date_modified: "2018-07-26T13:41:35+00:00"
author: "Bill Slawski"
---

If you own a web site, Google wants your traffic details, or at least they want to be able to estimate your traffic and the behavior of visitors at your web site. It’s something that might help them uncover click fraud by discovering unusual amounts of traffic and unusual behavior by visitors to sites.

They’ve been handing out tools to let people measure their own traffic, such as [Google Analytics](https://marketingplatform.google.com/about/).

They’ve also recently announced the release of Website Optimizer (beta), which is a program that lets Adwords users test different variations of their landing pages. It appears that between the two programs, and some reasonable guesses, Google might be able to use the information provided to help build traffic models that might be used to help them combat illegal clicks.

A new patent application from Google tells us:


> It may be desirable for an operator of an online resource, such as a search engine, to be able to intelligently predict information about the type of users that are likely to visit a particular web site.
>
> This type of “traffic prediction” can be used, for example, when the search engine displays advertisements that link to a particular web site.
>
> If the search engine provider knows a general profile that characterizes traffic that is likely to click on a particular advertisement or visit the web site referenced by the advertisement, the search engine provider may be able to spot invalid or non-genuine user activity that is not reflective of true user interest.
>
> Distinguishing invalid user activity (i.e., traffic) from genuine user activity can be particularly important when, for example, the search engine provider charges advertisers based on the traffic that is referred to the advertiser’s web site.
>
> In this situation, the search engine provider may like to be able to distinguish invalid user activity from genuine user activity and only charge the advertiser for the genuine user activity.
>
> Predicting user activity can be useful in a number of online contexts in addition to the display of advertisements and outside of the context of a search engine.
>
> For example, a web site designer may wish to predict how a proposed change to a web site will affect user activity at or to the web site.

Here’s some information about the patent application:
[Traffic prediction for web sites](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070078958%22.PGNR.&OS=DN/20070078958&RS=DN/20070078958)
Invented by Victor Bennett
US Patent Application 20070078958
Published April 5, 2007
Filed: September 19, 2005

Abstract


> A traffic prediction component may automatically generate predicted traffic profiles for web sites based on tags that characterize the sites. An initial set of tags can be selected for a web site based on a set of predefined rules. An initial traffic profile may be selected based on the initial set of tags. The predicted profile of user traffic is then generated based on the initial set of tags and on the initial traffic profile.

**Profiling Web Sites**

There’s something a little Crime Scene Investigation ([CSI](https://www.cbs.com/shows/csi/)) like in this process.

One of the initial steps in estimating traffic to pages is profiling those sites. Here are some things that they might include in this profile:

- The primary Language used by the site (English, French, etc.)
- A category for the site by type or intent, such as a shopping site or news site
- A category for the site by industry classification (targeted towards computer enthusiasts or home contractors, for example)
- The geographical location of the site’s host
- The average price of a product for sale (for shopping sites), or;
- Information about the HTML layout of the site (mostly text, or graphics, etc.).

Traffic to different sites may be estimated upon these profiles, and detailed statistics about the sites. If there are unusual traffic patterns uncovered at sites that display Google’s Adwords, that may be a sign of foul play (click fraud).

**Descriptive Tags based upon Heuristic Signals**

The use of the word “tags” may be a little confusing in this patent application. There are tags that you place upon your pages when you want Google Analytics to work, and tags that you place on your pages when you want Google Website Optimizer to work. Those are java script tags that help Google track visitors to your site.

The “tags” in this patent filing are different. They are descriptions that are associated with a site, so that Google may create that profile that lets it build a computer model that it can use to estimate traffic to other web sites that have similar descriptive tags.

Google throws another interesting word in this patent application – heuristics. Heuristics are a set of rules that can help someone make a decision (wikipedia provides a much more detailed [definition](https://en.wikipedia.org/wiki/Heuristic_%28disambiguation%29) if you want one).

Here are some example heuristic signals that Google may include in their profiling decisions:

- Directory information signals – classifications of a site based on a known directory of web sites, like the DMOZ.
- Signals based on a lexical analysis of the web page ([text book definition of lexical analysis](http://www.funsci.com/fun3_en/lexicon/handbook.htm)).
- Signals about the predominant language used by the site or the type of words used by the site (i.e., casual, technical, jargon filled, etc.)
- Geographical signals such as the location of the web site host, and;
- Signals based on text from sites that link to the site being modeled (for instance, is the site linked to by a lot of known shopping sites?)
- Signals about the design of a a web page, and whether it matches other pages that are exemplary of a particular type of site (example, a site with many web pages which include pictures, descriptions, and prices is likely to be an online store.)

**Estimating Traffic Based upon a Traffic Prediction Model**

When Google knows about the traffic to some sites that fit a particular profile, they can estimate the traffic to other sites. A Traffic Prediction Model may also include values or tags describing:

- Expected traffic, including the behavior of the traffic, at a site.
- How long a typical user will spend at the site,
- How “deep” or how many links a typical user will click on within the site,
- The screen size of a typical user,
- The type of browser of a typical user, and;
- Demographic information of a typical user.

When someone uses Adwords, Google might use a traffic profile to estimate the amount and kind of traffic to their site. The initial traffic profile could be based on a known traffic profile of traffic at another site that has a similar set of descriptive tags as the initial set of descriptive tags determined for advertiser.

Different kinds of sites have different traffic profiles. For instance, at news site visitors tend to focus upon specific articles and read through them until they have finished. Traffic at a product comparison site usually sees behavior from users who are more likely to stop reading a particular product page once they find a product that meets their needs.

Traffic that doesn’t match the profile might be suspect.
