
angular
    .module("reddit")
    .controller("PostsController", PostsController)
    
function PostsController(httpService) {
    
    httpService.getPostsandUsers()
      .then((res) => {
        this.posts = res
      })
}