---
title: "Innovating Product Reviews at Google"
source_url: "https://www.seobythesea.com/2006/06/innovating-product-reviews-at-google/"
slug: "innovating-product-reviews-at-google"
date_published: "2006-06-16T03:18:35+00:00"
date_modified: "2020-01-26T16:32:47+00:00"
author: "Bill Slawski"
---

Some sites on the web do reviews of products and services pretty well, such as amazon.com or rottentomatos.com.

Imagine Google wanting to provide product reviews. One of the mantras that we often hear coming from their Mountain View offices is that they wouldn’t get into a field unless they can do something innovative.

So, how might Google handle reviews? A new product reviews patent application from the company gives us some insight into what they might do. It includes reviews of things such as:

- consumer products,
- business products,
- movies,
- books,
- restaurants,
- hotels, and;
- travel packages.

**Why bother with this product reviews patent application?**

If you have an ecommerce site that offers reviews of products or services, or a web site that aggregrates reviews, having the right kind of information on your pages, presented in the right way might make it easier for the products you offer and your reviews to appear in a service like the one described here by Google.

Remembering that this is just a patent application, and may not be something that Google ever develops, it could still give you a lot of insight into what a company aimed at “organizing the world’s information” might be looking for on pages of a site that it crawls. Many of the ideas fleshed out in this patent application are things that other companies performing similar functions may emulate.

Knowing how a search engine might try to find information on your site is a step above trying to figure out the many ranking factors that may cause your site to rank higher in search engines for specific terms and phrases in organic search. It’s a way of being responsive to search engines, and making it as easy as possible for them to use your information on your pages in a positive way.

And some of the ideas presented in this patent application may also benefit the users of your site, and make it easier for them to find information that is helpful to them.

**Why Google May See a Need for Product Reviews**

Here’s a summary of what Google tells us what is wrong with review sites, and with the use of search engines to find reviews.

People like to do research on purchases on the web before buying something, and search engines tend to be a preferred place to do those searches. People will often perform a search with the name of the product or service, plus terms like “review.”

That doesn’t always yield the best results.

They can also go to other sites that focus on providing reviews and ratings for products or services – some which sell those, and others which just aggregate reviews from several sites – usually manually. These can be limited and difficult to navigate through.

So, the purpose behind this product Reviews patent application is to merge the best of both – make it easier to navigate and search through information collected from some of the best review sites, aggregated together.

**The Product Reviews Patent Application**

[Method and system for finding and aggregating reviews for a product](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060129446%22.PGNR.&OS=DN/20060129446&RS=DN/20060129446)
Invented by Jan Matthias Ruhl and Mayur D. Datar
US Patent Application 20060129446
Published June 15, 2006
Filed: December 14, 2004

Abstract


> The embodiments disclosed herein include new, more efficient ways to collect product reviews from the Internet, aggregate reviews for the same product, and provide an aggregated review to end users in a searchable format. One aspect of the invention is a graphical user interface on a computer that includes a plurality of portions of reviews for a product and a search input area for entering search terms to search for reviews of the product that contain the search terms.

**Parts of the system (skip this part if it is too technical)**

This part is technical, but it may be helpful to understand how this system may work.

*Overview*

These are the three main parts of the system described in the patent application.

An aggregated reviews backend server, which:

1. Collects product reviews from multiple sites,
2. Identifies products associated with product reviews,
3. Generates aggregated review information for products, and;
4. Stores the reviews and aggregated review information.

If you have a backend server, you also need an aggregated reviews frontend server, which:

1. Provides an aggregated review for a product and/or
2. Allows searching within reviews for a particular product.

To show off results, you also want a graphic user interface, which displays:

- Portions of a number of reviews for a product, and;
- A search input area for enable searching for reviews of products containing the search terms.

*Review extraction*

To get at information on pages on the web as a search engine, you may need something like a review extraction module for extracting product reviews from the information collected by crawling module, which include a review parser to extract related content such as:

- Review text, author, date, and;
- Product identification content such as product name, model number, and/or other product identifiers,

*Review aggregation*

Another part of the system would be a review aggregating module, to identify which products are associated with which reviews and generates aggregated review information for those products.

An aggregated review buffer would store aggregated review information for a product, such as:

1. The total number of reviews for the product,
2. An average rating for the product,
3. A distribution of ratings, and/or
4. Frequently appearing phrases in the extracted product reviews associated with the product;

Note: One or more additional types of aggregated review information may be stored in the aggregated review buffer.

*Review Database and Indexer*

Also needed is a review database to store individual reviews and aggregated reviews, and a review indexer to index reviews stored in the review database.

The reviews index maps words and phrases to reviews, and possibly other values to the reviews, such as:

- ClusterIDs (i.e.,product identifiers) or
- Review author names.

*Front End Server*

The frontend server contains the following:

- An operating system,
- A communication module,
- A product database for storing product-related information, which includes:- product and vendor information such as:- product names,
   - models,
   - categories, and;
   - purchasing information,
