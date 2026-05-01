---
title: "Microsoft Using Blocks to Understand Which Are the Most Important Images"
source_url: "https://www.seobythesea.com/2007/11/microsoft-playing-with-blocks-to-understand-how-images-might-be-related/"
slug: "microsoft-playing-with-blocks-to-understand-how-images-might-be-related"
date_published: "2007-11-07T11:07:59+00:00"
date_modified: "2020-06-24T07:13:42+00:00"
author: "Bill Slawski"
---

What is the most important part of a page? If a page has images on it, what images are the most important images?

If a search engine were to try to understand whether or not any images on the pages of a site were related to each other, how would it go about figuring that out?

The first two questions are easy to answer – the most important part of a page is the part that visitors focus upon when they look at it. The most important images are ones that people look at and pay attention to when they are on that page.

A newly granted patent from Microsoft tries to solve all three questions in an automated manner that can break a page down into blocks, and decide a level of importance amongst those blocks when comparing them to each other – what is the probability that a user will focus upon each of those blocks (or upon images within those blocks) when looking at the page.

It might consider the importance of one block to another on the same page and other pages within the same site by looking at links between the blocks on those pages. It might view whether images are within the same blocks or related blocks, and also look for links to images from different blocks to see if and how images might be related.

So, imagine a news site with a front-page that is broken into excerpts for articles, with links to fuller stories inside. A number of them have one or two images. Each excerpt might be considered a block, and the images within that block might be considered related because the are shared within a block. If there are additional images in the full story linked to by that block, the images within that story might also be considered to be related

The patent is [Method and system for identifying image relatedness using link and page layout analysis](https://patents.google.com/patent/US7293007B2/en)

From the patent on blocks:


> A block of a web page represents an area of the web page that appears to relate to a similar topic. For example, a news article relating to an international political event may represent one block, and a news article relating to a national sporting event may represent another block.

So, why break a page down into blocks, instead of just trying to index everything on a page? Probably because many web pages cover more than one topic, especially in the instance above where that page has multiple sections on different topics.

Why decide within those blocks which ones are the most important? Again, on that news page, the articles or excerpts are probably a lot more important than the copyright notice, or a set of navigational links, or some boilerplate that appears on every page of the site.

Plus, figuring out the importance of blocks can help with understanding the relatedness of blocks within the pages of a site – understanding the layout of a page and how parts of a page might link to each other can help with indexing:


> After calculating a numeric indicator of these importances for pairs of pages and blocks and pairs of images and blocks, the link analysis system generates an indicator of the relatedness of each image to each other image by combining the calculated importance of a block to a page, the calculated importance of a page to a block, and the calculated importance of an image to a block.
>
> Because the relatedness of an image to another image is based on block-level importance rather than on page-level importance, this relatedness is a more accurate representation of relatedness than conventional link-based search techniques.

We’re also told that rankings of images may benefit from this method of looking at blocks upon pages:


> The link analysis system may also use the relatedness of images to generate a ranking of the images. The ranking may be based on a probability that a user who starts viewing an arbitrary image will transition to another image after an arbitrarily large number of transitions between images.
>
> The link analysis system may also generate a vector representation of the images based on their relatedness and apply a clustering algorithm to the vector representations to identify clusters of related images.

The patent was originally filed for in 2004, and this idea of looking at blocks isn’t surprising or new. For a good overview of this blocking process, see the Microsoft paper [Block-level Link Analysis](https://www.microsoft.com/en-us/research/publication/block-level-link-analysis/). For newer work on a very similar process, see: Search Objective Gets a Refined Approach
