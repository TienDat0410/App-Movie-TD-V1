import React from 'react';
import ReactPlayer from 'react-player';

const TralerTest = () => {
    console.log("hhhhhhh");
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
            width="640px"
            height="360px"
            playing={true}
            controls={false}
        />
    )
}
export default TralerTest