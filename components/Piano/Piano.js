import { StyleSheet, View, Dimensions } from "react-native";
import White from "./White";
import Black from "./Black";

const scrW = Dimensions.get("window").width;

function Piano() {
  return (
    <View style={styles.root}>
      <View style={styles.whiteBlackContainer}>
        <White
          onBegin={() => console.log("Begin")}
          onEnd={() => console.log("End")}
        />
        <View style={styles.blackKeyContainer}>
          <Black
            onBegin={() => console.log("Begin")}
            onEnd={() => console.log("End")}
          />
        </View>
      </View>
      <View >
        <View style={styles.blackKeyContainer}>
          <Black
            onBegin={() => console.log("Begin")}
            onEnd={() => console.log("End")}
          />
        </View>
        <White
          onBegin={() => console.log("Begin")}
          onEnd={() => console.log("End")}
        />
      </View>
      <White
        onBegin={() => console.log("Begin")}
        onEnd={() => console.log("End")}
      />
      <View>
        <View style={styles.blackKeyContainer}>
          <Black
            onBegin={() => console.log("Begin")}
            onEnd={() => console.log("End")}
          />
        </View>
        <White
          onBegin={() => console.log("Begin")}
          onEnd={() => console.log("End")}
        />
      </View>
      <View>
        <View style={styles.blackKeyContainer}>
          <Black
            onBegin={() => console.log("Begin")}
            onEnd={() => console.log("End")}
          />
        </View>
        <White
          onBegin={() => console.log("Begin")}
          onEnd={() => console.log("End")}
        />
      </View>
      <View>
        <View style={styles.blackKeyContainer}>
          <Black
            onBegin={() => console.log("Begin")}
            onEnd={() => console.log("End")}
          />
        </View>
        <White
          onBegin={() => console.log("Begin")}
          onEnd={() => console.log("End")}
        />
      </View>
      <White
        onBegin={() => console.log("Begin")}
        onEnd={() => console.log("End")}
      />
    </View>
  );
}

export default Piano;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blackKeyContainer: {
    position: "absolute",
    left: "30%",
    top: "75%",
    zIndex: 2,
  },
  whiteBlackContainer: {
    zIndex: 1,
  },
});
