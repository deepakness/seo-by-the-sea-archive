---
title: "Baseball, SEO, and Redirects: Throwing the Gyroball"
source_url: "https://www.seobythesea.com/2007/03/baseball-seo-and-redirects-throwing-the-gyroball/"
slug: "baseball-seo-and-redirects-throwing-the-gyroball"
date_published: "2007-03-27T12:02:17+00:00"
date_modified: "2020-06-23T10:00:37+00:00"
author: "Bill Slawski"
---

The baseball season is almost upon us, and I’m looking forward to the cry of “Playball” from the umpires. I also want to see Daisuke Matsuzaka, who joined the Red Sox this year, and his mythical gyroball. I’m also rooting for Josh Hamilton to turn his life around with the Cincinnati Reds.

A little over a year ago, Matt Cutts used [a baseball example](https://www.mattcutts.com/blog/bigdaddy-on-the-move/) to talk about how search engines might handle something known as a 302 redirect.

When someone types in *http://www.sfgiants.com* into their browser address bar, they are taken to that page, and then redirected to another page with a much uglier address: *http://sanfrancisco.giants.mlb.com/index.jsp?c_id=sf*

That happens because the server that you visit, when you type in the sfgiants.com page, has an instruction in it to redirect visitors to the different address. There are a couple of different kinds of redirects – a temporary one, and a permanent one. The temporary one, which uses a server code of 302, is supposed to be an indication that the new address is only temporary. The permanent one uses a server code of 301.

When Google or Yahoo indexes a page and finds a redirect, they know that the address of the page has changed to a new address. The difficulty they then face is deciding whether to show the old address in their search results or the new address to where the page is being redirected.

With a temporary (302) redirect, it might be a good idea for them to keep the old address because the new one might go away. With a permanent redirect (301), they might decide to show the new address. Matt followed up his post on redirects, with another that [detailed more fully](https://www.mattcutts.com/blog/seo-advice-discussing-302-redirects/) what happens when there is a 302 redirect in place, and Google is indexing a page.

Ideally, if you use a redirect to another page, it’s not a bad idea to use a permanent (301) redirect, especially if people have linked to the old address. In most cases, its recommended and can help the new address be recognized as the permanent address for the page, and can result in passing along link popularity or PageRank scores to the new address.

Matt’s example from the official Major League Baseball (MLB) page for the San Francisco Giants left me curious as to what would show up at number one, in searches for major league baseball teams at Google and Yahoo, so I took a look. I decided to just use the American League teams.

The MLB pages showed up number one for all of the following team searches in Google and Yahoo. But the URLs that each search engine displayed were different. The pages that you end up upon when you click upon those links were also (mostly) different – the shorter MLB addresses are still using 302 redirects, instead of 301 redirects.

Google

Baltimore Orioles
orioles.mlb.com/

Boston Red Sox
redsox.mlb.com/

Chicago White Sox
whitesox.mlb.com/

Cleveland Indians
indians.mlb.com/

Detroit Tigers
tigers.mlb.com/

Kansas City Royals
royals.mlb.com/

Los Angeles Angels
angels.mlb.com/

Minnesota Twins
twins.mlb.com/

New York Yankees
yankees.mlb.com/

Oakland Athletics
athletics.mlb.com/

Seattle Mariners
mariners.mlb.com/

Tampa Bay Devil Rays
devilrays.mlb.com/

Texas Rangers
rangers.mlb.com/

Toronto Blue Jays
bluejays.mlb.com/

Yahoo

Baltimore Orioles
baltimore.orioles.mlb.com/index.jsp?c_id=bal

Boston Red Sox
www.redsox.com

Chicago White Sox
chicago.whitesox.mlb.com/index.jsp?c_id=cws

Cleveland Indians
www.indians.com

Detroit Tigers
detroit.tigers.mlb.com/index.jsp?c_id=det

Kansas City Royals
www.kcroyals.com

Los Angeles Angels
www.angelsbaseball.com

Minnesota Twins
www.minnesotatwins.com

New York Yankees
www.yankees.com

Oakland Athletics
www.oaklandathletics.com

Seattle Mariners
www.seattlemariners.com

Tampa Bay Devil Rays
www.devilrays.com

Texas Rangers
www.texasrangers.com

Toronto Blue Jays
www.bluejays.com

I was a little surprised that the MLB pages all ended up at number one in the results for both Google and Yahoo. I don’t know why Yahoo decided not to show the shorter URLs for Baltimore, Chicago, and Detroit – the shorter addresses do exist. I also thought that it was interesting the Google chose one version of a shorter URL, and Yahoo chose another.

When you search for [Boston Red Sox], Google shows *redsox.mlb.com/* as the MLB address, and Yahoo shows the *www.redsox.com* address. If you click upon either link to the page, you end up at this address: *http://boston.redsox.mlb.com/index.jsp?c_id=bos* through the use of a 302 redirect.

If MLB were to switch to a permanent redirect (301) to send visitors to these shorter addresses to the official URL, would we not see the shorter URLs in Google and Yahoo? I don’t know. Is the use of the temporary redirect hurting their rankings? Maybe, though it’s hard to get higher than number one in results.

People are linking to these shorter URLs. Yahoo Site Explorer shows 72,310 inbound links to *www.redsox.com*. MLB may be losing the benefit of link popularity or PageRank because of their use of the temporary redirect. While that doesn’t appear to be hurting them when it comes to ranking for the names of the teams, might it hurt them for other related searches?

I decided to investigate further.

Every team has an Allstar representative player each year, either elected or appointed. I decided to take a look to see if the top-ranking page for one Allstar from each of the American League teams was a major league baseball page or some other page.

After each team and Allstar below, I list the source of the top-ranked page. MLB didn’t fare so well:

Baltimore Orioles
Miguel Tejada
Google ESPN
Yahoo ESPN

Boston Red Sox
David Ortiz
Google ESPN
Yahoo ESPN

Chicago White Sox
Paul Konerko
Google ESPN
Yahoo ESPN

Cleveland Indians
Grady Sizemore
Google MLB
Yahoo Yahoo

Detroit Tigers
Ivan Rodriguez
Google ESPN
Yahoo ESPN

Kansas City Royals
Mark Redman
Google Baseball-reference.com
Yahoo ESPN

Los Angeles Angels
Vladimir Guerrero
Google ESPN
Yahoo ESPN

Minnesota Twins
Joe Mauer
Google ESPN
Yahoo Yahoo

New York Yankees
Derek Jeter
Google Wikipedia
Yahoo MLB

Oakland Athletics
Barry Zito
Google ESPN
Yahoo Wikipedia

Seattle Mariners
Ichiro Suzuki
Google ESPN
Yahoo MLB

Tampa Bay Devil Rays
Scott Kazmir
Google ESPN
Yahoo ESPN

Texas Rangers
Michael Young
Google Michael-young.com (nonbaseball)
Yahoo ESPN

Toronto Blue Jays
Vernon Wells
Google baseball-reference.com
Yahoo ESPN

There are only three MLB number one results in there, and the Ichiro page at the top of the Yahoo results no longer exists. Sadly, it uses a 302 redirect to point to a “not found” (404) page, so it may remain in those results for a while until Yahoo figures out that the page is gone. That’s another potential problem with using 302 redirects like that.

Might the team pages that mention their Allstars have the potential to rank number one in a search for the Allstars names? Maybe. Since the 302 redirects don’t pass along PageRank or link popularity, the pages might not seem as important as they could be by the search engines. Then again, the pages may not also be seen as the most relevant pages in a search for the Allstars names.

But using a permanent redirect (301) might make a difference in rankings for the Allstars names. It might also mean losing the prettier URLs in Google and Yahoo.

Which would you choose?
