﻿/*!@license
* Infragistics.Web.ClientUI Popover localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
$.ig = $.ig || {};

$.ig.Popover = {};

$.extend( $.ig.Popover, {
	locale: {
		popoverOptionChangeNotSupported: "igPopover が初期化された後のこのオプションの変更はサポートされません:",
		popoverShowMethodWithoutTarget: "selectors オプションが使用される場合、show 関数の target パラメーターは必要です。"
	}
});

$.ig.locale = $.ig.locale || {};
$.ig.locale.ja = $.ig.locale.ja || {};
$.ig.locale.ja.Popover = $.extend({}, $.ig.Popover.locale);
}));// REMOVE_FROM_COMBINED_FILES
