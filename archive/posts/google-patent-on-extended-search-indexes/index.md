---
title: "Google Patent on Extended Search Indexes"
source_url: "https://www.seobythesea.com/2007/02/google-patent-on-extended-search-indexes/"
slug: "google-patent-on-extended-search-indexes"
date_published: "2007-02-06T02:24:51+00:00"
date_modified: "2017-04-22T10:06:33+00:00"
author: "Bill Slawski"
---

If you like taking a peek under the hood of a search engine, and seeing how it might work, a new patent granted to Google provides some interesting insights.

It describes how a search query might start at a standard index, and if there aren’t enough results within that index, look for more in an extended index to return to a searcher.

[System and method for searching an extended database](https://patents.google.com/patent/US7174346B1/en)
Invented by Kourosh Gharachorloo, Fay Wen Chang, Deborah Anne Wallach, Sanjay Ghemawat, and Jeffrey Dean
Assigned to Google
US Patent 7,174,346
Granted February 6, 2007
Filed September 30, 2003

Abstract


> Once a search query is received from a user, a standard index is searched based on the search query. The standard index forms part of a set of replicated standard indexes having multiple instances of the standard index. A signal is then determined based on the search of the standard index. When the received signal meets predefined criteria, an extended index is searched. The extended index forms part of a set of extended indexes having at least one instance of the extended index. There are fewer instances of the extended index than instances of the standard index. Extended search results are then obtained from the extended index and at least a portion of the extended search results is transmitted towards a user.

Some of the topics covered include:

1. Routing of queries to different data centers

2. How search cache servers work

3. How standard index servers are configured, including the use of partitions

4. What happens when there are too many results found in a standard server and those may be truncated.

5. Where filtering of duplicate results may happen

6. When documents in an extended index may be returned in response to a query

7. How terms may be mapped to documents in different partitions.
