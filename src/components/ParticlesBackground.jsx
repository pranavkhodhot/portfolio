// src/components/ParticlesBackground.js

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadSlim(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      className="absolute inset-0 z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "rgb(7, 9, 13)",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              // mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 1.5,
            },
          },
        },
        particles: {
          color: {
            value: ["rgb(52, 93, 225)", "rgb(18, 27, 59)"],
          },
          links: {
            // color: "#ffffff",
            // distance: 150,
            enable: false,
            // opacity: 0.5,
            // width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              decay: 0,
              delay: 0,
              minimumValue: 0,
              startValue: "random",
              mode: "auto",
              destroy: "none",
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
