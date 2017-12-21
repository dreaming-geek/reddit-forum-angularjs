
angular
  .module("reddit")
  .controller("PostDetailController", PostDetailController)
  
function PostDetailController($routeParams, httpService) {
  // #TODO: Make a function or service to check the $routeParams to see if it is valid
  this.postId = $routeParams.postId
  
  httpService.getPost(this.postId)
        .then((post) => {
            this.post = post
            console.log(post)
        })
}