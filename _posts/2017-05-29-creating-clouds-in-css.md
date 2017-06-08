---
layout: post
title: CSS ART - Creating Clouds in CSS
---

## Intro

When designing my personal website, I decided to maniuplate CSS polygons to create clouds and flowers in CSS. I hope to contribute to the blog regularily and write tutorials and musings on the technology I\'m interested. Please do comment, share, or ask questions as I feel through developing my blog. :)

## Clouds Tutorial
Clouds as seen above are created utilizing pseudo-classes so that the effect can be achieve with a single div. However, it can be helpful to conceptualize it in terms of three distince parts as shown below. 

Cloud with three parts 

### The Html
For the cloud, only a single div is necessary. We give it the class cloud so that it is easy to reference in the css. So, the HTML is very simple here. 

<pre class="  language-markup"><code class="  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cloud<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>

### The CSS: Color, Shape, & Shadow
To give the cloud its color and inital shape, we give it an off-white background color and specify the width and height. In the full code examples I\'ll be adding an additional page background color for better visibility. 
<pre><code class="language-css">.cloud{ 
   width:350px;
   height:120px;
   background:#ECEFF1;
}</code></pre>

To create a round cloud we use the border-radius property. It simply rounds the corners of an element. Learn more about the property with a quick introduction at [W3School\'s Tutorial](https://www.w3schools.com/cssref/css3_pr_border-radius.asp).

Next we add the shadow. It\'s a single line of CSS utilizing the box-shadow propterty. You can learn more about the box-shadow property at [W3Schools\' Box-Shadow Tutorial](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp) and [MDN\'s Box-Shadow Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=control). 

The box-shadow property can be initially opague. So let\'s explore it in a little more depth. By design, the box-shadow property creates what is essentially a copy of the original element. It begins as the same width and height and defaults to the same color as the color property (the property that determine\'s font color). Then through the parameters we can specify the positioning, color, and size (relative the original element) that we need for our effect. 

<pre><code class="language-css">.cloud{ 
   width:350px;
   height:120px;
   background:#ECEFF1;
   box-shadow: 10px 10px rgba(0,0,0,0.2);
}</code></pre>

So in our case the parameters above specify 10px in the horizontal position, 10px in the verticle position and a color of black at 0.2% opacity. Note that the horizontal and vertical positions begin at the upper left-hand corner of the original element.

And with that we have the first \"piece\" of our cloud done. Below is the code we\'ve written so far in action!

<p data-height="265" data-theme-id="0" data-slug-hash="YQKryG" data-default-tab="html,result" data-user="lauryndbrown" data-embed-version="2" data-pen-title="YQKryG" class="codepen">See the Pen <a href="https://codepen.io/lauryndbrown/pen/YQKryG/">YQKryG</a> by Lauryn Brown (<a href="https://codepen.io/lauryndbrown">@lauryndbrown</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### The CSS: Creating Bumpy Clouds
To give it a more quintessential cloud look, we\'re going to add the top bumps. In order to do this with a single div, we look to the element\'s pseudo-elements.

#### Pseudo-elements
A pseudo-element allows a developer to design specific parts of an element separately from the whole. [W3Schools has a great explanation](https://www.w3schools.com/css/css_pseudo_elements.asp) going into more depth and using the example of a paragraph element to further illustrate this. 
<pre><code class="language-css">.cloud:after, .cloud:before{
    content:"";
    position:relative;
    display:inline-block;
    background:inherit;
    border-radius:inherit;
}</code></pre>
In our case, we are using the :before and :after psuedo-elements, and, as the names suggest, :before and :after repesent the content that comes before and after a given element, respectively. The :before and :after pseudo elements expect content. For our purposes we can give it a blank string (empty double or single quotes). 
In the code sample above, we use the keyword inherit to give the psuedo-elements the values of their parent element (which is our cloud div element). So that both the background and the border-radius are the same as the div.
So that we are able to specify a width and a height, we will set the display to inline-block.

Both pseuo-elements will need to be sized and positioned differently. The code snippet below shows how to do this.
<pre><code class="language-css">.cloud::after{
    width:100px;
    height:100px;
    top:-220px;
    left:50px;
}
.cloud::before{
    width:180px;
    height:180px;
    top: -70px;
    left:130px;
}</code></pre>
And lastly, this code puts it all together!
<p data-height="265" data-theme-id="dark" data-slug-hash="KqdmMa" data-default-tab="css,result" data-user="lauryndbrown" data-embed-version="2" data-pen-title="Cloud-Tutorial-2" class="codepen">See the Pen <a href="https://codepen.io/lauryndbrown/pen/KqdmMa/">Cloud-Tutorial-2</a> by Lauryn Brown (<a href="https://codepen.io/lauryndbrown">@lauryndbrown</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
