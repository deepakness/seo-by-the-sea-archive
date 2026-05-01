---
title: "Facebook's Real Time Social Network Search Patent"
source_url: "https://www.seobythesea.com/2011/08/facebooks-real-time-social-network-search-patent/"
slug: "facebooks-real-time-social-network-search-patent"
date_published: "2011-08-11T10:34:01+00:00"
date_modified: "2018-07-26T13:59:52+00:00"
author: "Bill Slawski"
---

Will Facebook someday launch their own search engine that enables you to search the Web? That question surfaces every so often, without any real definitive answers. It’s possible that they might someday, especially since they’ve been hiring a number of people with job experience from some of the major search engines.

The last few times I recall seeing the possibility of a Facebook search engine raised was when a couple of different Facebook patents originally acquired from Friendster were granted, and each described an aspect of how a search engine might use connections on a social network to influence results seen on a search of the Web. (For example, see this post: [Facebook Patents “Curated Search” To Attack Google](https://www.businessinsider.com/facebook-search-engine-2011-3).) A different question, and one that is just as interesting is how the search on Facebook itself works. A patent application published at the USTPO today gives us some ideas of how it may work.

![A screenshot of Facebook search results on the term \[cincinnati reds\] on a search of posts by everyone.](media/facebook-search.jpg)

I have to confess that I’ve rarely searched at Facebook, and I don’t think that I’ve ever searched using anything other than the search box at the tops of pages. There is a Facebook search interface, as seen in the image above, that allows you to choose between the following to search for:

- All Results
- People
- Pages
- Groups
- Apps
- Events
- Web Results
- Posts by Friends
- Posts by Everyone
- Posts in Groups

The Web results are powered by Bing, and likely follow Bing’s ranking algorithms in determining what to show first. The Facebook patent application provides details on Facebook’s realtime search of Facebook posts, and gives us an idea of how they might be ranking those. It includes a number of ranking considerations that it describes in possibly deciding what order to show you results when you do a search . The patent application describes what some of those may be when you do a search for “Posts by Everyone”.

***Level of connection*** – Results might be shown from people you are directly connected to first, then from indirect connections, then random users of the network, possibly followed up by third party content published outside of the social networking system.

***Reputation of Users*** – Posts from users who have low reputations, possibly spammers or malicious users, may appear lower in results than posts from users with higher reputations.

***Popularity*** – A popularity score for individual posters, based upon having more interactions than other users, may cause posts returned in a search to rank more highly than posts from less popular users.

***Similarity*** – A similarity score between the post’s author and the searching user could be based upon demographic information such as age, gender, location, interests, or other similarity measure, and that similarity could also boosts results from similar posters.

***Affinity with other users*** – if you interact with certain people more frequently than others, their relevant posts would rank more higly in Facebook’s search results.

***Affinity with shared applications*** – for example, if you frequently participate in social online puzzle games, the posts from other people who participate in the same kind of puzzle games (on the social network itself, or possibly on the Web) may be boosted in search results. The patent filing considers this kind of shared affinity to be a “personalization” approach because it takes advantage of interests that are uncovered based upon your use of the social network or even on the Web, to personalize your results by ranking higher posts from other people who may share interests with you.

The patent filing provides much more in the way of details on how Facebook’s search index is set up, and is definitely worth a look.

[Real Time Content Searching in Social Network](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110196855%22.PGNR.&OS=DN/20110196855&RS=DN/20110196855)
Invented by Akhil Wable, Hong Yan, Spencer Ahrens, Yofay Kari Lee, and Guizhen Yang
Assigned to Facebook
US Patent Application 20110196855
Published August 11, 2011
Filed: February 11, 2010

Abstract


> Indexing and retrieving real time content in a social networking system is disclosed. A user-term index includes user-term partitions, each user-term partition comprising temporal databases. As a post is received from a user, a user identifier, a post identifier, and a post is extracted. An object store communicatively coupled to a temporal database for recently received content is queried to determine whether terms in the post has already been stored. A term identifier is stored in the user-term index with the user and post identifiers. A forward index stores the post by post identifier.
>
> Responsive to a search query, the user-term index is searched by the user’s connections and the terms. A real time search engine compiles the results of the user-term index query and retrieves the stored posts from the forward index. The search results may then be ranked and cached before presentation to the searching user.

**Conclusion**

When I start typing into the search box for Facebook, it shows a dropdown that lists pages and then people. I’ve assumed that’s all that it shows, and didn’t realize that it would show other types of search results in that dropdown as well, such as “posts by friends” and “posts by everyone.”

I find myself wondering how many people actually perform searches for “Posts by Friends” and “Posts by Everyone” or the Bing Web searches, and whether the site would be more interesting and useful if those types of results were more prominent. Should there be a “search” link in the main menu for Facebook pages, instead of or in addition to the search box?

Or, are the Facebook search features purposefully de-emphasized to keep people focusing upon the other features that Facebook offers?
