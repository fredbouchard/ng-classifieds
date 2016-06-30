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
.directive("bgImg", function(){
	return function (scope, element, attributes){
			var url = attributes.bgImg;
			element.css({
				'background-image' : 'url(' + url + ')',
				'background-size' : 'contain',
				'background-repeat' : 'no-repeat',
				'background-position' : 'center'
			})
		}	
});
