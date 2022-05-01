/**
 * Code qui gère l'arborescence page 23
 * Dépend de la librairie js/jquery-3.5.1.min 
 */
 var player, playerId, id;
$(function() {
    $('.photo-legende').off("click").on("click", function(){
        /*id = $(this).data("id");
        video = $(".video-legende[data-id="+id+"]").html();
        width = $(this).css("width");
        $(".div-legende[data-id="+id+"]").css("width", width*2).html(video);*/
        id = $(this).data("id");
        videoId = $(this).data("videoid");
        loadVideo(videoId, id);
    });
});

function loadVideo(videoId, id) {
    playerId = videoId;
    console.log(id);
    $("#div_"+id).append("<div id='player_"+id+"' class='div-player'></div>");
    onYouTubeIframeAPIReady();
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player_'+id, {
        height: '390',
        width: '640',
        videoId: playerId,
        enablejsapi:1,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    console.log(event.data);
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 100);
        done = true;
    } else if (event.data == YT.PlayerState.ENDED){
        $(".div-player").remove();
    } else if (event.data == YT.PlayerState.PAUSED){
        $(".div-player").remove();
    }
}
