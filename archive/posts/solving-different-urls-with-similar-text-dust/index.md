---
title: "Duplicate Pages - Solving Different URLs with Similar Text (DUST)"
source_url: "https://www.seobythesea.com/2006/09/solving-different-urls-with-similar-text-dust/"
slug: "solving-different-urls-with-similar-text-dust"
date_published: "2006-09-04T16:35:50+00:00"
date_modified: "2020-07-06T10:45:18+00:00"
author: "Bill Slawski"
---

## Duplicate Pages at Different URLs

There are sites where (substantially) the same page may be found under different Uniform Resource Locators (URLs) or addresses.

For example:

- http://www.google.com/news = http://news.google.com/
- http://www.nytimes.com = http://nytimes.com

When this type of Duplicate Pages happen, there can be some negative results from the perspectives of both search engines and site owners, such as:

- Search engines have to spend time trying to visit each version of the page
- Search engines may treat each page as different but duplicate pages.

It’s recommended that this type of duplicate pages under different addresses be avoided, if at all possible. Site owners can try to reduce or limit the possibility that these different URLs with the same (or very similar) content appears on their sites. What might search engines do to limit or stop this kind of problem?


## A Possible Solution for Duplicate Pages at Search Engines?

My examples are simple ones, but there are more complex situations where multiple addresses may exist for the same page. An algorithm to help search engines understand when the same (or a very similar) page is being exhibited under different URLs was the focus of a poster presented at the WWW2006 Conference this past May.

The extended abstract of that poster, [Do not Crawl in the DUST: Different URLs with Similar Text](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35210.pdf) looks at some of the more complex versions and describes an algorithm that might help search engines recognize those duplicate pages before visiting them so that only one is crawled and possibly indexed. The authors are Uri Schonfeld, Ziv Bar-Yossef, and Idit Keidar. (Note: Ziv Bar-Yossef joined Google last month.)

Here’s a snippet from the introductory paragraphs to that document:


> Many web sites define links, redirections, or aliases, such as allowing the tilde symbol (“~”) to replace a string like “/people”, or “/users”. Some sites allow different conventions for file extensions- “.htm” and “.html”; others allow for multiple default index file names – “index.html” and “tex2html12”. A single web server often has multiple DNS names, and any can be typed in the URL. As the above examples illustrate, DUST is typically not random, but rather stems from some general rules, which we call DUST rules, such as “~” $ \rightarrow$ “/people”, or “/default.html” at the end of the URL can be omitted.
>
> Moreover, DUST rules are typically not universal. Many are artifacts of a particular web server implementation. For example, URLs of dynamically generated pages often include parameters; which parameters impact the page’s content is up to the software that generates the pages. Some sites use their conventions; for example, a forum site we studied allows accessing story number “num” on its site both via the URL “http://domain/story?id=num” and via “http://domain/story_num”. In this paper, we focus on detecting DUST rules within a given web site. We are not aware of any previous work tackling this problem.

Other pages that might be determined to duplicate pages are ones where the main content is available at one URL, and the same content with some additional information (such as blog comments) can be seen at another URL.


## Identifying Duplicate Pages (DUST)

The poster notes that search engines do attempt to identify DUST with some simple and some complex approaches, for example:

1. “http://” may be added to links found during crawling, where it is missing.
2. Trailing slashes used in links (http://www.example.com/) may be removed.
3. Hash-based summaries of page content (shingles) may be compared after pages are fetched.

What the paper introduces is an algorithm, that the authors refer to as DustBuster, which looks individual sites, and tries to see if rules are being followed on the site where similar content is being shown under different URLs.


> For example, in the site where “story?id=” can be replaced by “story_”, we are likely to see in the URL list many different pairs of URLs that differ only in this substring; we say that such a pair of URLs is an instance of “story?id=” and “story_”. The set of all instances of a rule is called the rule’s support. Our first attempt to uncover DUST is therefore to seek rules that have large support.

It also tries to understand possible exceptions to those rules. The poster defines those in more detail, and it’s worth trying to understand the examples, exceptions, and approaches that they use.


## Letting the Search Engine Decide Which URL is Good

There’s one problem that I have with the approach, and that is that the algorithm decides which pages to index and keep, and which to avoid – and not fetch for indexing.

This could be a problem, for instance, for a news story page which is available at different URLs, with one displaying comments and the other not showing them. Or a product page, which might be shown twice – once with, and once without user reviews. Or a set of dynamic pages where some small portion of the page changes in response to which link is clicked upon.

But those pages might have difficulties being indexed anyway or filtered during the serving of a page, if a shingling approach is used, and determines that they are the same or substantially duplicate pages.

Either way, if an algorithm like DustBuster were used, or another approach, it’s still the search engine deciding which of the similar pages it might include in its index, and which it wouldn’t. If you can avoid DUST, it’s not a bad idea to try.

Last Updated May 26, 2019
