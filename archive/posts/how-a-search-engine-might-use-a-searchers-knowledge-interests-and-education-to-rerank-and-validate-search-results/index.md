---
title: "How a Search Engine Might Use a Searcher's Knowledge, Interests, and Education to Rerank and Validate Search Results"
source_url: "https://www.seobythesea.com/2008/06/how-a-search-engine-might-use-a-searchers-knowledge-interests-and-education-to-rerank-and-validate-search-results/"
slug: "how-a-search-engine-might-use-a-searchers-knowledge-interests-and-education-to-rerank-and-validate-search-results"
date_published: "2008-06-16T09:50:08+00:00"
date_modified: "2018-07-12T18:37:35+00:00"
author: "Bill Slawski"
---

The amount of pages on the Web that a search engine could try to index is extremely large, and the approaches that search engines attempt to use to index and rank those pages is mostly an automated effort, but that doesn’t mean that the search engines don’t have people take a look at search results, and try to gauge how relevant their automated results might be.

A search engine typically locates web pages that contain the keywords entered by a searcher within a search box. The order that those results appear are based upon a number of algorithms used by search engines which look at various factors, such as: the frequency and number of entered keywords that are within each page and the position of the entered keywords within each page.

An example might be a first page that has a keyword located in the title or near the top of the page ranking higher than a second page that has a keyword in a footer or near the bottom of such second page. That first page might be presented to a searcher before the second page because of the location of the keyword.

While this automated approach might be satisfactory to some searchers, other searchers might find rankings of pages to be inadequate or irrelevant to their needs.

How might a search engine verify page ranking results of a search algorithm with respect to the specific needs or characteristics of specific groups of users?

