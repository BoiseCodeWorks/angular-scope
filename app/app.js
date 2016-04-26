var app = angular.module('ng-scope', [])

app.controller('MainController', function($scope){
    var mc = this;
    mc.message = 'I AM HERE from the MC';
    
    //Default for showing view 1 on page load
    mc.showing = 1;
        
    $scope.messageFromScope = 'This is from $scope on the MC'
    
    $scope.showCC = function(cc){
        mc.showing = cc;
    }
})

app.controller('ChildController1', function($scope){
    var cc1 = this;
    cc1.message = 'This is from cc1'
    
    $scope.messageFromScope = 'This is from $scope on the CC1'
})

app.controller('ChildController2', function($scope){
    var cc2 = this;
    
    cc2.message = 'THis is from cc2';
    
    $scope.messageFromScope = 'this is from $scope on cc2'
        
})
