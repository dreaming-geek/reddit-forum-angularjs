
angular
  .module("reddit")
  .config(redditRoutes)
  
function redditRoutes($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/templates/home.html"
    })
    .otherwise({
      redirect: "/"
    })
}
  
