import { createContext, useState} from "react";
import { Audio } from 'expo-av'; 


export const PadsContext = createContext();

const NUM_PADS = 15;
const padsFiles = Array.from({ length: NUM_PADS }, (_, index) => new Audio.Sound());


// Load audio files
async function loadAudioFiles() {
  try {
    await padsFiles[0].loadAsync(require('../sounds/pads/bass_1.mp3'))
    await padsFiles[1].loadAsync(require('../sounds/pads/bass_2.mp3'))
    await padsFiles[2].loadAsync(require('../sounds/pads/bass_3.mp3'))
    await padsFiles[3].loadAsync(require('../sounds/pads/clap_1.mp3'))
    await padsFiles[4].loadAsync(require('../sounds/pads/clap_2.mp3'))
    await padsFiles[5].loadAsync(require('../sounds/pads/clap_3.mp3'))
    await padsFiles[6].loadAsync(require('../sounds/pads/hihat_1.mp3'))
    await padsFiles[7].loadAsync(require('../sounds/pads/hihat_2.mp3'))
    await padsFiles[8].loadAsync(require('../sounds/pads/hihat_3.mp3'))
    await padsFiles[9].loadAsync(require('../sounds/pads/kick_1.mp3'))
    await padsFiles[10].loadAsync(require('../sounds/pads/kick_2.mp3'))
    await padsFiles[11].loadAsync(require('../sounds/pads/kick_3.mp3'))
    await padsFiles[12].loadAsync(require('../sounds/pads/voice_1.mp3'))
    await padsFiles[13].loadAsync(require('../sounds/pads/voice_2.mp3'))
    await padsFiles[14].loadAsync(require('../sounds/pads/voice_3.mp3'))
    console.log("Sucessfull sounds loading!")
  } catch (error) {
    console.error('Error loading', error)
  }
}



function PadsContextProvider({children}) {
    
    loadAudioFiles();

    return <PadsContext.Provider value = { padsFiles }>{children}</PadsContext.Provider>
};

export default PadsContextProvider;