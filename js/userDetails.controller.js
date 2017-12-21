
angular
  .module("reddit")
  .controller("UserDetailController", UserDetailController)
  
function UserDetailController($routeParams, httpService) {
  // #TODO: Make a function or service to check the $routeParams to see if it is valid
  this.userId = $routeParams.userId
  
  httpService.getUser(this.userId)
        .then((user) => {
            this.user = user
        })
}