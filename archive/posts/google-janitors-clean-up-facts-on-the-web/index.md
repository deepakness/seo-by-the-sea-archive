---
title: "How Google Crawls Facts on the Web"
source_url: "https://www.seobythesea.com/2007/06/google-janitors-clean-up-facts-on-the-web/"
slug: "google-janitors-clean-up-facts-on-the-web"
date_published: "2007-06-29T11:24:08+00:00"
date_modified: "2019-08-24T12:21:35+00:00"
author: "Bill Slawski"
---

Google described some of the Janitors it uses to crawl facts on the Web in a recent patent application.

Google has been working on extracting data from a wide variety of sources on the Web, but there are problems with a lot of that information. Some examples:

One site may use a certain format to present information, while other pages use different formats.

Information from one web page may contradict information from others.

Some data may become old and stale.

When Google crawls facts to collect this kind of information, a lot of it needs to be cleaned up, and Google’s “Janitors” spring into action to do that.

Here are some of the different kinds of Google janitors, and the things that they do when Google crawls facts:

**Blacklist janitor** – These janitors look at patterns, and eliminate any facts that match certain patterns. So, they may be responsible for cleaning up some of the language in facts, and removing curse words.

**Singleton-attribute janitor** – Identifies attributes for facts which should be unique per object, and eliminate all but one instance of that attribute on any given object. Because of this janitor, when we ask about William Shatner’s birthday in Google, we are only given one date (22 March, 1931)

**String-cleanup janitor** – Their function is to trim unuseful characters, such as @, #, %, or !, from the beginning or end of attributes.

**Name-group-threshold-match janitor** – They merge duplicate objects if those share a certain number of attributes, based on their entropy (there’s a definition of entropy worth a look in here).

**Persisted-id-fact-deleter** – Deletes any fact from a previous repository that should no longer be kept.

**Stuttering-fact-deleter** – Removes any fact whose attribute and value are the same.

**Reference-redirect-collapser janitor** – Collapses value links that point to objects that have been merged.

**Invalid-fact-deleter janitor** – Removes any fact that fail some basic validity checks, such as the value being empty.

**Suspicious-fact-deleter janitor** – Removes facts with lengthy attributes (e.g., 3 words) and repeat information that appears elsewhere in the object.

**Invalid-language-deleter janitor** – Removes any fact in certain languages, and can be used to segregate facts by language.

**Legal-constraint janitor** – Enforces constraints on objects for legal purposes, since some documents might be limited in how many facts should be extracted from them.

**Unlicensed-fact-finder janitor** – Removes any facts marked as being “internal only” for legal or other reasons.

**Small-object-deleter janitor** – Removes any object with too few facts.

**Dangling-reference-deletion janitor** – Removes any fact with a value link pointing at a non-existent object. Objects can go missing when removed by another janitor.

**Name-references-resolver janitor** – Identifies references to other objects in facts and creates search links to the other objects.

**Place-cannonicalizer janitor** – Rewrites place names into canonical form – “Trenton, NJ” can be rewritten to “Trenton, N.J.”

**Date-canonicalizer janitor** – Rewrites dates into a canonical form – “2006-02-16” can be rewritten to “16 Feb. 2006.”

**Measurement-cleanup janitor** – Rewrites measurements to a canonical form – “5’4”” or “5 ft. 4 in.” can be rewritten to “5′ 4″.”

**Attribute-cannonicalizer janitor** – Rewrites attributes – “birthday”, “birthdate”, and “birth date” can be rewritten to “date of birth.”

**Article-value-normalizer janitor** – Rewrites values with articles to a readable format – “Foo, The” can be rewritten to “The Foo.”

**Type-identifier janitor** – Assigns type values to objects based on a subset of janitors – for example, every fact with a “date of birth” attribute is assigned a type value of “person.”

**Born-died cleanup janitor** – Splits facts associated with birth and death dates into several facts. For example, the fact “Born: 14 Jul. 1960 in Scranton, Pa.” can be split into a fact for date of birth and another fact for place of birth.

**Near-duplicate-fact-merger janitor** – Combines duplicate facts.

**Value-dereferencer janitor** – Identifies a fact having a value which is a link to another object, and updates a display value of the fact to be the name of the object.

Google’s janitors are software programs that process data found on the Web, and attempt to turn it into useful information that can be used to answer questions.

I’m left wondering what the titles are of the guys who actually clean up around the Googleplex.

The patent application is:

[Mechanism for managing facts in a fact repository](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20070143317.PGNR.&OS=dn/20070143317&RS=DN/20070143317)

Abstract


> Methods and systems for processing facts with one or more janitors. Facts are extracted from documents on the Internet or other sources. Facts can be any data or series of data in the documents including an attribute and a file. The data can be in the form of text, graphics, or multimedia content. Janitors transform facts responsive to inferring a certain condition associated with facts. The condition can be related to one or more of an attribute, a value, or an object of a fact being analyzed. For example, janitors can perform normalization, remove or merge similar or duplicate facts, segregate multiple values of a fact, and the like. An administrator can select which janitors are applied to facts and in which order.
