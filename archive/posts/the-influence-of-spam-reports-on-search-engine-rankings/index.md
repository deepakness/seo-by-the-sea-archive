---
title: "Spam Identification and Search Engine Rankings"
source_url: "https://www.seobythesea.com/2006/11/the-influence-of-spam-reports-on-search-engine-rankings/"
slug: "the-influence-of-spam-reports-on-search-engine-rankings"
date_published: "2006-11-07T10:32:44+00:00"
date_modified: "2020-07-11T20:36:11+00:00"
author: "Bill Slawski"
---

> As set forth above, FIG. 1 illustrates a system for evaluating whether results produced by a search engine are spam results. The system and method utilize a combination of automated spam identification techniques and user feedback to identify results as spam and adjust result rankings accordingly.

…from a *System and method for spam identification*

I wondered, upon reading this Microsoft patent application, how many spam reports Google and Yahoo and Microsoft receive each day. A good number of other questions crossed my mind, such as who is it that looks at these reports, and what kind of tools do they have at their disposal.

At the San Jose Search Engine Strategies Conference this year, at least one of the Google representatives mentioned that spam reports submitted to them from people signed into Google through the Webmaster Central/Sitemaps interface would be prioritized over reports through their anonymous spam reporting form because they know who the people are reporting spam.

But how likely, and how often do people stop what they are doing to sign in to Google to report spam? Maybe they would if the results show up in queries where their site might also rank.

Here are some other questions that I thought of while reading through the patent application:

How much should search engines rely upon spam reports from searchers to rerank their results? How much can they trust those reports? What would they look for, in an automated system, that tells them that one spam report is valid, and another isn’t?

Should spam reports about a page be used as a query independent ranking factor for that page? What’s the best way to present such a spam reporting tool, so that people are willing to use it, and find it easy to use? Should a “feedback link” be present next to each result returned in response to a query in a search engine?

Should the threshold for determining whether something is spam or not be tied to whether or not the queries used to find that site tend to be commercial, based upon looking at an advertising history for terms in the query?

If the site is a popular one, as determined by popularity information collected through a toolbar that collects information about the pages that a person visits, should it be treated as less likely to be webspam?

Is looking at the IP addresses of people reporting spam an effective way of detecting whether or not spam reports are bogus? If the page is being marked as spam when it shows up in response to more than one query, is it more likely to be spam? If there is no user feedback for a specific query that can be used to determine whether or not a page is spam, how effective would an automated spam detection system be in making that determination?

The focus of the patent filing is on a reporting mechanism rather than the automated spam detection system that they might use to find pages. It also doesn’t go into much detail on how much influence spam reporting might have on the ranking or reranking of pages. But it’s worth a look to think about how effective such a system might be, and how such a system might be implemented.

[System and method for spam identification](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060248072%22.PGNR.&OS=DN/20060248072&RS=DN/20060248072)

Invented by Brett D. Brewer and Eric B. Watson
Assigned to Microsoft
US Patent Application 20060248072
Published November 2, 2006
Filed: April 29, 2005

Abstract


> A system and method are provided for improving a user search experience by identifying spam results in a result set produced in response to a query. The system may include a user interface spam feedback mechanism for allowing a user to indicate that a given result is spam. The system may additionally include an automated spam identification mechanism for implementing automated techniques on the given result to determine whether the given result is spam. The system may further include a merging component for merging the determinations of the user interface spam feedback mechanism and the automated spam identification mechanism for deriving an indicator of the likelihood that a given result is spam.

This patent attempts to identify any spam results in search results produced in response to a query. It involves:

- Receiving user feedback on whether a result is spam,
- Using automated spam identification techniques on that result, and;
- Merging the user feedback and automated information to obtain an indicator for that result, which would indicate the likelihood that it is spam.

The user feedback would be analyzed to determine if it is a false report (spam itself) by looking at the source of the user feedback and whether it originates with unique users. That user feedback for the result would be looked at across multiple queries.

The automated spam identification techniques would consist of:

- Determining a query independent rank of the given result.
- A monetization analysis technique that determines keyword monetization value.
- A popularity analysis technique for determining the popularity of the given result based on user access.

That result and its indicator would be stored so that a ranking mechanism can access the indicator when the given result is produced in response to future queries.

**Conclusion**

Google still has the smilie interfaces available to toolbar users. They are labeled as “voting,” which reminds me that I have to get out to the polls today. I’m not sure that I’ve ever seen them referred to as a spam-fighting mechanism. If a search engine utilized a toolbar button to fight spam and labeled it clearly as such, would it be abused to the point of uselessness? Would a link next to results also get abused?

I’m not sure, but I couldn’t help but start thinking about search engines aspiring to be [digg](https://digg.com/), while reading through the patent, with the ability to bury pages that searchers don’t like.

I also found it interesting that a monetization analysis would be involved in this process. I understand that commercial results could be considered to be more likely to be spammed. Is there anything else going on there, though? I don’t know
