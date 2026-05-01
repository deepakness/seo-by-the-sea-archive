---
title: "Structured Information in Google's Local Search"
source_url: "https://www.seobythesea.com/2006/09/googles-local-search-patent/"
slug: "googles-local-search-patent"
date_published: "2006-09-09T16:30:44+00:00"
date_modified: "2021-07-07T10:59:50+00:00"
author: "Bill Slawski"
---

## The Importance of Structured Information in Local Search

How does Google Local Search (maps) work, and why should it concern you as a searcher or business owner? A new patent application from Google looks into how it works. It appears that local search cares a lot about Structured Information about businesses on the Web. Before looking at how-to, let’s consider the why.

(Note: there are also some suggestions in conclusion to this post on how the ideas from this patent application may help make it more likely that your listing is correct in Google Local listings.)


## Why be concerned about Google Local Search?

The short answer to why – it can make specific businesses easier to find. Also, Google Local results sometimes show up at the top of organic search results, so a business listed in Google Local may appear before businesses struggling to be the most relevant for an organic search. Important, perhaps, when you want to rank well for something like “pizza New York.”

Search for a specific restaurant in Google’s web search, and you may get a lot of results, with only some of them for the restaurant you are looking for, and it may be difficult to pick out that restaurant amongst all of the other results. If you are that restaurant’s owner, you’ll probably want people to be able to find your place easily.

A searchable directory focusing on a particular city or location may make things easier. That smaller database may even hold some additional information and features like a map showing where the restaurant is located.

Some structured information for a directory like that may be easy to obtain, such as names, addresses, and telephone numbers for businesses located within a particular city, since the information could probably be bought from phone companies and other data providers. But a searcher, a business owner, and the search engine may want to see more information show up for that business. That information possibly isn’t available for sale from those types of data providers. It might include things like:

- Business hours,
- Reservations policies,
- Payment options, and;
- Whether parking is available.

Ideally, the directory would hold this kind of structured information in a way that could answer complex queries such as:

- Find restaurants open past midnight on Tuesdays, or;
- Show restaurants with valet parking that take reservations.

It is possible that structured information needed to build such a directory is on the Web but organized in a way that may make it hard to find and use.

*Example*

A restaurant has a web page with information like its open hours and its reservation policy. It may also be listed in one or more web directories with more structured information.

The restaurant’s web page might say that it is “closed Mondays,” and a local directory might say the same thing but use “Open: T W TH F S.”

That is the kind of thing that makes it difficult to build a unified directory with structured information from more than one source.


## The Google Local patent application on Structured Information

This patent application describes how structured information and unstructured information can be taken from the web to build a set of structured information to create something like Google Local.

In looking at it, we will discuss what structured and unstructured data are and how a search engine might extract information from websites, business directories, and other places to aggregate that information together and build an informative directory.

Here’s information about the patent application:

[Generating structured information](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060200478%22.PGNR.&OS=DN/20060200478&RS=DN/20060200478)
Invented by Egon Pasztor and Daniel Egnor
US Patent Application 20060200478
Published September 7, 2006
Filed: March 1, 2006

Abstract


> Structured and/or unstructured data about enterprises are acquired from one or more sources such as commercial data providers, enterprise websites, and/or directory websites. Strings are extracted from the unstructured data. The strings contain key-value pairs describing facts about the enterprises. The extracted strings are parsed to normalize the keys and values and place them in a machine-understandable structured representation. Some keys and/or values cannot be normalized. The facts are clustered with the enterprise to which they pertain. Normalized facts from different sources are compared, and confidence levels and/or weights are assigned to the facts. These confidence levels and weights are used to select the facts that are displayed on a page for the enterprise in a directory.


## Types of data used in local search

The patent goes into detail over the difficulties of collecting information from different sources, and how it can address some of the issues involved in collecting and merging data. It defines data as:

- Structured Data,
- Unstructured Data, and;
- Semi-Structured Data.

Here are definitions and examples that it provides to help distinguish between the different types.

*Structured Information*

Structured data is data organized in a way that allows it to be easily identified and separated from its source so that a computer or other machine can understand it.

Example:


