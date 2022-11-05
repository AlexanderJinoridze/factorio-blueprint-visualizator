import { state } from "./globals";
import { toPX } from "./helpers";
import reference from "./reference.json";

const writeWithPXFont = (x, y, number) => {};

function drawBoard(context, spX, spY) {
    console.log("state.gridSize", state.gridSize);
    let { w: gridSizeX, h: gridSizeY } = state.gridSize;

    for (var x = 0; x <= gridSizeX; x++) {
        context.moveTo(toPX(x + spX), toPX(spY - 1) + 2);

        context.lineTo(toPX(x + spX), toPX(gridSizeY + spY));
    }

    for (var y = 0; y <= gridSizeY; y++) {
        context.moveTo(toPX(spX - 1) + 2, toPX(y + spY));

        context.lineTo(toPX(gridSizeX + spX), toPX(y + spY));
    }

    context.strokeStyle = "#606060";
    context.lineWidth = reference["grid-border-width"];
    context.lineCap = "square";
    context.stroke();
}

export default function drawBase(ctx) {
    try {
        ctx.fillStyle = "#303030";

        ctx.fillRect(0, 0, state.canvasSize.w, state.canvasSize.h);

        drawBoard(ctx, reference["canvas-padding"]["left"], reference["canvas-padding"]["top"]);
    } catch (e) {
        console.log(e);
    }
}
