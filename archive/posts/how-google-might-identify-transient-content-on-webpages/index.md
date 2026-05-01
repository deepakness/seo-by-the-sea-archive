---
title: "How Google Might Identify Transient Content on Webpages"
source_url: "https://www.seobythesea.com/2011/12/how-google-might-identify-transient-content-on-webpages/"
slug: "how-google-might-identify-transient-content-on-webpages"
date_published: "2011-12-29T15:57:27+00:00"
date_modified: "2020-01-19T18:49:06+00:00"
author: "Bill Slawski"
---

Back in 2007, I wrote about a Yahoo patent describing how Yahoo! might crawl a webpage, and then recrawl the same page around a minute later to see if any of the links on the page had changed. It might do that to try to identify what it called “Transient Links,” or links that pointing to things like advertisements that might change on every visit to a page, which aren’t links that the search engine would want to crawl and index. The post is [A Yahoo Approach to Avoid Crawling Advertisement and Session Tracking Links](https://www.seobythesea.com/2007/09/a-yahoo-approach-to-avoid-crawling-advertisement-and-session-tracking-links/).

Google was granted a patent this week on a similar topic that looks at “transient” content on web pages. While this kind of content might include advertisements as well, that change regularly on return visits to page, it could also include things like current weather forecasts (Warrenton, Virginia, 40 degrees and cloudy) for example. That kind of content changes on a regular basis, but often has little to actually do with content found elsewhere on a page.

Google would want to be able to identify transient content so that it wouldn’t index pages based upon it, and it wouldn’t show advertisements that focus upon it either.

**Content and Tokens**

Instead of looking at URLs on pages like the Yahoo patent does, this approach might look at the actual HTML code on pages and break it down into tokens. The search engine might then use a hash approach to identify each of the tokens and use a fingerprint approach to find identical hashes (or tokens). For example:

The HTML code for a page might look like this one day:


> <html><header><title>Hello</title></header><body> <h1>First section</h1> <p> <em> Today is Sunday, June 24th, 2007. </em> </p> </body> </html>

A second version of the same page might be retrieved by the search engine the next day with a few changes, like the following:


> <html> <header> <title>Hello</title> </header> <body> <h1>First section</h1> <p> <em> Today is Monday, June 25th, 2007. Weather Forecast Sunny. </em> </p> </body> </html>

The search engine might break the markup language for the first version of web page into tokens as follows:

1: <html>
2: <header>
3: <title>
4: Hello
5: </title>
6: </header>
7: <body>
8: <h1>
9: First section
10: </h1>
11: <p>
12: <em>
13: Today is Sunday, June 24th, 2007.
14: </em>
15: </p>
16: </body>
17: </html>

It might break the second day’s markup language into very similar tokens:

1: <html>
2: <header>
3: <title>
4: Hello
5: </title>
6: </header>
7: <body>
8: <h1> 9: First section
10: </h1>
11: <p>
12: <em>
13: Today is Monday, June 25th, 2007.
14: Weather Forecast: Sunny.
15: </em>
16: </p>
17: </body>
18: </html>

These might then be processed so that they are in a data table and can be compared quickly to see what has changed, and what hasn’t.

Google may use those comparisons to determine that some of the content on a page changes regularly, but doesn’t impact the rest of the content on that page. If so, it might decide that the content is “transient.”

Google may also look at where certain content appears within HTML paths on the different pages of a website as well, to attempt to find transient content that might re-occur on multiple pages. An HTML “path” might be something like <html>><body><div><ul><li>, where specific content might be after a number of open HTML tags, as if in a “path.” If content has been identified as transient appears at a certain path on one page, and a number of other pages have the same HTML paths, the content on those other pages might be analyzed to see if it it transient as well.

The patent is:

[Identifying transient portions of web pages](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08086953&OS=PN/08086953&RS=PN/08086953)
Invented by Eran Gabber, Michael Flaster, Ruoming Pang, Shanmugavelayutham Muthukrishnan
Assigned to Google
US Patent 8,086,953
Granted December 27, 2011
Filed: December 19, 2008

Abstract


> Systems, methods and computer readable media for identifying transient content in web pages. Transient content can be identified, for example, by parsing different versions of the same web page into tokens, and inserting fingerprints associated with the tokens into data structures. The data structures can be compared to each other to identify differences between the web pages, thereby identifying transient content associated with the web pages.

**Take-Aways**

Google may also look for [boilerplate](https://www.seobythesea.com/2008/02/google-omits-needless-words-on-your-pages/) content on a page that is often the same for more than one page of a site, and may be the same for all pages. That boilerplate information might include copyright notices, navigation bars and sidebars. text and other information in sidebars and footers and headers that might be the same from one page to another. Boilerplate information might not be weighted as highly as main content information on a page that changes from page to page, when it comes to indexing that content in search results. Transient content may be within the same areas as boilerplate content but they differ from one another.

Unlike boilerplate, “transient” content might change from one visit to another by a search engine crawling program, and could as easily be contained in a main content area of a page as well as other sections such as a heading section or footer or sidebar. It might include things like time and data and weather information, or advertisements or other content that isn’t necessarily really relevant to content on a page that remains relatively static from one visit to another.

Transient content might also be content that is relevant to the rest of the content on your pages, and there’s a question about how Google might treat that.

I’m sure there are probably ways to distinguish between content like weather updates that might update daily, and “featured” product descriptions that might link to deeper pages on a site and update daily or hourly, but the patent doesn’t really distinguish between the different types of content and how it might tell the two apart. Some sites feature other content, such as revolving testimonials or revolving quotes or definitions that might change at random, and there’s no indication from Google within the patent as to how it might handle that as well.

If content includes links to and descriptions of “featured” products, and those are random or update very quickly, that might increase the chance that Google sees that content as transient. If you want to show testimonials and have them indexed, the best approach might be showing some testimonials that don’t change along with a link to a fuller testimonial page.

Of course, it doesn’t hurt to test these kinds of things either, if you have the time, ability, and inclination. We don’t know if Google has implemented this “transient” content approach, and if they have, what features and limitations and controls they might have placed upon it.

The patent also doesn’t discuss sites like news site or blogs which might use very similar HTML paths to content like fresh news articles or blog posts that might change as well, but there are likely ways to distinguish that type of transient content from transient content that the search engine does want to index.
