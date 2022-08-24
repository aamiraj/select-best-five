document.getElementById("calculate-btn").addEventListener("click", function () {
    const perPlayer = getValueByInputField("per-player");
    const players = playerNumber();

    const playerExpenses = players * perPlayer;

    setTextById("player-expenses", playerExpenses);
})

document.getElementById("total-btn").addEventListener("click", function () {
    const playerExpenses = getValueByTextField("player-expenses");
    const managerCost = getValueByInputField("manager");
    const coachCost = getValueByInputField("coach");

    const totalExpenses = playerExpenses + managerCost + coachCost;

    setTextById("total-expenses", totalExpenses);
})

const playersList = [];

document.getElementById("erling-haland-btn").addEventListener("click", function () {
    const text = getTextById("erling-haland");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("erling-haland-btn", addedPlayers);
})

document.getElementById("harry-kane-btn").addEventListener("click", function () {
    const text = getTextById("harry-kane");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("harry-kane-btn", addedPlayers);
})

document.getElementById("karim-benzema-btn").addEventListener("click", function () {
    const text = getTextById("karim-benzema");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("karim-benzema-btn", addedPlayers);
})

document.getElementById("kevin-bruyne-btn").addEventListener("click", function () {
    const text = getTextById("kevin-bruyne");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("kevin-bruyne-btn", addedPlayers);
})

document.getElementById("robert-lewandoski-btn").addEventListener("click", function () {
    const text = getTextById("robert-lewandoski");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("robert-lewandoski-btn", addedPlayers);
})

document.getElementById("sadio-mane-btn").addEventListener("click", function () {
    const text = getTextById("sadio-mane");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("sadio-mane-btn", addedPlayers);
})

document.getElementById("kylian-mbappe-btn").addEventListener("click", function () {
    const text = getTextById("kylian-mbappe");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("kylian-mbappe-btn", addedPlayers);
})

document.getElementById("lionel-messi-btn").addEventListener("click", function () {
    const text = getTextById("lionel-messi");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("lionel-messi-btn", addedPlayers);
})

document.getElementById("luka-modric-btn").addEventListener("click", function () {
    const text = getTextById("luka-modric");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("luka-modric-btn", addedPlayers);
})

document.getElementById("neymar-jr-btn").addEventListener("click", function () {
    const text = getTextById("neymar-jr");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("neymar-jr-btn", addedPlayers);
})

document.getElementById("ronaldo-btn").addEventListener("click", function () {
    const text = getTextById("ronaldo");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("ronaldo-btn", addedPlayers);
})

document.getElementById("salah-btn").addEventListener("click", function () {
    const text = getTextById("salah");
    const addedPlayers = addPlayers(text, playersList);
    addList(text);
    addDisabled("salah-btn", addedPlayers);
})