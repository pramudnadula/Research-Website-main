document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.hero-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(function (image, i) {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    // Show the first image initially
    showImage(currentIndex);

    setInterval(changeImage, 4000); // Change image every 3 seconds (adjust as needed)
});
