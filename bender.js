bender = function(id) {
    var styles = {};
    var keys = [];
    var bender = this;
    $["bender" + id] = bender;
    this.choose = function(style) {
	$.cookie("bender-" + id, style, { path: '/', expires: 30 });
	var ss = document.getElementById(id);
	ss.href = styles[style];
    }
    this.add = function(selector, href) {
	keys = keys.concat(selector);
	styles[selector] = href;
	return this;
    }
    this.install = function() {
	keys.forEach(
	    function(key) {
		$("#" + key).click(function(e) {
		    e.preventDefault();
		    bender.choose(key);
		})
	    });
    }
    this.autodetect = function() {
	var selected = $.cookie("bender-" + id);
	if (selected) {
	    var ss = document.getElementById(id);
	    ss.href = styles[style];
	}
	return this;
    }
    return this;
};
