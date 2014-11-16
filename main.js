(function() {
  'use strict';

  angular.module('gridComp', [
    'ngGrid',
    'ui.grid'
  ])
    .controller('mainCtrl',
      function($scope, data) {
        $scope.flags = {
          type: 'origin'
        };

        $scope.gridOptions = {
          data: 'data'
        };

        $scope.data = data;
      }
  );
}());