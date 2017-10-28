angular.module('video-player')

.component('app', {

  controller: function(youTube) {
    console.log('app');
    console.log(this);
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
   
    
    this.selectVideo = (index) => {
      //works if you passed in the reference to the video instead of index
      // console.log(this)
      this.currentVideo = this.videos[index];
    };
    
    this.handleClick = (query) => {
      this.videos = youTube.search(query, (function(responseData) {
        this.videos = responseData;
        this.currentVideo = this.videos[0];
      }).bind(this)); // video data
      console.log('returned: ' + this.videos);
    };
  },
  
  templateUrl: 'src/templates/app.html'
});
