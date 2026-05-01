---
title: "Google Patent on URL Compression and the Mobile Web"
source_url: "https://www.seobythesea.com/2010/10/google-patent-on-url-compression-and-the-mobile-web/"
slug: "google-patent-on-url-compression-and-the-mobile-web"
date_published: "2010-10-06T09:56:45+00:00"
date_modified: "2020-01-21T15:24:05+00:00"
author: "Bill Slawski"
---

What may be Google’s third most important URL shortening service got its own web site a few days ago. If you’ve used Twitter, chances are a long URL made it hard to fit your message and a link within the limited amount of space available. You may have turned to [Bit.ly](https://bitly.com/) or another service to shrink the size of that URL. Google brought out a limited version of it’s URL shortening service in December of 2009, and has been expanding the Google services that it could be used with.

But, there are other places where Google has likely been using shorter URLs for a longer time. For instance, there’s a good chance that Google has been using compressed URls for a while when performing [Link Graph Analysis](https://www.hpl.hp.com/techreports/Compaq-DEC/SRC-RR-175.pdf), so that it could consider more pages in a link graph of the Web at one time when computing things like PageRank.

Google was granted a patent this week on another kind of shorter URLs, intended to make the mobile web a little faster by compressing URLs to be displayed on mobile devices. The basic premise behind these shorter URLs is to increase the ability of people using mobile devices to access the Web to experience the Web more like people using desktop computers.

While URL shortening programs may make microblogging services more convenient to many of us, there are areas of the world where many people access the Web primarily through phones. Members of the [Google Mobile team](https://www.blog.google/products/android/) have been involved in making the Web more accessible for people from around the world, including places like Uganda where the Grameen Foundation and Google have been [working together](https://www.seattletimes.com/business/grameen-foundation-and-google-create-mobile-apps-for-africa/). The following interview describes how that service is being developed:

(Note: Terry Van Belle, seen in the video above, is one of the inventors listed on the new Google patent.)

Google’s new patent doesn’t shorten URLs for people to use in SMS messages or on microblogging platforms, but rather involves changing the underlying code on web pages presented to people so that when they access those pages, they use less bandwidth as well as less memory on their mobile devices. For example, if a web page has the following links on it:

<a href=”http://www.firstsite.com/directory1/page1.html”>Page 1</a>
<a href=”http://www.firstsite.com/directory1/page2.html”>Page 2</a>
<a href=”http://www.firstsite.com/directory1/page3.html”>Page 3</a>
<a href=”http://www.secondsite.com/pageA.html”>Page A</a>

Those links might be rewritten, and a “base href” might be added in the head section of the page for links, as follows:

<base href=”http://www.server.com/n?u=[dictionary]012345601237601234860193A6″ />

<a href=”/0123456″>Page 1</a>
<a href=”/0123486″>Page 2</a>
<a href=”/012376″>Page 3</a>
<a href=”/0193A6″>Page A</a>

The patent is:

[Compressing hyperlinks in a hyperlink-based document](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,809,697.PN.&OS=pn/7,809,697&RS=PN/7,809,697)
Invented by Steve Kanefsky, Alex Nicolaou, and Terry Van Belle
Assigned to Google Inc.
US Patent 7,809,697
Granted October 5, 2010
Filed: November 9, 2007

Abstract


> A computer-implemented method can include accessing a network-accessible document that is formatted according to a hypertext markup language and that has a plurality of hyperlinks; producing a transcoded document from the network-accessible document; and providing the transcoded document to a computing device.
>
> Producing the transcoded document can include concatenating two or more of the plurality of hyperlinks to form a compression seed, compressing the compression seed with a compression algorithm to form a compressed seed, storing the compressed seed as a base hyperlink in the transcoded document, and compressing each of the plurality of hyperlinks.
>
> Compressing each hyperlink can include concatenating each hyperlink with the compression seed, compressing the concatenated hyperlink and compression seed to form a seed portion corresponding to the compression seed and a link portion corresponding to the hyperlink, extracting the seed portion, and substituting in the transcoded document the link portion for the hyperlink.

The patent goes into detail on how URLs can be compressed for use on web pages, including pages from content providers, search results pages, and more.

While many places that rely upon phones as a primary way of connecting to the Web rely upon services such as SMS, steps like this one to compress URLs on pages may lead to a greater ability to access the Web directly in places like Uganda.
