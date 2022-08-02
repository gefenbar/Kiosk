prices = { "שניצל": 25, "צ'יפס": 15, "המבורגר": 20, "קולה": 10 }
initApp()
function initApp() {
    shopping_list = []
    get_out = false
}

function mark(tile) {
    if (tile.textContent === '-') {
        tile.textContent = "V"
        document.getElementById(tile.id).style.color = "#008000b3";
        shopping_list.push(tile.name)
    }
    else {
        tile.textContent = '-'
        document.getElementById(tile.id).style.color = "transparent";
        shopping_list.pop(tile.name)
    }
}

function order() {
    for (let index = 0; index < shopping_list.length; index++) {
        product = shopping_list[index]
        console.log(product + ":" + prices[product])
    }
}


