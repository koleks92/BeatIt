import { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Metronome() {
    const [modalVisible, setModalVisible] = useState(false);

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
                        <Text style={styles.text}>Metronome</Text>
                        <Pressable style={[styles.buttonClose]} onPress={closeModal}>
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
        opacity: 0.9
    },
    text: {
        color: Colors.text2,
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: Colors.icon
    },
});
