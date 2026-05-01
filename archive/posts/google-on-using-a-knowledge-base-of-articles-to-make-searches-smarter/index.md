---
title: "Google on Using Named Entity Disambiguation to Make Searches Smarter"
source_url: "https://www.seobythesea.com/2007/10/google-on-using-a-knowledge-base-of-articles-to-make-searches-smarter/"
slug: "google-on-using-a-knowledge-base-of-articles-to-make-searches-smarter"
date_published: "2007-10-09T15:55:05+00:00"
date_modified: "2020-06-23T11:11:38+00:00"
author: "Bill Slawski"
---

When a search at a search engine includes a person’s name, or the name of a particular place, or a book, or a band, or an album, there might be some confusion as to which person (or place or thing) is being searched for.

![Danny Sullivan, Race Car Driver](media/danny-sullivan-2.jpg)

Case in point, there’s a well-known race car driver by the name of Danny Sullivan. There’s also a well-known journalist who writes about the search industry by the name of Danny Sullivan.

![Danny Sullivan, Journalist and Technologist](media/danny-sullivan-1.jpg)

If I were to perform a search on Google for “Danny Sullivan,” might it make sense for the search engine to group results based upon the different Danny Sullivan’s that it finds, and serve me relevant results for both within the top ten search results?

Google has explored ways of handling what it calls “named entities” where there might be more than one specific person, or place, or thing that shares a name, and “disambiguating” (exploring the different senses or meanings behind) those named entities so that it is possible to distinguish between them easily.

A recent paper, [Using Encyclopedic Knowledge for Named Entity Disambiguation](http://www.cs.utexas.edu/~ml/papers/encyc-eacl-06.pdf) (pdf), written by Razvan Bunescu and [Marius Pasca](https://research.google/people/author107/) of Google, explores how a knowledge base of articles, like the pages of the Wikipedia, could be used to identify different named entities.

So, in Wikipedia, there is an entry for the driver [Danny Sullivan](https://en.wikipedia.org/wiki/Danny_Sullivan), and another for [Danny Sullivan (technologist)](https://en.wikipedia.org/wiki/Danny_Sullivan_%28technologist%29). Could Google use the fact that there are two different Danny Sullivan’s listed in a knowledge base like Wikipedia to provide smarter search results?

It’s not surprising that other search engines are exploring the same area. I wrote back in March about Microsoft’s exploration of a similar topic in [Can Web Search Use Wikipedia to Understand References to Names?](https://www.seobythesea.com/2007/07/can-web-search-use-wikipedia-to-understand-references-to-names/)

A patent application on this subject from Google, naming the authors of the Google paper as inventors, was published at the end of last week.

It goes into more detail on how helpful a collection of documents such as the pages of the Wikipedia might be to understanding which named entity might be referred to when a query includes a named entity:

[Disambiguation of Named Entities](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070233656.PGNR.&OS=dn/20070233656&RS=DN/20070233656)
Inventors: Razvan Constantin Bunescu and Alexandru Marius Pasca
US Patent Application 20070233656
Published October 4, 2007
Filed: June 29, 2006

Abstract


> Named entities are disambiguated in search queries and other contexts using a disambiguation scoring model. The scoring model is developed using a knowledge base of articles, including articles about named entities. Various aspects of the knowledge base, including article titles, redirect pages, disambiguation pages, hyperlinks, and categories, are used to develop the scoring model.

The named entity disambiguation patent and paper provide a nice look at a method of ranking and grouping search results that relies less on links and more on extracting and understanding the context of certain concepts (in this case, named entities).
