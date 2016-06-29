angular/**
* ngClassfields Module
*
* Description
*/
.module("ngClassifieds", ["ngMaterial"])
.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');
})
.directive("customDirective", function(){
	return{
		template: "<h1>{{ message }}</h1>"
	}
});