angular.module('video-player')

.component('search', {
  bindings: {
    handleClick: '<'
  },
  
  controller: function () {
    // this.testOutput = (query) => {
    //   // console.log('hi')
    //   console.log('query', query); // video data
    // };
  },
  
  templateUrl: 'src/templates/search.html'
});
