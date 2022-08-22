function getValueById(id) {
    const elementId = document.getElementById(id);
    const targetValueString = elementId.value;
    const targetValue = parseInt(targetValueString);
    if (isNaN(targetValue)) {
        elementId.value = "";
    }

    return targetValue;
}
function setTextById(id, value) {
    const targetId = document.getElementById(id);
    targetId.innerText = value;
}

function getTextById(id) {
    const targetId = document.getElementById(id);
    const targetText = targetId.innerText;
    return targetText;
}