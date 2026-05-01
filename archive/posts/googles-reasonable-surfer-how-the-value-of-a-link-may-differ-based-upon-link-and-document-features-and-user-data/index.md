---
title: "Reasonable Surfer Model: How Link Value Differs Based on Link, Document Features and User Data"
source_url: "https://www.seobythesea.com/2010/05/googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data/"
slug: "googles-reasonable-surfer-how-the-value-of-a-link-may-differ-based-upon-link-and-document-features-and-user-data"
date_published: "2010-05-11T06:18:43+00:00"
date_modified: "2021-07-14T17:52:55+00:00"
author: "Bill Slawski"
---

## PagRank and the Reasonable Surfer Model

Not every link from a page in a link-based ranking system is equal.

A search engine might look at a wide range of factors to determine how much weight each link on a page may pass along.

![A diagram showing different values for links under the reasonable surfer model to three different web pages.](media/reasonable-surfer.jpg)

One signal used by Google to rank web pages looks at links to and from pages to see which link to others. Links from “important” pages carry more weight than links from less important pages. An important page is one linked to other important pages. It could also link to a large number of less important pages or a combination of the two. This signal is PageRank. It is only one of many Google ranking signals used to rank web pages and determine how highly pages show up in search results in response to a query.

An early paper by the founders of Google, [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html), tells us:


> PageRank is a model of user behavior. We assume a “random surfer” chooses a web page at random and keeps clicking on links, never hitting “back,” but eventually gets bored and starts on another random page. The probability that the random surfer visits a page is its PageRank.

Under that approach, any link from the same page carries the same amount of weight or importance when pointed to another page.


## The Random Surfer Model Was Changed to the Reasonable Surfer Model

A Google patent filed in 2004 and granted today takes a different approach to the value that links have when they appear on the same page:


> Systems and methods consistent with the principles of the invention may provide a reasonable surfer model that indicates that when a surfer accesses a document with a set of links, the surfer will follow some of the links with higher probability than others.
>
> This reasonable surfer model reflects that not all the links associated with a document are equally likely to connect. Examples of unlikely followed links may include “Terms of Service” links, banner advertisements, and links unrelated to the document.

The Reasonable Surfer Model patent is:

[Ranking documents based on user behavior and/or feature data](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,716,225.PN.&OS=pn/7,716,225&RS=PN/7,716,225)
Invented by Jeffrey A. Dean, Corin Anderson, and Alexis Battle
Assigned to Google Inc.
US Patent: 7,716,225
Granted: May 11, 2010
Filed: June 17, 2004

Abstract


> A system generates a model based on feature data relating to different features of a link from a linking document to a linked document and user behavior data relating to navigational actions associated with the link. The system also assigns a rank to a document based on the model.

In this reasonable surfer model, not every link that appears upon a page is equal in value. Different features associated with links, and pages they appear on and point to, may determine how much value those links pass to pages they link.


## Features of Links and Documents

Under this patent, when a search engine crawls and indexes pages, it may create a model used to rank pages looking at features associated with the source pages links appear on, the target pages that links point to, and the links themselves. Besides, the search engine may collect data about how visitors to pages use those pages, such as which links they click on, what query terms they use to find pages and other information from a web browser, or an add-on to a browser a toolbar.

The following lists provide examples of features from the Reasonable Surfer Model, and not all features listed work, while other features could be looked at.


## Features Associated with a Link under the Reasonable Surfer Model

Examples of features associated with a link under the reasonable surfer model might include:

1. Font size of anchor text associated with the link;
2. The position of the link (measured, for example, in a HTML list, in running text, above or below the first screenful viewed on an 800 X 600 browser display, side (top, bottom, left, right) of document, in a footer, in a sidebar, etc.);
3. If the link is in a list, the position of the link in the list;
4. Font color and/or other attributes of the link (e.g., italics, gray, same color as background, etc.);
5. Number of words in anchor text of a link;
6. Actual words in the anchor text of a link;
7. How commercial the anchor text associated with a link might be;
8. Type of link (e.g., text link, image link);
9. If the link is an image link, what the aspect ratio of the image might be;
10. The context of a few words before and/or after the link;
11. A topical cluster associated with the anchor text of the link;
12. Whether the link leads somewhere on the same host or domain;
13. If the link leads to somewhere on the same domain,


