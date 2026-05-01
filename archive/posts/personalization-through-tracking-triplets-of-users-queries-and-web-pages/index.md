---
title: "Personalized Search from Tracking Triplets of Users, Queries, and Pages"
source_url: "https://www.seobythesea.com/2007/03/personalization-through-tracking-triplets-of-users-queries-and-web-pages/"
slug: "personalization-through-tracking-triplets-of-users-queries-and-web-pages"
date_published: "2007-03-09T11:12:10+00:00"
date_modified: "2019-08-23T20:16:50+00:00"
author: "Bill Slawski"
---

## Personalized Search Based upon Collections of Data About Searches

CubeSVD: A Novel Approach to Personalized Web Search. Both the patent and the paper are very math-heavy, but the concepts behind them are worth pursuing.

[Augmenting user, query, and document triplets using singular value decomposition](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070055646%22.PGNR.&OS=DN/20070055646&RS=DN/20070055646)
Invented by Hua-Jun Zeng, Jian-Tao Sun, Wei-Ying Ma, Zheng Chen, and Benyu Zhang
Assigned to Microsoft
US Patent Application 20070055646
Published March 8, 2007
Filed September 8, 2005

Abstract


> A system for augmenting click-through data with latent information present in the click-through data for use in generating search results that are better tailored to the information needs of a user submitting a query is provided.
>
> The augmentation system creates a three-dimensional matrix with the dimensions of users, queries, and documents. The augmentation system then performs a three-order singular value decomposition of the three-dimensional matrix to generate a three-dimensional core singular value matrix and a left singular matrix for each dimension.
>
> The augmentation system finally multiplies the three-dimensional core singular value matrix by the left singular matrices to generate an augmented three-dimensional matrix that explicitly contains the information that was latent in the un-augmented three-dimensional matrix.


## Personalized search without profiles

The patent filing isn’t all numbers and symbols. It does contain some text that tries to explain the processes involved in plain English. It talks about a couple of well-known ranking methods, including Google’s PageRank, and notes that one of the failings of those methods is that they don’t pay attention to the person who is submitting a query. Here’s what they say:


> For example, a zoologist who submits the query “jaguar” would get the same results as a car enthusiast who submits the same query. In such a case, the zoologist may be interested in web pages related to animals, whereas the car enthusiast may be interested in web pages related to automobiles.

It also discusses the difficulties of some present-day personalized search methods which try to create user profiles to base which results they should show to individuals. Those methods usually attempt to customize results for each user by basing results shown to them upon personal profiles that are created manually or automatically and then adapting search results based upon those personal profiles.

A difficulty in using personal profiles in providing personalized search is that if those profiles are created manually, people tend to not want to share their personal information with a search engine – so requiring people to fill out an extensive amount of information concerning their interests is unlikely to result in many people using such a service.

Creating a profile automatically in the background, based upon previous searches could require a large amount of user history data being collected. Regardless of whether a manual or automatic approach to creating a profile is followed, we’re told in the patent that there’s a question as to whether “complex user behavior can be accurately modeled by a personal profile.”


## Personalized Search Conclusion

Imagine instead a system that pays attention while you are searching, and compares your search selections during a session to others who made similar queries, and chose similar results. It may then start reranking results that you see based upon the searches that you perform and the selections that you make.

If you would like to learn more about some of the math described in the paper and the patent application, a good starting point may be Dr. E. Garcia’s tutorials on Singular Value Decomposition (SVD) and Latent Semantic Indexing (LSI). In addition to being a great source of information on those topics, the tutorials also do a wonderful job of debunking marketing myths around latent semantic indexing and are highly recommended.
