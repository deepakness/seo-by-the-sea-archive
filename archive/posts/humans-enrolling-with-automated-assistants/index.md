---
title: "Humans Enrolling With Automated Assistants"
source_url: "https://www.seobythesea.com/2022/04/humans-enrolling-with-automated-assistants/"
slug: "humans-enrolling-with-automated-assistants"
date_published: "2022-04-22T10:25:57+00:00"
date_modified: "2022-04-22T10:30:25+00:00"
author: "Bill Slawski"
---

## How Automated Assistants Work Using Natural Language Input?

Humans may engage in human-to-computer dialogs with interactive software applications referred to herein as “automated assistants.”

For example, humans (who, when they interact with automated assistants, may be referred to as “users”) may provide commands, queries, and requests (collectively referred to herein as “queries”) using free form natural language input which may include vocal utterances converted into text and then processed and typed free form natural language input.

Different users may control and have permission to access additional resources via automated assistants. For example, a trusted user may have permission to cause the automated assistant to perform various actions that untrusted users may not necessarily be able to perform, such as controlling smart appliances (e.g., lights, thermostats, locks, etc.).

As another example, an automated assistant may have the ability to present different content to users. Some of this content, such as personal documents, calendar data, etc., may be protected, and automated assistants will only present it upon recognition/authentication of the requesting user.

Automated assistants may deny unrecognized or unauthorized users access to the same protected content. Other content may not necessarily be protected but may be inappropriate for some users.

For example, children may be prevented from asking automated assistants to initiate playback of content for which parental discretion is advised.


## How Automated Aassistants may Distinguish Between Individuals

Configuring existing automated assistants to distinguish between individuals requires manual interaction with a graphical user interface, e.g., turning on a “voice match” feature.

Consequently, other individuals who may lack sufficient knowledge or motivation to access such an interface may never enroll with the voice match feature.

Further, using voice matching technology (also referred to herein as “speaker recognition processing”) to distinguish between individuals may not be sufficiently reliable, especially in a noisy environment or in scenarios where multiple speakers have similar voices or accents.


## Invoking Automated Assistants

In many cases, before automated assistants can interpret and respond to a user’s request, it must first be “invoked,” e.g., using predefined oral invocation phrases that are often referred to as “hot words” or “wake words.”

Thus, many automated assistants operate in what will be referred to herein as a “limited hot word listening state” or “default listening state,” in which they are always “listening” to audio data sampled by a microphone for a limited (or finite, or “default”) set of hot words.

Any utterances captured in the audio data other than the default set of hot words are ignored.

Once automated assistants are invoked with the default set of hot words, it may operate in what will be referred to herein as a “speech recognition state” wherein, for at least some time interval after the invocation, automated assistants perform speech-to-text (“STT”) processing of audio data sampled by a microphone to generate textual input, which in turn is semantically processed to determine and fulfill a user’s intent.

Existing automated assistants typically can only be invoked using the default hot words, which are the same regardless of whether the requesting user is recognized (I hate when this happens during an online video conference call.)


## Improving Security Processes In Automated Assistants

Techniques are described herein to improve security processes in automated assistants by selective enrollment, wherein enrollment with automated assistants by a user unlocks features of automated assistants that were unavailable to the user before registration.

In particular, techniques are described for dialog-based enrollment of individual users for single- and multi-modal recognition by automated assistants and determining how to respond to a specific user’s request based on the particular user being enrolled and recognized.

Rather than requiring the operation of a graphical user interface for individual enrollment, dialog-based enrollment enables users to enroll themselves (or others) by way of a human-to-computer dialog with automated assistants.


## Placing Users In Different Trust Levels

Example implementations described herein improve security by placing users in different trust levels, wherein access to functions of automated assistants that might be considered sensitive, such as controlling appliances and accessing protected data, are restricted based on the trust level.

Techniques described herein may often (but not exclusively) be employed on what will be referred to herein as “assistant devices.”

Assistant devices are computing devices that are designed primarily to facilitate human-to-computer dialogs between users and automated assistants.

Many assistant devices take the form of standalone interactive speakers, which are becoming increasingly ubiquitous.

Standalone interactive speakers are often placed in heavily trafficked kitchens, living rooms, conference rooms, etc. They are frequently interacted with by multiple people (e.g., family members, co-workers, guests, etc.).


## disadvantages With Enrolling INdividuals With Automated Assistants

While it may be possible to enroll any individual who interacts with the assistant device, it may have various disadvantages.

Information that is used to recognize individuals (referred to herein as “distinguishing attributes of a user”), such as “voice profiles” and “visual profiles” described herein, may need to be stored locally on the assistant device.
For economical and technical reasons, assistant devices are resource-constrained (e.g., relatively little memory and processing power).


## Usage Of Assistant Device’s Kimited Memory

Thus, storing data indicative of distinguishing attributes of many users may require an excessive amount of the assistant device’s limited memory.

