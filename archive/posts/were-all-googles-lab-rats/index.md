---
title: "We're All Google's Lab Rats"
source_url: "https://www.seobythesea.com/2010/07/were-all-googles-lab-rats/"
slug: "were-all-googles-lab-rats"
date_published: "2010-07-27T10:52:09+00:00"
date_modified: "2020-01-20T15:00:21+00:00"
author: "Bill Slawski"
---

A recent comment here noted that the core algorithm behind how Google works hasn’t changed very much since its earliest days. I’m not sure that I agree. Many of the posts I’ve made over the past five years that involve Google patents and whitepapers describe ways that Google may be changing how it determines which results to show searchers.

Many of the changes Google makes to its algorithms aren’t always visible to its users, while others that change the interface we see when we search tend to stand out more. Interestingly, many changes that Google makes are based upon live tests that we may catch a glimpse of if are lucky, and we pay attention.

**Google’s Testing Infrastructure**


> At Google, experimentation is practically a mantra; we evaluate almost every change that potentially affects what our users experience. Such changes include not only obvious user-visible changes such as modifications to a user interface, but also more subtle changes such as different machine learning algorithms that might affect ranking or content selection…

From:

[Overlapping Experiment Infrastructure: More, Better, Faster Experimentation](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/36500.pdf) (pdf)

At the [KDD-2010](http://web.archive.org/web/20111023055155/http://www.kdd.org:80/kdd2010/) (*16th Conference on Knowledge Discovery and Data Mining*) conference being held in Washington DC, this week, Google is [presenting](https://research.google/pubs/pub36500/) on the infrastructure behind how they test changes to their interface, as well as changes to the ways that they may rank pages or choose content to present to viewers.

As they tell us in the introduction to the paper:


> Google is a data-driven company, which means that decisionmakers in the company want empirical data to drive decisions about whether a change should be launched to users. This data is most commonly gathered by running live traffic experiments.

These kinds of experiments can include user-visible changes, such as changing the background colors of ads, and non-visible changes, such as one that might predict the clickthrough rates of those ads.

We’re told that the aim behind Google’s experiment infrastructure can be described with the words “More, Better, Faster.”

More, as in the ability to run more experiments simultaneously, while being flexible enough to use different configurations as needed.

Better, as in the ability to catch and disable quickly experiments that may be worth testing but which might be buggy and have unintended bad results.

Faster, as in the ability to set up experiments easily, so that even non-engineers can run an experiment without writing code.

**Google Algorithm Changes**

We’ve been told by representatives from Google that they are constantly updating and changing the algorithms behind their web search.

In the New York Times article, [Google Keeps Tweaking Its Search Engine](https://www.nytimes.com/2007/06/03/business/yourmoney/03google.html), Google Fellow Amit Singhal describes how Google tested a new algorithm to make certain searches contain fresher and more timely results.

A Wired Story, [Exclusive: How Google’s Algorithm Rules the Web](https://www.wired.com/2010/02/ff_google_algorithm/), notes that Google will likely introduce “550 or so improvements to it’s fabled algorithm,” over the next year (2010). We’re also told that:


> “On most Google queries, you’re actually in multiple control or experimental groups simultaneously,” says search quality engineer Patrick Riley. Then he corrects himself. “Essentially,” he says, “all the queries are involved in some test.” In other words, just about every time you search on Google, you’re a lab rat.

In a video from April, 2010, Google’s head of Web Spam, Matt Cutts mentions that Google tends to make at least one change to core web search algorithms at least once a day:

**Testing Tools and Education**

The *Overlapping Experiment Infrastructure* paper tells us that a testing infrastructure by itself isn’t enough – that Google has also developed a suite of tools to help them measure the impacts of tests, which include real-time monitoring of basic metrics to determine when something unexpected might happen during a test.

Google also has an Experiment Council, consisting of a group of engineers who review a checklist that needs to be filled out before an experiment takes place. The checklist is described as “light weight,” but we’re told that it covers a number of areas such as:

1. What does the experiment test?
2. The basic parameters of the experiment
3. What triggers the experiment – how are specific searchers pulled into live testing?
4. Which metrics are of interest during the test?
5. How big or small is the experiment, and how long will it run?
6. The design of the experiment itself.

The idea behind an experimenter filling out a checklist and submitting it for review is to help educate experimenters on the processes behind implementing an experiment, and to follow best practices in experimentation.

Google also has a discussion forum where experimenters bring the results of their tests to experts to talk about the results of their tests. There are three listed purposes behind this forum:

1. Make sure that the experiment results are valid
2. Make sure that the metrics behind valid experiments are complete
3. Decide whether or not the experiment creates a positive or negative user experience. This last step can help decision makers decide whether a a change should be launched, refined, or given up.

**Conclusion**

If Google makes at least one change a day to the way it provides search results, a testing infrastructure, testing tools, and educational processes like the ones described in the paper make a lot of sense in managing those changes.

If you’re interested in learning more about the framework behind the experiments that Google live tests on its users, you may want to spend some time with this paper.

If you see something unexpected at Google when performing a search, keep in mind that at any point in time you may be, to use Patrick Riley’s term, a lab rat.
