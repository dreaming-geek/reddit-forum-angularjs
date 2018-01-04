
angular
  .module("reddit")
  .controller("PostDetailController", PostDetailController)
  
function PostDetailController($routeParams, httpService, $location) {
  
  if($routeParams.postId === "0") {
    $location.path("/")
  }
  
  this.postId = $routeParams.postId
  
  // get post and user
    httpService.getPostandUser(this.postId)
      .then((res) => {
        this.post = res
      })


  // get comments
  // NOTE: comments data does not contain a userId, nor do the emails match in the users info
  httpService.getComments(this.postId)
    .then((comments) => {
      this.comments = comments
    })
}