---
title: "The Wisdom of Search Crowds: Google Research on Datamining Queries"
source_url: "https://www.seobythesea.com/2007/09/the-wisdom-of-search-crowds-google-research-on-datamining-queries/"
slug: "the-wisdom-of-search-crowds-google-research-on-datamining-queries"
date_published: "2007-09-10T07:41:03+00:00"
date_modified: "2020-06-20T14:46:15+00:00"
author: "Bill Slawski"
---

The “World Wide Web of Facts” is the subject of a couple of papers from a Google researcher, [Marius Pasca](https://research.google/people/author107/). Being able to extract class attributes for facts from such a Web of facts may provide many benefits to several people.

The latest of the papers, Organizing and Searching the World Wide Web of Facts Step Two: Harnessing the Wisdom of the Crowds (pdf), was discussed at the 16th International World Wide Web Conference (WWW-07), and the earlier one, [Organizing and Searching the World Wide Web of Facts – Step One: the One-Million Fact Extraction Challenge](http://www.cs.cmu.edu/~acarlson/semisupervised/million-fact-aaai06.pdf) (pdf), was presented at the 21st National Conference on Artificial Intelligence (AAAI-06)

In extracting facts from the loosely organized pages of the Web, attributes for classes related to those facts may also be taken from the pages and from searchers’ queries that result in a visit to those pages, and those extracted class attributes may be used in many ways:

*Web publishing* – those class attributes may be used to suggest topics for human writers who manually add new entries to sites such as Wikipedia. So, for instance, a page on a newly discovered celestial body might be enhanced with automated suggestions to include class attributes such as radius, surface gravity, and orbital velocity.

*Question Answering Services* – (such as “what is the birthdate of Stephen Hawking?”), the class attributes could be used to expand question answering to cover new questions and answers and to understand what types of questions would help tune those systems to meet searchers frequent information needs.

*Web Search* – Results returned to a query referring to a specific named entity (e.g., Pink Floyd) can be improved by being able to provide a compilation of specific facts, based upon attributes extracted in advance for the class to which the named entity belongs. That query could also be refined into semantically justified query suggestions, by concatenating it with one of the top extracted attributes for the corresponding class (e.g., Pink Floyd albums for Pink Floyd).

*New Search Verticals* – might be suggested for areas such as health and travel, by being able to semi-automatically extract attributes for facts within those topics.

I wrote a little about this type of extraction of class attributes from search terms in [Mining User Queries to Extract Information From Web Pages](https://www.seobythesea.com/2007/02/mining-user-queries-to-extract-information-from-web-pages/). This paper points out specifically what its author considers one of the most important aspects of paying attention to searchers’ queries may be:


> Perhaps the most intriguing aspect of queries is, however, their ability to indirectly capture human knowledge, precisely as they inquire about what is already known. Indeed, users formulate their queries based on the common sense knowledge that they already possess at the time of the search.
>
> Search queries play two roles simultaneously: in addition to requesting new information, they also indirectly convey knowledge in the process. If knowledge is generally prominent or relevant, people will eventually ask about it, especially as the number of users and the quantity and breadth of the available knowledge increase, as it is the case with the Web as a whole. Query logs convey knowledge through requests that may be answered by the knowledge asserted in expository text of document collections.

The papers go into depth in discussing the experimentation and evaluation that was conducted in extracting class attributes from queries, and pages. It’s interesting to see how the information contained in what people search for may be used to improve the ability of search engines to provide answers to questions asked to a search engine.
