import { StyleSheet, View, Text} from "react-native";
import White from "./White";

function Piano() {
    return (
    <View style={styles.root}>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
       <White onBegin={() => console.log("Begin")} onEnd={() => console.log("End")}/>
    </View>

    )
};

export default Piano;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

