/* Cookie plugin
Copyright (c) 2006 Klaus Hartl (stilbuero.de)
Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html */
$.cookie = function(n, v, opt) {
    if (typeof v != 'undefined') {
        opt = opt || {};
        if (v === null) {
            v = '';
            opt.expires = -1;
        }
        var exp = '';
        if (opt.expires && (typeof opt.expires == 'number' || opt.expires.toUTCString)) {
            var date;
            if (typeof opt.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (opt.expires * 24 * 60 * 60 * 1000));
            } else {
                date = opt.expires;
            }
            exp = '; expires=' + date.toUTCString();
        }
        var path = opt.path ? '; path=' + (opt.path) : '';
        var domain = opt.domain ? '; domain=' + (opt.domain) : '';
        var secure = opt.secure ? '; secure' : '';
        document.cookie = [n, '=', encodeURIComponent(v), exp, path, domain, secure].join('');
    } else {
        var content = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, n.length + 1) == (n + '=')) {
                    content = decodeURIComponent(cookie.substring(n.length + 1));
                    break;
                }
            }
        }
        return content;
    }
};
