import { useEffect, useState, useRef } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Audio } from "expo-av";

function Metronome() {
    const [modalVisible, setModalVisible] = useState(false);
    const [BPM, setBPM] = useState(120);
    const metronome = useRef(null);
    const onMinusRef = useRef(null);
    const onPlusRef = useRef(null);
    const [metronomeOn, setMetronomeOn] = useState(false);

    let sound = new Audio.Sound();
    // Load sounds
    async function loadSound() {
        await sound.loadAsync(require("../../sounds/metronome/metronome.mp3"));
    }

    loadSound();

    // Minus button functionality
    const onMinusIn = () => {
        if (BPM === 1) {
        } else {
            onMinusRef.current = setInterval(() => {
                setBPM((prevBPM) => prevBPM - 1);
            }, 100);
        }
    };

    const onMinusOut = () => {
        clearInterval(onMinusRef.current);
    };

    // Plus button functionality
    const onPlusIn = () => {
        if (BPM === 240) {
        } else {
            onPlusRef.current = setInterval(() => {
                setBPM((prevBPM) => prevBPM + 1);
            }, 100);
        }
    };

    const onPlusOut = () => {
        clearInterval(onPlusRef.current);
    };

    // Start metronome functionality
    const onBegin = () => {
        setMetronomeOn(true);
        const intervalInMilliSeconds = (60 / BPM) * 1000;
        metronome.current = setInterval(async () => {
            await sound.replayAsync();
        }, intervalInMilliSeconds);
    };

    // End metronome functionality
    const onEnd = () => {
        clearInterval(metronome.current);
        setMetronomeOn(false);
    };

    // Handling BPM values
    useEffect(() => {
        onEnd();
        if (BPM >= 240) {
            clearInterval(onPlusRef.current);
            setBPM(240);
        } else if (BPM <= 1) {
            clearInterval(onMinusRef.current);
            setBPM(1);
        }
    }, [BPM]);

    // Modal functionality
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.metronomeContainer}>
                        <View style={styles.buttons}>
                            <Pressable
                                style={styles.button}
                                onPressIn={onMinusIn}
                                onPressOut={onMinusOut}
                            >
                                <Text>-</Text>
                            </Pressable>
                            <Text>{BPM}</Text>
                            <Pressable
                                style={styles.button}
                                onPressIn={onPlusIn}
                                onPressOut={onPlusOut}
                            >
                                <Text>+</Text>
                            </Pressable>
                        </View>
                        <View style={styles.buttons}>
                            <Pressable
                                style={[
                                    styles.button,
                                    metronomeOn && styles.buttonOn,
                                ]}
                                onPress={() => onBegin()}
                            >
                                <Text>Start</Text>
                            </Pressable>
                            <Pressable
                                style={styles.button}
                                onPress={() => onEnd()}
                            >
                                <Text>End</Text>
                            </Pressable>
                        </View>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={closeModal}
                        >
                            <Text>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View>
                <Pressable onPress={openModal}>
                    <Text>Metronome</Text>
                </Pressable>
            </View>
        </>
    );
}

export default Metronome;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    metronomeContainer: {
        margin: 20,
        backgroundColor: Colors.bar,
        color: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        opacity: 0.9,
    },
    text: {
        color: Colors.text2,
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: Colors.icon,
    },
    buttons: {
        flexDirection: "row",
        alignContent: "space-around",
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonOn: {
        borderWidth: 1,
        borderColor: "black",
    },
});
