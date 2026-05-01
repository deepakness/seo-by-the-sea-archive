---
title: "Search Engine Classification and Assignment of Categories"
source_url: "https://www.seobythesea.com/2007/09/search-engines-classifications-and-assignment-of-categories/"
slug: "search-engines-classifications-and-assignment-of-categories"
date_published: "2007-09-30T22:26:31+00:00"
date_modified: "2021-05-08T18:14:27+00:00"
author: "Bill Slawski"
---

## Search Engine Classification into Categories

If you have a website that classifies products or services or pages into different areas, and your products might be offered in a shopping search engine or other services that draw information from multiple websites, how you classify what you may play a role in how that shopping search engine classification or creates new classifications when it displays your products or services or pages.

A Yahoo patent application describes an automated process where items entered into different categories can be categorized in other broader categorization schemes.

These broader search engine classification schemes could be for:

- Product search
-
- Advertisements
-
- User-tagged items such as photos
-
- Services such as job listings
-
- Other areas where there are many websites that have their own unique categorization systems

**The Value of Categories**

A Search Engine Classification into Categories helps us find specific pieces of information more quickly by organizing that information in meaningful ways and identifying the categories that the information belongs within to search through that information classified.

There are different styles of categorizing information, which can vary from person to person. For example, some may use a single-tier categorization scheme. Others might prefer a more complex, hierarchical categorization scheme using “parent” categories with one or more “child” categories.

Also, some search engine classification schemes may be coarse-grained with relatively few categories with relatively many members or fine-grained with many more categories with relatively fewer members.

We see many different categorization methods on many different websites for pages, products, and services. Therefore, there are times when it can be helpful to organize information that may be found in those different categorizations into a single unified categorization scheme.

For example, shoppers using a search engine to find a specific product might attempt to process data about products from multiple merchants, each with its own categorization scheme. Attempting to serve that information in search results to millions of customers means finding a way to finding a way of handling those different categories from different merchants.

**Examples of Search Engine Classification Contexts**

The patent filing primarily focuses upon an example in the context of a product classification system. Still, the techniques described applying to any context in which things that have already been categorized in one domain are assigned to categories in another domain.

Source categories are the original categories of products or services or things on the original pages. Target categories are the classification that has been created to fit into the larger system that aggregates the source categories. Here are some other contexts where this method can be used:

*Job Listings*

Job sites have their own classification system. To build a larger job site, which includes listings from multiple job sites, there needs to be a way of creating a larger categorization scheme, which may use the source categories from the original sites as a factor in determining the target categories that each job listing will go into in the site aggregating the others.

*Documents*

Likewise, sites that include a lot of documents classified into different categories, which could be listed in a site that includes documents from many different sites, may use the original categories to create new categories for the larger site.

*Advertisements*

A web portal may want to make sure that ads displayed by web pages relate to the subject matter of the web pages to maximize the effectiveness of those advertisements.

That could be done by assigning ads to target categories in a target scheme and assigning web pages (which may contain search results) to the same target categories in the same target scheme. Then, when a web page is requested, the target category of the web page can be determined, and advertisements from that target category may be selected.

So, advertisements categorized by advertisers could use those source categories to assign the advertisements to target categories. Likewise, web pages (or search queries) categorized based on one or more source schemes could use the source categories associated with the web pages or queries to assign target categories to them.

*User Tagging of Events, Photos, etc.*

Many sites now allow computer users to categorize items (events, photos, etc.) by assigning tags to them. These tagging systems don’t usually require any particular tagging scheme but allow users to develop their own classifications (or source categories).

There may be some benefits imposing a unified tagging scheme (target categories) on these items that have been tagged by a diverse and non-uniform set of taggers.

**The Search Engine Classification Patent Application**

[Assigning into one set of categories information that has been assigned to other sets of categories](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070214140.PGNR.&OS=dn/20070214140&RS=DN/20070214140)
Inventors: Byron Edward Dom, Hui Han, Ramnath Balasubramanyan, Dmitry Yurievich Pavlov
US Patent Application 20070214140
Published September 13, 2007
Filed: March 10, 2006

Abstract


