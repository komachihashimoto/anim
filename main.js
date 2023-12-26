'use strict';

const container = document.querySelector(".container");
  for(let i = 0; i <= 50; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
  }

  function animateBlocks(){
    anime({
      targets:".block",
      translateX: function(){
        return anime.random(-800, 700);
      },
      translateY: function(){
        return anime.random(-500, 500);
      },
      scale: function(){
        return anime.random(1,3);
      },
      background: function(){
        let r = anime.random(0, 255);
        let g = 0;
        let b = 0;
        return `rgb(${r}, ${g}, ${b})`;
      },
      easing: 'easeOutElastic',
      duration: 2000,
      delay: anime.stagger(20),
      complete: animateBlocks,
    });
  }

  animateBlocks();