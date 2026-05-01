---
title: "How a Search Engine Might Use Linguistic Features of Web Page Blocks to Improve Search Results"
source_url: "https://www.seobythesea.com/2011/02/how-a-search-engine-might-identify-the-functions-of-blocks-in-web-pages-to-improve-search-results/"
slug: "how-a-search-engine-might-identify-the-functions-of-blocks-in-web-pages-to-improve-search-results"
date_published: "2011-02-23T15:22:00+00:00"
date_modified: "2021-12-04T18:06:58+00:00"
author: "Bill Slawski"
---

## Web Blocks Based On Linguistic Features

There have been a number of patent filings and whitepapers from the major search engines over the past 5 or 6 years that describe how they might use Web page blocks or segments to understand things like the main topic or topics on a page, which block might be the most important for a page, what to show on smaller screens for mobile devices, and to apply different weights for links depending upon which block they are located within. This patent looks at linguistic Features to understand Web blocks better.

I’ve written about a number of those in the past in posts such as:

- [Breaking Pages Apart: What Automatic Segmentation of Webpages Might Mean to Design and SEO](https://www.seobythesea.com/2009/07/breaking-pages-apart-what-automatic-segmentation-of-webpages-might-mean-to-design-and-seo/)
- [How a Search Engine Might Analyze the Linking Structure of a Web Site](https://www.seobythesea.com/2009/08/how-a-search-engine-might-analyze-the-linking-structure-of-a-web-site/)
- [Microsoft Granted Patent on Vision-Based Document Segmentation (VIPS)](https://www.seobythesea.com/2008/09/microsoft-granted-patent-on-vision-based-document-segmentation-vips/)
- [Microsoft Playing with Blocks to Understand How Images Might be Related](https://www.seobythesea.com/2007/11/microsoft-playing-with-blocks-to-understand-how-images-might-be-related/)
- [The Importance of Page Layout in SEO](https://www.seobythesea.com/2008/03/the-importance-of-page-layout-in-seo/)
- [Smaller Screens Make Smarter Search Engines](https://www.seobythesea.com/2006/12/smaller-screens-make-smarter-search-engines/)
- [Yahoo Web Page Segmentation: Distinguishing Noise from Information](https://www.seobythesea.com/2009/10/yahoo-web-page-segmentation-distinguishing-noise-from-information/)
- [Search Engines, Web Page Segmentation, and the Most Important Block](https://www.seobythesea.com/2008/05/search-engines-web-page-segmentation-and-the-most-important-block/)
- [Google and Document Segmentation Indexing for Local Search](https://www.seobythesea.com/2006/07/google-and-document-segmentation-indexing-for-local-search/)

One of the areas that most of the patents and papers that I wrote about didn’t delve into in much detail is how a search engine might understand the functions of blocks that they identify. Is a block primarily navigation, or advertising, or a footer? Does it contain mostly information or noise? Is it decorative in purpose, or primarily a way to interact with the site owner, such as a contact form?

![an illustration of different segments of a web page such as header, navigation, and main content.](media/yahoo-document-segmentation.jpg)

A newly granted patent from Microsoft describes how they might look at linguistic and layout features associated with web page blocks to learn more about what their function is.

There are a few reasons for a search engine to break web pages into blocks.

One is to be able to return better search results.

If a page is about sports fishing, and there’s an advertisement on the same page for diet drinks, a search engine really wouldn’t want to show that page to searchers looking for diet drinks.

And speaking of ads, if the page is again about sports fishing and is showing ads from a search engine, it may want to classify the page as one about sports fishing based upon what’s found in the main content area of the page, and show ads about fishing poles, charter boats, and beach-based vacation spots, and not diet drinks.


## Why Classify Blocks On Pages By Linguistic Features

Classifying the functions of different blocks on a page can help with:

- Classifying Pages
- Clustering the pages with other similar pages
- Extracting Topics from those pages
- Breaking Pages apart for display on handheld devices
- Highlighting Blocks that might be of interest to searchers
- Fragment-based caching
- Summarizing content, and
- Ranking pages

The patent is:

[Classifying functions of web blocks based on linguistic features](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,895,148.PN.&OS=PN/7,895,148&RS=PN/7,895,148)
Invented by Wei-Ying Ma, Xiangye Xiao, and Xing Xie
Assigned to Microsoft
US Patent 7,895,148
Granted February 22, 2011
Filed: April 30, 2007

Abstract


> A classification system trains a classifier to classify blocks of the web page into various classifications of the function of the block. The classification system trains a classifier using training web pages.
>
> To train a classifier, the classification system identifies the blocks of the training web pages, generates feature vectors for the blocks that include a linguistic feature, and inputs classification labels for each block. The classification system learns the coefficients of the classifier using any of a variety of machine learning techniques. The classification system can then use the classifier to classify blocks of web pages.

The patent describes a machine-based training process that might look at a number of features related to blocks on web pages.

These can include:

- Linguistic features found within text in a block such as the parts of speech used (verbs, nouns, adjectives, etc.) and capitalization.
- Layout features about a block such as the size of the block, and the position of the block within the web page.


## Linguistic Features

We’re told in the patent that web page blocks with different functions often have different linquistic features.

For example, a block containing navigation will usually have extremely short phrases and no sentences.

The main content, which includes the primary topic of the page, will usually contain complex sentences.

That main content section also often includes named entities, such as specific persons, places and things.

Some types of blocks contain specific terms, such as a footer using the words “copyright,” “privacy,” “rights,” “reserved,” and so on. The terms “sponsored,” “ad” or “advertisement” can help a search engine recognize an advertisement block.

The linguistic features may include parts-of-speech features, named entity features, symbolic features, and capitalization features.

The patent gives us some examples of those.

**Parts-of-Speech Features** – The text of a block might be submitted to a natural language processor which would tag each word as a specific type of speech, such as nouns, pronouns, verbs, adjectives, adverbs, foreign words, prepositions, conjunctions, and more. It might then count of the occurrence of each part of speech within the text of a block. So, a block might have 10 nouns, 5 verbs, 7 adjectives, and 2 prepositional conjunctions. Those numbers might be considered a linguistic feature of a block to be compared against other blocks.

**Named Entity Features** – Named entities mentioned in a block may include references to specific persons, places, and things such as “Bill Gates,” “Redmond,” and “Microsoft.”

**Symbolic Features** – These symbols can be broken down into punctuation and non-punctuation.

**Capitalization Features** – Which words are capitalized? The first word in a sentence, or every word?


## Layout Features

There are also a number of features related to the layout of a web page block that can provide clues to a search engine about the functions behind that block.

The patent provides an example of one classification system where those are categorized as spatial features, presentation features, tag features, and hyperlink features, and some examples of how those might be identified

**Spatial Features**– involve the size and location of a block within the web page. For example, a copyright block is often at the bottom of a web page.

1. X and Y coordinates of the center point of a block/page
2. Width and height of a block/page

**Presentation Features** – involve a look at how content is presented on a page, such as font size, number of images in a block, number of words within a block, and so on.

1. Maximum font size of the inner text in a block/page
2. Maximum font weight of the inner text in a block/page
3. Number of words in the inner text in a block/page
4. Number of words in the anchor text in a block/page
5. Number of images in a block/page
6. Total size of images in pixels in a block/page
7. Total size of form fields in pixels in a block/page

**Tag Features** – indicate the types of HTML elements in the markup language within a block. So, if you see a form element and an input element, that could indicate that the block those appear within is one involving interaction.

1. Number of form and input tags in a block/page: <form>, <input>, <option>, <selection>, etc.
2. Number of table tags in a block/page: <table>, <tr>, <td>
3. Number of paragraph tags in a block/page: <p>
4. Number of list tags in a block/page: <li>,<dd>, <dt>
5. Number of heading tags in a block/page: <h1>, <h2>, <h1>

**Hyperlink Features** – could indicate that a block is navigational in nature.

1. Total number of hyperlinks in a block/page
2. Number of intrasite hyperlinks in a block/page
3. Number of inter-site hyperlinks in a block/page
4. Number of hyperlinks on anchor text in a block/page
5. Number of hyperlinks on images in a block/page


## Take Aways

There’s a good possibility that both Google and Bing are looking at blocks or segments on pages to focus upon indexing the most important content on pages and devaluing the weight of content within boilerplate or less important blocks.

There’s also a good chance that they are focusing upon the main content of a page to determine which advertisements to present on pages for sites that use their advertising.

If you were to look carefully at the pages on your site, and break them down into blocks, what might each block be telling the search engines about your pages?

The features listed above are taken from the description of the Microsoft patent. Chances are that Microsoft is looking at other features as well, and may not be looking at some of the features listed above.

Chances are also good that Google has developed a way of understanding the different functions of segments that they see on pages.

Can you think of any potential problems with some of the features that are listed above?

Are there some other features that aren’t listed that might be helpful?
