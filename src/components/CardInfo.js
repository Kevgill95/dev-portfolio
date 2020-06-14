import React from 'react';
import { useSpring, animated } from 'react-spring';

import '../index.css';

function CardInfo(props) {

  const style = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div className="kev-card-info" style={style}>
      <p className="kev-card-title">{props.title}</p>
      <p className="kev-card-subtitle">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
    </animated.div>
  );
}


export default CardInfo;