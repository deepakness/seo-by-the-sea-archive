---
title: "Preferred Country Results at Google"
source_url: "https://www.seobythesea.com/2008/11/changing-google-rankings-in-different-countries-for-different-searchers/"
slug: "changing-google-rankings-in-different-countries-for-different-searchers"
date_published: "2008-11-13T10:22:17+00:00"
date_modified: "2020-07-06T14:28:13+00:00"
author: "Bill Slawski"
---

While you can search at google.com just about anywhere in the world, you can also access Google at many different country-specific addresses, such as google.co.uk, www.google.fr, www.google.co.in. And when you do, you may see country-specific results.

Chances are if you search at one of the country-specific Google address, the results you see may be biased towards pages associated with that country. But, when you search at Google.com, the search engine may also try to send you country-specific results that might be appropriate for the country you are located within, or a country that you prefer to see results from.

In an Official Google Blog post from July of this year, [Technologies behind Google ranking](https://googleblog.blogspot.com/2008/07/technologies-behind-google-ranking.html), we were told that “The same query typed in multiple countries may deserve completely different results.”

So, for example, a search for the query [football] should provide different results in the US, the UK, and Australia, because the term in each place refers to completely different sports.

A patent granted to Google this week describes some ways that the search engine might try to associate web pages with country locations and searchers with preferred country results.

A preferred country might include the country of the searcher as well as other countries that searcher might find acceptable, such as showing search results from the United States to people located in Canada.

The preferred country results patent was originally filed in 2003, and it is possible that if the method described in this patent has been used by Google, that it may have evolved, or have been replaced by newer techniques.

[System and method for providing preferred country biasing of search results](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=7,451,130.PN.&OS=pn/7,451,130&RS=PN/7,451,130)
Invented by Vineet Gupta, Ben Gomes, John Lamping, Mizuki McGrath, Amit Singhal, and Simon Tong
Assigned to Google
US Patent 7,451,130
Granted November 11, 2008
Filed June 27, 2003

Abstract


> A system and method for providing preferred country ordering of search results are described. A search query describing potentially retrievable information provided in a plurality of search result countries is received. A search is executed by evaluating the search query against information characteristics maintained in a searchable data repository.
>
> At least one preferred country applicable to search results generated is dynamically determined responsive to the executed search. At least some of the search results are ordered in consideration of the at least one preferred country.

**How Google May Associate Countries with Preferred Country Results**

In one part of the patent, we’re told how Google might determine which countries are associated with each search result by looking at:

1. A country top-level domain (TLD) for the domain a page is on – it could be assumed that the page is associated with that country. The example the patent gives is of the URL www.whsmith.co.uk, which is assumed to be either located in or associated with the United Kingdom.
2. The address of the domain registrar for the site might be examined to infer the country of business.
3. The country where the IP address might be located for the Web server from which the search result was obtained, from the page, or other pages on the same site.
4. Information from anchor text of the links pointing to the page and text near those links, and the countries linking to the page are located.
5. Information from anchor text of links pointing from the page and text near those links, and the countries where those links are pointed towards are located.
6. A combination of the above methods.
7. Other techniques that might be helpful.

**How Country Specific Results are Biased Towards Preferred Countries for Search Queries**

This process includes a “country biaser” which determines one or more preferred country results for each search query – so someone located in Canada might have Canada and the United States as preferred countries, and Australia might be considered a neutral or less preferred country.

Pages listed in search results could be promoted or demoted based upon their standing as a preferred country for a searcher, or based upon a numerical score assigned to each search result.

Toolbar data could be one way to determine a country bias for a searcher, with a view of a log file associated with that toolbar which counts the countries of the web sites which a searcher might visit. The toolbar might identify sites that have a worldwide appeal, and not consider those sites assigned to a particular country.

Other information could also be used to determine a searcher’s preferred country results, such as the location of the searcher based upon their IP address.

**Conclusion**

The patent does go into a lot of detail on a few different ways that search results might be reranked based on a searcher’s preferred country, and on the country associated with each search result, and those details are worth looking through the patent more carefully for if you’re interested in finding out more about how that could happen.

The patent doesn’t provide a lot of other details on how it might determine what the preferred country of a searcher might be, though it was interesting to see it mention the use of log files from the Google toolbar to be one possible source of information for making that decision. The information that Google collects for personalized search results probably is useful, also.

The patent does mention that some sites might be considered to have a “worldwide appeal” and not be considered to be assigned to a particular country, but it doesn’t tell us how a site might reach that status.
