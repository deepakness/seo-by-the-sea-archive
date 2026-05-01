---
title: "Expanding Google Suggest in Legal Dispute"
source_url: "https://www.seobythesea.com/2006/05/expanding-google-suggest-in-legal-dispute/"
slug: "expanding-google-suggest-in-legal-dispute"
date_published: "2006-05-21T13:12:42+00:00"
date_modified: "2017-01-25T09:56:41+00:00"
author: "Bill Slawski"
---

Google has had a new patent application published at the US Patent and Trademark Office (USPTO) which provides an expanded view of how it may present real time suggestions for queries when someone is typing words into a search box. At the same time, Google has come under fire, and faces litigation, for their predictive suggestions.

This post takes a quick look at the litigation, the new patent application, some of the additional processes that it uses in filtering and collecting information about queries, and why all this might matter to people who are interested in having their web sites found through Google.

**Litigation over Google Query Suggestions**

A Belgian software company is [pursuing legal proceedings](https://serverscheck.com/press/releases/20060517.asp) against Google for toolbar suggestions which are pointing to illegal versions of the software that company offers, when someone searches for their name. The case was originally initiated back in February, and appears to be ready to go to trial. It raises some interesting issues involving what happens when a search engine provides suggestions in a tool like Google Suggest, or though a toolbar.

In December, I took a look at a patent application that appears to describe how Google Suggest works in [Can Google Read Your Mind? Processing Predictive Queries](https://www.seobythesea.com/2005/12/can-google-read-your-mind-processing-predictive-queries/). The patent application also noted that Google could be offering suggestions through the Google toolbar (which it has been doing in the Firefox version of the toolbar since last year). My post looked at the process of making predictive queries in a fair amount of detail, so if you are interested in how their process may work, you may want to visit that post.

There’s also some nice discussion on the techical aspects of Google Suggest in [this Life With Alacrity post](http://www.lifewithalacrity.com/2004/12/google_suggest_.html), and [this post](http://serversideguy.blogspot.com/2004/12/google-suggest-dissected.html) from Chris Justus.

It’s difficult to tell what impact that litigation may have, but an update to that patent application has come out, which describes some further aspects of how the software may work, and expands its use to languages which use non-alphabetical characters, such as Japanese.

**The New Patent Application**

This new patent application is [Method and system for autocompletion for languages having ideographs and phonetic characters](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060106769%22.PGNR.&OS=DN/20060106769&RS=DN/20060106769) (US Patent Application 20060106769 ).

The inventor is listed as [Kevin A. Gibbs](https://googleblog.blogspot.com/2004/12/ive-got-suggestion.html), and it was first filed on November 12, 2004, and published at the US Trademark and Patent Office on May 18, 2006. Here’s the abstract from the document:


> A set of ordered predicted completion strings including strings of ideographs are presented to a user as the user enters text in a text entry box (e.g., a browser or a toolbar). The user entered text may include zero or more ideographs followed by one or more phonetic characters, or the entered text may be one or more. The predicted completion strings can be in the form of URLs or query strings. The ordering may be based on any number of factors (e.g., a query’s frequency of submission from a community of users). URLs can be ranked based on an importance value of the URL. The sets of ordered predicted completion strings are obtained by matching a fingerprint value of the user’s entry string to a fingerprint to table map which contains the set of ordered predicted completion strings. The generation of the ordered prediction strings takes into account multiple phonetic representations of certain strings of ideographs.

While my December post went into a fair amount of detail on the predictive process, this adds some additional information not covered there on filters that may be applied to showing some suggestions, and on meta information associated with possible queries that may be shown to different users of the service.

**Filtering Predictive Suggestions**

One or more filters may be applied in producing these predictive queries, which can eliminate some suggestions based upon different criteria:

- A Privacy Filter – since some suggestions will be based upon queries from others, those suggestions won’t be shown unless there have been a certain amount of those queries made by different people. This should keep unique queries, that weren’t intended to be shared with the world from being shown as suggestions.
- An Appropriateness Filter – which may block certain queries from inclusion based on a number of different factors, which the patent application really doesn’t define.
- A Recency Filter – which could block queries submitted earlier than a particular historical point in time.
- An Anti-Spoofing Filter – which would be used to prevent the query/URL prediction system from being spoofed by a large number of artificially generated queries or URL submissions. It might filter out multiple submissions of the same query or URL received from the same user or from the same client computer.

**Meta Information Associated with Candidate Queries**

In addition to filtering some queries, this predictive suggestion process would also associate some meta information with potential suggested queries.

Some of the types of meta information:

- Location of where a query was made – a geographical region, (i.e., Europe or Asia),
- User profile information, to indicate what types of users had submitted the query,
- Language of the user searching for the information,
- Category of information that the query may belong within,
- A date/time stamp of when the query was made,
- IP addresses, or groups of addresses from where the query was made, and;
- Frequency with which the query is made.

Some of this meta information could lead to the scoring of a query, as appropriate for a person making the search, such as the language that they are using, their geographical and network (IP address) location, and possibly user profile information associated with them. Queries that are candidates for presentation may be shown to a searcher if they are considered a good match based upon this type of meta information.

**Ideographs and Phonetic Characters**

The patent filing goes into a fair amount of detail about how non-alphabetical languages may have this process applied to them to predict queries, and offer suggestions to searchers.

In many ways, there isn’t much difference between how this process will be applied to these languages from the process described in the earlier patent application, though it does show some nice examples involving the unique problems faced with applying it for use with the Japanese language.

**Implications of This Predictive Process**

If you are deciding upon keywords that you might use on a site, it could make sense to look at the predictive queries that Google offers when you type in a keyword or keyword phrase into Google Suggest. I’d recommend this for a couple of reasons:

- Google Suggest could be integrated into the normal Google search function. (It already is in the Firefox version of the Google Toolbar.)
- You may gain some insight into which popular phrases might be similar to the one that you are considering using, and may consider some other phrases worth using for your site.

Even if you have already optimized pages of your site for keyword phrases, you might want to take a look at the phrases that you are using in Google Suggest. The results may surprise you, like they have the Belgian company that is presently suing Google over the suggestions made for illegal versions of their software.
