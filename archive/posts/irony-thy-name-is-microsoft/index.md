---
title: "Irony, Thy Name is Microsoft"
source_url: "https://www.seobythesea.com/2011/01/irony-thy-name-is-microsoft/"
slug: "irony-thy-name-is-microsoft"
date_published: "2011-01-18T10:18:50+00:00"
date_modified: "2020-01-21T15:42:37+00:00"
author: "Bill Slawski"
---

Microsoft was granted a new patent today, [Search ranger system and double-funnel model for search spam analyses and browser protection](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,873,635.PN.&OS=pn/7,873,635&RS=PN/7,873,635) (US Patent 7,873,635), which provides a detailed look at how Bing might attempt to identify search spammers who redirect traffic from search results pages to pages filled with advertising or other content intended to earn the spammers some money.

The patent uses Google’s Adsense as an example of the kind of advertising that these spammers might use in one of these cloaking schemes.

Ironically, Google’s Matt Cutts also uncovered an interesting Bing affiliate scheme today, from a company that [Ad Age calls](https://adage.com/article/digital/estimate-facebook-books-1-86b-2010-advertising-muscles-google-turf/148236) FaceBook’s third largest advertiser in the third quarter of last year.

When you visit the advertiser’s site, it immediately prompts you to install a browser plugin/toolbar that will, according to a terms and conditions page, change your default homepage to another page and search provider, and the advertiser will get a percentage of the revenue from Bing ads displayed.

The following snippet from the patent is worth quoting “as is” from the patent:


> Traffic-Affiliate Spammers
>
> Some merchant websites provide affiliate programs that pay for traffic drawn to their sites. Many spammers abuse such programs by creating and promoting doorway pages that redirect to these merchant sites. There is a major difference between traffic-affiliate spam and syndication-based spam: while the latter displays a list of ads and requires an additional ad-click to initiate the redirection chain leading to the advertiser’s website, the former directly brings the browser to the merchant site.
>
> As a result, while the final destination for clicking on a syndication-based doorway is often a spammer-operated ads-serving domain, it is the intermediate redirection domains in the traffic-affiliate scenario that are responsible for the spam.

While I applaud Microsoft for coming up with ways to help remove web spam from search results, I’m concerned about the affiliate program that Matt uncovered which changes a searcher’s homepage and search provider without the searcher’s knowledge or approval.

While this affiliate isn’t using cloaking or redirection to bring traffic to click on Bing ads, they are doing something that might be considered even worse.

How responsible is Microsoft for the actions of their affiliate in this instance?

The patent itself is very detailed, and the methods described within it were partly the result of an intensive six month study into search spam that uses cloaking and redirection methods.

One aspect behind the patent includes comparing what a potential web spam page might show searchers who arrive at the page through a search engine results page, and what that page might show someone who arrives at the page directly by typing the URL of the page into the address bar of their browser.

Added: 1/18/2011 1:28pm, Many of the ideas presented in this patent are similar to those from the Microsoft whitepaper [Spam Double-Funnel: Connecting Web Spammers with Advertisers](https://web.cs.ucdavis.edu/~hchen/paper/www2007.pdf), co-authored by Yi-Min Wang, Ming Ma, Yuan Niu, and Hao Chen. Yi-Min Wang and Ming Ma are the inventors listed on the Microsoft patent.

Added: 1/18/2011 3:22 it appears that Microsoft has terminated their relationship with the publisher that was urging people to install the toolbar that would change their default homepage and search provider. See: [Bing Terminates Relationship With Publisher Doing Tricky Home Page Switch](https://searchengineland.com/bing-to-address-problems-with-affiliate-doing-tricky-home-page-switch-61551).
