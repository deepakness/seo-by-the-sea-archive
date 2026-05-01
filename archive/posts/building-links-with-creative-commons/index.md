---
title: "Building Links with Creative Commons"
source_url: "https://www.seobythesea.com/2006/10/building-links-with-creative-commons/"
slug: "building-links-with-creative-commons"
date_published: "2006-10-29T22:59:20+00:00"
date_modified: "2020-11-03T16:25:21+00:00"
author: "Bill Slawski"
---

One of the members of Cre8asite Forums has a couple of sites that he’s filled with images of the locations of his sites. He’s a talented photographer, in addition to a skilled webmaster, and the pictures he has on his site are terrific. He has also placed those images under licenses from Creative Commons.

Because of the licenses, he’s had people use images from his site on their non-commercial web sites, with links pointing back to his sites. He’s also had inquiries from people wanting to use his images in commercial works. Since the images are likely to be of interest to people who may want to find out more about what he has to offer, having links back to his site brings traffic to his pages from people who could become customers of his.

The beauty of Creative Commons licenses is that they inform people that they could use material created by other people under conditions expressed in the licenses. They don’t harm people’s rights under copyright law, but rather make communication about possible uses of those materials easier. The Creative Commons pages show how to use a license, and provide many examples.

**Google and Creative Commons**

On Thursday, October 26th, a team from Creative Commons came to speak at Google.

With Google’s acquisition of YouTube, it makes sense that they would learn more about copyright, and copyright licenses. Creative Commons came to visit to see if they could get some help from Google as well as sharing information about what the Creative Commons organization is doing. What might this mean to people who use Google?

