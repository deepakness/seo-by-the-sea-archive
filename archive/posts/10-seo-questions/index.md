---
title: "10 SEO Questions"
source_url: "https://www.seobythesea.com/2009/10/10-seo-questions/"
slug: "10-seo-questions"
date_published: "2009-10-14T11:29:12+00:00"
date_modified: "2020-06-19T15:04:05+00:00"
author: "Bill Slawski"
---

I wrote a comment yesterday in response to a couple of blog posts that attacked SEO and the SEO industry, attempting to illustrate to the author of the rants that search engine optimization brings a specialized skill set and a core group of knowledge that can help others, from small businesses with great ideas, to larger organizations that can benefit from an independent voice that has experience and knowledge about search engines.

Unfortunately, my comment went unpublished for whatever reason.

One of the underlying assertions of the post I responded to was that in the hands of a competent web developer, a site should rank well in search engines as long as the people behind the site created something great and beautiful, and told a couple of friends. Another of the underpinnings behind the rants against SEO was that search engine optimization wasn’t a legitimate form of marketing. A third postulated that SEOs were the force behind such things as the botnets, blog spam, and scraped and auto-generated content that appears on the Web.

Except for striving to build something great, I couldn’t disagree more strongly.

The practice of SEO isn’t web development, though it sometimes requires that development problems on a site be addressed. Successful search engine optimization starts with several questions, such as:

Who is your audience?
Who are your competitors?
What makes you stand out from your competitors?

Some other important steps can include learning about the strengths, weaknesses, opportunities, and threats to a business, defining business goals, collaborating on defining metrics to measure success, and developing an SEO strategy to optimize a site for search engines and visibility in other places on the Web.

The practice of SEO isn’t spamming the Web, with the creation and use of spyware, viruses, and scrapers that auto-generate webspam. Instead, it’s helping people make intelligent and creative decisions that help them reach an audience that is interested in what they have to offer.

In my response, I included 10 questions involving SEO and search engines which might be issues that search engine optimizers might come across, that I wouldn’t expect most developers to have spent much time thinking about. I’ve written about most of these here, and I thought it might be fun to share them.

1. What impacts might Microsoft’s VIPS, Yahoo’s Template Extraction, and Google’s Segmentation of Visual Gaps have upon a search engine’s weighing of links, document representation, shingles based duplicate content detection, and categorization of topics on a page, and how might a search engine determine which segment is the most important?

2. What steps should one take to try to get a site to rank well for a query in Google Maps, and how might something like location prominence and location sensitivity of that query term impact the range and rankings of sites that appear in a Google Maps listing?

3. What are some of the potential flaws that a search engineer might make when using a discounted cumulative gain approach to evaluating the relevancy of search results at different positions?

4. How might image size, image resolution, image contrast, the inclusion of a face in an image, use of images across multiple pages of a site, internal links on a site to images, and external links on a site to images impact the possible rankings of images in search results?

5. What should be contained in a video XML sitemap to make it more likely that the videos included are crawled and indexed by Google?

6. How might Google customize search results for a searcher based upon language and country preferences and past browsing history, even when a searcher isn’t even logged into their Google account and seeing personalized results?

7. What types of user behavior data might the search engines be used to reorder search results besides simple clickthrough rates, and how might those kinds of signals be used in determining sitelinks or quicklinks that Google, Yahoo, and Bing may show in search results?

8. How might a search engine determine which kinds of results besides web pages to blend into search results, and how might that approach change when named entities are involved?

9. What kinds of ranking signals might make it more likely that a news source ranks well in Google’s news search, and why might the search engine choose one article over others when the stories are substantially similar?

10. How are search suggestions (query refinements) chosen by a search engine to include in search results, and why might a search engine show one type of search suggestion at the top of search results, and another type at the bottom of the results.

**Addendum**

I was thinking about including answers to these questions over the next few days in the comments section, but decided that it might be better to leave the comments for conversation and discussion. So, I’m going to provide the answers here.

**October 15, 2009 – Answer to Question 1:**

*1. What impacts might Microsoft’s VIPS, Yahoo’s Template Extraction, and Google’s Segmentation of Visual Gaps have upon a search engine’s weighing of links, document representation, shingles based duplicate content detection, and categorization of topics on a page, and how might a search engine determine which segment is the most important?*

