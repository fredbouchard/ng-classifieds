angular/**
* ngClassfields Module
*
* Description
*/
.module("ngClassifieds", ["ngMaterial", "ui.router"])
.config(function($mdThemingProvider, $stateProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');

	$stateProvider
		.state('classifieds', {
			url: '/classifieds',
			templateUrl: './components/classifieds/classifieds.tpl.html',
			controller: 'classifiedsCtrl as vm'
		})
		.state('classifieds.new', {
			url: '/new',
			templateUrl: './components/classifieds/new/classifieds.new.tpl.html',
			controller: 'newClassifiedsCtrl as vm'
		})
		.state('classifieds.edit', {
			//This act as a variable because of the :
			url: '/edit/:id',
			templateUrl: './components/classifieds/edit/classifieds.edit.tpl.html',
			controller: 'editClassifiedsCtrl as vm',
			params: {
				classified: null
			}
		})
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
})


