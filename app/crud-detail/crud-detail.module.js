{'use strict';


angular
    .module('crud-detail',['ngRoute'])
    .component('crud-details', {
        templateUrl: 'crud-detail/crud-detail.template.html',
        controller: 'CrudDetaiController'
      });
}