import { View, StyleSheet } from "react-native";
import Pad from "./Pad";

function Pads({ sounds }) {

  const padsFiles = sounds;

  const onBegin = async (index) => {
    try {
      await padsFiles[index].replayAsync();
    } catch (error) {
      console.error(`Error playing sound ${index}:`, error);
    }
  };

  const onEnd = async (index) => {
    try {
      await padsFiles[index].pauseAsync();
    } catch (error) {
      console.error(`Error unloading sound ${index}:`, error);
    }
  };

  return (
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
