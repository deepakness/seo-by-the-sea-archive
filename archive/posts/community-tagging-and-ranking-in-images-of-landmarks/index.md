---
title: "Community Tagging and Ranking Landmark Images"
source_url: "https://www.seobythesea.com/2008/05/community-tagging-and-ranking-in-images-of-landmarks/"
slug: "community-tagging-and-ranking-in-images-of-landmarks"
date_published: "2008-05-16T17:25:05+00:00"
date_modified: "2020-07-11T21:27:08+00:00"
author: "Bill Slawski"
---

In addition to collecting a lot of information about the Web by using crawling programs to index content across the internet, search engines can learn a lot about pages and images and videos and other objects on the web by watching what we choose when we search, by seeing how we browse web pages through their toolbars, and by noting what words we might choose when we annotate and tag images and pages.

As publishers of text and links and pictures, as users of web pages, and as interactive participants on pages when leaving comments and tags and annotations, we provide search engines with information about our interests and what we might be interested in seeing on the Web.

As those search engines learn about us and our interests from the pages that we like to visit and the images and text that we might publish, they can compare what we see and what we do online with other travelers and publishers on the Web, and they might view us as communities who may share some common interests, and whom they can learn from.

Search engines pay attention to the links that publishers of pages point towards other pages, and the words within those links to help define what pages might be about.

A large number of patent filings and white papers from search engines also describe how search engines may be looking data about how people search and the query terms that they use, what pages they might visit and spend time upon, and even searchers’ past searching and browsing and bookmarking activities, to determine what pages to show those searchers in response to queries entered into search boxes.

It’s interesting to see some specific examples of how user information might be used by a search engine to provide rankings for searches.

**Ranking Landmark Images at Flickr**

I recently wrote about a Microsoft patent that discussed some ways that images taken from Web pages might be ranked in image searches for specific keywords, in the post [How Do Images Get Ranked in Image Search?](https://www.seobythesea.com/2008/05/how-do-images-get-ranked-in-image-search/)

While the authors of that patent filing described some very interesting approaches to determining what images were about and how to rank them, they did so in the context of pictures found on Web pages.

Imagine instead, trying to understand what images are about in a place like Flickr, where a lot of metadata is captured for those pictures – titles, descriptions, tags from people posting and viewing images, and even automatically generated tags that might provide information such as the location where the picture was taken.

A recent paper from Yahoo researchers, [Generating Diverse and Representative Image Search Results for Landmarks](http://infolab.stanford.edu/~mor/research/kennedy-www08.pdf), explores some interesting ways to rank and provide landmark images that involve the use of community input and visual analysis of images. The authors start the paper with the question:


> Can we leverage the community-contributed collections of rich media on the web to automatically generate representative and diverse views of the world’s landmarks?

What is exciting about this work is that a process like the one described in the paper might be very useful in a standard web-based image search engine, which the authors note in the conclusion of the paper.

**Two Stages Involving Landmark Images**

For a system like this to work well over such a large body of images, it needs to be able to work in an automated manner.

Since this work focuses upon landmarks at specific locations, only images with locations associated with them were used. There are more than 40,000,000 public geotagged images at Flickr. Some were automatically tagged with a location with the use of location-aware cameraphones and GPS integrated cameras, while others were tagged with a location by the people who uploaded them.

The first stage involved looking at the tags and location metadata associated with the images to cluster the pictures together that represent landmarks or geographic features.

The second stage involved applying visual analysis to images associated with discovered landmarks, so that representative sets of images could be extracted for each landmark.

By clustering images by tags at the beginning, the process of comparing images to see how similar they might be in the second stage involves much less work because only images from the same landmarks or geographic areas are then being compared.

**Clustering Visually Similar Photos**

There were a few rules followed in the process of clustering together photos from landmarks identified by tags from community members who took the pictures and uploaded them to Flickr. The authors tell us that the following assumptions were at the core of those rules:

(1) A cluster would contain photos taken from many different users, indicating that there is a broad interest in the subject shown in the photos,

(2) There would be some amount of visual cohesiveness in the images – in other words, people were finding the same things about the scenes at the locations interesting, with the same objects being photographed or the same type of photos being taken, and;

(3) The group of photos would be distributed relatively uniformly in time – showing that there was an interest in the landmark itself, and not a specific event that happened at the landmark’s location.

**Landmark Images Conclusion**

Community input in tagging, along with geotagged locations was an important first part of this process, helping to identify landmarks.

Information about the community and the pictures that they took also played an important role in clustering images – numbers of people taking pictures from similar viewpoints over time.

The paper does cover some additional technical aspects of the ranking of images, but I think one of the key takeaways from this paper is how information about individuals and communities can be a key factor in identifying landmarks and finding images that represent important and diverse views of those landmarks.

It’s interesting to consider some of the ways that user data may play a role in ranking other things on the web, such as videos, businesses in a business search, and web pages in web search. Will the roles of communities become larger and larger?
