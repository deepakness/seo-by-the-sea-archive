---
title: "Answering Featured Snippets Timely, Using Sentence Compression on News"
source_url: "https://www.seobythesea.com/2016/11/featured-snippets-sentence-compression/"
slug: "featured-snippets-sentence-compression"
date_published: "2016-11-30T08:15:46+00:00"
date_modified: "2022-01-07T15:22:13+00:00"
author: "Bill Slawski"
---

## Timely Featured Snippets and Sentence Compression

How is a knowledge graph updated when some earth-shaking event takes place? Is a search engine manually editing information in that knowledge graph? It seems like an area that could be using a machine learning element to automate it and keep it up to date.

Another place that would benefit from machine learning would be generating featured snippets that answer questions people might ask at Google, and it appears that Google thought it might be useful there, too. A Wired Magazine article from Monday describes how a sentence compression algorithm behind these featured snippets might be used:

Google’s Hand-Fed AI Now Gives Answers, Not Just Search Results

At the heart of this approach is the crawling of a data store of news articles and other sources, with the help of a “massive team of Ph.D. linguists it calls Pygmalion,” and the use of algorithms that are referred to as “sentence compression” algorithms that might generate answers to questions from sources such as that news sources for featured snippets.

Curious and hopeful, I went in search of patents from Google that used “sentence compression” algorithms, and I happened to find one:

[Methods and apparatus related to sentence compression](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,336,186.PN.&OS=PN/9,336,186&RS=PN/9,336,186)
Inventors: Ekaterina Filippova and Yasemin Altun
Assigned to: Google
US Patent 9,336,186
Granted: May 10, 2016
Filed: October 10, 2013

Abstract


> Methods and apparatus related to sentence compression. Some implementations are generally directed toward generating a corpus of extractive compressions and associated sentences based on a set of headlines, sentence pairs from documents. Some implementations are generally directed toward utilizing a corpus of sentences and associated sentence compressions in training a supervised compression system. Some implementations are generally directed toward determining a compression of a sentence based on edge weights for edges of the sentence that are determined based on weights of features associated with the edges.

The patent doesn’t mention featured snippets, but it does mention paraphrasing sentences in a data store of titles and sentences from a news source:


> The documents from which the set of headlines, sentence pairs are determined may be news story documents. In some of those implementations, for each of the headlines, sentence pairs, the sentence is the first sentence of the respective document.
>
> Determining the set of headlines, sentence pairs of the set may include: determining non-conforming headlines, sentence pairs from a larger set of headlines, sentence pairs; and omitting the non-conforming headline, sentence pairs from the set of headlines, sentence pairs. Determining non-conforming headline, sentence pairs may include determining the non-conforming sentence pairs as those that satisfy one or more of the following conditions: the headline is less than a headline threshold number of terms, the sentence is less than a sentence threshold number of terms, the headline does not include a verb, and the headline includes one or more of a noun, verb, adjective, and adverb whose lemma does not appear in the sentence.


## A Related Sentence Compression Whitepaper

I had hoped to find more than discussed how this algorithm might be used in the generation of featured snippets, but it didn’t provide many details on that aspect of how these algorithms might be used. It does appear to be based on natural language processing. And I went looking at Google whitepapers to see if I could find more. I found a paper that looked related. On a Research at Google page for the paper [Overcoming the Lack of Parallel Data in Sentence Compression](https://research.google/pubs/pub41393/) they tell us is “A subset of the described data (10,000 sentence & extracted headlines pairs, with source URL and annotations) is available for [download](http://storage.googleapis.com/sentencecomp/compression-data.json).”

That data for download includes sentences from news articles that have been tagged as different parts of speech. It looks like a lot of work, but it appears to be done to take advantage of automating processes that can keep such information up to date and show timely featured snippets.

This appears to be how terms such as “sentence compression” become relevant to what SEOs do.

There is some negative news about this pygmalion project and featured snippets that describe it as more human-driven: [A white-collar sweatshop’: Google Assistant contractors allege wage theft](https://www.theguardian.com/technology/2019/may/28/a-white-collar-sweatshop-google-assistant-contractors-allege-wage-theft). And There’s a discussion on Twitter from late May of this year about payment for the many linguists working on Pygmalion at Google:


> This team, Pygmalion, is one of many at Google that creates the data needed to train machine learning models. All the contractors have BAs in linguistics, many have MAs, some have PhDs. They are paid $25-$35/hour from AdeccoI, a staffing firm.[https://t.co/M0rngryuOo](https://t.co/M0rngryuOo)
>
> — Julia Carrie Wong (@juliacarriew) [May 29, 2019](https://twitter.com/juliacarriew/status/1133741503077965824?ref_src=twsrc%5Etfw)

Some posts I’ve written about patents involving featured snippets and question answering:

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

Last Updated June 26, 2019.
