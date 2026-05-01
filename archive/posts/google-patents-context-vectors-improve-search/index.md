---
title: "Google Patents Context Vectors to Improve Search"
source_url: "https://www.seobythesea.com/2016/10/google-patents-context-vectors-improve-search/"
slug: "google-patents-context-vectors-improve-search"
date_published: "2016-10-04T19:25:42+00:00"
date_modified: "2021-07-30T19:45:55+00:00"
author: "Bill Slawski"
---

## Google Uses Context Vectors to Index the Meanings of Query Terms

![For example, a horse to a rancher is an animal. A horse to a carpenter is an implement of work. A horse to a gymnast is an implement on which to perform certain exercises.](media/horse-farm-virginia-1.jpg)

_For example, a horse to a rancher is an animal. A horse to a carpenter is an implement of work. A horse to a gymnast is an implement on which to perform certain exercises._

br br br br br

A limitation of information on the Web is how it gets organized differently at each site on the Web. A new Google patent on Context Vectors tells us there is no official catalog of information on the internet. Each site has its own organizational system. Search engines index information, but they have issues that make finding information challenging. br br br br br


## Limitations on Conventional Keyword-Based Search Engines

The patent granted in September of 2016 discusses how to organize information to organize better and index information, using context vectors to understand how words are being used. It tells us about the limitations of search engines based upon indexing content using keywords, such as:

1. A search engine using conventional keyword searching will return all instances of the keyword searched for, regardless of how that word gets used on a site. This can be a lot of results
2. Conventional search engines may only return only the home page of a site containing the keyword. Finding where the keyword gets used on the site could be difficult
3. Often, a conventional search engine will return a list of URLs in response to a keyword search that may be difficult to modify or search further in a meaningful manner.
4. Information obtained through a search can become dated quickly. Such information may need to get checked up upon

The patent tells us about those limitations and points out some of the limitations of directories that could also help find information. It then provides a possible solution to this problem, with a “data extraction tool” capable of providing many of the benefits of search engines and directories, without the drawbacks that this patent points out.


## Is this The Google Search Engine with RankBrain Inside?

A search engine based on a data extraction tool like the one described in the patent would improve most search engines. Is this Google’s search engine with RankBrain applied to it? It may be, though it doesn’t use the word RankBrain.

Also, when Google Brain team members talk about Rankbrain, they often mention Word Vectors, and this patent uses something called Context Vectors. There are differences between the two, which are worth exploring to find out more. Also, RankBrain appears to get focused upon rewriting queries rather than upon any content on Webpages.


## What are Context Vectors, and Where Do They Come From?

