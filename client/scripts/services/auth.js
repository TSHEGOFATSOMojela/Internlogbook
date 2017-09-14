// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .factory('AuthService', ['LogUser', '$q', '$rootScope', '$state', function(
      LogUser, $q, $rootScope, $state) {
 

    function register(email, password,fName,lName,contactNo,gender,jobTitle,department,uCategory) {
      return LogUser
        .create({
              email: email,
              password: password,
              fName: fName,
              lName: lName,
              contactNo: contactNo,
              gender: gender,
              jobTitle: jobTitle,
              department: department,
              uCategory: uCategory
       })
       .$promise;
    }

    function refresh(accessTokenId) {
      return LogUser
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email
          };
        });
    }
    return {
        register: register,
        refresh: refresh
    };
  }]);


//   function login(email, password) {
//      return User
//        .login({email: email, password: password})
//        .$promise
//        .then(function(response) {
//          $rootScope.currentUser = {
//            id: response.user.id,
//            tokenId: response.id,
//            email: email
//          };
//        });
//    }
//
//    function logout() {
//      return User
//       .logout()
//       .$promise
//       .then(function() {
//         $rootScope.currentUser = null;
//       });
//    }