version=${BENDER_VERSION:-"dev"}
cat jquery.cookie.js bender.js | jsmin "Minified bender.js https://github.com/kevinpet/bender Copyright 2011 Kevin Peterson" "includes jquery.cookie.js Copyright 2006 Klaus Hartl (silbeuro.de)"> bender-min-$version.js
