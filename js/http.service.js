
angular
    .module("reddit")
    .service("httpService", httpService)
    
function httpService($http) {
    this.getPosts = function() {
        return $http.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                return res.data
            })
    }
    
    this.getPost = (postId) => {
      return $http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
          return res.data
        })
    }
    
    this.getUsers = () => {
      return $http.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          return res.data
        })
    }
    
    this.getUser = (userId) => {
      return $http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          return res.data
        })
    }
}