'use strict';

/* Filters */

angular.module('phonecatFilters', [])
    .filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    })
    .filter('sino', function () {
        return function (input) {
            return input ? 'SI' : 'NO';
        };
    });