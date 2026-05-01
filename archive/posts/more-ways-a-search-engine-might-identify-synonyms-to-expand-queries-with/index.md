---
title: "More Ways Search Engine Synonyms Might be Used to Rewrite Queries"
source_url: "https://www.seobythesea.com/2011/02/more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with/"
slug: "more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with"
date_published: "2011-02-16T17:06:47+00:00"
date_modified: "2020-06-20T10:11:10+00:00"
author: "Bill Slawski"
---

A couple of years back, Google was granted a patent on an approach to identifying search engine synonyms by looking at and comparing queries that searchers used to find information. The patent was [Determining query term synonyms within query context](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,636,714.PN.&OS=pn/7,636,714&RS=PN/7,636,714), and I covered it in my post [Google Search Synonyms Are Found in Queries](https://www.seobythesea.com/2009/12/how-google-may-expand-searches-using-synonyms-for-words-in-queries/).

A month or so after that patent was granted and I wrote my post, Google researcher Steven Baker published a blog post at the *Official Google Blog* titled [Helping computers understand language](https://googleblog.blogspot.com/2010/01/helping-computers-understand-language.html), where he announced that Google would start including synonyms for query terms in search results when the search engine thought that the synonym was a good match for a query term.

![A mechanic working on a car (or auto).](media/car-mechanic.jpg)
Car Mechanic or Auto Mechanic or Both?

The Google blog post included some examples of when replacing query terms for search engine synonyms might be useful (such as replacing “word” for “lyrics” when someone searches for [song words]), and when replacing a query term for a synonym might not be as helpful (such as replacing “pictures” with “photos” on a search for [motion pictures]). Steven Baker not only wrote the blog post, but he was also one of the inventors listed on the search engine synonyms patent.

Google was granted a new patent this week on synonyms, and Steven Baker is again one of the named inventors on the patent.

At the beginning of the patent’s description, some of the difficulties mentioned in Steven Baker’s blog post are repeated about finding helpful synonyms that can be used to replace other words in a query to bring meaningful search engine synonyms results to a searcher.

The earlier patent described some of the ways that Google might identify synonyms from query logs, and this patent explores some additional approaches that look at how those words are used within pages online.

For example, the search engine synonyms identification method might look at how frequently words tend to appear together in documents on the Web.

It might also look at how close together those words appear within those documents as well. It seems that words that frequently appear on a page near each other, but not too close may stand a good chance of being synonyms.

So this process would look to see if those words that tend to co-occur in the same documents frequently tend to appear so close together that they might appear within the same sentence or phrase. If so, they might not be synonyms because, as we’re told in the patent, “synonyms rarely occur in the same sentence or phrase.”

For example, the words “ice” and “cream” tend to show up frequently in the same documents, but they often tend to be adjacent to each other in the phrase “ice cream.”

A closeness score might be calculated by dividing the probability that the words are very close to each other by the probability that the words are near each other.

Words that are “very close” to each other might be less than a certain number of words apart, such as 4 words. Words that are “near” each other might be within a certain other numbers of words, such as 100. Words that are near, and appear within the same documents frequently, but not too close might be synonyms.

This system might also look at correlations between the appearance of certain words within the content of a page, and words in page titles and anchor text pointing towards those pages.

While co-occurrence and closeness of words are two factors to be considered, another signal might involve looking at how the words are used on the page, referred to in the patent as “word forms.”

For instance, if the author of a page is writing about “car mechanics,” on a page, and then refers to “auto mechanics,” on the same page, that usage might provide a clue that “car” and “auto” could be synonyms. The patent also tells us that the search engine might also look at query logs to see if searchers sometimes replace one of the words with another during the same query session.

So, if the words “car” and “auto” tend to appear frequently on the same page, and people searching for [car mechanics] also frequently change that search to [auto mechanics] during the same query session, that there’s a strong probability that the terms are synonyms.

The search engine synonyms patent, which provides much more detail, is at:

[Document-based synonym generation](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,890,521.PN.&OS=pn/7,890,521&RS=PN/7,890,521)
Invented by Oleksandr Grushetskyy and Steven D. Baker
Assigned to Google
US Patent 7,890,521
Granted February 15, 2011
Filed: February 7, 2008

Abstract


> One embodiment of the present invention provides a system that automatically generates synonyms for words from documents. During operation, this system determines co-occurrence frequencies for pairs of words in the documents. The system also determines closeness scores for pairs of words in the documents, wherein a closeness score indicates whether a pair of words are located so close to each other that the words are likely to occur in the same sentence or phrase.
>
> Finally, the system determines whether pairs of words are synonyms based on the determined co-occurrence frequencies and the determined closeness scores. While making this determination, the system can additionally consider correlations between words in a title or an anchor of a document and words in the document as well as word-form scores for pairs of words in the documents.

I’ve written a few posts about synonyms in search. Here are some of those:

- 2/19/2006 – [Multi-Stage Query Processing at Google](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/)
- 5/25/2007 – [Refining Queries Using a Local Category Synonym](https://www.seobythesea.com/2007/05/refining-queries-using-category-synonyms-for-local-and-other-searches/)
- 12/29/2008 – [How a Search Engine Might Use Synonyms to Rewrite Search Queries](https://www.seobythesea.com/2008/12/how-a-search-engine-might-find-synonyms-to-use-to-expand-search-queries/)
- 1/23/2009 – [Google to Expand Language Search and Shrink Our World?](https://www.seobythesea.com/2009/01/search-engines-to-expand-language-search-and-shrink-our-world/)
- 6/29/2009 – [Semantic Relations from Query Logs](https://www.seobythesea.com/2009/06/query-logs-and-the-slang-of-the-web/)
- 12/22/2009 – [Google Search Synonyms Are Found in Queries](https://www.seobythesea.com/2009/12/how-google-may-expand-searches-using-synonyms-for-words-in-queries/)
- 1/19/2010 – [Google Synonyms Update](https://www.seobythesea.com/2010/01/google-synonyms-update/)
- 1/27/2010 – [Paid Search Results and Query Expansion using Synonyms and Related Concepts](https://www.seobythesea.com/2010/01/paid-search-results-and-query-exansion-using-synonyms-and-related-concepts/)
- 2/16/2011 – [More Ways Search Engine Synonyms Might be Used to Rewrite Queries](https://www.seobythesea.com/2011/02/more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with/)
- 8/12/2013 – [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- 9/27/2013 – [The Google Hummingbird Patent?](https://www.seobythesea.com/2013/09/google-hummingbird-patent/)
- 12/8/2013 – [How Google May Rewrite Queries](https://www.seobythesea.com/2013/12/rewrite-search-terms/)
- 9/9/2013 – [How Google May Reform Queries Based on Co-Occurrence in Query Sessions](https://www.seobythesea.com/2013/09/google-reform-queries-based-co-occurrence-query-sessions/)
- 10/15/2013 – [Google’s Hummingbird Algorithm Ten Years Ago](https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/)
- 12/21/2015 = [How Google Might Make Better Synonym Substitutions Using Knowledge Base Categories](https://www.seobythesea.com/2015/12/how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories/)

Last Updated July 4, 2019.
