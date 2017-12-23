
angular
  .module("reddit")
  .config(redditRoutes)
  
function redditRoutes($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "/templates/home.html"
    })
    .when('/postDetails/:postId', {
      templateUrl: "/templates/postDetails.html"
    })
    .when('/userDetails/:userId', {
      templateUrl: "/templates/userDetails.html"
    })
    .otherwise({
      redirectTo: "/"
    })
    
    $locationProvider
      .hashPrefix('')
    
    
}
  
