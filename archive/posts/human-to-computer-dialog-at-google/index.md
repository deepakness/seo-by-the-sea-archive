---
title: "Human to Computer Dialog at Google"
source_url: "https://www.seobythesea.com/2022/01/human-to-computer-dialog-at-google/"
slug: "human-to-computer-dialog-at-google"
date_published: "2022-01-26T09:40:34+00:00"
date_modified: "2022-02-24T07:22:58+00:00"
author: "Bill Slawski"
---

## Context Aware Human to Computer Dialog

Searchers can increasingly interact with computers using natural language in “human-to-computer dialog.” I previously wrote about how a computer may respond to a searcher with [Natural Language query Responses](https://www.seobythesea.com/2021/05/natural-language-query-responses/), and how that might require the computer to understand things like grammar rules and some of the other quirks of conversations that humans have. A patent granted to Google on January 18, 2022, is about some of the problems that a computer might have when conversing with a human being using natural language.

I have written about Google Automated Assistants and conversations between computers and humans. One post was on discussions between Google and children, in the post [How an Automated Assistant May Respond to Queries from Children](https://gofishdigital.com/blog/automated-assistant-may-respond-to-children/). And a more recent post was about how an Automated Assistant from Google may use multi-Modal Models (Otherwise referred to as MUM) in the post [Google Mum Update](https://gofishdigital.com/blog/google-mum-update/).

Automated Assistants may be set up to understand and answer natural language queries with reasonable responses to humans in areas such as:

- Question-Answering
- Task Initiation
- Entity Recognition
- Recommendations

This recent patent on “Context-Aware Human to Computer Dialog” tells us that the problem with such software is that those programs have “difficulty switching between domains of conversation.”

What exactly does that mean?

**People Change Topics** – a searcher and an automated assistant talk about one topic (such as playing a game), and the searcher changes the conversation towards an unrelated topic (such as weather). The automated assistant may not be very responsive and may need more dialog to respond appropriately. It may be difficult for a computerized assistant to anticipate how a searcher may change topics the way they can.

An approach gets described for improving a human-to-computer dialog to make an automated assistant capable of interpreting and responding when a searcher changes the subject of the human-to-computer dialog between subjects. A “contextual data structure” may get used to maintaining “topics” relevant to an ongoing human-to-computer dialog. The topics could help select grammar to understand what the searcher is saying.

Based on chosen grammars, and possibly further by a dynamic dialog tree representing the ongoing human-to-computer dialog, a natural language response for something like the initiation of a task may be created and used by the automated assistant. In the meantime, new topics added to the dialog between the searcher and the computerized assistant may be added to the contextual data structure. The Topics that have not been mentioned or alluded to in some time may get dropped. That means that if a searcher provides natural language input on the not immediately pertinent topic that may have been pertinent to some previous issue of the ongoing human to computer dialog, the automated assistant may be able to pivot back to the previous topic seamlessly.


## Contextual Filtering of Human to Computer Dialog

This technique gets referred to as “contextual filtering.”

Contextual Filtering can avoid grammars that do not make sense in the conversation context and might result in nonsensical output.

This Filtering can reduce the grammar applied to natural language input from a human. That reduction means reducing the use of computing, like processor cycles, memory, and network bandwidth. This can benefit human-to-computer dialogs by improving an automated assistant’s effectiveness and helping it respond to input as quickly as possible.


## The Contextual Data Structure

If a human-to-computer dialog has just started, and no topics are pertinent, the computer may process natural language using conventional techniques. The subsystem may populate the contextual data structure based on issues raised by a human or an automated assistant during the human-to-computer dialog.

The contextual data structure may take many data structures stored in memory. It may be used to keep topics that have recently been relevant to an ongoing human-to-computer dialog. When an issue gets raised by the searcher or the automated assistant, the subject may be added to the contextual data structure. If a case is introduced in the contextual data structure, the issue may be “touched” or brought to the forefront of the conversation once again.

In this way, each topic in the contextual data structure may get associated with a measure of relevance to the human-to-computer dialog.


## Determining the Relevance of Topics to a Dialog

Relevance to each topic may be determined in part by counting the turns of the human-to-computer dialog since the issue was last raised.

The more turns since the topic get raised (or added or touched), the lower the relevance. Suppose a searcher started a human-to-computer dialog about the weather (which would cause the case “weather” to get added). Still, the dialog covered a wide range of issues unrelated to weather. The more turns into the dialog since the topic of weather was raised, the more the relevance score associated with weather is diminished.


## Dropping A Topic of Relevance from a Dialog

If the human and computer stop talking about something, and a topic diminishes below a threshold of relevance, that topic may be dropped altogether from the contextual data structure.

Dropping “stale” topics from the contextual data structure may offer technical advantages.

The more contextually filtered and removed as topics, the more stale issues are released. Dropping stale topics means reducing computing resource consumption.

Ans more focus can be given to relevant topics in the human-to-computer dialog. It becomes less likely that off-topic or otherwise nonsensical subjects will be produced, which means less of a chance of the automated assistant providing similarly-nonsensical output.

Thus, the number of human-to-computer dialog turns (and hence, searcher-provided natural language inputs) required to achieve a searcher’s particular goal may be reduced. This can benefit searchers with limited physical or situational abilities to provide multiple inputs.


## Other Factors For Measures of Relevance in Human To Computer Dialog

**Relatedness of Topics** – The measure of relevance of each topic may get based on relatedness (e.g., semantic) between the issue and other issues in the contextual data structure.

So, if a first topic has not gotten raised in a while, but a semantically-related second topic gets raised later, the first topic’s measure of relevance may be submitted.

The patent tells us that:


> The contextual data structure may take the form of an undirected graph comprising a plurality of nodes and a plurality of edges connecting the plurality of nodes. Each node of the undirected graph may represent a given topic of the topics stored as part of the contextual data structure. Each node may also store a count of the ongoing human-to-computer dialog since the given topic got raised. Each edge connecting two nodes may represent a measure of relatedness (e.g., semantic, etc.) between two topics represented by the two nodes, respectively. Of course, other data structures are contemplated herein.

Also, each grammar may be associated with both a topic and a threshold relevance score for that topic.

If the topic persists in the contextual data structure, but its relevance score does not satisfy the threshold, the grammar may not be selected.

We get told that this enables fine-tuning of when grammars will be applied and when they won’t.

This topic understanding may use grammars selected and applied by the parser subsystem.

The parser subsystem may also provide the response subsystem with topics as part of the parses/interpretations separately.

These topics may be in the contextual data structure and have gotten touched by their associated grammars getting applied.

The response subsystem may use a dialog tree to steer the ongoing human-to-computer dialog between seemingly unrelated topics.

In essence, the response subsystem interprets topics from the parser subsystem and steers the conversation along the dialog tree based on issues previously raised.


## Nodes in the Dialog Tree

Each node in the dialog tree represents a natural language process.

A root node of the dialog tree may handle any natural language input, and it can do this by initiating a processor by requesting disambiguation from the searcher. It can then activate child nodes corresponding to processes created in response to natural language input from the searcher.

The child processes may add additional child processes to handle aspects of the internal dialog.


## Adding Related Topics to the Human to Computer Dialog

When the response subsystem generates a response,s such as a natural language response or a responsive action or task, for the searcher, the response subsystem may add related topics to the contextual data structure.

Each node of the dialog tree may be associated with topics (for instance, be selected by a developer of the process underlying the node).

This following statement from the patent reminds me of Google’s use of FrameNet, which I wrote about in [Semantic Frames and Word Embeddings at Google](https://gofishdigital.com/blog/semantic-frames/):


> As noted above, each grammar also may be associated with topics. Consequently, by adding these topics to the contextual data structure, the response subsystem adds the number of grammars that the parser subsystem may apply at any point in time. Thus, if a searcher converses about one topic, changes course, then returns to the original topic (or to a semantically-related topic), grammars associated with that original topic may still be applicable because their associated topics are persisted in the contextual data structure. But as noted above, if the human-to-computer dialog strays from a given topic for long enough, the topic may be dropped from the contextual data structure, e.g., to prevent the parser subsystem from applying an excessive number of grammars to each natural language input, which can become computationally expensive.


## Human to computer Dialog as a Converssation

The patent tells us about a conversation between a searcher and a computer. It says that a searcher may initiate a human-to-computer dialog with the phrase, “Let’s play a game.” The computer could respond to the topic of a game with “OK, what game do you want to play?”

The computer could do something such as listing available games, such as “I have Sports Trivia and Historical Trivia.” to filter the direction of the conversation contextually.

Technical Advantages from Following this contextual filtering approach to topics as described by the patent can include:

Smooth changing of conversation subjects without requiring individual developers to expend considerable resources handling subject changing
Limiting the number of interpretations of topics to only those that make sense in the current dialog context can help preserve memory, processor cycles, network bandwidth, etc.
Determine the Design of dialog by automated assistants, which could make them easier to maintain, and may allow for easy code reuse
Business logic could be quickly developed in a single programming language, C++.

This human to computer dialog patent is located at:

[Context-aware human-to-computer dialog](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=11,227,124.PN.&OS=PN/11,227,124&RS=PN/11,227,124)
Inventors: Piotr Takiel
Assignee: GOOGLE LLC
US Patent: 11,227,124
Granted: January 18, 2022
Filed: March 7, 2019

Abstract


> Methods, apparatus, and computer-readable media are described related to using a context of an ongoing human-to-computer dialog to enhance the ability of an automated assistant to interpret and respond when a searcher abruptly transitions between different domains (subjects).
>
> In various implementations, natural language input may be received from a searcher during an ongoing human-to-computer dialog with an automated assistant.
>
> Grammar(s) may be selected to parse the natural language input.
>
> The selection may get based on topic(s) stored as part of a contextual data structure associated with the ongoing human-to-computer dialog. The natural language input may be parsed based on the selected grammar(s) to generate parse(s).
>
> Based on the parse(s), a natural language response may be generated and output to the searcher using an output device. Any topic(s) raised by the parse(s) or the natural language response may get identified and added to the contextual data structure.


## Human to Computer Dialog Conclusion

The patent provides more details. However, Google has provided some examples of conversations between humans and computers, which are exciting and fun to listen to. It may be best to start by hearing those examples.

One conversation involves a dialog with a paper airplane:


> Google shows off LaMDA AI language demo by talking to a paper plane [#GoogleIO](https://twitter.com/hashtag/GoogleIO?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/8q51rqbbpA](https://t.co/8q51rqbbpA)
>
> — The Verge (@verge) [May 18, 2021](https://twitter.com/verge/status/1394708912843149314?ref_src=twsrc%5Etfw)

Google also showed off the language capabilities it has developed, showing off a conversation with the planet Pluto:


> Google’s LaMDA AI language demo shows what it’s like to have a chat with Pluto. Yes, the planet. [#GoogleIO](https://twitter.com/hashtag/GoogleIO?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/sC4aSJImr5](https://t.co/sC4aSJImr5)
>
> — The Verge (@verge) [May 18, 2021](https://twitter.com/verge/status/1394711723714793483?ref_src=twsrc%5Etfw)

Are you listening for changes in topics in those conversations? Or what holds such discussions together? Are we teaching Google how to have conversations with humans by participating in such dialogs?
