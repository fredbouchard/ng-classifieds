(function(){

	"use strict";

	angular
		.module("ngClassifieds")
		.directive("classifiedsCard", function(){
			return{
				templateUrl: "./components/classifieds/card/classifieds-card.tpl.html",
				scope:{
					classifieds: "=classifieds",
					classifiedsFilter: "=classifiedsFilter",
					categoriesFilter: "=categoriesFilter",
				},
				controller: classifiedsCardCtrl,
				controllerAs: "vm"
			}

			function classifiedsCardCtrl($state, $mdDialog, $scope, $mdToast){
				var vm = this;
				vm.deleteClassified = deleteClassified;
				vm.editClassified = editClassified;		

				function editClassified(classified){
					console.log(classified);
					$state.go('classifieds.edit', {
						id: classified.$id,
					});
				}

				function deleteClassified(event, classified){				
					var index = vm.classifieds.indexOf(classified);
					var confirm = $mdDialog.confirm()
						.title('Are you sure you want to delete ' + classified.title + '?')
						.ok('Yes')
						.cancel('No')
						.targetEvent(event)
					$mdDialog.show(confirm).then(function(){
						var title = classified.title;
						vm.classifieds.$remove(classified);
						showToast(title + ' as been deleted!');
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
			}

		});

})();