> Techniques are described for assigning, to target categories of a target scheme, items that have been obtained from a plurality of sources. In situations in which one or more of the sources has organized its information according to a source scheme that differs from the target scheme, the assignment of categories may be based, in part, on an estimate of the probability that items from a particular source category should be assigned to a particular target category.
>
> Such probability estimates may be based on how many training set items associated with the particular source category have been assigned to the particular target category. Source categories may be grouped into clusters.
>
> The probability estimates may also be based on how many training set items within the cluster to which the particular source category has been mapped have been assigned the particular target category.

**Assignment of categories for Items from Multiple Sources (and Source Categories) into Target Categories**

*Category-to-category probabilities*

When sources have organized their information in source schemes different from the target scheme, assignment of search engine categories may be based, in part, on “category-to-category probabilities.” This means an estimate of the probability that items from a particular source category should be assigned to a particular target category.

Example

An item from source category X may be assigned to target category Y if 90% of all previous items from source category X have been assigned to target category Y.

Or, the same item may be assigned to a different target category (e.g., target category Z) if only 10% of all previous items from source category X have been assigned to target category Y.

*Source Categories with Same Names and Different Meanings*

Sometimes different source sites apply different meanings to the same category name.

Example

An “ornament” from a car dealership is likely to be very different from an “ornament” from a Christmas store.

So, the source of an item may be treated as a component of the source category. Thus, “category X from source A” is treated as one category, and “category X from source Y” is treated as another category.

This way, the category-to-category probability that an “ornament” item from a car dealership should be assigned to a particular target category will not be affected by “ornaments” from a Christmas store assigned to that particular target category.

*Using Clusters*

The source categories may be mapped to source category clusters, and cluster-to-category probabilities are used to assign items to target categories. A cluster-to-category probability represents the likelihood that an item that maps to a particular source category cluster should be assigned to a particular target category.

Example


> Assume that the source categories X, Y, and Z all map to source category C. Then, the cluster-to-category probability that an item from any source categories X, Y, and Z should be assigned to a particular target category B may be based on how many previously assigned items from source categories X, Y and Z were assigned to the target category B.
>
> If any of the items from categories Y and Z were assigned to category B, then the cluster-to-category probability that an item from source category X should be assigned to category B may be high, even if few or no items from category X have been assigned to category B.

*Using Feeds for Assignment of Categories*

If we look at feeds used for product categorization, we see how to source search engine categories supplied to a product search engine.

Here’s an example of a feed that might be supplied to a search engine:

<title:Stacky Wrappy>
<model:>
<partnum:>
<brand:>
<isDblChecked>
<price: 13>
<merchantCategory:Baby and toddler nursery Nursery Themes>
<ppath:96605758>
<manufacturer:>
<mid:mid=1012440>
<oldBccat:96365799>
<upc:>
<description:Ring around the stroller! Its an entertaining travel toy . . . its a coordination-building stacking ring. Twist this flexible friend around a stroller or car seat bar and baby will eagerly explore its rattles ribbons and crinkly sounds. Then take it off the stroller bar and use it as a stacking ring that challenges babys fine motor skills. For ages 6 months and up. Imported.>
<lastUpdatedOn:25-AUG-04>
<mid_pid: 1012440 10413>
<createdOn:03-MAR-04>
<merchantStatus: 1>

This kind of feed method for product categorization system may be designed. Every offer must have values for title, merchant id (mid), SKU, and price and optional fields, which could include things like description and merchant category (mc).

The merchant category is from the merchant’s categorization scheme and is not the categorization scheme used by the search engine. It is the “source category and not the category used in the target scheme.

**Conclusion**

The assignment of categories patent application goes into a lot of detail regarding how categories from different sources could be combined into a much smaller and more focused number of target sources within the context of a shopping search engine.

I think what’s important here isn’t so much knowing how this kind of classification happens as much as knowing that it can happen in a lot of different contexts.

There are many different services provided by search engines that use categories, from business listings in local search to product search, from jobs of many types to advertisements, from date matching services to Question Answering (see the list of categories on Yahoo Answers).

The way that items are classified on source sites may influence which categories from those sites are placed on a site from a search engine that aggregates those items. They may also influence the creation of those target search engine categories.
