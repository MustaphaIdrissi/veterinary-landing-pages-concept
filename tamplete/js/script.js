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