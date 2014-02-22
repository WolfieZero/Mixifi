'use strict';

Mixifi.controller('mixifi', function( $scope, iTunesAPI ) {

    console.log('mixifi loaded');

    $scope.placeholder = 'Simply drop your playlist in here to get prices on iTunes';

    $scope.dosomething = function () {
        iTunesAPI.artistTrack('The Wonder Years', 'The Living Room Song');
    };

});