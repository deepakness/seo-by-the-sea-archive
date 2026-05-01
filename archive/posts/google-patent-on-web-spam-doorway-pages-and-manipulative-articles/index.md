---
title: "Google on Webspam, Doorway Pages, and Manipulative Articles"
source_url: "https://www.seobythesea.com/2007/11/google-patent-on-web-spam-doorway-pages-and-manipulative-articles/"
slug: "google-patent-on-web-spam-doorway-pages-and-manipulative-articles"
date_published: "2007-11-27T15:29:51+00:00"
date_modified: "2022-01-07T12:51:30+00:00"
author: "Bill Slawski"
---

## How May Google Handle Manipulative Articles and Doorway Pages it Finds on the Web?

A patent granted to Google today explores Webspam and manipulative articles and links on the Web. It describes how the rankings of pages may be influenced if they are identified as “manipulative.”

The identification of manipulative articles and how they might be grouped, and how they could be treated by the search engine is described in some detail. That treatment might include removing pages from the search index, reducing rankings for pages, and possibly a change in how quality scores (PageRank) are calculated for links from manipulative articles.

The patent was filed almost 4 years ago, on December 10, 2003, and wasn’t granted until today.

A good number of papers and patent applications have been published since then on Webspam, and have explored more detailed approaches, but this patent is interesting in that captures some aspects of how Google may have been detecting and fighting Web spam over the past few years (and may still be).

Here is the manipulative articles patent:

[Methods and systems for identifying manipulated articles](https://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040024752%22.PGNR.&OS=DN/20040024752&RS=DN/20040024752)
Invented by Monika Henzinger, Alexander Mark Franz
Assigned to Google
US Patent 7,302,645

Abstract


> Systems and methods that identify manipulated articles are described. In one embodiment, a search engine implements a method comprising determining at least one cluster comprising a plurality of articles, analyzing signals to determine an overall signal for the cluster, and determining if the articles are manipulated articles based at least in part on the overall signal.

These are a few of the manipulative techniques that the patent identifies:

- Use of a domain name of a once legitimate site,
- Filling the text of pages or anchor text from links in the page with certain popular query terms,
- Automatically creating links from other pages to the manipulated page, and;
- Showing a different page to a web crawler than to human visitors.

The patent also provides us with one definition of Webspam:


> These manipulated documents can be referred to as spam. When a user receives a manipulated document in the search results and clicks on the link to go to the manipulated document, the document is very often an advertisement for goods or services unrelated to the search query or a pornography website or the manipulated document automatically forwards the user on to a website unrelated to the user’s query.

The harm to a search engine from manipulative articles is that a searcher’s experience with the search engine can be degraded if the search engine returns search results set containing manipulated articles.


## Clustered and Doorway pages

One part of this process might be for the search engine to identify clusters of documents that may be related to each other somehow, such as being on the same web host, or being interlinked at [doorway pages](https://www.searchenginewatch.com/2007/03/02/what-are-doorway-pages/) and articles targeted by those doorway pages.

For clusters that are identified, signals that manipulation is happening on pages within those clusters are explored, and an overall signal for the cluster may be determined. Signals can exist within documents contained in a cluster, and from documents outside of the cluster pointing into it:


> The signals can comprise outside signals and document signals. Outside signals can be signals associated with the cluster, but not from the individual documents in the cluster, and document signals can be signals from the documents in the cluster. In one embodiment, the overall signal is determined for a subset of articles in the cluster.

A score or “overall signal” can be calculated a few different ways, and the magnitude of that signal may determine how the search engine ends up treating pages within a cluster:


> The overall signal is used at least partly to determine if the articles are manipulated. The overall signal can represent to what grade the page is considered to be manipulated or it can be used together with a threshold to determine whether the article is manipulated. The overall signal can be used at least in part in a ranking of an article in the cluster in response to a search query.
>
> In one embodiment, a cluster is determined by computing a dense bipartite subgraph of articles comprising doorway articles and target articles, wherein the doorway articles contain links to the target articles. In one embodiment, a cluster is determined at least in part by identifying all of the documents on a host, where the host is likely to contain manipulated articles.

It’s possible that if there are doorway pages found which target documents located on other domains, those other domains might be included within the same cluster.

A cluster may also be created by “performing a search for manipulated documents and forming a cluster based on the search result set.”

**Outside Signals Pointing to Clusters**

There may be some outside signals that point to a cluster that might tell a search engine if it is a manipulated article, such as a high number of links on guestbook pages pointing to pages within the cluster. The patent tells us that other outside signals might also be determined.

One potential issue with this approach that the patent doesn’t discuss is that those “outside” signals might not be created by the owners of the pages being pointed towards, or anyone acting on their behalf.

Can links pointed towards your pages harm your site, even if someone else creates those links? Perhaps that’s partially why the patent also looks at signals of manipulation found upon pages within clusters, too.


## Individual Document Signals

These signals may be determined automatically for all of the pages in the cluster, or only a subset of pages may be evaluated for document signals. Document signals are ones that indicate that the document may be a manipulative article.

Here are some examples provided in the patent:

*The text of the document* –whether it appears to be normal English (or other languages), generated by a computer, such as containing a large number of keywords and not containing any sentences.

*Meta tags* — whether the page has meta tags, and if so whether those contain a large number of repeated keywords.

*Redirects* — whether there are scripts in the document that redirects a user to another document upon when they access that page.

*Similarly colored text and background* — whether there is a large amount of text in the document that is the same color as the background of the document.

*A large number of random links* — whether the document contains a large number of unrelated links, though what “unrelated” might mean isn’t defined here.

*History of the document* — whether the text of the document, the link structure of the document, or the ownership of the website on which the document appears has changed recently.

*Anchor text* — whether a lot of links appear on the page, and there is very little or no text that is not anchor text.

**Determining an overall signal for a cluster**

The outside signals and the document signals are evaluated, and an overall signal (or score) is created for each cluster.

As an example, the percentage of documents within the cluster that contain a certain document signal might play into this determination, such as:

- The percentage of documents that only contain text that is anchor text,
- the percentage of documents that have meta tags, and;
- the percentage of documents that cause a redirect.

Other signals might also be looked at in combination with those, such as whether a document’s ownership has recently and whether the document’s out link structure has also recently changed.

**Marking clusters or subsets within clusters as manipulated**

If a cluster or subset of that cluster is determined to be manipulated, either manually, or through an automated machine learning process, documents within the cluster or subset might be marked as manipulated.

If the signal involving manipulation is weak, a manual review might take place to check for manipulation. If it is stronger, then all of the documents within the cluster or subset may be declared manipulated without manual review.

**How a manipulation indicator can impact a page during retrieval and ranking by the search engine**

Being marked as a manipulated page might mean that indicator will be:

a) Used in a ranking function to lower the rank of a page.

b) Used as an indication that the page should be removed entirely from the search results.

c) Used to treat the document differently, like not including it in a hyperlink structure-based ranking calculation, such as PageRank. (The patent here doesn’t say anything about just lowering the toolbar PageRank, but that could be a possibility, too.)

d) Used differently depending on the query, so for example, if the query relates to pornography, the manipulation indicator may not be used.

e) Used in a variety of other ways during the retrieval and ranking processes.

**Why Cluster?**

Some pages within a host or an interlinked set manipulative articles may have no signals of manipulation attached to them. But if they are enough related to pages that do, then chances are that they should be included within that cluster, and marked as manipulated also.

Other signals might also be identified by looking at the percentage of documents within a cluster that have a particular signal.


## References within the Patent

Granted patents commonly have a “References Cited” section which includes lists of documents, granted patents, and patent applications that may have been referred to by the inventors, or explored by the patent examiner during the patent process.

