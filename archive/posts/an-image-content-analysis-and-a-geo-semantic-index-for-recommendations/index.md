---
title: "An Image Content Analysis And A Geo-Semantic Index For Recommendations"
source_url: "https://www.seobythesea.com/2021/12/an-image-content-analysis-and-a-geo-semantic-index-for-recommendations/"
slug: "an-image-content-analysis-and-a-geo-semantic-index-for-recommendations"
date_published: "2021-12-28T06:41:06+00:00"
date_modified: "2022-01-03T02:22:08+00:00"
author: "Bill Slawski"
---

## This Patent Uses A Image Content Analysis With A Geo-Semantic Index To Build Search Recommendations

It’s interesting seeing Google combining Google Maps with a better understanding of the Semantic Composition of areas within that map, analyzing images from sources such as Streetview. This patent reminded me of another one recently granted to Google, which I wrote about in August in the post, [Locally Prominent Semantic Features](https://www.seobythesea.com/2021/08/locally-prominent-semantic-features/).

Another patent I wrote about recently that worked on analyzing images from places such as streetview looked for information about different brands in different locations. So along with this patent, Google pays more attention to what it is finding using information about different locations. I wrote about that patent in the post
[Detecting Brand Penetration Over Geographic Locations](https://gofishdigital.com/blog/detecting-brand-penetration-over-geographic-locations/).

Searchers often look for locations to accommodate specific human activities. Typical search queries usually fail to yield valid results when searching for nearby places with certain facilities and physical attributes.

For example, a searcher may use a mapping application to view a map of an area and attempt to determine locations for a particular activity or search for labeled elements that may state the availability of the physical activity.

Those search techniques are cumbersome and may yield inconsistent or incorrect results. For example, facilities and attributes may become unmapped and too many or prone to change. Thus, improved systems for map searching to identify locations associated with activities are needed (the purpose behind this patent).


## Advantages of This Image Content Analysis Patent Include

- Obtaining a vocabulary of image features associated with searcher activities
- Receiving image content analysis on the collection of imagery based on the vocabulary of image feature types
- Generating an activity score for location cells in a geo-semantic index based on the vocabulary of image feature types
- Populating the geo-semantic index of location cells including data indicative of at least one activity score for each location cell
- Providing the geo-semantic index of location cells for use in generating location recommendations in response to a query

The Image Content Analysis Patent is at:

[Map Search Recommendation System Based on Image Content Analysis Driven Geo-Semantic Index](https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2020131138)
Inventors Yan Mayster, Brian Daniel Shucker
Application Number 17251399
File Date: July 1, 2019
Publication Number 20210248180
Publication Date August 12, 2021
Applicants Google LLC

Abstract


> The patent provides systems and methods that enable map search recommendations based on a geo-semantic index developed using image content analysis.
>
> In one example, a computer-implemented method can include obtaining, a vocabulary of image feature types associated with searcher activities.
>
> The process can include receiving a collection of imagery.
>
> The method can include performing image content analysis on the collection of imagery based on the vocabulary of image feature types.
>
> The process can include generating at least one activity score for each of a plurality of location cells in a geo-semantic index based at least in part on the vocabulary of image feature types.
>
> The method can include populating the geo-semantic index of location cells, the geo-semantic index of location cells, including data indicative of at least one activity score for each location cell.
>
> The method can include providing the geo-semantic index of location cells to generate location recommendations in response to a query.


## Systems And Methods To Enable Map Search Recommendations Based On A Geo-Semantic Index Developed Using Image Content Analysis

The patent can help create a geo-semantic index of locations identifying features associated with searcher activities. Such a geo-semantic index provides map search recommendations, including geographic areas that accommodate particular searcher activities.

A searcher may want to search for nearby locations that can accommodate a particular activity. Such activities can include:

- Nearby places that are kid-friendly
- Playgrounds with shady areas
- Places where one can sit and read

A geo-semantic index of locations, including rich semantic contextual information for each area, can become constructed based on image content analysis. This index can get created by looking at street-level imagery and identifying features associated with activities (a reason for Streetviews Cars.)

The geo-semantic index can then identify location cells within some geographic areas, such as a fixed radius of the searcher location. The desired activity gets based on location cell activity scores. The identified sites can get shown to the searcher as query result recommendations, such as mapped locations and a list of places. The location recommendations can include descriptions of the sites based on the activity and features associated with the areas.


## Answering Searcher Queries For Locations With Requested Features

**Thus, the systems and methods of the patent can provide for answering searcher queries for locations with requested features and points that can accommodate specific activities more fully and van guide the searcher to such places.**

A computer can ease the construction and periodic updating of a geo-semantic index of locations, such as on a grid of location cells. It may have rich semantic contextual information for each site generated using an image content analysis engine. Image content analysis systems can recognize a wide array of semantic elements, such as on the order of tens of thousands of parts. Many of those parts refer to features and attributes of the physical and urban landscape.

Such image content analysis systems can process substantial image corpora periodically. The geo-semantic index can provide a semantic context map of the world using actual knowledge of physical places deduced from collected imagery and ease search recommendations for businesses that can support desired activities and suggestions within a particular area.

A computer can provide for cataloging a vocabulary of known feature and attribute types (e.g., from an image content analysis lexicon, etc.) along with the searcher activities that they can accommodate (e.g., search Searchers and applications are likely to use to get interested in).

For example, such feature vocabulary could include “bench” for reading; “alley” for walking; “loading zone” or “parking meter” for a passenger pick-up or parking; “statue,” “fountain,” or “boutique” for meet-ups. The feature vocabulary can have a many-to-many relationship between activities and vocabulary terms. The feature vocabulary can include verb attribute terms besides physical features, for example, identifying people reading in imagery.


## Imagery Collections Used in Image Content Analysis

The computer can use imagery collections (e.g., street-level imagery, aerial imagery, etc.), for example, from an updated imagery corpus, publicly available imagery, searcher-generated imagery. The computer can perform image content analysis on the obtained imagery to identify feature type terms from the generated vocabulary. The computer can populate and update a geo-semantic index of location cells associated with the imagery (e.g., on a grid of location cells mapped to a geographic area).

The geo-semantic index may also include data about collection times for the imagery having the identified features. Based on searcher feedback, the index can get updated for matching features to activities, such as manual updates from human operators, based on searcher feedback. The image content analysis may include filtering out specific image data, such as features identified in private and restricted areas.

For every activity supported by the vocabulary, the computer can generate a weighted activity score for each location cell based at least in part on the amount, diversity, and recency of the semantic terms corresponding to the activities that get associated with the location cell. The activity scores can get generated based on metric definitions provided by a client application associated with that activity. For example, many searcher applications get focused on specific human activities, which can get supported by search recommendations using such a geo-semantic index as described herein.

Some of the activities in the geo-semantic index and vocabulary may become defined based on the needs of a specific searcher application that describes the action and the metric for the activity score. The activity scoring can differ based on the type of activity, the type of application, and the elements essential to the action. The generation of such activity scores, along with the repeated refresh of information provided through the image content analysis from a large imagery corpus (e.g., street-level imagery corpus, etc.), can enable the functionality of the geo-semantic index in providing more comprehensive recommendations to Searchers based on desired activities.


## A Query From A Searcher About Nearby Locations That Accommodate A Searcher Activity

A computer can get a query f, such as within a fixed radius of the search area indicated by the searcher, or around the searcher’s current location. It would provide those locations that match the desired activity as search recommendations. The computer can generate text for each site based on features associated with the area. Such reports, based on natural language processing, are curated by human operators. These location descriptions are provided to the searcher as part of the location recommendations to assist the searcher in selecting and finding the desired location.

For example, a searcher query may get submitted to the computer, such as “Find a place where I can walk and enjoy some shade.” The computer can screen the query submission for any known activity words associated with the vocabulary. For example, the system could identify “walk” and “enjoy shade” as activity terms in the language. The computer can analyze the index to identify location cells that match these activities based on specific vocabulary terms in the cells. Thus, the specified cell locations may have among their defining features phrases such as “alley,” “trees,” “sidewalk,” “gravel path,” and other similar words. The computer can return the identified locations as recommendations to the searcher, for example, based on the activity scores associated with the determined location cells.

A geo-semantic index can get used to providing recommendations of activities within a particular geographic area as opposed to requests for locations to accommodate a specific action. For example, rather than answering a query of “Where can I do ,” the computer can use the geo-semantic index to answer a request of “Please recommend activities that I can do within X meters of my location.”

In such cases, the same geo-semantic index can use the searcher’s current location and the semantic elements stored in the index (e.g., developed based on the image content analysis) to provide recommendations for certain activities supported by these elements within the specified geographic area.

In some cases, the searcher may not issue such activity queries via desktop search or voice assistant in some cases. Instead, the potential Searchers may also interact with a recommendation system through their use of various client applications (e.g., via RPC calls). Many applications get focused on specific human activities that the geo-semantic index can support. Some good examples can include applications for meet-ups, ride-hailing, sports and outdoor exercise, virtual reality gaming, dog walking, bird watching. Each application may need to have its activity terms defined and specific weights and metric functions with additional algorithmic filtering criteria (e.g., avoiding roads or residential buildings with a particular margin of distance, etc.).


## Knowledge Of Public Space To Power Its Activity-Based Feature Set To Searchers

The patent can provide an application that needs knowledge of public space to power its activity-based feature set to Searchers. In the case of passenger pick-ups, the computer may return locations with “loading zone” signs, parking meters, visible landmarks, and other terms that make a place easy to find for both the driver and the passenger and legally stop a vehicle at and pick up a person. In the example of meet-ups, the activity score of a location cell may factor in terms that make a place “walkable,” for instance, having elements such as “walk path” and various pedestrian facilities, “fountain,” “sculpture.”

A computer can get a vocabulary of image feature types associated with searcher activities, and the wording may include data that identifies the image feature types. A plurality of activity types can get associated with a respective subset of image feature types from the vocabulary of image feature types. The computer can get a collection of imagery, such as images. The computer can perform image content analysis on the collection of imagery based on the vocabulary of image feature types. For example, the computermay determine whether corresponding imagery for each of a plurality of location cells of a geo-semantic index includes feature types from the vocabulary of image feature types.


## Generating an Activity Score for A Location Cell

And the computer can generate at least one activity score for each of the location cells in the geo-semantic index based on the vocabulary of image feature types. For each location cell, the computer can determine an activity score for each activity type based at least in part on whether the location cell includes some respective subset of image feature types for such activity type. The computer can populate the geo-semantic index of location cells with data indicating at least one activity score for each location cell. The computercan provide the geo-semantic index of location cells to generate location recommendations in response to a query.

The systems described herein provide many technical effects and benefits. For instance, the systems and methods of the patent can provide improvements to search recommendation systems. The systems and methods can, for example, enable querying for nearby locations based on the presence of certain facilities and attributes that are likely yet unmapped and too many or prone to change. The latter, in particular, can make it infeasible to rely on fixed permanent records of such entities (e.g., searcher-reported) without the ability to refresh them. Thus, the systems and methods of the patent can provide for answering searcher queries for locations with requested features and attributes that can accommodate specific activities more comprehensively and guide the searcher to such places.

An improved search recommendation system and related searcher interface can get provided by associating locations with activities based on image content analysis. Image content analysis of imagery related to a place can get used to identifying the presence of features that correspond to a vocabulary of image features. The image features in the terminology can get associated with activities or activity types. As such, a geo-semantic index as described herein can include information related to activities at a particular location, where those activities get determined based on image content analysis. Such techniques may represent improvements over manual or other processes.


## Facilitating Search Recommendations Based On A Geo-Semantic Index Developed Using Image Content Analysis

The semantic system gets provided as one example only. Other computers that include different components can get used besides the design. The system can consist of searcher computers, such as a searcher computer, and remote computers, such as server computers that get coupled over networks, such as communication networks. Although only one searcher computer gets illustrated, many can connect to the server computer over the web.

The searcher computer could be a personal computing device (e.g., laptop or desktop), a mobile computing device (e.g., smartphone or tablet), a gaming console or controller, a wearable computing device, an embedded computing device, or any other type of computing device.

The searcher computer includes processors and memories. The processors can be any suitable processing devices, such as a processor core, a microprocessor, an ASIC, an FPGA, a controller, a microcontroller – of one processor or many processors that get connected. The memories can include non-transitory computer-readable storage mediums, such as RAM, ROM, EEPROM, EPROM, flash memory devices, magnetic disks, etc., and combinations thereof. The memories can store data and instructions executed by the processor to cause the searcher computer to perform operations, such as described herein. More particularly, as described herein, a searcher computer can generate query requests and receive response data from the server computer over the communication network.

That device can also include input/output interfacesInputut/output interfaces can include, for example, devices for receiving information from or providing information to a searcher, such as through a display device, touch screen, touchpad, mouse, data entry keys, an audio output device such as speakers, a microphone, camera, haptic feedback device, etc. The searcher computer can also include communication/network interfaces used to communicate with systems or devices, including designs or devices that get located from the searcher computer.

The computercan include a server computer. In instances where the server computer includes many devices, such servers can operate according to sequential computing architectures, parallel computing architectures, or combinations.


## The Geographic Information System

The system can host a geographic information system, such as a geographic information system associated with a mapping service. The geographic information system (GIS) can pue a mapping application, a virtual globe application, or any other suitable GIS.

The GIS can provide archiving, retrieving, and manipulating geospatial data indexed and stored according to geographic coordinates. These coordinates include latitude, longitude, and altitude associated with the geospatial data. The GIS combines satellite imagery, photographs, maps, models, and other geographic data, and Internet search capability. This combining enables a searcher to view the planet, such as map data associated with a plurality of geographic areas, and related geographic information, such as locales like islands and cities, points of interest such as local restaurants, hospitals, parks, hotels, and schools. The GIS can further allow a searcher to conduct local searches, get travel directions to a location or between two locations, or otherwise retrieve map data for a selected region.

Results can become displayed in a two-dimensional or three-dimensional representation of the area of interest. The searcher can pan, tilt, and rotate the view to see three-dimensional terrain and buildings.

The GIS can provide search results and, recommendations, in response to a searcher query. These results can become based on a geo-semantic index as described herein. For example, GIS can include or otherwise get provided access to a geo-semantic index, such as geo-semantic index, which consists of semantic context associated with a plurality of location cells, such as features, attributes, activities, etc. associated with each location cell. The geo-semantic index can get populated and updated based on image content analysis, manual entry.

According to an aspect of the patent, the server computer can include an image content analysis engine that can ease the implementation of embodiments of the patent. For example, the server computer can get data comprising a collection of imagery, such as street-level imagery collected periodically.


## The Image Content Analysis Engine

The image content analysis engine can get tasked to process obtained imagery periodically to recognize semantic elements which refer to features and attributes of the physical landscape, for example, associated with human activities uncataloged in a vocabulary of feature types as described herein.

For instance, feature types may get associated with or indicative of physical objects and the physical landscape within the imagery, such as structures, infrastructure, buildings, objects. For example, features may include “playground,” “park,” “alley,” “path,” “boutique,” “loading zone,” “parking meter,” “bench,” “fountain,” “statute,” “artwork,” “tree,” “bush.” Data indicative of features within imagery may include feature vectors indicative of aspects of the identified quality.


## The Geo-Semantic Index

According to an aspect of the patent, the server computercan include a geo-semantic index. The geo-semantic index can comprise an index of geographic locations, including rich semantic contextual information for each area constructed and maintained based on image content analysis provided by an image content analysis engine.

As an example, the geo-semantic index may include, for each location cell, data indicative of features identified in imagery associated with the location cell (e.g., bench, path, fountain, mural, parking meter, playground, etc.), data about collection time(s) (e.g., timestamps, etc.) of analyzed images having the identified features, activity scores for searcher activities associated with and accommodated by the specified elements in a location cell, textual descriptions based on the features and actions related to the location cell.

Obtained imagery associated with location cells in the geo-semantic index may get processed by an image content analysis system using an image content analysis engine. That engine can identify features in the image included within a feature vocabulary associated with the geo-semantic index, such as the playground, bench, fountain, parking meter, tree, path. The features identified within the imagery are related to a location cell that can become matched to searcher activities and accommodated by the elements, using the feature vocabulary associated with the geo-semantic index). Activity scores can get generated for location cells, for example, based on the type and numbers of features identified, the diversity of features identified, the recency of the element identified, such as time since the imagery, including the quality, got collected. They corresponded to activities associated with the location cell.


## Identifying Locations Within a Geographic Area

The geo-semantic index can get used to identifying locations within some geographic area that can accommodate the desired searcher activity (e.g., based on data obtained from a searcher computing devices associated with a search query, etc.). The server computing device can provide the identified location data, for example, to the searcher computing device, as part of query result recommendations (e.g., mapped locations, list of sites, etc.).

The computer can also include communication/network interfaces used to communicate with systems or devices, including designs or devices that get located from the server computer, such as searcher computing device, for example. The server compuercan also include input/output interfaces.

The network can become any communications network, such as a local area network (e.g., intranet), vast area network (e.g., Internet), or some combination. It can include any number of wired or wireless links. Communication over the web can get carried via any wired and wireless connection. They can use various communication protocols, such as TCP/IP, HTTP, SMTP, FTP), encodings or formats (e.g., HTML, XML, and protection schemes, such as VPN, secure HTTP, SSL.

A street-level image can get obtained as part of an imagery corpus and processed by an image content analysis system (e.g., image content analysis engine of FIG. 1) to identify features and attributes within the image. In particular, an image content analysis system may identify various parts within a vision to ease creating and updating a geo-semantic index as described herein.

The image may get associated with a location cell within the geo-semantic index. The featured identified may get used to updating data related to the location cell within the geo-semantic index.


## An Image Content Analysis System Identifies Features With Confidence Indicative of the Feature Within The Image

These features can include windows, doors, trees, plants, etc. (e.g., “window 1.00”, “door 0.93”, “tree 0.97”, etc.). The identified features may get compared to a vocabulary of features/characteristics associated with the geo-semantic index. Those features such as components/attribute types associated with searcher activity types maintained within the geo-semantic index) and used to facilitate updating of the geo-semantic index, like generating data related to a location cell, generating activity scores for a location cell associated with the image.

