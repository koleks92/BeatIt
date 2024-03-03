import { useEffect, useState, useRef } from "react";
import {
    View,
    Text,
    Modal,
    Pressable,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Colors } from "../../constants/colors";
import { Audio } from "expo-av";
import ButtonPM from "../UI/ButtonPM";
import ButtonSS from "../UI/ButtonSS";
import ButtonClose from "../UI/ButtonClose";

const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height;

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
                        <Text style={styles.title}>Metronome</Text>
                        <View style={styles.buttons}>
                            <ButtonPM
                                onPressIn={onMinusIn}
                                onPressOut={onMinusOut}
                            >
                                -
                            </ButtonPM>

                            <View style={styles.bpmView}>
                                <Text style={styles.text}>{BPM}</Text>
                            </View>
                            <ButtonPM
                                onPressIn={onPlusIn}
                                onPressOut={onPlusOut}
                            >
                                +
                            </ButtonPM>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.buttonView}>
                                <ButtonSS
                                    onPress={() => onBegin()}
                                    style={metronomeOn}
                                >
                                    Start
                                </ButtonSS>
                            </View>
                            <View style={styles.buttonView}>
                                <ButtonSS onPress={() => onEnd()}>
                                    Stop
                                </ButtonSS>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <ButtonClose onPress={closeModal} />
                        </View>
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
        marginHorizontal: scrW * 0.1,
        marginVertical: scrW * 0.6,
        backgroundColor: Colors.bar,
        color: "white",
        borderRadius: 20,
        padding: scrW * 0.05,
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
    title: {
        color: Colors.text2,
        fontSize: scrW * 0.07,
    },
    text: {
        color: Colors.text2,
        fontSize: scrW * 0.06,
    },
    bpmView: {
        justifyContent: "center",
        alignItems: "center",
        margin: scrW * 0.05,
        width: scrW * 0.12,
    },
    buttons: {
        flexDirection: "row",
        flex: 1,
    },
    buttonOn: {
        borderWidth: 3,
        borderColor: Colors.accent2,
    },
    buttonView: {
        flex: 1
    }
});
