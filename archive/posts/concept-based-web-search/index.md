---
title: "Concept-Based Web Search"
source_url: "https://www.seobythesea.com/2013/11/concept-based-web-search/"
slug: "concept-based-web-search"
date_published: "2013-11-04T23:03:50+00:00"
date_modified: "2020-11-03T15:38:49+00:00"
author: "Bill Slawski"
---

This post started with a prologue, titled [Are You, Your Business, or Products in a Knowledge Base?](https://gofishdigital.com/you-your-business-products-knowledge-base/), which introduced Microsoft’s Conceptual Knowledge Base Probase. Probase appeared to have died at Microsoft Asia, but it may have morphed into a concept graph to add in concept-based web search.


## Microsoft’s Probase Knowledge Base

Sometime between when Microsoft acquired semantic search company Powerset and now, the software company began work on one of the largest knowledge bases in the world, Probase. Why Bing doesn’t use it now is a mystery, but it doesn’t appear to. There are a few papers about Probase, including one titled, [Concept-Based Web Search](http://www.cs.sjtu.edu.cn/~kzhu/papers/topic-camera.pdf). Here’s a snippet from the paper, which might evoke some recent memories of Google’s Hummingbird update:


> It is important to note that the lack of a concept-based search feature in all main-stream search engines has, in many situations, discouraged people from expressing their queries more naturally. Instead, users are forced to formulate their queries as keywords. This makes it difficult for people who are new to keyword-based search to effectively acquire information from the web.

In my last post on Hummingbird, [Google’s Hummingbird Algorithm Ten Years Ago](https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/), I included the suggestion that people learn how to do [concept-based keyword research](https://www.seobythesea.com/2012/05/should-you-be-doing-concept-research-instead-of-keyword-research/), instead of keyword-based keyword research.

That post on concept research was about Bing, and how a knowledge base might be used to improve search results from Bing. The patent involved a two-step approach to (1) associate entities in a Knowledge Base queries with (2) probable user intent behind the query. While we’ve seen Bing add a knowledge panel to its search results, with entity information displayed, which it called Snapshots, the Bing knowledge-base used now doesn’t seem like the concept knowledge base Probase. Instead, those knowledge base results seem like an addition to Bing’s search results that don’t affect those results.

In March of 2011, ReadWrite Web wrote about some of Microsoft’s “Research Projects,” including Probase, in their post [Microsoft Research Watch: AI, NoSQL and Microsoft’s Big Data Future](https://readwrite.com/2011/03/21/microsoft-research-watch-ai-nosql-big-data/#awesm=~omcyOD3BRe6U4L). In my prologue post, I provided a link to [The Release Page for Probase](https://www.microsoft.com/en-us/research/project/probase/) which is described in the ReadWrite article. On the release notes page linked from that page, there’s a note that says that “this release is only available for internal use for now.” There is a [manual](https://www.microsoft.com/en-us/research/project/probase/) (pdf) for it that provides more details on how it might work.


## The Death of Powerset?

Has Probase stalled, apparently like Bing’s implementation of [Powerset](https://www.seobythesea.com/2009/06/microsoft-bing-with-powerset-inside/)‘s semantic search? I do remember in the early days of Bing, there were links to Wikipedia pages that appeared to have been annotated by Powerset. The ReadWrite article refers to them as Bing Reference pages. The Bing Powerset blog looks like a ghost town, with broken images instead of broken windows. The post Learn more with Bing Reference hints at what could have been. The Bing Powerset blog lasted one more post, which notes that future Powerset announcements would be made in the main Bing Blog:


> From time to time, our PMs and developers will post about a new feature we launched, or what we have in store for the next generation search snippets or answers, two of the areas where the Powerset team is making direct contributions to the quality of Bing. Let me assure you, there is a ton of cool stuff coming, and we can’t wait to be able to share it with you all. So, as we say goodbye to the Powerset blog, I hope you will all still be eager to know what makes Bing special and follow the Bing community blogs, to keep up to date with everything Bing

The post author, and former CEO of Powerset, Lorenzo Thione, appears to have left Bing to [be involved in a startup in the art world](https://www.ibtimes.com/fine-art-disruption-how-lorenzo-thione-evolved-bing-artify-it-700137) by the name Artify. I didn’t check to see if there were any further updates in the Bing Blog.

Was PowerSet a dead-end for Bing? Was Probase? I don’t know. The quote from above about a “concept-based search feature” is from a Microsoft White Paper [Concept-Based Web Search](http://www.cs.sjtu.edu.cn/~kzhu/papers/topic-camera.pdf) (pdf) (a second link to make it easier to visit, and more likely that you will) that hints at the demise of Powerset at Bing:


> There have been some attempts to support semantic web search using some form of a knowledge base. A well-known example is PowerSet which maintains huge indexes of entities and their concepts. This approach, however, will not scale because updates on the entities can be extremely expensive.

The paper does make it seem like Probase doesn’t have that limitation, and the quote about it (above) makes it sound like the type of query re-writing we see in Google’s Hummingbird is one of the features that a concept-based web search engine would bring. Since Microsoft hasn’t made a hummingbird announcement about re-writing queries, likely, Probase hasn’t been folded into Bing yet, if it will ever be.


## Concept-Based Search at Google and Bing

I have found a few recently granted Google patents that describe how concepts might be gathered from Web Content, but the Bing white papers on Probase illustrate an approach to this kind of search that is worth discussing. In this one on Probase, it concludes with the statement:


> In this paper, we propose an idea to support concept-based web search. Such search queries contain (sic) abstract or vague concepts in them and they are not handled well by a traditional keyword-based search.
>
> We use Probase, an automatically constructed general-purpose taxonomy to help understand interpret (sic) the concepts in the queries. By concretizing the concepts into their most likely entities, we can then transform the original query into several entity-based queries which are more suitable for traditional search engines.

In short, how Probase works is to take a searcher’s query and sort it into possible term sequences that might include concepts, entities, attributes, and keywords. It may then identify the intent (or the semantics) of those term sequences based upon a set of query patterns. (Keep that in mind for when we discuss the Google patents in a later post).

The queries might then be re-written into a set of candidate queries, based upon their likelihood, estimated by word association probabilities (see my post on the [Hummingbird patent](https://www.seobythesea.com/2013/09/google-hummingbird-patent/) for a description of one way that word associations or co-occurrences might be used to re-write queries.) These candidate queries might then be submitted to Probase or Bing to obtain a set of search results.


## Conclusion

The paper goes into much more detail on these steps, but at this point, Probase may never be released publicly. We’ll get into the Google patents in future posts.

I’ve been watching the videos on a Stanford Class on Natural Language Processing and reading [The Big Book of Concepts](https://www.amazon.com/Big-Book-Concepts-MIT-Press/dp/0262632993?ie=UTF8&*Version*=1&*entries*=0) to dig deeper into the methods behind a Concept-Based Web Search. Both are recommended and seem to be helpful (to me) so far in digging into this topic. These seem like good starting points for learning about the search that involves understanding concepts to deliver search results.

*added – 1/1/2017* I noticed that Microsoft’s Probase Concept Knowledge Graph has been updated, and they claim that it has been successful at this point on this page:

Microsoft Concept Graph Preview For Short Text Understanding. On that page, they tell us:


> In Microsoft Research, we built a research project called Probase, which is a big graph of concepts. Knowledge in Probase is harnessed from billions of web pages and years’ worth of search logs — these are nothing more than the digitized footprints of human communication. In other words, Probase uses the world as its model. This Microsoft Concept Graph release is built upon Probase.

*Added 9/1/2019* The project that was started with Probase has now become the [Microsoft Concept Graph For Short Text Understanding](https://concept.research.microsoft.com/Home/Introduction)
