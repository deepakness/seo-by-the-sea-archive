---
title: "A Search Engine May Add Related Entity Information in Search Results"
source_url: "https://www.seobythesea.com/2008/09/how-a-search-engine-might-add-related-information-about-people-places-and-things-into-search-results/"
slug: "how-a-search-engine-might-add-related-information-about-people-places-and-things-into-search-results"
date_published: "2008-09-23T09:21:47+00:00"
date_modified: "2020-07-25T11:44:26+00:00"
author: "Bill Slawski"
---

## Related Entity Information

You’re listening to a song on the radio, and you catch the title “Wonderwall,” but not the artist who performs it. You’d like to find out more about the song, and the performer.

You go to Yahoo, and type in the search query “Wonderwall.”

Imagine that instead of just receiving a list of pages and other results that are strict keyword matches for the song, the results you received include detailed information about Oasis, the band behind the song, as well as band members Liam Gallagher and Noel Gallagher, Those results include pictures, videos, biographic information, and more, and come from pages that don’t even mention “Wonderwall.”

In the search for “Wonderwall,” the search engine noticed that the names “Oasis,” and “Liam Gallagher,” and “Noel Gallagher” all appeared frequently in the search results returned on that search. Because of that, the search engine expanded the search results to include profile information for those three frequently occurring names.

This kind of expansion of search results, to include names of entities found in a search for an original search query is described in a patent filing from Yahoo. While it doesn’t presently appear in use, it’s a possible approach from the search engine.

[Implicit name searching](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080228720.PGNR.&OS=dn/20080228720&RS=DN/20080228720)
Invented by Rajat Mukherjee, Irfan Presswala, and Kalpana Ravinarayanan
Assigned to Yahoo
US Patent Application 20080228720
Published September 18, 2008
Filed March 14, 2007

Abstract


> Techniques and tools described herein provide mechanisms for displaying information that is contextually related to a search query. Using these techniques and tools, a user can look up and discover a person or other entity from contextually related information. For example, if the user submits a search query on the title of a song (e.g., “Janie’s got a gun”), then, in addition to a variety of documents related to the title of the song, the user may be presented with information about a related entity such as “Aerosmith” (e.g., the band that sings the song).
>
> In this way, the techniques and tools provide mechanisms that identify information that is not directly related to the search query, but that is information the user may find useful or interesting based on the context of the search query.

When someone searches using the query “Janie’s got a gun,” in addition to pages related to the title of the song, information about a related entity, the band that sings the song (Aerosmith), may also be shown.

Under this process, a search engine evaluates search results, finds key terms and phrases associated with the search results, and uses those to locate additional related information contextually relevant to the search query.

A mix of heuristics, or rules, may be used to select the key terms or phrases.

One of those rules involves looking at key terms and phrases that commonly occur within the search results to consider them as candidate entities to be profiled, and displayed with the search results.

In this way, information that is not directly related to a search query, but which may be interesting to a searcher could be identified based on the context of the search query.


## Named Entities and Related Entity Information

The patent application uses the phrase “named entity,” which can apply to a wide variety of subject matter:

- A person (e.g., celebrity, artist, author, athlete, or other famous person),
- An organization, (e.g., United Nations, World Bank),
- An institution (e.g., Harvard University),
- Song,
- Album,
- Book,
- Motion picture,
- Software application,
- Food items,
- Other consumer products,
- Toys,
- Electronic goods, or;
- Any other known or perceived object.

Named entities might be found by analyzing the search results for a search query to find common objects or themes that the user might be interested in.


## Examples of Named Entities from Searches

1) A search for “Chicago Bulls” might return documents in which the name “Michael Jordan” shows up in many of the search results since he played for the Chicago Bulls. This can be done, even though he was not specified in the original search query.

2) A search for “The Splendid Splinter” (a nickname for Ted Williams) might return as a named entity the Boston Red Sox because the Boston Red Sox is indirectly related to Ted Williams.

