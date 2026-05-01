---
title: "Google Fights Keyword Stuffed Business Names with Surprisingness"
source_url: "https://www.seobythesea.com/2015/09/google-fights-keyword-stuffed-business-names-using-a-surprisingness-value/"
slug: "google-fights-keyword-stuffed-business-names-using-a-surprisingness-value"
date_published: "2015-09-24T11:34:43+00:00"
date_modified: "2020-06-20T18:19:21+00:00"
author: "Bill Slawski"
---

A [Local search](https://www.seobythesea.com/services-from-seo-by-the-sea/local-search-seo/) Google patent granted this week targets map spammers, who submit information about businesses to Google Maps, in a manner referred to as keyword stuffing, or more specifically keyword-stuffed business names.

The patent attempts to find words submitted by business owners as titles for business names that trigger a surprisingness value for combinations of words within a business title to determine whether a business listing is legitimate or fraudulent.

Traditionally, in Google Maps, the ranking signals used by business listings to include those businesses in search results depend upon their distance from a searcher, how [prominent](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/) a business might be on the web, and how relevant the title for a business might be to the query used in a search to find the business. But often we see keyword-stuffed business names in local search.

When someone searches for a business. Google Maps may show off prominent businesses based on the searcher’s location. This patent targets people who might use that information to attract people to unrelated websites, by faking information in business listings. This patent targets people trying to take advantage of the use of well-known businesses located in a specific area:


> For example, a third party hijacker (or a hijack spammer) is a third party that tries to get a particular business identified or associated with another highly prominent business such that the particular business’s listing or information is displayed prominently in a list of search result.

We’re told that important businesses may be targeted, like well-known restaurants or hotels, and information about them such as their contact information, like a phone number, maybe submitted into listing data associated with the particular business. This patent looks for when a hijacker attempts to insert that prominent business’s title (name) into the title or content of a submitted business’ listing, to engage in creating a fraudulent or “keyword-stuffed” business names.

The keyword-stuffed business names patent provides an example of someone trying to do this, in the drawing at the top of this post.

A keyword-stuffed business listing shows up on a search for “courtyard 4422 y st Marriott Sacramento” into Google map search.

That search result includes a business listing for “$28 Locksmith Sacramento.”

The patent tells us that since this search was for a hotel, the business listing would be considered unrelated.

But, it shows up in that search because it has references, such as user reviews, to the name and address of a Courtyard by Marriott.

The business listed in that search may not be legitimate.


## Identifying Fraud in keyword stuffed business names

The patent tells us about a machine learning classifier approach, that could learn differences between spam and non-spam, by looking at combinations of words in a large collection of business titles. If a business name is submitted that triggers a surprisingness value above a certain threshold based upon the words within that title, it might be considered spam.

The patent is:

[Systems and methods of detecting keyword-stuffed business titles](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,135,625.PN.&OS=PN/9,135,625&RS=PN/9,135,625)
Invented by Baris Yuksel, Lev Ratinov
Assigned to Google
US Patent 9,135,625
Granted September 15, 2015
Filed: May 9, 2013

Abstract


> The present invention relates generally to identifying fraudulent businesses and business listings. More specifically, the invention relates to determining a “surprisingness” value for a particular combination of words in a business title based on the likelihood that the combination has appeared in legitimate business titles.
>
> The value may be used to determine whether the business or business listing is legitimate or fraudulent. For example, third-party hijackers may keyword-stuff business names or attempt to include words associated with prominent businesses in a title of a less prominent business associated with the third party to have the less prominent business displayed more often in search results for the prominent business. For example, if a business title has too many surprising word combinations or a particular combination is highly unlikely, the business listing is likely to be fraudulent or “keyword-stuffed” and may be withheld, excluded, removed from search results.

So a business title that includes the words “Locksmith Restaurant” would have a higher surprisingness value than one that contains the words “burger restaurant.” If that surprisingness value was above a certain threshold, the business listing with that phrase in its title might not be displayed as a search result.

One of the inventors listed on this patent was also listed on two more patents I wrote about earlier this year involving Google Maps and fighting MapSpam (the team at Google that tries to stop the spamming of Google Maps appears to be known as the Mapspam team according to LinkedIn Profiles for some of the people doing that). The blog post I wrote about involving that earlier patent was [Google Maps Using Photos to Identify Spam?](https://www.seobythesea.com/2015/06/google-maps-using-photos-to-identify-spam/)

Both of those patents involved using photos of business submitted to Google Maps to determine if they were real businesses; one involved looking at Street Views pictures of the businesses, and the other asked business owners to sent photos of their businesses to help verify their existence. In both instances, it seemed like the MapSpam team wanted to look at photos that listed the addresses of the businesses submitted.

Automating a way to look at how “surprising” the titles of business names maybe seems like a good way to flag businesses that might seem suspicious. As this patent says, looking for “too many surprising word combinations or a particular combination is highly unlikely” does sound like good ideas when trying to notice people submitting fake business information.
