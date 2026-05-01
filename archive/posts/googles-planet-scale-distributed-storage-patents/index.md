---
title: "Google's Planet Scale Distributed Storage Patents"
source_url: "https://www.seobythesea.com/2011/08/googles-planet-scale-distributed-storage-patents/"
slug: "googles-planet-scale-distributed-storage-patents"
date_published: "2011-08-14T15:27:00+00:00"
date_modified: "2022-01-07T13:01:34+00:00"
author: "Bill Slawski"
---

This past February, Google filed for distributed storage patents that describe aspects of how it might share information from one data center to another, and some of the challenges that entail. Google’s Yonatan Zunger, who revealed on his blog that over the past few months that he was the [chief architect for Google’s social systems](https://yonatanzunger.com/2011/06/28/what-ive-really-been-up-to-the-google-project/), including Google Plus, is one of the inventors listed on a number of the distributed storage patents.

Just how are the nuts and bolts of Google’s data architecture pieced together, from its Web index to storing emails and photos, from user profiles and posts and responses in Google Plus to maps and photos and Streetview images in Google Maps and Google Earth? Google has several data centers around the globe. How does the search giant efficiently move data from one data center to another? How does it back up the files and indexes that it uses? Where do all the user data go that Google collects when people search and browse the Web?

Google has shared some information about how they store and access data over the years in papers and articles like:

- 1998 – [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html)
- 2003 – [The Google File System](https://www.cs.rochester.edu/meetings/sosp2003/papers/p125-ghemawat.pdf) (pdf)
- 2004 – [MapReduce: Simplified Data Processing on Large Clusters](http://static.googleusercontent.com/media/research.google.com/en/us/archive/mapreduce-osdi04.pdf) (pdf)
- 2005 – [Interpreting the Data: Parallel Analysis with Sawzall](http://static.googleusercontent.com/media/research.google.com/en/us/archive/sawzall-sciprog.pdf)
- 2006 – [Bigtable: A Distributed Storage System for Structured Data](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/bigtable-osdi06.pdf) (pdf)
- 2006 – [The Chubby lock service for loosely-coupled distributed systems](http://static.googleusercontent.com/media/research.google.com/en/us/archive/chubby-osdi06.pdf)
- 2009 – [Transactions Across Datacenters (and Other Weekend Projects)](https://snarfed.org/transactions_across_datacenters.html) (Video)
- 2009 – [Google Caffeine: What it really is](https://www.theregister.co.uk/2009/08/14/google_caffeine_truth/)
- 2009 – [Google File System II: Dawn of the Multiplying Master Nodes](https://www.theregister.co.uk/2009/08/12/google_file_system_part_deux/)
- 2010 – [Google Percolator – global search jolt sans MapReduce comedown](https://www.theregister.co.uk/2010/09/24/google_percolator/)
- 2010 – [Large-scale Incremental Processing Using Distributed Transactions and Notifications](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Peng.pdf)
- 2011 – [Announcing the High Replication Datastore for App Engine](http://googleappengine.blogspot.com/2011/01/announcing-high-replication-datastore.html)
- 2011 – [Megastore: Providing Scalable, Highly Available Storage for Interactive Services](http://cidrdb.org/cidr2011/Papers/CIDR11_Paper32.pdf) (pdf)

The patents provide some insights into how Google might manage to move large amounts of data from one location to another. For example, instead of sending a large amount of data from one data center to another, the system described in the patents might track changes to individual pieces of data as “deltas,” and those deltas are transmitted from one data center to another instead of sending all of the data.

If you’re interested in how Google may be attempting to handle data flow from one data center to another, you may want to spend some time with these patent filings.

[Method and System for Efficiently Replicating Data in Non-Relational Databases](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20110196827.PGNR.&OS=dn/20110196827&RS=DN/20110196827)
Invented by Yonatan Zunger
US Patent Application 20110196827
Published August 11, 2011
Filed: February 9, 2010

Abstract


> A method replicates data between instances of a distributed database. The method identifies at least two instances of the database at distinct geographic locations. The method tracks changes to the database by storing deltas.
>  Each delta has a row identifier that identifies the piece of data modified, a sequence identifier that specifies the order in which the deltas are applied to the data, and an instance identifier that specifies where the delta was created. The method determines which deltas to send using an egress map that specifies which combinations of row identifier and sequence identifier combinations have been acknowledged as received at other instances. The method builds a transmission matrix that identifies deltas that have not yet been acknowledged as received.
>
> The method then transmits deltas identified in the transmission matrix. After receiving an acknowledgment that transmitted deltas have been incorporated into databases at other instances, the method updates the egress map.

[Executing Replication Requests for Objects In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196836.PGNR.&OS=dn/20110196836&RS=DN/20110196836)
Invented by Alexander Kesselman
US Patent Application 20110196836
Published August 11, 2011
Filed: February 9, 2011

Abstract


> A system and method for executing replication requests for objects in a distributed database are provided. A plurality of replication requests for objects in a distributed storage system is received. The replication requests are partitioned into one or more replication queues. A respective replication queue includes replication requests that have a respective replication key. The respective replication key includes information related to at least a respective source storage device at which a respective object is located and a respective destination storage device to which the respective object is to be replicated.
>
> For each respective replication queue, the replication requests in the replication queue are sorted based on the priorities of the replication requests. Commands to execute the highest priority request are issued in each respective replication queue. When a respective replication request is completed, the respective replication request is deleted from the replication queue.

[Storing Replication Requests for Objects In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196834.PGNR.&OS=dn/20110196834&RS=DN/20110196834)
Invented by Alexander Kesselman;
US Patent Application 20110196834
Published August 11, 2011
Filed: February 9, 2011

Abstract


> A system and method for storing replication requests for objects in a distributed storage system are provided. A plurality of replication requests for objects stored on storage devices in a distributed storage system is received. Respective row keys are generated for respective replication requests in the plurality of replication requests based on the parameters of the respective replication requests.
>
> The respective row keys include respective globally-determined priorities for the respective replication requests that prioritize sorting the respective replication requests by priority. The respective replication requests are stored in respective records of a distributed database using the respective row keys. The respective records of the distributed database are distributed across a plurality of nodes of the distributed database.

[Method and System for Dynamically Replicating Data Within A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196828.PGNR.&OS=dn/20110196828&RS=DN/20110196828)
Invented by Alexandre Drobychev, Alexander Kesselman, Rebekah C. Vickrey, Frank C. Dachille, George Datuashvili
US Patent Application 20110196828
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A server computer at a first storage subsystem of a distributed storage system receives from a client a first client request for an object. If the object is not present in the first storage sub-system, the server computer identifies a second storage sub-system of the distributed storage system as having a replica of the requested object, the requested object including content and metadata.
>
> The server computer submits an object replication request for the requested object to the second storage sub-system. It independently receives the content and metadata of the requested object from the second storage sub-system. The server computer generates a new replica of the object at the first storage sub-system using the received metadata and content. It returns the metadata of the new replica of the object to the client.

[System and Method for Replicating Objects In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196873.PGNR.&OS=dn/20110196873&RS=DN/20110196873)
Invented by Alexander Kesselman
US Patent Application 20110196873
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method for inserting an object into a distributed database are provided. An object to be inserted into a priority queue is received, wherein the object includes a unique identifier and a priority. Next, an index for the object is generated. A row name for the object is then generated based on the index, the priority of the object, and the unique identifier of the object, wherein a lexicographical order of the row name for a higher priority object is smaller than the lexicographical order of the row name for a lower priority object. The object is then inserted into a row of a distributed database using the row name.

[System and Method for Managing Replicas of Objects In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196830.PGNR.&OS=dn/20110196830&RS=DN/20110196830)
Invented by Yonatan Zunger, Alexandre Drobychevm Alexander Kessleman, Rebekah C. Vickrey, Frank C.Dachille, and George Datuashvili
US Patent Application 20110196830
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method for generating replication requests for objects in a distributed storage system is provided. Replication requests for objects in a distributed storage system are generated based at least in part on replication policies for the objects and a current state of the distributed storage system, wherein a respective replication request for a respective object instructs a respective instance of the distributed storage system to replicate the respective object to at least partially satisfy a replication policy for the respective object, wherein a respective replication policy includes criteria specifying at least storage device types on which replicas of object are to be stored. At least a subset of the replication requests is then distributed to the respective instances of the distributed storage system for execution.

[Method and System for Managing Weakly Mutable Data In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196838.PGNR.&OS=dn/20110196838&RS=DN/20110196838)
Invented by Yonatan Zunger, Alexandre Drobychevm Alexander Kessleman, George Datuashvili, and Zia Syed
US Patent Application 20110196838
Published August 11, 2011
Filed: February 9, 2011

Abstract


> A method for managing multiple generations of an object within a distributed storage system is implemented at a computing device. The computing device receives metadata and content of the first generation of an object from a first client connected to the distributed storage system and stores the first generation’s metadata and content within a first storage sub-system. The computing device receives metadata and content of a second-generation object from a second client connected to the distributed storage system and stores the second generation’s metadata and content within a second storage sub-system. The computing device independently replicates the first generation’s metadata and content from the first storage subsystem to the second storage sub-system. It replicates the second generation’s metadata and content from the second storage sub-system to the first storage sub-system. Both storage sub-systems include a replica of the object’s first and second generations.

[Executing Prioritized Replication Requests for Objects In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196835.PGNR.&OS=dn/20110196835&RS=DN/20110196835)
Invented by Alexander Kesselman
US Patent Application 20110196835
Published August 11, 2011
Filed: February 9, 2011

Abstract


> A system and method for executing replication requests for objects in a distributed storage system is provided. A replication queue is identified from a plurality of replication queues corresponding to a replication key. The replication key includes information related to at least a source storage device in a distributed storage system at which objects are located and a destination storage device in the distributed storage system to which the objects are to be replicated. A distributed database is scanned using an identifier of the replication queue to produce a list of replication requests corresponding to the replication queue. The records of the distributed database are distributed across a plurality of nodes of the distributed database. The replication requests in the list of replication requests are executed in priority order. Replication requests are deleted from the distributed database only when the replication requests are complete.

[Method and System for Providing Efficient Access to a Tape Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196882.PGNR.&OS=dn/20110196882&RS=DN/20110196882'>Operating On Objects Stored In A Distributed Database</a><br /> Invented by Alexander Kesselman<br /> US Patent Application 20110196882<br /> Published August 11, 2011<br /> Filed: February 9, 2011</p><p>Abstract</p><blockquote><p>A system and method for operating on objects stored in a distributed database is provided. Rows of a distributed database that correspond to an index are identified. The identified rows are sorted lexicographically based on the row names of the identified rows. The sorted rows are ordered by priorities of objects corresponding to the sorted rows. The objects corresponding to the sorted rows are operated on in priority order. In some embodiments, the objects are replication requests for replicating data in a distributed storage system, and operating on the objects corresponding to the sorted rows in priority order includes executing the replication requests in priority order to replicate data in the distributed storage system.</p></blockquote><p><a href=)
Invented by Rebekah C. Vickrey, Frank C.Dachille, Stefan V. Gheorghita, and Yonatan Zunger
US Patent Application 20110196829
Published August 11, 2011
Filed: February 8, 2011

Abstract


> A method for asynchronously replicating data onto a tape medium is implemented at one or more server computers associated with a distributed storage system and connected to a tape storage system. Upon receiving the first request from a client for storing an object within the tape storage system, a server computer stores the object within a staging sub-system of the distributed storage system and provides a first response to the requesting client. If a predefined condition is met, the server computer transfers objects from the staging sub-system to the tape storage system. For each transferred object, the server computer adds a reference to the object to a tape management sub-system, identifies a corresponding parent object associated with the object and its metadata within a parent object management sub-system of the distributed storage system, and updates the parent object’s metadata to include the object’s location within the tape storage system.

[Storage of Data In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196900.PGNR.&OS=dn/20110196900&RS=DN/20110196900)
Invented by Alexandre Drobychev, Alexander Kesselman, Rebekah C. Vickrey, Frank C. Dachille, and George Datuashvili
US Patent Application 20110196900
Published August 11, 2011
Filed: February 8, 2011

Abstract


> A distributed storage system stores data for files. A first blob (binary large object) of data is received. The first blob is split into one or more first chunks of data. Content fingerprints for the first chunks of data are computed. The first chunks of data are stored in a chunk store while and their content fingerprints are stored in a store distinct from the chunk store. The second blob of data is received. The second blob is split into one or more second chunks of data. Content fingerprints for the second chunks of data are computed. Then for the second chunk of data whose content fingerprint matches a content fingerprint of the first chunk of data, a second reference to the corresponding first chunk of data with a matching content fingerprint is stored. Still, the second chunk of data is not stored.

[Storage of Data In A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196833.PGNR.&OS=dn/20110196833&RS=DN/20110196833)
Invented by Alexandre Drobychev, Alexander Kesselman, Rebekah C. Vickrey, Frank C. Dachille, and George Datuashvili
US Patent Application 20110196833
Published August 11, 2011
Filed: February 8, 2011

Abstract


> A distributed storage system has multiple instances. There is a plurality of local instances, and at least some of the local instances are at physically distinct geographic locations. Each local instance is configured to store data for a non-empty set of blobs in a plurality of data stores with distinct data store types. In addition, each local instance stores metadata for the respective set of blobs in a metadata store distinct from the data stores. There is also a plurality of global instances. Each global instance is configured to store data for zero or more blobs in zero or more data stores and store metadata for all blobs stored at any local or global instance. The system selects one global instance to run a replication module that replicates blobs between instances according to blob policies. Some systems also include dynamic replication based on user needs.

[Method and System For Uploading Data Into A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196822.PGNR.&OS=dn/20110196822&RS=DN/20110196822)
Invented by Yonatan Zunger, Alexander Kesselman, and Alexandre Drobychev
US Patent Application 20110196822
Published August 11, 2011
Filed: February 8, 2011

Abstract


> A method for uploading an object into a distributed storage system is implemented at a computing device. The computing device splits an object into one or more chunks and uploads the one or more chunks into the distributed storage system. For each uploaded chunk, the computing device receives a write token from the distributed storage system, inserts an entry into an extents table of the object for the chunk following the received write token and the chunk ID, chunk offset, and chunk size of the chunk, generates a digest of the extents table, the digest representing the one or more chunks that the client expects to be within the distributed storage system, and sends the digest of the extents table to the distributed storage system. The distributed storage system is configured to use the digest to determine whether it has each of the one or more client-expected chunks.

[System and Method for Determining the Age of Objects in the Presence of Unreliable Clocks](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196901.PGNR.&OS=dn/20110196901&RS=DN/20110196901)
Invented by Alexander Kesselman, Alexandre Drobychev, and Daniel J. Ford
US Patent Application 20110196901
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method for determining an age of an object is provided. The first index for a timestamp entry in a sequence of timestamps corresponding to a time at which an object was created is identified. At least one subsequence of timestamps from the sequence of timestamps having indexes for entries in the sequence of timestamps that are between the first index in the sequence of timestamps and the last index for the last timestamp entry in the sequence of timestamps is identified, wherein the at least one subsequence of timestamps conforms to a function of a time interval between storage of consecutive current timestamps reported by a clock of the computer system. Timestamps from the sequence of timestamps that are not included in the at least one subsequence of timestamps are removed. The age of the object is determined based on the at least one subsequence of timestamps.

[Location Assignment Daemon (LAD) For A Distributed Storage System](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196832.PGNR.&OS=dn/20110196832&RS=DN/20110196832)
Invented by Yonatan Zunger, Alexander Kesselman, Alexandre Drobychev, Rebekah C. Vickrey, Frank C. Dachille, and George Datuashvili
US Patent Application 20110196832
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method for generating replication requests for objects in a distributed storage system is provided. For a respective object in a distributed storage system, the following is performed. Replication policies for the object that have not been satisfied are determined. Replication requests are ranked for the object whose replication policies have not been satisfied based on the number of replicas of the object that need to be created to satisfy the object’s replication policies. Replication requests are generated for the object based at least in part on the replication policies for the object that have not been satisfied and on the current state of the distributed storage system. At least a subset of the replication requests for the objects in the distributed storage system are distributed to respective instances of the distributed storage system corresponding to the replication requests for execution.

[Location Assignment Daemon (LAD) Simulation System and Method](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196664.PGNR.&OS=dn/20110196664&RS=DN/20110196664)
Invented by Yonatan Zunger, Alexander Kesselman, Alexandre Drobychev, Rebekah C. Vickrey, Frank C. Dachille, and George Datuashvili
US Patent Application 20110196664
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method for simulating a state of a distributed storage system is provided. A distributed storage system and replication policies for the objects in the distributed storage system are obtained. Proposed modifications to the current state of the distributed storage system are received. The state of the distributed storage system is simulated over time based on the current state of the distributed storage system, the replication policies for the objects in the distributed storage system, and the proposed modifications to the current state of the distributed storage system. Then reports relating to the time evolution of the current state of the distributed storage system are generated based on the simulation.

[Pruning of Blob Replicas](http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1=20110196831.PGNR.&OS=dn/20110196831&RS=DN/20110196831)
Invented by Yonatan Zunger, Alexander Kesselman, Alexandre Drobychev, Rebekah C. Vickrey, Frank C. Dachille, and George Datuashvili
US Patent Application 20110196831
Published August 11, 2011
Filed: February 7, 2011

Abstract


> A system and method generating and distributing replica removal requests for objects in a distributed storage system is provided. Replica removal requests for objects in a distributed storage system are generated based at least partly on replication policies for the objects. A respective replica removal request instructs a respective instance of the distributed storage system to remove a respective replica of the respective object to at least partially satisfy replication policies for the respective object. Then the replica removal requests for the objects in the distributed storage system are distributed to respective instances of the distributed storage system corresponding to the replica removal requests for execution.