For example, obtained images can get processed by the image content analysis system to identify features located within the imagery associated with the vocabulary related to features and activities accommodated by the features of the geo-semantic index. The components identified within the imagery can get matched to searcher activities unadapted by the elements, such as the vocabulary related to the geo-semantic index.

Activity scores can get generated for each location cell in the geo-semantic index, for example, based on the:

- Type of features identified
- Number of features identified
- Diversity of features identified
- Recency of the features identified, such as the time since the imagery including when the feature got collected
- Like corresponding to the activities that get associated with the location cell


## Street Level Imagery Used In The Imagery Corpus

A street-level image can get obtained as part of an imagery corpus and processed by an image content analysis system, such as the image content analysis engine of FIG. 1, to identify features and attributes. In particular, an image content analysis system may identify elements within an image, such as specifying that the image is associated with characteristics of a public space such as a park. The image contains a water feature, a fountain, plants. The identified components may get associated with a geo-semantic index vocabulary, such as associating elements with activities accommodated by the features).

The image may get associated with a location cell within the geo-semantic index and the features identified may get used to generate and update data related to the location cell within the geo-semantic index. Such as developing/updating feature data related to a location cell, generating/ activity scores for a location cell associated with the image.

A street-level image can become part of an imagery corpus and get processed by an image content analysis system, such as an image content analysis engine. The image content analysis engine can identify features and attributes. In particular, an image content analysis system may identify various elements within an image, such as remembering that the image characteristics associated with characteristics of public space and playground, that the image contains features may become related to a location cell within the geo-semantic index and the components identified may generate and update data associated with the location cell within the geo-semantic index. The data may create an activity score for a location cell associated with the image.
Example Methods