> Consider a telephone number organized in the structure “TN:xxx-xxx-xxxx” where an “x” denotes a number.
>
> A computer-implemented process that encounters data organized in this format, such as “TN:212-864-6137”, can determine that the key for the data is a telephone number, and the value of the number is 212-864-6137.

*Unstructured data*

Unstructured data is not organized in any particular format, and understanding its context might be difficult.

*Semi-structured data*

Semi-structured data is data that is partially organized.

*Finding and Using Different Types of Data*

How it might work:

- One part of this system, the structure generation engine, would collect unstructured and structured data from places like the web and other sources.
- The structure generation engine parses the data to create structured facts.
- The structured information database stores the structured facts.
- Structured facts are presented to searchers as:- Entries in a local directory entries,
  - Search query results , and/or;
  - Responses to other requests for information.


## Parts of the Structured Information System

Three primarily parts:

- A data acquisition module – Receives documents containing unstructured data about a business
- A data extraction module – Extracts the Information from documents about that business,
- A data parsing module – Takes the extracted unstructured data, and creates structured information about it.

It tries to acquire information about businesses from the following kinds of places:

- A commercial data provider,
- An enterprise web site, and;
- A directory web site.

*Commercial Data Providers*

Information from telecommunications providers such as:

- Telephone companies,
- Media providers such as newspaper companies, and;
- Commercial directory providers, such as the D&B Corp.

Information from these sources is usually structured and provides a limited set of facts about enterprises within specific regions, such as names, addresses, and phone numbers.

*Enterprise Web Site Information*

Information about a business may sometimes be available from sites operated by or on behalf of those enterprises. In addition to some of the types of information mentioned above, it could include pictures of the place, driving directions, sample menus in the case of restaurants, and more.

There are likely millions of enterprise websites that data could be collected from, but it’s often unstructured information, or it is structured in any number of different formats. That is one of the challenges facing a search engine – how to understand that type of information.

It’s also one of the challenges facing a web designer – how best to present that kind of information so that it is easy for a search engine to extract it, and present it within a directory like this.

*Directory Web Site Information*

Sites on the web providing information about multiple enterprises, such as a directory of restaurants in a geographic region.

This data source includes web pages providing structured, semi-structured, and/or unstructured information; often, that information is at least partially structured.

Example:

Each page for a restaurant in a directory website might contain the text “Reservations:” followed by a “yes” or “no” to indicate whether the restaurant takes reservations.

But, some information in a directory like this might not be structured, and different directory websites use different structures.


## The structured generation engine

A hardware and/or software device which collects and structures data from a variety of data sources on the network. The structure generation engine:

1. Has an interface for receiving data from one or more commercial data providers.
2. Can retrieve web pages and other documents from enterprise and directory web sites, and others.
3. Analyzes received data to identify facts formed of key-value pairs. (i.e., Days open – M T W T F)
4. Normalizes the facts’ keys and values to produce structured data (same format for the same types of data across all listings)

The result of this collection, structuring and normalization is a database that can allow searching by a specific region, and which can retrieve and show a web page which includes things like, for example, the following information about a restaurant:

- Name,
- Phone number,
- Address,
- Business hours,
- Reservations policy,
- Parking availability,
- Acceptable payment options,
- Other information.

It could even allow people to perform these types of searches:

- all restaurants within a radius of a certain location,
- all restaurants that accept reservations, and/or;
- all restaurants that are open past 10 PM.


## Data Acquisition

The data acquisition module acquires data about enterprises to be included in the directory.

*From commercial data providers*

Could be received by:

- retrieving the data from a web site operated by the data provider,
- receiving a data feed specifying the data using XML or another format, and/or;
- loading the data from a DVD or other computer-readable media, etc.

*From enterprise web sites and directory sites*

Uses a web crawler to collect information from web pages, which follows links through the sites, and stores information for later analysis.

Sites crawled may be manually specified and/or selected programmatically based on data received from commercial data providers or other sources.

More than one type of crawler may be used – a general-purpose one for sites with unknown formations and a specific purpose one for sites where the format is known in advance.

*Information collected in other ways*

The data acquisition module could use other techniques to collect data about the enterprises:

