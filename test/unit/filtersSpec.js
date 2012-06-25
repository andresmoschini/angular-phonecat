'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {

    beforeEach(module('phonecatFilters'));

    describe('checkmarks', function () {
        it('should convert boolean values to unicode checkmark or cross',
            inject(function (checkmarkFilter) {
                console.debug(checkmarkFilter);
                expect(checkmarkFilter(true)).toBe('\u2713');
                expect(checkmarkFilter(false)).toBe('\u2718');
            }));
    });

    describe('sino', function () {
        it('should convert boolean values to SI o NO',
        inject(function (sinoFilter) {
            console.debug(sinoFilter);
            expect(sinoFilter(true)).toBe('SI');
            expect(sinoFilter(false)).toBe('NO');
        }));
    });

});
