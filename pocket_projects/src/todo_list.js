const toDo = JSON.parse(window.localStorage.getItem("todo"))|| [];

const ourToDoUl = document.querySelector(".todos");
const ourToDoForm = document.querySelector(".add-todo-form");
const ourInput = document.getElementById('to-do-input')
const ourSubmit = document.getElementById("submit-id")


const addToDo = (e) =>{
    e.preventDefault();
    const toDoValue = ourInput.value;
    ourInput.value = "";
    toDo.push({toDoValue, done: false})
    window.localStorage.setItem("todo", JSON.stringify(toDo));
    populateUl();
}

const populateUl = function(){
    for(let i = 0; i < toDo.length; i++){
        const newListLi = document.createElement("li");
        const newLabel = document.createElement("label");
        newLabel.textContent = toDo[i].toDoValue;
        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        if(toDo[i].done){
            newCheckBox.setAttribute("checked", "");
        }
        newListLi.appendChild(newCheckBox);
        newListLi.append(newLabel);
        ourToDoUl.appendChild(newListLi);
    }
}
window.addToDo = addToDo;
window.toDo = toDo;
// const addOurToDoToOurUl = document.querySelector("")
ourToDoForm.addEventListener("submit", addToDo);
populateUl();





ourToDoUl.addEventListener("click", function (e) {
    if(e.target.nodeName !== "INPUT"){
        return;
    }
})


// for (var count in check_value) {
//     var newCheckBox = document.createElement('input');
//     newCheckBox.type = 'checkbox';
//     newCheckBox.id = 'ptworkinfo' + count; // need unique Ids!
//     newCheckBox.value = check_value[count] + '<br/>';

//     parentElement.appendChild(newCheckBox);
// }