The patent methods are not limited to the particularly illustrated order or arrangement. The various stages of the procedure can get omitted, rearranged, combined, and adapted in multiple ways without deviating from the scope of the patent. The method can get implemented by computing devices.

The method can include obtaining, for example, a computing device such as a server computer, a vocabulary of feature types (e.g., a terminology that associates features identified in imagery with activity types that can get accommodated by the elements). In particular, the computing device can ease cataloging a vocabulary of known quality and attribute types, for example, from an image content analysis lexicon, etc., along with searcher activity types that the element and attribute types can accommodate.


## A Vocabulary of Feature Types

For example, a vocabulary of feature types could include “bench” for reading; “alley” for walking; “loading zone” or “parking meter” for a passenger pick-up or parking; “statue,” “fountain,” or “boutique” for meet-ups. The feature vocabulary can have a many-to-many relationship between activities and feature terms.

The method can include obtaining a corpus of imagery, such as street-level imagery, aerial imagery, collected periodically by the computing device. For example, the computing device can get imagery collections from an updated imagery corpus, available imagery, searcher-generated imagery.

This process can include performing image content analysis on the imagery collected by the computing device based at least in part on the vocabulary of feature types. For instance, the computing device can perform image content analysis on the obtained imagery to identify feature type terms from the generated vocabulary (e.g., identify semantic elements that refer to qualities and characteristics of the physical landscape associated with searcher activities). Image content analysis may include using machine-learned models to identify features within images contained in the imagery collection.


