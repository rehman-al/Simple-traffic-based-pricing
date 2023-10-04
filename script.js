const range = document.getElementById("range")
var views = document.getElementById("gods");
var price = document.getElementById("price");
var toggelrange = document.getElementById("check");

function handleValueChange() {
    var val = range.value;
    var monthvalue = val * 5;
    var yearvalue = monthvalue * 3 / 4
    if (toggelrange.checked) {
        price.innerText = "$" + (yearvalue / 10 + 16)

    }
    else {

        price.innerText = "$" + (monthvalue / 10 + 16)
    }
    views.innerText = (val * 10) + 100 + "K pageviews";

}
range.addEventListener("change", handleValueChange);
toggelrange.addEventListener("change", handleValueChange);