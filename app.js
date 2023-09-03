var bucketlist = []
var listContainer = document.querySelector("#list-container")
function addValues(){
    var value = document.querySelector("#input-field").value
    console.log("value: ", value);
    bucketlist.push(value)
    console.log("bucketlist: ", bucketlist);
    displayList()

}
function displayList(){
    listContainer.innerHTML=""
    for(let i = 0; i<bucketlist.length;i++){
        var li = document.createElement("li")
        li.innerHTML = bucketlist[i] + `<span> <img onclick= "remove('+i+')" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt = "tick"></span>`
        listContainer.append(li)
    }
}
function reset(){
    //for empty the bucket list
    bucketlist=[]
    displayList()
}
function remove(i){
    bucketlist.splice(i,1)
    displayList()
}
