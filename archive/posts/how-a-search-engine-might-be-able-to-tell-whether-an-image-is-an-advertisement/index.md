---
title: "How a Search Engine May be able to Tell if an Image is an Advertisement Image"
source_url: "https://www.seobythesea.com/2011/03/how-a-search-engine-might-be-able-to-tell-whether-an-image-is-an-advertisement/"
slug: "how-a-search-engine-might-be-able-to-tell-whether-an-image-is-an-advertisement"
date_published: "2011-03-13T14:21:09+00:00"
date_modified: "2020-11-03T15:57:55+00:00"
author: "Bill Slawski"
---

Recently, many are pointing to [Google’s Panda update](https://www.seobythesea.com/2011/03/searching-google-for-big-panda-and-finding-decision-trees/) as one that considers things like how much advertising and where advertisements are located on a web page as indications of the quality of a Web site.

Of course, there are likely other factors that the search engine would consider when scoring a site based upon quality signals, but the ratio of advertising to content seems to be an important signal.

![An image of someone posting a wall advertisement image between two other posters on a brick wall.](media/advertising-images.jpg)

Many sites rely upon advertisements as a source of revenue, and being able to offer ads that are relevant to a visitors informational and transactional needs isn’t a bad thing. Many sites referred to as content farms primarily offer enough information to have their pages rank highly in search engines for certain terms without providing a range and depth of information on topics related to those terms.

Their goal is to attract visitors and get them to click upon advertising found on their pages. Some of those content farm sites do this by using the content found on other pages on the web, with or without permission or the licensing of that content. Others hire people to write articles at very low prices and don’t focus much upon the actual quality of that content.

Over at Google’s Webmaster Central help forums, a Google Search Engineer started a thread for people who believe that they were negatively impacted by the Panda Update who “shouldn’t” have been. At the time of writing this post, there are more than 700 responses in that thread, [Think you’re affected by the recent algorithm change? Post here.](http://productforums.google.com/forum/#!category-topic/webmasters/crawling-indexing--ranking/NNinlDYGgwM)

Since advertising seems to be one of the things considered in the update, I thought it was interesting to see a patent filing published from Microsoft that explores the differences between images that are used as advertising, and images that aren’t. I imagine that some people who were carrying text-based ads like Google’s Adsense might consider replacing some of the textual ads with image-based ads. I’m not sure that would make much of a difference. As the Microsoft patent points out, there are ways to determine whether an image is an ad.

The Microsoft patent filing is a machine training approach that learns as it goes, to be able to classify images as advertisements by looking at a range of features associated with images. The patent application is:

[Classification of Images as Advertisement Images or Non-Advertisement Images](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110058734%22.PGNR.&OS=DN/20110058734&RS=DN/20110058734)
Invented by Mingjing Li, Zhiwei Li, Dongfang Li, Bin Wang
Assigned to Microsoft
US Patent Application 20110058734
Published March 10, 2011
Filed: November 12, 2010

Abstract


> An advertisement image classification system trains a binary classifier to classify images as advertisement images or non-advertisement images and then uses the binary classifier to classify images of web pages as advertisement images or non-advertisement images. During a training phase, the classification system generates training data of feature vectors representing the images and labels indicating whether an image is an advertisement image or a non-advertisement Image.
>
> The classification system trains a binary classifier to classify Images using training data. During a classification phase, the classification system inputs a web page with an image and generates a feature vector for the image. The classification system then applies the trained binary classifier to the feature vector to generate a score indicating whether the image is an advertisement image or a non-advertisement image.

While this is Microsoft’s patented process, chances are that Google could be looking at very similar information to distinguish between images that is an advertisement image and one that isn’t.

There are a number of reasons to distinguish between advertising and non-advertising images. One is that a search engine wouldn’t want to include images that are advertisements in its image search results. Another might be to get a sense of how much advertising is on a page compared to non-advertising content.

**Feature Types Associated with Classification**

The patent filing provides us with four different possible feature types that the search engine might look at, and examples or reasons why these features are useful in determining whether or not an image is an advertisement. These include text features, link features, visual layout features, or content features.

A text feature looks at words that might be associated with an image that could be found in places like the URL of the image, the ALT text from the image, or text that surrounds the image. These words might provide an indication that the image is an advertisement, including words like “pop-up” and “advertisement.”

Link features are ones involving where links associated with an image might point. Does the image link to a page on the same site where the image is found, or to a different location which might be an advertisement server or a web page where an advertised item might be purchased.

A visual layout feature identifies where an image is visually laid out within a web page.

Content features of an image relate to the content of the image itself, and can include:

- Aspect ratio of the image,
- Image format,
- Whether the image is a photograph or a graphic,
- Size of the image,
- Number of different colors of the image,
- Percentage of gray area of the image, and
- An indication of whether the image has high contrast.

Some of these content features may be helpful in determining whether or not an image is an advertisement image.

We’re told by the authors of the patent that an aspect ratio may be useful in identifying banner advertisements which tend to be short and wide.

The image format can identify images with multiple frames (used to provide animation).

Distinguishing between photos and graphics is important because most ads tend to be graphics which incorporate information about an advertising offer.

Size is useful because ads need to be at least a certain size to be noticed.

The number of colors used in a graphic is important because advertising images generally have fewer different colors than non-advertisement images.

Gray area is worth considering because “advertisement images often have varying shades of gray as a background.”

Contrast is looked at because an advertisement image usually is created to have sharp contrast.

**Conclusion**

While this patent provides a number of examples of how a search engine might decide whether or not an image is an advertisement image or not, chances are there are other things the search engine might look at as well.

In a system like the one that Google is using to rerank search results based upon the “quality” of pages, chances are that when the search engine is looking at the advertisements on pages it isn’t just looking at the text-based ads, but also images that are advertisements as well.
