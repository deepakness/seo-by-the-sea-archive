---
title: "Google's Inverted Index of the Web"
source_url: "https://www.seobythesea.com/2021/07/inverted-index-of-the-web/"
slug: "inverted-index-of-the-web"
date_published: "2021-07-09T10:58:26+00:00"
date_modified: "2022-03-07T10:36:59+00:00"
author: "Bill Slawski"
---

In the post [10 Most Important SEO Patents, Part 5 – Phrase-Based Indexing](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-5-phrase-based-indexing/) I wrote about how Google’s then Head of Webspam sent a newsletter to Librarians. It described the inverted index that Google used to organize terms in their index of the web. It is no longer available online, but it was a great way for SEOs to learn how Google’s index worked.


## Matt Cutts Writes the First Librarian Newsletter on a Google Inverted Index

Besides ranking documents based upon the quality and quantity of links pointing to a page, Google also looks at whether the query terms searched for also appear upon specific pages. Google’s Matt Cutts wrote one of the best descriptions of how Google does this in the first Google Librarian Newsletter. The newsletter appears to have disappeared from the Web not too long ago. But, I found a copy on the University of Michigan website. It was a highly recommended document. Unfortunately, it is no longer available on the internet archive as of the past week.

That first newsletter asked and answered the question, “How does Google collect and rank results? If you were able to read it, you would have seen it refer to “posting lists.” These are lists of the terms posted in the inverted index of the Web. It matches those terms from queries with documents on the Web. it appears that a tweet from Nicholas McDonough has returned a link to that copy of that post:


