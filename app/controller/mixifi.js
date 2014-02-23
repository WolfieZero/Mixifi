'use strict';

Mixifi.controller('mixifi', function( $http, $scope, SpotifyAPI, iTunesAPI ) {

    $scope.placeholder   = 'Simply drop your playlist in here to get prices on iTunes';
    $scope.spotifytracks = "http://open.spotify.com/track/0hAKD3hdy0RUPiPJFz270S http://open.spotify.com/track/1yUUTiVGC0wNLmnKM55KVX http://open.spotify.com/track/0w4q7zTJKN0oF6JgNl44ZC";
    $scope.spotify       = SpotifyAPI;
    $scope.itunes        = iTunesAPI;
    $scope.tracks        = [];


    $scope.mergeData = function( data ) {

        var added = false,
            numOfTracks = $scope.tracks.length;

        while( added === false) {
            angular.forEach( $scope.tracks, function( val, key ) {
                //if( !angular.isObject($scope.tracks[key].itunes) ) {
                if(
                    data.results[0].artistName === $scope.tracks[key].artists[0].name &&
                    data.results[0].trackName  === $scope.tracks[key].name
                ) {
                    $scope.tracks[key].itunes = data.results[0];
                    added = true;
                } else if ( numOfTracks >= (key-1) ) {
                    added = true;
                }
            });
        }

    };


    $scope.itunesData = function( data ) {

        $scope.tracks.push( data.track );
        iTunesAPI.artistTrack( data.track.artists[0].name, data.track.name, $scope.mergeData );

    };


    $scope.process = function () {

        SpotifyAPI.getTracks( $scope.spotifytracks, $scope.itunesData );

    };

});
