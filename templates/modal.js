//Declaring variables
let addToBag = document.querySelector(".add1");
let addToBag2 = document.querySelector(".add2");
// Set items in local storage


addToBag.addEventListener("click", function () {
    let itemName = document.querySelector(".name1").innerHTML;
    let price1 = document.querySelector(".price1").innerHTML;
    localStorage.setItem("item_name1", itemName);
    localStorage.setItem("price1", price1);
})



addToBag2.addEventListener("click", function () {
    let itemName2 = document.querySelector(".name2").innerHTML;
    let price2 = document.querySelector(".price2").innerHTML;
    localStorage.setItem("item_name2", itemName2);
    localStorage.setItem("price2", price2);
});


