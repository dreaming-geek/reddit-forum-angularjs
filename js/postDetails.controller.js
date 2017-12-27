
angular
  .module("reddit")
  .controller("PostDetailController", PostDetailController)
  
function PostDetailController($routeParams, httpService, $location) {
  
  if($routeParams.postId === "0") {
    $location.path("/")
  }
  
  this.postId = $routeParams.postId
  
  // get post
  httpService.getPost(this.postId)
    .then((post) => {
      this.post = post
    })
        
  // get comments
  // NOTE: comments data does not contain a userId, nor do the emails match in the users info
  httpService.getComments(this.postId)
    .then((comments) => {
      this.comments = comments
    })
}