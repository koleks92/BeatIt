import { View, StyleSheet } from "react-native";
import Pad from "./Pad";

function Pads() {
    function onPress1() {
        console.log("Press 1")
    };

    function onPress2() {
        console.log("Press 2")
    };


  return (
    <View style={styles.root}>
      <View style={styles.columnPads}>
        <View style={styles.rowPads}>
          <Pad onPress={onPress1} />
          <Pad onPress={onPress2}/>
          <Pad />
        </View>
        <View style={styles.rowPads}>
          <Pad />
          <Pad />
          <Pad />
        </View>
        <View style={styles.rowPads}>
          <Pad />
          <Pad />
          <Pad />
        </View>
        <View style={styles.rowPads}>
          <Pad />
          <Pad />
          <Pad />
        </View>
        <View style={styles.rowPads}>
          <Pad />
          <Pad />
          <Pad />
        </View>
      </View>
    </View>
  );
}

export default Pads;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnPads: {
    flexDirection: 'column'
  },
  rowPads: {
    flexDirection: 'row'
  },
});
