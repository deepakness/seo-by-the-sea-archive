---
title: "How Google May Demote Some Search Results for Subsequent Related Searches"
source_url: "https://www.seobythesea.com/2011/11/google-demote-search-results-for-related-searches/"
slug: "google-demote-search-results-for-related-searches"
date_published: "2011-11-01T04:28:53+00:00"
date_modified: "2020-06-19T16:34:30+00:00"
author: "Bill Slawski"
---

Sometimes when you search at Google, you might not find any results that you find interesting and may search again using a somewhat similar query. Chances are that you don’t want to see the same sites or pages all over again. A newly granted patent from Google describes how the search engine might demote results for pages from sites that show up in an earlier search when they appear in your results during a following search during the same query session.

For example, imagine that you search for [black jacket] and don’t see any results that you like on the first page, regardless of whether you clicked upon any of them or not. Instead of going to the second page, you search for [black coat]. Since the queries are related, you might see results from some of the same sites in both searches, which the patent refers to as “repetitive” search results. Google may take your decision to search more as an indication that you weren’t satisfied with the pages shown in the first set of results, and may demote some of the “repetitive” sites or pages from that first query so they aren’t as prominent in the second set of search results.

So, your search for [black jacket] might show a page from the site “Winter Coats Online.” You might click upon it, or you might not. Regardless, when you move on to search for [black coat] if a page (the same page or another page) from “Winter Coats Online” would have ranked highly for that search, Google might push it down in search results so that it isn’t listed as prominently.

The patent is:

[Demotion of repetitive search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=8,051,076.PN.&OS=pn/8,051,076&RS=PN/8,051,076)
Invented by Ashutosh Garg and Kedar Dhamdhere
Assigned to Google Inc.
US Patent 8,051,076
Granted November 1, 2011
Filed: December 13, 2007

Abstract


> Apparatus, systems, and methods for demoting repetitive search results are disclosed. Search results that are identified in both first set of search results and a second set of search results are determined to be repetitive search results.
>
> One or more of the repetitive search results can be demoted in the second set of search results. The demotion can be based on a relevancy threshold for the second set of search results.

The claims to the patent tell us that we might see a reranking behavior like this from the search engine if the two searches happen during a “search session,” which could be within a certain amount of time (such as 5 minutes, an hour, etc.), or by a user logging into and out of the search engine, or by some perceived relationship between the queries that a person searches for. It also appears that this would happen when someone might be logged into the search engine, though some other way of tracking searches might be used such as cookies.

It’s also possible that Google might demote only repetitive search results that have been previously selected by the searcher, rather than all of the repetitive results that might have been seen in the results from the earlier query.

We’re told that one of the things that the search engine will try to avoid is ranking demoted pages below search results that are likely to include “very little relevant content responsive to the user query.” For each set of search results, a “relevancy threshold” is calculated, based upon things like the difference in relevancy scores between the results that appear.

For instance, imagine that in a set of ten results, the relevancy scores for the first 4 results are pretty close, and then the results below those have much lower relevancy scores. The point between the fourth and fifth results is the relevancy threshold for that set of results because of the steep dropoff in relevance.

When a repetitive result appears in the second set of results, it will only be demoted if it is above the relevancy threshold. While it is a relevant result and should still rank as one, it is being demoted in favor of displaying other results more prominently, that aren’t repetitive so that the searcher sees pages from sites that they might not have from their first search.

The demoted page won’t be demoted below pages that are under the relevancy threshold.

**Conclusions**

This demotion approach may explain why you sometimes may see pages ranking at different places in search results for a particular query if you are looking at those results during different query sessions and also looking at related queries earlier during each of those sessions.

We know that Google will sometimes provide [Search customizations](https://support.google.com/websearch/?rd=2&topic=3153588#topic=3378866) to results based upon your search history or a location that you either might have specified with Google previously or based upon your IP address. The search history customizations might be based upon your Web history if you’re logged into your Google Account, or based upon previous searches linked to the browser you are using through tracking using a cookie.

The demotions described in this patent might be considered customizations, but they are limited to an individual query session rather than something impacted by a search history that could include many different query sessions. So, if you performed a search for [black coat] a month ago, and search for [black jacket] today, you might not have any results demoted.

The patent doesn’t describe how it defines whether or not queries are related.

One way a search engine might do that is to aggregate query information from many search sessions from many different searchers to see which terms or phrases tend to show up in query sessions together. Another way might be to determine whether or not queries might be related is if they tend to have a number of the same pages showing up in search results for them (a certain top number of results, or a certain number of results above a “relevancy threshold”, for instance).
