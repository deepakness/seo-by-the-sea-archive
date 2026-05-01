---
title: "Making Sense of Search Queries by Using Context"
source_url: "https://www.seobythesea.com/2007/08/making-sense-of-search-queries-by-using-context/"
slug: "making-sense-of-search-queries-by-using-context"
date_published: "2007-08-19T05:33:05+00:00"
date_modified: "2014-01-18T14:39:24+00:00"
author: "Bill Slawski"
---

I’m presently in San Jose, getting ready for the Search Engine Strategies Conference coming up.

I was fortunate enough to attend [BarCampBlock](http://barcamp.org/w/page/400429/BarCampBlock) yesterday, which was a lot of fun. I met some interesting folks, and watched a thoughtful presentation on privacy on the Web, and was involved in a couple of discussions on “problems with search,” and on “corporations and their fear of blogging.”

One of the issues that came up in the search discussion, and one of challenges that face search engines is trying to understand what someone is searching for based upon their entry into a search box of just a word or two or three. It reminded me of a post that I’ve had in my queue, waiting to write about for a little while.

A paper presented at [SIGIR 07](http://www.sigir.org/sigir2007/), this last July, looks at using some additional information to enhance those words in a search of a collection of documents. I came across a video presenting the paper in a webcast at a venue in the UK a few days after the SIGIR conference, which adds some addition information about the paper. Both are worth a look to see how search terms might be expanded before a search is performed.

The paper is [Using Query Contexts in Information Retrieval](http://www.iro.umontreal.ca/~nie/Publication/bai-sigir-07.pdf) and the [Video Presentation](http://stadium.open.ac.uk/stadia/preview.php?s=29&whichevent=1035) is by Professor Jian-Yun Nie on July 31, 2007 at Knowledge Media Institute, Berrill Building, The Open University, Milton Keynes, United Kingdom.

The abstract from the paper captures its content fairly well:


> User query is an element that specifies an information need, but it is not the only one. Studies in literature have found many contextual factors that strongly influence the interpretation of a query. Recent studies have tried to consider the user’s interests by creating a user profile. However, a single profile for a user may not be sufficient for a variety of queries of the user.
>
> In this study, we propose to use query-specific contexts instead of user-centric ones, including context around query and context within query. The former specifies the environment of a query such as the domain of interest, while the latter refers to context words within the query, which is particularly useful for the selection of relevant term relations. In this paper, both types of context are integrated in an IR model based on language modeling. Our experiments on several TREC collections show that each of the context factors brings significant improvements in retrieval effectiveness.

The problems that Professor Jian-Yun Nie presented were some that we identified in our discussion at BarCampBlock. The suggestions that are offered in the paper are definitely worth a look if you are interested in how a search engine might expand upon a query to use to find relevant results that might capture the intent of a searcher.
