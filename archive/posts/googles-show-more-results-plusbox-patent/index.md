---
title: "Google's Show More Results (Plusbox) Patent"
source_url: "https://www.seobythesea.com/2011/01/googles-show-more-results-plusbox-patent/"
slug: "googles-show-more-results-plusbox-patent"
date_published: "2011-01-20T11:03:47+00:00"
date_modified: "2021-06-20T11:01:30+00:00"
author: "Bill Slawski"
---

Back on August 20th of 2010, Google Software Engineer Samarth Keshava published a post titled [Showing more results from a domain](https://webmasters.googleblog.com/2010/08/showing-more-results-from-domain.html), telling us:


> Today, we’ve launched a change to our ranking algorithm that will make it much easier for users to find a large number of results from a single site. For queries that indicate a strong user interest in a particular domain, like [exhibitions at amnh], we’ll now show more results from the relevant site.

The example provided in the post showed seven results from the same museum searching for exhibits at that museum. He tells us that in the past, Google would have likely only shown two results from the same domain. In May of 2009, I wrote a post that described when and why Google might show more than two results from the same domain in search results.

My post, [Boosting Brands, Businesses, and Other Entities: How a Search Engine Might Assume a Query Implies a Site Search](https://www.seobythesea.com/2009/05/boosting-brands-businesses-and-other-entities-how-a-search-engine-might-assume-a-query-implies-a-site-search/), pointed at a Google patent [Query rewriting with entity detection](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,536,382.PN.&OS=pn/7,536,382&RS=PN/7,536,382) which described when Google might decide to show many search results from the same site. The assumption behind that patent was that the intent behind some queries was not so much a request to search the Web for information, but rather was a desire to see specific information from a site closely related to a “named entity” included in the query.

For example, if you perform a search at Google for [seo by the sea entities], Google associates the phrase “seo by the sea” with this site, and will perform a site search on https://www.seobythesea.com to find pages where the word “entities” appears:

Back when search engines only showed 2 results in a row from the same domain in search results, the second of those was often displayed as an indented result below the first one. That practice was known as [Domain Collapsing](https://www.seobythesea.com/2008/12/domain-collapsing-indented-pages-and-search-results/).

While search engines strive to show search results in an order based upon a combination of relevance and quality/importance, sometimes when multiple pages from the same site appeared in results, the second result might be moved up to appear indented under the first result to make it easier for searchers to see that there was more than one relevant page for a query from the same site.

Google hasn’t and still doesn’t always move results from the same page up to “collapse” results from the same domain in search results. But you may notice that for some queries, Google will now show two results from the same page, followed by a line starting with a plus sign, and then a phrase like “Show more results from seobythesea.com”

A patent application published today, with Samarth Keshava, whom I quoted above, listed as one of the inventors, describes that plus box feature. The patent is:

[Search Result Plusbox Including Restricted Results](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110016108.PGNR.&OS=dn/20110016108&RS=DN/20110016108)
Inventors: Matias Pelenur, Samarth Keshava, and Jeremy Silber
US Patent Application 20110016108
Published January 20, 2011
Filed: July 19, 2010

Abstract


> Systems, methods, and computer program products for generating initial search results based on a search query and additional search results using a control element are described. When activated by a user of a client device, the control element may execute a call to a server that fetches the additional results to the client device.
>
> Alternatively, the additional results may be pre-populated and displayed only when the control element is activated. In some implementations, the additional results may include results that are from the same source as the initial search results.

The patent filing provides many technical details behind the “more results” plus box, including the fact that the additional results may be located in the initial search, and hidden by the plus box control until a searcher clicks upon the plus box link. At this point, the search engine uses AJAX to present the additional results so that the search page doesn’t need to be refreshed.

One of the most interesting aspects behind the patent application is the area where it tells us how many additional results might be seen, and why we see the additional results we do.

In the Google search results screenshot below, on a search for [Bill Slawski local], it appears that Google recognized my name as an “entity” and associated it with seobythesea.com, showing 4 original results as if it were conducting a site search for the term [local] on the site.

Google then included a plus box with additional results that it felt were relevant for the term [local], which I clicked upon to get the image below. What might determine which additional results are shown when you click upon that plus box?

![Google search results on a search for \[bill slawski local\] showing 4 results at the top, and an expanded plusbox with 5 additional results.](media/google-more-results-local.jpg)

The patent tells us that Google might show 2 or more additional results.

Factors behind how many additional results we see when we click on the plus box link can include:

A ***Quality Threshold*** – The additional results have to meet some quality threshold, based upon something like the number or percentage of keywords within each result matching the search terms in a searcher’s original query. In my [bill Slawski local] example above, each of the additional pages includes the word “local” but not a large number of high percentage.

***Display criteria*** – It’s possible that if you’re connected to the Web using a desktop computer with a large screen, you may be shown more “additional” results than if you’re using a handheld device during your search. For example, the patent tells us that ten additional results might be possible on a big screen, while 2-5 may be more likely on a mobile phone.

A ***Reasonable Limit*** of additional results might be displayed, in order to not “overwhelm” a searcher. When there are potentially a large number of additional results that might fit the search in question, Google might add another link at the bottom of those results, like in the image above, to “Show all results from seobythesea.com.”

***Ranked Results***. While this factor may seem similar to the “quality threshold” that I mentioned as the first factor, it could look at more than an exact matching of keywords used in the query, to include methods that include fuzzy logic, grammar rules, or other processes. So, in my example above, in addition to looking for the use of the word “local” on possible additional pages, Google might search for variations of the word “local” as well.

***User Profile Information*** – The number and ranking of the additional results shown might depend upon information found on a profile for the searcher. As the patent filing tells us, “if the user’s profile includes information indicating that the user is an Economist, the ranking system may rank an article on economic credit crisis higher than an article on university research funding.” Other profile information might include the searcher’s “gender, age, income, occupation, geographic location, and interests.”

**Conclusion**

I don’t really like seeing the first page of a set of search results filled with pages from the same website.

When Google shows many results from the same domain, the assumption the search engine is following is that the searcher’s intent was performing a site search. While this may be helpful to searchers who aren’t familiar with Google’s “site:” search operator, which lets you perform searches on a single domain, it can also create the appearance that Google is favoring some sites over others – especially sites with strong brands that are associated with those websites.

Personally, I’d rather see only two results from the same domain with a plus box below those if there are additional relevant results from that domain.

Even searchers who haven’t used a “site:” search, and possibly won’t, shouldn’t have any trouble clicking upon a link that tells them that there are more results from the same domain.

I also wouldn’t have guessed at the possibility that the number of additional results and the results shown could possibly vary based upon the kind of device you’re using to connect to the Web, and be influenced by personalization factors. So that’s good to know.
