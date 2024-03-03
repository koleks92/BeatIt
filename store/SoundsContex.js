import { createContext } from "react";
import { Audio } from 'expo-av'; 


export const SoundsContext = createContext();

const NUM_PADS = 15;
const padsFiles = Array.from({ length: NUM_PADS }, (_, index) => new Audio.Sound());

const NUM_KEYS = 12;
const pianoFiles = Array.from({ length: NUM_KEYS }, (_, index) => new Audio.Sound());

async function loadPadsFiles() {
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
      console.log("Sucessfull pads sounds loading!")
    } catch (error) {
      console.error('Error loading', error)
    }
  };

  async function loadPianoFiles() {
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
  };

  function SoundsContextProvider({children}) {
    
    loadPadsFiles();
    loadPianoFiles();

    return <SoundsContext.Provider value = {{ pianoFiles, padsFiles }}>{children}</SoundsContext.Provider> }

export default SoundsContextProvider;