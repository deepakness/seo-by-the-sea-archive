---
title: "How a Search Engine Might Search Nicknames and Given Names"
source_url: "https://www.seobythesea.com/2010/12/how-a-search-engine-might-handle-nicknames-and-given-names/"
slug: "how-a-search-engine-might-handle-nicknames-and-given-names"
date_published: "2010-12-13T16:41:31+00:00"
date_modified: "2021-06-21T08:37:29+00:00"
author: "Bill Slawski"
---

One of the challenges that search engines face during searches can involve returning and expanding results that include given names and nicknames for people. How might a search engine search nicknames? How might a search engine search give names?

With a given name of William, I usually go by the name Bill, and people rarely refer to me as William (especially people who know me – with the sometimes exception of my mom). I will use William on official government documents, resumes, and in other places that seem to call for formal use of my name. Searches on my name at one of the major search engines will return some results referring to me as Bill and a lesser amount that refers to me as William. It would be nice if they included both, regardless of whether my search query used “Bill” or “William.”

When someone searches nicknames, the results are often different from when they search given names, even though it can be a search for the same person.

What can search through nicknames more challenging is that Bill’s nickname might refer to a given name of William, Wilheim, Wilfred, Guillaume, or Guillermo? Someone with the given name of William might also commonly use the nickname of Bill, Will, Willie, Billy, or others.

Can a search engine help a searcher find results for a person whom they only know the given name for, or whom they only know the nickname for?

A Yahoo patent application published this past week explains how the search engine might expand queries to include nicknames for a person when a given name is used in a query, or expand a search to include a given name when a nickname is used in a query so that a searcher can search nicknames.

Expanding queries for names like this is only useful when the results returned are relevant for the search. For example, someone looking for “Prince William,” of England probably doesn’t want to see Germany’s “Prince Wilhelm” results. Also, when someone searches for “Bill Clinton,” and the majority of relevant search results use “William Clinton” instead, the expanded query should treat results for “Bill Clinton” and “William Clinton” as equally relevant to each other so that the results returned aren’t “Bill Clinton” results followed by “William Clinton” related pages.

The patent application is:

[Predictive Person Name Variants for Web Search](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20100312778.PGNR.&OS=dn/20100312778&RS=DN/20100312778)
Inventors: Yumao LU, Fuchun Peng, Benoit Dumoulin
US Patent Application 20100312778
Published December 9, 2010
Filed: June 8, 2009

Abstract


> Techniques for determining when and which name variant candidates to use to re-write a search query that includes a person’s name to provide the most relevant search results are provided. A determination is made whether a person’s name is present in a search query request entered by a user. Name variant candidates are generated for each person’s name. Then, the name variant candidates are ranked for each person name based upon one or more models that calculate a probability value for each name variant candidate. Based upon these rankings, the query may be re-written to include the original person name and a specified number of top-ranked name variant candidates to present the user with the most relevant search results.

When a search is performed, and name variants are considered in query expansion, the search engine shouldn’t just look in a dictionary to find all possible variants of a particular name. If the nickname “Bill” is part of the query, the search engine should not just expand the query to include all given names that might correspond to the nickname Bill, such as “William,” “Wilfred,” “Guillaume,” “Guillermo,” or “Wilhelm.”

Instead, probabilities should be used to try to find the most likely name variant to use.

**Indentifying Names in Queries**

The patent describes some models that could be used to determine that a person’s name is included in a query, including a Conditional Random Field model, a Hidden Markov Model, and a Support Vector Machine (SVM) model. It then describes some approaches to use to determine which variants to use to expand the query.


## Conditional Random Field (“CRF”) model

A Conditional Random Field (“CRF”) model may be used to label sequential data. A CRF engine may look at 250,000 previously submitted search queries and tag each term of each query with a label that states whether the term is a person’s name. For example, with a search query of “Bill Clinton president,” the first term might be labeled as the beginning of a person’s name. The second might be labeled as the end of a person’s name, and the last might be labeled as not containing a name. Through machine learning, patterns identified in these previous queries might be used to identify the beginning and ending names in new queries that aren’t labeled.


## Hidden Markov Model (HMM)

A Hidden Markov Model (HMM) could be used to determine the presence of person names within a search query. This is a statistical model that can be used to find the part-of-speech of a given the word. A word starting a query such as “the” might indicate that the next word in the sequence may be a noun 40% of the time, an adjective 40% of the time, and a number 20% of the time. Statistics like this could help determine what part of speech a word in a sequence might be. A model like this might be used to try to find the presence of persons’ names.


## Support Vector Machine (SVM) model

Another machine learning system used for classification, a set of data might be analyzed in which words in the body of data has been assigned one of two classes – a name or not a name. This training set might be used to identify names in new data that haven’t been classified.


## Locating Variants of Names used in Queries

Once a person’s name has been identified in a search query, all possible name variants might be identified through one of two dictionaries.

1) a nickname to formal name dictionary, and
2) a formal name to nickname dictionary.

Information about names in these dictionaries might be culled from existing dictionaries such as a social security registry of names, or previous search queries used, or names found on the Web. Uncommon names might also be added, such as unusual spellings of names, place names used as peoples’ names, and names used in places like popular culture periodicals.


## Determining the Highest Ranked Name Variants

Many different algorithms could be used to decide which variants of a name to use in query expansion to help people search for nicknames. The patent application describes a few options, including White Page Frequency, Statistical Translation Models, and Session-based Query Analysis.


## White Page Frequency

Take a known list of names, like the names from the Social Security Administration, to find the popularity of names of people from the United States for a given year. Find out the popularity of the use of those names, and the counts or popularity of name variant candidates within that list.


## Statistical Translation Model

Take a body of information, such as all the words that appear on the Web, or a set of previous web searches, or words used in a collection of books, and break them down into sequences of phrases. For instance, in the index of web pages, break each page into four-word phrases, like you might for this sentence:

– Take a body of
– a body of information
– body of information, such
– of information, such as
– information, such as all
– such as all the
– as all the words

Understanding probabilities about the number of times that a given sequence of words might appear in the body of data being explored can tell us something about using words in that body of data. Probability values might be created involving name variants from this information:


> By determining the number of times a name variant candidate appears within the corpus. Within the context of the other terms in the search query, a probability value may be determined for each name variant candidate and rankings determined from those probability values.


## Session Based Query Analysis

Sets of previous queries that appear to have been used in the same search sessions can tell us something about the relationship between name variants. For example, someone searching for “Babe Ruth” might also search for “George Henry Ruth,” “Bambino,” and other related terms, including nicknames and given names in the same search session. If those related queries are seen in many other search sessions, that might boost the confidence that the names used are variants of each other.


## Search Nicknames Conclusion

A search for “Bill Clinton” on a search engine will return much more rewarding search results if they include results for “William Clinton” and even “Bubba Clinton.” This patent describes a few different algorithmic approaches used to identify whether a query includes a person’s name, a way of using dictionaries to expand those names, and some algorithms to limit which name variants should be used to expand a query that includes a name.

The process described in this patent may help when you’re writing content for a page on a website that involves an individual, and that person often goes by a nickname. Rather than just relying upon a system like this, it’s probably not a bad idea to refer to the person by both their given name and the nickname, especially if there’s the possibility that someone searching for the page might use either variation.
