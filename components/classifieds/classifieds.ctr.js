(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){			
		 	
		 	var vm = this;

		 	vm.categories;
		 	vm.classified;
		 	vm.classifieds;
		 	vm.closeSidebar = closeSidebar;
		 	vm.deleteClassified = deleteClassified;
		 	vm.editing;
		 	vm.editClassified = editClassified;		 	
		 	vm.openSidebar = openSidebar;
		 	vm.saveClassified = saveClassified;
		 	vm.saveEditClassified = saveEditClassified;
		 	

			classifiedsFactory.getClassifieds().then(function(classifieds){
				vm.classifieds = classifieds.data;
				vm.categories = getCategories(vm.classifieds);
			});

			$scope.$on('newClassified', function(event, classified){
				classified.id = vm.classifieds.length + 1;
				vm.classifieds.push(classified);
				showToast('Saved!');
			});

			$scope.$on('editSaved', function(event, message){
				showToast(message);
			});	

			function openSidebar(){
				// //Service that open sidebar
				// $mdSidenav('left').open();
				$state.go('classifieds.new');

			}

			function closeSidebar(){
				//Service that close sidebar
				$mdSidenav('left').close();
			}

			function saveClassified(classified){
				
				if(classified){
					classified.contact = contact;
					vm.classifieds.push(classified);
					vm.closeSidebar();
					showToast('Saved!');
					vm.classified = {};
				}	
			}

			function editClassified(classified){
				console.log(classified);
				$state.go('classifieds.edit', {
					id: classified.id,
					classified: classified
				});
			}

			function saveEditClassified(){
				vm.editing = false;		
				closeSidebar();
				showToast(vm.classified.title + ' as been Edited!');
				vm.classified = {};
			}

			function deleteClassified(event, classified){				
				var index = vm.classifieds.indexOf(classified);
				var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete ' + classified.title + '?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event)
				$mdDialog.show(confirm).then(function(){
					vm.classifieds.splice(index, 1);
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

			function getCategories(classifieds){
				var categories = [];

				angular.forEach(classifieds, function(item){
					angular.forEach(item.categories, function(category){
						categories.push(category);
					});
				});

				return _.uniq(categories);
			}

		});
})();