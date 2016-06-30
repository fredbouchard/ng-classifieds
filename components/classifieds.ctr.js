(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){			
		 
			classifiedsFactory.getClassifieds().then(function(classifieds){
				$scope.classifieds = classifieds.data;
			});

			var contact = {
				name: "Fred Bouchard",
				phone: "(423) 143-2342",
				email: "noemail@gmail.com"
			};

			$scope.openSidebar = function(){
				//Service that open sidebar
				$mdSidenav('left').open();
			}

			$scope.closeSidebar = function(){
				//Service that close sidebar
				$mdSidenav('left').close();
			}

			$scope.saveClassified = function(classified){
				
				if(classified){
					classified.contact = contact;
					$scope.classifieds.push(classified);
					$scope.closeSidebar();
					showToast('Saved!');
					$scope.classified = {};
				}	
			}

			$scope.editClassified = function(classified){
				
				$scope.editing = true;
				$scope.openSidebar();
				$scope.classified =  classified;

			}

			$scope.saveEditClassified = function(){
				$scope.editing = false;		
				$scope.closeSidebar();
				showToast($scope.classified.title + ' as been Edited!');
				$scope.classified = {};
			}

			$scope.deleteClassified = function(event, classified){				
				var index = $scope.classifieds.indexOf(classified);
				var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete ' + classified.title + '?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event)
				$mdDialog.show(confirm).then(function(){
					$scope.classifieds.splice(index, 1);
				}, function(){
					console.log('Aborted');
				});	

			}

			function showToast(message){
				$mdToast.show(
						$mdToast.simple()
						.content(message)
						.position('top, right')
						.hideDelay(3000)
					);
			}

		});
})();