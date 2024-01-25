import { createContext, useState } from "react";
import list from "../music_data/music_list";

let defaultTrack = list[0];
const audio = new Audio(defaultTrack.src)

export const audiocontext = createContext({});


export default function AudioProvider({ children }) {
    const [currentsong, setcurrentsong] = useState(defaultTrack)
    const [isplaying, setPlay] = useState(false);
    
  
    function toggleAudio(song) {
        if(currentsong.id !== song.id) {
            setcurrentsong(song);
            setPlay(true)
            
            audio.src = song.src;
            audio.currentTime = 0;
            
            audio.play();
          
            return ;
        }
       if(isplaying) {
        
        audio.pause();
        setPlay(false)
       }
       else {
        
        audio.play();
        setPlay(true);
       }
    }
const value = {currentsong, isplaying, toggleAudio };
    return (
        <audiocontext.Provider value={value}>
            {children}
        </audiocontext.Provider>
    );
}
