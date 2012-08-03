'use strict';
/// <reference path="../lib/jasmine/jasmine-html.js" />
/// <reference path="../lib/jasmine/jasmine.js" />
/// <reference path="../lib/angular/angular-mocks.js" />
/// <reference path="../../app/lib/angular/angular.js" />
/// <reference path="../../app/js/app.js" />
/// <reference path="../../app/js/services.js" />
/// <reference path="../../app/js/controllers.js" />
/// <reference path="../../app/js/directives.js" />
/// <reference path="../../app/js/filters.js" />


/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });


    beforeEach(module('phonecatServices'));

    describe('PhoneListCtrl', function () {

        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').
                respond([{ name: 'Nexus S' }, { name: 'Motorola DROID'}]);
            scope = $rootScope.$new();
            ctrl = $controller(PhoneListCtrl, { $scope: scope });
        }));

        it('should create "phones" model with 2 phones fetched from xhr', function () {
            expect(scope.phones).toEqual([]);
            $httpBackend.flush();
            expect(scope.phones)
                .toEqualData([{ name: 'Nexus S' }, { name: 'Motorola DROID'}]);
        });

        it('should create "phones" model with 2 phones', function () {
            $httpBackend.flush();
            expect(scope.phones.length).toBe(2);
        });

        it('should set the default value of orderProp model', function () {
            expect(scope.orderProp).toBe('age');
        });
    });

    describe('PhoneDetailCtrl', function () {
        var scope, $httpBackend, ctrl;
        var xyzPhoneData = function () {
            return {
                name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
            }
        };

        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            ctrl = $controller(PhoneDetailCtrl, { $scope: scope });
        }));


        it('should fetch phone detail', function () {
            expect(scope.phone).toEqualData({});
            $httpBackend.flush();

            expect(scope.phone).toEqualData(xyzPhoneData());
        });

        it('should be default image', function () {
            expect(scope.mainImageUrl).toBeUndefined();
            $httpBackend.flush();

            expect(scope.mainImageUrl).toEqual(xyzPhoneData().images[0]);
        });

        it('should change the image', function () {
            $httpBackend.flush();
            expect(scope.mainImageUrl).toNotEqual(xyzPhoneData().images[1]);

            scope.setImage(xyzPhoneData().images[1]);

            expect(scope.mainImageUrl).toEqual(xyzPhoneData().images[1]);
        });
    });
});