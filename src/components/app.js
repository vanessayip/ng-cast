angular.module('video-player')

.component('app', {
  
  // bindings: {
  //   video: '<' // one direction, downstream
  // },
  
  controller: function(youTube) {
    console.log('app');
    console.log(this);
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = (index) => {
      // console.log(this)
      this.currentVideo = this.videos[index];
    };
    
    this.handleClick = (query) => {
      // console.log('hi')
      this.videos = youTube.search(query, (function(responseData) {
        this.videos = responseData;
        this.currentVideo = this.videos[0];
      }).bind(this)); // video data
      console.log('returned: ' + this.videos);
    };
    //console.log(this.currentVideo);
  },
  
  templateUrl: 'src/templates/app.html'
});