3) A search for the book “The World is Flat,” might result in a related name entity of its author “Thomas L. Friedman”.

4) A search for a snippet of movie dialogue, the term, “I’ll be back,” could return Arnold Schwarzenegger.

5) A search on medical symptoms may return a drug name that relieves those symptoms.


## Named Entity Metadata

Named entity metadata is the kind of information that can be shown to searchers whenever a named entity is taken from a search query. This kind of information would be relevant or interesting information about the named entity.

Examples of named entity metadata include, but are not limited to profile information, search engine data, and feed-based data.


## Profile information

Profile information generally refers to predetermined information about a name entity, such as:

- Biographical information,
- Photos or links to photos,
- Links to other webpages,
- Organizational information,
- Product information,
- Advertiser information, and;
- Other such information that has been associated with the name entity.

When a named entity is identified, If there is associated profile information (possibly in a profile information database), it may be displayed as part of the name entity metadata.

This kind of profile information might be generated automatically by the search engine, or it may be generated manually by users, advertisers, and webpage publishers who could access the location the profile information is stored and add information associated with a named entity.


## Search engine data

Information about a name entity generated by a search engine, such as:

- Static abstracts,
- Active abstracts,
- Additional links related to a particular web page,
- Search results based on search queries,
- Related topics and keywords,
- Other suggested queries, and;
- Other such information.


## Feed-based data

Feed-based data is information submitted to a search engine by a web page publisher and/or advertiser whenever a particular name entity they are associated with is identified, and can include:

- Links to other web pages,
- Promotional offers,
- Metadata, such as information about the title, author, date and publisher of a web page,
- Keywords, and;
- Other related topics that may be useful to a user browsing searching for information.


## Name Entity Data Example

Ted Williams, the baseball player, is identified as a name entity for a search query on “The Splendid Splinter”. The name entity metadata for Ted Williams might include:

- A photo,
- A summary of his career statistics,
- Links to websites about him,
- Links to shopping sites where memorabilia can be purchased, and;
- Other such information.


## Finding Named Entity Informations in Search Results

One approach that might be used as described in this patent is the use of search results to determine a name entity or entities for a search query. There may be others, but they aren’t detailed in the patent filing.

Terms and phrases appearing frequently amongst search result pages could become candidate name entities.

Candidate name entities are key terms and phrases that meet basic threshold requirements before they can be considered as a named entity relative to a particular search, such as appearing in 80 percent of the search result pages.

The search engine might only look at a subset of search results for a query, or the entire set of search results. If thousands of results show up for a query, the search engine might only look at the top ten results, or it could consider a certain percentage of the results.

Very common words such as “the”, “and”, “to”, might be excluded as keywords since they may not provide semantic or contextual meaning. Terms that identify people, places, organizations, products, and other things may be extracted from documents appearing as search results and may be used as keywords.

In deciding whether a term or phrase should be considered a candidate name entity, the search engine might look at things such as:

- The number and percentage of documents that reference the keyword,
- The number of occurrences of the keyword in each document,
- How recent each document is,
- The overall relevance of each document,
- Whether the keyword has any special meaning,
- Whether the keyword has previously been identified as a name entity,
- Whether the user has previously performed searches on the keyword,
- How recently those searches occurred,
- Whether there is an entry in a profile information database for the keyword,
- How often users search for the keyword, and;
- Other such factors.

There may be many potential candidate named entities for a query, and the factors listed above may be used to pick between them. The search engine might designate more than one candidate named entity for a query.

In addition to looking at the items in the list above, the search engine may also look to see if there is an entry in the profile information database for those keywords considered to be candidate keywords.

Once a named entity has been designated, named entity metadata is collected for that named entity, which can be taken from a search on the name entity or information taken from a separate profile information database.

Will Yahoo adopt this “named entity” approach? It would be interesting to see it in use.