> Required reading. A lot of useful info…
>
> I think I found the piece you mentioned by Matt Cutts. It might not be the exact one but it's close :)[https://t.co/sC3tltW7jR](https://t.co/sC3tltW7jR)
>
> — Nicholas McDonough (@Callmenicholi) [July 10, 2021](https://twitter.com/Callmenicholi/status/1413959910195294209?ref_src=twsrc%5Etfw)

The Matt Cutts post is: [How does Google collect and rank results?](http://web.archive.org/web/20080701150733/https://www.google.com/librariancenter/articles/0512_01.html)

This was very helpful to an SEO learning about how Google’s inverted index worked, and it had me interested in learning more about information retrieval.

You can look at the phrase-based indexing patent I linked below. You will see references to how phrases are in posting lists as well. It is impossible to tell if Google has actually done the work of making an inverted index of phrases on the web that would work with phrase-based indexing. Having around 20 related patents about Phrase-based indexing shows that they have spent a lot of time working on the processes behind phrase-based indexing.


## An Inverted Index is an Information Retrieval Approach to Indexing the Web

This is one of the information retrieval approaches to making an index. It involves creating an inverted index of terms found in documents on the web. If a query contains more than one word, Google will try to return search results that consist of all the pages that contain the union of all of the words found in a query. Just like Matt Cutts describes a Google inverted index in his newsletter article for librarians.

Stanford University has a page [A first take at building an inverted index](https://nlp.stanford.edu/IR-book/html/htmledition/a-first-take-at-building-an-inverted-index-1.html). It does a nice job of illustrating how an inverted index works. This is one of the information retrieval-based approaches to indexing the Web that search engines use. Google innovated with their Web index based on an inverted index while they sorted and ranked pages on the Web. They also ordered search results additionally ranked on the use of PageRank to sort and display search results.


## Search Results Ordered By a Combination of Information Retrieval Score and Authority Score

Google may calculate an information retrieval (IR) score based on whether query terms appear on the page according to the inverted index. It can also look at the location of those query terms on the page. So a page with a query term in a more important place on the page, such as the page title, may rank higher than if the query term was in paragraph-based content on the page. In addition to an IR score, Google combines that score with an authority score based on a link-based analysis such as [PageRank](https://www.seobythesea.com/2011/03/the-first-pagerank-patent-and-the-newest/). This approach combining those combined scores means that a different set of pages ranked highly for a query than in other search engines.


## Other Meaningful Results Returned when Query Terms are Missing or Replaced

It is possible to do searches at Google where search annotations appear after a SERP. And tell us that one of the query terms is missing. This has been happening for a while, and I wanted to document it when it does. Here is one example that I had found when Google decided to show many search results when one or more query terms are not in a document returned for a query. I searched for the Jorge Luis Borges short story “Library of Babel” and the Book “Ficciones.” The story appears in more than one book from the author, and some SERPs don’t include the name of the Book “ficciones.” I found one of those, and it has a search annotation that allows me to see only results that include the name of that book.

![Search Annotation with Missing Query](media/search-annotation-missing-Query-Term-1.jpg)

Sometimes Google will find meaningful alternatives to some of the words in a query. They would use a process such as Hummingbird or some other synonym substitution to replace those query terms. I searched for “Best Place in Encinitas to Order Lasagna?” Google gave me a featured snippet in response. It was looking for a restaurant but didn’t include the word “restaurant” in the query. See the featured image at the top of this post to see how the word “place” from my query has been rewritten to use “restaurant.”


## A Patent on a Google Inverted Index

When I first thought about these patents, I searched for “inverted index” on the USPTO.gov website. Surprisingly it returned a relevant result.

Rather than provide details of how this patent works, I will link to it and provide the abstract, and if you want to check it out, you can do that. Here is that patent:

[Updating inverted indices](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10,073,874.PN.&OS=PN/10,073,874&RS=PN/10,073,874)
Inventors: Muthian Sivathanu, Saurabh Goyal, and Rajiv Mathews
Assignee: GOOGLE LLC
US Patent: 10,073,874
Granted: September 11, 2018
Filed: November 21, 2013

Abstract


> Implementations provide an indexing system with an instant failover that uses a moving snapshot window. For example, a method may include receiving, by a processor, a query and determining that a main query processing engine is not responding. The method may further include generating a search result for the query using a secondary query processing engine that applies at least one snapshot record to a portion of a posting list, the snapshot record including the portion of the posting list as it appeared before a modification, and the modification occurring within a predetermined time before receiving the query. The portion is a fixed size smaller than the posting list. Applying the snapshot record can include overlaying the portion of the posting list with the snapshot record beginning at an offset specified by the snapshot record. The main query processing engine generates a search result without applying snapshot records.


## Inverted Index for Phrase-Based Indexing

Another Google patent tells us about a different inverted index of the web for complete and meaningful phrases used with phrase-based indexing. This means that Google keeps track of frequently co-occurring phrases on pages of the web (unlike LSI Keywords). This patent is at:

[Index server architecture using tiered and sharded phrase posting lists](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,652,483.PN.&OS=PN/9,652,483&RS=PN/9,652,483)
Inventors: Pei Cao, Nadav Eiron, Soham Mazumdar, Anna L. Patterson, Russell Power, and Yonatan Zunger
Assignee: Google Inc.
US Patent: 9,652,483
Granted: May 16, 2017
Filed: November 23, 2015

Abstract:


> An information retrieval system uses phrases to index, retrieve, organize and describe documents. Phrases are from the document collection. Documents get indexed according to their included phrases, using phrase posting lists. The phrase posting lists get stored in a cluster of index servers. The phrase posting lists can become tiered into groups and sharded into partitions. Phrases in a query get identified based on possible phrasifications. A query schedule based on the phrases can get created from the phrases and optimized to reduce query processing and communication costs. The execution of the query schedule can get managed to further reduce or eliminate query processing operations at various index servers.

I wrote about this inverted index in the post [Are You Using Google Phrase-Based Indexing?](https://gofishdigital.com/are-you-using-google-phrase-based-indexing/)

I had to write about the Google inverted index because it is something that I haven’t written about in this blog. Still, it is one of the basic SEO 101 approaches for how SEO works. I wanted to show how that method can get used in phrase-based indexing. It is used there to build a phrase-based posting list to index phrases on the Web.
