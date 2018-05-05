This is a very simple Javascript Library that converts mark Down into HTML.
The index.html page has a TEXT AREA id as theText. This is where we insert our mark down. We have a div with Id = content. This is where the mark down is displayed after being converted as html.
The markdown that we can use is

Enclose the text in following 
==============================

** and ** for bold text

&& and && for Red text

^^ and ^^ for Green text

%% and %% for Blue text

__ and __ for Underline text

~~ and ~~ for Strike Through text

!! and !! for italics text


To create Heading
====================
The first character on a new line should be #. For heading 1 (larger) use one # sign for heading 2 (samller) use two # signs and so on upto 6 heading level which is the smallest.
More # signs than 6 will not result into any heading and will be removed.

To create Unordered List
============================
Just start a new line with minus sign "-" to create an unordered list.
