document.getElementById("players-budget").addEventListener('click', function () {

    calculatePlayersExpense();

})

function calculatePlayersExpense() {
    const cardBody = document.getElementById("card-body")

    if (cardBody.children.length < 5) {
        return alert("You Must Select Five Players");

    }

    const perPlayerBudget = getValueById("per-player-budget");

    if (isNaN(perPlayerBudget)) {

        alert("Input A Proper Budget Amount In Numbers")
        setTextById("players-expenses", 0);

        return;

    }

    const totalPlayersExpenses = perPlayerBudget * 5;
    setTextById("players-expenses", totalPlayersExpenses)
    return totalPlayersExpenses;
}
