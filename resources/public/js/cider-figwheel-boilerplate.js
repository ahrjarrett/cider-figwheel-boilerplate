var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/out/goog/base.js"></script>');
document.write('<script src="js/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("figwheel.connect");</script>');
document.write('<script>goog.require("cider_figwheel_boilerplate.core");</script>');

document.write("<script>figwheel.connect.start();</script>");