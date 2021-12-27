import React from 'react'
import {audioConstants} from "../Constants/audio";

const Player =({presentSong, nextSong}) =>{
    return (
        <div className="c-player">
            <audio controls>
            <source src={presentSong.src} />
            </audio>
            <img src={presentSong.img_src}   height="30%" width="40%"/>

        </div>
    )
}

export default Player
