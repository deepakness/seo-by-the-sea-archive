---
title: "Google Machine Learning"
source_url: "https://www.seobythesea.com/2016/06/machine-learning-inside-google/"
slug: "machine-learning-inside-google"
date_published: "2016-06-24T12:17:54+00:00"
date_modified: "2021-05-01T09:18:09+00:00"
author: "Bill Slawski"
---

![By OSX - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=12890983](media/Toyota_electronic_continuously_variable_transmission_2010-10-16_03.jpg)

_By OSX – Own work, Public Domain, [https://commons.wikimedia.org/w/index.php?curid=12890983](https://commons.wikimedia.org/w/index.php?curid=12890983)_


## Understanding Systems

When I was in high school, one of the required classes I had to take was a shop class. I took mostly what the school called “enriched” courses, or what were mostly academic classes that featured primarily reading, writing, and arithmetic. A shop class had more of a trade focus. So I was surprised when the first lesson on the first day of my shop class was a richer academic experience than any of the enriched classes I had taken.

The instructor started talking about systems and how many manufacturing processes involved breaking products down into different systems. For example, we would start by building an electric motor for this shop class, which was an important part of electrical systems within automobiles. This idea of looking at the internal functions of vehicles and classifying their parts, and understanding how they fit together was an exciting and interesting perspective. I’m reminded of that approach to understanding systems with a newly granted Google Patent that uses a machine-learning algorithm to classify and understand how support pages might fit together.


## Google Refocusing Upon Machine Learning

Steven Levy, author of [In The Plex](https://www.amazon.com/Plex-Google-Thinks-Works-Shapes/dp/1455875724), which reveals stuff about the earliest days of Google, has been sharing more with us, including a look at how Google has started relying upon machine learning approaches, and he tells us about that in a recent post, titled [How Google is remaking itself as a machine learning first company](https://www.wired.com/2016/06/how-google-is-remaking-itself-as-a-machine-learning-first-company/).

I thought the machine learning article was interesting after reading a recently granted Google patent that attempts to understand what pages on the Web are about using a classification approach. The patent had me asking myself, “Is Google going to say goodbye to PageRank for a new way of ranking Webpages that doesn’t rely upon links from other sites?” They have used [PageRank to rank pages](https://www.seobythesea.com/2011/03/the-first-pagerank-patent-and-the-newest/) from their earliest days.

This new patent focuses upon a way of classifying data that uses an approach based upon ” a hierarchical taxonomy of clustered data.”

The patent starts by using an example of how information for a support center works. Then, the patent tells us that keywords might be extracted from documents about providing support to users in a way that generates clusters of documents with similar keywords.

A classification algorithm might be used where classifications are based upon taxonomy and documents are classified with a confidence level.

This is an interesting way of looking at the Web and understanding its different parts and how they fit together.


## The Patent on Machine Learning for Customer Service

It wasn’t until I looked at the LinkedIn profile for Nadav Benbarak that I gained a sense of why this patent came about. In his experiences at Google, we are told about one project he worked upon:


> Product manager for new product development effort. Managed product vision, roadmap, design, and implementation. Led a 15-person team of engineers and operations specialists.
>
> • Created a new project to develop a suite of tools and data sources for reporting on the quality and effectiveness of Google’s customer service. Secured buy-in from senior management and garnered funding for 10 engineers.
>
> • Launched a new machine learning algorithm for summarizing customer feedback from millions of users. This information drove significant product and operations improvements for the AdWords business.
>
> A core member of the internal consulting team advising Google’s President of Sales on customer service strategy. Drove thought leadership for the analysis plan. The team’s recommendations led to a reorganization of Google’s service team and a new initiative to increase customer satisfaction

This project that he was a project manager on appears to have been the inspiration behind this machine learning patent and how it works:

[Methods and systems for classifying data using a hierarchical taxonomy](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,367,814.PN.&OS=PN/9,367,814&RS=PN/9,367,814)
Inventors: Glenn M. Lewis, Kirill Buryak, Aner Ben-Artzi, Jun Peng, Nadav Benbarak
Assignee: Google
US Patent 9,367,814
Granted June 14, 2016
Filed: June 22, 2012

Abstract


> A method and system for classifying documents are provided. A set of document classifiers is generated by applying a classification algorithm to a trusted corpus that includes a set of training documents representing a taxonomy. One or more of the generated document classifiers are executed against a plurality of input documents to create a plurality of classified documents. Each classified document is associated with a classification within the taxonomy and a classification confidence level. One or more classified documents associated with a classification confidence level below a predetermined threshold value are selected to create a set of low-confidence documents. The low-confidence documents are disassociated from each of the associated classifications. A user is prompted to enter a classification within the taxonomy for at least one low-confidence document. The low-confidence document is associated with the entered classification and a predetermined confidence level to create a new classified document.


## Take Aways

We know how the process described in this patent was used at Google to help build a customer support taxonomy. It focused on classifying customer support issues involving things such as “account management, billing, campaign management, performance, policy, etc.”

The patent tells us how useful collecting and making available information to customer support representatives would be by exploring the details of topics such as billing, to include things such as “payment processing, credits, refunds, etc.”

For instance, the patent tells us that in the subcategory of payment processing, there are issues such as:

1) A customer has questions on activation fee;
2) Customer’s account is marked delinquent;
3) A customer has questions on account cancellation; and
4) The customer has questions on forms of payment and/or invoicing.

