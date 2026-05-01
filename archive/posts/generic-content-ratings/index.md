---
title: "Generic Content Ratings Based on Location"
source_url: "https://www.seobythesea.com/2022/05/generic-content-ratings/"
slug: "generic-content-ratings"
date_published: "2022-05-02T18:29:29+00:00"
date_modified: "2022-05-02T19:45:14+00:00"
author: "Bill Slawski"
---

The disclosed patent relates to ways of presenting content based on generic content ratings.

Searchers get interested in accessing content (e.g., television programs, movies, books, videos, music, news articles, Websites, etc.) from many different countries, regions, or other groups.

Each country, region, or group may use a different rating system used to state content that contains material (e.g., violence, pornography, etc.) or which may be unsuitable for particular ages. But, it can be challenging to understand the rating systems of different countries to filter content.

It is desirable to provide new methods, systems, and media for presenting content based on a generic rating.
—
Methods, systems, and media for presenting content based on generic content ratings get provided.

Presenting content based on generic content ratinga gets provided, the method comprising:

- Receiving search results corresponding to a search query
- Determining country-specific content ratings associated with the received search results
- Converting, using a hardware processor, the country-specific content ratings to generic content ratings associated with the search results
- Determining that at least one search result is to get blocked based on the generic content ratings associated with the search results and user-selected generic content ratings restriction; in response to determining that at least one search result is to get blocked
- Removing the at least one search result from the search results to create modified search results causing the modified search results to get presented; receiving a selection of content from the presented modified search results
- Determining country-specific content ratings associated with the selected content
- Converting the country-specific content ratings gets blocked based on the generic content ratings associated with the selected content and the user-selected generic content ratings restriction
- Determining that the selected content is not to get blocked, causing the selected content to Get presented

A system for presenting content based on generic content ratings gets provided, the system comprising:

- Program has hardware processor to: receive search results corresponding to a search query
- Determine country-specific content ratings associated with the received search results
- Convert the country-specific content ratings to generic content ratings associated with the search results
- Determine that at least one search result is to get blocked based on the generic content ratings associated with the search results and a user-selected generic content ratings restriction
- Determining that at least one search result is to get blocked
- Remove the at least one search result from the search results to create modified search results
- Cause the modified search results to get presented
- Receive a selection of content from the presented modified search results
- Determine a country-specific content ratings associated with the selected content
- Convert the country-specific content ratings to generic content ratingd associated with the selected content
- Determine that the selected content is not to get blocked based on the generic content ratings associated with the selected content and the user-selected generic content rating restriction
- Determining that the selected content is not to get blocked, cause the selected content to get presented

Under the disclosed subject matter when executed by a processor

- Cause the processor to perform a method for presenting content based on a generic content rating get provided , the method comprising: receiving search results corresponding to a search query; determining country-specific content
- Associate ratings with the received search results; converting the country-specific content ratings to generic content ratings associated with the search results; determining that at least one search result is to ge blocked based on the generic content ratings associated with the search results and a user-selected generic content rating restriction; in response to determining that at least one search result is to get blocked
- Removing the at least one search result from the search results to create modified search results
- Causing the modified search results to get presented
- Receiving a selection of content from the presented modified search results
- Determining a country-specific content rating associated with the selected content
- Converting the country-specific content rating to a generic content rating associated with the selected content
- Determining that the selected content is not to get blocked based on the generic content rating associated with the selected content and the user-selected generic content rating restriction
- Determining that the selected content is not to get blocked
- Causing the selected content to get presented

[Methods, systems, and media for presenting content based on a generic rating](https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=11,308,111.PN.&OS=PN/11,308,111&RS=PN/11,308,111)
rs: Joon-Hee Jeon;, Michael Kleinerman , Sun-Gi Hong, Sungsoo Lim, and Jae Won Seo
Assignee: Google LLC
US Patent: 11,308,111
Granted: April 19, 2022
Filed: March 30, 2020

Abstract


