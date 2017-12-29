
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
            }, this.errorCheck)
    }
    
    this.getPost = (postId) => {
      return $http.get(`${apiUrl}posts/${postId}`)
        .then((res) => {
          return res.data
        }, this.errorCheck)
    }
    
    this.getComments = (postId) => {
      return $http.get(`${apiUrl}posts/${postId}/comments`)
        .then((res) => {
          return res.data
        }, this.errorCheck)
    }
    
    this.getUsers = () => {
      return $http.get(`${apiUrl}users`)
        .then((res) => {
          return res.data
        }, this.errorCheck)
    }
    
    this.getUserPosts = (userId) => {
      return $http.get(`${apiUrl}users/${userId}/posts`)
        .then((res) => {
          return res.data
        }, this.errorCheck)
    }
    
    this.getUser = (userId) => {
      return $http.get(`${apiUrl}users/${userId}`)
        .then((res) => {
          return res.data
        }, this.errorCheck)
    }
    
    this.updateUser = (userId, data) => {
      return $http.put(`${apiUrl}users/${userId}`, data)
        .then((res) => {
          return res
        }, this.errorCheck)
    }
    
    this.getPostsandUsers = () => {
      let posts = this.getPosts()
      let users = this.getUsers()
      
      $q.all([posts, users])
        .then((results) => {
          // results[0] is posts
          // results[1] is users
          
        })
    }
    
    this.errorCheck = (res) => res
}