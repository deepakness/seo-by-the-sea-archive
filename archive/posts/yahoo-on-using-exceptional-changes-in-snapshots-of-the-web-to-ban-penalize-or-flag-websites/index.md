---
title: "Yahoo on Using Exceptional Changes in Snapshots of the Web to Ban, Penalize, or Flag Websites"
source_url: "https://www.seobythesea.com/2007/08/yahoo-on-using-exceptional-changes-in-snapshots-of-the-web-to-ban-penalize-or-flag-websites/"
slug: "yahoo-on-using-exceptional-changes-in-snapshots-of-the-web-to-ban-penalize-or-flag-websites"
date_published: "2007-08-29T07:45:28+00:00"
date_modified: "2007-08-29T07:45:28+00:00"
author: "Bill Slawski"
---

There’s a body of what could be described as folklore surrounding how search engines work. These tales, or sometimes superstitions, may have a grounding in a comment made by a presenter from a search engine during a conference, or a statement made upon a search engine blog, or just an assumption that a search engine has to work a certain way in order to do some of the things that it does.

One of these that many have taken for granted is that a search engine could notice large shifts or changes on the Web, such as a site suddenly gaining lots of lots of pages, or outgoing links, or incoming links which might increase their rankings in the search engines. I recall a Google representative at a conference I attended answering a question about how a search engine could notice such things, where he said that they could because they have “lots and lots of computers.”

A Yahoo patent application from last week, [Using exceptional changes in webgraph snapshots over time for internet entity marking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070198603.PGNR.&OS=dn/20070198603&RS=DN/20070198603) (US Patent Application 20070198603), provides some insight into how such changes could be flagged automatically, and also could “identify exceptional entities that exhibit abnormal attributes or characteristics due solely to their excellence and high quality.”

The abstract from the patent filing tells us:


> Techniques are provided through which “suspicious” web pages may be identified automatically. A “suspicious” web page possesses characteristics that indicate some manipulation to artificially inflate the position of the web page within ranked search results.
>
> Web pages may be represented as nodes within a graph. Links between web pages may be represented as directed edges between the nodes. “Snapshots” of the current state of a network of interlinked web pages may be automatically generated at different times. In the time interval between snapshots, the state of the network may change.
>
> By comparing an earlier snapshot to a later snapshot, such changes can be identified. Extreme changes, which are deemed to vary significantly from the normal range of expected changes, can be detected automatically. Web pages relative to which these extreme changes have occurred may be marked as suspicious web pages which may merit further investigation or action.

The changes that might be tracked may apply to individual web pages, or to specific domains, or even hosts, and extreme changes could cause pages to “be marked as suspicious web pages which may merit further investigation or action.”


> For example, a first snapshot of a network of interlinked web pages might indicate that a particular web page contains ten outgoing links. A second snapshot of the network, taken a mere week later, might indicate that the particular web page contains one thousand outgoing links. If the normal expected change in each web page’s number of outgoing links over a week is in the range of five links, then the particular web page may be marked as a suspicious web page.

When suspicious changes are noticed, there may be a number of results possible under the patent filing:

1. Pages involving those changes may be automatically eliminated from search results from the search engine.

2. The rankings of all references to those Web pages may be automatically reduced so that the pages appear lower within search results.

3. The pages are logged so that they can be manually reviewed by human inspectors, to see if the changes are the result of artificial manipulation.

The document describes the possible use of a white list of web pages, hosts, domains, and/or other entities, for sites that search engine administrators know are “popular and legitimate.” Those would be automatically excluded from identification as suspicious entities. The example given for such a site is “yahoo.com.”

A variation of this process would not automatically exclude pages from future lists of search results, nor adjust their rankings downward, but would instead result in a further evaluation based upon other criteria. The example given is that a web page deemed suspicious might be checked by a program to see if it can find words which are “usually found in artificially manipulated web pages” such as ones dealing with pornography or prescription drugs. This evaluation of content could be done in an automated manner.

It’s also possible that pages identified as suspicious based upon extreme changes over time might be used as training data to find features that suspicious pages tend to share, and can use those features to help determine if other pages are “suspicious.”

Those machine learning techniques may also be used on pages that are known to be legitimate, to help “prevent other entities that possess these features from being treated as suspicious entities.”


> Thus, embodiments of the invention may implement machine-learning mechanisms to continuously refine definitions of high-quality web pages and other entities so that such high-quality web pages and other entities can be automatically identified with greater precision and accuracy. Such embodiments of the invention are useful even in the absence of the growth of suspicious entities.

**Conclusion**

The process of tracking changes in things such as the number of links to and from pages, and domains and hosts, and a search engine automatically taking some kind of action upon extreme and suspicious changes is something that many have probably assumed is happening with all of the major search engiines. It feels a little less like folklore, and a little more like fact after seeing the process described in a patent application.
