---
title: "Ranking Search Results by File Type and by Click Distance"
source_url: "https://www.seobythesea.com/2006/09/ranking-search-results-by-file-type-and-by-click-distance/"
slug: "ranking-search-results-by-file-type-and-by-click-distance"
date_published: "2006-09-12T12:25:53+00:00"
date_modified: "2020-07-06T10:38:10+00:00"
author: "Bill Slawski"
---

## File Type and Click Distance as Search Ranking Signals?

Should the file type of a document on the web be something that search engines should consider when ranking documents in response to search? How about the number of clicks it takes to reach a document from the home page of a site?

A couple of related patent applications from Microsoft discuss how it could incorporate each of these signals into the way it ranks documents.

**Ranking by File types**

The patent filing on file types is fairly straightforward. It applies a score to a document-based upon what type of file it may be, such as an HTML document, a spreadsheet, a word processing document, etc.

[System and method for ranking search results using file types](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060200460%22.PGNR.&OS=DN/20060200460&RS=DN/20060200460)
Invented by Dmitriy Meyerzon, Stephen E. Robertson, Hugo Zaragoza, and Michael J. Taylor
Assigned to Microsoft Corporation
US Patent Application 20060200460
Published September 7, 2006
Filed: March 3, 2005

Abstract


> Search results of a search query on a network are ranked according to an additional ranking function for the prior probability of relevance of a document based on document property. The document property may be the document’s file type, the file size, the document language, or another query-independent property of the document. The query-independent values for each document property may be weighted according to relevance measurements of the document based on the document property. As more relevance measurements of the documents may be obtained, the query-independent values for each document property may be updated to reflect the new measurements.

**Using Click Distance in Ranking Pages**

In addition to the number of clicks away from the main page of a site, this may also consider a URL (Uniform Resource Locator) depth property, to refine results. The URL depth property measures the number of levels in the URL and is compared to the click distance function to adjust a page’s ranking score.

The use of this ranking factor may have more of an impact on an intranet site than an internet site because link popularity based measures can be limited on intranet sites. The document appears to apply to both internet and intranet pages, though it is described within an intranet setting.

[System and method for ranking search results using click distance](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060074903%22.PGNR.&OS=DN/20060074903&RS=DN/20060074903)
Invented by Dmitriy Meyerzon, and Hugo Zaragoza
Assigned to Microsoft Corporation
US Patent Application 20060074903
Published April 6, 2006
Filed on September 30, 2004

Abstract


> Search results of a search query on a network are ranked according to an additional click distance property associated with each of the documents on the network. The click distance is a measurement of the number clicks or user navigations from a page or pages on the network designated as the highest authority or root pages on the network. The precision of the results is increased by the addition of the click distance term when the site or intranet where the search query takes place is hierarchically structured.

(Note: [Hugo Zaragoza](http://web.archive.org/web/20110930134306/http://research.yahoo.com:80/Hugo_Zaragoza), who is listed as a co-inventor on both of these patent filings is now at Yahoo!)