- The enterprises send pre-structured fact text directly to the data acquisition module, similar to how the module receives data feeds from commercial data providers.
- The data acquisition module examines unsorted web pages found in a repository, such as web pages found in a cache of content retrieved from websites connected to the network.


## Data Extraction

Grabs information about enterprises from web pages and other documents stored by the web crawling module, focusing upon the kind of information that searchers will be likely to find useful. For example:

- Name,
- Address,
- Phone number,
- Business hours,
- Reservations policy,
- Accessibility (i.e., handicap access),
- Payments accepted,
- Parking (i.e., what forms of parking are available),
- Services provided,
- Brands offered, and/or;
- Additional data.

This data extraction module looks for things like text strings that are likely to contain key and value pairs (i.e., phone number – 800 555-1212).

That data is extracted using general purpose and/or specific purpose extractors. Sometimes these are formed of parsers having manually constructed regular expressions. Others might be created using automated wrapper induction techniques.

*Extracting information from web pages with known formats*

A directory about restaurants might include the phrase “handicap accessibility:” followed by a “Y” or “N” at a particular location on the page.

A specific purpose extractor could contain a regular expression to locate that portion of the page to extract the “handicap accessibility” string.

If a directory has two-column tables, with one typically containing keys such as “parking” or “specialties” and the other column contains the value for the key, the specific purpose extractor can extract the key and value pairs from that table.

A general-purpose extractor would try to extract the same types of information, but from web pages with non-specific formats.


## Data Parsing

A data parsing module takes the extracted strings which contain the key and value pairs and tries to represent the fact within them in the same way by normalizing them.

*Example:*

Two different web pages (and extracted strings) represent whether an enterprise is accessible to disabled persons.

- “Wheelchair Accessible: YES”
- “Handicap Access: Y.”

Both enterprises are accessible to people with handicaps, but the keys and values are different (i.e., “Wheelchair Accessible” and “Handicap Access”) and values (i.e., “YES” and “Y”).

*Another example:*

Business hours presented on two different pages:

- “hours: Monday to Friday 9-5”
- “OPEN weekdays from 9:00 am to 5:00 pm.”

Same hours but the strings use different key and value pairs.

*Parsing and Normalizing*

These strings are looked at, and if they can be recognized to include the same type of information, they are put into the same type of format – so that the facts within the key and values that are the same can be stored within a structured data database.

To do that, this kind of normalization process looks at the keys in a key normalization module and the values in a value normalization module.

*Key normalization*

A key normalization module normalizes keys in the extracted strings.

It classifies a string’s data into a known data type, such as hours data, or parking data, or accessibility data.

It could use a parser performing regular expression matching to identify the keys.

Example

The key normalization module would look to see if a string contains the words like “open,” “closed,” “hours,” “daily,” and others that signify that the string is describing business hours.

Example

It would look at a string for words like “parking,” “valet,” “a lot,” and others that signify that the string is describing whether parking is available at the enterprise.

If the key normalization module recognizes a key in an extracted string, it will associate the string with a normalized representation of that key so that Key values like “operating hours,” “office hours,” “business hours,” and similar keys might all be transformed into “hours.”

*Value normalization*

Similar to the key normalization, but instead looking at the values associated with keys so that machines can understand those values.

Again, some type of regular expression matching could take place to help understand values.

Some types of values are relatively straightforward to normalize; Keys such as “reservations policy” and “accessible” usually have values of either “Yes” or “No,” so parsers for these two types of values may perform normalization by determining whether the string contains the words “yes, “no,” or equivalents of those values.

*More difficult values*

Here’s an example of how a string might be parsed and normalized when looking at business hours. Imagine that a business identifies its hours as: “open M-W 9 to 5, TH to 7.”

This is a look at part of the regular expression that might be used, as described in the patent application:


> Times (T)
>
> Are values that describe the times of an enterprise’s business hours. Times in the string are recognized by a regular expression that detects occurrences of substrings like “##:## (AM|PM)” (where “#” is a number and AM|PM are optional subcomponents), “# o’clock,” “noon,” and “#### hours.” Days” (D) are values that describe the days on which an enterprise is open or closed. Days in the string are recognized by a regular expression that detects occurrences of substrings representing days of the week like “M,” “Mon.” “Monday” (and equivalents for other days), “weekends,” and “daily.”
>
> Separators (-)
>
> Are symbols that separate other symbols in the string. Separators in the string are recognized by a regular expression that detects occurrences of substrings representing separators like “-” (a hyphen), “to,” “until,” “through,” and “thru.”
>
> Open/Closed (O/C)
>
> Are values that modify the dates and/or times in the string. These values are recognized by regular expressions that detect occurrences of “open,” “closed,” and/or similar substrings in the string.
>
> Ignores (X)
>
> Are values that are ignored when parsing the string. Ignores are removed from the string using regular expressions that detect spaces, commas, words like “and,” etc.

The patent application goes into a fairly detailed explanation of how that string might be normalized based upon the information provided by the web page.

*Categories of normalization*

Normalization performed by the data parsing module can generally fall into one of three categories:

- complete normalization,
- only key normalization, and;
- no normalization.

In complete normalization, both the key and value contained in an extracted string are normalized.

This is the best result because it allows complete machine understanding of the fact represented by the key, value pair, and allows facts from multiple sources to be compared.

Strings providing data for “business hours,” “reservation policy,” and “accessibility” often use complete normalization.

In “only key normalization,” the data parsing module can understand the type of data contained in the extracted string but cannot produce a machine-understood representation of the value.

Types of “payments accepted” and “parking” data can often fall into this category because the values for these keys are sometimes difficult to parse. It’s possible that after enough values for strings like these are considered, that a parser can be constructed to normalize the values.

In “no normalization,” the data parsing module can’t normalize the key nor the value. Those would be preserved in their extracted form and presented in the directory as-is to allow people to interpret the facts contained within them.


## Data Clustering

Facts from different sources that pertain to the same enterprise are grouped.

*Example*

Five sets of facts from different sources:


> 1. Round Table Pizza 7 650-961-0361
>  570 N Shoreline Blvd, Mountain View, Calif.
>  Open daily 11 am-10 pm 7
>
> 2. Round Table Pizza of Mountain View
>  650-961-0361
>  560 N Shoreline Blvd, Mountain View Calif. 94043
>
> 3. Safeway Food & Drug
>  650-961-4868
>  570 Shoreline Blvd, Mountain View Calif. 94043
>  Open 24 hours
>
> 4. Round Table Pizza
>  650-961-0361
>  399 1st St, Los Altos Calif. 94022
>  Delivery available
>
> 5. Round Table
>  650-384-7463
>  570 Shoreline Blvd, Mountain View Calif. 94043

Set of facts #2 is from data received from a commercial data provider, while the others are derived from enterprise and/or directory websites.

Someone might think the first, second, and fifth sets probably describe the same place.

They disagree about the street address, but it’s more likely that one of the sources had a wrong number than it is that there are two pizza restaurants of the same brand on the same block. Disagreement about the phone number might mean one is wrong or the restaurant has more than one phone number.

Set of facts # 3 appears to describe a different business with the same address as the pizza restaurant. It could be in the same strip mall.

Set of facts # 4 appears to be a different restaurant of the same brand in Los Altos, a few miles away.

A data clustering module would try to identify sets of facts about the same enterprise, and to distinguish sets of facts about different enterprises.

*Use of proximity*

The clustering module attempts to organize the sets of facts by their location. It could try to use latitude and longitude derived from the address and/or other data.

One assumption that may be made is that enterprises reasonably close to each other, give or take a radius of error such as the address confusion described above, might be the same organization. Enterprises far away from each other, such as Mountain View and Los Altos, probably are not.

That grouping might be done by having the clustering module dividing the world into “neighborhoods,” with the neighborhood size being around the “radius of error” (the patent notes that this could be a couple of city blocks in most cases and closer in dense urban areas).

Neighborhoods could overlap, with a set of facts ending up being assigned to several neighborhoods. This is done so that fact sets can be merged with facts in adjacent neighborhoods.

The clustering module compares sets of facts within neighborhoods with the other sets of facts in the same neighborhood to determine whether the facts about the same enterprise. It might compare names, phone numbers, and locations of a pair of fact set and computes similarity scores based on these items. When comparing names, the clustering module would use textual similarity metrics based on shared words and bigrams, weighted by frequency in the body of the database.

