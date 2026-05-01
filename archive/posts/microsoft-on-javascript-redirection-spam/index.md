---
title: "Microsoft on Javascript Redirection Spam"
source_url: "https://www.seobythesea.com/2007/09/microsoft-on-javascript-redirection-spam/"
slug: "microsoft-on-javascript-redirection-spam"
date_published: "2007-09-24T02:01:00+00:00"
date_modified: "2018-03-02T22:52:21+00:00"
author: "Bill Slawski"
---

A paper prepared by Microsoft researchers at the AIRWeb’07 conference this past May explores some methods that a few people use to try to trick search engines. The paper, A Taxonomy of JavaScript Redirection Spam (pdf), provides a nice overview of those methods.


> In this paper, we study common JavaScript redirection spam techniques on the web.
>
> Our findings indicate that obfuscation techniques are very prevalent among JavaScript redirection spam pages.
>
> These obfuscation techniques limit the effectiveness of static analysis and static feature based systems.
>
> Based on our findings, we recommend a robust counter measure using a light weight JavaScript parser and engine.

There are legitimate reasons to use redirects on Web sites, and there are less than legitimate reasons. The paper details both legitimate reasons for redirects as well as questionable reasons. Here’s an example of one:


> Doorway pages are used by both legitimate and spam sites to improve rankings for certain search terms. The doorway page is specifically designed and optimized to rank high for certain search terms. Doorway pages can improve user experience by introducing the site to the user and clearly stating what the site is about.
>
> However, the problem occurs when the site targets terms that are completely inappropriate to the site’s topic. Visitors who search on those terms may click on the doorway page, but then are quickly redirected to a spam site.

The paper also explores different types of approaches to using javascript within those questionable areas. What makes this study work well is that the authors actually performed a study involving a large number of web sites to see how prevalent this kind of redirection using javascript might be. When a random sampling of web pages only resulted in tens of pages using javascript redirects, a different method was used which focused upon exploring more popular pages.

The authors took a list of the top 5000 most popular English queries, and found the top 200 search result URLs from each using Live Search (search.live.com). That gave them a set of 782,937 unique URLs which they then labeled as being popular.

To explore the use of redirection on blogs, they decided to focus upon sites at blogspot.com. They used what they believed were the top 100 most monetizable keywords from Live Search to extract 934,876 blog sites which contained one or more of those keywords in the subdomain area of the blog’s URL – .blogspot.com.

Of the popular sites, 1 in 288 (2,712 / 782,937) contained a javascript redirect. The incidence was much greater in those blogspot pages, with 1 in 130 (7,196 / 934,876) of them containing javascript redirects.