The primary speaker was [Mike Linksvayer](https://gondwanaland.com/mlog/) (link is to his blog), who is the Chief Technical Officer from Creative Commons. His presentation is the subject of a Google Tech Talk – Creative Commons for Googlers. His main focus was on some of the technical aspects of Creative Commons licenses and metadata and being able to put information on pages so that it is easier to find Creative Commons licensed materials on the web.

**Non-Technical Information about Creative Commons**

Before Mike Linksvayer began talking about Metadata, he wanted to cover some non-technical aspects of what they do.

1. He began with a first semi-public showing of a new video from Creative Commons on copyright, and the value of a creative commons license which could allow others to easily share and distribute artistic works.

2. He noted that there were many ways to think about copyright and Creative Commons. One was to consider some of the GPL releases of software, and he asked if media was twenty years behind the software, and concepts of open-source software.

3. To further this analogy, the concept of reuse of code, could be expanded to content? Could there be a content license interoperability in the same way as a code license interoperability?

4. He also noted that there were several legal materials on the Creative Commons web site, such as a podcasting legal guide, discussion about the legal use of copyright. He also mentioned that Version 3.0 of licenses are being worked upon.

5. He also pointed out some “cool things” being worked upon at Creative Commons. For example, some Creative Commons materials were used in the loneligirl15 videos. Another example was of a Brazilian movie that was released simultaneously in theatres, and on the web under a CC license.

**Technical aspects of CC licenses**

In 2002, the focus of their efforts were to provide the following in their licenses:

1. Human readible code,
2. Lawyer readible code, and;
3. Machine readible code.

One thing that they were hoping for was for someone to develop a search engine that would look for materials licensed under Creative Commons.

No one was working on developing something like that, so in 2004, they started working on a prototype search engine that could find CC-licensed material. Their first one was slow. They then switched to [Nutch](http://nutch.apache.org/), to make a newer version.

In early 2005, Yahoo built [a search engine](http://web.archive.org/web/20070330043159/http://search.yahoo.com/cc/)that could find CC material. In late 2005, Google did the same, and as their [help section on Usage Rights](https://support.google.com/websearch/answer/29508?hl=en&rd=1) notes, that is incorporated into their [advanced search](https://www.google.com/advanced_search?hl=en).

The Yahoo and Google searches are available on a [Creative Commons search page](https://search.creativecommons.org/), and also includes a search of [Flickr](https://www.flickr.com/) and [blip.tv](https://disneyadsales.com/) (warning, audio starts on blip.tv automatically).

**Metadata infrastructure**

1. The original CC licenses included RDF, XML, and HTML comments

2. In looking for something more effective (and interoperable), they decided against making up their metadata instead of using something else out in the world.

3. There are issues with using comments as they had been, such as it:

- Being prone to spamming,
- May not get updated when pages change, and;
- It can be hard for people to learn and use.

4. Microformats have taken off in the last year, and they looked at those. They may be useful. But they have some limitations, too. One main one is that they are on a page level, rather than a smaller level of granularity, so they may not be helpful when images or videos on a page may not share the same license as the rest of the page.

5. They want information about metadata showing on the page so that it is easy for people to see and use, and so that it is flexible.

6. They started exploring something called RDFa. Creative Commons has some wiki pages on the subject – [RDFa](https://wiki.creativecommons.org/wiki/RDFa) Mike Linksvayer noted that there are some problems with it, such as being developed for XHTML 2, which no one uses. Examples at [http://rdfa.info/](http://rdfa.info/) (added 10/30/2006 – Mike did note in his presentation that RDFa is still very viable and usable in spite of the ties to XHTML 2. Thanks to Mike Birbeck for reinforcing that in the comments here.)

(Unfortunately, many of the slides being used for examples are difficult to read in the video. )

Ben Adida’s works on interoperativity and meta data is recommended at this point in the video. Interesting looking document: [Building Interoperable Metadata](http://assets.adida.net/presentations/semantic-2006-03-08.pdf) (pdf)

**Why talk with Google?**

1. The Creative Commons organization would like to get feedback on ideas involving metadata, and microformats that might be able to apply to images, videos, audio, and other objects on pages.

2. Embedded metadata doesn’t work well:

- Can’t be seen on a web page,
- Isn’t often used, and;
- can’t be trusted, because you don’t know who may add it.

The technical term for embedded metadata’s and its failings is that “it sucks.”

The best type of metadata is metadata that refers to a specific web page via a URL so that people can visit that web page, and learn more about it. Embedded metadata doesn’t.

3. Adobe is using some metadata built into their media that may be an improvement on embedded metadata.

**Creative Commons also Wants to Do Other Things with Metadata**

This is the part of the presentation that may be of the most interest to people who create works that may be issued under a license, and people who build and market web sites.

1. Metadata should also include attribution. (A way to encourage people to link to you.) A standard way to attribute with metadata, and with a link may have been the biggest mistake that CC made. The general feeling is that they should have included it

2. Other questions could be answered with improved metadata, such as:

- Where can I buy related media,
- where can I a commercial license
- Where can I make a donation
3. There are examples of commerce sites using Creative Commerce Licenses, and they would like to encourage more. Here are a couple:

- [Magnatune](http://magnatune.com/)

- Jamendo

- [ccmixer](http://ccmixter.org/)

4. They would also like to see Google incorporate Creative Commons metadata into Blogger and other Google applications where people can create, such as Docs and Spreadsheets, and other tools, and include it in places like their blog search.

**Questions and Answers from the Presentation**

As with many Google Tech Talk videos, participants have been warned that the presentations are being taped, and anything that might be best not shared with the world shouldn’t be discussed during filming. A couple of questions and answers survived for public scrutiny, but a team of folks was present from Creative Commons for one-on-one questions and answers.

q: BBC creative licenses seem similar to CC licenses.
a: There are some similarities, and they’ve talked, but the BBC is free only to UK taxpayers.

q: Should they (BBC and CC) talk some more?
a: Probably, because if everyone comes up with different licenses, there is a risk that they won’t be interoperable.

**Conclusion**

Some Google videos are issued under a creative commons license. Perhaps the most noteworthy so far was a music video from Pearl Jam back in May. I didn’t see the option to use a Creative Commons license on YouTube. It would be interesting to see that happen.

The laws regarding copyright and the use of information (snippets and cached versions) that search engines collect to present to searchers are murky and unclear. Would a metadata framework involving licenses for images, video, audio also involve web pages? Would it possibly be used in that way? Would the possibility keep search engines from getting involved in helping to build a more intelligent kind of metadata, or would it benefit them if such a framework existed that could be expanded to web pages?

It surprised me that when I presented some videos here from Google Video in the past, and they had a way to copy and embed those videos, they didn’t require a link back to the source, and didn’t include such a link in what I copied onto my pages. The benefits of a Creative Commons license is that it can explicitly state that a link attributing the source be included to use the material provided under the license.
