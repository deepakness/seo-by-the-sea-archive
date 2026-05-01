---
title: "Yahoo Phrase Based Indexing in a Nutshell"
source_url: "https://www.seobythesea.com/2008/02/yahoo-phrase-based-indexing-in-a-nutshell/"
slug: "yahoo-phrase-based-indexing-in-a-nutshell"
date_published: "2008-02-11T08:35:03+00:00"
date_modified: "2021-04-29T16:43:17+00:00"
author: "Bill Slawski"
---

Search engines are getting smarter about the phrases that they see and understand online. For example, Yahoo recently published a patent application that describes several ways they learn about and understand the use of phrases in documents on the Web.

Exploring how Yahoo might use phrases to rerank search results may show how they may understand data from published documents on the Web and from log files that collect information about the queries that people use when they search for information about different concepts.

**From Keyword Matching to Phrase-Based Indexing**

A page’s placement in search results for certain queries can involve looking at ranking criteria and algorithms applied to documents involving keywords in search queries for things like:

- The number of occurrences of the query terms on a page,
- How close those terms might be together (proximity), and;
- The placement of the terms on a page (the location and types of elements those words may be within).

Those kinds of signals don’t consider the context of the search terms related to other words on the same page. They also don’t try to understand when queries are used as meaningful phrases.

**Concepts and Contexts**

The Yahoo patent application tries to determine the context of one or more terms as a concept or phrase. It is associated with other related phrases upon a page to identify the most relevant pages in response to a given search query. I’ve written about a similar Google approach in the past in a post titled [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)

The Yahoo process is different, but there are many similar ideas.

[System and method for determining concepts in a content item using context](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080033982.PGNR.&OS=dn/20080033982&RS=DN/20080033982)
Invented by Jignashu Parikh and John Thrall
Assigned to Yahoo
US Patent Application 20080033982
Published February 7, 2008
Filed: December 15, 2006

Abstract


> The present invention is directed towards systems and methods for indexing one or more content items. The present invention method comprises extracting one or more text items from a given item of content.
>
> One or more items of extracted text are tokenized into one or more concepts. One or more related concepts associated with one or more concepts are identified.
>
> A support score is generated for one or more concepts, and the item of content is indexed with the one or more concepts and the one or more associated support scores.

**Identifying Concepts Associated with Pages**

The patent filing gives us many technical details on how concepts, or phrases, might be identified. One of them is trying to capture meaningful phrases or concepts.

A search engine may strip out content from web pages using a text extractor program, which may also steal metadata and other information related to specific pages.

That text extractor may also look for content left behind by the readers of pages – user-generated tags that identify and describe what a page might be about.

To break the words upon a page into phrases, the search engine may look at them as combinations of one, two, three, and more combinations of words, which it would try to match up against phrases appearing in a concept directory.

So, a sentence like, “The quick brown fox jumps over the lazy dog,” might be broken down into a number of phrases like:

- The quick brown
- Quick brown fox
- Brown fox jumps
- Fox jumps over
- Jumps over the
- Over the lazy
- The lazy dog

The text and the tags describe what those pages are about and are sent to a program that takes that data and uses an **aboutness extractor** to break the text down and match it with keyword phrases maintained in a **concept dictionary**, to see if they are listed there as concepts.

The keyword phrases in the concept dictionary frequently appear in places like the Web or a database list of user queries.

The aboutness extractor breaks text taken from a page into tokens (like “the quick brown fox”). It identifies how frequently keyword phrases found within a “concept dictionary” appear on that page. Keyword phrases that are located in both the concept dictionary and on a specific page comprise “concepts.”

The concepts appearing on a page and their frequency of use upon that page are identified and maintained by that aboutness extractor.

If none of the phrases extracted from pages also appear in the concept directory, they may not be used as concepts for this concept-based indexing.

In addition to concepts, this system looks at the context that those concepts are used within.

The aboutness extractor identifies the frequency with which related concepts appear on a given page. A **context dictionary** maintains information identifying related concepts – one or more keywords and/or phrases associated with a given concept.

Phrases that appear on the same page together regularly may be more likely related to a specific topic. Thus, using the context dictionary to identify them might help relate those pages to that topic.

**Contexts Identified as Query Refinements**

The context dictionary contains information about keyword phrases that people have used to refine their search queries. The context dictionary might also store information identifying search queries during a given period or query session.

For example, a search engine may receive several queries during a given period. Those may be monitored to identify related keyword phrases and to store them in the context dictionary.

When someone searches and their results aren’t relevant or receive too many results, they might change the search terms they used to redefine or narrow the scope of their query.

The refined terms might be sent to a context dictionary. They might be considered related concepts (keyword phrases) and possibly associated with a concept in the concept dictionary.

Example

A searcher may look for “Toyota” and receive several results. For example, they may search for “Honda,” followed by a query for “Mitsubishi.” Similarly, another user may search for “Mitsubishi” and receive results, and then look for the term “Toyota.”

