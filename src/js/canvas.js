import {state, GRID_PX} from "./globals";

class Canvas {
    constructor(canvasId) {
        this.$canvas = document.getElementById(canvasId);
        this.initCanvas();
    }

    initCanvas(w = state.gridSize.w, h = state.gridSize.h) {
        let width = w * GRID_PX;
        let height = h * GRID_PX;
        let $canvas = this.$canvas;

        $canvas.width = width;
        $canvas.height = height;
    }
}

export class MainCanvas extends Canvas {
    constructor(canvasId = "main-canvas") {
        super(canvasId);
    }
}

export class TileMask extends Canvas {
    constructor(canvasId = "tile-mask") {
        super(canvasId);
    }
}