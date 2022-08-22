let count = 0;
function selectPlayer(event) {
    count++
    const selectcard = document.getElementById("select-card");

    if (count <= 5) {

        // =======Button Disabled====
        const selectedBtn = event;
        selectedBtn.style.backgroundColor = "grey";
        selectedBtn.disabled = true;


        // ========Show Selected Player Name in Board======
        const selectedPlayerName = event.parentNode.children[0].innerText;
        const showSelectedPlayerName = document.createElement("ul");
        showSelectedPlayerName.className = "text-start";
        showSelectedPlayerName.style.listStyle = "none";

        showSelectedPlayerName.innerHTML =
            `
        <li class="my-4">${count}. ${selectedPlayerName}</li></ul>
        `
        selectcard.appendChild(showSelectedPlayerName);

    }
    else { alert("Already selected five Players") }


}