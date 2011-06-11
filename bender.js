function Bender(id) {
    var self = this, styles = {}, keys = [], mobile;
    this.set = function(style) {
	document.getElementById(id).href = styles[style];
    }
    this.choose = function(style) {
	$.cookie("bender-" + id, style, { path: '/', expires: 30});
	self.set(style);
    }
    this.add = function(style, href, auto) {
	keys = keys.concat(style);
	styles[style] = href;
	if (auto == "auto-mobile") {
	    mobile = style;
	}
	return self;
    }
    this.clicks = function() {
	keys.forEach(
	    function(key) {
		$("#" + key).click(function(e) {
		    e.preventDefault();
		    self.choose(key);
		});
	    });
    }
    this.install = function() {
	var selected = $.cookie("bender-" + id);
	if (selected) {
	    self.set(selected);
	} else if (mobile) {
	    if (navigator.userAgent.toLowerCase().match(/mobile|android/)) {
		self.set(mobile);
	    }
	}
	return self.clicks;
    }
};
function bender(id) {
    return new Bender(id);
}
