---
title: "New Panda Update; New Panda Patent"
source_url: "https://www.seobythesea.com/2014/09/new-panda-update-new-panda-patent/"
slug: "new-panda-update-new-panda-patent"
date_published: "2014-09-29T18:44:56+00:00"
date_modified: "2020-07-26T15:46:22+00:00"
author: "Bill Slawski"
---

Google’s Pierre Far announced on his Google+ page that Google was releasing a new Panda update that supposedly included some new signals that could potentially help “identify low-quality content more precisely.”

The Google+ post also tells us that this change can help lead to a “greater diversity of high-quality small- and medium-sized sites ranking higher, which is nice.”

A new patent application shows off a quality scoring approach for content, based upon phrases. More on that patent filing below, but it might have something to do with this update.

So it sounds like this release of the Panda update could potentially be good news for some sites that were impacted by Panda in the past.

I looked through a few forum threads linked to by Barry Schwartz’s post on Search Engine Roundtable, [Google Panda 4.1 Now Rolling Out; Aims To Help Smaller Web Sites](https://www.seroundtable.com/google-panda-4-1-hits-19219.html)

In one thread, a poster stated he noticed a change in traffic levels to his site starting on September 19. Another thread had someone suggesting that the change was one targeting spun and poor content.

I noticed that Navneet Panda, whom Google’s Panda Update was named after, has released another patent recently. When the first patent with his name on it came out, I asked if it was [The Panda Patent](https://www.seobythesea.com/2014/04/the-panda-patent/). With many updates to Panda (and “data refreshes), at least one of the changes to the algorithm may have been described in that patent. And this latest update on the quality scoring of the content may be the cause of an update like we are seeing now.

The patent application is at:

[Predicting Site Quality](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220140280011%22.PGNR.&OS=DN/20140280011&RS=DN/20140280011)
Invented by Yun Zhou and Navneet Panda
US Patent Application 20140280011
Published September 18, 2014
Assigned to Google
Filed: March 15, 2013

Abstract


> Methods, systems, and apparatus, including computer programs encoded on computer storage media, for predicting a measure of quality for a site, e.g., a web site.
>
> In some implementations, the methods include obtaining baseline site quality scores for multiple previously scored sites;
>
> - Generating a phrase model for multiple sites including the previously scored sites, wherein the phrase model defines a mapping from phrase specific relative frequency measures to phrase specific baseline site quality scores;
> - For a new site that is not one of the previously scored sites, obtaining a relative frequency measure for each of a plurality of phrases in the new site;
> - Determining an aggregate site quality score for the new site from the phrase model using the relative frequency measures of phrases in the new site; and
> - Determining a predicted site quality score for the new site from the aggregate site quality score.

The patent describes the use of a phrase algorithm, where content from pages is broken down into tokens (individual words plus some things like punctuation), and the frequency of phrases is counted on those pages to be calculated into a score for each page.

The patent doesn’t explain in much detail what a “phrase” is, like Google’s “[phrase-based indexing](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-5-phrase-based-indexing/) patents do. We have no idea if Google ever used those patents, but it is possible.

Errors that appear on in tokens on pages might be counted in rather than ignored in a normalization process. Some very rare tokens (words that don’t appear on the web much at all) might be ignored in this quality score calculation.

***Anchor text*** pointed to a page might be treated as a phrase that actually appears on the page being pointed to itself. This was an interesting statement in the patent, and its significance wasn’t explained. What it might end up doing is adding a lot of phrases of a specific type to a page, if there are a lot of links pointing to that page using the same anchor text.

These tokens might be broken down into groups of 1,2,3,4 or 5 tokens (words and punctuation) or n-grams (where “n” can be a specific number. Google has used n-grams in other ways as well, such as the [n-gram viewer](https://books.google.com/ngrams)

A Google Research Blog post, [All Our N-gram are Belong to You](https://ai.googleblog.com/2006/08/all-our-n-gram-are-belong-to-you.html), tells us of a number of experiments at Google that used n-grams, involving work such as:

- Statistical machine translation
- Speech recognition
- Spelling correction
- Entity detection
- Information extraction
- Others

I’ve linked to the patent filing if you want to go through it, and discuss different aspects of it. While it may discuss a separate and different content scoring algorithm other than an update to Panda, the timing is interesting, and it’s worth thinking about.
