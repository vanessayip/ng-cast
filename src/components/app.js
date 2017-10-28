angular.module('video-player')

.component('app', {
  
  // bindings: {
  //   videoData: '<' // one direction, downstream
  // },
  
  controller: function() {
    console.log('app');
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    //console.log(this.currentVideo);
  },
  
  templateUrl: 'src/templates/app.html'
});
