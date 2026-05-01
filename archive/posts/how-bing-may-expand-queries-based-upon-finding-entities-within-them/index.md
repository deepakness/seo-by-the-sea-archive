---
title: "How Bing May Expand Queries Based upon Finding Entities Within them"
source_url: "https://www.seobythesea.com/2015/04/how-bing-may-expand-queries-based-upon-finding-entities-within-them/"
slug: "how-bing-may-expand-queries-based-upon-finding-entities-within-them"
date_published: "2015-04-03T11:34:21+00:00"
date_modified: "2021-05-06T14:25:16+00:00"
author: "Bill Slawski"
---

> “Examples of entity graphs include Microsoft Corporation’s Satori and Google’s Knowledge Graph, or Facebook’s semantic graph.”


[![Bing's Satori Result needs updating on a search for \[Satori knowledge graph\]](media/Bings-knowledge-panel-satori1.jpg)](https://www.seobythesea.com/wp-content/Bings-knowledge-panel-satori1.jpg)

_Bing’s Satori Result needs updating on a search for [Satori knowledge graph]_

A Microsoft patent application was published at the World Intellectual Property Organization this week on Semantic Search issues that describe how Microsoft’s Understanding of Entities may influence the search results you might see at Bing.

As a Microsoft patent tells us:


> While much has been done by search engine providers in identifying highly relevant search results to a search query, there are still many times that a search engine provides search results that are not relevant (or that are less relevant) to what the computer user is seeking. Indeed, using a string of text to represent an entity is inherently ambiguous, having both low identification precision and content recall. Moreover, typically the content index of a search engine is indexed according to string found in the content: again highly ambiguous. A superior manner of identification is from searching based on entities or mapping queries to entities.

This “failing” of a search engine in returning a string of text instead of acting to identify an entity within a query and using “related entity data” about that identified entity to respond to that query is a missed opportunity. Instead, the related entity information can expand a search query and present search results based upon the expanded query, according to the patent application filed at the World Intellectual Property Office by Microsoft this week.

The patent uses a method to provide improved search results in response to receiving a search query. It starts with an entity in the search query being identified. Once that is done, then related entity data is obtained. That related entity data comprises several related entities related to the entity identified in the search query. That related entity data may be used to help return better search results, as the patent tells us:


> An expanded search query is generated according to the received search query, the related entity data, and a search model. It may include a search query segment and at least one of a disambiguation segment, an alias segment, and a filter segment. The search query segment includes a query term for the identified entity. Further, the choice of at least one of the disambiguation segment, the alias segment, and the filter segment includes a query term not included in the originally received search query. Search results for that expanded search query are obtained. A search results presentation is generated according to the obtained search results, and the search results presentation is provided in response to the received search query.

The patent is:

[Query Expansion, Filtering and Ranking for Improved Semantic Search Results Utilizing Knowledge Graphs](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2015047963) (WO2015047963)
Applicants: Microsoft
Invented by: Justin Ormont
Eliot Marc Davis
Pub. No.:WO/2015/047963
International Application No.:PCT/US2014/056853
Publication Date: 02.04.2015
International Filing Date: 23.09.2014

One of the interesting definitions that I saw in this patent involved what Microsoft referred to as an **Entity Graph** as I started this post with a quote from this section of the patent called Microsoft’s Satori or Google’s Knowledgebase, or Facebook’s Semantic Graph to be Examples of entity graphs. So what is an “entity graph”?

The patent starts by describing entities in the context of “Alias Entities,” where it defines what it means as an entity graph. (This is the first time I’ve seen a Knowledge Graph like Google’s defined in quite this way):


## Alias Entity Information


> Regarding the term “entity,” an entity corresponds to a specific, identifiable thing in a corpus of things/entities. An entity may be an abstract concept or tangible item, including illustration and not limitation: a person, a place, a group, an organization, a cause, a company, an activity, an event or occurrence, and the like. An entity can be specifically and uniquely identified or distinguished among the corpus of entities. While an entity may be specifically and uniquely identified among the corpus of entities, an entity may be referenced by any number of aliases. For example, an entity for the company “Microsoft Corporation” may be referenced by the aliases “Microsoft Corporation,” “Microsoft Corp.,” “Microsoft,” and “MSFT.” An entity may be an atomic unit or comprised of sub-components, each sub-component being an entity. For example, “Microsoft Corporation” comprises many divisions and provides numerous products and services, each of which is an entity. An entity may also be assigned a globally unique identifier (also referred to as a GUID), the GUID being unique within the corpus of entities.

We are then told that edges connect an Entity Graph to other entities that are related somewhat to each other. For instance, the entity node for Microsoft has connections or edges leading to other entities such as “Xbox, Windows, Bing, Excel, and the like, indicating that these other entities are “products of Microsoft Corporation, with the products of being at least one relationship between Microsoft Corporation and the other entities. In addition, of course, the entity/node for Microsoft Corporation may have additional edges to people, with the connection type corresponding to company executives, such as Bill Gates and/or Steve Ballmer.”

Microsoft is also connected to “the computer hardware industry” and “The computer software industry.” It’s these kinds of connections between entities that make it an entity graph.

Yes, this fits the Google statement about its knowledge graph is made up of “things, not strings,” but that doesn’t define them as “related entities” in quite the same way as this patent does.


## Categories

Another aspect of entities that we need to keep in mind is that entities can be associated with several categories. These categories are typically another entity in the entity graph. For example, Microsoft can be seen as fitting into the following categories:

- Software Provider,
- Hardware Provider,
- Online Services Provider, and
- the like.


## Improved search results through entity expansion

The patent tells us that it might provide improved search results by expanding queries using information about entities involved.


## Take – Aways

Someone searches for [box], and the fact that it is an entity related to “Microsoft” may mean that the query may be expanded to include “Microsoft” within it. If there are relevant news results about Microsoft, those might show up in the set of search results on the query for Xbox. In the “related searches” at Bing that show up on a search for [xbox], Bing shows “Wii Games,” which is an Xbox competitor, and fills a similar spot in terms of being a related entity to the Xbox:


![The Wii is showing up on a search for \[xbox\] as a related entity](media/bing-entities-xbox-related-results.jpg)

_The Wii is showing up on a search for [xbox] as a related entity_

The patent tells us that mapping a text string to an entity is also known as a semantic mapping, and therefore the process is one of a semantic search. So this process of identifying an entity that appears in a query is according to Microsoft a semantic search. It can involve looking at:


> - Popularity of search queries corresponding to the entity identified in the search query
> - Trending popularity of an entity with the name identified in the search query
> - Other terms and/or phrases in the search query (e.g., “Bruce Wayne Seattle” or “Bruce Wayne Microsoft”)
> - An image representative of the entity
> - the like

We are also told that in expanding a searcher’s query, Bing might look at other information related to a searcher that can include:


> - The current location of the requesting party
> - Prior search query history of the party
> - Current and former workplaces
> - Current and former educational institutions that were attended
> - Social networks
> - Preferences (both explicitly and implicitly identified)
> - General graph connectivity between the requesting computer user and potential subjects of a search query
>  as well as the number of mutual friends
> - Physical distance between the requesting user and the potential subjects
> - Location of friends
> - Former locations
> - As well as real-world, current data such as current events
> - The number of people discussing the matter, and the like

The Microsoft patent provides more details about how it might use entity/Knowledge panel information to expand search queries and to receive a wider range of related search results. This patent also tells us that it might use an even wider range of contextual signals to return a set of search results.

So Bing, like Google, is telling us that it is focusing upon the things that we are searching for and things that might be related to them, as opposed to the strings of text that we type in a search box.

One of the reasons I like to sometimes look at and write about patents and papers from Bing and Yahoo is that it gives us a chance to compare what the different search engines are doing and how they approach providing search results to searchers.
