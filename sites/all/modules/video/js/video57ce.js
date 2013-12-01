$(document).ready(function() {
  //lets see if we have any jmedia movies
  if($.fn.media) {
    $('.jmedia').media();
  }
	
  if(Drupal.settings.video) {
    $.fn.media.defaults.flvPlayer = Drupal.settings.video.flvplayer;
  }
	
  //lets setup our colorbox videos
  $('.video-box').each(function() {
    var url = $(this).attr('href');
    var data = $(this).metadata();
    var width = data.width;
    var height= data.height;
    var player = Drupal.settings.video.player; //player can be either jwplayer or flowplayer.
    $(this).colorbox({
      html: '<a id="video-overlay" href="'+url+'" style="height:'+height+'; width:'+width+'; display: block;"></a>',
      onComplete:function() {
        if(player == 'flowplayer') {
          flowplayer("video-overlay", Drupal.settings.video.flvplayer, {
            clip: {
              autoPlay: Drupal.settings.video.autoplay,
              autoBuffering: Drupal.settings.video.autobuffer
            }
          });
        } else {
          $('#video-overlay').media({
            flashvars: {
              autostart: Drupal.settings.video.autoplay
            },
            width:width,
            height:height
          });
        }
      }
    });
  });
});

