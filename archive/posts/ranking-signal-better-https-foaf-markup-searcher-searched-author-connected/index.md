---
title: "What Ranking Signal is Better, HTTPS or FOAF markup, when Searcher and Searched Author are Connected?"
source_url: "https://www.seobythesea.com/2014/09/ranking-signal-better-https-foaf-markup-searcher-searched-author-connected/"
slug: "ranking-signal-better-https-foaf-markup-searcher-searched-author-connected"
date_published: "2014-09-09T09:58:04+00:00"
date_modified: "2016-03-30T17:37:38+00:00"
author: "Bill Slawski"
---

Recently, Google announced that they would be ranking pages higher in search results when those pages use a secure protocol of https. The Google Webmaster Central blog told us so through Google Webmaster Trends Analysts Zineb Ait Bahajji and Gary Illyes, in [HTTPS as a ranking signal](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html). The use of https doesn’t necessarily make a page more relevant or more important for a search, but it could help lead to a more secure web.

Google was just granted a patent for assigning some searched sites to be deemed authoritative for a query that someone they are socially connected performed a search for. This isn’t for all queries, but rather just some queries that Google might determine are “trigger queries,” or queries that are presently popular.

And it’s not for all searchers, but only searchers that are connected to each other.

While Google could look to it’s records to see who is connected to each other in its databases, it struck me as a little odd that the authoritative rankings patent didn’t just refer to people connected on Google Plus, but instead mentioned that it would possibly work for people connected in social networks without specifying one in particular.

That patent says (and pay attention to the bolded area):


> In general, innovative aspects of the subject matter described in this specification can be embodied in methods including the actions of:
>
> - Receiving a search query from a searching user,
> - Determining that the search query corresponds to a trigger query and, in response,
> - Providing data associated with the first set of authoritative users for potential display to the searching user,
> - Determining a second set of authoritative users based on the first set of authoritative users, for each authoritative user in the second set of authoritative users,
> - **Receiving a contact status between the authoritative user and the searching user within a social networking service****, and**
> - Transmitting instructions to display data associated with authoritative users of the second set of authoritative users with search results responsive to the search query, the data including the contact status for each authoritative user in the second set of authoritative users.

The patent went out of it’s way to tell us that scores for authoritative users would be marked up in triplets like FOAF markup might be.

So I ran off to the USPTO website (OK, I didn’t run), and started searching and came across a patent that describes how social annotation markup could be used to boost rankings for content where the authors of that content might be related to the person searching for it.

The patent specifically referred to markup such as XHTML Friends Network (XFN) or [Friend of a Friend Project](http://xmlns.com/foaf/spec/) (FOAF) markup, and Google points out that annotations like that allow for users’ social information to be collected by a web crawler for different social web sites.

All of the different social identities of people searching and people creating content might be explored and social annotation imformation might be reviews to produce a social affinity score for those people.

The patent is:

[Social affinity on the web](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08560605&OS=PN/08560605&RS=PN/08560605)
Invented by Zoltan I. Gyongyi
Assigned to Google
US Patent 8,560,605
Granted October 15, 2013
Filed: October 21, 2010

Abstract


> Methods, systems, and apparatus, including computer programs encoded on computer storage devices, for determining social affinities from public data. In one aspect, a method computes numeric affinity scores or weights between pairs of network identities, e.g., identities made public by users of social web sites on the Internet, where the pairs of identities appear to represent pairs of individual people, using explicit and inferred social connections obtained from public user data on the Internet.
>
> Some of the system and methods explore all social connections (paths) between any given pair of vertices X and Y in the weighted graph data structure of such social connections and aggregates information about their number and relative strength to produce the affinity score from X to Y.

How much of an impact might this knowledge of social affinities have?

According to this patent, it seems like social affinities between content creators and searchers can be really important, in a socially relevant way, because it might just be from a searcher’s direct or indirect friends.

As the patent tells us:


> Social affinities can be used to rank search results. Since a searcher is often more interested in the content (e.g., photos, blogs, reviews) posted by close friends, the information about social affinities facilitates making the distinction between close friends and more distant friends to enable adjustment of the search results ranking.

A more secure web is a great an ambitious goal, and if Google wants to wave it like a carrot (or rich snippet) in front of our faces to encourage the web to become safer, that’s fine. But, using social affinity markup such as FOAF can make it more likely to find meaningful and relevant content from someone you already know. While I like secure web pages, I prefer boosted rankings based on social affinity
