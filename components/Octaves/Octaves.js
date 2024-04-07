import { useState, useContext } from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Dimensions,
    Pressable,
    Image,
} from "react-native";
import { Colors } from "../../constants/colors";
import ButtonClose from "../UI/ButtonClose";
import ButtonSS from "../UI/ButtonSS";
import { SoundsContext } from "../../store/SoundsContex";

const scrW = Dimensions.get("window").width;

function Octaves({ iconSize }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { octaves, updateOctaves, octavesUpdating } =
        useContext(SoundsContext);

    // Modal functionality
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const onMinus = () => {
        if (octavesUpdating === false) {
            if (octaves === 1) {
            } else {
                const result = updateOctaves(octaves - 1);
            }
        }
    };

    const onPlus = () => {
        if (octavesUpdating === false) {
            if (octaves === 7) {
            } else {
                updateOctaves(octaves + 1);
            }
        }
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
                    <View style={styles.octavesContainer}>
                        <Text style={styles.title}>Octaves</Text>
                        <View style={styles.buttons}>
                            <ButtonSS onPress={onMinus}>-</ButtonSS>

                            <View style={styles.octavesView}>
                                <Text style={styles.text}>{octaves}</Text>
                            </View>
                            <ButtonSS onPress={onPlus}>+</ButtonSS>
                        </View>

                        <View style={styles.buttons}>
                            <ButtonClose onPress={closeModal} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={openModal}>
                <Image
                    source={require("../../assets/icons/octaves.png")}
                    resizeMode="contain"
                    style={{ height: iconSize }}
                />
            </Pressable>
        </>
    );
}

export default Octaves;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    octavesContainer: {
        marginHorizontal: scrW * 0.1,
        marginVertical: scrW * 0.7,
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
    text: {
        color: Colors.text2,
        fontSize: scrW * 0.06,
    },
    octavesView: {
        justifyContent: "center",
        alignItems: "center",
        margin: scrW * 0.05,
        width: scrW * 0.12,
    },
    buttons: {
        flexDirection: "row",
        flex: 1,
    },

});
