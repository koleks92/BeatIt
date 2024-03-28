import { View, StyleSheet, Modal, Text, Dimensions } from "react-native";
import Pad from "./Pad";
import { useState } from "react";
import ButtonClose from "../UI/ButtonClose";
import { Colors } from "../../constants/colors";

const scrW = Dimensions.get("window").width;

function Pads({ changer, sounds }) {
    const padsFiles = sounds;
    const [modalVisible, setModalVisible] = useState(false);
    const [padNumber, setPadNumber] = useState();

    // Modal functionality
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    let onBegin = async (index) => {
        try {
            await padsFiles[index].replayAsync();
        } catch (error) {
            console.error(`Error playing sound ${index}:`, error);
        }
    };
    let onEnd = async (index) => {
        try {
            await padsFiles[index].pauseAsync();
        } catch (error) {
            console.error(`Error unloading sound ${index}:`, error);
        }
    };

    if (changer) {
        onBegin = (index) => {
            openModal();
            setPadNumber(index);
        };
        onEnd = (index) => {};
    }

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.changerContainer}>
                        <Text style={styles.title}>Choose new sound</Text>
                        <View style={styles.buttons}>
                            <ButtonClose onPress={closeModal} />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.root}>
                <View style={styles.columnPads}>
                    <View style={styles.rowPads}>
                        <Pad
                            onBegin={() => {
                                onBegin(0);
                            }}
                            onEnd={() => {
                                onEnd(0);
                            }}
                        />

                        <Pad
                            onBegin={() => {
                                onBegin(1);
                            }}
                            onEnd={() => {
                                onEnd(1);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(2);
                            }}
                            onEnd={() => {
                                onEnd(2);
                            }}
                        />
                    </View>
                    <View style={styles.rowPads}>
                        <Pad
                            onBegin={() => {
                                onBegin(3);
                            }}
                            onEnd={() => {
                                onEnd(3);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(4);
                            }}
                            onEnd={() => {
                                onEnd(4);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(5);
                            }}
                            onEnd={() => {
                                onEnd(5);
                            }}
                        />
                    </View>
                    <View style={styles.rowPads}>
                        <Pad
                            onBegin={() => {
                                onBegin(6);
                            }}
                            onEnd={() => {
                                onEnd(6);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(7);
                            }}
                            onEnd={() => {
                                onEnd(7);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(8);
                            }}
                            onEnd={() => {
                                onEnd(8);
                            }}
                        />
                    </View>
                    <View style={styles.rowPads}>
                        <Pad
                            onBegin={() => {
                                onBegin(9);
                            }}
                            onEnd={() => {
                                onEnd(9);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(10);
                            }}
                            onEnd={() => {
                                onEnd(10);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(11);
                            }}
                            onEnd={() => {
                                onEnd(11);
                            }}
                        />
                    </View>
                    <View style={styles.rowPads}>
                        <Pad
                            onBegin={() => {
                                onBegin(12);
                            }}
                            onEnd={() => {
                                onEnd(12);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(13);
                            }}
                            onEnd={() => {
                                onEnd(13);
                            }}
                        />
                        <Pad
                            onBegin={() => {
                                onBegin(14);
                            }}
                            onEnd={() => {
                                onEnd(14);
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}

export default Pads;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    columnPads: {
        flexDirection: "column",
    },
    rowPads: {
        flexDirection: "row",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    changerContainer: {
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
    },
    title: {
        color: Colors.text2,
        fontSize: scrW * 0.07,
    },
});
