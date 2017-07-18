---
layout: post
title: Baby Browser
---

Baby Browser is a small browser I built during my time at the Recurse Center. It\'s written in Python with the interface done in PyQt. You can find my project\'s github [here](https://github.com/lauryndbrown/BabyBrowser).

Now before firing up my Browser and heading to google.com, there are numerous caveots:
- I wrote the browser in one week: I\'m working currently on refactoring and testing to ensure everything works. I am also writing documentation and adding additional information for design decisions that were made. 
- The render engine has limited functionality. I parse the HTML and CSS myself and structure them into a single tree, which effectively serves as the DOM. Check the projet\'s README for a better idea of what is and is not implemented.  

I remember being extremely excited about the prospect of writing my Browser, and I recall the responses I got with my idea, which ranged from excited to disbelief. But the truth of the matter was that I was looking to acquire a better sense of how modern browsers work. Being a rather tactile learner, getting my hands dirty with code was necessary.

But I also wondered (and still do), since I would create my own browser, what changes (if any) would I make to the browser? 
In a forecoming blog series, I\'ll walk you through some of the most difficult/tricky parts of the browser I created thus far.   
 - Document Object Model creation with Python
 - CSS and Style Sheet Cascading
 - Putting it all together: Creating a Small Render Engine  
 - PyQt Why are ScrollBars so complicated?
 - PyQT Hello Application
 - PyQT - Tab Madness

