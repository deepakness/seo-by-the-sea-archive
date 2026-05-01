---
title: "10 Most Important SEO Patents: Part 3 - Classifying Web Blocks with Linguistic Features"
source_url: "https://www.seobythesea.com/2011/12/10-most-important-seo-patents-part-3-classifying-web-blocks-with-linguistic-features/"
slug: "10-most-important-seo-patents-part-3-classifying-web-blocks-with-linguistic-features"
date_published: "2011-12-12T11:42:47+00:00"
date_modified: "2020-06-19T17:48:39+00:00"
author: "Bill Slawski"
---

## Classifying Web Blocks

In earlier days of SEO, many search engine optimization consultants stressed placing important and valuable content towards tops of HTML code on pages, based upon the idea that search engines would weigh prominent content more heavily if it appeared early on in documents. There are still very well known SEO consultants who include information about a “table trick” on their sites describing how to move the main body content for a page above sidebar navigation within the HTML for a page using tables. I’ve also seen a similar trick used with CSS absolute placement in HTML, where less important content appears higher on the HTML page that visitors see, but lower in HTML code for a page.

Back in 2003, the folks at [Microsoft Research Asia](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/) published a paper titled [VIPS: a Vision-based Page Segmentation Algorithm](https://www.microsoft.com/en-us/research/publication/vips-a-vision-based-page-segmentation-algorithm/). The abstract for the paper describes the approach, telling us that:


> A new web content structure analysis based on visual representation is proposed in this paper. Many web applications such as information retrieval, information extraction, and automatic page adaptation can benefit from this structure. This paper presents an automatic top-down, tag-tree independent approach to detect web content structure. It simulates how a user understands web layout structure based on his visual perception. **Comparing to other existing techniques, our approach is independent to underlying documentation representation such as HTML and works well even when the HTML structure is far different from layout structure.**

Microsoft was granted a [patent on the VIPS approach](https://www.seobythesea.com/2008/09/microsoft-granted-patent-on-vision-based-document-segmentation-vips/), and I was leaning heavily towards including that patent as one of the ten most important SEO patents, but something was missing from it. While it described how pages might be segmented and different parts isolated from one another, it didn’t describe how they might be differentiated from each other, or much about why the search engine would go through with a process like this.

In these days of [headless browsers](https://moz.com/blog/just-how-smart-are-search-robots), search engine crawlers not only identify where the content appears within the HTML of a page but also have the ability to get an idea of where that content appears on a page by simulating how a browser might display that content. We’ve heard from Yahoo how they work to segment the content of web pages and [interpret the layout of pages](https://www.seobythesea.com/2009/10/yahoo-web-page-segmentation-distinguishing-noise-from-information/). See also my post on [Breaking Pages Apart: What Automatic Segmentation of Web pages Might Mean to Design and SEO](https://www.seobythesea.com/2009/07/breaking-pages-apart-what-automatic-segmentation-of-webpages-might-mean-to-design-and-seo/).

Google was also granted a [patent on a page segmentation process](https://www.seobythesea.com/2011/03/googles-page-segmentation-patent-granted/) earlier this year, even though the patent was originally filed way back in 2004. Page segmentation is something the search engines have been thinking about for a long time.

For example, you may have heard that links from some sections of a web page may carry different amounts of weight that links from other sections of a web page. Here’s a video of Matt Cutts telling us that links from footers on pages might not weigh as much as links from a paragraph of text in the middle of a page:

To carry that a step further, a search engine might break a page down into segments or blocks, like those described in the VIPS paper, and calculate independent PageRanks for each of those blocks, as described in the white paper, [Block-level Link Analysis](https://www.microsoft.com/en-us/research/publication/block-level-link-analysis/).

It was also tempting to point at the Google patent on page segmentation with this post because it provided some ideas on how it might use segmentation in indexing and ranking pages.

But I liked the way the Microsoft patent, [Classifying functions of web blocks based on linguistic features](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,895,148.PN.&OS=PN/7,895,148&RS=PN/7,895,148) described how it might classify blocks that it found on web pages based upon features associated with those blocks, and I’m calling it one of the 10 most important SEO patents worth reading to help you understand search engine optimization better.

The patent does provide us with an idea of how a search engine might understand the different blocks that it finds on a page, and use those when it indexes, analyzes and classifies content on that page. For example, a section of a page that contains every short phrase, with each word capitalized, and each phrase a link to another page on a site, that appears near the top of the page or in the sidebar to the left of the page might be the main navigation for that page.

A section that contains full sentences, with punctuation, with capitalized first letters for each sentence, that appears in the center of a page might be a main content area of the page, and that content should be weighed more heavily when indexing the page, with no table or CSS tricks required.

I wrote a fairly detailed post about the patent at [How a Search Engine Might Identify the Functions of Blocks in Web Pages to Improve Search Results](https://www.seobythesea.com/2011/02/how-a-search-engine-might-identify-the-functions-of-blocks-in-web-pages-to-improve-search-results/), and the post includes links to several other posts I’ve written about segmentation as well.

Another thing that a search engine might try to avoid is having a page rank well for a specific multiple word query when that page covers multiple topics in different main content sections, like a news page, or a blog homepage that shows multiple posts about different topics, and the words appear in different blocks or segments. This is another thing that a page segmentation approach can help to address.

Having an idea of how search engines may work to understand the content they find on your pages, and the different sections on those pages are essential to the practice of SEO. This patent on classifying web blocks helps explain how search engines may view a different part of web pages.

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