The patent provides a rich look at how this taxonomy may have been helpful when having to supply information to advertising customers.

The patent shows us information about how the classification algorithm it uses might work on clustering documents and hierarchically organizing them, like this:


> In the above example, the clustering module may define a cluster that contains documents (or references to documents) having both the words “inbox” and “capacity” in their text. Another cluster may include documents having both the words “drop” and “call,” and so on. In some implementations, one or more rules can specify, e.g., what words may be used for clustering, the frequency of such words, and the like. For example, the clustering module can be configured to group documents where a given the word or synonyms of the given word are presently more than five times. In another example, the clustering module can be configured to group documents where any of a pre-defined set of words is present at least once.

Google has started using machine learning processes to solve problems like customer support. This approach aims at making it easier for people inside of Google to help solve customer problems by better understanding those problems and organizing information about how to solve them.

As an SEO, it had me a little excited to see a section that described how Google might rank solutions to problems. This doesn’t appear to be a replacement for PageRank, at least not quite yet. But the roots of organizing a web full of information may be found by solving smaller tasks. This is the passage about ranking documents from the patent. It feels like (to me) there are some hints in there as to how documents might be ranked on the Web to use to respond to queries from searchers:


> In some implementations, the document clusters may be ranked using the ranking module, which may also be executed on the server.
>
> In some implementations, the ranking module ranks document clusters according to one or more metrics. For example, the ranking module may rank the clusters according to the number of documents in each cluster. A cluster with many documents may represent a relatively significant topic (e.g., product issue).
>
> As another example, the ranking module may rank the clusters according to an estimated time to resolution of an issue represented by the cluster (e.g., issues represented by a cluster “software update” may typically be resolved faster than issues represented by a cluster “hardware malfunction”), a label assigned to the cluster, many documents in a cluster, designated importance of subject matter associated with a cluster, identities of authors of documents in a cluster, or several people who viewed documents in a cluster, etc.
>
> For example, a cluster representing an issue that has historically taken a long time to resolve may be ranked higher than a cluster representing an issue with a shorter historical time to resolution.
>
> In another example, several metrics are weighted and factored to rank the clusters. The ranking module can be configured to output the rankings to a storage device (e.g., in the form of a list or other construct).

We’ve heard about a machine learning approach from Google used on Web pages called Rankbrain, which appears to be focused upon rewriting queries in a way that seems helpful in producing relevant search results for those queries. However, we’ve been told by Google that [There is no Rankbrain score, and you don’t optimize for it](https://www.seroundtable.com/google-no-rankbrain-score-no-seo-22282.html).

What role may machine learning play in how information on the Web might be returned in response to queries? We don’t know at this point. There may be a lot of learning about machine learning at Google these days, like building the automated customer support taxonomy algorithm described in this patent. It appears to have helped solve some problems they were experiencing. We’ll see if it helps solve their mission to “organize the world’s information and make it universally accessible and useful.”

Updated May 22, 2019
