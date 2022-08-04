import reference from "./reference.json";
import { state, loadedImages, NUMBER_OF_DIRS } from "./globals";

export default function placeBuildings(ctx) {
    state.buildings.forEach((building, i) => {
        var buildingName = building.name;
        // var {coordX, coordY} = building.position;
        var buildingReference = reference[buildingName];
        var buildingDirection = building.direction;

        let directionCount = buildingReference["dir-count"];

        if (directionCount) {
            if (directionCount < NUMBER_OF_DIRS) {
                buildingDirection = buildingDirection / 2;
            }
        }

        if (typeof buildingReference["image-size"] === "number") {
            var imageSizeX = buildingReference["image-size"];
            var imageSizeY = buildingReference["image-size"];
        } else {
            var [imageSizeX, imageSizeY] = buildingReference["image-size"];
        }

        ctx.drawImage(loadedImages[buildingName], imageSizeX * buildingDirection, 0, imageSizeX, imageSizeY, 120 * i, 0, imageSizeX, imageSizeY);
    })
}