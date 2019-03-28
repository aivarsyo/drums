const boom = document.querySelector("#boom");
const hihat = document.querySelector("#hihat");
const clap = document.querySelector("#clap");
const kick = document.querySelector("#kick");
const openhat = document.querySelector("#openhat");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tink = document.querySelector("#tink");
const tom = document.querySelector("#tom");

document.addEventListener("keydown", keys);

function keys(e) {
    console.log("the pressed key is " + e.key + "(no. " + e.which + ")");
    if (e.which == 87) {
        boom.currentTime = 0;
        boom.play();
    } else if (e.which == 69) {
        clap.currentTime = 0;
        clap.play();
    } else if (e.which == 82) {
        hihat.currentTime = 0;
        hihat.play();
    } else if (e.which == 83) {
        kick.currentTime = 0;
        kick.play();
    } else if (e.which == 68) {
        openhat.currentTime = 0;
        openhat.play();
    } else if (e.which == 70) {
        ride.currentTime = 0;
        ride.play();
    } else if (e.which == 88) {
        snare.currentTime = 0;
        snare.play();
    } else if (e.which == 67) {
        tink.currentTime = 0;
        tink.play();
    } else if (e.which == 86) {
        tom.currentTime = 0;
        tom.play();
    }
}