## Features Associated With a Source Document

Examples of features associated with a source document under the reasonable surfer model might include:

1. The URL of the source document (or a portion of the URL of the source document);
2. A web site associated with the source document;
3. Many links in the source document;
4. The presence of other words in the source document;
5. The presence of other words in a heading of the source document;
6. A topical cluster with which there is an association with the source document; and/or
7. A degree to which a topical cluster associated with the source document matches a topical cluster associated with anchor text of a link.


## Features Associated with a Target Document

Examples of features associated with a target document under the reasonable surfer model might include:

1. The URL of the target document (or a portion of the URL of the target document);
2. A web site associated with the target document;
3. Whether the URL of the target document is on the same host as the URL of the source document;
4. Whether the URL of the target document has anything to do with the same domain as the URL of the source document;
5. Words in the URL of the target document; and/or
6. The length of the URL of the target document.


## User Behavior Data Associated with Documents and Links

User behavior data associated with documents and links under the reasonable surfer model may also get looked at, such as:

1. Information about how people access and interact with documents, such as navigational actions (e.g., links selected, web addresses entered, forms completed, etc.),
2. The language of the users,
3. Interests of the users,
4. Query terms entered,
5. How often a link gets clicked,
6. If links aren’t selected when one link gets picked.
7. When no links get selected on a page,
8. etc.

This user behavior data could work with a web browser or a browser assistant program such as Google’s Toolbar.


## How Features May Influence the Weight of a Link

This reasonable surfer model based upon features intends to determine how likely a link on a page gets clicked based on positive and negative aspects of those features.

For example, a link with anchor text bigger than a certain size may have a higher probability of being chosen than links with a smaller size anchor text. Links positioned closer to the top of a page may have a better chance of getting clicked. If the topic of a document pointed relates to the topic of the page the link appears on, it may also have a higher probability of clicking by a visitor to the page. So, a link in a larger font, near the top of a page, leading to a page covering a similar topic as the page it appears upon may have a much higher probability of selection by a visitor than a link using smaller text, appearing at the bottom of a page, pointing to a page on an unrelated topic.

The patent provides many other examples of rules applied to different features to determine the choice of different links on a page clicked on by a visitor. Those probabilities determine a dynamic weight for each link. It can influence how highly the pages they point to might rank in Google. For example, different weights for links might determine how much PageRank each link passes to other pages.

Or, as the reasonable surfer model patent filing tells us:


> The document’s rank may be the probability that a reasonable surfer will access the document after following many forwarding links.


## Reasonable Surfer Conclusion

How much value might a link on a page pass along in a link-based ranking system like PageRank?

Under the patent filing granted today, the value of a link may be different based upon a large number of factors. These can include the location of a link on a page. Or whether the link is a different color or font style than other links. It may look at how many words are in the anchor text for the link. The search engine could consider whether the link text used is commercial or not? Also, the page’s topic is that the link appears upon and the page’s topic pointed to by the link, and many others.

It’s likely that Google quickly moved past the 1999 description of PageRank in [The PageRank Citation Ranking: Bringing Order to the Web](http://web.archive.org/web/20170106094458/http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf). This was where the weight of links displayed was split amongst links pointing out from a page. This patent describes several approaches that Google may have used to weigh the value of links differently. But, the lists above likely provide more value as possible examples of how links might be weighed than definitive guidelines.

It does offer one broad rule of thumb that might be helpful. Which links on a page are most likely to be selected by a reasonable surfer – those are the links that probably carry the most weight.

The Reasonable Surfer Patent was updated in 2016. I wrote about it in the post [Google’s Reasonable Surfer Patent Updated](https://www.seobythesea.com/2016/04/googles-reasonable-surfer-patent-updated/)
