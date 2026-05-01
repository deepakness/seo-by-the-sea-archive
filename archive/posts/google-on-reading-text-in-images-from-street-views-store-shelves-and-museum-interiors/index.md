---
title: "Google on Reading Text in Images from Street Views, Stores and Museums"
source_url: "https://www.seobythesea.com/2008/01/google-on-reading-text-in-images-from-street-views-store-shelves-and-museum-interiors/"
slug: "google-on-reading-text-in-images-from-street-views-store-shelves-and-museum-interiors"
date_published: "2008-01-04T00:00:06+00:00"
date_modified: "2020-06-21T15:59:12+00:00"
author: "Bill Slawski"
---

One of the standard rules of search engine optimization that’s been around for a long time is that “search engines are not reading text in images.” What if that changed?

How easy or difficult is it for a search engine to recognize text within digital images and video, and index that text?

Three new Google patent applications explore how Google might start reading text in images and describe some types of images that Google might try to do that with.

**Capturing Text from Street View Images**

This patent filings don’t address text found within headings and logos, but rather much more complex pictures, including street scenes of the kind that might be taken for instance, when filming streets for something like Google’s [Street Views](https://support.google.com/maps/answer/3093484?hl=en&rd=1) (video).

They also discuss the use of picture taking robots inside stores and museums.

The documents lay out some of the obstacles faced in reading text in images like those:


> The text within images can be difficult to automatically identify and recognize due both to problems with image quality and environmental factors associated with the image. Low image quality is produced, for example, by low resolution, image distortions, and compression artifacts.
>
> Environmental factors include, for example, text distance and size, shadowing and other contrast effects, foreground obstructions, and effects caused by inclement weather.

[Recognizing text in images](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080002893.PGNR.&OS=dn/20080002893&RS=DN/20080002893)
Invented by Luc Vincent and Adrian Ulges
CUS Patent Application 20080002893
Published January 3, 2008
Filed June 29, 2006

Abstract


> Methods, systems, and apparatus including computer program products for recognizing text in images are provided. In one implementation, a computer-implemented method for recognizing text in an image is provided. The method includes receiving a plurality of images.
>
> The method also includes processing the images to detect a corresponding set of regions of the images, each image having a region corresponding to each other image region, as potentially containing text. The method further includes combining the regions to generate an enhanced region image and performing optical character recognition on the enhanced region image.

These other two patent filings also cover aspects involving reading text in images:

- [Enhancing text in images](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080002914.PGNR.&OS=dn/20080002914&RS=DN/20080002914)
- [Using extracted image text](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080002916.PGNR.&OS=dn/20080002916&RS=DN/20080002916)

The patent applications describe in detail how images might be processed to make it easier to identify and extract text within many different types of images.

An example of how this process might be used is that in an urban scene, text recognition could be used to “identify such things as building addresses, street signs, business names, restaurant menus, and hours of operation.”

**Images from Digital Cameras and Video Recordings**

Images used might include those captured from conventional digital cameras or video recording devices. Those pictures might include panoramic images, still images, or frames of digital video. A system for capturing some of the images might also incorporate the use of three-dimensional ranging data as well as location information.

That sounds like some information that might be captured when pictures are taken for a project like Google’s Street Views program.

**Associating Locations with Images**

A panoramic image of a street scene might capture more than one street address, like a city block, or a string of locations on a street. This might be done using a moving camera. Locations could be associated with those images using GPS coordinates.

While there are other options presented to collect GPS information, here’s a description of how it might be determined for something like the Street Views project:


> Additionally, exact GPS coordinates of every image or vertical line in an image can be determined.
>
> For example, a differential GPS antenna on a moving vehicle can be employed, along with wheel speed sensors, inertial measurement unit, and other sensors, which together allow a very accurate GPS coordinate to be computed for each image or portions of the image.

The text detection and classification (text versus non-text) process is also presented in some detail within the patent filings. Part of that process involves looking at similar patterns within images that might be similar to each other. So, known city street scenes are looked at when classifying other city street scenes to try to determine if the text appears within those images.


> The three-dimensional range information might also help detecting false positives when this system believes that it has identified an area that may contain text, and it hasn’t.
>
> **Solving Problems Reading Text**
>
> Some of the problems involved with characters that are difficult to read, because of small size or blurriness or distortions or other problems, might be solved by looking at more than one image, from pictures that are slightly offset from each other:
>
> > For example, a high-speed camera taking images as a machine (e.g., a motorized vehicle) can traverse a street perpendicular to the target structures. The high-speed camera can, therefore, capture a sequence of images slightly offset from each previous image according to the motion of the camera.
> >
> > Thus, by having multiple versions of a candidate text region, the resolution of the candidate text region can be improved using the superresolution process.
> >
> > Additionally, a candidate text region that is partially obstructed from one camera position may reveal the obstructed text from a different camera position (e.g., text partially obscured by a tree branch from one camera position may be clear from another).
>
> While the text recognition part of this process will try to use variations of character recognition, they may also try to find certain specific business names that are kept in a database, such as McDonald’s, Fry’s Electronics, H&R Block, and Pizza Hut.
>
> They could also try to find the text from images at certain locations by looking at information from places like Yellow Pages listings.
>
> **Some Specific Applications Under this Process**
>
> Where this gets interesting is in the descriptions of some of the ways text recognition and extraction from images might be used by the search engine, including the use of robots within stores and museums.
>
> ***Image search*** – The text taken from images can be indexed and associated with the image. That can then be used in different search results applications like image search, and mapping, or other applications.
>
> ***Images are Associated with a Mapping Program*** – Extracted text from street scene images can be indexed and associated with a mapping application. People can then search for a location by business name, address, store hours, or other keywords.
>
> The mapping application can also retrieve images matching the user’s search – like looking for a McDonald’s in a particular city or near a particular address – the mapping program would create a map showing the location of the McDonald’s as well as a picture of the restaurant.
>
> ***Images Near Specific Locations are Associated with Each Other*** – Since the images are associated with location data, the mapping program can provide images of other businesses near a searched location, and show their locations on a map.
>
> ***Images of Similar Businesses Presented as Alternatives*** – Images of businesses that offer similar goods or services may be presented to the searcher as alternatives. So, a search for McDonald’s might show other nearby fast food joints.
>
> ***Advertisements Shown with Images*** – Advertisements can be presented along with images. When a business is shown in an image, an ad for the business may also be shown. Or, ads for alternative businesses could be displayed. And ads can be shown for products associated with the business.
>
> ***Google Interior Images*** – While this patent filing describes many images from street scenes, this indexing can be applied to other image sets. One of the more interesting sections of this patent application:
>
> > In one implementation, a store (e.g., a grocery store or hardware store) is indexed. Images of items within the store are captured, for example, using a small motorized vehicle or robot. The aisles of the store are traversed and images of products are captured similarly as discussed above.
> >
> > Additionally, as discussed above, location information is associated with each image. Text is extracted from the product images. In particular, extracted text can be filtered using a product name database to focus character recognition results on product names.
>
> Kudos to Sandra Niehaus, and her post-[Google Interiors – the day my house became searchable](http://blogoscoped.com/archive/2007-06-07-n63.html). I know your post was satire, Sandra, but a good call. :)
>
> ***Searching Museums for Images*** – Images associated with museums could also be indexed. Many museums include text displays associated with exhibits, artifacts, and objects. Reading text in Images from museum items and their associated text displays can be captured using a process like that involved in indexing a store.
>
> Location information can be associated with each captured image. Museums can be searched, or browsed, to learn about the various objects.
