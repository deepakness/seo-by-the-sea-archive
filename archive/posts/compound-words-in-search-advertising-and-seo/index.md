---
title: "Compound Words in Search Advertising and SEO"
source_url: "https://www.seobythesea.com/2009/03/compound-words-in-search-advertising-and-seo/"
slug: "compound-words-in-search-advertising-and-seo"
date_published: "2009-03-08T21:43:44+00:00"
date_modified: "2021-07-30T14:19:49+00:00"
author: "Bill Slawski"
---

## Does Google Treat Compound Words and Decompounded Words as Keywords Equivalents?

What’s the difference between icecream and ice cream, or paperclips and paper clips? How about sandpaper and sand paper, or thumbtack and thumb tack? Compound words come about when two words can be joined together to form new words.

In my examples, the meanings of each pair of two words joined together are the same as those two words as phrases.

When someone searches for icecream at Google, should they see the same search results for ice cream or icecream, given that the words mean the same thing? If a page about paperclips shows AdSense advertisements, should the ads be for paper clips and paperclips? If an AdWords advertiser runs AdWords advertisements to show during search results, should their ads run both when someone searches for sandpaper and sand paper?

A few years back, I wrote about a patent filing that explored ways that Google might handle compound and hyphenated words and other spellings of words, in my post [SEO and Compound Words, Inflections, and Alternative Spellings](https://www.seobythesea.com/2006/09/seo-and-compound-words-inflections-and-alternative-spellings/). That patent filing gave us a pretty high-level overview of how it might treat compounds but didn’t delve too deeply into the details.

Last week, another patent filing from Google came out on compound words, focusing primarily on describing how they might be used for search advertisements that Google shows on web pages and during search results.

While the patent uses examples from Google search advertising, it gives us a better sense of how it might see icecream and ice cream as keywords meaning the same thing. Some patent filings are narrow in scope, but near the end of this one, we are told that the way Google handles compounds might apply to more than just ads:


> Although the above description refers to a content item such as an advertisement, content items such as video and/or audio files, web pages for particular subjects, news articles, etc., can also be used. Also, the implementations can be used with other compound words, such as Finnish and other languages that include compound words.
>
> Furthermore, while the above description refers to online advertisements, the implementation described can also be used with other possible applications such as, for example, machine translation, speech recognition, information retrieval, etc.

The compound words patent application is:

[Word Decompounder](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090063462.PGNR.&OS=dn/20090063462&RS=DN/20090063462)
Invented by Enrique Alfonseca and Stefan H. Pharies
Assigned to Google
US Patent Application 20090063462
Published March 5, 2009
Filed: September 4, 2007

Some example languages that use compound words include Afrikaans, Danish, Dutch-Flemish, English, Faroese, Frisian, High German, Gutnish, Icelandic, Low German, Norwegian, Swedish, and Yiddish.

Google’s advertisements might take compound words from a page that an ad might be shown upon or from a search query and split them to show ads relevant to one or more words that make up the compound words as keywords for advertisements.


## Splitting Compound Words

In exploring whether a word is a compound word, and in trying to find advertising keywords that are appropriate for the compound, Google might take the word and split it apart into strings of letters, add some possibly meaningful parts of words to those strings, and see how often those strings and the strings with the additions might show up together on the web or in search queries or advertising campaigns as phrases.

To start, Google might take the word “icecream” and break it up into strings of letters, such as:

I, ic, ice, icec, icecr, icecre, ice cream, icecream, c, ce, cec, cecr, cecrea, cecream, e, ec, ecr, ecre, ecrea, ecream, c, cr, cre, crea, cream, r, re, rea, ream, e, ea, eam, a, am

Some commonly used semantically meaningful parts of words, or [morphemes](https://en.wikipedia.org/wiki/Morpheme), might be added to those strings to expand the possible meanings that those strings might have. For example, in English, one common morpheme that is often added to the ends of words is the letter “s,” which can transform many words from a singular version to a plural – so that the words “ices” and creams” might also be part of the analysis for the compound word “ice cream.”


## Using Query Logs to find Scores for Strings

I’ve generalized how scoring might work for different strings in the following section, but I think it provides a helpful overview.

Google might look at the query logs used to serve advertisements to searchers and see how often those terms such as ice, ice, cream, creams, ream, and reams show up.

Scores might then be created for each of those strings based upon that frequently.

So, for the strings created for icecream, we might see the following frequencies of appearance in advertising logs:

ice (32)
ices (6)
cream (32)
creams (6)
ream (6)
reams (18)

If the frequency of cream is 32, and the total frequency of all the keywords is 100, then the probability that the substring “cream” appears as a query keyword is 32 percent.

Now some strings, such as the words “ream” and “reams,” have a lot more to do with paper than “icecream.” So the search engine may also pay attention to how often strings show up together or co-occur. Since “ice” and “cream” tend to co-occur very frequently, that combination might be given a pretty good score.


## Anchor Text

The search engine might also look at the anchor text in links that appear on the Web in giving scores to these strings and their combinations.

For example, if pages about icecream have the anchor text “icecream” and “ice cream” links pointing to those pages, that may also be considered in a score for those strings. As the patent filing tells us:


> Anchor text is the text that appears in a hyperlink on the web. If, for example, two web pages have a hyperlink to the same document, then the texts in those hyperlinks can be related because the anchor texts usually describe the place where a user is directed if the user clicks on the link. Therefore, if the anchor text of a hyperlink to a web page contains the substring “kontrollfunktion,” and in the anchor text of a hyperlink to the same web page exists “kontrolle funktion.” A good indication exists that all substrings, e.g., “kontrollfunktion” and “kontrolle funktion,” are the same, written as a compound or separately.


## Advertising Keywords

The search engine might also get some clues from advertisers and the terms that they bid upon for a specific ad if someone selling icecream on the web using Google Adwords chooses “icecream” and “ice cream” as keywords for the same ad, that also indicates that the compound word and the phrase are related, that “icecream” is probably a compound, and that “ice cream” is the correct way to split it.


## Outside Sources

In addition to looking at queries related to advertisements, using words in the anchor text, and in the words that advertisers bid upon, Google might also look at outside sources to see how words might be split apart, or if they even should be split.

These sources could include such things as:

Dictionaries from different languages,
Lists of locations,
Proper nouns for people, including first names and family names and organizations and trademarks, and;
Suffixes of words

These sources might contain words that shouldn’t be split. The patent filing gives the example of German place names, which end with “strasse” or “dorf,” and which are proper nouns that shouldn’t be “decompounded” or split into substrings.


## Compound Words and Decompounded Phrases in Search Advertising and Search Results.

Should it make a difference in what pages you see in search results at Google if you search with the compound version of a word or the two-word phrase that joins together to make up the compound?

Should it make a difference in which advertisements you see on the pages of publishers who show AdSense ads? Or in the ads that you see above and to the right of search results?

In some cases, maybe.

For example, when a movie or book, or place uses one version, and a searcher looks for information about that film or publication or location. If you had a movie titled “Paper Clips” and the phrase “Paperclips” attracted a lot more searches, you wouldn’t refer to the movie as “Paperclips” on your website about the movie, would you?

If you were an advertiser, and you used the phrase “paperclips” as an advertising keyword, would you want Google to show your ad in search results for the phrase “paper clips” or on pages about “paper clips” if you didn’t include the two-word version as an advertising keyword?

If you show AdSense on the pages of your website and write a page or post about icecream, would it make a difference to you if Google showed ads for both “ice cream” and “icecream” on that page or post?

If you look at the Google Adwords Keyword Tool to see how frequently people search for different phrases, you might see the following search volumes for the compounds I started this post with, and their decompounded versions:

- icecream (average search volume – 3,350,000)
- ice cream (average search volume – 246,000)

- paperclips (average search volume – 49,500)
- paper clips (average search volume – 40,500)

- sandpaper (average search volume – 74,000)
- sand paper (average search volume – 14,800)

- thumbtack (average search volume – 6,600)
- thumb tack (average search volume – 2,900)

The chances are that even though the search volumes for those pairs show some significant differences, people performing those searches are likely looking for very similar results. So the version that you use on your pages or in your advertisements might make a big difference in how many people see your pages or ads.

Right now, there isn’t much overlap in the sponsored results (ads) that show up at Google for the different versions of my chosen pairs.

Does Google follow this compound word or decompound process for search queries? For example, are compounds and decompounded words that mean the same thing considered equally relevant for the other version? If so, should the search results shown for each be the same?

In searches for the compound and the two-word versions of the four pairs listed above at Google, there is an overlap of the search results shown for each version, and both compound and two-word phrase results show up in the search results for each. But the results don’t match exactly.

They may be considered very relevant, but not equally so.

For instance, the title of the top result for a search for “icecream” is “Ben & Jerry’s Homemade Ice Cream.” The phrase “Ice Cream” in that title is bolded. According to a granted Google patent, [Systems and methods for highlighting search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=6,839,702.PN.&OS=pn/6,839,702&RS=PN/6,839,702), terms are highlighted, or bolded, in search results to help show searchers that the results are relevant for their query. By itself, that isn’t an indication that Google is using this decompounding approach, but it is one piece of evidence considered amongst others.

Last Updated June 9, 2019.
