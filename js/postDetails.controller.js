
angular
  .module("reddit")
  .controller("PostDetailController", PostDetailController)
  
function PostDetailController($routeParams, httpService, $location) {
  
  if($routeParams.postId === "0") {
    $location.path("/")
  }
  
  this.postId = $routeParams.postId
  
  httpService.getPost(this.postId)
        .then((post) => {
            this.post = post
        })
}