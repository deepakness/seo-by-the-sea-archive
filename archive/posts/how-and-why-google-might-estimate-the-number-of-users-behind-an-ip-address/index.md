---
title: "How and Why Google Might Estimate the Number of Users Behind an IP Address"
source_url: "https://www.seobythesea.com/2010/07/how-and-why-google-might-estimate-the-number-of-users-behind-an-ip-address/"
slug: "how-and-why-google-might-estimate-the-number-of-users-behind-an-ip-address"
date_published: "2010-07-25T12:26:07+00:00"
date_modified: "2015-11-28T11:23:38+00:00"
author: "Bill Slawski"
---

When you arrive at a web page, the owner of that page might start collecting information about your visit for a number of reasons. One of the most commonly collected pieces of information is an [internet protocol (or IP) address](https://en.wikipedia.org/wiki/IP_address). An IP address is a number that can be associated with the way and the place that you access the Web.

**The Difficulties of Using an IP Address as a Data Point**

Your IP address might be assigned to a server or a router that you use to connect to the Web, or a [proxy server](https://en.wikipedia.org/wiki/Proxy_server) or [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) that stands between the computer that you are using and the rest of the internet. You might go online on a computer that you share with other people at home or at a public place like a library, or at an office filled with other computers. You might share an IP address with roommates or family on the same computer, or use more than one computer through the same IP address.

A unique IP address might be assigned to your internet access every time you dial into the internet, or may be leased by your router on a weekly basis through your broadband provider and may change if that lease isn’t automatically renewed by logging in within a certain amount of time after the lease period is over. If you access the web through an office, your IP address that can be seen by the pages you visit might be that of your company’s firewall.

When you connect through a service such as AOL, you may share an IP address with many other people because you connect to the Web through a proxy server which may cache pages visited by others – so that if you visit a page that someone else has seen recently, you may see a cached copy of that page stored in the proxy server instead of visiting the server the page was published upon initially.

A patent granted to Google this week describes how the search engine might be able to estimate the number of people who might be accessing the web through individual IP addresses, using a number of different approaches.

**Why a Search Engine Might Estimate Users Behind an IP Address**

Why would Google want to be able to estimate how many people might be behind a single IP address and be able to distinguish between them if possible?

The patent tells us that there are a number of reasons – being able to estimate how many visitors come to your site from IP addresses can be useful in determining:

- Whether or not visits to a page from one or more IP addresses are from a single user, or from multiple users;
- Whether or not ads selected from one or more IP addresses are from a single user or from multiple users;
- Whether or not server resources from one or more IP addresses are from a single user or from multiple users;
- How many user access a Web page or Website;
- How many users viewed certain ad impressions;
- How frequently users visited pages.

There are a number of ways that Google might use this kind of information. For example, Google collects information about user-behavior during query sessions, so that they can see how a searcher might modify their queries when searching for information about a specific topic to try to understand the intent behind a search or a series of searches. There are a number of features that Google offers that benefit from being able to distinguish between different searchers, collecting that data from a large number of searchers, and aggregating and analyzing that information, such as:

- Spelling correction suggestions,
- Query refinement suggestions,
- Determining whether there is a geographical location intent behind a search (and possibly showing maps and local business suggestions),
- Personalization or customization of search results, and
- Diversification of search results

Being able to understand which searches and other interactions with Google originate, from IP addresses, and specific users behind IP addresses can also be useful in:

- Trying to determine if click fraud is happening,
- Determining whether searches, and clicks, and other interactions with search results and advertisements might be automated
- Deciding whether searches, and clicks, and other interactions with search results and advertisements might be manual but evidence an intent to manipulate user-behavior data
- Providing data to users of public tools from Google such as Google Analytics, Google Website Optimizer, Google’s Conversion Tracker
- Analyzing trends in searches, for use with tools like Google Insights for Search, Google Trends, Google Trends for Websites, and Google Hot Trends
- Analyzing trends for internal Google processes that might determine how popular (or bursty) some topics and some web sites might be, including news and blog results
- Determining how popular a web site or advertisement might be
- Determining how “Sticky” a site is
- Collecting user-data to determine which sitelinks to show for a site
- Running many other processes that rely upon distinguishing between individuals to track and measure user-behavior data

While Google uses information found on web pages and in links to web pages to determine the rankings of pages in search results, a number of patent filings and white papers over the past few years hint strongly that Google is also looking closely at user-behavior data to determine how much attention people are paying to different web pages, videos, news results, blogs, and other kinds of documents or objects on the Web. That public attention level may influence how well some sites may rank for different queries.

**Cookies and Other Client Identifiers**

When you visit a web page, the server it is on may send textual information to your browser, which is sent back to that server every time you access that page. This information is know as a cookie, and it can be used to authenticate your identity (so that you don’t have to log in every time you visit a site), as well as for user tracking, and to maintain specific information such as your preferences for a web site, and what you’ve entered into a shopping cart, and more.

But there are people who purposefully disable cookies on their browsers to avoid being tracked.

Cookies can be part of the solution of estimating how many people might be accessing the web through a specific IP address, but there are other approaches that can help when people have turned cookies off on their browser.

The patent refers to cookies and information about your browser and some other computer settings as client identifiers.

These browser parameters and “user-agent” parameters can include things such as:

- Screen setting information such as screen height/width, available height/width, and color depth,
- Time zone,
- History length,
- Whether or not Java is enabled,
- Number of plug-ins,
- Mime types,
- Type of connection device or program connecting to the web, whether desktop or mobile browser, screen reader or braille browser,
- Host operating System
- Language
- etc.

So, an estimate of the number of users who might be at a specific IP address could be created by looking at a ratio of unique sets of user agent and/or browser parameters for that IP address. Information about browser and other client parameters could be used to “differentiate different users.”

The Google Patent is:

[Determining a number of users behind a set of one or more internet protocol (IP) addresses](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7761558.PN.&OS=pn/7761558&RS=PN/7761558)
Invented by Deepak Jindal, Rama Ranganath, Gokul Rajaram, and Fong Shen
Assigned to Google
US Patent 7,761,558
Granted July 20, 2010
Filed June 30, 2006

The patent provides a fair amount of detail on how they might attempt to analyze both cookie and client identifier data to estimate how many different users might be accessing the web at different IP addresses, and some of the assumptions and rules that they might use within that analysis. Some examples include:

- A single cookie at one IP address only is most likely a single user at that address, unless the computer is shared
- A single cookie appearing at a mix of IP addresses may be a single user whose IP address is dynamically changed each time they connect to the Web, or who moves between physical locations when connecting to the Web.
- A single IP address with multiple cookies:- with a small number of cookies over a period of time, could be a single user visiting through different browsers or computers, or someone who clears or resets their cookies regularly
  - with a large number of cookies over a period of time, could be a number of people visiting through a proxy server

Some cookies have a very short lifetime, of less than a day, and we’re told that those might be filtered out of this process because they may come from browsers that don’t accept cookies, or only accept session cookies, or are from first time visitors, or people who clear their cookies daily, or even spammers.

Speaking of spam, the patent tells us that a list of known spam proxies and IP addresses might be maintained that could be used to exclude information from estimates about how many people are behind a specific IP address.

This process could also be used to try to compile a list of suspicious IP addresses, such as an IP address which appears to have a single user behind it but an unusually large number of impressions or conversions. Such an IP address might be listed as a spam address. While the patent doesn’t describe other patterns that might associate addresses with spamming activity, it’s possible that a system like this could potentially look at many other signals as well.

**Conclusion**

As a searcher, or site owner, or SEO, why should you be concerned about how Google might estimate the number of users behind different IP addresses?

One major reason is that the information collected by a search engine about visits from different IP addresses may influence how a search engine like Google operates in areas such as identifying click fraud, incorporating user-behavior data into search rankings, removing search volume information from keyword tools from automated queries or from people checking rankings instead of searching for information on a specific topic or query term.

It’s also helpful to get a better sense of how much information, and what kinds of information Google might collect about people who use the tools it offers.

Turning cookies off on your browser doesn’t mean that Google might not be able to distinguish between your searches and those of someone else who may share an IP address with you – Google can and will likely use other information to get a sense of how many people are behind a different IP address that can include which browser you use and the add-ons you’ve installed upon it, the size of the window you use to browse with, your browsing preferences, and more.
