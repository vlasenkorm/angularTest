{
  'use strict';


  angular
    .module('crud-http')
    .controller('CrudController', CrudController);

  CrudController.$inject = ['$scope', 'dataservice']

  function CrudController($scope, dataservice) {
    let vm = this;
    vm.createUser = addUsers;
    vm.deleteUser = deleteUser;
    vm.updateUser = updateUser;
    vm.cancelUpdatee = cancelUpdatee;
    vm.editUser = editUser;

    //initial
    vm.submit = true;
    vm.update = false;
    vm.cancel = false;
    vm.userid = false;
    getDataList();

    //Edit User
    function editUser(user) {
      console.log('edit start');
      vm.user = user;
      vm.submit = false;
      vm.update = true;
      vm.cancel = true;
      vm.userid = false;
    };
    //cancel Update
    function cancelUpdatee() {
      console.log('cancel edit');
      vm.user = null;
      vm.submit = true;
      vm.update = false;
      vm.cancel = false;
      vm.userid = false;
    };


    //Update User
    function updateUser() {
      return dataservice.updateSelectedUser(vm.user)
        .then(function (data) {
          getDataList();
          cancelUpdatee();
          return data;
        });

    }

    //Delete User
    function deleteUser(user) {
      return dataservice.deleteUserFromList(user.id)
        .then(function (data) {
          getDataList();
          return data;
        });

    }

    //Get User List
    function getDataList() {
      return dataservice.getDataListUsers()
        .then(function (data) {
          $scope.users = data;
          return $scope.users;
        });
    }


    //Create New User
    function addUsers() {
      return dataservice.addUserToList(vm.user)
        .then(function (data) {
          getDataList();
          return data;
        });
    }

  }


}