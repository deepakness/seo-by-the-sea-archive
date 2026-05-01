---
title: "Patent Applications on Estimating, Rating, and Using Quality Scores for Google Ads"
source_url: "https://www.seobythesea.com/2007/07/patent-applications-on-estimating-rating-and-using-quality-scores-for-google-ads/"
slug: "patent-applications-on-estimating-rating-and-using-quality-scores-for-google-ads"
date_published: "2007-07-06T11:15:51+00:00"
date_modified: "2020-07-23T14:15:22+00:00"
author: "Bill Slawski"
---

A trio of patent applications from Google look at estimating the likelihood that an advertisement is a good one, in a method that goes beyond counting click-through-rates (CTR).

They provide an extremely detailed list of factors that might go into a quality score, as well as details of different statistical models that might be generated from gathering information about those different factors.

[Predicting ad quality](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070156887.PGNR.&OS=dn/20070156887&RS=DN/20070156887)


> A system provides one or more advertisements to users in response to search queries and logs user behavior associated with user selection of the one or more advertisements. The system also logs features associated with selected ones of the one or more advertisements or associated with the search queries.
>
> The system further uses a statistical model and the logged user behavior to estimate quality scores associated with the selected advertisements and aggregates the estimated quality scores. The system predicts the quality of another advertisement using aggregated quality scores.

[Estimating ad quality from observed user behavior](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070156514.PGNR.&OS=dn/20070156514&RS=DN/20070156514)


> A system obtains ratings associated with the first set of advertisements hosted by one or more servers, where the ratings indicate a quality of the first set of advertisements.
>
> The system observes multiple different first user actions associated with user selection of advertisements of the first set of advertisements and derives a statistical model using the observed first user actions and the obtained ratings.
>
> The system further observes second user actions associated with user selection of a second advertisement hosted by the one or more servers and uses the statistical model and the second user actions to estimate quality of the second advertisement.

This third patent application discusses the comparisons of advertisements and the different quality parameters associated with them, to determine whether ads should be filtered, where they should be ranked, and whether some should be promoted.

[Using estimated ad qualities for ad filtering, ranking and promotion](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070156621.PGNR.&OS=dn/20070156621&RS=DN/20070156621)


> A system obtains a first parameter (QP.sub.1) associated with a quality of an advertisement among multiple advertisements, where the first quality parameter (QP.sub.1) does not include a click-through rate (CTR).
>
> The system functionally combines the first quality parameter (QP.sub.1) with at least one other parameter and uses the functional combination to filter, rank, or promote the advertisement among the multiple advertisements.

The patent applications list examples of 44 different factors that might be used in a quality score that doesn’t focus upon the click through rates. These include such things as:

- How many times a user selects a given ad in a given session.
- A duration of time, from an ad result selection, until the user issues another search query. This may include time spent on other pages (reached via a search result click or ad click) after a given ad click.
- A ratio of the time, from a given ad result selection until the user issues another search query, as compared to all other times from ad result selections until the user issued another search query.
- Time spent, given an ad result selection, on viewing other results for the search query, but not on the given ad result.
- How many searches (i.e., a unique issued search query) that occur in a given session before a given search result or ad selection;
- How many searches that occur in a given session after a given search result or ad selection.
- Rather than searches, how many result page views that occur for a given search query before a given selection. This can be computed within the query (i.e., just for a unique query), or for the entire session;
- Rather than searches, how many search result page views that occur for a given search query after this selection. This can be computed within the query (i.e., just for the unique query), or for the entire session;
If you use paid advertisements through Google, these patent applications may be worth delving deeper into. It is pretty interesting to see all of the user behavior considerations that may go into determining a score and placement for an ad.

The documents all end by noting that conversion tracking may also be optionally used to see if a “direct calibration between predictive values and user satisfaction” can be derived.
