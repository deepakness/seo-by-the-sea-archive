---
title: "Google File System & Large Scale Machine Learning System Patents Granted"
source_url: "https://www.seobythesea.com/2007/05/google-file-system-large-scale-machine-learning-system-patents-granted/"
slug: "google-file-system-large-scale-machine-learning-system-patents-granted"
date_published: "2007-05-22T00:59:38+00:00"
date_modified: "2020-07-19T09:49:46+00:00"
author: "Bill Slawski"
---

If you enjoy some of the technical aspects of how search engines work, you might find these two Patents from Google interesting.

Google was granted a patent on their file system today. The best place to learn about the Google File System is probably the paper that Google had published about it – [The Google File System](https://www.cs.rochester.edu/meetings/sosp2003/papers/p125-ghemawat.pdf) (pdf), but the patent may provide some information not contained in the paper.

[Namespace locking scheme](https://patents.google.com/patent/US7222119B1/en)
Invented by Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung
Patent 7,222,119
Granted May 22, 2007
Assigned to Google
Filed: June 30, 2003

Abstract


> A system may perform a first operation within a file system in which directories and files are organized as nodes in a namespace tree. The system may associate a read-write lock with each of the nodes in the namespace tree. The system may acquire a first lock on a name of one or more directories involved in the first operation, acquire a second lock on an entire pathname involved in the first operation, determine whether the first lock or the second lock conflicts with third locks acquired by a second operation, and perform the first operation when the first lock or the second lock does not conflict with the third locks. The first, second, and third locks may include read-write locks.

The other Patent from Google on tells us some interesting information:


> One problem associated with existing classification systems has to do with the volume of training data that they are capable of handling. Existing classification systems can only efficiently handle small quantities of training data. They struggle to deal with large quantities of data, such as more than one hundred thousand features.

[Large scale machine learning systems and methods](https://patents.google.com/patent/US7222127B1/en)
Invented by Jeremy Bem, Georges R. Harik, Joshua L. Levenberg, Noam Shazeer, and Simon Tong
Assigned to Google
US Patent 7,222,127
Granted May 22, 2007
Filed: December 15, 2003

Abstract


> A system for generating a model is provided. The system generates, or selects, candidate conditions and generates, or otherwise obtains, statistics regarding the candidate conditions. The system also forms rules based, at least in part, on the statistics and the candidate conditions and selectively adds the rules to the model.
