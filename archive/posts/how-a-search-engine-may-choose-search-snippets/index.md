---
title: "How a Search Engine May Choose Search Snippets"
source_url: "https://www.seobythesea.com/2009/12/how-a-search-engine-may-choose-search-snippets/"
slug: "how-a-search-engine-may-choose-search-snippets"
date_published: "2009-12-04T19:08:50+00:00"
date_modified: "2021-07-05T13:36:08+00:00"
author: "Bill Slawski"
---

When you search at Google or Yahoo, or Bing, you’ll see a set of search results that include a page title, a summary or search snippet of the page, and a URL indicating the page’s address.

Often, that combination of title, snippet, and URL will decide whether or not someone clicks through search results to a page.

The search snippet performs a couple of functions – it gives you a summary of what the page is about, and it shows you the context within which your query terms might appear on a page.

Sometimes a search engine will show you the Meta Description that the publisher of the page has come up with for a page, especially if the Meta Description contains the words found in the query.

Sometimes a search engine will show you a description that isn’t even found on the page if it decides that the page is relevant for a query. Still, the description for the page at the Yahoo Directory or DMOZ makes a better search snippet than the meta description or any of the content found on the page.

It’s also quite possible and prevalent for a search engine to use the content found on a page to show as a snippet for that page. The chances are that search engines show text from a page’s content as a search snippet for most queries more often than they do the meta description for a page or a description from an alternative source such as Yahoo or DMOZ directories.

If a snippet shown to a searcher isn’t very informative, searchers may click on pages in search results that don’t contain the information they are looking for, or they may not click on pages that may be helpful. Poorly chosen search snippets can lead to bad searching experiences.

A recent Yahoo patent application describes how they might make that experience better when deciding which search snippet to show searchers, looking at the quality of choices they have for a snippet within the text on a page, how relevant those choices might be, and how well that text might match up to the intent behind the search.

**Ranking Lines of Text on a Page**

Imagine that a search engine considered each line of text that appears upon a page as a possible snippet to show in search results.

Would the search engine rank each of those lines based upon some quality signal that doesn’t depend upon the query used to find the page? Or would it rank those lines upon how relevant they might be to the intent behind a query that the page is located for? Or would it combine both a quality ranking and a relevance ranking to decide what to show to searchers?

The Yahoo patent filing tells us that it could look at the following for each line on a page to come up with a score for each line to use as a snippet:

- A *query-independent relevance* for each line of text – a degree to which the line of text of the document summarizes the document.
- A *query-dependent relevance* of each of the lines of text – a relevance of the line of text to the query.
- The intent behind a query.

The patent application is:

[System and Method for Automatically Ranking Lines of Text](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090292683.PGNR.&OS=dn/20090292683&RS=DN/20090292683)
Invented by Tapas Kanungo, and Donald Metzler
Assigned to Yahoo
US Patent Application 20090292683
Published November 26, 2009
Filed: May 20, 2008

Abstract


> Disclosed are apparatus and methods for ranking lines of text. In one embodiment, an intent of a query is ascertained. The relevance of each one of the plurality of lines of text of a document is determined based upon the intent of the query, content of the query, and content of each of the plurality of lines of text. The plurality of lines of text may then be ranked according to the determined relevance of each of the plurality of lines of text.

We’re given some examples of features that might be included in each of these three different kinds of signals.

**Query Independent Relevance**

A web page might be broken up into lines of text, and query-independent features might be identified for each line. Since these features are independent of the query used in a search, they focus upon quality rather than potential relevance to any specific query that a searcher might submit.

Some examples of query-independent features:

- How common one or more words in the line are (a frequency with which various words are typically used, possibly excluding words such as “the,” “and,” and “or.”)
- Many names in the corresponding line. For instance, the existence of one or more names may indicate greater relevance of the line to the page.
- A position of a line within the page, which may indicate the importance and therefore the relevance of the line to the document, such as the beginning, middle, or end of a document, the first, middle, or last line of a paragraph, the first line of a document, etc.
- The number of words in the line of text, and/or;
- The number of common words (e.g., a, an, the) in the line of text.

**Query Dependent Relevance**

A web page might be broken up into lines of text, and query-dependent features might be identified for each line. Since these depend upon the query used by a searcher, the features focus upon indications of how relevant a possible line might be to a specific query.

Some examples of query-dependent features:

- A percentage of the query terms that are found in each line.
- A number of times a particular query term is found in the line, and/or;
- Whether the query is a substring of the line of text.

**The intent of a query**

Features and patterns that might indicate the intent of a query may be identified for each line on a page.

Some examples of features used to identify the intent of a query:

- Whether the query includes one or more names (organizational or product) – which may indicate that the query is navigational rather than informational. If the query contains the name of a business or product, it might be more navigational in nature.
- Click characteristics associated with a query – which may indicate how often someone might click on a page corresponding to the name provided in the query when the query is submitted, and/or;
- The number of words in the query.

These are only some of the features that might be used, and a search engine might look for more than the examples included in the patent filing. In July, I wrote a previous post about another Yahoo patent filing, which includes some other features that a search engine might use to determine the quality of a snippet, which shares an inventor with this patent filing. The post is at: [Search Engines Evaluating Snippets in SERPS](https://www.seobythesea.com/2009/07/search-engines-evaluating-snippets-in-serps/).

I’ve written some other posts on snippets here as well. Here are some of them:

- [How does Google Pick Snippets for Your Pages to Show in Search Results?](https://www.seobythesea.com/2007/12/how-does-google-pick-snippets-for-your-pages-to-show-in-search-results/)
- [The Influence of Search Result Listings (Captions) on Clickthroughs](https://www.seobythesea.com/2007/07/the-influence-of-search-result-listings-captions-on-clickthroughs/)
- [Search Result Snippets and the Perception of Search Quality](https://www.seobythesea.com/2007/05/search-result-snippets-and-the-perception-of-search-quality/)

**Search Snippets Conclusion**

Snippets do play an important role in whether or not someone will click through a link that they see for a page in search results, and it can be worth spending time and effort on the meta description that may sometimes be shown to searchers.

It’s also not a bad idea to check the analytics for a site to see which query terms are being used to find pages, and to check what a search engine might have chosen to show as a snippet for that page, for those queries. Editing content on a page in response to a search engine’s decision of what to show as a snippet may result in a better snippet shown for that page for that query.

There hasn’t been much known about how a search engine decides what content to show as a snippet when it decides to show content from a page rather than a from a meta description, except that the content will usually contain as many of the query terms used as possible, to show searchers how those words are used within the context of a page.

There might be other features, based upon quality, relevance, and intent, that search engines may use, such as how readable a snippet might be, how close to each other query terms are in sentences that appear on a page, how “spammy” a snippet might appear, and more signals. If you read some of my earlier posts on snippets, many of those signals are contained within those.

It’s also possible, and not unusual, to see snippets from search engines that show more than one line from a page, so that the use of those query terms might be displayed to searchers.

If you’re a site owner, how often do you look at search results that pages from your site appear in, to see what the snippets are like when your pages are shown?

Those snippets may determine whether or not someone visits your site.
