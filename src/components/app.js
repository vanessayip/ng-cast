angular.module('video-player')

.component('app', {
  
  // bindings: {
  //   video: '<' // one direction, downstream
  // },
  
  controller: function() {
    console.log('app');
    console.log(this);
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = (index) => {
      // console.log(this)
      this.currentVideo = this.videos[index];
    };
    //console.log(this.currentVideo);
  },
  
  templateUrl: 'src/templates/app.html'
});
