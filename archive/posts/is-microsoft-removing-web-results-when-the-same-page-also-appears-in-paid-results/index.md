---
title: "Is Microsoft Removing Web Results When the Same Page Also Appears in Paid Results?"
source_url: "https://www.seobythesea.com/2007/02/is-microsoft-removing-web-results-when-the-same-page-also-appears-in-paid-results/"
slug: "is-microsoft-removing-web-results-when-the-same-page-also-appears-in-paid-results"
date_published: "2007-02-27T19:32:11+00:00"
date_modified: "2020-06-23T10:04:41+00:00"
author: "Bill Slawski"
---

*This is a discussion of a Microsoft patent granted today that may not have been implemented, and may never be. It’s unclearly written, but worth discussing…*

When you perform a search at a search engine, the page that shows the results of your query is often referred to as a *search results page*.

![Live.com search result page showing a paid result and a Web search result.](media/lasagnasearch.gif)

Search engines don’t like to show a link to the same page more than once in their search results pages – at least in the unpaid Web search part of their pages. But, most search engines also show advertisements on many search results pages, which look similar to the Web search results.

It’s also possible that a search query using multiple terms, each of which an advertiser may be bidding upon, may cause a page to show up in paid results more than once.

And it’s not completely unusual to see a link to the same page in the paid results and the Web results on a search results page. But what if a search engine decided to show the paid-for result, and remove the Web result?

A newly granted patent from Microsoft describes what happens when links to the same page might appear more than once upon a search results page in Web search (usually one version gets filtered). It also discusses what might happen when the same displayed URL may show up more than once in the paid results listings. Part of it also discusses the instance where the same link appears in both paid results and web results.

**Duplicate Pages in Web Search Results**

Sometimes the same web page may be indexed more than once by a search engine under different web addresses (URLs). Here’s an example of how that might happen:

- http://www.example.com
- http://www.example.com/home.html

The page “home.html” is the default file in the root directory for the “example.com” domain and the search engine may have recognized (it doesn’t always) that they are the same page. If the search engine finds that both of these pages are relevant for a search that someone has performed, it may filter one of the versions, and show the other one.

The summary of the patent tells us:


> The present invention provides a system and method for removing unnecessary multiple references to a common resource such as removing certain redundant listed Uniform Resource Locators (URLs) that reference the same display URLs (and thus the same Web page) as another listed URL.

**Duplicate Pages in Paid Results**

There are times when the owner of a page may pay to have the page show up in the paid search listings section of a page.

Normally, a paid search result is tied to a keyword being bid upon, and someone advertising their site may choose to bid upon more than one keyword term or phrase. What should a search engine do when a searcher uses a query which uses more than one of those bid-upon terms or phrases?

Should it show the same page twice? Should it show the most relevant? Frankly, it’s a little hard to tell what this patent is suggesting here when there is more than one URL showing up in paid results.

What’s worse is what it seems to imply when there’s a page that shows up in both paid and unpaid results.

**Microsoft’s Granted Patent**

[Systems and methods for removing duplicate search engine results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,185,088.PN.&OS=PN/7,185,088&RS=PN/7,185,088)

Invented by Navin Martin Joy and Sally Salas
Assigned to Microsoft
US Patent 7,185,088
Granted February 27, 2007
Filed March 31, 2003

Abstract


> The present invention is directed toward efficiently locating desired information and, more specifically, to providing a system and method for removing unnecessary multiple references to a common resource such as redundant listed Uniform Resource Locators (URLs) that reference the same display URLs (and thus the same Web page) as another listed URL.
>
> Consequently, in circumstances where only a smaller, finite number of listed results are immediately used (such as displaying only the twenty most relevant results on the first page presented to a search engine end-user), the finite number of listed results may correspond to a greater number of unique display URLs than would otherwise occur absent this form of filtering.

**Some Controversy: Removal of Web Results**

Keep in mind that not every patent that is granted gets implemented. And some that are granted maybe shouldn’t be implemented. Some patents also aren’t very clear as to what they are presenting either.

I’m quoting the following section out of context, and it probably needs to be in context to make more sense – but I’m struggling with it reading in context, too. It appears to say that in some instances, when a link to a page appears both in paid listings and in Web results, that the unpaid listing might be removed from results.


> On the other hand, if any of the listed URLs is a paying URL, at step 458 the system determines if any of the paying URLs are immune URLs (“URLs”)–that is if any of the paying URLs are immune from elimination. (The present embodiment presumes that some paying URLs may be immune from elimination and that only paying URLs may be immune; of course, other presumptions are possible and the present invention is in no way limited to this particular presumption as described herein).
>
> If there are no immune URLs (again, paying URLs that are immune from elimination) then, at step 460, the system determines if any of the non-paying URLs (“npURLs”)–that is, any listed URL that is not a paying URL–has a higher relevance than the one paying URL having the highest relevance among paying URLs. If the most relevant paying URL is also the most relevant listed URL in the group, then at step 456 the system eliminates all but the most relevant listed URL (which, by default, is a paying URL).
>
> However, if there is at least one non-paying URL with a higher relevance than the most relevant paying URL (“MaxPURL”), then at step 462 the most relevant paying URL and the most relevant non-paying URL (“MaxnpURL”) swap their respective relevances (including any relevance content) and then, at step 456, all of the listed URLs are eliminated except for the most relevant listed URL (which, because of the swap, is the most relevant paying URL).

**Conclusion**

Some of my uncertainty comes from the use of the phrase “immune from elimination.” This patent doesn’t describe how a paid listing becomes “immune.” Is it something that an advertiser would be able to decide upon, with full disclosure that a web result might not be shown if the paid result was? Does it mean something else?

Also, some parts of this patent could be used without other parts being implemented. The parts of this application that could cause duplicates of Web results, and possibly duplicates of paid results from being shown, could be adopted without the part that might cause a choice to be made about whether or not to remove a Web result when a paid result was also showing.

I’ve seen links to the same page in Google listed in both paid and web results on a single results page. Microsoft’s search may do the same thing.

What do you think?
