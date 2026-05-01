---
title: "Patent Filings on Google Finance Provide a Glimpse at Google's Financial News Gathering"
source_url: "https://www.seobythesea.com/2007/08/patent-filings-on-google-finance-provide-a-glimpse-at-googles-financial-news-gathering/"
slug: "patent-filings-on-google-finance-provide-a-glimpse-at-googles-financial-news-gathering"
date_published: "2007-08-31T09:17:32+00:00"
date_modified: "2020-07-26T12:10:16+00:00"
author: "Bill Slawski"
---

I’ve wondered why an occasional post from here sometimes showed up in the news sources that appear in Google Finance. I now have a little clearer understanding of how they perform their newsgathering.

If you use Google Finance and want to know a little more about how it works, or are just interested in how Google might tackle providing information in a narrow field in a meaningful manner, you may want to check out two newly published patent applications from Google on their finance offering: [Computing a group of related companies for financial information systems](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070203720.PGNR.&OS=dn/20070203720&RS=DN/20070203720), and [Interactive financial charting and related news correlation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20070203816.PGNR.&OS=dn/20070203816&RS=DN/20070203816).

Both of them take deep looks at how to present financial information that might make it easier for people to use and to understand how news may impact the prices of stock. Both documents overlap a great deal and share a detailed description and abstract. The abstract tells us:


> Techniques are disclosed by which users looking for financial information about publicly traded or private companies may richly and interactively navigate both pricing and material news information about those companies. The techniques facilitate and encourage the user’s use and understanding of financial information presented. Related company information can also be provided to the user, where related companies are organized by hierarchal categories for a meaningful display.

The documents provide a very detailed glimpse into the presentation of news from many different sources, that accompany stock information about a business, including information from related businesses such as competitors, partners, divisions, joint venture partners.

The assignment of categories to businesses, understanding of relationships between businesses, and verification of those relationships are covered, as is a method of including and ranking information from news sources, blogs, and other content on the Web to display with financial information about the business.

Part of those processes includes looking at when and where mentions of businesses co-occur to know whether to report information about other businesses when presenting news for a particular business. Here’s a look at part of the document, which calculates a score to see how related certain businesses are in Google Finance:

1) The first step is seeing when and where company names co-occur from the first set of sources.

2) The next involves trying to identify relationships between a target company and other co-occurring companies, and verifying the relationship from another set of sources.

3) The last involves creating hierarchical business categories to place the target company within, and deciding which categories the verified related companies fit within.

More details on different parts of those processes are also provided:

1) The process of locating a co-occurrence of company names may include one or more of the following:

a) Identifying all proper nouns in a given context,
b) Identifying company names included in the identified proper nouns,
c) Identifying known name variations of the target company,
d) Identifying known aliases of the target company, and/or;
e) Disambiguating ambiguous terms based on co-occurrence context.

2) The process of identifying relationships between a target company and other companies may include:

a) Determining an overall score for the co-occurrence of the target company and another company (based on one or more relationship indicators), and;
b) Indicating a relationship between the target company and that other company if the overall score satisfies a relationship indicator threshold.

3) Determining the overall score may include determining one or more of the following:

a) If a co-occurrence context has many companies indicated at once;
b) Where a co-occurrence is located in a document;
c) If a co-occurrence is located in a special context, including headlines or headings;
d) If a co-occurrence is reported by a reputable source;
e) A PageRank associated with a co-occurrence is located in a document; and;
f) If a co-occurrence is associated with business relationship indicator words.

4) Verifying each identified relationship further may also include:

a) adjusting the overall score for an identified relationship (based on one or more supplemental relationship indicators),
b) verifying the identified relationship if the adjusted overall score satisfies a verified relationship indicator threshold.
c) Determining an overall score for an identified relationship (based on one or more relationship indicators), and verifying the identified relationship if the overall score satisfies a relationship indicator threshold.

5) Determining the overall score may include determining if supplemental information sources:

a) Indicate business, geography, or stock exchange in which co-occurring companies operate;
b) Indicate at least one of competing products and services of occurring companies;
c) Tend to treat co-occurring companies disparately;
d) That list businesses organized along hierarchical categories indicate co-occurring companies in one or more similar categories;
e) Including SEC filings, indicate co-occurring companies are direct competitors;
f) Indicate an overlap of at least one of industries, sectors, and geographies in which co-occurring companies operate;
g) Indicate a correlation between movements of stock prices of co-occurring companies;
h) Indicate the frequency of a co-occurrence exceeds a co-occurrence frequency threshold;
i) Indicate overlap of co-occurring companies’ products;
j) Including aggregated user navigation histories, indicate co-occurrences of companies; and;
k) Including aggregated user portfolio data, indicate co-occurrences of companies.

**Google Finance Conclusions**

These documents do provide a very methodical and detailed look at understanding how businesses are related. One of the points about the scoring of related businesses in Google Finance that stood out for me was the use of “aggregated user navigation histories” which might provide some insights to Google which aren’t available to others outside of Google.

I’ve only covered a small part of the Google Finance patent applications here. There are some more gems in there, including how candidate news article links might be chosen and ranked. The processes described in the documents provide a nice look at how a search engine might handle and present information the specialized field of Google Finance.
