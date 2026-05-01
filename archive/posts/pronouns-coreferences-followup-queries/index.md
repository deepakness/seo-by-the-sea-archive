---
title: "Searching with Pronouns: What are they? Coreferences in Followup Queries"
source_url: "https://www.seobythesea.com/2014/10/pronouns-coreferences-followup-queries/"
slug: "pronouns-coreferences-followup-queries"
date_published: "2014-10-22T17:58:07+00:00"
date_modified: "2021-05-06T15:02:21+00:00"
author: "Bill Slawski"
---

At Google’s 15th anniversary celebration last summer, shortly after Hummingbird was introduced, Tamar Yehoshua, Google VP of Search, showed us conversational search at Google by first demonstrating a query asking for “pictures of the Eiffel Tower,” and then following up with the query “How tall is It?”

![Looking through the base of the Eiffel Tower.](media/eiffel-tower.jpg)

In that second query, Google had to not only remember the Eiffel Tower was being asked about but also to recognize the Eiffel Tower when it was being referred to as “it.” That is part of the new “conversational search” that Google is now engaging in, using something known by linguists as a “coreference.” I wanted to write about coreferences to clear up the confusion that people might have had about them.

I was inspired to do that after reading an article from Eric Enge earlier today, where he wrote about [Knowledge Graph Advances From Google](https://blogs.perficient.com/2014/10/21/knowledge-graph-advances-from-google/)

In his article’s section on “query sequences,” he tells us.


> One the last sequence to show for today, which is an extended query sequence. This shows how Google can maintain the context of a conversation and also how it can understand the context of a response. First, we start by asking the height of the empire state building

He then refers to a similar query that Tamar Yehoshua used in the presentation above, where she asked, “How tall is it.” However, he asks instead, “Pictures?” and gets pictures of the Empire State Building.

The long definition of what is going on here from Wikipedia is something called [coreference](https://en.wikipedia.org/wiki/Coreference).


> In linguistics, coreference (sometimes written co-reference) occurs when two or more expressions in a text refer to the same person or thing; they have the same referent, e.g., Bill said he would come; the proper noun “Bill” and the pronoun “he” refers to the same person, namely to Bill.[1]
>
> Coreference is the main concept underlying binding phenomena in the field of syntax. The theory of binding explores the syntactic relationship that exists between coreferential expressions in sentences and texts.
>
> When two expressions are coreferential, the one is usually a full form (the antecedent), and the other is an abbreviated form (a proform or anaphor). Linguists use indices to show coreference, as with the I index in the example Billi said he would come. The two expressions with the same reference are coindexed, Hence in this example, “Bill” and “he” are coindexed, indicating that they should be interpreted as coreferential.

Google has at least one project involving coreference and has a few people involved in papers on the project.

The project at [Reference Coreference Scorers](http://conll.github.io/reference-coreference-scorers/), mentions the following papers and states that they should be cited when it is:

[Scoring Coreference Partitions of Predicted Mentions: A Reference Implementation](https://www.aclweb.org/anthology/P14-2006/). BY Sameer Pradhan, Xiaoqiang Luo, Marta Recasens, Eduard Hovy, Vincent Ng, and Michael Strube. Proceedings of the 52nd Annual Meeting of the Association for Computational Linguistics. Baltimore, MD, June 2014. [pdf]

[An Extension of BLANC to System Mentions](https://www.aclweb.org/anthology/P14-2005/). BY Xiaoqiang Luo, Sameer Pradhan, Marta Recasens, and Eduard Hovy. Proceedings of the 52nd Annual Meeting of the Association for Computational Linguistics. Baltimore, MD, June 2014. [pdf]

These were a couple of others that I saw while looking around, where people from Google were involved in their writing:

[Large-Scale Cross-Document Coreference Using Distributed Inference and Hierarchical Models](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/37560.pdf) (pdf)

[Wikilinks: A Large-scale Cross-Document Coreference Corpus Labeled via Links to Wikipedia](https://web.cs.umass.edu/publication/docs/2012/UM-CS-2012-015.pdf)

Most interesting to me from these papers was abstract in the last one, which tells us:


> Cross-document coreference resolution is the task of grouping the entity mentions in a collection of documents into sets that each represent a distinct entity.
>
> It is central to knowledge base construction and also useful for joint inference with other NLP components.
>
> Obtaining large, organic labeled datasets for training and testing cross-document coreference has previously been difficult. This paper presents a method for automatically gathering massive amounts of naturally occurring cross-document reference data.
>
> We also present the Wikilinks dataset comprising 40 million mentions over 3 million entities, gathered using this method. Our method is based on finding hyperlinks to Wikipedia from a web crawl and using anchor text as mentions. In addition to providing large-scale labeled data without human effort, we can include many text styles beyond newswire and many entity types beyond people.
