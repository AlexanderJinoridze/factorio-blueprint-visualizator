import pako from "pako";
import Base64 from "./base64";
import { state } from "./globals";

function parseBlueprint(stringifiedJSON) {
    try {
        return JSON.parse(stringifiedJSON);
    } catch (e) {
        return {};
    }
}

export default function decodeBlueprint() {

    try {
        let binary = Base64.decode(state.blueprintString.substring(1));
        let uzip = pako.inflate(binary);
        let string = new TextDecoder("utf-8").decode(uzip);

        state.decodedBlueprint = parseBlueprint(string);

    } catch (e) {
        state.decodedBlueprint = {};
    }
}