app.controller('IndexController.js', function($scope, $location) {

    $scope.email = [];


    $scope.selectedMail = {};

    $scope.showReplay = false;

    $scope.replay = function(){
        $location.path("/#/replay");
    };

    $scope.silence = function($event){
        $event.stopPropagation();
    }


});