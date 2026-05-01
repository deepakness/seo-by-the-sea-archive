---
title: "How Google Might Top Search Results with Additional Information"
source_url: "https://www.seobythesea.com/2009/04/how-google-might-top-search-results-with-additional-information/"
slug: "how-google-might-top-search-results-with-additional-information"
date_published: "2009-04-17T11:37:20+00:00"
date_modified: "2021-07-06T14:25:01+00:00"
author: "Bill Slawski"
---

How would you feel about Google showing information above search results (taken from one of those results) in response to a query to give searchers a sense of the information provided in the results on that page?

For example, imagine performing a search at Google for the word “burns” and getting back a set of search results with a paragraph or two above the results that provide information on how to treat burns, take a page in the search results. Sound like a good idea?

**Choosing What Information to Display**

How would Google decide to display information about burn treatment instead of the medical condition itself, or information about someone with the name Burns (such as the comedian George Burns)?

Many of the queries that people perform searches with are ambiguous and might trigger pages covering a wide range of topics. A search for “java” could bring back search results about a programming language, an island, or a type of coffee. A search for “jaguar” could result in listings of pages about cars or about animals.

If Google looked at a classification associated with the query itself to decide what kind of information to display, it might have trouble making a decision. If it classified information related to search results for a query and used those classifications to decide what information to show, the search engine might get a better sense of what may be appropriate to display at the top of search results.

Before the search engine decided what kind of information to display above the search results, it might classify a certain number of the top search results to see which classifications most frequently appear. It might do that by looking at different parts of those results, such as their URLs, titles, snippets associated with them, and labels that may have been attached to those pages.

A newly published patent application from Google explores the use of this classification information to decide the topic for information that might be shown at the top of results for a specific query:

[Methods and Systems for Classifying Search Results to Determine Page Elements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090100036.PGNR.&OS=dn/20090100036&RS=DN/20090100036)
Invented by Tania Bedrax-Weiss, Ramanathan Guha, Patrick Riley, and Corin Anderson
Assigned to Google Inc.
US Patent Application 20090100036
Published April 16, 2009
Filed: October 11, 2007

Abstract


> This invention relates to determining page elements to display in response to a search. A method embodiment of this invention determines a page element based on a search result. The method includes:
>
> (1) determining a set of result classifications based on the search result, wherein each result classification includes a result category and a result score; and
>
> (2) determining the page element based on the set of result classifications.
>
> In this way, classification is determined based on a search result, and page elements are generated based on the classification. Using the search result, as opposed to just the query, page elements are generated that correspond to a predominant interpretation of the user’s query within the search results. As a result, the page elements may, in most cases, accurately reflect the user’s intent.

**Why Provide Extra Information at the top of a search result?**

The following line from the abstract also shows up in the description of the patent application many times. It presents one of the major assumptions behind the method presented in the patent application:


> In this way, classification is determined based on a search result, and a page element is generated based on the classification. Using the search result, as opposed to just the query, page elements are generated that correspond to the predominant interpretation of the user’s query within the search results. As a result, the page elements may, in most cases, accurately correspond to the user’s intent.

If you’re looking for information about George Burns, and you type in “burns” as a query, the first thing you might see is a paragraph about treating burns. That would probably be a good indication that most of the search results you would see in response to your query are related to a medical condition and the treatment of that condition. If the intent behind your search was medical treatment, the paragraph might answer your question, and it might provide you with some confidence that a number of the search results may also be helpful. If you’re looking for George Burns, that paragraph might be a good sign that you would be better off making your query more specific.

**Classifications based upon Different Elements of Documents in Search Results**

The patent application provides some information about how it might look at different elements such as page titles and snippets, and URLs and classify those to learn about the topics covered in search results. Still, it doesn’t go into much depth on how it might analyze those elements.

A whitepaper co-written by Google Researcher Monika Henzinger for the WWW 2009 conference in Madrid titled “Purely URL-based Topic Classification” describes how classifications might be determined from the URLs of pages. Still, unfortunately, that paper doesn’t seem available this morning. The URL for the paper was: http://www.sheridanprinting.com/09-www-cd35mxg/docs/p1109.pdf.

Part of the abstract from that paper provides many reasons why a search engine might want to try to understand the topic of a page while only looking at its URL:


> Usually, web pages are classified using their content, but a URL-only classifier is preferable,
>
> (i) when speed is crucial,
>  (ii) to enable content filtering before an (objectionable) web page is downloaded,
>  (iii) when a page’s content is hidden in images,
>  (iv) to annotate hyperlinks in a personalized web browser without fetching the target page, and
>  (v) when a focused crawler wants to infer the topic of a target page before devoting bandwidth to download it.

Of course, attempting to classify results based upon the titles of pages could be helpful, especially if the page authors used titles that were descriptive of the content of those pages. Unfortunately, that doesn’t happen all of the time.

Taking classification information from a snippet might also be helpful since the search engine decides upon a snippet to show for a page that is relevant to the query used to find the page. Many pages that should show up in search results in responses to a query should be relevant in some way to that query, and a snippet might hold some useful information that can be used to classify search results.

The patent application also discusses the use of “labels” associated with pages that appear in search results but doesn’t tell us much about where these labels come from. Are they label that the search engine has developed that relate to the top queries or the top phrases that the search engine might believe pages are related to? Are they labels that people annotating a page through something like a SearchWiki have added? Are they labels taken from advertising keywords that people using Adwords might have chosen to lead viewers to the page? Do these labels come from somewhere else? We can’t tell with any certainty from the patent application.

The patent application also tells us that it might look at the labels used for the documents that appear in search results and determine which ones appear the most frequently to determine an overall classification based upon those labels.

What other information might be used to determine a classification for a set of search results?

We are also told that the search engine might give extra weight to classifications from the URLs and snippets and titles and labels that show up in higher-ranked search results.

**Deciding upon Page Elements to Use**

Information about classifications from different parts (URLs, titles, snippets, labels, histograms of labels) of search results would be used to decide upon the most likely classification to choose information to display the above search results. We’re told that this information would be used to determine an overall classification and would be used to decide upon information (a page element) that Google might show at the top of search results.

But, we aren’t shown much about the actual method that the search engine would use to decide upon a specific classification based upon those results classifications or how it would use that classification to determine what information to show at the top of search results. That may be the topic of another patent application that hasn’t been published yet.

**Conclusion**

Would you find it useful if Google started showing some information at the top of search results from one of the pages of the results, based upon a classification that the search engine determined to be the most relevant to the results that showed up for a query?

Would it show that information is helpful to searchers? Would it be helpful or harmful to site owners whose pages might show up in those search results?
