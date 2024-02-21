import { StyleSheet, View, Dimensions } from "react-native";
import White from "./White";
import Black from "./Black";

const scrW = Dimensions.get("window").width;

function Piano({ sounds }) {


    const pianoFiles = sounds;

    // Indexes look PianoContext.js

    const onBegin = async (index) => {
      try {
        await pianoFiles[index].replayAsync();
      } catch (error) {
        console.error(`Error playing sound ${index}:`, error);
      }
    };
  
    const onEnd = async (index) => {
      try {
        await pianoFiles[index].pauseAsync();
      } catch (error) {
        console.error(`Error unloading sound ${index}:`, error);
      }
    };

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(0)}
            onEnd={() => onEnd(0)}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => onBegin(1)}
            onEnd={() => onEnd(1)}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(2)}
            onEnd={() => onEnd(2)}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => onBegin(3)}
            onEnd={() => onEnd(3)}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(4)}
            onEnd={() => onEnd(4)}
          />
        </View>
      </View>
      <View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(5)}
            onEnd={() => onEnd(5)}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => onBegin(6)}
            onEnd={() => onEnd(6)}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(7)}
            onEnd={() => onEnd(7)}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => onBegin(8)}
            onEnd={() => onEnd(8)}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(9)}
            onEnd={() => onEnd(9)}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => onBegin(10)}
            onEnd={() => onEnd(10)}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => onBegin(11)}
            onEnd={() => onEnd(11)}
          />
        </View>
      </View>
    </View>
  );
}

export default Piano;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  blackContainer: {
    flex: 1,
    position: "absolute",
    right: 0,
    top: "-25%",
    zIndex: 2,
  },
  whiteContainer: {
    zIndex: 1,
  },
});
