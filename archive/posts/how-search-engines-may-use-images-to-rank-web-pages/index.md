---
title: "How Search Engines May Use Images to Rank Web Pages"
source_url: "https://www.seobythesea.com/2008/09/how-search-engines-may-use-images-to-rank-web-pages/"
slug: "how-search-engines-may-use-images-to-rank-web-pages"
date_published: "2008-09-10T00:43:57+00:00"
date_modified: "2021-07-07T11:26:34+00:00"
author: "Bill Slawski"
---

Images on a web page can provide a chance to express ideas visually that can convey a considerable amount of information, and may also add to the attractiveness and perceived quality of a site.

When search engines rank pages in search results, images may have some impact on those rankings.

A search engine might look at the *captions* associated with pictures, or *alt text* provided as an alternative for when people browse the Web without images turned on or when those browsers are using screen reading software.

Search engines might also look at *text surrounding an image*, especially within the same HTML container, or block, or segment.

Those indexing services could also associate *other content* on a page with an image, including the *page’s title*.

There are a number of uses that people might put images to when creating a Web page, such as:

- Page and layout decorations
- Bullets for lists
- Site logos
- Spacer images to help keep a layout in place
- Topical images – pictures that add to and illustrate concepts discussed on pages
- Galleries of pictures of people and places and things
- Advertising images
- Banners

Some images are more important to the content of a page than others, so how might a search engine use the text associated with some images and not others? What does a search engine look at when deciding how important an image might be to a page?

**Image Scores**

A new Microsoft patent application recently published provides some approaches to creating and using a score for images that may impact Web search results in some exciting ways.

This scoring system identifies text associated with an image in a document, referred to as “image text,” and determines an “image score” based upon the image text for an image in that document.

The image score can be used as an indication of the relevance of the document to the image text. The image score may be used in many ways, including a signal in ranking web pages of a search result based on their image scores.

The patent application is:

[Scoring Relevance of a Document Based on Image Text](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080215561.PGNR.&OS=dn/20080215561&RS=DN/20080215561)
Invented by Qing Yu, Shuming Shi, Zhiwei Li, Ji-Rong Wen, Wei-Ying Ma
Assigned to Microsoft
US Patent Application 20080215561
Published September 4, 2008
Filed March 1, 2007

Abstract


> A method and system for determining the relevance of a document having text and images to a text string are provided. A scoring system identifies image text associated with an image of the document.
>
> The scoring system calculates an image score indicating the relevance of the image text to the text string. The image score may be used in many applications, such as searching, summary generation, and document classification, image search, and image classification.

**Applications that Can Use an Image Score**

The image score may be used in many applications. Some examples mentioned in the patent application include:

1) A search engine may rank web pages of a search result based on their image scores. The image score may be combined with a text relevance score and a static ranking score (like PageRank) to provide an overall ranking.

2) A document summary system may look at an image score to determine whether an image of a document should be included in a summary, or snippet, of the document.

3) A document classification system may use an image score calculated from a comparison of image text to a textual description of a class as an indication of similarity between the document and the class.

4) A vertical search system may factor in an image score to search for items, such as products or news stories.

**Calculating an Image Score**

A web page may have a large image positioned at the top center of the web page and small images at the bottom of the page acting as links to other pages.

The large image may be more important to the web page, and the image text of that image may better represent the overall topic of the page than the image text of the other images.

The scoring system may increase the image score of that larger image, and decrease the image scores of the smaller pictures.

The importance of an image may be based on:

- Image level features – taken from the image itself
- Page level features – based upon the relationship of an image to a page, and,
- Site level features – based upon the relationship of the image to the web site of its web page

A table from the patent gives us an idea of what might be looked at in creating an image score based upon image level features, page level features, and site level features:


<table border="1" cellspacing="0" cols="2" frame="box" rules="groups"><colgroup><col width="178/"/></colgroup><colgroup><col width="269/"/></colgroup><tbody><tr><td height="34" width="178"><b><font color="#000080" size="4"> Feature Level </font></b></td><td width="269"><b><font color="#000080" size="4"> Feature Description </font></b></td></tr></tbody><tbody><tr><td bgcolor="#808080" height="46"><b><font size="3"> Image Level </font></b></td><td bgcolor="#CCCCCC"><font size="3">Size – Area of the image </font></td></tr><tr><td bgcolor="#808080" height="66"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Width/height ratio – Ratio of the width of the image to the height of the image </font></td></tr><tr><td bgcolor="#808080" height="48"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Blurriness – Degree of blur of the image </font></td></tr><tr><td bgcolor="#808080" height="48"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Contrast – Contrast within the image </font></td></tr><tr><td bgcolor="#808080" height="48"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Colorfulness – Measure of color within the image </font></td></tr><tr><td bgcolor="#808080" height="66"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Face – Flag indicating whether the image contains a face Photo vs. graphic </font></td></tr><tr><td bgcolor="#808080" height="66"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Flag indicating whether the image is a photograph or computer generated graphic </font></td></tr></tbody><tbody><tr><td bgcolor="#9999FF" height="63"><b><font size="3">Page Level </font></b></td><td bgcolor="#CCCCFF"><font size="3"> Relative position X – Relative horizontal position of the image within the web page </font></td></tr><tr><td bgcolor="#9999FF" height="66"><font size="3"><br/></font></td><td bgcolor="#CCCCFF"><font size="3"> Relative position Y – Relative vertical position of the image within the web page </font></td></tr><tr><td bgcolor="#9999FF" height="48"><font size="3"><br/></font></td><td bgcolor="#CCCCFF"><font size="3"> Relative size – Percentage of the web page occupied by the image </font></td></tr><tr><td bgcolor="#9999FF" height="84"><font size="3"><br/></font></td><td bgcolor="#CCCCFF"><font size="3"> Relative width/height – Ratio of the width-to-height ratio of the image to the ratio width-to-height ratio of the page </font></td></tr></tbody><tbody><tr><td bgcolor="#808080" height="66"><b><font size="3">Site Level </font></b></td><td bgcolor="#CCCCCC"><font size="3"> Inner site – Flag indicating whether the image is contained within the web site of the web page </font></td></tr><tr><td bgcolor="#808080" height="31"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Frequency in site </font></td></tr><tr><td bgcolor="#808080" height="66"><font size="3"><br/></font></td><td bgcolor="#CCCCCC"><font size="3"> Number of times the image appears on different web pages of the web site of the web page</font></td></tr></tbody></table>

**Image Text – What the Picture is About**

Image text may be the anchor text (if the image is also a link), URL text, alt text, and surrounding text associated with an image.

The scoring system may use various techniques for identifying surrounding text of an image:

- Rendering a web page in memory and analyze its layout to identify the surrounding text based on distance from the image.
- Using rules to identify surrounding text from the HTML document representing a web page (e.g., passages consisting of 20 terms before or after the image).
- Using a Document Object Model (“DOM”) based technique for identifying surrounding text.

**Discarding Some Images**

Pictures that aren’t important may be removed to improve the accuracy of the scoring, such as tiny images, or ones below a certain threshold in terms of importance.

**Conclusion**

It has been a fairly common belief that a search engine will look at the text associated with web pages when ranking those pages. Still, information from the search engines about how they might actually use text related to images has been somewhat scarce.

This patent application provides us with an opportunity to think about how a search engine may place more importance upon text related to some images over other images based upon how important an image might seem to be to a page.

It also describes how a score associated with images might be used in other ways, such as including an image with a snippet of text that shows up in search results for News and Web searches.

How important are the different images that appear on your site, and what do they tell search engines about your pages?
