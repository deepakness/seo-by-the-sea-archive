---
title: "Microsoft Weighs in on Ranking Authors in Social Networks"
source_url: "https://www.seobythesea.com/2012/05/microsoft-on-ranking-authors/"
slug: "microsoft-on-ranking-authors"
date_published: "2012-05-11T07:31:38+00:00"
date_modified: "2013-02-09T11:53:54+00:00"
author: "Bill Slawski"
---

*Author Ranking in social media is more than just a popularity contest, and can include things like how frequently an author surfaces content that subsequently becomes popular, topical authority on different subjects, and popularity and influence signals.*


## Author Authority to Distinguish Signal From Noise?

Social media contains a lot of *signal*, and a lot of what might be considered *noise*. Within social streams of real time communication such as tweets and status updates and blog posts is information that can be invaluable on many different topics.

How does a search engine pick out which authors are actual authorities on different topics, and which are sharing and resending and adding to authoritative content? How does it tell which authors are piggybacking off such content, and which authors just really aren’t authorities on any given topic?

Some authors aren’t even real people, but instead exist as spam and/or aggregator accounts, adding little or no value to other members of a social network.

A patent application from Microsoft tells us that the value among social streams hinges on finding the ***most authoritative users*** on given topics.


## Identifying Social Authority

So what exactly is social authority, and how is it developed, identified, and measured? How does someone establish themselves as an expert in a given field?

Social engagement signals may be used to rank user content based upon social graph metrics like *number of followers* and the *number of times a user’s content has been shared*, but those signals can be prone to simple spamming, or dominated by celebrities like Lady Gaga, or Justin Bieber.

The Microsoft patent filing describes a way of determining an Author Rank in social media systems that looks to a variety of statistical approaches applying usage metrics and social and topical graph characteristics, such as the following:

- A *temporal analysis of link sharing* where authority is based on a user’s propensity to link early to Web pages that become popular
- A *topical authority* based on an author’s links and content updates in specific topic areas
- A *popularity and influence measure* based on properties of the authors such as:
- Number of followers
- Number of posts such as microblogs resent
- Mention counts in which an author is mentioned
- Number of on-line friends an author has

The pending patent is:

[Ranking Authors in Social Media Systems](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220120117059%22.PGNR.&OS=DN/20120117059&RS=DN/20120117059)
Invented by Peter Richard Bailey, Chad Carson;, Scott Joseph Counts, Nikhil Bharat Dandekar, Ho John Lee, Shubha Umesh Nabar, Aditya Pal, Michael Ching, Paul Alexander Dow, Shuang Guo, and Seo Hyun-Ju
Assigned to Microsoft
US Patent Application 20120117059
Published May 10, 2012
Filed November 9, 2010

Abstract


> The author ranking technique described herein is a technique to rank authors in social media systems along various dimensions, using a variety of statistical methods for utilizing those dimensions.
>  More particularly, the technique ranks authors in social media systems through a combination of statistical techniques that leverage usage metrics, and social and topical graph characteristics. In various exemplary embodiments, the technique can rank author authority by the following:
>
> - 1) temporal analysis of link sharing in which authority is computed based on a user’s propensity to provide early links to web pages that subsequently become popular;
> - 2) topical authority based on the author’s links and content updates in specific topic areas; and
> - 3) popularity and influence based on nodal properties of authors.


## Everyone’s an Authority, and No One Is?

In social media settings, we are both the producers of content, and its consumers. We can send out our thoughts and ideas, conversation openers and responses, mentions and questions to specific individuals, or to people we are connected to, or even to everyone at once. We can re share the content others send out as it is, or transformed in some manner.

With many people participating in social media, there’s often a great diversity on many topics. How does a search engine, interested in re sharing some of this content in a set of social search results decide what to show and what to leave out? How does it find true authorities, both interesting and authoritative on a topic?

Identifying *true authorities* can be tricky because of the presence of highly visible overly general authorities who might have many followers, such as popular mainstream sources. Those may be authoritative, but may not be the source of original or expert topics.

The patent application tells us that end users likely are looking for a mix that includes these larger organizations along with lesser known authors who may be the first to write about a particular topic, or have some special insight or analysis.

Those lesser known authors might be highly authoritative, but might not be well known, and may not have high follower counts, or may not even have produced a lot of content on a particular topic.

We’re also told that algorithms similar to PageRank algorithm over a social graph of users are likely to be more sensitive to celebrities and insufficient to find true authorities.

PageRank also just isn’t useful in queries that involve recency-sensitive queries on bursty topics that arise too quickly to develop links or citations that take time to be acquired.


