---
title: "Google, Microsoft, and Yahoo Patents on Interpreting Dynamic Page URLs"
source_url: "https://www.seobythesea.com/2010/03/google-microsoft-and-yahoo-patents-on-interpreting-dynamic-page-urls/"
slug: "google-microsoft-and-yahoo-patents-on-interpreting-dynamic-page-urls"
date_published: "2010-03-16T15:49:09+00:00"
date_modified: "2012-06-10T11:02:50+00:00"
author: "Bill Slawski"
---

Three patents granted today to Google, Microsoft, and Yahoo all describe how each of the search engines might take a close look at page addresses, or URLs on dynamic web sites.

I wrote about the patent from Microsoft back when it had just been published as a pending patent application, in [Microsoft Creating Rules for Canonical URLs](https://www.seobythesea.com/2006/09/microsoft-creating-rules-for-canonical-urls/). It appears that the patent examiner who reviewed the patent saw my blog post, because it is referred to in the patent within the “other references” section (Slawski, “Microsoft Creating Rules for Canonical URLs,” Sep. 29th, 2006, pp. 1-5. cited by examiner.). I don’t know if it is the first blog post to be cited as a reference in a granted patent (probably not), but it’s the first of my posts to be listed in one.

All three patents take a close look at the structures of URLs on dynamic web pages, which can often include large amounts of information within those URLs. For example, here’s a link to a page about a pair of jeans:

“http://www5.jcpenney.com/jcp/X6.aspx?DeptID=53006&CatID=53078&GrpTyp=PRD&ItemID=17bf470&attrtype=&attrvalue=&CMID=53006%7c53018&Fltr=&Srt=&QL=F&IND=3&cmVirtualCat=&CmCatId=53006|53018|53078”

It’s possible that many of the parts of that URL aren’t necessary, and can be removed to show the same page. I started removing a number of the different URL parameters from that URL, and I was still seeing the same content at this much shorter URL:

“http://www5.jcpenney.com/jcp/X6.aspx?&GrpTyp=PRD&ItemID=17bf470”

According to Google’s new patent, which is intended to help the search engine identify duplicate content at different URLs, they might try to identify which parts of a URL can be dropped, and which ones can’t. The parts, or parameters of a dynamic URL that can be dropped would be considered content-irrelevant. In my JCPenny URL example, that would include the following parameters.

DeptID=53006
&CatID=53078
&attrtype=
&attrvalue=
&CMID=53006%7c53018
&Fltr=
&Srt=
&QL=F
&IND=3
&cmVirtualCat=
&CmCatId=53006|53018|53078

By understanding which parts of URLs need to be included to show the same content, and which parts aren’t, it becomes easier for the search engine to identify duplicated content that might exist at different URLs that show the same page.

[System for automatically managing duplicate documents when crawling dynamic documents](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,680,773.PN.&OS=pn/7,680,773&RS=PN/7,680,773)
Invented by Anurag Acharya, Arvind Jain, and Arup Mukherjee
Assigned to Google Inc.
US Patent 7,680,773
Granted March 16, 2010
Filed: March 31, 2005

Abstract


> A system of reducing the possibility of crawling duplicate document identifiers partitions a plurality of document identifiers into multiple clusters, each cluster having a cluster name and a set of document parameters. The system generates an equivalence rule for each cluster of document identifiers, the rule specifying which document parameters associated with the cluster are content-relevant. Next, the system groups each cluster of document identifiers into one or more equivalence classes in accordance with its associated equivalence rule, each equivalence class including one or more document identifiers that correspond to a document content and having a representative document identifier identifying the document content.

The Microsoft patent does something that could be considered to be somewhat similar. My post linked to above, and mentioned as a reference in the patent provides a more detailed description.

[Systems and methods for inferring uniform resource locator (URL) normalization rules](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,680,785.PN.&OS=pn/7,680,785&RS=PN/7,680,785)
Invented by Marc Alexander Najork
Assigned to Microsoft Corporation
US Patent 7,680,785
Granted: March 16, 2010
Filed: March 25, 2005

Abstract


> Different URLs that actually reference the same web page or other web resource are detected and that information is used to only download one instance of a web page or web resource from a web site. All web pages or web resources downloaded from a web server are compared to identify which are substantially identical. Once identical web pages or web resources with different URLs are found, the different URLs are then analyzed to identify what portions of the URL are essential for identifying a particular web page or web resource, and what portions are irrelevant. Once this has been done for each set of substantially identical web pages or web resources (also referred to as an “equivalence class” herein), these per-equivalence-class rules are generalized to trans-equivalence-class rules.
>
> There are two rule-learning steps:
>
> step (1), where it is learned for each equivalence class what portions of the URLs in that class are relevant for selecting the page and what portions are not; and
>
> step (2), where the per-equivalence-class rules constructed during step (1) are generalized to rules that cover many equivalence classes.
>
> Once a rule is determined, it is applied to the class of web pages or web resources to identify errors. If there are no errors, the rule is activated and is then used by the web crawler for future crawling to avoid the download of duplicative web pages or web resources.

The Yahoo patent also attempts to “normalize” URLs, but does so for a slightly different purpose, though it’s quite possible that duplicated content at different variations of a URL are also removed by Yahoo. The Yahoo patent describes another step where similarities in the structure of content on pages themselves are also identified, so that similar pages may be grouped together.

[Techniques for clustering structurally similar web pages](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=5&f=G&l=50&d=PTXT&p=1&p=1&S1=%2820100316.PD.+AND+yahoo!.ASNM.%29&OS=isd/20100316+and+an/yahoo!&RS=%28ISD/20100316+AND+AN/yahoo!%29)
Invented by Krishna Leela Poola and Arun Ramanujapuram
Assigned to Yahoo!
US Patent 7,680,858
Granted March 16, 2010
Filed: July 5, 2006

Abstract


> Web page clustering techniques described herein are URL Clustering and Page Clustering, whereby clustering algorithms cluster together pages that are structurally similar. Regarding URL clustering, because similarly structured pages have similar patterns in their URLs, grouping similar URL patterns will group structurally similar pages.
>
> Embodiments of URL clustering may involve: (a) URL normalization and (b) URL variation computation. Regarding page clustering, page feature-based techniques further cluster any given set of homogenous clusters, reducing the number of clusters based on the underlying page code. Embodiments of page clustering may reduce the number of clusters based on the tag probabilities and the tag sequence, utilizing an Approximate Nearest Neighborhood (ANN) graph along with evaluation of intra-cluster and inter-cluster compactness.

In an ideal world, as a web site developer, it is a good practice to set up the URLs for the pages of your site so that there is only one URL for page. In practice, many sites are set up so that people (and search engines) can access the same content at different URLs. While the patents above describe ways that the search engines may address the problem of multiple URLs for the same pages, eliminating the need for them to do mitigates the risk that they don’t, for one reason or another.
