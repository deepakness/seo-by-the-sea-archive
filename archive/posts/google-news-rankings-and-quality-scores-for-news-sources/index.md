---
title: "Google News Rankings and Quality Scores for News Sources"
source_url: "https://www.seobythesea.com/2009/08/google-news-rankings-and-quality-scores-for-news-sources/"
slug: "google-news-rankings-and-quality-scores-for-news-sources"
date_published: "2009-08-19T12:04:23+00:00"
date_modified: "2021-07-05T22:32:48+00:00"
author: "Bill Slawski"
---

Are large news agencies, with a wide scope of international coverage on multiple topics, with large numbers of reporters, and finely edited articles, better news sources than smaller and more local papers, or narrow niche blogs?

A patent on ranking articles in Google News was granted this week that was originally filed in 2003. It discusses several ranking factors that it might use to present news articles based upon the “quality” of the news sources involved.

What is very interesting about it is that it provides some insight into the assumptions behind those ranking factors. I suspect that Google may have changed its stance on some of the assumptions behind those factors since then.

The patent doesn’t include a full range of signals that Google probably considers in ranking news stories, such as the freshness of the news (as [noted](https://www.seobythesea.com/2008/06/how-google-universal-search-and-blended-results-may-work/) in Google’s patent filing on Universal Search), or whether or not a certain source is the original.

As an aside, a fairly technical, but interesting paper on the topic of finding real-time, or very near real-time origins of content from News articles or blog posts or web pages, from Google researchers is [Detecting the Origin of Text Segments Efficiently](http://web.archive.org/web/20160419051728/http://www2009.org/proceedings/pdf/p61.pdf) (pdf).

The premise behind developing quality signals for news articles is established early on in the patent:


> For example, suppose a person wishes to obtain the latest news regarding a particular topic via the Internet. The person accesses a website that includes a conventional search engine. The person enters one or more terms relating to the topic of interest, such as “Iraq,” into the search engine to attempt to locate a news source that has published an article relating to the topic.
>
> Using a search engine in this manner to locate individual websites that provide news articles relating to the desired topic often results in a ranked list of hundreds or even thousands of “hits,” where each hit may correspond to a web page that relates to the search term(s).
>
> While each of the hits in the ranked list may relate to the desired topic, the news sources associated with these hits, however, may not be of uniform quality.
>
> For example, CNN and BBC are widely regarded as high-quality sources of the accuracy of reporting, professionalism in writing, etc., while local news sources, such as hometown news sources, may be of lower quality.
>
> Therefore, there exists a need for systems and methods for improving the ranking of news articles based on the quality of the news source with which the articles are associated.

I’m questioning that assumption, that sources such as CNN or BBC, may be better sources of quality information than hometown news sources in many instances. I think it’s often possible that a local reporter and a local hometown news source may hold the potential to provide details and insights, and information that a larger organization may miss. It is worth looking at the signals that are listed in the patent, though.

The patent is:

[Systems and methods for improving the ranking of news articles](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,577,655.PN.&OS=pn/7,577,655&RS=PN/7,577,655)
Invented by Michael Curtiss, Krishna Bharat, and Michael Schmitt
Assigned to Google
US Patent 7,577,655
Granted August 18, 2009
Filed September 16, 2003

Abstract


> A system ranks results. The system may receive a list of links. The system may identify a source with which each of the links is associated and rank the list of links based at least in part on the quality of the identified sources.

**Source Rank**

At the heart of the patent is a method of ranking sources for articles that may be on the same topic, to present those articles in order (or determine which might be shown on the front page of Google News, or in a Google News search result.

The process of coming up with a source rank score for a news source is based upon looking at several metrics for each news source, which measure different attributes of the source.

Here are those metrics:

***Number of articles produced by the news source during a given time period***

Presumably, the more articles (non-duplicate articles) produced by the source over some time, the better. We’re told that as an alternative, the search engine might consider the number of original sentences published by the news source during that time.

***Average length of an article from the news source***

It could be measured in words or sentences. If CNN’s articles average 300 words, while a local source averages 150 words per article, CNN might be given a value of 300 for this metric while the local source might be given a value of 150.

Are longer articles better? If a search engine were to look at CNN’s top 100 news stories from the past week, and the top 100 news stories from another source, and compare the length of those, should the source with the longest articles be considered higher quality? If the search engine instead clustered together all articles on a specific story and looked at the length of those, would the longest again be the higher quality story? This metric appears to indicate that it is a signal to consider.

***Breaking news score***

How soon after an important event happens does the news source publish a story about it? If all of the stories about that event were clustered together, and the publication dates and times were viewed, the sources that responded quickest would have a higher “breaking news score.”

***Usage pattern***

If the search engine were to track how many people followed links to particular news sources when they were presented with links to those sources, which sources did people tend to visit more? This doesn’t measure the “popularity” of news sources as much as it does whether or not people follow links to particular sources when they see those links in search results.

***Human opinion of the news source***

People who use the search engine may be polled to identify news sources that they enjoy reading or have visited. Other measures may also be used as well. For instance, we are told that newspapers can be compared based at least in part on the number of Pulitzer prizes the papers have won. We’re also told that the age of a news source “may be taken as a measure of confidence by the public.” As another alternative, evaluators might be shown a selection of articles from different sources, and be asked to assign a score for their sources.

***Circulation statistics of the news source***

The circulations statistics of print publications associated with a source, agency usage statistics “such as Media Metrix and Nielsen Netratings,” and other possible ways of measuring traffic to a source might be considered.

***The size of the staff associated with the news source***

The number of distinct journalist names from articles in the news source might be viewed.

***The number of news bureaus associated with the news source***

This seems to favor larger and more established news agencies.

***Original named entities appearing in articles produced by the news source***

A named entity is a specific person, place, organization, or thing.

If all the stories about a particular event were clustered together, and one included mentions of named entities that other articles on the same topic don’t include, it might rank higher than others. This metric is supposed to indicate that news sources are “capable of original reporting.” There are some limitations to using this approach. For example, the publication dates of the articles might be considered to see which article included which named entity when. Variations in spelling and abbreviation might also be examined when determining whether the named entities in articles are unique.

***Number of topics on which the source produces content***

Articles from news sources might be categorized into different topics, and the range of those topics might be considered as an indication of the breadth of that source. This seems to favor more general sources than ones focused upon a narrower niche. A more focused source may have higher quality articles about the topics that they specialize in.

***International diversity of the news source***

This looks at the number of countries from which the news site receives traffic on the Web. The search engine might look at something like the IP addresses of people who click through links to the sources, to see how to spread out their audience might be across the globe.

***The writing style used by the news source***

The search engine might use automated tests to measure spelling, grammar, and reading levels for a news source.

Other signals might also be considered, such as the number of links that might be seen pointing to the news website.

**Conclusion**

There have been a few other patent filings from Google about Google News, but none of them have gone into the kind of specific detail on signals that the search engine might look at in ranking sources and articles like this one have.

While this was filed almost 6 years ago, it does provide details for an algorithmic approach to assigning scores for news sources that could be used to rank news articles in Google News, and many of the assumptions behind specific factors in that algorithm. It’s possible that some version of this algorithm is still in use today, and a number of the ranking factors involved may also be in use.

I do question some of the assumptions that are made.

For instance, if a breaking story came out about a discovery in Physics, and a reputable and well-respected site on Physics News published an insightful and detailed article on the discovery, it could be a better source for the topic than a news source that may have written about the discovery first, has many more reporters and much wider circulation, gets seen by a much more international audience, has a wide number of news bureaus, has been publishing since the 1800s, and was written by someone who doesn’t know much about physics at all.

If you were interested in that discovery, which story would you rather see?
