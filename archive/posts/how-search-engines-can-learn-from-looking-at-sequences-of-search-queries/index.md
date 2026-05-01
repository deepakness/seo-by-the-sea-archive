---
title: "Search Engines Learn From Search Query Sequences"
source_url: "https://www.seobythesea.com/2008/05/how-search-engines-can-learn-from-looking-at-sequences-of-search-queries/"
slug: "how-search-engines-can-learn-from-looking-at-sequences-of-search-queries"
date_published: "2008-05-26T14:05:57+00:00"
date_modified: "2020-06-20T13:22:09+00:00"
author: "Bill Slawski"
---

Whenever someone searches at a search engine, they not only get information in response to their search, but they also provide information to the search engine about the things they are searching for – information that the search engine might find useful in helping other searchers.

If that searcher performs another search related to their first search, then the search engine might create an association between the two search phrases that the searcher used, if the two phrases appear to be related. If they perform a series, or sequence, of searches on a concept, then the search engine might take advantage of that information, from those search query sequences.

If a lot of people perform that first search, and then the same second search, or that same search within a search session, then the search engine might decide that the phrases are semantically related to each other. Knowing that a relationship exists between search queries might help the search engine help people find things on the web, and it might help provide better advertisements from the search engine.

A patent application from Yahoo explores how the search engine might find semantically related terms by looking at search query sequences searched for by people in search sessions, and describes some of the processes behind how the search engine might determine that phrases may be related to each other. It also describes how a search engine might identify whether a query comes from a person or a program.

**How Looking at Search Query Sequences Can Help Search Engines?**

Search engines may be able to learn a lot from searchers, by looking at the words that people search with and related searches performed by those searchers in the same search session. Search engines can also learn from the words chosen by advertisers who may choose to advertise on a search engine.

If a search engine can determine that two words or phrases are related in meaning in a language or logic, knowing that “semantic” relationship could allow advertisers “to broaden or focus their online advertisements to relevant potential customers and allows searchers to broaden or focus their Internet searches to obtain more relevant search results.”

Imagine a search engine setting up a system that can determine semantically meaningful relationships between certain terms when those terms are searched with, and people click on particular pages when receiving those pages in response to those related terms.

The same system might also determine the terms that advertisers choose to relate to each other when setting up an online advertisement campaign that is semantically related.

This system could be used to:

***1) Discover semantically related words for purposes of bidding on online advertisements***

Advertisers could optimize their advertising campaigns by finding terms to advertise with that are semantically related to the terms they planned on using in their advertisements. Those semantically related terms may also appear on webpages that their advertisements could appear upon in a content advertising program.

Providing an advertiser the ability to serve an advertisement based on semantically related terms can increase the relevance and efficiency of those ads to an advertiser so that the advertiser does not have to determine every possible word combination where the advertiser would like their advertisement served to a potential customer.

***2) Assist a searcher performing research at an Internet search engine***

When someone performs research at a search engine, the queries that they use could be treated as seed terms, with a search engine suggesting semantically related words related to the terms either within the search results generated in response to the original query or as search suggestions.

This can help a searcher to broaden or focus their future searches, and receive more relevant search results.

***3) Automatically discover terms related to evolving products of a given product brand or related to new events happening at a given place of interest***

If a search engine is looking at semantically related terms, and someone searches for a term such as “Sony DVD player,” the search engine might return a term such as “Sony <new model> DVD player” which the search engine found from sequences of search queries containing both the term “Sony DVD player” and “Sony <new model> DVD player.”

Someone searching for an event might search for the word “Burbank” and might get a suggestion to look at “Yahoo! Burbank” as an event that they might want to find out more about. This way of automatically discovering terms related to new events happening at a given place of interest could be based upon search query sequences containing both the term Burbank and Yahoo! Burbank.

People recently searching for “Burbank” may have discovered an event happening at Yahoo known as “Yahoo! Burbank” and decided to search for that term. The search query sequences let the search engine know that the terms are semantically related.

The Yahoo patent application is:

[System and method for determining semantically related terms based on sequences of search queries](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080120072.PGNR.&OS=dn/20080120072&RS=DN/20080120072)
Invented by Kevin Bartz, Vijay Murthi, Benjamin Rey, and Shaji Sebastian
Assigned to Yahoo
US Patent Application 20080120072
Published May 22, 2008
Filed: November 16, 2006

Abstract


> The present disclosure is directed to systems and methods for determining semantically related terms based on sequences of search queries.
>
> Generally, a semantically related term tool examines search logs to associate search queries with a user submitting the search query. The semantically related term tool establishes a plurality of sequences of search queries, each sequence of search queries comprising one or more search queries associated with a common user and relating to a common concept.
>
> The semantically related term tool receives one or more seed terms and determines one or more terms related to the received seed terms based on the established plurality of sequences of search queries.


## Information from Search Query Sequences

When a searcher submits a query to a search engine, the search engine usually records information about the search in a search engine log file. At the very least, the information collected includes the terms used to search with and the search results that were shown to the searcher in response to those search terms. But the search engine log could include additional information, such as:

1. The positioning of URLs in the search results,
2. A URL the searcher clicked on after viewing the search results,
3. The number of times the searcher clicked on the URL,
4. The time the search query was received,
5. The search query received before the present query, or;
6. Any other type of information relating to the search query or search results desired by the search engine.

Search engine logs could contain a lot more information about how a searcher interacts with the search engine and search results. This information might be used to decide whether or not the phrases used in searches are related to each other in some manner.


## Related Searches and Patterns

