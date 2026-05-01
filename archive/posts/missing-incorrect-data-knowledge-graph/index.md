---
title: "Question Answering to Populate the Knowledge Graph"
source_url: "https://www.seobythesea.com/2014/09/missing-incorrect-data-knowledge-graph/"
slug: "missing-incorrect-data-knowledge-graph"
date_published: "2014-09-21T19:30:44+00:00"
date_modified: "2021-07-05T19:47:18+00:00"
author: "Bill Slawski"
---

## Question Answering Can Be Used to Make the Knowledge Graph Bigger

*Added 9/20/2019: The patent application I wrote about in this post was granted on October 23, 2018 – [Question answering to populate knowledge base](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10108700.PN.&OS=PN/10108700&RS=PN/10108700)*

Entities change all the time, and facts about them do as well. Imagine when Derek Jeter retires from playing baseball, that he might decide to become a coach. Or Tom Cruise acting in a new movie, and deciding to try directing it and producing it as well. And Scotland decides whether or not it should be independent of the UK after 300 years.

We think that entities can change over time regarding the type of entity they are and the facts associated with them. When populations of places change, and they do regularly, how does that information get updated? And unfortunately, sometimes, some information never quite makes it to Google’s knowledge base.

A patent application published last week looks at how the knowledge graph might be updated when a question answering query is asked of it. The search system notices that some information is missing from the knowledge graph.

![Poster for using a library for greater knowledge.](media/greater-knowledge.jpg)

In the recent Knowledge Vault paper from Google, we caught a look at a project from Google that isn’t officially replacing Google’s Knowledge Graph, and is “one of many” projects from Google involving knowledge bases and collecting information that could be used for:

- Question-answering
- Filling up knowledge panels with information
- Populating carousels across the tops of pages
- Question Answering in OneBoxes
- Updating Local Search listings information
- Providing hybrid question answering and query answering results

I’ve been trying to keep an eye out for any of the nine whose names were on that Knowledge Vault paper, and one of them appears on this patent application, Evgeniy Gabrilovich.

In the information we’ve seen about the knowledge vault, one of the issues it was concerned about was when the information was incomplete or incorrect in the knowledge graph. It also appeared to want to automate as many processes as possible.

The patent filing has some interesting ways of defining aspects about the knowledge web that I haven’t seen phrased quite in the way they are here, so I decided to include some of those in this post as well.


## Query Records

I’ve been referring to what I can learn about a query and how I see a search engine responding to it in search results as a “query space.” Google has a different term for it, at least in this patent filing, (no surprise there), and calls it a query record. Their definition of a query record includes:

- One or more query logs
- Processed query logs
- Other suitable processed data related to searches and search history
- Any other suitable information, or
- Any combination thereof

The patent tells us that query records can be used to “identify data in a knowledge graph that is outdated, incorrect, incomplete, or otherwise not satisfactory to a user.”

How does Google know this?

If users keep on searching for further information after receiving information from the knowledge graph, that’s a sign that the knowledge graph information may be incomplete or incorrect.

Google could simply use that behavior information to determine that the entity reference needs to be updated. Or, it could use query records, including searches for information not included in the knowledge graph, to tell that the piece of information is missing.

In addition to relying upon user behavior information, Google may also have a set interval of time which it determines to perform regular updates based upon query records. It may decide what these update times are based upon how frequently they appear to need to be updated, including user input, update intervals associated with a schema, other suitable information, or combinations of information.


## Question Answering Example

A [Country] schema might have entity information attached to it that says that population information for all counties should be updated monthly. This might be hard to check upon without built-in instructions in the schema to update on that interval.

Regardless of whether user data or an updated schedule might be used to improve a knowledge base answer, the method of updating is the same:


> The method further includes generating a query based at least in part on the missing data element and the type of the entity reference. The method further includes providing the query to a query processing engine. The method further includes receiving information from the query processing engine in response to the query. The method further includes ***updating the knowledge graph*** based at least in part on the received information.
>
> In some implementations, a system is provided comprising one or more computers configured to perform operations. Operations include identifying an entity reference in a knowledge graph, wherein the entity reference corresponds to an entity type. Operations further include identifying a missing data element, wherein the data element is associated with the entity reference. Operations further include generating a query based at least in part on the missing data element and the type of the entity reference. Operations further include providing the query to a query processing engine. Operations further include receiving information from the query processing engine in response to the query. Operations further include updating the knowledge graph based at least in part on the received information.

Identifying a missing data element might mean comparing properties associated with the entity reference to a schema table associated with the entity type. Disambiguating a query might also be needed to be done as well.

Title: [Question Answering to Populate Knowledge Base](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220140280307%22.PGNR.&OS=DN/20140280307&RS=DN/20140280307)
Invented by: Rahul Gupta, Shaohua Sunm, John Blitzer, Dekang Lin, Evgeniy Gabrilovich
Assigned to: Google
US Patent Application: 20140280307
Published: September 18, 2014
Filed: March 15, 2013

Abstract


> Methods and systems are provided for a question answering. In some implementations, a data element to be updated is identified in a knowledge graph, and a query is generated based at least in part on the data element. The query is provided to a query processing engine. Information is received from the query processing engine in response to the query. The knowledge graph is updated based at least in part on the received information.


## Query Processing to get Query Records

Query processing to create a query record involves:

- Internet search engine results
- Automated question answering techniques
- Responses from human question answerers
- Indexes of previously answered questions
- Natural language search parsing
- Any other suitable query processing technique, or
- Any combination thereof


