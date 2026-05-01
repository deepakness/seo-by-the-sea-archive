---
title: "Yahoo Patents Anchor Text Relevance in Search Indexing"
source_url: "https://www.seobythesea.com/2008/07/yahoo-patents-anchor-text-relevance-in-search-indexing/"
slug: "yahoo-patents-anchor-text-relevance-in-search-indexing"
date_published: "2008-07-10T09:00:25+00:00"
date_modified: "2020-11-03T16:17:13+00:00"
author: "Bill Slawski"
---

Yahoo was granted a patent this week which describes how anchor text in links may be used to increase the relevancy ranking of a page pointed to by that anchor text. The patent was originally filed in 2002, and it discusses how anchor text might work while naming the Altavista search engine as a possible place where the methods it describes might be implemented. Yahoo acquired the company that owned Altavista, and the technology is theirs.

While the patent is fairly old, it provides some details about how anchor text might be used by a search engine in a search index that may not be widely known.

It’s fairly common knowledge that the major commercial search engines pay attention to the anchor text in links pointing to pages, and may consider a page to be even more relevant for a query term if the term not only appears on a page but also appears in the linked anchor text pointing to a page. Some pages may even be determined to be relevant for words that they don’t contain, but which show up in links to those pages.

However, we don’t know much about how much weight anchor text might be given when a search engine indexes a page, or if and how some anchor text might be determined to be more important than other anchor text.

We’ve even seen lately some discussion about experiments with two links on the same page, using different anchor text, pointing to the same page passing along relevance to that second page with both links – See [Google passes second link’s anchor text](https://a2006.seo-theory.com/google-passes-second-links-anchor-text/).

**How Anchor Text is Broken into Tokens to be Weighed**

The process is fairly simple. It starts with a search engine collecting a list of pages that have hyperlinks pointing to a specific page.

The anchor text from those links is retrieved and may be broken down into one or more tokens. For example, the anchor text pointing to a page might be “Best Louis Armstrong site.”

That anchor text might be broken down into the following tokens:

- Best Louis Armstrong site
- Louis Armstrong
- Louis
- Armstrong
- Best
- Best Louis
- Best Armstrong
- Best site

Weight might be calculated for each of those tokens, and if the weight for any token exceeds a certain threshold weight, the page it points towards might be indexed under that token.

The weight for tokens or words and sequences of words, found in the anchor text is calculated using a formula that looks at how often each token can be found in anchor text pointing to that particular page, and how often the token appears in the search engine index.

***Example***

A web page to be indexed has several other pages linking to it.

The page is about the musician, Louis Armstrong.

The first linking page uses the anchor text “Louis.”

The second linking page uses the anchor text “Louis Armstrong.”

The third linking page uses the anchor text “best Louis Armstrong site.”

The fourth linking page uses the anchor text “Satchmo.”

The page to be indexed is highly relevant to the subject “Louis Armstrong” but it’s possible that conventional ranking methods may not rank that page as highly as it might deserve because the precise query terms may not appear on the page as frequently as in other, less relevant, pages. Or there may be many more sites that link to other less relevant pages about “Louis Armstrong”.

Each of the anchor texts pointing to the page may be broken down into tokens like my example for “Best Louis Armstrong site” was above.

When several tokens are pointing to the same page, it might be helpful to see which of the tokens are the most important and assign weights to those tokens.

This might be done by determining the weight of each token compared to the weight of all tokens pointing to the same page.

Some specific importance criteria might be used in the calculation of the weight of a token.

The greatest importance might be assigned to words that appear the least frequently in the search index, based on the idea that those words are more specifically related to the concept that a user would attempt to express.

A token that appears more frequently in anchor text pointing to a page could be given a higher weight.

Tokens that appear very frequently in the search index, such as “site” or “best”, might be discounted because they do not have specific importance in the context of the subject document.

Every token is assigned a weight and those tokens having a weight that is less than a threshold weight are discounted.

Tokens that are not discounted are counted as being relevant for the page being indexed, with the tokens having the greatest weights being considered the most relevant.

The Yahoo Patent is:

[Method for ranking web page search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,398,461.PN.&OS=pn/7,398,461&RS=PN/7,398,461)
Invented by Andrei Z. Broder and Farzin Maghoul
Assigned to Overture Services, Inc.
US Patent 7,398,461
Granted July 8, 2008
Filed: January 24, 2002

**Anchor Text Relevance Conclusion**

While this patent seems to have been applied for almost a lifetime ago, it provides some insights into the importance of anchor text in ranking pages that anchor text points towards. It also provides some insight into how much weight different words and phrases within anchor text might have when determining the relevancy relationship between those words and a page linked to with them.

Another patent from Yahoo was also granted this week on How Network Usage traffic can be used to in ranking web pages, and in assigning weights to links and link text based upon the frequency of use of those links. I’ve written about that over on the SEM Clubhouse, in How A Search Engine May Use Web Traffic Logs in Ranking Web Pages.