Moreover, suppose a particular individual’s interaction with the assistant device is likely to be minimal, such as a transient guest visiting a household in which the associate device is deployed. In that case, it may be wasteful to enroll that individual.


## Does A Guest Meet Automated Assistants Erollment Criteria?

Someone also may not wish to be enrolled, e.g., because they’d prefer that data indicative of their distinguishing attributes not be maintained on someone else’s assistant device.

Accordingly, before a previously unknown individual is enrolled with automated assistants using techniques described herein, the computerized assistant may determine whether the individual satisfies “automated assistants enrollment criteria.”

These criteria may include, for instance, the individual engaging in a threshold number of distinct human-to-computer dialog sessions with automated assistants on the same assistant device or a collaborative ecosystem of computing devices controlled by a “host” user (e.g., the person who owns/configures the ecosystem of devices, such as the owner, head of household, etc.).

Or, these criteria may include a threshold number of dialog turns occurring between the individual and automated assistants.


## To Meet The Automated Assistant Enrollment Criteria, Distinguishing Attributes Of The Individual Must Be Found

To determine whether the individual satisfies the automated assistant enrollment criteria, distinguishing attributes of the individual may be identified, e.g., based on signals generated by hardware sensors integral with or otherwise communicatively coupled with the assistant device.

These hardware sensors may include:

- Vision sensors (e.g., cameras, passive infrared sensors, etc.)
- Pressure sensors (e.g., microphone, ultrasonic sensors, etc.)
- Wireless receivers that can detect wireless signals (e.g., Wi-Fi, Bluetooth, ZigBee, Z-Wave, RFID, visual indicia) emitted by a mobile device carried by the individual

Based on the identified distinguishing attribute(s) of the individual, historical interaction data (e.g., a blog maintained by or on behalf of automated assistants) may be analyzed to identify prior human-to-computer dialog sessions in which the same individual exchanged dialog with the automated assistant (e.g., using the same assistant device or another computing device in the same coordinated ecosystem of computing devices).

Based on the analysis, if the automated assistant enrollment criteria are satisfied, automated assistants may initiate what will be referred to herein as a “human-to-computer dialog enrollment routine.”

During a human-to-computer dialog enrollment routine, automated assistants may provide natural language output that includes instructions for the user to perform various actions that facilitate recognition of the user in the future, e.g., by capturing and storing data indicative of distinguishing attributes the user.


## Using a Vision Sensor

For example, during a visual enrollment routine, automated assistants may instruct the user to reposition the user’s face to multiple different poses and capture, using a vision sensor, the user’s face in the numerous different poses.

Capturing multiple diverse and distinct images of the user’s face may enable the creation of a “visual profile” of the user.

This visual profile may be used to detect/recognize the user in the future, e.g., using facial recognition processing.

The visual profile of the user may include some combination of the multiple images and some combination of features extracted from the various pictures. The graphic profile may be “baked into” a machine learning classifier/model (e.g., a convolutional neural network). Future images may be applied as an input across such a classifier/model, and output generated based on the model may indicate the user’s identity.

In addition to or instead of visual enrollment, automated assistants configured with selected aspects of the present disclosure may trigger a voice enrollment routine.

Automated assistanta may instruct the user to speak various words and phrases during a voice enrollment routine. These words or phrases may be selected for their suitability for generating a “voice profile” of the user.


## Building A Voice Profile

The user’s utterances of these words/phrases may be used to build the voice profile. The voice profile may be useable, e.g., in conjunction with subsequently captured audio data, to perform speaker recognition.

Like visual profiles, voice profiles can take various forms, such as data indicative of user utterances, features extracted from reports of the user, parameters of a trained machine learning classifier/model, etc.


## Storing An Identity Of The User

Once the user enrolls, an identity of the user (e.g., a unique identifier, the user’s name, etc.) may be stored in databases (e.g., local to the assistant device or in remote cloud infrastructure) in association with data indicative of the distinguishing attributes of the user.

These distinguishing features may be stored as an “enrollment” embedding generated from vision/pressure sensor data applied as an input across a machine learning model, such as various types of neural networks.

These distinguishing features may be detected later, e.g., during subsequent human-to-computer dialog sessions between the user and automated assistants, and used to determine the user’s identity, authenticating the user to the computerized assistant.


## Vision Sensor Data And Pressure Sensor Data

Vision and pressure sensor data that capture a not-yet-recognized individual may be applied across the same machine learning model to generate a new embedding.

The new embedding may be compared to a previously-stored enrollment embedding (e.g., determining Euclidian distances between them) to determine whether the proximate individual’s embedding is sufficiently similar to one of the existing enrollment embeddings to match the relative individual to the previously enrolled individual reliably.

Enrollment by the user may unlock features of automated assistants that were unavailable to the user before registration.

These features may be available to the user upon recognition based on their enrollment.

Dynamic or custom hot words may be activated. When later recognized (e.g., using the speaker and facial recognition), the user can invoke automated assistants using these dynamic hot words, in addition to or instead of the default hot words that are available to unrecognized users.


