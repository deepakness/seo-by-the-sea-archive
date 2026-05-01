---
title: "Big Data at Google"
source_url: "https://www.seobythesea.com/2012/02/big-data-at-google/"
slug: "big-data-at-google"
date_published: "2012-02-11T14:34:25+00:00"
date_modified: "2020-06-19T14:36:49+00:00"
author: "Bill Slawski"
---

According to Google’s Director of Research, Peter Norvig, if you look at [Google Trends](https://trends.google.com/trends/) for trends related to “full moon” or “ice cream”, you’ll see that Google searches for those terms imitate actual physical trends in the world. With a very large number of queries performed for those terms, searches for “full moon” peak every 28 days. Searches for “ice cream” peak every summer, 365 days apart. Large amounts of data make interesting things possible.

If you’re interested in how search engines work, and how large amounts of data can help them do what they do more effectively, it’s highly recommended that you read the paper [The Unreasonable Effectiveness of Data](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/35179.pdf) (pdf), written by Alon Halevy, Peter Norvig, and Fernando Pereira, from Google. Even more highly recommended is a presentation from Peter Norvig of the same name from a Distinguished Lecture Series at the University of British Columbia last fall, which sadly has less than a 1,000 views at YouTube presently:

In the presentation, Norvig uses mostly plain language and great examples to describe many areas where more data overcomes problems with algorithms such as:

Word Sense Disambiguation – Large data can help you understand what the meaning of a word might be when a word that may have more than one meaning appears in a document on the Web.

Word Segmentation – Not as helpful in languages like English as it is in languages such as Chinese, but can be helpful in the world of domain names, where there aren’t usually separations between words.

Statistical Machine Translation – As Norvig noted in the presentation, “We’ve been able to build models for languages that no one on the team speaks.”

There are several papers that cite the *Unreasonable Effectiveness of Data* paper, and I found a couple that might be of interest to people who want more examples of how that might be applied to search and to search engines. These are worth a look:

[On the Value of Page-Level Interactions in Web Search](https://jeffhuang.com/Final_PageLevelInteractions_HCIR11.pdf) (pdf)

[Exploring Web Scale Language Models for Search Query Processing](https://clgiles.ist.psu.edu/pubs/WWW2010-web-scale-language.pdf) (pdf)
