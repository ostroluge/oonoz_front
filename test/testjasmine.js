/**
 * Created by Jeremy on 30/11/2016.
 */

describe('Controller : LoginCtrl', function() {
    'use strict';
    var LoginCtrl;

    beforeEach(module('oonozApp'));

    beforeEach(inject(function ($controller) {
        LoginCtrl = $controller('LoginCtrl', {

        });
    }));


    it('should be defined', function() {
        expect(LoginCtrl).toBeDefined();
    });

});