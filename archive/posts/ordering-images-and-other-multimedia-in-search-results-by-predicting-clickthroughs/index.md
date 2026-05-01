---
title: "Ordering Images (and other Multimedia) in Search Results By Predicting Clickthroughs"
source_url: "https://www.seobythesea.com/2009/07/ordering-images-and-other-multimedia-in-search-results-by-predicting-clickthroughs/"
slug: "ordering-images-and-other-multimedia-in-search-results-by-predicting-clickthroughs"
date_published: "2009-07-06T11:40:33+00:00"
date_modified: "2021-07-06T13:51:06+00:00"
author: "Bill Slawski"
---

Search for [ships] in Yahoo Image Search, and you’ll see a good number of images of ships. How do they get placed in the order that they appear within?

![yahoo image search results showing images of ships.](media/yahoo-ships.jpg)

A search engine tends to rely upon text associated with those images to rank them in image search. That could be alt text associated with the image, or a caption, or other text that shows up on a page near the picture. Some other information may also be used to rank those images, such as how relevant that page an image appears upon might be for the query term searched for and the quantity and quality of links pointing to the page.

Another signal that a search engine might consider may be the number of times a searcher may select an image when they see that image in search results. A potential problem with using selections or clickthroughs of images as a signal is that many searchers often expect that images (or web pages or news results or videos) near the top of search results tend to be the most relevant for search results and may be more likely to click through images or other kinds of search results at the top of listings that search engines show them.

Imagine a search engine coming up with a prediction model for different queries. The search engine might predict how often searchers might click on a result at different positions in search results. For example, the top result might be clicked upon 12 percent of the time, and the second result 9 percent of the time, and the third result 6 percent of the time, and so on.

And then, the search engine tracked the actual percentage of clicks each result received to see if some results received more clicks than predicted (therefore overperforming) and other results received fewer clicks than predicted (therefore underperforming). The search engine could move some results around and see if certain images tended to overperform while others underperformed based upon the positions they were placed at in the search results.

Images that tended to overperform could be moved up in search results, and images that underperformed could be moved down.

A recently published Yahoo patent application explores this process of predicting clickthroughs on search results to reorder images, videos, and other multimedia results based upon how well or poorly they perform at different locations in those search results.

The predictions could be made in part by looking at historical query log files for queries involving multimedia results.

A couple of different approaches could be followed in using this kind of prediction.

One would be for the search engine to find the best ordering of results to show when displaying the top results and get the most clickthroughs for all of those results.


> In one embodiment, ranking is performed based on permutations representing orderings of objects. A permutation is an ordered list. For a set of objects, there exists a finite number of ways to order the objects. For each permutation, a determination is made of the number of selections expected to result if a results list is provided in response to queries for objects that match a search query.
>
> For example, if objects are listed in order (1,2,3,4,5), then it might be determined, based on the predictor results for each object at each position, that 10 selections are expected to occur over some time. If a different ordering (2,3,1,5,4), for example, is expected to bring a larger number of selections, then the second ordering is more desirable. In this embodiment, all permutations are compared against one another to determine the permutation that is expected to receive the largest number of selections.

Another approach would be to focus upon individual results to see which position would earn the most clickthroughs for each image or object shown in search results.


> In one embodiment, ranking is performed based on a contention game. A predictor determines several selections each object expects to receive at each position on a results list. The object expected to receive the maximum number of selections at a particular position is placed at a particular position. This determination may be made for each position, with each object competing for each position on the list. This ensures that each position contains the object expected to earn the maximum number of selections for that position.

While this patent filing uses images as an example of this prediction approach, it also tells us that it could be used with videos and word processing documents, computer code, and plain text.

The patent application is:

[Predicting and ranking search query results](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090171942.PGNR.&OS=dn/20090171942&RS=DN/20090171942)
Invented by Bipin Suresh and Nikhil Garg
US Patent Application 20090171942
Assigned to Yahoo
Published July 2, 2009
Filed December 31, 2007

Abstract


> Techniques are described herein for providing search results that are ranked based on a predictor that predicts, for each of many objects, likelihoods that each particular object will be selected at different positions on a results list.
