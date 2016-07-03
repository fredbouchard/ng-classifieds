(function(){

	"use strict";

	angular
		.module("ngClassifieds")
		.factory("classifiedsFactory", function($http, $firebaseArray){

			var ref = firebase.database().ref();
  			// download the data into a local object
		  	// putting a console.log here won't work, see below

			return {
				ref: $firebaseArray(ref)
			}

		});
})();