---
title: "How does Google Pick Search Snippets for Your Pages to Show in Results?"
source_url: "https://www.seobythesea.com/2007/12/how-does-google-pick-snippets-for-your-pages-to-show-in-search-results/"
slug: "how-does-google-pick-snippets-for-your-pages-to-show-in-search-results"
date_published: "2007-12-18T17:05:07+00:00"
date_modified: "2021-05-08T18:37:11+00:00"
author: "Bill Slawski"
---

There are often three pieces of information about pages displayed in search results to searchers in response to a search:

1. Page title,
2. The URL where that page can be found, and;
3. A summary of the page in the form of a snippet or snippets, taken from either a meta description tag or a description of the page from a directory like the DMOZ or actual text from the page itself.

One mystery involving search engines involves how a snippet might be generated when taken from a page.

**Snippet Folklore**

I’ve heard a mix of ideas from commentators on the subject of snippet selection, including the search engine grabbing text from the first mention of a keyword or paying more attention to whether the keyword is used in a heading or is bolded or draws attention in some other manner.

It’s hard to say if any of those things is really a consideration to search engines.

**New Google Patent on Snippets**

A patent granted to Google today describes some of the processes behind choosing text from a page to summarize the content of that page concerning the keywords that it was found for in a search.

It doesn’t tell us everything about snippets – another unpublished Google patent is referenced to describe more. But it does talk about some of the assumptions behind choosing a snippet and some of the ways that they may be created and chosen.

[Methods and systems for generating textual information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,310,633.PN.&OS=pn/7,310,633&RS=PN/7,310,633)
Invented Niniane Wang and Stephen R. Lawrence
Assigned to Google
US Patent 7,310,633
Granted December 18, 2007
Filed March 31, 2004

Abstract


> Methods and systems for generating textual information are disclosed. In one exemplary embodiment, a method of generating textual information is disclosed that comprises identifying a plurality of candidate summaries related to textual information based at least in part on a document, determining first and second attribute values based at least in part on the candidate summaries and determining an optimal candidate summary based at least in part on the first and second attribute values.

**Importance and Size of Snippets**

How important are snippets to the search process? The authors of the patent tell us that:


> As efficient as a search engine may be, its value to a user may be limited by how the search engine provides a summary of search results to a user. For instance, search engines generally provide summaries (sometimes referred to as “snippets”) of documents or websites located in response to a query.
>
> A user browses such summaries and typically selects a link associated with a summary that best matches the search criteria to view the entire document or navigate to the desired web page.

Choosing the right text to describe a page can be essential to how well the search engine delivers results. One issue involved in the selection of text in a snippet is the size of the snippet itself.


> Summaries that provide too much information can consume output (e.g., display) resources and overwhelm a user with extraneous information, which can slow down the user’s search.
>
> Summaries that provide too little information may not provide the user with sufficient information to identify relevant documents. In either case, such summaries are generally ineffective in aiding a user’s search for desired information.

**Search Engine Snippet Creation Considerations**

Some things to keep in mind in the snippet creation process:

***Snippet Size*** – One of the main goals in the creation of a snippet is that it not be too long that people won’t read it, or too short that it isn’t helpful.

***Smaller Snippets for Mobile Devices Possible*** – A search engine might keep a snippet down to minimum size and might even generate a shorter snippet if the screen being used is small, like on a smartphone or PDA connected to the Web.

***Some Snippets Possibly Pre-Generated*** – For some queries, snippets might be created ahead of time and stored, with the numbers of candidate snippets based upon the size of the documents. Others might be generated dynamically so that the optimal snippet can be created just before being presented in search results.

***Searcher Control over Snippet Size*** – The patent filing mentions the possibility of a searcher deciding on how large or small a snippet they might want to see – that could be interesting if a search engine added a feature like that.

***Snippet Storage*** – When a snippet is pre-generated, a larger document generally will include a greater number of storage locations for candidate snippets than a comparatively smaller document, and a query with more keywords will generate a greater number of storage locations for candidate summaries. However, it’s also possible that the number of storage locations may be limited to a predetermined number regardless of the size of the document.

***Keywords in Snippets*** – The textual information in a snippet will depend upon the keywords found in a document. The character string presented to searchers may include an entire sentence or portions of the sentence, including the keyword. It might also include a predetermined number of words or characters disposed of before and after the keyword.

Things get a little more interesting when more than one keyword or the words in a keyword phrase are not close to each other. Candidate text for keywords may be combined.

**Selecting Snippets from Candidate Summaries**

When snippets are taken from text on pages, the first and second highest-weighted combined candidate summaries are selected amongst the possible snippet candidate summaries. Then, they can be merged to show to searchers (three might also be combined).

They are weighted possibly using one or more factors, which may be further described in the unpublished patent application, *Methods and Systems for Processing Textual Information*.

This patent does describe how the weighting of candidate snippets could be done, but the descriptions aren’t obvious. Here is a couple of them:

Weight might be adjusted based at least in part on the percentage of keywords included in a candidate snippet. For example, a combined candidate with a greater number of query keywords can have a higher adjusted weight than a combined candidate summary, including fewer query keywords.

– A weight might be adjusted by many words in the candidate snippet so that possible snippets with more words can have a higher weighting.

So, a snippet might be chosen based upon **percentage of keywords** or by the **amount of meaningful textual information** that might be contained within the candidate snippets.

While this patent offers a tantalizing peek at snippet creation, it doesn’t go into a great deal of depth on the topic. However, it’s quite possible that the related and unpublished patent filing that it refers to a couple of times will tell us more. Guess we will have to wait and see…

**Conclusion**

A paper jointly created by A9 and Yahoo provides some research conducted on snippets and is worth a look. I wrote about it in [Search Result Snippets and the Perception of Search Quality](https://www.seobythesea.com/2007/05/search-result-snippets-and-the-perception-of-search-quality/).

Google also discussed what makes a good snippet for a product review, including readability and punctuation of text, in another patent application on generating product descriptions. It’s also worth considering. I wrote about that in [Google Reviews: Reputation + Quality + Snippets + Clustering](https://www.seobythesea.com/2007/04/google-reviews-reputation-quality-snippets-clustering/).

Some interesting language-dependent rules Google may follow for when it chooses a snippet to show on a page was something I wrote about in [How Google Might Generate Search Results Snippets](https://www.seobythesea.com/2013/02/google-snippets-search-results/)

A takeaway from this patent may be that you should pay attention carefully to the text that surrounds and supports phrases on your pages that you think might be terms that people will search for to find those pages, and that may rank well and show up in search results that people will see.

My post on product description snippets provides some ideas on how to try to do that well.
