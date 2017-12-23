
angular
    .module("reddit")
    .controller("PostsController", PostsController)
    
function PostsController(httpService) {
    
    // #TODO: Need posts with usernames
    httpService.getPosts()
        .then((posts) => {
            this.posts = posts
            
            // httpService.getPostsandUsers()
        })
    
   

}