## Processing Images Using the Image Content Analysis System

As an example, obtained imagery can get processed by the image content analysis system to identify features located within the imagery that gets associated with the vocabulary (e.g., language associating elements with activities accommodated by the features) of the geo-semantic index. The components identified within the imagery can get matched to searcher activities related to and adapted by the elements, such as the vocabulary related to the geo-semantic index.

The system can include populating and updating a geo-semantic index of location cells by the computing device based on the image content analysis of the imagery collection. In particular, images within the imagery collection can identify individual location cells mapped to a geographic area. Based on the features identified via the image content analysis for imagery associated with a location cell, the computing device can populate and update a geo-semantic index of the location cells, based in part on the vocabulary of feature types.

For example, the geo-semantic index may get populated based on data associated with feature types associated with each location cell, activity types related to the elements in each location cell. The geo-semantic index may also include data about collection times for the imagery having the identified features. The geo-semantic index’s image content analysis and population may filter out specific image data, such as features/details specified in private and restricted areas.


## Activity Scores For Each Location Cell

It can include generating activity scores for each location cell, such as associated with each activity that may get accommodated by features identified in the location cell. In particular, the computer can generate weighted activity scores for each location cell based at least in part on the amount, diversity, and recency of the feature types corresponding to the activities that get associated with the location cell.

