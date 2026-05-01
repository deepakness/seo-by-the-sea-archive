---
title: "Address Completion in Google Local Search"
source_url: "https://www.seobythesea.com/2008/03/incomplete-and-wrong-data-in-google-local-search/"
slug: "incomplete-and-wrong-data-in-google-local-search"
date_published: "2008-03-16T16:38:15+00:00"
date_modified: "2020-06-21T15:54:21+00:00"
author: "Bill Slawski"
---

Google Local Search uses address information that it buys from data suppliers like telephone companies.

Sometimes street numbers or other location information for businesses are missing in the information provided by those data suppliers.

How might Google fill in the missing information? One way might be for Google to search the web to find more about those businesses.

A newly published patent application from Google explores how it might perform web searches with the incomplete location information that it does have for businesses, and look at the snippets returned to perform ad0dress completion for those businesses.

What if any of that information is wrong?

Mike Blumenthal recently discussed an interesting question related to local search in [Google Plus Box – Where does the (wrong) data come from?](http://blumenthals.com/blog/2008/03/06/google-plus-box-where-does-the-wrong-data-come-from/) It’s a very good question, and he has some interesting examples.

**The Address Completion Patent Application**

For some types of businesses (and non-commercial organizations) and businesses in some geographic areas such as China, address information can be difficult to obtain.

While Google can buy business listing data from commercial data vendors such as telecoms, that information may often lack street numbers or other important information, making it difficult for local search to display complete addresses and maps to searchers.

The Google patent filing describes how the search engine might try to get complete information for businesses.

[Local Search Using Address Completion](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080065694.PGNR.&OS=dn/20080065694&RS=DN/20080065694)
Invented by Jiang Qian
Assigned to Google
US Patent Application 20080065694
Published March 13, 2008
Filed May 22, 2007

Abstract


> A local search server receives queries for information about businesses from clients. The local search server searches a local information database for information about a business and reports the information about the business to the client that requested it.
>
> Sometimes, the database lacks complete information for the business. For example, the database might be missing the street number for the business.
>
> The local search server obtains the missing information by interfacing with a search engine and searching for hosted documents about the business.
>
> The local search server receives snippets of text from the documents. The local search server applies one or more heuristics to the text snippets to determine the missing information. The missing information is saved in the local information database.

**About Local Search**

A local search engine may collect information taken from many data suppliers that provide listing data about businesses and other entities from specified geographic areas. The listing data might contain complete addresses for some businesses, but only partial addresses for others.

Local search works by responding to search queries for information about businesses within particular geographic regions by providing searchers with information about the businesses that may satisfy the query. Information about a business can include:

- An address or other location information,
- Business hours,
- Phone number,
- Editorial reviews of the business,
- User-submitted ratings of the business,
- A map displaying the location of a business,
- Accepted forms of payment,
- Whether parking is available,
- Photos,
- A link to the business’s web page,
- Other information.

**Missing Address Information**

While the local search server may have general address information for a business from a data supplier, other information might be missing that would help show the exact location of the business and enable it to be shown on a map.

There might be more information about well-known businesses, and less information for lesser-known businesses. In places like certain regions of China, complete address information is difficult to obtain from any data supplier.

Local search doesn’t need to show something like the floor number for a business in a skyscraper, but being able to show business on a map, or to provide driving directions is helpful to searchers.

**More Address Information from Search Snippets**

Google might try to make up for this lack of complete information by looking for more information about the business on the Web.

Some types of businesses, such as parking lots, might be excluded from this process of gathering more information.

For businesses that are included, Google might search for web pages describing those businesses, containing terms matching some or all of the known address information for the businesses, and returning snippets of text from pages that satisfy the queries. Text in those snippets from near the search terms may include additional address information.

A snippet analysis program would follow certain rules to identify missing address information. Those rules can vary depending upon things like:

- The language in which the search results are presented,
- The type of missing address information that is sought,
- The type of business, and/or;
- Other factors.

*Examples of Snippet Analysis Rules:*

Choosing consistent versions – There may be more than one way to describe a street address, and the search engine may choose one way over another. For instance, in China, numbers can be represented in number for and in Chinese character form. That information might be shown in local searches only in number form.

Looking for correct information – When looking at individual snippets to find a street number or other part of the address, if the business name appears before the address, it may be more likely to be the correct address for the business than if it appears after the address.

**How Snippet Analysis May Determine Address Information**

A snippet analysis program might favor more precise information over less precise information. The patent application provides many examples:

1. When two street matches are found in a snippet and only the second match has a number, the snippet analysis program may treat the second street match as the address of the business.
2. If a single snippet contains two different addresses of equal precision (e.g., two different street numbers), the snippet analysis program may favor the first address appearing in the snippet.
3. For a snippet that contains multiple different addresses, the snippet analysis program might favor addresses that occur more frequently and/or occur earlier in the snippet than other addresses.
4. If there are multiple snippets with inconsistent address information, the snippet analysis program may favor snippets from pages with titles that include the name of the business over snippets from pages with other titles, seeing the pages with the business name in the title as more relevant.
5. When a snippet includes a cross street in the address, the snippet analysis program may favor the street having the street number and uses that street and number as the address.
6. If a snippet includes a cross street but lacks a street number, the snippet analysis program may infer a street number based on the cross street.

**Asking Users and Other Data Providers for Address Information**

This address completion program could run when someone searches, and it could ask for more information from the searcher.

Sometimes searchers do know the complete address for a business, and they might provide actual street numbers or other information, such as a cross-street near the business.

It’s also possible for the search engine to try to obtain additional address information from an alternative paid data supplier.

**One Example of Address Completion**

From the patent application:


> For example, assume that the local information database 310 contains an entry titled “Wal-Mart,” and that this entry contains the address information “Freeport Road, Pittsburgh Pa.”
>
> An embodiment of the local search server uses the search engine to search for documents from document hosts having the terms “Wal-Mart,” “Freeport,” “Road,” “Pittsburgh,” and “PA” to ascertain the complete address. In return, the search engine returns the snippet: *Wal-Mart Store 877 Freeport Road, Pittsburgh, Pa. 15238. Wal-Mart Super Center 250 Summit Park Drive, Pittsburgh, Pa. 15275. Select from the listings above*
>
> The local search server uses heuristics to parse this snippet and determines that “877” is the street number for the Wal-Mart store on Freeport Road in Pittsburgh, Pa. In response to a query from a client, the local search server uses the geocoder module 314 to generate a map that accurately identifies the location of the store and reports this result to the client.

**Other Uses**

The process described in this patent application could be used for other purposes than local searches, such as generating facts for a general fact repository that stores information from the Web (such as [Google Q&A](https://support.google.com/websearch/#qna&topic=3378866)), covering a much wider range than just address information.

**Why Does Incorrect Address Information Show Up in One Box Results?**

Mike Blumenthal asked in his blog post, where the [wrong data comes from in One Box results](http://blumenthals.com/blog/2008/03/06/google-plus-box-where-does-the-wrong-data-come-from/) – when Google only shows address information for one business based upon a query. I really can’t answer that with any certainty.

Since I’m writing about how Google might gather address information when there is incomplete information for a business, I thought it might be good to look at some of the other patent applications to see if they provided some helpful information.

There may be other things going on behind the scenes at Google that we don’t know about, but here are some of the things I’ve seen from the patent filings. Maybe they can help us.

*Onebox results as Contact Information*

A patent application that seems to address where one box information comes from is [Enhanced Search Results](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007090140), which I wrote about in [When Might Google Show Local Search Information in Web Search Results?](https://www.seobythesea.com/2007/08/when-might-google-show-local-search-information-in-web-search-results/).

It provides many assumptions and insights into when Google might try to use information from their local search database, and when they might try to show information from the web site listed instead.

Incorrect or incomplete information can be available in the primary data sources that are purchased by Google from telecom providers and other collectors of location data. It’s also possible that web sites may contain old or inaccurate addresses for businesses.

*Onebox Results as the Best Match for a Query*

The decision to show either one address or more addresses with location information for businesses during a web search is described in a Google patent application titled, [Geographic Coding for Location Search Queries](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2007087629), which I wrote about in [Girl Scouts with Guns: Geographic Coding in Google Location Searches](https://www.seobythesea.com/2007/08/girl-scouts-with-guns-geographic-coding-in-google-location-searches/).

If one business is the best result for a web search query, and any other results have a much lower confidence score, then only one result will be shown. If there might be several good results for the query used, then multiple results might be shown:


> If the best score is more than a predetermined multiple of a next best score, the location corresponding to the best score may be provided to the user along with a map image of the corresponding location. The map image may be centered on the corresponding location and may be sized to include a per-determined bounding box, region or window around the corresponding location.
>
> Alternatively, if the best score is less than the predetermined multiple, several locations corresponding to a range of scores may be provided to the user.

*Political and Other Reasons for Incomplete Information*

Some of the difficulties in getting good location information from places like China are explored more fully in a patent application titled Local Search, which I wrote about in [Google Local Search in China: Export Restrictions, Filtering Sensitive Keywords, and Limited Data](https://www.seobythesea.com/2007/03/google-local-search-in-china-export-restrictions-filtering-sensitive-keywords-and-limited-data/).

While the focus of that patent application is upon local search in China, it provides some other insights into approaches that Google could use anywhere when there is limited address information for businesses.

It also describes the possibility of using different colored icons on a map for businesses where less than complete address information is available.

*Best Data Problems and Incorrect Address Information*

A couple of patent applications from Google explore the database side of Google’s local search database more deeply.

The patent filing [Generating structured information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060200478%22.PGNR.&OS=DN/20060200478&RS=DN/20060200478) (which I wrote about in [Google’s Local Search Patent Application](https://www.seobythesea.com/2006/09/googles-local-search-patent/)) provides a lot of information about the collection of data from different sources, comparison of that data, and choices made as to which data should be shown for a business at a location.

The document tells us about how “confidence levels” for different geographic facts might be scored and used to determine which information to display for a location.

An even deeper look at local search database structures, on choices made about which information to show with specific locations, is the focus of the patent filing [Identifying locations](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070015119%22.PGNR.&OS=DN/20070015119&RS=DN/20070015119). I blogged about that document in [A Google Approach to Improving Location Information Accuracy](https://www.seobythesea.com/2007/01/a-google-approach-to-improving-location-information-accuracy/).

The location repository approach in *Identifying Locations* sounds like a way of following best practices in building a database, but a database can only be as good as the data that goes into it.

*Direct Address Information in the Future?*

A potential future source of address information might come directly from signs on buildings in the [street view](https://support.google.com/maps/answer/3093484?hl=en&rd=1) images of the buildings, which I wrote about in [Google on Reading Text in Images from Street Views, Store Shelves, and Museum Interiors](https://www.seobythesea.com/2008/01/google-on-reading-text-in-images-from-street-views-store-shelves-and-museum-interiors/). Another post on that topic is [Better Business Location Search using OCR with Street Views](https://www.seobythesea.com/2007/06/better-business-location-search-using-ocr-with-street-views/).

Errors caused by the software that tries to read characters on signs from buildings might be limited by the use of global positioning satellite (GPS) information that is also collected when images are taken of buildings for Google’s Street Views program.

The images and address numbers of buildings photographed can be matched up with a database that shows which buildings are at which GPS location.

**Conclusion**

Indexing the World with local search may face more challenges than just indexing the World Wide Web. A recent news story at the LA Times about “Google Street Views and US Military Bases” described what happens when a street view team tries to film a military base.

Local, national, and international methods and laws about collecting and sharing data about locations differ.

Data collection by telecoms is more interested in phone numbers than street addresses. Web site business owners differ in how they provide contact and business location information on their sites if they provide that information at all.

Mistakes in address information are going to happen – it’s inevitable. New businesses open, old businesses may close, or move, or change names, or merge with other businesses. Telecom information may not be corrected, or may not be updated very quickly, and can often be incomplete.

Websites may contain pages that show older addresses or the addresses of agents or attorneys or mail drops or post office boxes or multiple locations.

Correcting address information looks like it can be a challenge from the webmaster posts and comments at the Google Maps Help Center.

Some steps in making sure that Google’s local search has the right location for your business may include

(1) checking your site or sites for old or incorrect address information,

(2) searching Google with your business name and then with address information (partial and complete) for your business to see what comes up, and making whatever changes you can,

(3) checking to see what information that telecoms and other data suppliers might have about your business, and

(4) verifying and editing your business information at the [Google Local Business Center](https://accounts.google.com/signin/v2/sl/pwd?continue=https%3A%2F%2Fwww.google.com%2Flocal%2Fadd%2FbusinessCenter%3Fgl%3DUS%26hl%3Den-US&service=lbc&hl=en-US&gl=US&flowName=GlifWebSignIn&flowEntry=ServiceLogin).
