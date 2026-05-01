---
title: "How Google May Use Categories as a Search Ranking Factor"
source_url: "https://www.seobythesea.com/2010/10/how-google-may-use-categories-as-a-search-ranking-factor/"
slug: "how-google-may-use-categories-as-a-search-ranking-factor"
date_published: "2010-10-12T17:16:44+00:00"
date_modified: "2015-11-28T11:16:51+00:00"
author: "Bill Slawski"
---

Does Google determine categories for pages and for queries, and can those play a role in how it ranks pages in search results?

Almost everyday, I receive visitors on a query for “bookshelf plans,” on the strength of a past post about Google’s plans for virtual bookshelves in Google library. Most of those visitors probably aren’t surprised that the page is about an online library given the title and snippet appearing for the post, but most of the search results preceeding it describe wooden rather than virtual shelves. My page really doesn’t fit within the same category as the others.

When a search engine determines whether a page is relevant for a certain query, it does more than try to match the text of the query with a page that contains that text, and looking at the links pointing to the page. A Google patent filed in 2004, and granted today describes how the search engine may try to associate web pages with categories, and queries with categories, and come up with a category score for each, to use to rank those pages for categories.

We are told that this kind of category matching addresses a couple of different problems.

One problem is that text matching by search engines has been taken too literally – if I search for “car mechanic,” I’m also searching for “auto mechanic,” or “automobile mechanic.” If the word “car” doesn’t appear on a page about an “auto mechanic,” under a pure text matching approach, I wouldn’t see that page in search results.

Another problem is that words or phrases used in queries can often have more than one sense in which they are used. My bookshelves example illustrates that point. If you’re looking for “bookshelves plans,” chances are that you’re considering building a bookshelf and you want blue prints or instructions. My blog post was about Google’s plans to create virtual bookshelves. The word “plans” might be interpreted as actual blueprints for construction, or as a strategy for moving forward on a project. The term “bookshelves” might refer to furniture to hold books, or virtual places to hold information about books.

The patent is:

[System and method for determining a composite score for categorized search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,814,085.PN.&OS=pn/7,814,085&RS=PN/7,814,085)
Invented by Karl Pfleger and Brian Larson
Assigned to Google
US Patent 7,814,085
Granted October 12, 2010
Filed: February 26, 2004

Abstract


> A system and method for scoring documents is described. One or more documents are identified responsive to a search criteria. A text match score indicating a quality of match of the identified documents is determined. A category match score is determined over categories. A document-categories score is determined indicating a quality of match between an identified document and a plurality of categories.
>
> A search criteria-categories score is determined indicating a quality of match between the search criteria and the categories. An overall score is determined based on the text match score and the category match score.

Categories for pages and queries might be created manually, through an automated process, or by a combination of both. These categories could be defined as a list, or in a hierarchical manner, or in some other way, and documents and queries may be assigned more than one category. Pages and query terms may be associated with specific categories based upon some relative strength of correlation to those categories. The strength of those association with categories might vary from one page to another, or from one query to another.

An association strength would be determined between specific documents and categories, and for each query term and categories. This assocation strength would be used together with a text based matching score to determine which pages rank for which query terms.

**Product Search Example**

We’re told in the patent that scores for pages about products tend to be easy to place into categories. For example, a hierarchical category structure could be created for “Household.” Under that larger category might be smaller categories such as “Cleaning Supplies,” “Lawn Care,” “Maintenance,” and “Decorative.” Even smaller categories could be created under those that might include things such as “Brooms,” “Mops,” “Vacuum Cleaners,” “Rakes,” “Mowers,” “Flamingos,” and “Gnomes.”

A page (or query) about “Flamingos” might fall within a categorized list, such as:

*Household > Lawn Care > Decorative > Flamingos*

When a page is indexed, it might be given a text-based score for ranking, as well as a category score. A page about Flamingos would be given a category score based upon how well it correlates with flamingos compared to other pages about flamingos.

A page about lawn decorations, which includes information about flamingos and lawn gnomes might fit into both the flamingo category and the gnome category, but the page’s correlation score for flamingos might not be as high as a correlation score for page only about flamingos.

**Conclusion**

It’s possible that Google has used category matching like this, between query terms and web pages at some point within the past 6 or 7 years. It’s also possible that Google has since moved on to other approaches that try to solve the problems this patent was intended to solve.

This kind of category matching described in the patent is one approach to determining relevance. There are a few other ways that the concept of relevance might be applied by a search engine.

One is a direct matching of keywords between a document and a query term or phrase. Under this sense of the word relevance, if the same words appear in a query and on a page, the page is relevant for the term. That’s the kind of relevance determination that this patent was aiming to improve upon.

More recently, search engines have been trying harder to interpret the intent behind queries. This kind of interpretation might be fairly simple, such as trying to return transactional sites in search results when someone’s query term might be written like “buy xxxxx”. It could focus upon returning informational pages when a query begins with a phrase such as “How to”. A search engine might strive to return a specific website to a searcher on a query that it believes is [navigational](https://www.seobythesea.com/2008/03/redefining-navigational-queries-to-find-perfect-sites/) in nature, meaning that the searcher was likely trying to find a specific web site, such as when I type ESPN in my search toolbar as a shortcut to get to the ESPN website.

Another kind of relevance is one that fulfills a situational need. For example, if I search for “Pizza,” the search engines try to include within search results links to local pizzerias based upon the notion that the situational intent behind my search is to find a place to get a slice or two of pizza.

One method that Google is using to somewhat address one of the problems that I mentioned at the start of this post – search engines taking query terms too literally – has been to include [synonyms](https://googleblog.blogspot.com/2010/01/helping-computers-understand-language.html) for query terms when appropriate. That would solve the problem I described with a search for “car mechanic” not showing results for “auto mechanic.”

Google may be using category matching as a ranking signal, but they’ve been developing other approaches that may yield better results since the filing of this patent.
