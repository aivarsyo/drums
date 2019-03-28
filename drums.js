const boom = document.querySelector("#boom");
const hihat = document.querySelector("#hihat");
const clap = document.querySelector("#clap");
const kick = document.querySelector("#kick");
const openhat = document.querySelector("#openhat");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tink = document.querySelector("#tink");
const tom = document.querySelector("#tom");
const BoomText = document.querySelector("#bt1");
const ClapText = document.querySelector("#bt2");
const HihatText = document.querySelector("#bt3");
const KickText = document.querySelector("#bt4");
const OpenhatText = document.querySelector("#bt5");
const RideText = document.querySelector("#bt6");
const SnareText = document.querySelector("#bt7");
const TinkText = document.querySelector("#bt8");
const TomText = document.querySelector("#bt9");


document.addEventListener("keydown", keys);

function keys(e) {
    console.log("the pressed key is " + e.key + "(no. " + e.which + ")");
    if (e.which == 87) {
        boom.currentTime = 0;
        boom.play();
        BoomText.classList.toggle('enlarge');
    } else if (e.which == 69) {
        clap.currentTime = 0;
        ClapText.classList.toggle('enlarge');
        clap.play();
    } else if (e.which == 82) {
        hihat.currentTime = 0;
        HihatText.classList.toggle('enlarge');
        hihat.play();
    } else if (e.which == 83) {
        kick.currentTime = 0;
        KickText.classList.toggle('enlarge');
        kick.play();
    } else if (e.which == 68) {
        openhat.currentTime = 0;
        OpenhatText.classList.toggle('enlarge');
        openhat.play();
    } else if (e.which == 70) {
        ride.currentTime = 0;
        RideText.classList.toggle('enlarge');
        ride.play();
    } else if (e.which == 88) {
        snare.currentTime = 0;
        SnareText.classList.toggle('enlarge');
        snare.play();
    } else if (e.which == 67) {
        tink.currentTime = 0;
        TinkText.classList.toggle('enlarge');
        tink.play();
    } else if (e.which == 86) {
        tom.currentTime = 0;
        TomText.classList.toggle('enlarge');
        tom.play();
    }

}