The activity scores can get generated based on metric definitions provided by a client application associated with that activity. Some activities in the geo-semantic index and vocabulary may get defined based on a specific searcher’s needs that define the training and the metric for the activity score. The scoring can become different based on the type of activity, the type of application, amendments essential to the action.

The geo-semantic index may include, for each location cell, data indicative of features identified in imagery associated with the location cell (e.g., bench, path, fountain, mural, parking meter, playground, etc.), data about collection time(s) (e.g., timestamps, etc.) of analyzed images having the identified features, activity scores for searcher activities associated with and accommodated by the specified elements in a location cell, textual descriptions based on the features and actions related to the location cell.

The approach can include providing, by the computing device, the geo-semantic index for use in generating map recommendations, for example, in response to searcher queries received from a searcher computing device about desired activities, etc.

For example, the computer may get a query from a searcher about nearby locations that can accommodate a particular searcher activity. The computing device can analyze the geo-semantic index to identify high scoring location cells that are nearby (e.g., within a fixed radius of the search area indicated by the searcher, around the searcher current location, etc.) and provide data associated with those locations that match the desired activity as search recommendations.

According to aspects of the patent, the image content analysis and updating of a geo-semantic index can get performed based on a systematic collection of new imagery.


## Providing Search Recommendations Based On A Geo-Semantic Index

