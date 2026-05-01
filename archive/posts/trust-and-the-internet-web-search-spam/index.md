---
title: "Trust and the Internet: Web Search Spam"
source_url: "https://www.seobythesea.com/2006/05/trust-and-the-internet-web-search-spam/"
slug: "trust-and-the-internet-web-search-spam"
date_published: "2006-05-14T23:13:04+00:00"
date_modified: "2021-05-01T19:51:27+00:00"
author: "Bill Slawski"
---

Trust is a topic that has a profound effect on the way search engines work on the web.

How easy or difficult is it to come up with methods that don’t rely (much) on human judgment to identify spam-free pages that can be trusted and to locate pages that are intended solely to rank well in search engines without providing any value at all for visitors, except possible ads that are on the topic of their search?

In a week, there will be a gathering in Edinburgh, Scotland, during the [15th Annual World Wide Web Conference](http://web.archive.org/web/20160927180903/http://www2005.org:80/), on the subject of Models of Trust for the Web. While I won’t be attending, it sounds like an interesting presentation, and I wanted to take a look at some of the papers written by presenters at the conference. In this post, I’ll be looking at one of the papers to be presented and listing some of the other work by its authors.

**Problems with Yahoo’s Trustrank Assumptions**

One of the presentations during the “Models of Trust for the Web” presentation is on [Propagating Trust and Distrust to Demote Web Spam](http://www.olmedilla.info/events/MTW06_papers/paper16.pdf) by [Baoning Wu](http://web.archive.org/web/20160806075528/http://wume.cse.lehigh.edu/~wu/), [Vinay Goel](http://web.archive.org/web/20110119082221/http://www.cse.lehigh.edu:80/~vig204/) and [Brian Davison](http://www.cse.lehigh.edu/~brian/), from Lehigh University.

This paper takes a critical look at the Trustrank approach that Yahoo has developed, which can be seen in a recent patent application from the company, [Link Based Spam Detection](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060095416%22.PGNR.&OS=DN/20060095416&RS=DN/20060095416), and in a [paper on Trustrank](http://www.vldb.org/conf/2004/RS15P3.PDF) from 2004.

The concept of TrustRank could be said to run on two assumptions. One is that good sites tend to point mostly at good sites. The second is that the more links to other sites are on a “good” page, the less care there was in selecting those sites, and less concern over checking up on them regularly.

The first of the assumptions means that a seed set of good sites can be used as a starting point for finding and indexing other good sites. The second means that the amount of trust given to sites pointed to in those links would be divided amongst the total number of links on a “good” seed site. This Lehigh paper challenges those assumptions:


> This assumption is open to argument. Why should two equally trusted pages propagate different trust scores to their children just because one made more recommendations than the other? Also, concerning the accumulation of trust scores from multiple parents, TrustRank puts forth just one solution: a simple summation. There are other alternatives.

and


> In general, spam pages can be considered to be one type of untrustworthy page. To elaborate on this idea, consider that a page links to another page, and hence according to the above definition of trust, this page expresses trust towards the target page. But if this target page is known to be a spam page, then clearly, the trust judgment of the source page is not valid. The source page needs to be penalized for trusting an untrustworthy page. It is likely that the source page itself is a spam page or is a page that we believe should not be ranked highly for its negligence in linking to an untrustworthy page.

In addition to looking at alternative ways to propagate trust along with the web, the paper sets an eye upon locating and propagating distrust on the web and using scores from both approaches to try to reduce the amount of webspam indexed in search engines.

**Other works by the authors**

Here are five other recent papers that also look at webspam from Brian Davison and Baoning Wu.

Also to be presented at the 15th Annual World Wide Web Conference:

[Detecting Semantic Cloaking on the Web](http://www.cse.lehigh.edu/~brian/pubs/2006/WWW/semantic-cloaking.pdf)

[Topical TrustRank: Using Topicality to Combat Web Spam](http://www.cse.lehigh.edu/~brian/pubs/2006/WWW/topical-trustrank.pdf) (with Vinay Goel)

From the 21st ACM Symposium on Applied Computing, in April 2006

[Undue Influence: Eliminating the Impact of Link Plagiarism on Web Search Rankings](http://www.cse.lehigh.edu/~brian/pubs/2006/SAC/link-plagiarism.pdf)

From the 14th International World Wide Web Conference

[Identifying Link Farm Spam Pages](http://www.cse.lehigh.edu/~brian/pubs/2005/www/link-farm-spam.pdf)

From the First International Workshop on Adversarial Information Retrieval on the Web (AIRWeb), held at WWW 2005

[Cloaking and Redirection: A Preliminary Study](http://www.cse.lehigh.edu/~brian/pubs/2005/airweb/cloaking.pdf)