Microsoft VIPS, Yahoo’s Template Extraction, and Google’s Visual Gap Segmentation are all methods described in patent filings and whitepapers from the search engines that attempt to break a web page down into segments such as headings, footers, main content, sidebars, navigation bars, advertisement sections, related product recommendations, and other areas.

While one purpose behind this approach might be to identify what might be the most important segment on a page, another might be to identify important segments that focus upon different topics, such as a news page that includes abstracts of multiple stories, or a magazine article that includes reviews of multiple restaurants.

The approaches all look at the HTML code behind a page, and things like a horizontal rule element <hr>, or changes in background colors of a section, or the use of different font types or colors or sizes might help indicate a different section. There’s also a visual element to them that might simulate how a page might look in a browser to identify things like whitespace between pages.

Learning how to break a page into different parts may also help display the content of that page on smaller screens, such as those of smartphones.

Links in some segments might carry more or less weight, depending upon how important the segment might be determined to be. For instance, links found in the main content section of a page might carry more weight than links in an advertising block, or a footer.

What a page is actually about may look to things such as page titles and anchor text of links pointing to the page and content that appears on a page, but there’s often a great amount of boilerplate on web pages, from sidebars filled with links to other sites and advertisements to navigation bars that use anchor text describing the content on other pages, to copyright notices and other information in footers. Understanding which segment contains content that is unique to a page, and is the main focus of the page can tell a search engine in which words on a page are the most important.

If a search engine uses a shingles approach to detecting duplicate content, it doesn’t usually look at all of the content on a page to try to determine if there is an exact match or some percentage of matching content. Instead, it might capture a window (or a few windows) of content from one page, and see if the same content appears on another page – much like matching fingerprints works. The idea is that if there are matching points of content, there may be some duplicate or near-duplicate content on a page. If you were to look at the headers, and footers and sidebars on the pages of the same site, and compare them using this approach, you might consider a number of those pages to be duplicated, even though the content in the main content area for each of those pages were very different. If the same content was published to very different sites in the main content section, and the other segments of pages on those sites were different, a search engine wouldn’t want to compare the less important segments to see if there was duplicate content – it would want to look at the main content segment on a page.

When you display advertising on a page, such as Adsense, it’s ideal if the ads are shown match the main content of a page, rather than something unrelated found in a sidebar or heading or footer. A category might be created for a page based upon the main content of that page, and the words found within that segment to determine what contextual ads appear on that page.

Determining the most important segment of a page could be based upon several factors, including the location of that segment, the amount of text and content it contains, the height and width of the segment, as well as things that it doesn’t contain, such as a list of links that might look like a navigation bar.

**October 16, 2009 – Answer to Question 2:**

*2. What steps should one take to try to get a site to rank well for a query in Google Maps, and how might something like location prominence and location sensitivity of that query term impact the range and rankings of sites that appear in a Google Maps listing?*

The answer to this question could be fairly long, so I’m going to just provide a high-level summary and some links to other posts here.

An organization doesn’t have to have a website to be included in Google Maps, but if it does have a physical location that people can visit or specific and reasonable geographic serving areas where it provides services, then showing up and ranking well in Google Maps may be helpful. Map results sometimes show up in regular Google Web search results in addition to Map results, so it might be possible to reach a decent sized audience by ranking well in Google Maps.

Google Maps takes business location information from a range of sources, including purchased telecommunications data, business directory data, information from web pages, verified information from business owners, and user-generated content from map users. Because of that, it can help to be listed in a range of locations and data sources on the Web to show up and rank in Google Maps:

1. Register with the local databases and telecommunication services that provide Google with location information.

2. Get listed in business directories that allow location information.

