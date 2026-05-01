---
title: "Google's Profiling Both Users and Sites?"
source_url: "https://www.seobythesea.com/2007/10/googles-profiling-both-users-and-sites/"
slug: "googles-profiling-both-users-and-sites"
date_published: "2007-10-12T16:48:49+00:00"
date_modified: "2020-07-06T15:31:44+00:00"
author: "Bill Slawski"
---

A profile-based approach to individual site searches, and group personalization (to protect individual privacy), is explored in two related patent applications from Google, one from this week, and one from last week.

The first patent application involves Google’s free site search that a site owner can add to their site, and may enable visitors to find pages on that site containing information that they might be seeking there.

Their free site search doesn’t necessarily use the same algorithms that Google uses to index the Web but instead may follow a different approach to ranking information for sites that it is used upon by building profiles for those sites based upon searcher’s behavior at those sites.

The second patent application tries to protect individual privacy by creating “group” profiles for searchers, using a very similar profiling method.

The documents go into some detail in describing how those profiles might be built for websites, and for “groups” of users, based upon the queries used in searches and the results served to those searchers and the user behavior exhibited on the Web by those searchers.

The patent applications are:

- [Website flavored search](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070239680.PGNR.&OS=dn/20070239680&RS=DN/20070239680) (US Patent Application 20070239680)
  > In a method of profiling a website, an information server receives multiple search queries from a website submitted by different users. Different search results responsive to the search queries are provided to the requesting users.
  >
  > The information server monitors the activities of the users on the search results and generates a profile for the website using the search queries and the user activities. When the information server receives the same search query from two different websites, it identifies a plurality of information items associated with the search query.
  >
  > The information server uses profiles of the two websites to customize the information items into two different orders and serves the information items to the two websites in the two different orders.
- [Group Customized Search](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070233671.PGNR.&OS=dn/20070233671&RS=DN/20070233671) (US Patent Application 20070233671)
  > A computer-implemented method associates a plurality of groups with a user. Each group may have at least one profile. The method also includes receiving a search query from the user and identifying information items associated with the search query.
  >
  > The method computes adjusted scores for the information items based on the groups’ profiles and ranks the information items accordingly before providing the ranked information items to the user. Alternately, a computer-implemented method associates a group having a plurality of profiles with a user.
  >
  > The method also includes receiving a search query from the user and identifying information items associated with the search query. The method computes adjusted scores for the information items based on the group’s profiles and ranks the information items accordingly before providing the ranked information items to the user.

In the *Website flavored search* document, at the simplest level, Google may be looking at those site searches and user data to boost rankings for different pages on a site based upon one or more of the following types of profiles:

**Category-based profile** — this profile correlates the search history with a set of predefined categories, which may be organized in a hierarchal fashion, with each category being given a weight indicating the relevance of the category to the interests of the website users;

**A term-based profile** — this profile abstracts the search history with a plurality of terms, wherein each term is given a weight indicating the relevance of the term to the interests of the website users; and,

**A link-based profile** — this profile identifies a plurality of links that are directly or indirectly related to the search history, with each link being given a weight indicating the relevance of the link to the interests of the website users.

In the *Group Customized Search* document, the same types of profiles are discussed but apply to groups of searchers instead of specific sites. An individual searcher may belong to many different groups, each of which will have a profile associated with it, that may provide hints at the kinds of pages that they might be interested in seeing.

These broad profiles (based upon categories, terms, and links) can be broken down even further. For example, the items in a category-based profile can be organized in many different ways, such as:

*Topic Oriented categorization* — The website profile based upon the category map is a topic-oriented implementation.

*Document format* — the interests of the website users can be categorized based on the formats of the documents identified by the website users, such as HTML, plain text, PDF, Microsoft Word, etc., with different formats may have different weights.

*Types of Identified documents* — the interests of the website users can be categorized according to the types of the identified documents, such as an organization’s homepage, a person’s homepage, a research paper, or a newsgroup posting, each type having an associated weight.

*Document origin* — such as the country associated with each document’s host.

*Multiple different profiles* — more than one type of profile may co-exist together, with each one reflecting a respective aspect of the interests of the website users.

**Conclusion**

Both documents note that they are related to a Google patent application that was published a couple of years ago – [Personalization of Placed Content Ordering in Search Results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20050240580.PGNR.&OS=dn/20050240580&RS=DN/20050240580).

That document goes into considerably more depth on how a user profile (for an individual user) might be constructed.


> A system and method for using a user profile to order placed content in search results returned by a search engine. The user profile is based on search queries submitted by a user, the user’s specific interaction with the documents identified by the search engine, and personal information provided by the user.
>
> Placed content is ranked by a score based at least in part on a similarity of a particular placed content to the user’s profile. User profiles can be created and/or stored on the client-side or server-side of a client-server network environment.

In these newest documents, we’re seeing an evolution of thinking about using profiles.

The group profile filing aims at protecting the privacy of searchers by making personalization specifically less about an individual, and more about the groups that individual is assigned. It also provides more data on a broader range of sites and pages using a wider range of query information and searches behavior information about “similar” users that it has grouped.

The site search profile patent application recognizes that when searching a single site, important metrics like PageRank aren’t quite as helpful as on a Web search, and other issues might arise that their web search algorithm might not be able to handle well.
