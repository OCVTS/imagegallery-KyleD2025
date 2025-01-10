const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages);
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

//opens lightbox and syncronizes with the current index when an image is opened
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

//closes lightbox when clicking outside of the content
lightbox.addEventListener('click', (event) =>{
    if(event.target === lightbox){
     lightbox.classList.remove('visible');
    }
})

//show next image in the lightbox
document.getElementById('next').addEventListener('click', (event) =>{
    
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    

})

//shows previous image
document.getElementById('prev').addEventListener('click', (event) =>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;

})

//keyboard navigation
document.addEventListener('keydown', (event) =>{
    if (event.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }
    else if (event.key === 'ArrowLeft'){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;

    }
    else if(event.key === 'Escape'){
        lightbox.classList.remove('visible');
    }
})