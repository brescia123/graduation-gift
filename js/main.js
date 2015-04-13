$(function() {
	$('#bgvid')[0].play();
    $('#bgvidisney').click(function() {
        if (this.paused == false) {
            $('#clickme').show();
            this.pause();
        } else {
            $('#clickme').hide();
            this.play();
        }
    });
    $('#clickme').click(function() {
    	    var video = $('#bgvidisney')[0];
        if (video.paused == false) {
            $('#clickme').show();
            video.pause();
        } else {
			video.play();
            $('#clickme').hide();
        }
    });
});
