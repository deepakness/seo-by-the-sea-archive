---
title: "Stanford Using the Block Structure of the Web for Computing PageRank"
source_url: "https://www.seobythesea.com/2007/05/stanfords-new-pagerank-patent/"
slug: "stanfords-new-pagerank-patent"
date_published: "2007-05-08T08:20:57+00:00"
date_modified: "2020-11-03T16:24:07+00:00"
author: "Bill Slawski"
---

Calculating PageRank takes a lot of time and computing power. If there was a way to speed up the process, it might make a significant difference to the amount of time that it takes to assign PageRank values to pages.

The original patents involving PageRank, [Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en) ([updated](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,058,628.PN.&OS=pn/7,058,628&RS=PN/7,058,628)) and [Method for scoring documents in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,799,176.PN.&OS=pn/6,799,176&RS=PN/6,799,176), have been joined by a newly granted patent that explores a faster method of calculating ranks for pages.

On the Web, most links between pages are between pages in the same domain. That’s an observation that the process in this new patent uses to its advantage.

[Methods for ranking nodes in large directed graphs](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,216,123.PN.&OS=pn/7,216,123&RS=PN/7,216,123)
Invented by Sepandar D. Kamvar, Taher H. Haveliwala, Glen Jeh, and Gene Golub
Assigned to Board of Trustees of the LeLand Stanford Junior University
US Patent 7,216,123
Granted May 8, 2007
Filed: August 22, 2003

Abstract


> Techniques for assigning ranks to nodes in a large linked database, such as worldwide web or any other hypermedia database, partition the nodes so that the link matrix has a predominantly block-diagonal form.
>
> Within each block, a local rank is computed for nodes in the block, possibly by a different computer in a distributed computing environment. A block rank is then estimated for each block as a whole, and may optionally include block-level weights to implement customized ranking.
>
> The local ranks and block ranks are then combined to form a global rank, which may be used to rank the nodes. Alternatively, a global rank vector for the database may be used as an initial vector in an iterative link-based ranking scheme to obtain more accurate global ranks for the nodes. The global rank vector may be divided to provide local rank vectors for use in subsequent applications of the method.

The process described isn’t new, with the patent having been filed in 2003, and there seems to be a good deal of overlap between the process described in the patent and a paper from researchers from Stanford published in 2003 – [Exploiting the Block Structure of the Web for Computing PageRank](https://nlp.stanford.edu/pubs/blockrank.pdf), by Sepandar D. Kamvar, Taher H. Haveliwala, Christopher D. Manning, and Gene H. Golub.

Here’s the abstract from Exploiting the Block Structure of the Web for Computing PageRank:


> The web link graph has a nested block structure: the vast majority of hyperlinks link pages on a host to other pages on the same host, and many of those that do not link pages within the same domain. We show how to exploit this structure to speed up the computation of PageRank by a 3-stage algorithm whereby
>
> (1) the local PageRanks of pages for each host are computed independently using the link structure of that host,
>
> (2) these local PageRanks are then weighted by the “importance” of the corresponding host, and
>
> (3) the standard PageRank algorithm is then run using as its starting vector the weighted concatenation of the local PageRanks.
>
> Empirically, this algorithm speeds up the computation of PageRank by a factor of 2 in realistic scenarios. Further, we develop a variant of this algorithm that efficiently computes many different “personalized” PageRanks and a variant that efficiently recomputes PageRank after node updates.

There have been many other papers from Stanford which explore ways to increase the speed with which PageRank can be calculated.

Perhaps the biggest takeaway from the issuance of this patent is that the original PageRank, described in the late 1990s in [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html) and [The PageRank Citation Ranking: Bringing Order to the Web](http://web.archive.org/web/20170106094458/http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf), has changed and evolved.

The processes that the major search engines follow to calculate a query independent score for pages (an indication of how important a page may be rather than how relevant it may be for a specific query) may not have followed along the same path as the academic research on the subject. But if you’re interested in how search engines rank pages, reading through the paper and patent (the paper is easier reading) may provide some interesting insights into possibilities along the evolutionary of processes involved in ranking Web pages.
