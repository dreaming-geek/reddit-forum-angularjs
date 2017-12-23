
angular
  .module("reddit")
  .controller("UserDetailController", UserDetailController)
  
function UserDetailController($routeParams, httpService, $location) {
  if($routeParams.userId === "0") {
    $location.path("/")
  }
  
  this.userId = $routeParams.userId
  
  httpService.getUser(this.userId)
        .then((user) => {
            this.user = user
        })
}