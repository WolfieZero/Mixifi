'use strict';

Mixifi.controller('mixifi', function( $http, $scope, SpotifyAPI, iTunesAPI ) {

    $scope.placeholder = 'Simply drop your playlist in here to get prices on iTunes';
    $scope.spotifytracks = "http://open.spotify.com/track/0hAKD3hdy0RUPiPJFz270S http://open.spotify.com/track/1yUUTiVGC0wNLmnKM55KVX http://open.spotify.com/track/0w4q7zTJKN0oF6JgNl44ZC";
    $scope.spotify = SpotifyAPI;
    $scope.itunes = iTunesAPI;
    $scope.tracks = [];

    $scope.process = function () {
        SpotifyAPI.getTracks($scope.spotifytracks);
        console.log('process()');
        console.log($scope.spotify.tracks);/*
        angular.forEach(SpotifyAPI.tracks, function( track, key ){
            var track = {
                    spotify: track,
                    itunes: iTunesAPI.artistTrack(
                        track.artists[0].name,
                        track.name
                    )
                };
                console.log(track);
            $scope.track.push( track );
        });*/
        //iTunesAPI.artistTrack('The Wonder Years', 'The Living Room Song');
    };

});
