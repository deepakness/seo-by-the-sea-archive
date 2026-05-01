---
title: "Google on Duplicate Content Filtering and News Attribution Metatags"
source_url: "https://www.seobythesea.com/2010/11/google-on-duplicate-content-filtering-and-news-attribution-metatags/"
slug: "google-on-duplicate-content-filtering-and-news-attribution-metatags"
date_published: "2010-11-16T16:46:27+00:00"
date_modified: "2020-06-13T16:58:54+00:00"
author: "Bill Slawski"
---

If you have an interest in how Google addresses duplicate content on the Web, today’s been an interesting day.

Google was granted a patent this morning that describes how Google might identify duplicate or near-duplicate web pages and decide which version to show in search results, and which ones to filter out. It’s a process possibly close to what Google has been using for a while.

But…

Identifying the source of content can be a pretty hard problem to solve on the Web.

What if Google had a smaller search vertical, where they carefully screened and identified all of the web publishers involved, and could convince them to help identify which content is original, and which is copied or duplicated?

To do that, Google introduced a new set of Source Attribution Metatags for Google News articles, which allow the publishers of breaking stories to tag those stories with an “original source” meta tag, and publishers who are syndicating those stories to use a “syndication-source” metatag. Google controls which sources show up in Google News results, and they note in their page about the source attribution metatags that:


> If we find sites abusing these tags, we may, at our discretion, either ignore the site’s source tags or remove the site from Google News entirely.

The metatags would look something like this example from Google’s Page on the attribution tags:


> <meta name=”syndication-source” content=”http://www.example.com/wire_story_1.html”>
>  <meta name=”original-source” content=”http://www.example.com/scoop_article_2.html”>

Reading through Google’s help page for those tags, I realized that this wasn’t the first time I’ve seen something from Google about letting publishers use metadata to indicate whether the content was original or syndicated.

A Google patent application from a few years ago titled [Agent Rank](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070033168%22.PGNR.&OS=DN/20070033168&RS=DN/20070033168) took a much broader approach to the use of the metadata though. Instead of limiting it to a small search vertical like Google News, it could be applied to all content published on the Web. I wrote about it at Search Engine Land in [Google’s Agent Rank Patent Application](https://searchengineland.com/googles-agent-rank-patent-application-10487).

What I didn’t include in my Search Engine Land article was the mention of how Google might distinguish between original content and syndicated content. From the patent:


> [0023] Signatures can be portable or fixed to a particular web page or uniform resource locator (URL). For example, a syndicated columnist may wish to sign a column once upon creation, and have the signature follow the document wherever it is published. In other cases, the agent signing the content may wish to prevent their reputation from being used to draw traffic to sites they do not control.
>
> In either instance, the metadata associated with the digital signature can indicate whether or not the reputation associated with the signing agent is portable or not. For example, in one implementation, the signature is linked to the URL of the site where the content is located by including the URL as metadata within the signed content.

The Agent Rank approach hinges upon every publisher on the Web has a unique digital signature, that can follow them around from one site to another.

Write a blog post on your blog – you sign it with your digital signature.

Write a guest blog post on someone else’s blog – again, you sign it with your digital signature.

Leave a comment on a blog you’ve never seen before – you attach your digital signature to it.

Your “reputation” follows you around to different sources, and the ranking of things you write, whether on your pages or those owned by others, can be influenced by a reputation score for your work.

You can also assign metadata, as noted in the passage above, to indicate the source of your material, and to prevent your reputation score from being used to rank other pages where your material may appear, such as upon a copy of something that you’ve written.

The source attribution metatags for Google News sound like a limited version of the Agent Rank approach, in a much more controlled environment, and focusing upon known news sources as a whole rather than individual authors.

If the metatags work well on Google News, will we see something like them spread to other Google properties, like Web search?

Are they a stepping stone towards the use of something like Agent Rank?

Regardless of whether they are or not, they may help let Google have to decide whether a particular piece of content is the original, or a duplicate or near-duplicate.

Which brings me back to the newly granted Google patent. The patent is:

[Clustering by previous representative](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,836,108.PN.&OS=pn/7,836,108&RS=PN/7,836,108)
Invented by Joachim Kupke, David Michael Proudfoot
Assigned to Google
US Patent 7,836,108
Granted November 16, 2010
Filed: March 31, 2008

Abstract


> A method may include identifying documents in a current clustering operation:
>
> - Assigning the identified documents to one or more clusters,
> - Selecting a current representative document for each of the one or more clusters,
> - Determining whether the current representative document has been re-crawled,
> - Determining a previous representative document with which the current representative document was previously associated in a prior clustering operation,
> - If it is determined that the current representative document has not been re-crawled, determining one of the one or more clusters to which the previous representative document has been assigned in the current clustering operation,
> - Combining one of the one or more clusters associated with the current representative document that has not been re-crawled with one of the one or more clusters associated with the previous representative document into a combined cluster, and
> - Storing information regarding the combined cluster.

The patent doesn’t pinpoint one particular approach to identifying duplicate or near-duplicate content over another. Instead, it picks up after that determination has been made, and clusters together very similar documents.

Google then picks one of the documents in the cluster to be representative of the others. It will show that one in search results, and leave the rest out.

If you want, you can see some of the pages that have been filtered out of search results.

Chances are, you’ve seen a statement like this at the end of a set of search results from Google:


> To show you the most relevant results, we have omitted some entries very similar to the 26 already displayed. If you like, you can repeat the search with the omitted results included.

In that sentence, the “repeat the search with the omitted results included.” is a link that you can click upon to see the other results.

How does Google decide which page becomes the representative page that it will show in search results?

Under this patent, it appears that Google will look for what they call “quality information.”

Quality information can include information associated with a page such as:

- Link information – about links pointing to and from the page, to other pages or within the same page.
- The date a document is created,
- A page (or document) rank (possibly PageRank in some instances),
- Anchor text information,
- How the URL looks (a short and/or a word-based URL might be better than a long and/or non-word based URL),
- Popularity information,
- Quality of a web site,
- Age of a web site, and/or
- Other kinds of information

These aren’t signals about how well a page might rank for a particular query, but rather they are used to decide which page might be chosen in search results when there is more than one choice and those pages have duplicate or near-duplicate content.

A decision on pages to show in Google News when many have the same or similar content may follow a similar analysis.

With the news attribution metatags, it looks like Google is adding another signal that may make that determination easier.

If those tags work well in Google News, might we see something like Google’s Agent Rank applied to a larger part of the Web in the future?

It’s possible.
