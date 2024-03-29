import reference from "./reference.json";
import { promises, loadedImages, alreadyLoadedImages } from "./globals";
import { isBelt, isInserter, isTile } from "./helpers";

const hasShadow = (entity) => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    return reference[entityName]["has-shadow"];
};

const hasDisplay = (entity) => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    return reference[entityName]["has-display"];
};

const hasCircuitConnector = (entity) => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    let isConnectorEntity = reference[entityName]["has-circuit-connector"],
        hasConnector = entity["connections"];

    return isConnectorEntity && hasConnector;
};

function loadImage(imageName) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", () => reject(new Error(`Failed to load ${imageName}`)));
        img.src = `images/${imageName}.png`;
    }).then((img) => (loadedImages[imageName] = img));
}

function getImage(imageName) {
    if (!alreadyLoadedImages.includes(imageName)) {
        alreadyLoadedImages.push(imageName);

        promises.push(loadImage(imageName));
    }
}

export default function collectImages(structures) {
    structures.forEach((structure) => {
        let structureName = structure.name;

        getImage(structureName);

        if (hasShadow(structure)) {
            getImage("shadows");
        }

        if (hasDisplay(structure)) {
            getImage("combinator-operators");
        }

        if (isBelt(structureName) && hasCircuitConnector(structure)) {
            getImage("transport-belt-circuit-connector");
        } else if (isInserter(structureName) && hasCircuitConnector(structure)) {
            getImage("inserter-circuit-connector");
        } else if (hasCircuitConnector(structure)) {
            getImage("circuit-connector");
        }

        if (isTile(structureName)) {
            getImage("curb");
            getImage("tile-mask");
        }
    });
}
