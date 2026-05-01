---
title: "How Google Manages Large Amounts of Data?"
source_url: "https://www.seobythesea.com/2006/06/how-google-manages-large-amounts-of-data/"
slug: "how-google-manages-large-amounts-of-data"
date_published: "2006-06-16T12:31:08+00:00"
date_modified: "2020-07-06T09:53:43+00:00"
author: "Bill Slawski"
---

If you get excited over thoughts of how large amounts of data may flow from one part of a network to another, with multiple master and slave machines, you might find getting a glimpse of how Google might handle information interesting. A patent application published yesterday may provide some ideas on how Google shares terabytes of information across a very widely distributed network.

The inventor listed in this document is Arvind Jain, who is the Centre Head of Research and Development for Google in Bangalore. According to his profile at the 2005 International Conference on High-Performance Computing, held in December:


> At Google, he has worked on various infrastructure projects including the crawl and indexing system, distributed file replication system, and compression techniques for large scale storage systems.

Here’s the patent application:

[System and method for scalable data distribution](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060126201%22.PGNR.&OS=DN/20060126201&RS=DN/20060126201)
Invented by Arvind Jain
US Patent Application 20060126201
Published June 15, 2006
Filed: December 10, 2004

Abstract


> A system having a resource manager, a plurality of masters, and a plurality of slaves, interconnected by a communications network. To distribute data, a master determined that a destination slave of the plurality slaves requires data. The master then generates a list of slaves from which to transfer the data to the destination slave. The master transmits the list to the resource manager. The resource manager is configured to select a source slave from the list based on available system resources. Once a source is selected by the resource manager, the master receives an instruction from the resource manager to initiate a transfer of the data from the source slave to the destination slave. The master then transmits an instruction to commence the transfer.

While the document uses the phrase “datacenter” a few times, it’s uncertain if the datacenters being referred to are the ones that many who watch rankings of results look at to see if PageRank and Backlink updates are happening at Google.

Those data centers provide results to people in different geographical areas and may assist in returning results quickly by doing some load balancing through switching the location where searches are conducted and results are returned.
