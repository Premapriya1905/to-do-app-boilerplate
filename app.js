var inputdata=document.getElementById("input");

var addButton=document.getElementById("button");

var todolist=document.getElementById("todolist");

var data=[];
addButton.addEventListener("click",addData);
function addData(){
    data.push(inputdata.value);
    console.log(data)
    inputdata.value=""
    toShowData();
}

function toShowData(){

    todolist.innerHTML=""
    data.forEach(function(item,index){
     console.log(item)
     todolist.innerHTML+=`<li>${item}<a onclick="editItem(${index})">Edit</a><a onclick="deleteItem(${index})">X |</a></li>`
    })
}

function deleteItem(index){
    data.splice(index,1)
    toShowData()
}

function editItem(index){
    var newValue=prompt("enter the new value")
    data.splice(index,1,newValue)
    toShowData();
}