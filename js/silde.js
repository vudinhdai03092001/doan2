var listIndex = 0;
var list =  document.getElementsByClassName("imgbia");
for(x of list) {
    x.style.display = "none";
}
list[listIndex].style.display = "block";
function ShowLeft(){
    for(x of list) {
        x.style.display = "none";
    }
    if(listIndex == 0)
    {
        listIndex =  list.length-1;
    } else {
        listIndex = listIndex -1;
    } 
    list[listIndex].style.display = "block";
}
function ShowRight(){
    for(x of list) {
        x.style.display = "none";
    }
    if(listIndex == list.length-1)
    {
        listIndex =  0;
    } else {
        listIndex = listIndex + 1;
    } 
    list[listIndex].style.display = "block";
}

function addToCart(item) {
    debugger;
    item.quantity = 1;
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giở hàng thành công");
}



