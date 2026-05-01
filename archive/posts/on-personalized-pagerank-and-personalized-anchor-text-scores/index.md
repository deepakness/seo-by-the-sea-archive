---
title: "On Personalized PageRank and Personalized Anchor Text Scores"
source_url: "https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/"
slug: "on-personalized-pagerank-and-personalized-anchor-text-scores"
date_published: "2007-08-26T19:44:24+00:00"
date_modified: "2020-07-07T06:37:08+00:00"
author: "Bill Slawski"
---

Last week, I made a post introducing a newly granted patent from Google, [Personalizing anchor text scores in a search engine](https://patents.google.com/patent/US7260573B1/en) (US Patent 7,260,573) which was filed in May of 2004.

In the Search Engine Strategies Conference, I didn’t have a chance to delve too deeply into the patent. I am returning to it, and to the context in which it was filed and granted. The Mad Hat has a nice overview of the processes involved in Personalized Anchor Text Score.

Let’s look at a little of the history, and some of the papers and ideas around at the time that it was filed.

**The Role of Kaltix in Personalizing PageRank and Page Rankings**

The inventors listed in the patent are Taher Haveliwala, Glen Jeh, and Sepandar Kamvar, and all three came to Google when the stealth startup that they founded, Kaltix, was acquired by the search engine in late 2003. Kaltix was started as a spinoff of the [Stanford Personalized PageRank Project](https://nlp.stanford.edu/projects/pagerank.shtml).

The trio was working on a way to speed up the calculation of PageRank so that a personalized PageRank could be calculated for each searcher. But a personalized PageRank wasn’t their only goal. They also wanted to use other methods to reinforce that personalization, and this patent aims at taking advantage of the meaning of the text in the anchor portion of links pointing to pages.

Gord Hotchkiss posted parts of an [interview with Marissa Mayer](https://searchengineland.com/just-behave-googles-marissa-mayer-on-personalized-search-10592) at Search Engine Land in February in which they discussed aspects of personalized search at Google. One of the topics of the discussion involved the use of technology developed by Kaltix in Google’s approach to personalization and the reasons why Google acquired Kaltix:


> The reason we were interested in them was: one because they really grasped and cogged all of Google’s technology easily; and, two, because we felt they were on the cutting edge of how personalization would be done on the web, and they were capable of looking at things like a searcher’s history and their past clicks, their past searches, the websites that matter to them, and ultimately building a vector of PageRank that can be used to enhance the search results.

Marissa also noted that their methods of speeding up a PageRank calculation was of interest to Google. Some of the ideas behind that process may be found in papers from people involved in the Stanford project and Kaltix:

- [Exploiting the Block Structure of the Web for Computing PageRank](https://nlp.stanford.edu/pubs/blockrank.pdf) (pdf)
- [Adaptive Methods for the Computation of PageRank](http://web.archive.org/web/20160330014255/http://ilpubs.stanford.edu:8090/774/1/2003-26.pdf)
- [An Analytical Comparison of Approaches to Personalizing PageRank](https://nlp.stanford.edu/pubs/comparison.pdf) (pdf)

There are a good number of other papers involving PageRank that are worth a look mentioned on the pages of the [Stanford Personalized PageRank Project](https://nlp.stanford.edu/projects/pagerank.shtml), including Topic Sensitive PageRank.

**Patents Related to Personalizing Anchor Text Scores**

We also see the names of the Kaltix crew on a couple of other patents granted to Google, which I wrote a little about.

My first post on one of those is [Stanford’s New PageRank Patent](https://www.seobythesea.com/2007/05/stanfords-new-pagerank-patent/) ([Methods for ranking nodes in large directed graphs](http://web.archive.org/web/20140502164215/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,216,123.PN.&OS=pn/7,216,123&RS=PN/7,216,123)), which appears to incorporate ideas from the “Block Structure” paper that I link to above. It is mentioned in the Personalized Anchor Score patent.

In April of 2006, I wrote a post on [Google’s adaptive PageRank patent](https://www.seobythesea.com/2006/04/googles-adaptive-pagerank-patent/), which looks at [Adaptive computation of ranking](https://patents.google.com/patent/US7028029B2/en). It appears to focus upon the processes described in the “Adaptive Methods for the Computation of PageRank” that I also link to above.

While those patents and papers focus upon increasing the speed and decreasing the computational expense of calculating PageRank, this patent on personalized Anchor Text adds the element of hypertext analysis to personalization. It mentions personalized PageRank, and also the possibility of a “Block Structure” calculation of PageRank.

There is another patent filing cited (and incorporated by reference) in this present patent: “Anchor Text Indexing in a Web Crawler System.” It is presently unpublished, and unavailable from the USPTO, but it was filed on July 3, 2003, and was given U.S. patent application Serial Number 10/614,113. It sounds like it might provide some ideas on how anchor text is incorporated into a relevancy determination for document ranking purposes. Might be worth keeping an eye out for.

**The problem addressed in the Personalized Anchor Text Score patent**

PageRank by itself attempts to use the link structure of documents in a search engine database to computer global “importance” scores for those documents, which help influence the order that documents are presented to searchers in search results.

But PageRank looks at the existence of the links themselves while ignoring that those links often, but not always (as in the case of image links), contain text that describes the destination webpage of the link.

That text is commonly referred to as anchor text, and the authors of the patent tell us that it “often provides a more concise and accurate description than the destination web page itself and therefore can be used in determining the relevance of the destination web page to a particular query.”

They also provide the following snapshot of how Google worked at one point in time:


> It is noted that the Google search engine, as of late 2003, determines the position of a document in a set of search results as a function of the PageRanks of the documents in the search results, the query terms, the documents in the search results, and the anchor text of links to those documents.

The question raised, and attempted to be answered by the patent, is if a way can be devised that will pay attention to the specific personal preferences of a searcher when ranking pages in a computationally feasible manner. The patent inventors tell us that the use of PageRank and the relevance factors cited may not provide optimal results, “attuned to a user’s personal preferences.”

**The creation and use of Personalized Anchor Text Scores**

[*Page importance scores determined*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#importance)
[*Anchor text indexed*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#anchor)
[*Multiple databases used in processing a query*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#databases)
[*User information database*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#user)
[*Page importance ranking*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#page-importance)
[*Limitations on source pages*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#limitations)
[*Personalized anchor text score*](https://www.seobythesea.com/2007/08/on-personalized-pagerank-and-personalized-anchor-text-scores/#personalized)

Here is a walk-through of a number of the processes described in the patent

*Page Importance Scores determined*

Web pages are crawled and then processed by a content indexer to produce a set of inverted content index entries for the content that appears upon pages.

A page importance ranker computes the document’s page importance score (possibly the document’s PageRank, which is based upon the PageRanks of the documents linking to that document). The page importance score is stored in a database.

Other scoring systems could be used, such as scores from another link analysis or page importance determination methodology.

*Anchor text indexed*

An anchor text indexer generates an inverted anchor text index from links in each page received by the server, including text surrounding those links.

The links and text are extracted from pages, and recorded to identify:

- The source document,
- The target document associated with a link, and;
- the anchor text associated with the link.

An inverted anchor text index is generated where anchor text terms are mapped to the documents that are the target of the corresponding links. That index could be merged with or incorporated in some manner with the inverted content index.

*Multiple databases used in processing a query*

Upon submission of a query, the request is sent to a server-side query processor to respond with search results. That query processor checks with multiple databases to identify pages satisfying the search query, and it determines how to order those search results.

Those databases may include:

- The inverted content index,
- The page importance scores database, and;
- the inverted anchor text index.

The inverted content index may first return a set of pages containing the query terms used, and the query processor sends the same query to the inverted anchor text index to find another set of pages satisfying the query. A document can appear in both sets of documents.

The two sets are sent to page importance scores database and ordered according to their page importance scores and possibly their query dependent relevance scores.

*User information database*

The search engine may also have a user information database, which includes personalization information for searchers, often referred to as a user profile.

Under this system, a user can also submit user information, which makes taking the shape of an actual user profile or a set of parameters specific to each user which includes their background and preferences.

Instead of a user database containing this information, it is also possible that the user information could be submitted to the server together with the search query, or submitted separately from the query.

Some or all of the user information could be derived from previous search queries and by the pages in the search results that the user chooses to view or use. That personal information may be stored in a user information database and associated with a unique user ID. Or it could be received with each search, and not retained by the search engine for subsequent searches.

*Page importance ranking*

User information can be used to compute personalized page importance scores (personalized page rank) for at least some of the documents returned by the crawler. A Page Importance Ranker generates a page importance score for each page and user-specific (personalized) page importance scores for some of those pages.

The concept behind computing personalized page importance scores is that the Page Importance Ranker boosts the page importance scores of pages that are deemed to match the user-specific parameters, which in turn boosts the downstream pages linked to those documents.

In other words, the Page Importance Ranker boosts the page importance scores of documents of each host whose URL matches one or more of the user-specific parameters. A page may be deemed to match (or not match) user-specific parameters solely based on the URL of the document.

More than the URL may be looked at in this process, with a match of the user-specified parameters and the content of the page, and/or the anchor text content of links to that page.

If the document is deemed to match the user-specific parameters in a user profile (e.g., if the URL of the document includes any of URL keywords in the user profile), the document is assigned a personalized page importance score specified by a parameter in the user profile. For example, the user profile may specify for each URL keyword a particular page importance score adjustment that is to be applied to matching documents.

If a page matches more than one URL keyword, a larger page importance score adjustment may be applied to the page. A user’s profile may specify the adjustment or assignment of personalized page importance scores in other ways, too.

A personalized page importance score for a document only involves the document, a user’s specifically defined parameters, and the link structure through which the page is related to other pages. It is one signal amongst many other ranking factors and is not related to the specific query being searched for by the searcher.

It may be possible, though, that past searches and page choices in results may indirectly affect a document’s personalized page importance score because they can become part of a user profile (or user-defined parameters).

Example:

If a user has submitted many queries related to the standard aptitude test (SAT), the server may update his user information and incorporate this information into the set of user-specific parameters.

The number of documents for which personalized page importance scores are stored may be limited because of storage issues or computational expense, and scoring might be done at the time of a search. The patent describes some of the implications of that approach that I’m not going to discuss.

*Limitations on source pages*

Source pages listed for a page may be limited to pages satisfying a predefined requirement concerning the search query. A version of this process might require that the anchor text of the link to the page contain at least one query term from the search. Or, that the anchor text contains all of the terms of the search query.

Or, all source documents may be included, regardless of whether the anchor text of the links to the respective page contains any of the query terms. The authors tell us that limiting the source documents to those whose links have anchor text that includes at least one query term is preferred – this ensures that only source documents with anchor text relevant to the search query are used to personalize the ordering of the documents within the search results.

*Personalized anchor text score*

Here’s how this score is calculated:

1) Source page information is extracted from the initial search results.

2) That source page information and the user profile of the user who submitted the search query are used by a Personalized Anchor Text (AT) Score Generator to generate personalized link analysis (LA) scores for the source pages that correspond to each respective document (D1, D2, etc.) in the initial search results.

3) The personalized LA score for a source page may be its personalized page importance score (e.g., personalized PageRank), or the personalized LA score for a source document is a function of its personalized page importance score.

4) The personalized LA scores for the source pages are summed or otherwise combined by an accumulator, thereby producing an anchor text (AT) score for each respective document in the initial search results.

5) Results are then reranked by a search result ranking function, as AT score and the IR score of the document are combined, producing a set of final personalized ranking scores or values.

6) The pages are then ordered following the personalized document rankings to come up with a final, ordered set of search results.

**Conclusion**

A quick takeaway point – image links, and anchor text using generic terms like “click here” may not benefit from the boost that well-chosen anchor text may.

Is Google using this personalized anchor text scoring to rerank results? It’s hard to tell. But they do seem pretty interested in making personalized search work well.

A timeline of some Kaltix and Google Personalization posts and news:

- August 13, 2003 – [Kaltix and personalized search](http://web.archive.org/web/20120304011954/http://docbug.com/blog/archives/000017.html)
- September 30, 2003 – [Google Acquires Kaltix Corp.](http://googlepress.blogspot.com/2003/09/google-acquires-kaltix-corp.html)
- June 28, 2005 – [More on Google personalized search](http://glinden.blogspot.com/2005/06/more-on-google-personalized-search.html)
- February 2, 2007 – [Personally speaking](https://googleblog.blogspot.com/2007/02/personally-speaking.html)
- April 18, 2007 – [Searching without a query](https://googleblog.blogspot.com/2007/04/searching-without-query.html)
