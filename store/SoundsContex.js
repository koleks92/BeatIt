import { createContext, useState, useRef, useLayoutEffect } from "react";
import { Audio } from "expo-av";

export const SoundsContext = createContext();

const NUM_PADS = 15;
const padsFiles = Array.from(
    { length: NUM_PADS },
    (_, index) => new Audio.Sound()
);

const NUM_KEYS = 12;
const pianoFiles = Array.from(
    { length: NUM_KEYS },
    (_, index) => new Audio.Sound()
);

async function loadPadsFiles() {
    try {
        await padsFiles[0].loadAsync(require("../sounds/pads/bass_1.mp3"));
        await padsFiles[1].loadAsync(require("../sounds/pads/bass_2.mp3"));
        await padsFiles[2].loadAsync(require("../sounds/pads/bass_3.mp3"));
        await padsFiles[3].loadAsync(require("../sounds/pads/clap_1.mp3"));
        await padsFiles[4].loadAsync(require("../sounds/pads/clap_2.mp3"));
        await padsFiles[5].loadAsync(require("../sounds/pads/clap_3.mp3"));
        await padsFiles[6].loadAsync(require("../sounds/pads/hihat_1.mp3"));
        await padsFiles[7].loadAsync(require("../sounds/pads/hihat_2.mp3"));
        await padsFiles[8].loadAsync(require("../sounds/pads/hihat_3.mp3"));
        await padsFiles[9].loadAsync(require("../sounds/pads/kick_1.mp3"));
        await padsFiles[10].loadAsync(require("../sounds/pads/kick_2.mp3"));
        await padsFiles[11].loadAsync(require("../sounds/pads/kick_3.mp3"));
        await padsFiles[12].loadAsync(require("../sounds/pads/voice_1.mp3"));
        await padsFiles[13].loadAsync(require("../sounds/pads/voice_2.mp3"));
        await padsFiles[14].loadAsync(require("../sounds/pads/voice_3.mp3"));
    } catch (error) {
        console.error("Error loading", error);
    }
}

async function loadPianoFiles(o) {
    // Missing sounds !
    switch (o) {
        case 1:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/contra/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/contra/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/contra/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/contra/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/contra/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/contra/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/contra/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/contra/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/contra/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/contra/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/contra/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/contra/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 2:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/great/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/great/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/great/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/great/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/great/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/great/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/great/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/great/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/great/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/great/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/great/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/great/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 3:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/small/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/small/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/small/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/small/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/small/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/small/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/small/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/small/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/small/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/small/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/small/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/small/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 4:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/one_line/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/one_line/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/one_line/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/one_line/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/one_line/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/one_line/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/one_line/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/one_line/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/one_line/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/one_line/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/one_line/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/one_line/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 5:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/two_line/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/two_line/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/two_line/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/two_line/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/two_line/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/two_line/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/two_line/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/two_line/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/two_line/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/two_line/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/two_line/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/two_line/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 6:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/three_line/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/three_line/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/three_line/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/three_line/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/three_line/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/three_line/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/three_line/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/three_line/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/three_line/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/three_line/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/three_line/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/three_line/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
        case 7:
            try {
                await pianoFiles[0].loadAsync(
                    require("../sounds/piano/four_line/C.mp3")
                );
                await pianoFiles[1].loadAsync(
                    require("../sounds/piano/four_line/Cs.mp3")
                );
                await pianoFiles[2].loadAsync(
                    require("../sounds/piano/four_line/D.mp3")
                );
                await pianoFiles[3].loadAsync(
                    require("../sounds/piano/four_line/Ds.mp3")
                );
                await pianoFiles[4].loadAsync(
                    require("../sounds/piano/four_line/E.mp3")
                );
                await pianoFiles[5].loadAsync(
                    require("../sounds/piano/four_line/F.mp3")
                );
                await pianoFiles[6].loadAsync(
                    require("../sounds/piano/four_line/Fs.mp3")
                );
                await pianoFiles[7].loadAsync(
                    require("../sounds/piano/four_line/G.mp3")
                );
                await pianoFiles[8].loadAsync(
                    require("../sounds/piano/four_line/Gs.mp3")
                );
                await pianoFiles[9].loadAsync(
                    require("../sounds/piano/four_line/A.mp3")
                );
                await pianoFiles[10].loadAsync(
                    require("../sounds/piano/four_line/As.mp3")
                );
                await pianoFiles[11].loadAsync(
                    require("../sounds/piano/four_line/B.mp3")
                );
            } catch (error) {
                console.error("Error loading", error);
            }
            break;
    }
}

