---
title: "Google Granted Patent on Mobile Machine Learning"
source_url: "https://www.seobythesea.com/2013/04/google-mobile-machine-learning/"
slug: "google-mobile-machine-learning"
date_published: "2013-04-30T05:57:06+00:00"
date_modified: "2020-07-19T09:49:07+00:00"
author: "Bill Slawski"
---

That phone in your pocket is filled with applications, with sensors to measure movement and the world around us, with communications tools that put us in touch with work, home, family, friends, service providers, and strangers.

That phone in your pocket is poised to teach itself how to work better, based upon how you use it, which applications you run, and how you use it to communicate with others.

A patent granted to Google last week explores different ways that parts and pieces of your phone can communicate with each other to remember settings in different contexts, to re-rank information based upon location and time and place, under a mobile machine learning system.

Imagine, for instance, landing at San Francisco International Airport to visit your brother. As you step off the plane, your phone resets its location and displays time and weather information on its home page for San Francisco. You open your phone, and the number for your limo appears at the top, with your hotel next, and then your brother’s home number (it would show his work number if it were earlier in the day).

You had booked a room and limo online, added the trip to your calendar, sent a few emails, and made a phone call to your brother while planning the trip. Your phone recognized that you had arrived after you turned your phone back on, and moved (or re-ranked) phone numbers to the top of your contacts based upon your need for them.

The patent is:

[Native machine learning service for user adaptation on a mobile platform](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=8429103.PN.&OS=PN/8429103&RS=PN/8429103)
Inventors: Hrishikesh Aradhye, Wei Hua, and Ruei-sung Lin
Assignee: Google
United States Patent 8,429,103
Granted April 23, 2013
Filed: August 2, 2012

Abstract


> Disclosed are apparatus and methods for providing machine-learning services. A machine-learning service executing on a mobile platform can receive data related to a plurality of features.
>
> In some cases, the received data can include data related to features received from an application and data related to features received from the mobile platform. The machine-learning service can determine at least one feature based on the received data. The machine-learning service can generate an output by performing a machine-learning operation on at least one feature.
>
> The machine-learning operation can be selected from among an operation of ranking the at least one feature, an operation of classifying the at least one feature, an operation of predicting the at least one feature, and operation of clustering the at least one feature. The machine-learning service can send the output.

The patent provides a fairly deep look at features that might make up a machine learning system on a phone, from an Application Program Interface (API) that allows communication with software applications on your phone, to the changes to settings that you might make (changes in volume, selection of applications, how you listen to media, how images might be tagged, and more.)

For instance, you decide to take some pictures on your San Francisco trip and snap a few photos of your brother. The phone suggests some labels from the picture that includes your brother’s name, and your location, using facial recognition to understand the picture is of your brother and GPS to know where the picture was taken.

You turn on a song application, and your music player suggests a playlist based upon the estimated travel time to your hotel and your previous listening habits.
Some other example uses of the machine-learning service might include:

- Predicting duration of a mobile session before the mobile session starts, based on location, time, calendar entries, prior behavior, etc.
- Predicting a phone number to be dialed at the onset of utilizing a phone dialing application, based on location, time, calendar entries, prior behavior, etc.
- Predicting speaker and/or mute settings for the mobile platform, based on location, time, calendar entries, prior behavior, etc.
- Classifying locations based on their ability to use Wi-Fi and/or other communication networks.
- Generating example photo names and photo album names for a camera application utilizing the mobile platform.
- Many other examples are possible as well

The point behind such a learning system is to make phones (and their many apps) easier to use, more efficient for users, and enable people to save time and get the most of the applications that they have.


## Context Signals in a Mobile Machine Learning System

The patent tells us that a machine learning system from a smart phone might look at a lot of different types of signals when working to make it easier to use a phone. One area that plays a significant role is the context of situations. The patent included a list of examples of such signals:

- Current time,
- Current date,
- Current day of the week,
- Current month,
- Current season,
- A time of a future event or future user-context,
- A date of a future event or future user-based context,
- A day of the week of a future event or future context,
- A month of a future event or future user-context,
- A season of a future event or future user-based context,
- A time of a past event or past user-based context,
- A date of a past event or past user-based context,
- A day of the week of a past event or past user-based context,
- A month of a past event or past user-based context,
- A season of a past event or past user-based context, ambient temperature near the user (or near a monitoring device associated with a user),
- A current, future, and/or past weather forecast at or near a current location, possibly based on the location of the mobile platform,
- A current, future, and/or past weather forecast at or near a location of a planned event in which a user and/or a user’s friends plan to participate,
- A current, future, and/or past weather forecast at or near a location of a previous event in which a user and/or a user’s friends participated,
- Information on user’s calendar, such as information regarding events or statuses of a user or a user’s friends,
- Information accessible via a user’s social networking account, such as information relating a user’s status, statuses of a user’s friends in a social network group, a user’s relationship with the user’s friends, and/or communications between the user and the user’s friends,
- Noise level or any recognizable sounds detected by the mobile platform and/or a monitoring device,
- Items that are currently detected by the mobile platform and/or a monitoring device,
- Items that have been detected in the past by the monitoring device,
- Items that other devices associated with a monitoring device (e.g., a “trusted” monitoring device) are currently monitoring or have monitored in the past,
- Information derived from cross-referencing any two or more of: information on a user’s calendar, information available via a user’s social networking account, and/or other context signals or sources of context information,
- Health statistics or characterizations of a user’s current health (e.g., whether a user has a fever or whether a user just woke up from being asleep),
- A user’s recent context as determined from sensors on or near the user and/or other sources of context information (e.g., whether the user is walking, running, and/or jogging, among other possibilities),
- A current location of the user and/or the mobile platform,
- A past location of the user and/or the mobile platform, and
- A future location of the user and/or the mobile platform.


## Where from Here?

This is a long and very detailed patent (more than 70 pages when pasted into Word) from Google. I was tempted to try to summarize, and this is a summary of my summary. :) I’ve had a few posts planned from before I saw this patent, and thought that it would be a good introduction to what those posts are going to be about.

Machine learning for a phone isn’t search or SEO, but given that most people will be accessing search engines and online advertisements on their phones, and given the role of Google and Apple in both local search and mobile devices, it’s an area that people in SEO can’t ignore and expect to be able to provide SEO services in the future. And it can be argued (fairly easily) that the search itself is turning into a machine learning system, recommending pages for you based upon your context (language, time, day, season, location), your use of social networks, and personalization.

Google’s predictive search application, [Google Now](https://www.google.com/search/about/), will be bringing us information that we need before we even search for it. Predictive algorithms in use in areas like machine learning for mobile are going to be a part of that.

I broke down aspects of how Google Now works in terms of self-learning and predictive algorithms in the post, [Why Google’s Predictive Personal Assistant is better than Siri](https://www.webimax.com/blog/mobile-applications/googles-predictive-personal-assistant-better-than-siri).

That post didn’t cover aspects of how “machine learning” might take place in detail the way that this patent does, but they are different pieces of the same puzzle.

Google has made some recent acquisitions lately that may also play a big role in the evolution of how we gather information, and how search engines gather information as well. I’ll be covering those in some posts very soon.

Machine learning for mobile devices and the kinds of predictive algorithms they produce will have a profound impact upon local and organic search, upon sponsored advertisements, and upon how we use both phones and other wearable computing devices like Google Glass and smartwatches.
