---
title: "Google Phrase-Based Indexing Patent Granted"
source_url: "https://www.seobythesea.com/2008/09/google-phrase-based-indexing-patent-granted/"
slug: "google-phrase-based-indexing-patent-granted"
date_published: "2008-09-16T02:32:01+00:00"
date_modified: "2021-07-14T20:18:42+00:00"
author: "Bill Slawski"
---

## A Related Patent to Phrase-Based Indexing that Clusters Concepts Those Pages Rank For

Before becoming a co-founder of the new search engine [Cuil](http://web.archive.org/web/20090425215821/http://www.cuil.com/), Anna Lynn Patterson worked at Google on a way of looking at how often different phrases appeared together on pages of the Web. She worked on a series of patent applications with a common description, with different claims sections that itemize different parts of phrase-based indexing.

I summarized the description from one of the patent filings in my post from December 29, 2006, in [Phrase Based Information Retrieval and Spam Detection](https://www.seobythesea.com/2006/12/phrase-based-information-retrieval-and-spam-detection/)

One of the patent applications from that series, [Automatic taxonomy generation in search results using phrases](https://patents.google.com/patent/US7426507B1/en), which I hadn’t originally come across back in 2006, come out today. It covers the idea of taking documents that share related phrases and clustering them with related phrases to provide search results that might cover a range of categories related to search queries.


## Clustering under Phrase-Based Indexing

What do I mean by clustering?

I watched a great example of clustering this weekend during a television show on Global Warming.

The show used a golfing analogy to describe the differences between attempting to predict weather patterns for a few days in the future and for a much longer period of time.

Using different theories to try to forecast the weather for three or four days in the future is a little like trying to put a golf ball into the hole from about ten feet away. Imagine each variation of a theory to predict the weather as a swing and a golfball approaching the hole as a prediction.

Because the distance isn’t too far, most of the golf balls hit will come very close to the hole. They will cluster around it. So if you have 50 different theories, you may end up with 50 golf balls close together around the hole.

Predicting the weather a few years in the future based upon different theories may be more like trying to hit a golf ball into a hole from 250 feet away. Hit a few thousand golfballs towards the hole, and they will be further apart. You may see a pattern emerge. Some balls will be closer together and some clusters will be further from another.

Similar golf swings (or similar theories) may result in some golf balls closer together. When you have clusters of golfballs farther apart, they may result from golfball swings (or theories) that are very different. The clusters could cover different categories of theories related to predicting the weather.


## Clusters and Phrases

One of the main ideas behind the phrase-based indexing system is to explore documents found on the Web and see how often the same phrases co-occur within the same documents. So this indexing system may go out on the Web. It may identify how frequently certain phrases tend to co-occur in the same documents and mark them as related.

So, pages that include the phrase “baseball stadium” may include other phrases such as “ball game,” “bleachers,” “home plate,” and other related phrases.

Once locations of phrases get found, clustering may decide which pages to show in search results. Those would come from the phrases included in a search query and phrases related to those query phrases.


## Clusters On the Web

‘
The patent provides an example of how clustering might decide which pages to show. It would affect the order those display in.

Someone searches for the query “blue merle agility training,” it comes from the phrases “blue merle” and “agility training.” The search engine returns 100 results. Besides, clusters may work with related phrases found earlier by the phrase-based indexing system.

Related phrases for “blue merle” might be “Australian Shepherd,” “red merle,” “tricolor,” and “Aussie.”

Related phrases for “agility training” might be “weave poles,” “teeter,” “tunnel,” “obstacle,” and “border collie.”

In the example, the patent tells us that the system will count the number of documents containing each related phrase. So, for example, if the phrase “weave poles” shows up in 75 of the 100 documents, and “teeter” appears in 60 documents, and “red merle” appears in 50 documents, then we have three clusters (or the first three clusters).

The first cluster would have the name “weave poles.” A certain number of documents from that cluster get presented in the search results. The second cluster would have the have name “teeter.” A selected number of results would get presented from that cluster. Finally, the third would have the name “red merle.” Many documents would be in search results from that cluster.


## How Clusters Could Show in SERPs in Phrase-Based Indexing

We have several documents taken from the different clusters based upon how frequently related phrases show up in those documents using clusters. The most popular can be first. They would be either in proportion to how large or small those clusters might be. Or the same number of documents can present to a searcher from each cluster.

This approach aims to provide searchers with results containing the query terms they searched for in a taxonomy. This would be a classification of results based on the different clusters created from the related phrases.

The phrase-based indexing system can perform other functions. It could help find duplicate content on the Web and filtering out spam in search results. But, those aspects of the phrase-based indexing system are still under review by the patent office.
