---
title: "A Document Level Classifier and Google Spam Identification"
source_url: "https://www.seobythesea.com/2011/02/document-level-classifiers-and-google-spam-identification/"
slug: "document-level-classifiers-and-google-spam-identification"
date_published: "2011-02-02T19:56:09+00:00"
date_modified: "2021-06-20T10:53:55+00:00"
author: "Bill Slawski"
---

There have been many news opinion pieces and blog posts appearing on the Web in recent months telling us that Google has become less useful because of webspam from pages scraping content from another site and from low-quality articles on content farms. Google’s head of Web Spam, Matt Cutts, responded to those criticisms by announcing some new efforts at Google to make those kinds of pages not rank as well in search results. From the Official Google Blog, on January 21, 2011:


> As we’ve increased both our size and freshness in recent months, we’ve naturally indexed a lot of good content and some spam as well. To respond to that challenge, we recently launched a redesigned document-level classifier that makes it harder for spammy on-page content to rank highly.
>
> The new classifier is better at detecting spam on individual web pages, e.g., repeated spammy words – the sort of phrases you tend to see in junky, automated, self-promoting blog comments.
>
> Matt Cutts – [Google search and search engine spam](https://googleblog.blogspot.com/2011/01/google-search-and-search-engine-spam.html)

When I got to the section of that post about a “redesigned document-level classifier,” I started asking myself, “What might Matt mean by a document-level classifier, and how it might work to reduce the amount of spam found in search results.”

To provide a little insight into what a Document Level Classifier is, and how it might work, I dug into Google’s patents to see if I could find an example of a patent that specifically referred to a document-level classifier that I may not have written about before.

I found the following patent, which uses a document-level classifier to understand the language being used on a web page:

[Identifying language attributes through probabilistic analysis](https://patents.google.com/patent/US7386438B1/en)
Invented by Alexander Franz, Brian Milch, Eric Jackson, Jenny Zhou, and Benjamin Diament
Assignee: Google
US Patent 7,386,438
Granted June 10, 2008
Filed: August 4, 2003

Abstract


> A system and method for identifying language attributes through probabilistic analysis are described. A set of language classes and a plurality of training documents are defined, Each language class identifies a language, and a character set encoding. Occurrences of one or more document properties within each training document are evaluated.
>
> For each language class, a probability for the document properties set conditioned on the occurrence of the language class is calculated. Byte occurrences within each training document are evaluated. For each language class, a probability for the byte occurrences conditioned on the occurrence of the language class is calculated.

**A Document Level Classifier**

A document-level classifier is simply a program that might look at many attributes it finds upon a page to calculate a probability about classification for that page. In the case of this patent about language attributes, those attributes could possibly include things like looking at a character set and the language meta tag, like the following:

<head><meta charset=”iso-latin-1″> <META LANG-=”fr”></HEAD>

But, the patent tells us that language and character set meta tags to appear upon pages rarely, and are often incorrect when they do.

We’re also told that the search engine could look for other clues to identify the language of a page, such as whether or not the domain the page is on uses a specific top-level country code. So, for example, it’s possible that a site on a “.es,” domain is from Spain, and maybe in Spanish.

Instead, this patent’s approach is to look at features like those and use a text analysis approach that breaks text upon pages into n-grams, or groupings of words that are “n” words long. In this patent, the suggested length is 3 words.

So, if the patent were to look at this page to attempt to classify what language it might be in, it might start at the first sentence of this page, and start breaking it down into n-grams, three words long. So, it might take my first sentence, and start breaking it down into three-word phrases like this:

There have been
have been a
been a number
several
number of news
of news opinion
news opinion pieces
opinion pieces and

These n-grams might be compared to many other pages on the web where the language of those pages is known, to determine that my page (or at least parts of my page) is in English. Note, the [Google Books N-gram Viewer](https://books.google.com/ngrams/info) runs on a similar body of data as that used in this language detection approach.

The n-gram approach has been used in several ways by Google, as noted in the Official Google Research Blog post [All Our N-Gram Belong to You](https://ai.googleblog.com/2006/08/all-our-n-gram-are-belong-to-you.html):


> Here at Google Research, we have been using word n-gram models for a variety of R&D projects, such as statistical machine translation, speech recognition, spelling correction, entity detection, information extraction, and others

**Using a Document Classifier to Identify Web Spam**

A document-level classifier doesn’t necessarily have to use an n-gram approach to identify web spam pages, but it’s possible that it might. A Google patent granted this past August included an n-gram approach to classify pages. I wrote about it in [How Google Might Fight Web Spam Based upon Classifications and Click Data](https://www.seobythesea.com/2010/08/how-google-might-fight-web-spam-based-upon-classifications-and-click-data/).

Another post that I wrote about a Google patent that describes how the search engine might identify webspam is [Google Patent on Web Spam, Doorway Pages, and Manipulative Articles](https://www.seobythesea.com/2007/11/google-patent-on-web-spam-doorway-pages-and-manipulative-articles/). That patent lists examples that might indicate that a page is a webspam. Those examples include:

- Whether the document’s text appears to be a normal language or language that a computer might have generated. For example, it might contain a large number of keywords, but not any actual sentences.
- Whether or not the page uses meta tags, and if it does, whether or not those contain a large number of repeated keywords.
- If there are scripts in the document redirecting visitors to another document upon when they access that page.
- If the text on the page is the same color as the background of the page
- Whether the page contains a large number of unrelated links
- Looking at the history of the document, and whether certain things might have changed, such as the content, the linking structure, and possibly the ownership of the document/
- The number of links and anchor text on a page. If there are many links, and very little text that isn’t, that could signify that the page is webspam.

The chances are that the redesigned document-level classifier that Google uses to try to identify whether or not a page is web spam may look at many of these features and others.

What features would you look at if you were designing a document-level classifier to identify webspam?

Last Updated June 9, 2019.
