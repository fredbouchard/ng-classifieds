(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller('classifiedsCtrl', function($scope){
			
			$scope.message = "Hello worlds!!!";

			$scope.name = {
				"first": "Fred",
				"last": "Bouchard"
			};
		});
})();