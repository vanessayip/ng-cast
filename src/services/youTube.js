angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: "AIzaSyADtYE6b7LtesYKQMI6z0DoD2x2QiSUWds",
        maxResults: '5',
        part: 'snippet',
        q: query,
        type: 'video',
        videoEmbeddable: true,
      }  
    })
    .then(
      function successCallback(response) {
        console.log('success response', response.data.items);
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('error response', response);
      }); 
  };
});
