---
title: "Pagerank Patent Updated"
source_url: "https://www.seobythesea.com/2006/06/pagerank-patent-updated/"
slug: "pagerank-patent-updated"
date_published: "2006-06-06T17:13:54+00:00"
date_modified: "2020-11-03T16:37:49+00:00"
author: "Bill Slawski"
---

A new version of one of the PageRank patents was published today.

There are some changes to the document. Many of them appear to be bringing parts of the first two patent applications involving PageRank together.

**The New Patent**

[Method for node ranking in a linked database](https://patents.google.com/patent/US7058628B1/en)
Inventor: Lawrence Page
Assignee: The Board of Trustees of the Leland Stanford Junior University
US Patent 7,058,628
Granted June 6, 2006
Filed July 2, 2001

Abstract


> A method assigns importance ranks to nodes in a linked database, such as any database of documents containing citations, the world wide web or any other hypermedia database. The rank assigned to a document is calculated from the ranks of documents citing it. Besides, the rank of a document is calculated from a constant representing the probability that a browser through the database will randomly jump to the document. The method is particularly useful in enhancing the performance of search engine results for hypermedia databases, such as the world wide web, whose documents have a large variation in quality.

**The Older Patents**

There’s some difference between these two, but many similarities, and many sections of text that are the same.

Filed January 9, 1998 and granted September 4, 2001:

[Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en)

Filed July 6, 2001, and granted September 28, 2004:

[Method for scoring documents in a linked database](https://patents.google.com/patent/US6799176B1/en)

**Changes in the New Patent**

1. The references section was updated in this patent to include documents that are listed in the filing granted on September 28, 2004.

2. The abstract section remains the same in the new document, but the claims section was reduced in length and appears to now cover aspects of both previous patent filings.

3. There are some minor looking changes in the “Detailed Descriptions” section between the version granted in 2001, and the one granted today.

4. The main changes appear in the summary section of the document. In the two previous documents, many passages were repeated, but there were also differences. I’ve copied the areas of that section below where the three differ:

Old (Method for node ranking in a linked database – Granted September 4, 2001)


> In one aspect of the invention, the computer-implemented method is provided for scoring linked database documents. The method comprises the steps of:
>
> obtaining a plurality of documents, at least some of the documents being linked documents, at least some of the documents being linking documents, and at least some of the documents being both linked documents and linking documents, each of the linked documents being pointed to by a link in one or more of the linking documents; assigning a score to each of the linked documents based on scores of the one or more linking documents; and processing the linked documents according to their scores.

Old (Method for scoring documents in a linked database – Granted September 28, 2004)


> In one aspect of the invention, the computer-implemented method is provided for scoring linked documents. The method includes identifying links from linking documents to linked documents in the network and determining the importance of the identified links. The method further includes weighting the identified links based on the determined importance and scoring the linked documents based on the weighted links.
>
> Following another implementation consistent with the present invention, a method for scoring documents, where at least some of the documents contain links to other ones of the documents, includes determining a probability that a searcher will access each of the documents after following a number of the links; and scoring each of the documents based on the determined probability.
>
> Under yet another implementation consistent with the present invention, a method scoring documents stored in a network includes traversing the network to identify links between the documents; identifying a location at which each of the documents is stored; weighting the links between documents based on the identified locations; and scoring the documents based on the weighted links.
>
> Per a further implementation consistent with the present invention, a method for scoring documents stored in a network includes identifying links from linking documents to linked documents in the network; determining the importance of the identified links; weighting the identified links based on the determined importance, and scoring the linked documents based on the weighted links.
>
> Following another implementation consistent with the present invention, a method for searching linked documents includes receiving a search query from a user; identifying a plurality of documents using the search query; identifying links to the identified documents from corresponding linking documents; assigning a score to each of the links based on a relationship between the link and user information, and presenting the identified documents to the user based on the scores assigned to the links.
>
> Under yet another implementation consistent with the present invention, a method for searching a network includes crawling the network to locate documents; creating a directed graph of the documents, the directed graph identifying links between the documents, and scoring each of the documents in the directed graph based on scores of the documents containing links to the document.
>
> In a further implementation consistent with the present invention, a method for searching a network includes receiving one or more search terms; searching the network to identify first documents based on the one or more search terms; determining whether the text of links in the first documents match the one or more search terms, each of the links identifying a second document; and generating search results that include the first documents and one or more of the second documents identified by the text of the links that match the one or more search terms.
>
> In yet another implementation consistent with the present invention, a method of organizing linked documents includes: (a) identifying a first linked document; (b) identifying links between linking documents and the first linked document; (c) assigning a weight to each of the identified links; (d) determining a score for the first linked document based on (i) the identified links between the linking documents and the first linked document, and (ii) the weights assigned to each of the identified links; (e) repeating steps (a)-(d) for a second linked document; and (f) organizing the first and second linked documents based on the determined scores.

New (Method for node ranking in a linked database – Granted June 6, 2006)


> In one aspect of the invention, the computer-implemented method is provided for scoring linked documents. The method includes identifying a plurality of documents, at least some of the documents being linked documents, at least some of the documents being linking documents, and at least some of the documents being both linked documents and linking documents, each of the linked documents being pointed to by a link in one or more of the linking documents; assigning a score to each of the linked documents based on scores associated with the one or more linking documents; and processing the linked documents according to the assigned scores.
>
> Following another implementation consistent with the present invention, a method for scoring linked documents includes receiving a search query from a user; identifying a plurality of documents responsive to the search query; locating incoming links to the identified documents from corresponding linking documents; assigning a score to each of the identified documents based on a number of the incoming links to the identified document and importance of the incoming links; creating a ranked list based on the scores of the identified documents, and presenting to the user information about the identified documents in an order that is based on the ranked list.
>
> Following yet another implementation consistent with the present invention, a method for organizing linked nodes includes determining first link information for a linked node; determining second link information for linking nodes that link to the linked node, and calculating a score for the linked node based on both the first link information and the second link information.
>
> Per a further implementation consistent with the present invention, a method of organizing linked documents includes: (a) identifying a first linked document; (b) identifying links between linking documents and the first linked document; (c) assigning a weight to each of the identified links; (d) determining a score for the first linked document based on (i) a number of the identified links between the linking documents and the first linked document, and (ii) the weights assigned to each of the identified links; (e) repeating steps (a) (d) for a second linked document; and (f) organizing the first and second linked documents based on the determined scores.
>
> Under another implementation consistent with the present invention, a method of organizing documents includes identifying a plurality of linked documents; identifying primary linking documents that link to the linked documents; identifying secondary linking documents that link to the primary linking documents; assigning a score to each of the linked documents based on (i) the number of links between the primary linking documents and the linked document and (ii) the number of links between the primary linking documents and the secondary linking documents, and organizing the linked documents according to the assigned scores.

There does appear to be a great deal of overlap between the three, with this new version of “Method for node ranking in a linked database” incorporating text and language from “Method for scoring documents in a linked database.”
