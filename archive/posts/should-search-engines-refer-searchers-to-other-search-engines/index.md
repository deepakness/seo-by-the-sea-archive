---
title: "Should Search Engines Refer Searchers to Other Search Engines?"
source_url: "https://www.seobythesea.com/2009/05/should-search-engines-refer-searchers-to-other-search-engines/"
slug: "should-search-engines-refer-searchers-to-other-search-engines"
date_published: "2009-05-01T09:50:25+00:00"
date_modified: "2021-07-06T14:18:17+00:00"
author: "Bill Slawski"
---

Do you have a favorite search engine? Is there a particular reason why you use the search engine that you do?

Do you use more than one search engine regularly? Have you switched from using one search engine regularly to another one?

If you run a search engine, you would probably want to understand why people shift from one search engine to another, either temporarily or permanently. And you might be interested in seeing if you can identify why and when these shifts take place and a way to predict when such a changeover might happen.

Microsoft has been exploring why people switch search engines and have filed for a patent on predicting when someone might switch from one search engine to another. It seems like an odd subject for a patent application, and they even tell us that one behavior might indicate such a switch might be when someone submits a query for “Google” in Microsoft’s Live Search.

The patent filing describes studies that Microsoft has conducted where they collected information about searchers switching to different search engines and provides some details on how a search engine can use the ability to make such a prediction in many ways…

The patent filing is:

[Predicting and Using Search Engine Switching Behavior](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090112781.PGNR.&OS=dn/20090112781&RS=DN/20090112781)
Invented by Allison P. Heath, Ryen William White, Christopher J.C. Burges, Eric David Brill, and Robert L. Rounthwaite
Assigned to Microsoft
US Patent Application 20090112781
Published April 30, 2009
Filed December 18, 2007

Abstract


> Aspects of the subject matter described herein relate to predicting and using search engine switching behavior. In aspects, switching components receive a representation of user interactions with at least one browser. The switching components derive information from the representation useful in predicting whether a user will switch search engines.
>
> The derived information and information about a user’s current interaction with a browser is then used by a switch predictor to predict whether the user will switch search engines. This prediction may be used in a variety of ways, examples of which are given herein.

They’ve also published at least a couple of white papers on the topic that provides interesting statics. One of those papers explores ways to encourage searchers to use more than one search engine for their searches.

**Predicting and Using Search Engine Switching**

One of the main business models of today’s major commercial search engines is advertising shown with search results, and search providers obtain revenue that can be tied to how many people use their search engines. When someone switches from one search engine to another, the new search engine gains income while the old search engine losses.

During a three-month-long study tied to this patent filing, fifty percent of the users studied stayed with the same search engine for all of their searches while the other half switched to other search engines at some point during that time.

People who used more than one search engine tended to perform most of their searches on one preferred search engine.

The inventors of the patent filing define a “switch” as being defined by one of the following behaviors:

1. Performing a query with a different search engine than the previous query;
2. Navigating to a homepage of a different search engine;
3. Querying for a different search engine name, such as submitting a query for “Google” to Live Search.

They also tell us that sometimes a searcher will mistakenly type a query into a toolbar plugin for a different search engine, and those searches may not indicate a desire to switch search engines.

One question that this patent filing asks is, “How can a search engine dissuade users from switching to a different search engine?” But, the researchers involved in these studies also seem interested in enabling switching in some instances.

**Search Engine Switching Behavior**

The inventors listed in this patent application have conducted a few studies on switching behavior by searchers. Information about those studies can be found in a couple of white papers from Microsoft:

