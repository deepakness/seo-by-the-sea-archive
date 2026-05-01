---
title: "Google's Agent Rank / Author Rank Patent Filing"
source_url: "https://www.seobythesea.com/2013/03/googles-agent-rank-author-rank-patent-filing/"
slug: "googles-agent-rank-author-rank-patent-filing"
date_published: "2013-03-27T18:36:24+00:00"
date_modified: "2021-07-02T15:59:17+00:00"
author: "Bill Slawski"
---

## The Google Agent Rank Patent

I originally wrote the following article 6 years ago, and it was published on Search Engine Land on February 9th, 2007. At the time, I wasn’t sure if we would ever see Google find a way to meld together ranking signals from PageRank and Information Retrieval with relevance signals from authors and publishers and commentators and editors and advertisers.

There have been many discussions recently about something being referred to as Author Rank with the launch of Google Plus. The [Agent Rank patent](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07565358&OS=PN/07565358&RS=PN/07565358) itself was granted by the USPTO on July 21, 2009. Two continuation versions of the patent have also been filed by Google since then, with one stressing the portability of reputation scores for agents, and the other pointing out that [not all endorsements from Agents](https://www.seobythesea.com/2011/11/trusted-by-google/) are equal.

I prefer the Agent Rank described in the first patent, where the reputation scores of all of the people who put together the content of a page played a role in the ranking of that page.

If you’re interested in discussing Agent Rank today, I’m one of the Google Plus Community Google Authorship & Author Rank moderators. Stop by, join if you’d like, and become part of the community.

Here’s my post from 2007:


## Google’s Agent Rank Patent Application

Google returns results based upon content appearing upon individual pages or at specific URLs. But that content could come from different authors, who have different levels of control over it. For example, a blog page may have posts written by more than one author, comments penned by others, and advertisements showing ads that even the site owner has no direct control over. A forum might have many different authors responding to an initial post and may also display advertisements.

Imagine a system that, instead of ranking content on a page level, breaks those pages down and looks at smaller content items on those pages, which it associates with digital signatures. Content creators could be given reputation scores, which could influence the rankings of pages where their content appears or own, edit, or endorse.

That’s a broad overview of a new agent rank patent application from Google:

[Agent rank](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070033168%22.PGNR.&OS=DN/20070033168&RS=DN/20070033168)

Invented by David Minogue and Paul A. Tucker
US Patent Application 20070033168
Published February 8, 2007
Filed: August 8, 2005

Abstract


> The present invention provides methods and apparatus, including computer program products, implementing techniques for searching and ranking linked information sources. The techniques include receiving multiple content items from a corpus of content items; receiving digital signatures each made by one of the multiple agents, each digital signature associating one of the agents with one or more of the content items; and assigning a score to a first agent of the multiple agents, wherein the score is based upon the content items associated with the first agent by the digital signatures.


## Agents and Authority

When we search at Google, we receive responses to queries based upon how relevant results might be to our search. The order of those results is based upon rankings influenced by both query-dependent and query-independent criteria.

Query-dependent criteria are signals that try to identify how semantically related a document is to a query, such as a word frequency distribution.

Query-independent criteria are signals that attempt to identify how authoritative, or intelligible, or trustworthy a document might be, such as PageRank. PageRank tries to look at the number of references to a document and the quality of those references.

Can authority or trustworthiness be measured in a different way, based upon understanding who the author of content on pages might be, through the use of digital signatures associated with an author? Could query-independent signals be tied to that author so that a score for content created or controlled or edited or reviewed by the author could be used to rank pages?

This patent application describes a system where that might be a possibility.


## Agent Control of a Resource

The document begins by looking at how much control agents might have over specific resources.

When all content from a resource is under the control of a single agent, the agent’s reputation can be directly related to the content of that resource. But, it’s possible that a page has more hands involved than one, each controlling different parts of a page. In that case, if the different partitions of information can be identified, the reputation for each agent might be calculated at that partition level.

Difficulties involved with this approach might involve the fact that an agent may contribute content to many different resources, a single source may be created or controlled by multiple agents, and the ownership and control of a resource may change over time.

**Benefits of the Approach**

The patent filing describes several features and approaches, and they are worth looking over, but I want to focus upon the benefits that they say this will bring to us:

1. Identifying individual agents responsible for content can be used to influence search ratings.
2. The identity of agents can be reliably associated with the content.
3. The granularity of association can be smaller than an entire web page, so agents can disassociate themselves from information appearing near the information for which the agent is responsible.
4. An agent can disclaim association with portions of content, such as advertising, that appear on the agent’s website.
5. The same agent identity can be attached to content at multiple locations.
6. Multiple agents can make contributions to a single web page where each agent is only associated with the content that they provided.


## Digital Signatures for Content

Different content pieces on a page can be signed with a digital signature, either directly by the agent or indirectly on behalf of the agent. These signatures identify who created each content piece on a page. One example for a method of creating and validating digital signatures is the World Wide Web Consortium’s [XML-Signature Syntax and Processing](http://www.w3.org/TR/xmldsig-core/)

Content pieces can have multiple signatures based upon roles and agents may take involving the content, such as author, publisher, editor, or reviewer.

An agent would have exclusive access to the private key they use to sign the content piece, and the digital signature could also include metadata such as creation date, review score, or recommended keywords for search.

Agents could sign only a portion of a page and exclude content over which they do ’t claim any responsibility, such as ads served alongside the document.

That content can range from individual hyperlinks to entire documents and include text, images, audio, or video. The signature can also allow people to verify that the signed content hasn’t been materially altered since the signature was generated.

If you want to allow your content and signature to be portable, such as for a syndicated article, you could state that in the metadata associated with the content.


## Agent Rank and Reputation Scores

Tying a page to an author can influence the ranking of that page. If the author has a high reputation, they may be considered more authoritative than similar content on other pages. If the agent reviewed or edited content instead of authoring it, the score for the content might be ranked differently.

An agent may have a high reputation score for certain kinds of content, and not for others – so someone working on-site involving celebrity news might have a strong reputation score for that kind of content, but not such a high score for content involving professional medical advice.

Reputation systems are often measured in effectiveness by how difficult they might be to attack and manipulate. Here, there are at least two factors that may help keep manipulation from happening:

1. Reputational scores may be set so that they are relatively difficult to increase and relatively easy to decrease, so that an agent may not want to place their reputation at risk by endorsing content inappropriately.
2. Since signatures of reputable agents can promote the ranking of signed content in search results, agents are provided a powerful incentive to establish and maintain good reputational scores.

The method of ranking based upon reputation scores is described in an analogy based upon PageRank. There’s also discusses an alternative possibility of using a seed group of trusted agents to endorse other content. Agents whose content receives consistently strong endorsements might gain a reputation under that method. In either implementation, the agent’s reputation ultimately depends on the quality of the content they sign.

The use of digital signatures enables the reputation system to link reputations with individual agents and adjust the relative rankings based on all of the content each agent chooses to associate with, no matter where the content may be located. That could even include content that isn’t on the internet.


## Agent Rank Conclusion

This agent rank approach is a different way of ranking pages based upon the reputations of agents who may have interacted with and digitally signed content on those pages.

Ted Nelson, one of the early pioneers of hypertext, spoke at Google a couple of weeks ago (Transclusion: Fixing Electronic Literature – link to video). He described a very different kind of hypertext than what we are familiar with, which involved a system for connecting electronic documents with content from multiple sources appearing on the same pages together. The last question in the Q& part of the presentation asked how his electronic documents might be connected so that they can be found easily. His answer, “I guess Google will do that.” This isn’t the system that Ted Nelson envisioned, but it shares some similarities.

I could see blogging systems building tools that allow for digital signatures like the ones described here, such as the [Typekey](https://www.typepad.com/benefits) feature in Typepad to authenticate the identity of commentators on multiple blogs.

Last Updated June 8, 2019
