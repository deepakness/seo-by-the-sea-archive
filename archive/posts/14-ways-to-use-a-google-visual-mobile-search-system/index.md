---
title: "14 Ways to Use a Google Visual Mobile Search System"
source_url: "https://www.seobythesea.com/2007/07/14-ways-to-use-a-google-visual-mobile-search-system/"
slug: "14-ways-to-use-a-google-visual-mobile-search-system"
date_published: "2007-07-13T02:06:22+00:00"
date_modified: "2011-07-29T23:49:05+00:00"
author: "Bill Slawski"
---

When Google [purchased Neven Vision](https://www.seobythesea.com/2006/08/google-acquires-neven-vision-adding-object-and-facial-recognition-mobile-technology/) last August, I expected some interesting things coming out of the combination of Google resources and technical knowledge from the Neven Vision team.

A newly published patent application from Google about a visual mobile search system describes how that system can use mobile phones with cameras in many different ways. The patent filing claims one small part of this system, but also provides a list of other related patent applications.

There are a lot of great examples of how this visual mobile search system could be used, and I cover many of those below.

[Image-based Contextual Advertisement Method and Branded Barcodes](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070159522.PGNR.&OS=dn/20070159522&RS=DN/20070159522)

Invented by Harmut Neven
US Patent Application 20070159522
Published July 12, 2007
Filed: December 7, 2006

Abstract


> Content media having images associated with remotely stored information are provided with barcodes marked with indicia to indicate a source of the information. In this manner, a user, having, for example, a camera phone, will become aware that the particular content medium has images that can be scanned to retrieve additional information (from the remote information store) via their camera phone.

This filing covers taking a picture of a barcode on an object, and being pointed towards a Web page that can provide additional information about the object. The description included in the patent application describes the infrastructure for an image based search service.

That service takes an image from a camera phone, and uses visual recognition engines to recognize objects shown in the image, and return search results based upon that recognition. We’re shown the infrastructure for that image search system, as well as a number of example inventions and commercial applications.

**Multiple Recognition Algorithms**

A number of different visual recognition engines might be used to match an incoming picture against object representations stored in a database. Some examples:

- *Facial recognition* – to recognize textured objects.
- *Optical character recognizers*– to understand text strings in images
- *Barcode readers* – to interpret barcodes on objects

In response to the image search, a number of different types of results could be sent back to the searcher from a media server, such as text, images, music or audio clips, or a URL that can be viewed on the phone using an inbuilt web browser.

This combination of different recognition algorithms is described in the patent application:


> Years of experience in machine vision have shown that it is very difficult to design a recognition engine that is equally well suited for diverse recognition tasks. For instance, engines exist that are well suited to recognize well textured rigid objects. Other engines are useful to recognize deformable objects such as faces or articulate objects such as persons. Yet other engines are well suited for optical character recognition.
>
> To implement an effective vision-based search engine it will be important to combine multiple algorithms in one recognition engine or alternatively install multiple specialized recognition engines that analyze the query images with respect to different objects.

**Filtering Objects Being Compared**

This would be a slow process if images sent to be searched upon were compared to all images in a database. To make object recognition work quickly and effectively, limiting those comparisons is helpful. Some additional information may be sent to the search engine when a search like this is conducted, such as:

- Time,
- Location of the handset,
- User profile,
- Recent phone transactions, and;
- Other sources of external image information through additional inputs provided by the user.

This example from the patent filing shows a couple of the benefits of this approach


> It may be beneficial to make use of this information to narrow down the search. For instance, if one attempts to get information about a hotel by taking a picture of its facade and knows it is 10 pm in the evening than it will increase the likelihood of correct recognition if one selects from the available images those that have been taken close to 10 pm. The main reason is that the illumination conditions are likely to be more similar.
>
> Location information may also be used. Staying with the hotel example, one would arrange the search process such that only object representations of hotels are activated in the query of hotels that are close to the current location of the user.

So, searching for objects that may be closer in time and space may make sense in some instances.

**Algorithmic Principles**

There’s some discussion of how the algorithms work in the object recognition engine, involving things such as:

- Extraction of feature vectors from key interest points,
- Comparison of corresponding feature vectors,
- Similarity measurement and comparison against a threshold to determine if the objects are identical or not,
- Recognition of objects from multiple viewpoints,
- Coarse-to-fine simple to complex search strategy,
- Color histograms and texture descriptors.

If you want to delve into those in more detail, the patent application provides more information and some citations. While a look at the algorithms is informative, the many examples included in the patent application are really worth spending some time thinking about.

**Example of Usefulness of Image-Based Search**

Great example in the document on how image-based mobile search could be used:


> Let us start the discussion of the usefulness of image-based search with an anecdote. Imagine you are on travel in Paris and you visit a museum. If a picture catches your attention you can simply take a photo and send it to the VMS service. Within seconds you will receive an audio-visual narrative explaining the image to you. If you happen to be connected a 3G network the response time would be below a second.
>
> After the museum visit you might step outside and see a coffeehouse. Just taking another snapshot from within the VMS client application is all you have to do in order to retrieve travel guide information. In this case location information is available through triangulation or inbuilt GPS it can assist the recognition process.
>
> Inside the coffeehouse you study the menu but your French happens to be a bit rusty. Your image based search engine supports you in translating words from the menu so that you have at least an idea of what you can order.
>
> This anecdote could of course easily be extended further. Taking a more abstract viewpoint one can say that image-based search hyperlinks the physical world in that any recognizable object, text string, logo, face, etc. can be annotated with multimedia information.

The “image-based intelligent museum guide” example is built upon in more detail (I’d love to see this in action as described in the patent filing). Here are characteristics of such a system using visual image search:

1) Users can interactively perform queries about different aspects of an artwork, such as: “Who is this person in the cloud?”.

