---
title: "Calculating Search Rankings with User Web Traffic Data"
source_url: "https://www.seobythesea.com/2007/05/calculating-search-rankings-with-user-web-traffic-data/"
slug: "calculating-search-rankings-with-user-web-traffic-data"
date_published: "2007-05-19T10:28:37+00:00"
date_modified: "2020-06-23T10:12:10+00:00"
author: "Bill Slawski"
---

Can Web traffic information help to improve the relevancy of search results?

Should a search engine learn about how to rank a page by watching searchers use other search engines?

Can information gathered from Internet Service Providers (ISPs) and Web proxies be used to construct a near real-time map of the Web that fold information about that traffic into a ranking system for those pages?

A new patent application from the Pisa-based research team at Ask.com explores these topics and a few more and suggests ways to improve the freshness, coverage, ranking and clustering of search results through looking at user Web traffic data.

**Why Look at Web Traffic Information?**

There are three basic tasks that a search engine will normally perform. It will:

1. *Crawl* the web to find important pages
2. *Store* important words (keywords) used in those pages, and where those words are found on a page.
3. *Rank* pages with some kind of ranking algorithm, based in part upon relevance to a searcher’s query, when presenting lists of search results.

Regardless of what exact ranking algorithm is being used, the patent application tells us that there may be some problems with this approach:

1. Older pages may be favored because there are usually more links pointing to an older page than links are pointing from the older page.
2. Highly ranked pages will tend to be linked to by more users, which will increase their ranking – the rich getting richer – while poorly ranked pages won’t attract as many links.
3. When someone travels to a page without the use of hyperlinks (such as by entering a URL directly into a web browser), that action isn’t part of how a search engine ranks pages.

**The Ask.com Patent Application**

[Sampling Internet user traffic to improve search results](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070112730.PGNR.&OS=dn/20070112730&RS=DN/20070112730)
Inventors: Antonino Gulli, Antonio Savona, Monica Mori
US Patent Application 20070112730
Published May 17, 2007
Filed: November 7, 2005

Abstract


> Methods, systems and apparatus for improving Internet search results include monitoring network activity on a communications network, generating a near real-time map of the network activity, and integrating the near real-time map with a search engine.

The goals involved in this process are aimed at improving the freshness, coverage, ranking and clustering of search results by:

1. Monitoring activity on the Web,
2. Generating a near real-time map of Web activity, and;
3. Integrating information from the near real-time map of Web activity with the rankings that a search engine creates.

**Building a Web Graph including User Activity Data**

Many ranking algorithms for Web pages involve looking at the Web as if it were a large graph, with pages or other kinds of documents that one could travel to called “nodes,” and the connections between those nodes (usually links from one page to another) as “edges.” Information about the nodes and the edges can be used to rank pages.

