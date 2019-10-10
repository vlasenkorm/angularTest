(function () {
    'use strict'
    angular
        .module('crud', [])
        .controller('UserController', UserController)

    UserController.$inject = ['$scope']



    function UserController($scope) {
        const url = 'https://test-users-api.herokuapp.com/users/'
        
        $scope.users = [{"id":"323","name":"test","age":52}]
        
        //Start Buttons Settings
        $scope.submit = true;
        $scope.update = false;
        $scope.cancel = false;
        $scope.userid = false;
        $scope.userName = true;
        $scope.userAge = true;
        
        //Getting Users List
        getUserList();
        
        //Refresh Users List
        $scope.refresh = function () {
            getUserList();
        }

        //Create New User
        $scope.createUser = function () {
            addUserToList();
            getUserList();

        }

        //Update User
        $scope.updateUser = function () {
            updateSelectUser();
            getUserList();
        }

        //Delete User
        $scope.deleteUser = function (user) {
            deleteSelectedUser(user);
            getUserList();


        };



        //Set $scope on Edit button click
        $scope.editUser = function (user) {

            $scope.user = user;
            $scope.submit = false;
            $scope.update = true;
            $scope.cancel = true;
            $scope.userid = false;
            $scope.userName = true;
            $scope.userAge = true;

        };

        //cancel Update
        $scope.cancelUpdate = function () {
            $scope.user = null;
            $scope.submit = true;
            $scope.update = false;
            $scope.cancel = false;
            $scope.userid = false;
            $scope.userName = true;
            $scope.userAge = true;
        };




        function deleteSelectedUser(user) {
            
            fetch(`${url}${user.id}`, { method: 'delete' })
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error("Error fetching data");
                })
                .then(data => {
                    alert(`Deleted User :${user.id}`);
                })
                .catch(error => {      // catch обрабатывает возможную ошибку запроса      
                    console.error("Error: ", error);
                });
        }

        function updateSelectUser() {
            fetch(`${url}${$scope.user.id}`, {
                method: 'Put',
                body: JSON.stringify($scope.user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error("Error fetching data");
                })

                .then(data => {
                    alert(`Update : ${data.data}`);
                })

                .catch(error => {
                    console.error("Error: ", error);
                });

        };

        function addUserToList() {
            fetch(url, {
                method: 'Post',
                body: JSON.stringify($scope.user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error("Error fetching data");
                })

                .then(data => {
                    alert('Sucess SUBMIT');
                })
                .catch(error => {
                    console.error("Error: ", error);
                });
        };

        function getUserList() {
            fetch(url)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error("Error fetching data");
                })
                .then(data => {
                    alert('Get DB');
                    $scope.users = data.data;
                })
                .catch(error => {       
                    alert("Error: ", error);
                });
        };



    };
})()