> Methods, systems, and media for presenting content based on a generic rating get provided.
>
> The method comprises:
>
> - Receiving search results; determining country-specific content ratings associated with the search results
> - Converting the country-specific content ratings to generic content ratings associated with the search results
> - Determining that at least one search result is to get blocked based on the generic content ratings and a user-selected generic content rating restriction; in response to determining that a search result is to get blocked
> - Removing the search result from the search results to create modified search results
> - Causing the modified search results to get presented
> - Receiving a selection of content from the presented search results
> - Determining a country-specific content rating associated with the selected content
> - Converting the country-specific content rating to a generic content rating
> - Determining that the selected content is not to get blocked based on the generic content rating and the user-selected generic content rating restriction
> - Causing the selected content to get presented


## Providing Ways To Present Content Based On A Generic Content Rating

The mechanisms described herein can receive content (e.g., search results, media content, books, Websites, and any other suitable content) from different countries, locations, and groups and convert a specific content rating associated with the content to a generic content rating.

The mechanisms can determine a user-selected generic content rating restriction. They can decide if the received content is to get blocked based on the user-selected generic content rating restriction and the generic content rating corresponding to the received content. In response to determining that the content is not stopped, the mechanisms can cause the content to get presented on a user device.

The specific content rating can get associated with a rating system used by a particular country and region. Additionally, the specific content rating can get associated with any suitable group (e.g., a specific association that produces movies, a creator of a particular channel on a video sharing service, and any other suitable group).

The user-selected generic content rating restriction can get indicated using a user interface presented by a user device other than the user device on which the content is to get delivered. In some such implementations, the user-selected generic content rating restriction can get associated with a particular user account. It can get used to block content accessed in association with the user account from any other user device.


## Presenting Content Based On A Generic Content Rating

Hardware can include servers from countries and locations, such as:

- United States content server
- European content server
- Korean content server
- Data server
- Communication network
- User devices
- United States content server

Media content to the user device via a communication network. Content provided by content servers can be any suitable content, such as video content, audio content, television programs, movies, cartoons, sound effects, audiobooks, streaming live content (e.g., a streaming radio show, a live concert, and any other suitable type of streaming live content), electronic books, search results and any other appropriate type of content.

Content can get created and uploaded to content servers by any suitable entity. Content delivered by content servers can get paid in association with a content rating, which can state appropriate ages for viewing the content and the presence of objectionable content. Any content servers can be omitted, and content servers corresponding to other suitable countries, locations, and groups can be included.

A data server can be suitable for storing user-selected generic content rating restrictions that indicate content that gets blocked and unblocked, converting a country-specific content rating to a generic content rating, and any other suitable functions. A data server can convert a country-specific content rating to a generic content rating to determine if certain content is blocked, as described below.

The data server can receive a user-selected generic content rating restriction (e.g., from a user interface as shown in and described below in connection with FIG. 4) and determine whether certain content is blocked based on the user-selected generic content rating restriction.

A communication network can be any suitable combination of wired and wireless networks. For example, a communication network can include any of the Internet, a mobile data network, a satellite network, a local area network, a vast area network, a telephone network, a cable television network, a WiFi network, a WiMax network, and any other suitable communication network.

The user device can include any device suitable for receiving and presenting content. The user device can include mobile devices, such as a mobile phone, a tablet computer, a laptop computer, a vehicle (e.g., a car, a boat, an airplane, or any other suitable vehicle) entertainment system, a portable media player, or any other eligible mobile device.

The user device can include non-mobile devices such as a desktop computer, a set-top box, a television, a streaming media player, a game console, or any other suitable non-mobile device.

Although the United States content server, European content server, Korean content server, and data server gets illustrated as separate devices, any of these devices can be combined into one device. Also, although only one United States content server, European content server, Korean content server, and data server to avoid over-complicating the figure, each device’s suitability can be used.

Although only one user device to avoid over-complicating the figure, any suitable number of these devices and any suitable types of these devices can get used.

United States content server, European content server, Korean content server, data server, and user device can get implemented using any suitable hardware. Machines can get implemented using any right general-purpose computer or particular purpose computer. For example, a server may get implemented using a special-purpose computer. Any such general-purpose computer can include any suitable hardware. FS, such hardware can consist of a hardware processor, memory and storage, an input device controller, an input device, display/audio drivers, display and audio output circuitry, communication interface(s), an antenna, and a bus.

