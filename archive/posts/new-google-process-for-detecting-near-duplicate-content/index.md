---
title: "New Google Process for Detecting Near Duplicate Content"
source_url: "https://www.seobythesea.com/2008/02/new-google-process-for-detecting-near-duplicate-content/"
slug: "new-google-process-for-detecting-near-duplicate-content"
date_published: "2008-02-23T22:01:11+00:00"
date_modified: "2020-01-20T14:43:33+00:00"
author: "Bill Slawski"
---

*A new patent application on near duplicate content from Google explores using a combination of document similarity techniques to keep searchers from finding redundant content in search results.*

The Web makes it easy for words to be copied and spread from one page to another, and the same content may be found at more than one web site, regardless of whether its author intended it to be or not.

How do search engines cope with finding duplicate websites – the same words, the same content, at different places?

How might they recognize that the pages that they would want to show searchers in response to a search query contain the same information and only show one version so that the searchers don’t get buried with redundant information?

**Duplicate and Near-Duplicate Documents on the Web**

Sometimes a creator of content might show that content on more than one page on purpose, such as when:

1. They provide a “mirror” of a site – A site, or pages on a site may be copied at different domains to stop potential delays that happen when lots of people attempt to request the same document at the same time, or to keep the delivery of pages from being slow.
2. There are different formatted versions of the document – plain text or HTML or PDF or a separate printable version of the same document may be available for viewers to choose from, and special versions for phones and PDAs may also be available.
3. Sometimes content is shared with other sources, such as news wire articles, or blog posts that are published at both a group blog and an individual’s blog.

Sometimes content may be duplicated at other pages regardless of its creator’s intent, such as when:

1. Someone took some or all of the content for republication pursuant to fair use, or in violation of copyright.
2. The publishing system used shows the content at more than one address on the same site, so that it may appear to be unique based upon being located at a different address.
3. Content was aggregated or incorporated into another source on the Web, such as in a mashup or search results, or in some other form.

There are other instances where content is duplicated on more than one page, or where documents are very similar. It makes sense for a search engine to try not to show the same content over and over again to a searcher in a list of search results.

It’s a challenge that search engineers need to meet carefully, because there are instances where duplicated content is legitimately on the Web, and other times when it is duplicated without permission and regardless of its creator’s copyright.

**Recent Google Efforts towards Duplicate and Near Duplicate Content**

One of the more interesting papers from Google employees last year gave a very good overview of processes to detect duplicate and near duplicate processes on web pages – [Detecting Near Duplicates for Web Crawling](http://www2007.cpsc.ucalgary.ca/papers/paper215.pdf) (pdf).

In that paper, one of the processes described in detail was developed by Moses Charikar, a Princeton professor, who has worked for Google in the past. Moses Charikar also is listed as the inventor of a Google patent granted early last year, which discusses ways to detect similar content on the Web – [Methods and apparatus for estimating similarity](http://web.archive.org/web/20160120064128/http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,158,961.PN.&OS=PN/7,158,961&RS=PN/7,158,961)

This past week another Google patent application, from Monika H. Henzinger, explores how duplicate and near duplicate content might be detected at different web addresses. The patent application includes references to a number of different previous methods, including Dr. Charikar’s.

[Detecting duplicate and near-duplicate files](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220080044016%22.PGNR.&OS=DN/20080044016&RS=DN/20080044016)
Invented by Monika H. Henzinger
US Patent Application 20080044016
Published February 21, 2008
Filed August 4, 2006

The patent application explores how some different existing methods for detecting near duplicate content could be used together to try to identify near duplicates on the Web.

It provides citations to a number of documents on the Web that explore the topic of duplicate, and near duplicate content, including the following:

- [Finding similar files in a large file system](https://www.usenix.org/legacy/publications/library/proceedings/sf94/full_papers/manber.finding)
- [Scalable Document Fingerprinting](https://www.cs.cmu.edu/afs/cs/user/nch/www/koala/main.html)
- [Copy Detection Mechanisms for Digital Documents](http://web.archive.org/web/20161109041001/http://ilpubs.stanford.edu:8090/112/)
- [Syntactic Clustering of the Web](https://www.hpl.hp.com/techreports/Compaq-DEC/SRC-TN-1997-015.pdf)
- [Similarity Estimation Techniques from Rounding Algorithms](https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/CharikarEstim.pdf) (pdf)
- [Similarity search system with compact data structures](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20060101060.PGNR.&OS=dn/20060101060&RS=DN/20060101060)
- [Methods for identifying versioned and plagiarised documents](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.442.6430&rep=rep1&type=pdf)

From those documents, Dr. Henzinger tests and explores the documents from Andrei Z. Broder (Syntactic Clustering of the Web) and Moses Charikar (Similarity Estimation Techniques from Rounding Algorithms), and compares the approaches from each.

While there were differences in how effective these approaches were according to tests run, the conclusion about their effectiveness in the patent application was that “neither of the algorithms worked well for finding near-duplicate pairs on the same Website, though both achieved high precision for near-duplicate pairs on different Websites.”

We’re also told that:


> In view of the foregoing, it would be useful to provide improved techniques for finding near-duplicate documents. It would be useful if such techniques improved the precision of the Broder and Charikar algorithms. Finally, it would be useful if such techniques worked well for finding near-duplicate pairs on the same Website, as well as on different Websites.

**Using Multiple Similarity Techniques Together**

Techniques similar to those described in the documents from Broder and Charikar could possibly be combined to work in sequence, to improve the detection of similar documents. The patent filing provides a nice overview of how that combined process would work, and why it would be an improvement.

**Boilerplate, Similarity Techniques, and Fingerprints**

One reason why some of the near-duplicate document detection algorithms perform poorly on pairs of pages from the same site, according to Dr. Henzinger, is because of boilerplate text that appears on those pages. A boilerplate detection process might be used to remove or ignore that boilerplate content in near-duplicate document analysis. I wrote about other reasons why Google might look for boilerplate on pages recently in [Google Omits Needless Words (On Your Pages?)](https://www.seobythesea.com/2008/02/google-omits-needless-words-on-your-pages/)

This patent application explored the possibility of using the Broder and Charikar processes together, but it could use other, or additional document similarity techniques.

One approach used to “fingerprint” the content on pages is in creating “tokens” from the content as described in Rabin’s [Fingerprinting By Random Polynomials](http://www.xmailserver.org/rabin.pdf). We’re told that different fingerprinting approaches might also be used, such as those described in the Hoad and Zobel paper [Methods for identifying versioned and plagiarised documents](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.442.6430&rep=rep1&type=pdf).

**Conclusion**

I wrote about some of the problems around duplicate websites in [Duplicate Content Issues and Search Engines](https://www.seobythesea.com/2006/06/duplicate-content-issues-and-search-engines/), and the post includes links to a number of white papers and patent filings about duplicate content.

The process described in this new patent application doesn’t so much introduce a brand new method of identifying near duplicate content on pages as it comes up with an approach that takes advantage of other detection methods in a new way.

I didn’t go into a lot of specific details on how the different similarity processes work because those are detailed fairly deeply in the papers that I linked to, and the process described in this patent application doesn’t necessarily rely completely upon any one of those processes, but rather on the idea that multiple processes could be used together intelligently.
