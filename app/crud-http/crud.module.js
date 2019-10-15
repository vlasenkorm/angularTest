{'use strict';


angular
    .module('crud-http',[])
    .component('crude', {
        templateUrl: '/crud-http/crud.template.html',
        controller: 'CrudController',
        controllerAS: 'crud'
      });
}