.

The process may involve generating a vocabulary of feature types by a server computing device. For example, the server computing device can ease constructing a language of known feature and attribute type languages language. For instance, the element and attribute types can accommodate from an image content analysis lexicon, along with searcher activity types that the element and attribute types can accommodate. A vocabulary of feature types could include “bench” for reading; “alley” for walking; “loading zone” or “parking meter” for a passenger pick-up or parking; “statue,” “fountain,” or “boutique” for meet-ups. The feature vocabulary can have a many-to-many relationship between activities and feature terms.

The image content analysis can include obtaining a corpus of imagery by the server computing device, such as street-level imagery and aerial imagery. For example, the computing device can get imagery collections from an updated imagery corpus, publicly available imagery, searcher-generated imagery.

The system can include performing, by the server computing device, image content analysis on the imagery corpus-based at least in part on the vocabulary of feature types. For instance, the server computing device can perform image content analysis on the obtained imagery to identify feature type terms from the generated vocabulary (e.g., identify semantic elements which refer to qualities and characteristics of the physical landscape associated with searcher activities). For example, the server computing device may determine whether corresponding imagery for each plurality of location cells of a geo-semantic index includes feature types from the vocabulary.

The patent also includes generating and updating a geo-semantic index of location cells by the server computing device based on the image content analysis of images within the imagery collection. In particular, the imagery collection’s embodiments can get identified with special location cells mapped to a geographic area. Based on the features identified via the image content analysis for each image associated with a location cell, the server computing device can populate and update a geo-semantic index of the location cells based on the vocabulary of feature types. The server computing device can also generate/update activity scores for each location cell of the geo-semantic index (e.g., associated with each activity that may get accommodated by features identified in the location cell).


