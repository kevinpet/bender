function Bender(id) {
    var self = this;
    var styles = {};
    var keys = [];
    var mobile;
    this.set_style = function(style) {
	console.log("Setting " + self.name() + "(" + id + ") to " + style);
	document.getElementById(id).href = styles[style];
    }
    this.name = function() {
	return id;
    }
    this.choose = function(style) {
	self.set_style(style);
    }
    this.add = function(style, href, auto_mobile) {
	console.log("adding " + style + " to " + this.name());
	keys = keys.concat(style);
	styles[style] = href;
	if (auto_mobile == "auto-mobile") {
	    mobile = style;
	}
	return self;
    }
    this.install_handlers = function() {
	keys.forEach(
	    function(key) {
		console.log("hooking up " + self.name() + " to " + key);
		$("#" + key).click(function(e) {
		    console.log(self.name());
		    e.preventDefault();
		    self.choose(key);
		});
		$("#" + key).data("bender", self.name());
	    });
    }
    this.get_cookie = function() {
	return $.cookie("bender-" + id);
    }
    this.set_cookie = function(style) {
	$.cookie("bender-" + id, style, { path: '/', expires: 30 });
    }
    this.install = function() {
	var selected = $.cookie("bender-" + id);
	if (selected) {
	    self.set_style(selected);
	} else if (mobile) {
	    if (navigator.userAgent.toLowerCase().match(/mobile|android/)) {
		self.set_style(mobile);
	    }
	}
	return self.install_handlers;
    }
};
function bender(id) {
    return new Bender(id);
}
