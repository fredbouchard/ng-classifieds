(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .factory('auth', function($firebaseAuth) {
      
      var auth = $firebaseAuth
      console.log(auth);
      var ref = firebase.database().ref();
      console.log(ref);
    
      return {
        ref: $firebaseAuth(ref),
        user: auth
      }
      
    });
  
})();