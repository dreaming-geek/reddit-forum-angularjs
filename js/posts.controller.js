
angular
    .module("reddit")
    .controller("PostsController", PostsController)
    
function PostsController(httpService) {
    let self = this
    
    // self.getPosts = function() {
    //     httpService.getPosts()
    //         .then((posts) => {
    //             self.posts = posts
    //             console.log(self.posts)
    //         })
    // }
    
    httpService.getPosts()
        .then((posts) => {
            self.posts = posts
        })
    
    
    
    // console.log($http.get("https://jsonplaceholder.typicode.com/posts"))
}