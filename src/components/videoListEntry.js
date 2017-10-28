angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    index: '<',
    video: '<',
    onClick: '<',

  },
  
  controller: function() {
    
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
