---
title: "Google on Finding Entities: A Tale of Two Michael Jacksons"
source_url: "https://www.seobythesea.com/2014/08/google-finding-entities-tale-two-michael-jacksons/"
slug: "google-finding-entities-tale-two-michael-jacksons"
date_published: "2014-08-14T08:46:16+00:00"
date_modified: "2020-07-01T11:37:44+00:00"
author: "Bill Slawski"
---

I’ve been saying for at least a couple of years that Google’s local search is a proof of concept for the search giant to use on how to find and understand entities.

With local search, Google goes out and looks for a mention of a business on the Web, especially when it is accompanied by geographic location information. It collects and gathers facts related to businesses (entities are people, places, and things), and then it clusters information about the objects it finds to make sure that those mentions across the Web are all referring to the same places.

If you start reading about local search, you’ll see people referring to the importance of consistency in how you present address information for business, and the same thing is true for entities.

![Two different michael jacksons](media/michael-jacksons.jpg)

*When there are two well-known people with the same name, such as the head of Homeland Security Michael Jackson, and pop star Michael Jackson, things could get a little confusing.*

That is until you start looking at the facts associated with each mention. One was a member of the group “Homeland Security” and the other was a member of the group, “The Jackson Five.” One vowed to the constitution that he would protect us from terrorists, and the other let us know, “I want you back.”

A patent granted to Google this June puts that problem into perspective for us by referring to the problem of understanding which Michael Jackson is which:


> It is frequently useful to know the specific entity to which a document is referring. For example, if the goal is to extract, organize, and summarize information about Michael Jackson (the singer), one will want to look only at documents about Michael Jackson (the singer), and not at documents other Michael Jacksons. The ambiguity of language, names, and other common properties makes determining which entity a document is referring to a difficult task. Therefore, what is needed is a method for disambiguating references to entities in a document.

In [Finding Entity Names in Google’s Knowledge Graph](https://www.seobythesea.com/2014/06/entity-names-in-google/), I wrote about Google’s Data Janitors, which are tasked with taking data extracted from the web and performing multiple tasks with it, like cleaning it up, or collecting facts related to it. It’s ultimately their task to tell us which Michael Jackson is being referred to when one of them is mentioned on a web site.

One assumption is uncovered about this process is that “the number of documents identified as referring to an entity is used to estimate the absolute and/or relative importance of the entity.” The patent quickly follows that statement up by telling us that the importance of each of those documents might also be judged by factors such as:

(1) how likely it is that the web page might be referring to that particular entity (some kind of confidence strength), or

(2) some metric of the importance of the document itself regardless of the entity, such as “what is the PageRank of the page,” or

(3) both.

When Google [acquired](https://www.seobythesea.com/2010/07/google-gets-smarter-with-named-entities-acquires-metaweb/) MetaWeb’s Freebase, it was estimated to contain information about 12 million entities. The last I heard, that number is up over 250 million.

This patent describes how Google goes about identifying entities on the Web, and figuring out which Michael Jackson is which:

[Finding and disambiguating references to entities on web pages](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08751498&OS=PN/08751498&RS=PN/08751498)
Invented by Leonardo A. Laroco, Jr., Nikola Jevtic, Nikolai V. Yakovenko, and Jeffrey Reynar
Assigned to Google
US Patent 8,751,498
Granted June 10, 2014
Filed: February 1, 2012

Abstract


> A system and method for disambiguating references to entities in a document. In one embodiment, an iterative process is used to disambiguate references to entities in documents. An initial model is used to identify documents referring to an entity based on features contained in those documents. The occurrence of various features in these documents is measured.
>
> From the number occurrences of features in these documents, a second model is constructed. The second model is used to identify documents referring to the entity based on features contained in the documents.
>
> The process can be repeated, iteratively identifying documents referring to the entity and improving subsequent models based on those identifications. Additional features of the entity can be extracted from documents identified as referring to the entity.
