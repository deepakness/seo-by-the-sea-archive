---
title: "Generating Query Answers"
source_url: "https://www.seobythesea.com/2022/05/generating-query-answers/"
slug: "generating-query-answers"
date_published: "2022-05-04T16:46:11+00:00"
date_modified: "2022-05-08T23:27:00+00:00"
author: "Bill Slawski"
---

This recently granted Google patent generally relates to generating query answers, and this patent also introduces the concept of Constraints to help answer queries.


## Using Constraints For Query Answers

This patent asks questions about contents related to facts about entities that questions are getting added about.

Documents about Using constraints for query answering are these:


Interestingly the first document refers to the Google Knowlege Vault as a reference. Likely because it focuses on getting correct answers to questions by using constraints.

Since this patent focuses so much on Semantic SEO. It reminded me of other Google patents that were about that topic, including these two, which are worth reading through carefully:

- [Google Knowledge Graph Reconciliation](https://www.seobythesea.com/2019/08/google-knowledge-graph-reconciliation/)
- [Entity Extractions for Knowledge Graphs at Google](https://gofishdigital.com/blog/entity-extractions-knowledge-graphs/)

The patent provides some insights into how entities and entity attribute work, how tuples are used in graph search, and a look at Semantic SEO.


## Generating Query Answers By Providing Facts From A Database

Search systems may generate responses to factual queries by providing facts from a database.

These facts may get stored in a graph that can get updated in real-time.

Such responses may get formatted as lists of search results rather than sentences.

When a user asks a factual question, for example, via voice to a dialog system, it may be desirable to have a natural response to the question.

The most natural response may be an answer formulated as a grammatical statement of the facts that meet the user’s question to provide query answers.

Thus, according to one general aspect of the subject matter described in this patent, in response to a factual query, facts stored in a database get converted into a sentence in the user’s language.


## Receiving Query Answers Identifying Attributes Of An Entity

One aspect of the subject matter described in this specification may get embodied in methods that include the actions of receiving a query identifying attributes of an entity. Those attributes are the facts about the entity.

The actions then include accessing candidate templates for query answers based on the entity’s attributes. Each candidate template has fields; wherein each area gets associated with at least one constraint.

Then, the actions include obtaining a set of information that provides query answers and selecting a template from the collection of candidate templates. The chosen template has the most significant number of fields with constraints that satisfy the information set.


## Semantic Triples Related to Entities

The set of information may be a set of entity-attribute-value triples.

The actions further include generating a phrase by adding the set of information to the fields of the selected template, such that the words comprise query answers.

The phrase is a sentence or a part of a sentence. Finally, the actions include communicating the words to a client device.

The phrase may get communicated as an audio signal corresponding to the words.

The constraints may include a:

- Type constraint
- Temporal constraint
- Gender constraint
- Relationship constraint
- Singular/plural constraint
- Unit of measure constraint
- Determinant constraint.

Some implementations involve obtaining many sets of information responsive to a single attribute in the query.

The actions further include:

- Obtaining a sentence template based on a type of the entity, wherein the sentence template includes a plurality of fields for phrases
- Adding the phrases to the fields of the sentence template to form the sentence
- Selecting, for each set of information, a template from the set of candidate templates
- Generating, for each selected template, a phrase by adding the respective set of information to the fields of the respective selected template
- Communicating the sentence including the phrases to a client device

This may involve query answers that include many attributes.

- Receiving query answers identifying many attributes of an entity
- Accessing, for each attribute of the entity, a set of candidate templates for query answers based on the respective attribute of the entity
- Obtaining, for each attribute of the entity, a set of information that answers a respective part of the query
- Selecting a template from the respective set of candidate templates
- Generating, for each attribute of the entity, a phrase by adding the respective set of information to the fields of the selected template
- Obtaining a sentence template based on a type of the entity, wherein the sentence template includes a plurality of fields for phrases
- Adding the phrases to the fields of the sentence template to form a sentence
- Communicating a sentence including the phrases to a client device

Advantages Of this process can include:

The system is configurable and extendable to complex factual assertions and answers.
It may allow for a clean separation of the actual database from the sentence generation mechanism.
It may allow the addition of new templates via any suitable method.


## This Generating Query Answers Patent is at

[Generating query answers](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=11,321,331.PN.&OS=PN/11,321,331&RS=PN/11,321,331)
Inventors: Engin Cinar Sahin, Vinicius J. Fortuna, and Emma S. Persky
Assignee: Google LLC
US Patent: 11,321,331
Granted: May 3, 2022
Filed: July 23, 2018

Abstract


> A server receives query answers identifying the attributes of an entity.
>
> The server accesses a set of candidate templates for answering the query based on the attributes of the entity, each candidate template having fields, wherein each field gets associated with at least one constraint.
>
> The server obtains a set of information and query answers and selects a template from the set of candidate templates.
>
> The selected template has the largest number of fields with constraints satisfied by the information set.
>
> The server generates a phrase by adding the set of information to the fields of the selected template, such that the phrase comprises an answer to the query.
>
> Finally, the server communicates the phrase to a client device.


## Converting Facts From A Database Into Sentences

When a user asks a factual question, a search engine may provide query answers by accessing a database.

Some systems, such as voice-based dialog systems, allow users to plan queries as natural language questions (e.g., “Who is the president of Japan?”).

In such cases, it may be desirable to provide a natural language answer in the form of a sentence rather than an answer formatted as search results referring to documents.

Thus, systems described in this specification may convert facts from a database into sentences. This may be advantageous, for example, so that the answer can get rendered back to the user as speech.

To produce sentences that answer users’ questions, retrieving random facts from a database may be desirable. The facts aren’t random ones though – they are using the constraints information to provide query answers. This would seem to mean better answers to queries about entities.

To answer a query such as who someone got married to, a system may obtain data including all past marriages, people involved in the past weddings, dates of the unions, and types of marital agreements. A flexible database that represents facts using a graph structure may provide these facts.


## Accessing Candidate Templates For Generating Query Answers Based On The Attribute Or Attributes

Once the facts have gotten collected, an answer engine may access candidate templates for generating an answer based on the attribute or attributes provided in the query. For example, if the original question is “Who was Woody Allen married to,” the point may be “marriages.” If the actual query is “How old is Woody Allen,” the attribute may be “age.” As described below, each point of a question may correspond to multiple candidate templates, for example, to support more or less detailed answers.

For example, if the attribute is “age,” the answer engine may obtain a template that includes birth date and age (e.g., {<entity> was born on <date> and is currently <value> years old}), a template that includes only age (e.g., {<entity> is currently <value> years old}), and a template that includes date of birth and date of death (e.g., {<entity> was born on <date> and died on </date>}).

As described in more detail below, the portions of the templates enclosed in “< >” (i.e., the fields) may get associated with various constraints on the data they can hold.

Once the answer engine has obtained the candidate templates, it selects the most relevant template based on multiple heuristics and generates a sentence by inserting the facts into the template. The answer engine can then provide an answer in a correction back to the user.


## A Data Graph Search System

The system may get used to implementing a search engine for a data graph using the techniques described here.

A system gets described as a search engine system for a data graph that processes query requests from a client. Other configurations and applications of the related technology may get used. For example, the query request may originate from another server, from a batch job, or a user terminal in communication with a data graph search system.

The data graph search system may include an indexing system, search system, and index cluster. The indexing system, search system, and index cluster may be computing devices that take the form of several different devices, for example, a standard server, a group of such servers, or a rack server system.

In addition, the indexing systems, search systems, and index clusters may get implemented in a personal computer, for example, a laptop computer.

The data graph search system may include a graph-based data store. Such a data graph stores nodes and edges, from which a graph can get created.

The nodes may be called entities, and the edges may be referred to as relationships between two entities. Such relationships may get stored in several ways.

The graph-based data store stores triple tuples representing entities and relationships in one example.


## Triple Tuples Representing Entities And Relationships

A triple may also include an format, with the entity representing the starting entity, the point representing a characteristic of a related entity as redefined edges from the entity, and the value representing the related entity.

One example of a triple is the entity Woody Allen as the subject (or entity), the relationship acted in as the predicate (or attribute), and the entity Annie Hall as the object (or value).

Of course, a data graph with many entities and even a limited number of relationships may have billions of triples.

Indexing systems can include processors configured to execute machine-executable instructions or pieces of software, firmware, or a combination thereof.


## Finding Query Answers

The search system may include servers (not shown) that receive queries from a user of a client and provide those queries to the search system.

The search system may be responsible for searching the data graph and, other data sources, such as a corpus of documents from the Internet or an Intranet, in response to a query.

For example, the search system may receive a query from a client, such as a client, perform some query processing, and send the query to the index cluster and to other indexing clusters that store indexes for searching other sources.

The search system may have a module that compiles the results from all sources and provides the compiled results to the client.

The search system may only send queries to the index cluster and may provide search results from the index cluster to the client.

The search system may be in communication with the clients over the network.


## An Index Cluster in Finding Query Answers

The system may also include an index cluster. Index cluster may be a single computing device or a distributed database system with computing devices, each with its own processor and memory.

The number of computing devices that comprise the index cluster can vary and, for the sake of brevity, the index cluster gets shown as a single entity.

Each index cluster can include processors configured to execute machine-executable instructions or pieces of software, firmware, or a combination thereof.

The computing cluster can include, an operating system (not shown) and computer memories, for instance, the main memory, configured to store pieces of data, either temporarily, permanently, semi-permanently, or a combination thereof.

The memory may include any type of storage device that stores information in a format that can get read and execute by a processor, including volatile memory, non-volatile memory, or a combination thereof.


## A Query Resolver That Accesses The Index to Retrieve Results Responsive To The Query

Index cluster may also include modules, such as query resolver, that access the index to retrieve results responsive to the query.

A query resolver may also be part of the search system or may get distributed between the search system and index cluster.


## Progressively More Complicated Queries And Query Answers

A simple query that involves one attribute (“age”) and results in a single triple answer.

An example of a simple query that involves one attribute (“marriages”) but results in multiple triple answers.

An example of a complicated query that involves two attributes (“hometown and alma mater”) and results in multiple triple answers.

An example system that generates sentences in response to factual queries.

The system includes a client device, a search system, an index cluster, and an answer engine.

The entities can get implemented as part of the system.

A user initiates a query having query terms using a client device.

The user may format the original query as a sentence.


## Interacting With A Voice-Based Dialog System

The user may interact with the client device using a voice-based dialog system.

For example, the user may utter the query “How old is Woody Allen” into a microphone of the client device.

The client device may then perform speech recognition to convert the utterance into transcription and then transmit the transcription to the search engine.

Alternatively, the client device may transmit audio speech data encoding the utterance.

The search system receives the query (e.g., “How old is Woody Allen”) from the client device.

If the query gets encoded as audio speech data, the search system may convert the audio speech data into a transcription.

The search system then parses and formats the original query into an <entity; attribute> format (such as <woody Allen/age<) using, for example, a suitable natural language parsing engine.

The search system then sends the formatted query to the index cluster.

The index cluster accesses the index to retrieve results responsive to the query.


## Query Answers in the Form of Triples

These results may be a set of factual information in the form of triples (e.g., </woody><woody Allen/born on/Dec. 1,>

The index cluster then transmits the formatted query (e.g., </woody><woody Allen/age> and the factual information that answers the query (e.g., </woody><woody Allen/born on/Dec. 1, 1935>) to the answer engine.

Using the formatted query and the factual information, the answer engine then generates an answer in the form of a sentence or sentences.

The answer engine generates an answer as follows. First, the answer engine obtains the attribute or attributes from the formatted query.

Then, the answer engine uses the attribute or attributes to access candidate sentence or phrase templates from the template database.

Next, the answer engine selects one of the templates based on the factual information and various constraints associated with the candidate templates.

Finally, the answer engine fills in the fields in the selected template using the factual information.


## An Answer Engine Obtaining an Attribute or Attributes

In more detail, the answer engine first obtains the attribute or attributes from the formatted query by parsing the query. For example, assuming that the query got formatted as an <entity/attribute> pair, the answer engine extracts the attribute portion of the pair.

In some cases, the formatted query may include multiple attributes. For example, the formatted query may be in the form of <entity/attribute/attribute>. In such cases, the answer engine may extract each attribute from the query.

Next, the answer engine accesses candidate templates for each attribute in the query from the template database.

Each template may correspond to a full sentence or a portion of a sentence (e.g., a phrase).

Each template includes fields (shown as the portions in “< >” brackets) that can have factual information inserted.

For example, a template may be “On <date>, <entity> got married to <value>.” The templates can be manually or algorithmically generated.


## Candidate Templates in the Language of the User

The answer engine identifies the language of the user and selects candidate templates in the language of the user.

For example, the answer engine may receive data from the search engine indicating the language of the original query. Advantageously, such a configuration may facilitate the internationalization of the answer.

Fields may get associated with constraints that govern the data that each field may contain.

As used in this specification, the notation “<X/Y >” indicates a field having an “X” constraint and a “Y” constraint.

Sample constraints may include type constraints, temporal constraints, gender constraints, relationship constraints, singular/plural constraints, units of measure constraints, and determinant constraints.


## Different Constratinis May Require Different Tyoes of Data

A type constraint may require a specific type of data, e.g., a <date> constraint may require a date, an <entity> constraint may require an entity name or other identifier, and a constraint may require a number.

A temporal constraint may require, for example, that a date or time be in the past or in the future, e.g., a field containing <date/past>may require that the field includes a date that is in the past. A gender constraint may require, for example, a male or female gender.

A relationship constraint may require, for example, a type of relationship to another entity, e.g., a field containing <entity/spouse> may require that the field include an entity that is the spouse of another entity. A singular/plural constraint may require, for example, the data in the field to be in the singular or plural form.

A unit of measure constraint may, for example, require that the data in the field be measured in a specific unit of measure (e.g., inches, feet, centimeters, meters, etc.). A determinant constraint may require, for example, that the word “the” precedes the field.

Each attribute in the query may function as a key for accessing a set of candidate templates. For example, the attribute “age” may result in the retrieval of the templates. The sample templates include a first template “ was born on <date/past&glt; and is currently <value> years old,” which requires an entity name for the <entity&lgt; field, a date in the past for the field, and a number (e.g., an age) for the <value< field.

The second template, “<entity> is currently <value< years old,” requires an entity name for the <entity> field and a number (e.g., an age) for the <value> field.

The third template, “<entity> was born on <date/past> and died on <date/past>,” requires an entity name for the </entity><entity> field, and two past dates for the <date/past> fields.


## Multiple Templates For Given Attributes

Advantageously, having multiple templates for a given attribute enables implementations to support partial facts. For example, for age templates, if the year of birth is known but the specific date is unknown, an appropriate template may be “</entity><entity> was born in <year/past>.” Providing multiple templates for a given attribute also allows changing tenses for different portions of facts (e.g., “Woody Allen gets married” and “Woody Allen got married”).

After obtaining the candidate templates, the answer engine selects a template from the candidate templates based on various heuristics. For example, the answer engine may check for gender agreement and correct tense. Additionally, the answer engine may determine that the number of answers to the original query matches the number of fields of the selected template.

The answer engine may also determine whether the constraints and fields of the selected template get satisfied. The answer engine may select the template having the maximum number of fields with constraints that get satisfied by the factual information (e.g., the most data-rich template). The factual information is “<woody Allen/born on/Dec. 1, 1935>.”

In this example, the first candidate template is “<entity> was born on <date/past> and is currently years old.” This template has an field, a <date/past> field, and a <value> field. The factual information provides an entity that satisfies the <entity> field constraint and a date in the past that satisfies the field constraints.

The answer engine may derive values based on factual information. The answer engine may therefore calculate an age value to satisfy the <value< field constraint based on the birth date. Since the factual information satisfies all of the constraints for the fields in the first template, the answer engine selects the first template.

The answer engine selects the first template with fields that can get filled by the factual information, and does not perform any additional processing. Alternatively, the answer engine may process each template in the candidate templates and select the template having the largest quantity of fields that can get filled by the factual information.

After selecting the template, the answer engine then generates a sentence or phrase based on the template. For example, the answer engine may replace the fields in the template with the appropriate data from the factual information. The answer engine generates the sentence “Woody Allen was born on Dec. 1, 1935, and is currently 77 years old” using the selected template.

The answer engine then transmits an answer to the client device, where the answer includes the generated sentence The answer may be a transcription that the client device converts to speech and renders for the user.


## System That Generates Sentences In Response to Factual Queries

The system includes a client device, a search system, an index cluster, and an answer engine. The entities illustrated can, for example, get implemented as part of the system.

A client device initiates a query having query terms.

For example, a user may enter the query “Who was Woody Allen married to” into a web browser at the client device.

The search system receives the query (e.g., “Who was Woody Allen married to”) from the client device.

The search system then parses and formats the original query into an format (e.g., ) using, for example, a suitable natural language parsing engine.

In this example, the formatted query includes an identifier of the entity (e.g., Woody Allen), a type of entity (e.g., person), and an attribute (e.g., marriages).

The type information may get used to generate a meta-template as described below. The search system then sends the formatted query to the index cluster.


## The Index Cluster Accesses The Index to Retrieve A Set Of Factual Information Responsive To The Query

The index cluster accesses the index To retrieve a set p\of factual information responsive to the query. These results include at least two triples (e.g., , and <louise Lasser/wife/1966/1970>).

The index cluster then transmits the formatted query (e.g., <woody Allen/age> and the factual information that answers the query (e.g., <Soon-Yi Previn/wife/1997>, and <louise Lasser/wife/1966/1970>) to the answer engine.

Using the formatted query and the factual information, the answer engine then generates an answer in the form of a sentence or sentences as follows.

First, the answer engine obtains the type information from the formatted query (e.g., person).

The type information identifies the type of entity that the query gets based on. Using the type information, the answer engine accesses candidate meta-templates that are associated with a “person” type of entity.

As referred to in this specification, meta-templates are templates that have fields configured to contain other templates.

Each of the candidate meta-templates includes a field for a name or identifier of an entity and at least one field for adding other templates.

These templates allow the answer engine to generate sentences to incorporate various phrases having information about a person.

The answer engine also obtains the attribute or attributes from the formatted query and uses the attribute or attributes to access candidate phrase templates from template database.

These phrase templates get designed to get incorporated into the meta-templates.

As described above, each attribute in the query may function as a key for accessing a set of candidate phrase templates.

For example, the attribute “marriages” may result in the retrieval of the phrase templates.

The sample phrase templates include a first template “has gotten married to <entity/spouse> since <date/past>,” which requires an entity who gets married to the entity in the formatted query for the field, and a date in the past for the field.

The second template, “gets married to <entity/spouse>,” requires an entity who gets married to the entity in the formatted query for the field.

The third template, “is married,” requires no additional information.

The fourth template, “was married to <entity/spouse > from <date/past > to <date/past >,” requires an entity who gets married to the entity in the formatted query for the field, and two dates in the past for the <date/past> fields. The fifth template, “was married to <entity/spouse>,” requires an entity who gets married to the entity in the formatted query for the <entity/spouse> field. And the sixth template, “was married,” requires no additional information.

Next, the answer engine selects one of the candidate meta-templates based on the type of information included in the factual information. In particular, the answer engine selects a candidate meta-template based on the number of triples included in the factual information. Two triples get included in the factual information. The answer engine, therefore, selects the “person” meta-template having fields for two templates, i.e., “<entity><template>, and </template><template>.”

For each triple included in the factual information, the answer engine also selects a template from the candidate phrase templates. The answer engine may select the phrase template having the maximum number of fields with constraints that get satisfied by the factual information (e.g., the most data-rich template).

The first triple included in the factual information is <Soon-Yi Previn/wife/1997>.” In this example, the first candidate phrase template is “has been married to since .” This template has an <ntity/spouse&g; field and a <date/past> field.

The first triple has an entity with a spouse relationship to the entity in the formatted query that satisfies the <entity/spouse> field constraint, and a date in the past that satisfies the <date/past> field constraints. Since the first triple satisfies all of the constraints for the fields in the first template, the answer engine selects the first template for the first triple.

The second triple included in the factual information is <louise Lasser/wife/1966/1970>.” The fourth candidate phrase template is “was married to <entity/spouse> from <date/past> to <date/past>,” which has an <entity/spouse> field and two <date/past> fields. The second triple in the factual information provides an entity with a spouse relationship to the entity in the formatted query that satisfies the <entity/spouse> field constraint, and two dates in the past that satisfy the field constraints.

Since the second triple satisfies all of the constraints for the fields in the fourth template, the answer engine selects the fourth template for the second triple.

The answer engine selects the first template with fields that can get filled by the factual information, and does not perform any additional processing. Alternatively, the answer engine may process each template in the candidate templates and select the template having the largest quantity of fields that can get filled by the factual information.

After selecting the templates, the answer engine then generates a sentence based on the templates. For example, the answer engine may replace the fields in the selected templates with the appropriate data from the factual information.

The answer engine may replace the fields in the first selected phrase template (i.e., “has gotten married to <entity/spouse> since <<date/past>") with the information from the first triple to generate the phrase "has gotten married to Soon-Yi Previn since 1997."
Thus, the answer engine generates the sentence "Woody Allen has gotten married to Soon-Yi Previn since 1997 and was previously married to Louise Lasser from 1966 to 1970."
The answer engine then transmits an answer to the client device that includes the generated sentence.
The answer may get included in a search results page that includes the sentence and other search results.
The search results page also includes a search box showing the original search query (i.e., "Who was Woody Allen married to").
The search results page may then get rendered by the client device.
The sentence could alternatively get transmitted as a transcription that allows the client device to generate speech, or as an audio signal encoding the sentence for rendering at the client device.


## A System That Generates Sentences In Response To Factual Queries

The system includes a client device, a search system, an index cluster, and an answer engine.

A client device initiates a query having two query terms (“Where is Woody Allen’s hometown and alma mater”) into a web browser at the client device.

The search system receives the query (e.g., “Where is Woody Allen’s hometown and alma mater”) from the client device. The search system then parses and formats the original query into an <entity/type/attribute> format (e.g., >woody Allen/person/hometown/college<) using, for example, a suitable natural language parsing engine.

In this example, the formatted query includes an identifier of the entity (e.g., Woody Allen), a type of entity (e.g., person), and two attributes (e.g., hometown and college). The search system then sends the formatted query to the index cluster.

Using the formatted query and the factual information, the answer engine then generates an answer in the form of a sentence or sentences as follows. First, the answer engine obtains the type information from the formatted query (e.g., person).

Using the type information, the answer engine accesses candidate meta-templates that are associated with a “person” type of entity.

As referred to in this specification, meta-templates are templates that have fields configured to contain other templates.

The answer engine also obtains the attributes from the formatted query and uses the attributes to access candidate phrase templates from template databases.

These phrase templates get designed to get incorporated into the meta-templates.

As described above, each attribute in the query may function as a key for accessing a set of candidate phrase templates. For example, the attribute “hometown” may result in the retrieval of the phrase templates. The sample phrase templates include a first template “currently lives in >location<,” which requires a geographic location for the field.

The second template, “has lived in </location><location> since <date/past>,” requires a geographic location for the </location<>location> field and a date in the past for the <date/past> field. The third template, “used to live in </location><location>,” requires a geographic location for the location field.

Next, the answer engine selects one of the candidate meta-templates based on the type of information included in the factual information. In particular, the answer engine selects a candidate meta-template based on the number of triples included in the factual information. Two triples get included in the factual information.

For each triple included in the factual information, the answer engine also selects a template from the candidate phrase templates The answer engine may select the phrase template having the maximum number of fields with constraints that get satisfied by the factual information (e.g., the most data-rich template). The answer engine also may perform other heuristics, such as analyzing gender agreement and correct tense of the candidate templates.

The first triple included in the factual information is <woody Allen/hometown/NYC>.” In this example, the first candidate template in the hometown templates is “currently lives in <location>.” The first triple has a location (i.e., NYC) that satisfies the </location><location> field constraint. Since the first triple satisfies all of the constraints for the fields in the first template, the answer engine selects the first template from the hometown templates for the first triple.

The second triple included in the factual information is <woody Allen/college/NYU>.” The first candidate template in the college templates is “his alma mater is </college><college>.” The second triple in the factual information provides a college name (i.e., NYU) that satisfies the </college<>college> field constraint.

Also, the answer engine may determine that the gender of the entity (Woody Allen) agrees with the gender of the phrase in this template. The answer engine selects the first template from the college templates for the second triple.

The answer engine selects the first template with fields that can get filled by the factual information, and does not perform any additional processing. Alternatively, the answer engine may process each template in the candidate templates and select the template having the largest quantity of fields that can get filled by the factual information.

After selecting the templates, the answer engine then generates a sentence based on the templates. For example, the answer engine may replace the fields in the selected templates with the appropriate data from the factual information. The answer engine may replace the fields in the first selected phrase template (i.e., “currently lives in <location>”) with the information from the first triple to generate the phrase “currently lives in New York City.”

The answer engine then replaces the template fields in the selected meta-template (i.e., “<entity><template> and &kt;/template><template>”) with the phrases generated from the first and second phrase templates. Thus, the answer engine generates the sentence “Woody Allen currently lives in New York City and his alma mater is New York University.”

The answer engine then transmits an answer to the client device that includes the generated sentence.

The answer may get included in a search results page that includes the sentence and other search results. The search results page also includes a search box showing the original search query (i.e., “Where is Woody Allen’s hometown and alma mater”). The search results page may then get rendered by the client device.

As getting provided in search results, the sentence could alternatively get transmitted as a transcription that allows the client device to generate speech, or as an audio signal encoding the sentence for rendering at the client device.


## An Example Data Graph

The example data graph includes nodes (e.g., entities) and edges connecting the nodes (e.g., relationships or attributes). Naturally, the example data graph shows only a partial graph–a full graph with a large number of entities and even a limited number of relationships may have billions of triples.

An indexing system may traverse the data graph to obtain factual information as various triples. One example of a triple that may get obtained is the entity “Woody Allen” as the subject (or entity), the relationship “was born” as the predicate (or attribute), and the entity “Dec. 1, 1935” as the object (or value).

Another example of a triple that may be obtained is the entity “Woody Allen” as the subject, the relationship “has type” as the predicate, and the entity “person” as the value. This triple may get used, for example, by the answer engine as described above to select candidate meta-templates.

Another example of a triple that may get obtained is the entity “Woody Allen” as the subject, the relationship “was married to” as the predicate, and the entity “Louise Lasser” as the value.

Note that to obtain this triple, the indexing system must traverse two edges in the data graph, i.e., from the “Woody Allen” entity to the “Woody Allen marriages” entity, and then from the “Woody Allen marriages” entity to the “Louise Lasser” entity.


## Generating Sentences In Response To Factual Queries

A server (e.g., an answer engine) receives an original query that identifies the attributes of an entity. For example, the server may receive a query that identifies multiple attributes of an entity (e.g., age, date of birth, place of birth, marriages, etc.).

The server accesses a set of candidate templates for answering the query based on the attributes of the entity. Each candidate template includes fields, wherein each field gets associated with at least one constraint. When multiple attributes get identified in the original query, the server accesses a set of candidate templates for each attribute of the entity. The constraints may include of a type constraint, a temporal constraint, a gender constraint, a relationship constraint, a singular/plural constraint, a unit of measure constraint, and a determinant constraint.

The server then obtains a set of information that answers the query, for example by accessing a graph-based datastore as described above. The set of information that answers the query may be, for example, a set of entity-attribute-value triples. When multiple attributes get identified in the original query, the server obtains a set of information for each attribute (i.e., to answer each portion of the original query).

Multiple sets of information (e.g., multiple triples) may be responsive to a single attribute. For example, if the attribute is “marriages” or “children,” then multiple triples may get obtained in response to the attribute.

the server selects a template from the set of candidate templates, where the selected template has a maximum number of fields with constraints that may get satisfied by the set of information that answers the query. When multiple attributes get identified in the original query, the server selects a template for each attribute from the appropriate set of candidate templates.

Also, when multiple sets of information get obtained in response to a single attribute, the server may select multiple templates from the same set of candidate templates.

The server then generates a phrase. The phrase may get generated by adding the set of information that answers the query to the fields of the selected template so that the phrase answers the original query. The phrase may get sentenced. Alternatively or in addition, the phrase may be portions of a sentence. When multiple attributes get identified in the original query, the server generates a phrase for each attribute. The server may then combine the phrases to generate a complete sentence.

The server may obtain a sentence template (e.g., a meta-template) based on the type of the entity (e.g., person or location). The sentence template may include multiple fields for inserting phrases. For example, the server may access a set of candidate meta-templates based on the type of entity, and then select a meta-template from the set based on the number of triples that answer the original query.

The server may then add the generated phrases described with reference to step to the fields of the sentence template to form a sentence.
The server communicates the phrase or sentence to a client device. The client device may then output the phrase to a display or as speech audio. The server transmits an audio signal corresponding to the phrase or sentence to the client device.
