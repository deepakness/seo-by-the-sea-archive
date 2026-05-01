---
title: "Google Patent Granted on PageRank Sculpting and Opinion Passing Links"
source_url: "https://www.seobythesea.com/2011/07/google-patent-granted-on-pagerank-sculpting-and-opinion-passing-links/"
slug: "google-patent-granted-on-pagerank-sculpting-and-opinion-passing-links"
date_published: "2011-07-13T01:39:31+00:00"
date_modified: "2021-06-20T10:03:01+00:00"
author: "Bill Slawski"
---

## Would Google Build PageRank Sculpting into linkbuilding?

–

Google filed for a patent in 2005 that could have transformed how we think about and use links, such as letting webmasters decide how much PageRank a link might pass along, or applying machine-readable labels to links, indicating that some links might lead to “offensive” content (“offensive=very”) or “funny” information (“funny=somewhat”), or where on a page the destination of a link might appear, such as in a footer or main content area. This patent would also include a method to encrypt the content of some links, so that only certain people might be able to access the information that those links lead to. The patent was granted this week.

When Tim Berners-Lee wrote [Links and Law](http://www.w3.org/DesignIssues/LinkLaw) back in 1997, as a commentary on the architecture of the Web, one of the statements that he included was that “The intention in the design of the web was that normal links should simply be references, with no implied meaning.” Before 2005, if you surveyed the links you came across on the Web, you’d often see a combination of anchor text describing the destination of those links and the actual URL of the links in question, but not much in terms of “opinion” about the destinations of those links. At least not something within links that a computer program or a search engine could easily pick up upon.

Starting in 2005, we’ve been seeing additions to the way that links can be written that do express some opinions that search engines can act upon. In an effort to help [stop comment spam on blogs](https://googleblog.blogspot.com/2005/01/preventing-comment-spam.html), Google, Yahoo, and Microsoft all agreed to not pass along PageRank or link value to sites being linked to when those links included a rel=”nofollow” within them, like in the example below:


> <a href=”http://www.example.com/” rel=”nofollow”>Link text</a>

Popular blogging software such as WordPress started automatically including rel=”nofollow” attributes in links from blog comments, and Web encyclopedia Wikipedia started using rel=”nofollow” on all links external to the site. Google suggests in their [webmaster help pages on nofollow](https://support.google.com/webmasters/answer/96569?hl=en) that a rel=nofollow attribute should be used on links that lead to untrusted content, or which might be part of paid advertisements, or links to some pages on your site that aren’t necessary to index, such as login pages that only registered users of a site might find value in.

Another addition to links recently recommended by Google involves something called [authorship markup](https://search.googleblog.com/2011/06/authorship-markup-and-web-search.html), where you can use both rel=” author” and rel=” me” in certain links to author profile pages and pages written by those authors to help the search engine make associations between authors and the content they’ve created on the Web.


## PageRank Sculpting by Siteowners and SEOs

Many site owners and SEOs started using rel=”nofollow” links to try to control where PageRank might flow through their websites. For example, many would include one or more links on every page to a “contact” page on their sites. Thinking that their contact page probably wasn’t one that they would want to spend a lot of PageRank to, they began to add a rel=”nofollow” in the links to pages like that one. Google’s head of Webspam, Matt Cutts, wrote a blog post in 2009 on this practice of [PageRank sculpting](https://www.mattcutts.com/blog/pagerank-sculpting/) with a rel=”nofollow,” noting that it wasn’t really a very helpful practice, and probably didn’t work the way that most webmasters might think it does. Matt is listed as one of the people who came up with the [nofollow concept](http://microformats.org/wiki/rel-nofollow) on the Microformats.org website.

Interestingly, one of the named inventors of the newly granted Google patent is the very same Matthew Daniel Cutts. The patent focuses on adding a way of passing along “opinion” with a link, such as enabling webmasters to decide a percentage of the PageRank that might normally pass through a link, with an attribute that might look something like: “linkweight=0.5”. To a degree, it looks like a way of enabling a site owner to do some PageRank sculpting. Other numbers could be used as well, including no link weight at all, so that a link wouldn’t pass along PageRank.

The patent is:

[Embedded communication of link information](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07979417&OS=PN/07979417&RS=PN/07979417)
Invented by Krishna Bharat, Matthew Daniel Cutts, Paul G. Haahr, Radhika A. Malpani, Vibhu Mittal, Marcin Kaszkiel
Assigned to Google
United States Patent 7,979,417
Granted July 12, 2011
Filed: June 30, 2005

Abstract


> A method of processing documents is described. The method includes the operation of receiving a document in a search engine crawler. The document includes an embedded first link tag. The first link tag includes one or more information pairs. A respective information pair includes a respective parameter and a corresponding value.
>
> The parameters in the one or more information pairs may correspond to content at one or more content locations or one or more document locations. The method also includes selecting a method of processing content associated with the first link tag in accordance with one or more of the information pairs.

**Conclusion**

Interestingly, Google explored the idea of allowing site owners to make some decisions about a percentage of PageRank that might pass through a link, especially since Google had earlier come up with a [reasonable surfer](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/) approach to determine how much PageRank might pass through links.

I’m not sure what impact the granting of this patent might have on “opinions” that are passed along with links such as those that might include an “offensive” attribute or “funny” attribute shown in the patent as examples. I don’t think that it would apply to a rel=” author” attribute in a link, which is an HTML5 standard, or a rel=”me,” which comes from XFN.

I suspect the future will bring some other ways to include opinions with links, making them more than the “reference” that Tim Berners-Lee described in 1997.

Google’s [Reasonable Surfer Patent](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/) told us that some links, such as “terms of service” links, likely aren’t given much PageRank, to begin with, so PageRank Sculpting doesn’t have much value being used internally on a site.

I’ve written a few posts about links. These were ones that I found interesting:

5/30/2006 – [Web Decay and Broken Links Can be Bad for Your Site](https://www.seobythesea.com/2006/05/web-decay-and-dead-links-can-be-bad-for-your-site/)
12/11/2007 – [Google Patent on Anchor Text Indexing and Crawl Rates](https://www.seobythesea.com/2007/12/google-patent-on-anchor-text-and-different-crawling-rates/)
1/10/2009 – [What is a Reciprocal Link?](https://www.seobythesea.com/2009/01/what-are-reciprocal-links-and-what-do-search-engines-think-of-them/)
5/11/2010 – [Google’s Reasonable Surfer: How the Value of a Link May Differ Based upon Link and Document Features and User Data](https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/)
8/24/2010 – [Google’s Affiliated Page Link Patent](https://www.seobythesea.com/2010/08/googles-affiliated-page-link-patent/)
7/13/2011 – [Google Patent Granted on PageRank Sculpting and Opinion Passing Links](https://www.seobythesea.com/2011/07/google-patent-granted-on-pagerank-sculpting-and-opinion-passing-links/)
11/12/2013 – [How Google Might Use the Context of Links to Identify Link Spam](https://www.seobythesea.com/2013/11/google-context-of-links-identify-link-spam/)
12-10-2014 – [A Replacement for PageRank?](https://www.seobythesea.com/2014/12/replacement-pagerank/)
4/24/2018 – [PageRank Update](https://www.seobythesea.com/2018/04/pagerank-updated/)

Last Updated July 1, 2019.