2) Visitors can keep a log of the information that they asked about the artworks and cross-reference them;

3) Visitors can share their gathered information with their friends;

4) Developing an integrated global museum guide is possible;

5) No extra hardware is necessary as many visitors carry cell-phones with inbuilt camera; and,

6) The service can be a source of additional income where applicable.

A similar approach could be applied to other objects that might be interesting to tourists, such as landmarks, hotels, restaurants, etc.

**Other Examples**

A nice list of many other examples of how visual mobile search could be effectively used:

1) *Translations* – of printed documents through optical character recognition.

2) *New print-to-Internet applications*– for example, take a picture of a movie ad in a newspaper or on a billboard, and find out with a click which movie theaters it is playing at.

3) *Conducting retail transactions*– take a picture of a product, and send it to a server that recognizes it, and will associate the input with the user. That person could be entered into a sweepstake, or receive a coupon or offer for a rebate, or guided to an information page or ordering page.

4) *Annotations of printed pages*– can allow the picture taker to receive additional, real-time information about the text.

5) *Ad to phone number feature* – take a picture of an add, and a phone number might become available to contact the advertiser (or email, or SMS, or Web addresses).

6) *Digital Billboards* – take a picture of a digital billboard or large television screen, and get more information about the ad:


> A user may take of picture of the billboard and the displayed advertisement to get additional information about the advertised product, enter a contest, etc. The effectiveness of the advertisement can be measured in real time by counting the number of “clicks” the advertisement generates from camera phone users. The content of the advertisement may be adjusted to increase its effectiveness based on the click rate.
>
> The billboard may provide time sensitive advertisements that are target to passing camera phone users such as factory workers arriving leaving work, parents picking up kids from school, or the like. The real-time click rate of the targeted billboard advertisements may confirm or refute assumptions used to generate the targeted advertisement.

7) *Payment systems* – imagine going shopping, and bringing your camera phone with you. Take a picture of the barcode or label on a product, and a commercial transaction such as credit card payment might take place with a record of the transaction sent to some controller to make certain that payment was made.

8) *Educational Games* – providing a way for children to learn things by having them take pictures of numbers or letters or countries on a map or parts of the body.


> Essentially a child could read a picture book just by herself by clicking on the various pictures and listen to audio streams triggered by the outputs of the recognition engine.

9) *Accessibility assistance* – for people with visual handicaps.

10) *New Forms of Games*– Scavenger hunt type games, where a picture of the correct object will result in instructions in a task to perform or a new image to capture to continue.

11) *Service technician information* – Take a picture of a machine part and query about it, and you may be lead to information identifying the par, and a user manual.

12) *Meeting real time information needs* – example, take a picture of a bus stop sign, and you could retrieve real-time information on when the next bus will come because the location information available to the phone is often accurate enough to decide which bus stand you are closest to.

13) *Virtual post it notes* – Take a picture and annotate it, for later retrieval and use.
