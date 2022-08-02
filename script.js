initApp()
function initApp() {
    shopping_list = []
    get_out = false
}

function mark(tile) {
    if (tile.textContent === '-') {
        tile.textContent = "V"
        shopping_list.push(tile.name)
    }
    else {
        tile.textContent = '-'
        shopping_list.pop(tile.name)
    }
}

function order() {
    for (let index = 0; index < shopping_list.length; index++) {
        console.log(shopping_list[index])
    }
}
function windowClose() {
    window.open('','_parent','');
    window.close();
    }

