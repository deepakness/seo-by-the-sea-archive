---
title: "IBM Granted Patent for Pagerank"
source_url: "https://www.seobythesea.com/2006/08/ibm-granted-patent-for-pagerank/"
slug: "ibm-granted-patent-for-pagerank"
date_published: "2006-08-13T11:28:32+00:00"
date_modified: "2020-11-03T16:36:44+00:00"
author: "Bill Slawski"
---

At the Eleventh International World Wide Web Conference, a poster from John Tomlin, Andrew Tomkins, Jasmine Novak, and Arvind Arasu was presented titled [PageRank Computation and the Structure of the Web: Experiments and Algorithms](http://www.w3c.ethz.ch/CDstore/www2002/poster/173.pdf) (pdf). The first three authors wrote the paper as IBM employees, and co-author Arvind Arasu is listed on the document as a member of the Computer Science Department at Stanford University.

Three of those four authors are listed as the inventors of a newly granted patent which describes a way to rapidly compute PageRank, which was filed with the US Patent Office around the same time as the presentation of the paper. [John Tomlin](http://web.archive.org/web/20100113131122/http://www-staff.it.uts.edu.au:80/~tomlin/) and Andrew Tomkins are now at Yahoo, and [Arvind Arasu](https://www.microsoft.com/en-us/research/people/arvinda/) is a researcher at Microsoft.

[System and method for rapid computation of PageRank](https://patents.google.com/patent/US7089252B2/en)
Invented by John Anthony Tomlin, Andrew S. Tomkins, and Arvind Arasu
Assigned to IBM
US Patent 7,089,252
Granted August 8, 2006
Filed April 25, 2002

Abstract


> A method of ranking a plurality of linked documents. The method comprises obtaining a plurality of documents and determining a rank of each document.
>
> The rank of each document is generally a function of a rank of all other documents in the plurality of documents which point to the document and is determined by solving, by equation-solving methods (including Gauss-Seidel iteration and partitioning) of a set of equations wherein:.alpha..alpha..times..times..times..times. ##EQU00001## where x.sub.i is the rank of the page indexed by i, .alpha. is a number strictly between 0 and 1.0, the summation is over all indices j such that page j points to page i, and a.sub.ij is defined to be the reciprocal of the number of links pointing out from page j (denoted d.sub.j) if page j points to page i, and zero otherwise.

Rather than describing what the patent contains, I’m going to recommend looking at the paper I refer to in the first paragraph of this post, which is an excellent summary of many of the ideas in the patent. Both patent and paper discuss how difficult it is to compute PageRank for all of the pages on the web, and offer a few solutions which increase speed while also reducing possible errors. As the authors note in a “conclusion” within the patent:


> The present invention is directed to the web-scale computation of the PageRank static ranking function, incorporating both algorithmic techniques drawn from numerical analysis, and particular structure in the problem instance drawn from web characterization.
>
> Algorithmically, the features of the present invention approach the problem using equation solving rather than eigensystem techniques.
>
> This approach yields significant performance improvements overpower iteration. Further, it allows exploitation of the well-known “bow-tie” characterization of the web to partition the problem into independent subproblems.
>
> Finally, the characterization of the expansion properties of the graph as a whole versus the graph of inter-site connectivity explains the poor performance of power iteration.

For any who read the patent and paper and want to delve deeper, the following are cited in the patent as references:

U.S. Patent Documents

- [Method for node ranking in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6285999), patent 6,285,999, invented by Lawrence Page, granted September 2001
- [Method and apparatus for ranking Web page search results](https://patents.google.com/patent/US6560600B1/en), patent 6,560,600, invented by Andrei Z. Broder, granted May 2003
- [Method and apparatus for inerative training of a classification system](http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=%2Fnetahtml%%2FPTO%%2Fsearch-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN%2F6571229), patent 6,571,229, invented by William Michael Campbell, granted May 2003
- [System and method for ranking hyperlinked documents based on a stochastic backoff processes](https://patents.google.com/patent/US6792419B1/en), patent 6,792,419, invented by Prabhakar Raghavan, granted September 2004
- [Ranking nodes in a graph](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220030050909%22.PGNR.&OS=DN/20030050909&RS=DN/20030050909), patent application document 20030050909, invented by Mihai Preda, published March 2003

Other References

- [Finding Authorities and Hubs From Link Structures on the World Wide Web](http://www10.org/cdrom/papers/pdf/p314.pdf)