## Obtaining Data Associated with a Query

The searcher computing device obtains data associated with a query (e.g., from a searcher, application, etc.) about nearby locations that can accommodate a particular searcher activity. For example, a searcher may submit a search query at the searcher computing device such as “Find a place where I can walk and enjoy some shade.”The method can include the searcher computing device providing data associated with the query to the server computing device.

The analysis may further include generating an activity score for each location cell. That analysis would generate at least one activity score for each location cell-based based on corresponding image feature types identified by the image content analysis. The method may include associating each activity type with a respective subset of image feature types from the vocabulary of image feature types. Performing the image content analysis on the collection of imagery could include determining whether corresponding imagery for each location cell includes feature types from the vocabulary of image feature types. It may also mean generating, at least one activity score for each location cell to determine an activity score for each activity type based on whether such location cell consists of the respective subset of image feature types for such activity type.

The approach may include a first location cell consisting of a first activity score associated with a first activity type and a second activity score for a second activity type. The first activity score gets based in part on identifying the first subset of feature types associated with the first location cell and the second activity score gets based in part on identifying the second subset of feature types related to the first location cell.


## Obtaining A Query For a Location Recommendation for a Desired Activity

The content analysis may further include:

- Obtaining a query for location recommendations for the desired activity
- Receiving, the geo-semantic index of location cells
- Determining, location cells within a geographic area associated with the question based on an activity score associated with the desired activity from the geo-semantic index of location cells
- Providing a recommendation including selected locations based on the determined location cells

The steps may further include filtering out feature types identified by the image content analysis in restricted geographic locations not populated in the geo-semantic index. The process may further include creating an activity score for each of the location cells in the geo-semantic index based on supported searcher activities consists of a weighted activity score for each location cell based at least in part on an amount, diversity, and recency of identified image feature types about activities associated with the location cell. The method may further include obtaining a vocabulary of image feature types associated with searcher activities includes cataloging a language of known feature types from an image content analysis lexicon and searcher activities that the feature types can accommodate. The method may further include the collection of imagery consisting of a rare collection of street-level imagery wherein.


## The Image Content Analysis Operations

- Performing image content analysis on the collection of imagery based on the vocabulary of image feature type
- Generating an activity score for each of a plurality of location cells in a geo-semantic index based at least in part on the vocabulary of image feature types
- Populating the geo-semantic index of location cells, the geo-semantic index of location cells includes data indicative of at least one activity score for each location cell
- Providing the geo-semantic index of location cells for use in generating location recommendations in response to a query
