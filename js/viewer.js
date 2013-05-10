function preloadImage(src, callback) {
    $('<img />').attr('src', src)
    .load(function(){
        callback(this);
    });
}

var frames = ['|', '/', '-', '\\'];
var frameIndex = 0;

function nextFrame() {
    frameIndex = frameIndex == frames.length - 1 ? 0 : frameIndex + 1;
    return frames[frameIndex];
}

$(document).ready(function() {
    var myTimer = setInterval(function() {
        $('.spinner').html(nextFrame());
    }, 100);

    var src = $('#gif').data('src');

    preloadImage(src, function(img) {
        clearInterval(myTimer);
        $('#loading').hide();
        $('#gif').css('background-image', 'url(' + src + ')');
    });
});