The search engine may monitor searchers’ queries and determine and determine that the terms “Honda,” “Mitsubishi,” and “Toyota” frequently appear in queries submitted by users during a given period or query session. The search terms and queries and related keyword phrases may be maintained in the context dictionary.

These related keyword phrases may show up as suggestions shown by the search engine to searchers as suggested query refinements.

**Co-occurrence**

If these related phrases appear on the same page, they may also help provide a “context” for that page, helping the search engine know what the page is about.

The context dictionary might maintain information frequently identifying co-occurring keyword phrases on the Web and upon a page. In addition, the search engine may monitor web pages to identify keyword phrases that frequently co-exist on the same pages.

Example

The search engine may look at advertisements and web pages on sites and determine that keyword phrases “interest rates” and “mortgage” frequently co-appear in advertisements and web pages.

Similarly, the search engine may decide that the keyword phrases “patent” and “intellectual property” frequently co-appear on pages. Again, those frequently co-appearing keyword phrases may be recorded by the context dictionary.

**Co-Occurence and Human Editors**

The index of co-appearing keyword phrases in the context dictionary may supplement information from a human editor, who identifies keyword phrases related to a given concept.

For example, a human editor may submit an index entry pair comprising the phrase and keyword “notebook computer, laptop,” indicating that the phrase “notebook computer” is associated with the keyword “laptop.”

**Related Concepts**

The “aboutness extractor” retrieves keyword phrases from the context dictionary associated with concepts from sites. The keyword phrases retrieved from the context dictionary are “related concepts” concerning the concepts on a site.

The aboutness extractor will then look at sites to determine if related concepts in the context dictionary are present or absent and store that information.

**Using Frequency and Relatedness to Determine a Support Score for Phrases**

The aboutness extractor uses the frequency of concepts appearing on a page and information about the presence or absence of related concepts associated with a given concept on a page to calculate a support score for concepts on a page.

The aboutness extractor may also use information from another information data store to calculate a support score for a given concept. That other information data store may contain human editorial information about the concepts that could appropriately increase or discount (not all human editorial information is reliable) the support score for a given concept.

It could also maintain tags or metadata generated by users describing a given content item. If user-generated tags or metadata for a page are similar or match concepts identified for a page, the support score for that concept may increase.

**Concept Index**

The search engine then creates a concept index with entries identifying the one or more concepts associated with pages and their support scores for concepts.

**Dominant Concepts**

A search engine might then create an index for “dominant” concepts associated with the pages received by a search engine. For example, a dominant concept or concepts may be the concepts associated with one or more items of content (pages) with the greatest associated support scores or supports scores over a certain support score threshold.

The patent application tells us that many well-known models could be used to determine “dominant” concepts for pages.

**Matching Concepts with Queries During Searches**

The search engine would sort through the concept index to find concepts matching or similar to the terms in a query received from a searcher.

Pages associated with the concepts matching or similar to a searcher’s query terms may be selected and added to a search result set. Those added pages may be sorted in descending order according to the support scores for the concepts with which the pages are associated. The sorted result sets may then be sent back to the searcher.

**Dictionary Manager**

A **dictionary manager** could provide periodic updates to the concept dictionary, context dictionary, and the “other information” data store at the search engine.

When a searcher refines their query by adding words or removing words, or modifying them, the query refinement might be sent to the concept dictionary. Likewise, if pages are updated with additional content, the updates may be sent to the context dictionary to ensure the context dictionary maintains the most relevant information on keyword phrases associated with concepts.

Further, if a user submits a query to a search engine, the dictionary manager may update the concept dictionary query logs to reflect the user’s query.

**How Concepts Associated with Pages are Identified**

You’ll find lots of different types of documents in a search index, from static pages to blog posts to advertisements, as well as audio and video and eCommerce platform product pages.

In this concept index approach, a document is first selected from pages linked to the search index.

Concepts (keyword phrases) associated with a selected page are identified by seeing if they are also listed in a concept dictionary that contains concepts taken from query logs or a body of documents like the Web.

Concepts and related concepts on the page are identified, as are keyword phrases associated with those concepts. Related concepts are kept in a context dictionary and are identified using many different information retrieval techniques.

Keyword phrases related to concepts might be created using information taken from user query sessions involving one or more terms over a certain period or during a given search session.

A context dictionary might also be created using information from human editors, who may identify keyword phrases associated with concepts on pages.

A **support score** is calculated for concepts identified on pages. These scores are numbers indicating the relevancy of a page with a specific concept and with related concepts.

An index may be created where an index entry is made up of a page, concepts associated with the page, and respective support scores for the concepts. The index generated may be used to locate pages responsive to search requests, such as user search queries.

**Calculating Support Scores for Concepts Associated with Pages**

I need to go back over some of the processes described above to explain how support scores are calculated.

A page is selected, and text from the page is extracted, and possibly also tags (user-created metadata) associated with the page may be extracted.

The extracted text is broken into concepts (keyword phrases), identified using a concept dictionary. Concept keyword phrases in the concept dictionary are keyword phrases frequently appearing on the Web or in query logs.

