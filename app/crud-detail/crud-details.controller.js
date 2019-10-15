{
    'use strict';


    angular
        .module('crud-detail')
        .controller('CrudDetaiController', CrudDetaiController);

    CrudDetaiController.$inject = ['$scope', '$routeParams', 'dataservice']

    function CrudDetaiController($scope, $routeParams, dataservice) {
        let vm = this;
        console.log(`User ID: ${$routeParams.userId}`)
    
        addUser($routeParams.userId);

        function addUser(id) {
            return dataservice.getUser(id)
                .then(function (data) {
                    console.log(data) ;
                    vm.user = data;
                    return data;
                });
            }

    }
}