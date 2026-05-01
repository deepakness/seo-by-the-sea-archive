---
title: "Google Plus Box Patent Application"
source_url: "https://www.seobythesea.com/2007/05/google-plus-box-patent-application/"
slug: "google-plus-box-patent-application"
date_published: "2007-05-27T10:19:05+00:00"
date_modified: "2020-06-23T11:04:56+00:00"
author: "Bill Slawski"
---

When you perform searches in Google, sometimes you will see within the listed search results one which has a plus sign next to it. If you click upon the plus sign, you are shown some more information. A new patent application published at the USPTO website provides some information about how expanded and collapsed data in search results might work.

It also raises some questions about how much information search engine results should show.

These types of results may have first started appearing displaying maps and local business information for specific businesses. Google referred to this feature in their WebMaster Help pages as a plus box (though the link is no longer live):


> The address link shown below some sites in our search results (in an expandable area called a Plus Box) is meant to help searchers locate businesses and compare search results. We show the address link for results that are local and for which we have an associated address. If we don’t have an address for your business, or we don’t think that an address is relevant to your site we won’t show it.

Matt Cutts also mentioned the feature on his blog in December of last year, in [New Google UI Feature: Plus Box](https://www.mattcutts.com/blog/new-google-ui-feature-plus-box/), telling us that:


> If someone searches for your business and we have good confidence that we know your business address, we’ll include an expandable “Plus Box” in your search result listing.

So the appearance of a plus box result for searches for local businesses appears to be triggered by some measure of “confidence” or “relevance.”

Plus box results have also been seen for [financial](http://blogoscoped.com/archive/2007-02-20-n67.html) information, and showing [videos](http://blogoscoped.com/archive/2007-05-23-n49.html).

[Displaying Compact and Expanded Data Items](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220090307188%22.PGNR.&OS=DN/20090307188&RS=DN/20090307188)
Inventors: Jeffrey Oldham, Joshua Mittleman, and Alex Cook
Assigned to Google
US Patent Application 20090307188
Published December 10, 2009
Filed: November 15, 2006

Abstract


> A system sends a search query to a search engine and receives from the search engine, responsive to the search query, a document comprising a first search result item, and a second search result item. The system visually renders a portion that includes less than an entirety of the first search result item and includes the second search result item, where the portion is visually rendered in a region of the document.
>
> The system receives a selection of the first search result item from a user and visually expands the region of the document to a size sufficient to render an entirety of the first search result item based on the selection. The system visually renders the entirety of the first search result item within the expanded region of the document.

**Purpose of a plus box**

A concern that I have with the plus box feature is that people may rely upon information that they see in Google search results without going to the actual sources of information. Philipp Lenssen asks this same question, and raises some great points, in his post last Wednesday – [Is the Google Video PlusBox Fair?](http://blogoscoped.com/archive/2007-05-23-n49.html)

So, how does the patent application describe the reason for this type of expanded information display within search results?

They seem to focus upon the fact that there is a limit to how much information can be seen on a search result page for ads, for website results, for emails, and other types of results.

There’s a balance to how much is shown in a summary list, with a desire to limit the amount of space for each item’s information and the value of the item’s summary. Larger summaries can be more useful but require more display space and, this can mean that fewer items are shown. Recent ad evaluations have shown users to perceive ads as being higher quality with longer creatives, But longer creatives increase the size of the ads, thus, possibly reducing the total number of ads that can be displayed, or cluttering the results page.


## Mechanics of How the Plus Box Patent Works

The patent filing goes into a lot of detail on how the expansion and collapse of results might work, but they don’t describe what might trigger one result to be chosen to display expanded results over another.

It also doesn’t specifically mention the use of a plus sign but explores many possibilities of how additional information might work.

A mouseover might be one such mechanism, and you may remember Google attempting to hide information about images that would appear when hoving your mouse pointer over them not long ago – see: Google Image Search Redesign. Imagine seeing additional information about search results on a Web Search page on mouseover.

The plus box patent application provides a definion of what a “document” is for purposes of this document, and the list is pretty broad. It’s difficult to tell if it is an indication of where we might see the possibility of expanded search results triggered by a plus sign or mouseover in the future. A document may include:

- an e-mail,
- a website,
- a business listing,
- a file,
- a combination of files,
- one or more files with embedded links to other files,
- a news group posting,
- a blog,
- a web advertisement,
- a digital map,
- etc.


## Kinds of Data that Might be Displayed in a plus box

On the search results page shown to a searcher is a list of search result items related to the search query. An item on the list, with a limited amount of data, actually displayed, may have elided portions of data that isn’t visually displayed. The user could “click” upon it or “mouse-over” it, and the additional data may be shown.

That additional elided data could include other data related to the result, such as:

- One or more additional “snippets” from the target document which the data item describes,
- Sitelinks,
- An image from the target document -which the data item describes,
- One or more other documents that link to the target document which the data item describes,
- Maps for addresses that appear on the target document,
- Information about any businesses or entities described on the target document,
- Other similar documents to the target document,
- A link to a home document of an author of the target document,
- A longer advertisement or other document created by hand to supplement the initially displayed data,
- A snippet may include a segment of a document that typically consists of a set of contiguous text about the size of a paragraph and may be about a single topic,
- A snippet may also include graphs, pictures, or diagrams
- Etc.


## How the Data Might be Located and Used

1) The elided data may be extracted and associated with the target document in a repository created by a crawling engine that “crawls” content, copies the content in a repository, and then indexes the content.

2) At query time, selected portions of elided data may be chosen to be included as hidden data in the search results document.

3) Additionally, at query time, data, among lists of data associated with the target document, may be selected for inclusion in the elided data hidden in the search results document.

4) Alternatively, at interaction time, when a user chooses to select a particular search result item, a request can be sent from the client to the server that executed the search (or to a different server that did not execute the search) to request elided data that may be visually displayed.


## Some Additional Uses

*Yellow page Entries*

Yellow page phone book entries within a particular category could be presented with just a list of names, which could each be plus box expanded to show additional information such as an ad or a small map. Some additional associated categories of information might also be shown.

*White Page Entries*

White page phone book entries may only show surnames until selected, revealing plus box expansion showing all entries with the same surname.

*TV and Radio Listings*

Television and radio program listings could present summary information such as time, program name, and channel with a plus box expansion adding such things as information about performers, running time, and re-run status.

*Sports Results*

Sports results might display summary scores containing team names and the final scores, with a plus box patent expansion including per-inning or period or quarter statistics or highlights from the games.

*News Articles*

News articles can be categorized and revealed with headlines and a short snippet. Under the plus box patent, an expanded view might show the first portions of the news article or even the full article.


## Plus Box Patent Conclusion

While the plus box does seem like a nice feature that provides a way to quickly get to more information about specific results within the results from a search for a particular query, there’s a question about how much information should be shown from the perspective of the owners of the information being displayed in search results.

For example, when a snippet from a news article is displayed, there’s fair use in providing that information. If someone could click on a plus sign next to the snippet, and be shown the full article, without going to the source of the content, there may be copyright issues involved. Providing attribution to the original may not be enough to overcome the lack of permission to display the news.

The same may be true of other kinds of data, which may have been provided for one use, without anticipation of other uses. A license to display content on one page for one purpose doesn’t necessarily license a search engine to then take that content and display it within a completely different context.

I like the idea of providing expanded information for some subject, but the plus box feature raises at least one important question about a basic function of search engines – do search engines exist to help people find information on the Web, or do they exist just to help people find information, with the sources of that information being less important than the information itself?
