'use strict';

/* Controllers */

function PhoneListCtrl($scope, $routeParams, $location, $browser, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    //$scope.testField = $routeParams.testParameter;
    /*
    $scope.$watch(function () { return $location.hash() }, function (value) {
        $scope.testParameter = value;
    });

    $scope.$watch('testParameter', function (value) {
        $location.hash(value).replace();
    });
    */

    $scope.$watch(function () { return $location.search().testParameter }, function (value) {
        $scope.testParameter = value;
    });

    $scope.$watch('testParameter', function (value) {
        //$location.search({ testParameter: value }).replace();
        //$browser.url($location.absUrl(), $location.$$replace);
        $location.search({ testParameter: value }).preventLocationChangedEvent();
    });
    
    /*
    $scope.testChange = function () {
        $location.search({ testParameter: $scope.testField });
    };
    */
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

    $scope.ahora = new Date();
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];