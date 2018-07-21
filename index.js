var userItem = document.getElementById("itemText"),
    submitButton = document.getElementById("subButton"),
    results = document.getElementById("outText"),
    hotdog = 1.50,
    output = 0

var itemList = {"apple":2, "pho":10, "iphonex":1400, "tesla":75000}

submitButton.addEventListener("click",function(){
    compareItem(userItem.value)
})

userItem.addEventListener("keypress",function(ev){
    if(ev.keyCode == 13){
        compareItem(userItem.value)
    }
})

function compareItem(item){
    console.log(userItem.value)
    if(item in itemList){
        output = (itemList[userItem.value]/hotdog).toFixed(2)
        results.innerText = "The value of " + item + " is: " + output + " hotdogs."
    }
}