A program that attempts to see how semantically related terms might be to each other examines search engine logs to determine search query sequences by an individual user that is related to a common concept.

Someone searching for a particular concept may try many many related search queries, hoping that one of the variations of the search query is better at returning pages that are more relevant to the particular concept being searched.

This pattern of search query sequences around the same concept could help the search engine try to examine how related those terms might be.


## Switching Topics and Multi-tasking

The search engine might not look at every search query during a session as being related to each other. Sometimes, when a searcher is done researching one concept, they might move on to a new concept. Or they may be multi-tasking and looking for information on multiple concepts at the same time.

So, the search engine might examine all of the search queries from a searcher for a particular period to determine if they should be grouped into search query sequences.

The search engine starts sorting queries found in the search engine log (or during real-time searches) from a user into sequences, and may decide that a query is similar to one or more previously entered queries, and may place that query into an “established sequence.” If the query term appears unrelated, the search engine may start a new sequence.

A search session from an individual searcher may contain multiple sequences. How does a search engine identify whether or not queries are similar to each other?

**Determining Similarity of Queries**

The search engine might decide that search queries from a session are semantically related by looking at one or more properties of changes in search queries used in that session.

These properties of queries in a session can include things such as edit distances, prefix overlaps, and suffix overlaps.

***Edit distance*** — also known as Levenshtein distance, is the smallest number of inserts, deletions, and substitutions of characters needed to change one search query into another search query.

***Word edit distance*** — the smallest number of insertions, deletions, and substitutions of words needed to change one search query into another search query.

***Prefix overlap*** — occurs between two search queries when one or more words occur at the beginning of both search queries. For example, the search queries “Chicago Bears” and “Chicago Cubs” have a prefix overlap due to the fact the word “Chicago” occurs at the beginning of the search queries.

***Suffix overlap*** — occurs between two search queries when one or more words occur at the end of both search queries. For example, the search queries “San Francisco Giants” and “New York Giants” have a suffix overlap due to the fact the word “Giants” occurs at the end of the search queries.

The search engine might look at how related terms are by using those features and looking at:

- A minimum, average, or maximum edit distance between a search query and the search queries of a sequence;
- A minimum, average, or maximum difference between a time a search query was received at the search engine and time the search queries in the sequence were received at the search engine;
- The minimum, average, or maximum prefix overlap between a search query and the search queries of a sequence;
- The minimum, average, or maximum suffix overlap between a search query and the search queries of a sequence;
- Whether a search query and the search queries of a sequence related to the same geographic location; or,
- Whether a search query and the search queries of a sequence related to a common product brand.

**Assigning Weights to Search Sequences**

The search engine might look at several search sequences, and then apply different weights to the search sequences based on the number of users who have submitted similar search sequences.

For example, if many searchers submit the terms “basketball and “Lakers basketball” in a search sequence, the search engine may have more confidence in that search sequence than when only one searcher has submitted the terms “basketball” and “Lakers basketball” in a search sequence.

**Did a Human or a Program Submit the Queries?**

After looking at many query sequences, the search engine might examine them to determine whether a program instead of a person submitted any portion of the search queries to the search engine. Search queries submitted by programs, such as rank checkers and others, are often not helpful in establishing relationships between search queries, so the search engine might remove any sequences of search queries created by a program.

How might a search engine determine if a program submitted a query?

It could look at the number of search queries submitted for a given period from a certain IP address or a cookie associated with the query.

For example, if 100 search queries were submitted to a search engine in less than five minutes with the same cookie, or from an IP address that is not known for providing a high volume of traffic, it could be assumed that a program is submitting the search queries and all of the sequences associated with the program should be removed.

The search engine might also determine whether a program has submitted the search queries based on the lexical patterns of the search queries. For example, if the search engine sees sequences of search queries with the words “link,” “suggest,” and “add” in conjunction with a domain name, those could be considered indicative of lexical patterns that suggest a program submitted the search queries to the search engine.

**Seed Terms and Semantically Related Terms**

After looking at many sequences of search queries, and removing any potential sequences of search queries created by a program, the search engine might receive search queries from searchers or advertising terms to be used in an ad campaign (together referred to as seed terms) and determine a set of terms semantically related to those seed terms based on the sequences of search queries.

Each of the received seed terms may be a single word or a phrase.

Further, each of the seed terms may be a positive seed term or a negative seed term.

***Positive Seed Terms*** — A term that an advertiser would like to bid on to have the advertisement ad provider serve an advertisement or the type of terms a searcher interacting with a search engine would like to receive search results relating to.

***Negative Seed Terms*** — A term that an advertiser would not like to bid on to have the ad provider serve an advertisement or the type of term a search interacting with a search engine would not like to receive search results relating to.

In other words, an advertiser, searcher, or system within the ad provider such as the ad campaign management system submits seed terms to receive more terms like positive seed terms, while avoiding keywords like a negative seed term.

The search engine might send semantically related terms to an advertising campaign management system to be used in a keyword suggestion tool. Semantically related terms might also be used by the search engine to broaden or focus searches.

**Conclusion**

One of the most important takeaways from this patent application is that search engines don’t just look at the information on the Web to help them with searches, but are also paying attention to how people search, and what they search for, as well as the terms that advertisers might relate together when they advertise on a search engine.

The patent filing provides some useful terms about queries, and how searchers may change their queries when they are searching, such as *edit distances*, *prefix overlap*, and *suffix overlap*.

We also learn a little about how a search engine might identify whether a query comes from an actual human searcher, or from a program that is performing searches on the Web.
