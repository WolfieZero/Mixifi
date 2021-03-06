// ============================================================================
// Service: Spotify API
// ============================================================================


Mixifi.factory('SpotifyAPI', function( $http ){ var


    /**
     * Spotify's root URL for lookups
     *
     * @type  {String}
     */
    _rootLookupURL = 'http://ws.spotify.com/lookup/1/.json',


    /**
     * Spotify's root URL for search
     *
     * @type  {String}
     */
    _rootSearchURL = 'http://ws.spotify.com/search/1/',



    /**
     * Extracts (and rewrites) a URL to a Spotify URI
     *
     * @param   {string}  url  Spotify URL
     *
     * @return  {string}
     */
    _extractURI = function( url ) {

        var uri        = url.replace('http://open.spotify.com/', '').replace('/', ':'),
            spotifyURI = 'spotify:' + uri;

        return spotifyURI;

    },


    _requestLookupJSON = function( uri, callback ) {

        var jsonData,
            apiURL = _rootLookupURL + '?uri=' + uri;

        //CORS support
        //delete $http.defaults.headers.common['X-Requested-With'];

        return $http.get(apiURL)
            .success(function( data ) {
                SpotifyAPI.tracks.push( data.track );
                if( typeof callback === 'function' ) {
                    callback( data );
                }
            });

    },


    /**
     * Return object
     *
     * @type  {Object}
     */
    SpotifyAPI = {

        tracks: [],

        getTracks: function( rawData, callback ) {

            var tracks,
                spotifyData = [];

            // check if string and if so make it an array
            if( typeof rawData === 'string') {
                rawData = rawData.split(' ');
            };

            angular.forEach(rawData, function(val, key){
                var uri = _extractURI( val );
                _requestLookupJSON( uri, callback );
            });

        }

    };

    return SpotifyAPI;

});
