---
title: "Smaller Screens Make Smarter Search Engines"
source_url: "https://www.seobythesea.com/2006/12/smaller-screens-make-smarter-search-engines/"
slug: "smaller-screens-make-smarter-search-engines"
date_published: "2006-12-17T12:07:49+00:00"
date_modified: "2020-01-21T15:17:25+00:00"
author: "Bill Slawski"
---

With the growth of handheld devices, one topic I’ve seen more of in whitepapers and patent applications involves presenting web pages designed for large screens on smaller screens and breaking them up to be presentable at those smaller sizes.

The techniques described in those look carefully at the HTML and the visual layout of the pages, and may even rewrite some of the text on those pages.

Some new patent applications came out this past week which look at understanding the structure of a web page better, in order to present the contents of the page in a meaningful manner, perhaps over several pages.

I’ve been thinking about some of the implications of these techniques, from how a search engine could use knowledge like this while indexing pages, to how a designer might consider ways in which the information is passed along in the best way possible when their content and design is transformed.

**Possible Benefits to Search Engines**

Reading through the patent filings, I’ve wondered how much these techniques might benefit the indexing of web pages, by allowing a search engine to understand different regions of a page, such as headers, footers, navigation areas, and content sections. Here are a few ways that knowledge might be helpful:

1. *Snippet selection* – If a meta description contains the query used to find the page, it may be shown by a search engine. If it doesn’t, a search engine may have to choose between appearances of the query on different parts of a page. Showing a snippet taken from a content area may provide a searcher with a better idea of what a page is about than something from a sidebar or footer.

2. *Link valuation* – In an algorithm like pagerank, should every link on a page provide the same popularity weight to the page it points towards? Would a search engine assign different weights based upon whether a link was in a navigation sidebar, or in the main content of a page, or in the page’s footer?

3. *Duplication filtering* – Common global elements such as copyright notices and other footer information, navigation elements, and other material that appears on multiple pages of a site may make them seem similar. While algorithms that look for duplication may ignore some very common text, will knowing more about where that text appears on a page be helpful?

4. *Assignment of more value to content in main content section during indexing* – When words appear in the main content of one page, and the footer section of another page, is it more likely that the page where they show in the main content may be more relevant for a query using those words? Maybe.

**Possible Design Considerations**

How will your pages be shown by a wireless proxy from a Google or Yahoo or Nokia? Will they be split up? Will images be removed or replaced with alt text or resized? Will navigation be rewritten? What happens when your navigation is image based and the proxy removes images?

Is there a benefit to a design that uses sematically well-formed HTML?

**Papers on Segmentation of Pages for Mobile Devices**

There are a number of papers that discuss how a page might be recast for a smaller screen. These are three that are worth spending a little time with to get some insight into the ideas behind those:

Google – [Browsing on Small Screens: Recasting Web-Page Segmentation into an Efficient Machine Learning Framework](http://www.esprockets.com/papers/www2006-2502-baluja.pdf) (pdf)

Microsoft – [Adapting Web Pages for Small-Screen Devices](https://dl.acm.org/doi/10.1109/PERCOM.2005.16) (pdf)

Microsoft – [Efficient Browsing of Web Search Results on Mobile Devices Based on Importance Model](https://dl.acm.org/doi/10.1109/PERCOM.2005.16) (pdf)

**The New Patent Applications**

[Small Form Factor Web Browsing](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060282444%22.PGNR.&OS=DN/20060282444&RS=DN/20060282444)
Invented by Yu Chen, Wei-Ying Ma, Ming-Yu Wang, Hong Jiang Zhang
Assigned to Microsoft Corporation
US Patent Application 20060282444
Published December 14, 2006
Filed: August 18, 2006

Abstract


> A large web page is analyzed and partitioned into smaller sub-pages so that a user can navigate the web page on a small form factor device.
>
> The user can browse the sub-pages to find and read information in the content of the large web page.
>
> The partitioning can be performed at a web server, an edge server, at the small form factor device, or can be distributed across one or more such devices.
>
> The analysis leverages design habits of a web page author to extract a representation structure of an authored web page.
>
> The extracted representation structure includes high level structure using several markup language tag selection rules and low level structure using visual boundary detection in which visual units of the low level structure are provided by clustering markup language tags.
>
> User viewing habits can be learned to display favorite parts of a web page.

Pages made for desktop computers are translated so that they can be viewed on smaller form factor devices. This patent focuses primarily on how to distinquish between different parts of a page, whether header, footer, sidebars, or main content areas. It also discusses how it would present that information on smaller screens, and the types of things it would look at. It would:

- – Analyze the web content of a large web page,
- – Partition the content of the large web page into different sub-pages,
- – Learn user viewing habits or user-inputted preferences, and;
- – Display the appropriate sub-pages based on such learning or user-inputted preferences.

In addition to looking at the HTML within a page, it would also do some “visual boundary detection” by looking at the layout of the page itself. The Microsoft papers above share a number of authors with this patent application, and reading through those first are a good introduction to the ideas and concepts in this document.

A [second version](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060282445%22.PGNR.&OS=DN/20060282445&RS=DN/20060282445) of this patent application was also published on the same day. The description section of the document is almost identical, but the actual claims section is different.

Nokia also filed a patent application which details some of their efforts to break a web page down into smaller parts: [System and method for identifying segments in a web resource](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060282758%22.PGNR.&OS=DN/20060282758&RS=DN/20060282758)

**Conclusion**

As more people use handheld devices to access the web, we likely need to be concerned about how are pages are viewed on those devices. The visual segmentation and HTML analysis that search engines undertake to perform such segmentation also has the benefit of telling search engines more about those pages and the content upon them.

How will they use that information?
