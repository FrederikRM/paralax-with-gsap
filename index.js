// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create floating animations for img-left and img-right
const floatLeft = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
floatLeft.to('.img-left', { y: '-3%', duration: 2, ease: 'power1.inOut' });

const floatRight = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
floatRight.to('.img-right', { y: '-5%', duration: 3, ease: 'power2.inOut' });

floatLeft.play();
floatRight.play();

// Add scroll event listener to control floating animations
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    console.log('You are at the top');
    floatLeft.play();
    floatRight.play();
  } else {
    console.log('You are not at the top');
    floatLeft.pause();
    floatRight.pause();
  }
});

// GSAP animations for img-left and img-right
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
