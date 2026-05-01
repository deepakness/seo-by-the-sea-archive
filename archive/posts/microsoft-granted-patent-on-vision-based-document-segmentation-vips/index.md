---
title: "Microsoft Granted Patent on Vision-Based Document Segmentation (VIPS)"
source_url: "https://www.seobythesea.com/2008/09/microsoft-granted-patent-on-vision-based-document-segmentation-vips/"
slug: "microsoft-granted-patent-on-vision-based-document-segmentation-vips"
date_published: "2008-09-25T02:25:51+00:00"
date_modified: "2020-06-20T12:36:51+00:00"
author: "Bill Slawski"
---

## How Does Vision-Based Document Segmentation Work?

Web pages can be messy; they can have more than one topic on a page, and use templates that surround those topics adding little meaning to the meat of the content, filled with links and labels, advertising and boilerplate, copyright and other notices.

With a diversity of topics, those pages may not be easily crawled and recorded and indexed and found, by search engines and searchers.

When we think of search engines and how they work, we often break what they do down into three main parts – discovering new pages and new content on old pages, indexing content on those pages following rules that show a preference for important pages and unique content, and presenting relevant and meaningful information to searchers and their intents (or at least matching their keywords) in response to queries that they enter into a search box.

We usually don’t think of search engines as indexing parts of pages, chunks of information that might exist side-by-side with very different topics, and yet many pages are messy like that.

But we’ve had signs from the white papers and patent filings that we see from search engineers, that they might try to segment and capture information about different topics found on the same page, using a vision-based document segmentation process.

**Vision-Based Document Segmentation**

Researchers from Microsoft have been working on understanding and indexing different parts of pages, and a couple of white papers from a few years back (2003 – 2004) tell us about that approach:

- [Improving Pseudo-Relevance Feedback in Web Information Retrieval Using Web Page Segmentation](https://www.microsoft.com/en-us/research/publication/improving-pseudo-relevance-feedback-in-web-information-retrieval-using-web-page-segmentation/) (pdf)
- [VIPS: A VIsion based Page Segmentation Algorithm](ftp://ftp.research.microsoft.com/pub/tr/tr-2003-79.pdf) (pdf)

The abstract to the second document gives us a nice summary:


> A new web content structure analysis based on visual representation is proposed in this paper. Many web applications such as information retrieval, information extraction, and automatic page adaptation can benefit from this structure.
>
> This paper presents an automatic top-down, tag-tree independent approach to detect web content structure. It simulates how a user understands the web layout structure based on his visual perception.
>
> Comparing to other existing techniques such as the DOM tree, our approach is independent of the HTML documentation representation. Our method can work well even when the HTML structure is quite different from the visual layout structure. Several experiments show the effectiveness of our method.

At its simplest level, this vision-based document segmentation approach breaks down web pages into different blocks of meaning, based upon the way we might see a page, with blocks of text and pictures, and line breaks and white space, and other separators of text and images and other content.

These different sections of a page can be identified as portions of a page that might contain different meanings, sometimes completely unrelated to each other. Understanding that those blocks exist may be helpful to a search engine when it crawls a page and decides to index the content it finds upon that page, so that searchers may be able to find the information that it contains.

Microsoft was granted a patent this week on this vision-based document segmentation (VIPS) as it might be used during document retrieval. A hat tip to David Harry, who pointed the patent out to me. I had found another patent related to this one and stopped searching for more. I’ll get to that other patent with another post, but it makes sense to point this one out first since it focuses upon an earlier step – breaking pages down into blocks.

[Vision-based document segmentation](https://patents.google.com/patent/US7428700B2/en)
Invented by Ji-Rong Wen, Shipeng Yu. Deng Cai, and Wei-Ying Ma
Assigned to Microsoft
US Patent 7,428,700
Granted September 23, 2008
Filed: July 28, 2003

Abstract


> Vision-based document segmentation identifies one or more portions of semantic content of a document. The one or more portions are identified by identifying a plurality of visual blocks in the document and detecting one or more separators between the visual blocks of the plurality of visual blocks.
>
> A content structure for the document is constructed based at least in part on the plurality of visual blocks and the one or more separators, and the content structure identifies one or more portions of the semantic content of the document. The content structure obtained using the vision-based document segmentation can optionally be used during document retrieval.

We’re fortunate that we have the two papers I listed above to help us cut through some of the language of the patent, with some very helpful illustrations.

I’m going to skim over a lot of the details in the patent and try to keep this post fairly simple because of that.

**Finding Blocks and Separators for Blocks Visually**

One of the first steps in Vision based document segmentation is to try to break a page down into visual blocks, based upon visual cues within the document, such as:

- Font sizes and/or types
- Colors of fonts and/or background information
- HTML tag type, and
- Others

Once differences in sections of a page are identified, visual separations between them are looked for, such as:

- Lines in the document
- Blank space in the document
- Different background colors for different blocks, and
- Others

Based on the identified blocks and separators, a content structure for the page is created.

The patent goes into detail on how the HTML of a page can be explored to visualize the structure of a page, using something like the document object model to help understand parts of pages, and using several rules based upon visual cues such as font sizes and colors, background colors and more.

A Document Object Model is used by programmers and browsers to understand how the different HTML elements on a page, such as tables and paragraphs and images and forms might be related to one another, and the overall structure of a document. A web page is represented as if it were a tree, with each of the HTML elements being a branch or leaf on that tree. Those elements each have a name, and someone using something like javascript on the page can use those names to affect those named elements.

**Document Retrieval Based upon Blocks**

Imagine a search index that not only indicates where words are found upon documents but also on a more finely tuned level – the blocks found on pages.

Instead of ranking pages to present to searchers, the search engine may rank blocks of content to see how well they match a query.

Rankings for documents might then be created based upon the block rankings. The rank from the highest-ranking block might be used, or an average of the rankings of all of the blocks, or a combination of the rankings of the blocks might be used, or some other approach.

**Vision Based Document Segmenation Conclusion**

I’m skipping over a large number of details described in the patent and the papers, but one of the most important takeaways from this patent is that the indexing of content on web pages may be based on parts of pages, rather than the whole page.

This patent was originally filed in 2003, and more papers have come out from Microsoft since then that build upon vision-based document segmentation and the idea of breaking pages into blocks. If you’d like to explore the topic further, here are some papers worth looking at:

- [Block-based Web Search](https://www.microsoft.com/en-us/research/publication/block-based-web-search/)
- [Block-level Link Analysis](https://www.microsoft.com/en-us/research/publication/block-level-link-analysis/)
- [Learning Block Importance Models for Web Pages](http://www.cs.toronto.edu/~hfliu/papers/www04_liu.pdf)
- [Learning Important Models for Web Page Blocks based on Layout and Content Analysis](https://www.kdd.org/explorations/issues/6-2-2004-12/2-song.pdf)
- [Slicing Tree Based Web Page Transformation for Small Displays](https://www.cse.ust.hk/catalac/papers/pdabrowser_cikm05.pdf)
- [Clustering and Searching WWW Images Using Link and Page Layout Analysis](https://www.microsoft.com/en-us/research/publication/imageseer-clustering-and-searching-www-images-using-link-and-page-layout-analysis/)
- [Object-level Vertical Search](https://www.microsoft.com/en-us/research/publication/object-level-vertical-search/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fznie%2Fcidr2007-nie.pdf)
