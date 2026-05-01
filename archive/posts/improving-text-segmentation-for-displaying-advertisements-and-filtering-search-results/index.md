---
title: "Improving Text Segmentation for Displaying Advertisements and Filtering Search Results"
source_url: "https://www.seobythesea.com/2007/05/improving-text-segmentation-for-displaying-advertisements-and-filtering-search-results/"
slug: "improving-text-segmentation-for-displaying-advertisements-and-filtering-search-results"
date_published: "2007-05-31T21:47:08+00:00"
date_modified: "2020-06-23T10:50:45+00:00"
author: "Bill Slawski"
---

## Text Segmentation is something a search engine needs to Do Well

When you type a domain name into your browser address bar and the domain isn’t found, sometimes you’ll be served a search results page that has advertisements and links related to a “subject” for that domain name.

For example, you might type “usedrugs.com” into the address bar, and there may not be a website at the domain name “usedrugs.com”. You may be redirected to a third-party website, with advertisements and/or links relevant to that domain name. Ads might be shown for the phrase “used rugs” on that web page if it is determined to be the most likely segmented version of the string of text from the domain name.

Some sites might be filtered from appearing in search results because the domain names may seem to potentially indicate adult-related material.

For example, a domain name, such as “mikesexpress.com”, could be filtered out of search results by an adult filter, because the word “sex” appears in the string of characters.

A segmentation process could be used to determine the most likely segmented result for the string of characters “mikesexpress” is “mikes express,” and the adult filter may use that information to allow the website “mikesexpress.com” to be included in search result sets (or allow pages with a mention of the URL, or a link to the URL to show in results).

A Google patent application looks at ways to try to figure out what is meant by the string of letters entered by the searcher when it may not be clear, and how that string might be made sense of when segmented.

[Methods and systems for improving text segmentation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070124301.PGNR.&OS=dn/20070124301&RS=DN/20070124301)
Assigned to Google
Invented by Gilad Israel Elbaz and Jacob Leon Mandelson
US Patent Application 20070124301
Published May 31, 2007
Filed: September 30, 2004

Abstract


> Methods and systems for improving text segmentation are disclosed. In one embodiment, at least a first segmented result and a second segmented result are determined from a string of characters, a first frequency of occurrence for the first segmented result and the second frequency of occurrence for the second segmented result are determined, and an operable segmented result is identified from the first segmented result and the second segmented result based at least in part on the first frequency of occurrence and the second frequency of occurrence.

**Segmenting Strings of Text into Tokens**

One of the challenges of text processing happens when a string of characters is received by a search engine that has no breaks indicating words or other tokens. With the way that domain names often include no spaces between words, this can happen regularly.

A text segmentation engine or module may segment that string of characters into potential combinations of tokens to select to associate with the string of characters. The following are some of the things that could be considered tokens:

- a word,
- a proper name,
- a geographic name,
- an abbreviation,
- an acronym,
- a stock market ticker symbol, or;
- other tokens.

**An Example of How This text segmentation Process Might Work**

1) The string of characters “usedrugs” can be segmented into segmented results including “used rugs”, “use drugs”, “us ed rugs”, “used rugs”, “usedrugs”, etc.

2) The top segmented results are determined. These would be the ones with the highest probability of being the best or operable segmented result.

3) A frequency search is performed for the top, selected segmented results, in a corpus of articles or search queries.

4) The search engine may perform a search for each of the segmented results in the indexed articles by using each segmented result as a search query. This would be an exact search (with the segmented words in quotation marks), with the number of results being the frequency with which each occurs.

5) Another approach would be to consider the appearances of those results in some or all of multiple indexes for the search engine (if the search engine is using multiple indexes).

6) Or query logs could be searched for the different segmented results, with the frequency at which they appeared noted.

7) Spell checking could be done on the different segments, with frequency searches performed on the original, and a spell-checked version. For example, if a segmented result is “baseball game” and the spelling-corrected result is “baseball game”, a frequency search can be performed for both of these results.

8) The result with the highest frequency of occurrence (in articles retrieved, or matching search queries from log files) might be chosen as the best choice.

9) Other signals might be looked at in addition to the frequency of use of different combinations of tokens:

- PageRank of the articles that contain each of the segmented results, so that they are weighted differently.
- Number of times a segmented result occurs in an article, and;
- The location of the segmented results in those articles.
