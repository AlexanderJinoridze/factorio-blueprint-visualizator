import { state } from "./globals";

export default function setOffset() {
    let offset = state.offset,
        dimensions = state.dimensions;

    offset.x = dimensions["minX"];
    offset.y = dimensions["minY"];
}