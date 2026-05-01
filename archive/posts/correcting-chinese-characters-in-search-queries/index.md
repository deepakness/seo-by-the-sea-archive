---
title: "Fuzzy Pinyins - Correcting Chinese Characters in Search Queries"
source_url: "https://www.seobythesea.com/2006/03/correcting-chinese-characters-in-search-queries/"
slug: "correcting-chinese-characters-in-search-queries"
date_published: "2006-03-04T23:45:57+00:00"
date_modified: "2021-08-08T14:12:32+00:00"
author: "Bill Slawski"
---

## Fuzzy Pinyins at Google

I had a chance to spend a little time with Ian McAnerin at the New York SES before his near [brush with a Fiery Explosion!](http://mcanerin.blogspot.com/2006/03/ian-blows-up-in-fiery-explosion.html). He briefly mentioned some of the challenges facing search engines in China, including the use of [simplified Chinese characters](https://en.wikipedia.org/wiki/Simplified_Chinese_characters).

Ian is one of the speakers who will appear at the Search Engine Strategies Conference in China later this month. I don’t know if it will come up at the sessions there, but those simplified Chinese characters pose some interesting challenges to the search engines. For example, I posted about a couple of patent applications from Google on Chinese characters last December.

Google has released another patent application involving Chinese characters in search queries covering Fuzzy Pinyins: [Fault-tolerant romanized input method for non-roman characters](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060048055%22.PGNR.&OS=DN/20060048055&RS=DN/20060048055)

Here’s the abstract from this one:


> Fault-tolerant systems and methods to process and correct input spelling errors for non-Roman-based languages such as Chinese, Japanese, and Korean (CJK) are disclosed. The method may be applied to a Chinese input method using pinyin.
>
> For example, the method may generally include receiving a pinyin input representing characters in Chinese, the input having at least one original pinyin, identifying potentially incorrect pinyins in the input, expanding each potentially incorrect pinyin to at least one additional alternative pinyin, each pair of potentially incorrect and corresponding alternative pinyin having a proximity measurement, converting each pinyin in the input and each alternative pinyin to Chinese characters, computing likelihoods of possible conversions of the pinyin input to Chinese characters, each possible Chinese conversion being a combination of the converted original and/or alternative pinyins of the input, the probabilities are based on the proximity measurement and optionally on a context of the possible Chinese conversion, and determining a most likely Chinese conversion from the possible conversions.

There seem to be some interesting technical challenges facing search engines in China. I don’t know if the patent applications will be a topic of discussion at this first Search Engine Watch conference in China, but it’s exciting to see that it is taking place. It’s interesting seeing how Google is dealing with Fuzzy Pinyins as well.