A recent patent application from Yahoo explores the topic, and it wouldn’t be too much of a surprise of the other major search engines employed some processes of their own to do something similar. In fact, a set of [Quality Guidelines](https://seo.mauriziopetrone.it/quality-rating-la-guida-di-google-svelata/) (pdf) were uncovered from Google, which provides instructions to people who manually review the pages that appear in search results from Google.

**Search Engine Quality Raters**

Yahoo’s patent filing appears to indicate that they may have a similar approach to Google in reviewing the quality of their search results. Since Google recruits quality reviewers online, I looked around to see if I could find any classifieds for reviewers from Yahoo. I did find a classified ad for someone who might work as a “Search Quality Analyst” at Yahoo. The ad described some of what such an analyst might do at Yahoo’s Santa Monica Office:


> The successful candidate will contribute to Yahoo’s search results quality measurement and anti-spam efforts by:
>
> – Participating in several relevance tests designed to measure data quality across Yahoo’s web search product line.
>  – Training and mentoring team members.
>  – Receiving and administering feedback.
>  – Identifying, problem solving, and/or clearly communicating issues or problems.
>  – Coordinating resources to meet various relevance testing objectives.
>  – Building training sets to support the development of automated classifiers.
>  – Analyzing user session data to understand query intent and user behaviors.
>  – Contributing to the development of web spam detection methods.
>  – Performing other web search data QA tasks as assigned.

A somewhat similar, though less detailed ad at Craig’s list for a “Search Quality Analyst,” might or might not be from Yahoo. The Santa Monica location, and the description of the company involved does make it sound like it might be from Yahoo. That ad was looking for someone to:


> – Perform web search result review and evaluation tasks as assigned
>  – Review search results and grade the results based on guidelines provided by instructors

Google does offer part time “quality rater” positions that one can telecommute to, and it’s possible that Yahoo may too.

But, it’s also possible that instead of specifically hiring people to act as quality reviewers, Yahoo may be relying upon information entered by ordinary searchers about their interests and knowledge and educational backgrounds, and their selection of web pages to review the quality of Yahoo search results.

**Yahoo’s Quality Ratings**

While we have a sense of what Quality Reviewers might look at when rating sites from Google’s handbook, we don’t know much about what Google looks for in the people they hire to rate web sites. The Google ad for a “quality rater” tells us that they are looking for people who meet certain requirements:


> The ideal candidate would encompass the following qualities:
>
> – In depth, up-to-date familiarity with English-speaking web culture and media.
>  – If you have knowledge of other languages cultures, please indicate this on your resume.
>  – Broad ranges of interests.
>  – Strong ability to read and write in the English language.
>  – Excellent web research skills and analytical abilities.
>  – Excellent written communication skills.
>
> If you have these qualities, you may be exactly what we’re looking for!
>
> Other requirements include the following:
>
> – Bachelor’s degree or equivalent.
>  – A high-speed internet connection.
>  – Valid U.S. or Canadian work authorization.

The Yahoo patent throws an interesting twist into the concept of quality raters of search results. It doesn’t involve the hiring of quality reviewers, but rather takes advantage of information that it may learn about searchers to see which pages they select in search results, and compare what they choose to the results shown in response to searches for specific queries.

They tell us in the patent filing that they may rank “users’ knowledge and/or interest in specific categories” and also rank those people based upon “education level and field.”

The user rankings may influence their ratings for search results generated for particular search terms.

**Example of Raters’ Rankings used in Quality Reviews**

Two different searchers look at search results for the term “Vista”, and receive the same search results x, y, and z.

The first searcher selected search result “z”, and the second searcher chose search result “y.”

The search term “Vista” belongs to the categories “Technology and Telecommunications” and “Biz.”

The first searcher has a User Knowledge Ranking 3 in the “Technology and Telecommunications” category and a User Knowledge Ranking of 6 in the “Biz” category.

The second searcher has a ranking of 3 and 1 in these same categories.

Since the first searcher selected search result “z” has rankings of 3 and 6 in the “Technology and Telecommunications” and “Biz” categories of the search term “Vista”, this searcher’s rankings (3+6) are added to the relevance score for search result z to achieve a total score of 9.

When other people search on the term “Vista” and select search result “z”, their rankings in the “Technology and Telecommunications” and “Biz” categories may also be added to the total relevance score for search result “z.”

For the search result “y”, since the second searcher who selected this search result has rankings of 3 and 1 in the “Technology and Telecommunications” and “Biz” categories of the search term “Vista”, this searcher’s rankings (3+1) are added to the relevance score for search result y to achieve a total score of 4.

Since no one selected search result “x”, the relevance score is 0 for search result “x.”

If there was an education ranking for each of the searchers, that would be added to the relevance scores for each of the results for that particular query also.

In the absence of an education ranking, the search results for the query term “Vista,” based upon the category scores for the two searchers would have a compiled ranking of z, y, and x, from highest to lowest rank. That could change as more searchers with different rankings for the “Technology and Telecommunications” and “Biz” categories search for “Vista” and select specific search results.

**The Yahoo Search Validation Patent Application**

[Knowledge and Interests Based Search Term Ranking for Search Results Validation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080140641.PGNR.&OS=dn/20080140641&RS=DN/20080140641)
Invented by Jian Wang
Assigned to Yahoo
US Patent Application 20080140641
Published June 12, 2008
Filed: December 7, 2006

Abstract


> Ways to verify rankings of search results, produced by a search algorithm executed for a particular search term.
>
> A number of users’ knowledge and/or interest in specific categories may be ranked to be used to calculate new rankings of search results, e.g., web pages based on search terms.
>
> Users may also be ranked by education level and field.
>
> These user rankings are then used to determine a new ranking of search results that are generated for a particular search term.
>
> For instance, the users that select (e.g., or click on) a particular search result cause a relevance score to be compiled based on such users’ rankings in the categories to which the search results or search term belongs.
>
> Relevance scores are compiled for each search result that is selected by a plurality of users executing a number of searches.
>
> The new ranking of the search results for a particular search term is determined based on the relevance scores of such search results.
>
> It can then be determined whether the current ranking, produced for a particular search term by the search algorithm, is valid by comparing this new ranking to the current ranking.

**Where do Searcher Knowledge, Interest, and Education Rankings Come From?**

Information about a searchers interests could be collected when a searcher registers with a search engine like Yahoo, and enters information about their knowledge and interests in a number of categories. They could possibly be asked to rank themselves on a scale of 1 to 10.

Or their rankings in categories could be implied from other information, such as their occupation position or field or education field or education level.

I’m not sure if collecting information about a users interest and knowledge and educational level in this manner is an ideal approach, and it’s quite possible that there may be other methods also used to collect this kind of information.

**Conclusion**

A good number of white papers and patents from the search engines in recent years describe using data collected from people searching and browsing the Web to improve search results.

Patents and papers about personalization of search results tell us how user behavior information might be used to influence the search results that individuals may see. A few of those documents have told us that user data from people who may share some common interests and who may tend to select a lot of the same pages may influence the search results that those people who share common interests and select common pages may see.

This approach may affect the rankings of pages in search results for everyone who may search at the search engine.
