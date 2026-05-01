---
title: "How Google Identifies Primary Versions of Duplicate Content"
source_url: "https://www.seobythesea.com/2018/10/how-google-might-identify-primary-versions-of-duplicate-pages/"
slug: "how-google-might-identify-primary-versions-of-duplicate-pages"
date_published: "2018-10-12T07:35:34+00:00"
date_modified: "2021-04-28T17:09:06+00:00"
author: "Bill Slawski"
---

## Identifying Primary Versions of Duplicate Content

We know that Google doesn’t penalize duplicate content on the Web, but it may try to identify which version prefers to other versions of the same page.

I came across this statement from Dejan SEO on the Web about duplicate content earlier this week, and wondered about it, and decided to investigate more:


> If there are multiple instances of the same document on the web, the highest authority URL becomes the canonical version. The rest are considered duplicates.

>

The above quote is from the post at [Link inversion, the least known major ranking factor.](https://dejanmarketing.com/link-inversion/) (it is not something I am saying with my post. I wanted to see if there might be something similar in a patent. I found something closer, but it doesn’t say the same thing that Dejan predicts.
.

![Man in a cave](media/Luke-leung-269306-unsplash.jpg)

_[Luke Leung](https://unsplash.com/@lleung1?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge)_

I read that article from Dejan SEO about duplicate content and thought it was worth exploring more. As I was looking around at Google patents that included the word “Authority” in them, I found this patent which doesn’t quite say the same thing that Dejan does, but is interesting in that it finds ways to distinguish between duplicate content on different domains based upon priority rules, which is interesting in determining which duplicate content might be at the highest authority URL for a document.

The patent is:

[Identifying a primary version of a document](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,779,072.PN.&OS=PN/9,779,072&RS=PN/9,779,072)
Inventors: Alexandre A. Verstak and Anurag Acharya
Assignee: Google Inc.
US Patent: 9,779,072
Granted: October 3, 2017
Filed: July 31, 2013

Abstract


> A system and method identify a primary version of different versions of the same document. The system selects a priority of authority for each document version based on a priority rule and information associated with the document version. It selects a primary version based on the priority of authority and information associated with the document version.

Since the claims of a patent are what patent examiners at the USPTO look at when they are prosecuting a patent and deciding whether or not it should be granted. I thought it would be worth looking at the claims contained within the patent to see if they helped encapsulate what it covered. The first one captures some aspects of it that are worth thinking about while talking about different document versions of particular duplicate pages and how the metadata associated with a document might be looked at to determine which is the primary version of a document:


> What is claimed is:
>
> 1. A method comprising: identifying, by a computer system, a plurality of different document versions of a particular document; identifying, by the computer system, a first type of metadata that is associated with each document version of the plurality of different document versions, wherein the first type of metadata includes data that describes a source that provides each document version of the plurality of different document versions; identifying, by the computer system, a second type of metadata that is associated with each document version of the plurality of different document versions, wherein the second type of metadata describes a feature of each document version of the plurality of different document versions other than the source of the document version; for each document version of the plurality of different document versions, applying, by the computer system, a priority rule to the first type of metadata and the second type of metadata, to generate a priority value; selecting, by the computer system, a particular document version, of the plurality of different document versions, based on the priority values generated for each document version of the plurality of different document versions; and providing, by the computer system, the particular document version for presentation.

This doesn’t advance the claim that the primary version of a document is considered the canonical version. Instead, all links pointed to that document are redirected to the primary version.

Another patent shares an inventor with this one that refers to one of the duplicate content URLs being chosen as a representative page, though it doesn’t use the phrase “canonical.” From that patent:


> Duplicate documents sharing the same content are identified by a web crawler system. Upon receiving a newly crawled document, a set of previously crawled documents, if any, sharing the same content as the newly crawled document is identified. Next, information identifying the newly crawled document and the selected set of documents is merged into information identifying a new set of documents. Next, duplicate documents are included and excluded from the new set of documents based on a query-independent metric for each such document. Finally, a single representative document for the new set of documents is identified following a set of predefined conditions.
>
> In some embodiments, a method for selecting a representative document from a set of duplicate documents includes: selecting the first document in a plurality of documents on the basis that the first document is associated with a query independent score, where each respective document in the plurality of documents has a fingerprint that identifies the content of the respective document, the fingerprint of each respective document in the plurality of documents indicating that each respective document in the plurality of documents has substantially identical content to every other document in the plurality of documents, and a first document in the plurality of documents is associated with the query-independent score. The method further includes indexing, per the query independent score, the first document, thereby producing an indexed first document and the plurality of documents, including only the indexed first document in a document index.

This other patent is:

[Representative document selection for a set of duplicate documents](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=8,868,559.PN.&OS=PN/8,868,559&RS=PN/8,868,559)
Inventors: Daniel Dulitz, Alexandre A. Verstak, Sanjay Ghemawat, and Jeffrey A. Dean
Assignee: Google Inc.
US Patent: 8,868,559
Granted: October 21, 2014
Filed: August 30, 2012

Abstract


> Systems and methods for indexing a representative document from a set of duplicate documents are disclosed. Disclosed systems and methods comprise selecting a first document in a plurality of documents because the first document is associated with a query independent score. Each respective document in the plurality of documents has a fingerprint that indicates that the respective document has substantially identical content to every other document in the plurality of documents. Disclosed systems and methods further comprise indexing, following the query independent score, the first document, thereby producing an indexed first document. Concerning the plurality of documents, only the indexed first document is included in a document index.

Regardless of whether the primary version of a set of duplicate pages is treated as the representative document as suggested in this second patent (whatever that may mean exactly), I think it’s important to understand what a primary version of a document might be.


## Why One Version Among a Set of Duplicate Content might be considered a Primary Version

The primary version patent provides some reasons why one of them might be considered a primary version:

(1) Including different versions of the same document does not provide additional useful information, and it does not benefit users.
(2) Search results that include different versions of the same document may crowd out diverse content that should be included.
(3) There are multiple different versions of a document present in the search results. The user may not know which version is most authoritative, complete, or best to access. Thus, it may waste time accessing the different versions to compare them.

Those are the three reasons this duplicate content patent says it is ideal for identifying a primary version from different versions of a document that appears on the Web. The search engine also wants to furnish “the most appropriate and reliable search result.”


## How does it work?

The patent tells us that one method of identifying a primary version is as follows.

The different versions of a document are identified from several different sources, such as online databases, websites, and library data systems.

For each document version, a priority of authority is selected based on:

(1) The metadata information associated with the document version, such as

- The source
- Exclusive right to publish
- Licensing right
- Citation information
- Keywords
- Page rank
- The like

(2) As a second step, the document versions are then determined for length qualification using a length measure. The version with a high priority of authority and a qualified length is deemed the primary version of the document.

If none of the document versions has a high priority and a qualified length, then the primary version is selected based on the totality of information associated with each document version.

The patent tells us that scholarly works tend to work under the process in this patent:


> Because works of scholarly literature are subject to rigorous format requirements, documents such as journal articles, conference articles, academic papers, and citation records of journal articles, conference articles, and academic papers have metadata information describing the content and source of the document. As a result, works of scholarly literature are good candidates for the identification subsystem.

Meta data that might be looked at during this process could include such things as:

- Author names
- Title
- Publisher
- Publication date
- Publication location
- Keywords
- Page rank
- Citation information
- Article identifiers such as Digital Object Identifier, PubMed Identifier, SICI, ISBN, and the like
- Network locution (e.g., URL)
- Reference count
- Citation count
- Language
- So forth

The duplicate content patent goes into more depth about the methodology behind determining the primary version of a document:


> The priority rule generates a numeric value (e.g., a score) to reflect the authoritativeness, completeness, or best to access a document version. In one example, the priority rule determines the priority of authority assigned to a document version by the source of the document version based on a source-priority list. The source-priority list comprises a list of sources, each source having a corresponding priority of authority. The priority of a source can be based on editorial selection, including consideration of extrinsic factors such as the reputation of the source, size of the source’s publication corpus, recency or frequency of updates, or any other factors. Each document version is thus associated with a priority of authority; this association can be maintained in a table, tree, or other data structures.

The patent includes a table illustrating the source-priority list.

The patent includes some alternative approaches as well. For example, it tells us that “the priority measure for determining whether a document version has a qualified priority can be based on a qualified priority value.”


> A qualified priority value is a threshold to determine whether a document version is authoritative, complete, or easy to access, depending on the priority rule. When the assigned priority of a document version is greater than or equal to the qualified priority value, the document is deemed to be authoritative, complete, or easy to access, depending on the priority rule. Alternatively, the qualified priority can be based on a relative measure. Given the priorities of a set of document versions, only the highest priority is deemed a qualified priority.


## Duplicate Content Take aways

I was in a Google Hangout on air within the last couple of years where I and several other SEOs (Ammon Johns, Eric Enge, Jennifer Slegg, and I) asked some questions to John Mueller and Andrey Lipattse, and we asked some [questions about duplicate content](https://www.youtube.com/watch?v=KxCAVmXfVyI). It seems to be something that still raises questions among SEOs.

The patent goes into more detail regarding determining which duplicate content might be the primary document. Unfortunately, we can’t tell whether that primary document might be treated as at the canonical URL for all duplicate documents. As suggested in the Dejan SEO article, I started with a link to this post. Still, it is interesting seeing that Google has a way of deciding which version of a document might be the primary version. I didn’t go into much depth about quantified lengths being used to help identify the primary document, but the patent does spend some time going over that.

Is this a little-known ranking factor? The Google patent on identifying a primary version of duplicate content does seem to find some importance in identifying what it believes to be the most important version among many duplicate documents. I’m not sure if there is anything here that most site owners can use to help them have their pages rank higher in search results, but it’s good seeing that Google may have explored this topic in more depth.

Another page I wrote about duplicate content is this one: [How Google Might Filter Out Duplicate Pages from Bounce Pad Sites](https://www.seobythesea.com/2011/10/how-google-might-filter-out-duplicate-pages-from-bounce-pad-sites/)
