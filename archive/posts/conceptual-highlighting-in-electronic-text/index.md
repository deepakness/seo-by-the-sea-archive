---
title: "Conceptual Highlighting in Electronic Text"
source_url: "https://www.seobythesea.com/2006/07/conceptual-highlighting-in-electronic-text/"
slug: "conceptual-highlighting-in-electronic-text"
date_published: "2006-07-17T19:11:55+00:00"
date_modified: "2020-07-06T10:01:23+00:00"
author: "Bill Slawski"
---

Imagine that you are scrolling through a page, and see a section of the page highlighted. The text in that area matches an interest profile that you recently created, or it’s along with the same topics that you’ve been searching through. Or it is somehow conceptually related to whatever you searched for that may have brought you to this page.

A patent application from the [Palo Alto Research Center](https://www.parc.com/) describes how something like this might work. Instead of highlighting only keywords, the following suggests ways to highlight sentences and sections of web pages that related in some conceptual manner to something that you may be searching for.

[Method for automatically performing conceptual highlighting in electronic text](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060156222%22.PGNR.&OS=DN/20060156222&RS=DN/20060156222)

The inventors named in the patent are:

Stuart K. Card
[Ed H. Chi](http://web.archive.org/web/20170311044611/http://www-users.cs.umn.edu/~echi/)
Lichan Hong

Here’s the abstract:


> A method is disclosed for automatically performing conceptual highlighting of electronic text. User’s interests can be explicitly determined via keywords that the user specifies, and/or are implicitly constructed from user browsing and reading activity. User interests may be expressed as an interest profile. Conceptual keywords related to user interests are selected by combining spreading activation and word co-occurrence, by latent semantic analysis, or other methods. The invention automatically highlights sentences and other information that contains conceptual keywords related to user interests. Highlights can be activated when the user directly performs a keyword search or index search, or the invention can generate information reflecting user interests, apply it to the text, and generate and display highlights. An algorithm is disclosed for computing a conceptual keyword vector through an iterative spreading activation process also employing word co-occurrence. A conceptual index of the text may be created and then combined with conceptual highlighting.

In this process, use’s interests are determined through:

- Keywords that the user specifies,
- User browsing and reading activity. and/or ;
- User interests in an interest profile.

If you would like to avoid the legalese, a paper that looks at the highlighting process involved is ScentHighlights: Highlighting Conceptually-Related Sentences during Reading (pdf).

While it doesn’t discuss the user interest aspect of the process involved in much detail, it does take a look at how this process can help someone find something of interest in a long document.

I’d love to see something like this incorporated into a search engine.
