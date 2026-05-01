---
title: "Yahoo Tactics Associating Geographic Search with Searcher Location"
source_url: "https://www.seobythesea.com/2007/08/yahoo-tactics-associating-geographic-search-with-searcher-location/"
slug: "yahoo-tactics-associating-geographic-search-with-searcher-location"
date_published: "2007-08-15T02:17:41+00:00"
date_modified: "2017-04-22T10:53:28+00:00"
author: "Bill Slawski"
---

Can a search engine guess where someone is searching from based upon the query being used?

**A patent granted to Yahoo today, originally filed in 2003, explores that question.**

Many site owners have tied site visitors to locations by looking at those visitors’ IP addresses, and mapping those to a particular place. That could be helpful on a country level, but much less reliable at a city level.

Why be concerned with knowing where someone is connecting from? It could be helpful in providing local services or information, such as news, advertising, weather, and traffic information to a user. For a search engine, that information might be userful in returning relevant results to a searcher.

**Understanding a searcher’s location**

The processes in this patent attempt to locate a searcher when there is a geographic element to their search. Results may then be returned to a searcher based on a probability of where the searcher may be located, based upon the context of the given query.

The patent describes a geographic location extraction tool, with a number of sub-components which together offer the best possible list of probable locations in response to a given search query.

The sub-components:

1. Word analysis to determine location parts of search words (real-time)
2. Location ranking (off-line)
3. Associated search word identifier (off-line)
4. Creating a list of search-words with a near/far rating (off-line)
5. Doing a structure analysis on a query (real-time)

The patent also looks at

1. Dynamic probability adjustment (real-time)
2. Inferring the location of points of interest (real-time)
3. Associated location to IP Address identifier

