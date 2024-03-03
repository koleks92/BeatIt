import { useRef, useEffect, useState } from "react";
import { View, Text, Modal, Button } from "react-native";

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
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View>
                    <Text>Metronome</Text>
                    <Button title="Close" onPress={closeModal} />
                </View>
            </Modal>
            <View>
                <Button title="Metronome" onPress={openModal} />
            </View>
        </>
    );
}

export default Metronome;
