---
title: "Looking at Final Landing Pages for Suggestions for Query Revisions"
source_url: "https://www.seobythesea.com/2007/07/looking-at-users-final-landing-pages-to-develop-query-revisions/"
slug: "looking-at-users-final-landing-pages-to-develop-query-revisions"
date_published: "2007-07-24T01:11:38+00:00"
date_modified: "2019-08-24T11:45:25+00:00"
author: "Bill Slawski"
---

## Query Revisions Suggestions Can Be Based Upon Landing Pages

It’s getting pretty common for search engines to suggest query revisions when someone does a search these days.

One common [query revision strategy](https://www.seobythesea.com/2006/10/google-query-revision-strategies/) is to look at the query sessions from previous searchers who used the same query, and see how they might have revised their queries, including spelling corrections, or adding and deleting words in subsequent queries during the same session.

A paper from Microsoft researchers, [Query Suggestion based on User Landing Pages](http://web.archive.org/web/20160429053629/http://research.microsoft.com/en-us/um/people/ryenw/papers/cucerzansigir2007.pdf), takes that approach, and considers using it in conjunction with another query revisions approach that looks at what they call “final landing pages.”


> This poster investigates a novel query suggestion technique that selects query refinements through a combination of many users’ post-query navigation patterns and the query logs of a large search engine. We compare this technique, which uses the queries that retrieve in the top-ranked search results places where searchers end up after post-query browsing (i.e., the landing pages), with an approach based on query refinements from user search sessions extracted from query logs.

Here’s how those landing pages are found from Web activity logs:

1) Following the submission of a query at Google or Yahoo or Live Search, the sequence of pages viewed from clicks starting at those queries are viewed.

2) Those sequences of pages are referred to as search trails, and they terminate when other actions are taken, such as:

- New search is started;
- An activity indicating a search is completed happens – a return to a homepage, the checking of email, a visit to a service like MySpace, etc.;
- A page is viewed for a long period of time without any activity;
- The browser window is closed.

When one of those actions happens, it may be a sign that the searcher found what he or she was looking for, and the last page viewed is considered the landing page. Note that a query revision ends one of these search trails.

Query revisions are then calculated by looking through the search engine’s logs to find other query terms that those landing pages rank highly for (a top ten result).


## Query Revisions Conclusion

It’s easy to see how this strategy for finding query refinements might locate a different range of suggested searches than looking at query revisions that people type into a search box.

Combining both approaches to generate suggested query revisions makes sense – since it both offers a wider range of possible suggestions and examines user behavior where it may appear that a searcher is satisfied with the results that they viewed.
