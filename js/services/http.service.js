
angular
    .module("reddit")
    .service("httpService", httpService)
    
function httpService($http, $q) {
  let apiUrl = "https://jsonplaceholder.typicode.com/"
  
    this.getPosts = () => {
        return $http.get(`${apiUrl}posts`)
            .then((res) => {
                return res.data
            })
            .catch(this.errorCheck)
    }
    
    this.getPost = (postId) => {
      return $http.get(`${apiUrl}posts/${postId}`)
        .then((res) => {
          return res.data
        })
        .catch(this.errorCheck)
    }
    
    this.getComments = (postId) => {
      return $http.get(`${apiUrl}posts/${postId}/comments`)
        .then((res) => {
          return res.data
        })
        .catch(this.errorCheck)
    }
    
    this.getUsers = () => {
      return $http.get(`${apiUrl}users`)
        .then((res) => {
          return res.data
        })
        .catch(this.errorCheck)
    }
    
    this.getUserPosts = (userId) => {
      return $http.get(`${apiUrl}users/${userId}/posts`)
        .then((res) => {
          return res.data
        })
        .catch(this.errorCheck)
    }
    
    this.getUser = (userId) => {
      return $http.get(`${apiUrl}users/${userId}`)
        .then((res) => {
          return res.data
        })
        .catch(this.errorCheck)
    }
    
    this.updateUser = (userId, data) => {
      return $http.put(`${apiUrl}users/${userId}`, data)
        .then((res) => {
          return res
        })
        .catch(this.errorCheck)
    }
    
    this.getPostandUser = (postId) => {
      let bothArr = []
      return this.getPost(postId)
        .then((post) => {
           return this.getUser(post.userId)
            .then((user) => {
              post.username = user.username
              return post
            })
        })
    }
    
    this.getPostsandUsers = () => {
      let posts = this.getPosts()
      let users = this.getUsers()
      
      return $q.all([posts, users])
        .then((results) => {
          let bothArr = []
          for(post of results[0]){
            for(user of results[1]){
              if(post.userId === user.id){
                post.username = user.username
                bothArr.push(post)
              }
            }
          }
          return bothArr
        })
    }
    
    this.errorCheck = (error) => alert("There was an error. Please try again.")
}