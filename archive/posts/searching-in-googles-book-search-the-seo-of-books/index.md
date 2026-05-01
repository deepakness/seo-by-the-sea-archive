---
title: "Searching in Google's Book Search (The SEO of Books?)"
source_url: "https://www.seobythesea.com/2011/06/searching-in-googles-book-search-the-seo-of-books/"
slug: "searching-in-googles-book-search-the-seo-of-books"
date_published: "2011-06-07T10:16:10+00:00"
date_modified: "2021-06-20T10:27:22+00:00"
author: "Bill Slawski"
---

Unlike Web pages, there are no links in books for Google to index and use to calculate PageRank. There’s no anchor text in links to use as if it were metadata about pages being pointed towards. Books aren’t broken down into separate pages with a somewhat independent existence of their own the way that Web pages do, with unique title elements and meta descriptions and headings. There isn’t a structure of internal links in a book, with file and folder names between pages or sections that a search engine might use to try to understand and classify different sections of a book, like it might with a website.

![An image of a boy reading](media/reading.jpg)

A Google patent granted today describes some of the methods that Google might follow to index content found in books that people might search for. It’s probably not hard for the search engine to perform simple text-based matching to find a specific passage that might be mentioned in a book. It’s probably also not hard to find all of the books that include a term or phrase in their title or text or which were written by a specific author. But how do you rank those? How do you decide which to show first, and which should follow?

Google was granted a patent on [Query-independent entity importance in books](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,958,128.PN.&OS=pn/7,958,128&RS=PN/7,958,128) today, originally filed on July 25, 2010. The inventors include David Petrou, Chiu-Ki Chan, Daniel Loreto, Jeffrey C. Reynar, and Nikola Jevtic.

Google’s indexing of books explores and collects information about entities, or specific people, places, dates, events, and things mentioned in those books.

An importance score might be created about each of those entities based upon many factors, such as:

**1. How much information about a specific entity is included in the book and where**

The patent tells us that the appearance of an entity in different sections of a book may influence how much weight each entity might carry, such as inclusion of the entity in places like:

- Front and back covers,
- Book flap,
- Copyright page,
- Table of contents,
- Forward or afterward,
- Index,
- Reference section,
- Chapter heading,
- Chapters,
- Special pages within chapters (such as the first page of the chapter), and
- Atypical pages (e.g., such as pages that do not contain much text).

The patent does provide some hints as to which locations might carry more weight (such as a mention in the first part of the first chapter being very significant) and which parts might carry much less weight, such as in the copyright notice.

**2. Whether there are third-party references, point to a particular book and to its mention of specific entities.**

These references can include things such as:

- Book reviews,
- “About the book” information,
- Book citations,
- Scholarly citations, and
- World-Wide Web references

If these references are frequently referenced themselves elsewhere, they may carry more weight. As we’re told in the patent:


> For example, if a scholarly article cites a particular chapter of a book, and the article mentions an entity that is also mentioned in the cited chapter, the references module elevates the importance score of the entity.
>
> In one embodiment, the third-party references considered by the references module have a greater influence on the importance score than the intra-book references considered by the book context module. Third-party references are considered less partial and, therefore, are considered better signals of the importance of a section or entity in the book.

**3. Whether or not the sections of a book that include that entity are accessed more than other sections of the book**

If people search for the book online and access different parts of it, what do they look at? Are there some sections that get visited more than others? If so, what are those?

**4. How frequently that entity is mentioned in the book compared to how frequently the entity is mentioned in other books in the collection of books.**

So, for instance, a book that mentions New York City more frequently than other books that mention New York City might be seen as having a higher importance score for the entity “New York City.”

**Other Ranking Considerations**

The patent also describes how this kind of information might be presented, such as showing location information on a map, or event information on a timeline, or facts about a person in text or a table.

A search engine might also look at metadata about books that it indexes, which is often presented as structured data such as Author’s name, publisher, year published, number of pages, edition, Dewey Decimal Classification, Library of Congress classification, ISBN, and more.

Other query-independent factors that a search engine might consider can include a sales volume for a book, or a current position on a best seller’s list.

An overall ranking for a book in response to a query might include both these query independent scores and query dependent signals, such as the number of terms in a query that match those in a book, synonym matching, and other information retrieval techniques.

**Conclusion**

I’m a believer in the idea that if you want to understand something well, you need to be able to step a little outside of it and look at it from a different perspective. If you want to be a good writer, it helps to learn a different language and see how its rules and manners of expression differ from your own. If you want to learn about how an operating system works well, it helps to install and learn about a different operating system to understand the similarities and differences between the two.

I don’t think that people will start thinking about these types of “ranking signals” when they start drafting a book anytime soon. I have brushed over many approaches that Google’s patent describes on how they might rank books in a book search. At the beginning of this post, I pointed out a number of the differences between books and web pages, and how those might make ranking those different. But there are also many similarities, which helps to understand both the how and why of those differences.

Google has been using information extraction approaches to collect information about entities that it finds on the Web. It wouldn’t be surprising to see more of the ideas behind how books might be indexed flowing over into how web pages and websites are indexed.