// Unload files
async function unloadPianoFiles() {
    try {
        await pianoFiles[0].unloadAsync();
        await pianoFiles[1].unloadAsync();
        await pianoFiles[2].unloadAsync();
        await pianoFiles[3].unloadAsync();
        await pianoFiles[4].unloadAsync();
        await pianoFiles[5].unloadAsync();
        await pianoFiles[6].unloadAsync();
        await pianoFiles[7].unloadAsync();
        await pianoFiles[8].unloadAsync();
        await pianoFiles[9].unloadAsync();
        await pianoFiles[10].unloadAsync();
        await pianoFiles[11].unloadAsync();
    } catch (error) {
        console.error("Error unloading", error);
    }
}

async function unloadPadFile(padNumber) {
    try {
        await padsFiles[padNumber].unloadAsync();
    } catch (error) {
        console.error("Error unloading: ", error)
    }
}

// Reset to defualt pad file
async function loadDefault(padNumber) {
    // LoadDeafult
    console.log("Loading default")
}

// Load new pad file
async function loadNewPadFile(padNumber) {
    // Load new pad file sound
    console.log("Loading new file sound")
}

let metronomeSound = new Audio.Sound();
// Load sounds
async function loadMetronomeSound() {
    try {
        await metronomeSound.loadAsync(
            require("../sounds/metronome/metronome.mp3")
        );
    } catch (error) {
        console.log("Error loading", error);
    }
}

function SoundsContextProvider({ children }) {
    const [BPM, setBPM] = useState(120);
    const metronome = useRef(null);
    const [metronomeOn, setMetronomeOn] = useState(false);
    const [octaves, setOctaves] = useState(4);

    const firstLoad = async () => {
        await loadMetronomeSound();
        await loadPadsFiles();
        await loadPianoFiles(octaves);
    };

    useLayoutEffect(() => {
        firstLoad(); // Call the firstLoad function
    }, []);



    const updateOctaves = async (octave) => {
        setOctaves(octave);
        await unloadPianoFiles();
        await loadPianoFiles(octave);
    };

    // Metronome
    const updateMetronomeOn = (bool) => {
        if (bool === true) {
            setMetronomeOn(true);
        } else {
            setMetronomeOn(false);
        }
    };

    const updateBPM = (newBPM) => {
        setBPM(newBPM);
    };

    const startMetronome = () => {
        const intervalInMilliSeconds = (60 / BPM) * 1000;
        metronome.current = setInterval(async () => {
            await metronomeSound.replayAsync();
        }, intervalInMilliSeconds);
    };

    const endMetronome = () => {
        clearInterval(metronome.current);
        updateMetronomeOn(false);
    };

    const changePad = async (padNumber) => {
        await unloadPadFile(padNumber);
        await loadPadFile(padNumber, fileName)
    }

    const resetPad = async (padNumber) => {
        await unloadPadFile(padNumber);
        await loadDefault(padNumber);
    }

    return (
        <SoundsContext.Provider
            value={{
                pianoFiles,
                padsFiles,
                BPM,
                updateBPM,
                metronomeOn,
                updateMetronomeOn,
                metronome,
                startMetronome,
                endMetronome,
                octaves,
                updateOctaves,
                firstLoad,
                changePad,
                resetPad
            }}
        >
            {children}
        </SoundsContext.Provider>
    );
}

export default SoundsContextProvider;
