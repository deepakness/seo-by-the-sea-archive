---
title: "Targeted Audio Advertising with Google, Part 1 - Examples"
source_url: "https://www.seobythesea.com/2007/04/targeted-audio-advertising-with-google-part-1-examples/"
slug: "targeted-audio-advertising-with-google-part-1-examples"
date_published: "2007-04-14T18:56:58+00:00"
date_modified: "2020-01-27T11:41:30+00:00"
author: "Bill Slawski"
---

I ran up to New York last Tuesday for the Search Engine Strategies Conference and had a chance to spend some time with a number of friends whom I hadn’t seen in a while. It wasn’t long enough, but it was great to do some catching up and to meet some new folks. Thanks to everyone whom I had a chance to spend a little time with.

One of the conversations that I had involved Google’s new Goog 411 telephone voice search. I hadn’t tried it out, but it was interesting to see that the service provides paid search results as well as Web results.

We know that Google has been working on bringing advertising to the radio, and they are doing some testing of Adwords with [targeted audio advertising](https://adwords.googleblog.com/2006/12/bringing-radio-advertising-to-google.html).

***A couple of recently published patent applications from Google explore audio ads in a large number of contexts that go far beyond just radio.***

I’m going to split a discussion of the patent applications, and what they discuss into more than one post, because there’s so much here. Today, some of the examples from the patent applications.

The audio advertising examples cover a wide range of possibilities.

**Google Audio Advertising Examples**

**A. Per Audio Stream Offers, Real-Time Arbitration, and Ad Network Hosted Audio Document Serving**

Imagine an Ad Network where advertisers and publishers can interact, and pay-per-action type advertising becomes a possibility. Here are some steps that might be involved:

1. Advertiser logs into audio advertising system and enters targeting information such as language, terms, category, country of the user, etc.
2. Advertiser is shown a list of audio streams which match their criteria and may be presented to the advertiser based upon the degree of relevance.
3. The advertiser could then enter a maximum cost-per-download offer on one or more of the audio streams.
4. An advertising network may host the serving of audio streams participating in the advertising network.
5. When someone downloads an audio stream, arbitration may be run at the time of the download to determine which ads to serve with that audio stream – the arbitration might simply compare the maximum cost-per-download offers of all ads that bid on the audio stream to determine one or more winning ads.
6. The winning audio ads are inserted into the audio stream at spots specified by the audio publisher and are delivered to the user.
7. Real-time reports may be presented to the advertiser on the number of times that their ads were served as well as related statistics such as the country from where a download request came, etc.

**B. Per Audio Stream Offers with Pre-Streaming Arbitration and Ad Insertion**

In an alternative to the above example that doesn’t use an advertising network for the serving of the audio document, it may be more challenging to run a real-time arbitration. A solution might be to avoid real-time arbitration altogether.

1. An auction could end before the audio stream starts. (possibly most useful for audio streams broadcast at set times rather than those downloaded on demand)
2. Advertisers would bid on a spcific audio program before the audio stream starts.
3. Ads to be served with the audio stream will be known before the start time.
4. This could possibly also work well when there is an aggregation of streams to bid upon since it might not be efficient for advertisers to bid on a per-audio document instance basis.

**C. Per Targeting Criteria Offers**

Instead of targeting specific audios, advertisers may be more concerned with serving advertisements with relevant audio documents. A publisher would set upon criteria for advertisers to match, and the system would determine which ads to play based upon relevancy and price.

Example

A weekly Pregame Show for the NFL’s Oakland Raiders may want to carry audio ads. This could be a radio broadcast, a television broadcast, a cable broadcast, an Internet broadcast, an Internet multicast or unicast, a digital video recorder replay, etc.

The audio publisher provides this relevancy information:

- topics=football; Raiders
- keywords=Raiders; Oakland Raiders

Some additional relevancy information is extracted from the audio document – assume that the pregame show is for a game between the Oakland Raiders and the St. Louis Rams. The following information might be applicable:

- topics=football; Raiders
- keywords=game; St. Louis Rams; Randy Moss; Kerry Collins; injuries; defense; offense; score; special teams; Oakland Raiders; football; Marc Bulger; NFL . . .

Some additional relevancy information may also be determined:

- client device location=Oakland;
- client device type=laptop; video supported; flash animation supported.

Imagine that there is a 30 second ad spot at 10 minutes into the broadcast, the following ads might be relevant:

**AD A: OAKLAND AUTO MALL**

- *keywords and geotargeting:* Oakland; cars; autos; automobiles; lease; new cars; used cars
- *offer:* $70.00 per 1000 impressions
- *length:* 30 seconds

**AD B: NFL JERSEYS**

- *keywords:* NFL; football; jerseys topics: football; apparel; team apparel;
- *offer:* $55.00 per 1000 impressions
- *length:* 15 seconds

**AD C: TONY’S PIZZA**

- *keywords and geotargeting:* pizza; Oakland; game; delivery
- *offer:* $35.00 per 1000 impressions
- *length:* 15 seconds

**AD D: GAME FACE SPORTS FAN SUPPLIES**

- *keywords:* football; NFL; baseball; MLB; basketball; NBA; fan; fanatic
- *offer:* $30 per 1000 impressions
- *length:*15 seconds

Here’s the breakdown from the patent applications of which advertisements might be broadcast:


> The following ad or combination of ads could be served in the 30 second ad spot: A; BC; BD; and CD. Serving ad A alone would generate $0.070, serving ads B and C would generate $0.090, serving ads B and D would generate $0.085, and serving ads C and D would generate $0.065. If the ads (or combinations of ads) are scored based on their revenue, the serving scenarios would be ordered: BC; BD; A; and CD. Thus, ads B and C would be served in the 30 second ad spot under the foregoing example.
>
> Recognizing that some devices that can play audio documents can actually play enhanced advertisements including video or animation for example, suppose that ad D had an additional offer of $100 per 1000 impressions for audio/video impressions. Since the client device in this case supports video, serving ad A alone would generate $0.070, serving ads B and C would generate $0.090, serving ads B and D would generate $0.155, and serving ads C and D would generate $0.135. Thus, in this scenario, if the ads (or combinations of ads) are scored based on their revenue, the serving scenarios would be ordered: BD; CD; BC; and A. Therefore, ads B and D would be served in the 30 second ad spot under the foregoing example.
>
> As this third example illustrates, allowing advertisers to target based on keywords or topics, rather than targeting their ads to a particular audio document, allows advertisers to have their ads placed on various audio documents without having to specify each such document. Thus, ad A would also be relevant to an audio document concerning cars, ad D would also be relevant to an audio document concerning the NBA, ads A and C would also be relevant to an audio document concerning Oakland, etc.

**D. Voicemail**

Voicemail messages might have advertising associated with them. This could work on a telephone, but the patent filings also mention voicemail in Google’s GMail.

Speech recognition may be used to transcribe voicemail to extract and/or generate relevancy information.

This relevancy information may be used to determine relevant ads, at least some of which may be rendered with a voice mail message or rendered with an e-mail.

Thus, for example, ads may be rendered with an e-mail that includes an audio attachment.

**E. Audio Advertising Links in Web Pages**

Some Web pages may include audio and/or video links.

Relevancy information could be extracted from those using something like close-captioned information and/or speech recognition software.

The relevancy information may be used, possibly along with other relevancy information on the Web page, to determine relevant ads which may be rendered with the document.

Those ads might not be triggered unless the audio and/or video links are selected by a user.

**F. Webcasts and Podcasts**

When someone plays a webcast or podcast using a media player like Microsoft’s Mediaplayer or RealNetworks’ Realplayer, speech recognition may be used to extract and/or determine relevance information from the audio stream, and determine relevant ads to play.

This would be an alternative to showing pre-selected ads, and may result in more relevant advertising and allow for competition between advertisers.

Ads might be inserted into the stream, or text or graphic ads might be shown on a nearby display or a browser window.

**G. Voice Messenger Chat**

Ads based upon the content of Voice messenger chats may also be a place where ads can be presented.

Speech recognition could be used to extract and/or determine relevance information from chats.

That relevance information would be used to determine relevant ads and show them along side the live conversation.

Example:

- Two people are chatting about IPod. Speech recognition is used to extract the topic or keyword IPod, and ads relevant to IPod can be inserted into the chat.

**H. Video Search**

AdWords are used to serve ads on a search results page, where the ads are relevant to the search query used to create that search results page.

In a video search, Google could continue to serve ads relevant to the search query, but may use information extracted from the videos to determine relevant ads.

**The Audio Patent Applications**

The text of both patent applications contains a lot of overlap, but there are differences in the claims areas and the summary sections of the documents, as well as some differences in the abstracts.

[Using speech recognition to determine advertisements relevant to audio content and/or audio content relevant to advertisements](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070078708%22.PGNR.&OS=DN/20070078708&RS=DN/20070078708)
Invented by Hua Yu, and Pedro Moreno
US Patent Application 20070078708
Published April 5, 2007
Filed: September 30, 2005

Abstract


> Serving advertisements with (e.g., in) audio documents may be improved by (a) accepting at least a portion of a document including audio content, (b) analyzing the audio content to determine relevancy information for the document, and (c) determining at least one advertisement relevant to the document using at least the relevancy information and serving constraints associated with advertisements. The advertisements may be scored if more than one advertisement was determined to be relevant to the document. Then, at least one of the advertisements to be served with an ad spot for the document may be determined using at least the scores. Examples of documents include radio programs, live or recorded musical works with lyrics, live or recorded dramatic works with dialog or a monolog, live or recorded talk shows, voice mail, segments of an audio conversation, etc. The audio content may be analyzed to determine relevancy information for the document by converting the audio content to textual information using speech recognition. Then, relevancy information may be determined from the textual information.

[Advertising with audio content](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220070078709%22.PGNR.&OS=DN/20070078709&RS=DN/20070078709)
Invented by Gokul Rajaram
US Patent Application 20070078709
Published April 5, 2007
Filed: September 30, 2005

Abstract


> The serving of advertisements with (e.g., on) audio documents may be improved in a number of ways. For example, a system may (a) accept information defining at least one ad spot associated with at least one instance of an audio document, (b) accept offers to have advertisements served in the ad spot(s), and (c) arbitrate among competing advertisements, using at least the offers, to determine at least one advertisement to be served in that ad spot(s). As another example, a system may (a) accept relevance information for an advertisement, (b) determine at least one audio document using the accepted relevance information, (c) present information about the audio document(s) to an advertiser associated with the advertisement, and (d) accept, from the advertiser, an offer to have its advertisement served with at least one of the audio document(s) accepted. As yet another example, a system may (a) accept relevance information for an audio document, (b) determine a plurality of advertisements relevant to the audio document using the relevance information and serving constraints of the advertisements, and (c) select at least one of the determined relevant advertisements to be served with the audio document. Examples of documents include radio programs, live or recorded musical works with lyrics, live or recorded dramatic works with dialog or a monolog, live or recorded talk shows, voice mail, segments of an audio conversation, etc.

- 4/14/2007 – [Targeted Audio Advertising with Google, Part 1 – Examples](https://www.seobythesea.com/2007/04/targeted-audio-advertising-with-google-part-1-examples/)
- 4/16/2007 – Targeted Audio Advertising with Google Part 2 – Relevancy
- 4/16/2007 – [Targeted Audio Advertising with Google Part 3 – Conclusion](https://www.seobythesea.com/2007/04/targeted-audio-advertising-with-google-part-3-conclusion/)
