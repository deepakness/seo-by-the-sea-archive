---
title: "Google's Quality Score Patent: The Birth of Panda?"
source_url: "https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/"
slug: "googles-quality-score-patent-the-birth-of-panda"
date_published: "2011-06-14T11:54:08+00:00"
date_modified: "2021-06-20T10:21:55+00:00"
author: "Bill Slawski"
---

In 2005, Google’s John Lamping gave a presentation to a class at Berkeley on the Quality of Information, titled [On the internet, nobody knows you’re a dog](http://courses.ischool.berkeley.edu/i290-10/f04/lamping.pdf) (pdf). In his talk, he raised questions such as:

- Why is the Daily Californian advertising German pages?
- How much can the spam industry make by spamming search engines?

![One of John Lamping's slides from his Quality of Information presentation showing two different paragraphs where Madlib style keyword insertion has been performed on the content.](media/google-panda-1.jpg)

During his speech, he pointed out ways that people have attempted to manipulate search results, such as [mad libs-like](https://en.wikipedia.org/wiki/Mad_Libs) insertions of keywords into templates for pages like in his slide above, cloaking, and other spam approaches to optimizing pages, and paid links and comment spamming. In addition to talking to academic audiences about search quality, he has been working on improving the quality of search results.

I wrote about one patent John Lamping co-invented in a post titled [How Searchers’ Queries Might Influence Customized Google Search Results](https://www.seobythesea.com/2009/03/how-searchers-queries-might-influence-customized-google-search-results/). My post describes a 2003 patent exploring how to improve search rankings by looking at results for related queries. In 2005, he was a co-inventor with Mark Pearson on a Google patent granted today, presenting a way to create and use quality signals for documents and sites based on search queries.

**Returning the “best” search results**

Most patents include a section describing problems they intend to address; in this new patent, we’re told the intent is to return the best results for a search based upon measuring the quality of documents by adding an additional quality score for at least some queries.

When the patent was written in 2005, the quality of pages returned for a particular query was measured with an Information Retrieval (IR) score calculated by how relevant a document might be to a query, and a score based upon links pointing to pages.

That IR score might be created by looking at matches between queries and the words on a web page. Matching words in a query and a page’s title might score higher than a match between the query and words in the page footer. If matching text is found in larger or bolded fonts, or italicized, that text might count more than words in normal text.

A page that includes all of the terms in a query might also have a higher IR score than a page that only includes one or some of the terms.

These and other similar types of signals might be combined to create an IR score for a page to determine the “quality” of results in pages for a search.

In addition to using an IR score for pages, a search engine might look at the link structure between pages to rank documents. However, we are told that there are times when that link structure might be “unavailable, unreliable, or limited in scope,” which would limit its use and value.

One solution to the limitations of a score based upon Information Retrieval (IR) and Link Analysis is for the search engine to analyze other “associations” between queries and pages found in search results for those queries, to create a “quality score” for those pages. That quality score might be created by looking at:

- The different queries a page might be found for,
- What anchor text is pointed at that page,
- How prominent the text in a query might be on that page, and
- How frequently people select certain pages in response to particular queries.

Does it seem like when someone enters a query into the search engine that they are specifically asking for, or requests a page they already have in mind? Something we often refer to as a [navigational query](https://www.seobythesea.com/2009/12/microsoft-on-navigational-queries-and-best-match/) these days? If so, that might be a signal of the quality of that page. For example, if I search for [ESPN], the chances are that I’m looking for the ESPN home page. My search for [ESPN] and my selection of the ESPN home page might be considered a quality signal by Google.

When you compare those query terms with anchor text in links pointing to a page from the search results for that query, is the text in those links often similar or the same as the query terms? Does that page tend to have more links to it using those words than other pages in the same search results? Again, that’s something that could be seen as a signal of quality for that page. If you google [ESPN], do one or two pages tend to have more links in them that include “ESPN” than the other pages in the search results. Again, that’s a positive indication of “quality” for those pages.

If multiple searchers use a certain query or a similar one, and tend to select a certain page, that’s another signal that can raise the quality score of that page. If most people searching for [ESPN] tend to select the ESPN home page, that’s another quality signal that Google might track.

The Google quality score patent granted today is:

[Deriving and using document and site quality signals from search query streams](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,962,462.PN.&OS=pn/7,962,462&RS=PN/7,962,462)
Invented by John Lamping and Mark Pearson
Assigned to Google
US Patent 7,962,462
Granted June 14, 2011
Filed May 31, 2005

Abstract


> A system analyzes one or more search streams to detect one or more associations between a document and one or more queries in the one or more search streams. The system further derives a value for the document based on the detected associations. It uses the derived value in evaluating the document’s quality concerning one or more subsequent queries.

**Quality Scores and the Panda Updates**

On February 24th of this year, Google’s Matt Cutts and Amit Singhal co-published a blog post at the Official Google Blog titled [Finding more high-quality sites in search](https://googleblog.blogspot.com/2011/02/finding-more-high-quality-sites-in.html), which described a significant change in the way that Google ranks pages in search results, which would impact almost 12% of all search queries. We were told that the new approach would reduce rankings for lower-quality pages, and boost rankings for higher-quality pages.

The post provided some hints as to what Google considered high quality and low-quality pages. It was followed up by more statements from Cutts and Singhal, including a joint interview with the two on March 3, 2011, [TED 2011: The ‘Panda’ That Hates Farms: A Q&A With Google’s Top Search Engineers](https://www.wired.com/2011/03/the-panda-that-hates-farms/) where we learned more about the update, including the fact that it was named after a Google engineer named Panda.

I read the interview and when hunting for more information about that engineer, hoping to find something that he might have written that might help provide more information, and later that day wrote [Searching Google for Big Panda and Finding Decision Trees](https://www.seobythesea.com/2011/03/searching-google-for-big-panda-and-finding-decision-trees/).

It appears that I might have found the right engineer when I ran across Biswanath Panda, who was involved with research on how to efficiently and effectively use a certain kind of machine learning approach on huge data sets, like Google’s web index, to compare and classify pages based upon certain features about those pages against a known set of pages to determine the quality of those pages.

In the TED 2011 interview linked in the paragraph above, Matt Cutts tells us:


> And we actually came up with a classifier to say, okay, IRS or Wikipedia or New York Times is over on this side, and the low-quality sites are over on this side. And you can really see mathematical reasons…

We were also told that the features considered as potential signals of quality were based upon a series of questions about pages, such as whether or not you would trust a site with your credit card information. Amit Singhal published another post about the update on May 6th that included a number of the kinds of [questions that inspired the update](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html).

Here are the first five of the 23 listed:

- Would you trust the information presented in this article?
- Is this article written by an expert or enthusiast who knows the topic well, or is it more shallow in nature?
- Does the site have duplicate, overlapping, or redundant articles on the same or similar topics with slightly different keyword variations?
- Would you be comfortable giving your credit card information to this site?
- Does this article have spelling, stylistic, or factual errors?

The questions cover a wide range of topics, from trust and credibility to the depth of content, to problems involving site structures and grammar, and spelling. It didn’t provide detailed descriptions of the kinds of features that might be used to determine the quality of pages and sites.

The approach described in Biswanath Panda’s paper was tested in Google’s sponsored search to see if features found in advertisements and queries and landing pages could predict bounce rates from the landing pages those advertisements pointed to. That test is described in the paper, [Predicting Bounce Rates in Sponsored Search Advertisements](http://www.bayardo.org/ps/kdd2009.pdf).

It’s quite possible that the approach could also be used to classify features on pages and sites to provide quality scores, which might boost or lower their rankings in search results.

The process of assigning quality scores to pages and sites is something Google has been exploring for a while before the Panda updates. We can see in this recently granted Google patent on *document and site quality signals from search query streams.*

Panda may look at other features to determine quality scores for different kinds of queries. Still, the idea of defining “quality” with a score to add to the IR and Link Analysis scores in ranking pages may have gotten its start with this patent.

Looking at a little deeper at the signals from the quality score patent a little deeper, there’s one main question that it seems focused upon.

**Is a query asking for a specific page?**

The patent tells us that it might assign points to a page if a specific search query is deemed to “ask” for one or more specific pages. This sounds somewhat like how Google might respond to a query that they believe is navigational in nature. A specific site is likely to be an authoritative page for a particular query.

Another Google patent that describes other ways that Google might identify a page or site that might be “authoritative” for a particular query is [Propagating useful information among related web pages, such as web pages of a website](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070233808.PGNR.&OS=dn/20070233808&RS=DN/20070233808), which I wrote about in a 2007 post titled [Google Determining Search Authority Pages and Propagating Authority to Related Pages](https://www.seobythesea.com/2007/10/google-determining-search-authority-pages-and-propagating-authority-to-related-pages/).

That *Authority Pages* patent looks at many features, both on-page and off, and even some offline evidence to determine if a particular page or site might be authoritative for a particular query. Interestingly, John Lamping was also one of the co-inventors listed on that patent.

A search query might be said to ask for one or more pages if:

- The pages have similar text to that in the query in places like the page title, in the prominent text of the page, or in the URL of the page.
- If more links, possibly a majority, are found on other pages of the Web that have similar text to the query point to that page or pages.
- If people using the same query or a very related one tend to pick the page or pages from search results

Points may be assigned to that page or pages by the search engine when it’s found that the search query is “asking” for those pages.

For example, assume two queries are somewhat popular – [London Hotels] and [Ritz Carlton]. Most links using the text “Ritz Carlton” likely point to an official Ritz Carlton page on the Web, so it receives points for the query when people search for it. On a search for “London Hotels,” links using that text tend to point to a wide range of diverse sites. So, there probably aren’t any pages that gain points on a search for “London Hotels.”

The patent tells us that it might look for most links pointing to a particular page in that situation, or it might consider a certain threshold, such as 20 links pointing to a page, as sufficient for a page to be given points towards a page quality score.

Another way to accumulate quality points, as an indication that a particular query might be “asking” for a particular page, relies upon other people using that query selecting the same page. The number of previous searchers selecting the same page might be a specified minimum number, a specified percentage, or possibly a preponderance of searchers.

Those points might then be used as a quality signal for each respective page for subsequent searches performed at the search engine, regardless of whether or not those follow-up searches include the same query terms. There are a few different ways that the points from this quality score might be implemented, as described in the patent, including possibly influencing the PageRank of pages:


> The assigned points may be used, for example, in any type of subsequently executed document scoring/ranking algorithm. In one implementation, the assigned points may be used as an input in a subsequent PageRank computation.
>
> In another implementation, a combination of the points assigned consistent with aspects of the invention and results of a PageRank computation may be used to derive a quality signal. This combination may either be mathematical (e.g., an average) or otherwise (e.g., using different signals at different places or times in a ranking/scoring algorithm).
>
> The points assigned, consistent with aspects of the invention, may generally be used as a signal of document quality and can be used in many different ways in any scoring/ranking algorithm, or for deriving other quality signals that are used in a ranking/scoring algorithm.

**Losing or Limiting Quality Points**

Under the approach in this patent, a page might accrue points towards a quality score when the search engine believes that the query “asked” for a particular page, as I described above.

There are some limiting and even negative factors involved in this method of accruing points.

Certain pre-designated search queries might result in no assignment of points to the one or more pages found in the search results for some queries. We’re not given an example or explanation of what those particular queries might be.

If it appears that searchers are searching for a particular query “solely to attempt to amass points for a specific document,” then the search engine might subtract points assigned to a page. We’re also not told exactly what that might mean, but it does sound like hiring several people to search for a particular query and having them click on a certain result might not be welcomed.

Funny, but I’m reminded a little of [Google’s Bing Sting](https://searchengineland.com/google-bing-is-cheating-copying-our-search-results-62914) from earlier this year.

A page might only be able to accrue a certain number of points for a particular query regardless of who is doing the searching. The number of points from a single user to a particular document, or to a range of queries for different documents might be limited as well. The number of points from the same Internet Protocol (IP) address might be limited to a certain number per day or per week, too.

**Site Wide Implications**

While the patent describes how pages might be assigned quality points based upon whether or not a query appears to be “asking” for that page, the conclusion to the description of the patent tells us that these quality points might be either “additionally or alternatively” assigned to the site that hosts the documents.

A site, under the patent, is broadly defined as documents that are “under common control,” such as pages:

- Associated with an organization
- A particular domain name
- A particular host name
- Created by the same person or group of persons

More broadly, a site might be considered to include:

- A group of documents about a topic
- A group of documents in a particular language
- A group of documents hosted in a particular country
- A group of documents written in a particular writing style

A point assigned to a particular page may also be considered a “vote” for the site associated with that page. Points assigned at different levels, both the document level and different site levels, may be combined in some manner, such as when scoring and ranking pages.

**Conclusion**

The process described in this newly granted Google patent appears to be best suited to identify navigational search results – pages that searchers already know about and seem to want to find when they issue their query.

One of the ongoing mysteries surrounding the Panda updates, in the initial announcement about them, was that the update “noticeably impacts 11.8% of our queries.” In 2006, I wrote a post at Search Engine Land titled [Why Do People Google Google? Understanding User Data to Measure Searcher Intent](https://searchengineland.com/why-do-people-google-google-understanding-user-data-to-measure-searcher-intent-10091), about a presentation from Google research scientist Dan Russell, who provided a breakdown of the different types of queries that Google received by whether they were navigational, informational, or transactional.

Simultaneously, navigational queries amounted to around 15 % of the searches they received, transactional about 22%, and informational accounted for the final 63%. I haven’t seen an update to those percentages since then, and there are other ways to classify queries, but people may be performing fewer navigational queries and more of the other types. Are “navigational” queries the types that we were told would be “noticeably impacted”?

What’s really interesting about the process described in the patent is that it sets up a framework for assigning quality points to particular pages and sites to be used to determine a quality score for those pages, and those quality scores might potentially influence search results for unrelated queries that might not be navigational in nature.

It doesn’t cover the wide range of features that might be assessed under the Panda upgrades based upon the questions Google presented to webmasters about improving the quality of their pages. The Berkeley presentation from John Lamping, around the time, that this patent was filed, tells us that many of those quality features were a concern to Google’s search engineers at the time.

Did the “quality scores” in this patent lead to the Panda updates? Maybe.

I’ve written a few posts about patents involving quality scores for organic SEO:

- 6/14/2011 – [Google’s Quality Score Patent: The Birth of Panda?](https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/)
- 12/9/2012 = [How Google May Identify Navigational Queries and Resources](https://www.seobythesea.com/2012/12/navigational-queries-resources/)
- 5/15/2013 – [How Google May Rank Web Pages Based on Quality Ratings](https://www.seobythesea.com/2013/05/google-rank-sites-quality-ratings/)
- 5/12/2015 – [How Google May Calculate a Site Quality Score (from Navneet Panda)](https://www.seobythesea.com/2015/05/google-site-quality-scores/)
- 6/22/2015 – [How Google May Classify Sites as Low Quality Sites](https://www.seobythesea.com/2015/06/how-google-may-classify-sites-as-low-quality-sites/)
- 7/30/2018 – [Quality Scores for Queries: Structured Data, Synthetic Queries and Augmentation Queries](https://www.seobythesea.com/2018/07/quality-scores-for-queries/)
- 9/21/2017 – [Using Ngram Phrase Models to Generate Site Quality Scores](https://www.seobythesea.com/2017/09/site-quality-scores/)
- 6/10/2019 – [How Google May Rank Some Results based on Categorical Quality](https://www.seobythesea.com/2019/06/categorical-quality/)

Last Updated June 26, 2019.
