(function(){
angular
    .module('app')
    .controller('translateController', translateController);

    translateController.$inject = ['$scope','$translate'];

function translateController($scope,$translate) {  
    $scope.changeLanguage = function(lang){
    $translate.use(lang); 
    }
    
    
}
})();