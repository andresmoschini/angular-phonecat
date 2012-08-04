﻿'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
        //console.debug(data);
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }

    $scope.ahora = new Date();
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];