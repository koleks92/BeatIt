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

// Default pad files paths !
function padFileRequires(padNumber) {
    switch (padNumber) {
        case 0: // Bass
            return require("../sounds/pads/0.mp3");
        case 1: 
            return require("../sounds/pads/1.mp3");
        case 2: 
            return require("../sounds/pads/2.mp3");
        case 3: // Clap
            return require("../sounds/pads/3.mp3");
        case 4:
            return require("../sounds/pads/4.mp3");
        case 5:
            return require("../sounds/pads/5.mp3");
        case 6: // Hihat
            return require("../sounds/pads/6.mp3");
        case 7:
            return require("../sounds/pads/7.mp3");
        case 8:
            return require("../sounds/pads/8.mp3");
        case 9: // Kick
            return require("../sounds/pads/9.mp3");
        case 10:
            return require("../sounds/pads/10.mp3");
        case 11:
            return require("../sounds/pads/11.mp3");
        case 12: // Voice
            return require("../sounds/pads/12.mp3");
        case 13:
            return require("../sounds/pads/13.mp3");
        case 14:
            return require("../sounds/pads/14.mp3");
    }
}

async function loadPadsFiles() {
    try {
        for (let i=0; i < padsFiles.length; i++) {
            await padsFiles[i].loadAsync(padFileRequires(i));
        }
    } catch (error) {
        console.error("Error loading", error);
    }
}

async function loadPianoFiles(o) {
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
        console.log("Unloaded !");
    } catch (error) {
        console.error("Error unloading: ", error);
    }
}

// Reset to defualt pad file
async function loadDefault(padNumber) {
    try {
        await padsFiles[padNumber].loadAsync(padFileRequires(padNumber));
        console.log("Loaded !");
    } catch (error) {
        console.error("Error loading: ", error);
    }
}

// Load new pad file
async function loadNewPadFile(padNumber, soundPath) {
    try {
        const path = `require("${soundPath}")`;
        await padsFiles[padNumber].loadAsync(path);
    } catch (error) {
        console.error("Error loading: ", error);
    }
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
        await loadNewPadFile(padNumber);
    };

    const resetPad = async (padNumber) => {
        await unloadPadFile(padNumber);
        await loadDefault(padNumber);
    };

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
                resetPad,
            }}
        >
            {children}
        </SoundsContext.Provider>
    );
}

export default SoundsContextProvider;
