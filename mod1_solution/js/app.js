(function (){
  'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    //$scope.message = getMessage($scope.lunchMenu);
    $scope.getMsg = function (){
      $scope.message = getMessage ($scope.lunchMenu);
    }
  }

  function getMessage (items){
    if (items == undefined || items == ""){
      return "Please enter data first";
    }
    var MenuLength = items.split(",").length;
    if (MenuLength >0 && MenuLength< 4 ){
      return "Enjoy!";
    } else if (MenuLength >=4){
      return "Too Much!";
    }
  }

})();
