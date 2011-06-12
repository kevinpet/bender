Bender.js exists to simplify providing a mobile-friendly layout to users.

##Features

- Entirely client side, suitable for use with a pure html site or pre-generated html from Jekyll or Movable Type.
- Cookie persistence -- users can have different settings on different devices.
- No redirects or url changes.
- User-switchable so you don't have to make a guess whether someone on an iPad wants the mobile or full screen version.

##Usage

###Create your stylesheets

Create a shared stylesheet for rules that aren't dependent, and the stylesheets you intend to choose between. You can name these anything you want. For purposes of discussion:

* `/css/shared.css`
* `/css/screen.css` -- for normal users, the css "screen" media type
* `/css/mobile.css` -- for mobile users, can be installed as "mobile" media type as well

###Install stylesheets

    <link rel="stylesheet" type="text/css" href="/css/shared.css"/>
    <link rel="stylesheet" type="text/css" href="/css/screen.css" id="select-screen"/>

You can make this media-type-selective, and install mobile.css for the mobile media type. You want to allow the user to select the stylesheet configured for the screen media type, as this what computers and modern smartphones use.

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