I’ve listed and linked to most of the documents in the reference section of this patent except for three Wikipedia pages – one of them seems to no longer exist, and the other two have been changed since the time that they were accessed.

The documents aren’t necessarily tied to the creation of this patent, but I started looking through them and found them interesting enough to include in this post.

The text accompanying the patents and patent applications are the abstracts from those documents.

**Documents listed as references in the patent**

- Brin, Sergey et al., [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html),” 1998, Computer Science Department, Stanford University, Stanford, CA.
- Bryan, Kurt and Leise, Tanya, “[The $25,000,000,000.star-solid. Eigenvector The Linear Algebra Behind Google](https://www.rose-hulman.edu/~bryan/googleFinalVersionFixed.pdf),” Society for Industrial and Applied Mathematics. vol. 48,No. 3,pp. 569-581, 13 pages.
- Dourisbourne, et al. “[Extraction and Classification of Dense Communities in the Web](http://wwwold.iit.cnr.it/staff/marco.pellegrini/papiri/www015-pellegrini.pdf),” WWW 2007, May 8-12, 2007, Banff, Alberta Canada, 10 pages.
- Fetterly, et al., “[Spam, Damn Spam, and Statistics](https://www.microsoft.com/en-us/research/publication/spam-damn-spam-and-statistics-using-statistical-analysis-to-locate-spam-web-pages/),” Seventh Int’l Workshop on the Web and Databases, (WebDB 2004) Jun. 17-18, 2004, Paris, France. 6 pages.
- Gibson, et al., “Discovering Large Dense Subparagraphs in Massive Graphs,” Proceedings of the 31.sup.st VLDB Conference, Trondheim, Norway, 2005, 12 pages.
- Henzinger, et al., “[Challenges in Web Search Engines](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/10580.pdf),” Oct. 17, 2002, 14 pages.

**The granted patents referenced in the patent**

[Method for organizing information](https://patents.google.com/patent/US6006222A/en)
(6,006,222), Granted December 21, 1999

Abstract

A method of organizing information in which the search activity of a user is monitored and such activity is used to organize articles in a subsequent search by the same or another user who enters a similar search query. The invention operates by assigning scores to articles under the key terms in the index. As users enter search queries and select articles, the scores are altered.

The scores are then used in subsequent searches to organize the articles that match a search query. As millions of people use the Internet, type in millions of search queries, and display or select from the many articles available over the Internet, the ranks the information available over the Internet through an evolutionary process. The invention includes additional embodiments which incorporate category key terms and rating key terms.

[Method for organizing information](https://patents.google.com/patent/US6014665A/en)
(6,014,665), Granted January 11, 2000

Abstract

A method of organizing information in which the search activity of users is monitored and such activity is used to suggest additional key terms for addition to a search query. The invention operates by assigning scores to key term groupings in an index. As users enter search queries of two or more key terms, the scores are altered.

The scores are then used in subsequent searches to suggest other key terms that can be added to the search query to narrow the search. As millions of people use the Internet and type in millions of search queries, the invention learns which key terms should be suggested for addition to a search query through an evolutionary process.

[Management and analysis of document information text](https://patents.google.com/patent/US6038561A/en)
(6,038,561), Granted March 14, 2000

Abstract

An interactive system for analyzing and displaying information contained in a plurality of documents employing both term-based analysis and conceptual-representation analysis. Particulars of the invention are especially effective for analyzing patent texts, such as patent claims, abstracts, and other portions of a patent document.

[Method for organizing information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,078,916.PN.&OS=pn/6,078,916&RS=PN/6,078,916)
(6,078,916), Granted June 20, 2000

Abstract

A method of organizing information in which the search activity of a user is monitored and such activity is used to organize articles in a subsequent search. The invention operates by assigning scores to articles under key term components in an index. As users enter search queries and select articles, the scores are altered according to, among other things, the amount of time spent inspecting an article, whether the article is the last one inspected, how many articles are ranked higher than the article, how many articles have been previously inspected by the user, and whether an advertising banner was selected by the user.

The scores are then used in subsequent searches to organize the articles that match a search query. As millions of people use the Internet, type in millions of search queries, and display or select the many articles available over the Internet, the present invention uses this search activity to rank information available over the Internet through an evolutionary process. The invention includes additional embodiments which incorporate category key terms and rating key terms.

[Personalized search methods](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,182,068.PN.&OS=pn/6,182,068&RS=PN/6,182,068)
(6,182,068), Granted January 30, 2001

Abstract

A method of organizing information in which the search activity of previous users is monitored and such activity is used to organize articles for future users. Personal data about future users can be used to provide different article rankings depending on the search activity and personal data of the previous users.

[Method and apparatus for dynamically counting large itemsets](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,185,559.PN.&OS=pn/6,185,559&RS=PN/6,185,559)
(6,185,559), Granted February 6, 2001

Abstract

The present invention is directed to a data mining method and apparatus that dynamically initiates the counting of sets of items (itemsets) at any time during the pass over the records of a database and terminates the counting at the same location in the next pass.

In this manner, the present invention begins to count itemsets early and finishes counting early while keeping the number of different itemsets that are being counted in any pass relatively low.

[Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en)
(6,285,999), Granted September 4, 2001

Abstract

A method assigns importance ranks to nodes in a linked database, such as any database of documents containing citations, the world wide web or any other hypermedia database. The rank assigned to a document is calculated from the ranks of documents citing it.

Also, the rank of a document is calculated from a constant representing the probability that a browser through the database will randomly jump to the document. The method is particularly useful in enhancing the performance of search engine results for hypermedia databases, such as the world wide web, whose documents have a large variation in quality.

[System and method for providing customized electronic newspapers and target advertisements](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,460,036.PN.&OS=pn/6,460,036&RS=PN/6,460,036)
(6,460,036), Granted October 1, 2002

Abstract

This invention relates to customized electronic identification of desirable objects, such as news articles, in an electronic media environment, and in particular to a system that automatically constructs both a “target profile” for each target object in the electronic media based, for example, on the frequency with which each word appears in an article relative to its overall frequency of use in all articles, as well as a “target profile interest summary” for each user, which target profile interest summary describes the user’s interest level in various types of target objects.

The system then evaluates the target profiles against the users’ target profile interest summaries to generate a user-customized rank-ordered listing of target objects most likely to be of interest to each user so that the user can select from among these potentially relevant target objects, which were automatically selected by this system from the plethora of target objects that are profiled on the electronic media.

Users’ target profile interest summaries can be used to efficiently organize the distribution of information in a large scale system consisting of many users interconnected utilizing a communication network. Additionally, a cryptographically-based pseudonym proxy server is provided to ensure the privacy of a user’s target profile interest summary, by giving the user control over the ability of third parties to access this summary and to identify or contact the user.

[Ranking search results by reranking the results based on local inter-connectivity](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,526,440.PN.&OS=pn/6,526,440&RS=PN/6,526,440)
(6,526,440), Granted February 25, 2003

Abstract

A search engine for searching a corpus improves the relevancy of the results by refining a standard relevancy score based on the interconnectivity of the initially returned set of documents. The search engine obtains an initial set of relevant documents by matching a user’s search terms to an index of a corpus.

A re-ranking component in the search engine then refines the initially returned document rankings so that documents that are frequently cited in the initial set of relevant documents are preferred over documents that are less frequently cited within the initial set.

[Methods and apparatus for using a modified index to provide search results in response to an ambiguous search query](https://patents.google.com/patent/US6529903B2/en)
(6,529,903), Granted March 4, 2003

Abstract

A system allows a user to submit an ambiguous search query and to receive potentially disambiguated search results. In one implementation, a search engine’s conventional alphanumeric index is translated into a second index that is ambiguous in the same manner as which the user’s input is ambiguous.

The user’s ambiguous search query is compared to this ambiguous index, and the corresponding documents are provided to the user as search results.

[System and method for clustering data objects in a collection](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,598,054.PN.&OS=pn/6,598,054&RS=PN/6,598,054)
(6,598,054), Granted July 22, 2003

Abstract

A system and method for browsing, retrieving, and recommending information from a collection uses multi-modal features of the documents in the collection, as well as an analysis of users’ prior browsing and retrieval behavior.

The system and method are premised on various disclosed methods for quantitatively representing documents in a document collection as vectors in multi-dimensional vector spaces, determining similarity between documents, and clustering documents according to those similarities.

The system and method also rely on methods for quantitatively representing users in a user population, quantitatively determining similarity between users, clustering users according to those similarities, and visually representing clusters of users by analogy to clusters of documents.

[Detecting query-specific duplicate documents](http://web.archive.org/web/20150910043313/http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6615209)
(6,615,209), Granted September 2, 2003

Abstract

An improved duplicate detection technique that uses query-relevant information to limit the portion(s) of documents to be compared for similarity is described. Before comparing two documents for similarity, the content of these documents may be condensed based on the query.

In one embodiment, query-relevant information or text (also referred to as “snippets”) is extracted from the documents and only the extracted snippets, rather than the entire documents, are compared for purposes of determining similarity.

[Detecting duplicate and near-duplicate files](http://web.archive.org/web/20150910104348/http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6658423)
(6,658,423) Granted December 2, 2003

Abstract

Improved duplicate and near-duplicate detection techniques may assign several fingerprints to a given document by (i) extracting parts from the document, (ii) assigning the extracted parts to one or more of a predetermined number of lists, and (iii) generating a fingerprint from each of the populated lists. Two documents may be considered to be near-duplicates if any one of their fingerprints matches.

[Information extraction from a database](http://web.archive.org/web/20150915165726/http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6678681)
(6,678,681), Granted January 13, 2004

Abstract

Techniques for extracting information from a database are provided. A database such as the Web is searched for occurrences of tuples of information. The occurrences of the tuples of information that were found in the database are analyzed to identify a pattern in which the tuples of information were stored.

Additional tuples of information can then be extracted from the database utilizing the pattern. This process can be repeated with the additional tuples of information if desired.

[Ranking search results by reranking the results based on local inter-connectivity](http://web.archive.org/web/20150910104410/http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6725259)
(6,725,259), Granted April 20, 2004

Abstract

A search engine for searching a corpus improves the relevancy of the results by refining a standard relevancy score based on the interconnectivity of the initially returned set of documents. The search engine obtains an initial set of relevant documents by matching a user’s search terms to an index of a corpus.

A re-ranking component in the search engine then refines the initially returned document rankings so that documents that are frequently cited in the initial set of relevant documents are preferred over documents that are less frequently cited within the initial set.

[Techniques for finding related hyperlinked documents using link-based analysis](http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6754873)
(6,754,873), Granted June 22, 2004

Abstract

Techniques for finding related hyperlinked documents using link-based analysis are provided. Backlink and forward link sets can be utilized to find web pages that are related to a selected web page.

The scores for links from web pages that are from the same host and links from web pages with numerous links can be reduced to achieve a better list of related web pages. The list of related web pages can be utilized as a feature to a word-based search engine or an addition to a web browser

[Computer graphic display visualization system and method](http://web.archive.org/web/20150910104415/http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6868525)
(6,868,525), Granted March 15, 2005

Abstract

An improved human user computer interface system, providing a graphic representation of a hierarchy populated with naturally classified objects, having included therein at least one associated object having a distinct classification. Preferably, a collaborative filter is employed to define the appropriate associated object. The associated object preferably comprises a sponsored object, generating a subsidy or revenue.

**Patent Applications referred to in the patent**

[Methods and apparatus for using a modified index to provide search results in response to an ambiguous search query](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220020042791%22.PGNR.&OS=DN/20020042791&RS=DN/20020042791)
(20020042791), Published April 11, 2002

Abstract

A system allows a user to submit an ambiguous search query and to receive potentially disambiguated search results. In one implementation, a search engine’s conventional alphanumeric index is translated into a second index that is ambiguous in the same manner as which the user’s input is ambiguous. The user’s ambiguous search query is compared to this ambiguous index, and the corresponding documents are provided to the user as search results.

[Process for fabricating hollow electroactive devices](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220020059708%22.PGNR.&OS=DN/20020059708&RS=DN/20020059708)
(20020059708), Published May 23, 2002 (This one might be an error)

Abstract

A process for fabricating a ceramic electroactive transducer of a predetermined shape is disclosed. The process comprises the steps of providing a suitably shaped core having an outer surface, attaching a first conductor to the outer surface of the core, coating an inner conductive electrode on the outer surface of the core such that the inner conductive electrode is in electrical communication with the first conductor, coating a ceramic layer onto the inner electrode, thereafter sintering the ceramic layer, coating an outer electrode onto the sintered ceramic layer to produce an outer electrode that is not in electrical communication with the first conductor, and then poling the sintered ceramic layer across the inner electrode and the outer electrode to produce the ceramic electrode.

[Method and system for placing a purchase order over a communications network](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220020069114%22.PGNR.&OS=DN/20020069114&RS=DN/20020069114)
(20020069114), Published June 6, 2002

Abstract

A method and system for placing a purchase order with a product trader for a product over a communication network comprise accessing an information site on a shopping server using a shopping client and downloading program code for executing a shopping cart to the shopping client from the shopping server.

The program code when executed on the shopping client generates a purchase order interface for the user enabling a user to input product selection data and payment data. Order data is generated using the received selection data and payment data and at least the payment data is encrypted. The order data is then transmitted from the shopping client over the communications network to a location for reception by the product trader.

[Methods and apparatus for employing usage statistics in document retrieval](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220020123988%22.PGNR.&OS=DN/20020123988&RS=DN/20020123988)
(20020123988), Published September 5, 2002

Abstract

Methods and apparatus consistent with the invention provide an improved organization of documents responsive to a search query. In one embodiment, a search query is received and a list of responsive documents is identified. The responsive documents are organized based in whole or in part on usage statistics.

[Method and apparatus for search ranking using human input and automated ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220020133481%22.PGNR.&OS=DN/20020133481&RS=DN/20020133481Methods and apparatus for providing search results in response to an ambiguous search query</a><br /> (20020133481), Published September 19, 2002</p><p>Abstract</p><p>Methods and apparatus consistent with the invention allow a user to submit an ambiguous search query and to receive relevant search results. In one embodiment, a sequence of numbers received from a user of a standard telephone keypad is translated into a set of potentially corresponding alphanumeric sequences.</p><p>These potentially corresponding alphanumeric sequences are provided as an input to a conventional search engine, using a boolean “OR” expression, and the search results are presented to the user. The search engine effectively limits search results to those in which the user was likely interested.</p><p></a><a href=)
(20040024752), Published February 5, 2004

Abstract

A search system provides search results to searchers in response to search queries and the search results are ranked. The ranking is determined by an automated ranking process in combination with human editorial input.

A search system might comprise a query server for receiving a current query, a corpus of documents to which the current query is applied, ranking data storage for storing information from an editorial session involving a human editor and a reviewed query at least similar to the current query, and a rank adjuster for generating a ranking of documents returned from the corpus responsive to the current query taking into account at least the information from the editorial session.

[Methods and apparatus for displaying and replying to electronic messages](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040119740%22.PGNR.&OS=DN/20040119740&RS=DN/20040119740)
(20040119740), Published June 24, 2004

Abstract

Methods and apparatus are described for viewing and responding to electronic messages. In one embodiment, when an electronic message is displayed, a portion of the electronic message is elided to aid in the viewing experience.

In one embodiment, a method of viewing a first electronic message comprises: identifying an extraneous portion within a second electronic message; eliding the extraneous portion within the second electronic message; and generating the first electronic message wherein the first electronic message includes the second electronic message with the extraneous portion of the second electronic message suppressed.

[Method for searching media](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040122811%22.PGNR.&OS=DN/20040122811&RS=DN/20040122811)
(20040122811), Published June 24, 2004

Abstract

The present invention is directed to a computer-implemented method and apparatus for searching in response to Internet-based search queries using a search engine and an electronic database.

According to one example embodiment of the present invention, data sets representing published items are input, for example, scanned-in or sent electronically, and stored in a searchable database. Each data set includes text from at least one published item. Responsive to the search query, a search engine searches for and identifies relevant web pages and data sets representing published items, and, in a more specific embodiment, ranked characterizations are returned for the relevant web pages and published items. An electronic path can be provided with the published item for accessing further information about the published item.

In one embodiment, the electronic path is a hyperlink from a characterization of a relevant published item to a more complete electronic representation of the relevant published item. Publishers provide authorization to display copyrighted materials through a permission protocol.

[Serving advertisements using a search of advertiser Web information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040267725%22.PGNR.&OS=DN/20040267725&RS=DN/20040267725)
(20040267725), Published December 30, 2004

Abstract

Advertisers are permitted to put targeted ads on, or to serve ads in association with, various content such as search results pages, Web pages, e-mail, etc., without requiring the advertiser to enter and/or maintain certain targeting information, such as keyword targeting.

This may be accomplished by using a searchable data structure, such as an inverted index for example, of available advertiser Web information. The advertiser Web information may include terms and/or phrases extracted from the advertiser’s Website. In particular, a search query may be used to search for matching advertisers and therefore matching ads.

For example, the search query can be used to search an inverted index including words and/or phrases extracted from advertiser Websites. The advertiser Web page, or some other identifier, can be used as a key to search for an associated ad.

[Systems and methods for clustering search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050065959%22.PGNR.&OS=DN/20050065959&RS=DN/20050065959)
(20050065959), Published March 24, 2005

Abstract

A system forms search results clustered by address or telephone number. When clustering by address, the system may receive a search query and identify a geographical area of interest-based, at least in part, on the search query.

The system may identify documents that are associated with addresses located within the geographical area of interest, group the identified documents into clusters based, at least in part, on the addresses located within the geographical area of interest, and present the clusters as the search results.

When clustering by a telephone number, the system may receive a search query that includes at least one portion of a telephone number and identifies documents that are associated with telephone numbers that match the at least one portion of the telephone number. The system may group the identified documents into clusters based on the telephone numbers included in the identified documents and present the clusters as the search results.

[System and method for automatically targeting web-based advertisements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050071224%22.PGNR.&OS=DN/20050071224&RS=DN/20050071224)
(20050071224), Published March 31, 2005

Abstract

A system and method for automatically targeting Web-based advertisements are described. Advertisements are identified relative to a query, wherein identified advertisements describe characteristics relative to at least one of a product and a service. The advertisements are scored according to a match between the query and the characteristics of the identified advertisements. At least some of the advertisements are provided as Web-based content.

[Information retrieval based on historical data](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050071741%22.PGNR.&OS=DN/20050071741&RS=DN/20050071741)
(20050071741), published March 31, 2005

Abstract

A system identifies a document and obtains one or more types of history data associated with the document. The system may generate a score for the document-based, at least in part, on one or more types of history data.

[Using concepts for ad targeting](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050114198%22.PGNR.&OS=DN/20050114198&RS=DN/20050114198)
(20050114198), Published May 26, 2005

Abstract

Concept similarity may be used to help resolve ambiguities concerning ads served using, at least, keyword targeting. More specifically, concept similarity may be used to help determine ad relevancy and/or ad scores.
