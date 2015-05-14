Mixifi.controller('mixifi', function( $http, $scope, SpotifyAPI, iTunesAPI ) {

    $scope.placeholder   = 'Simply drop your playlist or individual trakcs in here to get prices on iTunes';
    $scope.spotifytracks = '';
    $scope.spotify       = SpotifyAPI;
    $scope.itunes        = iTunesAPI;
    $scope.tracks        = [];


    $scope.mergeData = function( data ) {

        var added = false,
            numOfTracks = $scope.tracks.length,
            grabTracks = function( val, key ) {
                if(
                    data.results[0].artistName === $scope.tracks[key].artists[0].name &&
                    data.results[0].trackName  === $scope.tracks[key].name
                ) {
                    $scope.tracks[key].itunes = data.results[0];
                    added = true;
                } else if ( numOfTracks >= (key-1) ) {
                    added = true;
                }
            };


        while( added === false) {
            angular.forEach( $scope.tracks, grabTracks );
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
