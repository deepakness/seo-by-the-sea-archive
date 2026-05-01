---
title: "Social Trustrank and User Annotations as Anchor Text"
source_url: "https://www.seobythesea.com/2007/01/social-trustrank-and-user-annotations-as-anchor-text/"
slug: "social-trustrank-and-user-annotations-as-anchor-text"
date_published: "2007-01-07T15:45:03+00:00"
date_modified: "2019-06-26T15:13:50+00:00"
author: "Bill Slawski"
---

[![Golden Gate Bridge](media/349333378_41c3ab2764_m.jpg)](https://www.flickr.com/photos/bragadocchio/349333378/)

Imagine taking information from social networking sites like Digg or Del.icio.us, about users’ likes and dislikes concerning web pages. Add to that their personal interests mentioned in profiles from places like Myspace or Facebook, and their relationships with other people who may also have created social profiles. Throw in descriptions used in tags and annotations that they may have left about pages, and the timestamps attached to those tags and annotations. Now, use that information to influence the rankings of a search engine.

Yahoo offers a wide range of personalized services, many of which allow their users to tag or annotate things they find on the web, create profiles, and build and define relationships with others. Can that information be used to rerank web pages in search results, and also identify whether some pages are more trustworthy than others?

**User Added Content and Interactions on the Web**

Can user added content, in the form of things like tagging, user annotations, and recorded user behavior improve the relevance of search results?

Might adding someone as a friend in Flickr, or participating with someone in a Yahoo Fantasy Football league help shape the search results you see? Could the rate at which annotations and tags are added to pages influence which pages are seen as more popular, or less, and cause changes in rankings?

A series of patent applications from Yahoo explore that topic. A number of these were published at the end of 2006, as well as some related older filings. I’ll be making a series of posts that explore these patent applications from Yahoo.

The first one I’m looking at includes a detailed explanation of why Yahoo is exploring this approach. But first, an explanation of what this method may add to ranking pages.

**The Nature of the Problem**

The document starts with a synopsis of how a search engine typically indexes web pages. Here’s a summary.

Search engines don’t usually search the web directly, but rather search through an [inverted index](http://web.archive.org/web/20110928082425/http://www.google.com:80/librariancenter/articles/0512_01.html). Steps taken to create an inverted index? One of them is [tokenization](https://en.wikipedia.org/wiki/Lexical_analysis).

A content item, such as a web page, is broken into a list of words. This process can be more or less complex based upon the language which the page is written. For example, tokenizing Chinese text is more difficult than tokenizing English text, since word boundaries in Chinese are not marked with spaces.

Another step is know as [normalization](https://web.archive.org/web/20181003052213/http://www.devshed.com:80/c/a/MySQL/An-Introduction-to-Database-Normalization), which may involve [stemming](https://support.google.com/websearch/#topic=3378866) or [morphological analysis](https://en.wikipedia.org/wiki/Morphology_%28linguistics%29), in which plural endings and other suffixes may be removed. Again, this could be more complex for highly inflected languages. Stop words may also be omitted.

Every occurrence of each word may then be recorded in the *inverted index*. This process of transforming a content item from original form into a set of entries in an inverted index is known as *indexing*. An inverted index is a data structure which consists of a table of lists.

Each entry in the table can be accessed by a unique word, and each item in the list for a given word indicates a content item, or page, in which that word occurred. These items are called *postings*. Postings contain identifiers for the content item containing the word, and possibly also additional information about how often or where the word appeared in the page. *Posting lists* are the lists of content items (such as web pages) containing a word.

When someone enters a query into a search engine which employs an inverted index, the query is broken into words in much the same way that the system processes web pages. It will look in the table to find the posting list for each word. Each posting list represents the set of content items containing the word.

If the user’s query is interpreted as a Boolean AND, then the intersection of the sets for each word is computed.

If it is interpreted as a Boolean OR, then the union of the sets is computed.

In most search engines, a relevance score is computed for each candidate content item in the result set, and only the top-scoring candidates are retrieved. Many factors may go into a relevance score, including:

- The frequency of occurrence of the query words,
- Their statistical distinctiveness, and;
- Properties of the web page such as its modification date.

In addition to the ranking features used in traditional search engines, web search engines also rely on information based on the connectivity of the page, such as the number of pages linking to it, in determining the relevance score of a search result.

Existing search engine indexes might not capture the precise verbiage that a user query comprises, raising issues of the relevance of pages in search results.

Disinformation, or irrelevant results, may cause a lack of trust involving the web pages show in search results.

The patent application tells us that we need new sources of information on which to base and rank searches. These could be used alone or together with existing searching and ranking techniques, leading to more reliable search results for users.

In addition to new sources, new techniques are needed to index this information…

**The Patent Application**

[Using community annotations as anchortext](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060294085%22.PGNR.&OS=DN/20060294085&RS=DN/20060294085)
Invented by Daniel E. Rose, Jianchang Mao, Zhichen Xu, David Ku, Qi Lu, Eckart Walther, and Chung-Man Tam
US Patent Application 20060294085
Published December 28, 2006
Filed: August 2, 2006

Abstract


> This invention is directed towards systems and methods for using community annotations to content items as anchortext for search and index purposes. The method In one version comprises generating one or more items of personalized information by a user for storage in a user profile, the one or more items of personalized information associated with one or more content items, the one or more content items and the one or more items of personalized information comprising one or more words. One or more items of personalized information is selected from a given user profile. The method further comprises indexing the words in the one or more content items and the words in the selected personalized information into an index, identifying one or more content items responsive to on or more query words in a query of the index and returning the identified content items as a result set to the user.

**User Profiles, and Personalized Information as Anchor Text**

This patent application attempts to improve the reliability of search results by incorporating of the users’ actions and possibly the actions of a social network of users.

One or more user profiles are created collecting personalized information describing interactions by a searcher with pages. Those interactions may include things such as:

- saving pages,
- annotating pages,
- tagging pages, and;
- other user interaction with content items.

Personalized information may be treated similarly to other information about a page for indexing, searching and ranking purposes. So, like the title of this patent application notes, annotations and tags may be treated similarly to anchor text from a web page.

That personalized information, like anchor text, includes descriptive text. It differs in that it is created by individuals other than the author of the page (of course, links from other sites are usually created by others, too).

Some other differences are that personalized information can provide descriptions, opinions and alternate forms of references (including spelling and word form variations) which may not be found on the original page.

Examples of personalized information from user profiles being used to improve indexing, searching and ranking of content items.

1. When a searcher saves a page the first time, the text of the page (including any metadata) is added to a search engine’s inverted index;
2. Any relevant personalized information is also indexed, and treated as separate fields of content from the page; and,
3. When other searchers later save the page, it is not re-indexed, but relevant personalized information from the additional users is added to the inverted index.

**Benefits to Searching an Index Which Includes Personalized Information**

1. Relevant pages may be located even though the pages don’t contain the exact wording or spelling in a user’s query.
2. Relevance scoring and ranking of pages is improved, providing more relevant results to users.
3. Personalized information may be aggregated and indexed according to communities or social networks of users, which can enable community-aware searches.
4. Aggregate personalized information (from one or more user profiles), may also be used to rank search results according to community-based features exposed by the personalized information of individual users.

An example of that last one:


> Ranking may be influenced by usage information from personalized information in user profiles, may be based on reputation or trust values for the information contained in individual user profiles or groups of user profiles, or by propagating reputation or trust values through social networks of related users.

**Reputation or Trust Values**

Reputation or trust values may also be propagated through implicit and explicit social networks.

1) An explicit social network is an explicit association between interconnected individuals, e.g., where a first user identifies an explicit relationship with one or more other users.

2) Implicit relationships in social networks, however, may be defined between two users based upon personalized information in the two user’s profiles.

Pages and personalized information (pages which a user tags, annotates, saves, etc., and those tags and annotations, etc.,) may be made available for searching in real-time.

**Streamed Search Queue**

One phrase I’ve seen for this, not mentioned in the patent application, is a “stop the press” index, which is used in addition to an inverted index.

An inverted index, which may be a word-location index, is generated for a collection of pages. As users provide personalized information, the information is added to a stream search queue, which provides for direct access to the information.

Information from the stream search queue would be indexed and written to the inverted index after a threshold is exceeded, which may be a time threshold, quantity threshold, etc.

When a user conducts a search, the system may conduct a search over the information in both the inverted index and stream search queue to identify content items that are fall within the scope of the query that the user formulates.

**Social Network**

One version of a social network is created by looking at relationships between individuals – friends, acquaintances, or family members. The search engine provides a place for people to create a profile, and identify others with whom they have a relationship.

Community based features contained within the user profiles may be used in a number of specific ways to influence the ranking of content items contained in search results.

For example:

*Raw Numbers* – ranking according to usage of pages such that the more users save a given content item, the more likely that the given content item is an important page – raw number of users who save, annotate or tag a given content item.

*Proportion of interaction* – Instead of looking at raw numbers of users who have saved, annotated or ranked a given page, instead it might see what percentage of visitors to that page interacted with it in some way.

*Recent usage* – Calculating how recently a user has saved, tagged or annotated a given page such that the ranking component assigns a higher rank to recently annotated, tagged or saved pages.

*Reputation or trust* – of users providing annotations and tags, or saving pages. Pages that are saved, annotated or tagged by high-reputation users are assigned a higher rank that those with lower reputations. A reputation-weighted average could be used, in which instead of starting with a raw count of the number of users who have saved, annotated or tagged a content item, ranking uses the sum of the reputation scores of each of the users that are saving, annotating or tagging a given content item.

**Dual TrustRank**

The Dual TrustRank technique takes advantage of two types of social structures that the search provider maintains:

1. the link structure between pages, and;
2. the social network that interconnects users as identified by relationship information contained in the user profiles in the profile data store.

The links between the two structures are the pages that the users view (e.g., navigation and search history), save (e.g., bookmark or save to the search provider), rate, share, etc.

Dual TrustRank value consists of:

- a TrustRank value for users, and;
- a TrustRank value for content items, or the domains that host the content items.

*TrustRank:*

1. Trust ratings for a user provided by other users, or;
2. Human experts may rate users on the basis of the content items that they are saving, or;
3. A trust rating may be calculated for a user based on how the pages that user is saving are being used by other members with which the given user maintains relationships.

The patent application goes into a lot of detail on how a Trustrank score may be calculated based upon how people use and interact with pages. It also can look at the freshness of those interactions, based upon timestamps related to tagging, annotating, and saving pages. The relationships between people in the social network, and the ways that they interact with pages may also help to inform the search engine as to which pages should be more trusted.

**Conclusion**

You may have heard of Trustrank from a paper titled [Combating Web Spam with TrustRank](http://www.vldb.org/conf/2004/RS15P3.PDF) (pdf). That paper is worth looking at again, within the context of the addition of using individual and aggregated user annotations and tagging and other information as described in this patent application.

A followup paper that criticized the Trustrank method in the “Combating Web Spam” paper is also pretty interesting, and you may want to also explore it in the context of the process from this patent application: [Topical TrustRank: using Topicality to Combat Web Spam](http://www.cse.lehigh.edu/~brian/pubs/2006/WWW/topical-trustrank.html)

In May of 2005, Greg Linden made an [interesting point](http://glinden.blogspot.com/2005/05/web-spam-and-trustrank.html) about Trustrank in a post about the first paper I mention in this conclusion:


> The paper describes a manual process for determining the seed set of trusted sites. I’m curious what we’d find by instead analyzing user behavior. For example, we could consider websites used over the past month by trusted people to be trusted. That is, trusted sites would be the sites the community uses and trusts.

That looks more than a little like where this Yahoo patent application is coming from. I’ll be exploring this more fully with posts about some of the related Yahoo patent applications.
