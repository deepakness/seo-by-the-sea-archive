---
title: "How Google May Handle Question Answering when Facts are Missing"
source_url: "https://www.seobythesea.com/2019/07/how-google-may-handle-question-answering-when-facts-are-missing/"
slug: "how-google-may-handle-question-answering-when-facts-are-missing"
date_published: "2019-07-10T14:46:03+00:00"
date_modified: "2021-04-28T16:45:38+00:00"
author: "Bill Slawski"
---

In 2017, I wrote about a similar patent in the post, [Google Extracts Facts from the Web to Provide Fact Answers](https://www.seobythesea.com/2017/06/fact-answers/)

The patent this post about starts with saying that Google may have a problem with answering questions from facts it collects from the Web to fill its knowledge graph:


> Embodiments relate to relational models of knowledge, such as a graph-based data store, that can be used to provide answers to search queries. Such models describe real-world entities (people, places, things) as facts in graph nodes and edges between the nodes. While such graphs may represent a significant amount of facts, even the largest graphs may be missing tens of millions of facts or may have incorrect facts. For example, relationships, edges, or other attributes between two or more nodes can be missing.

That is the problem that this new patent tries to solve. The patent is from November 2017. The earlier patent I linked to above was granted in June 2017. It is not about missing or incorrect facts like this newer patent are about. The newer patent tells us about how they might answer some questions without access to some facts.

It’s also reminding me of another patent that I recently wrote about on the Go Fish Digital Website. That post is [Question Answering Explaining Estimates of Missing Facts](https://gofishdigital.com/question-answering-explaining-estimates/). Both the patent that the post was about and this new patent include Gal Chechik, Yaniv Leviathan, Yoav Tzur, Eyal Segalis, as inventors (the other patent has a couple of additional inventors as well.)

The earlier question answering with estimates patent talks about how they might infer answers and provide explanations with those answers. This also tells it might infer answers but doesn’t include the explanations:


> Facts and/or attributes missing from a relational model of knowledge often can be inferred based on other related facts (or elements of facts) in the graph. For example, a search system may learn that an individual’s grandfather is a parent’s male parent. Accordingly, the system can determine with high confidence that an individual’s grandfather, even though there is no grandfather edge between nodes, is most likely a parent of a parent (given that there is a parent edge between nodes) with an additional check the parent of the parent is male. While this example uses one piece of supporting evidence (called a feature), inferring an individual’s grandfather, functions estimating missing facts are often more complex and can be based on several, even hundreds, of such features. Once the facts and/or attributes missing from a relational model of knowledge can be inferred, queries based on the facts and/or attributes missing from a relational model of knowledge can be resolved.

The process described in this question answering patent describes how Google may go about coming up with an answer to a question. This patent was filed after the one that includes estimates of how answers were created, so it does not include that step:


> In one example, a computer system includes at least one processor and a memory storing a data graph and instructions. When executed by at least one processor, the instructions cause the system to generate a template sentence based on a fact, including a first node, a second node, and a string, wherein the first node and the second node exist in the data graph. The string represents a fact that is absent from the data graph, search the internet for a document including the template sentence, and upon determining the internet, include the document with the template sentence, infer the fact by generating a series of connections between nodes and edges of the data graph that together with the first node and the second node is configured to represent the fact, the series of connections defining a path, in the data graph, from the first node to the second node.

This process isn’t described in too much detail, but the patent does provide an example, which may help understand how it may work. Here is that example:


> For example, a node may correspond to a fact describing a parent-child relationship. For example, baseball player Bob Boone is the son of baseball player Ray Boone and the father of baseball players Aaron Boone and Bret Boone. Accordingly, the data graph may include an entity as a node corresponding to Bob Boone, which may include an edge for a parent relationship directed to Ray Boone and two edges for child corresponding, respectively, to Aaron Boone and Bret Boone. The entity or node may also be associated with a fact or an attribute that includes an edge (e.g., occupation) between Bob Boone as a node and baseball as a node. Alternatively, the node Bob Boone may include an attribute as a property (e.g., occupation) set to baseball.
>
> However, there may be no edge in the entity (or the graph as a whole) corresponding to a grandparent relationship. Therefore, the relationship between Ray Boone and Aaron Boone may not be shown in the graph. However, the relationship between Ray Boone and Aaron Boone may be inferred from the graph so long as the question answering system knows (i.e., has been instructed accordingly) that there is such an entity as a grandparent.
>
> The inference may be based on the joint distribution of one or more features, representing facts in the data graph related to the missing information. The system may also be used to store the inferences (e.g., like functions or algorithms). The semantically structured sentence (e.g., X is the attribute of Y) is used to generate the inference. It then uses these entities to map a new string that corresponds to relationships between nodes. By that system may be configured to learn new edges between existing nodes in the data graph. In some implementations, the system can generate an inference and algorithm from a huge data graph, e.g., one with millions of entities and even more edges. The algorithm (or function) can include a series of connections between nodes and edges of the data graph. Accordingly, the algorithm can represent an attribute as an edge, in fact. The algorithm (or function) can also include a check of a node’s property (e.g., a gender property is a male). While the system in FIG. 1 is described as an Internet search system, other configurations and applications may be used. For example, the system may be used in any circumstance where estimates based on features of a joint distribution are generated.

The mentions of [Joint Distributions](http://www.inf.ed.ac.uk/teaching/courses/cfcs1/lectures/joint.pdf) in this patent are worth studying in more depth as the relationships between properties of different entities may reveal information that worth a system like the knowledge graph knowing about. For example, the son of someone’s son is their grandson. If the knowledge graph doesn’t include that grandson’s property, then making that connection can mean that a question answering system can start answering questions like Aaron Boone is Ray Boone’s Grandson. Other relations beyond whom is related to whom within a family can use this approach to answer questions.

This patent that is aimed at helping fill in missing and incorrect facts for question answering systems is:

[Semi structured question answering system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10,346,485.PN.&OS=PN/10,346,485&RS=PN/10,346,485)
Inventors: Yaniv Leviathan, Eyal Segalis, Yoav Tzur, and Gal Chechik
Assignee: GOOGLE LLC
US Patent: 10,346,485
Granted: July 9, 2019
Filed: November 8, 2017

Abstract


> In one example, a computer system includes at least one processor and a memory storing a data graph and instructions. When executed by at least one processor, the instructions cause the system to generate a template sentence based on a fact, including a first node, a second node, and a string, wherein the first node and the second node exist in the data graph. The string represents a fact that is absent from the data graph, search the internet for a document including the template sentence, and upon determining the internet, include the document with the template sentence, infer the fact by generating a series of connections between nodes and edges of the data graph that together with the first node and the second node is configured to represent the fact, the series of connections defining a path, in the data graph, from the first node to the second node.

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

Last Update July 11, 2019.
