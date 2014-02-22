@ -1,32 +0,0 @@
'use strict';

// ============================================================================
// Service: Spotify API
// ============================================================================


Mixifi.factory('SpotifyAPI', function( $http ){

    var

    SpotifyAPI = {
        test: function() {
            alert('this');
        }
    };

    return SpotifyAPI;

});

/*
Mixifi.controller('mixifi', function( $scope, iTunesAPI ) {

    $scope.placeholder = 'Simply drop your playlist in here to get prices on iTunes';

    $scope.dosomething = function () {
        iTunesAPI.test();
    };

});
 */