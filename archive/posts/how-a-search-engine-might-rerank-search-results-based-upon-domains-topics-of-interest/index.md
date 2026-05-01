---
title: "How a Search Engine Might Rerank Search Results Based upon Topics"
source_url: "https://www.seobythesea.com/2010/09/how-a-search-engine-might-rerank-search-results-based-upon-domains-topics-of-interest/"
slug: "how-a-search-engine-might-rerank-search-results-based-upon-domains-topics-of-interest"
date_published: "2010-09-09T14:56:38+00:00"
date_modified: "2021-07-02T11:31:17+00:00"
author: "Bill Slawski"
---

If you search for the word “cold” and you’re using the search box for a health-related site, chances are you want to find out something about the illness. If you search for “cold” at Google or Yahoo or Bing, there’s a chance that you might be interested in weather or air conditioning or a cold war or stuffy nose.

Different sites and pages might focus on specific topics of interest, such as health or sports, or weather, or construction. A search engine might use to try to get around some of the limitations of words with multiple meanings is to assign domain or topical scores to web pages and other items found on the Web, regardless of which queries they might be good results for. Then if a query seems to cover a specific domain or topic, to return pages that involve that topic, based upon a “domain score” for those pages.

**Why Look at Domains (Categories of Interest) in Ranking Pages?**

The patent’s description begins by describing conventional methods of ranking pages in search results. When a search engine attempts to match a query with a document, there are many steps that it may go through first.

One of those may be to “lemmatize,” or group together different forms or inflections of a word found in a query, and identify the lemma, or base version of that word. For example, the words swim, swimming, swum, and swam might be considered infected forms of the word “swim.” The word swim might be considered the lemma of that group of words. This is different from stemming, in that stemming might reduce swims, swimming, and swimmer done to the root “swim,” but a stemming operator wouldn’t include “swam” or “swum” the way that lemmatizing those words would.

The lemma, or normal form of the word in the query, would them be used to see which terms contain it.

A term-based ranking system like this might also assign scores to web pages based upon statistics about how frequently query terms appear in documents that contain those terms. A large number of occurrences of the term in a document might increase the score for the document. If a rare term (one that doesn’t show up in too many documents on the web) also co-occurs in both the query and the document, that may increase the score for the page. If there are terms in the query that aren’t on a page, the score for that page may be decreased. If the terms appear in certain parts of a page, such as a page title, the score for the page may be increased.

In addition to looking at whether or not a query term appears upon a page for purposes of ranking that page, popularity-based ranking signals are often also used in ranking web pages for query terms. These signals can include information about links to pages, looking at which search results people select when seeing a page in search results for a particular query, and others.

But one of the main limitations to this kind of approach is when a word in a query might have more than one meaning, and the meaning isn’t very clear from the context of the query.

If each page had a domain-based score, and queries could also be given domain scores, it might help find results that might match queries well.

There might be several ways to calculate a domain score for a page. One might be to give a page a “medical” domain score based upon how many medical terms appeared on the page. Another might be to take a query into account and see how well the set of medical terms in a query match up with medical concepts appearing on a page.

The order of pages in search results might be based on both the traditional way of ranking pages and a topical or domain score for those pages.

[Domain-Based Ranking in a Document Search](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100228743.PGNR.&OS=dn/20100228743&RS=DN/20100228743)
Invented by Alain Thierry Rappaport and Daniel Adamson
Assigned to Microsoft
US Patent Application 20100228743
Published September 9, 2010
Filed: March 3, 2009

Abstract


> In one example, documents that are examined by a search process may be stored in a manner that is specific to a domain. A domain may be a substantive area, such as medicine, sports, etc. Different scoring approaches that take aspects of the domain into account may be applied to the documents, thereby producing different scores than might have been produced by comparing the terms in the query with the terms in the documents.
>
> These domain-based approaches may take a query into account in scoring the documents, or maybe query-independent. A scorer may implement each approach. The combined output of the scorers may be used to generate a score for each document. Documents then may be ranked based on the scores, and search results may be provided.

A page might cover many topics, or domains, and several levels. For instance, a page about baseball may contain a lot of terms and concepts related to baseball. Another page might cover sports more generally, including baseball, football, hockey, gymnastics, curling, and more.

The more general page about sports might be a much more popular page regarding links pointing to it, and visits. It might rank higher in search results for a query about baseball under a conventional term-based ranking system because of that popularity. But, if the domain scores for those two pages are taken into account, the less popular page that focuses more upon baseball may rank higher because it has a better domain score for baseball.

**Conclusion**

The patent describes many approaches that could be used to understand the concepts presented on a page, and to rank a page based upon different domains or areas of interest that it might cover. These can include things like possibly boosting the value of terms found in a web page’s title if it seems to point out a topic for the page. But it also covers other areas.

Regardless of the approaches, the search engine might use, an interesting exercise if you’re a web page publisher. It is to read through several pages on your site and see how well each of them might indicate categories that the page should be associated with. If you had to assign some categories to the pages of your site, and rank how well they might fit into those categories, it might be something that you could do.

Now imagine a search engine trying to do the same thing. It would attempt to base its categorization of your pages based upon what it knows about other pages on the Web that might cover similar categories.

How close would your categories be to the categories that the search engine came up with?

A search engine might use the categories (or domains) it chooses for a page, to rank how well that page might match the concepts or topics it identifies for a query.