## Propensity for Sharing Early Links

Instead, one signal of authority can be based on a propensity to provide early links to Web sites or Web content that becomes popular with other users.

Authors who display such a propensity can be identified and ordered in a rank list, which could be used to rank or re-rank search results to take into account author authority or for filtering search results to exclude spammers.


## Topical Authority

Here’s how a search engine might determining Topical Authority.

It might begin by searching over a body of social media updates on microblog or blog posts containing keywords associated with a given topic, such as one associated with a query input into a search engine and this topic may be expanded to include related topics.

A raw feature extraction may be performed from the data returned in response to the query and any associated author/user data. A number of features about the authors and posted data resulting from the query may be examined, including:

- Raw count of topical posts
- How often an author is cited by other authors
- How often an author cites themselves
- Number of times an author is replied to
- Total number of posts authored in the system
- How often they are mentioned by other users
- Number of links an author has shared
- How often they use explicitly denoted keywords (e.g., hash tags)
- A similarity index that computes how similar an author’s recent content is to previous content
- A timestamp of an author’s first post on the topic
- A timestamp of their most recent post on the topic
- A count of friends/followers who also post on the topic
- A count of an author’s social media friends/followers who posted on the topic before the author in question posted on the topic
- A count of an author’s social media friends/followers who posted on the topic after the author in question posted on the topic.
- Other signals could also be used.

The number of users to be considered an authority on a specific topic would be pruned if they fall below a certain threshold on these topical signals.

The remaining users would then be clustered into two groups –authorities and non-authorities, again based upon those signals.

At that point, the authors within the cluster of authorities are ranked in order based upon their scores for the features.


## User Metric Signals

While the description within the patent application focuses upon Twitter and tweets, it makes it clear that a system like this could be applicaed to other forms of social media, including status updates and blog posts.

We’re shown how user metrics might identified, categorized, and explored on Twitter, but we have to keep in mind that similar metrics might be used for Facebook and even blog posts and comments on other sites.

As for Tweets, they might be categorized into three categories:

– Original tweet – standing on its own
– Conversational tweet – directed at another user (e.g., as shown by the use of an @username token before the text, or through associated meta-data).
– Repeated tweet copied or forwarded by someone into the social network, and often started with “RT @username”.

Metrics might also be computed about mentions of another user, but independently of those mentions in a conversational tweet or a retweet.

The use of hashtag keywords (starting with a # symbol) might also be reviewed.

A self-similarity score measures how much someone users words from their previous posts (on topic and off topic). A stopword list might be used to eliminated very common words first.

Those tweets might be ordered by timestamp and examined to see how similar they are, with a couple of interesting assumptions. One is that someone using many of the same words from their previous posts might be engaged in spam behavior. In the opposite direction, some using the same words much less frequently might be posting on a much wider set of topics, or may have a very large vocabulary.

Other signals could involve:

– A topical signal that estimates how much an author is involved in a particular topic.

– An originality signal that looks at whether an author tends to originate conversations on a particular topic, and how often he or she engages in conversations on that topic and replies back to others on it out of courtesy. Those responses can be helpful in finding real people who tend to be social.

– How often a person’s posts are resent by others, dampened by the impact of some “overzealous” users who tend to retweet frequently.

– Whether or not mentions of others are based upon merit – actual conversations and interactions with others.

The patent filing provides a number of other signals, as well as a couple of different ways to use these signals together to come up with scores based upon them regarding different topics.


## Takeaways

I’ve written about how Yahoo [may rank user generated content](https://www.seobythesea.com/2009/11/how-search-engines-may-rank-user-generated-content/) and how Google might also [rank social interactions](https://www.seobythesea.com/2011/07/how-google-might-rank-user-generated-web-content-in-google-and-other-social-networks/) on sites that rely upon user generated content as well.

If we look at the three somewhat different approaches from each of the search engines together, I think we get a useful glimpse at some of the problems and issues that a search engine might face in trying to rank content created in social settings where the vast majority of that content is created by users, and where the search engine has an interest in indexing that content.

How does a search engine surface the most useful and interesting content on a specific topic? How do they filter out original content from the sharing of that content?

How do they identify fake profiles and sock puppets? How do they identify the best sources on different topics?

All three look at the quality of original contributions to a social system, whether in the context of a forum or Q&A site or a microblogging platform. All look at interactions between members of those systems, and the meaningfulness of those interactions.

Those three patent filings aren’t the final say from each of the search engines on how they may rank content from social sources, and include that content within social search results. But I think taken together they provide some useful guidelines on how someone might be perceived as an authority on different topics.
