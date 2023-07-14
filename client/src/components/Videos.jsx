import React from 'react';
import ReactPlayer from 'react-player'
import { useRef } from 'react';
function Videos(vid) {
  console.log(vid.vid);
  const playerRef = useRef(null);

  return (
    <div>
         <ReactPlayer ref={playerRef} url={vid.vid} controls={true} />
      </div>
  );
}

export default Videos;