---
title: "How Google Might Track Webpage Changes"
source_url: "https://www.seobythesea.com/2011/08/how-google-might-track-changes-on-webpages/"
slug: "how-google-might-track-changes-on-webpages"
date_published: "2011-08-22T10:35:16+00:00"
date_modified: "2019-06-23T13:29:02+00:00"
author: "Bill Slawski"
---

## Google May Not Index Webpage Changes When Ever it Sees Them

Many sites on the Web contain elements that change on a regular basis, from advertisements that differ every time a page shows, to widgets that contain constantly updated information, to blog and news homepages that show new posts and articles hourly or daily or weekly. Ecommerce sites add and remove products regularly, and display updated specials and features on their homepages. Sites including or focusing upon user-generated content may consistently change.

Search engines use web crawling programs to discover new pages and sites and to index content that changes on pages, they already know about by following links from one page to another. A Google patent granted last week explores the potential problem of a crawler coming across a page that has changed only slightly, such as a change in content or having an advertisement displayed, and deciding whether it should reindex that whole page because of the slight change.

The patent also describes the process behind how Google might check on webpage changes, comparing a newer version of a page to an older version, and associating the older content with the newer content. I’m reminded a little of a Yahoo patent that I wrote about a few years ago, in a post titled [A Yahoo Approach to Avoid Crawling Advertisement and Session Tracking Links](https://www.seobythesea.com/2007/09/a-yahoo-approach-to-avoid-crawling-advertisement-and-session-tracking-links/).

In the Yahoo patent I described in that post, we were told that the search engine might crawl pages a minute or so after a first crawl to see if there was content or links that changed from the first to second crawls, which might help the search engine in identifying those sections or links as advertisements or URLs that might contain unique session tracking parameters for different visitors. Yahoo might not crawl the newer URLs in those links, which it might consider to be “transient.”

In the Google patent, we’re told that if the differences in ages of the older content and the newer content aren’t that great, the search engine may continue to display the old content rather than updating its index to include the newer webpage changes as well. After some additional crawls, if Google sees those webpage changes reach a certain age, it may then index the newer version of the page with the new content.

[Updating search engine document index based on calculated age of changed portions in a document](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08001462&OS=PN/08001462&RS=PN/08001462)
Invented by Joachim Kupke and Jeff Cox
Assigned to Google Inc.
US Patent 8,001,462
Granted August 16, 2011
Filed: January 30, 2009

Abstract


> A system receives a document that includes new content and aged content, and compares the document with a prior version of the document that includes the aged content but not the new content. The system also separates the new content and the aged content based on the comparison, determines ages associated with the new content and the aged content, and determines whether the ages of the new content and the aged content are greater than or equal to an age threshold.
>
> The system further calculates a checksum of the document based on the aged content when the age of the aged content is greater than or equal to the age threshold, and the age of the new content is less than the age threshold, and stores the calculated checksum.

The focus of this patent seems aimed at keeping the search engine from reindexing pages after recrawling those pages where it finds some changes to the pages such as new advertisements being displayed or updated lists of related links. It makes sense for a search engine to not reindex the content of a page too quickly after those types of changes since doing so could result in reindexing many pages where there really hasn’t been any substantive changes to those pages.

I suspect that this process acts to throttle how quickly a search engine might update its index when it discovers new content on pages, regardless of whether those changes are slight changes to the content of a page or even possibly the posting of a new blog post. Since many pages on the Web do have components that might show new content every time they are crawled, allowing a certain amount of time to pass before reindexing the content of a page might make sense, especially when the age differences between the older content and the newer content isn’t that great.

If the new content is still present on a page after a certain passage of time (minutes, hours, or possibly even days), the page might then be indexed with the new content. The amount of time that a search engine may allow to pass before it will index changes might be based upon a historic view of how frequently some sites make changes to their pages.

I was also reminded of Google’s patent, [Document scoring based on document inception date](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=07840572&OS=PN/07840572&RS=PN/07840572), while reading about this *calculated age* patent. In that patent, we’re told that for some queries, a fresher document might be preferred, while for other queries, an older document might be a better result, and that the age of a document might be included as part of a ranking score for that document.

The *document inception date* patent describes how an update frequency score and an update amount score may play a role in determining the score for an age associated with a document. The update frequency (UF) score might look at the number of changes made to a page over time, while the updated amount (UA) might look at what those changes are. The patent tells us more about how a UA score might be calculated for webpage changes:


> UA may also be determined as a function of one or more factors, such as the number of “new” or unique pages associated with a document over a period of time. Another factor might include the ratio of the number of new or unique pages associated with a document over a period of time versus the total number of pages associated with that document. Yet another factor may include the amount that the document is updated over one or more periods of time (e.g., n % of a document’s visible content may change over a period t (e.g., last m months)), which might be an average value. A further factor might include the amount that the document (or page) has changed in one or more periods of time (e.g., within the last x days).
>
> According to one exemplary implementation, UA may be determined as a function of differently weighted portions of document content. For instance, content deemed to be unimportant if updated/changed, such as Javascript, comments, advertisements, navigational elements, boilerplate material, or date/time tags, may be given relatively little weight or even ignored altogether when determining UA. On the other hand, content deemed to be important if updated/changed (e.g., more often, more recently, more extensively, etc.), such as the title or anchor text associated with the forward links, could be given more weight than changes to other content when determining UA.

The *document inception date* patent is primarily concerned with how changes to a page might impact the ranking of that page where either freshness or the age of a document might positively impact the rankings of that page. What makes it interesting is in the depth of types of changes to a page that it might consider, and how some changes might be less of a concern than others. This *calculated age* patent focuses more upon when the search engine might incorporate changes to a page into its index, and seems to follow a much less detailed analysis of types of changes, possibly to keep decision making faster during the crawling of pages.

**Conclusion**

The Yahoo patent I mentioned above told us how it might recrawl a page after a minute or so to see if any of the links listed had changed, to determine whether those were “transient” links or links that would change on a regular basis such as advertisements. Because those links would change upon every crawl to a page, it might not have made sense for Yahoo to add those URLs to its list of URLs to be crawled since they were likely to be either advertisements or links with session tracking IDs.

This Google patent seems to aim at something very similar, in identifying content that changed quickly and webpage changes that aren’t staying around for any length of time, to possibly identify advertising content or other content that has little to do with the actual content on a page.


## Action Items

Where knowing that Google might be doing something like this might be helpful may be in situations like an ecommerce store that wants to display links to specials or featured content on their pages. If the links to those are randomly displayed and changed every time a search spider comes along, they might be ignored. If they are changed daily or weekly, it’s less likely that they will be ignored. Checking to see if Google is indexing webpage changes like those, instead of assuming that they automatically will is recommended.

Last updated June 23, 2019.
