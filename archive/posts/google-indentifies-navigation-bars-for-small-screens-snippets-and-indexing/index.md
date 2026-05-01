---
title: "Google Identifies Navigation Bars for Small Screens, Snippets, and Indexing"
source_url: "https://www.seobythesea.com/2006/08/google-indentifies-navigation-bars-for-small-screens-snippets-and-indexing/"
slug: "google-indentifies-navigation-bars-for-small-screens-snippets-and-indexing"
date_published: "2006-08-13T02:28:08+00:00"
date_modified: "2020-05-21T08:59:20+00:00"
author: "Bill Slawski"
---

More and more people are using smaller devices to look at web pages, and even the search engines are looking at ways to serve pages that can be easily seen by someone using a handheld device.

A patent granted to Google this past week takes a look at navigation bars and tries to understand how to rewrite some navigation bars without any significant loss in understanding by a visitor to a site.

While this is something that Google can use on their own pages, why might Google be concerned about navigation bars appearing on sites that they have no direct control over?

For one thing, we are told early on in the patent that being able to identify a navigation bar may be helpful when they try to decide which text to index and to display in a “snippet search result.” Another is that through an interface like the one that Google uses for its WAP Proxy (more below), you can visit sites on a handheld that aren’t designed for smaller screens.

[Identifying navigation bars and objectionable navigation bars](https://patents.google.com/patent/US7089490B1/en)
Invented by [Chade-Meng Tan](http://chademeng.com/) and Daniel Dulitz (See this interview from Mike Grehan with Daniel Dulitz, too.)
Assigned to Google
United States Patent 7,089,490
Granted August 8, 2006
Filed on November 30, 2000

Abstract


> Detecting so-called “navigation bars” (or “nav bars”) in a (Web) document by determining whether or not nodes of a parse tree of the (Web) document are “anchor-heavy”.
>
> Generally, a navigation bar can be thought of as text, such as a hypertext link or anchor text for example, without any immediate content. Once a navigation bar is detected, objectionable navigation bars (i.e., navigation bars, the rendering of which would be objectionable to users without special re-authoring), can be distinguished from non-objectionable navigation bars (i.e., navigation bars which would not be objectionable to users with no special re-authoring).
>
> Objectionable navigation bars may be distinguished from non-objectionable navigation bars by:
>
> (a) determining whether the navigation bar is so small that normal rendering would not be objectionable;
>
> (b) determining whether the navigation bar presumably conveys meaningful content; and/or
>
> (c) determining whether the navigation bar is a component of a non-objectionable navigation bar (where all components of the non-objectionable navigation bar are navigation bars themselves).

**Reformatting Content for Smaller Screens**

As the patent notes, one of the significant challenges facing web authors and designers is the growing range of display sizes within which you can see web pages. Its authors point to an article that discusses a number of strategies for smaller screens.

The article, by Timothy W. Bickmore and Bill N. Schilit, “[Digestor: Device-independent Access to the World Wide Web](http://www.ra.ethz.ch/CDstore/www6/Technical/Paper177/Paper177.html),” from the Proceedings Of the Sixth World Wide Web Conference, describes four approaches to display Web pages on small display screens:

- Device-specific authoring,
- Multiple-device authoring,
- Client-side navigation, and;
- Automated re-authoring.

Nice paper. If you use a PDA or phone to access the web, you might find it pretty interesting.

There are pros and cons for each approach listed.

The first two mean creating separate documents for different types of devices, more work for authors and storage for the different versions, and a need to understand which device is requesting a page.

By client-side navigation, we are told that a user would be able to control navigation around pages using different strategies such as “scrolling, zooming, panning, expanding, collapsing, etc.” We’re also told that this may not be an ideal approach for handhelds because of limited memory and processing power and bandwidth and that users might find this method to be a pain.

This patent focuses upon some aspects of reauthoring a page, by detecting components of the pages such as navigation bars and what they call “objectionable navigation bars.”

**Summary of the Patent**

Put as simply as possible, navigation bars are identified by looking for “anchor heavy” parts of a page.

An “objectionable navigation bar” is one that doesn’t translate well to a smaller screen without being rewritten, or “re-authored.”

Objectionable navigation bars can be distinguished from non-objectionable navigation bars by:


> (a) determining whether the navigation bar is so small that normal rendering would not be objectionable;
>
> (b) determining whether the navigation bar presumably conveys meaningful content; and/or
>
> (c) determining whether the navigation bar is a component of a non-objectionable navigation bar (where all components of the non-objectionable navigation bar are navigation bars themselves).

**A Format Converter – Changing Pages for a Better User Experience**

A format converter is used to convert pages written for a normal-sized computer monitor to pages better suited for small screens.

A good example is the Google WAP proxy which people can use to browse the web, including pages that aren’t optimized to fit well on small screens.

The process described in this patent could be included as part of a format converter, which would be part of Google’s content server, which sends information to users of the search engine and proxy service. Its focus, as noted above, is to re-author pages and detect navigation bars and objectionable navigation bars.

**How It Works**

First, content authored for a normal-sized display screen, such as an HTML document, is accepted.

Then, a *parsed tree* corresponding to the content is then generated. The patent refers to the book [Compilers–Principles, Techniques and Tools](https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools) as a resource a person could use to learn more about parse trees. Its author, Jeffrey D. Ullman, co-taught a class on compilers this last winter and has [presentations from the class](http://infolab.stanford.edu/~ullman/dragon.html) online which are pretty informative on the subject.

Here’s the example provided in the patent:


> Basically, a parse tree is a hierarchical representation of a segment of a document (e.g., an HTML page) based on inclusive relationships between components.
>
> That is, if component A is “included in” component B, then a node A will be a child (or more generally, a descendant) of a node B in the parse tree. For example, the following HTML document segment:
>
> TABLE-US-00001 <p> This is a <a href=”http://foobar.com”>link</a>. <ul> <li> foo!sample. <li> list item. </ul> </p>

In other words, the document is being broken down into parts, with hierarchical levels. These include such things as phrases and anchors. The process involves looking at how many words are in the anchor and non anchor parts of a page, including the parent and child nodes.


> Referring back to FIG. 3, as indicated by loop 315 335, certain properties of each node of the parse tree are determined. For example, as indicated by block 320, the sum of all “anchors” (and, in one embodiment, the sum of all “anchor words”) of (a document component corresponding to) a given node and all of its descendants may be determined.
>
> Anchors may be text defining a (e.g., hypertext) link. An example of an anchor is text that occurs inside an HREF line in HTML, or between and tags in HTML.
>
> Anchor words may be the number of words in the anchor (or link). As indicated by block 325, the sum of all words of (a document component corresponding to) a given node and all of its descendents may be determined.
>
> Finally, as indicated by block 330, the sum of all non-anchor words of (a document component corresponding to) the given node and all of its descendants are determined.
>
> In the alternative embodiment in which the sum of all “anchor words” was already determined in block 320, these values may be determined based on the previous two determinations (i.e., the sum of all words less sum of all anchor words yields sum of all non-anchor words).
>
> To reiterate, as indicated by loop 315 335, each node of the parse tree may be processed as described above.

During this process of attempting to discover navigation bars, the nodes are checked to see if they are “objectionable navigation bars.”

When one is identified as an objectional navigation bar, special reformatting may be applied as a part of a re-authoring process.

**Identifying Objectional Navigation Bars**

Whether or not a node is a navigation bar may be determined as follows.

Generally speaking, a node is considered to be a navigation bar if it is “anchor-heavy”.

Anchors may be text defining a link, such as text that occurs inside an HREF line in HTML for example.

An “Anchor-heavy” determination can be based on the number of anchors versus the amount of non-anchor text within a component.

The example used in the patent considers a node to be “anchor-heavy” if it “contains more than a predetermined number of anchors (>min_anchors, where min_anchors may be three or about three for example) and has more anchors than non-anchor words.”

There’s a twist to this. In some instances, an anchor may have more than a certain predetermined number of words. Some of those words may be treated as non-anchor text, based upon the assumption that wordy anchors convey meaningful content.

There are other rules of thumb that might be used to decide if a component is anchor-heavy. While the number of words in anchor text versus non-anchor text may be looked at, an alternative could involve looking at the ration of anchors (or anchor words) to non-anchor text, and see if it is larger than a certain predetermined value.

*Small navigation bars are not objectionable.*

A certain minimum number is chosen (such as three), and if the number of anchors in a node is at that amount or less, then it is considered small and shouldn’t take up much room on a small display screen.

*Meaningful content makes navigation bars not objectionable*

If the amount of anchor text on a page makes up a large percentage of the text on the page, it is considered meaningful.

The amount of space that the anchor text takes up on a page compared to the amount of space used in other ways may also be considered.

*Navigation within navigation may not be objectionable*

If there are nodes within nodes that are all navigation (ancestor nodes that have only navigation bar decendents), they may also be considered non-objectionable, if the ancestor nodes are non-objectionable.

**Examples**

The patent provides three examples of how the process for identifying navigation bars, and determining whether or not they are objectionable may work.
Within the images section of the patent, it shows the HTML versions of those three pages, and WML ([Wireless Markup Language](http://xml.coverpages.org/wap-wml.html)) versions of those pages both with and without the re-authoring described in the patent for “objectionable navigation bars.”

The three pages used are

1) San Francisco Gate Traffic Page
2) MSN Love & Relationships Page
3) Open Directory Project Page

Each example illustrates some aspect of this process. Here’s an analysis from the patent of the first example:


> As shown in FIG. 6A, a number of navigation bars 610a through 650a appear in the left column of the SF Gate Traffic HTML page.
>
> As shown in FIG. 6B, without the present invention, these navigation bars would be presented in full, as denoted by labels 610b through 650b. Finally, as shown in FIG. 6C, an exemplary embodiment of the present invention may determine that these navigation bars are part of a component which may be considered an objectionable navigation bar.
>
> That is, the left column of hypertext links is anchor-heavy, is not very small, does not occupy at least a predetermined amount (e.g., 33 percent) of the screen, and is not a descendant of a navigation bar that was disqualified from being classified as an objectionable navigation bar and that only has navigation bars as its children.
>
> As shown in FIG. 6C, the objectionable navigation bar, including navigation bars 610 through 650, is provided in one line 610c 650c as a hypertext link to the individual navigation bars. Notice that the present invention frees space for other information.

**Conclusion**

The primary focus of this patent is on identifying navigation bars on a page that can safely be re-written or changed in some manner for display on a smaller screen.

An integral part of the process involves actually identifying navigation bars. It’s probably important that the patent mentions (briefly) that this identification can be helpful in indexing a page and deciding upon which text to use to provide snippets to searchers, which goes beyond the reauthoring process.

It’s also helpful to know how your pages might be rewritten and displayed through a proxy service like the one that Google provides to people who access the web through wireless handheld devices.
