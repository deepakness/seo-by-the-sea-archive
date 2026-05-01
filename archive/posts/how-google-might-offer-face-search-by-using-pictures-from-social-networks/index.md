---
title: "How Google Might Offer Face Search by Using Pictures from Social Networks"
source_url: "https://www.seobythesea.com/2011/02/how-google-might-offer-face-search-by-using-pictures-from-social-networks/"
slug: "how-google-might-offer-face-search-by-using-pictures-from-social-networks"
date_published: "2011-02-21T10:14:08+00:00"
date_modified: "2018-10-30T22:38:17+00:00"
author: "Bill Slawski"
---

If Google decided to include a facial recognition search as part of the [Visual Search](https://www.seobythesea.com/2011/02/the-future-of-googles-visual-phone-search/) described in a Google patent application a couple of weeks ago, a couple of questions need to be addressed by the search engine.

![A twitter followers page for George Washington. Happy President's Day.](media/twitter-followers.jpg)

One is, where would they get the pictures to power that facial recognition software (hint in the image above)? The other is, how would they best avoid privacy concerns?

A patent filing from last week provides some possible answers.

Chances are that many of tomorrow’s searches will be spoken, or started with the click of a camera. Someone uses their phone to ask for information from a Google or Bing, or snaps a picture and uploads it to the search engine, hoping that it can identify the objects in the image.

Google has a somewhat primitive visual search engine in [Google Goggles](http://www.google.com/mobile/goggles/#text), which will search for information about some types of images, such as logos, artwork, types of wine, landmarks, books, and text, from pictures sent to the search engine. But it has limitations. The patent filing I wrote about a couple of weeks ago described how Google might identify different objects in the same picture, and conduct multiple searches based upon those images.

For instance, if you took a picture of a sports drink box, it might search for information about the logo and the trademark on the box. It might identify the product displayed there, and even perform a search on the face of a celebrity endorser.

![A view of the different types of results that might be returned in response to the use of the image as a query, including products, logos, facial recognition, product and advertising matches, and web results.](media/google-visual-phone-search-4.jpg)

A Google whitepaper from 2008, Large Scale Learning and Recognition of Faces in Web Videos describes one way Google might identify the faces of celebrities.

For a facial recognition search, Google could use images collected of celebrities in news reports, web sites, and information reposititories such as the IMDB and wikipedia. Google might also be able to identify people from images in public domain galleries.

For a facial recognition search to work well, Google would need access to both a large number of images, and information about those images such as the names of the people in the pictures. One of the largest sources of labeled images on the Web exist in social networks such as Facebook and Twitter, and in social image galleries such as [Flickr](https://www.flickr.com/) and Picasa web albums, in applications such as GMail and Google Buzz, in blogging communities such as livejournal, and in publically accessible URLs on the Web.

Google might limit the access of people searching to images from people they are connected to upon those social networks, and possibly to people connected to friends. The patent filing notes that it may provide a way for people to opt in to be included in this type of image search as well.

The images that are returned on a face search could be ranked and ordered a number of ways. One would be based upon a visual similarity algorithm. Another would be based upon ranking information related to social interconnectivity.

A third ranking signal that might be used could be based upon location. A location information module included in the facial recognition search might find current location information for a searcher and a person searched for by looking at location information from a few different sources. One might be GPS receivers in mobile devices. Another might be the IP addresses of desktop computers used by those people. A third might be a published location by that person (for example, a tweet from someone noting that “I am currently at a conference in Boston.”

The patent application is:

[Facial Recognition with Social Network Aiding](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110038512.PGNR.&OS=dn/20110038512&RS=DN/20110038512)
Invented by David Petroum, Andrew Rabinovich, and Hartwig Adam
US Patent Application 20110038512
Published February 17, 2011
Filed: August 5, 2010

Abstract


> A facial recognition search system identifies one or more likely names (or other personal identifiers) corresponding to the facial image(s) in a query as follows. After receiving the visual query with one or more facial images, the system identifies images that potentially match the respective facial image in accordance with visual similarity criteria.
>
> Then one or more persons associated with the potential images are identified. For each identified person, person-specific data comprising metrics of social connectivity to the requester are retrieved from a plurality of applications such as communications applications, social networking applications, calendar applications, and collaborative applications.
>
> An ordered list of persons is then generated by ranking the identified persons in accordance with at least metrics of visual similarity between the respective facial image and the potential image matches and with the social connection metrics. Finally, at least one person identifier from the list is sent to the requester.

When this system looks at faces, it would use a visual feature extracting program to collect information about:

- The indoor habitat where the image was taken
- The outdoor habitat where the image was taken
- Gender
- Race
- Facial characteristics
- Facial hair characteristics
- Head hair characteristics
- Headware information
- Eye color
- When and where the picture was taken, and
- Who else might be in the picture

Person specific data might be taken from public information databases, and which contain connection metrics of social connectivity between the person associated with a potential image match and the requester. These applications can include:

- Social network databases
- Social microblog databases
- Blog databases
- Email databases
- IM databases
- Calendar databases
- Contact lists, and/or
- Public URLs

**Conclusion**

Google’s visual search may someday offer search results that include facial recognition results, but may both rank and limit those results based upon the availability of images found for celebrities, images in the public domain, and images found in social networking applications. Access to those many of those images may be limited based upon connections within those social networks, much in the way that Google limits [social search](https://support.google.com/websearch/answer/1710607?hl=en&visit_id=1-636651620961071914-4187129223&rd=1) results to people whom you are connected to on those networks.

The patent filing lists a number of related patents that weren’t included in the earlier patent filing on visual search that I wrote about earlier, including a couple that potentially have implications for local search as well. Those two are “Actionable Search Results for Street View Visual Queries” and “Hybrid Use Location Sensor Data and Visual Query to Return Local Listing for Visual Query.”

I’ll be keeping an eye open for those, to write about them when they are published.
