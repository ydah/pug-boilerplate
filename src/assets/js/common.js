const image = document.querySelector('.main-image');
image.animate(
  {
    opacity: [0, 1],
  },
  {
    duration: 3000,
    iterations: Infinity,
    easing: 'ease-in-out',
  }
);
