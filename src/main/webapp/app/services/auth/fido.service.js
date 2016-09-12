/**
 * Created by eugeniuparvan on 8/30/16.
 */
(function () {
    'use strict';

    angular
        .module('credmgrApp')
        .factory('Fido', Fido);

    Fido.$inject = ['$resource'];

    function Fido($resource) {
        var service = $resource('api/openid/fido', {id: '@id'}, {
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                },
                isArray: true
            },
            'update': {
                method: 'PUT'
            },
            'delete': {
                url: 'api/openid/fido/:id',
                method: 'DELETE'
            }
        });
        return service;
    }
})();
