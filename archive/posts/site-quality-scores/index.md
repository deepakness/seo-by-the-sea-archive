---
title: "Using Ngram Phrase Models to Generate Site Quality Scores"
source_url: "https://www.seobythesea.com/2017/09/site-quality-scores/"
slug: "site-quality-scores"
date_published: "2017-09-21T22:33:00+00:00"
date_modified: "2021-07-31T10:37:17+00:00"
author: "Bill Slawski"
---

## A Site Quality Score Estimates A Searcher’s Experience On a Site

A Site quality Score is a way that Google may measure the Quality of a website to estimate a searcher’s experience on a site if they select that site from search results. It calculates site quality scores based upon different measures in organic search. For example, a recent patent from Google generates site quality scores based on language models from Ingram statistics to compare against known high-quality sites.


![Scrabble Game in Progress](media/640px-Scrabble_game_in_progress-1.jpg)

_Source: [https://commons.wikimedia.org/wiki/File:Scrabble_game_in_progress.jpg](https://commons.wikimedia.org/wiki/File:Scrabble_game_in_progress.jpg) Photographer: [McGeddon](https://commons.wikimedia.org/wiki/User_talk:McGeddon) Creative Commons License: [Attribution 2.0 Generic](https://creativecommons.org/licenses/by/2.0/deed.en)_

Navneet Panda, whom the Google Panda update is named after, has co-invented a new patent that focuses on on-site quality scores. It’s worth studying to understand how it determines site quality scores.


## Using N-grams to Find Gibberish Content

Back in 2013, I wrote the post [Google Scoring Gibberish Content to Demote Pages in Rankings](https://www.seobythesea.com/2013/10/google-gibberish-content-to-demote-pages/), about Google using ngrams from sites and building language models from them to determine if those sites were filled with gibberish or spammy content. I was reminded of that post when I read this patent.

Rather than explaining what ngrams are in this post (which I did in the gibberish post), I’m going to point to an example of ngrams at the [Google n-gram viewer](https://books.google.com/ngrams), which shows Google indexing phrases in scanned books. In addition, this article published by the Wired site also focused upon ngrams: [The Pitfalls of Using Google Ngram to Study Language](https://www.wired.com/2015/10/pitfalls-of-studying-language-with-google-ngram/#slide-1).


## What are Ngram Phrases?

An ngram phrase could be a 2-gram, a 3-gram, a 4-gram, or a 5-gram phrase, where pages are broken down into two-word phrases, three-word phrases, four-word phrases, or 5-word phrases. If a body of pages is broken down into ngrams, they could create language models or phrase models to compare to other pages.

Like the ones that Google used to create gibberish scores for sites, language models could also determine site quality scores if example sites were used to generate those language models. That seems to be the idea behind the new patent granted this week. The summary section of the patent tells us about this use of the process it describes and protects:


> In general, one innovative aspect of the subject matter described in this specification can be embodied in methods that include the actions of obtaining baseline site quality scores for a plurality of previously-stored sites; generating a phrase model for a plurality of sites, including the plurality of previously-scored sites, wherein the phrase model defines a mapping from phase-specific relative frequency measures to phrase-specific baseline site quality scores; for a new site, the new site not being one of the plurality of previously-scored sites, obtaining a relative frequency measure for each of a plurality of phrases in the new site; determining an aggregate site quality score for the new site from the phrase model using the relative frequency measures of the plurality of phrases in the new site; and determining a predicted site quality score for the new site from the aggregate site quality score.

The newly granted site quality scores patent from Google is:

[Predicting site quality](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,767,157.PN.&OS=PN/9,767,157&RS=PN/9,767,157)
Inventors: Navneet Panda and Yun Zhou
Assignee: Google
US Patent: 9,767,157
Granted: September 19, 2017
Filed: March 15, 2013

Abstract


> Methods, systems, and apparatus, including computer programs encoded on computer storage media, predict a measure of quality for a site, e.g., a website. In some implementations, the methods include obtaining baseline site quality scores for multiple previously scored sites; generating a phrase model for multiple sites including the previously scored sites, wherein the phrase model defines a mapping from phrase specific relative frequency measures to phrase specific baseline site quality scores; for a new site that is not one of the previously scored sites, obtaining a relative frequency measure for each of a plurality of phrases in the new site; determining an aggregate site quality score for the new site from the phrase model using the relative frequency measures of phrases in the new site; and determining a predicted site quality score for the new site from the aggregate site quality score.


## Generating N-grams From Anchor Text

In addition to generating n-grams from text upon sites, some versions of the implementation of this patent will include generating n-grams from anchor text of links pointing to pages of the sites. Building a phrase model involves calculating the frequency of n-grams on a site “based on the count of pages divided by the number of pages on the site.”

The patent tells us that site quality scores can impact rankings of pages from those sites, according to the patent:


> Obtain baseline site quality scores for several previously scored sites. The baseline site quality scores are scores used by the system, e.g., by a ranking engine of the system, as signals, among other signals, to rank search results. In some implementations, the baseline scores are determined by a backend process that may be expensive in terms of time or computing resources or by a process that may not apply to all sites. For these or other reasons, baseline site quality scores are not available for all sites.

I’ve written a few posts about patents involving quality scores for organic SEO:

- 6/14/2011 – [Google’s Quality Score Patent: The Birth of Panda?](https://www.seobythesea.com/2011/06/googles-quality-score-patent-the-birth-of-panda/)
- 12/9/2012 = [How Google May Identify Navigational Queries and Resources](https://www.seobythesea.com/2012/12/navigational-queries-resources/)
- 5/15/2013 – [How Google May Rank Web Pages Based on Quality Ratings](https://www.seobythesea.com/2013/05/google-rank-sites-quality-ratings/)
- 5/12/2015 – [How Google May Calculate a Site Quality Score (from Navneet Panda)](https://www.seobythesea.com/2015/05/google-site-quality-scores/)
- 6/22/2015 – [How Google May Classify Sites as Low Quality Sites](https://www.seobythesea.com/2015/06/how-google-may-classify-sites-as-low-quality-sites/)
- 7/30/2018 – [Quality Scores for Queries: Structured Data, Synthetic Queries and Augmentation Queries](https://www.seobythesea.com/2018/07/quality-scores-for-queries/)
- 9/21/2017 – [Using Ngram Phrase Models to Generate Site Quality Scores](https://www.seobythesea.com/2017/09/site-quality-scores/)
- 6/10/2019 – [How Google May Rank Some Results based on Categorical Quality](https://www.seobythesea.com/2019/06/categorical-quality/)

Last Updated June 27, 2019.