The hardware processor can include any suitable hardware processor, such as a microprocessor, a microcontroller, digital signal processor(s), dedicated logic, and any other appropriate circuitry for controlling a general-purpose computer or a particular purpose computer.

Memory and storage 204 can be any suitable memory and storage for storing programs, data, media content, and any other relevant information. For example, memory and storage 204 can include random access memory, flash memory, hard disk storage, optical media, and suitable memory.

The input device controller can be any suitable circuitry for controlling and receiving input from input devices. For example, an input device controller can be circuitry for receiving information from a touch screen, from buttons, from a voice recognition circuit, from a microphone, from a camera, from an optical sensor, from an accelerometer, from a temperature sensor, from a near field sensor, and any other type of input device.

Display/audio drivers can be any suitable circuitry for controlling and driving output to display/audio output circuitries. For example, display/audio drivers 210 can be circuitry for driving an LCD, a speaker, an LED, or any other output device.

The communication interface(s) can be any suitable circuitry for interfacing with communication networks. For example, interface(s) can include network interface card circuitry, wireless communication circuitry, and any other appropriate type of communication network circuitry.

The antenna can be suitable for communicating with a network, and the antenna can get omitted when not needed.

The bus can be any suitable mechanism for communicating between two or more components.

Any other suitable components can get included in the hardware.


## Interfaces Used To Restrict Presentation Of Search Results Be Specifying Generic Content Ratings Applied To Content

Regardless of the country associated with the content, a Personal Identification Number (PIN) and a password can be requested before presenting any user interfaces. The user interfaces can get shown on a user device other than the device used to deliver search results and other content.

A user-selected generic content rating restriction can get received from a user interface presented on a user device and stored in association with a particular user account. The user-selected generic content rating restriction can then get applied to the content presented on other user devices associated with the user account. Information received from the user interfaces can get stored on the data server.

Receiving selections of countries from which country-specific content ratings get converted to generic content ratings gets shown under some implementations of the disclosed subject matter. As illustrated, the user interface can include a title and country options.

The title can be any title indicating the content of the user interface. The label can include relevant text, images, icons, graphics, animations, and auditable content.

Note the location of the Title in the user interface.

It gets shown as an example, and Title can get positioned at any suitable location, and the title can get omitted.

Country options can include countries and regions, such as countries. Although five countries get shown in-country options, any suitable number of countries (e.g., one, two, five, ten, twenty, fifty, and any other appropriate number) and regions can get included. Countries’ in-country options can get grouped in any timely manner, and countries’ in-country options can get grouped by continent.

Selection of a particular continent (e.g., North America) can cause countries located in that continent (e.g., Canada, United States, and Mexico) to get presented with in-country options.

Country options include content rating systems corresponding to a particular country and geographic region corresponding to a rating system created by any other suitable entity (e.g., a specific network, a specific channel of a video sharing service, and any other suitable entity).

Country options can additionally include selection inputs corresponding to each country’s in-country options, such as selection inputs. Selection inputs can include appropriate user interface controls, such as radio buttons, checkboxes, drop-down menus, and proper user interface controls.


## A User Interface For A User-Selected Generic Content Rating Restriction Applied To Content From Countries Selected In User Interface

As illustrated, the user interface can include a title and rating options.

The title can be any title indicating the content of the user interface. The label can include any relevant text, images, icons, graphics, animations, and any other suitable content. The location of the title in the user interface is an example, and the title can get positioned at any convenient location. The label can get omitted.

Rating options can include generic rating restrictions, such as generic rating restrictions. Although five rating restrictions are shown in rating options, any suitable number of rating restrictions (e.g., one, two, four, eight, and any other appropriate number) can be included.

The generic rating restrictions can correspond to any suitable content restriction criteria. The generic rating restrictions can indicate the earliest suggested age to view content within a particular rating and general age guidelines for viewing the content in a specific rating (e.g., “suitable for younger children,” “suitable for older children,” “suitable for teenagers,” and any other suitable general age guidelines).

Rating options can include an option for no content restrictions and set content restrictions.

