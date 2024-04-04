import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

async function filePicker() {
    const [file, setFile] = useState();

    try {
        const result = await DocumentPicker.getDocumentAsync({
            type: "audio/*",
        });

        if (result.canceled) {
            console.log("Cancelled");
        } else {
            setFile(result.assets);
        }
    } catch (error) {
        console.error("Error: ", error);
    }

    return file;
}

export default filePicker;
