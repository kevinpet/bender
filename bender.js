bender = function(id) {
    var styles = {};
    var keys = [];
    var mobile;
    set_style = function(style) {
	document.getElementById(id).href = styles[style];
    }
    this.choose = function(style) {
	set_style(style);
    }
    this.add = function(style, href, auto_mobile) {
	keys = keys.concat(style);
	styles[style] = href;
	if (auto_mobile == "auto-mobile") {
	    mobile = style;
	}
	return this;
    }
    var install_handlers = function() {
	keys.forEach(
	    function(key) {
		$("#" + key).click(function(e) {
		    e.preventDefault();
		    benders[id].choose(key);
		})
	    });
    }
    get_cookie = function() {
	return $.cookie("bender-" + id);
    }
    set_cookie = function(style) {
	$.cookie("bender-" + id, style, { path: '/', expires: 30 });
    }
    this.install = function() {
	var selected = $.cookie("bender-" + id);
	if (selected) {
	    set_style(selected);
	} else if (mobile) {
	    if (navigator.userAgent.toLowerCase().match(/mobile|android/)) {
		set_style(mobile);
	    }
	}
	return install_handlers;
    }
    return this;
};
