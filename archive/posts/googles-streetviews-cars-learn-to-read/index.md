---
title: "Google's Streetviews Cars Learn to Read?"
source_url: "https://www.seobythesea.com/2012/10/googles-streetviews-cars-learn-to-read/"
slug: "googles-streetviews-cars-learn-to-read"
date_published: "2012-10-10T07:17:07+00:00"
date_modified: "2020-06-20T20:39:38+00:00"
author: "Bill Slawski"
---

Google’s local search may be getting smarter one Streetview cars scene at a time. A few years back, I jokingly made a robots.txt sign for my front door that had the following statement in it:

UserAgent: Googlebot
Disallow: /

In the root level directory of a website, a robots.txt file containing those two lines would tell Google’s page crawling program not to index any pages from the site. On the front of a home in my small town, it might have gotten some odd looks, but that’s about it.

I had expected at some point that Google would send Streetview cars down my street, and I would have been able to write a blog post with a street view image of the front of my house with a title along the lines of “Google Ignores Robots.txt File: Indexes My House.” I ended up not leaving the sign-up, but I’m second-guessing that now that I know Streetview cars can read. :)

That really shouldn’t have been a surprise back then. I wrote a post in 2007 titled [Better Business Location Search using OCR with Street Views](https://www.seobythesea.com/2007/06/better-business-location-search-using-ocr-with-street-views/) which described how Google might use OCR to gather information from signs it takes video of for street views. The patent filing I wrote about didn’t discuss how that information might be used, but it presented the possibility of its use. I suspect my real-life robots.txt file would have been ignored back then, though the drivers of those cars had learned at that point that signs like “Private Street” and “Military Base,” were areas they couldn’t film.

Google was granted a patent last week that gives us a look at how information from street level signs might be collected and indexed by Google and compared to online information about the same locations to try to “calibrate” and “score” any information about the places being listed in Google’s index. Here’s an image from the patent that shows at a glance the kinds of information it might attempt to read:

The Streetview cars patent is:

[System and method for the calibration of a scoring function](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08280891&OS=PN/08280891&RS=PN/08280891)
Invented by Shlomo Urbach and Yuval Netzer
Assigned to Google
US Patent 8,280,891
Granted October 2, 2012
Filed: June 17, 2011

Abstract


> A system and method for calibrating a scoring function. The scoring function S(input, classification) provides a score based on the amount of evidence a particular input has in connection with a particular classification. For example, a street-level image may be OCR’ed to indicate the names of establishments contained within the image, and the scoring function indicates how much evidence exists within the image for a particular establishment.
>
> Some establishments (i.e. classifications) may produce higher scores based on the nature of the establishment rather than the nature of the image (i.e. input) causing any ranking of establishments done based on the scoring function to be biased. Accordingly, the scoring function is calibrated by determining the probability distribution of scores for an establishment over a false set of images that do not display the establishment. The scoring function is calibrated to adjust the score to overcome such bias.

The patent provides details on how it might compare a combination of Streetview cars video information and web information to better learn about the things its mapping and to incorporate information like GPS and cell phone triangulation into those scores as well.

While I mention Streetview cars images as the source of real-world data, the patent seems to expand what it considers a “client device” to be used in a system like this to possibly include cell phones as well. I can’t help but wonder if possible future use of video from something like Google’s Project Glass could also be used similarly.

As far as we can tell, Google doesn’t try to use optical character recognition (OCR) on text within images that it finds on web pages to learn more about those pages. At least not yet. But it’s interesting to think that Google might be gathering textual information from the world around it to improve the Maps it shows us and to try to index the world around us better.

Google Maps isn’t just a database that can be used to provide driving directions and navigation. Its purpose isn’t just to act as online yellow pages to make it easier to find telephone numbers and address information. Google Maps is one of the richer knowledge bases being built today, and the Streetview cars information that Google collects about the World can be used to make its Web search smarter as well.
