'use strict';

// ============================================================================
// Service: iTunes API
// ============================================================================


Mixifi.factory('iTunesAPI', function( $http ){

    var

    /**
     * iTunes API root url
     * Full URL example: https://itunes.apple.com/search?callback=JSON_CALLBACK&term=the+wonder+years+-+living+room+song&country=GB&media=music&entity=song&version=2&lang=en_us&limit=1
     *
     * @type  {string}
     */
    _rootURL = 'https://itunes.apple.com/search',


    /**
     * Sets up the static parameters
     *
     * @type  {Object}
     */
    _staticParams = {
        callback: 'Y',
        country: 'GB',
        media: 'music',
        entity: 'song',
        version: '2',
        lang: 'en_us'
    },


    _requestJSON = function( req ) {

        var apiURL = _rootURL + '?' + req;

        angular.forEach(_staticParams, function(val, key){
            apiURL += '&' + val + '=' + key;
        });

        console.log(apiURL);


        $http({
            method: 'JSONP',
            url: apiURL
        })
            .success(function(data, status, headers) {
                $scope.text = data;
            })
            .error(function(data, status, headers) {
                $scope.text = 'failed';
            });

    },


    /**
     * Return object
     *
     * @type  {Object}
     */
    iTunesAPI = {

        artistTrack: function( artist, track ) {

            var req = 'term=' + encodeURIComponent( artist + '-' + track );
            _requestJSON( req );

        }

    };

    return iTunesAPI;

});


/**
 * iTunes Interface
 *
 * @param   {object}  $scope  View scope
 * @param   {object}  $http   Handles HTTP requests
 *
 * @return  {null}
 *
Mixifi.controller('ITunes', function( $scope, $http ) {

    $scope.heading = 'iTunes';

    var apiURL = 'https://itunes.apple.com/search?callback=JSON_CALLBACK&term=the+wonder+years+-+living+room+song&country=GB&media=music&entity=song&version=2&lang=en_us&limit=1';

    $http({
        method: 'JSONP',
        url: apiURL
    })
        .success(function(data, status, headers) {
            $scope.text = data;
        })
        .error(function(data, status, headers) {
            $scope.text = 'failed';
        });

});


 */