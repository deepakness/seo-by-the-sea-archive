---
title: "Page Quality and WebSpam: Using Content Analysis to Detect Spam Pages"
source_url: "https://www.seobythesea.com/2006/08/page-quality-and-web-spam-using-content-analysis-to-detect-spam-pages/"
slug: "page-quality-and-web-spam-using-content-analysis-to-detect-spam-pages"
date_published: "2006-08-18T12:47:44+00:00"
date_modified: "2020-05-21T09:34:36+00:00"
author: "Bill Slawski"
---

A new patent application from Microsoft looks at content generated to spam search engines. Here’s the problem, as noted in the patent filing:


> In the best case, search engine optimizers help web site designers generate content that is well-structured, topical, and rich in relevant keywords or query terms. Unfortunately, some search engine optimizers go well beyond producing relevant pages: they try to boost the ratings of a web site by loading pages with a wide variety of popular query terms, whether relevant or not. In fact, some SEOs go one step further: Instead of manually creating pages that include unrelated but popular query terms, they machine-generate many such pages, each of which contains some monetizable keywords (i.e., keywords that have a high advertising value, such as the name of a pharmaceutical, credit cards, mortgages, etc.). Many small endorsements from these machine-generated pages result in sizable page rank for the target page. In a further escalation, SEOs have started to set up DNS servers that will resolve any hostname within their domain, and typically map it to a single IP address.
>
> Most if not all of the SEO-generated pages exist solely to mislead a search engine into directing traffic towards the “optimized” site; in other words, the SEO-generated pages are intended only for the search engine and are completely useless to human visitors.

I recognized this quote, which is taken from an interesting research paper from Microsoft, [Spam, Damn Spam, and Statistics: Using Statistical Analysis to Locate Spam Web Pages](https://www.microsoft.com/en-us/research/publication/spam-damn-spam-and-statistics-using-statistical-analysis-to-locate-spam-web-pages/). If you are interested in how search engines are attempting to fight web spam, it’s a “must-read” paper.

It appears that this patent is an attempt to take some of the research reported upon in that paper, and define a way to use it in a process that can help the search engine fight webspam. But, it isn’t a rehashing of that paper, and it covers some new territory. Definitely worth a look, especially if you are concerned that your pages may be mistaken for spam by the search engines.

[Using content analysis to detect spam web pages](https://patents.google.com/patent/US20060184500A1/en)
Inventors: Marc Alexander Najork, Dennis Craig Fetterly, Mark Steven Manasse, and Alexandros Ntoulas
Assigned to Microsoft
US Patent Application 20060184500
Published August 17, 2006
Filed: February 11, 2005

Abstract


> Evaluating content includes receiving content, analyzing the content for webspam using a content-based identification technique, and classifying the content according to the analysis. An index of analyzed contents may be created. A system for evaluating content includes a storage device configured to store data and a processor configured to analyze content using content-based identification techniques to determine whether webspam is present.

The patent describes some measures that the authors may be looking at when viewing the content of a page to determine whether or not the page is intended only to spam a search engine. The authors note that other steps and other metrics may also be involved.

**Classification of Content**

Metrics about pages are collected and fed into a classifier program that uses weighted scores to distinguish good pages from bad ones. The classifier program starts with an initial data set, called the training set, which is divided into positive and negative examples. That training set looks at all of the features of the positive and negative examples in combination, in an attempt to separate the positive examples (non-spam) from the negative examples (spam).

Using a classifier like this may mean that once the dividing line is made, additional data may be looked at to see if it can be used to distinguish good pages from bad ones. We know from the “Spam, Damn Spam, and Statistics” paper that Microsoft is also looking at other features of pages and sites.

According to the patent filing, some classes of spam web pages can be detected by analyzing the content of the page and looking for “unusual” properties, such as:

- The page contains unusually many words,
- The page contains unusually many words within a title HTML element (<title>here!</title>)
- The ratio of HTML markup to visible text is low,
- The page contains an unusually large number of very long or very short words,
- The page contains repetitive content,
- The page contains unusually few common words (“stop words”), or
- The page contains a larger-than-expected number of popular n-grams (sequences of n words)

These metrics or filters can be input into a classifier for deciding whether or not a page is spam or determining the likelihood or probability that the page is spam, by comparing the outputs of one or more of the metrics, alone or in combination, to one or more thresholds.

The patent mentions an example reference book which describes the existing body of work in machine learning: [Pattern Classification](http://web.archive.org/web/20110715184521/http://rii.ricoh.com/~stork/DHS.html) (my link doesn’t go to the book itself, but rather to a page from one of the authors, which has a great series of PowerPoint slides about the material in the book).

**Identifying Web Spam on the Fly**

The patent describes methods for finding spam pages during web crawls and or evaluating content on the fly.

Here’s a summary of the process for identifying spam through content, on the fly, from the patent application:

1. Search engine receives user input to begin a particular query,
2. Search engine performs the query,
3. Search engine receives the query results,
4. Search engine (or processor or classifier, for example) evaluates the results using various metrics,
5. After evaluation the search engine analyzes the evaluations to determine what contents are likely web spam.
6. From that analysis, the search engine may identify web pages as web spam and may record or store the contents in an index for future queries,
7. Query results are then output to the searcher.
8. Detected web spam could excluded from a search engine index, given a low search ranking, or treated in a manner so that user queries are not affected or populated with web spam, which could lead to more relevant search results, or at least the omission of some irrelevant results.

**Indications of Web Spam?**

The list above of some “unusual properties” that may be looked for is examined in greater detail within the patent application. The following are paraphrases of some of those and some additional metrics. I’d recommend looking at the patent for their more detailed treatment of these. Keep in mind that many are just one factor to be looked at in conjunction with the others before a determination is made that a page is intended to spam a search engine.

1. As the number of words on a page increases, the probability of spam being present on that page increases.

2. As the number of words in the title of a web page increases, the probability of webspam being present dramatically increases.

3. As the visible content of the page increases, the probability of webspam being present increases to a point and then decreases dramatically.

4. As the fraction of anchor words increases (as a percentage of all the words on a page), the probability of webspam increases.

5. Webspam is more likely to occur in web pages having very long or very short words, so an average word length metric can be used to identify spam pages.

6. As the zipRatio of a page increases beyond a threshold, the probability of webspam being present on web pages increases dramatically. A zip ratio is calculated by dividing the size (in bytes) of uncompressed visible text (such as text other than HTML markup) by the size (in bytes) of compressed visible text.

7. As a percentage (and distribution) of stop words (the most commonly used words in a search engine corpus) used on a page decreases, the probability of webspam increases.


> For example, the 100 most common words in a very large corpus representative of the English language is determined, e.g., by examining all the English web pages downloaded by the crawler (the same applies to other languages as well). It is then determined what fraction of the words on a single web page is drawn from the 100 most frequent words in the entire corpus. For example, words like “the”, “a”, “from”, etc. are among the 100 most frequent English words. If a web page had no occurrences of any of these words, but 100 occurrences of “echidna” (a spiny anteater and a rare word), it is determined that the page has 0% overlap with the top-100 words.

8. Pages are also reviewed for the existence of commonly occurring sequences of consecutive words (n-grams), their position within a document, and commonly occurring words that may appear after those sequences. Probabilities of those are calculated from documents on the web, and thresholds are defined which could be used to determine whether or not a page should be identified as web spam.
