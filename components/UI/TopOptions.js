import { View, StyleSheet, Dimensions } from "react-native";

const scrH = Dimensions.get("window").height;


function TopOptions({children}) {
    return (
        <View style={styles.root} >
            {children}
        </View>
    );
};

export default TopOptions;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        maxHeight: scrH * 0.05
    }
})