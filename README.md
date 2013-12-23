## Quick start

+ _breakpoints.scss is where to define all width/height-based media queries, and choose which get shown to legacy browsers (IE8 and below)
+ use one SCSS file for each block, or module, or logical type of element (e.g. banner, forms, buttons, image-with-caption)
+ within those files, use '@media #{$breakpoint}' blocks to restrict styles to certain media queried conditions, as defined before. No more _mobile.scss.

That's how to use the SCSS structure in its current form.

### Advantages over other approaches

+ No need to use CSS comments to label sections of code for different blocks. Now the label is the filename.
+ Desktop-only styles need not stomp over mobile styles, but still can be accessible to legacy IE
  + This is shared with a different approach that uses _desktop.scss, _mobile.scss, etc.

### Disadvantages over alternatives

+ Legacy IE still gets all the irrelevant mobile code, but made inert by being wrapped in media queries that the browser will never activate. Using separate mobile files means you can just avoid importing those in to the legacy stylesheet, lightening the load.
  + But perhaps this is fixable by using @if statements. I'll see if this is workable without uglying up the code.
+ Outputted code gets lots of duplicated media query declarations - heavier load.
  + gzipping the file would mitigate this. I think.

## Outline

I have an idea for a neat way to organise SASS files, in a modular approach, for a responsive forward-thinking and backwards-compatible site.

I'm going to flesh out the method here, before using it for a web project. This repo will host a set of reusable boilerplate code, written with some opinionated structural decisions.

## Objectives

+ Sensible organisation of stylesheets into SASS partials
+ Responsive/adaptive page layouts
+ ... but supports IE back to version 8 (the last IE not to support media queries on viewport width)
+ Basic boilerplate JavaScript written in a convenient pattern

## SASS partial structure

This is the main thing. I want to be able to have files like _header.scss and _accordion.scss. These will contain all the code for these respective components, including all the various media query-based alterations. So there won't be anything like _mobile.scss.

I've previously used an approach that involves _desktop.scss and _tablet.scss files, and so on. This was appealing for two reasons:

+ It mirrored one method used to organise media queries using plain css: having desktop stuff all in one section, then opening up one media query block for all the mobile code, etc.
+ It lets you put the desktop stuff into a media query, so you don't have to override it for the mobile layout.
+ ... but we could still support IE8, by generating a separate stylesheet, one that imported just the desktop and universal code, without any media queries. This is delivered with a [conditional comment](http://www.quirksmode.org/css/condcom.html).

I want to keep the last two advantages, but I want to keep all code for given components close together.

### Other (S)CSS considerations

It'll include [Normalize](http://necolas.github.io/normalize.css/) and the [Semantic Grid System](http://semantic.gs/). These have proved invaluable.

## Markup

I'll use HTML5 sectioning elements, but always wrapped in divs. Never styled directly, so it doesn't matter that IE8 can't render them. I know about [HTML5 shiv](https://github.com/aFarkas/html5shiv), using JS to get these elements to render in old browsers. But I don't want to use that. I want to minimise reliance on JS for styling, and avoid repeated overburdening of weaker browsers, which are probably installed on weaker computers.

## JavaScript

The [module pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript) has served me well, so I'll use this. To keep things organised and namespaced. And use strict mode.

jQuery is the default library.
