import { createContext, useState} from "react";
import { Audio } from 'expo-av'; 


export const PianoContext = createContext();

const NUM_KEYS = 12;
const pianoFiles = Array.from({ length: NUM_KEYS }, (_, index) => new Audio.Sound());


// Load audio files
async function loadAudioFiles() {
  try {
    await pianoFiles[0].loadAsync(require('../sounds/piano/C.mp3'))
    await pianoFiles[1].loadAsync(require('../sounds/piano/Cs.mp3'))
    await pianoFiles[2].loadAsync(require('../sounds/piano/D.mp3'))
    await pianoFiles[3].loadAsync(require('../sounds/piano/Ds.mp3'))
    await pianoFiles[4].loadAsync(require('../sounds/piano/E.mp3'))
    await pianoFiles[5].loadAsync(require('../sounds/piano/F.mp3'))
    await pianoFiles[6].loadAsync(require('../sounds/piano/Fs.mp3'))
    await pianoFiles[7].loadAsync(require('../sounds/piano/G.mp3'))
    await pianoFiles[8].loadAsync(require('../sounds/piano/Gs.mp3'))
    await pianoFiles[9].loadAsync(require('../sounds/piano/A.mp3'))
    await pianoFiles[10].loadAsync(require('../sounds/piano/As.mp3'))
    await pianoFiles[11].loadAsync(require('../sounds/piano/B.mp3'))
    console.log("Sucessfull piano sounds loading!")
  } catch (error) {
    console.error('Error loading', error)
  }
}



function PianoContextProvider({children}) {
    
    loadAudioFiles();

    return <PianoContext.Provider value = { pianoFiles }>{children}</PianoContext.Provider>
};

export default PianoContextProvider;