---
title: "How Search Engines Can Do Object Block Ranking"
source_url: "https://www.seobythesea.com/2008/06/how-search-engines-can-index-pages-in-parts/"
slug: "how-search-engines-can-index-pages-in-parts"
date_published: "2008-06-03T09:32:00+00:00"
date_modified: "2019-08-16T18:31:10+00:00"
author: "Bill Slawski"
---

Web pages can contain a lot of information about various types of objects such as products, people, papers, organizations, and so on. Information about those objects may be spread out on different pages, at different sites, in different blocks of those pages.

For example, a page may host a product review of a particular model of camera, and another page may present an ad offering to sell that model of the camera at a certain price.

One page might display a journal article, and another page could be the homepage for the author of that article.

Someone searching for information about the camera, or about the author may need information contained in both pages. They may have to use a search engine to locate multiple pages, to find the information that they need.

If there were a way for a search engine to automatically identify when information on different web pages relates to the same object, that might be helpful to searchers in a number of ways.

Product searches would benefit in helping shoppers find information and prices about goods that they might want to purchase. A repository of scientific papers could gain by providing additional information about the authors of papers.

**Extracting Object Blocks from Pages**

A patent granted to Microsoft today explores the concept of extracting object blocks from pages, so that information that appears on pages about specific objects can be grouped together.

Often, information about a specific object is presented on a page with information about other objects. The Microsoft process would break information from a page into different blocks relating to the different objects found on that page, and engage in object block ranking.

It might look at visual features of a page, such as different font sizes and separating lines, to help identify object elements at blocks. It may search for elements within each object block that shows that the block involves a particular object.

After a page is broken into object blocks, it might attempt to label elements of each object, and information about the objects may be stored in a database for objects, along with other information blocks from other pages that involve the same objects.

[Method and system for identifying object information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,383,254.PN.&OS=pn/7,383,254&RS=PN/7,383,254)
Invented by Ji-Rong Wen, Wei-Ying Ma, Zaiqing Nie
Assigned to Microsoft
US Patent 7,383,254
Granted June 3, 2008
Filed April 13, 2005

Abstract


> A method and system for identifying object information of an information page is provided. An information extraction system identifies the object blocks of an information page. The extraction system classifies the object blocks into object types.
>
> Each object type has associated attributes that define a schema for the information of the object type. The extraction system identifies object elements within an object block that may represent an attribute value for the object.
>
> After the object elements are identified, the extraction system attempts to identify which object elements correspond to which attributes of the object type in a process referred to as “labeling.” The extraction system uses an algorithm to determine the confidence that a certain object element corresponds to a certain attribute.
>
> The extraction system then selects the set of labels with the highest confidence as being the labels for the object elements.

**Identifying object information on a web page**

An advertisement on a web page for a camera may be an object block and the matching object is the specific model of camera.

An object block that advertises a camera may be classified as a product type, and an object block relating to a journal paper may be classified as a paper type.

Each object type has associated attributes.

A product object type may have attributes of:

- Manufacturer,
- Model,
- Price,
- Description, and;
- so on.

A paper object type may have attributes of:

- Title,
- Author,
- Publisher, and;
- so on.

When a page is broken into blocks, an information extraction system might attempt to associate attributes of an object with values from the block.

So, for a camera, “Sony” might be identified as a manufacturer attribute and “$599” as a price attribute.

**Object Block Ranking**

About a month ago, I wrote about how Microsoft described breaking pages down into parts and deciding which parts of those pages where the most important parts, in [Search Engines, Web Page Segmentation, and the Most Important Block](https://www.seobythesea.com/2008/05/search-engines-web-page-segmentation-and-the-most-important-block/).

Microsoft is exploring indexing information at an information block level, instead of a page level. This patent brushes upon the idea of breaking apart the content of a page based upon the HTML code of the page and the visual aspects of how information on a page is presented, which it could do using a [VIPS: a Vision-based Page Segmentation Algorithm](https://www.microsoft.com/en-us/research/publication/vips-a-vision-based-page-segmentation-algorithm/) (pdf).

The ideas in this newly granted patent take that concept a step further, and discuss the exploration of different segments on pages for information that relates to different objects, extracting information from those segments about different attributes or aspects of those objects, and relating those different objects together in the same data store, so that they can be accessed by people.

There are a few white papers from Microsoft that explore these ideas more fully:

- [Object Level Ranking: Bringing Order to Web Objects](https://www.microsoft.com/en-us/research/publication/object-level-ranking-bringing-order-to-web-objects/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fznie%2Ff611-nie.pdf) (pdf)
- [Object-level Vertical Search](https://www.microsoft.com/en-us/research/publication/object-level-vertical-search/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fznie%2Fcidr2007-nie.pdf) (pdf)
- [Web Object Retrieval](https://www.microsoft.com/en-us/research/publication/web-object-retrieval/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fznie%2Ffp626-nie.pdf) (pdf)

Microsoft has produced a couple of examples where they are clearly using this kind of object level searching at:

- Bing Shopping
- Libra Academic Search

In 2006, Google described the use of visual segmentation of content on pages, and extraction of information from different segments, within the context of grabbing information from pages offering multiple reviews for local search, which I wrote about in [Google and Document Segmentation Indexing for Local Search](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/).

Yahoo also recently published a patent application that broke pages down into parts, and attempted to identify the most important parts of the page. More on that at: [The Importance of Page Layout in SEO](https://www.seobythesea.com/2008/03/the-importance-of-page-layout-in-seo/).

If you publish web pages, how might the search engines be breaking apart the content of your pages, and using an object block Ranking on those?
