/**
 * Code qui gère l'arborescence page 41
 * Dépend de la librairie js/jquery-3.5.1.min et js/maphighlight.js
 */
var audioOn = new Array();
let play = function(id){
    collAudio = document.getElementsByClassName('audiosrc');
    Array.prototype.filter.call(collAudio, function(audio){
        fullId = $(audio).attr("id");
        document.getElementById(fullId).pause();
    });
    if($.inArray(id, audioOn) == -1){
        document.getElementById("audio"+id).play();
        audioOn.push(id);	
    } else {
        document.getElementById("audio"+id).pause();
        index = audioOn.indexOf(id);
        audioOn.splice(index, 1);
    }
    if ($(".audio.audio"+id).length){
        $(".audio.audio"+id).toggle();
    }
}

$(function() {
    $('.map').maphilight();
});