Bender.js exists to simplify providing a mobile-friendly layout to users. [See it in action](http://kdpeterson.net/code/bender/) or read the [motivation](http://kdpeterson.net/blog/2011/08/mobile-stylesheets-with-bender-js.html).

##Features

- Entirely client side, suitable for use with a pure html site or
  pre-generated html from Jekyll or Movable Type.
- Cookie persistence -- users can have different settings on different devices.
- No redirects or url changes.
- User-switchable so you don't have to make a guess whether someone on
  an iPad wants the mobile or full screen version.

##Usage

###Create your stylesheets

Create a shared stylesheet for rules that aren't dependent, and the
stylesheets you intend to choose between. You can name these anything
you want. For purposes of discussion:

* `/css/shared.css`
* `/css/screen.css` -- for normal users, the css "screen" media type
* `/css/mobile.css` -- for mobile users, can be installed as "mobile" media type as well

###Install stylesheets

    <link rel="stylesheet" type="text/css" href="/css/shared.css"/>
    <link rel="stylesheet" type="text/css" href="/css/screen.css" id="select-screen"/>

You can make this media-type-selective, and install mobile.css for the
mobile media type. You want to allow the user to select the stylesheet
configured for the screen media type, as this what computers and
modern smartphones use.

###Install scripts

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/bender-min-0.0.1.js"></script>

###Configure and install with javascript

    /* create a bender context */
    var bender = bender("bender-style")
    /* add your user-selectable style sheets */
    bender.add("select-screen", "/css/screen.css")
    /* passing the third parameter of "auto-mobile" will select it it matches known mobile user agents */
    bender.add("select-mobile", "/css/mobile.css", "auto-mobile")
    /* check cookies and autodetect mobile, and then bind the handlers on document load with jQuery */
    $(bender.install())

## More info
* Take a look at the example code and [play with it at kdpeterson.net](http://kdpeterson.net/code/bender/).
* If you're interested in the reasoning behind why this is a good idea, see my blog post [client-side stylesheets for mobile](http://kdpeterson.net/blog/2011/08/client-side-stylesheets-with-bender-js.html).

## License

MIT license. I will likely come back some time in the future to
clarify that you shouldn't have to include a full copyright notice in
minified versions (indeed, I've set it up to build this way).

Copyright (c) 2011 Kevin Dempsey Peterson 

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Bender.js includes a modified version of jquery.cookie.js, copyright
(c) 2010 Klaus Hartl (stilbuero.de), dual licensed under the
[MIT](http://www.opensource.org/licenses/mit-license.php) and
[GPL](http://www.gnu.org/licenses/gpl.html) licenses. A recent version
also exists [on github](https://github.com/carhartl/jquery-cookie).
