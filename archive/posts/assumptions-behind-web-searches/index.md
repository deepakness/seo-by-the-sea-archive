---
title: "Assumptions behind Web Searches"
source_url: "https://www.seobythesea.com/2010/10/assumptions-behind-web-searches/"
slug: "assumptions-behind-web-searches"
date_published: "2010-10-25T10:53:38+00:00"
date_modified: "2020-05-13T09:59:38+00:00"
author: "Bill Slawski"
---

This is the first in a series of posts on Google Custom Search Engines.

If you’re interested in how search works on the Web, you may want to spend some time exploring [Google Custom Search](https://programmablesearchengine.google.com/about/). It enables you to create a site search for an individual site, or a customized search engine on specific topics that may focus upon a number of sites that you can select.

There’s another reason to start looking at Google Custom Search Engines, or CSEs. A recently published patent application from Google describes how the Search Engine may use information from CSEs to influence what we might see in Google’s Web search. This post is an introduction to the topic, and it covers how search engines attempt to identify the intent behind queries and web pages.

The patent application, [Aggregating Context Data for Programmable Search Engines](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100250513.PGNR.&OS=dn/20100250513&RS=DN/20100250513), includes a fairly well written statement (for a patent application) about one of the difficulties that search engines face when trying to come up with results to show searchers in response to queries. I thought it was worth sharing here, and it provides a nice introduction to a longer exploration of how Google CSEs might be used to improve web search.

That statement by the patent filing’s inventor, Ramanathan V. Guha, begins with a paragraph about the focus of information systems such as search engines:


> The development of information retrieval systems has predominantly focused on improving the overall quality of the search results presented to the user. The quality of the results has typically been measured in terms of precision, recall, or other quantifiable measures of performance. Information retrieval systems, or “search engines” in the context of the Internet and World Wide Web, use a wide variety of techniques to improve the quality and usefulness of the search results.
>
> These techniques address every possible aspect of search engine design, from the basic indexing algorithms and document representation, through query analysis and modification, to relevance ranking and result presentation, methodologies too numerous to fully catalog here.

In many of my previous posts about search engine patents, I’ve stressed that the most important thing that we often might learn from the patent filings isn’t necessarily an insight into particular processes that a search engine might use, though learning something about those can be interesting.

Instead, a patent filing often introduces us to some of the assumptions that a search engine might be making about the Web, searchers, and even search itself. This particular patent gives us a glimpse at a few of those assumptions, which it goes on to challenge later in the patent:


> Regardless of the particular implementation technique, the fundamental architectural assumption for search engines has been that the search engine’s operational model is fixed and non-alterable by entities external to the system itself.
>
> That is, the search engine operates essentially as a “black box” that receives a search query, processes the query using a preprogrammed search algorithm and relevance ranking model, and provides the search results. Even where the details of the search algorithm are publicly disclosed, the search engine itself still operates only according to this algorithm and nothing more.

But what if a new idea entered the mix on how search engines might learn about pages on the Web that challenged that assumption to a degree? What if some external influences, such as those brought in by Custom Search Engines could help solve another problem described in the “Background of Invention” section of the patent filing that I’m taking these quotes from?

That other problem involves how a search engine might understand the intent behind a query, and the identification of pages that might fit a searcher’s intent. As the patent tells us:


> An inherent problem in the design of search engines is that the relevance of search results to a particular user depends on factors that are highly dependent on the user’s intent in conducting the searched (in other words, the reason they are conducting the search) as well as the user’s circumstances (in other words, the facts pertaining to the user’s information need).
>
> Thus, given the same query by two different users, a given set of search results can be relevant to one user and irrelevant to another, entirely because of the different intent and information needs. Most attempts at solving the problem of inferring a user’s intent typically depend on relatively weak indicators, such as static user preferences, or predefined methods of query reformulation that are nothing more than educated guesses about what the user is interested in based on the query terms.
>
> Approaches such as these cannot fully capture user intent because such intent is itself highly variable and dependent on numerous situational facts that cannot be extrapolated from typical query terms.

The patent filing provides a fairly simple example – you search for the name of a model of a camera, such as “Canon Digital Rebel.” Your intent might be to find information about the features the camera offers, to compare prices of the camera on a number of web sites, to actually buy one of the cameras, or to get support or help or customer service as the owner of a Canon Digital Rebel.

From your query, it isn’t really certain what your intent might be. What if the search engine could provide additional questions that might help pinpoint the intent behind your search?

The patent also pokes a couple of holes in other assumptions that search engines often make in this introductory section of the description of the invention described in the patent.

The first is that the search engine can look at your past history of queries and web pages visited to try to make an educated guess at the kinds of pages that you might be interested in seeing. This “predicting the future” by looking at the past may not account for a very accurate reflection of your overall interests, and the particular informational need behind your search for the name of a camera, or the situational facts behind your search.

Another approach that search engines sometimes take is making an assumption that the way that some queries are presented by searches can evidence an intent to perform a particular kind of search, based possibly upon your prior searches, or past searches by others. Again, those past searches may not be a very good indication of the intent behind your query.

For instance, since your query includes a product name, “Canon Digital Rebel,” a search engine might assume that you want shopping sites based upon other searches by other searchers leading them to choose pages where they can buy a camera. But what if you want more information about the features of the camera, or you have a problem with a Canon Digital Rebel that you already own? Showing you sites where you can buy the Canon camera may not be the best choice.

I wrote about this topic back in 2007, in a Search Engine Land post titled [Google Customized Search Engines to Harness The Wisdom of Experts?](https://searchengineland.com/google-customized-search-engines-to-harness-the-wisdom-of-experts-10542), and it’s a topic that deserves to be revisited and expanded upon. One path that Google may pursue in the future may involve using external information from Custom Search Engines.

I’ll be expanding upon that in a future post. In the meantime, if you’d like to start exploring one possible way that Google might start challenging the assumptions pointed out in the start of this patent, you may want to spend some time with the [FAQ pages](https://support.google.com/customsearch/?hl=en) for Google Custom Search.

For the second part of this series, see: [Is Google Custom Search Influencing Google Web Search?](https://www.seobythesea.com/2010/10/is-google-custom-search-influencing-google-web-search/)
