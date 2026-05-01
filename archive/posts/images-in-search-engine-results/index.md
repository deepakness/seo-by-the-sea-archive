---
title: "Dominant Media Elements in Search Engine Results"
source_url: "https://www.seobythesea.com/2008/12/images-in-search-engine-results/"
slug: "images-in-search-engine-results"
date_published: "2008-12-19T01:02:21+00:00"
date_modified: "2021-07-06T15:38:55+00:00"
author: "Bill Slawski"
---

When a search engine presents the results of a search to you, it will often show you the title of a page, a short snippet from the page or a meta description, and the URL of the page. While that information can help searchers choose which pages to visit, showing images from the pages listed may provide a helpful clue about what those pages are about.

But if a search engine started including pictures from web pages in search results, how would it go about deciding which image to show to searchers? Which image on a page might be the most important if there is more than one?

**Choosing Pictures for Search Results**

If you publish pages on the web, do you include pictures on those pages? How meaningful are those images by themselves, out of the context of your web page?

How well would they describe the content that might be found on your web page if they were presented alone or with the title, snippet and URL shown in a search engine result? If those images were made thumbnail size, how well might they represent your pages? Would you want a search engine to show an image from your page next to a search result for your page?

Suppose you’ve used the [Cuil Search Engine](http://web.archive.org/web/20090425215821/http://www.cuil.com/), you probably noticed that they do try to include images with search results. You may have also noticed that the images they display aren’t always helpful in providing information about the pages they are matched with or may not be the best of choices from the pages they appear upon. Hopefully, they are fine-tuning their use of pictures.

If pictures in search results are something we will see more commonly in the future, we may need to think more about how the images we use on our pages will appear in places like search engine results.

Google will often show images associated with news articles in [Google News](https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en), and in Google News results that sometimes appear in web search results, next to the snippet that accompanies the result. Those tend to be pretty relevant for the articles that show up next to.

Today, Microsoft published a patent application that discusses how they might choose images from web pages to show to searchers in search results. While the processes they use might not be what other search engines would use, the patent filing might help us think about how other search engines might also use pictures.


## Dominant Media Elements

Microsoft’s approach discusses using pictures in search results and how those pictures might be chosen if there is more than one image appearing on a page. Images are referred to in the document as “media elements,” and the use of that phrase had me wondering if they would consider using other media types in this method, such as videos.

An important and informative image about the page that it appears upon is called a – dominant media element – one that is “substantially related to a topic or theme of its display page.”

A search engine might determine how dominant each image is on a website automatically – having people determine that would take too many people. But, human reviewers might be used initially to train a program that might then use what it learned in that training to determine its own for other sites.

A dominance score would also be based upon features of the images. An image with the highest score might be considered the most dominant media element on the page and might be used in search results alongside the title, description, and URL. If a page has multiple dominant elements, the one that is most relevant to the search query might be the one used.

The patent application is:

[Adding Dominant Media Elements to Search Results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080313177.PGNR.&OS=dn/20080313177&RS=DN/20080313177)
Invented by Ming Jing Li, Shuming Shi, Wei-Ying Ma, Zhiwei Li (Beijing, CN)
Assigned to Microsoft
US Patent Application 20080313177
Published December 18, 2008
Filed: August 21, 2008

Abstract


> A method and system for determining the dominance of the media elements of display pages are provided.
>
> The dominance system provides a scoring mechanism for scoring the dominance of media elements of display pages based on the features of each media element of the display page.
>
> To generate the scores for the media elements of the display page, the dominance system first identifies the media elements and then identifies the features of the media elements.
>
> The dominance system then scores the identified media elements using the provided scoring mechanism and the identified features.

**Using Features to Decide Which Images are Dominant**

A page about the White House in Washington, D.C., might have a photo of the White House and a picture of the Presidential seal. The White House photo might be considered the dominant media element of the page, and the picture of the Presidential seal could be considered a non-dominant media element. The decision of which image to show would be based upon looking at different features.

Features that might be looked at could include the size of the image and its location on the page. In one version of the process described in the patent application, the dominance scoring system might consider three different types of features; image-level features, page-level features, and website-level features, for dominant Media Elements.

Microsoft explored using image-level features, page-level features, and website-level features in a previous patent filing that described how images could be used to help rank web pages.

I wrote about that method in a post titled [How Search Engines May Use Images to Rank Web Pages](https://www.seobythesea.com/2008/09/how-search-engines-may-use-images-to-rank-web-pages/). Some more details about features of images in that patent application don’t appear in this one, but this one tells us more about the assumptions behind the features they might consider.

***Image level features*** would be taken from the image, and could include:

*Image size* – the width of the image times the height of the image (we’re told that dominant images tend to be bigger than non-dominant ones).

*Aspect ratio* – the minimum of the width and the height divided by the maximum width and the height. (again, we are told that dominant images tend to have larger aspect ratios than non-dominant images).

*Image quality* – Such things as sharpness, contrast, colorfulness, blurriness, and so on. Sharpness could be the ratio of “clear” edges to all edges. The contrast might be defined as the ratio of brightness of the foreground to the background brightness. Colorfulness would be the number of colors of the image. (Dominant images supposedly tend to be sharp and colorful images with high contrast.)

*Image category* – whether the image is a photograph and if it contains a human face. (Again, we’re told that dominant images are more likely to be photographs that contain human faces than non-dominant images.)

***Page Level Features***

The patent makes a few assumptions in the section about image-level features. One made-for-page-level feature is that the most important and informative images of web pages are often placed in a position where they will attract attention from visitors to the page.

*Position of the image on the web page* – the position might be identified by looking at the x and y coordinates of the image within the web page. We’re told that dominant Media Elements tend to be located at the center of the top of the web page.

*Area ratio of the image to the web page* – the image size ratio to the web page size. Again, dominant media elements supposedly occupy larger areas of their web pages than non-dominant images.

***Website Level Features***

Some images appear on a site in advertisements, logos, decorations, navigation, bullet points, etc. While some of these images may have high image qualities and could be located in important areas of web pages, they may not help a searcher understand what a specific page might be about if seen next to a search result for that page.

We’re told that these “noisy” kinds of images tend to have some common characteristics:

*Image is external to the site* – advertisements tend to be hosted on other sites.

*Image is duplicated on many pages of the site* – non-dominant images such as logos tend to appear on many pages of a website or a certain percentage of pages.

**Dominant Media Elements Conclusion**

The possibility of a search engine including images from your web pages in search engine results might get you to think about the quality of the images you’re using on your pages and how well those images reflect the content of those pages.

If a search engine showed images from your pages in search results, would you be happy with the images that they show?

A couple of interesting articles I found about using images in web pages that stress the importance of using meaningful images that are related to the content of the pages they appear upon:

- [Top 7 Most Clich Stock Images Used in Web Design](https://justcreative.com/2008/09/30/top-7-most-cliche-stock-images-used-in-web-design/)
- The Dilemma of Using Images on Web Sites
