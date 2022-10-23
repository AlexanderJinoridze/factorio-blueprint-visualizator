import pako from "pako";
import Base64 from "./base64";
import { parseJSON } from "./helpers";

export default function decodeBlueprint(blueprintString) {
    try {
        let binary = Base64.decode(blueprintString.substring(1)),
            uzip = pako.inflate(binary),
            string = new TextDecoder("utf-8").decode(uzip);

        return parseJSON(string);
    } catch (e) {
        return {};
    }
}