[Defection Detection: Predicting Search Engine Switching](http://ryenwhite.com/papers/HeathWWW2008.pdf) (pdf)

Abstract


> Searchers have a choice about which Web search engine they use when looking for information online. If they are unsuccessful in one engine, users may switch to a different engine to continue their search. By predicting when switches are likely to occur, the search experience can be modified to retain searchers or ensure a quality experience for incoming searchers.
>
> In this poster, we present research on a technique for predicting search engine switches. Our findings show that prediction is possible at a reasonable level of accuracy, particularly when personalization or user grouping is employed. These findings have implications for the design of applications to support more effective online searching.

[Enhancing Web Search by Promoting Multiple Search Engine Use](http://web.archive.org/web/20101225172334/http://research.microsoft.com/en-us/um/people/ryenw/papers/WhiteSIGIR2008a.pdf) (pdf)

Abstract


> Any given Web search engine may provide higher quality results than others for certain queries. Therefore, it is in users’ best interest to utilize multiple search engines. This paper proposes and evaluates a framework that maximizes users’ search effectiveness by directing them to the engine that yields the best results for the current query.
>
> In contrast to prior work on meta-search, we do not advocate for replacing multiple engines with an aggregate one but rather facilitate simultaneous use of individual engines. We describe a machine learning approach supporting switching between search engines and demonstrating its viability at tolerable interruption levels. Our findings have implications for fluid competition between search engines.

When do people tend to switch to a different search engine?

The patent filing tells us that some patterns in behavoir seemed to indicate that a switch was about to happen. These include things such as:

- Increased query length,
- Viewing multiple search engine result pages, and;
- Revisitation of previously-viewed pages, amongst others.

Some interesting statistics from the second of those white papers tells us that:


> Our analysis showed that 36.4% of searchers used more than one search engine in the duration of the logs. The findings also showed that 6.8% of all sessions and 12.0% of sessions containing more than one query involved switching between two or more search engines.

The patent application also informs us of at least three classes of search engine switching behavior:


> *1. Erratic switching:* Users switch between Web search engines for almost every search and may use multiple engines concurrently. Such switches may be linked to a desire for coverage, the use of multiple Web browser tabs, and the use of applications that automatically submit queries to multiple engines simultaneously.
>
> 2. *Short-term or “bursty” switching:* Users switch engines for individual search sessions of groups of sessions but generally return to their preferred engine for most of their searching. Switches of this nature may occur because a user feels that a particular search engine is better suited for the current task. For example, the recent improvements to the Image Search feature on Live Search may have encouraged Google or Yahoo! users to switch to Live Search for image-related queries.
>
> 3. *Long-term switching or “defection”:* Users switch from one search engine to another and rarely return to the original engine. This appears to represent a change in their search engine preference. Such switches–sometimes referred to as “defections”–have profound business importance as this represents a lost customer and a potential erosion of query share.

The paper on *Promoting Multiple Search Engine Use* provides slightly different names for each of these behaviors, but the descriptions are very similar. It also gives us some statistics on how frequently each of these behaviors was seen in the Microsoft data behind that paper, with 33.4% of searchers in the study switching between search engines for every search, 13.2% switching over to a different search engine for a specific search session, and 7.6% of those searchers defecting to another search engine and not returning to their original preferred search engine.

**Why Predict Switching?**

Overall, the main reason seems to be to enable a search engine to understand why searchers might shift from one search engine to another and improve in areas that might cause defections.

This might involve evaluating a search engine’s performance for a specific query or all queries.

It might consider the interfaces shown to searchers in search results and the ranking algorithms used for queries.

It might help lead to personalized prediction models that can be developed for queries.

**Conclusion**

It seems unusual that the topic of understanding why a searcher might switch search engines has been developed as a patent application. Still, it makes for an interesting read, especially if you might be interested in some of the business concerns of how a search engine operates and how people use search engines.

As a site owner or a searcher, it makes sense to think about the role of search engines on the Web and how they influence which pages people might see when they search.

The paper on *Promoting Multiple Search Engine Use* suggests that it might sometimes make sense for a search engine to “automatically determine when it is in users’ interest to try another search engine.” Would you use Windows Live Search more if it sometimes told you for some queries that the results at Google or Yahoo or Ask.com were also worth looking at and provided links to those searches? In conclusion to that paper, the authors describe the benefit of making it easier for searchers to switch for particular queries:


> We proposed a machine learning-based approach for supporting switching that estimates in real-time whether more accurate results exist on alternate search engines. Estimation is based on features of the query, the result set, and the titles, snippets, and URLs of the top-ranked search results.
>
> An empirical analysis of classification performance demonstrates that it accurately predicts when users would benefit from switching between engines at low recall levels. The promotion of multiple search engine use through application components such as that described can improve the retrieval experience for users of all search engines.
