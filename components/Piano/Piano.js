import { StyleSheet, View, Dimensions } from "react-native";
import White from "./White";
import Black from "./Black";

const scrW = Dimensions.get("window").width;

function Piano() {
  return (
    <View style={styles.root}>
      <View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("C In")}
            onEnd={() => {
              console.log("C Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => console.log("Cs In")}
            onEnd={() => {
              console.log("Cs Out");
            }}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("D In")}
            onEnd={() => {
              console.log("D Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => console.log("Ds In")}
            onEnd={() => {
              console.log("Ds Out");
            }}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("E In")}
            onEnd={() => {
              console.log("E Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("F In")}
            onEnd={() => {
              console.log("F Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => console.log("Fs In")}
            onEnd={() => {
              console.log("Fs Out");
            }}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("G In")}
            onEnd={() => {
              console.log("G Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => console.log("Gs In")}
            onEnd={() => {
              console.log("Gs Out");
            }}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("A In")}
            onEnd={() => {
              console.log("A Out");
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.blackContainer}>
          <Black
            onBegin={() => console.log("As In")}
            onEnd={() => {
              console.log("As Out");
            }}
          />
        </View>
        <View style={styles.whiteContainer}>
          <White
            onBegin={() => console.log("B In")}
            onEnd={() => {
              console.log("B Out");
            }}
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
