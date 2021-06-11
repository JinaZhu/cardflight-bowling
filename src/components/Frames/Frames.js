import React, { useState } from 'react';
import Balls from '../Balls/Balls';

const Frames = (props) => {
    const [frameComplete, setFrameComplete] = useState(false)

    const [frameNum, setFrameNum] = useState({})

    
    return(
        <div>
            <Balls/>
        </div>
    )
}

export default Frames;