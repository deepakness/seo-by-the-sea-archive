---
title: "Image Search and Trends in Google Search Using FreeBase Entity Numbers"
source_url: "https://www.seobythesea.com/2016/01/image-search-trends-freebase-entity-numbers/"
slug: "image-search-trends-freebase-entity-numbers"
date_published: "2016-01-25T13:28:21+00:00"
date_modified: "2021-05-01T09:40:50+00:00"
author: "Bill Slawski"
---

Google is organizing more and more things in its index based upon entity numbers. I have a couple of examples for you that show how they are being used.

You may have missed a reference to Freebase Entities in a Google Research Blog post from 2013. I missed it myself. The post is
[Improving Photo Search: A Step Across the Semantic Gap](https://ai.googleblog.com/2013/06/improving-photo-search-step-across.html).

In the post, the author (Chuck Rosenberg) tells us how they improve image searching at Google by labeling images with entities rather than text strings. The entities they used are entities that you would find at a source, such as Freebase. He tells us that they use Freebase Machine ID numbers for those labels:


> As in ImageNet, the classes were not text strings but are entities. In our case, we use Freebase entities that form the Knowledge Graph used in Google search. An entity is a way to identify something in a language-independent way uniquely. In English, when we encounter the word “jaguar,” it is hard to determine if it represents the animal or the car manufacturer. Entities assign a unique ID to each, removing that ambiguity, in this case “/m/0449” for the former and “/m/012×34” for the latter.

You can see those labels in the Machine ID numbers in the Freebase URLs and the Freebase entries.


## Jaguar Car Entity


!["Paris Motor Show 2012 (8065248951)" by Nan Palmero from San Antonio, TX, USA - Mondial De L'automobile Paris 2012 | Paris Motor Show 2012Uploaded by FAEP. Licensed under CC BY 2.0 via Commons.](media/Paris_Motor_Show_2012_8065248951.jpg)

_“[Paris Motor Show 2012 (8065248951)](https://commons.wikimedia.org/wiki/File:Paris_Motor_Show_2012_(8065248951).jpg#/media/File:Paris_Motor_Show_2012_(8065248951).jpg)” by [Nan Palmero](https://www.flickr.com/people/97402086@N00?rb=1) from San Antonio, TX, USA – [Mondial De L’automobile Paris 2012 | Paris Motor Show 2012](http://www.flickr.com/photos/nanpalmero/8065248951/)Uploaded by [FAEP](https://commons.wikimedia.org/wiki/User:FAEP). Licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via [Commons](https://commons.wikimedia.org/wiki/Main_Page)._

Freebase URL: http://www.freebase.com/m/012×34


![Freebase Information for Jaguar Cars; note the Machine ID Number is similar to "/m/012x34"](media/jaguar-cars-1.jpg)

_Freebase Information for Jaguar Cars; note the Machine ID Number is similar to “/m/012×34”_


## Jaguar Cat Entity


!["Junior-Jaguar-Belize-Zoo" by Bjørn Christian Tørrissen - Own work by uploader, http://bjornfree.com/galleries.html. Licensed under CC BY-SA 3.0 via Commons.](media/Junior-Jaguar-Belize-Zoo.jpg)

_“[Junior-Jaguar-Belize-Zoo](https://commons.wikimedia.org/wiki/File:Junior-Jaguar-Belize-Zoo.jpg#/media/File:Junior-Jaguar-Belize-Zoo.jpg)” by [Bjørn Christian Tørrissen](https://commons.wikimedia.org/wiki/User:Uspn) – Own work by uploader, [http://bjornfree.com/galleries.html](https://bjornfree.com/galleries.html). Licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via [Commons](https://commons.wikimedia.org/wiki/Main_Page)._

Freebase URL: http://www.freebase.com/m/0449p


![Freebase entry information for Jaguar Cats. Note the Machine ID number is similar to "/m/0449p"](media/jaguar-cats-1.jpg)

_Freebase entry information for Jaguar Cats. Note the Machine ID number is similar to “/m/0449p”_


## Freebase Entities and Google Trends

Last July, I was joined by Barbara Starr in a joint meetup presentation of the Lotico San Diego Semantic Web Meetup (Barbara and I are co-administrators) and an [SEO San Diego Meetup](https://www.meetup.com/san-diego-seo/events/222788666/) presentation titled, [Ranking in Google Since The Advent of The Knowledge Graph](https://www.seobythesea.com/2015/06/ranking-in-google-advent-of-knowledge-graph/) where Barbara pointed out something that she had noticed, that the Machine ID numbers for Entities in Freebase were showing up as HTML encoded URLs in Google Trends (see page 26 of the [presentation](https://www.slideshare.net/billslawski/ranking-in-google-since-the-advent-of-the-knowledge-graph-49743186)).

For example, the Google Trend URL for IBM (Computer Hardware Company) is https://www.google.com/trends/explore#q=%2Fm%2F03sc8.

The Freebase Machine ID number for IBM is in the URL: http://www.freebase.com/m/03sc8 (note that this from the Google Trend’s URL “%2Fm%2F03sc8” differs from this by being HTML encoded the same as in the Freebase URL – unencoded it is “/m/03sc8”)


![The Freebase IBM Entry. Note that the Machine ID number is similar to “/m/03sc8”](media/Freebase-IBM.jpg)

_The Freebase IBM Entry. Note that the Machine ID number is similar to “/m/03sc8”_

The future of Google search appears to be based upon entities. So, Google uses Machine ID numbers as Entity labels in Reverse Image Searches and is also using Machine ID numbers to track Trends for Entries.