3. Include business location and other information prominently on the pages of your web site, so that your site might be identified as the authority page for your site. See: [Authority Documents for Google’s Local Search](https://www.seobythesea.com/2006/07/authority-documents-for-googles-local-search/)

4. Do things to get mentioned on other sites that might include a link to your site or location information about your business or both.

5. Verify your business with Google Local Business Center

6. Include terms on your pages that you would like to be ranked for, and choose the categories that your site should be listed under with those terms in mind.

In addition to ranking well in Google Maps, there are steps that you can take to rank better for geographic searches in Google organic results. These two posts provide some suggestions:

- [Assigning Geographic Locations to Web Pages](https://www.seobythesea.com/2006/12/assigning-geographic-locations-to-web-pages/)
- [Google Determining Search Authority Pages and Propagating Authority to Related Pages](https://www.seobythesea.com/2007/10/google-determining-search-authority-pages-and-propagating-authority-to-related-pages/)

Location sensitivity is the idea that some searches for some specific queries may result in larger or smaller maps being shown at Google Maps based upon many factors. A search for “pizza” in Manhattan may show a much smaller area than a search for pizza in a suburban or rural area since pizza places might be much more spread out in non-urban locations. A search for pizza in one location might show a smaller map area than a search for real estate home inspectors since people might not be willing to travel too far for lunch, but they might consider contacting a home inspector from a much wider geographic range.

The factors that might influence location sensitivity are described in more detail in my post [Location Sensitivity in Google Local Search](https://www.seobythesea.com/2006/12/location-sensitivity-in-google-local-search/)

Location prominence is the idea that Google might look at more than just a distance from a center point on a map to rank results in Google maps, and that those factors might be non-geographically related. These signals or factors can include things such as a score associated with an authority site (see above link on authority pages), links to that page, and mentions of it, scores related to pages that refer to the business, and reviews of the business. More on location prominence in this post:

- [Google Local Search Patent Application on Ranking Businesses at a Location](https://www.seobythesea.com/2006/12/google-local-search-patent-application-on-ranking-businesses-at-a-location/)

So, location sensitivity can influence the map size that is shown for a query in Google maps, and location prominence can influence rankings within the boundaries of that map by looking at non-geographic related signals. The results may still let a geographic signal like distance from a centerpoint on a map have some influence in ranking results, but those non-geographic signals may play a role as well.

**October 17, 2009 – Answer to Question 3:**

*3. What are some of the potential flaws that a search engineer might make when using a discounted cumulative gain approach to evaluating the relevancy of search results at different positions?*

Like many webmasters, search engineers are concerned about the quality of their services, and the value that they provide to their customers. If the pages returned in search results aren’t very relevant to the query terms used by searchers, then people might start searching elsewhere.

There are many different possible approaches that a search engine can take to try to evaluate the quality and relevance of the pages that they display. And, the algorithms being used to determine which search results may address several different concerns, such as whether or not the pages shown contain unique information – showing substantially the same content at different URLs in five of the first ten search results would disappoint many searchers.

Some query terms may have more than one meaning, and it might also be helpful if search results shown included a diverse range of results – someone searching for “java” might want to find information about a programming language, or an island, or coffee.

Some query terms might be seen as navigational – meaning that a searcher is trying to find a specific page, but they may not know the URL for that page or maybe too lazy to type the whole thing in, such as a search for ESPN, where the searcher wants to find the ESPN home page. Other search queries may be ones where a searcher is looking for information on a topic, such as “how do I knot a tie? Other queries might be more transactional, showing a desire to buy something, or download something, or perform some other task that isn’t solely informational.

Those are a few examples of concerns that might be behind algorithms developed by a search engine, and when search engineers consider modifying the algorithms they use, they want to be able to compare how effective different algorithms might be.

When undertaking such an evaluation, they might look at how often people click upon search results for queries, and see which results get clicked upon. In doing so, they might attempt to adjust for a bias that searchers might have, of believing that the higher a page appears in search results, the more likely it is that the page being shown is relevant to their query. A discounted cumulative gain approach to understanding that bias, predicts a click-through rate based upon position alone, without considering other possible independent factors, including how well pages above that result might be for a query.

This can be a problem, for example, when the query term is “ESPN” and it’s likely that a searcher is looking for the ESPN web site. The probability that someone will click on the third or fourth or fifth result is much lower than would be assumed by a model for evaluating results that predict clicks solely upon position within those results.

There’s more on this topic in my post [Evaluating the Relevancy of Search Results Based upon Position](https://www.seobythesea.com/2009/09/evaluating-the-relevancy-of-search-results-based-upon-position/).
