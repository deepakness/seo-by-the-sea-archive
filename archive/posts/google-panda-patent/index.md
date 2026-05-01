---
title: "The Google Panda Patent?"
source_url: "https://www.seobythesea.com/2012/05/google-panda-patent/"
slug: "google-panda-patent"
date_published: "2012-05-29T10:51:08+00:00"
date_modified: "2020-07-26T17:42:03+00:00"
author: "Bill Slawski"
---

> “All mushrooms are edible; but some only once.” ~ Croatian proverb

Google was granted a patent today that could be used to collect a seed set of data about features associated with different types of mushrooms, to “determine whether a specimen is poisonous based on predetermined features of the specimen.” The patent also describes how that process could be used to help filter email spam based upon the features found within the email, or to determine whether images on a page are advertisements, or to determine categories of pages on the Web on the basis of textual features within those pages. The image below, from the patent shows how features about a picture such as height, width, placement on a page, caption, and so on might be examined while determining whether or not it is an advertisement:

![a screenshot from the patent showing how feature information about an image might be collected as data points for comparison with other images.](media/google-features-patent.jpg)

This machine-learning approach can be trained with data that produces known outcomes, which could then be applied to very large data sets to classify data according to patterns identified within the seed set of data. When Google published [Finding more high quality sites in search](https://googleblog.blogspot.com/2011/02/finding-more-high-quality-sites-in.html) in February of 2011, they introduced what would become known as the Big Panda update. The approach was further elaborated on by Google’s Matt Cutts and Amit Singhal in an Interview at Wired Magazine around a week later in [TED 2011: The “Panda”That Hates Farms: A Q&A With Google’s Top Search Engineers](https://www.wired.com/2011/03/the-panda-that-hates-farms/).

In early May of last year, Amit Singhal followed up with a post aimed at helping webmasters focus upon the kinds of efforts they should take to avoid being targeted by the Panda update with a series of questions in [More guidance on building high-quality sites](https://webmasters.googleblog.com/2011/05/more-guidance-on-building-high-quality.html).

After reading the Wired interview, and finding out that the Panda update was named after a Google engineer, I tried to identify whom that engineer might be, and wrote the post [Searching Google for Big Panda and Finding Decision Trees](https://www.seobythesea.com/2011/03/searching-google-for-big-panda-and-finding-decision-trees/). I identified Biswanath Panda as a person of interest behind the upgrade based upon both his surname and a paper he co-wrote with Joshua S. Herbach, Sugato Basu, and Roberto J. Bayardo, titled [PLANET: Massively Parallel Learning of Tree Ensembles with MapReduce](http://www.bayardo.org/ps/vldb2009.pdf) (pdf).

The paper describes how the researchers involved were able to perform some fairly complex classification processes on features associated with advertisements and landing pages to predict which of those would earn more click-throughs and longer stays from visitors. It also tells us that the processes involved could be used in other ways, possibly including classifying Web pages based upon features within a known seed set, to determine which pages visitors would tend to spend more time upon. See also, [Predicting Bounce Rates in Sponsored Search Advertisements](http://www.bayardo.org/ps/kdd2009.pdf), which provides additional details on how an examination of different features related to sponsored ads and landing pages could be used to predict bounce rates.

I included a question mark at the end of the title to this post because I honestly don’t know if it should be considered Google’s “Panda” patent. It doesn’t have a co-author with a surname of “Panda,” though that could possibly be a nickname of one of the co-inventors. It doesn’t specifically mention that the process involved could be used to “noticeably” impact 11.8% of queries used at Google when applied to classify web pages. It doesn’t have a list of questions that web masters should ask themselves about their pages, like the ones that Google’s head of Search Quality, Amit Singhal published in his *More Guidance* post.

But, when you read the Wired interview with Matt Cutts and Amit Singhal, you get the sense that they are comparing sites that they find to be good quality with sites that aren’t, and that to do so, they are looking at specific features on those pages to make those decisions:


> **Wired.com**: But how do you implement that algorithmically?
>
> **Cutts**: I think you look for signals that recreate that same intuition, that same experience that you have as an engineer and that users have. Whenever we look at the most blocked sites, it did match our intuition and experience, but the key is, you also have your experience of the sorts of sites that are going to be adding value for users versus not adding value for users. And we actually came up with a classifier to say, okay, IRS or Wikipedia or New York Times is over on this side, and the low-quality sites are over on this side. And you can really see mathematical reasons.

This patent presents a way of examining features on a seed set of known pages, and developing comparisons of those features with features found on an unknown set to determing a classification of those pages based upon the examined features.

It also allows for the introductions of new features to be used while the classification process is ongoing. The patent is:

[Feature selection for large scale models](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=8,190,537.PN.&OS=pn/8,190,537&RS=PN/8,190,537)
Invented by Sameer Singh, Eldon S. Larsen, Jeremy Kubica, Andrew W. Moore
Assigned to Google
US Patent 8,190,537
Granted May 29, 2012
Filed: October 31, 2008

Abstract


> Disclosed are a method and system for receiving a plurality of potential features to be added to a model having existing features. For each of the potential features, an approximate model is learned by holding values of the existing features in the model constant.
>
> The approximate model includes the model having existing features and at least the potential feature. A performance metric is computed for evaluating the performance of the approximate model. The performance metric is used to rank the potential feature based on a predetermined criterion.

There is a whitepaper from Google that includes three of the four inventors listed on the patent and covers substantially similar territory, titled [Parallel Large Scale Feature Selection for Logistic Regression](http://www.cs.cmu.edu/~daria/papers/fslr.pdf). The paper leads off by telling us about some of the problems it is intended to address:


> High-dimensional data sets with a large number of features are used increasingly more often in real-world machine learning tasks. Text mining problems such as classification and spam detection rely on features that describe the occurrence of specific combinations of words and therefore the numbers of potential features can grow up to billions.


## Takeaways

I have been keeping a careful eye out for a patent that would describe the process behind Google’s Panda updates, and based upon the nature of those updates, my expectation was that I might not necessarily recognize it once I came across it. I didn’t expect it to provide details upon specific features that might be seen as positive or negative when it comes to determining the quality of web pages. I didn’t expect it to provide hints about what a webmaster might do if he or she was impacted by it.

I did expect that a patent about the Panda update would involve very large data sets, that it would include a machine learning approach that might determine positive features from known websites considered to be high quality, and that it could expand upon the features being used during the process of classifying a large set of pages. The process described in this patent does seem to fit those expectations.

The processes described in this patent are likely similar in many ways to the algorithm that classified documents under the Panda updates and could be the actual framework for the updates.

Regardless, it doesn’t provide any answers to ranking better under Panda, or any specific solutions to regaining rankings that might have been lost. It doesn’t focus upon any one feature or signal that could potentially be tweaked to change around the fortunes of pages that might have been affected, but rather considers a wide range of factors.

For pages that have been negatively impacted by Panda, the solution is more likely in removing or replacing low-quality content upon pages, and creating the kind of experience on the remaining pages that are pointed at by the questions that Amit Singhal mentions in his *More Guidance* post.

And as for mushrooms, I’m told that my great grandmother used to boil them with a silver coin included in the pot. If the coin blackened during the process, it was supposedly a sign that the mushrooms were poisonous. Researching that approach, I see lots of articles indicating that it just doesn’t work. My family lucked out. Be careful what you’re consuming, regardless of whether it’s about mushrooms or solutions to algorithmic updates. :)
