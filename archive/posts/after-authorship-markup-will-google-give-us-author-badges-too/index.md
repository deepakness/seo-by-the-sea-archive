---
title: "After Authorship Markup, Will Google Give Us Author Badges Too?"
source_url: "https://www.seobythesea.com/2011/08/after-authorship-markup-will-google-give-us-author-badges-too/"
slug: "after-authorship-markup-will-google-give-us-author-badges-too"
date_published: "2011-08-05T12:28:25+00:00"
date_modified: "2019-04-19T11:27:25+00:00"
author: "Bill Slawski"
---

This past June, Google presented a way for us to use HTML to indicate that we are the authors of blog posts and online articles and other content on the Web. The details were introduced in [Authorship markup and web search](https://search.googleblog.com/2011/06/authorship-markup-and-web-search.html). I wrote more about it in [Author Markup, Schema.org and Patents, Oh My!](https://www.seobythesea.com/2011/06/author-markup-schema-org-and-patents-oh-my/)

One of the benefits of using [Authorship Markup](https://productforums.google.com/forum/#!forum/webmasters) is the possibility of Google search results showing your Google Profile image to the right of pages that you’ve used the markup on to indicate as being from you, along with a link to that profile. It’s possible that the Authorship markup might be the start of something bigger.

The image above is from a Google patent application published this week which describes a very similar approach to Google’s Authorship Markup, using rel=author markup as well as Author Badges which could be placed or linked to from author bylines or at the end of an article, or in a section of a page such as a comment on a blog or a post at a forum. Note the example URL at the bottom of the image, which includes a link to an Author Badge as well as a rel=”author”. It appears that the process described in this patent filing might enable you to sign into your Google Account, and attach your Google Badge to pages where you author content. This system would also allow others to use the badge to verify that you are the actual author.

There are a number of reasons to use this kind of system, and situations where it could be useful.

One is verification of authorship – I’ve had comments left on my blog recently from Martin Luther King and JayZ, except they really weren’t. If you are JayZ or Steve Jobs or Bill Gates or Stephen Hawking, and you decide to leave some comments on blogs, it’s possible that many bloggers would question whether or not those comments were real or not. If you attached a verifiable name badge, that might help.

If you usually write on your own site, but you decide to write a guest blog post elsewhere or submit an article to a site or become a columnist at another site, you could attach a authorship badge to your content to verify that you are the author of that content on those pages. In adding a badge to that particular post at that location, you would be telling the system both what you’ve posted, and where.

Oddly, the patent’s authors insist that this system wouldn’t be helpful in detecting or protecting against online plagiarism, but rather would “detect and protect against revision of content after it has been posted by a person or entity.” I could see Google identifying the same content posted in two different places, one with a name badge and one without, and deciding that the post or article or comment with the badge is the “original,” and the one without a copy.

The patent also describes how a <div> might be used in content written by multiple authors to identify a section of that content written by one of the authors. That section of the content might be tagged with a div that includes a specific identifier, such as <div id=5792>content…..</div>

We’re also told that it’s possible that an image tag (<img>) might be used instead of, or in addition to a link, for the name badge, so that when the image is called from the name badge server, verification of the authorship of content happens automatically for a person viewing the content.

Another feature that could possibly be implemented along with a name badge would be additional data about an author showing up when you hover over the name badge.

The patent filing provides a more indepth look at this name badge process and possible alternatives on how it could be implemented, and can be found at:

[Content Author Badges](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220110191416%22.PGNR.&OS=DN/20110191416&RS=DN/20110191416)
Invented by David Glazer, Reza Behforooz, Bradley J. Fitzpatrick
Assigned to Google
US Patent Application 20110191416
Published August 4, 2011
Filed: April 26, 2010

Abstract


> A method executes at a server to: receive a request from a user at a client computer to establish authorship of content posted online by the user, wherein the content is stored at a host computer; and verify the identity of the user by verifying credentials of the user.
>
> After verifying the identity of the user, the method creates an author badge for the content, wherein the author badge includes a badge identifier; transmits the author badge to the client computer or the host computer, for affixing the author badge to the content at the host computer; stores at the server, location information identifying the online location of the content; and stores at the server, the badge identifier and verification information sufficient to verify that the content at the identified online location matches the content for which the author badge was created.

Part of the fun of looking at patents is learning something about some of the inventors involved. Here’s a little more about the inventors listed in this patent:

Bradley Fitzpatrick was the creator of LiveJournal and chief architect of SixApart before joining Google, so he has some considerable experience with social networks and user created content.

David Glazer is Director of Engineering at Google, and has spoken publicly in the past about the role of people in social networks, including a 2008 O’Reilly presentation [Google and OpenSocial: Let’s Get This Shindig Started](http://web.archive.org/web/20130729203047id_/http://itc.conversationsnetwork.org/shows/detail4045.html). A snippet from the abstract to the presentation:


> People are naturally interested in other people. We want to connect and share with each other quickly and easily. But social computing as it exists now has many weaknesses that make us frustrated and uneasy. Barriers include multiple passwords, confirming identity, spam, and how to trust sites to which we send our personal information.

Reza Behforooz is a Senior Staff Engineer at Google who has worked on projects like Google Talk, including building IM into Google’s Orkut. An older but interesting presentation by him can be found at: Seattle Conference on Scalability: Lessons In Building Scalable Systems.

**Conclusion**

It’s possible that Google might move beyond the authorship markup that they introduced in June to include badges for people to use to identify content that they’ve created on their pages, and on other pages on the Web.

Those badges and verified identification of authors might help if Google decides in the future to start using author credential scores in ranking content that they find on the Web, as I described in [How Google Might Rank User Generated Web Content in Google + and Other Social Networks](https://www.seobythesea.com/2011/07/how-google-might-rank-user-generated-web-content-in-google-and-other-social-networks/).

In a number of ways, this is also similar to Google’s patent filing on [Agent Rank](https://searchengineland.com/googles-agent-rank-patent-application-10487), which I wrote about in 2007, since it would have a unique ID attached to it from authors, and could be used on multiple pages. The Agent Rank approach includes some additional features, like giving an author a chance to use meta data to identify where he or she might have syndicated content elsewhere when it was also published on their own site.

Have you added authorship markup to your pages?

Would you use Google Name Badges if Google moves forward with them?
