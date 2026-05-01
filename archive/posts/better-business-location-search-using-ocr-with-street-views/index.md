---
title: "Better Business Location Search using OCR with Street Views"
source_url: "https://www.seobythesea.com/2007/06/better-business-location-search-using-ocr-with-street-views/"
slug: "better-business-location-search-using-ocr-with-street-views"
date_published: "2007-06-24T17:43:18+00:00"
date_modified: "2020-06-21T14:11:55+00:00"
author: "Bill Slawski"
---

## How Has Business Location Search Been Improving at Google?

Google introduced [street views](https://support.google.com/maps/answer/3093484?hl=en&rd=1) to selected areas of their maps recently.

Not discussed in Google’s Street View help sections is how those views might help Google improve the accuracy of locations for both the maps and for Google’s business locations databases.

A problem with search engine mapping databases is that the information collected hasn’t always been very accurate, based upon the way that this kind of information has been collected.

Often, GPS location information for some “anchor” street addresses is known for these systems, and the locations for businesses and buildings between the anchors have been interpolated.

According to the authors of a new patent application from Google, significant discrepancies are sometimes observed between actual GPS locations and interpolated locations, with actual addresses being off by 100 yards or more.

So, how might the Street Views help business location search?

The patent application is:

[Database assisted OCR for street scenes and other images](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070140595.PGNR.&OS=dn/20070140595&RS=DN/20070140595)
Invented by Bret Taylor and Luc Vincent
US Patent Application 20070140595
Published June 21, 2007
Filed: December 16, 2005

Abstract


> Optical character recognition (OCR) for images such as a street scene image is generally a difficult problem because of the variety of fonts, styles, colors, sizes, orientations, occlusions, and partial occlusions that can be observed in the textual content of such scenes.
>
> However, a database query can provide useful information that can assist the OCR process. For instance, a query to a digital mapping database can provide information such as one or more businesses in the vicinity, the street name, and a range of possible addresses.
>
> Following an embodiment of the present invention, this mapping information is used as prior information or constraints for an OCR engine that is interpreting the corresponding street scene image, resulting in much greater accuracy of the digital map data provided to the user.

The method used involves a mix of using a business location database, optical character recognition, and panoramic street view images to better map out the locations of businesses shown in those Streetview images.

A business location search process for using OCR with street scenes may involve:

1. Getting a target GPS location for an image in a street scene using known GPS data associated with the image,
2. Estimating a street address of that GPS location,
3. Determining a range of addresses shown in the image, based upon that street address,
4. Running a query on the mapping system database to find a business name having a street address in the target address range,
5. Using OCR on the street scene image to see if keywords associated with that business name are present and;
6. If one is, determining an actual GPS location for the street address of that business name, based on the known GPS data.

A visual analysis of the street scene image could also take place to see if the expected features associated with the business are present.

The OCR method described could identify both textual and non-textual features, to see if non-textual expected features are present. Examples might be things such as golden arches for a McDonalds or a red roof for a Pizza Hut.
