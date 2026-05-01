---
title: "Semantic Relations from Query Logs"
source_url: "https://www.seobythesea.com/2009/06/query-logs-and-the-slang-of-the-web/"
slug: "query-logs-and-the-slang-of-the-web"
date_published: "2009-06-29T06:33:26+00:00"
date_modified: "2021-07-06T13:53:14+00:00"
author: "Bill Slawski"
---

> One way to help in that process of organizing the Web is to use what people do on the Web.
>
> – Ricardo Baeza-Yates, from a presentation on [Extracting Semantic Relations from Query Logs](http://videolectures.net/kdd07_baeza_yates_esr/)

How might different search queries be when they share several pages in search results, and searchers tend to click upon those shared results more than other results?

If you go to Yahoo’s search and perform a search for the term [wcca], the first result that you see in the search results is a page titled “Wisconsin Circuit Court Access.” If you search for [wisconsin circuit court], you’ll see the same page at the top of the search results. If many people searching for each of those terms tend to mostly click on the link for that page and no other pages, Yahoo might start considering those query terms to be very closely related.

Because of such semantic relations, the search engine might start offering searchers a query suggestion for a related term at the top of the search results for an original query.

A recent Yahoo patent application explores these types of semantic relations and tells us that it might learn a great deal from comparing which search results searchers click upon. It describes three semantic relations for query terms, based upon click data found in its query logs, where it keeps track of which results searchers choose for specific queries.

*Synonyms (close relationship)* – Query terms that share a substantially equivalent set of clicked search results.

*Lesser but included (inclusive relationship)* – Where the set of clicked results for one query term is smaller in size than another, and those clicked URLs are substantially included in the clicked URLs for the second query.

*Related (lesser relationship)* – Where the clicked search results between two queries overlap, but not quite to the same level as the two relationships above – synonyms and lesser but included.

In my example above, if people searching for [wcca] and [Wisconsin circuit court] mostly click upon that first search result for “Wisconsin Circuit Court Access,” the search engine might consider those query terms to be synonyms.

The choices of which pages searchers click upon are viewed as implicit user feedback – searchers aren’t explicitly stating that these queries are related somehow. Still, when they choose shared pages in search results for those queries, it’s assumed that the terms are related.

What would a search engine do with this information?

It might offer query suggestions at the top of search results for a related query or reformulate or expand search results to include results that are also relevant for the other query term. The search engine might also use these relationships to match queries with advertisements and in other possible ways. We’re told about this process, that:


> Embodiments can detect the slang of the Web (e.g., a taxonomy used by users to perform searches on the Web).

The semantic relations patent application is:

[Extracting Semantic Relations from Query Logs](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090164895.PGNR.&OS=dn/20090164895&RS=DN/20090164895)
Invented by Ricardo Baeza-Yates and Alessandro Tiberi
Assigned to Yahoo
US Patent Application 20090164895
Published June 25, 2009
Filed: December 19, 2007

There is a white paper on this topic from the listed inventors on the patent filing available to subscribers of the ACM portal at Extracting semantic relations from query logs. If you’re not a subscriber, there is a [video presentation](http://videolectures.net/kdd07_baeza_yates_esr/) on it from Ricardo Baeza-Yates, which I also linked to at the start of this post.

There are three yahoo research papers co-authored by Ricardo Baeza-Yates which cite that paper and are worth looking at if you’re interested in how search engines might use query logs:

- Search, Web 2.0, and the Semantic Web The importance of search (pdf)
- Clique analysis of query log graphs (pdf)
- The anatomy of a large query graph (pdf)

I’ve written a few posts about synonyms in search. Here are some of those:

- 2/19/2006 – [Multi-Stage Query Processing at Google](https://www.seobythesea.com/2006/02/google-looks-at-multi-stage-query-processing/)
- 5/25/2007 – [Refining Queries Using a Local Category Synonym](https://www.seobythesea.com/2007/05/refining-queries-using-category-synonyms-for-local-and-other-searches/)
- 12/29/2008 – [How a Search Engine Might Use Synonyms to Rewrite Search Queries](https://www.seobythesea.com/2008/12/how-a-search-engine-might-find-synonyms-to-use-to-expand-search-queries/)
- 1/23/2009 – [Google to Expand Language Search and Shrink Our World?](https://www.seobythesea.com/2009/01/search-engines-to-expand-language-search-and-shrink-our-world/)
- 6/29/2009 – [Semantic Relations from Query Logs](https://www.seobythesea.com/2009/06/query-logs-and-the-slang-of-the-web/)
- 12/22/2009 – [Google Search Synonyms Are Found in Queries](https://www.seobythesea.com/2009/12/how-google-may-expand-searches-using-synonyms-for-words-in-queries/)
- 1/19/2010 – [Google Synonyms Update](https://www.seobythesea.com/2010/01/google-synonyms-update/)
- 1/27/2010 – [Paid Search Results and Query Expansion using Synonyms and Related Concepts](https://www.seobythesea.com/2010/01/paid-search-results-and-query-exansion-using-synonyms-and-related-concepts/)
- 2/16/2011 – [More Ways Search Engine Synonyms Might be Used to Rewrite Queries](https://www.seobythesea.com/2011/02/more-ways-a-search-engine-might-identify-synonyms-to-expand-queries-with/)
- 8/12/2013 – [How Google May Substitute Query Terms with Co-Occurrence](https://www.seobythesea.com/2013/08/google-substitute-query-terms-co-occurrence/)
- 9/27/2013 – [The Google Hummingbird Patent?](https://www.seobythesea.com/2013/09/google-hummingbird-patent/)
- 12/8/2013 – [How Google May Rewrite Queries](https://www.seobythesea.com/2013/12/rewrite-search-terms/)
- 9/9/2013 – [How Google May Reform Queries Based on Co-Occurrence in Query Sessions](https://www.seobythesea.com/2013/09/google-reform-queries-based-co-occurrence-query-sessions/)
- 10/15/2013 – [Google’s Hummingbird Algorithm Ten Years Ago](https://www.seobythesea.com/2013/10/googles-hummingbird-algorithm-ten-years-ago/)
- 12/21/2015 = [How Google Might Make Better Synonym Substitutions Using Knowledge Base Categories](https://www.seobythesea.com/2015/12/how-google-might-make-better-synonym-substitutions-using-knowledge-base-categories/)

Last Updated July 4, 2019.
