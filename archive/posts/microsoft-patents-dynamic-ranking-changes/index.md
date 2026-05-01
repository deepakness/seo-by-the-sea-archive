---
title: "Microsoft Patents Dynamic Ranking Changes"
source_url: "https://www.seobythesea.com/2006/05/microsoft-patents-dynamic-ranking-changes/"
slug: "microsoft-patents-dynamic-ranking-changes"
date_published: "2006-05-04T01:15:30+00:00"
date_modified: "2021-05-01T20:01:04+00:00"
author: "Bill Slawski"
---

**Infrastructure**

I spent too much time this past weekend paying attention to the NFL draft. Of course, television coverage of the two-day event isn’t “must-see TV,” but there were some surprises. One of them involved the fourth pick of the draft.


> According to the New York Daily News, the Jets view left tackle D’Brickashaw Ferguson as the infrastructure for their offense, which Matt Leinart was supposed to be a part of. The Jets worked the phones trying to move back into the top 10 to get the USC quarterback after selecting Ferguson.

The Jets got their lineman but missed out on the marquee name quarterback. It wasn’t an exciting choice, but probably a good move. We’ve heard for months about changes to the [infrastructure of Google](https://www.mattcutts.com/blog/bigdaddy-progress-update/), which is almost equally exciting. You know the lineman will help the team a lot, but you wished they picked that flashy quarterback or speedy running back.

There’s nothing quite like a good infrastructure on a search engine. It isn’t quite the same as an update, but it opens up a lot of possibilities.

**The importance of flexibility**


> The changes on Bigdaddy are relatively subtle (less ranking changes and more infrastructure changes). Most of the changes are under the hood, and this infrastructure prepares the framework for future improvements throughout the year. If you see a webspam or quality issue, let us know to work on it.

We’ve heard that word, infrastructure, a lot about Google’s recent [Big Daddy](https://www.mattcutts.com/blog/bigdaddy/) rollout but not a lot about what the folks at the Googleplex mean by it. Except that it’s supposed to give them a lot of flexibility to try out some different things.

We know what a lineman does and that a good one can make it easier for a quarterback to try different things and running back to dash off some great runs. But, what does an infrastructure change do for a search engine? The chances are that Google will keep some of the details of their infrastructure change quiet, but a recent patent granted to Microsoft gives us a look at something that could be considered an infrastructure update.

Consider that when a search system is set up, it basically performs three functions: crawling web pages, indexing those pages, and then serving them. Of course, there can be many variations in how it performs those tasks, but without a good infrastructure in place, it may be difficult to make changes to how a search engine proceeds with those functions.

Imagine that you want to try out different things with ranking pages. Instead of making many changes to the way your search engine works, you preset your ranking system or preset many different ranking systems and then just figuratively flip a switch. One of those new ranking algorithms is in place. Or you want to try ranking certain classes of web pages differently, and you choose those and have them work with the different ranking systems. There’s a lot of flexibility to that type of configurable system.

**The Dynamic Ranking Patent**

The “Background of the Invention” section of Microsoft’s patent, [System and method for providing search results with configurable scoring formula](http://patft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,039,631.PN.&OS=PN/7,039,631&RS=PN/7,039,631) (7,039,631), provides a nice broad overview of how search engines function, and why there was a need for the process described in the document.

Here are some of the issues:

- Page and query matches are given scores, and the scoring system is hard-coded into the scoring software, so changes to the formula require that the scoring software be rewritten and recompiled.
- Any changes to the scoring formula require that the operator of the scoring software be able to access the source code and recompile it.
- This is a broader level of access to the source code than the source code’s owner might desire, and encouraging frequent modifications to the source code, even minor ones, may allow bugs and errors to be introduced into the code.
- some systems can be “trained” and don’t need recompiling to change the formula, but the training process can be slow, and because of that, expensive in terms of machine time.

Of course, these are the types of things that good infrastructure can help resolve.

**Improved infrastructure in action**

The patent application describes how different ranking systems and ranking sets can be created and applied to queries. Here’s one example:


> In this example, rank set 800 contains the ranker objects that embody the principal scoring formulas to be used for most requests. Rank set 820, on the other hand, contains the ranker objects (i.e., scoring formulas) that are being used for a beta test of a new scoring strategy. Thus, for any given search performed, the scoring system may be configured to choose either rank set 800 or rank set 820 to score the documents found under either the regular (“main”) strategy or the strategy being beta-tested. For example, the scoring system may be configured to score most search requests using the main strategy (rank set 800) and randomly score ten percent of all search requests using the beta strategy (rank set 820).

This type of configurable approach, where different rank sets can easily be moved in and out, appears to provide opportunities to try many different things. As an infrastructure improvement, it seems like an excellent idea. It may not have the appeal of a “PageRank,” but you need some good infrastructure to go with your marquee ranking algorithms, too.

We don’t know if Microsoft is using this system or the type of change that Google made recently with Big Daddy, but it’s a decent illustration of making a search engine a little better.
