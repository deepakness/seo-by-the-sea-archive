---
title: "10 Most Important SEO Patents, Part 5 - Phrase Based Indexing -"
source_url: "https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-5-phrase-based-indexing/"
slug: "10-most-important-seo-patents-part-5-phrase-based-indexing"
date_published: "2011-12-19T00:44:25+00:00"
date_modified: "2021-06-18T10:16:59+00:00"
author: "Bill Slawski"
---

## Anna Patterson, Creator of Phrase Based Indexing

The builder of the largest search engine in the World during the 21st century joined Google shortly after building that search engine and possibly licensed the technology behind it to Google. She worked for Google for several years, creating a way of indexing pages based upon the meaningful phrases that appear on those pages. She looked at how phrases co-occur on pages to cluster and rerank those pages, using the phrases to identify spam pages and pages with duplicate content, and creating taxonomies and snippets for pages using phrases. This phrase-based indexing system provided a way to defeat Googlebombing and to determine how much anchor text relevance should be passed along with links.

Then Anna Patterson left Google to start the search engine Cuil, which was supposed to be a Google killer. Except it wasn’t. Now she’s back at Google and looks to be working on phrases again.


## Multiple Generations of Patents involving Phrase Based Indexing

There could be said to be three generations of her phrase-based indexing system, described in three generations of patents.

The first generation of this patent family was filed on July 26, 2004, or within the next couple of years afterward.

The second generation of phrase-based indexing patents appears to have been filed on March 30, 2007, and describes how phrase-based indexing could be implemented into a large-scale data system. Unfortunately, a few of these second-generation patents appear to be still pending and haven’t been made public yet.

The third generation of phrase-based indexing patents is starting to make it onto the scene with the refiling and recent granting of a continuation version of one of the original first-generation patents.


## Single Word Indexing

In addition to ranking documents based upon the quality and quantity of links pointing to a page, Google also looks at whether or not the query terms searched for also appear upon specific pages. Google’s Matt Cutts wrote one of the best descriptions of how Google may do this in the first Google Librarian Newsletter, which appears to have disappeared from the Web not too long ago. However, I found a copy on the University of Michigan website, and it’s a highly recommended document which I’ll build upon with the rest of this post.

