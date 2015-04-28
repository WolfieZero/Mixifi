// ============================================================================
// Service: iTunes API
// ============================================================================


Mixifi.factory('iTunesAPI', function( $http ){ var


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
        callback: 'JSON_CALLBACK',
        country: 'GB',
        media: 'music',
        entity: 'song',
        version: 2,
        limit: 1,
        lang: 'en_us'
    },


    /**
     * Takes the request and parses into the API call
     *
     * @param   {string}  req  Request for iTunes API
     *
     * @return  {null}
     */
    _requestJSON = function( req, callback ) {

        var apiURL = _rootURL + '?' + req;

        angular.forEach(_staticParams, function(val, key){
            apiURL += '&' + key + '=' + val;
        });

        $http({
            method: 'JSONP',
            url: apiURL
        })
            .success(function(data, status, headers) {
                iTunesAPI.tracks.push( data.results[0] );
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
    iTunesAPI = {

        tracks: [],

        artistTrack: function( artist, track, callback ) {

            var req = 'term=' + encodeURIComponent( artist + '-' + track );
            _requestJSON( req, callback );

        }

    };

    return iTunesAPI;

});
