'use strict';
var // just put that there...

// ============================================================================
// Mixifi.it app
// ============================================================================


// ----------------------------------------------------------------------------
// Require
// ----------------------------------------------------------------------------

require = [
    'ngRoute',
    'ngResource'
],


// ----------------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------------

routes = function( $routeProvider ) {

    $routeProvider
        .when('/', {
            templateUrl: 'view/main.html',
            controller: 'mixifi'
        })
        .when('/about/', {
            templateUrl: 'view/about.html'
        })
        .when( '/itunes/', {
            templateUrl: 'view/tests.html'
        })
        .when( '/spotify/', {
            templateUrl: 'view/tests.html'
        })
        .otherwise({
            redirectTo: '/'
        });

},


// ----------------------------------------------------------------------------
// Main App
// ----------------------------------------------------------------------------

Mixifi = angular
    .module( 'app', require )
    .config( routes );