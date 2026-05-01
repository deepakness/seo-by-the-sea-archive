---
title: "Are You Trusted by Google?"
source_url: "https://www.seobythesea.com/2011/11/trusted-by-google/"
slug: "trusted-by-google"
date_published: "2011-11-28T13:15:40+00:00"
date_modified: "2018-02-10T16:15:11+00:00"
author: "Bill Slawski"
---

Are you a robot? A spammer? A sock puppet? A trusted author and content developer? A *trusted agent* in the eyes of Google? (More on trusted agents below.)

When you interact on a social network, or write a review online or update information to an internet mapping service, how much does the service you are using trust the content that you add, or the changes that you might make?

These aren’t rhetorical questions, but rather ones at the heart of approaches from services like Google Web search and Google Maps, which are focusing more and more upon social signals and social collaboration to provide the information that they do to the public.

If you’ve seen a +1 button within Google’s search results or on a site, and you’ve clicked upon it, or shared a page or post or site in Google Plus with others, you’ve engaged in endorsing the work of the author who created that site. How much weight does Google give that endorsement?

If you find an error on a Google Place page, such as an incorrect phone number or bad street address, and you take the time to try to correct that, what process might Google go through to decide if you’re telling the truth?

**Google’s Crowdsensus Algorithm**

In a whitepaper from last year, [Reputation Systems for Open Collaboration](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/36757.pdf) (pdf), Bo Adler of Fujitsu Labs of America, Ian Pyey of CloudFlare, Inc., and Luca de Alfaro and Ashutosh Kulshreshtha from Google describe two different collaborative reputation systems that they worked on. One of them is a WikiTrust reputation system for Wikipedia authors and content, and the other is the Crowdsensus reputation system for Google Maps editors.

Both systems are interesting, and as the authors note, both fulfill very different needs in very different ways. The overview presented about Crowdsensus, and the needs that it fills and how it differs from the WikiTrust reputation system presents an interesting look at how Google might approach other reputation systems where they might not want to explicitly share the reputation scores of people who participate.

While we are given some hints in the paper about how Google might use reputation scores when looking at edits people provide on business location information in Google Maps, we aren’t provided much about how those reputations are calculated. We are told though that the use of reputation scores result in much smaller error rates than in a system that doesn’t use them.

