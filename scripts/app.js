angular/**
* ngClassfields Module
*
*  Here we set up an angular module. We'll attach controllers and 
*  other components to this module.
*/
.module("ngClassifieds", ["ngMaterial", "ui.router", "firebase"])
 	// Angular supports chaining, so here we chain the config function onto
    // the module we're configuring.
.config(function($mdThemingProvider, $stateProvider) {
	
	 // We use AngularJS dependency injection to fetch the route provider.
     // The state provider is used to setup our app's routes. 

     // The config below simply says when you visit '/' it'll render
     // the components/classifieds/classifieds.tpl.html template controlled by the MainCtrl controller.



    $mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');

	$stateProvider
		.state('auth', {
			url: '/auth',
			templateUrl: './components/auth/auth.tpl.html',
			controller: 'authCtrl as vm'
		})
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


