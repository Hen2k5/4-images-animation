let currentIndex = 0;
const totalImages = document.querySelectorAll('.image').length;

function showImage(index) {
  const imagesContainer = document.querySelector('.images');
  const newTransformValue = -index * 100 + '%';
  imagesContainer.style.transform = `translateX(${newTransformValue})`;
  currentIndex = index;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}