- a product-to-review map associating products with their corresponding ClusterIDs (i.e., product identifiers). The ClusterIDs are mapped by the reviews index to individual reviews and aggregated reviews,
- A reviews index

A review search module that answers search requests includes:

- a “search all reviews” application,
- a “search within reviews for a product” application, to search within the reviews of a particular product,

The presentation module for formatting aggregated reviews and search results for display includes:

- A reviews formatter to format individual reviews and aggregated review information for display, and:
- A reviews sorter for sorting the reviews for a particular product in any of the following ways:- by date,
  - Review source (e.g., by website),
  - Review quality, or
  - Review relevance to one or more search terms.

**Collecting Product Reviews**

The product reviews patent application gives us some ideas about how this process may go about gathering information.

1. It may selectively crawl certain sites, and follow certain links instead of the whole web.

2. It may start at seed URLs, rather than just anywhere on the web.

3. The link parser may use regular expression patterns to select URLs to follow on a site, or text classification techniques.

Example:


> Table 1 contains pseudo code for a link parser 224 that selects which links to follow on an exemplary website (www.productcompany.com) for reviews of electronics products. TABLE-US-00001 TABLE 1 Exemplary Pseudo Code for Crawling Module with Link Parser Initialize crawler queue with seed page(s) from the www.productcompany.com website; For each URL in the queue, do the following { download page from URL, and remove the URL from the queue; extract product reviews, if any, on the page, and parse and store the extracted product reviews; search page to see if any portion of the page matches any predefined pattern in a set of predefined patterns (contentpattern1, contentpattern2, …); if the page does not match any of the one or more predefined patterns { processing of the page is complete;} // otherwise, continue processing the page collect all links on the page; process each link as follows { if the URL of the link matches any predefined pattern in a set of predefined patterns (linkpattern1, linkpattern2, …) OR if the anchor text of the link matches any predefined pattern in a set of predefined patterns (anchorpattern1, anchorpattern2, …), do the following: { optional: remove unneeded fields from the URL of the link; put the URL of the link on the crawler queue;} } // Links that do not match any of the predefined pattern(s) are not put on the queue // The patterns used in the processing of the crawled pages may be specific to the // website from which product review information is being extracted.

Not all URLs would be followed on a site, but instead only ones that might reasonably lead to reviews of products and services. Patterns of terms within URLs or patterns within the structure of URLs, and/or anchor text would help the crawler find those pages.

4. Sources of reviews could include web pages and forum postings, and especially sites specifically geared towards reviews.

5. Product Reviews might also be received in a predetermined digital format, such as data streams from product reviewers.

6. The backend server would extract review information from pages crawled or information received, and store it in a buffer where it is separated out into different fields such as the review text, author, date, product name, model number, or other features, review author, content, publisher, and so on.

7. Additional fields might also include rating fields, and may tell us other information.

Example:


> In Table 2, the keyword “required” indicates a required field, “repeated” indicates a field that may occur more than once in a record (and in rare cases, may have zero occurrences), and “optional” indicates an optional field. Optional fields may be present in some review records, while not present in other review records, for example because some reviews may not include the optional information. TABLE-US-00002 TABLE 2 Exemplary Fields for Individual Review Records in Individual Reviews Buffer and Reviews Database required int64 ReviewID // unique identifier for each review repeated string ProductNames // one or more product names associated with the review required int32 ReviewType // exemplary values: editorial=1, user=2 required string Rating // product rating given by the reviewer optional string Author // author of the review optional string Title // title of the review optional string Summary // review summary optional string Content // review content, which is the main body of the review optional string Date // Review date required int32 CrawlDate // crawl date required string URL // URL at which review was found. // Alternately, this may be the base URL for product // reviews at the website at which this review was found required string Publisher // publisher of the review (e.g., CNET, epinions.com) // Additional Optional Fields that may be included in some embodiments: optional int64 ClusterID // ClusterID of the product optional float QualityScore // Quality Score of the review optional int32 Year // Model year, or other year associated with the product // (e.g., year of first publication of a book or a movie)

**Clustering Product Reviews**

When the search engine presents reviews to searchers, the reviews for the same product would be clustered together.

This grouping together of like products and services could be done by looking at things like product brand name, model number, product category, ISBN number – though collecting some of this information may sometimes be difficult.

Example:


> Different web sites often use different names for the same product, which makes it difficult to automatically determine whether two reviews actually refer to the same product. For example, different web sites refer to the same Canon scanner as: 6 Canon CanoScan 7890a002 Flatbed 7890a002 6 Canon CanoScan LiDE 30 7 Canon CanoScan LiDE 30 Scanner 7 Canon CanoScan LiDE 30 Color Scanner 7 Canon Lide 30 (7890A002)

Sometimes information such as model, category and brand name are not explicitly identified on a web page. (If you have a product review site, you might want to check if you are doing this or not.)

When that happens, the search engine might try to deduce that information from things like the title of the page, or other fields of the extracted review.

**Generating Aggregate Information**

The information from a number of sites for specific products or services is joined together to present to searchers.

It could include things like:

- Total number of reviews for the product,
- an average rating for the product,
- a distribution of the ratings for the product, and/or
- Frequently appearing phrases in the extracted product reviews associated with the product.

There could be a number of ways to present ratings, including average ratings across a number of sites, or even personalized preferences when it comes to ratings, such as specifying seeing ratings from a particular site, for example consumerreports.org, or from a specific reviewer like Roger Ebert. The reviews from specified review sites or reviewers could also figure more heavily into a ranking shown as the “average rating.”

Words used in reviews, frequency of their use, and their locations in the reviews may also play a role in determining which reviews may be considered more important in rating a product. For instance, if the product or service name appears in the title of the review, that review may be given more weight in the ranking shown.

**Searching**

The review search may support two different types of queries:

(1) Searching within the reviews belonging to a single product, such as a search for “customer service” in the reviews for a given product, and
(2) Search all reviews to find a particular product, such as a search for “good digital camera”.

The graphical user interface shown to searchers could include:

- An aggregate rating for the product,
- A list of suggested search terms,
- A list of sources for the reviews that link back to the source Web sites or to the corresponding reviews,
- At least one user selectable link for sorting the portions of reviews by date or relevance to the search input, and/or for grouping the portions of reviews by source, and/or;
- A histogram of reviews for the product.

Clicking on a region in the histogram could automatically generates portions of at least some of the reviews corresponding to the histogram region.

Example:

Clicking on a certain region may generate a new display showing portions of reviews having high ratings for the product.

After a search within reviews for a product, the aggregated rating and number of reviews could be changed to reflect the average rating and number of reviews matching the search. This change can help answer questions like, “How do reviewers that discuss `customer service` rate this product?”

Suggested search terms may be taken from commonly used phrases appearing in reviews for products displayed. (This could be important to keep in mind. Do people who search for the types of products you offer also commonly look for support information about that product? If so, do you use the phrase “customer support” on your product review page?)

The product reivews patent application tells us that:


> Showing these phrases gives the user a good idea which aspects of the product are most frequently discussed in the product reviews, and thus which aspects of the product might be important to know about.

User selectable links may also permit the displayed list of reviews to be sorted in a number of ways, such as by:

- Relevance
- Editorial reviews might be listed before user reviews.
- Length and information content
- An “information retrieval” score,
- Date, with the newest reviews coming first (Where the date is unknown, those may be listed at the end.)
- Review Source (site where the review comes from),
- Ungrouped (e.g., not grouped by review source).
- Location (e.g., for reviews of restaurants, local businesses, movies or other products near a particular location, such as by address, city, region, or mailing or zip code).

Kind of review information that might be displayed in search results:

- Review title,
- A portion of the review (e.g., a snippet),
- The source of the review,
- The date of the review,
- The type of review (e.g., whether it is an editorial or user contributed review), and;
- The name of the reviewer.

Snippets shown might be like those shown in organic search results, or may be the beginning part of a review, or a summary or the most important part of a review.

**Conclusion**

If you have a site that offers product reviews, there may be a number of questions that you may have after reading this product reviews patent application. Some of the ones that I have are:

1. How does a site become a seed site or starting point for a crawl of this review collection information? Or become linked together with one of these seed sites or starting points?

2. What is the best way to structure URLs, or write anchor text, to make it easy for a search engine to find review pages on a site?

3. What information should be included on a review page? Likely that this will change depending upon the type of product or service being reviewed. The example about someone searching for “customer service” while looking at products should generate some other ideas. Would shipping be a concern for someone looking for information about bulky objects? Names of actors and actresses appearing in movies for movie reviews?

4. Should reviews on your pages have scaled ratings, and if so, what is the best way to present those so that a search engine can understand them?

5. What is the difference between an “editorial review” and a “user review?” Assuming an editorial review is one generated by the owner of a site, how does a search engine know the difference between the two? Is it a good idea to include both editorial reviews and user reviews on the same page?

6. How important is it to include a date on a review? Undated reviews might go to the bottom of the list, but people might also want to see the newest reviews. Given that, how important is it to update reviews, and show updates? Would a review of a movie dated in 2001 be better suited for a movie that came out in 2001, than a review of the same movie dated 2005?

7. Are pages devoted to individual reviews of specific products or services better than pages which review a line of products or services? They might be if the product or service name is included in the title of the page.

8. What product information should be included in a review? Do you have brand name, model name, part number, and commonly used categories indicated on the reviews?

There are a number of other questions, and some answers to them, that could be taken from the patent application. Even if Google never comes out with this type of product and service review, paying attention to the types of things that they seem to find important about review pages may help you make more usable and informative pages, where important information is easy to find by real visitors, and by search engine spiders.

Paying attention to some of the details laid out in this document may also help your pages perform a little better for more searches on Google and other search engines.
