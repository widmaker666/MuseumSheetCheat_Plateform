import React from 'react';
import useSound from 'use-sound'
import mySound from '../assets/music/sound.mp3' // Your sound file path here

const Player = () => {   
        const [playSound] = useSound(mySound, { volume: 0.06 }) // 70% of the original volume
        
        const handleClick = () => {
          playSound()
          // maybe you want to add other things here?
        }
      
        return (
          <button style={{border: "none", outline: "none"}} className="btn-light bg-white" onClick={() => handleClick()}>
             Museum Ambient
          </button>
        )
      }
    

export default Player;