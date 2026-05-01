---
title: "How a Search Engine May Rerank a Page Based on Web Page Credibility"
source_url: "https://www.seobythesea.com/2011/03/how-a-search-engine-might-visualize-and-rerank-web-pages-based-upon-credibility/"
slug: "how-a-search-engine-might-visualize-and-rerank-web-pages-based-upon-credibility"
date_published: "2011-03-21T10:55:04+00:00"
date_modified: "2020-06-19T16:40:27+00:00"
author: "Bill Slawski"
---

What steps can a search engine take to give a searcher more information about web page credibility that searchers might see in search results? Is it better to show searchers annotations that might provide a measure of credibility in search results themselves or something like a browser toolbar?

Might signals that measure things like credibility also be used in ranking algorithms and reranking approaches like the recent [Panda ranking update](https://www.seobythesea.com/2011/03/searching-google-for-big-panda-and-finding-decision-trees/) at Google?

A recent whitepaper from Microsoft explores the topic of web page credibility.

**Limitations of Google’s Toolbar PageRank**

Google used to show searchers who had a Google Toolbar installed on their browser a [PageRank Button](https://support.google.com/toolbar/answer/9171?hl=en&ctx=options&ver=T6.6&rd=1), which Google told us was their indication of the “importance of a web page” someone might be viewing. The toolbar button provided information about the PageRank of a page at one point in time somewhere in the past.

Google’s Technology overview page told us this about PageRank:


> When Google was founded, one key innovation was PageRank, a technology that determined the “importance” of a webpage by looking at what other pages link to it, as well as other data. Today we use more than 200 signals, including PageRank, to order websites, and we update these algorithms every week. For example, we offer personalized search results based on your web history and location.

The PageRank measure shown in the Google Toolbar has some limitations as a measure of the web page credibility and quality.

– It’s likely limited to just information about the quality and quantity of links to a page, for one thing, rather than many other signals that could indicate the credibility of a page.

– It’s only updated a few times a year, so the PageRank information it displays may be inaccurate, not showing PageRank at all for newer pages or pages that the search engine may not have crawled and indexed yet, or possibly showing a PageRank that may be months old.

– The PageRank measure shows a score from 1-10, without explaining that this is a logarithmic score, so that the important difference between a page showing a PageRank of 4 and another with a PageRank of 5 isn’t the same measure of the difference between a page showing a PageRank of 3 and a PageRank of 4.

Interestingly, the [First PageRank Patent](https://www.seobythesea.com/2011/03/the-first-pagerank-patent-and-the-newest/), [Improved Text Searching in Hypertext Systems](https://www.seobythesea.com/improved-text-searching-in-hypertext-systems.pdf) provides examples in its appendix of Backrub (Google’s original name) showing a PageRank toolbar displayed in search results, with a range of numbers that it tells us are still logarithmic, but which extend much higher than 10. For example, the image below shows “PageRank citation importance numbers” for some pages within search results on a search for [University]:

![Backrub search query results on a search for \[university\] with results from the home page of the University of Illinois (with a PageRank of 694.687), the home page of Stanford University (with a PageRank of 609.303), and an interior page from Stanford (with a PageRank of 167.909).](media/backrub-annotations.jpg)

Those search results also indict several backlinks for each of the search results with a clickable link that you could use to see the backlinks for a page.

Not sure what inspired Google to not show PageRank information in search results for pages listed these days, or the number of backlinks, but I’m happy that they don’t. PageRank is only one ranking signal amongst more than 200, and it isn’t the best indicator of how “relevant” a page might be for a search result. Also, since Google doesn’t update the PageRank information in the toolbar that frequently, chances are that they wouldn’t update it frequently if it appeared in search results as well.

**Microsoft Paper on Web Page Credibility**

This morning, I ran across a Microsoft Research paper, [Augmenting Web Pages and Search Results to Support Credibility Assessment](https://cs.stanford.edu/~merrie/papers/WebCredibility_CHI2011.pdf) (pdf) published to be presented at the [CHI 2011](http://www.chi2011.org/) (ACM CHI Conference on Human Factors in Computing Systems), on May 7–12, 2011, in Vancouver, BC, Canada, authored by Julia Schwarz of Carnegie Mellon University, and Meredith Ringle Morris of Microsoft Research.

The paper explores information about web pages that might provide “valuable signals” regarding web page credibility, and describes the testing of visualizations of that information to searchers to see how the information might help searchers assess how credible pages in search results might be.

Search engineers’ assumptions regarding indications of things like web page credibility and quality might be used presently and in the future to rerank search results that are shown in search engines. As we’re told in the paper:


> In addition to displaying credibility-correlated features (particularly expert behavior) to end-users, search engine companies might consider integrating such data into their ranking algorithms, particularly given user mental models that already assume that ranking is a proxy for credibility [17].

In addition to showing “visualizations” of the credibility of search results “adjacent” to web pages (perhaps in something like Google’s Toolbar button), the authors of the paper tell us that they thought it was important to include more compact versions of those visualizations in search results themselves because of “recent findings that many users make determinations of credibility based on search results pages.”

The paper’s worth spending some serious time with if you want to learn more about how notions of things like web page credibility and quality might impact search results in the future. Rather than a full-blown analysis of the whole paper, I thought it would be worth sharing some of the aspects of pages that the researchers considered in creating visualizations of credibility to display in search results.

Here are some of the web page credibilty signals that that they looked at:

***On-Page Features***

- Spelling Errors
- Number of Advertisements on a page
- Domain Type (.com, .gov. etc.)

***Off-Page Features***

- Awards and Certifications, such as the Webby Award, Alexa Rank, Health on the Net (HON) awards.
- Toolbar PageRank, and Rankings for Queries used in generating their data set
- Sharing information, from sites like Bit.ly and other shortening sites, Likes and shares and comments and clicks from Facebook, Clicks from shortened URLs on Twitter, bookmarks on Delicious.

***User Aggregated Non-Public Data from Toolbar Usage***

- General Popularity – unique visitors from users
- Geographic Reach – number of visitors from different geographic regions
- Dwell Time – amount of time users kept a URL open in their browser (as an estimate of how long they might have viewed a page
- Revisitation patterns – how often people revisited a page, on average
- Expert Popularity – the behavior of people who have been shown to have an expertise in a pariticular field, and user data about their visits to pages in those fields.

**Conclusion**

I’ve often pointed people in the past to the [Standford Guidelines for Web Credibilty](http://credibility.stanford.edu/guidelines/index.html) to give them some ideas on things that they can do on their websites to be perceived by visitors as having a credible site, and while those guidelines are from almost a decade ago (2002), I think they still have a lot of value. The development of those guidelines was guided by B.J. Fogg, who founded the Stanford Persuasive Technology Lab. Interestingly, there are a few references to his work and theories in the Microsoft paper.

Chances are that there are other features not listed in the Microsoft paper that could be viewed and used in an automated manner to allow a search engine to provide some measure and visualization of Web Page credibility. But there are some interesting signals listed in this paper that aren’t that intuitive, such as the social sharing signals listed in the “off-Page features” section.

What other kinds of things might a search engine program look at to gauge web page credibility?
