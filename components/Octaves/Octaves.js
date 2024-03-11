import { useState } from "react";
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


const scrW = Dimensions.get("window").width
const scrH = Dimensions.get("window").height;


function Octaves({iconSize}) {
    const [modalVisible, setModalVisible] = useState(false);

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
                    <View style={styles.octavesContainer}>
                        <Text> Octaves </Text>
                        <View style={styles.buttons}>
                            <ButtonClose onPress={closeModal} />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.iconContainer}>
                <Pressable onPress={openModal}>
                    <Image
                        source={require("../../assets/icons/octaves.png")}
                        resizeMode="contain"
                        style={{ height: iconSize }}
                    />
                </Pressable>
            </View>
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
    buttons: {
        flexDirection: "row",
        flex: 1,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    }

});
