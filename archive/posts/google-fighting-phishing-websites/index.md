---
title: "Google Fighting Phishing Websites"
source_url: "https://www.seobythesea.com/2007/06/google-fighting-phishing-websites/"
slug: "google-fighting-phishing-websites"
date_published: "2007-06-07T07:48:56+00:00"
date_modified: "2007-06-07T07:48:56+00:00"
author: "Bill Slawski"
---

A Google patent application from this morning describes a process of presenting an image overlay and disabling links on Web pages that are determined to likely be sites involved in attempting to masquerade as trustworthy to collect sensitive information from visitors, such as passwords or financially sensitive information.

[Browser system and method for warning users of potentially fraudulent websites](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070130327.PGNR.&OS=dn/20070130327&RS=DN/20070130327)
Invented by Cynthia Y. Kuo, Fritz J. Schneider and Collin E. Jackson
US Patent Application 20070130327
Published June 7, 2007
Filed: December 5, 2005

Abstract


> A user is warned of a potentially fraudulent document, such as a webpage, by a warning message that is overlaid on top of the document and of the browser chrome. The warning message is associated with a warning icon displayed in the browser chrome.
>
> The potentially fraudulent document is rendered in the browser such that the links within are not accessible to the user. The rendering may include superimposing an image over the document or rendering a snapshot of the document instead of the document itself.

This method would involve determining fraud by checking the web address against a blacklist, or looking at a set of rules (heuristics) to determine if the page showed signs of containing fraudulent content.

The overlay described in the abstract is a purposeful alternative to pop-ups, which many people dislike. I’ve seen my share of ads that “warn” you about the dangers of “being online” and the security risks you take “connecting to the Internet.”

The blacklist may contain specific URLs or URL patterns (e.g., www.badoperator.com/*).

The heuristics may include rules that consider:

- The age of the domain (very new domains may be more likely to host a phishing site),
- The physical location (e.g., the country) of the domain name owner,
- Similarity of the URL to a legitimate URL that is often targeted,
- PageRank status of the URL,
- A comparison of a fingerprint of a document’s content or document structure with the fingerprints of known targets, and identifying documents that contains the logos of known targets.
