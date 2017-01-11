(function (){
  'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.getMsg = function (){
      var items = $scope.lunchMenu;
      if (items == undefined || items == ''){
        $scope.message = "Please enter data first";
        $scope.msgStyle = "text-danger";
        $scope.inputStyle = "border-color:red;";
      } else {
        $scope.msgStyle = "text-success";
        $scope.inputStyle = "border-color:green;";
        var MenuLength = items.split(",").length;
        if (MenuLength >0 && MenuLength< 4 ){
          $scope.message = "Enjoy!";
        } else if (MenuLength >=4){
          $scope.message = "Too Much!";
        }
      }
    }
  }

})();