A concept is selected from the one or more concepts associated with a page by looking at the frequencies with which the concept appears upon a page (How often does a concept/phrase “wireless laptop” show up on a page, for example).

Related concepts are identified using a context dictionary index. For example, concepts related to “wireless laptop” may be the keyword “computer,” as well as the keyword “notebook.”

The page is searched to see if it contains those related concepts associated with the concept selected.

The frequency of the concept on the page selected and the presence or absence of related concepts are used to calculate a support score for the selected concept.

A support score is calculated using a combination of concept frequency, a term frequency/inverse document frequency (“TF/IDF”) measure using the one or more terms comprising a concept, and query log history.

The tf/idf measure looks at how frequently a phrase is mentioned on the page compared to how frequently it might be mentioned in a body of documents like Yahoo’s Web index or query log history.

When all concepts associated with the page selected have been analyzed, a concept index entry is made, taking the page selected, concepts associated with the page, and the support scores corresponding to the concepts on the page.

The concept index may identify dominant concepts associated with each page. Dominant concepts may have a support score exceeding a given amount or threshold.

**Using Concepts to Find Relevant Search Results**

Again, repeating some of the above processes, here’s a summary of how concepts can be used to provide a searcher with relevant pages using concepts associated with pages listed in the concept index.

The search engine receives a searcher’s query.

The query is parsed to identify the terms within the query.

A concept index is accessed, which contains pages, concepts associated with pages, and support scores for the concepts on those pages.

A page is selected from the pages listed in the concept index.

A check is performed to see if the concepts associated with the page match or are similar to the query.

For example, a query may be performed for the term “desktop computers.” Thus, a concept from a page in the concept index might be the phrase “wireless desktop computer,” matching the query “desktop computers.”

If the concepts associated with the page in the concept index match or are similar to the terms comprising the query, the content item, and concepts matching or similar to the query, and support scores associated with the matching or similar concepts are added to a result set.

After pages in the concept, the index has been analyzed. The pages in the search result set are sorted in descending order according to the support scores corresponding to the concepts with which a given page is associated and returned to the searcher.

**Using Concepts to find Related Pages**

In addition to helping with search results, this system may provide integration of related pages.

Someone searches, and a concept index is created, with entries identifying concepts associated with pages. In addition, phrases within the search query may be used to identify pages with concepts (keyword phrases) that match or are similar to the terms in the user search query.

Results are returned to the searcher using the concept index approach.

If the searcher chooses a page from the results, concepts related to that page are identified.

A search can then be performed to identify pages in the concept index associated with the concepts associated with the selected page. So, a searcher may select a link to a page associated with concepts A, B, and C.

After that selection by the searcher, a search may be performed to identify one or more pages (content items) in the concept index associated with concepts A, B, or C.

The page is sent to the searcher and links to pages identified as being associated with the concepts associate with the original page.

The searcher is presented with the page selected, as well as links to pages or portions of the pages, which are related to the selected page.

**Conclusion**

In the form of phrases that appear on pages, understanding concepts may help a search engine understand the pages that a searcher is looking for when they submit a query.

For example, someone searching for “ice cream” isn’t just looking for pages where the words “ice” and “cream” appear together.

So, a page that contains the actual phrase “ice cream” plus some related phrases such as “desserts,” or “ice cream parlor,” or “homemade waffle cones,” is more likely a match for a search for “ice cream” than a page describing someone slipping on ice, when going to a store for cream for their coffee, that doesn’t contain related phrases like that.

A page that includes phrases such as “double scoop,” “gelato,” “waffle cones,” “chocolate,” but not the phrase “ice cream” might also be seen as a “related” page for pages about “ice cream.”

What does this mean for people writing web pages? For one thing, it might be helpful to use words as phrases that the page is about together upon the page a few times, as opposed to mostly including those words on the page separately from each other. For another, it can be helpful to include related phrases to help the search engines understand the context of those phrases.

**Some Related Posts on Phrase and Concept Indexing**

If you are interested in learning more about how concepts might be used in indexing by a search engine, these posts are worth a look:

- [Yahoo on Testing Relevance and Variety in Search Results](https://www.seobythesea.com/2008/01/yahoo-on-testing-relevance-and-variety-in-search-results/)
- [Reranking Search Results Based Upon Concepts in Users’ Queries](https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-concepts-in-users-queries/)
- [Move over pagerank: Google’s looking at phrases?](https://www.seobythesea.com/2006/02/move-over-pagerank-googles-looking-at-phrases/)
- [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)
- [Microsoft Search on the Seasonality of Keywords](https://www.seobythesea.com/2007/10/microsoft-search-on-the-seasonality-of-keywords/)

Some posts I have written about co-occurrence.

- [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- [Ranking Webpages Based upon Relationships Between Words (Google’s Co-Occurrence Patent)](https://www.seobythesea.com/2012/11/ranking-webpages-relationships-co-occurrence-patent/)
- [Yahoo Phrase Based Indexing in a Nutshell](https://www.seobythesea.com/2008/02/yahoo-phrase-based-indexing-in-a-nutshell/)
- [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)
