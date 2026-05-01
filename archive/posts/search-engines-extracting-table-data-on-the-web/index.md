---
title: "Search Engines Extracting Table Data on the Web"
source_url: "https://www.seobythesea.com/2008/08/search-engines-extracting-table-data-on-the-web/"
slug: "search-engines-extracting-table-data-on-the-web"
date_published: "2008-08-21T18:55:28+00:00"
date_modified: "2019-08-10T15:05:24+00:00"
author: "Bill Slawski"
---

## Googlebot Extracting Table Data

The Web is filled with page after page after page of data. That data is usually organized differently from one site and one page to another, and contained in text, in pictures, in videos, in audio, in columns, in rows, in frames, and many other formats.

![spider web](media/spider-web.jpg)
Web from [Automania](https://www.flickr.com/photos/automania/) via a [Creative Common’s License](https://creativecommons.org/licenses/by-nc-nd/2.0/)When a [search engine spider](https://support.google.com/webmasters/answer/70897?hl=en&query=googlebot) comes to a page on the Web, it will try to go through all of the text it finds, make note of links to other pages, consider alt text for images, and view meta data tags.

Search engines spiders will decide whether or not the content of pages should be indexed by the search engine, and determine which links to follow next.

Sometimes search engine spiders will pick out part of a page to treat a little differently for one reason or another. It might extract specific types of information, or look for data in specific formats. For instance, Google might find a list on a page, and send information about the list to the data base for Google Sets (no longer available). I wrote about some of the details in a post about the [Google Sets patent](https://www.seobythesea.com/2008/03/how-google-sets-works/).

![a to do list](media/list.jpg)
List from [Great Beyond](https://www.flickr.com/photos/tonyjcase/) via a [Creative Common’s License](https://creativecommons.org/licenses/by-nc-sa/2.0/)Instead of looking for lists, what if Google focused upon extracting table data that contains meaningful data (as opposed to tables that might be used on a web page to control the formatting of part or all of a page)?

What if it took all those data-filled tables, and created a separate database just for them, and tried to understand which of those tables might be related to each other? What if it then allowed for people to search through that data, or combine the data in those tables with other data that those people own, or that they found elsewhere on the Web?

Why just look at tables of data? The answer to that has something to do with the structure of data in tables.

Because a table is structured like the one below, with labels for each column, a search engine may engage in extracting table data with the associated labels and storing it in a database where it could be accessed by searchers later.


<table border="1" cellspacing="0" cols="3" frame="hsides" rules="groups"><caption><em>Popular top level domains and Google Results:</em></caption><colgroup><col width="55"/><col width="150"/><col width="80"/></colgroup><p></p><tr><th height="18" width="55">tld</th><th width="150">type</th><th align="right" width="80">Google Results</th></tr><tbody><tr><td height="18" width="55">.com</td><td width="150">commercial</td><td align="right" width="80">6,930,000,000</td></tr></tbody><tbody><tr><td height="18">.net</td><td>Network services</td><td align="right">1,980,000,000</td></tr></tbody><tbody><tr><td height="38">.org</td><td>Noncommercial</td><td align="right">1,940,000,000</td></tr></tbody><tbody><tr><td height="18">.jp</td><td> Japan</td><td align="right">1,760,000,000</td></tr></tbody><tbody><tr><td height="18">.de</td><td>Germany</td><td align="right">1,660,000,000</td></tr></tbody><tbody><tr><td height="18">.uk</td><td>United Kingdom</td><td align="right">770,000,000</td></tr></tbody><tbody><tr><td height="18">.fr</td><td> France</td><td align="right">583,000,000</td></tr></tbody><tbody><tr><td height="40">.edu</td><td>US accredited postsecondary institutions</td><td align="right">294,000,000</td></tr></tbody><tbody><tr><td height="18">.ca</td><td>Canada</td><td align="right">291,000,000</td></tr></tbody><tbody><tr><td height="18">.gov</td><td>United States Government</td><td align="right">185,000,000</td></tr></tbody></table>

**Structured and Unstructured Data**

When you go from site to site on the World Wide Web, you see a wide range of formats and organization of content and information.

Many of the pages that you find on the web could be considered to consist of **unstructured data**, information that isn’t strictly tables of labels and values for those labels. But many web pages also contain tables that do contain **structured data**, which is much more organized. It might be interesting if those tables could be removed from web pages, and placed into an index where the data within them might be compared.

**Google Research on Extracting Table Data**

A couple of papers from Google researchers explore the extraction of data and labels for that data from HTML tables on the Web, so that the information found in those tables can be searched for by keywords, and used in other ways, such as using it to create mashups from information gathered from different tabular sources.

- [Uncovering the Relational Web](http://sirrice.github.io/files/papers/relweb-webdb08.pdf) (pdf)
- [WebTables: Exploring the Power of Tables on the Web](http://sirrice.github.io/files/papers/webtables-vldb08.pdf) (pdf)

A good percentage of tables found on the Web was left out of the research, such as very small tables, those used for formatting of pages, calendars, and other uses that didn’t involve a meaningful display of related data.

A massive undertaking, the research provides a different way of thinking about how search engines might crawl web pages to find information to return to searchers. Here’s a description of the data used in this research:


> We extracted 14.1 billion HTML tables from Google’s general-purpose web crawl and used statistical classification techniques to find the estimated 154M that contain high-quality relational data. Because each relational table has its own “schema” of labeled and typed columns, each such table can be considered a small structured database.
>
> The resulting corpus of databases is larger than any other corpus we are aware of, by at least five orders of magnitude.

These tables are found on freely accessible web pages and are not tables of data hidden behind logins and forms from the deep web. One example of a table that might appear in the tables included in this data is one about the Presidents of the United States.

The conclusion in one of the two papers notes that tables might not be the only kind of structured data that might be explored using a similar approach in the future.


> Finally, we would like to also include relational data derived from more than just HTML tables. Potential data sources that researchers have studied include tabular layouts that do not use the table tag, deep web databases, socially-tagged data items, HTML-embedded lists, and natural language text.

Structured data from tables and other formats, found amongst the many different pieces of unstructured data found on pages of the Web, may lead to Googlebot extracting table data on those web pages. Something to think about the next time you see a table on the Web or build a table for a web page.
