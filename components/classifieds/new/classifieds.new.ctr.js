(function(){
	"use strict";

	angular
		.module('ngClassifieds')
		.controller('newClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory){
			
			//This is a capture variable
			var vm = this;
			vm.closeSideBar = closeSideBar;
			vm.saveClassified = saveClassified;
			
			$timeout(function(){
				$mdSidenav('left').open();
			});

			$scope.$watch('vm.sidebarNavOpen', function(sidenav){
				if(sidenav === false){
					$mdSidenav('left')
						.close()
						.then(function(){
							$state.go('classifieds')
						})
				}
			})
			
			function closeSideBar(){
				vm.sideNavOpen = false;
			}

			function saveClassified(classified){

				if(classified){

					classified.contact = {
						name: "Fred Bouchard",
						phone: "(423) 143-2342",
						email: "noemail@gmail.com"
					};



					$scope.$emit('newClassified', classified);
					vm.sideNavOpen = false;
				}

			
			}
			
		});
})();