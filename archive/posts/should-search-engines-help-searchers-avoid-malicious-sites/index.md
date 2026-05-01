---
title: "Should Search Engines Help Searchers Avoid Malicious Sites?"
source_url: "https://www.seobythesea.com/2006/06/should-search-engines-help-searchers-avoid-malicious-sites/"
slug: "should-search-engines-help-searchers-avoid-malicious-sites"
date_published: "2006-06-24T22:43:40+00:00"
date_modified: "2020-07-06T09:48:45+00:00"
author: "Bill Slawski"
---

How safe are search engines? Should they be warning about malicious sites? A recent answer might surprise you.

Back in May, Ben Edelman wrote about [Search Engine Safety](http://www.benedelman.org/news-051206/). In part, he was writing about how search engine paid advertising for some products, like screensavers, may lead to sites that would put spyware on the computers of visitors who download the screensavers. He wrote more on that practice in a January post titled [Pushing Spyware through Search](http://www.benedelman.org/news-012606/)

He was also announcing a study that he had worked on with McAfee, about The Safety of Internet Search Engines. If you missed this report in May, it’s worth a visit. It discusses the safety of organic results through search engines, as well as paid results.

What’s a search engine to do?

Viruses aren’t anything new, and most internet literate folks now recognize some of the potential ways that viruses may spread, and know the risk of opening unsolicited emails, opening attachments from unknown sources, and visiting the websites listed in those emails.

But most people don’t think twice about following a link from a search engine to a listed result. As the study above on search engine safety describes, maybe they should be concerned about visits to malicious sites.

Should search engines explore ways to avoid leading people to sites filled with harmful scripts and viruses? Do they have a responsibility in keeping people away from such sites? Does it help them maintain a level of trust with their users in doing so?

**An Approach from Microsoft**

A new Microsoft patent application about malicious sites explores search engine safety in the context of organic results.

[System and method for utilizing a search engine to prevent contamination](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060136374%22.PGNR.&OS=DN/20060136374&RS=DN/20060136374)
Invented by Art Shelest and Eytan D. Seidman
Assigned to Microsoft
US Patent Application 20060136374
Published June 22, 2006
Filed: December 17, 2004

Abstract


> A system and method are incorporated within a search engine for preventing proliferation of malicious searchable content. The system includes a detection mechanism for detecting malicious searchable content within searchable content traversed by a web crawler. The system additionally includes a presentation mechanism for handling the detected malicious searchable content upon determination that the malicious searchable content is included in search results provided by the search engine. The presentation mechanism handles the detected malicious searchable content in order to prevent proliferation of the malicious searchable content to a receiver of the search results.

How would a search engine go about trying to identify malicious sites, and keeping searchers from being harmed by those webpages? There are a couple of different potential approaches, that could even be combined.

One way would be to look for malicious sites during a crawl of websites. A detection mechanism would look for potentially harmful pages, and identify them. Or it could notice harmful pages in real-time during the return of a search query. At the time of the presentation of results, the search engine might show a link in many different ways to try to keep a searcher from being harmed. Some of these approaches might even keep a search from returning a link to a page.

A presentation module, as part of the process described in the patent, might:

1. Use a special code to tell the web browser to protect itself – for example, by pre-pending of an exclamation point to the malicious site link. So “www.example.com” would be served as “!http://www.example.com” and the indicator could let the browser know to perform actions, such as disabling selected macros.
2. Modify the dangerous link to point to a proxy to shield the searcher’s computer from malicious activity.
3. Modify the link to point to a disinfected cached copy of the web pages, stored by or on behalf of the search engine, which would reference the disinfected cached copy saved at the time of crawling.
4. Present a modified link that points to a dynamically disinfected non-cached copy of the malicious site, where disinfecting occurs when the user selects the modified link.
5. Create a warning to be shown to the user, which would indicate that content on the link may be malicious, if accessed.
6. Hide the dangerous link or not show the link to the searcher.

**An Active Detection Mechanism**

The detection mechanism may include static analysis tools and also perform dynamic analysis. The static analysis tools would inspect visited pages and sites for known code patterns, and look for things like unnecessarily long HTML fields.

The dynamic analysis tools operate slightly differently and would look for known malicious behavior and traffic patterns. So, the dynamic analysis tools might see a malicious site initiating a connection back to a client computer on a port often associated with vulnerabilities. Or the visited malicious site might attempt to hack back into the search engine.

According to the patent application:


> The search engine should be well-defended and should be **configured to appear as a regular user computer*** to the visited web sites.

* My Emphasis.

**A Presense Detection Method (Virtual Machine Approach)**

Instead of using a normal crawling approach, another method might be to use a disposable machine, such as a virtual machine and a disposable or virtual machine inspection mechanism. It would behave similarly to a Virtual PC program that allows windows to run inside of windows.

Sort of a sandbox, it would operate in a manner independent of the outside windows or primary machine, so that whatever would happen to the inside window doesn’t have a detrimental impact upon the primary machine. Thus the virtual machine includes a crawler that visits each web site.

After each visit, a virtual machine inspection mechanism would check the inside crawler within the virtual machine for infection or detrimental effects. The virtual machine inspection mechanism looks for the result of each visit to determine if files or behaviors of the virtual machine have changed, instead of looking for behavior on the visited websites

If the virtual machine is infected or compromised, then the visited web page or website is assumed to malicious.

It would be possible for the disposable machine used to include a physical personal computer, but using a virtual machine has the advantage of recovering rapidly from an infected state.

**Active and Presense Approach Combined**

The active approach prevents the behavior from occurring and the present approach allows the behavior to occur on the virtual machine and thereafter ascertains whether the visited website was malicious. These methods could be combined such that some visited sites that appear to be affected could be cached and analyzed after the crawling process.

**Scope of Coverage**

The web crawler might be set up to detect malicious behavior on a page by page or site by site basis, or it could look at individual web objects (e.g. embedded picture files), domain names, IP addresses, or other grouping methods of units of crawling.

For example, it used to be common that under a single domain name, many shared websites used a tilde to separate portions of a site into areas owned by individual users. So, http://www.example.com/users/~barney/demos/hack.htm is assumed to belong to user Barney, while http://www.example.com/users/~adam/index.htm is assumed to belong to user Adam. If something on Barney’s pages were determined to be malicious, that shouldn’t affect the area operated by Adam.

**Detecting in Real Time**

While the detection and presentation mechanisms can look for malicious activity during crawling and indexing, malicious activity can also be detected in real-time. That’s probably not a bad idea considering that web pages can change since the time they’ve been indexed.

A real-time approach would have the presentation mechanism presenting links redirecting the user to a proxy that will dynamically detect and disinfect malicious web content. This pre-indexing and real-time indexing could be combined.

**Conclusion**

Looking for malicious sites on pages indexed sounds like it could be a resources intensive process. Yet the McAfee study makes it sound like one that might be worth pursuing.

Is it the search engines’ responsibility to protect us from potentially harmful and malicious sites, or the makers of browsers, or anti-virus software manufacturers?

Is there a potential risk to site owners if search engines adopt methods like this one? How likely are false positives?

What exactly is meant by a “malicious site?” The patent filing doesn’t fully define its use of the word malicious. Does this mean viruses, or might it also include spyware?

Will paid search results also be included in a process like this? The patent application is silent on that subject.

If a search engine takes on the responsibility of filtering or limiting access to malicious sites, do they also then assume responsibility for notifying the owners of sites that they have identified as hosting malicious content?
