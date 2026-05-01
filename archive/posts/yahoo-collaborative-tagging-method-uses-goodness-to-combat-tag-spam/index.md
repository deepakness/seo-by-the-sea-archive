---
title: "Yahoo Tag Suggestions Use Goodness to Combat Tag Spam"
source_url: "https://www.seobythesea.com/2007/07/yahoo-collaborative-tagging-method-uses-goodness-to-combat-tag-spam/"
slug: "yahoo-collaborative-tagging-method-uses-goodness-to-combat-tag-spam"
date_published: "2007-07-31T00:26:07+00:00"
date_modified: "2020-06-20T15:00:49+00:00"
author: "Bill Slawski"
---

## Goodness and Tag Suggestions

Tagging allows people to assign labels to contents using keywords so that they can share what they find, recall what they’ve looked at before, and discover content that others have labeled.

Tagging can also be prone to spam, and bad suggestions for tags. A Goodness Measure might be used to offer tag suggestions, that avoid bad tags and spam in those suggestions, and that looks at:

- The authority of a person tagging,

- The probability that a person tagging an object with one keyword might tag the same object with another keyword that frequently co-occurs with the first one in the tags used by others for that object,

- The probability that any object tagged with one keyword is tagged with the other keyword, based upon tags used by others.

- A Goodness Measure Score of the tag to the object, which uses the sum of the authority scores of all users who have assigned that tag to that object.

A patent application from Yahoo on [Systems and methods for collaborative tag suggestions](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070174247.PGNR.&OS=dn/20070174247&RS=DN/20070174247), published last week, provides some ideas on how such a system could be created and used.

Tagging plays a strong role in three of the offerings from Yahoo – [Flickr](https://www.flickr.com/), Del.icio.us, and My Web 2.0 (now Yahoo Bookmarks). Would it be a surprise for them to start offering collaborative tagging suggestions? When you start typing a tag in Del.icio.us, a dropdown may appear which shows suggestions. Why offer these suggestions, and how do they benefit users?

Here’s the abstract from the tag suggestions patent application:

Abstract


> A set of general criteria have been defined to improve the efficacy of a tagging system, and have been applied to present collaborative tag suggestions to a user. The collaborative tag suggestions are based on a goodness measure for tags derived from collective user authorities to combat spam. The goodness measure is iteratively adjusted by a reward-penalty algorithm during tag selection. The collaborative tag suggestions can also incorporate other sources of tags, e.g., content-based auto-generated tags.

**Tagging**

Tagging allows users to enter free form labels for any object, and they don’t have to try to classify those objects into some universal ontology. Taggers can also use combinations of tags.

There are some difficulties in using tags, though:

1. Unlike physical objects, digital contents are seldom semantically pure so as to fit in a specific category; and,
2. It is difficult to predict the paths through which a user would explore to discover a given object.
3. The number of tags tends to multiply at an exorbitant rate.
4. The structure of a traditional hierarchy disappears.

**Faceted Classification**

Tagging is similar in some ways to faceted classification, which uses “clearly defined, mutually exclusive, and collectively exhaustive aspects to describe objects.”

The patent application provides the example of a music piece, which can be identified by facets such as artists, albums, genre, and composer.

A faceted system created by experts is going to be more complete than what is found in the free form tagging of objects.

**How this system works**

Collaborative filtering is used to suggest tags to users, supposedly “leveraging the collective wisdom of groups of users.”

The suggested tags have properties that include:

- High coverage of multiple facets (covering different aspects or facets),
- High popularity, and;
- Least effort.

If the tags are used by a large number of people for a particular object, these tags are likely to be used by a new user for the given object.

Least-effort has two meanings as described in this document:

1. the number of objects identified by the suggested tag combination should be small,
2. the number of tags for identifying an object should be minimized as well.

This makes it easier to find tagged content again.

The patent application delves pretty deeply into:

- How annotations may be made,

- How user profiles can be created to understand who the people are who are tagging content,

- How a social network can be used to understand relationships between different taggers,

- How the co-occurrence of tags can be used to cover more facets of an object,

- How tags might be suggested based upon a collaborative assessment of previously applied tags, from members of a social network,

- How an autocompletion function can be used to suggest tags,

**Calculating the Goodness Measure**

The idea behind the Goodness Measure is to try to help offer suggestions of “good” tags.

Here are the variables used to calcuate the Goodness measure (referred to above):

1. An authority score “a(u),”
2. a probability function associated with the same user “P.sub.s(t.sub.i|t.sub.j;o),”
3. A probability function associated with all users “P.sub.a(t.sub.i|t.sub.j),” and;
4. A goodness measure “VC(t, o), where u denotes a user, o denotes an object, and t, t.sub.i, and t.sub.j are tags.”

The first part, the authority score, is tied to the person doing the tagging. The more consistently a person tags with the majority, the higher their authority score.

The other parts of the Goodness Measure are expanded upon more fully in [Yahoo Towards the Semantic Web: Collaborative Tag Suggestions](http://www.ibiblio.org/www_tagging/2006/13.pdf), which I pointed to at Search Engine Land in a post which describes a good number of related papers and patent filings – [The Social Side Of Trustrank](https://searchengineland.com/the-social-side-of-trustrank-10235).

**A little more…**

The site Boxes and Arrows sometimes takes a look back at the history of information architecture. While reading through this patent application, I was reminded of a couple of these Boxes and Arrows articles:

- [Ranganathan for IAs](https://boxesandarrows.com/ranganathan-for-ias/)
- [Forgotten Forefather: Paul Otlet](https://boxesandarrows.com/forgotten-forefather-paul-otlet/)
