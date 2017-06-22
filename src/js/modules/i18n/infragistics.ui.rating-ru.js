﻿/*!@license
* Infragistics.Web.ClientUI Rating localization resources <build_number>
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

	$.ig.Rating = {};

	$.extend($.ig.Rating, {
		locale: {
			setOptionError: 'Динамические изменения следующей опции не поддерживаются: '
		}
	});
	
	$.ig.locale = $.ig.locale || {};
	$.ig.locale.ru = $.ig.locale.ru || {};
	$.ig.locale.ru.Rating = $.extend({}, $.ig.Rating.locale);
}));// REMOVE_FROM_COMBINED_FILES
