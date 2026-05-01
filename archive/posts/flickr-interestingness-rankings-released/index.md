---
title: "Flickr Interestingness Rankings Patents Released"
source_url: "https://www.seobythesea.com/2006/10/flickr-interestingness-rankings-released/"
slug: "flickr-interestingness-rankings-released"
date_published: "2006-10-27T02:17:38+00:00"
date_modified: "2019-06-19T15:47:13+00:00"
author: "Bill Slawski"
---

I’ve posted some pictures to Flickr, but I’ve never really paid much attention to the “interestingness” rankings the site uses.

Interestingness and clustering were first used in August of last year, as announced by Stewart Butterfield on the Yahoo Search Blog and the [Flickr blog](https://blog.flickr.net/en/2005/08/01/the-new-new-things/).

Blog posts about Flickr’s interestingness, and a [February Flickr forum post](https://www.flickr.com/groups/interestingness500/discuss/72057594074431059/) on changes to the interestingness rankings, show a lot of interest in the “secret sauce” on how photos are determined to be interesting. A couple of patent applications were published by Yahoo this week that delve into interestingness rankings, clustering of pictures, and metadata associated with Flickr images.

Before jumping into those, I found some other blog posts that shared some thoughts about interestingness:

- Anil Dash on the economics of interestingness (October 25, 2005)

- Jeff Jarvis writes on [Interestingness](https://buzzmachine.com/2005/10/31/interestingness/), and wonders whether it could be useful for an overall search algorithm, and could work across a distributed network like the web. A couple of commentors provide great responses, referencing the importance of community sizes, the effectiveness of a site like Digg, using an interestingness ranking for mp3s, and how Del.icio.us determines interestingness. (October 31st, 2005)

- Harold Davis writes about Interestingness Is to Flickr As PageRank Is to Google (October 31st, 2005)

- Wesley Hein takes a closer look at the ranking method in [Deconstructing Flickr’s “Interestingness!”](https://wes2.wordpress.com/2006/05/12/deconstructing-flickrs-interestingness/) (May 12, 2006)

- Chuqui writes about a need for a personalization of the ranking system in [O’Reilly Radar > Flickr and Interestingness](http://web.archive.org/web/20100415124731/http://www.chuqui.com:80/2006/08/oreilly-radar-flickr-and-interestingness/). *We see a nod to personalization in the documents that came out this week.*(August 19, 2006)

- Peter Forret considers ways to create an PageInterest ranking for Google and Yahoo in [“Interestingness” for Google web search.](https://blog.forret.com/2006/08/17/interestingness-for-google-web-search/)

**The Interestingness Algorithm**

[Interestingness ranking of media objects](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060242139%22.PGNR.&OS=DN/20060242139&RS=DN/20060242139)
Invented by Daniel S. Butterfield, Caterina Fake, Callum James Henderson-Begg, Serguei Mourachov
Assigned to Yahoo! Inc.
US Patent Application 20060242139
Published October 26, 2006
Filed: February 8, 2006

Abstract


> Media objects, such as images or soundtracks, may be ranked according to a new class of metrics known as “interestingness.” These rankings may be based at least in part on the quantity of user-entered metadata concerning the media object, the number of users who have assigned metadata to the media object, access patterns related to the media object, and/or a lapse of time related to the media object.

When reading these patent applications, skip past the “claims” section to the summary descriptions, and the detailed description. The detailed description sections of both documents are the same.

Interestingness rank is based in part on:

- The quantity of user-entered metadata concerning the media object,
- The number of users who have assigned metadata to the media object,
- An access pattern related to the media object,
- A lapse of time related to the media object, and/or;
- On the relevance of metadata to the media object.
- Whether the media contains undesirable content such as obscene imagery or promotions of a competitor’s product.

It may also be “personalized” to a user. The rank that someone may see for a photo could be based upon their identity and their relationship with the person who posted the image. It could, for example, look at the number of media objects tagged or designated as favorites in common by the person posting the image, and the person who might be interested in it. If there is a location associated with the picture or the residence of the person who uploaded the photo, that may also be a factor considered.

The patent filings are for “media objects” and could involve videos and audio as well as photos, but this first patent notes that “much of the functionality of the invention may be observed at www.flickr.com, which is incorporated by reference herein in its entirety.”

Relatedness of metadata may be considered, and could be used for clustering:


> In another embodiment, the statistics engine may determine the “relatedness” of metadata, i.e., a co-occurrence measure of the frequency with which a particular metadatum (e.g., tag) (or term within a metadatum (e.g., within a comment)) is assigned to a media object along with at least one other particular metadatum (or term within a metadatum). In one embodiment, the co-occurrence measure may determine the frequency of co-occurrence of metadata of the same type. For example, out of all 100 images tagged with the word “Italy,” 50 of those images may also be tagged with “Rome,” 25 tagged with “Venice,” 10 with “Florence,” and 2 with “Sienna.” The co-occurrence index would respectively be 50 for “Italy-Rome,” 25 for “Italy-Venice,” 10 for “Italy-Florence,” and 2 for “Italy-Sienna.” In summary, include location as subset of tags, Tag MD can include location.

The patent filing also includes a paragraph about how ads based upon context might be determined for a page, using a relatedness metric.

**The Metadata Patent Application**

[Media object metadata association and ranking](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060242178%22.PGNR.&OS=DN/20060242178&RS=DN/20060242178)
Invented by Daniel Stewart Butterfield, Eric Costello, Caterina Fake, Callum James Henderson-Begg, Serguei Mourachov, and Joshua Eli Schachter
Assigned to Yahoo
US Patent Application 20060242178
Published October 26, 2006
Filed: February 8, 2006

Abstract


> Metadata may be associated with media objects by providing media objects for display, and accepting input concerning the media objects, where the input may include at least two different types of metadata. For example, metadata may be in the form of tags, comments, annotations or favorites. The media objects may be searched according to metadata, and ranked in a variety of ways.

Since the two documents are related, much of the content from the first one is duplicated in this second document.

It does go into more detail about the metadata associated with images, videos, and audio in its “summary of the invention” section.

Metadata means things like:

- tags,
- comments,
- annotations,
- descriptions,
- additions to favorites (“favoriting”) or playlists (“playlisting”), and;
- location information.

**Conclusion**

I hadn’t really looked at the “interestingness” rankings and metadata of Flickr before, but they do seem to provide a nice framework for indexing non-textual content. They could also be useful on a site like Digg. Would the personalization described here work on Digg? Does it work well on Flickr?

There are some issues about the practice of tagging that may limit some of its effectiveness. One of the main ones I see is that if other peoples’ tags can be seen when someone tags a picture, they may be influenced in their selection of tags for a photo by those who have tagged it before them and not use the words that they would have chosen in the absence of those tags.
