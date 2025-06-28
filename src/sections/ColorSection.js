/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model2 from "../components/Scene2";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);

  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    textElem.innerText = currentColor.text;
    textElem.style.color = currentColor.color;

    rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#000000", "Black", "0, 0, 0"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#000000", "Black", "0, 0, 0"],
    })
    .to(Elem, {
      onStart: updateColor,
      onStartParams: ["#93C572", "Pista", "147, 197, 114"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#93C572", "Pista", "147, 197, 114"],
  });
  
    ;
    

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;