The Bloomberg introduction to RankBrain, [Google Turning Its Lucrative Web Search Over to AI Machines](http://web.archive.org/web/20170523062147/https://www.bloomberg.com/news/articles/2015-10-26/google-turning-its-lucrative-web-search-over-to-ai-machines) provides information about the algorithm used in RankBrain, and it tells us:


> RankBrain uses artificial intelligence to embed vast amounts of written language into mathematical entities — called vectors — that the computer can understand.


## Context Vectors to Index Content About Words

This new patent refers to what it calls Context Vectors to index content about words found on the Web. To put it clearly, the patent tells us:


> because of the foregoing, following the invention as embodied and broadly described herein, a method and apparatus becomes disclosed in one embodiment of the present invention for determining contexts of information analyzed. Contexts may get determined for words, expressions, and other combinations of words in bodies of knowledge such as encyclopedias.
>
> Analysis of use provides a division of the universe of communication or information into domains. It selects words or expressions unique to those domains of subject matter as an aid in classifying information.
>
> A vocabulary list gets created with a macro-context (context vector) for each, dependent upon the number of unique terms from a domain over each domain.
>
> This system may get used to find information or classify information by subsequent inputs of text, in the calculation of macro-contexts, with ultimate determination of lists of micro-contests including terms closely aligned with the subject matter.


## Where a Search Engine Gets Context For A Search

When a search submits a query to a search engine, we have gotten told that the search engine may try to give it contexts based upon “other queries from the same user, the query associated with other information or query results from the same user, or other inputs related to that used to give it more context.

The context vectors patent is:

[User-context-based search engine](https://patents.google.com/patent/US9449105B1/en)
Inventors: David C. Taylor
Application Date: 09/04/2012
Grant Number: 09449105
Grant Date: 09/20/2016

Abstract:


> A method and apparatus for determining contexts of information analyzed. Contexts may get determined for words, expressions, and other combinations of words in bodies of knowledge such as encyclopedias.
>
> Analysis of use provides a division of the universe of communication or information into domains. It selects words or expressions unique to those domains of subject matter as an aid in classifying information.
>
> A vocabulary list becomes created with a macro-context (context vector) for each, dependent upon the number of unique terms from a domain over each domain. This system may get used to find information or classify information by subsequent inputs of text, in the calculation of macro-contexts, with ultimate determination of lists of micro-contests including terms closely aligned with the subject matter.

When RankBrain was first announced, I found a patent that was co-invented by one of the members of the team that was working on it, that described how Google might provide substitutions for some query terms, based upon an understanding of the context of those terms and the other words used in a query. I wrote about that patent in the post, [Investigating Google RankBrain and Query Term Substitutions](https://gofishdigital.com/investigating-google-rankbrain-and-query-term-substitutions/). Reading the post’s patent and the one that this post is about can help understand some of the ideas behind a process such as RankBrain.


## Index Data In A Way That Makes It Easier To Locate

This patent provides many insights in explaining the importance of context and how helpful it can be to a system that may be attempting to extract data from a source and index that data in a way that makes it easier to locate. I liked this passage in particular:


> Interestingly, some English and other words pertain to many different subject matter areas. Thus, one may think of the universe of communication as containing numerous domains of the subject matter. For example, the various domains in FIG. 2 refer to centers of meaning or subject matter areas. These domains become represented as somewhat indistinct clouds in that they may accumulate a vocabulary of communication elements about them that pertain to them or that relate to them. Nevertheless, some of those same communication elements may also have applications elsewhere. For example, a horse to a rancher is an animal. A horse to a carpenter is an implement of work. A horse to a gymnast is an implement on which to perform certain exercises. Thus, the communication element that we call “horse” belongs to or pertains to multiple domains.

A search engine that can identify the domains or contexts that a word might fit within may be able to better index such words; as described in this patent:


> In an apparatus and method following the invention, a search engine process gets developed that provides a deterministic method for establishing context for the communication elements submitted in a query. Thus, a search engine can determine which domain or domains a communication element gets attracted to. Since few things are absolute, domains may overlap or be very close to sharing certain communication elements. That is, communication elements do not belong to any domain. They get attracted to or have an affinity for various domains and may have differing degrees of affinity for differing domains. One may think of this affinity as perhaps goodness of fit or the best alignment or quality alignment with the subject matter of a particular domain.


## Contextually Rewarding Search Results

The context vectors patent tells us that a search engine that works well provides a searcher with information in response to a query that is a “comparatively close related query.” Information that is exactly what has been sought. The information that is close to what has been sought and is still useful. Then it tells us that what would be “contextually unrewarding” would be information that shares the word in a completely different and useless context related to the query.

Words might get related to a wide range of particular fields or subject matter domains. The patent describes how these might get used as context terms.


## Domain List Terms


> Typically, a domain list of about 40 to 50 terms is effective. Some domain lists have gotten operated successfully in an apparatus and method following the invention with as few as 10 terms. Some domain lists may contain a few hundred individual terms. For example, some domains may justify about 300 terms. Although the method is deterministic rather than statistical, it is helpful to have about 40 to 50 terms in the domain list to improve the efficiency of the calculations and determinations of the method.
>
> The domain lists have utility in quickly identifying the particular domain to which their members pertain. This results from the lack of commonality of the terms and the lack of ambiguity about domains to which they may have utility. By the same token, a list as small as the domain lists is necessarily limited when considering the overall vocabulary of communication elements available in any language. Thus, the terms in domain lists do not necessarily arise with the most useful frequency for rapid searching. A word unique to a particular subject matter domain but infrequently used may not arise in very many queries submitted to a search engine.
>
> A process for creating a vocabulary list of a substantial universe or a substantial portion of a universe of communication elements may get performed by identifying a body or corpus of information organized by topical entries. Thereafter, the text of each of those entries identified may get subjected to a counting process in which occurrences of terms from the domain list occur within each of the topical entries. Ultimately, a calculation of a macro context may get made for each of the topical entries. This calculation gets based on the domain lists and the domains represented thereby.

So, when a domain is about a specific topic, Google might look at the meaning from a place, such as a knowledge base, and look for some domain list terms that it may then index to help explain the context of the topic a page may be about. This is the step towards creating context vectors for words used on a site.

This is where this patent enters into the world of the Semantic Web. For example, different subject matter domains may get identified for different knowledge bases or online encyclopedias. Such collections of what gets referred to as public knowledge might get called a “corpus.” This kind of corpus of information could create a context vector used to index different meanings of words.

When a different meaning gets found, it might then become counted from that information corpus. The patent tells us that terms found in such a place could be “individual words, terms, expressions, phrases, and so forth.”


## Think of A Topical Entry As A Vocabulary Term

The patent attempts to put this into context for us with this statement:


> One may think of a topical entry as a vocabulary term. Every topical entry is a vocabulary word, expression, place, person, etc., that will get added to the overall vocabulary. For example, the universe may become divided into about 100 to 120 domains for convenient navigation. Likewise, the domain lists may themselves contain from about 10 to about 300 select terms each. By contrast, the topical entries included in the build of a vocabulary list may include the number of terms one would find in a dictionary, such as 300 to 800,000. Less may get used, and conceivably moreBesidesss, unabridged dictionaries, and encyclopedias typically have on this order of numbers of entries.


## How to Use Domain List Terms When Doing SEO

Because Google is tracking these Domain List Terms, they will look for them on your pages to get a better sense of the meaning of your page. So, if you write a page about a horse as an animal, instead of a carpenter’s tool, or gymnasts vaulting equipment, you should include domain list terms on your page that help discloses the meaning of words on your page. For example, including words such as “Saddle” and “stirrups” on your page tell a search engine that your page is for equestrians and is about the four-legged animals.

So look to see if there are knowledge base articles about the meaning of the word that is the focus of your page, and consider adding domain list terms to your page.


## Context Vectors

When RankBrain first came out, there was a post published that looked at some information that might make it a little more understandable; it included some information about Geoffrey Hinton’s Thought Vectors, and there’s more about those in this post from Jennifer Slegg: [RankBrain: Everything We Know About Google’s AI Algorithm](http://www.thesempost.com/rankbrain-everything-we-know-about-googles-ai-algorithm/).

There is a Google Open Source Blog post on Word Vectors which can get related, titled [Learning the meaning behind words](https://opensource.googleblog.com/2013/08/learning-meaning-behind-words.html), written by Tomas Mikolov, Ilya Sutskever, and Quoc Le. [Ilya Sutskever](http://www.cs.toronto.edu/~ilya/) was a student of Geoffry Hinton. Tomas Mikolov worked on several papers about word vectors while with the Google Brain team, including [Efficient Estimation of Word Representations in Vector Space](https://www.semanticscholar.org/paper/Efficient-Estimation-of-Word-Representations-in-Mikolov-Chen/330da625c15427c6e42ccfa3b747fb29e5835bf0).

The patent spends a fair amount of time describing context vectors, the different domains a word might fall into, and many occurrences or weights for those words within those domains. So it’s worth drilling down into the patent and reading about how terms can get considered context vectors that a search engine might label them as.

When a searcher enters a query into a search engine to get searched, the query may become classified within contexts to help select information in response to that query.


## Using a Browser Helper Object

The patent describes how it might identify different domains that might get associated with specific terms. It tells us that this might get done:


> By compiling a list of domain-specific questions, it is possible to (1) specify differences between very similar domains with great precision and (2) create a rapid way to prototype a domain that does not need many hours of an expert’s time, and can get expanded by relatively inexperienced people.

The patent also describes the use of a BHO (Browser Helper Object) in this manner:


> Another more complex implementation is something like a Browser Helper Object (BHO) that runs on the user’s machine, and watches/categorizes all surfing activity. Even non-participating sites can contribute to the user’s picture with this system, and any clicking the user does to ad sites served by certified clicks will pick up a much more comprehensive picture.

The patent provides more details on how this context vectors-based system might work and how data might get extracted from web pages. It becomes recommended reading if you want to get a better sense of how a context-based system might index the web and make specific information easier to improve upon most conventional keyword-based search engines.
