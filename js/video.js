var video;
var volume;
var mute;
var slider;

document.addEventListener("DOMContentLoaded", function() {
 video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
 volume = document.getElementById("volume");
 mute = document.getElementById("mute");
 slider = document.getElementById("slider");

    document.getElementById("play").addEventListener("click", function() {
        volume.textContent = video.volume * 100 + "%";
        video.play();
        console.log("Play Video");
    });

    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

 document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

 document.getElementById("faster").addEventListener("click", function() {
  video.playbackRate /= 0.9;
  console.log("New speed is " + video.playbackRate);
    });

 document.getElementById("skip").addEventListener("click", function() {
  if (video.currentTime + 10 > video.duration) {
   video.currentTime = 0;
   console.log("Going back to the beginning");
  } else {
   video.currentTime += 10;
  }
  console.log("Current location is " + video.currentTime);
    });

 mute.addEventListener("click", function() {
  video.muted = !video.muted;
  mute.textContent = video.muted ? "Unmute" : "Mute";
  console.log(video.muted ? "Muted" : "Unmuted");
    });

 slider.addEventListener("input", function() {
  video.volume = slider.value / 100;
  volume.textContent = slider.value + "%";
  console.log("Video Volume: " + slider.value + "%");
    });

 document.getElementById("vintage").addEventListener("click", function() {
  video.classList.add("oldSchool");
  console.log("Changed to old school style");
    });

 document.getElementById("orig").addEventListener("click", function() {
  video.classList.remove("oldSchool");
  console.log("Changed to original style");
    });

 console.log("Good job opening the window");
});
