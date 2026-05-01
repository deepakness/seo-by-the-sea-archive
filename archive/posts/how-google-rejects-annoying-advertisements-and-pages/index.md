---
title: "How Google Rejects Annoying Advertisements and Pages"
source_url: "https://www.seobythesea.com/2007/06/how-google-rejects-annoying-advertisements-and-pages/"
slug: "how-google-rejects-annoying-advertisements-and-pages"
date_published: "2007-06-14T23:37:46+00:00"
date_modified: "2018-07-26T13:42:37+00:00"
author: "Bill Slawski"
---

How might a search engine approve or reject ads automatically, without human review, on the basis that the ads are annoying or displeasing in some way?

Without considering the very large volume of ads that get presented to Google everyday, you might think that they would manually review every ad that advertisers present for publication, which would take a lot of people. While ads should attract some attention, they shouldn’t be annoying or offensive. There are a number of standards set from Google for image ads, video ads, and for [text ads](https://support.google.com/adspolicy/answer/6021546?hl=en).

A patent application from Google goes into a good amount of depth on how it might take a programmatic approach to identifying ads, and Web pages that are “annoying.”

The patent filing describes some of the methods used when reviewing images and text and audio, with tools like Optical Character Recognition and pattern matching against large databases of images and sounds. It also details how Flash and animated images might be reviewed, but is silent on what it is looking at when it refers to things like a “Trust Score.”

[Detecting and rejecting annoying documents](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070133034.PGNR.&OS=dn/20070133034&RS=DN/20070133034)
Invented by Deepak Jindal and Anurag Agarwal
Assigned to Google.
US Patent Application 20070133034
Published June 14, 2007
Filed December 14, 2005

Abstract


> A system and method for evaluating documents for approval or rejection and/or rating. The method comprises comparing the document to one or more criteria determining whether the document contains an element that is substantially identical to one or more of a visual element, an audio element or a textual element that is determined to be displeasing.

Internet advertisements could contain offensive language or annoying actions such as flashing or strobing or be of poor image quality. Manual review of an ad is one possible way to filter such ads, but reviewing ads can require a lot of time and expense.

The sheer volume of ads may make manual review practically impossible. Processing ads using a machine-implemented process and/or without human input or intervention would be an ideal approach.

The method in this patent application would go through a document processor that would look at images, sound files, and other data to identify text, images (as well as spoken words and other data), and actions in the ad. Optical character recognition (OCR) technology would be used to review text in ads, and to rate and review them.

**It is possible that this system could be used to assess other pages on the Web other than just advertisements, such as web page content.**

The kinds of information that might be reviewed includes:

- Document information,
- Document performance information,
- Document characteristics rating information,
- Sensitivity rating information,
- Suitability standard information,
- Trust score information,
- Provider information,
- Link information, and;
- Other information.

Document information may include:

- The document itself,
- Any languages used in the document,
- Length information,
- Information regarding the types of files in the document (e.g., html, doc, zip, etc.),
- Type of document (advertisement, educational document),
- Summary information,
- Audio content (e.g., song lyrics),
- Visual content (e.g., pictures of faces),
- Pornographic content,
- Other offensiveness content (e.g., use of potentially offensive words),
- Programming code,
- Image quality,
- Actions associated with the document,
- Age-related content,
- The identity of the document owner and/or the document creator,
- Information about the document’s intended audience (such as geographic area, age range, gender, race, national origin, religion, other demographic information), and;
- Any other information related to a document or to the server, providers, or document sources.

A characteristics database may identify documents of a certain type, based upon certain features, such as:

- Subject matter,
- Characteristics rating,
- Aggregate characteristics rating,
- Sensitivity score,
- Characteristics type,
- Language,
- Geographic origin (e.g., country or city of origin),
- Geographic area of target audience,
- Document source,
- Owner of content,
- Creator of content,
- Target demographic,
- Actions (such as image flashing),
- Image movement,
- Hardware usable by the document (such as a mouse, game controllers, camera, or microphone),
- Whether user interaction is provided by the document (which may indicate a game),
- Whether the document’s programming involves random number generation, or;
- Other criteria.

Documents may be identified according to:

- Their offensiveness/appropriateness characteristics,
- Associated keywords,
- Associated site (e.g., a site explicitly or implicitly linked from the document),
- Status of associated site (e.g., whether a link in a document is broken and/or points to an invalid URL),
- Flesh content (e.g., state of undress of human images),
- Pornographic or other prurient content,
- Adult content,
- Drug or alcohol related content,
- Children’s content.

The documents may also contain annoying actions such as:

- Flashing,
- Strobing,
- Repetitive movement,
- Infinitely looping animation,
- Use of streaming video and/or audio,
- Open network connections,
- Involve game playing,
- Poor image quality, or;
- Other actions which the provider may wish to use for criteria for approving or rejecting a document.

The patent goes into great detail on how Flash documents might be reviewed, using text extraction, checking for disallowed actions such as streaming audio or video or opening network connections, looking for games, reviewing the use of sound and video, and policing for infinitely looping animations.

Animated GIFs would be checked for flashing, flickering and jiggling images.

Static Images may be checked for poor quality and layout problems.

Images that are intended to trick a user, by doing something like containing text boxes, drop downs, and buttons that aren’t functional, but are rather just present as images would be checked for using edge/corner detection techniques.
