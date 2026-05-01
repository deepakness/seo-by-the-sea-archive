---
title: "Google's Adaptive PageRank Patent"
source_url: "https://www.seobythesea.com/2006/04/googles-adaptive-pagerank-patent/"
slug: "googles-adaptive-pagerank-patent"
date_published: "2006-04-18T10:00:59+00:00"
date_modified: "2021-05-01T20:18:28+00:00"
author: "Bill Slawski"
---

*Added July 16, 2019* Yesterday a story at Search Engine Roundtable told us: [Former Google Engineer: Google Hasn’t Used PageRank Since 2006](https://www.seroundtable.com/google-hasnt-used-pagerank-since-2006-27891.html). There was a new version of PageRank which I wrote about in 2006, not the adaptive PageRank that this post is about, but a different method of calculating PageRank in the post, [PageRank Update](https://www.seobythesea.com/2018/04/pagerank-updated/).

The Google Search Engineer who posted that about PageRank, Jonathan Tang included some more information at Hacker News about that change to the algorithm behind PageRank.


> The comments here that PageRank is Google’s secret sauce also aren’t true – Google hasn’t used PageRank since 2006. The ones about the search & clickthrough data being important are closer, but I suspect that if you made that public, you still wouldn’t have an effective Google competitor.

Tang told us this about the change away from that version of PageRank:


> They replaced it in 2006 with an algorithm that gives approximately similar results but is significantly faster to compute. The replacement algorithm is the number reported in the toolbar and what Google claims as PageRank (it even has a similar name, and so Google’s claim isn’t technically incorrect). Both algorithms are O(N log N), but the replacement has a much smaller constant on the log N factor because it does away with the need to iterate until the algorithm converges. That’s fairly important as the web grew from ~1-10M pages to 150B+.

That last reason seems to fit this adaptive PageRank very well.


## Google’s Adaptive Pagerank Patent

Google was granted a new patent involving PageRank last week, which appears to focus upon a paper from April of 2003, [Adaptive Methods for the Computation of PageRank](http://web.archive.org/web/20160330014255/http://ilpubs.stanford.edu:8090/774/1/2003-26.pdf).

The paper does a nice job of describing what they were aiming at with this patent – a faster way of assigning query-independent rankings of value to pages on the web, based upon links to those pages – in short, an adaptive PageRank. This work doesn’t aim at changing rankings or determinations of the relevance of web pages but is instead aimed at making the computational elements of calculating rankings cheaper and faster.

While the methods and processes described in the patent aren’t anything new, it’s interesting to see how the ideas in the paper can be implemented as part of a search engine. The adaptive PageRank patent provides a nice overview of how a search engine functions, covering topics such as crawling, filtering, indexing, index partitioning, caching, mapping links, and serving pages.

It then dives into the method they have devised to take advantage of the observation they made that some pages take less time and fewer recalculations of PageRank to reach their final PageRank. As the authors note in the paper:


> That is, many pages converge quickly, with a few pages taking much longer to converge. Furthermore, the pages that converge slowly are generally those pages with high PageRank.

The patent cited references many other papers and patents, and I’ve linked to those below if you would like to follow the evolution of the work that helped lead to this adaptive PageRank patent and paper. While the patent mentions personalization, it doesn’t cover the topic in much depth. It also doesn’t address historical data, seasonality, burstiness, user behavior, and other areas that we’ve seen included in other papers and patent applications from academia and patent filings.

[Adaptive computation of ranking](https://patents.google.com/patent/US7028029B2/en)
Inventors: Sepandar D. Kamvar, Taher Haveliwala, and Gene H. Golub
Assigned to Google Inc.
US Patent 7,028,029
Granted April 11, 2006
Filed: August 23, 2004

Abstract


> A system and method are disclosed. A ranking function for a set of document rank values is iteratively solved concerning a set of linked documents until a first stability condition is satisfied. After such a condition is satisfied, some of the ranks will have converged. The ranking function is modified to consider these converged ranks to reduce the ranking function’s computation cost. The modified ranking function is then solved until a second stability condition is satisfied. After such a condition is satisfied, more of the ranks will have converged. The ranking function is again modified, and the process continues until complete.

The adaptive PageRank patent also notes that it is related to [Methods for ranking nodes in large directed graphs](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=646331.APN.&OS=apn/646331&RS=APN/646331), published February 10, 2005, and invented by Sepandar D. Kamvar, Taher Haveliwala, Glen Jeh, and Gene H. Golub

U.S. patents and patent applications cited in the adaptive PageRank patent:

- [Method and system for identifying authoritative information resources in an environment with content-based links between information resources](https://patents.google.com/patent/US6112202)
   Patent number 6112202
   Granted August 2000
   Inventor Jon Michael Kleinberg
- [Method for node ranking in a linked database](https://patents.google.com/patent/US6285999)
   Patent number 6285999
   Granted September 2001
   Inventor Lawrence Page
- [Method and apparatus for ranking Web page search results](https://patents.google.com/patent/US6560600B1/en)
   Patent number 6560600
   Granted May 2003
   Inventor Andrei Z. Broder
- [Method and apparatus to retrieve information from a network](http://patft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml&r=1&f=G&l=50&d=PALL&S1=6584468.PN.&OS=PN/6584468&RS=PN/6584468)
   Patent number 6584468
   Granted June 2003
   Inventors Kaigham J. Gabriel, Evan M. Indianer, Christopher M. Umbel, and Joel Lenhart
- [Method for scoring documents in a linked database](https://patents.google.com/patent/US6799176B1/en)
   Patent number 6799176
   Granted September 2004
   Inventor Lawrence Page
- [Method and apparatus for ranking web page search results](http://patft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml&r=1&f=G&l=50&d=PALL&S1=6871202.PN.&OS=PN/6871202&RS=PN/6871202)
   Patent number 6871202
   Granted March 2005
   Inventor Andrei Z. Broder
- [System and method for rapid computation of PageRank](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220030204502%22.PGNR.&OS=DN/20030204502&RS=DN/20030204502)
   Published October 2003
   Inventors John Anthony Tomlin, Andrew S. Tomkins, and Arvind Arasu
- [Directory services searching system and methods](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220030208478%22.PGNR.&OS=DN/20030208478&RS=DN/20030208478)
   Published November 2003
   Inventor Richard Hans Harvey
- [Systems and methods of retrieving relevant information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220030208482%22.PGNR.&OS=DN/20030208482&RS=DN/20030208482)
   Published, November 2003
   Inventors Brian S. Kim, Sudong Chung, Anurag Dod, Michael Kim, and Yeogirl Yun
- [Method and apparatus for search ranking using human input and automated ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040024752%22.PGNR.&OS=DN/20040024752&RS=DN/20040024752)
   Published February 2004
   Inventors Udi Manber and Chi-Chao Chang
- [Method and apparatus for ranking web page search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040111412%22.PGNR.&OS=DN/20040111412&RS=DN/20040111412)
   Published June 2004
   Inventor Andrei Z. Broder

Last Updated July 16, 2019.

Other cited references:

- [PageRank Computation and the Structure of the Web: Experiments and Algorithms](http://www.w3c.ethz.ch/CDstore/www2002/poster/173.pdf) (pdf)
- [Improved Algorithms for Topic Distillation in a Hyperlinked Environment](https://infoscience.epfl.ch/record/99346)
- [Efficient Computation of PageRank](http://web.archive.org/web/20120417033845/http://ilpubs.stanford.edu:8090/386/1/1999-31.pdf)
- [Topic Sensitive PageRank](http://infolab.stanford.edu/~taherh/papers/topic-sensitive-pagerank-tkde.pdf)
- [The Second Eigenvalue of the Google Matrix](https://nlp.stanford.edu/pubs/secondeigenvalue.pdf)
- [Scaling Personalized Web Search](http://infolab.stanford.edu/~glenj/spws.pdf)
- [Exploiting the Block Structure of the Web for Computing PageRank](https://nlp.stanford.edu/pubs/blockrank.pdf)
- [Extrapolation Methods for Accelerating PageRank Computations](http://web.archive.org/web/20160328114015/http://ilpubs.stanford.edu:8090/579/1/2003-17.pdf)
- [The PageRank Citation Ranking: Bringing Order to the Web](http://web.archive.org/web/20170106094458/http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf)
