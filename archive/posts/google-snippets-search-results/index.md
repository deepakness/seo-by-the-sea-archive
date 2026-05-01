---
title: "How Google Might Generate Search Results Snippets"
source_url: "https://www.seobythesea.com/2013/02/google-snippets-search-results/"
slug: "google-snippets-search-results"
date_published: "2013-02-25T23:42:14+00:00"
date_modified: "2020-01-19T16:00:28+00:00"
author: "Bill Slawski"
---

## Search Results Snippets

When you perform a search at Google, and you have a set of search results in front of you, how do you decide which result to click upon? How do you judge the page titles, snippets, and URLs that you see? How does Google decide what to show you?

A little more than a year ago, Google Webmaster Trends Analyst Pierre Far wrote on the Google Webmaster Central Blog a post titled [Better page titles in search results](https://webmasters.googleblog.com/2012/01/better-page-titles-in-search-results.html). There he told us that Google might sometimes rewrite titles for web pages when showing them in search result snippets. The post also told us that Google might do some changing of titles when those had generic titles such as “home”, or no title at all, or:


> We use many signals to decide which title to show to users, primarily the <title> tag if the webmaster specified one. But for some pages, a single title might not be the best one to show for all queries, and so we have algorithms that generate alternative titles to make it easier for our users to recognize relevant pages.

Before we consider how Google might decide when and how to change page titles (in a follow-up post to this one), there’s another question about search results snippets that needs some exploration. Google often decides upon the search snippets that it might show based upon the query terms that a page is being found for.

**How does Google decide what to show in search results snippets when it selects text for search results snippets from the content of pages?**

There are times when Google will use the meta description created for a page as a search results snippet. Google may otherwise pull a sentence or some information from the content of a page instead to display to a searcher. Chances are, if a page has a meta description that is well written, includes within it the keyword terms or phrases the page is optimized for and is roughly around 150 characters or so, Google will choose the meta description to display as a search results snippet. But not always.

Sometimes a page ranks well enough to show in search results for words other than the terms or phrases that a page is optimized for, and those words aren’t all contained within the meta description for the page. Sometimes a page’s meta description isn’t well written and doesn’t include keywords the page is optimized for either. A meta description for a page may be extremely short and not very descriptive, which would make them poor choices as search results snippets. Sometimes a meta description might be identical to every other meta description on a site. Some pages don’t even have meta descriptions. Google could even choose to use content from a page even if the words from a query appear in a meta description.

Last March, Google was granted a patent that provides some hints about when Google might choose content to display from pages for search results snippets, and where it might choose text from.

If the query terms or phrases that someone searches with are words that appear on pages that have abstracts or lengthy introductions, Google might decide to pull content from the start of a page if the query terms are present, and use that content in search snippets.

If query terms or phrases being searched for tend to appear in ranking pages that often have conclusions at the end of a page, Google might choose to pull content to display from near the end of a page. That’s what the search results snippets patent tells us:

[Generation of document snippets based on queries and search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08145617&OS=PN/08145617&RS=PN/08145617)
Invented by Alexandre A. Verstak and Anurag Acharya
Assigned to Google
US Patent 8,145,617
Granted March 27, 2012
Filed: November 18, 2005

Abstract


> A document retrieval system generates snippets of documents for display as part of a user interface screen with search results. The snippet may be generated based on the type of query or the location of the query terms in the document. Different snippet generation algorithms may be used depending on the query type. Alternatively, snippets may be generated based on an analysis of the location of the query terms in the document.

We don’t know for certain if the approach in this patent is one that Google had adopted, or if they even used it at one point, and moved on to something new. But it’s worth digging through the patent and seeing how they might make that choice.

**Multiple Search Snippet Generation Algorithms**

The patent tells us that Google might decide which snippets algorithm to use to decide upon search results snippets based upon its perception of a query.

Google might look at the length of paragraphs that include the query terms and the distance of a paragraph from either the beginning of a document or the end of the document.

Some documents on the Web might have a lot of metadata associated with them, such as scholarly literature that might include “names of authors, title, publisher, publication date, publication location, citation information, article identifiers such as Digital Object Identifier, PubMed Identifier, SICI, ISBN, and the like, network location (e.g., URL), number of references, number of citations, language, and the like.”

Other documents might have considerably fewer metadata, such as a blog or an e-commerce page.

There are potentially a couple of different types of rules that might be used to decide upon search results snippets – location-based rules, and language-dependent rules.

**Location Based Rules**

These rules might be used to generate snippets based on the location of the query terms in page. A paragraph or a portion of a paragraph might be chosen as search results snippets based on the length and distance of the paragraph from the start or end of pages.

Every paragraph that includes the query terms may be given a score based on the length of the paragraph and the distance of the paragraph from a predetermined location in the document, such as the beginning or the end of the document. The beginning of the page could be used in the types of documents that “include abstracts, executive summaries or comprehensive introductions” at the start of those documents.

The ends of pages might be used for other types of pages that “include a conclusion or summarization” at their end.

**Language Dependent Rules**

Some language rules might be used in addition to choosing snippets.

Examples of language dependent rules:

- How much of the paragraph are punctuation characters
- Whether the paragraph ends with punctuation or proposition
- Whether any of the words in the paragraph is overly long
- The number of bold or italicized words in the paragraph

Some paragraphs (in part or full) that include all of the query terms might rank poorly as choices for snippets for other reasons. These paragraphs might end up with a score of 0 because they:

- Are shorter than a certain threshold
- Are mostly punctuation, or have punctuation aboce a certain threshold
- Fail language specific rules
- Contain italicized or bold words above a certain threshold
- Are too far from the start or the end of a page, based upon query type (a query that tends to show result pages that include abstracts, or one that tends to have results with conclusions)

Search results snippets that are chosen might be from the paragraph with the highest score on a page, or the “first paragraph to score above a threshold amount.”

A snippet might be chosen from that paragraph, and it might be:

- A predetermined number of words of the selected paragraph, such as the first predetermined number of words of the paragraph (e.g., 25 words)
- The first one or more sentences of the paragraph (e.g., 3 sentences)
- A middle portion (e.g., 50 words) containing at least one of the query terms
- The entire paragraph

**Conclusion**

I started off this post with a mention that Google may sometimes change titles or snippets for pages in search results when they believed that doing so might result in more clicks through to a page when it’s shown in search results. We will get to that in the next post or two. What’s important here is that Google does have a process in place to decide where it might take text from when it shows a snippet that isn’t from the meta description on a page.

Google might choose a snippet from the paragraphs weighted from the top of a page if the search results pages returned for the query tend to be pages that that include abstracts and metadata such as an author’s name, a publisher’s name, and so on. This could be true on a query for the name of a scholar, for instance.

Google might choose a snippet starting from paragraphs at the bottom of the page if the search results pages returned for the query are pages that often end with conclusions.

Other signals, such as the lengths of paragraphs, amount of punctuation, bold and italics, and more can also influence the choice Google makes.

Why is the decision as to what search results snippets to show so important?

The snippet for a page in search results may determine whether or not someone might click through from a search results page. If you rank highly with a page, but no one chooses your page from search results, that would be sad.

Last Updated June 8, 2019.
