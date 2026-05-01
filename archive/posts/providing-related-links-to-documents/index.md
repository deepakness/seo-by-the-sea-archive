---
title: "Providing Related Links to Documents"
source_url: "https://www.seobythesea.com/2006/01/providing-related-links-to-documents/"
slug: "providing-related-links-to-documents"
date_published: "2006-01-06T15:00:12+00:00"
date_modified: "2021-05-01T18:18:10+00:00"
author: "Bill Slawski"
---

## How Google might Add Related Links to Documents

I want to preface this blog post by saying that it describes a related links patent application and not necessarily Google’s actual plans. Therefore, what it describes may happen, or it may not.

**Providing links to related documents**

On many news sites, publishers will provide related links to other articles on subjects that may be of interest to the person looking at the document.

These related documents are usually based upon the content of the document being viewed and often appear outside the content of the document – often in a footer or sidebar.

A related links patent application naming three Google senior research scientists as inventors describe a process that can automatically create a list of links to related documents and insert those into the original document.

These links may be based in part on personal information gathered about the viewer.

[Enhanced document browsing with automatically generated links based on user information and context](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060005113%22.PGNR.&OS=DN/20060005113&RS=DN/20060005113)

US Patent Application 20060005113
Inventors: Shumeet Baluja, Vibhu Mittal, and Mehran Sahami
Published January 5, 2006
Filed: June 30, 2004

Abstract:


> Additional documents are automatically located that are relevant to an original document, such as a document being read by a user, and potentially relevant to the user’s personal information.
>
> The additional documents may be located based on descriptive information that includes the personal information of the user and content information of the document being read.
>
> The additional documents, or links to the additional documents, may be incorporated into the document being read.
>
> In some implementations, the additional documents may be presented in line with the document being read, such as through an in-line link or text snippet.
>
> The user can thus be efficiently presented with additional information that is relevant to the original document being read.

In addition to other documents, advertisements might also be served to the viewer, based upon personal history information.

**Creating Document Descriptions**

The patent application includes information about how a description of the linked documents might be created. Here are some candidates for the inclusion of information in those descriptions, which then can be used to match documents with related works:

*(1) all terms appearing more than some pre-determined number of times*

Both term frequency and weight might play a part when considering the terms that might be important enough to include in the description, with words that tend to occur rarely in a language being chosen before a common term that might show up more often in a document.

*(2) named entities that can be automatically extracted;*

Some of the examples given are location names, celebrity names, names of well-known commercial or consumer products, and company names.

*(3) dates in the document;*

The date of a document could also be used to help locate other documents that might have been published around the same time.

*(4) author and publication names; and/or*

Other works by the author or appearing in the same or similar documents might be things considered when server recommended links.

*(5) keyword or category extraction.*

Keyword analysis, involving term frequency or named entity extraction, to create categories that could tell the search engine what the document is about generally—more on category matching below, is an example of how it might be used with personal information.

**Using personal history**

Some of the personal history that could be used to decide which additional documents to link to could include:

- Geographic location of the viewer.
- Registration Information from the user when an account is created.
- Information from documents created by the user.
- Browsing history of the user.
- Temporal information (for example, a search for Edinburgh in July might show additional information for the Edinburgh Arts Festival, which happens around that time.)

Personal information can be based on user profiles constructed from previous search queries, with category matching used to infer user interests from previously used search terms.

Example: Photography might be chosen as a category someone is interested in because of previous searches for “Nikon,” “aperture,” and “f-stop.”

**Descriptive information and Personal information joined as a query**

Those related links to additional documents could be located by the search engine performing a query using the descriptive information from the document viewed and possibly also from the viewer’s personal information.

So, a person who has registered as being from San Jose, who looks at a document about hiking Mt. Everest, might be shown links to documents that have to do with “hiking San Jose.” Those would be from a query conducted by the search engine, which joins the information together to find those links.

**Deciding which results to show**

Ranking and pruning of results may happen in ways that are commonly used to provide results to people using search engines, including the relevance of the documents and a “link based measurement of document quality.” There may be other techniques for ranking those results, though, with factors like the following playing a role:

- documents appearing in multiple documents sets corresponding to multiple related search queries, based upon the descriptive information and personal information
- documents that are most recent,
- documents that are the most popular (the number of times the document link was selected).
- documents from commercial sites may be explicitly excluded (or included).

Different search engines could also be used with those queries, such as a general web-based search engine, a product search, or a news search engine.

**Displaying the additional related links or documents**

Here are a couple of ways this additional information could be shown:

1. inline links in appropriate places in a document
2. Float over text over certain words or images, or other objects in a document.

**Google Autolink Plus?**

One of the features or the Google Toolbar is an Auto link that, if turned on, can help a person find out some more information about some types of information that appear on a page, such as street addresses, tracking numbers for packages, ISBNs for books, and Car Vehicle Identification Numbers (VIN).

There were a few articles about AutoLink that describes many concerns about it:

From Search Engine Watch, Danny Sullivan wrote about [Google Toolbar’s AutoLink & The Need For Opt-Out](https://www.searchenginewatch.com/2005/02/25/google-toolbars-autolink-the-need-for-opt-out/)

A Kuro5hin Op-Ed also covered that topic well with Google’s AutoLink: getting to the real issue.

It’s difficult to tell if this feature would only be available to viewers through a personalized version of the search engine. However, it may be that it is since the effectiveness of it could be enhanced by the user information that could be used to inform the selection of related links to documents.
