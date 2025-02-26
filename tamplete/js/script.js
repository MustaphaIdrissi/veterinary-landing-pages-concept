function playVideo() {
    let container = document.querySelector('.video-container');
    let thumbnail = document.querySelector('.thumbnail');
    let overlay = document.querySelector('.overlay');
    let playButton = document.querySelector('.play-button');
    let video = document.querySelector('.video');

    // إخفاء الصورة والتراكب وزر التشغيل
    thumbnail.style.display = "none";
    overlay.style.display = "none";
    playButton.style.display = "none";

    // عرض الفيديو وتشغيله
    video.style.display = "block";
    video.play();

    // عند انتهاء الفيديو، إعادة الصورة والغلاف
    video.onended = function() {
        video.style.display = "none";
        thumbnail.style.display = "block";
        overlay.style.display = "block";
        playButton.style.display = "flex";
    };
}
function playVideo2() {
    let container = document.querySelector('.video-container1');
    let thumbnail = document.querySelector('.thumbnail1');
    let overlay = document.querySelector('.overlay1');
    let playButton = document.querySelector('.play-button1');
    let video = document.querySelector('.video1');

    // إخفاء الصورة والتراكب وزر التشغيل
    thumbnail.style.display = "none";
    overlay.style.display = "none";
    playButton.style.display = "none";

    // عرض الفيديو وتشغيله
    video.style.display = "block";
    video.play();

    // عند انتهاء الفيديو، إعادة الصورة والغلاف
    video.onended = function() {
        video.style.display = "none";
        thumbnail.style.display = "block";
        overlay.style.display = "block";
        playButton.style.display = "flex";
    };
}