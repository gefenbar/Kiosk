prices = { "שניצל": 25, "צ'יפס": 15, "המבורגר": 20, "קולה": 10 }
shopping_list = []
initApp()
function initApp() {
    order_check = []
    total_price = 0
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
        order_check[index] = product + ":" + prices[product]
        total_price += prices[product]
    }
    is_order_confirm = confirm(order_check + "\nסך הכל:" + total_price)
    if (is_order_confirm)
        alert("ההזמנה בוצעה בהצלחה")
    else
        alert("ההזמנה בוטלה")
    initApp()
}
function getUserInfo(user_name, user_number) {
    localStorage.setItem("name", user_name)
    localStorage.setItem("number", user_number)
}
function changeButtonBackgrond() {
    if (document.getElementById("full_name").value != '' && document.getElementById("phone_number").value != '')
        document.getElementById("submit_btn").style.backgroundColor = "#008000b3"
    else
        document.getElementById("submit_btn").style.backgroundColor = "#efefef"

}
