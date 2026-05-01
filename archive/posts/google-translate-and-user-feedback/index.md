---
title: "Machine Translation at Google"
source_url: "https://www.seobythesea.com/2008/08/google-translate-and-user-feedback/"
slug: "google-translate-and-user-feedback"
date_published: "2008-08-16T07:52:10+00:00"
date_modified: "2020-07-19T09:53:43+00:00"
author: "Bill Slawski"
---

One of the challenges that a search engine like Google faces is that for it to be useful globally, it needs to provide a search for an audience that speaks many different languages.

It’s not surprising then, that the search engine has delved into learning as much as it can about many languages, and even providing a translation service – [Google Translate](https://translate.google.com/#), and a service that allows you to search for translated words and phrases in other languages – [Google Language Tools](https://translate.google.com/).

Google also offers a Google Translate gadget that you can put on your pages to allow visitors to translate your page into their language.

Google has also worked to make its Machine Translation service mobile by making it [available on iPhones](https://www.engadget.com/2008-08-11-google-translate-ported-to-iphone.html).

In addition to an automated translation system, Google looks like they are starting a translation service, the [Google Translation Center](https://accounts.google.com/ServiceLogin?service=gtrans), which appears to only be for “trusted testers” at this point.

Google Blogoscoped has more details in a post titled [Google Translation Center, a New Human Translations Service in the Making](http://blogoscoped.com/archive/2008-08-04-n48.html), which appears to focus upon [human translations](http://blogoscoped.com/files/cache/google-translation-center-faq.html) rather than automated ones.

A patent application from Google describes one aspect of Google Translate – how users of the service might provide alternative translations when they may not quite agree with the translation provided by Google. An Official Google Blog post, [Suggest a better translation](https://googleblog.blogspot.com/2007/03/suggest-better-translation.html) informed us of this ability to provide feedback to Google on translations in March of 2007.

The machine translation patent application’s inventors tell us of the need for such translation feedback in the patent filing because of some of the shortcomings of other online translation services:


> Such websites usually do not provide a means for users to easily provide feedback on the translation quality, however. If users find a translation to be incorrect or culturally offensive, for example, typically their only resort is to send an email message to the website operator who may or may not route the message to the appropriate person.
>
> Besides, the message might omit the source language version of the text, the translation at issue, or a corrected version of the translation. This makes it exceedingly difficult to analyze translation errors and improve the quality of machine translation based on user feedback.

The patent filing also provides some insight into how the machine translation system and user interface in Google Translate works, and how spam and misspellings might be filtered out of feedback provided to Google Translate.

[Machine Translation Feedback](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20080195372.PGNR.&OS=dn/20080195372&RS=DN/20080195372)
Invented by Jeffrey Chin and Daniel Rosart
US Patent Application 20080195372
Published August 14, 2008
Filed: February 14, 2007

There are many ways that the patent filing tells us that the machine translation service might be improved by users of the service.

One is the ability for users of Google Translate to suggest a better translation, which is available on Google Translate now. How does Google handle those suggested alternative translations? The patent filing provides some details on how it might use automated filters, and then manual review to look at those user-supplied alternatives.

The patent also describes the possibility of allowing users of the service to “rate the quality, correctness or usefulness of the translation using, for instance, a star rating or other scoring mechanism.”

Written comments from users of Google Translate are also a possibility, as well as the ability to flag a translation as being culturally inappropriate.

The machine translation service could learn from previously translated texts, and use a language model based upon probabilities of words and word combinations to offer translations.

The patent filing also provides some details on how it works to translate web pages, and the user interface involved.

**Filtering and Reviewing User Feedback For Machine Translation**

While user feedback could be really helpful for a service like Google Translate, there’s the possibility that people might abuse the ability to offer feedback for one reason or another. A combination of automated filters and manual review could be used to try to ensure quality translations.

An automated filter might look at user-provided alternate translations, and filter them if:

1. The alternate translation is empty or unchanged from the original translation
2. The alternate translation contains obscene language
3. The user is suspect (the patent filing doesn’t expressly define the use of the word “suspect” for us here)
4. The user has submitted more than a given number of alternate translations within a given time period
5. The user has a history of submitting spam
6. According to the machine translation system, the alternate translation has a low probability of occurrence in the target language, or;
7. The alternate translation contains redundant words.

Other filters might also be used, such as one that automatically corrects misspellings in the alternate translation.

The user-supplied alternate translations that are not filtered out may then automatically be sent to a trusted individual to evaluate the translation or to a community-based review process which allows people to vote on whether they approve of the alternate translation.

While reading the patent filing, I was wondering where Google might find “trusted individuals” or a community to evaluate translations. The Google Translation Center pool of translators might provide one source of reviewers.

ckey="781FFB88"
