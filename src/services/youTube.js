angular.module('video-player')
.service('youTube', function($http) {
  //can include the $window service, used for the api key
  this.search = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: "AIzaSyADtYE6b7LtesYKQMI6z0DoD2x2QiSUWds", //use $window.YOUTUBE_API_KEY
        maxResults: '5',
        part: 'snippet',
        q: query,
        type: 'video',
        videoEmbeddable: true,
      }  
    })
    .then(
      function successCallback(response) {
        // console.log('success response', response.data.items);
        //can write {data} inside the parameter b/c of es6
        callback(response.data.items);
      }, function errorCallback(response) {
        response.data.error.errors.forEach(function(err) {
          console.log(err.message);
        });
        // console.log('error response', response);
      }); 
  };
});
