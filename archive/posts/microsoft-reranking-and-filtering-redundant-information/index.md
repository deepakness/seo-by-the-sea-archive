---
title: "Microsoft Reranking and Information Redundancy"
source_url: "https://www.seobythesea.com/2006/06/microsoft-reranking-and-filtering-redundant-information/"
slug: "microsoft-reranking-and-filtering-redundant-information"
date_published: "2006-06-05T21:18:21+00:00"
date_modified: "2020-08-04T15:05:37+00:00"
author: "Bill Slawski"
---

How much variety should you see in search results? Should search engines mix things up a little, so when you look for something with a search, you don’t see results that are all exactly about the same thing? Should pages in those results that seem too far off-topic be pushed back in the results?

Imagine performing a search at MSN, with the search engine responding to your query by gathering links to pages, and descriptions of those pages, then it takes a closer look at the content of those documents and sorts them in a different order

For example, searching for “Abraham Lincoln,” you might see pages about the following within returned documents:

- About someone’s cat, named Abraham Lincoln,
- The Abraham Lincoln Theme Park,
- A website selling Abraham Lincoln memorabilia, and;
- And other pages only somewhat related.

If the first three or four results you received from MSN were about pets named after the President, and the next four or five were about the theme park, that might not be what you expected to see.

A new patent from Microsoft tries to rerank and filter search results based upon redundant information.

When someone types a query during a search engine, they often receive more than one document that either satisfies or partially satisfies that query. The “information redundancy” this patent filing describes means receiving documents with a great deal of overlap of content, some of which could be unrelated or only partially related to what the searcher hoped to find.

One idea behind this patent filing is that when a searcher finds some information in one document, they shouldn’t have to waste time looking at the same information in many other documents.

[Utilizing information redundancy to improve text searches](https://patents.google.com/patent/US7051014B2/en)
Inventors: Eric D. Brill and Susan T. Dumais
Assigned to Microsoft Corporation
US Patent 7,051,014
Granted May 23, 2006
Filed: June 18, 2003

Abstract


> Architecture for improving text searches using information redundancy. A search component is coupled with an analysis component to rerank documents returned in a search according to redundancy values.
>
> Each returned document is used to develop a corresponding word probability distribution that is further used to rerank the returned documents according to the associated redundancy values.
>
> In another aspect thereof, the query component is coupled with a projection component to project answer redundancy from one document search to another. This includes obtaining the benefit of considerable answer redundancy from a second data source by projecting the success of the search of the second data source against a first data source.


## Related Patent Application

Before the patent starts telling us how this redundancy filtering works, it tells us a little about a related patent application and provides a list of patent filings and documents referenced by this document. I’ve listed those referenced documents at the end of this post. Here’s a link to the related patent filing:

This Patent is related to pending U.S. patent application [Architecture for generating responses to search engine queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040254917%22.PGNR.&OS=DN/20040254917&RS=DN/20040254917) filed on June 13, 2003. It’s interesting in that it tries to understand questions and provide useful answers to them.


## How Information Redundancy is Identified and Used

The results received from a query are looked at, and a word probability distribution is created for a certain number of documents returned. Those are compared, and when there are documents that are too similar, some are filtered out. Documents that are too dissimilar may be pushed back in the rankings and considered off-topic. Here’s how the patent filing summarizes this information redundancy process.


> For example, information content for a document can be expressed according to a similarity value–the more similar information content of a document in a return set is to other documents in the return set (e.g., a set of documents returned by a search engine for the query “Abraham Lincoln”), the more likely the document is to be a good document for a particular query.
>
> Thus if, for example, there are one hundred returned documents ten of which arc truly about Abraham Lincoln and ninety of which are documents that just randomly mention Abraham Lincoln, each of the ninety less relevant documents will have a low information redundancy value concerning other returned documents, whereas the ten on-topic return documents will have high information redundancy value, as least concerning the other relevant documents.

So, some level of redundancy is used to identify what documents are “on topic.” If there isn’t a high level of redundancy amongst the results being looked at, the search engine may perform a refined search, looking for more documents that it believes are more “on-topic.” This second set of search results may follow some of the ideas in the related patent above, that tries to find “good answers” to queries.


## U.S. Patent Documents cited

- [Technique for providing enhanced relevance information for documents retrieved in a multi database search](https://patents.google.com/patent/US6006217A/en) (6006217) Granted December 1999, Lumsden
- [FAQ link creation between user’s questions and answers](http://patft1.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6028601) (6028601) Granted February 2000, Machiraju et al.
- [Method and system for weighting the search results of a database search engine](http://patft1.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6182065) (6182065) Granted January 2001, Yeomans
- [Natural language dialogue apparatus and method](http://patft1.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6466899) (6466899) Granted October 2002, Yano et al.
- [Method for reducing search results by manually or automatically excluding previously presented search results](http://patft1.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6487553) (6487553) granted November 2002, Emens et al.
- [Methods and apparatus for performing an affinity based similarity search](http://patft1.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6587848) (6587848) Granted July 2003, Aggarwal et al.
- [System and method of ranking and retrieving documents based on authority scores of schemas and documents](https://patents.google.com/patent/US6601075B1/en) (6601075) Granted July 2003, Huang et al.


## Other Information Redundancy References

- S Dumais, M. Banko, E. Brill, J. Lin, and A. Ng. [Web Question Answering: Is More Always Better?](https://www.egr.msu.edu/~jchai/QAPapers/Microsoft-SIGIR02.pdf) (pdf) Proceedings of the 25th annual ACM SIGIR Conference, pp. 291-298, 2002. cited by other.
- A. Arasu, J. Cho, H. Garcia-Molina, A. Paepcke, and S. Raghavan. Searching the Web. ACM Transactions on Internet Technology, vol. 1 Issue 1, pp. 2-43, 2001. cited by other.
- Jonathan Foote, Matthew Cooper, and Unjung Nam. [Audio Retrieval by Rythmic Similarity](https://www.fxpal.com/publications/FXPAL-PR-02-172.pdf) (pdf). Proceedings of the 3rd Annual Conference on Music Information Retrieval, IRCAM-Centre Pompidou, 2002. 2 pages. cited by other.
