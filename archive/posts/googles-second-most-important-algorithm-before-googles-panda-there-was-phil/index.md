---
title: "Google's Second Most Important Algorithm? Before Google's Panda, there was Phil"
source_url: "https://www.seobythesea.com/2011/07/googles-second-most-important-algorithm-before-googles-panda-there-was-phil/"
slug: "googles-second-most-important-algorithm-before-googles-panda-there-was-phil"
date_published: "2011-07-08T21:42:20+00:00"
date_modified: "2021-06-20T10:09:43+00:00"
author: "Bill Slawski"
---

> They named the project Phil because it sounded friendly. (For those who required an acronym, they had one handy: Probabilistic Hierarchical Inferential Learner.) That was bad news for a Google Engineer named Phil, who kept getting emails about the system. He begged Harik to change the name, but Phil it was.
>
> – [Steven Levy](https://stevenlevy.com/), *In The Plex: How Google Thinks, Works, and Shapes Our Lives*.

How does Google decide which Adsense advertisements to show on which Web pages? How do they avoid showing [inappropriate advertisements](https://www.seobythesea.com/2011/07/how-a-search-engine-might-classify-web-pages-as-sensitive/) on those content pages? How does the document classification system they use to power those decisions work, and has its use been expanded beyond Google’s advertising system?

![A screenshot of an interface from the patent Categorizing objects, such as documents and/or clusters, concerning a taxonomy and data structures derived from such categorization, that shows how someone might discover which categories a website might be included within.](media/google-phil-editing-tool.jpg)

Steven Levy’s *In the Plex* describes the early days of Google’s Adsense program, where web publishers could sign up to display contextually relevant blocks of advertisements on their pages and would receive a percentage of the advertising fee if someone clicked through an ad being shown. The name of the program, Adsense, originated with a company called [Applied Semantics](https://www.seobythesea.com/2010/03/search-based-upon-concepts-applied-semantics-and-google/) which Google acquired around the time that they were putting the finishing touches on this content-based advertising system.

According to Levy, the timing of the Applied Semantics acquisition and the use of the Adsense name caused many to believe that the advertising technology developed by Applied Semantics was at the heart of the Adsense program when in reality, the technology that powered the system was developed in-house and was known as “PHIL.”

Note, I’m having a hard time finishing *In the Plex*. I keep on getting sidetracked by mentions of people and algorithms and events that I want to learn more about.

The mention of PHIL in the book led me to dig deeper and see if I could uncover more information about PHIL. I came across the original provisional patent filing “Methods and apparatus for probabilistic hierarchical inferential learner,” application number 60/416,144, which was filed on October 3, 2002, and expired on July 19th, 2004, without having been published. I had never seen it before, and I suspect that very few outside of Google or the patent office have either, though I recognized a good amount of what I read in it.

Georges Harik and Noam Shazeer invented PHIL, and many of the ideas about how words and concepts associated with them might be clustered and classified can be found in the following patents, where they are listed as co-inventors:

- [Method and apparatus for characterizing documents based on clusters of related words](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7383258.PN.&OS=pn/7383258&RS=PN/7383258) – US Patent 7,383,258
- [Method and apparatus for learning a probabilistic generative model for text](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7231393.PN.&OS=pn/7231393&RS=PN/7231393) US Patent 7,231,393

The following patent application describes how the Phil clustering system might be used to categorize many different types of documents:

[Categorizing objects, such as documents and/or clusters, with respect to a taxonomy and data structures derived from such categorization](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060242147%22.PGNR.&OS=DN/20060242147&RS=DN/20060242147)

Invented by David Gehrking, Ching Law, and Andrew Maxwell
US Patent Application 20060242147
Published October 26, 2006
Filed: April 22, 2005

Abstract


> A Website may be automatically categorized by:
>
> - Accepting Website information,
> - Determining a set of scored clusters (e.g., semantic, term co-occurrence, etc.) for the Website using the Website information, and
> - Determining at least one category (e.g., a vertical category) of a predefined taxonomy using at least some of the set of clusters.
>
> A semantic cluster (e.g., a term co-occurrence cluster) may be automatically associated with one or more categories (e.g., vertical categories) of a predefined taxonomy by:
>
> - Accepting a semantic cluster,
> - Identifying a set of a one or more scored concepts using the accepted cluster,
> - Identifying a set of one or more categories using at least some of the one or more scored concepts, and
> - Associating at least some of the one or more categories with the semantic cluster.
>
> A property (e.g., a Website) may be associated with one or more categories (e.g., vertical categories) of a predefined taxonomy by:
>
> - Accepting information about the property,
> - Identifying a set of a one or more scored semantic clusters (e.g., term co-occurrence clusters) using the accepted property information,
> - Identifying a set of one or more categories (e.g., vertical categories) using at least some of the one or more scored semantic clusters, and
> - Associating at least some of the one or more categories with the property.
>
> The present invention concerns organizing information. In particular, the present invention concerns categorizing terms, phrases, documents, and/or term co-occurrence clusters concerning taxonomy and using such categorized documents and/or clusters.

Some of the capabilities behind PHIL were pinpointed in one of the slides from a presentation by Google’s Ruchira S. Datta, during the *Tenth Annual Bay Area Discrete Mathematics Day*, PHIL: The Probabilistic Hierarchical Inferential Learner, April 9th, 2005


> What Can We Do With Phil?
>
> - We can compare the concepts occurring in queries, documents, and ads.
> - We can compare the concepts between two documents, and form a distance metric for clustering similar documents.
> - For a query with ambiguous meaning, we can present results corresponding to the alternate meanings, in proportion to their likelihood.
> - We can use the concepts as features in order to classify texts.
> - We can guess whether words are misspellings of each other based on the concepts they induce.

The provisional patent was refiled with slightly modified language in September of 2003. It was granted under the name [Method and apparatus for characterizing documents based on clusters of related words](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07383258&OS=PN/07383258&RS=PN/07383258). One of the major changes was the removal of references to the system as “PHIL.”

I wrote about that patent back in January, before I began reading *In the Plex* and before I knew of the Google Code name PHIL, in the post [Why a Search Engine Might Cluster Concepts to Improve Search Results](https://www.seobythesea.com/2011/01/why-a-search-engine-might-cluster-concepts-to-improve-search-results/). At the time, I hadn’t realized that not only is Google using the type of classification described in the patent to classify web pages for purposes of its Adsense program, but that they had been for years and years.

**Conclusion**

We know that PHIL played an important and integral role in how Google classifies web pages to decide upon which ads to show on pages through Adsense. Some of the classifications provided as examples in the *Categorizing objects* patent include “sensitive” topics like the ones that I wrote about in my last post on [How A Search Engine Might Classify Web Pages as Sensitive](https://www.seobythesea.com/2011/07/how-a-search-engine-might-classify-web-pages-as-sensitive/).

PHIL (Probabilistic Hierarchical Inferential Learner) classifies pages into different categories by learning about terms and concepts that co-occur upon pages, and clustering similar pages together. Google’s Phrase-Based Indexing also focuses upon identifying good phrases and co-occurrence of terms on pages, but using a different system, and focusing more on ranking web pages. There have been two generations of Phrase-Based Indexing patents. The second group focuses upon implementing the system in a large-scale indexing system, so there’s a possibility that it plays a similar role to PHIL on the web search side.

There is the possibility that the kind of taxonomy that PHIL places pages and sites within could be used in combination with other types of document classification systems, perhaps even one such as Panda, so that sites that cover similar types of topics might be compared against one another.
