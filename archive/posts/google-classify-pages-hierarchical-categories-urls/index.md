---
title: "How Google May Classify Pages Using Hierarchical Categories in URLs"
source_url: "https://www.seobythesea.com/2013/07/google-classify-pages-hierarchical-categories-urls/"
slug: "google-classify-pages-hierarchical-categories-urls"
date_published: "2013-07-12T07:37:27+00:00"
date_modified: "2020-07-26T17:25:30+00:00"
author: "Bill Slawski"
---

Google was granted an updated version of a patent this week that looks at how the search engine might use directories in URL structures to help it better understand hierarchical categories on a Web site and to categorize new pages and directories that might be added to a site. The patent tells us that this might enable the search engine to add supplemental information to pages, such as advertisements that fall within the categories displayed upon the site.

Some other patents I’ve written about in the past shows that the search engines might be doing more with hierarchical categories than just deciding upon which ads to show on a page

Imagine that you have a site about car parts, and you decided to organize the pages of the site first by car make, so the main categories on your site are different brands, and your second level of directories is organized by car models. You might then have sub-sub-categories that are organized by different systems within cars, such as “electrical,” “transmission,” “cooling,” “suspension,” and so on. URLs for a couple of your pages might look like:

“http://www .mycar.com/ford/fiesta/cooling/”
“http://www .mycar.com/ford/mustang/cooling/”

Chances are good that everything displayed within this directory is about radiators and hoses and so on, for Ford Fiestas in the first URL, and Ford Mustangs in the second URL. Imagine that Google uses this site to create hierarchical categories for cars. Ford comes out with a new model of car, and this website and many other car websites add the new model, and they create new directories for their sites. Let’s call the new model, “Flash”. The hypothetical site might create URLs like:

“http://www .mycar.com/ford/flash/cooling/”

Because of Google’s efforts to build a category model previously, adding this new category for this new make of car doesn’t require rebuilding hierarchical categories from scratch but instead adding a new category into the previously constructed model already in existence.

The patent describes how such a model might be created, and how new items might be placed within it. The patent is:

[Training set construction for taxonomic classification](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PALL&S1=08484194&OS=PN/08484194&RS=PN/08484194)
Invented by Philo Juang, Christopher Testa, and Nicolaus Mote
Assigned to Google
US Patent 8,484,194
Granted July 9, 2013
Filed: January 13, 2012

Abstract


> A training set generator may be configured to input a taxonomy including a hierarchy of categories and a plurality of top-level sites, and to output a training set of categorized data. The training set generator may include a crawler configured to crawl each of the top-level sites to determine at least one lower-level site associated therewith and to store the top-level sites and associated lower-level sites as crawl data.
>
> The training set generator also may include an extractor configured to determine, for each of the top-level sites, a corresponding site-specific extraction template associating at least one portion of the corresponding top-level site with at least one category of the hierarchy of categories, and further configured to apply each site-specific extraction template to corresponding crawl data to thereby associate the crawl data with the categories of the hierarchical categories and obtain categorized data of the training set.

What makes it interesting to me is some of the other patents I’ve seen from Google over the past few years that describe how categories might be used to do things like create sitelinks for pages in search results as well as re-ranking search results based upon the categories of pages and matching categories for queries. I’ve written about those here:

- [How Google May Boost Search Rankings for Your Relevant Pages Using Keywords in the Same Category as Your Website](https://www.seobythesea.com/2011/08/google-boost-search-rankings-category/)
- [How Google Might Determine Categories for Web Pages](https://www.seobythesea.com/2012/07/google-categories-web-pages/)
- [How Google May Use Categories as a Search Ranking Factor](https://www.seobythesea.com/2010/10/how-google-may-use-categories-as-a-search-ranking-factor/)

As I noted in the last of those:


> A page (or query) about “Flamingos” might fall within a categorized list, such as:
>
> Household > Lawn Care > Decorative > Flamingos
>
> When a page is indexed, it might be given a text-based score for ranking, as well as a category score. A page about Flamingos would be given a category score based upon how well it correlates with flamingos compared to other pages about flamingos.
>
> A page about lawn decorations, which includes information about flamingos and lawn gnomes might fit into both the flamingo category and the gnome category, but the page’s correlation score for flamingos might not be as high as a correlation score for page only about flamingos.

What this new patent adds is a description of a category model based upon directory structures in URLs, and how new categories might be added to that hierarchical structure.

**Hierarchical Categories Take Aways**

I’ve been asked if there is much value to using directories for sites in the past within URLs, even for smaller sites.

Is it just as good to use a URL such as:

“http://www .mycar.com-ford-fiesta-cooling/”

As it is to use:

“http://www .mycar.com/ford/fiesta/cooling/”

The keywords that you use in both URLs shows what the page is about. Does using a hierarchical category structure help when it comes to SEO?

Using directories in a manner like this means that it can be easier to maintain a site by organizing topics into directories, so there’s a practical reason for their use.

As seen in the patent I’m referring to in this post, the use of directories gives search engines more clues as to how content on the site is organized and what topics it covers, and can help it quickly identify new categories and where they fit within a hierarchy.

Just as important, a directory structure used can give visitors to a site a better idea of how information is organized on a site, so it can help contribute to better user experience.

Another consideration is in the architecture of the site and using directories to make decisions about how to best link to pages internally on the site so that you can have higher-level pages receive more PageRank, and lower-level pages receive less PageRank.

That can be important if you want to use the higher-level pages to receive more PageRank for more competitive terms, and to use the lower-level pages (with less PageRank) to rank for less competitive terms.

But it’s not just about PageRank, and with search engines looking closer at knowledge bases and entities to determine how things might be ranked and organized in search results, it’s also about making it easier for a search engine to understand how different objects or people or places might be organized and connected to each other.
