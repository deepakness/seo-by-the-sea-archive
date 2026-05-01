---
title: "Exploring Connections Between Books in Google Book Search"
source_url: "https://www.seobythesea.com/2009/02/exploring-connections-between-books-in-google-book-search/"
slug: "exploring-connections-between-books-in-google-book-search"
date_published: "2009-02-28T08:36:08+00:00"
date_modified: "2021-07-06T15:18:26+00:00"
author: "Bill Slawski"
---

In September of 2007, Google research scientists Bill Schilit and Okan Kolak announced a new feature for Google Book Search which they called *Popular Passages*. The announcement came in an [Inside Google Book Search](http://booksearch.blogspot.com/) blog post titled [Dive into the meme pool with Google Book Search](http://booksearch.blogspot.com/2007/09/dive-into-meme-pool-with-google-book.html)

*Popular Passages* provides us with the ability to find connections between books by taking interesting quotations or passages from one book or magazine, or publication and showing where those appear in other literary works. For example, the following passage shows up the book [Moneyball: The Art of Winning an Unfair Game](https://books.google.com/books?id=oIYNBodW-ZEC&hl=en):


> As thus: lately in a wreck of a Californian ship, one of the passengers fastened a belt about him with two hundred pounds of gold in it, with which he was found afterward at the bottom. Now, as he was sinking — had he the gold? or had the gold him?

This John Ruskin quote starts off the book and appears in at least [35 other publications](https://books.google.com/books?qtid=597e78c7&id=oIYNBodW-ZEC&as_brr=0).

Passages might be taken from material in a book that appears within quotation marks, like the one above, or in unquoted passages from the book’s text. For example, another passage from *Moneyball* appears on the 37th page of the book:


> From Paul’s point of view, that was the great thing about college players: they had meaningful stats. They played a lot more games against stiffer competition than high school players. The sample size of their relevant statistics was larger, and therefore a more accurate reflection of some underlying reality. You could project college players with greater certainty than you could project high school players. The…”Ž

The *Popular Passages* feature tells us that this passage [shows up](https://books.google.com/books?id=oIYNBodW-ZEC&qtid=2b7e78f3&source=gbs_quotes_r&cad=2_0) in two books from 2003-2008, and we find that the other book it appears within is
[The Baseball Economist: The Real Game Exposed](https://books.google.com/books?id=CkOAYcVLmRkC&pg=PA143&vq=%22From+Paul%27s+point+of+view,+that+was+the+great+thing+about+college+players:+they+had+meaningful+stats.+They+played+a%22&source=gbs_quotes#v=onepage&q=%22From%20Paul's%20point%20of%20view%2C%20that%20was%20the%20great%20thing%20about%20college%20players%3A%20they%20had%20meaningful%20stats.%20They%20played%20a%22&f=false)

What’s interesting about the *Popular Passages* Book Search feature is creating links between documents based upon passages shared between them, in a huge collection of documents that don’t contain links to each other.

In addition to this feature looks at the text of those passages and a certain amount of words after them to identify key terms that co-occur within the context of those passages, so that those “Key Ideas can search the passages and the books they are contained within.”

The technical challenges behind the development of *Popular Passages* and the searchable key ideas are described in a couple of white papers from the researchers behind the processes:

- Generating Links by Mining Quotations (pdf)
- [Exploring a digital library through Key Ideas](http://www.jcdl2008.org/presentations/BillSchilitSession7.pdf) (pdf) – [presentation](http://www.jcdl2008.org/presentations/BillSchilitSession7.pdf) (pdf)

There are also some Google patent filings associated with the identification of quotations and passages and key ideas, and the rankings of those passages when they appear as results in Google Book Search:

[Identifying and Linking Similar Passages in a Digital Text Corpus](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090024606.PGNR.&OS=dn/20090024606&RS=DN/20090024606)
Invented by William N. Schilit, Okan Kolak, and Adam Mathes
Assigned to Google
US Patent Application 20090024606
Published January 22, 2009
Filed: July 20, 2007

Abstract


> A corpus contains digital text from multiple documents. A passage mining engine identifies similar passages in the documents and stores data describing the similarities—the passage mining engine groups similar passages into groups based on similarity or other criteria.
>
> The passage mining engine ranks the similar passages in the text corpus based on quality or other criteria. A user interface is presented that includes hypertext links associated with similar passages that allow a user to navigate the documents.

[Ranking similar passages](http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=G&l=50&d=PG01&S1=20090055389.PGNR.&OS=dn/20090055389&RS=DN/20090055389)
Invented by William N. Schilit, Okan Kolak, and Justin John Paul Vincent-Foglesong
US Patent Application 20090055389
Published February 26, 2009
Filed: June 5, 2008

Abstract


> Passages in a digital corpus are scored and ranked based at least in part on characteristics of instances of the passages occurring in the corpus.
>
> Such characteristics include the popularity of the author, the characteristics of the words introducing and following the similar passage, frequency of appearance of the passage in the digital corpus, the length of the similar passage, the words of the similar passage, the usage of punctuation with the similar passage, and the diffusion of the similar passage within the digital corpus.
>
> The characteristics are scored and weighted to produce ranking scores for the associated passages. The ranking scores are used for purposes including selecting passages to display in association with a document and ranking passages displayed in response to a search.

Identifying Key Terms Related to Similar Passages
Invented by William N. Schilit and Okan Kolak
US Patent Application 20090055394
Published February 26, 2009
Filed: January 30, 2008

Abstract


> Key terms for similar passages from a large corpus are identified and used to enhance searching and browsing the corpus. The corpus contains multiple documents, such as the text of books.
>
> Browsing by concept is supported by identifying a set of similar passages or quotations in documents stored in the corpus and assigning key terms to passages that link conceptually related passages together.
>
> The context of each passage instance is identified and can include, for example, the text surrounding the passage. The contexts of all similar passage instances are analyzed to identify key terms for the similar passage.
>
> The related key terms are analyzed to identify relationships among the key terms from different similar passage sets. The key terms can be used as a basis for navigating the documents in the corpus. The key terms enable browsing the documents in the corpus by concepts referenced in the documents.

Google Book Search provides a number of other interesting features, such as:

- Reviews of books listed,
- References from web pages and other books and scholarly works,
- Links to other editions of the same book and to related books,
- A list of the “key terms” that appear in the book with links to where they show up, and;
- A Google Map to places mentioned in the books.

The white papers above tell us that *Popular Passages* has proved to be one of the most popular navigational features of Google Book Search since its release.

I’m not surprised by that admission. Finding interesting quotes that appear within a book and are shared in other books is an engaging way to discover ideas within books that are shared by other authors and see how those ideas spread.

Seeing how the inventors of *Popular Passages* came up with their methods to finding interesting shared passages in scanned documents and ranking them in the white papers and patent filings above gives us insights into how challenges of search and discovery of ideas might be uncovered.

What does this mean for search on the Web?

Considering the growth of availability of books, magazines, and other documents on the Web without hyperlinks, methods of finding information like the automated links between *Popular Passages* in those printed materials and identification of query terms that match *Key Ideas* taken from text associated with those passages may become fairly common on the Web in the future.
