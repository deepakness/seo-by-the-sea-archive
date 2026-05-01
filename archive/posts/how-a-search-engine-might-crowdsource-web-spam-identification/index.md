---
title: "How Search Engines May Crowd Source Web Spam Identification"
source_url: "https://www.seobythesea.com/2010/04/how-a-search-engine-might-crowdsource-web-spam-identification/"
slug: "how-a-search-engine-might-crowdsource-web-spam-identification"
date_published: "2010-04-23T11:31:46+00:00"
date_modified: "2022-01-07T14:12:31+00:00"
author: "Bill Slawski"
---

## Search Engines Get Help In Web Spam Identification

Wired correspondent Jeff Howe coined the term crowdsourcing, in a 2006 article titled The Rise of Crowdsourcing, where he described how a crowd of people might use their spare time to help in solving problems or creating content, or in addressing other issues that a single person or organization might have difficulties addressing on their own. For example, could a search engine effectively rely upon searchers to help clean up web spam in search results?

![A crowd of people milling about, waiting on Lincoln's second inauguration speech](media/lincoln-crowd.jpg)

What if search engines added a “feedback” button to every page that they showed in search results where searchers could report pages in those results as webspam? Or, if they added a spam button to their toolbar that searchers could click upon to identify pages, they found through a search as spam?

Would such a system help search engines provide better search results? Would people abuse such a system by identifying pages as webspam when they really aren’t? Could the search engines use other information in addition to aggregated spam reports from searchers for web spam identification?

A patent filing from Microsoft describes how they might identify webspam by combining information from searchers about pages with information gathered from an automated system for identifying web spam. The combined information could be used to penalize pages in search results that have been identified as spam.


## Search Engine Web Spam Identification

Before digging into the approach described in Microsoft’s patent application, I thought it might be interesting to look at how each of the search engines presently allows searchers to find pages that they might consider web spam identification.

Google has a “Dissatisfied? Help us improve” link at the bottom of search results pages that you can use for web spam identification. Instead, the page asks people who click upon it for feedback on a wider range of topics, listing the following as choices:

- I couldn’t find the desired page.
- I couldn’t find the desired information.
- The results included spam. (Spam is explained in the Help Center)
- The results contained a page that was irrelevant or off-topic.

There is a text box on the page where you can explain why you were disatisfied with the search results that you viewed, as well as another text box that allows you to identify the URL for a specific page. There’s also a link to a short page discussing reporting web spam. A link on that page leads you to a login for your Google Account, where after logging in you can fill out a full spam report that allows you to identify problems like the following:

- Hidden text or links
- Misleading or repeated words
- Page does not match Google’s description
- Cloaked page
- Deceptive redirects
- Doorway pages
- Duplicate site or pages
- Other (specify)

Yahoo’s page to [report web spam](https://io.help.yahoo.com/contact/index?page=home&locale=en_US&y=PROD_SRCH&yidParam=zyoyjkhmd6jgpujg4vce5ljlzyjf2vz43ammuis4) is something that you have to hunt down in the Yahoo Help pages. But, unfortunately, there’s no link to it from Yahoo’s search results.

Bing has a “help” link in the bottom left of their pages of search results that you can click upon to answer the question, “Did we find what you were looking for? (required).” It doesn’t specifically mention web spam, and there’s no detailed spam report that you can visit like the one on Google’s pages.

How likely is it that most searchers will go through the steps involved in reporting webspam at any of these search engines? Probably not too likely. But some will.

What if there was a “feedback” link next to each page listed in a search result?

Would it be helpful to the search engines? Would it be abused? Google seems to be leaning towards exercising more and more care in webspam identification by searchers. Google’s Matt Cutts has stated a few times over the past couple of years that Google prefers spam reports made when someone is logged into their Google Account. In a March 2010 post on his blog requesting [Link Spam Reports](https://www.mattcutts.com/blog/calling-for-link-spam-reports/), he tells us that “We’re [Google] moving away from using the anonymous spam report form.”

The Microsoft patent filing tells us that it might be helpful if spam reporting were more accessible to searchers:


> The user base of searchers will generally be the best source for information about whether results are spam results. However, requests to end-users to provide more feedback data have been met with limited success. The limited success stems from the fact that providing feedback is often cumbersome and time-consuming for users. Furthermore, pre-configured feedback formats are often inadequate.
>
> Additionally, in considering user feedback, a system must identify feedback from spammers to prevent such feedback from artificially lowering rankings of competitors’ websites.
>
> User satisfaction is a critical success factor for a search engine. Spam results significantly decrease the quality of the user experience. Accordingly, a solution is needed that facilitates the identification and filtering of spam results.


## Crowdsourcing and Automated Web Spam Identification Used Together

The patent application points to the possibility of a toolbar button or a user interface mechanism on a search results page that allows searchers to report webspam in response to a particular query. That information would be aggregated and merged with data from an automated spam analysis system to identify spam pages and possibly penalize identified pages in future rankings.

It provides details on how information might be collected from searchers and combined with an automated system for identifying web spam and tells us a little about the kind of information that an automated system might consider when deciding whether a web page is a web spam or not. An interesting feature in that automated system is how it might pull in information from Microsoft’s advertising system in deciding whether a page ranking for a specific query term might be a webspam.

The patent filing is:

[System and Method for Spam Identification](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100100564.PGNR.&OS=dn/20100100564&RS=DN/20100100564)
Invented by Brett D. Brewer and Eric B. Watson
Assigned to Microsoft
US Patent Application 20100100564
Published April 22, 2010
Filed: December 24, 2009

Abstract


> A system and method are provided for improving a user search experience by identifying spam results in a result set produced in response to a query. The system may include a user interface spam feedback mechanism for allowing a user to indicate that a given result is spam. The system may additionally include an automated spam identification mechanism for implementing automated techniques on the given result to determine whether the given result is spam. The system may further include a merging component for merging the determinations of the user interface spam feedback mechanism and the automated spam identification mechanism for deriving an indicator of the likelihood that a given result is spam.


## Automated Spam Analysis

Microsoft might include many different signals to automatically identify whether certain pages that appear in search results are spam. Their system would include specific modules that would consider different factors, such as the following:

***A Characteristic analyzer*** – may look at features of a page in search results to see things such as the number of advertisements on a website, whether pages of the site engage in keyword stuffing, and whether the page appearing in the search results seems to be a member of a group of results with the same IP address that tend to be spammer pages.

***A Query independent rank analysis mechanism*** – may look at the query independent rank for each page, such as numbers of links to the page or other factors that may indicate the quality of a page. Presumably, the higher the rank, the less likely the page is spam.


## A Monetization analysis mechanism

The query term used to find the page in a set of search results might be examined based upon monetization data from the advertising system and on clickthrough rates on sponsored sites for bid rates. If the query is a non-commercial one, such as “Carnegie Mellon University,” the automated spam analysis module might be less likely to consider a page as a webspam. On the other hand, if the query term is highly commercial, such as “hotel,” then the cost to bid on that term might be much higher, and the search engine might be more inclined to filter out spam.

***A Popularity analysis mechanism*** – Toolbar information, or some other way of measuring traffic to a page, might be used to see how popular that page is. For example, if data collected from multiple toolbars show that many people visit a particular page, then the automated system might decrease the probability of spam.


## Analyzing user feedback in web spam identification

One concern about searchers providing feedback about websites is that some reports might be people reporting their competitors’ pages as web spam so that those competitors’ pages might be penalized, and they might move ahead of them in search rankings.

A search engine may look at things such as the IP address where feedback came from and record that information. For example, if excessive feedback originates from a single person or address, it may be a signal that it is from a spammer who is trying to “spam vote a result negatively.”

User feedback might also be viewed to see if a page is marked as spam for more than one query term. If a page is marked as web spam for more than one search term or phrase, it indicates a higher level of confidence that the page is spam, regardless of which query term is used to find the page.


## Web Spam Identification Conclusion

It would be interesting to see a search engine adopt a system that makes it very easy for searchers to mark pages as web spam, but would such a system be prone to abuse?

Would searchers possibly mark pages as webspam when they weren’t, for other reasons such as consumer responses to business practices or some other issues?

The patent filing tells us that Microsoft might use information from the automated system alone to identify web spam without reports from searchers under this system. Presumably, reports of webspam from searchers without collaborating information from the automated system wouldn’t result in pages being marked as web spam and penalized by a search engine.

The patent filing doesn’t tell us how detailed such a feedback system might be for searchers and whether it might include detailed questions like the list Google provides on its spam report page.

Will Microsoft add this kind of spam identification system to Bing? Will crowds help make Bing a better search engine?

Last Updated June 9, 2019.
