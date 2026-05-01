---
title: "A Peek into Google's Desktop Search Indexing Algorithms"
source_url: "https://www.seobythesea.com/2007/02/a-peek-into-googles-desktop-search-indexing-algorithms/"
slug: "a-peek-into-googles-desktop-search-indexing-algorithms"
date_published: "2007-02-24T11:51:26+00:00"
date_modified: "2020-07-01T15:27:00+00:00"
author: "Bill Slawski"
---

Google’s [Desktop Search](http://desktop.google.com/) is probably more well known for a mix of features and gadgets than it is the ability to index content on a computer or network directories. There’s also an [Enterprise edition](http://desktop.google.com/enterprise/index.html) that enables a company to share the use of desktop search.

Most of what I’ve seen written about this Google search focuses upon all of the add-ons and the way the program looks than how it indexes. The official Inside Google Desktop blog is also a gadget heavy look at Google Desktop Search.

If you’d like a little peek under the hood, at how the program may go about indexing your content, three new patent applications from Google provide some details.

These patent filings are closely related to each other, which means that there’s a considerable amount of overlap in the content of their detailed descriptions and backgrounds.

The first one describes a ranking algorithm that shows results based not only on relevance to a search but also on the frequency of use – on the assumption that documents and information that are viewed frequently tend to be what someone will be looking for.

[Temporal ranking scheme for desktop searching](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070043704.PGNR.&OS=dn/20070043704&RS=DN/20070043704)
US Patent Application 20070043704
Published February 22, 2007
Invented by Susannah Raub, Adam Dingle, and Daisy Stanton
Filed: August 19, 2005

Abstract


> A system for searching an object environment includes harvesting and indexing applications to create a search database and one or more indexes into the database. A scoring application determines the relevance of the objects, and a querying application locates objects in the database according to a search term. One or more of the indexes may be implemented by a hash table or other suitable data structure, where algorithms provide for adding objects to the indexes and searching for objects in the indexes. A ranking scheme sorts searchable items according to an estimate of the frequency that the items will be used in the future. Multiple indexes enable a combined prefix title and full-text content search of the database, accessible from a single search interface.

The second discusses how the search is an incremental one, in that as you begin typing a query, it provides results. As you continue to type your search term, the list of objects that match the query terms gets smaller, and you may see the search result you are looking for before you’ve completely typed your search terms.

[Data structure for incremental search](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070043750.PGNR.&OS=dn/20070043750&RS=DN/20070043750)
Invented by Adam Dingle
US Patent Application 20070043750
Published February 22, 2007
Filed: August 19, 2005

The third talks about having two separate indexable databases – one for titles alone, and another for the full text of documents/objects – and how both of these indexes are searched and results from them are merged.

One reason for the two separate databases is that when a search system returns incremental results, and a searcher has only typed in partial words so far, it might make it easier for a searcher to find what they are looking for if only titles were displayed in results for those partial queries.

Displaying results from the full-text index might present too many results, and negate the speed in finding results that the incremental search provides.

[Combined title prefix and full-word content searching](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070043714.PGNR.&OS=dn/20070043714&RS=DN/20070043714)
Invented by Susannah Raub, Adam Dingle, and Daisy Stanton
US Patent Application 20070043714
Published February 22, 2007
Filed: August 19, 2005

Keep in mind, that as with any patent filings, what has been ultimately developed may differ somewhat from the descriptions in the patent applications. But looking at patents can be a good way of getting an understanding of some of the goals and underlying assumptions and philosophies behind the development of technology.
