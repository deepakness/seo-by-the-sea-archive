---
title: "Google Scoring Gibberish Content to Demote Pages in Rankings?"
source_url: "https://www.seobythesea.com/2013/10/google-gibberish-content-to-demote-pages/"
slug: "google-gibberish-content-to-demote-pages"
date_published: "2013-10-09T20:37:41+00:00"
date_modified: "2019-06-08T11:34:26+00:00"
author: "Bill Slawski"
---

This week, Google was awarded a patent that describes how they might score content on how much gibberish content it might contain, which could then be used to demote pages in search results.

That gibberish content refers to content that might be representative of spam content.

The patent defines gibberish content on web pages as pages that might contain a number of high value keywords, but might have been generated through:

- Using low-cost untrained labor (from places like Mechanical Turk)
- Scraping content and modifying and splicing it randomly
- Translating from a different language

Gibberish content also tends to include text sequences that are unlikely to represent natural language text strings that often appear in conversational syntax, or that might not be in text strings that might not be structured in conversational syntax, typically occur in resources such as web documents.

The patent tells us that spammers might generate revenue from the traffic to gibberish content web pages by including:

- Advertisements
- Pay-per-click links
- Affiliate programs

It also tells us that since those pages were created “using high-value keywords without context, the web page typically does not provide any useful information to a user.”

This gibberish content identification process involves:

- Creating language models for pages on the Web, and applying those models to the text of pages.
- Generating a language model score for the resource including applying a language model to the text content of the resource
- Generating a query stuffing score for the reference, the query stuffing score being a function of term frequency in the resource content and a query index
- Calculating a gibberish score for the resource using the language model score and the query stuffing score
- Using the calculated gibberish score to determine whether to modify a ranking score of the resource

These gibberish content scores might be created for each page based upon multiple queries that are contained on those pages.

The pages may be ranked initially by information retrieval relevance scores and importance scores such as PageRank.

Pages may then be re-ranked or demoted based upon a statistical review where content on those pages is broken down into different n-grams, such as 5 word long n-grams that would break the content of a page into consecutive groupings of the words found on a page, and create statistics about those groupings and compare them to other n-gram groupings on other pages on the Web. An example n-gram analysis of a well-known phrase using 5 words:

The quick brown fox jumps
quick brown fox jumps over
brown fox jumps over the
fox jumps over the lazy
jumps over the lazy dog

The statistical patterns found in a language model can be used to identify languages, to apply machine translation, and to do optical character recognition.

The gibberish content patent is:

[Identifying gibberish content in resources](https://patents.google.com/patent/US8554769B1/en)
Invented by Shashidhar A. Thakur, Sushrut Karanjkar, Pavel Levin, and Thorsten Brants
Assigned to Google
US Patent 8,554,769
Granted October 8, 2013
Filed: June 17, 2009

Abstract


> This specification describes technologies relating to providing search results.
>
> One aspect of the subject matter described in this specification can be embodied in methods that include the actions of receiving a network resource, the network resource including text content; generating a language model score for the resource including applying a language model to the text content of the resource; generating a query stuffing score for the reference, the query stuffing score being a function of term frequency in the resource content and a query index; calculating a gibberish score for the resource using the language model score and the query stuffing score; and using the calculated gibberish score to determine whether to modify a ranking score of the resource.

It’s not a surprise that Google might use natural language statistical models like the one described here to identify content that they might consider low-quality content. Having a technical name (gibberish content) to refer to that kind of content is helpful, as well as a patent to point others to when describing the dangers of creating low-quality content through one approach or another.

Last updated June 8, 2019.
