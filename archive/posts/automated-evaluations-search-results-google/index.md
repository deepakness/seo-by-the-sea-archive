---
title: "How Automated Evaluations Might Help Decide Upon Rankings for Search Results at Google"
source_url: "https://www.seobythesea.com/2011/11/automated-evaluations-search-results-google/"
slug: "automated-evaluations-search-results-google"
date_published: "2011-11-23T21:08:09+00:00"
date_modified: "2020-07-25T11:26:58+00:00"
author: "Bill Slawski"
---

Many years back, I remember being humbled by a homework assignment crayon drawing by a friend’s son which listed what he was thankful for and included his parents, his sister, and shoes that Thanksgiving. We take so much for granted that we should be thankful that we have. A few friends and I had gathered over my friend’s house, and we were all knocked somewhat silent by the picture when he proudly showed it off to his father. Thank you to everyone who stops by here to read, to learn, to share, and to add to the discussion. Thank you too, for the chance to share the things I find and the things that I learn from you all.

On Monday, I wrote about a recently granted patent from Google that described [How Human Evaluators Might Help Decide Upon Rankings for Search Results at Google](https://www.seobythesea.com/2011/11/how-human-evaluators-might-help-decide-upon-rankings-for-search-results-at-google/). Interestingly, this week Google was granted a patent that describes an automated method they might use to check the quality of specific sets of search results.

When Google responds to a searcher’s query, it presents a list of pages and other kinds of documents such as images or news or videos. The patent’s filing date is from before Google’s universal search but probably does a good job of describing something Google might do with web page based search results.

The results that searchers see are ranked in order so that the most relevant and/or highest quality pages should be listed at the tops of the results. Google may monitor the quality of those results to try to identify general trends of “improving” and “declining” quality amongst them and to identify specific problems with them. As this patent notes, “Manual evaluation of search quality can be laborious and time-consuming, typically allowing for a small number of searches and search results to be evaluated to determine the overall quality of a search engine.”

The solution described in this patent is to learn a certain baseline of behavior for searchers based upon using some time as a training set, by recording user behavior relating to each of the search results, and then comparing future user interactions against that baseline.

The patent is:

[Systems and methods for determining a quality of provided items](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08065296&OS=PN/08065296&RS=PN/08065296)
Invented by Alexander Mark Franz and Monika H. Henzinger
Assigned to Google
US Patent 8,065,296
Granted November 22, 2011
Filed September 29, 2004

Abstract


> A system may provide items during a period and determine the quality of the items provided during the period using a time series model.

Google may take user data for the results from a specific time, such as 100 days, and choose one or more metrics related to those results to monitor for that period. It may then look for changes to how people interact with those results to come up with a prediction of how well those results might fulfill the needs of searchers.

These measures might include something like the percentage of searches for which the highest-ranking result (or one of the highest-ranking results) is selected by searchers.

If user interactions meet that prediction, then the set of results might be said to meet expectations. If not, then they might be considered to be below expectations, and these determinations can be done without manual intervention.

The description provided in this patent focuses upon identifying the quality of search results, but it could also be used with other items such as the quality of advertisements

**User Metrics for Automated Evaluations**

The time used, such as the 100 days I mentioned above, would ideally be a period where no major quality problems exist. The metric or user behavior measurement that would be used to reflect the quality of the search result could be many things or combinations of them. The patent provides some examples, such as:

- The percentage of searches in which the user selected the first result (or one of the top results) in the list of search results
- The average first click position (i.e., the numerical position within the list of results)
- The percentage of searches that had long clicks (i.e., the percentage of times that a user selects a link to go to a result page and stays on that page for a long time, such as more than 3 minutes)
- The percentage of searches that did not have another search within a short time
- The percentage of searches that did not have a reformulated search (i.e., a search where one or more search terms in the original search are added, deleted, or changed) within a short period
- A combination of different metrics, and/or the like

The time, referred to as a “time series model” in the patent, may reflect things like trends and seasonality during the period in which data is collected, including patterns such as:

- User behavior on weekdays compared to user behavior on weekends
- User behavior at night compared to user behavior during the day
- User behavior on Mondays compared to user behavior on Tuesdays
- User behavior on fixed or moving holidays, etc.

If this system indicates that the user behavior involved falls outside of expectations based upon the previously recorded training period data, then some kind of remedial actions might take place.

That can include a notification being sent to a system administrator. It could mean that the last change or a recent change to a server might be automatically rolled back, or manually reviewed and then rolled back. Those types of changes might include a change in data or a change in programming code or other changes.

The changes that would trigger a remedial action would have to be statistically significant as an indication of changes.

**Conclusion**

The patent was originally filed back in 2004, but it’s hard to imagine that Google hasn’t had some kind of process like this in place since at least then.

Google’s search results have changed in a good number of ways since then, including the introduction of additional types of data from different data repositories such as Google Maps, Image and video results, news and books and music results, of the kinds that I described in my post [How Google Universal Search and Blended Results May Work](https://www.seobythesea.com/2008/06/how-google-universal-search-and-blended-results-may-work/). These additional results aren’t some separate properties that Google is artificially promoting in search results, but rather information of different types that Google has decided are relevant to a query someone types into search results.

These blended results do make the process described within this patent more complicated than could be handled by a system that might use a period of 100 pages or so to monitor user behavior to assess the quality of search results.

The [Google Caffeine update](https://www.seobythesea.com/2010/11/son-of-seo-is-undead-google-caffeine-and-new-product-refinements/) also introduced a new infrastructure to how Google indexes and processes content found on the Web and makes it more likely that changes will take place to search results much more rapidly than in the days that this patent was originally filed. Again, a time of 100 days sounds unrealistic as a period to collect data about specific search results to use to compare against present-day user behavior in the days after the Caffeine update.

Google has also been working on more personalization within search results as described in a post today at the Google Inside Search blog, titled [Some thoughts on personalization](https://search.googleblog.com/2011/11/some-thoughts-on-personalization.html). Google also will provide customizations to search results for different searchers based upon their recent past search history and their location. We’ve been also seeing a push towards displaying [fresher search results](https://www.seobythesea.com/2011/11/googles-freshness-update-social-media-expectations-of-searchers/), and hints of things in Google patents like the possibility that they might [demote some search results](https://www.seobythesea.com/2011/11/google-demote-search-results-for-related-searches/) seen by searchers when those results appear in subsequent search results for very related queries within the same query session.

With all of these possible changes to the search results people see, and others, can an automated system like this which monitors specific user behavior and predicts future behavior for specific queries work well?

With the large number of experiments that Google supposedly performs on search results every year, cited by [Google’s Peter Norvig](https://blogs.perficient.com/2011/10/17/search-algorithms-with-google-director-of-research-peter-norvig/) recently as numbering in the tens of thousands, you might expect that a way of continuing to predict user behavior when changes are made would be something that Google would pay attention to.

The Google Panda update, focusing upon improving the quality of pages that show up in search results, may have been partially inspired by the rapid changes to search results that Google experienced after the Caffeine update since Caffeine drastically increased the number of changes that could happen to search results. Panda also seems to be a system aimed at predicting user interactions such as clickthroughs and long clicks to pages.

What kinds of automated measures do you think Google might be using to monitor the quality of search results these days?

Thanks for reading, everyone.
