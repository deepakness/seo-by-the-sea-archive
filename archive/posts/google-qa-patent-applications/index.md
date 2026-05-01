---
title: "Google Q&A Patent Applications?"
source_url: "https://www.seobythesea.com/2007/01/google-qa-patent-applications/"
slug: "google-qa-patent-applications"
date_published: "2007-01-03T13:18:00+00:00"
date_modified: "2018-07-12T13:04:08+00:00"
author: "Bill Slawski"
---

Depending upon how you may phrase a query, Google will sometimes jump into a Q&A (question and answer) mode. This is described on one of Google’s help pages:


> Want to know the population of Japan? What currency is used in Algeria? The birthplace of Bono? Hit us with a fact-based question or query (like “population of Japan”) by typing it into the Google search box. We’ll search the web and display the answer at the top of your search results page. We also link to our source for this information so that you can learn even more.
>
> – [Google Web Search Features](https://support.google.com/websearch/#topic=3378866)

The same feature is available through a moble phone service from Google, a little more straightforward in that you know you are only in Q&A mode when asking a question:


> Google Q&A is a feature that enables you to use Google SMS to get quick answers to straightforward questions. Need to know the population of Japan, or the author of “Hamlet”? Send any fact-based question or query through Google SMS, and we’ll scour our resources to find the answer for you (and let you know where we found it so you can learn more).
>
> – Google on your mobile device – Google Q&A

Of course, as I read through the information available about Google Q&A, and tried to understand when the web service might answer questions rather than treating the query as a phrase or collection of keywords to be searched for, I found myself asking how this works, and what triggers it. There’s an interactive demo of the Google SMS for Google Q&A, and one of the Google help pages tries to explain How are these different than web-result snippets?

If you have a web site that is largely informational, it wouldn’t be a bad thing to be one of the sources for this service. So, how does Google choose resources, and capture information to show people?

A couple of patent applications from Google, one from last week, start answering some of those question. Last week’s document is:

[Learning facts from semi-structured text](https://patents.google.com/patent/US20060293879A1/en)
Invented by Shubin Zhao and Jonathan T. Betz
US Patent Application 20060293879
Published December 28, 2006

Abstract


> A method and system of learning, or bootstrapping, facts from semi-structured text is described. Starting with a set of seed facts associated with an object, documents associated with the object are identified. The identified documents are checked to determine if each has at least a first predefined number of seed facts. If a document does have at least a first predefined number of seed facts, a contextual pattern associated with the seed facts is identified and other instances of content in the document matching the contextual pattern are identified. If the document includes at least a second predefined number of the other instances of content matching the contextual pattern, then facts may be extracted from the other instances.

**Related and Unpublished Patent Applications**

Last week’s patent application appears to be one of a number of related documents that cover this topic, and it lists some others:

1. Corroborating Facts Extracted from Multiple Sources,
2. Selecting the Best Answer to a Fact Query from Among a Set of Potential Answers,
3. [User Interface for Facts Query Engine with Snippets from Information Sources that Include Query Terms and Answer Terms ,](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060224582%22.PGNR.&OS=DN/20060224582&RS=DN/20060224582)
4. Merging Objects in a Facts Database,
5. System for Ensuring the Internal Consistency of a Fact Repository, and;
6. Identifying the Unifying Subject of a Set of Facts.

Of those, only the one that I’ve linked to has been published at the US Patent and Trademark Office so far, and that one lists some of those aand couple of additional related patent applications:

1. Bloom Filters for Query Simulation
2. Supplementing Search Results with Information of Interest

It’s not easy to tell how many of those will move from being filed patent applications, to published patent applications, to granted patents. It’s just as difficult to tell how much of what they describe will actually be used by Google. But, I’ll likely be keeping an eye out for them. The concept of information extraction, as opposed to keyword matching is interesting, and provides an insight into another way that web pages and information may come before the eyes of searchers.

**Why Be Concerned About These?**

A couple of examples given early on in the introduction to the patent of the types of questions that a Q&A system might address:

what is the capital of Poland?
what is the birth date of George Washington?

If you run a web site that answers questions like that, you just might want to be the source of information that is presented to people who ask those questions. Especially since the search engine will provide a link back to your site as the source. Consider that the regular ranking processes of relevancy and link popularity might not be in place for these results, and that a Q&A result shows at the top of Google organic results if search engine considers a query to be phrased as a question.

A process of having factual information from your site extracted and stored in a fact database is described in this patent, but not in an extreme amount of detail. Still, it’s worth looking at if you are interested in being a source for information like that.

One concern listed in the patent filing is that this process, an automated one, may not find all of the information available, or may collect incorrect information.

One of the interesting aspects of it is that it focuses a lot on how facts are formatted, in a manner that isn’t too different from the key and value pairs that Google tells us it likes to see when [collecting business information](https://www.seobythesea.com/2006/09/googles-local-search-patent/) for local search, or when grabbing terms and definitions for [Google Definitions](https://www.seobythesea.com/2006/02/google-definitions/).

An example of what this process might be looking for on pages:


> For example, a seed value may be presented in a list of attributes and associated values that has the HTML markup: TABLE-US-00001 **Name:** Marilyn Monroe
>  **Born:** June 1, 1926
>  **Died:** August 5, 1962
> , where the “**” and “**” tags specify that the text between the tags is to be rendered bold and the “
> ” tags insert line breaks between consecutive entries in the list.

**The Importance of Formatting**

I’m not going to go into great detail about the process described in this patent application, but I’d recommend that you pay some attention to it, and keep an eye out for some of the related patent applications as they are published in the future to get an idea of what the search engine might do.

One important concept here is consistency in formatting your HTML. If you run a web site like the [internet movie database](https://www.imdb.com/) or some other site that is a repository of information, keep in mind that it’s important to capture and present that information in key-value pairs (referred to as attribute/value in this patent application) that make it easy for a search engine to extract it, that you remain consistent in the way your format that type of information across your pages. IMDB may not be the best example, but here’s a good one:

When I ask a question like [Where was Elvis Presley born?](https://www.google.com/search?hl=en&q=Where+was+Elvis+Presley+born%3F&btnG=Google+Search), the first answer I get in Google is obviously a Q&A Answer:

Elvis Presley — Place of Birth: Tupelo, Mississippi
According to http://www.who2.com/elvispresley.html

The who2.com pages contain a section of “vital stats” that contain information in a format that’s friendly to information extraction.

If you’ve gone through the effort of creating an informational resource on a subject or series of subjects, it’s possible that a little formatting may be the only thing standing between you and being the cited source for Google Q&A results. I find myself frightened by the thought that the Wikipedia folks could dominate Q&A results like that with a little more thought into consistent formatting of pages, and use of attribute/value pairs.
