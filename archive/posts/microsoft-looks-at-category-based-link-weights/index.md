---
title: "Microsoft Looks at Category Based Link Weights"
source_url: "https://www.seobythesea.com/2006/09/microsoft-looks-at-category-based-link-weights/"
slug: "microsoft-looks-at-category-based-link-weights"
date_published: "2006-09-01T10:48:37+00:00"
date_modified: "2020-11-03T16:35:35+00:00"
author: "Bill Slawski"
---

How effective would a web page ranking system be if it included a category weight score for links based upon an assigned category for web pages those links come from?

We’ve seen [Google](https://www.seobythesea.com/2006/08/google-looks-at-query-themes-and-reranking-based-upon-editorial-opinion/) and [AOL](https://www.seobythesea.com/2006/08/what-would-you-do-with-a-database-of-aol-user-queries/) recently mention classifying queries into categories lately in patent filings, and a newly published patent application from Microsoft also discusses that possibility. Queries in different categories would return results from pages that have been determined to be relevant to the query from within the same categories.

The patent application is [System and method for determining initial relevance of a document with respect to a given category](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060195439%22.PGNR.&OS=DN/20060195439&RS=DN/20060195439). (US Patent Application 20060195439, Published August 31, 2006, Filed on February 28, 2005)

The inventor listed is Erik Selberg.

The abstract tells us that this patent covers:


> A system and method are provided for determining document relevance determination to a selected category for a document contained within a linked network of documents. The network may be represented by a network map including nodes representing documents and edges representing links between the documents. The method may include identifying each node in the network map known to belong to the selected category, identifying each node known to be outside of the selected category, and identifying nodes having an unknown category. The method may also include assigning a category rank based on the node category identification, identifying each link from each node and each link to each node, and assigning link weights based on the identified links. The method may additionally include determining node relevance to the selected category based on the assigned category rank and the assigned link weights. An origination domain and a destination domain for each link may be determined such that link weights are assigned for both incoming and outgoing links for each node.

In discussing how links and citations are used to determine the relevance of a site, with pages that are cited more frequently by others being considered more relevant than less frequently cited pages, it points out that this type of assumption relies upon each page being assigned an equal weight before looking at citations, and before considering link connections. This is the issue that the patent application attempts to address.


> The above-identified algorithm does not consider document content in its relevance determination. Accordingly, in the context of the World Wide Web, due to such factors as spam and web page proliferation, the algorithm has become less effective. Web page proliferation has included a large increase in category-specific pages. Accordingly, to improve on results and to consider the proliferation of category-specific web pages, a system has been developed that pre-seeds category-specific pages before running the page rank algorithm. For instance, the system might initially rank some page categories, for example, sports, news, or politics, higher than other pages, and subsequently execute the above-identified algorithm. This system can find the prior rank of a given document based on category.
>
> A problem with these existing solutions is their purely forward-looking nature. Existing solutions move forward and consider outgoing links from a node, but do not look backward in the linked network or consider incoming links. Furthermore, existing solutions fail to take advantage of known information to categorize documents. For example, existing solutions fail to consider whether links move from one domain to another. Furthermore, existing solutions fail to filter out undesirable items belonging to pre-selected categories, such as pornography and hate information sources. Thus, a solution is needed for determining initial relevance of a document concerning a given category while considering contextual information such as category and domain.

Categories could be such things as news, sports, opinion, shopping, and politics. There could also be a classification of pages as undesirable, in categories such as spam, phishing, porn, and hate. The patent notes that pages from some undesirable categories may be lumped together and removed from the index.
