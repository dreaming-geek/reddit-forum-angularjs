
angular
    .module("reddit")
    .service("httpService", httpService)
    
function httpService($http) {
    this.getPosts = function() {
        return $http.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.data
            })
    }
}