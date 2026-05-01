---
title: "A Peek at Personalization at Yahoo"
source_url: "https://www.seobythesea.com/2006/09/a-peek-at-personalization-at-yahoo/"
slug: "a-peek-at-personalization-at-yahoo"
date_published: "2006-09-28T00:40:00+00:00"
date_modified: "2020-06-21T13:22:18+00:00"
author: "Bill Slawski"
---

I posted on Tuesday about the use of [Topic Familiarity in Reranking Search Results](https://www.seobythesea.com/2006/09/how-to-use-topic-familiarity-to-rerank-search-results/). Stephen Pitts, of [Build a Better Website](http://the-blog-life.blogspot.com/) asked if I thought the patent application being discussed in that post had anything to do with personalized search.

My response was that the inventors listed in the document stated within it that they weren’t looking at specific search terms, user queries, or user behavior when ranking pages to determine whether those were “introductory” or “advanced” pages. The question stuck with me though, and while looking at some other papers on the web, I noticed a Yahoo paper from the beginning of 2005 that shared an author with the patent, Omid Madani. The paper was an update of Yahoo’s personalization efforts for January 2005, a conference titled *Beyond Personalization 2005*.

I decided that the paper might be worth writing about here, but since it was from early 2005, I thought I should look for some other documents from the company about personalization. A search showed up some job listings at Yahoo that I thought was interesting.

**Yahoo Job Listings**

I don’t usually go through the job ads for any of the search engines. Maybe I should look at them more often.

If you’re interested in the personalization efforts at Yahoo!, and you meet the right qualification, Yahoo! is interested in talking with you.

A classified ad posted at HotJobs today calls for a software engineer (link no longer available) for the Yahoo! Network Personalization Platform in Sunnyvale, Ca.

The ad notes:


> The Yahoo! Network Personalization Platform team is looking for an experienced senior software engineer to design and build personalization infrastructure that extends across the Yahoo! network.
>
> The Network Personalization team is designing and building a User Profile Store, to hold profiles for registered Yahoo! users that are used by Yahoo! properties to enhance and enrich the users’ online experience. This position requires a candidate with strong database design and operations experience in the following areas:
>
> – Design and maintenance of a high-performance, high-availability, scalable distributed data storage system
>  – Experience with caching optimization mechanisms
>  – Database design, query optimization, and performance tuning
>  – Database replication, failover handling, and sync-up operations

Another Yahoo! ad calls for a Machine Learning Engineer (link no longer available):


> The Yahoo! Personalization Platform team is looking for an engineer to help develop machine learning algorithms for our next generation adaptive personalization platform.
>
> You will have the opportunity to work on a variety of project types, including rapid prototyping and proof-of-concept development; researching engineering libraries, tools, and platforms for machine learning; mining click-thru logs, and qualitative feedback to refine and improve the learning algorithms. The successful candidate will be passionate about software engineering with research interest.

The search relevance team is also looking for some assistance in the form of a Principal Search Relevance Engineer/Scientist (link no longer available). Here’s a snippet from that ad:


> We are looking for one or two principal relevance engineers/scientists with a strong background in machine learning, information retrieval, and computational linguistics to join the Yahoo International Web Search Relevance Team. Your essential responsibility is to focus on improving the search relevance for global languages and regions. This extremely challenging task requires a good understanding of not only the general relevance technology but also how languages differ around the world and how the usage of the web and search engines changes from region to region. As a principal engineer/scientist you will lead the project/product design and development. Your long term responsibility includes deep understanding and analyzing the search relevance issues, mining the large corpora of web text data, query logs and click-through logs, designing and developing advanced algorithms to improve search relevance, which may include natural language processing, entity extraction, word segmentation, text classification, feature extraction, ranking algorithm design and learning. In short term, you are required to learn and pick up the Yahoo Search Technology and the current ranking system quickly and participate the existing projects on relevance testing data analysis, machine learning ranking and relevance improvement initiatives.

**Research Papers on Personalization at Yahoo!**

Here are a couple of papers that provide some small insight into the efforts at Yahoo regarding personalization.

The first, which I mentioned above, is:

Recommender Systems Research at Yahoo! Research Labs (link no longer available)

It is a two page paper on personalization efforts, put together by members of the Yahoo! Research Labs. I looked around but didn’t see mentions of the paper beyond a [post by Greg Linden](http://glinden.blogspot.com/2006/01/recommender-systems-research-at-yahoo.html) on his blog in January.

The paper is pretty short, and it doesn’t go into a lot of detail, but it does give an intriguing glimpse at some of the areas where Yahoo has been investigating the use of personalization. Some areas it covers include movie search, group collaborative filtering and music recommendations, singular value decomposition (SVD) / latent semantic indexing (LSI) to provide recommended keywords for Overture advertisers to bid on, and more.

Note – Since I started writing this post a couple of hours ago, it appears that the site it was upon (grouplens.org) no longer resolves to the page that was there, with details of the *Beyond Personalization 2005* Conference. (added – Now it’s back. Who knows why?)

Here’s a snippet from the paper:


> Many Yahoo! properties and business units use recommendation technology, or are planning or considering using recommendation technology, including Launch Music on Yahoo!, MusicMatch, Yahoo! Movies, Yahoo! TV, Yahoo! Personals, Yahoo! Local, Yahoo! Autos, Yahoo! Search, targeted banner advertising, Overture sponsored search advertising, and Overture contextual advertising. A companywide effort to offer packaged recommendation technology to any interested Yahoo! property is underway.

Another paper that I came across, presented last month in Philadelphia and also co-authored by Omid Madani, was this one:

[A Large-Scale Analysis of Query Logs for Assessing Personalization Opportunities](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwih37fQupjcAhUBJnwKHRAVBO4QFggsMAA&url=http%3A%2F%2Fciteseerx.ist.psu.edu%2Fviewdoc%2Fdownload%3Fdoi%3D10.1.1.103.5749%26rep%3Drep1%26type%3Dpdf&usg=AOvVaw1E4-IUPkY2nvIyRyjXPe-N) (pdf)
KDD’06, August 20–23, 2006, Philadelphia, Pennsylvania, USA.

Researching Yahoo! search engine logs, the researchers involved in this study looked at 1.35 tracking cookies over six months.

In particular, they were looking at three main issues:

1. The extent of short and long term history available,
2. Consistency and convergence rate of users’ general topical interests as reflected by their queries, and;
3. Finer grain information available on user interests derived from users’ clicks on search results.

The results of their study offer them some optimism that they can use this type of information for web search, targeted advertising, and recommendations.

**Added:** Greg Linden made a blog post about this second paper, too, and provides a nice analysis of it: [Potential of web search personalization](http://glinden.blogspot.com/2006/09/potential-of-web-search.html)
