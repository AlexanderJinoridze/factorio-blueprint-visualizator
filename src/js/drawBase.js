import { state, GRID_PX } from "./globals";


const writeWithPXFont = (x, y, number) => {

}

function drawBoard(context, spX, spY) {
    let { w: gridSizeX, h: gridSizeY } = state.gridSize;

    for (var x = 0; x <= gridSizeX; x++) {
        context.moveTo(GRID_PX * x + GRID_PX * spX, GRID_PX * spY - (GRID_PX - 2));
        context.lineTo(GRID_PX * x + GRID_PX * spX, GRID_PX * gridSizeY + GRID_PX * spY);
    }

    for (var y = 0; y <= gridSizeY; y++) {
        context.moveTo(GRID_PX * spX - (GRID_PX - 2), GRID_PX * y + GRID_PX * spY);
        context.lineTo(GRID_PX * gridSizeX + GRID_PX * spX, GRID_PX * y + GRID_PX * spY);
    }

    context.strokeStyle = "#606060";
    context.lineWidth = 4;
    context.lineCap = 'square';
    context.stroke();
}

export default function drawBase(ctx) {
    ctx.fillStyle = "#303030";
    ctx.fillRect(0, 0, state.canvasSize.w, state.canvasSize.h);

    drawBoard(ctx, 2, 3.5);
}