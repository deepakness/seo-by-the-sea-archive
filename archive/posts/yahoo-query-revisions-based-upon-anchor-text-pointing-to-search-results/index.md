---
title: "Yahoo Query Revisions Based upon Anchor Text Pointing to Search Results"
source_url: "https://www.seobythesea.com/2007/10/yahoo-query-revisions-based-upon-anchor-text-pointing-to-search-results/"
slug: "yahoo-query-revisions-based-upon-anchor-text-pointing-to-search-results"
date_published: "2007-10-30T01:56:51+00:00"
date_modified: "2016-03-30T16:52:12+00:00"
author: "Bill Slawski"
---

Imagine someone searching for “Internal Yahoo Reorg Memos” (without the quotation marks) at Yahoo.com. You might end up with the following results:

- www.valleywag.com/search/internal-memos/bydate
- www.valleywag.com/search/internal-memo
- www.techcrunch.com/2007/02/14/text-of-
   email-to-all-yahoos
- www.churchofthecustomer.com/blog/2007/02/
   the_jerry_magui.html
- www.advogato.org/person/adulau/diary/49.html
- www.kimandrewelliott.com/bbg_2007_reorg.html
- www.techcrunch.com/2006/12/07/metacafe-may-be-
   sold-for-200-million
- http://www.news.com/Gates-memo-warns-of–
   disruptive-changes/2100-1014_3-5940792.html
- http://www.pharmalot.com/2007/10/keep-the-old-
   antidepressant-med-guides-poll/
- http://wonkette.com/search/political-appointees/

Now imagine that the search engine might look at the links pointing to each of those pages (and maybe a few more of the pages in the results), and look at the anchor text used in links to those pages.

Yahoo could gather that different anchor text, and perform more searches. It might then take results from these new searches, and grab the anchor text from links pointing to the pages in the new search results. And so on. And so on.

The search engine may look to see how similar the results are from one search to another (to know when to stop), and might weigh some anchor text differently than others based upon things such as:

- “whether that link occurs within a title or header of a result document,” or
- “the text within that link is in bold, italicized, or otherwise emphasized or strong font,” or
- “whether the anchor text in that link corresponds to the subject of, or otherwise identifies the topic of, the sentence in which that link occurs.”

The anchor text associated with higher ranked links in those search results may also be given more weight.

A final set of blended search results may be shown to a searcher based upon the expanded set of query terms gathered in this manner, with results from the higher ranked terms ranking higher in those results.

Or the original search results from the first search (“Internal Yahoo Reorg Memos” in our example) might be shown, and phrases collected from the anchor text discovered might be displayed at query revisions that a searcher could select to see the results from those query terms. These might be labeled as “suggested revised query terms.”

While viewing the search results that appear, the searcher might be able to choose one or more of the suggested revisions, possibly omitting some of the suggestions, and perform a new search. In our example, the anchor terms pointing to the last three of the pages in the initial result might include:

- Bill Gates
- Antidepressants
- Wonkette

A searcher might not choose those as query revisions in the new search, but might choose anchor text pointing to the other pages, which might include within their search terms such as “the peanut butter manifesto,” which could mean that results like a page titled “Yahoo’s Brad Garlinghouse Makes His Power Move,” shows up in search results.

**The Value of Anchor Text**

Before introducing the actual patent filing from Yahoo, I wanted to point out what one of my favorite papers from search says about the value of anchor text.

There’s some interesting discussion about this text that appears within links in a paper cowritten by Sergey Brin, Rajeev Motwani, Lawrence Page, and Terry Winograd, titled [What can you do with a Web in your Pocket?](http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=B01F7BE15AE89AA422901212AEDDFDE7?doi=10.1.1.36.2806&rep=rep1&type=pdf)


> Even in cases when there are just one or several anchors pointing to a page that match a query, these anchors are very useful.
>
> First, anchors are often better descriptions of Web pages than the pages themselves. They frequently state precisely what is significant about the Web page.
>
> Second, they are often written by people other than the author of the Web page, so they are more resistant to malicious tampering to move a page to the top of the search results for commercial gain.
>
> In fact, Google distinguishes between on-site, off-site, and off-domain anchors to improve the resistance to malicious tampering.
>
> Finally, anchors allow a search engine to return a Web page even without crawling it.

**Yahoo on using Anchor Text from Search Results to Create Query Revisions**

Yahoo’s method of using anchor text is interesting, and could be helpful to searchers.

[Determining related terms based on link annotations of documents belonging to search result sets](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070250498.PGNR.&OS=dn/20070250498&RS=DN/20070250498)
Invented by Jan Pedersen and Hadar Shemtov
US Patent Application 20070250498
Published October 25, 2007
Filed: April 21, 2006

Abstract


> Techniques for automatically focusing searches conducted by a search engine are provided.
>
> According to one aspect, revised query terms are automatically generated based on text in links that are in incoming (and/or outgoing) link lists associated with documents that are referenced in initial search results generated based on initial query terms. For example, some of the phrases that appear in incoming (and/or outgoing) links associated with a result document may be selected.
>
> The selected phrases may be added to the initial query terms to generate revised query terms. These revised query terms may be submitted automatically to the search engine in order to produce a more focused list of revised search results.
>
> This process may be performed repeatedly, each iteration revising query terms generated by the previous iteration, until specified criteria are satisfied, at which point the final revised search results may be presented to a user.

**Using Non-Anchor Text to Generate Revised Query Terms**

While this patent filing describes creating revised query terms are taken from the anchor text of selected links that occur in a set of documents, it might also use text that is somehow associated with those links. That text might be “within the HTML tag of a selected link.”

Hover text (or tool tip text) perhaps from a “title” attribute of the link, or an “alt” attribute if the link includes an image, might be used instead, or in addition to anchor text.

It might also be possible for this method to use words within a certain distance of a link, in the same document that contains the link.

**Stopping at a Final Set of Revised Query Terms**

This process of performing new searches based upon the anchor text pointing to pages in results may repeat a few times, as I mentioned above. What I didn’t talk about is when the process stops and arrives at a final set of revised query terms.

There are a couple of possibilities.

The easiest is that the process might just stop after going through a certain number of iterations. So, if 3 is chosen as the number of times to perform new searches, the process will stop after three times, and the set of revised query terms would be the ones used to generate search results for the searcher.

Another method that could be used to know when to stop might be to look at “how many of the same documents are referenced in both the search results from the most current iteration and the search results from the iteration immediately before that one.”

If the documents that show up in the results is about the same from one to the next, and the documents listed are “sufficently similar,” the process might stop.

**Conclusion**

I don’t know how well this method works, but it sounds like it would be interesting to test to see what results show up.

Regardless of whether it is used or not, it sounds like an interesting way of looking for query terms that might be related to other query terms.
