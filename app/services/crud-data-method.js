{
    'use strict'
    angular
        .module('crud-http')
        .service('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        return {
            getDataListUsers: getDataListUsers,
            addUserToList: addUserToList,
            deleteUserFromList: deleteUserFromList,
            updateSelectedUser: updateSelectedUser,
            getUser: getUser
        };

        function getUser(data) {
            return $http.get(`https://test-users-api.herokuapp.com/users/${data}`)
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                
                return response.data.data;
            }     
            function getDataFailed(error) {
                alert.error('XHR Failed for getAvengers.' + error.data);
            }     
    }


        function getDataListUsers() {
            return $http.get('https://test-users-api.herokuapp.com/users/')
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                return response.data.data;
            }

            function getDataFailed(error) {
                alert.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function addUserToList(data) {
            console.log(`add User: ${data}`)
            return $http.post('https://test-users-api.herokuapp.com/users/', data)
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                console.log(response)
                return response.data;
            }

            function getDataFailed(error) {
                alert.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function updateSelectedUser(data) {
            console.log(`update user : ${data.id}
            input${data}`)
            return $http.put(`https://test-users-api.herokuapp.com/users/${data.id}`, data)
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                console.log(response)
                return response.data;
            }

            function getDataFailed(error) {
                alert('XHR Failed for getAvengers.' + error.data);
            }
        }


        function deleteUserFromList(data) {
            console.log(`delete user : ${data}`)
            return $http.delete(`https://test-users-api.herokuapp.com/users/${data}`)
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                console.log(response)
                return response.data;
            }

            function getDataFailed(error) {
                alert.error('XHR Failed for getAvengers.' + error.data);
            }
        }


    };
}