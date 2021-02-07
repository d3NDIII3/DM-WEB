import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./homepage.css";
import "../picture.jpg";
import "../picture1.jpg";
import "../picture2.jpg";
import "../picture3.jpg";

const slides = [
  {
    id: 0,

    url: "picture2.0eb30a00.jpg",
  },
  {
    id: 1,
    url: "picture.52a54fe9.jpg",
  },
  {
    id: 2,
    url: "picture1.a7d30b6e.jpg",
  },
  { id: 3, url: "picture3.e1b51272.jpg" },
];

export default function Welcome() {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 10000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="header"
      style={{
        ...props,
        backgroundImage: `url(/static/media/${item.url})`,
      }}
    >
      <h1>Welcome!</h1>
      <p className="text">
        I like to create websites and web based application which works well
        everyware. <br /> Keep scrolling while I get a coffee for you...
      </p>
    </animated.div>
  ));
}
