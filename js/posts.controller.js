
angular
    .module("reddit")
    .controller("PostsController", PostsController)
    
function PostsController(httpService) {
    
    httpService.getPosts()
      .then((posts) => {
        this.posts = posts
        // httpService.getPostsandUsers()
      })
}