## Natural Language vs. Formal Language

*Natural language* is words and syntax as used in conversation or prose, such as “complete sentences, questions, idiom, punctuation, any other suitable language elements or structures.”

*Formal language* is more narrow and constrained, like a computer programming language “such as C or BASIC.”

This system mostly uses natural language queries, such as [Who was the first person to fly an airplane?]


## Data is stored as a data graph containing nodes and edges

This is a data structure that could be used to store entity references and other data. Data could be stored as a list of entities and associated entity types and can include ‘references to data, text, images, characters, computer files, databases, any other suitable data.”

Data may be organized in a graph containing nodes connected by edges. Nodes contain data about things or concepts. Edges represent relationships between two or more nodes. Those edges may be labeled or annotated, showing that the nodes are connected and providing descriptive information about their connection.

When Google [merged with (or acquired) Applied Semantics](https://www.seobythesea.com/2010/03/search-based-upon-concepts-applied-semantics-and-google/) back in 2003, the technology that came along in the deal included technology that spelled out a number of different types or relationships between concepts, like spelled out in their Ontology Usage and Applications white paper:

- ***Synonymy/antonymy*** (“good” is an antonym of “bad”)
- ***Similarity*** (“gluttonous” is similar to “greedy”)
- ***Hypernymy***(is a kind of / has kind) (“horse” has kind “Arabian”)
- ***Membership*** (“commissioner” is a member of “commission”)
- ***Metonymy*** (whole/part relations) (“motor vehicle” has part “clutch pedal”)
- ***Substance*** (e.g. “lumber” has substance “wood”)
- ***Product*** (e.g. “Microsoft Corporation” produces “Microsoft Access”)
- ***Attribute*** (“past”, “preceding” are attributes of “timing”)
- ***Causation*** (e.g. travel causes displacement/motion)
- ***Entailment*** (e.g. buying entails paying)
- ***Lateral bonds*** (concepts closely related to one another, but not in one of the other relationships, e.g. “dog” and “dog collar”)

In a nodes and edges type graph, these relationships would be edges.


## Triples

In the list above, the sections that follow each show a concept or object, followed by a relationship, to a property. “good” is an antonym of “bad,” and (e.g., “lumber” has substance “wood”), and (e.g., “Microsoft Corporation” produces “Microsoft Access”)

Each group of an edge and one or two distinct nodes may be referred to as a triple or 3-tuple, and that’s not unusual terminology in the Semantic Web.

Some nodes may be connected by two edges, which means that they have two properties in common. Some nodes are connected to themselves, which mean that it relates to itself.

An [Is A] edge or link tells us that the graph represents the information “The Entity X Is Type Y.”

An entity node may be connected to an *entity type node*. So [George Washington] may also be connected to entity type node [Person] and entity type node [Military Commander]. An entity type node [City] could be connected to entity nodes [New York City] and [San Francisco].


## Schema

A schema defines the relationship between an entity-type node and its properties.


## Question Answering Take Aways

Google’s adaptation to filling in their knowledge base involves using the web as a database of information and attempting to use a mix of both knowledge base and search query results to try to fill in information that might be missing or wrong in the knowledge base.

Google does keep track of different queries and refers to their accumulated knowledge about a query space as a Query Record.

Like the one described in this patent, approaches aren’t the only ones that Google is following to make their Knowledge Graph more complete, but I expect to see more patents and papers from Google that describe those.

Some posts I’ve written about patents involving question answering:

- 7/19/2007 – [Search Engines Crawling FAQs to Learn How to Answer Questions?](https://www.seobythesea.com/2007/07/search-engines-crawling-faqs-to-learn-how-to-answer-questions/)
- 9/21/2014 – [Google May Use Question Answering to Populate the Knowledge Graph](https://www.seobythesea.com/2014/09/missing-incorrect-data-knowledge-graph/)
- 10/12/2014 – [How Google May Use Entity References to Answer Questions](https://www.seobythesea.com/2014/10/google-fact-questions-entity-references-unstructured-data/)
- 12/30/2014 – [Featured Snippets – Taken from Authority Websites](https://www.seobythesea.com/2014/12/direct-answers-taken-authority-websites/)
- 12/31/2014 – [Featured Snippets – Using Query Intent Templates to Identify Answers](https://www.seobythesea.com/2014/12/direct-answers-using-query-intent-templates-identify-answers/)
- 2/11/2015 – [How Google was Corroborating Facts for Featured Snippets](https://www.seobythesea.com/2015/02/google-corroborating-facts-direct-answers/)
- 7/12/2015 – [How Google May Answer Questions in Queries with Rich Content Results](https://www.seobythesea.com/2015/07/how-google-may-answer-questions-in-queries-with-rich-content-results/)
- 9/9/2015 – [When Google Started Showing Featured Snippets](https://www.seobythesea.com/2015/09/when-google-started-answering-factual-queries/)
- 11/30/2016 – [Answering Featured Snippets Timely, Using Sentence Compression on News](https://www.seobythesea.com/2016/11/featured-snippets-sentence-compression/)
- 6/19/2017 – [Google Extracts Facts from the Web to Provide Fact Answers](https://www.seobythesea.com/2017/06/fact-answers/)
- 7/10/2019 – [How Google May Handle Question Answering when Facts are Missing](https://www.seobythesea.com/2019/07/how-google-may-handle-question-answering-when-facts-are-missing/)

Last Updated September 20, 2019.
