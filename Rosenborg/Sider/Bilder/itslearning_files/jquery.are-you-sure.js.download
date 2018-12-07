/*
 jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 https://github.com/codedance/jquery.AreYouSure/

 Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Author:  chris.dance@papercut.com
 Version: 1.9.0
 Date:    13th August 2014
*/
(function(c){c.fn.areYouSure=function(l){var d=c.extend({message:"You have unsaved changes!",dirtyClass:"dirty",change:null,silent:!1,addRemoveFieldsMarksDirty:!1,fieldEvents:"change keyup propertychange input",fieldSelector:":input:not(input[type=submit]):not(input[type=button])"},l),h=function(a){if(a.hasClass("ays-ignore")||a.hasClass("aysIgnore")||a.attr("data-ays-ignore")||void 0===a.attr("name"))return null;if(a.is(":disabled"))return"ays-disabled";var b=a.attr("type");a.is("select")&&(b="select");
switch(b){case "checkbox":case "radio":var e=a.is(":checked");break;case "select":e="";a.find("option").each(function(a){a=c(this);a.is(":selected")&&(e+=a.val())});break;default:e=a.val()}return e},f=function(a){var b=function(a){var b=a.data("ays-orig");return void 0===b?!1:h(a)!=b},e=c(this).is("form")?c(this):c(this).parents("form");if(b(c(a.target)))g(e,!0);else if($fields=e.find(d.fieldSelector),d.addRemoveFieldsMarksDirty&&e.data("ays-orig-field-count")!=$fields.length)g(e,!0);else{var f=!1;
$fields.each(function(){$field=c(this);if(b($field))return f=!0,!1});g(e,f)}},k=function(a){var b=a.find(d.fieldSelector);c(b).each(function(){var a=c(this);a.data("ays-orig",h(a))});c(b).unbind(d.fieldEvents,f);c(b).bind(d.fieldEvents,f);a.data("ays-orig-field-count",c(b).length);g(a,!1)},g=function(a,b,c){var e=b!=a.hasClass(d.dirtyClass)||isAnyTextEditorDirty();a.toggleClass(d.dirtyClass,b);!0===("undefined"!==typeof c?c:!1)&&resetAllTextEditorsIsDirty();e&&(d.change&&d.change.call(a,a),b&&a.trigger("dirty.areYouSure",
[a]),b||a.trigger("clean.areYouSure",[a]),a.trigger("change.areYouSure",[a]))},m=function(){var a=c(this),b=a.find(d.fieldSelector);c(b).each(function(){var a=c(this);a.data("ays-orig")||(a.data("ays-orig",h(a)),a.bind(d.fieldEvents,f))});a.trigger("checkform.areYouSure")},n=function(){k(c(this))};d.silent||window.aysUnloadSet||(window.aysUnloadSet=!0,c(window).bind("beforeunload",function(a){$dirtyForms=c("form").filter("."+d.dirtyClass);if(0!=$dirtyForms.length||isAnyTextEditorDirty()){if(navigator.userAgent.toLowerCase().match(/msie|chrome/)){if(window.aysHasPrompted)return;
window.aysHasPrompted=!0;window.setTimeout(function(){window.aysHasPrompted=!1},900)}return d.message}}),navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|opera/)&&c("a.ays-important").bind("click",function(a){var b=c(window).triggerHandler("beforeunload",b);if(b&&""!=b)return confirm(b+"\n\nPress OK to leave this page or Cancel to stay.")?!0:(a.stopPropagation(),!1)}));return this.each(function(a){if(c(this).is("form")){var b=c(this);c(".ccl-button",b).click(function(){g(b,!1,!0)});b.bind("rescan.areYouSure",
m);b.bind("reinitialize.areYouSure",n);b.bind("checkform.areYouSure",f);k(b)}})}})(jQuery);
