---
title: "Google Authorship Markup Patent Applications Published"
source_url: "https://www.seobythesea.com/2013/03/google-authorship-markup/"
slug: "google-authorship-markup"
date_published: "2013-03-14T18:22:21+00:00"
date_modified: "2020-01-19T15:45:06+00:00"
author: "Bill Slawski"
---

On September 8, 2011, Google filed a patent named “System and Method for Confirming Authorship of Documents,” (U.S. Provisional Application Ser. No. 61/532,511). This provisional patent expired on September 9, 2012, without being prosecuted. A day later, on September 10th, Google filed two new versions of the patent, using the same name for both of them. Google’s Othar Hansson’s name appears on both as the lead inventor, and the description sections are substantially similar, with a couple of very small changes.

The claims sections of the two authorship markup patents are different, however. The first patent application (US20130066970) describes a link based approach to claiming authorship of a site, or being a contributor to that site. The second patent application (US20130066971) describes an email based method of claiming authorship (or of being a contributor).

The approaches described in both patent filings appear to be substantially similar to the authorship markup instructions that Google describes in their help pages starting at [Author information in search results](https://support.google.com/webmasters/answer/6083347?rd=1)

There seems to be at least one difference that I uncovered in skimming through the documents, which involves the link based approach, and is described in this snippet from the patent applications descriptions sections:


> As illustrated in FIG. 2, the authorship attribute 220 of link 216 indicates that the entity associated with document 214 is an author of or contributor to content at website 202. In some implementations, the authorship attribute 220 is rel=”contributor-to”. In some circumstances, the authorship attribute 220 is rel=”me”, which may be used to indicate that the entire website 202 contains content by the entity associated with document 214.

Google seems to have decided not to use a **rel=”contributor-to”** link attribute value when only some content on a site was from a specific author, and a **rel=”me”** when all of the content on a site was from the same author. That would probably be painful (or confusing) to change (from rel=”me” to rel=”contributor-to”) if someone who had been the only author of a site decided to accept a guest post or page from another author, and to use authorship markup to provide proper attribution.

If you see other things within the authorship markup patent filings that appear to be different than how authorship was implemented, please let us know. :)

Here are the patent filings:

(In this one, the claims describe a link based approach to verification of authorship.)

[System and Method for Confirming Authorship of Documents](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220130066970%22.PGNR.&OS=DN/20130066970&RS=DN/20130066970)
Invented by Othar Hansson, Nundu Janakiram, Robert Ennals, Jonathan Tang, Jun Gong, and Wanda Hung
US Patent Application 20130066970
Published March 14, 2013
Filed: September 10, 2012

(In this version, the claims describe an email based approach to verification of authorship.)

[System and Method for Confirming Authorship of Documents](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220130066971%22.PGNR.&OS=DN/20130066971&RS=DN/20130066971)
Invented by Othar Hansson, Sagar Kamdar, and Michael Cassidy
US Patent Application 20130066971
Published March 14, 2013
Filed: September 10, 2012

Abstract (Same for Both)


> A system, computer-readable storage medium storing at least one program, and a computer-implemented method for confirming authorship of documents is presented. A first document hosted on a first website of a first domain is accessed, the first document being linked to a second document through at least one link, and a respective link including a first predefined authorship attribute asserting authorship of a respective document including the respective link by a respective entity associated with a respective target document of the respective link.
>
> Authorship of the first document by an entity associated with the second document is conditionally confirmed when the second document includes a second link to the first website of the first domain, the second link including a second predefined authorship attribute indicating that the entity associated with the second document is an author of or contributor to content at the first website of the first domain.

Google has stopped using [Authorship Markup, and Authorship](https://searchengineland.com/goodbye-google-authorship-201975)

Last Updated June 8, 2019.
