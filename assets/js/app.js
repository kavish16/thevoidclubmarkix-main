document.fonts.ready.then(() => {
  // Detect screen width and set particle count accordingly
  let particleCount = 7; // default for desktop/tablet
  if (window.innerWidth <= 768) {
    particleCount = 5; // phones
  } else if (window.innerWidth >= 1200) {
    particleCount = 10; // very large screens
  }

  tsParticles.load("particles-js", {
    particles: {
      number: { value: particleCount },
      color: { value: "#FFFFFF" }, // Bright white
      shape: {
        type: "char",
        options: {
          char: {
            value: [
              "GROUP DISCUSSION", 
              "TUX TALES", 
              "PYRANK SHOWDOWN", 
              "SPRITE SHOWDOWN", 
              "BYTE THE RHYTHM", 
              "WEBBED", 
              "LENS AND LAYERS", 
              "MAZE AND MAYHEM", 
              "REEL RUMBLE", 
              "COGNITOFLOW",
              "FRAMEWARS",
              "OVERCLOCKED",
              "QUIZ",
              "SHERLOCKED",
              "SURPRISE",
              "ZEN OF CODE"
            ],
            font: "Pixelify Sans",
            style: "",
            weight: "300",
          }
        }
      },
      opacity: { value: 0.3 },
      size: { value: 8},
      move: {
        enable: true,
        speed: 2,
        direction: "none", // free/random movement
        random: false,
        straight: false,
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 2 }
      }
    },
    retina_detect: true
  });
});