Rating options can additionally include selection inputs corresponding to each content rating restriction in rating options, such as selection input. Selection inputs can include appropriate user interface controls, such as radio buttons, checkboxes, drop-down menus, and proper user interface controls.

Any relevant additional information can get presented in the user interface in any suitable manner. Where a content rating restriction indicates a general age guideline (such as “suitable for older children”), the user interface can display a specific age range (such as “children over ten years old”) to determine that the particular content rating restriction has gotten selected (such as clicked and tapped) and indicated (such as, with a cursor).

As another example, the user interface can indicate types of content (e.g., nudity, violence, and any other suitable types of content) that would get blocked if a particular content rating restriction were selected.


## A user interface for blocked and unblocked content Showing Country-Specific Content Ratings From A User-Selected Generic Rating Restriction Received By User Interface Gets Shown under The Subject Matter

The user interface can get presented in response to determining that a particular generic content rating has gotten selected using the user interface. As illustrated, the user interface can include a title and group of country-specific content ratings.

The title can be any title indicating the user interface. The label can tell a country corresponding to a group of country-specific content ratings. The label can include any relevant text, images, icons, graphics, animations, and any other suitable content. The title is an example and can be at any convenient location, and the label can get omitted.

A Group of country-specific content ratings can include any suitable content ratings specific to a particular country, such as country-specific content ratings. Although five country-specific content ratings get shown in the user interface, any appropriate number (e.g., one, two, five, ten, and any other suitable number) can be included. Furthermore, the country-specific content ratings can correspond to any appropriate type(s) of content, such as television programs, movies, books, audio programs, music, search results, and any other suitable type of content.

In some implementations, a user-selected generic content rating restriction can get indicated by a generic content rating indicator. A Group of country-specific content ratings can include restricted content indicators (such as indicators) that show whether content corresponding to each country-specific rating would get blocked based on the arrow’s user-selected generic content rating restriction.

An icon and text associated with the restricted content indicators can indicate whether the related content will get unblocked (as in hands) or blocked (as in indicators). Indicators can include any suitable text, icons, images, graphics, animations, and any other relevant content. Whether content corresponding to each country specific-rating would get blocked by selecting the generic content rating can be determined using any suitable technique(s).

Indicators can be selectable, allowing a particular country-specific content rating to get selected and deselected by a user, thereby overriding a determination made by the process.


## A user interface for receiving selections of more particular types of content that should get blocked or not blocked for a specific rating (e.g., “TV-G,” “TV-14,” and any other suitable content rating

The user interface can get presented in response to determining that a particular country-specific content rating from a group of country-specific content ratings has gotten selected (e.g., tapped and clicked). The detailed country-specific content rating that got set can get indicated in the user interface by a rating chosen indicator. As illustrated, the user interface can also include a title and a group of content types.

The Title can is any title indicating the content of the user interface and include any relevant text, images, icons, graphics, animations, and any other suitable content. The location of the title in the user interface gets shown as an example and can get positioned at any convenient location, and the title can get omitted.

Group of content types can include any types of objectionable content, such as content types corresponding to objectionable content such as coarse language, sexual content, and violence. Although three kinds of objectionable content are shown in a group of content types, any suitable number (e.g., one, five, ten, and any other appropriate number) can be included.

The types of objectionable content can include types related to religious values (e.g., content that portrays people of particular religious groups and content that gets considered offensive to certain religious groups), cultural values (e.g., content that depicts individual lifestyles), and any other types of content. The types of content included in the group of content types can have any suitable level of detail. As a specific example, types of content can consist of “fantasy violence,” “gun violence,” and other particular types of violence.

Particular types of objectionable content within the group of content types can get associated with selectable indicators, such as indicators. The selection of a specific hand can cause the related offensive kind of content to get blocked (as in the case of indicators) or unblocked (as in the case of needles), regardless of the associated content rating. A default value of hands can be set to either blocked or unblocked, for example, when the user interface gets presented.


## A process for presenting content based on a user-selected generic content rating restriction

Portions of the process can get implemented on the data servers and user devices.