That first newsletter asked and answered the question, [How does Google collect and rank results?](http://web.archive.org/web/20120131032433/http://si110.cms.si.umich.edu:80/sites/si110.cms.si.umich.edu/files/InfoFinding/Google%20Index%20&%20Rank%20How-to.pdf) As you read it, pay special attention to where it talks about “posting lists.” If you start reading through the second generation of phrase-based indexing patents, you’ll see references to how phrases may be included in posting lists as well.


## Phrase Based Indexing

A number of the first generation phrase-based indexing patents were filed on July 26, 2004, and the descriptions of most of those patents are substantially the same, though the claims differ.

I’ve written several posts about phrase-based indexing, and the one that provides the most detailed look at this approach was one I published on December 29, 2006 – [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/). (Highly recommended that you stop and go read that post before moving on with this one.)

SEO by the Sea posts on the first generation of phrase-based indexing patents:

- February 10, 2006 – [Move over pagerank: Google’s looking at phrases?](https://www.seobythesea.com/2006/02/move-over-pagerank-googles-looking-at-phrases/)
- May 19, 2006 – [Google Aiming at 100 Billion Pages?](https://www.seobythesea.com/2006/05/google-aiming-at-100-billion-pages/)
- September 16, 2009 – [Google Phrase Based Indexing Patent Granted](https://www.seobythesea.com/2008/09/google-phrase-based-indexing-patent-granted/)

SEO by the Sea posts on the second generation of phrase-based indexing patents:

- March 15, 2009 – [What are the Top Phrases for Your Website?](https://www.seobythesea.com/2009/03/what-are-the-top-phrases-for-your-website/)
- April 7, 2010 [Phrasification and Revisiting Google’s Phrase Based Indexing](https://www.seobythesea.com/2010/04/phrasification-and-revisiting-googles-phrase-based-indexing/)


## Assumptions and Approaches behind Phrase Based Indexing

1) It’s possible to distinguish between a good phrase and one that isn’t so helpful. A good phrase has meaning in itself, like “ice cream,” meaning something different than just “ice” and “cream.” A good phrase is a complete phrase, like “president of the United States,” instead of “President of the.” A phrase can be one word long. A phrase can have more than one meaning, such as “German Shepard,” which can mean a sheepherder in Germany or a specific breed of dog.

2) Certain phrases tend to co-occur with other phrases, So for instance, if you did a search for “President of the United States” and looked at the top 10, or top 100, or top 1,000 pages in that search, you would probably see several related terms that appear regularly on those pages, such as “Whitehouse, “vice president,” “Oval Office,” “Washington, DC,” and so on. It might be possible to rerank those search results to boost ones that tend to have more of these commonly occurring related phrases. Pages that statistically have more of these phrases should be considered spam.

3) Where there is a phrase with more than one meaning, there might be “clusters” of related phrases of different types. So, when the phrase is “German Shepard,” and one set of related phrases that appear in the top (10, 100, 1,000), search results involve terms like “kennel,” “dog collar,” “dog house,” “obedience training,” etc., that might indicate one meaning of the phrase. However, when the second group of documents that rank for the phrase “German Shepard,” include terms like “sheep herding,” “Germany,” “large flock,” and “Grazing space,” those phrases may indicate a second meaning, describing a person from Germany who herds sheep.

4) Anchor text in links pointing to a page that includes the phrase or a related phrase (one that tends to co-occur on pages that rank for that phrase) should be given more weight than anchor text that doesn’t. So a page that includes the biography of the President of the United States, that is the target of a [Googlebomb](https://www.seobythesea.com/2011/01/how-a-search-engine-might-fight-googlebombing/) using text like “miserable failure” won’t help that page rank for the term “miserable failure” unless the page is somehow relevant for the term. For example, a few years back, Google announced that they had defeated a specific Googlebomb for the biography page of George W. Bush using the phrase “miserable failure.” It stopped ranking for the term, at least until someone at the Whitehouse inadvertently caused the Googlebomb to return by adding the word “failure” to the page during an update.

5) Google could also purposefully get a page to stop ranking for a specific phrase by removing the connection between the page and the phrase in its index, which might be a way to penalize a page for spam-type practices.


## First Generation Phrase-Based Indexing Patent Filings

- [Phrase-based indexing in an information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07536408&OS=PN/07536408&RS=PN/07536408) (US Patent No. 7,536,408)
- [Phrase-based detection of duplicate documents in an information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07711679&OS=PN/07711679&RS=PN/07711679) (US Patent No. 7,711,679)
- [Information retrieval system for archiving multiple document versions](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07702618&OS=PN/07702618&RS=PN/07702618) (US Patent No. 7,702,618)
- [Detecting spam documents in a phrase based information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,702,618.PN.&OS=pn/7,702,618&RS=PN/7,702,618) (US Patent No. 7,603,345)
- [Phrase-based searching in an information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,599,914.PN.&OS=pn/7,599,914&RS=PN/7,599,914) (US Patent No. 7,599,914)
- [Phrase-based generation of document descriptions](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,584,175.PN.&OS=pn/7,584,175&RS=PN/7,584,175) (US Patent No. 7,584,175)
- [Phrase-based personalization of searches in an information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,580,929.PN.&OS=pn/7,580,929&RS=PN/7,580,929) (US Patent No. 7,580,929)
- [Phrase identification in an information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,580,921.PN.&OS=pn/7,580,921&RS=PN/7,580,921) (US Patent No. 7,580,921)
- [Multiple index based information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,567,959.PN.&OS=pn/7,567,959&RS=PN/7,567,959) (US Patent No. 7,567,959)
- [Automatic taxonomy generation in search results using phrases](https://patents.google.com/patent/US7426507B1/en) (US Patent No. 7,426,507)


## Second Generation Phrase-Based Indexing Patent filings

Many of these patent filings haven’t been published yet by the USPTO and may not be until they are granted. So while a couple of the published patents include Anna Patterson as an inventor, many don’t. The first listed is a pending patent application, though many of the phrase-based indexing patents weren’t published until granted.

- [Integrating External Related Phrase Information into a Phrase-based Indexing Information Retrieval System](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090070312.PGNR.&OS=dn/20090070312&RS=DN/20090070312) (US Patent Application 20090070312)
- [Index server architecture using tiered and sharded phrase posting lists](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,693,813.PN.&OS=pn/7,693,813&RS=PN/7,693,813) (US Patent 7,693,813)
- [Index updating using segment swapping](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07702614&OS=PN/07702614&RS=PN/07702614) (US Patent 7,702,614)
- [Query scheduling using hierarchical tiers of index servers](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07925655&OS=PN/07925655&RS=PN/07925655) (US Patent 7,925,655)
- Phrase Extraction Using Subphrase Scoring, filed Mar. 30, 2007 (unpublished)
- Bifurcated Document Relevance Scoring, filed Mar. 30, 2007 (unpublished)
- Inde server Architectures in Tiered and Sharded Phrase Posting Lists, filed Mar. 30, 2007 (unpublished)
- Query Phrasification, Ser. No. 11/694,845, filed Mar. 30, 2007 (unpublished)


## Third Generation Phrase-Based Indexing

There only appears to be one of these at this point. However, Google might file more continuation patent filings which add additional claims to existing patents in this series, or divisional patent filings, which might separate some claims from a specific patent and focus upon expanding those claims.

[Detecting spam documents in a phrase based information retrieval system](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08078629&OS=PN/08078629&RS=PN/08078629) (US Patent No. 8,078,629)
Invented by Anna Lynn Patterson
Granted December 13, 2011
Filed: October 13, 2009

Abstract


> An information retrieval system uses phrases to index, retrieve, organize, and describe documents. Phrases are identified that predict the presence of other phrases in documents. Documents are indexed according to their included phrases. A spam document is identified based on the number of related phrases included in a document.

**Conclusion**

There are many reasons to believe that Google is using Phrase Based Indexing beyond the sheer number of patents. It’s worth spending some time experimenting with phrases to get an idea of how Google treats them.

If you perform keyword research, optimize web pages, and do link building, you’ll find that understanding how phrase-based indexing works will be helpful.

On the plus side, even if Google isn’t doing phrase-based indexing quite like what is described in these patents, understanding things such as what terms might be “related” to terms or phrases that you might want to optimize a page for and working to include those related phrases on your page can result in richer and higher quality pages.

The very first Phrase-based indexing patent (Phrase-based searching in an information retrieval system) was updated with a continuation patent. I wrote about it in the post [Google Phrase-Based Indexing Updated](https://gofishdigital.com/phrase-based-indexing-updated/)

**All parts of the 10 Most Important SEO Patents series:**

[Part 1 – The Original PageRank Patent Application](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-1-the-original-pagerank-patent-application/)
[Part 2 – The Original Historical Data Patent Filing and its Children](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-original-historical-data-patent-filing-children/)
[Part 3 – Classifying Web Blocks with Linguistic Features](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-3-classifying-web-blocks-with-linguistic-features/)
[Part 4 – PageRank Meets the Reasonable Surfer](https://www.seobythesea.com/2011/12/most-important-seo-patents-reasonable-surfer/)
[Part 5 – Phrase Based Indexing](https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-5-phrase-based-indexing/)
[Part 6 – Named Entity Detection in Queries](https://www.seobythesea.com/2012/01/named-entity-detection-in-queries/)
[Part 7 – Sets, Semantic Closeness, Segmentation, and Webtables](https://www.seobythesea.com/2012/01/sets-semantic-closeness-segmentation-and-webtables/)
[Part 8 – Assigning Geographic Relevance to Web Pages](https://www.seobythesea.com/2012/02/assigning-geographic-relevance-web-pages/)
[Part 9 – From Ten Blue Links to Blended and Universal Search](https://www.seobythesea.com/2012/02/ten-blue-links-to-blended-universal-search/)
[Part 10 – Just the Beginning](https://www.seobythesea.com/2012/03/just-the-beginning/)

Last Updated June 19, 2019
