---
title: "Does the Ownership of Redirected URLs Matter to Search Engines?"
source_url: "https://www.seobythesea.com/2009/09/does-the-ownership-of-redirected-urls-matter-to-search-engines/"
slug: "does-the-ownership-of-redirected-urls-matter-to-search-engines"
date_published: "2009-09-10T20:38:32+00:00"
date_modified: "2009-09-18T12:42:41+00:00"
author: "Bill Slawski"
---

Webmasters sometimes move web sites from one domain to another, change the URL structures pointing to their web pages, or rename those pages themselves.

Changing the URLs for pages isn’t something that should be done without a lot of thought, and without very good reasons. Especially if there are many links and references on the Web to the old URLs. See [Cool URIs don’t change](http://www.w3.org/Provider/Style/URI) for a number of technical ideas on planning what to use for your URLs so that it’s less likely that you might need to change them.

Regardless, webmasters do sometimes change the URLs for pages found on the Web.

This can sometimes happen when the owner of a site decides to change its name, or to rebrand its products, or merges or acquires another site or business and wants to consolidate the web pages from the other site under one name. It can also happen when a blogger decides to change the permalink structure of their URLs. Sometimes product lines are renamed, and the sellers of those products want people looking for them to find the products under the new names. There are many other reasons why the URLs to pages change.

To make it easy for visitors, including search engines, to find those sites and pages at their new addresses on the Web, webmasters will set up redirects so that visitors to the original URLs, including search engines, arrive at the new URLs. Search engines may find a redirect for a URL, and have to decide which page to show information about in search results.

The kind of redirect that is often used for this kind of address change is a permanent, or 301 redirect, but it’s not the only type of redirect. If you are planning on using a redirect to let visitors and search engines know about the change of address of a page, or of the pages of a site, it’s important to know why and how different types of redirects are used. Regardless of the type of redirect being used, there are other issues that search engines might consider when they come across a redirect.

Sometimes redirects happen for less than legitimate reasons.

A newly published patent application from Yahoo explores how it might examine redirects, and attempt to understand if the owers of the original URL are the owners of the URL being targeted by the redirect.

An example from the patent filing describes one of the concerns that Yahoo has about redirects:


> Redirecting URLs (uniform resource locators) is a very common phenomenon on the web. In dealing with redirects, a search engine, such as Yahoo!.RTM., has to come up with well-specified policies on which URL to index the content under. The search engine must also decide the appropriate URL to display as part of the search results. The problem is nontrivial, as can be seen from the following two examples: http://www.rational.com (source URL) redirects to http://www-306.ibm.com/software/rational/ (target URL) as of Oct. 23, 2007, because IBM bought Rational Software; and spam websites like http://www.somespam.com (source URL) redirect to http://www.yahoo.com (target URL) as of Oct. 23, 2007.
>
> In the first example of redirection, the search engine would like to index the anchor text under both the source URL and target URL. The search engine may also like to display the source URL in search results because the source URL is a root page and may, therefore, improve user experience.
>
> On the other hand, in the second example, the search engine would not like to associate the anchor text from the source (somespam.com) with the target (yahoo.com). In case of a content match, the search engine would not care to show the source URL, but would rather show the target URL.

Here’s the patent application:

[Method and Apparatus for Identifying if Two Websites are Co-Owned](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090228438.PGNR.&OS=dn/20090228438&RS=DN/20090228438)
Invented by Anirban Dasgupta, Rajat Ahuja, Shanmugasundaram Ravikumar, and Su Han Chan
US Patent Application 20090228438
Published September 10, 2009
Filed March 7, 2008

Abstract


> A method and apparatus are provided for identifying if two websites are co-owned. In one example, the method includes obtaining redirect URL (uniform resource locator) pairs from the Internet, constructing a training set using the redirect URL pairs, constructing a feature set based on the training set, and learning co-ownership decisions based on the feature set and the training set.

**Determining Ownership of Redirects**

The easiest methods of trying to understand if an original URL, and a URL that it might be redirected to are owned by the same person or organization would be to compare the registration information about the sites that they appear upon using whois, or by having a person visit both sites and compare them. However, there are so many pages on the Web, and possible redirects, that an ideal approach is to try to find a way to automate the process.

A web crawler browses the web for redirect pairs of URLs. When it finds them, it sends information about those pairs to a training set. The training set is used to create a set of rules to try to decide of the original source URL and the URL that is targeted through the redirect are owned by the same person or organization.

The search engine could look at whois information to try to determine if the source and targeted URLs are co-owned, or have a person manually attempt to decide if the pages are owned jointly.

This training set could then be used to explore other pairs of redirected URLs, in an automated process to decide whether redirected URLs share a common ownership. The algorithm used would take what it can learn from the training set to build a “feature set” about the ownership of pages at different URLs that redirect from one page to another. The patent applications tells us that:


> A feature set is a is essentially a set of rules for training the system to get to the ideal of human editorials discussed above with reference to FIG. 1. Referring again to FIG. 1, after the training set constructor device constructs the training set, the system learns co-ownership decisions by using features derived from the web-graphs and from the inlinks to the URLs of the training set. The feature set constructor device receives the training set and constructs a feature set of co-ownership decisions.

The patent includes a number of examples of features that it might examine to decide whether redirected URLs are shared by the same owner:

***URL overlap of the redirect URL pairs*** – The characters (letters and possibly numbers) within the source and target URLs are tokenized and compared to a dictionary of tokens, which might be organized by finding the most commonly occuring words in those tokens.

For example, the URL “http://www.example.com/blog/” is found, and seen to be redirecting to “http://blog.example-site.com/”

An analysis would break each of the letters/characters in the URL into tokens, such as:

e, ex, exa, exam, examp, exampl, example, xa, xam, xamp, xampl, xample, am, amp, ampl, ample, m, mp, mpl, mple, p, ple, l, le, e
b, bl, blo, blog, l, lo, log, o, og, g
*and so on…*

The analysis might see that both URLs contain “blog,” and “example” and determine that there is a fair amount of overlap (a statistically significant amount) between the original (or source) URL, and the URL that is the target of the redirect.

***DNS (domain name server) overlap*** – The ip-addresses of the two domain name servers used by the two websites are reviewed.

***URL-anchor text overlap*** – The link text, or anchor text, used by inlinks pointed to the domains are viewed and compared to words found within the URLs. Since search engines collect information about links to pages such as the URLs and the anchor text used by those links, this information is often readily available to search engines. For example, the anchor text “SEO by the Sea” might be used in a link to “https://www.seobythesea.com.” Using the kind of tokenized analysis and comparison described above would find that there is a statistically significant overlap between that anchor text and the URL.

Because redirects are sometimes used to spam search engines, a method like this is included to try to uncover spam. If anchor text pointed to the orginal URL matches well with the contents of the URL, but anchor text of the URL being redirected doesn’t match well with the anchor text, then there may be a problem. For example, anchor text in a link might be the word “yahoo webmaster guidelines” and the original URL might be “http://www.yahoo.com/webmaster-guidelines” but the redirected URL might be “http://www.example.com/prescription-drugs/”

The patent application tells us:


> Spamminess of anchor text is an important consideration with the present invention. The system of the present invention utilizes machine learning to predict the co-ownership of two websites. Because the methods carried out by the system will be public information, the system is wide-open to be manipulated by spammers. Spammers could fairly easily designate several URLs to point to a spam webpage and have these several URLs falsely describe the spam webpage as being a non-spam webpage, such as the Yahoo!.RTM. home page.
>
> The spammer could thereby easily setup an instance of cloaking spam. Cloaking is getting a search engine to record content for a URL that is different than what a searcher will ultimately see, often done intentionally by spammers. To counter this problem, the system employs trust information about the anchor text that the system may use for cloaking spam that creates a false match. The system may employ, for example, the same kind of definitions that a search engine uses in a typical web search.

***Spamness/goodness measures*** – Any type of measure of how spammy or how trustworthy each of the two web sites from the source and target URLs may be viewed. If the source site is a spam web site and the target site is not a spam web site, then the URL redirect pair is more likely not to be co-owned. There are a number of ways that a search engine might use to try to decide whether a page is spam or not, from looking at the link structure associated with pages to a review of the content of those pages as well as a combination of both. The patent application doesn’t provide details of any specific method that might be used.

***The title in the webpage of the target URL*** – The title of the page at the target URL might be compared to the title of the page at the source URL. If the titles match, then there may be a presumption that the URLs are co-owned.

**Conclusion**

When a webmaster uses a redirect to send visitors (and search engines) to a new address for a site, a search engine might look at more than just the existence of that redirect to decide whether it might pass along visitors to the new address in its search index.

The search engine may follow a policy that explores such things as whether the source URL and the target URL of the redirect are owned by the same owner.

This decision on co-ownership of the source and target URLs may also determine whether or not a search engine will associate the anchor text used for the first URL with the URL that it is being redirected to. If the URLs are determined to be co-owned, the search engine might associate the anchor text of the first URL with the second one.

The patent filing doesn’t involve a discussion about whether or not link popularity (such as PageRank) might or might not be passed along to a new URL through a redirect based upon a determination of co-ownership, it’s an idea worth thinking about…
