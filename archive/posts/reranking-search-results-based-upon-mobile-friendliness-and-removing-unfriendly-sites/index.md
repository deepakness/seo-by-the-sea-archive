---
title: "Reranking Search Results Based Upon Mobile Friendly Sites"
source_url: "https://www.seobythesea.com/2006/09/reranking-search-results-based-upon-mobile-friendliness-and-removing-unfriendly-sites/"
slug: "reranking-search-results-based-upon-mobile-friendliness-and-removing-unfriendly-sites"
date_published: "2006-09-24T11:18:05+00:00"
date_modified: "2020-07-25T12:13:57+00:00"
author: "Bill Slawski"
---

If you are a site owner or builder or designer who isn’t taking a mobile audience into consideration with your site, you may find the search engines routing traffic for mobile users around your pages. A new patent application from Microsoft shows concern for mobile friendly sites and one way that could be done.

We saw Google release an [accessible search](https://www.google.com/accessibility/) not long ago that reordered sites based upon how accessible those were. Reranking pages for people using mobile devices during a search, based upon whether or not they are using a handheld device, doesn’t seem out of the question, not something that we would wait a long time to see appear.

Some sites are better viewed on mobile devices than others, and some sites are completely unusable on a web capable mobile phone or PDA. Imagine an addition to a search engine index that looks at how friendly pages are to handheld devices and reorders pages in search results based upon mobile friendly indications. That’s the focus of this patent filing from Microsoft.

[Mobile friendly internet searches](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060212451%22.PGNR.&OS=DN/20060212451&RS=DN/20060212451)
Invented by Frank S. Serdy, Jr., Rainer J. Romatka, Tyler E. Hennessy, Neil A. Brench
Assigned to Microsoft
US Patent Application 20060212451
Published September 21, 2006
Filed: March 15, 2005

Abstract


> Mobile friendly internet searches are enabled by determining if individual internet sites are mobile friendly. In a described implementation, a mobile-friendliness indication is determined for an internet site. The determined mobile-friendliness indication is stored in association with the internet site in an index that may be used for internet searching. In another described implementation, a data structure comprises an internet index with multiple internet site entries having one or more associated mobile-friendliness indications. The mobile-friendliness indications may be general affirmative indications of mobile friendliness or specific indications of mobile-friendliness that identify a specific user-agent type. In yet another described implementation, a search request having search terms is received, and a search is performed based thereon to produce search results set. If the search requestor is a mobile device, the search results are ordered responsive to mobile-friendliness indications associated with the internet sites of the search results set.

The patent filing tells us that traditional search services don’t accommodate special features of mobile devices, and return the same results regardless of whether a person searching is using a desktop computer or a handheld.

Some sites that may be returned may not be formatted well for the smaller screens of a mobile device, or aren’t set up for a slower bandwidth connection, or may not even display on one of those screens.

One solution might be to annotate a search engine database with mobile-friendly indications to decide upon a mobile friendly level for pages in the index. URLs of friendly pages would be prioritized higher than other URLs which may also be relevant to a query, but less mobile friendly.

For this to work, at the time of a crawl, a search engine would look for mobile friendly indicators.


## Some Ways to Determine Mobile Friendly Sites

One way that this would be done by having the search engine crawler first impersonate a user agent from a traditional internet browser meant for desktop computers, and then by making requests while impersonating mobile-friendly user agents. The results of the traditional requests and the mobile requests would be compared to see if the markup in pages served differs from one type of user agent to the other.

Another would be to append to a request for a page a modified URL for the page, adding such things as “/wml”, “/pda”, “/pocketpc” to see if pages have been specifically added to a site for mobile devices. If pages are served for mobile devices, that is a positive indication of mobile friendliness. If errors are returned instead, then not.

A different approach would be to see whether or not a page could be adequately displayed upon a mobile device even if it didn’t deliver pages that are different based upon the use of a mobile agent requesting those pages.

It would extract and look at things like:

- The use of frames,
- The use of scripts,
- How images are used,
- Total memory size to display the page,
- The presence of animation and/or sound (if any),
- The presence of style sheets, meta tags, object tags, applet tags, and; others that may impact display on a mobile device.

Each of these extracted items would be investigated to see if it were mobile friendly, with lower scores attached to pages where sites where those characteristics were determined to be inappropriate for a mobile device.

Frames and scripts are often considered inappropriate. Pictures above a certain threshold size may also be deemed unfriendly, as well as animation and extensive aural components.

There may be different thresholds for some of these components based upon type of mobile device. For instance, a PDA may be able to show larger images than a mobile phone, and the picture size threshold may vary.

Weights are determined from looking at these types of factors, and pages that are determined to not be mobile friendly at all may not show up in search results conducted on a mobile device.

**Conclusion**

There are many more folks who use mobile devices than there are who own desktop computers, and those mobile devices are growing more and more sophisticated, with many of them able to access the web. The growth of the use of mobile devices is also outpacing the growth of desktop computers, and chances are that there will be many people who only access the web by phone or PDA.

While search engines may not be using a mobile friendly ranking factor now, chances are strong that they will do something like this in the future. Site owners who are prepared for this type of change will have an advantage over others who aren’t. Cameron Moll’s Authentic Boredom site has an excellent three-part series on how to prepare your site for mobile devices, which is highly recommended: Mobile Web Design – the Series.

**Added** – October 1, 2006 – Nice post from Shimon Sandler on [SEO for Mobile Search](http://www.shimonsandler.com/seo-for-mobile-search/), who points out that Google’s new mobile search (Beta) only returns pages that are “specifically designed for mobile phones and devices.”
