
angular
    .module("reddit")
    .service("httpService", httpService)
    
function httpService($http, $q) {
  let apiUrl = "https://jsonplaceholder.typicode.com/"
  // #TODO: make error case for each $http call
    this.getPosts = () => {
        return $http.get(`${apiUrl}posts`)
            .then((res) => {
                return res.data
            })
    }
    
    this.getPost = (postId) => {
      return $http.get(`${apiUrl}posts/${postId}`)
        .then((res) => {
          return res.data
        })
    }
    
    this.getUsers = () => {
      return $http.get(`${apiUrl}users`)
        .then((res) => {
          return res.data
        })
    }
    
    this.getUser = (userId) => {
      return $http.get(`${apiUrl}users/${userId}`)
        .then((res) => {
          return res.data
        })
    }
    
    this.getPostsandUsers = () => {
      let posts = this.getPosts()
      let users = this.getUsers()
      
      $q.all([posts, users])
        .then((results) => {
          // console.log(results)
          // results[0] is posts
          // results[1] is users
          for (let post of results[0]) {
            for (let user of results[1]) {
              if(post.userId === user.id) {
                
              }
            }
          }
        })
    }
}