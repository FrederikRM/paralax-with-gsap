console.log('Hello World!');

const imgLeft = document.querySelector('.img-left');
const imgRight = document.querySelector('.img-right');

console.log(imgLeft, imgRight);

imgLeft.classList.add('img-left-float');
imgRight.classList.add('img-right-float');

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    console.log('You are not at the top');
    imgLeft.classList.remove('img-left-float');
    imgRight.classList.remove('img-right-float');
  } else {
    console.log('You are at the top');
    imgLeft.classList.add('img-left-float');
    imgRight.classList.add('img-right-float');
  }
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to('.img-left', {
  x: '-100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.img-left',
    start: 'top center',
    scrub: true,
    end: 'bottom top',
  },
});

gsap.to('.img-right', {
  x: '400%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.img-right',
    start: 'top center',
    scrub: true,
    end: 'bottom top',
  },
});

// Move shape-1 off screen
gsap.to('.shape-1', {
  y: '-400%', // Adjust the percentage as needed
  ease: 'none',
  scrollTrigger: {
    trigger: '.shape-1',
    start: 'top center', // Adjust start point
    scrub: true, // Smooth scrolling effect
    end: 'top top', // Adjust end point
  },
});

// Move shape-2 off screen
gsap.to('.shape-2', {
  y: '-250%', // Move this shape faster or further up
  ease: 'none',
  scrollTrigger: {
    trigger: '.shape-2',
    start: 'top 80%', // Starts later than shape-1
    scrub: true,
    end: 'top top',
  },
});

// Move shape-3 off screen
gsap.to('.shape-3', {
  y: '-200%', // Move this shape even faster or further up
  ease: 'none',
  scrollTrigger: {
    trigger: '.shape-3',
    start: 'top 90%', // Starts even later than shape-2
    scrub: true,
    end: 'top top',
  },
});

// Move shape-4 off screen
gsap.to('.shape-4', {
  y: '-1000%', // Move this shape the fastest or furthest up
  ease: 'none',
  scrollTrigger: {
    trigger: '.shape-4',
    start: 'top bottom', // Starts later than others, as it's further down the page
    scrub: true,
    end: 'top top',
  },
});
