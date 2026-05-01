---
title: "Citations behind the Google Brain Word Vectors Approach"
source_url: "https://www.seobythesea.com/2017/09/word-vector-approach/"
slug: "word-vector-approach"
date_published: "2017-09-01T13:37:59+00:00"
date_modified: "2021-04-29T08:01:32+00:00"
author: "Bill Slawski"
---

![Cardiff-Tidal-pools](media/cardiff-tidal-pools.jpg)


## Google’s Word Vectors Approach

In October of 2015, a new algorithm was announced by members of the Google Brain team, described in this post from Search Engine Land – [Meet RankBrain: The Artificial Intelligence That’s Now Processing Google Search Results](https://searchengineland.com/meet-rankbrain-google-search-results-234386) One of the Google Brain team members who gave Bloomberg News a long interview on Rankbrain, Gregory S. Corrado was a co-inventor on a word vectors patent that was granted this August along with other members of the Google Brain team.

In the SEM Post article, [RankBrain: Everything We Know About Google’s AI Algorithm](http://www.thesempost.com/rankbrain-everything-we-know-about-googles-ai-algorithm/) we are told that Rankbrain uses concepts from Geoffrey Hinton, involving Thought Vectors.

The summary in the description from the patent tells us about how a word vectors approach might be used in such a system:


> Particular embodiments of the subject matter described in this specification can be implemented to realize one or more of the following advantages. First, unknown words in sequences of words can be effectively predicted if the surrounding words are known. Second, words surrounding a known word in a sequence of words can be effectively predicted. Third, numerical representations of words in a vocabulary of words can be easily and effectively generated. Fourth, the numerical representations can reveal semantic and syntactic similarities and relationships between the words that they represent.
>
> By using a word prediction system having a two-layer architecture and by parallelizing the training process, the word prediction system can be effectively trained on extensive word corpora, e.g., corpora that contain on the order of 200 billion words, resulting in higher quality numeric representations than those that are obtained by training systems on relatively smaller word corpora. Further, words can be represented in very high-dimensional spaces, e.g., spaces on the order of 1000 dimensions, resulting in higher quality representations than when words are represented in relatively lower-dimensional spaces. Additionally, the time required to train the word prediction system can be greatly reduced.

So, an incomplete or ambiguous query that contains some words could use those words to predict missing words that may be related. Those predicted words could then be used to return search results that the original words might have difficulties returning. The patent that describes this Word Vectors Approach prediction process is:

[Computing numeric representations of words in a high-dimensional space](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9,740,680.PN.&OS=PN/9,740,680&RS=PN/9,740,680)

Inventors: Tomas Mikolov, Kai Chen, Gregory S. Corrado, and Jeffrey A. Dean
Assignee: Google Inc.
US Patent: 9,740,680
Granted: August 22, 2017
Filed: May 18, 2015

Abstract


> Methods, systems, and apparatus, including computer programs encoded on computer storage media, for computing numeric representations of words. One of the methods includes obtaining a set of training data, wherein the set of training data comprises sequences of words; training a classifier and an embedding function on the set of training data, wherein training the embedding function comprises obtained trained values of the embedding function parameters; processing each word in the vocabulary using the embedding function following the trained values of the embedding function parameters to generate a respective numerical representation of each word in the vocabulary in the high-dimensional space, and associating each word in the vocabulary with the respective numeric representation of the word in the high-dimensional space.

One of the things that I found interesting about this word vectors patent was that it includes several citations from the applicants for the patent. They looked worth reading, and many of them were co-authored by inventors of this patent, by people who are well-known in the field of artificial intelligence, or by people from Google. When I saw them, I started hunting for locations on the Web for them, and I was able to find copies of them. I will be reading through them and thought it would be helpful to share those links, which was the idea behind this post. It may be helpful to read as many of these as possible before tackling this patent. If anything stands out in any way to you, let us know what you’ve found interesting.

Citations behind this Word Vectors Approach:

Bengio and LeCun, “[Scaling learning algorithms towards AI](http://yann.lecun.com/exdb/publis/pdf/bengio-lecun-07.pdf),” Large-Scale Kernel Machines, MIT Press, 41 pages, 2007. cited by the applicant.

Bengio et al., “[A neural probabilistic language model](http://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf),” Journal of Machine Learning Research, 3:1137-1155, 2003. cited by applicant .

Brants et al., “[Large language models in machine translation](https://www.aclweb.org/anthology/D07-1090.pdf),” Proceedings of the Joint Conference on Empirical Methods in Natural Language Processing and Computational Language Learning, 10 pages, 2007. cited by the applicant.

Collobert and Weston, “[A Unified Architecture for Natural Language Processing: Deep Neural Networks with Multitask Learning](https://ronan.collobert.com/pub/matos/2008_nlp_icml.pdf),” International Conference on Machine Learning, ICML, 8 pages, 2008. cited by the applicant.

Collobert et al., “[Natural Language Processing (Almost) from Scratch](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf),” Journal of Machine Learning Research, 12:2493-2537, 2011. cited by the applicant.

Dean et al., “[Large Scale Distributed Deep Networks](http://papers.nips.cc/paper/4687-large-scale-distributed-deep-networks.pdf),” Neural Information Processing Systems Conference, 9 pages, 2012. cited by the applicant.

Elman, “[Finding Structure in Time](http://psych.colorado.edu/~kimlab/Elman1990.pdf),” Cognitive Science, 14, 179-211, 1990. cited by applicant .

Huang et al [Improving Word Representations via Global Context and Multiple Word Prototypes](https://www.aclweb.org/anthology/P12-1092/),” Proc. Association for Computational Linguistics, 10 pages, 2012. cited by the applicant.

Mikolov and Zweig, “[Linguistic Regularities in Continuous Space Word Representations](https://www.aclweb.org/anthology/N13-1090/),” submitted to NAACL HLT, 6 pages, 2012. cited by applicant .

Mikolov et al., “[Empirical Evaluation and Combination of Advanced Language Modeling Techniques](http://www.fit.vutbr.cz/~imikolov/rnnlm/is2011_emp.pdf),” Proceedings of Interspeech, 4 pages, 2011. cited by the applicant.

Mikolov et al., “[Extensions of recurrent neural network language model](https://github.com/yihui-he/Natural-Language-Process/blob/master/Extensions%20of%20recurrent%20neural%20network%20language%20model.pdf),” IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pp. 5528-5531, May 22-27, 2011. cited by applicant .

Mikolov et al., “[Neural network based language models for highly inflective languages](http://www.fit.vutbr.cz/research/groups/speech/publi/2009/mikolov_ic2009_nnlm_4.pdf),” Proc. ICASSP, 4 pages, 2009. cited by applicant .

Mikolov et al., “[Recurrent neural network based language model](http://www.fit.vutbr.cz/research/groups/speech/publi/2010/mikolov_interspeech2010_IS100722.pdf),” Proceedings of Interspeech, 4 pages, 2010. cited by applicant .

Mikolov et al., “[Strategies for Training Large Scale Neural Network Language Models](https://www.microsoft.com/en-us/research/publication/strategies-for-training-large-scale-neural-network-language-models/),” Proc. Automatic Speech Recognition and Understanding, 6 pages, 2011. cited by the applicant.

Mikolov, “[RNNLM Toolkit](http://www.fit.vutbr.cz/~imikolov/rnnlm/),” Faculty of Information Technology (FIT) of Brno University of Technology [online], 2010-2012 [retrieved on Jun. 16, 2014]. Retrieved from the Internet: < URL: http://www.fit.vutbr.cz/.about.imikolov/rnnlm/>, 3 pages. cited by applicant .

Mikolov, “[Statistical Language Models based on Neural Networks](http://www.fit.vutbr.cz/~imikolov/rnnlm/thesis.pdf),” PhD thesis, Brno University of Technology, 133 pages, 2012. cited by the applicant.

Mnih and Hinton, “[A Scalable Hierarchical Distributed Language Model](http://papers.nips.cc/paper/3583-a-scalable-hierarchical-distributed-language-model.pdf),” Advances in Neural Information Processing Systems 21, MIT Press, 8 pages, 2009. cited by the applicant.

Morin and Bengio, “[Hierarchical Probabilistic Neural Network Language Model](https://www.iro.umontreal.ca/~lisa/pointeurs/hierarchical-nnlm-aistats05.pdf),” AISTATS, 7 pages, 2005. cited by applicant .

Rumelhart et al., “[Learning representations by back-propagating errors](https://www.iro.umontreal.ca/~vincentp/ift3395/lectures/backprop_old.pdf),” Nature, 323:533-536, 1986. cited by applicant .

Turian et al., “[MetaOptimize / projects / wordreprs /](https://cogcomp.seas.upenn.edu/page/publication_view/653)” Metaoptimize.com [online], captured on Mar. 7, 2012. Retrieved from the Internet using the Wayback Machine: < URL: http://web.archive.org/web/20120307230641/http://metaoptimize.com/project- s/wordreprs>, 2 pages. cited by applicant .
Turlan et al., “[Word Representations: A Simple and General Method for Semi-Supervised Learning](https://www.aclweb.org/anthology/P10-1040/),” Proc. Association for Computational Linguistics, 384-394, 2010. cited by the applicant.

Turney, “[Measuring Semantic Similarity by Latent Relational Analysis](https://arxiv.org/ftp/cs/papers/0508/0508053.pdf),” Proc. International Joint Conference on Artificial Intelligence, 6 pages, 2005. cited by the applicant.

Zweig and Burges, “[The Microsoft Research Sentence Completion Challenge](https://www.microsoft.com/en-us/research/publication/the-microsoft-research-sentence-completion-challenge/),” Microsoft Research Technical Report MSR-TR-2011-129, 7 pages, Feb. 20, 2011. cited by applicant.
