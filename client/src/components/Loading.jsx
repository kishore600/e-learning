import React from 'react'
import { useSpring, animated } from 'react-spring';

const Loading = () => {
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
      });
  return (
    <animated.div style={animationProps}>
        <h1>loading.....</h1>
    </animated.div>
  )
}

export default Loading