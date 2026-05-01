---
title: "Patents involved in IBM vs Amazon"
source_url: "https://www.seobythesea.com/2006/10/patents-involved-in-ibm-vs-amazon/"
slug: "patents-involved-in-ibm-vs-amazon"
date_published: "2006-10-24T11:01:47+00:00"
date_modified: "2018-07-11T19:01:06+00:00"
author: "Bill Slawski"
---

Before I begin writing about this topic, I’d like to thank *Pandia Search Engine News*, which named *SEO by the Sea* as one of the Top 5 search engine marketing blogs. The selection places this blog in some very distinquished company. I’m not sure that I could come up with a top 5 or even a top 50 list of search marketing blogs because I find so much value in the voices of so many who share their thoughts and experiences and insights on a regular basis, which is reflected by the large number of blogs in the blogroll here.

Often, I write about new patent filings that have been published for the first time as patent applications or that have been granted. Sometimes, I’ll write about some that may have been acquired when one company purchases another, or when someone is hired by one of the major search engines and there is a large body of patents with their names listed as inventor or co-inventor.

Last night I noticed some reports of a legal dispute between two high profile companies over intellectual property possibly touching upon core aspects of the way the Web works, which I wanted to dig into more.

**IBM vs. Amazon**

IBM has [initiated a couple of law suits](https://www-03.ibm.com/press/us/en/pressrelease/20481.wss) in federal district courts in Texas against Amazon.com for patent infringement

The IBM press release announcing the litigation describes four years of unfruitful attempts to get Amazon to pay licensing fees over the use of processes patented by IBM, and names five specific patents amongst the ones involved.

What might this mean for other companies that are involved in ecommerce online? That’s difficult to gauge.

I decided that looking more closely at the patents listed in the press release might be helpful.

**IBM Patents**

This first patent was filed over 16 years ago, before the web was developed as a medium for ecommerce activities. It briefly describes an electronic catalog for public and private purchasers. Seems like most ecommerce sites that allow someone to place an order for specific items online could be covered under this document if it is applied broadly enough.

[System for ordering items using an electronic catalogue](https://patents.google.com/patent/US5319542A/en)
Invented by John E. King, Jr., and John R. Nilsen
Assigned to IBM
US Patent 5,319,542
Granted June 7, 1994
Filed: September 27, 1990

Abstract


> The disclosed system facilitates the user in electronically ordering items from suppliers.
>
> The system is comprised of an Electronic Catlogue and an Electronic Requisition facility. The Electronic Catalogue includes a Public Catalog and a Private Catalogue. The Public Catalog is stored on a publicly available database for access by customer/Requestors. The Private Catalogue is resident on a Customer’s computer system and may contain unique pricing data based on pricing agreements.
>
> The Electronic Requisition facility is used by the Customer/Requestors to electronically create purchase requisitions based upon the information provided in the catalogues and route the requisitions through the appropriate approval process within he enterprise.
>
> Requisitions are then processed through the customer’s procurement system and transmitted electronically as purchase orders to Suppliers.

The next patent describes a recommendation system based upon creating a “link profile” associated with a user and building associations with other pages based upon interests shown by selections of pages viewed by that user. It describes a simple neural network that can be used to learn what individuals are interested in, and to rank the ordering of recommendations shown to those people.

[System for adjusting hypertext links with weighed user goals and activities](http://patft1.uspto.gov/netacgi/nph-Parser?patentnumber=5446891)
Invented by Craig A. Kaplan, James R. Chen, David C. Fallside, Justine R. Fenwick, Mitchell D. Forcier, Gregory J. Wolff
Assigned to IBM
US Patent 5,446,891
Granted August 29, 1995
Filed: November 2, 1994

Abstract


> A smart hypermedia system that acquires user characteristics either directly or inferentially.
>
> Simple associative networks serve to model user profiles, including relationships between user goals and the hypermedia information nodes. Hypermedia links to other nodes are recommended by ranking a link list in an order that depends on one or more user profiles containing information relating to users’ goals and interests.
>
> Users can teach the system directly by rearranging the order of suggested links on the list. The system can also learn indirectly by observing how long and in what sequence the user views each hypermedia information node.
>
> User profiles can be combined to form group profiles and may be dynamically and continuously updated to form an adaptive system profile. The two system learning modes may be simultaneous or disjoint.

When someone is interacting with an application, advertisements may be shown to them based upon their interaction with that service, and other data, such as user demographics and geographic location. This patent describes such an interactive and dynamic process of presenting individualized ads. It’s interesting that this patent was granted almost 13 years after being filed.

[Method for presenting advertising in an interactive service](https://patents.google.com/patent/US7072849)
Invented by Robert Filepp, Alexander W. Bidwell, Francis C. Young, Allan M. Wolf, Duane Tiemann, Mel Bellar, Robert D. Cohen, James A. Galambos, Kenneth H. Appleman, and Sam Meo
Assigned to IBM
US Patent 7,072,849
Granted July 4, 2006
Filed: November 26, 1993

Abstract


> A method for presenting advertising in an interactive service provided on a computer network, the service featuring applications which include pre-created, interactive text/graphic sessions is described.
>
> The method features steps for presenting advertising concurrently with service applications at the user terminal configured as a reception system.
>
> In accordance with the method, the advertising is structured in a manner comparable to the service applications enabling the applications to be presented at a first portion of a display associated with the reception system and the advertising presented at a second portion.
>
> Further, steps are provided for storing and managing advertising at the user reception system so that advertising can be pre-fetched from the network and staged in anticipation of being called for presentation.
>
> This minimizes the potential for communication line interference between application and advertising traffic and makes the advertising available at the reception system so as not to delay presentation of the service applications.
>
> Yet further the method features steps for individualizing the advertising supplied to enhance potential user interest by providing advertising based on a characterization of the user as defined by the users interaction with the service, user demographics and geographical location. Yet additionally, advertising is provided with transactional facilities so that users can interact with it.

During and between user sessions, information about the users of a networked system and their interactions with that system needs to be accessible quickly so that it can inform the display of advertisements and recommendations. This patent covers a wide range of data management and storage.

[Method for storing data in an interactive computer network](http://patft1.uspto.gov/netacgi/nph-Parser?patentnumber=5442771)
Invented by Robert Filepp, Michael L. Gordon, Alexander W. Bidwell, Allan M. Wolf, Francis C., Young, Duane Tiemann, Kenneth H. Appleman, and Sam Meo
Originally Assigned to Prodigy Services Company
US Patent 5,442,771
Granted August 15, 1995
Filed: November 26, 1993

Abstract


> A method for storing data in an interactive computer network is described.
>
> In preferred form, the method features steps for establishing data stores of prescribed capacities within a network for delivering an interactive service. The stored data is used in presenting the applications that makeup the service.
>
> The method features steps for associating storage control parameters with the application data to be stored and supplying data to the respective stores in excess of their respective capacities.
>
> The method includes steps for retaining data at the stores based on the respective prescribed storage control parameters and the date usage experience at the respective stores.
>
> In preferred form, the method features steps for providing the data stores with a temporary cache for storing data during a data use session and a variable-content, permanent, file for retaining data between data use sessions.
>
> The method configures the cache from available RAM and a prescribed disk file, and the stage from a content-variable, permanent disk file. Data is retained at the cache and subsequently at the stage based on control parameters associated with the data identification, storage candidacy and version, as combined with a least-recently-used criterion.
>
> Accordingly, over multiple use sessions, the stage self-configures with data tailored to use experience. Also in the preferred form of the method described, the data is arranged as objects having a header including the storage control parameters.

This last patent looks at a way to present an interactive display of an application, with different sections of the display enabling a user to interact with different parts of the system. It reminds me of the dumb terminal displays and applications from the days before the World Wide Web, and references cited by the reviewer look like they focus upon the “X Windows System.”

[Method for presenting applications in an interactive service](http://patft1.uspto.gov/netacgi/nph-Parser?patentnumber=5796967)
Invented by Robert Filepp, Kenneth H. Appleman, Alexander W. Bidwell, Allan M. Wolf, James A. Galambos, Sam Meo
Assigned to IBM
US Patent 5,796,967
Granted August 18, 1998
Filed on November 26, 1993

Abstract


> A method for presenting applications in an interactive service featuring steps for generating screen displays of the service applications at the reception systems of the respective users.
>
> Steps are provided for generating the application displays as screens having a plurality of partitions, the partitions being constructed from reusable elements.
>
> In accord with the method, the screens include at least a first partition at which an application may be presented and a second, concurrently displayed partition including command functions for managing the display.
>
> The method further includes steps for providing command functions that facilitate random navigation to new applications with a variety of different procedures which the user can choose from.
>
> In (preferred) one form, the functions are presented as a command bar located at the bottom of the screen. Further, the method includes steps for opening and closing windows on the display to enable presentation of additional data relating to the presented applications.
>
> Still further, the method includes steps for providing additional partitions for concurrently displaying other applications, which may include advertising.

**Conclusion**

A number of these patents seem like they could be applied pretty broadly, especially the last one. Yet it seems to describe a paradigm of computing that is very different than that in place today. I can understand Amazon’s reluctance to negotiate a licensing agreement with IBM. It will be interesting to see how this develops.
