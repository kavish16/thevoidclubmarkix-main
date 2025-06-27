document.fonts.ready.then(() => {
  tsParticles.load("particles-js", {
    particles: {
      number: { value: 7 },
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
      opacity: { value: 0.3},
      size: { value: 8, random: true },
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


