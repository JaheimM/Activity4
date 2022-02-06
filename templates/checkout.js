let placeItems = document.querySelector("#items");
let placePrice = document.querySelector("#price");


function addItems() {
    
    if (localStorage.getItem("item_name1") == null && localStorage.getItem("item_name2") == null) {
        placeItems.innerHTML = "There is nothing here."
    } else if (localStorage.getItem("item_name1") == null && localStorage.getItem("item_name2")) { 
        placeItems.innerHTML = localStorage.getItem("item_name2");
    } else if (localStorage.getItem("item_name2") == null && localStorage.getItem("item_name1")) {
        placeItems.innerHTML = localStorage.getItem("item_name1");
    }
    else {
        placeItems.innerHTML =
          localStorage.getItem("item_name1") +
          "<br>" +
          localStorage.getItem("item_name2");
    }
}

addItems();