[Geographical location extraction](https://patents.google.com/patent/US7257570B2/en)
Invented by Soren Riise, Devesh Patel, and Eugene Heinz Stipp
Assigned to Yahoo
US Patent 7,257,570
Granted August 14, 2007
Filed: December 22, 2003

Abstract


> A geographical location extraction method and tool to infer a likely geographical location from one or more search terms entered as a query by a user on a search engine or the like.

**Word analysis to determine location parts of search word**

What probability is there that terms in a search query are meant as geographical locations?

Imagine looking at the frequency of keywords in a database that was created from words taken from a large number of web pages. The words in that database can be compared to a “geographical place names” database.

Take the query terms, and if they are in keyword database and not in the place name database, they are assigned a probability of 1.0 for being non-geographical, and 0.0 for being geographical.

If the query terms are only in the place name database and not in the keyword database, they are assigned a probability of 0.0 for being non-geographical, and 1.0 for being geographical.

Query terms that occur in both have a probability split which is calculated based on the word use frequency, and the significance of the word as a place name.

*Examples*

The word “computer” may not be in the geographical location database, so the probability of “computer” being a location is zero.

A small town in Croatia is called “Hotel.” The search word “hotel” would be given a probability of 0.99 of being a pure keyword, and a probability of 0.01 of being the town Hotel in Croatia.

There are a number of geographic locations associated with the keyword “Rugby” (One in the UK, one in Australia, two in South Africa and 12 in the US). As a popular game, it is also used in other contexts, which means that the word frequency in a standard body of text (or the Web) is going to be quite high. The keyword “rugby” might be given a probability of 0.6, and Rugby as a place name could be given a probability of 0.4.

**Location ranking (offline prior to the query)**

Location names are identified while ranking geographical location names looking at country-based statistics (such as population, number of telephone lines, number of installed PCs, number of mobile phones, number of internet users, number of credit/debit cards, and GDP per capita).

Town-based statistics (Population, Geometric size, Airport traffic, Commercial ranking, number of P ranges, Country popularity) may also be viewed. Together, these may determine the likelihood of which geographical location may be referred to in a search query.

It’s also more likely that a location being searched for may be weighted more heavily if an event is happening at the geographical location, like the Olympic Games.

*Examples*

Hannover in Germany will rank higher ranking than Hannover in Maryland, because it has more people and more internet users.

While San Antonio in Venezuela is the second largest San Antonio in the world, San Antonio in Ibiza is more popular as a favorite holiday destination. Airport traffic information backs this up.

**Associated search word identifier (off-line)**

In a search phrase that is partially geographic in nature, some of the words may not indicate a location. If one were to take those non-geographic words, and compare them to the frequency of occurrence of search words from sources known to relate to a particular geographical location, a match might indicate a specific location.

The example in the patent describes a couple of towns called Ficksburg. One of them, in South Africa, hosts an cherry festival and hence that “Ficksburg” is closely associated with the word “cherry”. A search for Flicksburg with the word “cherry” in the search query is more likely to be associated with the town in South Africa.

**Creating a list of search-words with a near/far rating (off-line)**

Some terms could be considered more likely to be near a searcher, while others could be considered to be far from the searcher. A “plumber” is near, while “flight” is more likely related to a remote or “far” activity.

*Examples*

Someone from Baltimore, Maryland, (known or assumed from the user’s IP Address) searching for “plumber Hannover” is probably searching for a plumber in Hannover Md., rather than for a plumber in Hannover Germany.

The same person in Baltimore searching for “flight Hannover” or “holiday Hannover” is more probably searching for a flight to Hannover Germany than Hannover Maryland.

**Doing a structure analysis on a query (real-time)**

*Examples*

Compare the two queries “cinema leicester square” and “square dancing leicester”. In the first one, the search is probably for the location “Leicester Square” in London, and the second query is probably for dancing in the town of “Leicester”.


> By purely analysing all combinations of words both “Leicester” and “Leicester Square” would be returned as probable locations (assuming that both Leicester and Leicester Square are actual place names) and weighted on their rank (based on various statistics). However, by the structural analysis component identifying that “Leicester” is followed by “square” in the first example, the probability of “Leicester Square” compared to “Leicester” is increased. Thus, “Leicester Square” in the first example will be weighted higher than “Leicester” in the list of locations with probabilities output by this sub-component.

**Dynamic probability adjustment (real-time)**

A user enters “Hotels Paris” trying to find web sites with information about hotels in Paris, France.

The location module of the search engine separates the submitted query into text which might be a locality name and text which is not a locality name.This might be done by testing the text against a table of known locality names to verify whether the submitted criteria includes locality names.

A term like “paris” might be seen to be related to locations in France and in Texas.

A probability module might determine the probabilities that it were one or the other, and provide search results limited to that location.

A search for [Hotels Paris France] might create probabilities for both “paris” and “france” independently, that they are related to specific geographic locations. It might also do the same while combining probabilities for both.

Instead of the search engine deciding which location is appropriate, it might allow the search to choose a location.

Those probabilities could also map the probabilities agains an IP address for the searcher. A searcher in Northern Texas looking for [hotels paris] may be searching for a hotel in Paris, Texas, even though the probabilities favor Paris France. because their IP address is being entered into the determination.

**Inferring the location of points of interest (real-time)**

A search for “Guggenheim Museum” runs into the problem that there are Guggenheim museums in New York, Bilbao, Venice, Berlin, and Las Vegas. If a lookup of the longitude and latitude for each were performed and the distance to the searcher at a known location was calculated, using something like the IP Address of the user, the nearest Guggenheim Museum to the user’s location might be chosen.

**Associated location to IP Address identifier**

The patent also describes a couple of strategies for finding a location of the IP address of the searcher, which tend to work best if the person searching is performing their search from where they work, assuming that their business has its own IP address, and a website that includes contact information.

A reverse IP lookup on their IP address can help identify a domain name. A search for the web site associated with the web site at that domain name could be assumed to be the location of the searcher.

**Conclusion**

I’ve been writing more than a couple of posts lately about local search, and how search engines might index geographic locations. This patent from Yahoo is different in that it takes a close look at terms used in a query to try to indentify a user’s intent to perform a geographic search, and to associate the location of the searcher with the location in the query.
