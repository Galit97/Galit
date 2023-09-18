const images = [
    "IMAGE_URL_1",
    "IMAGE_URL_2",

];
let currentImageIndex = 0;

function preloadImages() {
    for (let i = 0; i < images.length; i++) {
        const img = new Image();
        img.src = images[i];
    }
}

function updateGallery() {
    const gallery = document.getElementById("gallery");
    if (gallery ) gallery.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

window.onload = function() {
    preloadImages();
    setInterval(updateGallery, 10000); // Change image every 10 seconds (adjust as needed)
};