I did write about another approach that Google might follow with edits to business locations for Google Maps last month in the post [GPS to Correct Google Maps and Driving Directions as a Local Search Ranking Factor?](https://www.seobythesea.com/2011/10/gps-to-correct-google-maps-and-driving-directions-as-a-local-search-ranking-factor/), which looked at a Google patent titled [Trusted Maps: Updating Map Locations Using Trust-Based Social Graphs](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110238735%22.PGNR.&OS=DN/20110238735&RS=DN/20110238735), which also uses a collaborative trust/reputation approach in how it weighs edits to Google Maps.

**Not All Google +1s are Equal**

I’ve written about Google’s Agent Rank here a few times recently, and Google published a [new Agent Rank](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110289095%22.PGNR.&OS=DN/20110289095&RS=DN/20110289095) continuation patent application last week which expands upon one aspect of the patent filing within its claims section.

Within the description section of the Agent Rank patents, we are told that:


> Not all references, however, are necessarily of equal significance. For example, a reference by another agent with a high reputational score is of greater significance than a reference by another agent with a low reputational score.
>
> Thus, the reputation of a particular agent, and therefore the reputational score assigned to the particular agent, should depend not just on the number of references to the content signed by the particular agent, but on the importance of the referring documents and other agents.
>
> This implies a recursive definition: the reputation of a particular agent is a function of the reputation of the content and agents which refer to it.

The claims section of the newest version of this patent is transformed to focus upon this aspect of Agent Rank. It introduces the concept of “trusted agents,” who might endorse content items created by others.

That kind of endorsement can increase the reputation score for the creator of that content.

The patent doesn’t explicitly mention things like a +1 of a page or content, or the sharing of a page or Google Plus post, but the framework that it presents is one that could easily encompass those types of activities.

The patent doesn’t elaborate upon who a “trusted agent” might be, or how someone becomes a trusted agent. Is Google using Agent Rank as part of how they develop reputation scores for people who are creating content associated with authorship markup, and the digital signatures those provide, as well as people who post at Google Plus?

When Google initially announced that they would be looking at [Authorship markup](https://webmasters.googleblog.com/2011/06/authorship-markup-and-web-search.html) in June, they told us that they helped integrate it into a number of sites such as the New York Times, the Washington Post, and CNET. They also added the markup to everything hosted by Blogger and YouTube, so that everything published there would automatically include the markup when published.

**Agent Rank**

While doing that, Google introduced digital signatures to a large amount of content on the Web, which is a good start towards introducing Agent Rank to the Web, and the use of reputation scores in the ranking of content on the Web, as well as a way to help identify who the original author of that content might be.

Here are some of my earlier posts on Agent Rank and reputation scores from Google, which may help to provide some background details on how Google might use an Agent Rank/User Rank approach to integrating the concept of reputation and trust into Web search rankings:

- [Google’s Agent Rank Patent Application](https://searchengineland.com/googles-agent-rank-patent-application-10487) – On the original Agent Rank patent, and its potential use of digital signatures to associate content with the original creators of that content.
- [How Google Might Rank User Generated Web Content in Google + and Other Social Networks](https://www.seobythesea.com/2011/07/how-google-might-rank-user-generated-web-content-in-google-and-other-social-networks/) – Which looks at the User Rank approach that Google has been developing with its “Confucius” Q&A sites, that looks beyond shares and +1s to contributions from authors and their meaningful interactions with others in an automated manner that can be used to develop a reputation score for people.
- [Author Markup, Schema.org and Patents, Oh My!](https://www.seobythesea.com/2011/06/author-markup-schema-org-and-patents-oh-my/) – About how Google was enabling people to use HTML markup to “claim” content that they have created.
- [After Authorship Markup, Will Google Give Us Author Badges Too?](https://www.seobythesea.com/2011/08/after-authorship-markup-will-google-give-us-author-badges-too/) – Google profile images appearing upon your pages, and Google Plus Badges sound very similar to the badges described in the patent I wrote about in this post.
- [Agent Rank, or Google Plus as an Identity Service or Digital Signature](https://www.seobythesea.com/2011/11/agent-rank-or-google-plus-as-an-identity-service-or-digital-signature/) – When Google’s Eric Schmidt noted at a few public events this past summer that Google Plus wasn’t a social network, but rather an identify service, it seems that response wasn’t so much about the use of anonymous names on Google Plus, but rather how digital signatures might fit into Google’s future.
- [Google’s New Freshness Update: Social Media Has Changed the Expectations of Searchers](https://www.seobythesea.com/2011/11/googles-freshness-update-social-media-expectations-of-searchers/) – One of the ways that a search engine can identify topics and queries that are trending is to keep an eye on social media services like Google Plus. It’s quite possible that topics noted by people with higher reputation scores might be given more weight than people with lower reputation scores.

**Conclusion**

One of the things that I’ve been watching in Google Search results is how often I might see an author profile next to a search result from Blogspot, since Google supposedly integrated authorship markup for content at Blogger. I don’t recall seeing any yet, and I’ve been wondering why.

Is it because I’m just not seeing any blogspot results, or is there some kind of reputation threshold that needs to be met by the authors of those posts before Google will start showing them?

I know more than a couple of people who have added authorship markup to their pages, and haven’t started seeing authorship profiles next to content they’ve created when it shows up in search results. Is that because they need to meet some level of reputation first? Is it because Google has purposefully limited who it is showing profiles for at this point, and deciding upon where a reputation threshold should be?

Is it a question of trust on Google’s part?

Are reputation or user rank scores influencing rankings in search results at present? Chances are that they may be in the future, if they aren’t now.

How does one become a “trusted agent?”

*Added November 29, 2011* Highly recommended that you check out Justin Briggs’ post [Building The Implicit Social Graph](https://moz.com/blog/building-the-implicit-social-graph), which takes a thoughtful look at how Google is exploring the relationships and interactions between people on social networks. As Justin concludes there:


> It’s no secret that the social graph appears to be the next evolution with increasing uses of social factors, social elements in search, and mechanisms that will lead into AgentRank/AuthorRank, which will tie directly into the implicit social graph.
