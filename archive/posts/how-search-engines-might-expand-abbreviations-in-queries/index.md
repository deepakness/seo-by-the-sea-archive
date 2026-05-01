---
title: "How Search Engines Might Expand Abbreviations in Queries"
source_url: "https://www.seobythesea.com/2009/10/how-search-engines-might-expand-abbreviations-in-queries/"
slug: "how-search-engines-might-expand-abbreviations-in-queries"
date_published: "2009-10-21T22:27:04+00:00"
date_modified: "2021-07-05T13:57:52+00:00"
author: "Bill Slawski"
---

When visitors to search engines use abbreviations or expand abbreviations in queries, it’s possible that they might be missing out on some pages worth visiting.

For example, use Yahoo to search for [NASA Moon bombing] and compare the results to a search for [National Aeronautics and Space Administration moon bombing]. You’ll see some very different results.

Should those search results be more similar? NASA and National Aeronautics and Space Administration are the same organization. Then again, NASA is also an abbreviation for:

- North American Saxophone Alliance

- National Auto Sport Association

- National Association of Students of Architecture

There’s also a Nasa mountain in Sweden, which is home to the Nasa Silver mine. There’s a Swedish band named a hip-hop artist, a DJ collective, and the Nasa people in Columbia.

How should a search engine handle abbreviations in queries? Should it expand those queries to include the longer expanded version when doing so is likely to improve search results? If a page would rank well for the phrase “National Aeronautics and Space Administration” but not very well for “NASA,” should it be displayed to searchers who use “NASA” in their query?

That’s the question asked in a patent application published by Yahoo last week.

[Abbreviation Handling in Web Search](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090259629.PGNR.&OS=dn/20090259629&RS=DN/20090259629)
Invented by Xing Wei, Fuchun Peng, and Benoit Dumoulin
Assigned to Yahoo
US Patent Application 20090259629
Published October 15, 2009
Filed April 15, 2008

Abstract


> A method for handling abbreviations in web queries includes:
>
> building a dictionary of a plurality of possible word expansions for a plurality of potential abbreviations related to query terms received or anticipated to be received by a search engine;
>
> accepting a query including an abbreviation;
>
> expanding the abbreviation into one of the plurality of word expansions if a probability that the expansion is correct is above a threshold value, wherein the probability is determined by taking into consideration a context of the abbreviation within the query, wherein the context including at least anchor text;
>
> and sending the query with the expanded abbreviation to the search engine to generate a search results page related to the query.

One of the first steps in associating abbreviations with the words that they are an abbreviation for is to look at anchor text that points to a page that might include both the abbreviations and word expansions that might correspond to those abbreviations. If we found pages with “NASA” in anchor text pointing to pages, do we also see “National Aeronautics and Space Administration” in anchor text pointing to many of the same pages? If so, the following might be added to an abbreviation dictionary:

- NASA = National Aeronautics and Space Administration

But how would the members of the North American Saxophone Alliance feel about that when they search for “NASA jazz competition” and the search results are filled with races to land something on the Moon?

This abbreviation dictionary may include information from other sources as well. Still, if there’s a high enough level of probability that the expanded version is being referred to by use of the abbreviation, then it’s possible that a query using an abbreviation might include results from the expanded word version as well.

Care has to be taken by a search engine when doing this type of query expansion. The patent gives us the following examples of queries where the abbreviation/word “aim” means different things:

- aim download – it’s likely that “aim” stands for “AOL instant messenger.”

- aim stock – aim is probably an abbreviation for “alternative investment market”

- aim at improvement – aim is probably being used as the word “aim” rather than being used as an abbreviation.

There are at least three ways a search engine might learn about abbreviations:

- *Query Sessions* – If people searching for “aim download” don’t see a relevant result, they might re-write their query as “aol instant messenger download.” This type of user data in query session log files from the search engine can help build that dictionary, and how abbreviations might be used in different contexts.

- *Anchor Text* – If the same pages are linked to with different text, including abbreviations and expanded word versions of those abbreviations, a connection between the abbreviation and expansion can be noted, as well as the context of the use of the words – such as “aim download” and AOL instant messenger download” pointing to the same page.

- *Click Logs* – People clicking on the same page when it appears in search results for different queries can mean that those queries may be related. If it happens more frequently, it’s more likely that they are.

All three of these methods are based upon actual human involvement, whether it involves linking, choosing pages in search results, and refining queries during a search for information on a topic. All of the information is easily accessible to the search engine, and these resources can be used to build a statistical model that can tell the search engine when it might be a good idea to expand an abbr.

The patent filing contemplates handling different forms of abbreviating phrases, such as *acronyms*, which are pronounced as a group of letters and containing the first letter of each word in a phrase, such as “SARS,” or *initialisms* which are pronounced wholly or partly using each letter, such as “IRS” which is pronounced as “I,” “R,” “S,” or *portmanteaus* which is a word formed by combining two or more words, such as “Don’t,” or a *pseudo-blend*, which is a kind of abbreviation that has extra or omitted letters, such as “UNIFEM,” for “United Nations Development Fund for Women.”

When a search engine finds a word in a query that might be one of these types of abbreviations, it may do one of three things:

- Expand the query term to include pages that include the abbreviation, pages that include the expanded version of the abbreviation, and pages that include both.

- Offer a searcher a query suggestion for the expanded version of the abbreviation.

- Ignore the expanded version, and just return results for pages with the abbreviation.

**Conclusion**

If you are searching for something, and you are using an abbreviation amongst your query terms, it isn’t a bad idea to try the same query with the abbreviation expanded, especially if you think there’s a chance that you might miss something. If you’re searching for information about a space agency, searching for NASA without searching for National Aeronautics and Space Administration might not be as bad as if you were searching for information about the North American Saxophone Alliance, and you only used “NASA” in your search instead of the expanded version of the abbreviation.

If you are publishing something on the Web that contains abbreviations, it’s often not a bad idea to use the abbreviation and the expanded version on the same page, and to see what else that abbreviation might stand for, and what search results for it look like. In the first 20 results, I see for “NASA” in Google, all pages returned to refer to the space agency except for the 9th result, which is about the DJ collective N.A.S.A, and the 10th result, which is about the racing organization, the National Auto Sport Association. No Saxophonists in a quick look at the top 50 results.

This patent application is from Yahoo, but researchers at Google and Bing may be considering many of the same ideas.

Be careful with your abbreviations as you search, and as you write for searchers.
