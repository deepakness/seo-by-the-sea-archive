---
title: "Google Diving into Deep Web Indexing"
source_url: "https://www.seobythesea.com/2006/10/google-diving-into-indexing-the-deep-web/"
slug: "google-diving-into-indexing-the-deep-web"
date_published: "2006-10-19T02:51:50+00:00"
date_modified: "2020-07-06T13:13:58+00:00"
author: "Bill Slawski"
---

## Deep Web Indexing Provides Access to Content that Isn’t Necessarily Publicly Available

Most information on the web is below the surface, inaccessible to search engines. A whitepaper from Brightplanet published in July of 2001 explores just how much information might be hidden under the publicly available web, that could be accessed using deep web indexing

Google provides a fairly in-depth glimpse at how they might index and rank information located in sections of the deep web, in a patent application filed last week:

[Searching through content which is accessible through web-based forms](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060230033%22.PGNR.&OS=DN/20060230033&RS=DN/20060230033)
Invented by Alon Y. Halevy, Jayant Madhavan, and David H. Ko
US Patent Application 20060230033
Published October 12, 2006
Filed on April 5, 2006

Abstract


> One embodiment of the present invention provides a system that facilitates searching through content that is accessible through web-based forms. During operation, the system receives a query containing keywords. Next, the system analyzes the query to create a structured query. The system then performs a lookup based on the structured query in a database containing entries describing the web-based forms. Next, the system ranks forms returned by the lookup and uses the rankings and associated database entries to facilitate a search through content which is accessible through the forms.

My impulse on reading the following from the patent filing was to consider that there’s a reason why many sites hide information behind logins and I went so far as to wonder whether Googlebot might logon to sites under the name Googlebot; questions triggered by this snippet:


> Traditional search engines cannot search through data that is hidden behind web-based forms. Consequently, a large amount of possibly relevant data cannot be easily accessed through traditional search engines.
>
> What is needed is a method and an apparatus that facilitates efficiently searching through information which is hidden behind web-based forms.


## General Overview Of Deep Web Indexing

Some of the things looked at in the patent filing:

1. How forms are found on the web that can be indexed, including crawling, manual submission, and other possible methods.

2. What kind of information is collected and indexed about the pages that forms are found upon?

3. How information about the content of forms might be collected, including gathering it from URLs where “get” statements are used, and filling in information within forms to extract outputted information from those forms.

4. Collecting metadata about the source of a form, such as a class for that source, a “geographic location most relevant to the source,” and perhaps a PageRank for the source.

5. Collecting metadata about the form itself, such as a class of the identified form, geographic location information most relevant to objects retrieved, fields, which fields are required input fields and possibly mappings between fields and associated class properties of those fields.

6. How a form may be ranked, including looking at:

– approximating a page-rank score based upon incoming links to the web page the form is upon,
– Scores for keywords based upon the relevance of text on that page,
– an ontology score based upon the relevance of a search ontology class for a query associated with that page,
– a form score based upon the ability of the form to answer the query, and/or;
– a location score based upon the distance from the most relevant location for the page associated with the form from locations identified in the query.


## Kinds of Information Collected During Deep Web Indexing

1. *Fields in the form*–For each of the fields:

– its parameter name (used to invoke some server-side script),
– the human-readable or visible text for that field,
– field types (text, select box, radio button, or checkbox), and;
– exemplary values for the field (e.g., the options in a select box).

2. *The class of the form*–The types of objects that can be obtained by querying the form, such as books, hotels, restaurants. A source may have several forms, which can relate to different classes of objects. For example, newspapers often have forms for looking for houses, jobs, and cars for sale.

3. *Geographic location*–A geographic location specific to the objects retrieved using the form. A hotel, for instance, would have an address associated with it.

4. *Required fields*–information about which fields are required to submit the form. There can be more than one combination, in some cases.

5. *Output properties*–The type of information obtained from answers to a successful form submission. These are described as the “Search Ontology” properties we are likely to find in the answers.

6. *Schema mapping*–The mapping between the fields in the form and the Search Ontology properties. For example, a field may ask for either the ZIP code or the city and state.

7. *Additional keywords*–These can be additional keywords that describe the web form.


## Deep Web Indexing Conclusion

There are several strategies used in this document to return a result from a deep web database to a searcher. Generally, those trying to understand the source of the information, the forms used and how they work, information associated with each field of each form, content that may be retrieved by using the forms, how to rank the information that may be found in response to filling out a form, and a location associated with that information if necessary.

If you are interested in how the deep web might be crawled and indexed, this patent application shows some strategies for accomplishing those tasks. Co-inventor, Dr. Halevy, describes some of the issues involved in attempting to index such a wide variety of information, organized in diverse ways based upon business rules that don’t anticipate indexing by a search engine, in a paper he wrote called [Why Your Data Won’t Mix](https://queue.acm.org/detail.cfm?id=1103836).

In that document, he describes some of the strategies he successfully used to create www.everyclassified.com, which aggregated content from thousands of different form sources and more than 5,000 semantic mappings of Web forms into common categories of classified ads. His company, Transformic Inc., which was [acquired by Google](https://www.seobythesea.com/2006/09/googles-quiet-acquisition-of-transformic-inc/) probably in September of 2005, was the creator of everyclassified.com.
