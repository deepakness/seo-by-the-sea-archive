---
title: "When Might Google Show Local Search Information in Web Search Results?"
source_url: "https://www.seobythesea.com/2007/08/when-might-google-show-local-search-information-in-web-search-results/"
slug: "when-might-google-show-local-search-information-in-web-search-results"
date_published: "2007-08-12T07:16:15+00:00"
date_modified: "2020-01-27T11:41:46+00:00"
author: "Bill Slawski"
---

What assumptions might search engineers hold when they consider displaying results to searchers trying to find information? What kinds of things might they try to do to make it easier users of a search engine?

One belief might be that there’s value in presenting contact information for web sites when those pages appear in search results, especially when the site belongs to a business, and the page that shows up in the search result doesn’t contain contact information. Can the search engine make it easier to find that contact information, even make it so that the searcher doesn’t have to actually visit the page?

A new patent application from Google, published this past week at the World Intellectual Property Organization (WIPO), discusses providing contact information such as a telephone number, or address, or even a map to searchers, in Google’s Web search results (as opposed to local search results).

Two of the listed inventors are also named inventors on Google’s patent application for [Site Links](https://www.seobythesea.com/2006/12/googles-listings-of-internal-site-links-for-top-search-results/), which are the lists of additional pages from the same domain that sometimes show up under the first link in search results, in response to a query. The idea behind the Site Links patent filing is to make it easier for a searcher to go directly to a final destination page on a domain, without having to search around for that page.

The idea behind this patent application is to make it easier for someone to find contact information for a site without having to search around for it.

There are some other assumptions and perspectives included in the patent application that have made me think about business address information, and local business listings in a completely different way, such as the notion that a business listing in Google Local Search is a “landing page.”

[Enhanced Search Results](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007090140)
Invented by Walton Lin, Sean Dorward, and Luis Castro
Published internationally on August 9, 2007 and filed January 31, 2007
International publication number WO 2007/090140 A1 and application number PCT/US2007/061350

Abstract


> A method includes receiving a search query from a user and generating search results based on the search query. The method may also include providing the search results and information identifying at least one of a telephone number or an address associated with a first one of the search results to the user. The method may further include providing a link to a map associated with at least the first search result to the user.

The focus of search results has been matching the intent of a searcher to provide them with links to pages that might contain information that they may be searching for, or to help them accomplish some task, or to find some page that they may have visited before.

But, we’re seeing a change with Universal Search and blended search results, where information that may interest a searcher is available directly upon the search results pages, such as definitions, or Question Answering results, videos that will play from within the results, and maps and contact information. The patent application tells us:


> When a user of an existing search engine receives links to web pages of various web sites, the user is often interested in identifying contact information associated with one or more of the web sites. For example, the user may be interested in identifying contact information for a business that is associated with one of the web sites. In this case, the user may select one of the links in an attempt to find the contact information.
>
> In many situations, the contact information is not located on the selected web page. In this case, the user may navigate from this first web -page to other web pages on the same web site to attempt to find the desired information. This may involve clicking through a number of web pages until the user is able to find the information of interest.

In other words, contact information for a business may be shown in search results to provide a good user experience for a searcher, and keep them from having to search around a site that shows up in those results to find a phone number, or address, or a map with a location.

**Assumptions about business location information**

Local Search from Google uses information from organizations that collect and provide information about business, such as the yellow pages, or InfoUSA, or Acxiom, or others. It also takes data from directories, and from other Web pages. The local search system collects that information, and is a potential source to be used to show contact information for a URL listed in Web search results. But it might not show contact information for every business listed, and it may decide that some should display that information based upon a number of assumptions.

Here are some of those assumptions:

1) If there are a number of URLs of pages containing information about a business at a location, and some of that information conflicted, information from a source like InfoUSA might be more trustworthy than other sources.

2) If the URL of the home page for the business at the location contains actual business information on it, then that contact information may be assumed to be correct.

3) The mapping component of this system may perform a “WHOIS” query with a domain name registry entity, to collect a business name, and address and telephone number associated the domain name. If it matches the information collected in the local search repository, that URL may be the one used.

4) The search engine may also look for conflicting information to identify the appropriate URL to show for a business, and ignore URLs for web pages where the information listed for address and/or telephone number on a web page is different than what is in local search results for that business

5) If there are a lot of addresses listed on a web page corresponding to one of the URLs, this may indicate that the URL/web site is a directory site, and the URL might be ignored or discounted for mapping purposes.

7) If the Website is a very large one, the URL may not be mapped to an address or phone number listed in the site, because that information is likely to be a corporate address and general telephone number, so that contact information for that URL probably shouldn’t be provided to the user. While the contact information may be correct, it may not be of value to the searcher.

8) Landing Page – perhaps the most interesting set of statements in the patent application was the use of the phrase “landing page” in the document, referring to the local search page that contains business information. I hadn’t quite thought of local search in that manner.


> Search engine system may provide additional information associated with the Clift Hotel in San Franciico, CA via user interface screen 900. For example, as illustrated in Fig. 9, user interface screen 900 may include additional telephone numbers for the Clift Hotel at area 920 and other information associated with the Clift Hotel at area 930.
>
> In an exemplary implementation, user interface screen 900 may represent a landing page associated with the Clift Hotel that includes information stored by local search data storage and search engine system.
>
> This landing page information, as illustrated in Fig. 9, may include, for example, pricing for hotel rooms, ratings for the hotel, parking information, etc. The information may be collected from a number of sources and may be selected to provide the user with information that is likely to be of use or be relevant to a user. In addition, the selected information may be formatted on a user interface screen, such as user interface screen 900, in an easy to read manner that allows the user to quickly find information of interest

9) Multiple Clusters for Single URLs – when there is one URL, and a lot of addresses, like in the instance of a home page for a chain of restaurants, there are a few potential ways for the search engine to react. The address of a “Wendy’s” in New York may not be relevant to a person searching in San Francisco, so contact information may not be shown for a search result where that URL appears in the search results.

However, if that searcher’s location can be identified somehow, and there is an address that is near, then that contact information might be shown.

**Conclusion**

If a set of search results contained URLs for a number of businesses, it’s likely that the search engine would only show contact information for a limited number of those businesses. This system tries to identify results where the contact information isn’t necessarily on the front page of those URLs, but might be beneficial to someone conducting a search.

That determination uses information collected from the process to create [local search results](https://www.seobythesea.com/2006/09/googles-local-search-patent/), as well as other information such as that gathered from looking at whois information, to try to identify the right contact information. It also tries to determine if the phone number and address associated with a URL is actually useful to the person searching – whether it might be a corporate address far away, or the address of a distant chain.

Under a OneBox approach, contact information for a business might be taken from local search and included in the Web search results if a lot of people search for that business when using local search. That indication of popularity, based upon user behavior, is described in Google’s patent application on [OneBox results](https://searchengineland.com/googles-onebox-patent-application-10325). The contact information may also be shown using a [plusbox](https://www.seobythesea.com/2007/05/google-plus-box-patent-application/).

The focus of this patent application is slightly different in that it tries to provide contact information when that information might be useful to a searcher. It’s possible that the OneBox determination of popularity plays a role in that decision, but that isn’t mentioned in this patent application.

Verfication of business location also isn’t mentioned in the document, but I would assume that making sure you verify a location with Google would make it more likely that appropriate contact information was included with a URL – and the document does note that they treat the local search business listing for a URL as if it were a landing page.

So if you think about what kind of information you are submitting to Google, including information like hours open, parking availability, types of payment accepted, accessibility for people with handicaps, and so on, the more helpful the information that is provided, the more effective that listing becomes as a landing page for your business.
