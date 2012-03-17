/* 
	jQuery Mobile Boilerplate
	mobileinit.js
	http://jquerymobile.com/demos/1.0.1/docs/api/globalconfig.html

	This file is only required if you need to apply overrides to the
	page before anything else has run. It MUST be loaded before
	the jQuery Mobile javascript file.
*/
$(document).bind('mobileinit', function(event){
	// apply overrides here
//// Navigation
//    $.mobile.page.prototype.options.backBtnText = "Go back";
    $.mobile.page.prototype.options.addBackBtn      = true;
//    $.mobile.page.prototype.options.backBtnTheme    = "d";
//
//    // Page
//    //$.mobile.page.prototype.options.headerTheme = "c";  // Page header only
//    $.mobile.page.prototype.options.contentTheme    = "c";
//    $.mobile.page.prototype.options.footerTheme = "c";
//
//    // Listviews
    $.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
    $.mobile.listview.prototype.options.theme           = "c";  // List items / content
//    $.mobile.listview.prototype.options.dividerTheme    = "d";  // List divider
//
//    $.mobile.listview.prototype.options.splitTheme   = "c";
//    $.mobile.listview.prototype.options.countTheme   = "c";
//    $.mobile.listview.prototype.options.filterTheme = "c";
//    $.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";



});