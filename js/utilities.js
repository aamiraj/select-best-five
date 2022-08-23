function getValueByInputField(element) {
    const value = parseFloat(document.getElementById(element).value);
    if (typeof value === "number") {
        return value;
    }
    else { alert("Input must be a Number.") }

}
function getValueByTextField(element) {
    const value = parseFloat(document.getElementById(element).innerText);
    return value;
}
function getTextById(element) {
    const text = document.getElementById(element).innerText;
    return text;
}
function playerNumber() {
    const playersList = document.querySelectorAll("#players-list li");
    const numberOfPlayers = playersList.length;
    return numberOfPlayers;
}
function setTextById(element, value) {
    document.getElementById(element).innerText = value;
}
function addList(text) {
    const players = playerNumber();
    if (players > 4) {
        alert("You can not add more than five players.");

    }
    else {
        const listTag = document.createElement("li");
        const textNode = document.createTextNode(text);
        listTag.appendChild(textNode);
        const playersList = document.getElementById("players-list");
        playersList.appendChild(listTag);
    }

}

function addDisabled(id, addedPlayers) {
    if (addedPlayers <= 5) {
        const element = document.getElementById(id);
        element.classList.add("disabled");
        element.classList.replace("btn-primary", "btn-secondary")
    }
}

function addPlayers(playerName, playersList) {
    playersList.push(playerName);
    return playersList.length;
}