## Other Features For Enrolled Users Of Automated Assistants

Additionally or other features of (or associated with) automated assistants may be unlocked to an enrolled user.

These may include, the ability to cause automated assistants to perform actions that might not otherwise be performable at the request of an unenrolled user, such as:

- Altering parameters of a smart appliance
- Accessing protected data
- Ordering goods amd services
- Making payments
- So forth

Recognition of an enrolled user may generate a confidence measure.

Users may be requested to enroll for both speech recognition and facial recognition.

Later, when such a user approaches an assistant device, it may be the case that hardware sensors of or associated with the associate device are unable to capture sufficient data to perform both speaker and facial recognition with a high degree of confidence, e.g., because the camera is malfunctioning, the computing device lacks a camera altogether, the user mumbles or speaks too softly to enable confident speaker recognition, etc.


## Limited Access To Various Features Of Automated Assistants Because Of Low Confidence

The user may nonetheless be recognized with a limited degree of confidence.

Such a user may be granted limited access to various features of automated assistants instead of the entire entry they might be granted if they were recognized with greater confidence.

Detected users may be placed in “levels” or “bins” of trust.

A first, or highest, level of trust may be assigned to a user for which facial and speaker recognition (or recognition based on a user-emitted wireless signal) generated a confidence measure that satisfies the first threshold.

The second level of trust may be assigned to a user. Facial and speaker recognition generated a confidence measure that satisfies a second threshold but not the first threshold.

The third level of trust may be assigned to a user for which facial and speaker recognition generated a confidence measure that satisfies a third threshold but not the first or second thresholds.

And so on, until the user is not recognized, they may be assigned the lowest level of trust (e.g., “guest”).

Each level of trust may unlock various automated assistants features for the user.

For example, a user assigned to the first level of trust (i.e., voice/speaker recognition generated a relatively high confidence measure) may gain unfettered access to functions of automated assistants that might be considered sensitive, such as controlling appliances and accessing protected data.

By contrast, a user assigned to the lowest level of trust may be considered a “guest” and may be denied access altogether or only allowed access to features of automated assistants that are considered non-sensitive (e.g., weather forecast, sports scores, movies schedules, etc.).

A method performed by processors based on levels of trust is provided that includes:

- Executing automated assistants at least in part on computing devices
- Processing sensor signals generated by hardware sensors integral with the computing devices
- Based on the processing, identifying distinguishing attributes of a user within range of the hardware sensors
- Based on the distinguishing attributes, analyzing historical interaction data to identify prior human-to-computer dialog sessions in which the user exchanged dialog with automated assistants using the computing devices
- Based on the identified prior human-to-computer dialog sessions
- Determining that the user satisfies automated assistants enrollment criterion
- Determining that the user satisfies automated assistants enrollment criterion
- Engaging in a human-to-computer dialog enrollment routine in which the user is solicited to enroll with automated assistants
- Storing an identity of the user in databases in association with data indicative of the distinguishing attributes of the user
- Unlocks features of automated assistants that were unavailable to the user before enrollment

The hardware sensors may include a vision sensor, and the distinguishing attributes may consist of a visual profile of the user.

The visual profile of the user may be usable in conjunction with sensor signals generated by the vision sensor or another vision sensor to identify the user using facial recognition processing.

The hardware sensors may include a microphone, and the distinguishing attributes may consist of a user’s voice profile.

The user’s voice profile may be usable in conjunction with a sensor signal generated by the microphone or another microphone to identify the user using speaker recognition processing.

The distinguishing attributes may include a signal emitted by a mobile device carried by the user.

The unlocked features may include activation of hot words used to invoke automated assistants.

The unlocked features may include responsive actions performable by automated assistants.

The unlocked features may include access to protected content.

Automated assistants enrollment criterion may include a threshold number of human-to-computer dialog sessions between the user and the computing device’s robotic assistant.

Automated assistants enrollment criterion may include a threshold number of dialog turns in human-to-computer dialog sessions between the user and automated assistants using the computing devices.

The human-to-computer dialog routine may include:

- Instructing the user to reposition the user’s face to multiple poses
- Capturing, using a vision sensor, the user’s face in the multiple poses

This patent on Enrollment with Automated Assistants can be found at:

[Selective enrollment with an automated assistant](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=11,289,100.PN.&OS=PN/11,289,100&RS=PN/11,289,100)
Inventors: Diego Melendo Casado
Assignee: GOOGLE LLC
US Patent: 11,289,100
Granted: March 29, 2022
Filed: October 17, 2018

Abstract


> Techniques are described herein for dialog-based enrollment of individual users for single- amd multi-modal recognition by an automated assistant and determining how to respond to a particular user’s request based on the specific user being enrolled and recognized.
>
> Rather than requiring the operation of a graphical user interface for individual enrollment, dialog-based enrollment enables users to enroll themselves (or others) by way of a human-to-computer dialog with the automated assistant.
