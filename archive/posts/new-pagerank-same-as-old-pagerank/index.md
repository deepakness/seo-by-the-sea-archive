---
title: "The New PageRank, Same as the Old PageRank?"
source_url: "https://www.seobythesea.com/2012/03/new-pagerank-same-as-old-pagerank/"
slug: "new-pagerank-same-as-old-pagerank"
date_published: "2012-03-06T08:24:27+00:00"
date_modified: "2020-11-03T15:45:39+00:00"
author: "Bill Slawski"
---

When a judge writes a judicial opinion upon a case, he often includes more than just his ruling on the case. It usually contains an analysis of the present law, the legal atmosphere, and how the ultimate holding on the case was arrived at. Those written rulings can also include some legal opinions on issues that don’t necessarily play an essential role in the outcome of the case at hand, and those are often referred to as “dicta.”

When you read a patent, you’ll see that it’s broken into a number of parts. The most important of those is the claims section, which is what a patent examiner focuses upon when prosecuting a patent, and deciding whether or not it should be granted. There are also description sections in patents which give a richer and more detailed look at how the technology behind a patent might be implemented (with emphasis on the “might”). Often those descriptions include material that isn’t reflected within the claims section of a patent, and in many ways, those description sections could be considered as similar to the dicta that I mentioned sometimes appears within judicial opinions.

Stanford University was granted two new patents today under the name, *Scoring documents in a database*, both of which were filed at the United States Patent and Trademark Office on January 19, 2010. These two patents, assigned to Stanford and listing Lawrence Page as inventor, are described as continuation patents of the following patents assigned to Stanford which focus upon PageRank:

- [Method for node ranking in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=06285999&OS=PN/06285999&RS=PN/06285999) (US Patent 6,285,999), filed on January 9, 1998
- [Method for node ranking in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07058628&OS=PN/07058628&RS=PN/07058628) (US Patent 7,058,628), filed July 2, 2001
- [Scoring documents in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07269587&OS=PN/07269587&RS=PN/07269587) (US Patent 7,269,587), Filed December 1, 2004


## The Old PageRank Claims

The claims sections of the new patents make some very interesting things about PageRank much clearer than the older patents.

If you compare the description sections of the new and the older versions of these patents, you’ll notice that they are substantially the same, with a few formatting differences between the patent filed in 1998, and the two new continuation patents, and a couple of paragraphs that are slightly different from the first and last two patents and the patents filed in 2001 and 2004.

Where the main differences appear are in the claims section of each of those patents. The 1998 patent covers many of the topics mentioned in the description section of the patent, but in a very general manner. For example, we see the following claim in that patent:


> 4. The method of claim 1, wherein the assigning includes:
>
> identifying a weighting factor for each of the linking documents, the weighting factor being dependent on the URL, host, domain, author, institution, or last update time of the one or more linking documents, and
>
> adjusting the score of each of the one or more linking documents based on the identified weighting factor.

The 2001 patent provides a very brief two paragraph claims section that doesn’t address very much of the description section, The 2004 patent claims section focuses more specifically upon how PageRank might be calculated between pages without looking at different weighting factors like the first patent.


## The New PageRank Claims

The new PageRank patents are:

- [Scoring documents in a database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08131717&OS=PN/08131717&RS=PN/08131717) (US Patent 8,131,717) Filed January 19, 2010, granted March 6, 2012, assigned to The Board of Trustees of the Leland Stanford Junior University
- [Scoring documents in a database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08131715&OS=PN/08131715&RS=PN/08131715) (US Patent 8,131,715) Filed January 19, 2010, granted March 6, 2012, assigned to The Board of Trustees of the Leland Stanford Junior University

Here are some of the things that appear in the Claims sections of these new patents that aren’t in the old ones, even though they are referred to in the descriptions for those patents:

***Personal Biasing of PageRank*** – Scores associated with web pages that someone has bookmarked or has indicated is their home page might be higher for that person when they search when applying a personalized approach to PageRank..

***Links on the Same Domain*** – These links might possibly be ignored when scores for pages are calculated.

***Links on the Same Server*** – These links might be ignored when scores for pages are calculated, or might be weighed less than links from different servers.

***Geographic Locations*** – Ranks might be increased for pages with back links from other pages that are created by different authors in a number of geographic locations.

***Links from Home Pages*** – A link from the root page, or home page, of a domain might be given more weight than links from other pages.

***Links from more recently modified pages*** – A link from a page that has been more recently updated might carry more weight than one that hasn’t been.

***Text in Links*** – If the text in a link pointing to a page matches or is associated the query term used to find that page, the score for the page might be made higher.

***Text Adjacent to Links*** – If text adjacent to a link pointing to a page matches or is associated with the query term used to find that page, the score for the page might be made higher.


## Missed Ranking Signals in Claims

The patent descriptions point out some other issues that still don’t seem to be addressed by the claims within any of these patents. That doesn’t mean that Google might or might not be using them. They include:

***Relative Importance of a Link within a Document*** – Highly visible links near the top of a document might be given more weight.

***Real Usage Data*** – The description also tells us that when real usage data is available, it might be used to help provide a “more accurate or comprehensive picture.” None of the PageRank patents, old or new, include information within their claims about how such usage data might be used.


## Takeaways

Google’s [Reasonable Surfer](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/) patent addresses some of the issues that aren’t covered in the claims to these PageRank patents, such as the “relative importance” of a link on a page, by looking at features associated with the links themselves (font size or color or type, actual text in the link, whether the link text is commercial, aspect ratio of image links, etc.), features associated with the page that the link appears upon, features associated with the page targeted by the link, and also usage data associated with those links and pages.

Google had a permanent license to use PageRank for the life of the original patent, and an [exclusive license](https://contracts.onecle.com/google/stanford.lic.2003.10.13.shtml) to use it that was set to expire in 2011. It’s possible that Stanford and Google may have renegotiated that timeline. Researchers at Washington State University recently applied an algorithm similar in many ways to PageRank to try to understand chemical behaviors, but it’s not clear that’s an indication that the exclusive agreement between Stanford and Google has ended.

It’s possible that these new patents may signal a continuing agreement between Stanford and Google to keep PageRank between them. Lawrence Page is no longer a student at Stanford like he was when he originally worked on the algorithm which is named after him.

Many of the factors that are now in the claims from the two new patents were described in a much more general manner in the claims of the original patent, and these new patents were possibly filed to make their use more clear. It is possible that Google had been using something like them from the earliest implementations of Google, and quite possibly has moved on since then. A recent statement from the Google Inside Search blog noted that Google was retiring a link analysis method that had been in use for a number of years and my last post, [12 Google Link Analysis Methods That Might Have Changed](https://www.seobythesea.com/2012/03/12-google-link-analysis-methods/), contained some possible candidates.

Also keep in mind that just because the claims in these new patents state things like links between pages on the same domain or the same server might be weighed less or ignored when it comes to the calculation of PageRank, doesn’t mean that they are being given less weight or ignored, or that they might be in the future. Then again, if Google thinks it can provide higher quality results by making changes to how it ranks pages, it might do something like impose some limits on how much PageRank is passed along between links on the same domain.

Google has also published a good number of other patent filings as well that describe how they might use other link analysis approaches to ranking search results differently when it comes to personalization, weight and relevance of anchor text, common ownership of different domains, and more, and the methods described within those may supersede how Google uses the kinds of factors listed above.

Is the new PageRank different from the old PageRank, just explained better? Or did the exercise of updating and expanding the claims within the continuation versions of these new patents trigger a change in Google’s approach to link analysis?
