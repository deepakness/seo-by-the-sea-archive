---
title: "Can Web Search Use Wikipedia to Understand References to Names?"
source_url: "https://www.seobythesea.com/2007/07/can-web-search-use-wikipedia-to-understand-references-to-names/"
slug: "can-web-search-use-wikipedia-to-understand-references-to-names"
date_published: "2007-07-07T17:26:20+00:00"
date_modified: "2020-06-23T10:17:42+00:00"
author: "Bill Slawski"
---

If you’ve spent any time on the Web, chances are that you’ve run into an entry on [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) for a specific person or place.

A recent paper from a Microsoft researcher explores the idea of using pages like those, from the “free encyclopedia that anyone can edit,” to try to resolve any confusion about who is being referred to when someone performs a search for a person or place in a search engine.

The paper, [Large-Scale Named Entity Disambiguation Based on Wikipedia Data](https://www.aclweb.org/anthology/D07-1074/) (pdf), from [Silviu Cucerzan](https://www.microsoft.com/en-us/research/people/silviu/) describes how the agreement between documents and the context from Wikipedia articles involving people and places might help a search engine understand which person or place is being referred to in those documents. The category tags for Wikipedia may also help.

Some great examples in the document, such as this one:


> Note that an entity (such as George W. Bush, the current president of the U.S.) can be referred to by multiple surface forms (e.g., “George Bush” and “Bush”) and a surface form (e.g., “Bush”) can refer to multiple entities (e.g., two U.S. presidents, the football player Reggie Bush, and the rock band called Bush).

In the example above, when a search engine comes across the word “Bush” in a document, might it be possible to get a sense of which “Bush” is being referred to on that page?

The paper tells us that when a search engine comes across a query like “Michael Jordan”, it will likely return a blend of results for a number of appearances of the phrase “Michael Jordan,” probably referring to a mix of different Michael Jordans.

The paper spells out the process of recognizing “named entities” in documents and then using Wikipedia entries to try to understand the context of their use.

What is interesting about this process is that it changes how a search engine works, from matching keywords in documents, to understanding concepts that appear in those documents.
