(function(){
	"use strict";

	angular
		.module('ngClassifieds')
		.controller('editClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory){
			
			//This is a capture variable
			var vm = this;
			vm.closeSideBar = closeSideBar;
			vm.classified = $state.params.classified;
			vm.saveEditClassified = saveEditClassified;

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

			function saveEditClassified(){
				$scope.$emit('editSaved', vm.classified.title + ' Edited!')
				vm.sideNavOpen = false;
			}
			
		});
})();