---
title: "Google to Provide Better Accuracy in Location-Based Services?"
source_url: "https://www.seobythesea.com/2010/11/google-to-provide-better-accuracy-in-location-based-services/"
slug: "google-to-provide-better-accuracy-in-location-based-services"
date_published: "2010-11-29T02:16:58+00:00"
date_modified: "2020-06-20T21:46:06+00:00"
author: "Bill Slawski"
---

## Location-Based Services from Google

Chances are that you’ve seen or even used location-based services from the Web, such as [Facebook Places](https://www.facebook.com/places/), [Foursquare](https://foursquare.com/), [Gowalla](http://web.archive.org/web/20121127074609/http://www.gowalla.com/), Whrrl, Scvng, and [including locations](http://web.archive.org/web/20101023235734/http://support.twitter.com:80/articles/223408) in your tweets.

Google offers a number of location-based services, such as:

- [Google Latitude](https://accounts.google.com/ServiceLogin?service=friendview&passive=1209600&continue=http://www.google.com/latitude&followup=http://www.google.com/latitude)
- Google’s [My Location](https://web.archive.org/web/20080307094221/http://www.google.com/mobile/gmm/mylocation/index.html)
- Google Maps [What’s Nearby](https://maps.googleblog.com/2009/12/find-whats-nearby-and-try-labs-features.html) function
- [http://www.google.com/mobile/navigation](http://www.google.com/mobile/navigation)Google Maps Navigation
- Tagging locations with Google Buzz
- The Google [Places API](https://mapsplatform.googleblog.com/2010/07/checking-in-with-places-api.html)
- Geotagging Photos in [Google Earth](https://support.google.com/picasa/answer/43896?hl=en) or [Google Maps](https://support.google.com/picasa/answer/66969?hl=en&rd=1) with Picasa
- Google Talk or Gmail Chat [location status](https://support.google.com/maps/?hl=en&rd=3#topic=3092425)
- The [Google Public Location Badge](https://support.google.com/maps/?hl=en&rd=3#topic=3092425)

Google likely has other location-based services that they may target in the future, such as the kind of system described in Google’s patent filing [Dynamic Exploration of Electronic Maps](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080059205.PGNR.&OS=dn/20080059205&RS=DN/20080059205), which I wrote about in [Smarter Google Maps Would Add Movement and Templates for Tasks](https://www.seobythesea.com/2008/03/smarter-google-maps-would-add-movement-and-templates-for-tasks/)

A recently published pending Google patent describes one of the limitations of location-based services – the accuracy of location information for people using those services and provides an approach that Google might follow to improve upon location information for users of location-based services.


## Accuracy of Location-Based Services

Three of the technologies that are often presently used for those location-based services include:

Global Positioning System (GPS) – Often accurate within 10-20 feet, but can become unusable in indoor environments such as shopping malls, office buildings, and subways.

Cell Tower Triangulation – estimates location based upon distance from multiple cell towers, but could be off by hundreds or feet or even miles based upon things like signal strength, tower placement, and interference.

IP Geocoding – Associates the IP address of a device with a physical location, and could sometimes be off by a considerable amount.

An alternative approach might be to use signals like those, but to also augment that information with user specific information, such as:

- Web browser history
- Search History
- Maps History
- Address books
- Email Archives
- Calendar entries

Information about locations from sources like these might be captured, including times associated with the information, to create heat maps that can help estimate locations that someone might be interested in, and maybe helpful in estimating the location of someone using a location-based service.

The location-based services patent filing is:

[Refining Location Estimates and Reverse Geocoding Based on a User Profile](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100287178.PGNR.&OS=dn/20100287178&RS=DN/20100287178)
Invented by Chris Lambert, Michael Chu, Rohan Seth
Assigned to Google
US Patent Application 20100287178
Published November 11, 2010
Filed: May 8, 2009

Abstract


> The present invention pertains to enhancement or refinement of estimated locations based upon user-specific information. Upon user authorization, geographical information is extracted from many user-related sources, including the web browser history, search history, maps history, address book, e-mail archives, and calendar entries.
>
> Such information is used to build a spatial index of specific physical locations for a geocoded result set. From this, heat maps identifying particular locations from the user-related sources are created for different periods.
>
> The heat maps may be used to refine an initial location estimate of the user. This may be done by determining whether one or more positions in a given heat map provide a more accurate position of the user than the initial estimate. If so, the best position is selected. This can be used to provide enhanced driving directions to the user.

So, Google might use GPS or cell tower triangulation, or even IP addresses to create an initial estimate of the location of someone using one of these services, and then look at heatmaps of locations from data collected about that person to refine an estimate of where they might be located.

For example, if you used your actual address in Google Maps when getting driving directions in the past, and GPS or cell tower triangulation indicates that you may be at or near that address, Google might believe that your Google Maps driving starting point is where you are presently located. If you performed a search earlier in the day for a specific coffee house, and you are very close to that coffee house when you use one of Google’s location-based services, it might use information about that search to refine your location.

The patent filing does provide examples of how it might safeguard this kind of location data, such as asking for permission for the use of certain kinds of information, such as email or address book or calendaring services. It would also secure the data in such a way as to prevent unauthorized access.

Location information used to create heatmaps may be scored based upon many factors. For instance, if the information is old, it might be considered too stale to be useful. Some types of searches might be more helpful than others, such as a maps search carrying more weight than email information.

The patent filing also details some examples of how this location information might be used, from providing enhanced driving directions to presenting more accurate information when searching for businesses or people, or broadcasting the user’s location to friends or geocoding images taken from cell phones

Does Google have an advantage over many other providers of location-based services because they may be able to use information such as web searching and browsing history, previous map searches, and other information specific to an individual who might use a service like this?

It’s possible.