The near real-time map described in this document would also be a web graph based on the monitored web traffic. It could be a [directed graph](https://mathworld.wolfram.com/DirectedGraph.html) which includes Web nodes representing web pages and Web edges representing weighted links between the nodes.

The links may represent:

- Hyperlinks between pages, and/or;
- User navigation between the without hyperlinks.

The weight, or value, of a web edge, could depend on how frequently someone follows an edge from one page to another, and the rate of use of those edges – a temporal currency of its use, increasing with frequent and/or current use and decreasing with infrequent use and/or non-recent use.

Sometimes there aren’t hyperlinks between pages, but virtual edges could be created between those two unconnected nodes when many users navigate between the nodes.

Information to build this near real-time graph of Web activity can be collected from ISPs and [Web proxy servers](https://en.wikipedia.org/wiki/Proxy_server).

A search engine could use web traffic data obtained through an ISP traffic monitor to build and maintain a near real-time map of the network activity of a large number of users on the Web.

A web graph could include hundreds, thousands, or even many billions of web nodes and web edges, depending on the coverage of the web servers and/or ISPs in the communications network.


> Each web edge E.sub.i,j may be associated with a weight W.sub.i,j representing the importance and/or freshness of the web edge.

Examples:

Each time someone navigates from one web page to another, that traffic may be captured by a web traffic monitor and the weight of the web edge between those two nodes may be increased.

If an established web edge is not followed for a specified period, the weight of the web edge may be decreased.

So, this Web graph of user traffic activity can dynamically track connections between web pages as they evolve. It can create new Web edges between Web nodes as they are navigated and remove Web edges between Web nodes after disuse for a sufficient time.

New web nodes may also be added to the Web graph as they are created, or removed from the Web graph if they are not accessed.

**Integration Of User Traffic with a Search Engine**

A web crawler in search engine will crawl pages identified in the web graph and anchor each web edge with portions of text surrounding a hyperlink in the page linking to the other page at the other end of the web edge. So, when a query from a searcher invokes some portion of the anchor text, the search engine can rank the search result based on the weights of the web edges in the web graph that are anchored by keywords in the query.

**Removing Bias in Search Results**

When a web page is connected to one or more other web pages by Web edges, that page may be assigned a weight (importance) based on the weights of edges that the web page is connected to.

This can be applied to all of the web pages in the web graph. The weight of a web page may be computed from the weights of the edges that connect to the web page as well as the weights of the web pages that connect to the other ends of the edges.

Those computed weights of the pages may be used to generate a relevance score for ranking the web pages in the search engine.

The computed weight of a web page may be used to add a web page to the search engine index if the computed weight exceeds a predetermined threshold, and it could be used to delete a page from the index if it drops below a predetermined threshold.

**Freshness**

Monitored web traffic could be used together with the web graph to eliminate dead web pages from search results.

When someone tries to visit a page, and they get an error message in response, that the page is not found, the ISP traffic monitor will see that response, and the web graph could be modified to eliminate the web edges that were connected to the dead web page in the existing web graph. So, bad search results could be removed from an index without waiting for a web crawler to discover the dead page.

**Improving search results**

This was an interesting approach that surprised me a little. The search results from other search engines might be looked at to improve search results in a search engine that measures and tracks user web traffic data.

A search engine may be queried by a searcher. That user may pick a search result and navigate to the selected Web page. All of the user activity (e.g., including the query and the pick) could be logged in an activity log and used to update the web graph. For example, the query and the selected object from the first search engine may be associated with each other in the second search engine.

**Clustering Results**

The web graph may be used to improve the clustering of web objects and/or queries (e.g., the association of different queries with a common web page).

Example:

Someone searches at a search engine using the query “Madonna” and picks the page www.rockstars.com. Another searcher submits a query “Britney Spears” at another search engine and chooses www.rockstars.com. Then the ISP activity log will reflect both queries and navigation choices, and those two different queries may be clustered in the index of search engine and become associated with www.rockstars.com.

**Burstiness**

The freshness of search results could be improved by monitoring and analyzing bursts of web traffic (e.g., many accesses per unit time).

An important (e.g., popular) set of web pages could be clustered (associated) by monitoring and analyzing bursts of web traffic toward the set of web pages that may decay after some time.

Example:

A set of web pages and queries associated with a natural disaster, such as an earthquake, could be clustered and heavily weighted immediately after the natural disaster, but the weights may decrease rapidly as interest and web activity wanes.

That clustering may be maintained only as long as the web activity (e.g., queries for a topic per unit time) is sustained above a specified threshold level.

**Personalization**

Search results for an individual user may be personalized by monitoring and analyzing web traffic. A group of users may be defined based on similarities of their web activity during a monitoring period.

Their activities may be tracked:

- by geographical location,
- by the number of similar web sites visited during the monitoring period,
- by the number of similar queries submitted during the monitoring period, or;
- any other metric that may be available from the web traffic data.

Example:

Web traffic data could be associated with a definable group of users and a separate web graph may be generated for that group of users. The activities of individual users may be tracked, for example, by the user’s IP (Internet Protocol) address and/or the use of cookies.

1. A web graph may be generated that is associated with the defined group of users.
2. Subsequently, a new user may be identified that exhibits web activity that is similar to one of the defined groups of users (e.g., geographic location, navigation, queries, etc).
3. Search results provided to the new user may then be biased by the web graph representing the web activity of the associated group of users for a period related to the monitoring period of the group of users.

**Conclusion**

As a patent application, it’s difficult to tell if the specific processes described in this document will ever be incorporated into how a search engine might rank pages on the Web. But, it’s an excellent introduction to some potential uses of Web traffic activity and how those uses could influence rankings.

This document limits itself to information gathered from Internet Service Provides and doesn’t talk about data that could be collected from sources like toolbars or other browser helper add-ons.

It’s difficult not to think of other search engines and some of the things that they are doing that could use some processes like the ones described here. For instance, the information collected by Google’s Web History.
