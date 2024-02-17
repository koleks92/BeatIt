import { View, StyleSheet } from "react-native";
import Pad from "./Pad";

function Pads() {
  const onBegin = (sound) => {
    console.log(sound + " in");
  };

  const onEnd = (sound) => {
    console.log(sound + " out");
  };

  return (
    <View style={styles.root}>
      <View style={styles.columnPads}>
        <View style={styles.rowPads}>
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
          <Pad
            onBegin={() => {
              onBegin(3);
            }}
            onEnd={() => {
              onEnd(3);
            }}
          />
        </View>
        <View style={styles.rowPads}>
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
          <Pad
            onBegin={() => {
              onBegin(6);
            }}
            onEnd={() => {
              onEnd(6);
            }}
          />
        </View>
        <View style={styles.rowPads}>
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
          <Pad
            onBegin={() => {
              onBegin(9);
            }}
            onEnd={() => {
              onEnd(9);
            }}
          />
        </View>
        <View style={styles.rowPads}>
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
          <Pad
            onBegin={() => {
              onBegin(12);
            }}
            onEnd={() => {
              onEnd(12);
            }}
          />
        </View>
        <View style={styles.rowPads}>
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
          <Pad
            onBegin={() => {
              onBegin(15);
            }}
            onEnd={() => {
              onEnd(15);
            }}
          />
        </View>
      </View>
    </View>
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
});