The process can begin by receiving a search query. The search query can correspond to any suitable searching domain. The search query can compare to a search for a particular type of content (e.g., television programs, videos, music, movies, audiobooks, books, news articles, and any other suitable type of content). The search query can correspond to a search for Web sites.

The process can request search results based on the received query and receive the search results. The search query and any suitable files (e.g., audio files, video files, and other suitable files). The search results can indicate a country associated with a content item (e.g., a country associated with a server storing the content item, a country in which the content item got created and uploaded to a server holding the content item, and any other suitable country) indicated in the search results.

The search results can indicate content ratings (e.g., “TV-G,” “TV-MA,” and any other suitable content ratings) associated with content items shown in the search results. The content rating can correspond to a particular country and region (e.g., a country in which the content got created and uploaded to a server and any other suitable country). The search results can indicate the presence of particular types of objectionable content (e.g., violence, sexual content, etc.). The content rating can additionally specify the particular country associated with the content rating.

The process can convert the content ratings associated with the received search results to generic content ratings. For example, in instances where a country-specific content rating is a United States content rating of “TV-G,” the process can determine that the generic content rating is “suitable for all ages.” The process can use any suitable information and technique(s) to convert a country-specific content rating to a generic content rating. The process can use a table stored on a data server to convert a country-specific content rating to a generic content rating.

A mapping between a particular country-specific content rating to a generic content rating can get stored in any suitable manner (e.g., using Extensible Markup Language, or “XML,” tags, using a database, and any other suitable manner). For example, a data server can store an indicator of an age limit for a country-specific rating using XML tags. As a specific example, a particular country-specific rating and a corresponding generic age limit can get stored with an XML tag such as “.”

The process can determine a generic age limit corresponding to the country-specific rating (e.g., based on the “contentAgeHint” field). It can use the generic age limit to determine the corresponding generic rating. The process can query the data server by transmitting an indicator of the country-specific content rating (e.g., “TV-G” and any other content rating) to the data server. It can receive an indicator of a corresponding generic content rating (e.g., “suitable for all ages”).

The process can determine whether the received search results are blocked based on a user-selected generic content rating restriction (e.g., obtained by user interface). The process can determine the user-selected generic content rating restriction by querying the data server before deciding whether the received search results are to get blocked.

The process can determine whether the user-selected content rating restriction is more or less restrictive than the generic content rating associated with the search result(s). Suppose the user-selected generic content rating restriction indicates that only content suitable for younger children (e.g., children of any age) is shown. The process can determine that search results corresponding to content suitable for older children and teenagers (e.g., children over age ten) is to get blocked.

The process can allow search results corresponding to content that would get blocked based on the user-selected generic content rating restriction to get presented. For example, if it is determined that text and images in the search results do not include content, that would get blocked.

If it gets determined that a particular search result corresponds to a movie that would get blocked (e.g., due to containing nudity and violence) but that the text and images corresponding to the search result do not contain objectionable content, the process can determine that the search results are to get presented.

The process can determine that portions of a particular search result are to be modified before presenting the search result. The process can determine that an image associated with a specific search result should not be given based on the idea’s content rating. The process can determine that the search result is shown without the image.

Where the user-selected generic content rating restrictions include restrictions other than those that relate to age limits (e.g., rules based on the presence of violence, sexual content, and any other type of objectionable content, regulations based on religious and cultural values, and any different suitable kind of restrictions as received by user interface), the process can use any information that indicates whether the content associated with a received search result contains the particular types of objectionable content to determine whether the search result is to get blocked.

The process can determine whether the content contains the objectionable content based on a tag associated with the content, a description associated with the rating corresponding to the content, an analysis of text related to the search result, and any other suitable information.

It gets determined that no search results get removed; the process can cause the search results to get presented. The search results can get presented on any suitable user device. The search results can be shown reasonably, for example, on a Web site, in an application corresponding to a media content streaming service, and in any other suitable way.

If search results get removed, the process can remove the search results and then cause the modified group of search results to get presented.

The process can receive a selection of content from the search results. The selected content can correspond to any suitable type of content, such as media content (e.g., a television program, a movie, a video, music, an audiobook, and any other suitable type of media content), a book, a news article, a Web site, and any other appropriate type of content. The content selection can get received by a user device used to present the search results.

