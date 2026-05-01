---
title: "Malicious Web Sites: Identification and Filtering"
source_url: "https://www.seobythesea.com/2007/12/search-engine-identification-and-filtering-of-malicious-web-sites/"
slug: "search-engine-identification-and-filtering-of-malicious-web-sites"
date_published: "2007-12-30T04:42:01+00:00"
date_modified: "2020-07-01T13:50:54+00:00"
author: "Bill Slawski"
---

## How Search Engines May Identify Malicious Web Sites

Unfortunately, there are web pages that can be harmful to visit. Google researchers discussed the identification of malicious code on web pages earlier this year in [The Ghost In The Browser: Analysis of Web-based Malware](https://static.usenix.org/events/hotbots07/tech/full_papers/provos/provos.pdf) (pdf).

The Google paper’s authors tell us that the focus of delivery of harmful code to computer users has shifted from software that someone installs, to software that is delivered directly to a browser via the Web.

Microsoft has also detailed some of the research that they’ve conducted on web-based malware in their [Strider HoneyMonkey pages](http://web.archive.org/web/20160809224502/http://research.microsoft.com:80/en-us/um/redmond/projects/strider/honeymonkey/)


## Search Engines and Malicious Web Sites

When a search engine delivers you to search results filled with a list of links to web pages, should it warn you about any potentially harmful or malicious code on those pages before you visit one of them?

If a search engine does scan pages for embedded code, what implications might that scanning have for site builders?

If a search engine were to show some kind of indication that there was embedded code, or potentially malicious code, on pages, within the search results listings, would that impact which pages searchers visited?

What kinds of embedded code might a search engine look for, and how might it try to find it?

The Google paper discusses some of the efforts that Google undertakes to try to keep from delivering people to sites that attempt to serve malicious software to visitors:


> Web sites that have been identified as malicious, using our verification procedure, are labeled as potentially harmful when returned as a search result. Marking pages with a label allows users to avoid exposure to such sites and results in fewer users being infected. Besides, we keep detailed statistics about detected web pages and keep track of identified malware binaries for later analysis.


## Yahoo Patent Filing on Malicious Web Sites

A recent patent application from Yahoo goes into even more depth in exploring the identification of embedded and malicious code on web pages, and the display of warnings to searchers.

[Search Early Warning](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070294203.PGNR.&OS=dn/20070294203&RS=DN/20070294203)
Invented by Edward F. Seitz
Assigned to Yahoo
United States Patent Application 20070294203
Published December 20, 2007
Filed: June 16, 2006

Abstract


> Systems and methods for automatically delivering information to a user concerning the embedded code contained in a web page before the user downloads the web page are disclosed.
>
> A search engine, in addition to performing a standard subject matter word search requested by a user, searches each web page to be listed to the user as part of the search results for information indicating that there is embedded code in the web page.
>
> If it is determined that a web page contains embedded code, the search results graphical user interface is provided with additional information indicating to the user which web page in the results contains embedded code.
>
> The user may also be alerted if a web page contains embedded code known to be malicious and the order of the search results may be modified based on the embedded code information of the web pages in the results.

**Identifying Embedded Code on Malicious Web Sites**

The patent application provides some interesting details on the process that they might follow to identify malicious code, including the use of a database of code that they’ve come across on the web that can be compared to code found upon newly crawled pages.

The kind of scripts or other types of code that they are looking at can include ActiveX, Flash, Shockwave, Javascript, and style sheets.

I was a little surprised by the inclusion of style sheets on that list, but they point that embedded code might be contained within a style sheet, or be pointed to by a style sheet.

While there is a good amount of embedded code on web pages, the focus of the patent document is in finding malicious code that might cause some type of harm. The kinds of malicious code being referred to in this patent filing include the installation of dialers, spyware, or Trojan horses.

This process might begin with a web crawling program identifying elements, such as an applet element, or an object element, or many others. This process of identifying malicious code would also include virtually rendering a web page in addition to simply scanning the web page for embedded code identifiers.

**User Interface Icons**

This system might use special icons or other indicators, to show information to searchers on search results pages, about what kind of code might be embedded upon a page. For instance, a page with an ActiveX control may use one icon, while a second icon might indicate that Shockwave item is embedded in the page.

Under this system, there may be a way for searchers to decide whether they want to even see such icons. Another option might be for the search engine not to show search results that have certain types of icons and embedded code.

So, if a searcher didn’t want to see pages that used Flash, or javascript, or ActiveX components, they could purposefully filter those pages out of search results.

A searcher might also be able to choose to not be shown pages that contain “unsafe content.”

**Conclusion**

The use of cascading style sheets, javascript, flash, and other code isn’t that uncommon these days. What percentage of pages serve malicious software? The Google paper above tells us


> At the time of this writing, we have conducted an in-depth analysis of about 4.5 million URLs and found 450, 000 URLs that were engaging in drive-by-downloads. Another 700, 000 seemed malicious but had lower confidence. That means that about 10% of the URLs we analyzed were malicious and provides verification that our MapReduce created good candidate URLs.

But that was after a process that took several billion pages and pruned them into millions. Many news reports and articles that described the Google paper were taking the numbers from the above quote, and stating that 1 in 10 sites URLs were delivering malicious code to visitors, when in fact the percentage is much smaller than that.

Regardless, a search engine delivering searchers to pages that install malware isn’t a good user experience.

Google added [Badware Alerts](https://webmasters.googleblog.com/2006/11/badware-alerts-for-your-sites.html) to the Webmaster Central tools at the end of November last year, to let site owners know when the search engine was serving an interstitial warning about malware to visitors. That post refers to the site [StopBadWare](https://www.stopbadware.org/), as a place that Google relies upon to identify sites that may be infected.

Earlier this year, when Google [purchased](https://googlesystem.blogspot.com/2007/05/google-buys-greenborder-security.html#gsc.tab=0) the company Green Border, it appeared that they might have done so to address the downloading of malicious software.

Worth a read on this topic is a Google Groups thread that discusses the appearance of interstitial malware warnings, that appear after someone clicks on a link in search results, and before the page is delivered to the searcher – [Why did our site go through this headache?](https://groups.google.com/forum/#!topic/stopbadware/ueC2msuJC04)
