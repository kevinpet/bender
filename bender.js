function choose(style) {
    $.cookie("bender", style, { path: '/', expires: 30 });
    s(style);
}
function s(style) {
    var ss = document.getElementById("bender-style");
    switch(style) {
    case 'mobile':
        ss.href = "mobile.css";
        break;
    case 'screen':
        ss.href = "screen.css";
        break;
    }
}
var selected = $.cookie("bender");
if (selected) {
    s(selected);
}
$(function() {
    $("#bender-mobile").click(function(e) {
        e.preventDefault();
        choose("mobile");
    });
    $("#bender-screen").click(function(e) {
        e.preventDefault();
        choose("screen");
    });
});