A sign of the selected content can get received in any suitable manner, based on a determination that a particular link, icon, and image in the search results have gotten clicked and tapped, based on a decision that a specific item of content has gotten indicated using a remote control, and based on any other suitable information.

The process can convert a country-specific content rating to a generic rating associated with the selected content. The process can use any suitable information and technique(s) to convert the country-specific content rating to a generic content rating by using a mapping stored on the data server. The process can determine the generic content rating by querying the data server by transmitting an indicator of the country-specific content rating (e.g., “TV-G” and any other content rating) to the data server and can receive an indicator of a corresponding generic content rating (e.g., “suitable for all ages”).

The process can determine whether the selected content gets blocked based on the determined generic content rating. The process can determine a user-selected generic content rating restriction (e.g., indicated using the user interface as shown in and described above) and can decide if the user-selected generic content rating restriction is more or less restrictive than the generic content rating with the selected content. Suppose it gets determined that the user-selected generic content rating restriction is more stringent than the generic content rating associated with the selected range. In that case, the process can determine that the selected content will be blocked.

The process can additionally and alternatively determine whether the selected content is blocked based on any other suitable information, such as a day of the week and a time of day. The process can determine that content corresponding to a particular generic content rating is to get blocked only on specific days of the week (e.g., Monday-Friday, and any other specific days of the week) and at particular times of the day (e.g., before 10 p.m., between 7 a.m. and 9 a.m., and any other particular times of the day). Days of the week and times of day during which content gets blocked can be specified using a user interface (not shown).

It gets determined that the selected content is not to get blocked. The process can cause the selected content to get presented. The process can cause the selected content to get delivered on any suitable user device and in any timely manner. The process can cause a selected video and television program to get presented on a mobile device, a television, a desktop computer, and any other suitable user device. The process can cause the selected content to get downloaded to a particular user device from one of the content servers.

It gets determined that the process can end if the selected content is blocked. The process can cause a user interface (not shown) to get presented that receives a PIN and a password, and after verifying the received PIN and password, it can cause the blocked content to get delivered.

It should be understood that at least some of the above-described blocks can be executed or performed in any order or sequence not limited to the order and sequence shown in and described in the figure. Can get executed or performed where appropriate or in parallel to reduce latency and processing times. Additionally, some of the above-described get omitted.

Any suitable computer-readable media can get used for storing instructions for performing the functions and processes herein. Computer-readable media can be transitory or non-transitory. For example, non-transitory computer-readable media can include media such as magnetic media (such as hard disks, floppy disks, and any other suitable magnetic media), optical media (such as compact discs, digital video discs,

Blu-ray discs and any other suitable optical media), semiconductor media (such as flash memory, electrically programmable read-only memory (EPROM), electrically erasable programmable read-only memory (EEPROM), and any other suitable semiconductor media), any appropriate media that is not fleeting or devoid of any semblance of permanence during transmission, and any relevant, tangible media.

As another example, transitory computer-readable media can include signals on networks, wires, conductors, optical fibers, circuits, any suitable media that is fleeting and devoid of any semblance of permanence during transmission, and any suitable medium intangible media.

In situations in which the systems described here collect personal information about users or make use of personal data, the users may control whether programs or features collect user information (e.g., information about a user’s social network, social actions or activities, profession, a user’s preferences, or a user’s current location).

Besides, specific data may get treated in ways before it gets stored or used so that identifiable information gets removed. A user’s identity may get treated so that no identifiable information can get determined for the user, or a user’s geographic location may get generalized where location information gets obtained (such as a city, ZIP code, or state level) so that a particular area of a user cannot get determined. Thus, the user may control how information gets collected about the user and used by a content server.

Although the invention has gotten described and illustrated in the preceding illustrative implementations, it gets understood that the present disclosure has gotten made only by way of example and that many changes in the details of the performance of the invention can get made without departing from the spirit and scope of the story, which gets limited only by the claims that follow. Features of the disclosed implementations can get combined and rearranged in various ways.
