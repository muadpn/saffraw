"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const WallnutOverlay = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  // const particlesLoaded: any = (container: any): any => {
  //   console.log(container);
  // };
  return (
    <>
      <div className="absolute top-0 h-screen w-screen ">
        {init && (
          <Particles
            className=" full-screen-svh absolute -top-12 blur-[1.5px]  -z-10"
            id="tsparticles"
            // particlesLoaded={particlesLoaded}

            options={{
              fullScreen: {
                enable: false,
                zIndex: -100,
              },

              particles: {
                color: {
                  value: "#FFFFFF",
                },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  size: true,
                  speed: {
                    min: 1,
                    max: 6,
                  },
                },
                number: {
                  value: 100,
                  // density: {
                  //   enable: true,

                  // },
                },
                opacity: {
                  value: 1,
                  animation: {
                    enable: false,
                    startValue: "max",
                    destroy: "min",
                    speed: 0.3,
                    sync: true,
                  },
                },
                rotate: {
                  value: {
                    min: 0,
                    max: 360,
                  },
                  direction: "random",
                  move: true,
                  animation: {
                    enable: true,
                    speed: 60,
                  },
                },
                // tilt
                tilt: {
                  direction: "random",
                  enable: true,
                  move: true,
                  value: {
                    min: 0,
                    max: 360,
                  },
                  animation: {
                    enable: true,
                    speed: 60,
                  },
                },

                shape: {
                  type: ["circle"],
                  options: {},
                },
                size: {
                  value: {
                    min: 2,
                    max: 4,
                  },
                },
                roll: {
                  darken: {
                    enable: true,
                    value: 30,
                  },
                  enlighten: {
                    enable: true,
                    value: 30,
                  },
                  enable: true,
                  speed: {
                    min: 15,
                    max: 25,
                  },
                },
                wobble: {
                  distance: 30,
                  enable: true,
                  move: true,
                  speed: {
                    min: -15,
                    max: 15,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default WallnutOverlay;
