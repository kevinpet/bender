var benders = []
bender = function(id) {
    var styles = {};
    var keys = [];
    var bender = this;
    var mobile;
    benders = benders.concat(this);
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
		    bender.choose(key);
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
	} else if (mobile && Math.random() > 0.5) {
	    set_style(mobile);
	}
	return install_handlers;
    }
    return this;
};
