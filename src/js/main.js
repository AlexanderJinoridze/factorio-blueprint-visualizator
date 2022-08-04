import buildFactory from "./buildFactory";

document.getElementById("build_factory").addEventListener("click", async event => {
    console.time();

    let buildFacotoryButton = event.target,
        blueprintStringInput = document.getElementById("blueprint_string"),
        blueprintString = blueprintStringInput.value.trim();

    buildFacotoryButton.disabled = true;

    blueprintStringInput.value = "";
    await buildFactory(blueprintString);

    buildFacotoryButton.disabled = false;

    console.timeEnd();
})