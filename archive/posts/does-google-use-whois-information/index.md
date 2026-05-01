---
title: "Does Google use whois information?"
source_url: "https://www.seobythesea.com/2006/05/does-google-use-whois-information/"
slug: "does-google-use-whois-information"
date_published: "2006-05-08T02:31:50+00:00"
date_modified: "2021-05-01T19:56:02+00:00"
author: "Bill Slawski"
---

Some recently published patent applications from *Go Daddy* explore whether additional [whois](https://en.wikipedia.org/wiki/WHOIS) information might help reduce spam and phishing, and improve search engine results. *Google* noted in a patent application last year that they might be looking at whois information while presenting and ranking pages.

I don’t know how easy it would be to set up the processes described by *Go Daddy*, or verify the reputation information that they describe and maintain the records the system would depend upon.

**The purpose of whois information**

But it might be a moot point even to wonder. A [recent decision](http://www.circleid.com/posts/historic_vote_on_whois_reformers_win/)by the folks at ICANN to limit the use of whois information makes it seem unlikely that the scenarios envisioned by these documents will happen. ICANN’s [Generic Names Supporting Organization](https://gnso.icann.org/en) held a vote in which they decided upon the sole purpose of whois information:


> “The purpose of the gTLD Whois service is to provide information sufficient to contact a responsible party for a particular gTLD domain name who can resolve, or reliably pass on data to a party who can resolve, issues related to the configuration of the records associated with the domain name within a DNS nameserver.”

It may still be worth discussing because that decision, that vote, also seems to put a damper on *Google’s* use of whois information in the manner in which they describe in their patent application on Historical Data (more on that below).

**Go Daddy’s reputation information for whois**

Imagine registrars having the ability to add reputation information to the who is collected on domain names.

This information would be contained in a database that could be accessed by people and even by search engines. It could contain material on a site (or even on URLs) from the registrar and organizations like TRUSTe, Verisign, SenderBase.org, Spamcop, and others. For example, it might have data on the amount and frequency of spam originating from a domain and complaints about spam, phishing, and a wide range of website content.

The patent applications list the following types of content as examples of what might be included in this reputation database:


> illegal drugs, alcohol, tobacco, sex, pornography, nudity, or any other form of adult content, profanity, violence, intolerance, hate, racism, militant groups, extremists, Satanism, witchcraft, gambling, casino, spam, MLM, pyramid schemes, fraud, or any other illegal activity, etc.

Search engines would have the ability to increase or decrease rankings of sites based upon scores from the reputation information.

**The patent applications**

On October 29, 2004, *Go Daddy* filed the following patent applications with the US Patent and Trademark Office. They were all published on May 4, 2004, and assigned to *Go Daddy*. The inventors listed on all three are Warren Adelman and Michael Chadwick. The three documents differ in their abstract and claims sections but contain the same description sections.

[Publishing domain name related reputation in whois records](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060095459%22.PGNR.&OS=DN/20060095459&RS=DN/20060095459) (US Patent Application 20060095459)

Abstract


> The invention describes a method for publishing domain name-related reputation data in WHOIS records.
>
> Reputation data may be published in the WHOIS records of the domain name. Reputation data may include values, ratings, scores, and links or references to the locations where such values, ratings, or scores may be found (e.g., URL link). The reputation data may be tracked on the domain name itself, URLs, domain name purchaser or registrant, or email addresses associated with the domain name.
>
> The reputation data may include various categories, such as email practices, website content, privacy policies and practices, fraudulent activities, domain name-related complaints, overall reputation, etc. The requester may decide whether to allow email messages or visit URLs based on the domain name-related reputation.

[Tracking domain name related reputation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060095586%22.PGNR.&OS=DN/20060095586&RS=DN/20060095586) (US Patent Application 20060095586)

Abstract


> Systems and methods of the present invention allow for tracking domain name-related reputation by a domain name Registering Entity (e.g., Registry, Registrar, etc.).
>
> The Registering Entity maintains a database with reputation data that the requesters can access in a preferred embodiment. The Registering Entity may update reputation data based on a variety of events related to the domain name. For example, the reputation data may be tracked on the domain name itself, URLs, domain name purchaser or registrant, or email addresses associated with the domain name.
>
> The reputation data may include various categories, such as email practices, website content, privacy policies and practices, fraudulent activities, domain name-related complaints, overall reputation, etc.
>
> The registrant may opt for a reputation service while registering a domain name. The requester may decide whether to allow email messages or to visit URLs based on the domain name-related reputation.

[Presenting search engine results based on domain name related reputation](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220060095404%22.PGNR.&OS=DN/20060095404&RS=DN/20060095404) (US Patent Application 20060095404)

Abstract


> The invention describes a method for presenting search engine results based on domain name-related reputation data. The search engine may sort or order search engine results based on domain name-related reputation data.
>
> In some cases, links connected to low-reputation domain names may be excluded from search engine results. Alternatively, the search engine may show reputation ratings next to the links in the search engine results. Thus, allowing the Internet user to determine whether to visit the link or not.
>
> The reputation data may be tracked on the domain name itself, URLs, domain name purchaser or registrant, or email addresses associated with the domain name. The reputation data may include various categories, such as email practices, website content, privacy policies and practices, fraudulent activities, domain name related complaints, overall reputation, etc.

Reading through these applications, some areas made me wonder if this system could be abused. But it’s an interesting approach. The *Go Daddy* method would increase the amount of information shared with people. Another recent CircleID article noted that there’s a strong movement towards being able to [access less whois information](http://www.circleid.com/posts/wall_street_journal_whois_privacy/).

This, of course, raises the question of whether whois information should be used in this manner. There are a large number of other articles on the subject in their [Privacy Matters](http://www.circleid.com/community/topics/view/Privacy%20Matters/) section.

**Google’s use of whois information?**

Last year’s patent application from Google, [Information retrieval based on historical data](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=/netahtml/PTO/search-bool.html&r=1&f=G&l=50&co1=AND&d=PG01&s1=20050071741&OS=20050071741&RS=20050071741), also described the potential use of whois information to aid in the rankings of web pages, looking at information like as the length of the registration of a web site, or other aspects of the registration, such as:

- Whether physically correct address information exists over a period of time,
- Whether contact information for the domain changes relatively often,
- Whether there is a relatively high number of changes between different name servers and hosting companies,
- Whether there is known-bad contact information, name servers, and/or IP addresses associated with a domain.

Information about name servers is also cited as a way to determine if a domain is “legitimate,” such as the length of time of a domain on a name server, or:

- Whether there is a mix of different domains from different registrars and have a history of hosting those domains,
- Whether the name server hosts mainly pornography or doorway domains or domains with commercial words
- Whether it contains primarily bulk domains from a single registrar,
- Whether the name server is brand new.

**Conclusion**

The use of this information in this manner doesn’t seem to mesh well with the defined purpose of whois information above or the findings of the [task force](https://gnso.icann.org/en/issues/whois-privacy/tf-report-15mar06.htm) that explored the purpose of whois information. Monitoring this information for ranking pages on a commercial search engine would seem to be against the spirit of whois as defined by the task force.

Then again, we don’t know if *Google* was using this information in the first place. Does Google use Whois information? We don’t know. But it seems from this vote by the *Generic Names Supporting Organization* that they shouldn’t be.
