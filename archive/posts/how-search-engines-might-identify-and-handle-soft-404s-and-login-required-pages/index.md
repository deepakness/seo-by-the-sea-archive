---
title: "How Search Engines Might Identify and Handle Soft 404 pages and Login-Required Pages"
source_url: "https://www.seobythesea.com/2009/06/how-search-engines-might-identify-and-handle-soft-404s-and-login-required-pages/"
slug: "how-search-engines-might-identify-and-handle-soft-404s-and-login-required-pages"
date_published: "2009-06-19T02:49:32+00:00"
date_modified: "2021-07-06T13:55:29+00:00"
author: "Bill Slawski"
---

When people in the Mideastern United States don’t hear something that someone says, they may say “excuse me” to ask the person they are conversing with to repeat what they just said. If you’re having a conversation in the Southern United States and you say “excuse me” to get someone to repeat themselves, it might evoke a blank stare (I’ve seen it).

Non-verbal communication that doesn’t match the message sent with words might also cause confusion and misunderstanding (been there, too).

Many websites are set up incorrectly, in a way that when a visitor or a search engine crawling program attempts to reach a URL that doesn’t exist on the site and is redirected from that inaccessible URL to a dedicated error page showing the visitor a 404 (not found) or 403 (forbidden) or 5xx (server error) message on their screen, the message in the header from the site’s server may be a “200” ok message, which indicates that there isn’t a problem – even though there is. Some pages are only inaccessible temporarily, like when a database may be down. When a server error shows for those, the message sent from the server shouldn’t be a 200 (ok) message either.

Sometimes visitors are redirected from inaccessible URLs to a site’s main homepage as well.

That kind of miscommunication creates confusion and can mean that non-existent pages at accidentally mistyped or miswritten URLs or pages that may have been removed from a Web site may be added to or kept in a search engine’s index, even though those pages shouldn’t be included or should be removed. And would possibly be removed if the correct 404 or 403 or 5xx error message was sent back to a search engine.

Some other links that might be found on the web may point to pages that aren’t accessible unless someone is logged in to a site, and if they aren’t, a redirection may take them to a login page or to a page that tells them that authorization is required to view the page. And those pages on the other side of the redirect may also send 200 (ok) messages back to a search engine, which can’t log in. These links point to pages that also shouldn’t be included in a search engine’s index.

Because a search engine receives the 200 (ok) message, it may treat those pages as actual live web pages.

When a visitor sees a page that tells them there has been a 404 error, the header message sent from the server indicates a 200 (ok) page. Those errors have been called soft 404 pages.

A new patent application from Yahoo tells us that soft 404 error pages exist in large numbers on the Web:


> According to one article, “[Sic transit Gloria telae: towards an understanding of the web’s decay](https://web.archive.org/web/20080227210158/http://www.tomkinshome.com/andrew/papers/decay/final/p444-baryossef.htm),” by Z Bar-Yossef et al. (2004), it is estimated that soft 404s account for more than twenty-five percent of the dead links on the web. The Z Bar-Yossef article proposes a method to detect whether a particular web page is a soft 404 page.

In an ideal World Wide Web, the right error messages should be sent through a server error message, and miscommunication should be avoided. Site owners should check to make sure that this kind of misunderstanding doesn’t happen. But, as the quote above indicates, this kind of soft 404 problem happens frequently. It is to the benefit of site owners and search engines to avoid problems like that.

The patent application tries to identify soft 404 errors, redirects to login pages, and other similar problems by clustering together web pages from a site that share many similarities based upon “characteristics of the web pages’ content” in each of those clusters.

After pages are clustered together like that based upon their content, the process described in the patent filing tells us that it looks for a metric involving a similarity between the URLs For each of the pages in each of the clusters and the similarities based upon content and URL structures can be used to determine “similarity classes” for the URLs of pages on a site. For example, one such class might be a “soft 404 similarity class.”

The patent application is:

[Unsupervised Detection of Web Pages Corresponding to a Similarity Class](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20090157607.PGNR.&OS=dn/20090157607&RS=DN/20090157607)
Invented by Mahesh Tiyyagura
Assigned to Yahoo
US Patent Application 20090157607
Published June 18, 2009
Filed December 12, 2007

In addition to a class for soft 404 error pages, other classes might also be determined, such as for pages that indicate:

- Out of stock
- Program exception
- Permission denied and
- Login required

The crawling of web pages usually happens independently of the indexing of content on those pages. Before the pages are indexed, some analysis of the content and URLs found on a site may occur, including a process like the one described in this patent filing, which may determine similarity classes of the web pages.

**Why a Search Engine Might Want to Identify Soft 404s**

Some of the reasons why a search engine might want to determine if there are soft 404 pages on websites can include:

1) A recognition that the soft 404 pages and their URLs do not pertain to useful information, which means that a search engine wouldn’t need to index those pages.

2) Reducing (or decaying) a “freshness” value for pages linking to those soft 404 pages, which those pages might have gained based upon a link-based ranking algorithm. In other words, pages with dead links may rank less highly in terms of “freshness.” Suppose a search engine doesn’t recognize that one or more links on a page point to soft 404 pages. It might rank that page more highly based upon a freshness factor. Identifying soft 404s means that a search engine won’t give a page a ranking boost based upon freshness.

3) For pages on sites that might show advertising from search engines, where a soft 404 is shown or a requirement to login, or another similarity class that doesn’t provide useful information, the patent filing tells us that it is assumed that visitors are likely to want to navigate quickly away from such pages. We’re also told that more generic advertising might be shown on those pages or ads that occupy more screen real estate than for other pages on a site.

The patent filing provides some details on how pages might be clustered together based upon their content and how URLs might be determined to be similar. The paper [Syntactic Clustering of the Web](https://www.hpl.hp.com/techreports/Compaq-DEC/SRC-TN-1997-015.pdf) is mentioned as an example of a clustering and shingling technique that could be used, as is the process described in the patent [Method for Clustering Closely Resembling DataObjects](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,119,124.PN.&OS=pn/6,119,124&RS=PN/6,119,124).

**Conclusion**

This patent application from Yahoo describes a process that might be used when a site isn’t set up properly to communicate such things as a proper 404 (not found) server message when a visitor might see a 404 message on a page that they view. Still, their browser and search engine crawling programs get a 200 (ok) message instead.

It’s recommended that site owners fix problems like soft 404s rather than relying upon processes like those described in this patent filing. It’s to the benefit of the search engine and site owners to recognize when miscommunications like soft 404s happen, but it’s even better if the wrong messages weren’t sent in the first place.
