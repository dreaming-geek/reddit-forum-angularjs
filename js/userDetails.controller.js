
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
    
  httpService.getUserPosts(this.userId)
    .then((posts) => {
      this.posts = posts
    })
    
  this.updateName = (nameValue) => {
    if(!nameValue) return 0
    httpService.updateUser(this.userId, {"name" : nameValue})
      .then((response) => {
        if(response.status === 200) {
          angular.element(document.getElementById("user.nameCheck"))[0].checked = false
          angular.element(document.getElementById("user.name"))[0].disabled = true
        }
      })
  }
  
  this.updateUserName = (usernameValue) => {
    if(!usernameValue) return 0
    httpService.updateUser(this.userId, {"username" : usernameValue})
      .then((response) => {
        if(response.status === 200) {
          angular.element(document.getElementById("user.usernameCheck"))[0].checked = false
          angular.element(document.getElementById("user.username"))[0].disabled = true
        }
      })
  }
  
}