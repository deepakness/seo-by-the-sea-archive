---
title: "Google's Paid Link Patent"
source_url: "https://www.seobythesea.com/2014/05/googles-paid-link-patent/"
slug: "googles-paid-link-patent"
date_published: "2014-05-13T21:11:29+00:00"
date_modified: "2022-01-07T14:03:57+00:00"
author: "Bill Slawski"
---

There are things that we just don’t know about search engines. Things that aren’t shared with us in an official blog post, or search engine representative speaker’s conference comment, or through a publicly published white paper. Often we do learn some aspects of how search engines work through patents, but the timing of those is controlled more by the US Patent and Trademark Office than by one of the search engines.

For example, back in 2003 Google was filing some of their first patents that identified changes to how their ranking algorithms worked, and among those was one with a name similar to the original Stanford PageRank patents filed by Lawrence Page. It has some hints about PageRank and Google’s link analysis that we haven’t officially seen before.

If you want a bit of a history lesson you can see the first couple of those PageRank patents at [Method for scoring documents in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=06799176&OS=PN/06799176&RS=PN/06799176) (US Patent 6,799,176) and [Method for node ranking in a linked database](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=06285999&OS=PN/06285999&RS=PN/06285999) (US Patent 6,285,999).

The similarly named patent is:

[Ranking nodes in a linked database based on node independence](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08719276&OS=PN/08719276&RS=PN/08719276)
Invented by Paul Haahr, Martin Kaszkiel, Amit Singhal
Assigned to Google Inc.
US Patent 8,719,276
Granted May 6, 2014
Filed January 4, 2011

Abstract


> A system includes a ranking component that ranks nodes, such as web sites, to obtain ranking values that define a quality judgment of the nodes. The ranking values are based on links between the nodes and, among other things, deemphasize links between affiliated nodes. Additionally, the amount of rank that any particular node can contribute to another node may be capped at a threshold level, thus tending to prevent some nodes from unduly influencing the ranking values.

This is the fourth version of the patent. It is a continuation of the first one filed in 2003, with the original three officially abandoned by Google. It’s based upon PageRank and it’s aimed at addressing some problems with PageRank. These include people “paying another site, with high rank, to link to the web site.” It’s also aimed at:


> In general, any artificial attempts to improve the ranking of a web site by “tuning” the web site to a specific ranking algorithm does not improve the user-perceived quality of the web site and may thus decrease the overall performance of the search engine.

One of the mysteries alluded to Google is the role that Amit Singhal, presently the head of Google search quality, had in the early days of Google.

He supposedly helped re-write Google’s ranking algorithms in 2001 according to articles such as Exclusive: How Google’s Algorithm Rules the Web>. What we aren’t told is what changes he implemented in that particular re-write. At this point, it’s still a mystery waiting to be uncovered. Amit Singhal is one of the named inventors on this patent, and it makes some changes to the way that PageRank may be used when ranking pages. Is it the “re-write” of Google’s ranking algorithm?

We don’t know if the changes described in the patent are ones that were implemented by Google, or if Google has held off on making the changes. Google’s persistence in seeing this patent through from being filed in 2003 to the third followup being granted a week or so ago as a continuation patent shows us that they are serious about it being used, though whether or not it has been used over the last decade is something that we can’t be sure of.

Today, Google’s Matt Cutts responded by video to a [question from Barry Schwartz](https://www.seroundtable.com/google-cutts-spam-regrets-18541.html), “Was there a key moment in your spam fighting career where you made a mistake that you regret, related to spam?” Interestingly, the answer involves one of the topics that this recently granted patent covers – not fighting paid links more actively.

The patent doesn’t go into a great amount of detail on how it might identify paid links, but we’ve seen Google penalize sites over the years because they are linked to by paid links.

The patent does discuss how it might cluster links from “affiliated” or related sites. These are sites which might “have related or shared organizational control, or otherwise do not appear independent.”


> In other words, ranking component may determine that multiple nodes should be clustered when there is a high probability that all of the nodes are controlled by a single entity. Ranking component may automatically classify nodes into clusters based on one or more of a number of possible factors. For example, the determination of affiliation can be based on node graph structure, similarity of node content (e.g., text or structure), ownership records, manually entered information, or other factors.
>
> One implementation for determining affiliated nodes may be based simply on common ownership information as given by a WHOIS search.

The patent also tells us that some nodes or sites might be determined to be a “trusted authority” which might pass along a certain threshold of link value. This calculation of how much of an authority a node might be looks like it’s part of a process very similar to the calculation of PageRank.

It appears that even a node that might be a completely trusted authority might not pass along a full vote, but instead may be limited to a threshold.

The following conclusion in the patent points to different ways that it might limit the weight of links pointed from one node (or site) to other pages when pages are seen to be affiliated with one another.


> The calculated ranks reflect a number of desirable properties when ranking nodes based on node quality. Multiple links from affiliated nodes are deemphasized, thus reducing the possible effect on the rank by a single entity, such as a commercial “link farm” attempting to artificially boost the rank of certain nodes.
>
> Additionally, because the maximum vote amount that a single node can contribute is capped to a full vote value, “super nodes” that receive an extremely high number of inbound links, and thus would otherwise have an extremely high rank, are restricted from having undue influence on the ranks of the nodes to which it links. Further, because authority nodes contribute a set vote amount regardless of the number of nodes linked to, nodes are discouraged from hoarding rank by only linking to a few sites.

So this patent has added to our knowledge of SEO the ideas that Google may assign sites some level of trust/authority that may determine how much link weight that each can pass along, and that Google actively attempts to understand when sites are affililated with each other by things like common ownership or control (including control via paying for links).


## Takeaways

I was reminded of another Google patent when I first saw that one, that I wrote about in [Google’s Affiliated Page Link Patent](https://www.seobythesea.com/2010/08/googles-affiliated-page-link-patent/) which shares Amit Singhal as a co-inventor, and provides more details on how Google might identify “affiliated” or co-owned web sites.

The discussion in this patent about thresholds is the first I can recall from Google on how they might score link weight from a site and limit how much might get passed along based upon some kind of threshold. There probably are other thresholds that are associated with ranking signals, though they might be a unknown and unnamed mystery like the thresholds from this patent was until a week ago.
