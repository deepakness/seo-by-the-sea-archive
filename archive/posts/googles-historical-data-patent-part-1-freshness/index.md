---
title: "Updating Google's Historical Data Patent, Part 1 - Freshness"
source_url: "https://www.seobythesea.com/2008/08/googles-historical-data-patent-part-1-freshness/"
slug: "googles-historical-data-patent-part-1-freshness"
date_published: "2008-08-28T09:42:54+00:00"
date_modified: "2021-07-07T11:28:53+00:00"
author: "Bill Slawski"
---

In March, one of the more interesting patent filings from Google was granted, [Information retrieval based on historical data](http://web.archive.org/web/20160201004337/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,346,839.PN.&OS=pn/7,346,839&RS=PN/7,346,839).

I had discussed it on forums when the original patent application came out in March of 2005, but didn’t provide a write-up of the document here. I realized a few weeks ago that I probably should.

The historical data patent is important because it discusses many techniques that a search engine might use in fighting “spamming techniques” that might artificially “inflate” the rankings of websites. It works to identify “stale” sites that may be ranked higher than fresher sites containing more recently updated information.

I’ll be writing a few posts over the next few weeks about the patent, and try to include some updates that have happened since it was first published. This first post looks at how the “freshness” of a page or document might influence its rankings in search results.

**Fresh and Stale Web Pages**

How does a search engine tell how fresh a web page might be, or how stale it is? What do those words even mean? Why is it important? What difference does the age of a page make? Does staleness or freshness depend upon the content on a page?

The Constitution of the United States is an old document, but it’s not stale. A news article about the “World Series” from 1918 may not be what a baseball fan wants to see when searching for the “World Series” this October.

While Babe Ruth is well known as a feared slugger for the New York Yankees, he’s not as well remembered from his earlier days as a Boston Red Sox pitcher who threw a shutout in that 1918 World Series. Interesting information, but again, not what a searcher is likely to be looking for in an October 2008 search for “World Series.”

![Babe Ruth, well known as a New York Yankee, in a Red Sox uniform.](media/babe-ruth.jpg)

How do we tell the age of a document, and determine whether or not it is stale? What types of things would be used to give a score to a document based upon that age?

A search engine might look at information from different sources to learn about:

1. The age of a document
2. The age of links leading to and from that document

**2. Determining the Age of a Document**

The history of a document, such as its age and information about links to it, can influence ranking scores under this historical data patent. A search engine needs a starting date for a document, also referred to as a document inception date.

A search engine might look at the following to to decide how old a page might be:

- When It is first crawled by the search engine
- When it is first submitted to the search engine
- When the search engine first discovers a link to the document
- When the Domain was registered
- When the page was first referenced in another document
- When a document first reaches a certain number of pages
- By the time stamp of the document on the server it is hosted upon

Under a link-based ranking system that doesn’t use age-based information, a document with fewer links to and from the document may rank lower than a document with more links to and from it.

In a system that does use age-based information, if a document with fewer links can be determined to be newer, based upon the document inception date, it could possibly rank higher than an older document that has more links if it has a higher rate of growth of links.

But too many links, coming too quickly to the newer document may also be a sign that some type of spamming is happening (See how [Yahoo may handle this issue](https://www.seobythesea.com/2007/08/yahoo-on-using-exceptional-changes-in-snapshots-of-the-web-to-ban-penalize-or-flag-websites/)).

So, how is that rate determined, and how much does it influence the overall ranking of a page?

This complicated-looking formula is given as one way of determining that how the age of a document might influence how it ranks:


> H=L/log(F+2),
>
> where H may refer to the history-adjusted link score, L may refer to the link score given to the document, which can be derived using any known link scoring technique (e.g., the scoring technique described in U.S. Pat. No. 6,285,999) that assigns a score to a document based on links to/from the document, and F may refer to elapsed time measured from the inception date associated with the document (or a window within this period).

The patent referred to in that quote is one of the original PageRank patents – [Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en). This method of influencing rankings could adjust how PageRank might impact search results.

The historical data patent explains that sometimes some “older documents may be more favorable than newer ones” and that some sets of results can be fairly mature. The scores of documents can be influenced (positively or negatively) by the difference between the document’s age, and the average age of documents resulting from a query.

So, a fairly new site that appears amongst a set of results that are, on the average, fairly old, may find that difference negatively influences it in age.

**Other Ways of Determining Freshness**

Since the patent application was published, a new patent filing came out from one of the inventors listed on the original, [Systems and methods for determining document freshness](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20050144193.PGNR.&OS=dn/20050144193&RS=DN/20050144193)

This follow-up patent application from Monika Henzinger added another way of looking at how fresh a document might be. It takes a look at how fresh the pages and links pointing to a document are to determine the freshness of that document.

Google’s patent application, [Interleaving Search Results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080140647.PGNR.&OS=dn/20080140647&RS=DN/20080140647), on how it blends different kinds of search results (Universal Search) mentioned freshness as one of the ranking factors for News Stories that it might include in search results. More about that patent filing in [How Google Universal Search and Blended Results May Work](https://www.seobythesea.com/2008/06/how-google-universal-search-and-blended-results-may-work/).

A New York Times article from last year, [Google Keeps Tweaking Its Search Engine](https://www.nytimes.com/2007/06/03/business/yourmoney/03google.html?_r=5&ref=yourmoney&pagewanted=all&oref=slogin&), uncovered a Google initiative that goes by the name QDF, or *Quality Deserves Freshness*. It discusses whether topics are “hot,” and whether people are writing about those topics in the news, in blogs, and whether searchers are looking for information about those in searches.

Looking at user behavior and click-throughs to pages are other ways of determining whether a document is fresh or stale. The patent includes those as other ways of determining just how fresh pages might be. I’ll address those topics in a future post.

Should freshness be part of how a search engine ranks pages? If you run a website, how fresh are the pages of your site, and how can you make them fresher if they seem on the stale side?

Part 2 of this post is: [Updating Google’s Historical Data Patent, Part 2 – Changing Content](https://www.seobythesea.com/2008/09/updating-googles-historical-data-patent-part-2-changing-content/)
