import reference from "./reference.json";
import { state, promises, loadedImages, alreadyLoadedImages } from "./globals";
import { isBelt, isInserter, isTile } from "./helpers";



const hasShadow = entity => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    return reference[entityName]["has-shadow"];
}

const hasDisplay = entity => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    return reference[entityName]["has-display"];
}

const hasCircuitConnector = entity => {
    let entityName = entity.name;

    if (!reference[entityName]) {
        return false;
    }

    let isConnectorEntity = reference[entityName]["has-circuit-connector"],
        hasConnector = entity["connections"];

    return isConnectorEntity && hasConnector;
}


function loadImage(imageName) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener("load", () => {
            resolve(img);
        });
        img.addEventListener("error", () =>
            reject(new Error(`Failed to load ${imageName}`))
        );
        img.src = `images/${imageName}.png`;
    }).then(img => loadedImages[imageName] = img);
}

const getImage = function (imageName) {
    if (!alreadyLoadedImages.includes(imageName)) {
        alreadyLoadedImages.push(imageName);

        promises.push(loadImage(imageName));
    }
}

export default function currentEntityStack() {
    state.structures.forEach(entity => {
        let entityName = entity.name;

        getImage(entityName);

        if (hasShadow(entity)) {
            getImage("shadows");
        }

        if (hasDisplay(entity)) {
            getImage("combinator-operators");
        }

        if (isBelt(entityName) && hasCircuitConnector(entity)) {
            getImage("transport-belt-circuit-connector");
        } else if (isInserter(entityName) && hasCircuitConnector(entity)) {
            getImage("inserter-circuit-connector");
        } else if (hasCircuitConnector(entity)) {
            getImage("circuit-connector");
        }

        if (isTile(entityName)) {
            getImage("curb");
            getImage("tile-mask");
        }
    });
}