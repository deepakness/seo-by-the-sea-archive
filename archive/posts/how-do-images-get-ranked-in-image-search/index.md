---
title: "Ranking Images in Search Engines"
source_url: "https://www.seobythesea.com/2008/05/how-do-images-get-ranked-in-image-search/"
slug: "how-do-images-get-ranked-in-image-search"
date_published: "2008-05-01T10:10:44+00:00"
date_modified: "2020-07-01T12:08:00+00:00"
author: "Bill Slawski"
---

## Ranking Images at Google and Bing

When you perform a search for images at Google, do you ever wonder why some pictures show up before others? What goes into ranking images there?

A recently published paper from Google, [PageRank for Product Image Search](http://www.esprockets.com/papers/www2008-jing-baluja.pdf) (pdf), provides some thoughts on how the actual content of images themselves can be incorporated into how ranking images at Google.

A patent application published last week from Microsoft provides another look at ranking images in image search, and some of the things that might be considered.

It’s not quite as revolutionary an image search approach as the one suggested in the Google paper, but there may be some surprises in how ranking images happen. The patent filing is:

[Ranking Images for Web Image Retrieval](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080097981.PGNR.&OS=dn/20080097981&RS=DN/20080097981)
Invented by Hugh J. Williams, Nick Craswell, Nicholas A. Whyte, Julie H. Farago, James E. Walsh, and Carsten Rother
Assigned to Microsoft
US Patent Application 20080097981
Published April 24, 2008
Filed: October 20, 2006

Abstract


> A system, method, and computer-readable media are disclosed for providing images in a ranked order. The system can include an aggregation component for aggregating a plurality of images with corresponding text.
>
> Additionally, the system can include a name detector for detecting names within a search query. Moreover, the system can include a ranking component for ranking the aggregated images based on whether the name detector detects a name.

Image search technology at the major search engines does mostly rely upon searches where images are associated with keywords rather than for specific details about the images themselves (such as file size, file type, resolution, etc). Images are indexed by the URL where they appear, and the text associated with the page at that URL.

Sometimes the text on those pages isn’t very relevant to the image presented on those pages. A way of ranking images using a mix of ranking factors might make it more likely that the image presented to people searching for them is related to the query they used during their image search.

The authors of the patent filing tell us that the factors they list in the document are an illustration of what they might look at when ranking images and that these signals may be modified or added to in the final process.


## Associating Text and Names with Ranking Images in Image Search

Deciding what images are associated with which queries first depends upon a search engine associating images with keywords that might be used as search queries.

A web crawling program travels through the web and aggregates images and text that appear on the same pages as those images. It might take all of the text from those pages and store it in a database, or text that is only a certain distance away from the pictures.

It might also look for text that is associated with an image but is found on different pages (perhaps links to the picture, and possibly text associated with those links).

Ranking factors are then used to determine the relevance of a picture to the query and the order that these associated images are presented to a searcher.

A name detection program might recognize a query as a person’s name, and might trigger the use of a face detector program, to show people in response to queries that use people’s names.


## Some image ranking factors that can be employed in Image Search

***Number of Websites that Contain an Identical Image***

Images that appear on more than one web site might be more relevant for a query term than images that only show up on one web site, or they could be considered less relevant.

The reasoning behind this isn’t described, but maybe the text associated with each showing of the image is compared, and if it is similar from one to another it might be considered relevant for the text used. If that text differs with each display, it might be considered less relevant.

Finding whether images are identical might mean looking to see if the images shown on different pages are actually at the same address. For example, the same picture may be shown on ten different web pages, but the image itself is at one address, such as:

http://www.example.com/picture.jpg.

Identical pictures that aren’t at the same address might be compared by electronically reducing them to a computer-readable hash value and comparing them to each other.

***Number of Websites that Contain a Similar Image***

Possibly following the same thinking as above, text associated with similar versions of images at different pages may reinforce the relevance of an image to text or may make it seem less relevant depending upon the similarity of text on the different pages.

A similar image is one that is resized to be larger or smaller, or has been cropped to contain only part of another image, or has had a border added to it.


## Size of Images

The size of an image may also be considered when ranking images. The patent application tells us that “users are more likely to click on images with the greater number of pixels,” so they may rank images higher if they have more pixels. But, we are also told that images with a great number of pixels might be ranked lower than images with a lesser number.

Not quite sure what the size of an image has to do with its relevance. Perhaps this ranking factor has more to do with providing good user experience.


## Link Relationships Between Images

Some images are linked together, such as a thumbnail version, and a larger version of the same picture. Information about the images could be shared, such as file sizes in pixels, as well as text associated with each picture. How do such links impact ranking images?

Again, the patent application tells us that this information might cause the images to be ranked more highly or less highly for certain keywords, but doesn’t explain why.

It’s possible that if the linked pictures have text near each that is related in a meaningful manner that it could increase the relevance of those images for that text. If there is associated text, and it isn’t related, they might be seen as less relevant.


## Frequency of an Image Within a Website

The number of times that an image is used on the same web site might influence the ranking of that image for certain keywords, both positively and negatively. This could be an image used on more than one page, or on the same page more than once.

If the image is part of the graphic design of the site, like a list bullet, rather than being meaningful on its own, it might be ranked lower. If it has more meaning on its own (perhaps a logo for the site?), it might receive a higher ranking.


## Image Feature Levels

Features of a picture can also have an effect on ranking images, such as “number of pixels, aspect ratio, image file size, image entropy, and image gradient.” Not sure how this is considered a relevance factor, but there might be some thought behind the quality of images as a quality or importance measure.

It could also be a nod again to the idea that the better quality an image is, the better the user experience in seeing it.


## Other Ranking Images Factors

a) A total number of images on a page
b) Total number of images that are linked to by a particular page
c) Total number of thumbnail images that are located on the same webpage as the ranked image.
d) The total number of links there are to the URL of an image.


## Weighting Text by Its Distance from an Image

Text that is closer to an image on a web page may be more relevant to what the picture is about than text that is further away. The distance may be calculated a number of ways, including looking at different distance elements, such as:

a) The number of intervening words between the text and the image,
b) The number of intervening full stops such as “.” “?” “!” and other sentence-ending punctuation/symbols between the text and the image,
c) The number of intervening table data tags (<td>) between the text and the image, and;
d) The number of intervening table rows tags (<tr>) between the text and the image.


## Face and Name Detection

Images with the greatest number of faces might be ranked higher than others in some instances, and with only one face in them ranked higher in other instances. Again, the rationale behind those factors isn’t detailed in the patent filing.

It’s possible that if the search query is detected to be for a specific person’s name, that a single face might be the one ranked higher.


## What Google may be looking at in Images

The Microsoft patent application on ranking images doesn’t go into much detail on why some of the factors they point out might be helpful in determining how relevant an image might be for certain keywords, but it does describe a number of factors that go much beyond just associating text that appears upon a page with the image or images on those pages.

When I optimize an image for Google’s image search, I pay a lot of attention to the words that may be associated with an image. These can include the file name of an image (and whether or not the words in that file name are separated by hyphens. I also look at the alt text in images, and whether or not the image is a meaningful one that fits well with what the page is about, and if that alt text describes that well (and uses keywords from the page.) If the text associated with the image in a caption, or in paragraphs around and image also help describe it and are also meaningful that can help ranking images in Google image search.
