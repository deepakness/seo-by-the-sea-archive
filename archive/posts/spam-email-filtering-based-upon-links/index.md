---
title: "Spam Email Filtering Based Upon Links"
source_url: "https://www.seobythesea.com/2006/06/spam-email-filtering-based-upon-links/"
slug: "spam-email-filtering-based-upon-links"
date_published: "2006-06-14T17:46:01+00:00"
date_modified: "2012-10-05T19:11:21+00:00"
author: "Bill Slawski"
---

Can links in emails help reduce email spam? Possibly.

A patent application from Google last week, that I missed until I checked carefully through the patent assignment database, describes an interesting approach to checking for the presence of spam in emails.

If an email has a link within it, the page that it is linked to can be looked at using a concept categorization of that linked content.

When an electronic message is received, hyperlinks within the document are indentified, and information about the link is categorized based upon “semantic relationships” from that information. That categorization, and other information can then be used to determine whether or not the message is undesired and should be filtered.

[Method and system to detect e-mail spam using concept categorization of linked content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060122957%22.PGNR.&OS=DN/20060122957&RS=DN/20060122957)
Invented by Johnny Chen
US Patent Application 20060122957
Published June 8, 2006
Filed: December 3, 2004

Abstract


> A system and method for detecting undesired electronic messages (e.g., spam) using concept categorization of hyperlinks is disclosed. A server receives an electronic message and retrieves web pages that correspond to hyperlinks in the message. The server performs concept categorization on the retrieved web pages based on semantic relationships in the received information to determine whether the electronic message meets predefined criteria associated with undesired messages.

Concepts related to the pages or files at the other end of the hyperlink are determined to see if they are within categories that are “associated” with spam.


> For example, if concepts database 228 includes the concepts (clusters) listed in FIG. 16 of U.S. patent application Ser. No. 10/676,571, the clusters “free sex porn pic movies xxx” and “nude naked pics pictures photos . . . ” may be predefined as undesirable categories.
>
> The categories associated with the received information can be compared to these two undesirable categories to determine how well the categories associated with the received information match the undesired categories.

The page or file itself may be checked, or the spam detection module being used may locate the URL for that document in an address database that stores that type of concept categorization information.

**Other Factors Possibly Used**

This concept characterization could be the sole basis for determining if the message is undesirable. Though other additional methods could also be used.

This concept characterization could be combined with other methods using predefined criteria.

These would look at other features in the message or in the received information, such as:

- Layout of the page (“many spammers create new sites by copying one of their previously shut-down sites”),
- Graphics use,
- Words used such as “buy now”, “enter here”, “porn” or “Viagra” that are of an amount or ratio different from what is considered to be normal, like in spam sites, and/or;
- Capitalized words usage.

**Domain Registration**

Domain registration information, from a whois search of the domain names associated with the hyperlinks in the message could also be used to determine if a message is undesirable.

The domain name registration information of interest may include the contact and address information, and/or the expiration date of the domain name.

The patent application notes that:


> Spammers typically register a site for just one year (the minimal duration permitted), so an expiration date corresponding to a one-year duration is often a sufficient criterion by itself to identify an undesired message.

I’m not sure that I agree with this assumption about domain names registered for one year, but it’s an assumption that they also made about domain names and spam sites in their patent application upon [Information Retrieval based on historical data](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220050071741%22.PGNR.&OS=DN/20050071741&RS=DN/20050071741):


> [0099] Certain signals may be used to distinguish between illegitimate and legitimate domains. For example, domains can be renewed up to a period of 10 years. Valuable (legitimate) domains are often paid for several years in advance, while doorway (illegitimate) domains rarely are used for more than a year. Therefore, the date when a domain expires in the future can be used as a factor in predicting the legitimacy of a domain and, thus, the documents associated therewith.

The system that would use this type of filtering might allow for email rules that permit messages received from specified addresses or ones that the user has sent messages to, even if the links in those messages are suspect.

**How Does Google Come Up with Classifications for Pages?**

That’s one of the more interesting aspects of this patent application. It doesn’t actually explain the classification process, but it does point to another patent:

[Method and apparatus for characterizing documents based on clusters of related words](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220040068697%22.PGNR.&OS=DN/20040068697&RS=DN/20040068697)
Inventors: Georges Harik, and Noam Shazeer
US Patent Application 20040068697
Published April 8, 2004
Filed: September 30, 2003

Abstract


> One embodiment of the present invention provides a system characterizes a document with respect to clusters of conceptually related words. Upon receiving a document containing a set of words, the system selects “candidate clusters” of conceptually related words that are related to the set of words. These candidate clusters are selected using a model that explains how sets of words are generated from clusters of conceptually related words. Next, the system constructs a set of components to characterize the document, wherein the set of components includes components for candidate clusters. Each component in the set of components indicates a degree to which a corresponding candidate cluster is related to the set of words.

I hadn’t looked at this patent application too closely before, but it seems that at least one practical use may have come from it with this method of filtering spam. It may also provide some insight into how Google performs some semantic analysis upon pages.