*Merging fact sets into clusters*

The clustering module will merge two sets of facts if that similarity score exceeds a certain threshold. Some exceptions are enforced where special conditions might exist, and the sets are likely to be unrelated. For instance, two sets of facts with different phone numbers won’t be merged unless the names are identical.

The clustering module assigns a set of merged facts a “cluster ID” that can be used to identify the group of facts for later processing.

Above in the section on proximity, it was mentioned that a set of facts could be in two overlapping neighborhoods. Because of that, a set of facts could be merged with other fact sets and assigned a cluster IDs in multiple neighborhoods. If this happens, the cluster-ID with the most sets of facts merged into it becomes the cluster for the enterprise.

*Fact comparison module*

A confidence level for facts is established for clusters related to an enterprise. When there are a variety of sources, some facts will agree, and some facts won’t.

If many sources agree with certain facts, then those are assigned a high confidence level. So, if strings of facts about business hours for an enterprise are all the same from different sources used, then those are assumed to be correct, and the facts about those hours are assigned a high confidence level. If many sources conflict about hours, then a low confidence level may be assigned to those facts.

A variation of this approach may weigh other factors:

- More weight to more recent facts and less to older conflicting facts.
- More trustworthy sources may also be assigned a greater weight.
- Sources providing more facts about an enterprise may be given more weight, too.

Partial and/or non-normalized facts may not be assigned a confidence level based upon agreement or disagreement between different sets of facts. Still, they might be given one based upon the source of the fact, the number of other facts within the same set, and/or other criteria.

Facts with low confidence levels and/or weights may be discarded.


## How Facts about an Enterprise are Presented

Facts stored in the structured data database can be used to provide a local directory of enterprises to searchers. The structure generation engine includes a fact presentation module specifying how the directory should present information about enterprises.

This fact presentation module would use the facts’ confidence levels and/or weights of the facts to determine how the facts are displayed within the directory.

Of course, facts with greater confidence levels and/or weights would be displayed, and facts with lower confidence levels and/or weights wouldn’t be shown. The displayed facts may or may not be shown with attribution to their sources.
facts with very high confidence levels would be displayed without attribution – for example, name, address, and telephone facts from the commercial data provider are displayed without attribution.

Facts with lower confidence levels may be displayed with links to the web page or other electronic document where they were taken from. If there is more than one source, the fact with the greatest weight would be shown and attributed to the source that provided it. This way, other facts can be shown instead of duplicative facts.

Example,

source A – enterprise is “Open Mon-Sat 8 am-6 pm,”

Source B – enterprise is “Open Mon-Sat” without time information.

The fact presentation module may show the fact from source A because it contains the most information and therefore received greater weight.


## Conclusion

If Google Local Search uses the process described in this patent, then it may contain some ideas that can help ensure that the right information appears about an enterprise. Here are a few:

1. Try to present information about your enterprise on your website so that a visitor can easily understand, and easily collect and parsed by a search engine. Instead of listing business information like this, present it as structured information that is easy to understand and extract:

XYZ Corp.
123 Fourth Street
Metropolis, Any State, ZIP
(123) 555-1212
9 am – 5 pm, M-F

Consider listing it more like this:

XYZ Corp.

Mailing address:
123 Fourth Street
Metropolis, Any State, ZIP

Phone: (123) 555-1212
Business hours: 9am – 5pm
Days Open: Monday – Friday

This way, you provide easily understood and parsed structured information for the search engine.

2. Check data from telecommunication information providers to make sure that it is correct.

3. Look at directory listings your enterprise may be listed within to make sure the information is correct and up to date.

4. Try to have more facts on your page about your enterprise than some of the other possible sources may contain so that the facts are weighed more heavily since yours would be the source with the most information.

5. Ensure that there are no pages on your site with outdated information about the business, especially if it has moved from one location to another.

6. Include data on your pages with your enterprise information that you might want to be displayed in a local search directory like this, such as accessibility or payment methods, a reservations policy, parking availability.

The patent application doesn’t mention the Google Local Business Center, but it’s recommended that a listing there might also help make sure that good information is listed for your enterprise.
